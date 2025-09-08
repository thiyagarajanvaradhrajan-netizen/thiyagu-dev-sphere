import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github, MapPin, Calendar } from "lucide-react"

export function About() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "thiyagu2004nanni@gmail.com", href: "mailto:thiyagu2004nanni@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7094686699", href: "tel:+917094686699" },
    { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/thiyagarajan-v-9b3b34373" },
    { icon: Github, label: "GitHub", value: "View my code", href: "https://github.com/thiyagu200426" },
  ]

  const highlights = [
    "Python Full Stack Development",
    "AI & Machine Learning",
    "RESTful API Development", 
    "Database Design & Optimization",
    "Modern Frontend Technologies",
    "Cloud Platform Integration"
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">About</span> 
            <span className="text-gradient-neural"> Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Card className="glass-card hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gradient-primary">
                  My Journey in Technology
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate Python developer with expertise in backend systems and full stack applications. 
                    My journey began with a curiosity about how technology can solve real-world problems, 
                    and has evolved into a deep specialization in AI-driven solutions.
                  </p>
                  <p>
                    I have built robust projects using <strong>Django</strong>, <strong>React</strong>, and <strong>MySQL</strong>, 
                    while continuously expanding my knowledge in <strong>Artificial Intelligence</strong>, 
                    <strong>Natural Language Processing</strong>, and Large Language Models like ChatGPT and Gemini.
                  </p>
                  <p>
                    My passion lies in building smart, scalable, and impactful applications that bridge the gap 
                    between complex AI technologies and practical user needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Highlights */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gradient-neural">
                What I Bring to the Table
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="justify-start p-3 hover-scale text-sm"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Profile */}
          <div className="space-y-8">
            {/* Profile Card */}
            <Card className="glass-card glow-accent">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden glow-primary">
                    <img
                      src="/lovable-uploads/cca72ee4-2c90-449a-9118-6a148a062f2e.png"
                      alt="Thiyagarajan V"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Thiyagarajan V</h3>
                    <p className="text-muted-foreground">AI & Python Full Stack Developer</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Available for exciting opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Links */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h4 className="text-lg font-semibold mb-6">Let's Connect</h4>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start p-4 h-auto hover-lift"
                      asChild
                    >
                      <a href={contact.href} target="_blank" rel="noopener noreferrer">
                        <contact.icon className="w-5 h-5 mr-3 text-primary" />
                        <div className="text-left">
                          <div className="font-medium">{contact.label}</div>
                          <div className="text-sm text-muted-foreground">{contact.value}</div>
                        </div>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}