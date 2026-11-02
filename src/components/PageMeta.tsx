import { useEffect } from 'react';
import { COMPANY_NAME } from '@/data/site';

interface PageMetaProps {
  title: string;
  description: string;
  /** Optional JSON-LD object rendered for this page */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const setMeta = (selector: string, attr: 'name' | 'property', key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
};

const PageMeta = ({ title, description, jsonLd }: PageMetaProps) => {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', COMPANY_NAME);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  }, [title, description]);

  useEffect(() => {
    // Sidspecifik JSON-LD som byggsteget lagt in i HTML ersätts av appens
    // version, så att samma data inte finns två gånger.
    document.head
      .querySelectorAll('script[type="application/ld+json"][data-prerender]')
      .forEach((el) => el.remove());
    if (!jsonLd) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.pageMeta = 'true';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [jsonLd]);

  return null;
};

export default PageMeta;
