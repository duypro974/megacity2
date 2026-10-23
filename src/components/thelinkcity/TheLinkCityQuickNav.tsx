"use client";

import { useState, useEffect } from "react";
import { Phone, Compass, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { scrollToSection } from "@/lib/scrollTo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Tổng quan", id: "tong-quan" },
  { label: "Vị trí", id: "vi-tri" },
  { label: "Mặt bằng", id: "mat-bang" },
  { label: "Tiện ích", id: "tien-ich" },
  { label: "Pháp lý", id: "phap-ly" },
  { label: "Tiến độ", id: "tien-do" },
  { label: "Phong thủy", id: "phong-thuy", isCompass: true },
  { label: "Bảng giá", id: "bang-gia", highlight: true },
  { label: "Thanh toán", id: "thanh-toan" },
  { label: "Hình ảnh", id: "hinh-anh" },
  { label: "Mẫu nhà", id: "mau-nha" },
  { label: "FAQ", id: "faq" },
  { label: "Liên hệ", id: "lien-he" },
];

export default function TheLinkCityQuickNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("tong-quan");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 280);

      const mid = window.innerHeight * 0.35;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= mid && rect.bottom >= mid) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id, 68);
  };

  return (
    <nav
      aria-label="The Link City Quick Nav"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-amber-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.7)] transition-all duration-300",
        scrolled
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Main Desktop / Mobile Top Row */}
        <div className="flex items-center justify-between h-14 gap-3">
          {/* Brand Logo / Tag */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer group shrink-0"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-white text-sm sm:text-base group-hover:text-amber-400 transition-colors uppercase font-sans">
                THE LINK CITY
              </span>
              <span className="text-[9px] uppercase tracking-widest text-emerald-400 font-bold hidden sm:inline-block -mt-1">
                Dầu Giây · Đồng Nai
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 overflow-x-auto scrollbar-hide py-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "text-xs font-medium px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap flex items-center gap-1 cursor-pointer",
                    isActive
                      ? "bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40 shadow-sm"
                      : item.highlight
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/25 hover:bg-amber-500/20 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.isCompass && <Compass className="w-3 h-3 text-emerald-400" />}
                  {item.highlight && <Sparkles className="w-3 h-3 text-amber-400" />}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Hotline & Consultation Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1.5 bg-slate-900 border border-amber-400/30 text-amber-300 px-3 py-1.5 rounded-full font-bold text-xs hover:border-amber-400 hover:bg-slate-850 transition-all active:scale-95"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="hidden sm:inline">{SITE_CONFIG.phoneDisplay}</span>
              <span className="sm:hidden">Hotline</span>
            </a>
            <button
              onClick={() => handleNavClick("lien-he")}
              className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 px-3.5 py-1.5 rounded-full font-extrabold text-xs shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>TƯ VẤN</span>
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Section Chips */}
        <div className="flex lg:hidden overflow-x-auto scrollbar-hide py-1.5 -mx-3 px-3 border-t border-white/5 gap-1.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "text-[11px] font-medium px-2.5 py-1 rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1",
                  isActive
                    ? "bg-amber-500/25 text-amber-300 font-bold border border-amber-500/40"
                    : item.highlight
                    ? "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                    : "bg-white/5 text-slate-300 active:bg-white/10"
                )}
              >
                {item.isCompass && <Compass className="w-2.5 h-2.5 text-emerald-400" />}
                {item.highlight && <Sparkles className="w-2.5 h-2.5 text-amber-400" />}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
