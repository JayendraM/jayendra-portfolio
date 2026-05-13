"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
};

export function GhostButton({ children, href, onClick, className, ariaLabel }: Props) {
  const classes = cn(
    "inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs uppercase tracking-[0.22em] border border-border bg-transparent text-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent-soft",
    className,
  );
  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  );
}
