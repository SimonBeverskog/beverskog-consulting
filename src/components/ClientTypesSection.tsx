import { Trees, Building2, Wind, Landmark, Shield, Scale, BadgeCheck } from "lucide-react";

const featured = {
  icon: Trees,
  label: "Skogsbolag & markägare",
  description:
    "Min huvudsakliga målgrupp – från enskilda markägare till de största skogsbolagen. Inventeringar, naturvårdsplanering och beslutsunderlag som förenar produktion och naturvärden.",
};

const clientTypes = [
  {
    icon: Building2,
    label: "Exploatörer & konsulter",
    description: "Underlag för MKB, tillstånd och samråd i exploaterings- och infrastrukturprojekt.",
  },
  {
    icon: Wind,
    label: "Vindkraft & infrastruktur",
    description: "Fågelinventeringar och artskyddsutredningar inför etablering och drift.",
  },
  {
    icon: Landmark,
    label: "Kommuner & myndigheter",
    description: "Naturvärdesinventeringar och planeringsunderlag för översikts- och detaljplaner.",
  },
  {
    icon: Shield,
    label: "Länsstyrelser & Skogsstyrelsen",
    description: "Sakkunniga uppdrag och fältkontroller i artskydds- och skogsbruksärenden.",
  },
  {
    icon: Scale,
    label: "Advokatbyråer & juridiska ombud",
    description: "Sakkunnigutlåtanden och tekniska underlag i miljömål och överklaganden.",
  },
  {
    icon: BadgeCheck,
    label: "Certifierat skogsbruk (FSC / PEFC)",
    description: "Inventeringar och dokumentation som möter krav i certifieringsstandarder.",
  },
];

const ClientTypesSection = () => {
  return (
    <section id="client-types" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-accent uppercase mb-4 font-body">
              <span className="w-8 h-px bg-accent" />
              Uppdragsgivare
              <span className="w-8 h-px bg-accent" />
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-5">
              Jag arbetar främst med
            </h2>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
              Skogsbolag och markägare står i centrum – men jag tar också uppdrag åt
              exploatörer, myndigheter och juridiska ombud.
            </p>
          </div>

          {/* Featured primary target group */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 shadow-xl mb-6 flex flex-col md:flex-row items-start gap-6 md:gap-8">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/15 flex items-center justify-center shrink-0">
              <featured.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-primary-foreground/70 mb-3 font-body">
                Främsta målgrupp
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3 leading-tight">
                {featured.label}
              </h3>
              <p className="text-primary-foreground/85 font-body leading-relaxed max-w-2xl">
                {featured.description}
              </p>
            </div>
          </div>

          {/* Other clients */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {clientTypes.map(({ icon: Icon, label, description }) => (
              <div
                key={label}
                className="group bg-card rounded-xl p-6 border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2 leading-tight">
                  {label}
                </h4>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {description}
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