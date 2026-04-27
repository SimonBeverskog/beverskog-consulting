import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    const scrollTo = (state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo) {
      // Wait for the target page to render before scrolling
      requestAnimationFrame(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;
