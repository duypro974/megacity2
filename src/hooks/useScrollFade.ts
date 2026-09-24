"use client";

import { useEffect, useRef } from "react";

/**
 * useScrollFade
 * Gắn IntersectionObserver lên ref element.
 * Khi vào viewport → fade in (opacity 1, translateY 0).
 * Chỉ trigger một lần — không fade-out khi scroll qua
 * để tránh bug section biến mất / trang trắng.
 */
export function useScrollFade() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          // Unobserve sau khi đã hiện — không reset lại
          obs.unobserve(el);
        }
      },
      {
        threshold: 0.05,
        // Trigger sớm 80px trước khi element vào viewport
        rootMargin: "0px 0px -80px 0px",
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
