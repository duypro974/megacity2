"use client";

import { useState, useEffect, useCallback } from "react";
import { scrollToSection } from "@/lib/scrollTo";

const SECTIONS = [
  { id: "tong-quan",  label: "Tổng quan" },
  { id: "vi-tri",     label: "Vị trí" },
  { id: "mat-bang",   label: "Mặt bằng" },
  { id: "tien-ich",   label: "Tiện ích" },
  { id: "hinh-anh",   label: "Hình ảnh" },
  { id: "tien-do",    label: "Tiến độ" },
  { id: "phap-ly",    label: "Pháp lý" },
  { id: "bang-gia",   label: "Bảng giá" },
  { id: "faq",        label: "FAQ" },
  { id: "lien-he",    label: "Liên hệ" },
];

// Chỉ hiện nav khi scroll qua hero (> 90vh)
const HERO_THRESHOLD = typeof window !== "undefined" ? window.innerHeight * 0.9 : 700;

export default function TLCSectionNav() {
  const [active,     setActive]     = useState("tong-quan");
  const [localHover, setLocalHover] = useState<string | null>(null);
  const [visible,    setVisible]    = useState(false);

  const updateState = useCallback(() => {
    const scrollY = window.scrollY;

    // Chỉ hiện sau khi scroll qua hero
    setVisible(scrollY > window.innerHeight * 0.85);

    // Track active section
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
    window.addEventListener("scroll", updateState, { passive: true });
    updateState();
    return () => window.removeEventListener("scroll", updateState);
  }, [updateState]);

  return (
    <nav
      aria-label="Mục lục trang The Link City"
      className={`fixed left-3 top-1/2 -translate-y-1/2 z-30 hidden lg:flex select-none
                  transition-all duration-300
                  ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"}`}
    >
      <div className="flex flex-col gap-3 bg-slate-900/75 backdrop-blur-md border border-white/10 rounded-2xl px-3 py-4 shadow-xl">
        <p className="text-[8px] font-black tracking-[0.2em] uppercase text-white/30 text-center mb-1">
          MỤC LỤC
        </p>

        {SECTIONS.map(({ id, label }, i) => {
          const isActive  = active === id;
          const isHovered = localHover === id;

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
                {String(i + 1).padStart(2, "0")} {label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
