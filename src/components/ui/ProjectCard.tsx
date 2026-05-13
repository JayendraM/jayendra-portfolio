"use client";

import { motion } from "framer-motion";
import type { ProjectCardData } from "@/content/academic-projects";

export function ProjectCard({ data, index }: { data: ProjectCardData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="card-hover-glow rounded-2xl border border-border bg-surface-1 p-6 md:p-7 flex flex-col gap-4 h-full"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent border border-accent/40 bg-accent-soft px-2 py-0.5 rounded-full">
          {data.tag}
        </span>
        <span className="font-mono text-xs text-subtle-foreground tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-medium tracking-[-0.02em] text-foreground leading-tight">
        {data.title}
      </h3>
      <p className="text-base text-foreground/90 leading-relaxed flex-1">
        {data.description}
      </p>
    </motion.div>
  );
}
