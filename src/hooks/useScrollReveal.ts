import { useEffect } from "react";

/**
 * Mount once — finds all [data-reveal] and [data-reveal-stagger]
 * inside document and observes them. Fires only once per element.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal], [data-reveal-stagger]"
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
