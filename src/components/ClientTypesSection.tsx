import { Trees, Building2, Landmark, BadgeCheck, Wind, Scale, Shield } from "lucide-react";

const clientTypes = [
  {
    icon: Trees,
    label: "Skogsbolag & markägare",
    featured: true,
  },
  { icon: Building2, label: "Exploatörer & konsulter" },
  { icon: Wind, label: "Vindkraft & infrastruktur" },
  { icon: Landmark, label: "Kommuner & myndigheter" },
  { icon: Shield, label: "Länsstyrelser & Skogsstyrelsen" },
  { icon: Scale, label: "Advokatbyråer (sakkunnig)" },
  { icon: BadgeCheck, label: "Certifierat skogsbruk (FSC / PEFC)" },
];

const ClientTypesSection = () => {
  return (
    <section id="client-types" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-3 font-body">
            Uppdragsgivare
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Jag arbetar främst med
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            Erfarenhet från uppdrag åt enskilda markägare, ledande skogsbolag, exploatörer
            och offentliga aktörer.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientTypes.map(({ icon: Icon, label, featured }) => (
            <div
              key={label}
              className={`flex items-center gap-4 rounded-lg p-5 border transition-all duration-300 ${
                featured
                  ? "bg-card border-primary/40 shadow-md"
                  : "bg-card border-border/50 shadow-sm hover:shadow-md"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 ${
                  featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <p className="font-heading text-sm md:text-base font-semibold text-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTypesSection;