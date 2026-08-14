"use client";

import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/data/siteConfig";

// ─────────────────────────────────────────────────────────────
// NAV data — data-driven, thêm project mới ở đây
// ─────────────────────────────────────────────────────────────
const NAV = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/ve-chung-toi" },
  {
    label: "Dự án",
    href: "#du-an",
    children: [
      {
        label: "Mega City 2",
        note: "Nhơn Trạch, Đồng Nai",
        href: "/mega-city-2",
        external: false,
      },
      {
        label: "K-Home CityView",
        note: "Hố Nai, Biên Hòa",
        href: "https://k-homedongnai.com.vn/k-home-cityview-ho-nai",
        external: true,
      },
      {
        label: "K-Home Avenue",
        note: "Nhơn Trạch",
        href: "https://k-homedongnai.com.vn/k-home-avenue-nhon-trach",
        external: true,
      },
      {
        label: "K-Home Midtown",
        note: "Trảng Bom",
        href: "https://k-homedongnai.com.vn/k-home-midtown-trang-bom",
        external: true,
      },
      {
        label: "Xem tất cả dự án",
        note: "",
        href: "#du-an",
        external: false,
        isViewAll: true,
      },
    ],
  },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function CorpHeader({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-dropdown-container]")) setDropdown(null);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
      setDropdown(null);
    }
  };

  const isOnHomePage = typeof window !== "undefined" && window.location.pathname === "/";

  const renderLink = (
    item: { label: string; href: string; external?: boolean; note?: string; isViewAll?: boolean },
    onClick?: () => void
  ) => {
    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className="flex items-center justify-between px-4 py-3 hover:bg-amber-50 transition-colors group border-b border-slate-50 last:border-0"
        >
          <span className="text-sm font-semibold text-slate-800 group-hover:text-amber-600">
            {item.label}
          </span>
          {item.note && <span className="text-xs text-slate-400">{item.note}</span>}
        </a>
      );
    }
    if (item.isViewAll) {
      return (
        <a
          href={item.href}
          onClick={(e) => {
            handleAnchorClick(e, item.href);
            onClick?.();
          }}
          className="flex items-center gap-2 px-4 py-3 bg-amber-50 hover:bg-amber-100 transition-colors group"
        >
          <span className="text-sm font-bold text-amber-700 group-hover:text-amber-800">
            {item.label}
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
        </a>
      );
    }
    if (item.href.startsWith("/")) {
      return (
        <Link
          href={item.href}
          onClick={onClick}
          className="flex items-center justify-between px-4 py-3 hover:bg-amber-50 transition-colors group border-b border-slate-50 last:border-0"
        >
          <span className="text-sm font-semibold text-slate-800 group-hover:text-amber-600">
            {item.label}
          </span>
          {item.note && <span className="text-xs text-slate-400">{item.note}</span>}
        </Link>
      );
    }
    return (
      <a
        href={item.href}
        onClick={(e) => {
          handleAnchorClick(e, item.href);
          onClick?.();
        }}
        className="flex items-center justify-between px-4 py-3 hover:bg-amber-50 transition-colors group border-b border-slate-50 last:border-0"
      >
        <span className="text-sm font-semibold text-slate-800 group-hover:text-amber-600">
          {item.label}
        </span>
        {item.note && <span className="text-xs text-slate-400">{item.note}</span>}
      </a>
    );
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled || solid
            ? "bg-white/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center shrink-0 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/KOG_Web_RGB_01.svg"
              alt="Kim Oanh Group"
              className={cn(
                "h-9 w-auto object-contain transition-all duration-300",
                !scrolled && !solid ? "brightness-0 invert" : ""
              )}
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV.map((item) => (
              <div key={item.label} className="relative" data-dropdown-container>
                {item.children ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdown(dropdown === item.label ? null : item.label);
                      }}
                      className={cn(
                        "flex items-center gap-1 px-3.5 py-2 text-[13px] font-semibold rounded-lg transition-colors",
                        scrolled || solid
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
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50">
                        {item.children.map((child) => (
                          <Fragment key={child.label}>
                            {renderLink(child, () => setDropdown(null))}
                          </Fragment>
                        ))}
                      </div>
                    )}
                  </>
                ) : item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3.5 py-2 text-[13px] font-semibold rounded-lg transition-colors",
                      scrolled || solid
                        ? "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className={cn(
                      "px-3.5 py-2 text-[13px] font-semibold rounded-lg transition-colors",
                      scrolled || solid
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

          {/* ── CTA ── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/lien-he"
              className={cn(
                "px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-200",
                "bg-amber-500 hover:bg-amber-400 text-white shadow-md shadow-amber-500/25 hover:shadow-amber-500/35 hover:scale-105"
              )}
            >
              TƯ VẤN
            </Link>
          </div>

          {/* ── Mobile burger ── */}
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

        {/* ── Mobile drawer ── */}
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
                        className="w-full py-3 text-sm font-semibold border-b border-gray-50 flex justify-between items-center text-slate-700"
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
                        <div className="pl-3 py-1 bg-slate-50 rounded-xl mb-1">
                          {item.children.map((child) =>
                            child.external ? (
                              <a
                                key={child.label}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between py-2.5 px-2 text-sm text-slate-600 border-b border-gray-100 last:border-0"
                                onClick={() => setOpen(false)}
                              >
                                {child.label}
                                {child.note && (
                                  <span className="text-xs text-slate-400">{child.note}</span>
                                )}
                              </a>
                            ) : child.href.startsWith("/") ? (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="flex items-center justify-between py-2.5 px-2 text-sm text-slate-600 border-b border-gray-100 last:border-0"
                                onClick={() => setOpen(false)}
                              >
                                {child.label}
                                {child.note && (
                                  <span className="text-xs text-slate-400">{child.note}</span>
                                )}
                              </Link>
                            ) : (
                              <a
                                key={child.label}
                                href={child.href}
                                onClick={(e) => {
                                  handleAnchorClick(e, child.href);
                                  setOpen(false);
                                }}
                                className="flex items-center gap-2 py-2.5 px-2 text-sm font-semibold text-amber-700"
                              >
                                {child.label}
                                <ArrowRight className="w-3.5 h-3.5" />
                              </a>
                            )
                          )}
                        </div>
                      )}
                    </>
                  ) : item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className="py-3 text-sm font-semibold border-b border-gray-50 flex justify-between items-center text-slate-700"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => { handleAnchorClick(e, item.href); setOpen(false); }}
                      className="py-3 text-sm font-semibold border-b border-gray-50 flex justify-between items-center text-slate-700"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-3">
                <Link
                  href="/lien-he"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-amber-500 text-white
                             py-3 rounded-full font-bold text-sm shadow-md w-full"
                >
                  <Phone className="w-4 h-4" /> TƯ VẤN
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
