/**
 * Strukturerad data (JSON-LD) som delas mellan appen och byggsteget som
 * förrenderar HTML. Använd endast relativa importer i denna fil.
 */
import { services, type Service } from "../data/services";
import type { ServiceExtra } from "../data/serviceExtras";
import type { HomeFaq } from "../data/homeFaqs";
import {
  COMPANY_NAME,
  EMAIL,
  LINKEDIN_URL,
  LOGO_URL,
  ORG_ID,
  PERSON_ID,
  PHONE_E164,
  SITE_URL,
  WEBSITE_ID,
} from "../data/site";

type JsonLd = Record<string, unknown>;

const knowsAbout = [
  "Naturvärdesinventering",
  "Fågelinventering",
  "Artskyddsutredning",
  "Skoglig rådgivning",
  "Biologisk mångfald",
  "Nyckelbiotoper",
  "FSC",
  "PEFC",
  "Skogsekologi",
  "MKB",
  "Naturvård",
];

export const serviceUrl = (slug: string) => `${SITE_URL}/tjanster/${slug}`;

/** Webbplatsgemensam graf: organisation, person och webbplats. */
export const siteGraph = (): JsonLd => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: COMPANY_NAME,
      legalName: COMPANY_NAME,
      url: `${SITE_URL}/`,
      logo: { "@type": "ImageObject", url: LOGO_URL, width: 512, height: 512 },
      image: LOGO_URL,
      description:
        "Naturvårdskonsult och skogsvetare – naturvärdesinventering, fågelinventering, artskyddsutredning och skoglig rådgivning i hela Sverige.",
      email: EMAIL,
      telephone: PHONE_E164,
      areaServed: { "@type": "Country", name: "Sverige" },
      founder: { "@id": PERSON_ID },
      knowsAbout,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tjänster",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, url: serviceUrl(s.slug) },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Lynx Beverskog",
      jobTitle: "Skogsvetare och naturvårdskonsult",
      worksFor: { "@id": ORG_ID },
      url: `${SITE_URL}/`,
      email: EMAIL,
      telephone: PHONE_E164,
      sameAs: [LINKEDIN_URL],
      knowsAbout: knowsAbout.slice(0, 8),
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: COMPANY_NAME,
      url: `${SITE_URL}/`,
      inLanguage: "sv-SE",
      publisher: { "@id": ORG_ID },
    },
  ],
});

const faqPage = (items: { question: string; answer: string }[]): JsonLd => ({
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export const homeGraph = (faqs: HomeFaq[]): JsonLd => ({
  "@context": "https://schema.org",
  "@graph": [faqPage(faqs.map((f) => ({ question: f.q, answer: f.a })))],
});

export const servicesIndexGraph = (): JsonLd => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: `Tjänster från ${COMPANY_NAME}`,
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: serviceUrl(s.slug),
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Tjänster", item: `${SITE_URL}/tjanster` },
      ],
    },
  ],
});

export const serviceGraph = (service: Service, extra?: ServiceExtra): JsonLd => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      description: extra?.metaDescription ?? service.description,
      url: serviceUrl(service.slug),
      areaServed: { "@type": "Country", name: "Sverige" },
      provider: { "@id": ORG_ID },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Tjänster", item: `${SITE_URL}/tjanster` },
        { "@type": "ListItem", position: 3, name: service.title, item: serviceUrl(service.slug) },
      ],
    },
    ...(extra?.faq?.length ? [faqPage(extra.faq)] : []),
  ],
});
