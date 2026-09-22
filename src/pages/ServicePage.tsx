import { useParams, useNavigate, Link } from "react-router-dom";
import { services } from "@/data/services";
import { serviceExtras } from "@/data/serviceExtras";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PageMeta from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowDown, ArrowRight, Check } from "lucide-react";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);
  const extra = slug ? serviceExtras[slug] : undefined;

  const handleBackToServices = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Tjänsten hittades inte</h1>
          <Link to="/" className="text-primary hover:underline">Tillbaka till startsidan</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;
  const related = (extra?.related ?? [])
    .map((s) => services.find((x) => x.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title={extra?.metaTitle ?? `${service.title} | Beverskog Consulting AB`}
        description={extra?.metaDescription ?? service.description}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: service.title,
              serviceType: service.title,
              description: extra?.metaDescription ?? service.description,
              areaServed: "SE",
              url: `https://beverskog.com/tjanster/${service.slug}`,
              provider: {
                "@type": "ProfessionalService",
                name: "Beverskog Consulting AB",
                url: "https://beverskog.com/",
                email: "lynx@beverskog.com",
                telephone: "+46708896588",
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Start",
                  item: "https://beverskog.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Tjänster",
                  item: "https://beverskog.com/#services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: service.title,
                  item: `https://beverskog.com/tjanster/${service.slug}`,
                },
              ],
            },
            ...(extra?.faq
              ? [
                  {
                    "@type": "FAQPage",
                    mainEntity: extra.faq.map((item) => ({
                      "@type": "Question",
                      name: item.question,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: item.answer,
                      },
                    })),
                  },
                ]
              : []),
          ],
        }}
      />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <button
            onClick={handleBackToServices}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Tillbaka till tjänster
          </button>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              {service.title}
            </h1>
          </div>

          <div className="space-y-6">
            {extra?.intro && (
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-body">
                {extra.intro}
              </p>
            )}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
              {service.longDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" onClick={scrollToContact}>
                Begär offert
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToContact}>
                Kontakta mig för rådgivning
              </Button>
            </div>

            {extra?.benefits && (
              <div className="bg-secondary/40 rounded-lg p-6 md:p-8 border border-border/50">
                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
                  Din nytta som uppdragsgivare
                </h2>
                <ul className="space-y-3">
                  {extra.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed font-body"
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground pt-2">
              Därför anlitar kunder Beverskog Consulting
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
              {service.whyHireMeIntro.startsWith("Med Beverskog Consulting") ? (
                <>Med <strong className="text-foreground">Beverskog Consulting</strong>{service.whyHireMeIntro.slice(24)}</>
              ) : service.whyHireMeIntro.startsWith("Beverskog Consulting") ? (
                <><strong className="text-foreground">Beverskog Consulting</strong>{service.whyHireMeIntro.slice(20)}</>
              ) : service.whyHireMeIntro.startsWith("Att anlita Beverskog Consulting") ? (
                <>Att anlita <strong className="text-foreground">Beverskog Consulting</strong>{service.whyHireMeIntro.slice(31)}</>
              ) : (
                service.whyHireMeIntro
              )}
            </p>
            <ul className="space-y-3 pl-1">
              {service.whyHireMeBullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3 text-base md:text-lg text-muted-foreground leading-relaxed font-body">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
              {service.whyHireMeOutro}
            </p>

            <div className="pt-2">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                Om mig som utför uppdraget
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
                Uppdragen utförs av Lynx Beverskog, skogsvetare och tidigare naturvårdsspecialist på
                Holmen Skog, med spetskompetens inom fåglar och artskydd. Kombinationen av
                fältbiologisk expertis och praktisk erfarenhet av skogsbruk, virkesköp och
                certifiering enligt FSC och PEFC gör att du får underlag som både håller biologiskt
                och fungerar i den dagliga verksamheten.
              </p>
            </div>
          </div>

          {extra?.faq && (
            <div className="mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Vanliga frågor om {service.title.toLowerCase()}
              </h2>
              <div className="space-y-5">
                {extra.faq.map((item) => (
                  <div
                    key={item.question}
                    className="bg-card rounded-lg p-6 border border-border/50"
                  >
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {item.question}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed font-body">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Relaterade tjänster
              </h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/tjanster/${item.slug}`}
                    className="group bg-card rounded-lg p-6 border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Läs mer <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-14">
            <Button size="lg" onClick={scrollToContact}>
              Begär offert
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact}>
              Diskutera ditt projekt
            </Button>
          </div>
        </div>
      </main>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ServicePage;
