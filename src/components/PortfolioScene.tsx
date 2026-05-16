import { useEffect, useRef, useState, type CSSProperties } from "react";
import * as THREE from "three";

type SceneProject = {
    title: string;
    genre: string;
    thumbnail: string;
    color: string;
};

interface PortfolioSceneProps {
    projectCount: number;
    categories: string[];
    featuredProjects?: SceneProject[];
}

type SceneFocus = {
    active: boolean;
    color: string;
    label: string;
};

const DEFAULT_COLOR = "#76f7ff";
const RESTING_LABEL = "LIVE INDEX";
const PALETTE = ["#76f7ff", "#d8ff38", "#ffffff", "#ff5a24", "#27302d"];
const BASE_TINT = new THREE.Color("#e6fdff");
const WATER_VERTEX_SHADER = `
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;
const WATER_FRAGMENT_SHADER = `
    precision highp float;

    uniform float uTime;
    uniform float uAspect;
    uniform float uThemeDark;
    uniform float uPointerPulse;
    uniform float uMotion;
    uniform vec2 uPointer;
    uniform vec3 uAccent;

    varying vec2 vUv;

    float lineMask(float value, float scale, float width) {
        float coord = abs(fract(value * scale) - 0.5);
        return 1.0 - smoothstep(0.0, width, coord);
    }

    void main() {
        vec2 p = (vUv - 0.5) * 2.0;
        p.x *= uAspect;

        vec2 pointer = uPointer;
        pointer.x *= uAspect;

        float routePulse = smoothstep(1.0, 2.2, uMotion);
        float pulse = max(uPointerPulse, routePulse * 0.7);
        float distanceToPointer = distance(p, pointer);
        float ripple = sin(distanceToPointer * 34.0 - uTime * (4.4 + pulse * 2.4));
        ripple *= exp(-distanceToPointer * (2.3 - pulse * 0.34));

        vec2 warp = vec2(
            ripple * 0.08 + sin(p.y * 3.0 + uTime * 0.56) * 0.026,
            ripple * 0.06 + cos(p.x * 2.4 - uTime * 0.42) * 0.024
        ) * (0.42 + pulse * 0.62);

        float slowSwell = sin((p.x * 1.25 + p.y * 0.8) + uTime * 0.5) * 0.035;
        vec2 q = p + warp + slowSwell;

        float thin = max(
            lineMask(q.x + sin(q.y * 2.2 + uTime * 0.24) * 0.032, 3.85, 0.020),
            lineMask(q.y + cos(q.x * 2.0 - uTime * 0.22) * 0.032, 3.85, 0.020)
        );
        float thick = max(
            lineMask(q.x + ripple * 0.026, 1.28, 0.027),
            lineMask(q.y - ripple * 0.022, 1.28, 0.027)
        );
        float rings = pow(max(0.0, sin(distanceToPointer * 43.0 - uTime * 6.0)), 3.0);
        rings *= exp(-distanceToPointer * 2.05) * pulse;
        float caustic = pow(0.5 + 0.5 * sin((q.x + q.y) * 5.0 + uTime * 1.2 + ripple * 2.0), 3.0);
        float velocity = lineMask(q.x * 0.58 - q.y * 0.18 + uTime * 0.18, 7.2, 0.012);
        velocity *= smoothstep(-1.2, 0.6, p.x) * (0.45 + pulse * 0.35);
        float trackEdge = lineMask(q.x * 0.42 + q.y * 0.55 - uTime * 0.08, 2.1, 0.018);
        trackEdge *= 0.5 + pulse * 0.18;

        float vignette = 1.0 - smoothstep(0.28, 1.85, length(p * vec2(0.76, 1.0)));
        float intensity = thin * 0.22 + thick * 0.38 + rings * 0.58 + caustic * 0.11 + velocity * 0.42 + trackEdge * 0.2;

        vec3 lightLine = vec3(0.06, 0.18, 0.34);
        vec3 darkLine = vec3(0.78, 0.9, 1.0);
        vec3 signalLine = vec3(1.0, 0.35, 0.12);
        vec3 limeLine = vec3(0.76, 1.0, 0.22);
        vec3 lineColor = mix(lightLine, darkLine, uThemeDark);
        lineColor = mix(lineColor, uAccent, 0.22 + pulse * 0.28);
        lineColor = mix(lineColor, signalLine, velocity * 0.26);
        lineColor = mix(lineColor, limeLine, trackEdge * 0.18);

        float alpha = clamp(intensity * vignette * (0.66 + uThemeDark * 0.24), 0.0, 0.86);
        gl_FragColor = vec4(lineColor, alpha);
    }
`;

export default function PortfolioScene({
    featuredProjects = [],
}: PortfolioSceneProps) {
    const mountRef = useRef<HTMLDivElement>(null);
    const focusRef = useRef<SceneFocus>({
        active: false,
        color: DEFAULT_COLOR,
        label: RESTING_LABEL,
    });
    const [focus, setFocus] = useState<SceneFocus>(focusRef.current);

    useEffect(() => {
        focusRef.current = focus;
    }, [focus]);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const reducedMotionQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: false,
            powerPreference: "low-power",
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.domElement.className = "portfolio-webgl-canvas";
        mount.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
        camera.position.set(0, 0.35, 9.6);

        const root = new THREE.Group();
        scene.add(root);

        const currentColor = new THREE.Color(DEFAULT_COLOR);
        const targetColor = new THREE.Color(DEFAULT_COLOR);
        const cardTint = new THREE.Color(DEFAULT_COLOR);
        const pointer = new THREE.Vector2(0, 0);
        const pointerTarget = new THREE.Vector2(0, 0);
        const startTime = performance.now();
        let frameId = 0;
        let focusPower = 0;
        let interactionPulse = 0;
        let themeMix = document.documentElement.classList.contains("dark") ? 1 : 0;
        let lastFrameTime = 0;
        const targetFrameDuration = window.innerWidth < 1280 ? 38 : 30;

        const ambient = new THREE.AmbientLight(0xffffff, 0.9);
        const keyLight = new THREE.PointLight(0xd8e6ff, 2.9, 18);
        const warmLight = new THREE.PointLight(0xffffff, 1.45, 18);
        keyLight.position.set(-4, 3.5, 5);
        warmLight.position.set(4, -3, 5);
        scene.add(ambient, keyLight, warmLight);

        const waveUniforms = {
            uTime: { value: 0 },
            uAspect: { value: 1 },
            uThemeDark: { value: themeMix },
            uPointerPulse: { value: 0 },
            uMotion: { value: 1 },
            uPointer: { value: new THREE.Vector2(0, 0) },
            uAccent: { value: new THREE.Color(DEFAULT_COLOR) },
        };
        const waveGeometry = new THREE.PlaneGeometry(24, 15, 1, 1);
        const waveMaterial = new THREE.ShaderMaterial({
            uniforms: waveUniforms,
            vertexShader: WATER_VERTEX_SHADER,
            fragmentShader: WATER_FRAGMENT_SHADER,
            transparent: true,
            depthWrite: false,
            depthTest: false,
        });
        const waveMesh = new THREE.Mesh(waveGeometry, waveMaterial);
        waveMesh.position.set(0.75, 0, -5.8);
        waveMesh.renderOrder = -20;
        scene.add(waveMesh);

        const textureLoader = new THREE.TextureLoader();
        const loadedTextures: THREE.Texture[] = [];
        const projects = featuredProjects.slice(0, 0);
        const cardGeometry = new THREE.PlaneGeometry(2.24, 1.26, 4, 2);
        const cards = projects.map((project, index) => {
            const color = new THREE.Color(project.color);
            const material = new THREE.MeshBasicMaterial({
                color: BASE_TINT,
                transparent: true,
                opacity: 0.2,
                side: THREE.DoubleSide,
                depthWrite: false,
            });
            const mesh = new THREE.Mesh(cardGeometry, material);
            const angle = (index / Math.max(projects.length, 1)) * Math.PI * 2;
            const radius = 3.6 + (index % 2) * 0.86;
            mesh.position.set(
                Math.cos(angle) * radius + 1.35,
                Math.sin(angle * 1.45) * 0.82,
                Math.sin(angle) * 1.85 - 0.35,
            );
            mesh.rotation.set(
                -0.08 + Math.sin(angle) * 0.18,
                -0.45 + Math.cos(angle) * 0.34,
                Math.sin(angle) * 0.18,
            );

            textureLoader.load(project.thumbnail, (texture) => {
                texture.colorSpace = THREE.SRGBColorSpace;
                texture.anisotropy = 1;
                loadedTextures.push(texture);
                material.map = texture;
                material.color.copy(BASE_TINT);
                material.opacity = 0.24;
                material.needsUpdate = true;
            });

            root.add(mesh);

            return {
                mesh,
                material,
                angle,
                radius,
                color,
                seed: Math.random() * Math.PI * 2,
            };
        });

        const shardGeometry = new THREE.PlaneGeometry(1, 1, 1, 1);
        const shardCount = 0;
        const shards = Array.from({ length: shardCount }, (_, index) => {
            const color = new THREE.Color(PALETTE[index % PALETTE.length]);
            const material = new THREE.MeshBasicMaterial({
                color,
                transparent: true,
                opacity: 0.12,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
            });
            const mesh = new THREE.Mesh(shardGeometry, material);
            const angle = (index / shardCount) * Math.PI * 2;
            mesh.position.set(
                Math.cos(angle) * (2.1 + (index % 4) * 0.58),
                -2.5 + (index % 6) * 0.92,
                Math.sin(angle) * 1.8 - 1.2,
            );
            mesh.scale.set(0.7 + (index % 4) * 0.22, 0.16 + (index % 3) * 0.08, 1);
            mesh.rotation.set(angle * 0.12, angle * 0.22, angle);
            root.add(mesh);

            return {
                mesh,
                material,
                angle,
                seed: Math.random() * Math.PI * 2,
            };
        });

        const particleCount = 0;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const particleSeeds = new Float32Array(particleCount);
        for (let index = 0; index < particleCount; index += 1) {
            const offset = index * 3;
            const color = new THREE.Color(PALETTE[index % PALETTE.length]);
            positions[offset] = (Math.random() - 0.5) * 8.8;
            positions[offset + 1] = (Math.random() - 0.5) * 5.4;
            positions[offset + 2] = -3.6 + Math.random() * 4.6;
            colors[offset] = color.r;
            colors[offset + 1] = color.g;
            colors[offset + 2] = color.b;
            particleSeeds[index] = Math.random();
        }
        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3),
        );
        particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        const particleMaterial = new THREE.PointsMaterial({
            size: 0.026,
            vertexColors: true,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        root.add(particles);

        const ribbonCount = 0;
        const ribbonPointCount = 52;
        const ribbonPoints = Array.from({ length: ribbonCount }, () =>
            Array.from({ length: ribbonPointCount }, () => new THREE.Vector3()),
        );
        const ribbons = ribbonPoints.map((points, index) => {
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({
                color: PALETTE[index % PALETTE.length],
                transparent: true,
                opacity: 0.34,
                blending: THREE.AdditiveBlending,
            });
            const line = new THREE.Line(geometry, material);
            root.add(line);

            return { line, geometry, material, index };
        });

        const resize = () => {
            const { width, height } = mount.getBoundingClientRect();
            const safeWidth = Math.max(width, 1);
            const safeHeight = Math.max(height, 1);
            renderer.setSize(safeWidth, safeHeight, false);
            camera.aspect = safeWidth / safeHeight;
            camera.updateProjectionMatrix();
            root.position.x = safeWidth >= 1024 ? 1.6 : 0.12;
            root.position.y = safeWidth >= 1024 ? 0.08 : -0.24;
            root.scale.setScalar(safeWidth >= 1024 ? 1.08 : 0.86);
            waveMesh.position.x = safeWidth >= 1024 ? 1.18 : 0;
            waveMesh.scale.setScalar(safeWidth >= 1024 ? 1.1 : 0.86);
            waveUniforms.uAspect.value = safeWidth / safeHeight;
        };

        const isSceneCalm = () => {
            const customWindow = window as Window & {
                __portfolioFxSuppressUntil?: number;
            };
            return (
                performance.now() < (customWindow.__portfolioFxSuppressUntil ?? 0) ||
                document.documentElement.dataset.fxCalm === "true"
            );
        };

        const onPointerMove = (event: PointerEvent) => {
            if (isSceneCalm()) return;

            pointerTarget.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointerTarget.y = -(event.clientY / window.innerHeight) * 2 + 1;
            interactionPulse = Math.min(interactionPulse + 0.45, 1.45);
        };

        const onPointerDown = (event: PointerEvent) => {
            onPointerMove(event);
            interactionPulse = 1.75;
        };

        const animate = () => {
            frameId = window.requestAnimationFrame(animate);
            const now = performance.now();
            const routeActive = Boolean(
                document.documentElement.dataset.routeTransition,
            );
            const calmActive = isSceneCalm();
            const frameDuration =
                calmActive
                    ? 180
                    : routeActive || interactionPulse > 0.08 || focusPower > 0.08
                    ? 28
                    : targetFrameDuration;

            if (document.hidden || now - lastFrameTime < frameDuration) {
                return;
            }

            lastFrameTime = now;
            const time = (now - startTime) / 1000;
            const reduced = reducedMotionQuery.matches;
            const motionScale = reduced || calmActive ? 0.08 : routeActive ? 0.9 : 0.72;
            const targetFocus = calmActive ? 0 : focusRef.current.active ? 1 : 0;
            focusPower += (targetFocus - focusPower) * 0.07;
            interactionPulse += (0 - interactionPulse) * (reduced ? 0.18 : 0.035);
            themeMix +=
                ((document.documentElement.classList.contains("dark") ? 1 : 0) -
                    themeMix) *
                0.08;

            targetColor.set(
                focusRef.current.active || routeActive
                    ? focusRef.current.color || DEFAULT_COLOR
                    : DEFAULT_COLOR,
            );
            currentColor.lerp(targetColor, 0.08);
            keyLight.color.copy(currentColor);
            pointer.x += (pointerTarget.x - pointer.x) * 0.06;
            pointer.y += (pointerTarget.y - pointer.y) * 0.06;
            waveUniforms.uTime.value = reduced ? 0 : time;
            waveUniforms.uPointer.value.copy(pointer);
            waveUniforms.uPointerPulse.value = interactionPulse;
            waveUniforms.uMotion.value = motionScale;
            waveUniforms.uThemeDark.value = themeMix;
            waveUniforms.uAccent.value.copy(currentColor);

            cards.forEach((card, index) => {
                const orbit = card.angle + time * 0.12 * motionScale;
                const depthPulse = Math.sin(time * 0.72 + card.seed) * 0.28;
                card.mesh.position.x =
                    Math.cos(orbit) * card.radius + 1.35 + pointer.x * 0.32;
                card.mesh.position.y =
                    Math.sin(orbit * 1.45 + card.seed) * 0.76 + pointer.y * 0.18;
                card.mesh.position.z = Math.sin(orbit) * 1.85 - 0.45 + depthPulse;
                card.mesh.rotation.y =
                    -0.45 + Math.cos(orbit) * 0.42 + pointer.x * 0.06;
                card.mesh.rotation.z =
                    Math.sin(orbit + card.seed) * 0.2 + pointer.y * 0.04;
                cardTint.copy(BASE_TINT).lerp(
                    currentColor,
                    Math.min(focusPower * 0.85 + (routeActive ? 0.18 : 0), 1),
                );
                card.material.color.copy(cardTint);
                card.material.opacity =
                    0.2 + focusPower * 0.16 + (routeActive ? 0.12 : 0);
            });

            shards.forEach((shard, index) => {
                const spin = time * (0.2 + index * 0.012) * motionScale + shard.seed;
                shard.mesh.rotation.z = shard.angle + spin;
                shard.mesh.rotation.y = Math.sin(spin) * 0.7;
                shard.mesh.position.x +=
                    (Math.cos(spin) * 0.015 * motionScale + pointer.x * 0.002);
                shard.material.color.copy(
                    index % 3 === 0 && (focusPower > 0.05 || routeActive)
                        ? currentColor
                        : new THREE.Color(PALETTE[index % PALETTE.length]),
                );
                shard.material.opacity = 0.08 + focusPower * 0.1 + (routeActive ? 0.06 : 0);
            });

            ribbons.forEach(({ geometry, material, index }) => {
                const position = geometry.getAttribute(
                    "position",
                ) as THREE.BufferAttribute;
                const array = position.array as Float32Array;
                for (let point = 0; point < ribbonPointCount; point += 1) {
                    const offset = point * 3;
                    const progress = point / (ribbonPointCount - 1);
                    const sweep = progress * Math.PI * 2;
                    const waveTime = time * (0.7 + index * 0.08) * motionScale;
                    const radius = 1.5 + index * 0.36 + Math.sin(waveTime + sweep) * 0.16;
                    array[offset] =
                        Math.cos(sweep + waveTime * 0.42) * radius +
                        1.1 +
                        pointer.x * 0.25;
                    array[offset + 1] =
                        (progress - 0.5) * 4.8 +
                        Math.sin(waveTime + sweep * 1.6) * 0.36 +
                        pointer.y * 0.16;
                    array[offset + 2] =
                        Math.sin(sweep + waveTime * 0.52) * 1.1 -
                        1.2 +
                        Math.cos(waveTime + progress * 4) * 0.28;
                }
                position.needsUpdate = true;
                material.color.copy(
                    index === 0 && (focusPower > 0.05 || routeActive)
                        ? currentColor
                        : new THREE.Color(PALETTE[index]),
                );
                material.opacity = 0.18 + focusPower * 0.14 + (routeActive ? 0.12 : 0);
            });

            const position = particleGeometry.getAttribute(
                "position",
            ) as THREE.BufferAttribute;
            const positionArray = position.array as Float32Array;
            for (let index = 0; index < particleCount; index += 1) {
                const offset = index * 3;
                positionArray[offset + 1] +=
                    (0.002 + particleSeeds[index] * 0.008) * motionScale;
                positionArray[offset] +=
                    Math.sin(time + particleSeeds[index] * 9) * 0.0015 * motionScale;
                if (positionArray[offset + 1] > 3.2) {
                    positionArray[offset + 1] = -3.2;
                }
            }
            position.needsUpdate = true;
            particleMaterial.opacity = 0.28 + focusPower * 0.14 + (routeActive ? 0.1 : 0);
            particleMaterial.size = 0.024 + focusPower * 0.01 + (routeActive ? 0.012 : 0);

            root.rotation.y =
                Math.sin(time * 0.16 * motionScale) * 0.14 + pointer.x * 0.08;
            root.rotation.x = pointer.y * 0.04;
            camera.position.x += (pointer.x * 0.32 - camera.position.x) * 0.035;
            camera.position.y +=
                (0.35 + pointer.y * 0.18 - camera.position.y) * 0.035;
            camera.lookAt(1.15, 0, -0.8);

            renderer.render(scene, camera);
        };

        window.addEventListener("pointermove", onPointerMove, { passive: true });
        window.addEventListener("pointerdown", onPointerDown, { passive: true });
        window.addEventListener("resize", resize);
        resize();
        animate();

        return () => {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("resize", resize);
            scene.traverse((object) => {
                const item = object as THREE.Mesh | THREE.Points | THREE.Line;
                item.geometry?.dispose();
                const material = item.material;
                if (Array.isArray(material)) {
                    material.forEach((entry) => entry.dispose());
                } else {
                    material?.dispose();
                }
            });
            loadedTextures.forEach((texture) => texture.dispose());
            renderer.dispose();
            renderer.domElement.remove();
        };
    }, [featuredProjects]);

    useEffect(() => {
        const focusTargets = Array.from(
            document.querySelectorAll<HTMLElement>("[data-scene-project]"),
        );

        const onFocusEnter = (event: Event) => {
            const target = event.currentTarget as HTMLElement;
            setFocus({
                active: true,
                color: target.dataset.sceneColor || DEFAULT_COLOR,
                label:
                    target.dataset.sceneTitle ||
                    target.dataset.sceneGenre ||
                    RESTING_LABEL,
            });
        };

        const onFocusLeave = () => {
            setFocus({
                active: false,
                color: DEFAULT_COLOR,
                label: RESTING_LABEL,
            });
        };

        focusTargets.forEach((target) => {
            target.addEventListener("mouseenter", onFocusEnter);
            target.addEventListener("mouseleave", onFocusLeave);
        });

        return () => {
            focusTargets.forEach((target) => {
                target.removeEventListener("mouseenter", onFocusEnter);
                target.removeEventListener("mouseleave", onFocusLeave);
            });
        };
    }, []);

    return (
        <div
            className="portfolio-scene-layer portfolio-design-field"
            style={{ "--scene-accent": focus.color } as CSSProperties}
            data-focused={focus.active.toString()}
            aria-hidden="true"
        >
            <div ref={mountRef} className="portfolio-webgl-mount" />
        </div>
    );
}
