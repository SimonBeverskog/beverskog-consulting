export interface ServiceExtra {
  metaTitle: string;
  metaDescription: string;
  /** Kort, säljande ingress högst upp på tjänstesidan */
  intro: string;
  /** Kundnytta – konkreta effekter av uppdraget */
  benefits: string[];
  faq: { question: string; answer: string }[];
  /** Slugs till relaterade tjänster för intern länkning */
  related: string[];
}

export const serviceExtras: Record<string, ServiceExtra> = {
  naturvardesinventering: {
    metaTitle: 'Naturvärdesinventering (NVI) | Naturvårdskonsult i hela Sverige',
    metaDescription:
      'Naturvärdesinventering (NVI) enligt SIS-standard av erfaren naturvårdskonsult. Säkra beslutsunderlag för skogsbruk, exploatering, FSC och PEFC. Begär offert.',
    intro:
      'Naturvärdesinventering (NVI) som ger dig ett säkert beslutsunderlag inför avverkning, exploatering och planering – utförd av skogsvetare med spetskompetens inom artskydd och biologisk mångfald.',
    benefits: [
      'Minskade risker – naturvärden och skyddade arter identifieras innan åtgärder planeras',
      'Säkrare beslutsunderlag för avverkningsanmälan, samråd och miljöprövning',
      'Effektivare tillståndsprocesser tack vare rapporter som håller för myndighetsgranskning',
      'Efterlevnad av miljöbalken, skogsvårdslagen samt certifiering enligt FSC och PEFC',
      'Hållbara lösningar där produktionsmål och biologisk mångfald vägs samman',
    ],
    faq: [
      {
        question: 'Vad kostar en naturvärdesinventering?',
        answer:
          'Priset styrs av områdets storlek, terräng, ambitionsnivå och hur detaljerad rapporten ska vara. Beskriv ditt projekt så återkommer jag med en offert och en tydlig tidplan.',
      },
      {
        question: 'När på året bör en NVI genomföras?',
        answer:
          'Fältsäsongen sträcker sig normalt från vår till tidig höst, då kärlväxter, fåglar och andra artgrupper är möjliga att bedöma. Vissa strukturbedömningar och nyckelbiotopsbedömningar kan göras även utanför säsong.',
      },
      {
        question: 'Vad ingår i leveransen?',
        answer:
          'Du får en rapport med naturvärdesklassade objekt, kartor i GIS-format, artlistor samt konkreta hänsynsförslag som går att använda direkt i planeringen.',
      },
    ],
    related: ['nyckelbiotoper', 'artinventeringar', 'mkb-exploateringsunderlag'],
  },
  fagelinventeringar: {
    metaTitle: 'Fågelinventering & häckfågeltaxering | Specialist på fåglar och artskydd',
    metaDescription:
      'Fågelinventering av häckfåglar, rovfåglar och rödlistade arter. Specialist inom artskydd levererar underlag för skogsbruk, MKB, FSC och PEFC. Begär offert.',
    intro:
      'Fågelinventering utförd av specialist inom fåglar och artskydd – med underlag som håller vid samråd, avverkningsplanering, miljöprövning och certifieringsrevision.',
    benefits: [
      'Minskade risker för stopp i projekt på grund av häckande skyddade fåglar',
      'Säkrare beslutsunderlag inför avverkning, exploatering och infrastrukturprojekt',
      'Effektivare tillståndsprocesser genom tidig kunskap om känsliga arter och perioder',
      'Efterlevnad av artskyddsförordningen och EU:s fågeldirektiv',
      'Hållbara lösningar med konkreta hänsynsförslag kring boplatser och livsmiljöer',
    ],
    faq: [
      {
        question: 'När genomförs en fågelinventering?',
        answer:
          'Häckfågelinventeringar genomförs under häckningssäsongen, normalt april–juli. Vissa arter som tjäder, uggla och hackspett inventeras tidigt på våren eller sent på vintern.',
      },
      {
        question: 'Vilka metoder används?',
        answer:
          'Punkt- och linjetaxering, revirkartering, riktade eftersök av enskilda arter samt akustisk övervakning – metoden anpassas efter syfte, art och områdets karaktär.',
      },
      {
        question: 'Behöver jag en fågelinventering inför avverkning?',
        answer:
          'Om området kan hysa skyddade arter är en inventering ofta nödvändig för att visa att artskyddsförordningen följs. Hör av dig så bedömer jag behovet i ditt fall.',
      },
    ],
    related: ['artinventeringar', 'naturvardesinventering', 'hansynsforslag'],
  },
  artinventeringar: {
    metaTitle: 'Artskyddsutredning & artinventering | Naturvårdskonsult',
    metaDescription:
      'Artskyddsutredning och artinventering av rödlistade och skyddade arter. Underlag för dispens, samråd och skoglig planering med hög artkunskap. Begär offert.',
    intro:
      'Artskyddsutredning och artinventering som klargör vilka skyddade arter som berörs – och vad det innebär juridiskt och praktiskt för ditt projekt.',
    benefits: [
      'Minskade risker för överträdelser av artskyddsförordningen',
      'Säkrare beslutsunderlag vid dispensansökan och samråd med länsstyrelsen',
      'Effektivare tillståndsprocesser genom tidig kartläggning av känsliga arter',
      'Efterlevnad av lagkrav samt certifieringskrav inom FSC och PEFC',
      'Hållbara lösningar med förslag på anpassningar och kompensationsåtgärder',
    ],
    faq: [
      {
        question: 'Vad är en artskyddsutredning?',
        answer:
          'En utredning som kartlägger skyddade arter i ett område och bedömer hur planerade åtgärder påverkar dem enligt artskyddsförordningen och art- och habitatdirektivet.',
      },
      {
        question: 'När krävs en artskyddsutredning?',
        answer:
          'Vid avverkning, exploatering eller infrastrukturprojekt där skyddade arter kan förekomma, och ofta som en del av en miljökonsekvensbeskrivning eller ett samråd.',
      },
      {
        question: 'Kan ni föreslå åtgärder om skyddade arter hittas?',
        answer:
          'Ja. Du får konkreta förslag på anpassad utformning, hänsynsåtgärder och vid behov kompensation, så att projektet kan drivas vidare på laglig och hållbar grund.',
      },
    ],
    related: ['fagelinventeringar', 'naturvardesinventering', 'mkb-exploateringsunderlag'],
  },
  nyckelbiotoper: {
    metaTitle: 'Nyckelbiotoper & naturvärdesbedömning | Skoglig rådgivning',
    metaDescription:
      'Oberoende bedömning av nyckelbiotoper och naturvärden i skog. Trygga underlag för virkeshandel, certifiering enligt FSC och PEFC samt myndighetskontakter.',
    intro:
      'Oberoende bedömning av nyckelbiotoper och naturvärden – ett tydligt besked som du kan luta dig mot i virkeshandel, certifiering och planering.',
    benefits: [
      'Minskade risker för stoppade avverkningar och avbruten virkesaffär',
      'Säkrare beslutsunderlag inför skogliga åtgärder och fastighetsaffärer',
      'Effektivare processer vid certifieringsrevision och myndighetskontakt',
      'Efterlevnad av skogsvårdslagen och kraven inom FSC och PEFC',
      'Hållbara lösningar som bevarar de mest värdefulla skogsmiljöerna',
    ],
    faq: [
      {
        question: 'Vad är en nyckelbiotop?',
        answer:
          'Ett skogsområde med mycket höga naturvärden där rödlistade arter finns eller kan förväntas finnas. Bedömningen bygger på strukturer, historik och förekomst av signalarter.',
      },
      {
        question: 'Vad händer om mitt område bedöms som nyckelbiotop?',
        answer:
          'Avverkning blir i praktiken svår att genomföra inom certifierat skogsbruk. Du får en tydlig beskrivning av konsekvenserna och förslag på hur planeringen kan anpassas.',
      },
      {
        question: 'Är bedömningen oberoende?',
        answer:
          'Ja. Bedömningen görs sakligt utifrån vedertagna kriterier och dokumenteras så att den håller vid granskning av köpare, revisorer och myndigheter.',
      },
    ],
    related: ['naturvardesinventering', 'hansynsforslag', 'strategisk-radgivning'],
  },
  hansynsforslag: {
    metaTitle: 'Hänsyns- & åtgärdsförslag i skogsbruk | Naturvårdskonsult',
    metaDescription:
      'Praktiska hänsyns- och åtgärdsförslag inför avverkning och gallring. Balans mellan produktion, biologisk mångfald och kraven i FSC och PEFC. Begär offert.',
    intro:
      'Hänsyns- och åtgärdsförslag som är praktiskt genomförbara i fält – och som samtidigt säkrar naturvärden, artskydd och certifieringskrav.',
    benefits: [
      'Minskade risker för överträdelser vid avverkning, gallring och markberedning',
      'Säkrare beslutsunderlag för planerare, entreprenörer och markägare',
      'Effektivare planering genom hänsyn som är tydligt beskriven och lätt att följa i fält',
      'Efterlevnad av skogsvårdslagen, miljöbalken samt FSC och PEFC',
      'Hållbara lösningar som utvecklar biologisk mångfald över tid',
    ],
    faq: [
      {
        question: 'Hur detaljerade är förslagen?',
        answer:
          'Du får hänsyn beskriven på objektsnivå med kartor – exempelvis kantzoner, evighetsträd, högstubbar och tidsbegränsningar under häckningssäsong.',
      },
      {
        question: 'Kan förslagen kombineras med en naturvärdesinventering?',
        answer:
          'Ja, det är vanligt. Inventeringen ger kunskapsunderlaget och hänsynsförslaget översätter det till konkreta åtgärder i den skogliga planeringen.',
      },
      {
        question: 'Fungerar förslagen vid certifieringsrevision?',
        answer:
          'Ja. Dokumentationen är utformad för att visa att hänsyn planerats och motiverats enligt kraven inom FSC och PEFC.',
      },
    ],
    related: ['naturvardesinventering', 'nyckelbiotoper', 'fagelinventeringar'],
  },
  'strategisk-radgivning': {
    metaTitle: 'Skoglig rådgivning & strategiskt naturvårdsarbete | Beverskog Consulting',
    metaDescription:
      'Strategisk skoglig rådgivning inom naturvård, artskydd och biologisk mångfald. Stöd vid policyarbete, certifiering enligt FSC och PEFC samt riskhantering.',
    intro:
      'Skoglig rådgivning och strategiskt naturvårdsarbete för bolag, markägare och organisationer som vill ligga steget före i artskydds- och hållbarhetsfrågor.',
    benefits: [
      'Minskade risker genom proaktiv hantering av artskydd och naturvärden',
      'Säkrare beslutsunderlag för ledning, styrelse och operativ planering',
      'Effektivare processer med tydliga rutiner för naturhänsyn',
      'Efterlevnad av lagkrav och certifieringsstandarder inom FSC och PEFC',
      'Hållbara lösningar som stärker varumärket vid upphandlingar och revisioner',
    ],
    faq: [
      {
        question: 'Vilka anlitar dig för strategisk rådgivning?',
        answer:
          'Skogsbolag, markägare, energibolag, exploatörer, kommuner och konsultbolag som behöver kvalificerat stöd i naturvårds- och artskyddsfrågor.',
      },
      {
        question: 'Kan du stötta löpande under året?',
        answer:
          'Ja, rådgivningen kan ske som enskilda uppdrag eller som ett löpande stöd med avtalad omfattning under säsongen.',
      },
      {
        question: 'Hjälper du till inför certifiering?',
        answer:
          'Ja. Jag går igenom rutiner, underlag och hänsynsarbete inför revision enligt FSC och PEFC och pekar ut vad som behöver stärkas.',
      },
    ],
    related: ['utbildningar', 'nyckelbiotoper', 'mkb-exploateringsunderlag'],
  },
  utbildningar: {
    metaTitle: 'Utbildning i naturvård, artskydd och biologisk mångfald',
    metaDescription:
      'Utbildningar och föreläsningar inom naturvård, artskydd, artkunskap och biologisk mångfald. Fältkurser och seminarier anpassade för skogliga verksamheter.',
    intro:
      'Utbildningar och föreläsningar inom naturvård, artkunskap och biologisk mångfald – anpassade efter er verksamhet och genomförda i klassrum eller i fält.',
    benefits: [
      'Minskade risker genom att fler i organisationen känner igen naturvärden i fält',
      'Säkrare beslutsunderlag när planerare och entreprenörer talar samma språk',
      'Effektivare arbete med färre omtag och missförstånd i hänsynsfrågor',
      'Efterlevnad av lagkrav och certifieringskrav genom höjd kompetens',
      'Hållbara lösningar som förankras i hela organisationen',
    ],
    faq: [
      {
        question: 'Vilka målgrupper passar utbildningarna?',
        answer:
          'Allt från skogsarbetare, planerare och virkesköpare till hållbarhetsansvariga, ledningsgrupper och styrelser.',
      },
      {
        question: 'Hur långa är utbildningarna?',
        answer:
          'Från korta föreläsningar på någon timme till flerdagars fältkurser – upplägget anpassas efter behov och förkunskaper.',
      },
      {
        question: 'Genomförs utbildningarna i fält?',
        answer:
          'Gärna. Fältmoment i egna skogar ger störst effekt, och kan kombineras med teori inomhus.',
      },
    ],
    related: ['strategisk-radgivning', 'artinventeringar', 'nyckelbiotoper'],
  },
  'mkb-exploateringsunderlag': {
    metaTitle: 'MKB & naturvärdesunderlag vid exploatering | Naturvårdskonsult',
    metaDescription:
      'Ekologiskt underlag till MKB vid exploatering, infrastruktur och vindkraft. Naturvärdesinventering och artskyddsutredning som håller vid miljöprövning.',
    intro:
      'Ekologiskt underlag till miljökonsekvensbeskrivning och exploateringsprojekt – naturvärdesinventering och artskyddsutredning i ett sammanhållet beslutsunderlag.',
    benefits: [
      'Minskade risker för överklaganden och kostsamma omtag i projektet',
      'Säkrare beslutsunderlag tidigt i plan- och tillståndsprocessen',
      'Effektivare tillståndsprocesser med rapporter som håller vid miljöprövning',
      'Efterlevnad av miljöbalken, plan- och bygglagen samt EU-direktiv',
      'Hållbara lösningar med skydds- och kompensationsåtgärder som fungerar i praktiken',
    ],
    faq: [
      {
        question: 'Vilka projekt arbetar du med?',
        answer:
          'Kraftledningar, vindkraft, vägar, industri- och bostadsexploatering samt täkt- och torvverksamhet i skogs- och naturmiljöer.',
      },
      {
        question: 'När bör det ekologiska underlaget tas fram?',
        answer:
          'Så tidigt som möjligt. Kunskap om naturvärden och skyddade arter i ett tidigt skede styr lokalisering och utformning och sparar både tid och pengar.',
      },
      {
        question: 'Samverkar du med övriga projektörer?',
        answer:
          'Ja, jag arbetar löpande tillsammans med projektörer, planarkitekter och miljösamordnare och levererar underlag i det format projektet behöver.',
      },
    ],
    related: ['naturvardesinventering', 'artinventeringar', 'fagelinventeringar'],
  },
};
