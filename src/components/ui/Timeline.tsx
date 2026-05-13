"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TimelineEntry, type TimelineEntryProps } from "./TimelineEntry";

type Entry = Omit<TimelineEntryProps, "side" | "isLast"> & { id: string };

export function Timeline({ entries }: { entries: Entry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const fillScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      {/* Spine */}
      <div
        className="absolute left-4 lg:left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-border"
        aria-hidden
      />
      <motion.div
        className="absolute left-4 lg:left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-accent origin-top"
        style={{ scaleY: fillScale }}
        aria-hidden
      />

      <div className="relative">
        {entries.map((e, i) => (
          <TimelineEntry
            key={e.id}
            {...e}
            side={i % 2 === 0 ? "left" : "right"}
            isLast={i === entries.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
