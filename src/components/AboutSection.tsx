import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable solutions",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating intuitive user experiences",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimized for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Strong team player and communicator",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
              Turning ideas into{" "}
              <span className="gradient-text">digital reality</span>
            </h2>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a fullstack developer with 5+ years of experience building 
                web applications. I specialize in React, Node.js, and cloud 
                technologies, with a passion for creating seamless user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge through 
                technical writing and mentoring.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">5+</span>
                  <p className="text-xs text-muted-foreground mt-1">Years Exp.</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">50+</span>
                  <p className="text-xs text-muted-foreground mt-1">Projects</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">30+</span>
                  <p className="text-xs text-muted-foreground mt-1">Clients</p>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-5 rounded-xl hover-lift group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
