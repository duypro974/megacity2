"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Compass, Sparkles, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  highlight?: boolean;
}

const PRIMARY_ITEMS: NavItem[] = [
  { label: "Virtual Tour 360°", href: "#trai-nghiem-360", highlight: true },
  { label: "Tổng quan", href: "#tong-quan" },
  { label: "Vị trí", href: "#vi-tri" },
  { label: "Central District", href: "#central-district" },
  { label: "Sản phẩm", href: "#san-pham" },
  { label: "Tiện ích", href: "#tien-ich" },
  { label: "Bảng giá", href: "#bang-gia" },
];

const MORE_ITEMS: NavItem[] = [
  { label: "Sơ đồ 3D", href: "#mat-bang-3d" },
  { label: "Đối tác Nhật", href: "#doi-tac" },
  { label: "Nội thất 3D", href: "#noi-that" },
  { label: "Tài liệu Brochure", href: "#tai-lieu" },
];

const ALL_ITEMS: NavItem[] = [...PRIMARY_ITEMS, ...MORE_ITEMS];

export default function OneEraQuickNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("trai-nghiem-360");
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const moreTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 280);

      // detect active section
      for (const item of ALL_ITEMS) {
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

  useEffect(() => {
    if (!moreOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [moreOpen]);

  const scrollTo = (href: string) => {
    setMoreOpen(false);
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

  const handleMouseEnter = () => {
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    setMoreOpen(true);
  };

  const handleMouseLeave = () => {
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    moreTimeoutRef.current = setTimeout(() => {
      setMoreOpen(false);
    }, 180);
  };

  const activeMoreItem = MORE_ITEMS.find((item) => item.href.replace("#", "") === activeSection);
  const isMoreActive = Boolean(activeMoreItem);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Desktop / Mobile Header Row */}
        <div className="flex items-center justify-between h-14 gap-2 lg:gap-4">
          {/* Brand Logo / Tag */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#dfb552] animate-pulse shadow-[0_0_10px_#dfb552]" />
            <span className="font-extrabold tracking-wider text-white text-sm sm:text-base group-hover:text-[#dfb552] transition-colors font-sans uppercase whitespace-nowrap">
              ONE ERA
            </span>
          </div>

          {/* Desktop Navigation Links — 100% visible, no horizontal scroll */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
            {PRIMARY_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={cn(
                    "text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer",
                    isActive
                      ? "bg-[#dfb552]/20 text-[#dfb552] font-semibold border border-[#dfb552]/40 shadow-sm"
                      : item.highlight
                      ? "bg-[#dfb552]/10 text-[#dfb552] border border-[#dfb552]/25 hover:bg-[#dfb552]/20 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.highlight && <Compass className="w-3.5 h-3.5 text-[#dfb552]" />}
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* Smart "Thêm ▾" Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setMoreOpen(!moreOpen)}
                className={cn(
                  "text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap flex items-center gap-1 cursor-pointer",
                  isMoreActive
                    ? "bg-[#dfb552]/20 text-[#dfb552] font-semibold border border-[#dfb552]/40 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                )}
              >
                <span>{activeMoreItem ? activeMoreItem.label : "Thêm"}</span>
                <ChevronDown
                  className={cn("w-3.5 h-3.5 transition-transform duration-200", moreOpen && "rotate-180")}
                />
              </button>

              {/* Dropdown Menu */}
              {moreOpen && (
                <div className="absolute top-full right-0 pt-1.5 w-52 z-50 animate-fadeInDown">
                  <div className="bg-[#0b0e18]/98 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl p-1.5 flex flex-col gap-0.5">
                    {MORE_ITEMS.map((item) => {
                      const isActive = activeSection === item.href.replace("#", "");
                      return (
                        <button
                          key={item.href}
                          onClick={() => scrollTo(item.href)}
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between cursor-pointer",
                            isActive
                              ? "bg-[#dfb552]/20 text-[#dfb552] font-bold"
                              : "text-slate-300 hover:text-white hover:bg-white/5"
                          )}
                        >
                          <span>{item.label}</span>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#dfb552]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
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
        <div className="flex lg:hidden overflow-x-auto scrollbar-hide py-1.5 -mx-4 px-4 border-t border-white/5 gap-1.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {ALL_ITEMS.map((item) => {
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
