import projectTimber from "@/assets/project-timber.jpg";
import projectConservation from "@/assets/project-conservation.jpg";
import projectReforestation from "@/assets/project-reforestation.jpg";

const projects = [
  {
    image: projectTimber,
    title: "Oak Woodland Valuation",
    description:
      "Conducted a comprehensive timber valuation across 120 hectares of mixed oak woodland for a private estate.",
    result: "Identified £340K in standing timber value and developed a 10-year sustainable harvest plan.",
  },
  {
    image: projectConservation,
    title: "Wetland Habitat Restoration",
    description:
      "Designed and implemented a conservation management plan to restore a degraded wetland ecosystem.",
    result: "Achieved protected habitat status within 18 months, with a 40% increase in species diversity.",
  },
  {
    image: projectReforestation,
    title: "Community Reforestation Programme",
    description:
      "Led the planning and planting phase of a 50-hectare reforestation initiative on former agricultural land.",
    result: "Successfully planted 25,000 native trees with 92% survival rate after the first year.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body">
            My Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Projects & Case Studies
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
                    <span className="font-semibold text-primary">Result:</span>{" "}
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
