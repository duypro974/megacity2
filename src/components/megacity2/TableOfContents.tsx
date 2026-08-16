"use client";

import { useState, useEffect } from "react";
import { scrollToSection } from "@/lib/scrollTo";
import { ChevronDown } from "lucide-react";

const TOC_ITEMS = [
  { id: "tong-quan",        label: "Tổng quan dự án" },
  { id: "vi-tri",           label: "Vị trí & Liên kết vùng" },
  { id: "tien-ich",         label: "Tiện ích nội khu" },
  { id: "hinh-anh-thuc-te", label: "Hình ảnh thực tế" },
  { id: "san-pham",         label: "Sản phẩm nhà phố" },
  { id: "bang-gia",         label: "Bảng giá" },
  { id: "thanh-toan",       label: "Phương thức thanh toán" },
  { id: "phap-ly",          label: "Pháp lý dự án" },
  { id: "tong-quan",        label: "Tiến độ xây dựng" },   // re-use scroll fallback
  { id: "lien-he",          label: "Câu hỏi thường gặp & Liên hệ" },
];

// Deduplicated list dùng cho hiển thị
const TOC_DISPLAY = [
  { id: "tong-quan",        no: "1", label: "Tổng quan dự án" },
  { id: "vi-tri",           no: "2", label: "Vị trí & Liên kết vùng" },
  { id: "tien-ich",         no: "3", label: "Tiện ích nội khu" },
  { id: "hinh-anh-thuc-te", no: "4", label: "Hình ảnh thực tế" },
  { id: "san-pham",         no: "5", label: "Sản phẩm nhà phố" },
  { id: "bang-gia",         no: "6", label: "Bảng giá mới nhất" },
  { id: "thanh-toan",       no: "7", label: "Phương thức thanh toán" },
  { id: "phap-ly",          no: "8", label: "Pháp lý dự án" },
  { id: "tiến-độ",          no: "9", label: "Tiến độ xây dựng" },
  { id: "lien-he",          no: "10", label: "FAQ & Liên hệ" },
];

export default function TableOfContents() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  // Track active section on scroll
  useEffect(() => {
    const ids = TOC_DISPLAY.map((t) => t.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Mục lục trang Mega City 2"
      className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"
    >
      {/* Header — luôn hiển thị */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left
                   hover:bg-slate-50 transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-primary-600 fill-current">
              <rect x="1" y="2" width="6" height="1.5" rx="0.75" />
              <rect x="1" y="5.5" width="10" height="1.5" rx="0.75" />
              <rect x="1" y="9" width="8" height="1.5" rx="0.75" />
              <rect x="1" y="12.5" width="6" height="1.5" rx="0.75" />
            </svg>
          </span>
          <span className="font-bold text-sm text-slate-800">Mục lục nội dung</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Expandable list */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.25s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <ol className="px-4 pb-4 pt-1 space-y-0.5" role="list">
            {TOC_DISPLAY.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id + item.no}>
                  <button
                    type="button"
                    onClick={() => {
                      scrollToSection(item.id);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left
                                text-sm transition-colors group
                      ${isActive
                        ? "bg-primary-50 text-primary-700 font-semibold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"}`}
                  >
                    <span
                      className={`text-[10px] font-bold w-5 flex-shrink-0 tabular-nums
                        ${isActive ? "text-primary-500" : "text-slate-300 group-hover:text-slate-400"}`}
                    >
                      {item.no}
                    </span>
                    <span className="leading-snug">{item.label}</span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                    )}
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Quick links ở footer TOC */}
          <div className="px-4 pb-4 pt-1 border-t border-slate-100 flex flex-wrap gap-2">
            {[
              { href: "/mega-city-2/bang-gia",  label: "Bảng giá" },
              { href: "/mega-city-2/phap-ly",   label: "Pháp lý" },
              { href: "/mega-city-2/tien-do",   label: "Tiến độ" },
              { href: "/mega-city-2/vi-tri",    label: "Vị trí" },
              { href: "/mega-city-2/mat-bang",  label: "Mặt bằng" },
              { href: "/mega-city-2/hinh-anh",  label: "Hình ảnh" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold text-primary-600 bg-primary-50
                           hover:bg-primary-100 border border-primary-100
                           px-2.5 py-1 rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
