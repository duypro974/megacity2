"use client";

import { useState, useEffect, useCallback } from "react";
import { scrollToSection } from "@/lib/scrollTo";

const SECTIONS = [
  { id: "tong-quan",         label: "Tổng quan" },
  { id: "vi-tri",            label: "Liên kết vùng" },
  { id: "tien-ich",          label: "Tiện ích nội khu" },
  { id: "hinh-anh-thuc-te",  label: "Hình ảnh thực tế" },
  { id: "san-pham",          label: "Sản phẩm" },
  { id: "bang-gia",          label: "Bảng giá" },
  { id: "thanh-toan",        label: "Thanh toán" },
  { id: "phap-ly",           label: "Pháp lý" },
  { id: "lien-he",           label: "Liên hệ" },
];

export default function SectionNav() {
  const [active,     setActive]     = useState("tong-quan");
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);
  const [localHover, setLocalHover] = useState<string | null>(null);

  const updateActive = useCallback(() => {
    const mid = window.innerHeight * 0.45;
    let found = SECTIONS[0].id;
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= mid) found = id;
    }
    setActive(found);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    const onHover = (e: Event) => {
      setHoverLabel((e as CustomEvent<{ label: string | null }>).detail.label);
    };
    window.addEventListener("section-item-hover", onHover);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("section-item-hover", onHover);
    };
  }, [updateActive]);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex select-none"
    >
      {/* Card nền */}
      <div className="flex flex-col gap-3 bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl px-3 py-4 shadow-xl">
        <p className="text-[8px] font-black tracking-[0.2em] uppercase text-white/30 text-center mb-1">
          MỤC LỤC
        </p>

        {SECTIONS.map(({ id, label }, i) => {
          const isActive  = active === id;
          const isHovered = localHover === id;
          const showLabel = isActive || isHovered;
          const displayLabel = (isActive && hoverLabel) ? hoverLabel : label;

          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
              onMouseEnter={() => setLocalHover(id)}
              onMouseLeave={() => setLocalHover(null)}
              className="group relative flex items-center gap-0 cursor-pointer"
              aria-label={label}
            >
              {/* Dot / bar */}
              <div className="w-4 flex items-center justify-center shrink-0">
                {isActive ? (
                  <div className="h-[3px] w-5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] transition-all duration-300" />
                ) : (
                  <div className={`rounded-full transition-all duration-200
                    ${isHovered
                      ? "w-2.5 h-2.5 bg-amber-300/80 shadow-[0_0_6px_rgba(251,191,36,0.5)]"
                      : "w-2 h-2 bg-white/40 group-hover:bg-white/70"}`}
                  />
                )}
              </div>

              {/* Label tooltip */}
              <span
                className={`absolute left-6 whitespace-nowrap text-[10px] font-bold tracking-widest uppercase
                  px-2.5 py-1 rounded-lg pointer-events-none transition-all duration-200
                  ${isActive
                    ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30 opacity-100 translate-x-0"
                    : "bg-slate-900/90 border border-white/10 text-white/80 shadow-lg opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0"
                  }`}
              >
                {String(i + 1).padStart(2, "0")} {displayLabel}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
