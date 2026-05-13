"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  context: string;
  index: number;
};

export function BadgeCard({ title, context, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.45, delay: (index % 5) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="card-hover-glow rounded-xl border border-border bg-surface-1 p-4 flex flex-col gap-3"
    >
      <div className="noise relative w-full overflow-hidden rounded-lg bg-surface-2 ring-1 ring-accent/40 aspect-square">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-subtle-foreground">
            PHOTO
          </span>
        </div>
        <span className="absolute top-2 left-2 w-2 h-px bg-accent/50" />
        <span className="absolute top-2 left-2 h-2 w-px bg-accent/50" />
        <span className="absolute bottom-2 right-2 w-2 h-px bg-accent/50" />
        <span className="absolute bottom-2 right-2 h-2 w-px bg-accent/50" />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-base md:text-lg font-medium text-foreground leading-snug tracking-[-0.01em]">
          {title}
        </h4>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {context}
        </p>
      </div>
    </motion.div>
  );
}
