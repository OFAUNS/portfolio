import { water, ticker } from "./water-field.js";

            (() => {
                const cleanupKey = "__portfolioFxCleanup";

                const suppressMotion = (duration = 1100) => {
                    const root = document.documentElement;
                    const until = performance.now() + duration;
                    window.__portfolioFxSuppressUntil = until;
                    root.dataset.fxCalm = "true";

                    if (window.__portfolioFxCalmTimer) {
                        window.clearTimeout(window.__portfolioFxCalmTimer);
                    }

                    window.__portfolioFxCalmTimer = window.setTimeout(() => {
                        if (performance.now() >= window.__portfolioFxSuppressUntil) {
                            delete root.dataset.fxCalm;
                        }
                    }, duration + 60);
                };

                const isMotionSuppressed = () =>
                    performance.now() < (window.__portfolioFxSuppressUntil || 0) ||
                    document.documentElement.dataset.fxCalm === "true";

                const setupInputMode = () => {
                    const root = document.documentElement;

                    const onKeyDown = (event) => {
                        if (event.metaKey || event.ctrlKey || event.altKey) return;

                        root.dataset.inputMode = "keyboard";
                        suppressMotion(
                            ["Tab", "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)
                                ? 1400
                                : 900,
                        );
                    };

                    const onPointerDown = () => {
                        root.dataset.inputMode = "pointer";
                        delete root.dataset.fxCalm;
                        window.__portfolioFxSuppressUntil = 0;

                        if (window.__portfolioFxCalmTimer) {
                            window.clearTimeout(window.__portfolioFxCalmTimer);
                            window.__portfolioFxCalmTimer = 0;
                        }
                    };

                    document.addEventListener("keydown", onKeyDown, true);
                    window.addEventListener("pointerdown", onPointerDown, {
                        passive: true,
                    });

                    return () => {
                        document.removeEventListener("keydown", onKeyDown, true);
                        window.removeEventListener("pointerdown", onPointerDown);
                    };
                };

                const setupParticles = () => {
                    const container = document.getElementById("ambient-particles");
                    if (!container) return () => {};

                    container.innerHTML = "";
                    const particleCount = window.matchMedia("(max-width: 768px)").matches
                        ? 4
                        : 7;

                    for (let index = 0; index < particleCount; index += 1) {
                        const particle = document.createElement("span");
                        particle.className = "particle";
                        particle.style.left = `${Math.random() * 100}%`;
                        particle.style.width = `${2 + Math.random() * 4}px`;
                        particle.style.height = particle.style.width;
                        particle.style.opacity = `${0.08 + Math.random() * 0.16}`;
                        particle.style.animationDelay = `${Math.random() * 8}s`;
                        particle.style.animationDuration = `${10 + Math.random() * 12}s`;
                        container.appendChild(particle);
                    }

                    return () => {
                        container.innerHTML = "";
                    };
                };

                const setupScrollReveal = () => {
                    const selectors = [
                        "main h2",
                        "main h3",
                        "main h4",
                        "main h5",
                        "main h6",
                        "main .portfolio-project",
                        "main img",
                        "main .aspect-video",
                    ].join(", ");

                    const targets = Array.from(document.querySelectorAll(selectors)).filter(
                        (element) => {
                            if (element.classList.contains("scroll-reveal-ignore")) {
                                return false;
                            }

                            const project = element.closest(".portfolio-project");
                            return !project || project === element;
                        },
                    );

                    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                        targets.forEach((element) => element.classList.add("is-revealed"));
                        return () => {};
                    }

                    targets.forEach((element, index) => {
                        const rect = element.getBoundingClientRect();
                        const initiallyVisible =
                            rect.top <= window.innerHeight * 0.96 && rect.bottom >= -80;

                        element.classList.add("scroll-reveal");
                        if (initiallyVisible) {
                            element.classList.add("is-revealed");
                            return;
                        }

                        if (!element.style.getPropertyValue("--reveal-delay")) {
                            const delay = Math.min((index % 6) * 70, 350);
                            element.style.setProperty("--reveal-delay", `${delay}ms`);
                        }
                    });

                    let observer = null;
                    const revealElement = (element) => {
                        element.classList.add("is-revealed");
                        if (observer) {
                            observer.unobserve(element);
                        }
                    };

                    const revealVisibleElements = () => {
                        const triggerPoint = window.innerHeight * 0.98;
                        targets.forEach((element) => {
                            if (element.classList.contains("is-revealed")) return;

                            const rect = element.getBoundingClientRect();
                            if (rect.top <= triggerPoint && rect.bottom >= -80) {
                                revealElement(element);
                            }
                        });
                    };

                    let ticking = false;
                    const scheduleReveal = () => {
                        if (ticking) return;
                        ticking = true;
                        window.requestAnimationFrame(() => {
                            revealVisibleElements();
                            ticking = false;
                        });
                    };

                    const cleanupFallbackListeners = [];

                    if ("IntersectionObserver" in window) {
                        observer = new IntersectionObserver(
                            (entries) => {
                                entries.forEach((entry) => {
                                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                                        revealElement(entry.target);
                                    }
                                });
                            },
                            {
                                rootMargin: "0px 0px -4% 0px",
                                threshold: 0.01,
                            },
                        );

                        targets.forEach((element) => {
                            if (!element.classList.contains("is-revealed")) {
                                observer.observe(element);
                            }
                        });
                    } else {
                        const timers = [
                            window.setTimeout(revealVisibleElements, 80),
                            window.setTimeout(revealVisibleElements, 360),
                            window.setTimeout(revealVisibleElements, 900),
                        ];

                        window.requestAnimationFrame(revealVisibleElements);
                        window.addEventListener("scroll", scheduleReveal, { passive: true });
                        window.addEventListener("resize", scheduleReveal);
                        window.addEventListener("load", revealVisibleElements);

                        cleanupFallbackListeners.push(() => {
                            timers.forEach((timer) => window.clearTimeout(timer));
                            window.removeEventListener("scroll", scheduleReveal);
                            window.removeEventListener("resize", scheduleReveal);
                            window.removeEventListener("load", revealVisibleElements);
                        });
                    }

                    return () => {
                        if (observer) {
                            observer.disconnect();
                        }
                        cleanupFallbackListeners.forEach((cleanup) => cleanup());
                    };
                };

                const setupPageInteractions = () => {
                    const cleanups = [];
                    const portfolioHome = document.querySelector(".portfolio-home");
                    const clickLens = document.querySelector(".portfolio-click-lens");
                    const canUsePointerEffects =
                        window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
                        !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

                    const textWipes = Array.from(
                        document.querySelectorAll(".portfolio-text-wipe"),
                    );

                    if (textWipes.length) {
                        const wipeTimers = [];
                        const reducedMotion = window.matchMedia(
                            "(prefers-reduced-motion: reduce)",
                        ).matches;

                        textWipes.forEach((element) => {
                            element.classList.remove("is-wipe-ready");

                            if (reducedMotion) {
                                element.classList.add("is-wipe-ready");
                                return;
                            }

                            const delay = window
                                .getComputedStyle(element)
                                .getPropertyValue("--wipe-delay")
                                .trim();
                            const delayMs = delay.endsWith("ms")
                                ? Number.parseFloat(delay)
                                : delay.endsWith("s")
                                  ? Number.parseFloat(delay) * 1000
                                  : Number.parseFloat(delay) || 0;

                            const timer = window.setTimeout(() => {
                                element.classList.add("is-wipe-ready");
                            }, Math.max(0, delayMs));
                            wipeTimers.push(timer);
                        });

                        cleanups.push(() => {
                            wipeTimers.forEach((timer) => window.clearTimeout(timer));
                            textWipes.forEach((element) => {
                                element.classList.remove("is-wipe-ready");
                            });
                        });
                    }

                    if (portfolioHome) {
                        let lastScrollY = window.scrollY;
                        let lastScrollTime = performance.now();
                        let scrollFrame = 0;
                        let settleTimer = 0;
                        let marqueeSyncTimer = 0;
                        let smoothedBoost = 0;

                        const setMarqueeBoost = (boost) => {
                            const easedBoost = Math.min(1, Math.max(0, boost));
                            portfolioHome.style.setProperty("--scroll-boost", easedBoost.toFixed(3));
                            portfolioHome.style.setProperty(
                                "--marquee-duration-a",
                                `${(12 - easedBoost * 8.5).toFixed(2)}s`,
                            );
                            portfolioHome.style.setProperty(
                                "--marquee-duration-b",
                                `${(9 - easedBoost * 6).toFixed(2)}s`,
                            );
                            portfolioHome.style.setProperty(
                                "--marquee-duration-c",
                                `${(15 - easedBoost * 11).toFixed(2)}s`,
                            );
                        };

                        const updateScrollVelocity = () => {
                            scrollFrame = 0;
                            const now = performance.now();
                            const currentY = window.scrollY;
                            const delta = Math.abs(currentY - lastScrollY);
                            const elapsed = Math.max(now - lastScrollTime, 16);
                            const velocity = Math.min(delta / elapsed, 4.2);
                            const targetBoost = Math.min(1, velocity / 2.05);

                            smoothedBoost += (targetBoost - smoothedBoost) * 0.48;
                            setMarqueeBoost(smoothedBoost);
                            lastScrollY = currentY;
                            lastScrollTime = now;

                            if (settleTimer) {
                                window.clearTimeout(settleTimer);
                            }

                            const settleY = currentY;
                            settleTimer = window.setTimeout(() => {
                                if (window.scrollY !== settleY) {
                                    onMarqueeScroll();
                                    return;
                                }

                                smoothedBoost = 0;
                                setMarqueeBoost(0);
                                lastScrollY = window.scrollY;
                                lastScrollTime = performance.now();
                            }, 1100);
                        };

                        const onMarqueeScroll = () => {
                            if (scrollFrame) return;
                            scrollFrame = window.requestAnimationFrame(updateScrollVelocity);
                        };

                        setMarqueeBoost(0);
                        window.addEventListener("scroll", onMarqueeScroll, { passive: true });
                        marqueeSyncTimer = window.setInterval(() => {
                            if (window.scrollY !== lastScrollY) {
                                onMarqueeScroll();
                            }
                        }, 120);
                        cleanups.push(() => {
                            window.removeEventListener("scroll", onMarqueeScroll);
                            if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
                            if (settleTimer) window.clearTimeout(settleTimer);
                            if (marqueeSyncTimer) window.clearInterval(marqueeSyncTimer);
                            portfolioHome.style.removeProperty("--scroll-boost");
                            portfolioHome.style.removeProperty("--marquee-duration-a");
                            portfolioHome.style.removeProperty("--marquee-duration-b");
                            portfolioHome.style.removeProperty("--marquee-duration-c");
                        });
                    }

                    // 滑鼠跟隨的水波效果統一交給 water-field 的 canvas 波場處理
                    // （真實波方程模擬 + #water-refraction 濾鏡），不再用 DOM 漣漪element。

                    const genreBrakes = Array.from(
                        document.querySelectorAll("[data-genre-brake]"),
                    );

                    if (
                        genreBrakes.length &&
                        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ) {
                        let brakeFrame = 0;
                        const brakePairs = genreBrakes.map((element) => {
                            const section = element.closest(".portfolio-genre-section");
                            const nextSection =
                                section?.nextElementSibling instanceof HTMLElement
                                    ? section.nextElementSibling
                                    : null;

                            return { element, nextSection };
                        });

                        const updateGenreBrakes = () => {
                            brakeFrame = 0;
                            const viewportHeight = Math.max(window.innerHeight, 1);

                            brakePairs.forEach(({ element, nextSection }) => {
                                const rect = element.getBoundingClientRect();
                                const travel = rect.height + viewportHeight * 0.42;
                                const progress = Math.max(
                                    0,
                                    Math.min(
                                        1,
                                        (viewportHeight * 0.88 - rect.top) / travel,
                                    ),
                                );

                                element.style.setProperty(
                                    "--brake-progress",
                                    progress.toFixed(3),
                                );

                                if (nextSection) {
                                    const rawPop = Math.max(
                                        0,
                                        Math.min(1, (progress - 0.58) / 0.42),
                                    );
                                    const bounce =
                                        rawPop +
                                        Math.sin(rawPop * Math.PI) * 0.2 +
                                        rawPop * 0.06;

                                    nextSection.style.setProperty(
                                        "--section-pop",
                                        Math.min(1.18, bounce).toFixed(3),
                                    );
                                }
                            });
                        };

                        const scheduleGenreBrakes = () => {
                            if (brakeFrame) return;
                            brakeFrame = window.requestAnimationFrame(updateGenreBrakes);
                        };
                        const brakeSyncTimer = window.setInterval(
                            scheduleGenreBrakes,
                            160,
                        );

                        updateGenreBrakes();
                        window.addEventListener("scroll", scheduleGenreBrakes, {
                            passive: true,
                        });
                        window.addEventListener("resize", scheduleGenreBrakes);

                        cleanups.push(() => {
                            window.removeEventListener("scroll", scheduleGenreBrakes);
                            window.removeEventListener("resize", scheduleGenreBrakes);
                            window.clearInterval(brakeSyncTimer);
                            if (brakeFrame) window.cancelAnimationFrame(brakeFrame);
                            brakePairs.forEach(({ element, nextSection }) => {
                                element.style.removeProperty("--brake-progress");
                                nextSection?.style.removeProperty("--section-pop");
                            });
                        });
                    }

                    const zoomTargets = Array.from(
                        document.querySelectorAll("[data-scroll-zoom]"),
                    );

                    if (
                        zoomTargets.length &&
                        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ) {
                        let zoomFrame = 0;

                        const updateScrollZoom = () => {
                            zoomFrame = 0;
                            const viewportCenter = window.innerHeight * 0.52;

                            zoomTargets.forEach((element) => {
                                const rect = element.getBoundingClientRect();
                                const elementCenter = rect.top + rect.height / 2;
                                const distance = Math.abs(elementCenter - viewportCenter);
                                const range = Math.max(window.innerHeight * 0.78, 1);
                                const power = Math.max(0, 1 - distance / range);
                                const shift = (viewportCenter - elementCenter) * 0.018;

                                element.style.setProperty(
                                    "--scroll-image-scale",
                                    power.toFixed(3),
                                );
                                element.style.setProperty(
                                    "--scroll-image-shift",
                                    `${Math.max(-16, Math.min(16, shift)).toFixed(2)}px`,
                                );
                            });
                        };

                        const scheduleScrollZoom = () => {
                            if (zoomFrame) return;
                            zoomFrame = window.requestAnimationFrame(updateScrollZoom);
                        };

                        updateScrollZoom();
                        window.addEventListener("scroll", scheduleScrollZoom, {
                            passive: true,
                        });
                        window.addEventListener("resize", scheduleScrollZoom);

                        cleanups.push(() => {
                            window.removeEventListener("scroll", scheduleScrollZoom);
                            window.removeEventListener("resize", scheduleScrollZoom);
                            if (zoomFrame) window.cancelAnimationFrame(zoomFrame);
                            zoomTargets.forEach((element) => {
                                element.style.removeProperty("--scroll-image-scale");
                                element.style.removeProperty("--scroll-image-shift");
                            });
                        });
                    }

                    document.querySelectorAll(".profile-flip-container").forEach((container) => {
                        const onClick = () => {
                            const inner = container.querySelector(".profile-flip-inner");
                            if (inner) {
                                inner.classList.toggle("flip-180");
                            }
                        };

                        container.addEventListener("click", onClick);
                        cleanups.push(() => container.removeEventListener("click", onClick));
                    });

                    const backToTopBtn = document.getElementById("back-to-top");
                    if (backToTopBtn) {
                        let backToTopFrame = 0;
                        const onClick = () => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        };
                        const toggleVisibility = () => {
                            const scrolled = window.scrollY > 300;
                            backToTopBtn.dataset.visible = scrolled.toString();
                            if (scrolled) {
                                backToTopBtn.classList.remove(
                                    "invisible",
                                    "pointer-events-none",
                                );
                            }
                        };
                        const scheduleToggleVisibility = () => {
                            if (backToTopFrame) return;

                            backToTopFrame = window.requestAnimationFrame(() => {
                                backToTopFrame = 0;
                                toggleVisibility();
                            });
                        };

                        backToTopBtn.addEventListener("click", onClick);
                        window.addEventListener("scroll", scheduleToggleVisibility, {
                            passive: true,
                        });
                        toggleVisibility();

                        cleanups.push(() => {
                            backToTopBtn.removeEventListener("click", onClick);
                            window.removeEventListener("scroll", scheduleToggleVisibility);
                            if (backToTopFrame) {
                                window.cancelAnimationFrame(backToTopFrame);
                            }
                        });
                    }

                    if (portfolioHome && clickLens && canUsePointerEffects) {
                        let lensTimeout = 0;

                        const setLensPointer = (event) => {
                            const x = `${Math.min(100, Math.max(0, (event.clientX / window.innerWidth) * 100)).toFixed(2)}%`;
                            const y = `${Math.min(100, Math.max(0, (event.clientY / window.innerHeight) * 100)).toFixed(2)}%`;
                            clickLens.style.setProperty("--portfolio-pointer-x", x);
                            clickLens.style.setProperty("--portfolio-pointer-y", y);
                            portfolioHome.style.setProperty("--portfolio-pointer-x", x);
                            portfolioHome.style.setProperty("--portfolio-pointer-y", y);
                        };

                        const onLensPointerDown = (event) => {
                            setLensPointer(event);
                            clickLens.classList.remove("is-impacting");
                            void clickLens.offsetWidth;
                            clickLens.classList.add("is-active", "is-impacting");

                            if (lensTimeout) {
                                window.clearTimeout(lensTimeout);
                            }

                            lensTimeout = window.setTimeout(() => {
                                clickLens.classList.remove("is-active", "is-impacting");
                            }, 760);
                        };

                        window.addEventListener("pointerdown", onLensPointerDown, {
                            passive: true,
                        });

                        cleanups.push(() => {
                            window.removeEventListener("pointerdown", onLensPointerDown);
                            if (lensTimeout) window.clearTimeout(lensTimeout);
                            clickLens.classList.remove("is-active", "is-impacting");
                        });
                    }

                    if (canUsePointerEffects) {
                        // 卡片互動直接餵進 canvas 波場：不再切 class、不再強制 reflow，
                        // 也不用替每張卡片掛一層帶 backdrop-filter 的假水面。
                        const getWaterTarget = (event) => {
                            const target = event.target;
                            if (!(target instanceof Element)) return null;
                            return target.closest(".portfolio-project, .portfolio-chip");
                        };

                        const onWaterOver = (event) => {
                            const element = getWaterTarget(event);
                            if (!element || isMotionSuppressed()) return;
                            if (
                                event.relatedTarget instanceof Node &&
                                element.contains(event.relatedTarget)
                            ) {
                                return;
                            }

                            water.drop(event.clientX, event.clientY, 1.6, 3);
                        };

                        const onWaterDown = (event) => {
                            const element = getWaterTarget(event);
                            if (!element || isMotionSuppressed()) return;

                            water.drop(event.clientX, event.clientY, 4.5, 5);
                        };

                        document.addEventListener("pointerover", onWaterOver, {
                            passive: true,
                        });
                        document.addEventListener("pointerdown", onWaterDown, {
                            passive: true,
                        });

                        cleanups.push(() => {
                            document.removeEventListener("pointerover", onWaterOver);
                            document.removeEventListener("pointerdown", onWaterDown);
                        });
                    }

                    return () => {
                        cleanups.forEach((cleanup) => cleanup());
                    };
                };

                const setupCaseInteractions = () => {
                    const caseRoot = document.querySelector(".work-case");
                    if (!caseRoot) return () => {};

                    const cleanups = [];
                    const reducedMotionQuery = window.matchMedia(
                        "(prefers-reduced-motion: reduce)",
                    );
                    const canUsePointerEffects =
                        window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
                        !reducedMotionQuery.matches;
                    if (canUsePointerEffects) {
                        caseRoot.classList.add("case-motion-ready");
                    }

                    const setCasePointer = (x, y) => {
                        caseRoot.style.setProperty("--case-pointer-x", `${x}%`);
                        caseRoot.style.setProperty("--case-pointer-y", `${y}%`);
                        caseRoot.style.setProperty("--flow-drift-x", `${((x - 50) * 0.18).toFixed(2)}px`);
                        caseRoot.style.setProperty("--flow-drift-y", `${((y - 50) * 0.14).toFixed(2)}px`);
                        caseRoot.style.setProperty("--flow-field-x", `${((x - 50) * -0.16).toFixed(2)}px`);
                        caseRoot.style.setProperty("--flow-field-y", `${((y - 50) * 0.13).toFixed(2)}px`);
                    };

                    setCasePointer(50, 34);
                    caseRoot.style.setProperty("--flow-boost", "0");
                    caseRoot.style.setProperty("--scroll-boost", "0");

                    if (canUsePointerEffects) {
                        let rafId = 0;
                        let pendingPointer = null;
                        let pointerBoostTimeout = 0;
                        let pointerImpactTimeout = 0;
                        let scrollBoostTimeout = 0;
                        let lastScrollY = window.scrollY;

                        const getViewportPointer = (event) => ({
                            x: Math.min(100, Math.max(0, (event.clientX / window.innerWidth) * 100)),
                            y: Math.min(100, Math.max(0, (event.clientY / window.innerHeight) * 100)),
                        });

                        const setFlowBoost = (value) => {
                            caseRoot.style.setProperty("--flow-boost", value.toFixed(3));
                            caseRoot.style.setProperty("--flow-alpha", (0.5 + value * 0.36).toFixed(3));
                            caseRoot.style.setProperty("--flow-grid-alpha", (0.24 + value * 0.28).toFixed(3));
                            caseRoot.style.setProperty("--flow-field-alpha", (0.72 + value * 0.34).toFixed(3));
                            caseRoot.style.setProperty("--flow-spark-alpha", (0.38 + value * 0.62).toFixed(3));
                            caseRoot.style.setProperty("--flow-readout-alpha", (0.42 + value * 0.4).toFixed(3));
                            caseRoot.style.setProperty("--flow-saturate", (1 + value * 0.7).toFixed(3));
                            caseRoot.style.setProperty("--flow-spark-distance", `${(value * 5.4).toFixed(2)}rem`);
                            caseRoot.style.setProperty("--flow-spark-scale", (0.72 + value * 0.72).toFixed(3));
                            caseRoot.style.setProperty("--flow-aura-alpha", (0.22 + value * 0.62).toFixed(3));
                            caseRoot.style.setProperty("--flow-aura-scale", (1 + value * 0.72).toFixed(3));
                            caseRoot.style.setProperty("--flow-depth-alpha", (0.34 + value * 0.38).toFixed(3));
                        };

                        const settleFlowBoost = () => {
                            if (pointerBoostTimeout) {
                                window.clearTimeout(pointerBoostTimeout);
                            }

                            pointerBoostTimeout = window.setTimeout(() => {
                                setFlowBoost(0);
                            }, 120);
                        };

                        const onPointerMove = (event) => {
                            if (isMotionSuppressed()) return;
                            pendingPointer = getViewportPointer(event);

                            if (rafId) return;
                            rafId = window.requestAnimationFrame(() => {
                                if (pendingPointer) {
                                    setCasePointer(pendingPointer.x, pendingPointer.y);
                                    setFlowBoost(1.05);
                                    settleFlowBoost();
                                }
                                rafId = 0;
                            });
                        };

                        const onPointerLeave = () => {
                            pendingPointer = null;
                            setCasePointer(50, 34);
                            caseRoot.classList.remove("case-impacting");
                            setFlowBoost(0);
                        };

                        const onPointerDown = (event) => {
                            if (isMotionSuppressed()) return;
                            const pointer = getViewportPointer(event);
                            setCasePointer(pointer.x, pointer.y);
                            caseRoot.classList.add("case-impacting");
                            setFlowBoost(2.1);

                            if (pointerImpactTimeout) {
                                window.clearTimeout(pointerImpactTimeout);
                            }

                            pointerImpactTimeout = window.setTimeout(() => {
                                caseRoot.classList.remove("case-impacting");
                                setFlowBoost(0);
                            }, 260);
                        };

                        const onScroll = () => {
                            if (isMotionSuppressed()) return;

                            const delta = Math.min(1, Math.abs(window.scrollY - lastScrollY) / 90);
                            lastScrollY = window.scrollY;
                            caseRoot.classList.add("case-is-scrolling");
                            caseRoot.style.setProperty("--scroll-boost", delta.toFixed(3));
                            caseRoot.style.setProperty("--flow-alpha", (0.52 + delta * 0.42).toFixed(3));
                            caseRoot.style.setProperty("--flow-grid-alpha", (0.24 + delta * 0.32).toFixed(3));
                            caseRoot.style.setProperty("--flow-scale", (1 + delta * 0.055).toFixed(3));
                            caseRoot.style.setProperty("--flow-readout-y", `${(delta * -1.8).toFixed(2)}rem`);
                            caseRoot.style.setProperty("--flow-depth-alpha", (0.3 + delta * 0.44).toFixed(3));

                            if (scrollBoostTimeout) {
                                window.clearTimeout(scrollBoostTimeout);
                            }

                            scrollBoostTimeout = window.setTimeout(() => {
                                caseRoot.classList.remove("case-is-scrolling");
                                caseRoot.style.setProperty("--scroll-boost", "0");
                                caseRoot.style.setProperty("--flow-alpha", "0.5");
                                caseRoot.style.setProperty("--flow-grid-alpha", "0.24");
                                caseRoot.style.setProperty("--flow-scale", "1");
                                caseRoot.style.setProperty("--flow-readout-y", "0rem");
                                caseRoot.style.setProperty("--flow-depth-alpha", "0.34");
                            }, 140);
                        };

                        caseRoot.addEventListener("pointermove", onPointerMove, {
                            passive: true,
                        });
                        caseRoot.addEventListener("pointerdown", onPointerDown, {
                            passive: true,
                        });
                        caseRoot.addEventListener("pointerleave", onPointerLeave);
                        window.addEventListener("scroll", onScroll, { passive: true });
                        cleanups.push(() => {
                            caseRoot.removeEventListener("pointermove", onPointerMove);
                            caseRoot.removeEventListener("pointerdown", onPointerDown);
                            caseRoot.removeEventListener("pointerleave", onPointerLeave);
                            window.removeEventListener("scroll", onScroll);
                            if (rafId) window.cancelAnimationFrame(rafId);
                            if (pointerBoostTimeout) window.clearTimeout(pointerBoostTimeout);
                            if (pointerImpactTimeout) window.clearTimeout(pointerImpactTimeout);
                            if (scrollBoostTimeout) window.clearTimeout(scrollBoostTimeout);
                        });
                    }

                    const setupTilt = (element, strength = 7) => {
                        if (!canUsePointerEffects) return;

                        const onMove = (event) => {
                            const rect = element.getBoundingClientRect();
                            const localX = (event.clientX - rect.left) / rect.width;
                            const localY = (event.clientY - rect.top) / rect.height;
                            const rotateY = (localX - 0.5) * strength;
                            const rotateX = (0.5 - localY) * strength;

                            element.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
                            element.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
                            element.style.setProperty(
                                "--local-x",
                                `${Math.min(100, Math.max(0, localX * 100)).toFixed(2)}%`,
                            );
                            element.style.setProperty(
                                "--local-y",
                                `${Math.min(100, Math.max(0, localY * 100)).toFixed(2)}%`,
                            );
                        };

                        const onLeave = () => {
                            element.style.setProperty("--tilt-x", "0deg");
                            element.style.setProperty("--tilt-y", "0deg");
                            element.style.setProperty("--local-x", "50%");
                            element.style.setProperty("--local-y", "50%");
                        };

                        element.addEventListener("pointermove", onMove, { passive: true });
                        element.addEventListener("pointerleave", onLeave);
                        onLeave();

                        cleanups.push(() => {
                            element.removeEventListener("pointermove", onMove);
                            element.removeEventListener("pointerleave", onLeave);
                        });
                    };

                    document.querySelectorAll(".work-case-body img").forEach((image, index) => {
                        image.classList.add("case-gallery-image");
                        image.style.setProperty("--gallery-index", `${index % 9}`);
                        image.style.setProperty("--gallery-delay", `${(index % 9) * -0.62}s`);

                        const parent = image.parentElement;
                        if (
                            parent &&
                            parent.tagName === "P" &&
                            parent.children.length === 1
                        ) {
                            parent.classList.add("case-image-frame");
                            parent.style.setProperty("--gallery-index", `${index % 9}`);
                            parent.style.setProperty("--gallery-delay", `${(index % 9) * -0.62}s`);
                            setupTilt(parent, 4.5);
                        } else {
                            setupTilt(image, 3);
                        }
                    });

                    document
                        .querySelectorAll(
                            ".case-media-frame, .case-focus-card, .case-fact, .case-external-link, .portfolio-project",
                        )
                        .forEach((element) => setupTilt(element, 5));

                    return () => {
                        cleanups.forEach((cleanup) => cleanup());
                    };
                };

                const mountEnhancements = () => {
                    const previousCleanup = window[cleanupKey];
                    if (typeof previousCleanup === "function") {
                        previousCleanup();
                    }

                    water.mount();
                    water.refreshAccent();

                    const cleanups = [
                        setupInputMode(),
                        setupScrollReveal(),
                        setupParticles(),
                        setupPageInteractions(),
                        setupCaseInteractions(),
                    ];

                    window[cleanupKey] = () => {
                        cleanups.forEach((cleanup) => {
                            if (typeof cleanup === "function") {
                                cleanup();
                            }
                        });
                    };
                };

                window.__portfolioFxMount = mountEnhancements;

                // ClientRouter 只執行 module script 一次，之後每次導覽都要自己重掛。
                // 用 after-swap 而不是 page-load：page-load 會等整段 view transition
                // 播完才觸發，而方格蒙太奇有兩秒多，特效會晚兩秒才接上。
                // mountEnhancements 每次都會先跑上一輪的 cleanup，重複呼叫是安全的。
                mountEnhancements();
                document.addEventListener("astro:after-swap", mountEnhancements);
            })();
