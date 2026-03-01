import projectTimber from "@/assets/project-timber.jpg";
import projectConservation from "@/assets/project-conservation.jpg";
import projectReforestation from "@/assets/project-reforestation.jpg";
import projectWetland from "@/assets/project-wetland.jpg";
import projectBiodiversity from "@/assets/project-biodiversity.jpg";
import projectImpact from "@/assets/project-impact.jpg";

const projects = [
  {
    image: projectTimber,
    title: "Fågelinventeringar med hög precision",
    description:
      "Genomförde en omfattande fågelinventering inom ett större skogsinnehav som underlag inför planerade avverkningar. Arbetet omfattade systematisk kartläggning av häckande arter och identifiering av områden med särskilda naturvärden.",
    result: "gtLevererade tydliga rekommendationer och hänsynsförslag som möjliggjorde skogsbruksåtgärder i linje med artskyddet och en långsiktigt bevarad biologisk mångfald.",
  },
  {
    image: projectReforestation,
    title: "Naturvärdesinventering som beslutsunderlag",
    description:
      "Genomförde en naturvärdesinventering i ett större skogsområde med fokus på att identifiera och avgränsa nyckelbiotoper. Arbetet omfattade fältbedömningar och dokumentation av strukturer och artförekomster.",
    result: "Kartlade nyckelbiotoper och lämnade åtgärds- och hänsynsförslag som införlivades i bolagets skogsbruksplan.",
  },
  {
    image: projectConservation,
    title: "Artskyddsutredning vid exploatering",
    description:
      "Genomförde en artskyddsbedömning inför ett infrastrukturprojekt i skogsmark med dokumenterade naturvärden. Arbetet omfattade fältkontroller, bedömning av skyddade arter och analys av potentiell påverkan.",
    result: "Säkerställde att projektet kunde genomföras med korrekta hänsynsåtgärder och utan negativ påverkan på skyddade arter.",
  },
  {
    image: projectWetland,
    title: "Våtmarksinventering och restaureringsplan",
    description:
      "Utförde en inventering av en degraderad våtmark i anslutning till skogsmark, med fokus på hydrologiska förutsättningar och förekomst av våtmarksarter. Arbetet inkluderade bedömning av restaureringspotential.",
    result: "Levererade en restaureringsplan som låg till grund för markägarens ansökan om bidrag för våtmarksåterställning.",
  },
  {
    image: projectBiodiversity,
    title: "Nyckelbiotopsbedömning inför skogliga åtgärder",
    description:
      "Genomförde en systematisk bedömning av potentiella nyckelbiotoper inom ett skogslandskap inför planerade skogsbruksåtgärder. Arbetet omfattade noggranna fältinventeringar, kartläggning av hydrologiska och ekologiska strukturer samt identifiering av signalarter enligt gällande kriterier.",
    result: "Levererade detaljerat beslutsunderlag med konkreta åtgärds- och hänsynsförslag som integrerades i skogsbruksplanen och säkerställde långsiktigt bevarande av de identifierade naturvärdena.",
  },
  {
    image: projectImpact,
    title: "Miljökonsekvensbedömning och våtmarksrestaurering",
    description:
      "Genomförde en integrerad bedömning av naturvärden inför etablering av vindkraft i ett skogslandskap samt inventering av en angränsande degraderad våtmark. Arbetet omfattade fältinventeringar av fåglar, fladdermöss och känsliga biotoper, hydrologisk analys, kartläggning av våtmarksarter samt bedömning av restaurerings- och etableringspotential.",
    result: "Kartlade planer som identifierade konfliktytor och föreslog placeringsalternativ för vindkraft med minimal påverkan på naturvärden, samtidigt som en restaureringsplan för våtmarken utformades som underlag för bidragsansökan och långsiktigt bevarande.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body">
            Mitt arbete
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Projekt & uppdrag
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl border border-border/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-body">
                  {project.description}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-body">
                    <span className="font-semibold text-primary">Resultat:</span>{" "}
                    <span className="text-muted-foreground">{project.result}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
