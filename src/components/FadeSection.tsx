"use client";

import { useEffect, useRef } from "react";

interface FadeSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Wrapper dùng IntersectionObserver để fade-in khi scroll vào viewport.
 * Chỉ fade-in một lần duy nhất — không fade-out khi scroll qua
 * để tránh bug section biến mất / trang trắng.
 */
export default function FadeSection({ id, className = "", children }: FadeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)";

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          // Unobserve sau khi đã hiện — không cần theo dõi thêm
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

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
}
