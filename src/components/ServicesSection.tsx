import { TreePine, Bird, Leaf, Map, FileCheck, BookOpen, Shield } from "lucide-react";

const services = [
  {
    icon: TreePine,
    title: "Naturvärdesinventering (NVI)",
    description:
      "Inventering av naturvärden i skogs- och markområden med vedertagen metodik och hög precision.",
  },
  {
    icon: Bird,
    title: "Fågelinventeringar",
    description:
      "Inventering av häckfåglar, rovfåglar och känsliga arter med ledande metodik och artkunskap.",
  },
  {
    icon: Leaf,
    title: "Artinventeringar & artskydd",
    description:
      "Artinventeringar och bedömning av artskydd kopplat till skogliga åtgärder och planering.",
  },
  {
    icon: Map,
    title: "Nyckelbiotoper & naturvärden",
    description:
      "Bedömning av naturvärden och nyckelbiotoper som underlag för beslut och hänsyn.",
  },
  {
    icon: FileCheck,
    title: "Hänsyns- & åtgärdsförslag",
    description:
      "Konkreta förslag inför avverkning eller andra skogliga insatser med balans mellan produktion och naturvärden.",
  },
  {
    icon: Shield,
    title: "Strategisk rådgivning",
    description:
      "Rådgivning i planering och strategiskt naturvårdsarbete för företag och organisationer.",
  },
  {
    icon: BookOpen,
    title: "Utbildningar & föreläsningar",
    description:
      "Utbildningar och föreläsningar inom naturvård, biologisk mångfald och skogsbruk.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body">
            Vad jag erbjuder
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Tjänster
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-lg p-8 shadow-sm hover:shadow-lg border border-border/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
