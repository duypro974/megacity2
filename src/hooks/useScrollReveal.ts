"use client";

import { useEffect, useRef } from "react";

/**
 * useScrollReveal
 * Gắn IntersectionObserver lên container ref.
 * Tất cả phần tử con có class `reveal` hoặc `reveal-left`
 * sẽ được thêm class `is-visible` khi vào viewport.
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-item"
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Unobserve sau khi đã reveal để không reset khi scroll lên
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
