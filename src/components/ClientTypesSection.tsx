import { Trees, Building2, Landmark, BadgeCheck } from "lucide-react";

const clientTypes = [
  { icon: Trees, label: "Skogsbolag & markägare" },
  { icon: Building2, label: "Exploatörer & konsulter" },
  { icon: Landmark, label: "Kommuner & myndigheter" },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {clientTypes.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center bg-card rounded-lg p-6 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-heading text-base font-semibold text-foreground">
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