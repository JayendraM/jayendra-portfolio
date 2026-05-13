import { SectionLabel } from "../ui/SectionLabel";
import { BadgeCard } from "../ui/BadgeCard";
import { awards } from "@/content/awards";
import { certifications } from "@/content/certifications";

export function Awards() {
  return (
    <section id="awards" className="relative">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-16 py-32 md:py-40 space-y-20 md:space-y-24">
        <div className="flex flex-col gap-4">
          <SectionLabel number="07" label="AWARDS" />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] font-medium leading-[1.05] text-foreground">
            Awards & recognition.
          </h2>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-subtle-foreground">
              AWARDS
            </h3>
            <span className="font-mono text-xs text-subtle-foreground tabular-nums">
              {String(awards.length).padStart(2, "0")}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {awards.map((a, i) => (
              <BadgeCard key={a.id} title={a.title} context={a.context} image={a.image} index={i} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-subtle-foreground">
              CERTIFICATIONS
            </h3>
            <span className="font-mono text-xs text-subtle-foreground tabular-nums">
              {String(certifications.length).padStart(2, "0")}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certifications.map((c, i) => (
              <BadgeCard key={c.id} title={c.title} context={c.context} image={c.image} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
