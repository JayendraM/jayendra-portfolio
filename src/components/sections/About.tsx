"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "../ui/SectionLabel";

export function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-16 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start space-y-5">
            <SectionLabel number="02" label="ABOUT" />
            <div
              className="noise relative rounded-2xl bg-surface-2 ring-1 ring-accent/40 w-[260px] md:w-[320px] aspect-square mx-auto lg:mx-0 overflow-hidden"
              aria-label="Portrait placeholder"
            >
              <Image
                src="/images/portrait.jpg"
                alt="Jayendra Mandradiar"
                fill
                sizes="(max-width: 768px) 260px, 320px"
                className="object-cover"
                priority
              />
              <span className="absolute top-3 left-3 w-3 h-px bg-accent/60" />
              <span className="absolute top-3 left-3 h-3 w-px bg-accent/60" />
              <span className="absolute bottom-3 right-3 w-3 h-px bg-accent/60" />
              <span className="absolute bottom-3 right-3 h-3 w-px bg-accent/60" />
            </div>
            <div className="font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-muted-foreground">
              CHICAGO, IL · BOOTH '26
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-8"
          >
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] font-medium leading-[1.05] text-foreground">
              Built things that moved, as a kid.
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              As a kid, I built things that moved. That habit still drives how I
              think and work today. I'm a Mechatronics engineer and a Business
              Masters student at Chicago Booth, shaped by hands-on design work,
              product thinking, and several leadership roles. I like turning ideas
              into real products with real impact — whether through product
              design, product management, program leadership, strategy, or
              operations. Entrepreneurship keeps me energized because I enjoy
              owning problems, building from scratch, and seeing things grow.
              Outside work, I try to stay grounded, keep learning, and hold on to
              the curiosity that started all of this for me.
            </p>

            <div className="border-l-2 border-accent pl-6 space-y-3">
              <p className="text-lg md:text-xl font-medium text-foreground">
                Seeking opportunities to collaborate, contribute, and grow.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                A product-focused engineer and business student skilled at
                turning complex technical challenges into market-ready solutions.
                Pursuing early-career opportunities as Associate Product Manager,
                Product Manager, Technical Program Manager, Program Manager,
                Strategy, Marketing, or GTM roles across tech, automotive, and
                energy. Experienced in 0-to-1 product development, program
                launches, go-to-market strategy, and leading cross-functional
                teams to drive measurable outcomes.
              </p>
            </div>

            <div className="pt-2 font-mono text-sm md:text-base uppercase tracking-[0.12em] text-muted-foreground">
              GRADUATING JUN 2026 · 3Y OPT (1+2Y STEM) · OPEN TO RELOCATION
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
