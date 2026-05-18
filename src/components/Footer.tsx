import { Linkedin } from "lucide-react";
import logo from "@/assets/beverskog-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Beverskog Consulting" className="h-12 w-auto bg-primary-foreground/5 rounded p-1" />
          <p className="text-sm text-primary-foreground/70 font-body">
          © {new Date().getFullYear()} Beverskog Consulting AB. Alla rättigheter förbehållna.
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/lynx-beverskog-22170415a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
          aria-label="LinkedIn-profil"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
