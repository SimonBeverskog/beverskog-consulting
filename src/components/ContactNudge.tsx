import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactNudgeProps {
  /** "anchor" när kontaktformuläret finns på samma sida, annars "home". */
  target?: "anchor" | "home";
  className?: string;
}

const TEXT =
  "Osäker på vilket underlag som behövs? Beskriv området och den planerade åtgärden, så diskuterar vi ett lämpligt upplägg.";

const ContactNudge = ({ target = "anchor", className }: ContactNudgeProps) => {
  const linkClass =
    "inline-flex items-start gap-3 text-left text-base md:text-lg font-body text-foreground hover:text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors rounded-sm";
  const content = (
    <>
      <MessageCircle className="w-5 h-5 mt-1 shrink-0 text-primary" aria-hidden="true" />
      <span>{TEXT}</span>
    </>
  );
  return (
    <div className={cn("rounded-lg border border-primary/20 bg-card p-5 md:p-6", className)}>
      {target === "anchor" ? (
        <a href="#contact" className={linkClass}>{content}</a>
      ) : (
        <Link to="/" state={{ scrollTo: "contact" }} className={linkClass}>{content}</Link>
      )}
    </div>
  );
};

export default ContactNudge;
