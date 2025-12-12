import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Download, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-primary/10 rotate-45 animate-float delay-300" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/5 rounded-lg animate-float delay-500" />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-8">
              Mechanical Engineer
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up delay-100">
            <span className="text-foreground">Ntsika</span>
            <br />
            <span className="gradient-text">Siswana</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200 leading-relaxed">
            Designing efficient systems and driving technological advancement 
            through innovative problem-solving
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up delay-300">
            <Button variant="hero" size="xl" onClick={() => scrollToSection("contact")}>
              <Mail className="w-5 h-5" />
              Get in Touch
            </Button>
            <Button variant="hero-outline" size="xl" onClick={() => scrollToSection("experience")}>
              View Experience
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground animate-fade-up delay-400">
            <a 
              href="tel:+27611395770" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              061 139 5770
            </a>
            <a 
              href="mailto:siswanantsika@gmail.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              siswanantsika@gmail.com
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
