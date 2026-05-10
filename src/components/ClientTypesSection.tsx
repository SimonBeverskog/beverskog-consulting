const clientTypes = [
  {
    label: "Skogsbolag & markägare",
    description:
      "Från enskilda markägare till de största skogsbolagen – beslutsunderlag som förenar produktion och naturvärden.",
  },
  {
    label: "Exploatörer & konsulter",
    description:
      "Underlag för MKB, tillstånd och samråd vid exploaterings- och infrastrukturprojekt.",
  },
  {
    label: "Vindkraft & infrastruktur",
    description:
      "Fågelinventeringar, artskyddsutredningar och fältarbete inför etablering och drift.",
  },
  {
    label: "Kommuner & myndigheter",
    description:
      "Naturvärdesinventeringar och planeringsunderlag för översikts- och detaljplanering.",
  },
  {
    label: "Länsstyrelser & Skogsstyrelsen",
    description:
      "Sakkunniga uppdrag, fältkontroller och bedömningar i ärenden om artskydd och skogsbruk.",
  },
  {
    label: "Advokatbyråer & juridiska ombud",
    description:
      "Sakkunnigutlåtanden och tekniska underlag i miljömål och överklaganden.",
  },
  {
    label: "Certifierat skogsbruk (FSC / PEFC)",
    description:
      "Inventeringar och dokumentation som möter krav i certifieringsstandarder.",
  },
];

const ClientTypesSection = () => {
  return (
    <section id="client-types" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Editorial header */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20 items-end border-b border-border pb-10">
            <div className="md:col-span-5">
              <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase mb-4 font-body">
                <span className="inline-block w-8 h-px bg-accent align-middle mr-3" />
                Uppdragsgivare
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05]">
                Jag arbetar främst med
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                Långsiktiga samarbeten med aktörer som efterfrågar grundliga,
                fältbaserade beslutsunderlag – från privata markägare och bolag
                till myndigheter och juridiska ombud.
              </p>
            </div>
          </div>

          {/* Editorial numbered list */}
          <ol className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-0">
            {clientTypes.map((c, i) => (
              <li
                key={c.label}
                className="group grid grid-cols-[3rem_1fr] gap-6 py-6 border-b border-border/60 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0 transition-colors hover:bg-muted/30"
              >
                <span className="font-heading text-sm font-semibold text-accent tracking-wider pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-2 leading-tight">
                    {c.label}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ClientTypesSection;