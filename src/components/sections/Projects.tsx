"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { MetricPill } from "../ui/MetricCard";
import { ProjectCard } from "../ui/ProjectCard";
import { featuredProjects, type FeaturedProject } from "@/content/featured-projects";
import { academicProjects } from "@/content/academic-projects";
import { personalProjects } from "@/content/personal-projects";
import { cn } from "@/lib/utils";

function FeaturedVisual({ label }: { label: string }) {
  return (
    <div className="noise relative w-full overflow-hidden rounded-2xl bg-surface-2 ring-1 ring-accent/40 aspect-[16/10]">
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <span className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-subtle-foreground">
          {label}
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
  );
}

function FeaturedRow({
  project,
  reversed = false,
}: {
  project: FeaturedProject;
  reversed?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
    >
      <div
        className={cn(
          "md:col-span-7",
          reversed ? "md:order-2" : "md:order-1",
        )}
      >
        <FeaturedVisual label={project.visualLabel} />
      </div>

      <div
        className={cn(
          "md:col-span-5 flex flex-col gap-5",
          reversed ? "md:order-1" : "md:order-2",
        )}
      >
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
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative">
      {/* Intro */}
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-16 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="flex flex-col gap-5">
          <SectionLabel number="05" label="SELECTED WORK" />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] font-medium leading-[1.05] text-foreground max-w-3xl">
            Things I've built, shipped, and led.
          </h2>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-2xl">
            Two featured projects, expanded as case studies. Everything else,
            below.
          </p>
        </div>
      </div>

      {/* Featured projects — vertical stack */}
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-16 space-y-32 md:space-y-40">
        <FeaturedRow project={featuredProjects[0]} reversed={false} />
        <FeaturedRow project={featuredProjects[1]} reversed={true} />
      </div>

      {/* Project grid */}
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-16 pt-32 md:pt-40 pb-32 md:pb-40 space-y-24">
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-subtle-foreground">
              ACADEMIC / WORK PROJECTS
            </h3>
            <span className="font-mono text-xs text-subtle-foreground tabular-nums">
              {String(academicProjects.length).padStart(2, "0")}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {academicProjects.map((p, i) => (
              <ProjectCard key={p.id} data={p} index={i} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-subtle-foreground">
              PERSONAL PROJECTS
            </h3>
            <span className="font-mono text-xs text-subtle-foreground tabular-nums">
              {String(personalProjects.length).padStart(2, "0")}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {personalProjects.map((p, i) => (
              <ProjectCard key={p.id} data={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
