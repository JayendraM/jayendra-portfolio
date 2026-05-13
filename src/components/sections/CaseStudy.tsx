"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";
import { caseStudyTOC } from "@/content/case-studies";
import { DecisionCard } from "../ui/DecisionCard";
import { MetricCard } from "../ui/MetricCard";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import { getLenis } from "@/lib/smooth-scroll";
import { cn } from "@/lib/utils";

export function CaseStudyView({ data }: { data: CaseStudy }) {
  const [activeId, setActiveId] = useState<string>("overview");

  useEffect(() => {
    const ids = caseStudyTOC.map((t) => t.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.5, 1] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -96 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <article className="relative pt-24 md:pt-28 pb-32">
      {/* Hero */}
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16 pt-12 md:pt-20">
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.22em] text-accent">
          {data.breadcrumb}
        </p>
        <h1 className="mt-6 text-[clamp(2.5rem,6vw,5.5rem)] font-medium tracking-[-0.035em] leading-[1.02] text-foreground">
          {data.heroTitle}
        </h1>
        <p className="mt-8 max-w-3xl text-lg md:text-2xl tracking-[-0.01em] text-foreground/90 leading-relaxed">
          {data.heroSub}
        </p>
        <div className="mt-12">
          <ImagePlaceholder label={data.heroVisualLabel} aspect="16/9" image={data.heroImage} />
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
          {data.heroMetrics.map((m) => (
            <MetricCard key={m}>{m}</MetricCard>
          ))}
        </div>
      </div>

      {/* Body grid */}
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left TOC */}
          <aside className="lg:col-span-2 hidden lg:block">
            <nav className="sticky top-28 flex flex-col gap-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-subtle-foreground mb-2">
                CONTENTS
              </div>
              {caseStudyTOC.map((t) => {
                const active = activeId === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => goTo(t.id)}
                    className={cn(
                      "flex items-center gap-2 text-left font-mono text-xs uppercase tracking-[0.18em] transition-colors",
                      active ? "text-accent" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "w-1.5 h-1.5 rounded-full transition-all",
                        active ? "bg-accent" : "bg-border",
                      )}
                    />
                    {t.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-7 space-y-20 md:space-y-24">
            <Section id="overview" title="Overview">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                {data.overview}
              </p>
            </Section>

            <Section id="problem" title="Problem">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                {data.problem.body}
              </p>
              <blockquote className="border-l-2 border-accent pl-6 my-10">
                <p className="text-xl md:text-2xl italic text-foreground tracking-[-0.01em] leading-snug">
                  "{data.problem.pullQuote}"
                </p>
              </blockquote>
              {data.problem.pains && data.problem.pains.length > 0 && (
                <>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-6 mb-3">
                    Pain points discovered
                  </p>
                  <ul className="space-y-2 text-base md:text-lg text-foreground/90">
                    {data.problem.pains.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="text-accent mt-2.5 flex-none w-1 h-1 rounded-full" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Section>

            <Section id="approach" title="Approach">
              <div className="space-y-5">
                {data.approach.body.map((p, i) => (
                  <p key={i} className="text-lg md:text-xl leading-relaxed text-foreground/90">
                    {p}
                  </p>
                ))}
              </div>
            </Section>

            <Section id="decisions" title="Key decisions & trade-offs">
              <div className="space-y-10">
                {data.decisions.map((d, i) => (
                  <DecisionCard key={i} decision={d} index={i} />
                ))}
              </div>
            </Section>

            <Section id="outcome" title="Outcome">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                {data.outcome}
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
                {data.heroMetrics.map((m) => (
                  <MetricCard key={m}>{m}</MetricCard>
                ))}
              </div>
            </Section>

            <Section id="reflection" title="Reflection">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                {data.reflection}
              </p>
            </Section>

            <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-border">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-foreground hover:border-accent hover:text-accent transition-colors font-mono text-xs uppercase tracking-[0.22em]"
              >
                <ArrowLeft className="h-4 w-4" />
                [ Back to all projects ]
              </Link>
              <Link
                href={data.next.href}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-foreground hover:border-accent hover:text-accent transition-colors font-mono text-xs uppercase tracking-[0.22em]"
              >
                [ {data.next.label} ]
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right metadata rail */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-border bg-surface-1 p-6 md:p-7 space-y-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-subtle-foreground">
                  PROJECT META
                </div>
                <MetaRow label="Role" value={data.meta.role} />
                <MetaRow label="Company" value={data.meta.company} />
                <MetaRow label="Duration" value={data.meta.duration} />
                <MetaRow label="Team" value={data.meta.team} />
                <MetaRow label="Tech" value={data.meta.tech} />
                <div className="pt-3 border-t border-border">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-foreground hover:text-accent transition-colors group"
                  >
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-32"
    >
      <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.03em] text-foreground mb-6">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">
        {label}
      </div>
      <div className="text-sm md:text-base text-foreground leading-snug">
        {value}
      </div>
    </div>
  );
}
