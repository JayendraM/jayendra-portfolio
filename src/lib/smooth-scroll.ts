"use client";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenisInstance: Lenis | null = null;
let initialised = false;

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function initSmoothScroll(): Lenis | null {
  if (typeof window === "undefined") return null;
  if (initialised && lenisInstance) return lenisInstance;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
    smoothWheel: !reduced,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
    lerp: reduced ? 1 : 0.1,
  });

  lenisInstance = lenis;
  initialised = true;

  lenis.on("scroll", () => {
    ScrollTrigger.update();
  });

  const tick = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  // Drive ScrollTrigger off window scroll values.
  ScrollTrigger.scrollerProxy(document.documentElement, {
    scrollTop(value) {
      if (arguments.length && typeof value === "number") {
        lenis.scrollTo(value, { immediate: true });
      }
      return window.scrollY;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
  });

  ScrollTrigger.defaults({ scroller: document.documentElement });
  ScrollTrigger.refresh();

  return lenis;
}

export function destroySmoothScroll() {
  if (!lenisInstance) return;
  lenisInstance.destroy();
  lenisInstance = null;
  initialised = false;
  ScrollTrigger.getAll().forEach((t) => t.kill());
}
