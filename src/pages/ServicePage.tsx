import { useParams, useNavigate, Link } from "react-router-dom";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowDown } from "lucide-react";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  const handleBackToServices = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

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

  return (
    <div className="min-h-screen bg-background">
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
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
              {service.longDescription}
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body">
              {service.whyHireMe}
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <Button
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Kontakta mig
              <ArrowDown className="ml-2 w-4 h-4" />
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
