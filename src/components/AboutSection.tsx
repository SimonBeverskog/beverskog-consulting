import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import personImage from "@/assets/lynx-personbild.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src={personImage}
                alt="Lynx Beverskog, skogsvetare och naturvårdskonsult, under fältarbete med inventering"
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async" />

            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body">
              Personen bakom Beverskog Consulting
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Lynx Beverskog
            </h2>
            <p className="font-body text-lg font-semibold text-primary mb-6">
              Skogsvetare, naturvårdskonsult, ornitolog och ringmärkare
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body">
              Jag hjälper skogsägare, företag och myndigheter med kvalificerade beslutsunderlag inom naturvård och artskydd. Jag har en kandidatexamen i skogsvetenskap från Linnéuniversitetet och fem års erfarenhet som naturvårdsspecialist på Holmen Skog.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body">
              Min specialistkompetens inom skogslevande fåglar kombineras med erfarenhet av skoglig planering och certifieringsfrågor. Det ger en praktisk grund för inventeringar, analyser och åtgärdsförslag.
            </p>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Specialområden</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-body mb-6">
              <li><Link to="/tjanster/fagelinventeringar" className="text-primary hover:underline">Fågelinventering</Link> och riktade artinventeringar</li>
              <li><Link to="/tjanster/naturvardesinventering" className="text-primary hover:underline">Naturvärdesinventering, NVI</Link></li>
              <li><Link to="/tjanster/artinventeringar" className="text-primary hover:underline">Artskydd och biologisk mångfald</Link></li>
              <li>Skoglig naturvård, <Link to="/tjanster/nyckelbiotoper" className="text-primary hover:underline">nyckelbiotoper</Link> och FSC/PEFC</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body">
              Jag utför uppdrag i hela Sverige med utgångspunkt i Småland. Underlagen anpassas till ditt projekt och kan omfatta rapporter, GIS-kartor och konkreta åtgärdsförslag.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 font-body">
              Du har direktkontakt med mig genom hela uppdraget – från planering och fältarbete till analys och rapportering.
            </p>
            <Button asChild size="lg">
              <a href="#contact">Kontakta Lynx<ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;