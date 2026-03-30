import { TreePine, Bird, Leaf, Map, FileCheck, Shield, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  whyHireMe: string;
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
    whyHireMe:
      "Att anlita Beverskog Consulting för naturvärdesinventering innebär att du får tillgång till djup fältbiologisk kompetens och gedigen erfarenhet av skogliga miljöer i hela Sverige. Jag arbetar med vedertagna metoder och levererar tydliga, välstrukturerade rapporter som fungerar som beslutsunderlag för markägare, myndigheter och certifieringsorgan. Min styrka ligger i att kombinera hög artkunskap med praktisk förståelse för skogsbruk och markanvändning, vilket gör att du får realistiska och användbara resultat. Genom att identifiera naturvärden tidigt i planeringsprocessen kan du undvika kostsamma konflikter, uppfylla lagkrav och stärka ditt varumärke som en ansvarsfull aktör. Oavsett om det gäller en enskild fastighet eller ett större inventeringsprojekt anpassar jag uppdraget efter dina behov och levererar med hög precision och inom överenskommen tid. Med en noggrann naturvärdesinventering som grund kan du planera din verksamhet med trygghet och trovärdighet – och samtidigt bidra till att bevara Sveriges biologiska mångfald för kommande generationer.",
  },
  {
    icon: Bird,
    title: "Fågelinventeringar",
    slug: "fagelinventeringar",
    description:
      "Inventering av häckfåglar, rovfåglar och känsliga arter med ledande metodik och artkunskap.",
    longDescription:
      "Fågelinventeringar är en viktig del av naturvårdsarbetet och innebär en systematisk kartläggning av fågelarter inom ett definierat område. Inventeringarna kan omfatta häckfågeltaxering, rovfågelsinventering, våtmarksinventering och specialinventeringar av hotade eller känsliga arter. Metodiken varierar beroende på syfte och artgrupp – från punkttaxeringar och linjetaxeringar till riktade eftersök av specifika arter som kungsörn, berguv eller vitryggig hackspett. Fågelinventeringar ger värdefull information om artsammansättning, populationsstorlek och habitatkvalitet, vilket är avgörande underlag vid miljökonsekvensbeskrivningar, naturvärdesbedömningar och planering av skogliga åtgärder. Resultaten används för att bedöma om ett område hyser arter som omfattas av artskyddsförordningen eller EU:s fågeldirektiv, och för att säkerställa att hänsyn tas vid exploatering eller avverkning. Fågelinventeringar är ofta ett krav vid certifiering enligt FSC och PEFC och utgör ett centralt verktyg för att följa upp naturvårdsinsatser och biologisk mångfald över tid.",
    whyHireMe:
      "Med Beverskog Consulting får du en erfaren fältbiolog med stark artkunskap och lång erfarenhet av fågelinventeringar i varierande miljöer – från boreala skogar till fjällnära områden och våtmarker. Jag behärskar etablerade inventeringsmetoder och anpassar uppdraget efter dina specifika behov, oavsett om det rör sig om en bred häckfågelsinventering eller ett riktat eftersök av rödlistade arter. Mina rapporter är tydliga och professionella, utformade för att fungera som underlag vid myndighetskontakter, miljöprövningar och certifieringsrevisioner. Genom att anlita mig får du inte bara en inventering utan också en ekologisk helhetsbedömning som sätter fågelförekomsterna i sitt landskapsekologiska sammanhang. Det ger dig bättre möjligheter att planera åtgärder med rätt hänsyn och undvika konflikter med artskyddslagstiftningen. Jag är van att arbeta i nära dialog med uppdragsgivare och levererar resultat med hög kvalitet inom överenskommen tidsram – oavsett projektets storlek eller komplexitet.",
  },
  {
    icon: Leaf,
    title: "Artinventeringar & artskydd",
    slug: "artinventeringar",
    description:
      "Artinventeringar och bedömning av artskydd kopplat till skogliga åtgärder och planering.",
    longDescription:
      "Artinventeringar innebär en systematisk kartläggning av växter, djur, svampar och lavar inom ett område för att identifiera förekomster av skyddade, rödlistade eller signalarter. Inventeringarna kan riktas mot specifika artgrupper eller genomföras som breda kartläggningar beroende på syftet. Artskydd handlar om att säkerställa att arter som omfattas av artskyddsförordningen, EU:s art- och habitatdirektiv eller nationell rödlista inte påverkas negativt av planerade åtgärder som avverkning, exploatering eller markberedning. En artinventering ger konkret kunskap om vilka arter som finns i området och deras status, vilket är avgörande för att kunna göra korrekta artskyddsbedömningar. Resultatet fungerar som beslutsunderlag vid ansökan om dispens, samråd med länsstyrelsen eller vid planering av kompensationsåtgärder. Artinventeringar är ofta ett krav i samband med miljökonsekvensbeskrivningar och certifieringsrevisioner, och utgör en viktig byggsten i ett hållbart natur- och skogsbruk där juridiska krav och ekologisk hänsyn balanseras på bästa sätt.",
    whyHireMe:
      "Beverskog Consulting erbjuder artinventeringar utförda med hög precision och gedigen kunskap om svenska arter och deras ekologi. Jag har bred kompetens inom flera artgrupper – från kärlväxter och mossor till fåglar, insekter och vedsvampar – vilket ger en helhetsbild av ett områdes biologiska värden. Min erfarenhet av artskyddslagstiftningen innebär att jag inte bara inventerar utan även bedömer juridiska konsekvenser och ger konkreta råd om hur du kan hantera artskyddsfrågor i praktiken. Genom att identifiera känsliga arter i ett tidigt skede kan du som markägare eller projektledare undvika kostsamma förseningar, rättsliga problem och negativ uppmärksamhet. Jag levererar välstrukturerade rapporter med tydliga kartor och artlistor som håller för myndighetsgranskning och certifieringsrevisioner. Oavsett om det gäller ett mindre skogsområde eller ett stort infrastrukturprojekt anpassar jag inventeringsinsatsen efter projektets krav och budget – med målet att ge dig den kunskap du behöver för att agera tryggt och ansvarsfullt.",
  },
  {
    icon: Map,
    title: "Nyckelbiotoper & naturvärden",
    slug: "nyckelbiotoper",
    description:
      "Bedömning av naturvärden och nyckelbiotoper som underlag för beslut och hänsyn.",
    longDescription:
      "Nyckelbiotoper är skogsområden med mycket höga naturvärden som hyser eller kan förväntas hysa rödlistade arter. Begreppet har en central roll i svenskt skogsbruk och påverkar både certifiering, virkeshandel och myndighetsbeslut. En bedömning av nyckelbiotoper och naturvärden innebär en fältbaserad genomgång av skogsbestånd där strukturer som gamla träd, död ved, ovanliga trädslag, fuktiga partier och signalarter analyseras och värderas. Syftet är att avgöra om ett område uppfyller kriterierna för nyckelbiotop eller om det har andra naturvärden som motiverar hänsyn. Bedömningen ger ett tydligt underlag för planering av skogliga åtgärder och hjälper markägare att navigera i frågor kring certifiering enligt FSC och PEFC, där hantering av nyckelbiotoper är en nyckelfråga. En korrekt naturvärdesbedömning minskar risken för konflikter med myndigheter och ideella organisationer och säkerställer att skogsbruket bedrivs på ett hållbart och trovärdigt sätt i enlighet med gällande regelverk och branschpraxis.",
    whyHireMe:
      "Med Beverskog Consulting får du en oberoende och kompetent bedömning av nyckelbiotoper och naturvärden, grundad i mångårig fälterfarenhet och djup kunskap om skogsekologi. Jag förstår de komplexa sambanden mellan biologiska värden, certifieringskrav och praktiskt skogsbruk, och kan därför ge dig rådgivning som är både ekologiskt välgrundad och praktiskt genomförbar. Min bedömning ger dig tydliga svar på om ett område klassas som nyckelbiotop och vilka konsekvenser det har för din planering – oavsett om du är privat markägare, skogsbolag eller kommun. Genom att ha ett professionellt och väldokumenterat underlag stärker du din position vid kontakt med myndigheter, certifieringsrevisorer och köpare av virke. Jag arbetar noggrant och transparent, och levererar rapporter som är lätta att förstå och använda. Att investera i en kvalificerad naturvärdesbedömning är en trygg investering som skyddar dig mot oväntade beslut, ekonomiska förluster och anseendeskador – och som visar att du tar ansvar för den biologiska mångfalden i ditt skogsinnehav.",
  },
  {
    icon: FileCheck,
    title: "Hänsyns- & åtgärdsförslag",
    slug: "hansynsforslag",
    description:
      "Konkreta förslag inför avverkning eller andra skogliga insatser med balans mellan produktion och naturvärden.",
    longDescription:
      "Hänsyns- och åtgärdsförslag är konkreta rekommendationer som tas fram inför skogliga åtgärder som avverkning, gallring, markberedning eller dikesrensning. Syftet är att balansera produktionsmål med bevarandet av naturvärden, kulturmiljöer och vattendrag. Förslagen baseras på en grundlig fältbedömning av det aktuella området och tar hänsyn till aspekter som biologisk mångfald, artskydd, landskapsekologi och gällande lagstiftning. Hänsynsförslag kan omfatta allt från att lämna kantzoner mot vatten och spara evighetsträd till att undvika avverkning under känsliga perioder för häckande fåglar. Åtgärdsförslag kan innefatta naturvårdande skötsel som frihuggning av gamla ekar, skapande av högstubbar eller restaurering av våtmarker. Genom att integrera hänsyn och åtgärder i den skogliga planeringen säkerställs att skogsbruket lever upp till kraven i skogsvårdslagen, miljöbalken och certifieringsstandarder som FSC och PEFC. Ett välgenomtänkt hänsyns- och åtgärdsförslag är nyckeln till ett skogsbruk som är både lönsamt och hållbart på lång sikt.",
    whyHireMe:
      "Beverskog Consulting levererar hänsyns- och åtgärdsförslag som är praktiskt genomförbara och ekologiskt välgrundade. Min styrka ligger i att jag förstår både skogsbrukets ekonomiska villkor och naturvårdens krav, vilket innebär att mina förslag är realistiska och anpassade efter dina förutsättningar. Jag arbetar i nära dialog med dig som markägare eller planerare och utgår alltid från en gedigen fältbedömning för att säkerställa att förslagen träffar rätt. Genom att anlita mig får du ett professionellt underlag som visar att du tar ansvar och arbetar proaktivt med naturhänsyn – något som stärker din trovärdighet gentemot certifieringsrevisorer, myndigheter och allmänhet. Mina hänsynsförslag hjälper dig att undvika överträdelser mot artskyddsförordningen och skogsvårdslagen, och mina åtgärdsförslag bidrar till att utveckla naturvärden över tid. Resultatet är ett skogsbruk där produktion och naturvård går hand i hand. Oavsett om du behöver förslag inför en enskild avverkning eller en övergripande hänsynsplan för ett större innehav levererar jag skräddarsydda lösningar med hög kvalitet.",
  },
  {
    icon: Shield,
    title: "Strategisk rådgivning",
    slug: "strategisk-radgivning",
    description:
      "Rådgivning i planering och strategiskt naturvårdsarbete för företag och organisationer.",
    longDescription:
      "Strategisk rådgivning inom naturvård innebär att hjälpa företag, organisationer och markägare att utveckla långsiktiga strategier för att integrera naturvårdsarbete i sin verksamhet. Det kan handla om att ta fram naturvårdspolicyer, utveckla rutiner för miljöhänsyn i skogsbruk, planera landskapsekologiska satsningar eller stötta i certifieringsprocesser enligt FSC och PEFC. Rådgivningen utgår från en analys av verksamhetens nuläge, juridiska krav, branschpraxis och de specifika naturvärden som berörs. Målet är att skapa en hållbar strategi som balanserar ekonomiska intressen med ekologiskt ansvar och som uppfyller kraven från lagstiftning, certifieringssystem och intressenter. Strategisk naturvårdsrådgivning är särskilt värdefull för organisationer som vill ligga i framkant inom hållbarhet, minimera risker kopplade till artskydd och naturvärden, och stärka sitt varumärke som ansvarsfull aktör. En välutformad strategi sparar tid och pengar genom att förebygga konflikter och skapa tydliga ramar för beslutsfattande på alla nivåer i organisationen.",
    whyHireMe:
      "Med Beverskog Consulting som strategisk rådgivare får du tillgång till en unik kombination av ekologisk expertis och praktisk erfarenhet från skogsbruk och naturvårdsplanering. Jag hjälper dig att se helheten och utveckla strategier som är både ambitiösa och genomförbara. Min rådgivning bygger på djup kunskap om svensk naturvårdslagstiftning, certifieringskrav och ekologiska samband, vilket ger dig ett stabilt fundament att fatta beslut utifrån. Genom att arbeta proaktivt med naturvårdsstrategi kan du som företag eller markägare minska risken för kostsamma konflikter, stärka din position vid upphandlingar och revisioner, och visa omvärlden att du tar biologisk mångfald på allvar. Jag arbetar nära mina uppdragsgivare och anpassar rådgivningen efter verksamhetens storlek, bransch och ambitionsnivå. Oavsett om du behöver hjälp att formulera en naturvårdspolicy, utvärdera ert befintliga arbetssätt eller planera ett helt nytt naturvårdsprogram levererar jag genomtänkta och väldokumenterade rekommendationer som ger verklig effekt.",
  },
  {
    icon: BookOpen,
    title: "Utbildningar & föreläsningar",
    slug: "utbildningar",
    description:
      "Utbildningar och föreläsningar inom naturvård, biologisk mångfald och skogsbruk.",
    longDescription:
      "Utbildningar och föreläsningar inom naturvård, biologisk mångfald och skogsbruk är ett kraftfullt sätt att höja kompetensen hos medarbetare, markägare och beslutsfattare. Genom skräddarsydda utbildningsinsatser kan deltagarna få fördjupad kunskap om artidentifiering, naturvärdesbedömning, artskyddslagstiftning, certifieringskrav och praktisk naturhänsyn i fält. Utbildningarna kan genomföras som klassrumsföreläsningar, fältexkursioner eller en kombination av båda, och anpassas efter deltagarnas förkunskaper och behov. Föreläsningar kan rikta sig till allt från skogsarbetare och planerare till styrelser och ledningsgrupper, och kan handla om aktuella ämnen som nyckelbiotopsfrågan, artskyddsförordningens tillämpning, ekosystemtjänster eller framtidens skogsbruk. En investering i utbildning ger organisationen bättre förutsättningar att fatta välgrundade beslut, undvika misstag i fält och leva upp till de krav som ställs av lagstiftning, certifieringssystem och samhälle. Kunskapshöjning är en av de mest kostnadseffektiva åtgärderna för att stärka naturvårdsarbetet i en organisation.",
    whyHireMe:
      "Beverskog Consulting erbjuder engagerande och kunskapsrika utbildningar och föreläsningar som kombinerar vetenskaplig grund med praktisk tillämpning. Jag har lång erfarenhet av att förmedla komplex ekologisk kunskap på ett tillgängligt och inspirerande sätt, anpassat efter målgruppen – oavsett om det är erfarna fältbiologer eller personer utan tidigare naturvårdsbakgrund. Mina utbildningar är alltid uppdaterade med den senaste forskningen och aktuella regelverken, och jag använder verkliga exempel och fallstudier för att göra innehållet relevant och praktiskt användbart. Genom att investera i utbildning via Beverskog Consulting får din organisation inte bara ökad kompetens utan också ett gemensamt språk och en samsyn kring naturvårdsfrågor som underlättar det dagliga arbetet. Jag erbjuder allt från korta inspirationsföreläsningar till flerdagars fältkurser, och skräddarsyr innehållet efter era specifika behov och utmaningar. En välutbildad organisation gör färre misstag, tar bättre beslut och bygger ett starkare förtroende hos myndigheter, kunder och allmänhet.",
  },
];
