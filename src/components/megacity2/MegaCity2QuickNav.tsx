"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, Sparkles, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { scrollToSection } from "@/lib/scrollTo";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  id: string;
  highlight?: boolean;
}

const PRIMARY_ITEMS: NavItem[] = [
  { label: "Tổng quan", id: "tong-quan" },
  { label: "Vị trí", id: "vi-tri" },
  { label: "Tiện ích", id: "tien-ich" },
  { label: "Sản phẩm", id: "san-pham" },
  { label: "Pháp lý", id: "phap-ly" },
  { label: "Bảng giá", id: "bang-gia", highlight: true },
];

const MORE_ITEMS: NavItem[] = [
  { label: "Hình ảnh thực tế", id: "hinh-anh-thuc-te" },
  { label: "Chính sách thanh toán", id: "thanh-toan" },
  { label: "Tiến độ hạ tầng", id: "tien-do" },
];

const ALL_ITEMS: NavItem[] = [...PRIMARY_ITEMS, ...MORE_ITEMS, { label: "Liên hệ", id: "lien-he" }];

export default function MegaCity2QuickNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("tong-quan");
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const moreTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 280);

      const mid = window.innerHeight * 0.35;
      for (const item of ALL_ITEMS) {
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

  const handleNavClick = (id: string) => {
    setMoreOpen(false);
    scrollToSection(id, 68);
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

  const activeMoreItem = MORE_ITEMS.find((item) => item.id === activeSection);
  const isMoreActive = Boolean(activeMoreItem);

  return (
    <nav
      aria-label="Mega City 2 Quick Nav"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-emerald-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.7)] transition-all duration-300",
        scrolled
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Desktop / Mobile Top Row */}
        <div className="flex items-center justify-between h-14 gap-2 lg:gap-4">
          {/* Brand Logo / Tag */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer group shrink-0"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#16B364] animate-pulse shadow-[0_0_10px_#16B364]" />
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-white text-sm sm:text-base group-hover:text-emerald-400 transition-colors uppercase font-sans whitespace-nowrap">
                MEGA CITY 2
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#16B364] font-bold hidden sm:inline-block -mt-1">
                Nhơn Trạch · 84 Hécta
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links — 100% visible, no horizontal scroll */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
            {PRIMARY_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap flex items-center gap-1 cursor-pointer",
                    isActive
                      ? "bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm"
                      : item.highlight
                      ? "bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 font-bold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.highlight && <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
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
                    ? "bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm"
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
                <div className="absolute top-full right-0 pt-1.5 w-56 z-50 animate-fadeInDown">
                  <div className="bg-slate-900/98 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl p-1.5 flex flex-col gap-0.5">
                    {MORE_ITEMS.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavClick(item.id)}
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between cursor-pointer",
                            isActive
                              ? "bg-emerald-500/20 text-emerald-300 font-bold"
                              : "text-slate-300 hover:text-white hover:bg-white/5"
                          )}
                        >
                          <span>{item.label}</span>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Hotline & Consultation Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1.5 bg-slate-900 border border-emerald-500/30 text-emerald-300 px-3 py-1.5 rounded-full font-bold text-xs hover:border-emerald-400 hover:bg-slate-850 transition-all active:scale-95"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span className="hidden sm:inline">{SITE_CONFIG.phoneDisplay}</span>
              <span className="sm:hidden">Hotline</span>
            </a>
            <button
              onClick={() => handleNavClick("lien-he")}
              className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 px-3.5 py-1.5 rounded-full font-extrabold text-xs shadow-md hover:brightness-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>BÁO GIÁ</span>
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Section Chips */}
        <div className="flex lg:hidden overflow-x-auto scrollbar-hide py-1.5 -mx-4 px-4 border-t border-white/5 gap-1.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {ALL_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "text-[11px] font-medium px-2.5 py-1 rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1",
                  isActive
                    ? "bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-500/40"
                    : item.highlight
                    ? "bg-amber-500/15 text-amber-300 border border-amber-500/25"
                    : "bg-white/5 text-slate-300 active:bg-white/10"
                )}
              >
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
