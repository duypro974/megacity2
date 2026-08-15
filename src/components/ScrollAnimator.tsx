"use client";

import { useEffect } from "react";

/**
 * ScrollAnimator — mount 1 lần duy nhất trên mỗi trang.
 * Dùng IntersectionObserver để thêm class "in-view" vào bất kỳ element nào
 * có animation class, kích hoạt CSS animations trong globals.css.
 */
export default function ScrollAnimator() {
  useEffect(() => {
    const THRESHOLD = 0.06;

    // ── General scroll-reveal elements ──
    const selectors = [
      "[data-anim]",
      ".anim-up",
      ".anim-left",
      ".anim-right",
      ".anim-scale",
      ".anim-flip",
      ".anim-zoom",
      ".anim-stagger",
      ".anim-stagger-slow",
      ".anim-counter",
      ".anim-stat",
      ".anim-divider",
      ".anim-bar-wrap",
      ".anim-img-wrap",
      ".anim-timeline-line",
      ".anim-number",
    ].join(", ");

    const targets = document.querySelectorAll<HTMLElement>(selectors);

    const generalObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Stagger children get a small extra delay based on their parent's in-view
            el.classList.add("in-view");
            generalObs.unobserve(el);
          }
        });
      },
      { threshold: THRESHOLD, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => generalObs.observe(el));

    // ── Progress bars (.progress-fill) ──
    const bars = document.querySelectorAll<HTMLElement>(".progress-fill");
    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            barObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    bars.forEach((bar) => barObs.observe(bar));

    // ── Number count-up (.anim-count-up[data-target]) ──
    const counters = document.querySelectorAll<HTMLElement>("[data-count-up]");
    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseFloat(el.dataset.countUp || "0");
            const suffix = el.dataset.suffix || "";
            const duration = parseInt(el.dataset.duration || "1500", 10);
            const decimals = (el.dataset.countUp || "0").includes(".") ? 1 : 0;
            let start: number | null = null;

            const step = (timestamp: number) => {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = eased * target;
              el.textContent = current.toFixed(decimals) + suffix;
              if (progress < 1) requestAnimationFrame(step);
            };

            requestAnimationFrame(step);
            countObs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => countObs.observe(el));

    // ── Legacy reveal system ──
    const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger]");
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    revealEls.forEach((el) => revealObs.observe(el));

    return () => {
      generalObs.disconnect();
      barObs.disconnect();
      countObs.disconnect();
      revealObs.disconnect();
    };
  }, []);

  return null;
}
