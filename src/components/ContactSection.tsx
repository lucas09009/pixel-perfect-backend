import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@alexchen.dev", href: "mailto:hello@alexchen.dev" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-secondary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 glass-card p-4 rounded-xl hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover-lift"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative Code Block */}
            <div className="glass-card p-4 rounded-xl font-mono text-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-destructive/50" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <span className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <code className="text-muted-foreground">
                <span className="text-accent">const</span>{" "}
                <span className="text-primary">developer</span> = {"{"}
                <br />
                {"  "}name: <span className="text-green-400">"Alex Chen"</span>,
                <br />
                {"  "}status: <span className="text-green-400">"Available"</span>,
                <br />
                {"  "}coffee: <span className="text-primary">true</span>
                <br />
                {"}"};
              </code>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-2xl space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all glow-primary flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
