import { EnhancedNavigation } from "@/components/enhanced-navigation"
import { EnhancedHero } from "@/components/sections/enhanced-hero"
import { About } from "@/components/sections/about"
import { Education } from "@/components/sections/education"
import { Projects } from "@/components/sections/projects"
import { EnhancedSkills } from "@/components/sections/enhanced-skills"
import { EnhancedContact } from "@/components/sections/enhanced-contact"
import { ScrollProgress, MouseFollower, LoadingScreen } from "@/components/enhanced-effects"

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <MouseFollower />
      <div className="min-h-screen bg-background">
        <EnhancedNavigation />
        <main>
          <EnhancedHero />
          <About />
          <Education />
          <Projects />
          <EnhancedSkills />
          <EnhancedContact />
        </main>
      </div>
    </>
  );
};

export default Index;
