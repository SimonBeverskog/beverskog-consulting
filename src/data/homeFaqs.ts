export interface HomeFaq {
  q: string;
  a: string;
  link?: { to: string; label: string };
}

export const homeFaqs: HomeFaq[] = [
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
