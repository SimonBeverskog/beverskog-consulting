import { Link } from "react-router-dom";
import { homeFaqs } from "@/data/homeFaqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => (
  <section id="faq" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <p className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-accent uppercase mb-4 font-body">
          <span className="w-8 h-px bg-accent" />
          Vanliga frågor
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
          Frågor om naturvärdesinventering, fågelinventering och artskydd
        </h2>
        <p className="text-muted-foreground font-body mb-10">
          Svar på det kunder oftast undrar innan de anlitar en naturvårdskonsult.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {homeFaqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-heading text-lg">{f.q}</AccordionTrigger>
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

export { homeFaqs };
