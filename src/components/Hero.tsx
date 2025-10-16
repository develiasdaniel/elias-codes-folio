import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg">¡Hola! I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Elias Daniel Sanchez Lopez
            </h1>
          </div>

          {/* Title & Description */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl text-foreground/90">
              PhD Student in Computer Science 
              <span className="text-primary"> · </span>
              AI Researcher 
              <span className="text-primary"> · </span>
              Full-Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specializing in Artificial Intelligence, Machine Learning, and Cloud Computing. 
              Building intelligent systems that make a difference.
            </p>
          </div>

          {/* Location & Contact */}
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <span>📍 Albany, NY</span>
            <span className="text-primary">•</span>
            <span>🎓 University at Albany, SUNY</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <a
              href="https://www.linkedin.com/in/eliasdsanchez/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card/50 border border-border hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/eliasdsanchez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card/50 border border-border hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:eliasdanielsanchezlopez@gmail.com"
              className="p-3 rounded-lg bg-card/50 border border-border hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
