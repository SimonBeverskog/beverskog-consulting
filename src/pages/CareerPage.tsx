import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerContactSection from "@/components/CareerContactSection";
import { Briefcase, Users, TrendingUp, MapPin } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Professionell utveckling",
    description: "Utveckla din kompetens inom skogsekologi, skogsbruk, artkunskap och biologisk mångfald.",
  },
  {
    icon: Users,
    title: "Starkt nätverk",
    description: "Arbeta nära kunder och experter inom skog, naturvård och ekologi.",
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
            Arbetet omfattar allt från inventeringar och naturvärdesbedömningar till rådgivning och analys i skogliga miljöer, ofta i sammanhang där olika intressen behöver vägas mot varandra.
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
              Vi söker personer med intresse och kompetens inom skog, ekologi och naturmiljöer. Oavsett om din bakgrund är inom skogsekologi, skogsbruk, artkunskap eller närliggande områden vill vi gärna komma i kontakt med dig.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                Relevant utbildning och/eller erfarenhet inom skog, ekologi eller naturvård
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                Engagemang och noggrannhet i ditt arbete
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                Förmåga att arbeta självständigt och i samarbeten
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                Nyfikenhet och vilja att utvecklas
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CareerContactSection />

      <Footer />
    </div>
  );
};

export default CareerPage;
