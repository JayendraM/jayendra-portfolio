import type { Metadata } from "next";
import { TopNav } from "@/components/ui/TopNav";
import { CaseStudyView } from "@/components/sections/CaseStudy";
import { caseStudies } from "@/content/case-studies";

const data = caseStudies["6-axis-robotic-printer"];

export const metadata: Metadata = {
  title: `${data.heroTitle} — Jayendra Mandradiar`,
  description: data.heroSub,
};

export default function Page() {
  return (
    <>
      <TopNav />
      <CaseStudyView data={data} />
    </>
  );
}
