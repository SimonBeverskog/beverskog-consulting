import aboutImage from "@/assets/about-field.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img

                alt="Lynx Beverskog i fält"
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy" src="/lovable-uploads/a7c501af-6407-43b5-a802-e28ec24533fb.jpg" />

            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body">
              Vem jag är
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Om mig
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body">
              Jag heter Lynx Beverskog och driver Beverskog Consulting AB. Jag är skogligt utbildad med kandidatexamen i skogsvetenskap och har flera års erfarenhet som naturvårdsspecialist på Holmen Skog. Min bakgrund omfattar även virkesköp och traktplanering vilket ger mig en bred och praktisk förståelse för skogsbrukets hela verksamhet.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body">
              Jag är utbildad inom Naturvärdesinventering (NVI) och nyckelbiotoper och arbetar professionellt med naturvård och artskydd i skogen. Min spetskompetens är fågelinventeringar där jag under många år varit ledande i metodik, kvalitetssäkring och artkunskap. Jag utför även andra typer av artinventeringar och naturvärdesanalyser med hög precision.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              Beverskog Consulting AB erbjuder skoglig expertis och tillförlitliga beslutsunderlag för företag som behöver stöd i naturvårdsfrågor, planering eller skogsrelaterade projekt där både produktion och naturvärden behöver vägas samman.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;