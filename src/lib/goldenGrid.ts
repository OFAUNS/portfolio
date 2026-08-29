/**
 * 黃金比例方格分割。
 *
 * 從整個畫面開始，每一步沿著螺旋方向切下一個「填滿短邊」的正方形，
 * 剩下的矩形再切下一個，方格因此由大到小排列。切割方向依序是
 * 右 → 下 → 左 → 上，這是黃金螺旋的標準構造。
 *
 * 切割一律在一個「正好是 φ 比例」的盒子裡進行，方格邊長因此是
 * 1、1/φ、1/φ²… 的等比遞減。盒子再用 cover 的方式蓋滿視窗
 * （見 CSS 的 .golden-grid），所以視窗比例不會破壞黃金比例本身——
 * 若直接拿視窗比例來切，16:9 會退化成輾轉相除，切出一連串同樣大小的
 * 方格，那不是黃金螺旋。
 */

export const PHI = 1.618033988749895;

export type GoldenRole = "stage" | "field" | "chip";

export type GoldenCell = {
    /** 對應 CSS 的 view-transition-name（gg-0 最大，數字越大越小）。 */
    id: string;
    index: number;
    /** 百分比座標，直接餵給 inline style。 */
    x: number;
    y: number;
    size: number;
    /** 方格佔畫面短邊的比例，1 為最大格。 */
    scale: number;
    role: GoldenRole;
};

type Rect = { x: number; y: number; w: number; h: number };

const SIDES = ["right", "bottom", "left", "top"] as const;
type Side = (typeof SIDES)[number];

const isHorizontalCut = (side: Side) => side === "left" || side === "right";

/** 方格上限。CSS 針對 gg-0 ~ gg-7 各寫了一組轉場節奏，超過就沒有對應規則。 */
export const MAX_CELLS = 8;

export type GoldenPreset = {
    /** 切幾刀。 */
    depth: number;
    /** 從哪一邊開始切（決定最大格落在畫面的哪一側）。 */
    start: Side;
    /** 1 為順時針，-1 為逆時針。 */
    spin: 1 | -1;
    /** 哪幾格要跑背景動態。 */
    fieldCells: number[];
    /** 主進程（內容）對齊到第幾格的邊界。 */
    stageCell: number;
};

export const GOLDEN_PRESETS: Record<string, GoldenPreset> = {
    // 首頁：最大格留在右側，內容從左邊起跑，背景動態貼著第二、三格
    home: { depth: 6, start: "right", spin: 1, fieldCells: [1, 2], stageCell: 0 },
    // 作品頁：最大格移到左側，讓右側碎格對應作品的分段閱讀節奏
    case: { depth: 7, start: "left", spin: -1, fieldCells: [2, 3], stageCell: 0 },
    // 關於頁：切得淺，方格大、留白多
    about: { depth: 4, start: "bottom", spin: 1, fieldCells: [1], stageCell: 0 },
    // 404 之類的次要頁：最少的結構
    minimal: { depth: 3, start: "top", spin: 1, fieldCells: [1], stageCell: 0 },
};

export const resolvePreset = (name: string | undefined): GoldenPreset =>
    (name && GOLDEN_PRESETS[name]) || GOLDEN_PRESETS.minimal;

/** 把 φ 盒子切成一串由大到小的正方形，座標為盒子的百分比。 */
export const buildGoldenCells = (preset: GoldenPreset): GoldenCell[] => {
    const aspect = PHI;
    const depth = Math.min(preset.depth, MAX_CELLS);
    const cells: GoldenCell[] = [];

    let rect: Rect = { x: 0, y: 0, w: aspect, h: 1 };
    let sideIndex = SIDES.indexOf(preset.start);

    for (let index = 0; index < depth; index += 1) {
        const landscape = rect.w >= rect.h;

        // φ 盒子裡切完永遠是 φ 盒子，方向本來就會交替，
        // 這個迴圈只是防止 preset 給了對不上的起始邊而空轉。
        let guard = 0;
        while (isHorizontalCut(SIDES[((sideIndex % 4) + 4) % 4]) !== landscape) {
            sideIndex += preset.spin;
            guard += 1;
            if (guard > 4) break;
        }

        const side = SIDES[((sideIndex % 4) + 4) % 4];
        const size = Math.min(rect.w, rect.h);
        let cell: Rect;

        if (side === "right") {
            cell = { x: rect.x + rect.w - size, y: rect.y, w: size, h: size };
            rect = { x: rect.x, y: rect.y, w: rect.w - size, h: rect.h };
        } else if (side === "left") {
            cell = { x: rect.x, y: rect.y, w: size, h: size };
            rect = { x: rect.x + size, y: rect.y, w: rect.w - size, h: rect.h };
        } else if (side === "bottom") {
            cell = { x: rect.x, y: rect.y + rect.h - size, w: size, h: size };
            rect = { x: rect.x, y: rect.y, w: rect.w, h: rect.h - size };
        } else {
            cell = { x: rect.x, y: rect.y, w: size, h: size };
            rect = { x: rect.x, y: rect.y + size, w: rect.w, h: rect.h - size };
        }

        sideIndex += preset.spin;

        cells.push({
            id: `gg-${index}`,
            index,
            x: (cell.x / aspect) * 100,
            y: cell.y * 100,
            size: (cell.w / aspect) * 100,
            scale: cell.w,
            role: preset.fieldCells.includes(index)
                ? "field"
                : index === preset.stageCell
                  ? "stage"
                  : "chip",
        });

        if (rect.w <= 0.0001 || rect.h <= 0.0001) break;
    }

    return cells;
};

/** 螺旋弧線的一段：一個方格內的四分之一圓。 */
export type GoldenArc = {
    index: number;
    /** SVG path，座標系為 viewBox 0 0 1618 1000。 */
    d: string;
    /** 弧長，用來設 stroke-dasharray。 */
    length: number;
};

/** 弧線用的 viewBox 尺寸；1618 : 1000 就是 φ，所以方格在裡面是真的正方形。 */
export const SPIRAL_VIEWBOX = { w: 1618, h: 1000 };

type Pt = [number, number];

const sub = (a: Pt, b: Pt): Pt => [a[0] - b[0], a[1] - b[1]];
const near = (a: number, b: number) => Math.abs(a - b) < 0.5;
const samePoint = (a: Pt, b: Pt) => near(a[0], b[0]) && near(a[1], b[1]);
/**
 * 兩個向量是否共線（同向或反向）。
 * 外積必須除以兩個長度再比：外積大小會隨向量長度放大，用絕對門檻的話
 * 座標 0.1px 的捨入誤差乘上邊長就足以被誤判成不平行。
 */
const parallel = (a: Pt, b: Pt) => {
    const scale = Math.hypot(a[0], a[1]) * Math.hypot(b[0], b[1]);
    if (scale === 0) return false;
    return Math.abs(a[0] * b[1] - a[1] * b[0]) / scale < 0.01;
};

/**
 * 沿著方格串出黃金螺旋。
 *
 * 每一格裡畫一個四分之一圓，圓心必定是該格的某個角。挑哪個角不能亂選：
 * 進入點 P 只有兩個相鄰角可以當圓心，其中只有一個會讓新弧線在 P 處的
 * 切線與前一段一致（半徑向量共線 ⇔ 切線共線），選錯就會在接點折斷。
 */
export const buildGoldenSpiral = (cells: GoldenCell[]): GoldenArc[] => {
    if (cells.length === 0) return [];

    const rects = cells.map((cell) => {
        const x = (cell.x / 100) * SPIRAL_VIEWBOX.w;
        const y = (cell.y / 100) * SPIRAL_VIEWBOX.h;
        const s = (cell.size / 100) * SPIRAL_VIEWBOX.w;
        return { x, y, s, corners: [[x, y], [x + s, y], [x + s, y + s], [x, y + s]] as Pt[] };
    });

    const arcs: GoldenArc[] = [];
    let entry: Pt | null = null;
    let prevCentre: Pt | null = null;

    for (let i = 0; i < rects.length; i += 1) {
        const { s, corners } = rects[i];
        let centre: Pt;
        let from: Pt;

        if (entry === null || prevCentre === null) {
            // 第一格沒有前一段可以對切線，改用另一個約束：弧線必須「收」在
            // 與下一格共用的那個角，鏈條才接得下去。圓心是該角的兩個相鄰角
            // 之一，取離下一格較近的那個，弧線才會往內捲而不是往外甩。
            const next = rects[1];
            if (!next) break;

            const shared = corners.find((corner) =>
                next.corners.some((other) => samePoint(corner, other)),
            );
            if (!shared) break;

            const nextCentre: Pt = [next.x + next.s / 2, next.y + next.s / 2];
            const adjacent = corners.filter(
                (corner) =>
                    !samePoint(corner, shared) && near(Math.hypot(...sub(corner, shared)), s),
            );
            centre = adjacent.reduce((best, corner) =>
                Math.hypot(...sub(corner, nextCentre)) < Math.hypot(...sub(best, nextCentre))
                    ? corner
                    : best,
            );
            from = corners.find(
                (corner) =>
                    !samePoint(corner, centre) &&
                    !samePoint(corner, shared) &&
                    near(Math.hypot(...sub(corner, centre)), s),
            )!;
        } else {
            const incoming = sub(entry, prevCentre);
            const candidates = corners.filter(
                (corner) =>
                    !samePoint(corner, entry as Pt) &&
                    near(Math.hypot(...sub(entry as Pt, corner)), s),
            );
            const picked = candidates.find((corner) => parallel(sub(entry as Pt, corner), incoming));
            if (!picked) break;
            centre = picked;
            from = entry;
        }

        const to = corners.find(
            (corner) =>
                !samePoint(corner, centre) &&
                !samePoint(corner, from) &&
                near(Math.hypot(...sub(corner, centre)), s),
        );
        if (!to) break;

        // 用外積決定 SVG 的 sweep-flag（y 軸向下，所以正的外積是順時針）
        const a = sub(from, centre);
        const b = sub(to, centre);
        const sweep = a[0] * b[1] - a[1] * b[0] > 0 ? 1 : 0;

        arcs.push({
            index: i,
            d: `M ${from[0].toFixed(2)} ${from[1].toFixed(2)} A ${s.toFixed(2)} ${s.toFixed(2)} 0 0 ${sweep} ${to[0].toFixed(2)} ${to[1].toFixed(2)}`,
            length: (Math.PI / 2) * s,
        });

        entry = to;
        prevCentre = centre;
    }

    return arcs;
};
