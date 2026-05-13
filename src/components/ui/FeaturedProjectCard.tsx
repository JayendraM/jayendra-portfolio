"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { FeaturedProject } from "@/content/featured-projects";
import { MetricPill } from "./MetricCard";

export function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
      <div className="lg:col-span-7 order-2 lg:order-1">
        <div className="noise relative w-full overflow-hidden rounded-2xl bg-surface-2 ring-1 ring-accent/40 aspect-[16/10]">
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-subtle-foreground">
              {project.visualLabel}
            </span>
          </div>
          <span className="absolute top-4 left-4 w-4 h-px bg-accent/50" />
          <span className="absolute top-4 left-4 h-4 w-px bg-accent/50" />
          <span className="absolute top-4 right-4 w-4 h-px bg-accent/50" />
          <span className="absolute top-4 right-4 h-4 w-px bg-accent/50" />
          <span className="absolute bottom-4 left-4 w-4 h-px bg-accent/50" />
          <span className="absolute bottom-4 left-4 h-4 w-px bg-accent/50" />
          <span className="absolute bottom-4 right-4 w-4 h-px bg-accent/50" />
          <span className="absolute bottom-4 right-4 h-4 w-px bg-accent/50" />
        </div>
      </div>

      <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-5">
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
          {project.index}
        </span>
        <h3 className="text-3xl md:text-4xl font-medium tracking-[-0.03em] text-foreground leading-[1.05]">
          {project.title}
        </h3>
        <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
          <span className="text-muted-foreground">Problem · </span>
          {project.problem}
        </p>
        <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
          <span className="text-muted-foreground">Outcome · </span>
          {project.outcome}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.metrics.map((m) => (
            <MetricPill key={m}>{m}</MetricPill>
          ))}
        </div>
        <Link
          href={project.href}
          className="inline-flex items-center gap-2 mt-2 font-mono text-xs md:text-sm uppercase tracking-[0.22em] text-foreground hover:text-accent transition-colors group w-fit"
        >
          [ Read case study
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          ]
        </Link>
      </div>
    </div>
  );
}
