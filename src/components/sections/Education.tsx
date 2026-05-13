import { SectionLabel } from "../ui/SectionLabel";
import { Timeline } from "../ui/Timeline";
import { education } from "@/content/education";

export function Education() {
  return (
    <section id="education" className="relative">
      <div className="mx-auto w-full max-w-[1240px] px-6 md:px-10 lg:px-16 py-32 md:py-40">
        <div className="flex flex-col gap-4 mb-16 lg:mb-20">
          <SectionLabel number="03" label="EDUCATION" />
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] font-medium leading-[1.05] text-foreground max-w-3xl">
            Where I studied.
          </h2>
        </div>

        <Timeline entries={education} />
      </div>
    </section>
  );
}
