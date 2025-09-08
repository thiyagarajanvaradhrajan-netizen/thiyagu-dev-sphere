import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Bot, ShoppingCart, Volume2, BookOpen } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "MediBot – AI Virtual Assistant",
      description: "An intelligent prototype chatbot designed to provide medical advice and handle frequently asked questions. Built using natural language processing techniques to understand user queries and provide relevant health information.",
      category: "AI/Machine Learning",
      techStack: ["Python", "Django", "NLP", "Replit", "Natural Language Processing"],
      highlights: [
        "Interactive conversational interface",
        "Medical FAQ database integration",
        "Basic NLP for query understanding",
        "Prototype deployed on Replit platform"
      ],
      icon: Bot,
      gradient: "from-neural to-neural-glow",
      status: "Learning Project"
    },
    {
      title: "Online Organic Food Order System",
      description: "A comprehensive web application enabling users to browse, select, and order organic products with an efficient delivery system. Features user authentication, product catalog, shopping cart, and order management.",
      category: "Full Stack Development",
      techStack: ["Django", "React", "MySQL", "RESTful API", "Payment Integration"],
      highlights: [
        "Responsive product catalog with search",
        "Secure user authentication system",
        "Real-time order tracking",
        "Admin dashboard for inventory management"
      ],
      icon: ShoppingCart,
      gradient: "from-primary to-primary-glow",
      status: "Completed",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Spatial Sound Scene Analysis",
      description: "An innovative prototype that leverages machine learning to detect emergency sounds in the environment and automatically reduces device volume by 50% to ensure user awareness of critical situations.",
      category: "Machine Learning",
      techStack: ["Python", "Machine Learning", "Audio Processing", "Real-time Processing"],
      highlights: [
        "Real-time audio analysis",
        "Emergency sound pattern recognition",
        "Automatic volume adjustment",
        "Machine learning classification models"
      ],
      icon: Volume2,
      gradient: "from-secondary to-secondary-glow",
      status: "Prototype"
    },
    {
      title: "Personal & Educational Content Blog",
      description: "A modern blog platform built to share technical insights, learning experiences, and educational content. Features content management, responsive design, and SEO optimization for better reach.",
      category: "Web Development",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Markdown Support"],
      highlights: [
        "Content management system",
        "SEO optimized articles",
        "Responsive design",
        "Social sharing integration"
      ],
      icon: BookOpen,
      gradient: "from-accent to-accent-glow",
      status: "In Development",
      demoLink: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Featured</span> 
            <span className="text-gradient-neural"> Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions built with modern technologies and AI-driven approaches
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card hover-lift group h-full"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="hover-scale">
                    {project.status}
                  </Badge>
                </div>
                
                <div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gradient-neural">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="hover-scale text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gradient-neural">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                {(project.demoLink || project.githubLink) && (
                  <div className="flex gap-3 pt-4">
                    {project.demoLink && (
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="hover-scale"
                        asChild
                      >
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="hover-scale"
                        asChild
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-card glow-accent inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gradient-primary">
                Interested in Collaboration?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                I'm always excited to work on innovative projects and learn new technologies.
              </p>
              <Button 
                size="lg" 
                className="hover-scale glow-primary"
                onClick={() => {
                  const element = document.querySelector("#contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Let's Connect
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}