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

  // Đóng desktop dropdown khi click ra ngoài (chỉ áp dụng khi desktop dropdown đang mở và mobile menu đóng)
  useEffect(() => {
    if (open) return; // mobile drawer đang mở → không can thiệp
    if (!dropdown) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-dropdown-container]")) setDropdown(null);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [open, dropdown]);

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
              width={160}
              height={36}
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
                "bg-amber-500 hover:bg-amber-400 text-slate-900 shadow-md shadow-amber-500/25 hover:shadow-amber-500/35 hover:scale-105"
              )}
            >
              TƯ VẤN
            </Link>
          </div>

          {/* ── Mobile burger ── */}
          <button
            className={cn(
              "xl:hidden p-2 rounded-lg transition",
              scrolled || solid
                ? "text-slate-800 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => { setOpen(!open); setDropdown(null); }}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ── Mobile drawer — full-screen overlay ngoài header để tránh bị che ── */}
      {open && (
        <div className="xl:hidden fixed inset-0 z-[60]" onClick={() => { setOpen(false); setDropdown(null); }}>
          {/* backdrop mờ */}
          <div className="absolute inset-0 bg-black/30" />
          {/* panel trắng bên trên */}
          <div
            className="absolute top-0 left-0 right-0 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header của drawer */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <Link href="/" onClick={() => setOpen(false)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/KOG_Web_RGB_01.svg" alt="Kim Oanh Group" width={120} height={32} className="h-8 w-auto" />
              </Link>
              <button
                onClick={() => { setOpen(false); setDropdown(null); }}
                className="p-2 rounded-lg text-slate-500 hover:bg-gray-100 transition"
                aria-label="Đóng menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col px-4 py-2">
              {NAV.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setDropdown(dropdown === item.label ? null : item.label)}
                        className="w-full py-4 text-base font-semibold border-b border-gray-100 flex justify-between items-center text-slate-700 active:bg-gray-50"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 text-slate-400 transition-transform duration-200",
                            dropdown === item.label && "rotate-180"
                          )}
                        />
                      </button>
                      {dropdown === item.label && (
                        <div className="mx-1 mb-3 bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                          {item.children.map((child) =>
                            child.isViewAll ? (
                              <a
                                key={child.label}
                                href={child.href}
                                onClick={(e) => { handleAnchorClick(e, child.href); setOpen(false); }}
                                className="flex items-center gap-2 py-3.5 px-4 text-sm font-bold text-amber-600 bg-amber-50 active:bg-amber-100"
                              >
                                {child.label}
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            ) : child.external ? (
                              <a
                                key={child.label}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 py-3.5 px-4 border-b border-slate-100 last:border-0 active:bg-amber-50 group"
                                onClick={() => setOpen(false)}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <div className="text-[15px] font-bold text-slate-800 group-active:text-amber-600">{child.label}</div>
                                  {child.note && <div className="text-xs text-slate-400 mt-0.5">{child.note}</div>}
                                </div>
                                <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
                              </a>
                            ) : (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="flex items-center gap-3 py-3.5 px-4 border-b border-slate-100 last:border-0 active:bg-amber-50 group"
                                onClick={() => setOpen(false)}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <div className="text-[15px] font-bold text-slate-800 group-active:text-amber-600">{child.label}</div>
                                  {child.note && <div className="text-xs text-slate-400 mt-0.5">{child.note}</div>}
                                </div>
                                <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </>
                  ) : item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className="py-4 text-base font-semibold border-b border-gray-100 flex items-center text-slate-700 active:bg-gray-50"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => { handleAnchorClick(e, item.href); setOpen(false); }}
                      className="py-4 text-base font-semibold border-b border-gray-100 flex items-center text-slate-700 active:bg-gray-50"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-5">
                <Link
                  href="/lien-he"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-amber-500 text-slate-900
                             py-3.5 rounded-full font-bold text-sm shadow-md w-full active:bg-amber-600"
                >
                  <Phone className="w-4 h-4" /> TƯ VẤN
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
