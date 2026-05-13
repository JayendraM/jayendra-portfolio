"use client";

import { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  speed?: number; // px/sec
  className?: string;
};

export function MarqueeRow({ children, speed = 30, className }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const [paused, setPaused] = useState(false);

  useAnimationFrame((_, delta) => {
    if (paused) return;
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    if (half <= 0) return;
    xRef.current -= (speed * delta) / 1000;
    if (xRef.current <= -half) xRef.current += half;
    track.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
  });

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div ref={trackRef} className="flex gap-6 w-max will-change-transform">
        {children}
        {children}
      </motion.div>

      {/* gradient fades on edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
