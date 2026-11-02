import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-forest.jpg";
import heroImageSmall from "@/assets/hero-forest-960.webp";

// React 18 känner inte igen fetchPriority, så attributet skickas med gemener.
const highPriority = { fetchpriority: "high" } as Record<string, string>;

const HeroSection = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={heroImageSmall} type="image/webp" />
          <img
            src={heroImage}
            alt="Dimmig skogsvy i gryningen — skog med höga naturvärden och biologisk mångfald"
            className="w-full h-full object-cover"
            width={1824}
            height={1216}
            loading="eager"
            decoding="async"
            {...highPriority}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/55 to-foreground/75" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <p className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-primary-foreground/85 mb-5 animate-fade-in-up font-body">
          Beverskog Consulting AB
          <span className="hidden sm:inline"> · Skoglig expertis för hållbara beslut</span>
        </p>
        <h1
          id="hero-heading"
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground max-w-4xl mx-auto mb-6 text-balance animate-fade-in-up"
        >
          Specialist på fåglar, artskydd och naturvärden i skogslandskap
        </h1>
        <p
          className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed text-balance animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Inventeringar och beslutsunderlag för skogsbolag, markägare, energibolag och exploateringsprojekt i hela Sverige.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
            <a href="#contact">Begär offert</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full sm:w-auto border-primary-foreground/70 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base font-semibold"
          >
            <a href="#services">Se tjänster och uppdrag</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
