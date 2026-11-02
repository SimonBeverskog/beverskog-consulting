import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TopCtaSection from "@/components/TopCtaSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesSection from "@/components/ServicesSection";
import ClientTypesSection from "@/components/ClientTypesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import FaqSection from "@/components/FaqSection";
import ProcessSection from "@/components/ProcessSection";
import { homeFaqs } from "@/data/homeFaqs";
import { homeGraph } from "@/lib/structuredData";

// Organisation, person och webbplats ligger redan i sidhuvudet (index.html),
// här läggs bara startsidans egna frågor till.
const homeJsonLd = homeGraph(homeFaqs);

export const HOME_TITLE = "Naturvärdesinventering, fågelinventering & artskydd | Beverskog Consulting AB";
export const HOME_DESCRIPTION =
  "Naturvårdskonsult och skogsvetare — naturvärdesinventering, fågelinventering, artskyddsutredning och skoglig rådgivning för säkra beslutsunderlag. FSC/PEFC, nyckelbiotoper och biologisk mångfald.";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta title={HOME_TITLE} description={HOME_DESCRIPTION} jsonLd={homeJsonLd} />
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <TopCtaSection />
        <ServicesSection />
        <ClientsSection />
        <ClientTypesSection />
        <ProjectsSection />
        <ProcessSection />
        <WhyChooseSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
