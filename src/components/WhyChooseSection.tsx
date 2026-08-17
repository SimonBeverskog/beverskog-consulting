import { Bird, Trees, ShieldCheck, FileCheck, Handshake, Building2, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Bird,
    title: "Spetskompetens inom fåglar och artskydd",
    description:
      "Lång erfarenhet av fågelinventeringar, artskyddsbedömningar och livsmiljöanalyser i skogslandskap.",
  },
  {
    icon: Trees,
    title: "Förståelse för både naturvård och skogsbruk",
    description:
      "Bakgrund inom operativt skogsbruk ger en ovanlig förmåga att väga produktionsmål mot naturvärden.",
  },
  {
    icon: ShieldCheck,
    title: "Säkra beslutsunderlag och minskade risker",
    description:
      "Tydliga rapporter och rekommendationer som hjälper dig att möta lagkrav och fatta rätt beslut.",
  },
  {
    icon: FileCheck,
    title: "Anpassat efter certifiering och myndigheter",
    description:
      "Erfarenhet av FSC, PEFC, länsstyrelser och Skogsstyrelsen – underlag som håller i både granskning och samråd.",
  },
  {
    icon: Handshake,
    title: "Nära samarbete och tydlig kommunikation",
    description:
      "Jag arbetar nära uppdragsgivaren med korta beslutsvägar och löpande dialog under hela uppdraget.",
  },
  {
    icon: Building2,
    title: "Erfarenhet från stora aktörer",
    description:
      "Tidigare uppdrag för bland annat Holmen, SCA, E.ON, kommuner och myndigheter.",
  },
];

const testimonials = [
  {
    quote:
      "Beverskog Consulting levererade ett tydligt och användbart beslutsunderlag som gjorde det möjligt att förena skogsbruksplaneringen med god naturhänsyn.",
    attribution: "Uppdragsgivare, större skogsbolag",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-accent uppercase mb-4 font-body">
              <span className="w-8 h-px bg-accent" />
              Förtroende & kvalitet
              <span className="w-8 h-px bg-accent" />
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-5">
              Därför anlitar kunder Beverskog Consulting AB
            </h2>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-6">
              En sammansvetsad kombination av biologisk expertis, skoglig erfarenhet och fokus på tydliga leveranser.
            </p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Vill du veta mer om hur jag kan hjälpa dig?
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group bg-card rounded-xl p-6 border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 leading-tight">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.attribution}
                className="bg-card rounded-2xl p-8 md:p-12 border border-border/60 relative overflow-hidden"
              >
                <Quote className="absolute top-6 left-6 w-10 h-10 text-accent/20" />
                <div className="relative z-10 max-w-3xl">
                  <blockquote className="font-heading text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                    “{testimonial.quote}”
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="font-heading font-bold text-lg">B</span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground">
                        {testimonial.attribution}
                      </p>
                      <p className="text-sm text-muted-foreground">Kundcitat</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

    </section>
  );
  );
};

export default WhyChooseSection;
