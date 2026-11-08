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
              Jag driver Beverskog Consulting AB och arbetar med naturvärdesinventering, fågelinventering, artskydd och skoglig rådgivning. Jag har en kandidatexamen i skogsvetenskap från Linnéuniversitetet och fem års erfarenhet som naturvårdsspecialist på Holmen Skog. Jag har även erfarenhet av virkesköp, traktplanering och skogliga fältinventeringar för Skogforsk.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body">
              Som ornitolog och ringmärkare har jag mångårig erfarenhet av fåglar, artbestämning och ringmärkning, med särskild kunskap om skogslevande fåglar. Kombinationen av ekologisk specialistkunskap och praktisk förståelse för skogsbruk gör att jag kan ta fram tydliga, välgrundade och användbara beslutsunderlag.
            </p>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Specialområden</h3>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground font-body mb-6">
              <li>Fåglar, artbestämning och ringmärkning</li>
              <li><Link to="/tjanster/fagelinventeringar" className="text-primary hover:underline">Fågelinventering</Link> och riktade artinventeringar</li>
              <li><Link to="/tjanster/naturvardesinventering" className="text-primary hover:underline">Naturvärdesinventering, NVI</Link></li>
              <li><Link to="/tjanster/artinventeringar" className="text-primary hover:underline">Artskydd och biologisk mångfald</Link></li>
              <li>Skoglig naturvård och hänsynsplanering</li>
              <li><Link to="/tjanster/nyckelbiotoper" className="text-primary hover:underline">Nyckelbiotopsinventering</Link></li>
              <li>FSC- och PEFC-frågor</li>
            </ul>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Arbetsområde och leveranser</h3>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body">
              Jag genomför uppdrag i hela Sverige, med utgångspunkt i Småland och möjlighet att utgå från Uppsala. Leveranser kan omfatta rapporter, GIS-underlag, kartor, fotodokumentation, analyser och konkreta åtgärdsförslag.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 font-body">
              Hos mig har du direktkontakt med personen som planerar, genomför, analyserar och rapporterar ditt uppdrag. Det ger korta beslutsvägar, nära samarbete och tydlig kommunikation genom hela arbetet.
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