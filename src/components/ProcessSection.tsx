const steps = [
  { n: "01", t: "Kontakt & behovsanalys", d: "Vi går igenom ditt projekt, området och vilka krav från lagstiftning, myndigheter eller certifiering (FSC/PEFC) som gäller." },
  { n: "02", t: "Offert & upplägg", d: "Du får ett tydligt kostnadsförslag med metod, tidplan och leverans – anpassat efter säsong och artgrupper." },
  { n: "03", t: "Fältarbete", d: "Naturvärdesinventering, fågelinventering eller artinventering utförs i fält vid rätt tid på året med beprövade metoder." },
  { n: "04", t: "Rapport & beslutsunderlag", d: "Du får en tydlig rapport med kartor, bedömningar och konkreta hänsyns- och åtgärdsförslag som håller vid granskning." },
];

const ProcessSection = () => (
  <section id="process" className="py-20 md:py-28 bg-secondary/40">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2 font-body">Arbetsgång</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Så går ett uppdrag till
        </h2>
        <p className="text-muted-foreground font-body mt-4 leading-relaxed">
          Från första samtal till färdigt beslutsunderlag – en tydlig process som minskar risker och sparar tid i tillståndsprocessen.
        </p>
      </div>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s) => (
          <li key={s.n} className="bg-card rounded-lg p-8 border border-border/50 shadow-sm">
            <span className="font-heading text-3xl font-bold text-accent">{s.n}</span>
            <h3 className="font-heading text-xl font-semibold text-foreground mt-3 mb-2">{s.t}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">{s.d}</p>
          </li>
        ))}
      </ol>
      <div className="text-center mt-12">
        <a href="#contact" className="inline-flex items-center rounded-md bg-primary px-6 py-3 font-body font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
          Begär offert
        </a>
      </div>
    </div>
  </section>
);

export default ProcessSection;
