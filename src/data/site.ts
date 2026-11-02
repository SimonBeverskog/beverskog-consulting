/**
 * Gemensamma uppgifter om webbplatsen. Används både i appen och i
 * byggsteget (vite-plugin-prerender-meta.ts) – importera därför bara med
 * relativa sökvägar härifrån.
 */
export const SITE_URL = "https://beverskog.com";
export const COMPANY_NAME = "Beverskog Consulting AB";
export const PHONE_E164 = "+46708896588";
export const PHONE_DISPLAY = "070-889 65 88";
export const EMAIL = "lynx@beverskog.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/lynx-beverskog-22170415a/";
export const LOGO_URL = `${SITE_URL}/favicon.png`;

export const ORG_ID = `${SITE_URL}/#organization`;
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Verifieringskoder för sökmotorernas verktyg. Lämna tom sträng om koden
 * saknas – då skrivs ingen meta-tagg ut.
 * - google: innehållet i <meta name="google-site-verification">
 * - bing: innehållet i <meta name="msvalidate.01"> från Bing Webmaster Tools
 */
export const siteVerification = {
  google: "Ogtk15yXPo1d-EYe3x8lQGmrE7uz0VABZmwRP5t1fOI",
  bing: "",
};

/**
 * IndexNow-nyckel. Nyckeln är publik enligt IndexNow-protokollet och
 * publiceras som /<nyckel>.txt i public/.
 */
export const INDEXNOW_KEY = "b7e4c91a2f6d4e0893a5c1d7f2e8b604";
