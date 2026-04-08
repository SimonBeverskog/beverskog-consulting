import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Users, TrendingUp, MapPin, Send } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Professionell utveckling",
    description: "Vi investerar i din karriär genom kontinuerlig kompetensutveckling och mentorskap.",
  },
  {
    icon: Users,
    title: "Starkt nätverk",
    description: "Få tillgång till ett brett nätverk av kunder och branschexperter inom skogsindustrin.",
  },
  {
    icon: Briefcase,
    title: "Varierande uppdrag",
    description: "Arbeta med spännande och utmanande projekt hos ledande aktörer inom skogsnäringen.",
  },
  {
    icon: MapPin,
    title: "Flexibilitet",
    description: "Vi erbjuder flexibla arbetsformer och möjlighet att påverka din egen arbetsvardag.",
  },
];

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Karriär hos Beverskog Consulting
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vill du vara en del av ett växande konsultbolag med djupa rötter i skogsindustrin? 
            Vi söker alltid efter kompetenta och engagerade personer som vill göra skillnad.
          </p>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Varför jobba med oss?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we're looking for */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-8">
            Vem söker vi?
          </h2>
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Vi letar efter personer med erfarenhet och passion för skogsindustrin. 
              Oavsett om du är specialist inom skogsbruk, logistik, hållbarhet eller 
              affärsutveckling – vi vill höra från dig.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                Relevant utbildning och/eller erfarenhet inom skogsindustrin
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                Driv och engagemang för att leverera resultat
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                God kommunikationsförmåga och samarbetsvilja
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                Intresse för att utvecklas och ta sig an nya utmaningar
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Intresserad?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Skicka din ansökan eller ett meddelande till oss så berättar vi mer om 
            möjligheterna hos Beverskog Consulting.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            <Send className="w-4 h-4" />
            Kontakta oss
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerPage;
