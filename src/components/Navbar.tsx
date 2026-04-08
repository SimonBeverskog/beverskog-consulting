import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Hem", href: "#home" },
  { label: "Om mig", href: "#about" },
  { label: "Tjänster", href: "#services" },
  { label: "Projekt", href: "#projects" },
  { label: "Karriär", href: "/karriar", isRoute: true },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const renderLink = (link: typeof navLinks[0], onClick?: () => void) => {
    const className = "text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200";
    if (link.isRoute) {
      return <Link to={link.href} className={className} onClick={onClick}>{link.label}</Link>;
    }
    return <a href={link.href} className={className} onClick={onClick}>{link.label}</a>;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Beverskog Consulting" className="h-10 w-auto" />
          <span className="font-heading text-xl font-bold text-primary">Beverskog Consulting</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>{renderLink(link)}</li>
          ))}
        </ul>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Öppna meny"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="flex flex-col py-4 px-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>{renderLink(link, () => setOpen(false))}</li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
