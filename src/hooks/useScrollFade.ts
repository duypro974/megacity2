"use client";

import { useEffect, useRef } from "react";

/**
 * useScrollFade
 * Gắn IntersectionObserver lên ref element.
 * Khi vào viewport → opacity 1, translateY 0
 * Khi ra khỏi viewport (scroll qua) → opacity 0.15, translateY(-20px)
 * 
 * Chỉ áp dụng class, không reset — để tránh bug biến mất.
 */
export function useScrollFade() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial style
    el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        } else {
          // Đã scroll qua (section phía trên) → mờ nhẹ
          const rect = entry.boundingClientRect;
          if (rect.top < 0) {
            // Section đã scroll lên trên
            el.style.opacity = "0.15";
            el.style.transform = "translateY(-24px)";
          } else {
            // Section chưa đến (phía dưới)
            el.style.opacity = "0";
            el.style.transform = "translateY(32px)";
          }
        }
      },
      { threshold: 0.08 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
