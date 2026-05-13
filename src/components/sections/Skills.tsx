"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { skillColumns } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-16 py-32 md:py-40">
        <div className="flex flex-col gap-4 mb-16 lg:mb-20">
          <SectionLabel number="06" label="WHAT I KNOW" />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] font-medium leading-[1.05] text-foreground">
            Skills.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {skillColumns.map((col) => (
            <div key={col.id}>
              <div className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-accent mb-6 pb-4 border-b border-border-strong">
                {col.header}
              </div>
              <ul className="flex flex-col">
                {col.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="py-3.5 text-base md:text-lg text-foreground/90 border-b border-border last:border-b-0 leading-tight"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
