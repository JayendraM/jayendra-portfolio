import { SectionLabel } from "../ui/SectionLabel";
import { Timeline } from "../ui/Timeline";
import { career } from "@/content/career";

export function Career() {
  return (
    <section id="career" className="relative">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-16 py-32 md:py-40">
        <div className="flex flex-col gap-4 mb-16 lg:mb-20">
          <SectionLabel number="04" label="CAREER" />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] font-medium leading-[1.05] text-foreground max-w-3xl">
            The path so far — built across hardware, products, and programs.
          </h2>
        </div>

        <Timeline entries={career} />
      </div>
    </section>
  );
}
