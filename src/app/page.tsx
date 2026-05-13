import { TopNav } from "@/components/ui/TopNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Career } from "@/components/sections/Career";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Awards } from "@/components/sections/Awards";
import { Fun } from "@/components/sections/Fun";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Career />
        <Projects />
        <Skills />
        <Awards />
        <Fun />
        <Contact />
      </main>
    </>
  );
}
