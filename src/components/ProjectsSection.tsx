import projectTimber from "@/assets/project-timber.jpg";
import projectConservation from "@/assets/project-conservation.jpg";
import projectReforestation from "@/assets/project-reforestation.jpg";

const projects = [
  {
    image: projectTimber,
    title: "Fågelinventeringar med hög precision",
    description:
      "Genomförde en omfattande fågelinventering inom ett större skogsinnehav som underlag inför planerade avverkningar. Arbetet omfattade systematisk kartläggning av häckande arter och identifiering av områden med särskilda naturvärden.",
    result: "Levererade tydliga rekommendationer och hänsynsförslag som möjliggjorde skogsbruksåtgärder i linje med artskyddet och en långsiktigt bevarad biologisk mångfald.",
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
