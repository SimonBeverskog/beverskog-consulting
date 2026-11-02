import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/beverskog-logo.png";
import { PHONE_DISPLAY, PHONE_E164 } from "@/data/site";

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
  const location = useLocation();
  const navigate = useNavigate();

  // Stäng mobilmenyn med Escape och när sidan byts.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => setOpen(false), [location.pathname]);

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onClick?: () => void) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      const hash = href.startsWith("#") ? href.slice(1) : href;
      navigate("/", { state: { scrollTo: hash } });
    }
    onClick?.();
  };

  const renderLink = (link: typeof navLinks[0], onClick?: () => void) => {
    const className =
      "text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 rounded-sm";
    if (link.isRoute) {
      const active = location.pathname === link.href;
      return (
        <Link
          to={link.href}
          className={className}
          onClick={onClick}
          aria-current={active ? "page" : undefined}
        >
          {link.label}
        </Link>
      );
    }
    return (
      <a href={link.href} className={className} onClick={(e) => handleHashClick(e, link.href, onClick)}>
        {link.label}
      </a>
    );
  };

  const phoneLink = (
    <a
      href={`tel:${PHONE_E164}`}
      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 rounded-sm"
    >
      <Phone className="w-4 h-4" aria-hidden="true" />
      {PHONE_DISPLAY}
    </a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <nav aria-label="Huvudmeny" className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-sm"
          aria-label="Beverskog Consulting AB – till startsidan"
          onClick={() => {
            if (location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="" width={73} height={40} className="h-10 w-auto" />
          <span className="font-heading text-lg sm:text-xl font-bold text-primary whitespace-nowrap">
            Beverskog Consulting AB
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>{renderLink(link)}</li>
          ))}
          <li>{phoneLink}</li>
        </ul>

        <button
          type="button"
          className="lg:hidden text-foreground p-2 -mr-2 rounded-md"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          aria-controls="mobilmeny"
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobilmeny" className="lg:hidden bg-background border-b border-border">
          <ul className="flex flex-col py-4 px-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>{renderLink(link, () => setOpen(false))}</li>
            ))}
            <li>{phoneLink}</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
