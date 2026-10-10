import fs from "fs";
import path from "path";
import type { Plugin } from "vite";
import { serviceExtras } from "./src/data/serviceExtras";
import { services } from "./src/data/services";

const SITE = "https://beverskog.com";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

interface RoutePage {
  route: string;
  title: string;
  description: string;
  heading: string;
  body: string;
  extraHtml?: string;
  jsonLd?: unknown;
}

const pages = (): RoutePage[] => [
  ...Object.entries(serviceExtras).map(([slug, x]) => ({
    route: `/tjanster/${slug}`,
    title: `${x.metaTitle}`,
    description: x.metaDescription,
    heading: x.metaTitle.split("|")[0].trim(),
    body: x.intro,
    extraHtml:
      `<h2>Kundnytta</h2><ul>${x.benefits.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` +
      `<h2>Vanliga frågor</h2>${x.faq.map((f) => `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`).join("")}` +
      `<h2>Relaterade tjänster</h2><ul>${x.related
        .filter((r) => serviceExtras[r])
        .map((r) => `<li><a href="/tjanster/${r}">${esc(serviceExtras[r].metaTitle.split("|")[0].trim())}</a></li>`)
        .join("")}</ul>`,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: x.metaTitle.split("|")[0].trim(),
          description: x.metaDescription,
          url: `${SITE}/tjanster/${slug}`,
          areaServed: "SE",
          provider: { "@type": "ProfessionalService", name: "Beverskog Consulting AB", url: `${SITE}/`, telephone: "+46708896588" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Hem", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: x.metaTitle.split("|")[0].trim(), item: `${SITE}/tjanster/${slug}` },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: x.faq.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
        },
      ],
    },
  })),
  {
    route: "/tjanster",
    title: "Tjänster – naturvärdesinventering, fågelinventering & artskydd | Beverskog Consulting AB",
    description:
      "Alla tjänster från Beverskog Consulting AB: naturvärdesinventering, fågelinventeringar, artskyddsutredning, nyckelbiotoper, hänsynsförslag, rådgivning, utbildning och MKB-underlag.",
    heading: "Tjänster inom naturvård och skoglig rådgivning",
    body: "Naturvärdesinventering, fågelinventering och artskyddsutredning som ger säkra beslutsunderlag för skogsbruk, exploatering och certifiering enligt FSC och PEFC.",
    extraHtml: services
      .map((s) => `<h2><a href="/tjanster/${s.slug}">${esc(s.title)}</a></h2><p>${esc(s.description)}</p>`)
      .join(""),
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.title, url: `${SITE}/tjanster/${s.slug}` })),
    },
  },
  {
    route: "/karriar",
    title: "Karriär – jobba med naturvård | Beverskog Consulting AB",
    description:
      "Vill du arbeta med naturvärdesinventering, fågelinventering och artskydd? Skicka din ansökan till Beverskog Consulting AB.",
    heading: "Karriär på Beverskog Consulting",
    body: "Vi söker engagerade personer med intresse för skog, naturvård och biologisk mångfald.",
  },
];

/** Skriver statiska HTML-filer per route med rätt titel, beskrivning och canonical så att Google ser unik metadata utan att köra JavaScript. */
export default function prerenderMeta(): Plugin {
  let outDir = "dist";
  return {
    name: "prerender-meta",
    apply: "build",
    configResolved(c) {
      outDir = path.resolve(c.root, c.build.outDir);
    },
    closeBundle() {
      const dist = outDir;
      const indexPath = path.join(dist, "index.html");
      const base = fs.readFileSync(indexPath, "utf8");

      // Startsidan: lägg in nyckelinnehåll direkt i HTML så Google ser det utan JavaScript.
      const homeHtml =
        `<main><h1>Beverskog Consulting AB</h1>` +
        `<p>Skoglig expertis för hållbara beslut. Naturvärdesinventering, fågelinventeringar och artskydd som ger säkra beslutsunderlag för skogsbruk och exploatering.</p>` +
        `<h2>Tjänster</h2><ul>${services
          .map((s) => `<li><a href="/tjanster/${s.slug}">${esc(s.title)}</a> – ${esc(s.description)}</li>`)
          .join("")}</ul>` +
        `<p><a href="tel:+46708896588">070-889 65 88</a> · <a href="mailto:lynx@beverskog.com">lynx@beverskog.com</a></p></main>`;
      fs.writeFileSync(
        indexPath,
        base.replace('<div id="root"></div>', `<div id="root">${homeHtml}</div>`),
      );

      for (const p of pages()) {
        const url = `${SITE}${p.route}`;
        const t = esc(p.title);
        const d = esc(p.description);
        let html = base
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
          .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${d}$2`)
          .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${t}$2`)
          .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${d}$2`)
          .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${t}$2`)
          .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${d}$2`)
          .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`)
          .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`)
          .replace(/(<link\s+rel="alternate"\s+hreflang="sv"\s+href=")[^"]*(")/, `$1${url}$2`)
          .replace(/(<link\s+rel="alternate"\s+hreflang="x-default"\s+href=")[^"]*(")/, `$1${url}$2`)
          .replace(
            '<div id="root"></div>',
            `<div id="root"><main><h1>${esc(p.heading)}</h1><p>${esc(p.body)}</p>${p.extraHtml ?? ""}<p><a href="/">Beverskog Consulting AB</a> · <a href="tel:+46708896588">070-889 65 88</a></p></main></div>`,
          );
        if (p.jsonLd) {
          const ld = JSON.stringify(p.jsonLd).replace(/</g, "\\u003c");
          html = html.replace("</head>", `<script type="application/ld+json">${ld}</script></head>`);
        }
        const dir = path.join(dist, p.route);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, "index.html"), html);
      }
    },
  };
}
