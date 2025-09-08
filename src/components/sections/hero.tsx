import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden neural-grid">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-neural/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 float-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-secondary/10 float-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-accent/10 float-animation" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden glow-primary hover-scale">
                <img
                  src="/lovable-uploads/cca72ee4-2c90-449a-9118-6a148a062f2e.png"
                  alt="Thiyagarajan V - AI & Python Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-lg"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-gradient-primary">Hi, I'm </span>
              <span className="text-gradient-neural">Thiyagarajan V</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              <span className="typewriter">
                AI enthusiast and Python Full Stack Developer focused on building intelligent applications
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about solving real-world problems with technology, creating smart, scalable, 
              and impactful applications using AI and modern web technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="group glow-primary hover-scale text-lg px-8 py-6"
            >
              Explore My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="group glass-card hover-lift text-lg px-8 py-6"
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get in Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}