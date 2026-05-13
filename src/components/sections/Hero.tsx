"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MagneticButton } from "../ui/MagneticButton";
import { SectionLabel } from "../ui/SectionLabel";
import { RoboticArmClient } from "../three/RoboticArmClient";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const lines = gsap.utils.toArray<HTMLElement>(".hero-line");
      if (reduced) {
        gsap.set(lines, { opacity: 1, y: 0 });
        gsap.set(".hero-name, .hero-ctas, .hero-cue", { opacity: 1, y: 0 });
        return;
      }
      gsap.set(lines, { opacity: 0, y: 40 });
      gsap.set(".hero-name", { opacity: 0, y: 24 });
      gsap.set(".hero-ctas", { opacity: 0, y: 16 });
      gsap.set(".hero-cue", { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".hero-name", { opacity: 1, y: 0, duration: 0.7 })
        .to(
          lines,
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
          "+=0.05",
        )
        .to(".hero-ctas", { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .to(".hero-cue", { opacity: 1, duration: 0.6 }, "-=0.2");
    },
    { scope: containerRef },
  );

  // small hover-magnetic effect on the canvas region cursor cue
  useEffect(() => {}, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col"
    >
      <div className="absolute top-24 left-6 md:left-10 lg:left-16">
        <SectionLabel number="01" label="HERO" />
      </div>

      <div className="flex-1 mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-16 pt-32 md:pt-40 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full">
          {/* Left */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="hero-name text-2xl md:text-4xl font-medium tracking-tight text-foreground">
              JAYENDRA MANDRADIAR
            </div>

            <div className="mt-8 flex flex-col gap-2 md:gap-3">
              <h1 className="hero-line text-[clamp(3rem,8vw,7rem)] tracking-[-0.04em] font-medium leading-[0.95] text-foreground">
                I build.
              </h1>
              <h1 className="hero-line text-[clamp(3rem,8vw,7rem)] tracking-[-0.04em] font-medium leading-[0.95] text-foreground">
                I ship.
              </h1>
              <h1 className="hero-line text-[clamp(3rem,8vw,7rem)] tracking-[-0.04em] font-medium leading-[0.95] text-foreground">
                I lead 0<span className="text-accent">→</span>1.
              </h1>
              <p className="hero-line text-[clamp(1.5rem,3vw,3rem)] tracking-[-0.02em] font-medium leading-[1.1] text-muted-foreground mt-2">
                Currently looking for PM roles.
              </p>
            </div>

            <div className="hero-ctas mt-10 flex flex-wrap gap-4">
              <MagneticButton href="#projects" ariaLabel="See projects">
                [ See Projects ]
              </MagneticButton>
              <MagneticButton href="#about" ariaLabel="About me">
                [ About me ]
              </MagneticButton>
            </div>
          </div>

          {/* Right — 3D Arm */}
          <div className="lg:col-span-5 h-[420px] md:h-[520px] lg:h-[640px] w-full">
            <RoboticArmClient />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-cue pb-10 flex flex-col items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-subtle-foreground">
          SCROLL ↓
        </span>
        <div className="h-10 w-px bg-border relative overflow-hidden">
          <span
            className="absolute inset-x-0 top-0 h-2 bg-accent"
            style={{
              animation: "scroll-cue 1.6s cubic-bezier(0.4,0,0.2,1) infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
