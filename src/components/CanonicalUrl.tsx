import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://beverskog.com';

const CanonicalUrl = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

    const canonicalUrl = `${SITE_URL}${cleanPath}`;

    // Canonical
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    // Open Graph URL
    let ogUrl = document.querySelector<HTMLMetaElement>(
      'meta[property="og:url"]'
    );

    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }

    ogUrl.content = canonicalUrl;
  }, [pathname]);

  return null;
};

export default CanonicalUrl;
