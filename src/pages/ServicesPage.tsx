import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { services } from "@/data/services";

const SITE = "https://beverskog.com";

const ServicesPage = () => (
  <div className="min-h-screen bg-background">
    <PageMeta
      title="Tjänster – naturvärdesinventering, fågelinventering & artskydd | Beverskog Consulting AB"
      description="Alla tjänster från Beverskog Consulting AB: naturvärdesinventering, fågelinventeringar, artskyddsutredning, nyckelbiotoper, hänsynsförslag, rådgivning, utbildning och MKB-underlag."
      jsonLd={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ItemList",
            name: "Tjänster från Beverskog Consulting AB",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.title,
              url: `${SITE}/tjanster/${s.slug}`,
            })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Hem", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Tjänster", item: `${SITE}/tjanster` },
            ],
          },
        ],
      }}
    />
    <Navbar />
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <nav aria-label="Länkväg" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Hem</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-foreground font-medium" aria-current="page">Tjänster</li>
          </ol>
        </nav>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          Tjänster inom naturvård och skoglig rådgivning
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Naturvärdesinventering, fågelinventering och artskyddsutredning som ger säkra beslutsunderlag för
          skogsbruk, exploatering och certifiering enligt FSC och PEFC. Välj en tjänst för att läsa mer.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/tjanster/${s.slug}`}
                className="group block rounded-lg border border-border bg-card p-6 hover:border-primary transition-colors"
              >
                <Icon className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                <h2 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h2>
                <p className="text-muted-foreground mb-4">{s.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Läs mer om {s.title.toLowerCase()}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-16 rounded-lg bg-secondary p-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Diskutera ditt projekt</h2>
          <p className="text-muted-foreground mb-6">Osäker på vilken tjänst du behöver? Hör av dig så hjälper jag dig.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" state={{ scrollTo: "contact" }} className="inline-flex items-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              Begär offert
            </Link>
            <a href="tel:+46708896588" className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 font-medium text-primary hover:bg-primary/10 transition-colors">
              <Phone className="w-4 h-4" /> 070-889 65 88
            </a>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ServicesPage;
