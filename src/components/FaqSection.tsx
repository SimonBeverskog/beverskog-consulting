import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const homeFaqs = [
  {
    q: "Vad är en naturvärdesinventering (NVI)?",
    a: "En naturvärdesinventering kartlägger och bedömer områden med betydelse för biologisk mångfald enligt svensk standard (SS 199000). Resultatet blir ett säkert beslutsunderlag inför skogsbruk, exploatering, detaljplaner och tillståndsprövningar.",
    link: { to: "/tjanster/naturvardesinventering", label: "Läs mer om naturvärdesinventering" },
  },
  {
    q: "När behövs en artskyddsutredning?",
    a: "En artskyddsutredning behövs när en åtgärd kan påverka arter som skyddas enligt artskyddsförordningen, till exempel fåglar, fladdermöss eller hotade växter. Utredningen minskar risken för förelägganden, förseningar och stoppade projekt.",
    link: { to: "/tjanster/artinventeringar", label: "Läs mer om artskyddsutredningar" },
  },
  {
    q: "Hur går en fågelinventering till?",
    a: "Fågelinventeringar genomförs i fält under rätt säsong och tid på dygnet med beprövade metoder som revirkartering, punkttaxering och spelplatsinventering. Fokus ligger på skyddsvärda och känsliga arter som tjäder, hackspettar och rovfåglar.",
    link: { to: "/tjanster/fagelinventeringar", label: "Läs mer om fågelinventeringar" },
  },
  {
    q: "Kan ni hjälpa till med FSC- och PEFC-certifiering?",
    a: "Ja. Jag tar fram underlag för naturhänsyn, nyckelbiotoper och avsättningar som uppfyller kraven i FSC- och PEFC-standarderna, och stöttar inför revisioner.",
    link: { to: "/tjanster/nyckelbiotoper", label: "Läs mer om nyckelbiotoper" },
  },
  {
    q: "Var i Sverige utför ni uppdrag?",
    a: "Uppdrag utförs i hela Sverige, med särskild erfarenhet av boreala skogslandskap i Mellan- och Norrsverige.",
  },
  {
    q: "Hur begär jag en offert?",
    a: "Beskriv ditt projekt i kontaktformuläret längre ner eller ring 070-889 65 88. Du får ett kostnadsförslag anpassat efter område, tidplan och behov.",
  },
];

const FaqSection = () => (
  <section id="faq" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-accent uppercase mb-4 font-body">
          <span className="w-8 h-px bg-accent" />
          Vanliga frågor
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Frågor om naturvärdesinventering, fågelinventering och artskydd
        </h2>
        <p className="text-muted-foreground font-body mb-10">
          Svar på det kunder oftast undrar innan de anlitar en naturvårdskonsult.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {homeFaqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-base leading-relaxed">
                <p>{f.a}</p>
                {f.link && (
                  <Link to={f.link.to} className="inline-block mt-3 text-primary font-semibold hover:underline">
                    {f.link.label} →
                  </Link>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-10">
          <a href="#contact" className="inline-flex items-center rounded-md bg-primary px-6 py-3 font-body font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
            Diskutera ditt projekt
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default FaqSection;
