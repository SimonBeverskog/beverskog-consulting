import { TreePine, Leaf, Map, FileCheck } from "lucide-react";

const services = [
  {
    icon: TreePine,
    title: "Timber Valuation",
    description:
      "Accurate assessments of standing timber value, growth projections, and harvest planning to maximise your woodland's economic potential.",
  },
  {
    icon: Leaf,
    title: "Conservation Planning",
    description:
      "Biodiversity surveys, habitat management plans, and strategies to enhance ecological value while meeting regulatory requirements.",
  },
  {
    icon: Map,
    title: "Environmental Permitting",
    description:
      "Navigating complex environmental regulations, preparing impact assessments, and securing the permits you need for your projects.",
  },
  {
    icon: FileCheck,
    title: "Forest Management",
    description:
      "Long-term management plans covering planting, thinning, disease control, and sustainable harvesting for productive woodlands.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body">
            What I Offer
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
