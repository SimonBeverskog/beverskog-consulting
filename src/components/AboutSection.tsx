import aboutImage from "@/assets/about-field.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src={aboutImage}
                alt="Forestry consultant examining a tree in the field"
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body">
              Who I Am
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body">
              With over 15 years of hands-on experience in forestry and environmental consulting,
              I bring a deep understanding of woodland ecosystems, timber markets, and conservation
              regulations to every project. My work is rooted in science and guided by a genuine
              passion for the natural world.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              From conducting ecological surveys in ancient woodlands to advising landowners on
              sustainable timber harvesting, I pride myself on delivering clear, actionable insights
              that protect both your interests and the environment. I hold certifications in
              arboriculture, environmental impact assessment, and forest management planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
