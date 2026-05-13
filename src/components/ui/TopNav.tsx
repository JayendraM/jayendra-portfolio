"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "@/content/nav";
import { getLenis } from "@/lib/smooth-scroll";

export function TopNav() {
  const pathname = usePathname();
  const router = useRouter();
  const onHome = pathname === "/";
  const [activeId, setActiveId] = useState<string>("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!onHome) return;

    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      setProgress(Math.min(1, Math.max(0, pct)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) {
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [onHome]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      if (!onHome) {
        // Navigate home then anchor
        return; // Link href will be /#section, let Next.js handle
      }
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(el, { offset: -72 });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      history.replaceState(null, "", href);
    },
    [onHome],
  );

  const active = navItems.find((n) => n.id === activeId) ?? navItems[0];

  return (
    <header className="fixed top-0 inset-x-0 z-50 select-none">
      <div className="h-16 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="mx-auto max-w-[1240px] h-full px-6 md:px-10 lg:px-16 flex items-center justify-between gap-6">
          <Link
            href="/"
            className="font-mono text-sm md:text-base tracking-[0.15em] text-foreground hover:text-accent transition-colors"
            aria-label="Jayendra Mandradiar — Home"
          >
            JAYENDRA MANDRADIAR
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {navItems.map((item) => {
              const href = onHome ? item.href : `/${item.href}`;
              const isActive = onHome && activeId === item.id;
              return (
                <Link
                  key={item.id}
                  href={href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  data-active={isActive}
                  className={cn(
                    "nav-underline font-mono text-[11px] lg:text-xs uppercase tracking-[0.18em] transition-colors",
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-accent",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block font-mono text-[11px] lg:text-xs uppercase tracking-[0.2em] text-subtle-foreground min-w-[88px] text-right tabular-nums">
            {onHome ? `${active.number} / ${active.label.toUpperCase()}` : "CASE STUDY"}
          </div>

          <button
            type="button"
            onClick={() => {
              const m = document.getElementById("mobile-menu");
              if (m) m.classList.toggle("hidden");
            }}
            className="md:hidden font-mono text-xs uppercase tracking-[0.2em] text-foreground"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="md:hidden hidden bg-background/95 backdrop-blur-xl border-b border-border"
      >
        <nav className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => {
            const href = onHome ? item.href : `/${item.href}`;
            return (
              <Link
                key={item.id}
                href={href}
                onClick={(e) => {
                  handleLinkClick(e, item.href);
                  const m = document.getElementById("mobile-menu");
                  if (m) m.classList.add("hidden");
                }}
                className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                {item.number} / {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Progress indicator — 1px track */}
      <div className="h-px w-full bg-border/60 relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-accent will-change-transform"
          style={{
            transformOrigin: "left",
            transform: `scaleX(${onHome ? progress : 0})`,
            width: "100%",
          }}
        />
      </div>
    </header>
  );
}
