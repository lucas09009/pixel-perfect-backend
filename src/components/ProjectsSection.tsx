import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CloudSync Pro",
    description:
      "A real-time collaboration platform with end-to-end encryption. Built for teams who value privacy.",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "FinTrack Dashboard",
    description:
      "Personal finance management app with AI-powered insights and beautiful visualizations.",
    tags: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "DevFlow CLI",
    description:
      "Command-line tool for automating development workflows. 10k+ monthly downloads.",
    tags: ["Node.js", "TypeScript", "CLI"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "EcoShop Platform",
    description:
      "Sustainable e-commerce platform connecting conscious consumers with eco-friendly brands.",
    tags: ["React", "Stripe", "MongoDB", "AWS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A selection of projects that showcase my skills and passion for building great products.
          </p>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group glass-card rounded-2xl overflow-hidden hover-lift ${
                project.featured ? "md:row-span-1" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-lg text-foreground hover:text-primary transition-colors"
                    aria-label="View GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-lg text-foreground hover:text-primary transition-colors"
                    aria-label="View Live"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-lg text-foreground hover:text-primary hover:border-primary/50 transition-all font-medium"
          >
            View All Projects
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
