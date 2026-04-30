import { useEffect, useState } from "react";

/**
 * useScrollNavigation - Tracks which section is in view and enables smooth scrolling
 * Used by Navbar component to highlight active section and navigate smoothly
 */
export function useScrollNavigation(links) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(links[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  return { active, scrolled };
}

/**
 * useSmoothScroll - Handles smooth scrolling to elements by ID
 */
export function useSmoothScroll() {
  return (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
}
