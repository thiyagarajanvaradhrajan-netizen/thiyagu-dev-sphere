import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles, Code, Brain } from "lucide-react"
import { ParticleBackground } from "@/components/enhanced-effects"

export function EnhancedHero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden neural-grid">
      <ParticleBackground />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-neural/5"></div>
      
      {/* Floating Elements with Enhanced Animation */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, -3, 3, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-40 right-20 w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-accent opacity-20"
      />
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-gradient-to-r from-accent to-neural opacity-20"
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="space-y-8">
          {/* Enhanced Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-48 h-48 rounded-full overflow-hidden glow-primary relative"
              >
                <motion.img
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src="/lovable-uploads/cca72ee4-2c90-449a-9118-6a148a062f2e.png"
                  alt="Thiyagarajan V - AI & Python Developer"
                  className="w-full h-full object-cover image-reveal"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-lg"
              />
              
              {/* Floating Icons */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center"
              >
                <Brain className="w-4 h-4 text-white" />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center"
              >
                <Code className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Main Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.span
                className="text-gradient-primary inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Hi, I'm{" "}
              </motion.span>
              <motion.span
                className="text-gradient-neural inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Thiyagarajan V
              </motion.span>
            </motion.h1>
            
            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto"
            >
              <div className="typewriter inline-block">
                AI enthusiast and Python Full Stack Developer focused on building intelligent applications
              </div>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Passionate about solving real-world problems with technology, creating smart, scalable, 
              and impactful applications using AI and modern web technologies.
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="group glow-primary hover-scale text-lg px-8 py-6 btn-magnetic relative overflow-hidden"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="group glass-card hover-lift text-lg px-8 py-6 btn-magnetic relative overflow-hidden"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-6 h-10 border-2 border-primary rounded-full flex justify-center relative overflow-hidden"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}