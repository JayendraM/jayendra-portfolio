"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
};

export function MagneticButton({ children, href, onClick, className, ariaLabel }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 300, damping: 20, mass: 0.6 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) * 0.25;
    const dy = (e.clientY - cy) * 0.25;
    x.set(Math.max(-6, Math.min(6, dx)));
    y.set(Math.max(-6, Math.min(6, dy)));
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn(
        "inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs uppercase tracking-[0.2em] border border-border bg-transparent text-foreground transition-colors hover:border-accent hover:text-accent",
        className,
      )}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className="inline-block">
        {inner}
      </Link>
    );
  }
  return (
    <button onClick={onClick} aria-label={ariaLabel} className="inline-block">
      {inner}
    </button>
  );
}
