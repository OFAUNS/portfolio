/**
 * 全站水波場：單一 requestAnimationFrame 驅動的 Canvas 2D 波形模擬。
 *
 * 用經典雙緩衝阻尼波方程推進高度場，再取斜率做高光，畫出會互相干涉的水面。
 * 所有水波效果共用這裡的 ticker，避免各自排程的迴圈互搶 frame budget。
 */

const CELL = 8; // 每個模擬格對應的螢幕像素，越小越細緻也越吃效能
const DAMPING = 0.988; // 波能衰減，越接近 1 波紋活得越久、擴散得越遠
const IDLE_ENERGY = 0.0006; // 低於此平均能量視為靜止，停止繪製省電
const AMBIENT_INTERVAL = 1500; // 無互動時自發漣漪的間隔（毫秒）

const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------------ *
 * 共用 ticker
 * ------------------------------------------------------------------ */

const createTicker = () => {
    const subscribers = new Set();
    let frame = 0;
    let last = 0;

    const loop = (now) => {
        frame = subscribers.size ? window.requestAnimationFrame(loop) : 0;

        // 以 60fps 為基準的相對步長，掉幀時波形推進速度才不會跟著變慢
        const dt = last ? Math.min((now - last) / 16.667, 3) : 1;
        last = now;

        subscribers.forEach((fn) => fn(now, dt));
    };

    return {
        add(fn) {
            subscribers.add(fn);

            if (!frame) {
                last = 0;
                frame = window.requestAnimationFrame(loop);
            }

            return () => {
                subscribers.delete(fn);
                if (!subscribers.size && frame) {
                    window.cancelAnimationFrame(frame);
                    frame = 0;
                }
            };
        },
        stop() {
            subscribers.clear();
            if (frame) {
                window.cancelAnimationFrame(frame);
                frame = 0;
            }
        },
    };
};

export const ticker = createTicker();

/* ------------------------------------------------------------------ *
 * 波場
 * ------------------------------------------------------------------ */

const readAccent = () => {
    const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--scene-accent")
        .trim();

    // --scene-accent 可能是 oklch()，交給瀏覽器換算成 rgb 再讀回來
    if (!raw) return [118, 247, 255];

    const probe = document.createElement("span");
    probe.style.cssText = `color:${raw};position:absolute;opacity:0`;
    document.body.appendChild(probe);
    const parsed = getComputedStyle(probe).color.match(/[\d.]+/g);
    probe.remove();

    return parsed ? parsed.slice(0, 3).map(Number) : [118, 247, 255];
};

const createWaterField = (canvas) => {
    const ctx = canvas.getContext("2d", { alpha: true });
    const grid = document.createElement("canvas");
    const gridCtx = grid.getContext("2d", { alpha: true });

    let cols = 0;
    let rows = 0;
    let prev = new Float32Array(0);
    let next = new Float32Array(0);
    let image = null;
    let energy = 0;
    let idle = true;
    let accent = [118, 247, 255];

    // 指標位置只在 ticker 內消化，不在事件裡做任何運算
    let pointer = { x: 0, y: 0, prevX: 0, prevY: 0, active: false, moved: false };
    let lastAmbient = 0;

    const resize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // 波場本來就是軟邊，用 1x 解析度再放大即可，省下大量填色成本
        canvas.width = width;
        canvas.height = height;

        cols = Math.max(8, Math.ceil(width / CELL) + 2);
        rows = Math.max(8, Math.ceil(height / CELL) + 2);

        grid.width = cols;
        grid.height = rows;

        prev = new Float32Array(cols * rows);
        next = new Float32Array(cols * rows);
        image = gridCtx.createImageData(cols, rows);
        accent = readAccent();
    };

    const wake = () => {
        idle = false;
    };

    /** 在畫面座標打一滴水。strength 為波幅，radius 為影響半徑（格）。 */
    const drop = (clientX, clientY, strength = 1, radius = 2) => {
        if (!cols || prefersReducedMotion()) return;

        const cx = Math.round(clientX / CELL);
        const cy = Math.round(clientY / CELL);

        for (let y = -radius; y <= radius; y += 1) {
            for (let x = -radius; x <= radius; x += 1) {
                const gx = cx + x;
                const gy = cy + y;
                if (gx < 1 || gy < 1 || gx >= cols - 1 || gy >= rows - 1) continue;

                const distance = Math.sqrt(x * x + y * y);
                if (distance > radius) continue;

                prev[gy * cols + gx] += strength * (1 - distance / (radius + 0.001));
            }
        }

        wake();
    };

    const step = (dt) => {
        const damp = DAMPING ** dt;
        let total = 0;

        for (let y = 1; y < rows - 1; y += 1) {
            const row = y * cols;

            for (let x = 1; x < cols - 1; x += 1) {
                const i = row + x;
                let value =
                    (prev[i - 1] + prev[i + 1] + prev[i - cols] + prev[i + cols]) * 0.5 -
                    next[i];

                value *= damp;
                next[i] = value;
                total += value < 0 ? -value : value;
            }
        }

        const swap = prev;
        prev = next;
        next = swap;

        energy = total / (cols * rows);
    };

    const render = () => {
        const data = image.data;

        for (let y = 1; y < rows - 1; y += 1) {
            const row = y * cols;

            for (let x = 1; x < cols - 1; x += 1) {
                const i = row + x;
                const height = prev[i];

                // 斜率當作法線近似，做出被光打到的波峰
                const slope =
                    (prev[i - 1] - prev[i + 1] + (prev[i - cols] - prev[i + cols])) * 0.5;

                const absHeight = height < 0 ? -height : height;
                const absSlope = slope < 0 ? -slope : slope;
                const glow = absHeight * 0.7 + absSlope * 2.6;
                if (glow < 0.002) {
                    data[i * 4 + 3] = 0;
                    continue;
                }

                const spec = slope > 0 ? slope * 2.4 : 0;
                const offset = i * 4;

                // Uint8ClampedArray 會自動夾在 0-255，不必手動 clamp
                data[offset] = accent[0] + spec * 120;
                data[offset + 1] = accent[1] + spec * 60;
                data[offset + 2] = accent[2] + spec * 30;
                data[offset + 3] = glow * 300;
            }
        }

        gridCtx.putImageData(image, 0, 0);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.globalCompositeOperation = "lighter";
        ctx.drawImage(grid, 0, 0, canvas.width, canvas.height);
    };

    const frame = (now, dt) => {
        if (document.hidden || prefersReducedMotion()) return;

        // 指標拖曳出來的連續尾波：沿路徑補點，滑鼠移動快時不會斷成一顆一顆，
        // 且不設最低速度門檻——只要在動就留下水痕，這是「滑鼠跟隨水波」的主體效果。
        if (pointer.moved) {
            const dx = pointer.x - pointer.prevX;
            const dy = pointer.y - pointer.prevY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const speed = Math.min(1, distance / 90);
            const strength = 1.8 + speed * 3.4;
            const stepPx = 14;
            const steps = Math.max(1, Math.min(24, Math.ceil(distance / stepPx)));

            for (let i = 1; i <= steps; i += 1) {
                const t = i / steps;
                drop(
                    pointer.prevX + dx * t,
                    pointer.prevY + dy * t,
                    strength,
                    4,
                );
            }

            pointer.prevX = pointer.x;
            pointer.prevY = pointer.y;
            pointer.moved = false;
        }

        // 沒人互動時也讓水面保持呼吸
        if (now - lastAmbient > AMBIENT_INTERVAL) {
            lastAmbient = now;
            drop(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight,
                0.5,
                3,
            );
        }

        if (idle) return;

        step(dt);
        render();

        if (energy < IDLE_ENERGY) {
            idle = true;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    };

    const onPointerMove = (event) => {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
        pointer.moved = true;

        if (!pointer.active) {
            pointer.active = true;
            pointer.prevX = pointer.x;
            pointer.prevY = pointer.y;
        }
    };

    const onPointerDown = (event) => {
        drop(event.clientX, event.clientY, 3.2, 4);
    };

    const onResize = () => {
        resize();
        wake();
    };

    resize();

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("resize", onResize);

    const unsubscribe = ticker.add(frame);

    return {
        drop,
        /** 以視窗百分比座標打水，供轉場等不知道實際像素的呼叫端使用。 */
        dropAtRatio(ratioX, ratioY, strength, radius) {
            drop(
                ratioX * window.innerWidth,
                ratioY * window.innerHeight,
                strength,
                radius,
            );
        },
        refreshAccent() {
            accent = readAccent();
        },
        destroy() {
            unsubscribe();
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("resize", onResize);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        },
    };
};

/* ------------------------------------------------------------------ *
 * 啟動
 * ------------------------------------------------------------------ */

let field = null;

export const water = {
    mount() {
        if (field) return field;

        const canvas = document.getElementById("water-field");
        if (!canvas || prefersReducedMotion()) return null;

        field = createWaterField(canvas);
        return field;
    },
    drop(x, y, strength, radius) {
        field?.drop(x, y, strength, radius);
    },
    dropAtRatio(x, y, strength, radius) {
        field?.dropAtRatio(x, y, strength, radius);
    },
    refreshAccent() {
        field?.refreshAccent();
    },
    destroy() {
        field?.destroy();
        field = null;
    },
};
