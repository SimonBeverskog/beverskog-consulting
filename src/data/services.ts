import { TreePine, Bird, Leaf, Map, FileCheck, Shield, BookOpen, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  whyHireMeIntro: string;
  whyHireMeBullets: string[];
  whyHireMeOutro: string;
}

export const services: Service[] = [
  {
    icon: TreePine,
    title: "Naturvärdesinventering (NVI)",
    slug: "naturvardesinventering",
    description:
      "Inventering av naturvärden i skogs- och markområden med vedertagen metodik och hög precision.",
    longDescription:
      "Naturvärdesinventering, ofta förkortat NVI, är en systematisk metod för att kartlägga och bedöma biologiska värden i ett specifikt område. Inventeringen omfattar en noggrann genomgång av flora, fauna, markförhållanden och strukturella element som döda träd, gamla lövträd och vattendrag. Syftet är att identifiera naturvärden som är skyddsvärda eller som kräver särskild hänsyn vid exempelvis skogsbruk, exploatering eller samhällsplanering. En naturvärdesinventering följer vedertagna metoder och klassificerar områden efter deras ekologiska betydelse – från naturvärdesobjekt till nyckelbiotoper. Resultatet ger en tydlig bild av vilka arter och livsmiljöer som finns i området och vilka åtgärder som kan vara nödvändiga för att bevara den biologiska mångfalden. NVI är ett viktigt verktyg för markägare, kommuner och företag som vill fatta välgrundade beslut kring markanvändning och uppfylla krav från certifieringssystem som FSC och PEFC, samt lagstiftning som miljöbalken och skogsvårdslagen.",
    whyHireMeIntro:
      "Att anlita Beverskog Consulting för naturvärdesinventering innebär att du får tillgång till djup fältbiologisk kompetens och gedigen erfarenhet av skogliga miljöer i hela Sverige.",
    whyHireMeBullets: [
      "Vedertagna metoder och tydliga, välstrukturerade rapporter som fungerar som beslutsunderlag för markägare, myndigheter och certifieringsorgan",
      "Hög artkunskap kombinerat med praktisk förståelse för skogsbruk och markanvändning – realistiska och användbara resultat",
      "Tidigt identifierade naturvärden som hjälper dig undvika kostsamma konflikter och uppfylla lagkrav",
      "Stärkt varumärke som ansvarsfull aktör genom professionell dokumentation",
      "Flexibla uppdrag anpassade efter dina behov – från enskilda fastigheter till större inventeringsprojekt",
    ],
    whyHireMeOutro:
      "Med en noggrann naturvärdesinventering som grund kan du planera din verksamhet med trygghet och trovärdighet – och samtidigt bidra till att bevara Sveriges biologiska mångfald för kommande generationer.",
  },
  {
    icon: Bird,
    title: "Fågelinventeringar",
    slug: "fagelinventeringar",
    description:
      "Inventering av häckfåglar, rovfåglar och känsliga arter med ledande metodik och artkunskap.",
    longDescription:
      "Fågelinventeringar är en viktig del av naturvårdsarbetet och innebär en systematisk kartläggning av fågelarter inom ett definierat område. Inventeringarna kan omfatta häckfågeltaxering, rovfågelsinventering, våtmarksinventering och specialinventeringar av hotade eller känsliga arter. Metodiken varierar beroende på syfte och artgrupp – från punkttaxeringar och linjetaxeringar till riktade eftersök av specifika arter som kungsörn, berguv eller vitryggig hackspett. Fågelinventeringar ger värdefull information om artsammansättning, populationsstorlek och habitatkvalitet, vilket är avgörande underlag vid miljökonsekvensbeskrivningar, naturvärdesbedömningar och planering av skogliga åtgärder. Resultaten används för att bedöma om ett område hyser arter som omfattas av artskyddsförordningen eller EU:s fågeldirektiv, och för att säkerställa att hänsyn tas vid exploatering eller avverkning. Fågelinventeringar är ofta ett krav vid certifiering enligt FSC och PEFC och utgör ett centralt verktyg för att följa upp naturvårdsinsatser och biologisk mångfald över tid.",
    whyHireMeIntro:
      "Med Beverskog Consulting får du en erfaren fältbiolog med stark artkunskap och lång erfarenhet av fågelinventeringar i varierande miljöer – från boreala skogar till fjällnära områden och våtmarker.",
    whyHireMeBullets: [
      "Etablerade inventeringsmetoder anpassade efter dina specifika behov – bred häckfågelsinventering eller riktat eftersök av rödlistade arter",
      "Tydliga och professionella rapporter som fungerar vid myndighetskontakter, miljöprövningar och certifieringsrevisioner",
      "Ekologisk helhetsbedömning som sätter fågelförekomsterna i sitt landskapsekologiska sammanhang",
      "Bättre möjligheter att planera åtgärder med rätt hänsyn och undvika konflikter med artskyddslagstiftningen",
      "Leverans med hög kvalitet inom överenskommen tidsram – oavsett projektets storlek eller komplexitet",
    ],
    whyHireMeOutro:
      "Jag arbetar i nära dialog med uppdragsgivare och säkerställer att du får det underlag du behöver för att agera tryggt och ansvarsfullt.",
  },
  {
    icon: Leaf,
    title: "Artinventeringar & artskydd",
    slug: "artinventeringar",
    description:
      "Artinventeringar och bedömning av artskydd kopplat till skogliga åtgärder och planering.",
    longDescription:
      "Artinventeringar innebär en systematisk kartläggning av växter, djur, svampar och lavar inom ett område för att identifiera förekomster av skyddade, rödlistade eller signalarter. Inventeringarna kan riktas mot specifika artgrupper eller genomföras som breda kartläggningar beroende på syftet. Artskydd handlar om att säkerställa att arter som omfattas av artskyddsförordningen, EU:s art- och habitatdirektiv eller nationell rödlista inte påverkas negativt av planerade åtgärder som avverkning, exploatering eller markberedning. En artinventering ger konkret kunskap om vilka arter som finns i området och deras status, vilket är avgörande för att kunna göra korrekta artskyddsbedömningar. Resultatet fungerar som beslutsunderlag vid ansökan om dispens, samråd med länsstyrelsen eller vid planering av kompensationsåtgärder. Artinventeringar är ofta ett krav i samband med miljökonsekvensbeskrivningar och certifieringsrevisioner, och utgör en viktig byggsten i ett hållbart natur- och skogsbruk där juridiska krav och ekologisk hänsyn balanseras på bästa sätt.",
    whyHireMeIntro:
      "Beverskog Consulting erbjuder artinventeringar utförda med hög precision och gedigen kunskap om svenska arter och deras ekologi.",
    whyHireMeBullets: [
      "Bred kompetens inom flera artgrupper – kärlväxter, mossor, fåglar, insekter och vedsvampar – för en helhetsbild av biologiska värden",
      "Djup kunskap om artskyddslagstiftningen med bedömning av juridiska konsekvenser och konkreta råd",
      "Tidigt identifierade känsliga arter som hjälper dig undvika kostsamma förseningar och rättsliga problem",
      "Välstrukturerade rapporter med tydliga kartor och artlistor som håller för myndighetsgranskning och certifieringsrevisioner",
      "Anpassad inventeringsinsats efter projektets krav och budget – från mindre skogsområden till stora infrastrukturprojekt",
    ],
    whyHireMeOutro:
      "Målet är att ge dig den kunskap du behöver för att agera tryggt och ansvarsfullt – oavsett projektets omfattning.",
  },
  {
    icon: Map,
    title: "Nyckelbiotoper & naturvärden",
    slug: "nyckelbiotoper",
    description:
      "Bedömning av naturvärden och nyckelbiotoper som underlag för beslut och hänsyn.",
    longDescription:
      "Nyckelbiotoper är skogsområden med mycket höga naturvärden som hyser eller kan förväntas hysa rödlistade arter. Begreppet har en central roll i svenskt skogsbruk och påverkar både certifiering, virkeshandel och myndighetsbeslut. En bedömning av nyckelbiotoper och naturvärden innebär en fältbaserad genomgång av skogsbestånd där strukturer som gamla träd, död ved, ovanliga trädslag, fuktiga partier och signalarter analyseras och värderas. Syftet är att avgöra om ett område uppfyller kriterierna för nyckelbiotop eller om det har andra naturvärden som motiverar hänsyn. Bedömningen ger ett tydligt underlag för planering av skogliga åtgärder och hjälper markägare att navigera i frågor kring certifiering enligt FSC och PEFC, där hantering av nyckelbiotoper är en nyckelfråga. En korrekt naturvärdesbedömning minskar risken för konflikter med myndigheter och ideella organisationer och säkerställer att skogsbruket bedrivs på ett hållbart och trovärdigt sätt i enlighet med gällande regelverk och branschpraxis.",
    whyHireMeIntro:
      "Med Beverskog Consulting får du en oberoende och kompetent bedömning av nyckelbiotoper och naturvärden, grundad i mångårig fälterfarenhet och djup kunskap om skogsekologi.",
    whyHireMeBullets: [
      "Förståelse för komplexa samband mellan biologiska värden, certifieringskrav och praktiskt skogsbruk",
      "Tydliga svar på om ett område klassas som nyckelbiotop och vilka konsekvenser det har för din planering",
      "Professionellt och väldokumenterat underlag som stärker din position vid myndighetskontakter och certifieringsrevisioner",
      "Noggrant och transparent arbete med lättförståeliga rapporter",
      "Skydd mot oväntade beslut, ekonomiska förluster och anseendeskador",
    ],
    whyHireMeOutro:
      "Att investera i en kvalificerad naturvärdesbedömning är en trygg investering som visar att du tar ansvar för den biologiska mångfalden i ditt skogsinnehav.",
  },
  {
    icon: FileCheck,
    title: "Hänsyns- & åtgärdsförslag",
    slug: "hansynsforslag",
    description:
      "Konkreta förslag inför avverkning eller andra skogliga insatser med balans mellan produktion och naturvärden.",
    longDescription:
      "Hänsyns- och åtgärdsförslag är konkreta rekommendationer som tas fram inför skogliga åtgärder som avverkning, gallring, markberedning eller dikesrensning. Syftet är att balansera produktionsmål med bevarandet av naturvärden, kulturmiljöer och vattendrag. Förslagen baseras på en grundlig fältbedömning av det aktuella området och tar hänsyn till aspekter som biologisk mångfald, artskydd, landskapsekologi och gällande lagstiftning. Hänsynsförslag kan omfatta allt från att lämna kantzoner mot vatten och spara evighetsträd till att undvika avverkning under känsliga perioder för häckande fåglar. Åtgärdsförslag kan innefatta naturvårdande skötsel som frihuggning av gamla ekar, skapande av högstubbar eller restaurering av våtmarker. Genom att integrera hänsyn och åtgärder i den skogliga planeringen säkerställs att skogsbruket lever upp till kraven i skogsvårdslagen, miljöbalken och certifieringsstandarder som FSC och PEFC. Ett välgenomtänkt hänsyns- och åtgärdsförslag är nyckeln till ett skogsbruk som är både lönsamt och hållbart på lång sikt.",
    whyHireMeIntro:
      "Beverskog Consulting levererar hänsyns- och åtgärdsförslag som är praktiskt genomförbara och ekologiskt välgrundade.",
    whyHireMeBullets: [
      "Förståelse för både skogsbrukets ekonomiska villkor och naturvårdens krav – realistiska förslag anpassade efter dina förutsättningar",
      "Nära dialog med dig som markägare eller planerare, alltid grundat i gedigen fältbedömning",
      "Professionellt underlag som stärker din trovärdighet gentemot certifieringsrevisorer, myndigheter och allmänhet",
      "Hänsynsförslag som hjälper dig undvika överträdelser mot artskyddsförordningen och skogsvårdslagen",
      "Åtgärdsförslag som bidrar till att utveckla naturvärden över tid – produktion och naturvård hand i hand",
    ],
    whyHireMeOutro:
      "Oavsett om du behöver förslag inför en enskild avverkning eller en övergripande hänsynsplan för ett större innehav levererar jag skräddarsydda lösningar med hög kvalitet.",
  },
  {
    icon: Shield,
    title: "Strategisk rådgivning",
    slug: "strategisk-radgivning",
    description:
      "Rådgivning i planering och strategiskt naturvårdsarbete för företag och organisationer.",
    longDescription:
      "Strategisk rådgivning inom naturvård innebär att hjälpa företag, organisationer och markägare att utveckla långsiktiga strategier för att integrera naturvårdsarbete i sin verksamhet. Det kan handla om att ta fram naturvårdspolicyer, utveckla rutiner för miljöhänsyn i skogsbruk, planera landskapsekologiska satsningar eller stötta i certifieringsprocesser enligt FSC och PEFC. Rådgivningen utgår från en analys av verksamhetens nuläge, juridiska krav, branschpraxis och de specifika naturvärden som berörs. Målet är att skapa en hållbar strategi som balanserar ekonomiska intressen med ekologiskt ansvar och som uppfyller kraven från lagstiftning, certifieringssystem och intressenter. Strategisk naturvårdsrådgivning är särskilt värdefull för organisationer som vill ligga i framkant inom hållbarhet, minimera risker kopplade till artskydd och naturvärden, och stärka sitt varumärke som ansvarsfull aktör. En välutformad strategi sparar tid och pengar genom att förebygga konflikter och skapa tydliga ramar för beslutsfattande på alla nivåer i organisationen.",
    whyHireMeIntro:
      "Med Beverskog Consulting som strategisk rådgivare får du tillgång till en unik kombination av ekologisk expertis och praktisk erfarenhet från skogsbruk och naturvårdsplanering.",
    whyHireMeBullets: [
      "Helhetsperspektiv med strategier som är både ambitiösa och genomförbara",
      "Djup kunskap om svensk naturvårdslagstiftning, certifieringskrav och ekologiska samband",
      "Minskad risk för kostsamma konflikter genom proaktivt naturvårdsarbete",
      "Stärkt position vid upphandlingar och revisioner – visa omvärlden att du tar biologisk mångfald på allvar",
      "Skräddarsydd rådgivning anpassad efter verksamhetens storlek, bransch och ambitionsnivå",
    ],
    whyHireMeOutro:
      "Oavsett om du behöver hjälp att formulera en naturvårdspolicy, utvärdera ert befintliga arbetssätt eller planera ett helt nytt naturvårdsprogram levererar jag genomtänkta rekommendationer som ger verklig effekt.",
  },
  {
    icon: BookOpen,
    title: "Utbildningar & föreläsningar",
    slug: "utbildningar",
    description:
      "Utbildningar och föreläsningar inom naturvård, biologisk mångfald och skogsbruk.",
    longDescription:
      "Utbildningar och föreläsningar inom naturvård, biologisk mångfald och skogsbruk är ett kraftfullt sätt att höja kompetensen hos medarbetare, markägare och beslutsfattare. Genom skräddarsydda utbildningsinsatser kan deltagarna få fördjupad kunskap om artidentifiering, naturvärdesbedömning, artskyddslagstiftning, certifieringskrav och praktisk naturhänsyn i fält. Utbildningarna kan genomföras som klassrumsföreläsningar, fältexkursioner eller en kombination av båda, och anpassas efter deltagarnas förkunskaper och behov. Föreläsningar kan rikta sig till allt från skogsarbetare och planerare till styrelser och ledningsgrupper, och kan handla om aktuella ämnen som nyckelbiotopsfrågan, artskyddsförordningens tillämpning, ekosystemtjänster eller framtidens skogsbruk. En investering i utbildning ger organisationen bättre förutsättningar att fatta välgrundade beslut, undvika misstag i fält och leva upp till de krav som ställs av lagstiftning, certifieringssystem och samhälle. Kunskapshöjning är en av de mest kostnadseffektiva åtgärderna för att stärka naturvårdsarbetet i en organisation.",
    whyHireMeIntro:
      "Beverskog Consulting erbjuder engagerande och kunskapsrika utbildningar och föreläsningar som kombinerar vetenskaplig grund med praktisk tillämpning.",
    whyHireMeBullets: [
      "Lång erfarenhet av att förmedla komplex ekologisk kunskap på ett tillgängligt och inspirerande sätt – anpassat efter målgruppen",
      "Alltid uppdaterat innehåll med senaste forskningen, aktuella regelverk och verkliga fallstudier",
      "Ökad kompetens och gemensamt språk kring naturvårdsfrågor som underlättar det dagliga arbetet",
      "Allt från korta inspirationsföreläsningar till flerdagars fältkurser – skräddarsytt efter era behov",
      "En välutbildad organisation gör färre misstag, tar bättre beslut och bygger starkare förtroende",
    ],
    whyHireMeOutro:
      "Genom att investera i utbildning via Beverskog Consulting bygger din organisation ett starkare förtroende hos myndigheter, kunder och allmänhet.",
  },
];
