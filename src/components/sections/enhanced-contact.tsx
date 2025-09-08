import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
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
  Coffee,
  Sparkles
} from "lucide-react"

export function EnhancedContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

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

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    toast({
      title: "Message Sent! ✨",
      description: "Thank you for reaching out. I'll get back to you soon!",
    })

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Get In</span> 
            <span className="text-gradient-neural"> Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm open to exciting projects and opportunities where I can contribute and learn. 
            Let's connect and build something amazing together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <Card className="glass-card glow-accent">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient-primary flex items-center">
                    <Sparkles className="w-6 h-6 mr-2" />
                    Let's Connect
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Feel free to reach out through any of these channels. I'm always excited to discuss new opportunities and innovative projects.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start p-6 h-auto hover-lift group"
                        asChild
                      >
                        <a href={contact.href} target="_blank" rel="noopener noreferrer">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.gradient} flex items-center justify-center mr-4`}
                          >
                            <contact.icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div className="text-left">
                            <div className="font-semibold">{contact.label}</div>
                            <div className="text-sm text-muted-foreground">{contact.value}</div>
                          </div>
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl text-gradient-neural">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {quickActions.map((action, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.2 + 0.1 * index, duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0"
                      >
                        <action.icon className="w-4 h-4 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{action.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{action.description}</p>
                        <Button variant="outline" size="sm" className="text-xs hover-scale">
                          {action.action}
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent to-accent-glow flex items-center justify-center"
                    >
                      <MapPin className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold">Based in Tamil Nadu, India</h4>
                      <p className="text-sm text-muted-foreground">Available for remote work and local opportunities</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Enhanced Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card glow-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-neural flex items-center">
                  <Send className="w-6 h-6 mr-2" />
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Have a project in mind? Let's discuss how we can work together.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="text-sm font-medium mb-2 block">
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="hover-scale focus:glow-primary transition-all duration-300"
                      />
                    </motion.div>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
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
                        className="hover-scale focus:glow-primary transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="hover-scale focus:glow-primary transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
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
                      className="hover-scale focus:glow-primary transition-all duration-300 resize-none"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full glow-primary hover-scale group btn-magnetic relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 mr-2 border-2 border-white/20 border-t-white rounded-full"
                        />
                      ) : (
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Enhanced Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-border/50"
        >
          <p className="text-muted-foreground flex items-center justify-center">
            © 2024 Thiyagarajan V. Built with ❤️ using React, TypeScript & Modern Web Technologies
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-2"
            >
              ✨
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}