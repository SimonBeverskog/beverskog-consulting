import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-forest.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Misty forest canopy at dawn"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          GreenRoot Consulting:
          <br />
          <span className="text-secondary">Expert Forestry & Nature Consulting</span>
        </h1>
        <p className="text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Professional field surveys, conservation planning, and forest management.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
