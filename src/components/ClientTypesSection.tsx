import { Trees, Building2, Wind, Landmark, Shield, Scale, BadgeCheck } from "lucide-react";

const groups = [
  {
    title: "Privat sektor",
    description: "Markägare och bolag som behöver trygga beslutsunderlag i drift och utveckling.",
    items: [
      {
        icon: Trees,
        label: "Skogsbolag & markägare",
        tag: "Vanligast",
        description:
          "Från enskilda markägare till de största skogsbolagen – underlag som förenar produktion och naturvärden.",
      },
      {
        icon: Building2,
        label: "Exploatörer & konsulter",
        description:
          "Underlag för MKB, tillstånd och samråd vid exploaterings- och infrastrukturprojekt.",
      },
      {
        icon: Wind,
        label: "Vindkraft & infrastruktur",
        description:
          "Fågelinventeringar, artskyddsutredningar och fältarbete inför etablering och drift.",
      },
    ],
  },
  {
    title: "Offentlig sektor",
    description: "Myndigheter och kommuner som behöver fältbaserade kunskapsunderlag.",
    items: [
      {
        icon: Landmark,
        label: "Kommuner & myndigheter",
        description:
          "Naturvärdesinventeringar och planeringsunderlag för översikts- och detaljplanering.",
      },
      {
        icon: Shield,
        label: "Länsstyrelser & Skogsstyrelsen",
        description:
          "Sakkunniga uppdrag, fältkontroller och bedömningar i ärenden om artskydd och skogsbruk.",
      },
    ],
  },
  {
    title: "Juridik & certifiering",
    description: "Aktörer där bedömningar måste hålla för granskning och standarder.",
    items: [
      {
        icon: Scale,
        label: "Advokatbyråer & juridiska ombud",
        description:
          "Sakkunnigutlåtanden och tekniska underlag i miljömål och överklaganden.",
      },
      {
        icon: BadgeCheck,
        label: "Certifierat skogsbruk (FSC / PEFC)",
        description:
          "Inventeringar och dokumentation som möter krav i certifieringsstandarder.",
      },
    ],
  },
];

const ClientTypesSection = () => {
  return (
    <section id="client-types" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-accent uppercase mb-4 font-body">
              <span className="w-8 h-px bg-accent" />
              Uppdragsgivare
              <span className="w-8 h-px bg-accent" />
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-5">
              Vem jag arbetar med
            </h2>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
              Mina uppdragsgivare delas in i tre tydliga grupper – från privata
              markägare och bolag till myndigheter och juridiska ombud.
            </p>
          </div>

          {/* Three pedagogical groups */}
          <div className="space-y-14 md:space-y-16">
            {groups.map((group, gi) => (
              <div key={group.title}>
                {/* Group header */}
                <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-border">
                  <span className="font-heading text-sm font-bold text-accent tracking-[0.2em]">
                    0{gi + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
                      {group.title}
                    </h3>
                  </div>
                  <p className="hidden md:block text-sm text-muted-foreground font-body max-w-md text-right">
                    {group.description}
                  </p>
                </div>
                <p className="md:hidden text-sm text-muted-foreground font-body mb-6">
                  {group.description}
                </p>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {group.items.map(({ icon: Icon, label, description, tag }) => (
                    <div
                      key={label}
                      className="group relative bg-card rounded-xl p-6 border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col"
                    >
                      {tag && (
                        <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-widest uppercase text-accent bg-accent/10 px-2 py-1 rounded-full font-body">
                          {tag}
                        </span>
                      )}
                      <div className="w-11 h-11 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground text-primary flex items-center justify-center mb-4 transition-colors duration-300">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTypesSection;