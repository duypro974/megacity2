"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Về Kim Oanh", href: "#ve-kim-oanh" },
  {
    label: "Dự án",
    href: "#du-an",
    children: [
      { label: "Mega City 2", href: "/mega-city-2", note: "Nhơn Trạch" },
      {
        label: "K-Home CityView",
        href: "https://k-homedongnai.com.vn/k-home-cityview-ho-nai",
        note: "Biên Hòa",
        external: true,
      },
      {
        label: "K-Home Avenue",
        href: "https://k-homedongnai.com.vn/k-home-avenue-nhon-trach",
        note: "Nhơn Trạch",
        external: true,
      },
      {
        label: "K-Home Midtown",
        href: "https://k-homedongnai.com.vn/k-home-midtown-trang-bom",
        note: "Trảng Bom",
        external: true,
      },
    ],
  },
  { label: "Lãnh đạo", href: "#lanh-dao" },
  { label: "Đối tác", href: "#doi-tac" },
  { label: "Liên hệ", href: "#lien-he" },
];

export default function CorpHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = () => setDropdown(null);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
      setDropdown(null);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/KOG_Web_RGB_01.svg"
              alt="Kim Oanh Group"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdown(dropdown === item.label ? null : item.label);
                      }}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        scrolled
                          ? "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
                          : "text-white/85 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          dropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {/* Dropdown */}
                    {dropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.children.map((child) =>
                          child.external ? (
                            <a
                              key={child.label}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-4 py-3 hover:bg-amber-50 transition-colors group border-b border-slate-50 last:border-0"
                              onClick={() => setDropdown(null)}
                            >
                              <span className="text-sm font-semibold text-slate-800 group-hover:text-amber-600">
                                {child.label}
                              </span>
                              {child.note && (
                                <span className="text-xs text-slate-400">{child.note}</span>
                              )}
                            </a>
                          ) : (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-center justify-between px-4 py-3 hover:bg-amber-50 transition-colors group border-b border-slate-50 last:border-0"
                              onClick={() => setDropdown(null)}
                            >
                              <span className="text-sm font-semibold text-slate-800 group-hover:text-amber-600">
                                {child.label}
                              </span>
                              {child.note && (
                                <span className="text-xs text-slate-400">{child.note}</span>
                              )}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      scrolled
                        ? "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:0937587438"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400
                         text-white px-5 py-2.5 rounded-full text-sm font-bold
                         shadow-md shadow-amber-500/20 transition-all duration-200
                         hover:shadow-amber-500/30 hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5" />
              0937 587 438
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className={cn(
              "xl:hidden p-2 rounded-lg transition",
              scrolled
                ? "text-slate-800 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={cn(
            "xl:hidden overflow-hidden transition-all duration-300",
            open ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-white border-t border-gray-100 shadow-xl">
            <nav className="flex flex-col px-4 py-2">
              {NAV.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setDropdown(dropdown === item.label ? null : item.label)
                        }
                        className="w-full py-3 text-sm font-medium border-b border-gray-50 flex justify-between items-center text-slate-700"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 opacity-40 transition-transform",
                            dropdown === item.label && "rotate-180"
                          )}
                        />
                      </button>
                      {dropdown === item.label && (
                        <div className="pl-3 pb-1">
                          {item.children.map((child) =>
                            child.external ? (
                              <a
                                key={child.label}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between py-2.5 text-sm text-slate-600 border-b border-gray-50"
                                onClick={() => setOpen(false)}
                              >
                                {child.label}
                                {child.note && (
                                  <span className="text-xs text-slate-400">{child.note}</span>
                                )}
                              </a>
                            ) : (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="flex items-center justify-between py-2.5 text-sm text-slate-600 border-b border-gray-50"
                                onClick={() => setOpen(false)}
                              >
                                {child.label}
                                {child.note && (
                                  <span className="text-xs text-slate-400">{child.note}</span>
                                )}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
                      className="py-3 text-sm font-medium border-b border-gray-50 flex justify-between items-center text-slate-700"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 opacity-30 -rotate-90" />
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-3">
                <a
                  href="tel:0937587438"
                  className="flex items-center justify-center gap-2 bg-amber-500 text-white
                             py-3 rounded-full font-bold text-sm shadow-md w-full"
                >
                  <Phone className="w-4 h-4" /> 0937 587 438
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
