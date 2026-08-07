"use client";

import { useEffect, useRef } from "react";

interface FadeSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Wrapper dùng IntersectionObserver để fade-in khi scroll vào,
 * và fade-out (mờ + trượt lên) khi scroll qua section đó.
 */
export default function FadeSection({ id, className = "", children }: FadeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";
    el.style.transition = "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)";

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        } else {
          const rect = entry.boundingClientRect;
          if (rect.top < 0) {
            // Đã scroll qua — mờ nhẹ + trượt lên trên
            el.style.opacity = "0.1";
            el.style.transform = "translateY(-20px)";
          } else {
            // Chưa tới — ẩn phía dưới
            el.style.opacity = "0";
            el.style.transform = "translateY(28px)";
          }
        }
      },
      { threshold: 0.06 }
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
