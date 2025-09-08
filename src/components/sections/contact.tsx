import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Send,
  MessageCircle,
  Calendar,
  Coffee
} from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const { toast } = useToast()

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "thiyagu2004nanni@gmail.com",
      href: "mailto:thiyagu2004nanni@gmail.com",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7094686699",
      href: "tel:+917094686699",
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Professional Profile",
      href: "https://www.linkedin.com/in/thiyagarajan-v-9b3b34373",
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Source Code & Projects",
      href: "https://github.com/thiyagu200426",
      gradient: "from-neural to-neural-glow"
    }
  ]

  const quickActions = [
    {
      icon: Coffee,
      title: "Let's Grab Coffee",
      description: "Interested in discussing projects over coffee?",
      action: "Schedule Meet"
    },
    {
      icon: MessageCircle,
      title: "Quick Chat",
      description: "Have a quick question or idea to discuss?",
      action: "Send Message"
    },
    {
      icon: Calendar,
      title: "Project Collaboration",
      description: "Looking for a developer for your next project?",
      action: "Let's Talk"
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      })
      return
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    })

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Get In</span> 
            <span className="text-gradient-neural"> Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm open to exciting projects and opportunities where I can contribute and learn. 
            Let's connect and build something amazing together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card glow-accent">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-primary">
                  Let's Connect
                </CardTitle>
                <p className="text-muted-foreground">
                  Feel free to reach out through any of these channels. I'm always excited to discuss new opportunities and innovative projects.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start p-6 h-auto hover-lift group"
                    asChild
                  >
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">{contact.label}</div>
                        <div className="text-sm text-muted-foreground">{contact.value}</div>
                      </div>
                    </a>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl text-gradient-neural">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickActions.map((action, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors hover-scale">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <action.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{action.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{action.description}</p>
                      <Button variant="outline" size="sm" className="text-xs">
                        {action.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent to-accent-glow flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Based in Tamil Nadu, India</h4>
                    <p className="text-sm text-muted-foreground">Available for remote work and local opportunities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="glass-card glow-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-neural">
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Have a project in mind? Let's discuss how we can work together.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="hover-scale"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="hover-scale"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="hover-scale"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                      className="hover-scale resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full glow-primary hover-scale group"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/50">
          <p className="text-muted-foreground">
            © 2024 Thiyagarajan V. Built with ❤️ using React, TypeScript & Modern Web Technologies
          </p>
        </div>
      </div>
    </section>
  )
}