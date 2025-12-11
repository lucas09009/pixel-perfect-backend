import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="font-mono text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            {"<dev />"}
          </a>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Crafted with <Heart size={14} className="text-destructive fill-destructive" /> by Alex Chen
          </p>

          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
