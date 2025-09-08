import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function Education() {
  const educationData = [
    {
      degree: "B.E. in Computer Science and Engineering",
      institution: "T.J Institute of Technology",
      period: "2022 – 2025",
      status: "Completed",
      location: "Tamil Nadu, India",
      highlights: [
        "Specialized in AI and Machine Learning",
        "Full Stack Development Projects",
        "Database Management Systems",
        "Software Engineering Principles"
      ],
      grade: "Excellent Academic Performance"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Srinivasa Subbaraya Government College",
      period: "2019 – 2022",
      status: "Completed",
      location: "Tamil Nadu, India",
      highlights: [
        "Programming Fundamentals",
        "Web Development Basics",
        "Computer Networks",
        "Database Concepts"
      ],
      grade: "First Class with Distinction"
    },
    {
      degree: "SSLC (10th Grade)",
      institution: "Jawahar Matriculation Higher Secondary School",
      period: "2019",
      status: "Completed", 
      location: "Tamil Nadu, India",
      highlights: [
        "Mathematics Excellence",
        "Science Foundation",
        "Academic Leadership",
        "Extracurricular Activities"
      ],
      grade: "Outstanding Performance"
    }
  ]

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Educational</span> 
            <span className="text-gradient-neural"> Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in computer science and engineering with continuous learning
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className={`glass-card hover-lift ${
                index === 0 ? 'glow-primary' : ''
              }`}
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-semibold text-gradient-primary mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-foreground font-medium">
                          {edu.institution}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 mt-4 text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <Badge variant="secondary" className="hover-scale">
                            {edu.status}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="ml-16">
                      <h4 className="font-semibold mb-3 text-gradient-neural">Key Learning Areas</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-accent"></div>
                            <span className="text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Achievement */}
                  <div className="lg:col-span-1">
                    <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                      <CardContent className="p-6 text-center">
                        <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                        <h4 className="font-semibold mb-2">Academic Achievement</h4>
                        <p className="text-sm text-muted-foreground">{edu.grade}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Connector */}
        <div className="hidden lg:block absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 opacity-30"></div>
      </div>
    </section>
  )
}