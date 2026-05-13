"use client";

import { toast } from "sonner";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";

const EMAIL = "jmandrad@chicagobooth.edu";

const socials = [
  {
    href: "https://www.linkedin.com/in/jayendra-mandradiar/",
    Icon: Linkedin,
    label: "LINKEDIN",
    target: "_blank" as const,
  },
  {
    href: "https://www.instagram.com/jayendra_mandradiar/",
    Icon: Instagram,
    label: "INSTAGRAM",
    target: "_blank" as const,
  },
  {
    href: `mailto:${EMAIL}`,
    Icon: Mail,
    label: "EMAIL",
    target: "_blank" as const,
  },
];

export function Contact() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Copied!", { description: EMAIL });
    } catch {
      toast.error("Couldn't copy. Try selecting it manually.");
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-16 py-40 md:py-48 flex flex-col items-center text-center gap-10 md:gap-12">
        <SectionLabel number="09" label="LET'S TALK" />

        <h2 className="text-[clamp(3rem,8vw,7rem)] tracking-tighter font-medium leading-[0.95] text-foreground">
          Let's connect.
        </h2>

        <p className="max-w-2xl text-lg md:text-xl text-foreground/90 leading-relaxed">
          Open to PM roles starting June 2026. Always up to chat about products,
          hardware, or motorcycles.
        </p>

        <button
          onClick={copyEmail}
          className="group inline-flex items-center gap-3 px-7 md:px-10 py-4 md:py-5 rounded-full border border-foreground text-foreground hover:border-accent hover:text-accent hover:bg-accent-soft transition-all duration-200 font-mono text-sm md:text-base tracking-[0.12em]"
          aria-label={`Copy email ${EMAIL}`}
        >
          <Mail className="h-4 w-4 md:h-5 md:w-5" />
          <span>{EMAIL}</span>
          <span className="text-subtle-foreground group-hover:text-accent text-xs uppercase tracking-[0.2em]">
            [copy]
          </span>
        </button>

        <div className="flex items-start justify-center gap-8 md:gap-12 mt-4">
          {socials.map(({ href, Icon, label, target }) => (
            <a
              key={label}
              href={href}
              target={target}
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex flex-col items-center gap-3"
            >
              <span className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground transition-all duration-200 group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_0_24px_rgba(0,212,255,0.35)] group-hover:bg-accent-soft">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent transition-colors">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.22em] text-subtle-foreground">
            CHICAGO, IL · BUILT WITH NEXT.JS · © 2026
          </p>
          <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.22em] text-subtle-foreground">
            JAYENDRA MANDRADIAR
          </p>
        </div>
      </footer>
    </section>
  );
}
