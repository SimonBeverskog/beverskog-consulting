import fs from "fs";
import path from "path";
import type { Plugin } from "vite";
import { serviceExtras } from "./src/data/serviceExtras";

const SITE = "https://beverskog.com";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

interface RoutePage {
  route: string;
  title: string;
  description: string;
  heading: string;
  body: string;
}

const pages = (): RoutePage[] => [
  ...Object.entries(serviceExtras).map(([slug, x]) => ({
    route: `/tjanster/${slug}`,
    title: `${x.metaTitle}`,
    description: x.metaDescription,
    heading: x.metaTitle.split("|")[0].trim(),
    body: x.intro,
  })),
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
  return {
    name: "prerender-meta",
    apply: "build",
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      const base = fs.readFileSync(path.join(dist, "index.html"), "utf8");
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
            `<div id="root"><main><h1>${esc(p.heading)}</h1><p>${esc(p.body)}</p><p><a href="/">Beverskog Consulting AB</a> · <a href="tel:+46708896588">070-889 65 88</a></p></main></div>`,
          );
        const dir = path.join(dist, p.route);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, "index.html"), html);
      }
    },
  };
}
