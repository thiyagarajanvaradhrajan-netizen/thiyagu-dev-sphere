import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Education } from "@/components/sections/education"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
