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
      className="fixed left-3 top-1/2 -translate-y-1/2 z-40
                 hidden lg:flex flex-col gap-4 select-none"
    >
      {SECTIONS.map(({ id, label }, i) => {
        const isActive  = active === id;
        const isHovered = localHover === id;
        const showLabel = isActive || isHovered;
        const displayLabel = (isActive && hoverLabel) ? hoverLabel : label;
        const labelCls = (isActive && hoverLabel)
          ? "text-amber-600"
          : isActive ? "text-primary-700" : "text-slate-600";

        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
            onMouseEnter={() => setLocalHover(id)}
            onMouseLeave={() => setLocalHover(null)}
            className="group flex items-center gap-2 cursor-pointer"
            aria-label={label}
          >
            {/* Dot / bar — fixed width so label stays stable */}
            <div className="w-5 flex items-center justify-center shrink-0">
              {isActive ? (
                <div className={`h-[3px] rounded-full transition-all duration-300
                  ${(isActive && hoverLabel) ? "bg-amber-500 w-5" : "bg-primary-600 w-4"}`}
                />
              ) : (
                <div className={`rounded-full transition-all duration-200
                  ${isHovered
                    ? "w-2.5 h-2.5 bg-primary-400"
                    : "w-2 h-2 bg-slate-300 group-hover:bg-slate-400"}`}
                />
              )}
            </div>

            {/* Label — dùng opacity + pointer-events thay vì max-w để tránh cắt chữ */}
            <span
              className={`text-[11px] font-bold whitespace-nowrap leading-none
                px-1.5 py-0.5 rounded bg-white/90 backdrop-blur-sm shadow-sm
                transition-opacity duration-200
                ${labelCls}
                ${showLabel ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
              {String(i + 1).padStart(2, "0")} {displayLabel}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
