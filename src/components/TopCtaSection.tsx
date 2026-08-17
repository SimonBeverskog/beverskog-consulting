import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TopCtaSection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl md:text-4xl font-bold mb-6">
          Vill du veta mer om hur jag kan hjälpa dig?
        </h2>
        <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Hör av dig för ett första samtal. Jag återkommer så snart jag kan.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-body font-semibold"
        >
          <a href="#contact">
            Kontakta mig
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default TopCtaSection;
