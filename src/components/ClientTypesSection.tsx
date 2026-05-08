import { Trees, Building2, Landmark, BadgeCheck, Wind, Scale, Shield } from "lucide-react";

const featuredClient = {
  icon: Trees,
  label: "Skogsbolag & markägare",
  description:
    "Min huvudsakliga målgrupp – från enskilda markägare till de största skogsbolagen. Inventeringar, naturvårdsplanering och beslutsunderlag som förenar produktion och naturvärden.",
};

const clientTypes = [
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
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body">
            Vem jag hjälper
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Jag arbetar främst med:
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-10 shadow-lg mb-6 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-md bg-primary-foreground/15 flex items-center justify-center shrink-0">
              <featuredClient.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-2 font-body">
                Främsta målgrupp
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                {featuredClient.label}
              </h3>
              <p className="text-primary-foreground/85 leading-relaxed font-body">
                {featuredClient.description}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clientTypes.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-card rounded-lg p-5 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-heading text-sm md:text-base font-semibold text-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTypesSection;