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


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Naturvärdesinventering, fågelinventering & artskydd | Beverskog Consulting"
        description="Naturvärdesinventering (NVI), fågelinventering och artskyddsutredning av skogsvetare med spetskompetens inom artskydd. Säkra beslutsunderlag för skogsbruk, exploatering, FSC och PEFC."
      />
      <Navbar />
      <main>
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
