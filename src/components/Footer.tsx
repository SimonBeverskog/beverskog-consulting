import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="max-w-sm">
            <p className="font-heading text-lg font-bold mb-3">Beverskog Consulting AB</p>
            <p className="text-sm text-primary-foreground/70 font-body leading-relaxed">
              Skoglig expertis för hållbara beslut — naturvärdesinventering, fågelinventering,
              artskyddsutredning och skoglig rådgivning i hela Sverige.
            </p>
          </div>
          <nav aria-label="Tjänster">
            <p className="font-heading text-base font-semibold mb-3">Tjänster</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/tjanster/${service.slug}`}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 font-body"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-heading text-base font-semibold mb-3">Kontakt</p>
            <ul className="space-y-2 text-sm text-primary-foreground/70 font-body">
              <li>
                <a href="tel:+46708896588" className="hover:text-primary-foreground transition-colors duration-200">
                  070-889 65 88
                </a>
              </li>
              <li>
                <a href="mailto:lynx@beverskog.com" className="hover:text-primary-foreground transition-colors duration-200">
                  lynx@beverskog.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lynx-beverskog-22170415a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary-foreground transition-colors duration-200"
                  aria-label="LinkedIn-profil"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70 font-body">
            © {new Date().getFullYear()} Beverskog Consulting AB. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
