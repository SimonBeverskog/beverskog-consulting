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


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Naturvärdesinventering & fågelinventering | Beverskog Consulting AB"
        description="Naturvärdesinventering (NVI), fågelinventering och artskyddsutredning av skogsvetare med spetskompetens inom artskydd. Säkra beslutsunderlag för skogsbruk, exploatering, FSC och PEFC."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Beverskog Consulting AB",
          description:
            "Naturvårdskonsult specialiserad på naturvärdesinventering, fågelinventering, artskyddsutredning och skoglig rådgivning i hela Sverige.",
          url: "https://beverskog.com/",
          email: "lynx@beverskog.com",
          telephone: "+46708896588",
          areaServed: "SE",
          knowsAbout: [
            "Naturvärdesinventering",
            "Fågelinventering",
            "Artskyddsutredning",
            "Nyckelbiotoper",
            "Biologisk mångfald",
            "Skoglig rådgivning",
            "FSC",
            "PEFC",
          ],
          founder: {
            "@type": "Person",
            name: "Lynx Beverskog",
            jobTitle: "Skogsvetare och naturvårdskonsult",
          },
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <TopCtaSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <ClientTypesSection />
        <ProjectsSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
