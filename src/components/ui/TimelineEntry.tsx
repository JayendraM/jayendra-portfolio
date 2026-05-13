"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type TimelineEntryProps = {
  dateRange: string;
  location: string;
  tag: string;
  title: string;
  institution: string;
  descriptor?: string;
  bullets?: string[];
  side: "left" | "right";
  isLast?: boolean;
};

export function TimelineEntry({
  dateRange,
  location,
  tag,
  title,
  institution,
  descriptor,
  bullets,
  side,
  isLast,
}: TimelineEntryProps) {
  const [open, setOpen] = useState(false);
  const hasExpandable = (bullets && bullets.length > 0) || !!descriptor;

  return (
    <div className={cn("relative grid lg:grid-cols-2 gap-6 lg:gap-12", isLast ? "pb-0" : "pb-12 lg:pb-16")}>
      {/* Dot on the spine */}
      <span
        className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-6 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background"
        aria-hidden
      />

      {/* Spacer for opposite side */}
      {side === "right" && <div className="hidden lg:block" />}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative ml-12 lg:ml-0 group",
          side === "right" ? "lg:pl-10" : "lg:pr-10",
        )}
      >
        <button
          type="button"
          onClick={() => hasExpandable && setOpen((v) => !v)}
          disabled={!hasExpandable}
          className={cn(
            "w-full text-left card-hover-glow rounded-2xl border border-border bg-surface-1 p-6 md:p-7",
            hasExpandable && "cursor-pointer",
          )}
          aria-expanded={open}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {dateRange}
              </span>
              <span className="font-mono text-xs text-subtle-foreground">·</span>
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.18em] text-subtle-foreground">
                {location}
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent border border-accent/40 px-2 py-0.5 rounded-full bg-accent-soft">
              {tag}
            </span>
          </div>

          <h3 className="mt-4 text-2xl md:text-3xl font-medium tracking-[-0.02em] text-foreground">
            {title}
          </h3>
          <div className="mt-1 text-base md:text-lg text-muted-foreground">
            {institution}
          </div>

          {hasExpandable && (
            <div className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-subtle-foreground">
              <span>{open ? "Less" : "More"}</span>
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-transform",
                  open && "rotate-90",
                )}
              />
            </div>
          )}

          <AnimatePresence initial={false}>
            {open && hasExpandable && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-5 space-y-3 text-base md:text-lg text-foreground/90 leading-relaxed">
                  {descriptor && <p>{descriptor}</p>}
                  {bullets && bullets.length > 0 && (
                    <ul className="space-y-2 list-none">
                      {bullets.map((b, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-accent mt-2 flex-none w-1 h-1 rounded-full" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      {side === "left" && <div className="hidden lg:block" />}
    </div>
  );
}
