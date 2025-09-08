import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Brain, 
  Code, 
  Palette, 
  Database, 
  Wrench, 
  Lightbulb,
  Bot,
  Server,
  Monitor,
  HardDrive,
  Settings,
  Zap
} from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      gradient: "from-neural to-neural-glow",
      skills: [
        { name: "Natural Language Processing", level: 75, category: "Advanced" },
        { name: "Large Language Models (ChatGPT, Gemini)", level: 80, category: "Proficient" },
        { name: "Prompt Engineering", level: 85, category: "Expert" },
        { name: "OpenAI API", level: 70, category: "Intermediate" },
        { name: "Hugging Face APIs", level: 65, category: "Intermediate" },
        { name: "LangChain", level: 60, category: "Learning" }
      ]
    },
    {
      title: "Backend Development", 
      icon: Server,
      gradient: "from-primary to-primary-glow",
      skills: [
        { name: "Python", level: 90, category: "Expert" },
        { name: "Django", level: 85, category: "Advanced" },
        { name: "Flask", level: 75, category: "Proficient" },
        { name: "Django REST Framework", level: 80, category: "Advanced" },
        { name: "FastAPI", level: 70, category: "Intermediate" },
        { name: "RESTful API Design", level: 85, category: "Advanced" }
      ]
    },
    {
      title: "Frontend Development",
      icon: Monitor,
      gradient: "from-secondary to-secondary-glow", 
      skills: [
        { name: "HTML5 & CSS3", level: 90, category: "Expert" },
        { name: "JavaScript (ES6+)", level: 85, category: "Advanced" },
        { name: "React", level: 80, category: "Advanced" },
        { name: "Responsive Design", level: 85, category: "Advanced" },
        { name: "Modern CSS Frameworks", level: 75, category: "Proficient" }
      ]
    },
    {
      title: "Database & Storage",
      icon: HardDrive,
      gradient: "from-accent to-accent-glow",
      skills: [
        { name: "MySQL", level: 85, category: "Advanced" },
        { name: "SQLite", level: 90, category: "Expert" },
        { name: "MongoDB", level: 70, category: "Intermediate" },
        { name: "Database Design", level: 80, category: "Advanced" },
        { name: "Query Optimization", level: 75, category: "Proficient" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      gradient: "from-warning to-yellow-400",
      skills: [
        { name: "Git & GitHub", level: 90, category: "Expert" },
        { name: "Docker", level: 65, category: "Intermediate" },
        { name: "Postman", level: 85, category: "Advanced" },
        { name: "AWS Basics", level: 60, category: "Learning" },
        { name: "Heroku", level: 75, category: "Proficient" }
      ]
    },
    {
      title: "Core Concepts",
      icon: Lightbulb,
      gradient: "from-success to-green-400",
      skills: [
        { name: "Object-Oriented Programming", level: 90, category: "Expert" },
        { name: "Data Structures & Algorithms", level: 80, category: "Advanced" },
        { name: "Unit Testing", level: 75, category: "Proficient" },
        { name: "Debugging", level: 85, category: "Advanced" },
        { name: "MVC Architecture", level: 80, category: "Advanced" }
      ]
    }
  ]

  const getLevelColor = (level: number) => {
    if (level >= 80) return "bg-success"
    if (level >= 60) return "bg-primary" 
    return "bg-warning"
  }

  const getCategoryBadge = (category: string): "default" | "destructive" | "outline" | "secondary" => {
    const variants: Record<string, "default" | "destructive" | "outline" | "secondary"> = {
      "Expert": "default",
      "Advanced": "secondary", 
      "Proficient": "outline",
      "Intermediate": "outline",
      "Learning": "outline"
    }
    return variants[category] || "outline"
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Skills &</span> 
            <span className="text-gradient-neural"> Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card hover-lift h-full"
            >
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gradient-primary">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <Badge 
                          variant={getCategoryBadge(skill.category)}
                          className="text-xs hover-scale"
                        >
                          {skill.category}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full ${getLevelColor(skill.level)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16">
          <Card className="glass-card glow-accent">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gradient-neural mb-4">
                  Professional Strengths
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Beyond technical skills, I bring valuable soft skills and methodologies to every project
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Zap, label: "Problem Solving", description: "Analytical thinking" },
                  { icon: Bot, label: "Continuous Learning", description: "Staying updated" }, 
                  { icon: Settings, label: "Adaptability", description: "Quick learning" },
                  { icon: Lightbulb, label: "Innovation", description: "Creative solutions" }
                ].map((strength, index) => (
                  <div key={index} className="text-center space-y-3 hover-scale">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto">
                      <strength.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{strength.label}</h4>
                      <p className="text-xs text-muted-foreground">{strength.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}