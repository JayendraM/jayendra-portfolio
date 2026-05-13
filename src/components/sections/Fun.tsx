"use client";

import Image from "next/image";
import { SectionLabel } from "../ui/SectionLabel";
import { MarqueeRow } from "../ui/MarqueeRow";
import { hobbies } from "@/content/hobbies";
import { travel } from "@/content/travel";

export function Fun() {
  return (
    <section id="fun" className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-16 pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="flex flex-col gap-4">
          <SectionLabel number="08" label="OUTSIDE THE OFFICE" />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] font-medium leading-[1.05] text-foreground max-w-3xl">
            Hobbies that keep me curious.
          </h2>
        </div>
      </div>

      {/* Hobbies marquee — full bleed */}
      <div className="w-full py-6">
        <MarqueeRow speed={45}>
          {hobbies.map((h) => (
            <article
              key={h.id}
              className="group relative shrink-0 w-[280px] md:w-[360px] aspect-[3/4] rounded-2xl overflow-hidden"
            >
              {/* image if available, otherwise placeholder */}
                {h.image ? (
                  <Image
                    src={h.image}
                    alt={h.title}
                    fill
                    sizes="(max-width: 768px) 280px, 360px"
                    className="object-cover"
                  />
                ) : (
                  <div className="noise absolute inset-0 bg-surface-2 ring-1 ring-accent/30">
                    <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-subtle-foreground/70">
                        {h.title}
                      </span>
                    </div>
                  </div>
                )}
              {/* corner ticks */}
              <span className="absolute top-3 left-3 w-3 h-px bg-accent/60 z-10" />
              <span className="absolute top-3 left-3 h-3 w-px bg-accent/60 z-10" />
              <span className="absolute top-3 right-3 w-3 h-px bg-accent/60 z-10" />
              <span className="absolute top-3 right-3 h-3 w-px bg-accent/60 z-10" />
              <span className="absolute bottom-3 right-3 w-3 h-px bg-accent/60 z-10" />
              <span className="absolute bottom-3 right-3 h-3 w-px bg-accent/60 z-10" />

              {/* permanent bottom gradient for title legibility */}
              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent"
                aria-hidden
              />

              {/* hover darken overlay */}
              <div
                className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300"
                aria-hidden
              />

              {/* title + description block, anchored bottom-left */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h3 className="text-xl md:text-2xl font-medium tracking-[-0.02em] text-foreground leading-tight drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  {h.title}
                </h3>
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed opacity-0 max-h-0 mt-0 group-hover:opacity-100 group-hover:max-h-48 group-hover:mt-3 overflow-hidden transition-all duration-300">
                  {h.description}
                </p>
              </div>
            </article>
          ))}
        </MarqueeRow>
      </div>

      {/* Travel heading */}
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-16 pt-16 md:pt-24">
        <h3 className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-subtle-foreground mb-6">
          RECENT TRAVEL
        </h3>
      </div>

      {/* Travel marquee — full bleed */}
      <div className="w-full pb-32 md:pb-40">
        <MarqueeRow speed={35}>
          {travel.map((t) => (
            <article
              key={t.id}
              className="shrink-0 w-[280px] md:w-[340px] rounded-2xl overflow-hidden border border-border bg-surface-1 card-hover-glow"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                {t.image ? (
                  <Image
                    src={t.image}
                    alt={t.destination}
                    fill
                    sizes="(max-width: 768px) 280px, 340px"
                    className="object-cover"
                  />
                ) : (
                  <div className="noise absolute inset-0 bg-surface-2 ring-1 ring-accent/30">
                    <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-subtle-foreground">
                        {t.destination}
                      </span>
                    </div>
                  </div>
                )}
                <span className="absolute top-2 left-2 w-2 h-px bg-accent/60 z-10" />
                <span className="absolute top-2 left-2 h-2 w-px bg-accent/60 z-10" />
                <span className="absolute bottom-2 right-2 w-2 h-px bg-accent/60 z-10" />
                <span className="absolute bottom-2 right-2 h-2 w-px bg-accent/60 z-10" />
              </div>
              <div className="p-5">
                <h4 className="text-lg md:text-xl font-medium tracking-[-0.01em] text-foreground leading-tight">
                  {t.destination}
                </h4>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t.caption}
                </p>
              </div>
            </article>
          ))}
        </MarqueeRow>
      </div>
    </section>
  );
}
