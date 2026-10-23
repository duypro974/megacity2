"use client";

import { useState, useEffect } from "react";
import { Phone, Compass, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Virtual Tour 360°", href: "#trai-nghiem-360", highlight: true },
  { label: "Sơ đồ 3D", href: "#mat-bang-3d" },
  { label: "Tổng quan", href: "#tong-quan" },
  { label: "Vị trí", href: "#vi-tri" },
  { label: "Đối tác Nhật", href: "#doi-tac" },
  { label: "Central District", href: "#central-district" },
  { label: "Sản phẩm", href: "#san-pham" },
  { label: "Nội thất 3D", href: "#noi-that" },
  { label: "Tiện ích", href: "#tien-ich" },
  { label: "Bảng giá", href: "#bang-gia" },
  { label: "Tài liệu", href: "#tai-lieu" },
];

export default function OneEraQuickNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("trai-nghiem-360");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 280);

      // detect active section
      for (const item of NAV_ITEMS) {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    if (href === "#trai-nghiem-360") {
      window.dispatchEvent(new CustomEvent("open-oneera-360"));
    }
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="One Era Quick Nav"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-[#06080e]/95 backdrop-blur-xl border-b border-[#dfb552]/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)] transition-all duration-300",
        scrolled
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Main Header Row */}
        <div className="flex items-center justify-between h-14 gap-3">
          {/* Brand Logo / Tag */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#dfb552] animate-pulse shadow-[0_0_10px_#dfb552]" />
            <span className="font-extrabold tracking-wider text-white text-sm sm:text-base group-hover:text-[#dfb552] transition-colors font-sans uppercase">
              ONE ERA
            </span>
          </div>

          {/* Desktop Anchor Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 overflow-x-auto scrollbar-hide py-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={cn(
                    "text-xs font-medium px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer",
                    isActive
                      ? "bg-[#dfb552]/20 text-[#dfb552] font-semibold border border-[#dfb552]/40 shadow-sm"
                      : item.highlight
                      ? "bg-[#dfb552]/10 text-[#dfb552] border border-[#dfb552]/25 hover:bg-[#dfb552]/20 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.highlight && <Compass className="w-3 h-3 text-[#dfb552]" />}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Hotline Pill */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] text-[#06080e] px-4 py-1.5 rounded-full font-extrabold text-xs sm:text-sm shadow-[0_4px_15px_rgba(223,181,82,0.3)] hover:shadow-[0_6px_20px_rgba(223,181,82,0.5)] transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{SITE_CONFIG.phoneDisplay}</span>
              <span className="sm:hidden">Hotline</span>
            </a>
          </div>
        </div>

        {/* Mobile Horizontal Section Chips */}
        <div className="flex lg:hidden overflow-x-auto scrollbar-hide py-1.5 -mx-3 px-3 border-t border-white/5 gap-1.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={cn(
                  "text-[11px] font-medium px-2.5 py-1 rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1",
                  isActive
                    ? "bg-[#dfb552]/25 text-[#dfb552] font-bold border border-[#dfb552]/40"
                    : item.highlight
                    ? "bg-[#dfb552]/15 text-[#dfb552] border border-[#dfb552]/25"
                    : "bg-white/5 text-slate-300 active:bg-white/10"
                )}
              >
                {item.highlight && <Compass className="w-2.5 h-2.5 text-[#dfb552]" />}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
