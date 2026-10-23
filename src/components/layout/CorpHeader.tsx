"use client";

import { useState, useEffect, useRef, Fragment } from "react";
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
        label: "One Era",
        note: "Bình Dương (Chuẩn Nhật)",
        href: "/one-era",
        external: false,
        isHot: true,
      },
      {
        label: "The Link City",
        note: "Dầu Giây, Đồng Nai",
        href: "/the-link-city",
        external: false,
      },
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
  {
    label: "Tour 360°",
    href: "/one-era/360",
    badge: "MỚI",
  },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function CorpHeader({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Đóng desktop dropdown khi click ra ngoài
  useEffect(() => {
    if (open) return;
    if (!dropdown) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-dropdown-container]")) {
        setDropdown(null);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [open, dropdown]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdown(label);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDropdown(null);
    }, 250); // 250ms grace period - chuột di chuyển tự nhiên không bao giờ bị mất
  };

  const handleLinkClick = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // Cho phép Next.js router điều hướng mượt mà trước khi đóng menu
    setTimeout(() => {
      setDropdown(null);
      setOpen(false);
    }, 120);
  };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      const isHome = typeof window !== "undefined" && window.location.pathname === "/";
      if (!isHome) {
        // Nếu không ở trang chủ (ví dụ /tin-tuc), điều hướng về trang chủ kèm anchor
        window.location.href = "/" + href;
        return;
      }
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      handleLinkClick();
    }
  };

  const isOnHomePage = typeof window !== "undefined" && window.location.pathname === "/";

  const renderLink = (
    item: { label: string; href: string; external?: boolean; note?: string; isViewAll?: boolean; isHot?: boolean },
    onItemClick?: () => void
  ) => {
    const isAnchor = item.href.startsWith("#");
    const targetHref = isAnchor && !isOnHomePage ? "/" + item.href : item.href;

    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onItemClick}
          className="flex items-center justify-between px-4 py-3 hover:bg-amber-50 active:bg-amber-100 transition-colors group border-b border-slate-50 last:border-0 cursor-pointer"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                {item.label}
              </span>
              {item.isHot && (
                <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 shadow-sm animate-pulse">
                  HOT
                </span>
              )}
            </div>
            {item.note && <span className="text-xs text-slate-400 font-normal">{item.note}</span>}
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
        </a>
      );
    }

    if (item.isViewAll) {
      return (
        <a
          href={targetHref}
          onClick={(e) => {
            handleAnchorClick(e, item.href);
            onItemClick?.();
          }}
          className="flex items-center justify-between px-4 py-3 bg-amber-50/80 hover:bg-amber-100/90 transition-colors group cursor-pointer"
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
          onClick={onItemClick}
          className="flex items-center justify-between px-4 py-3 hover:bg-amber-50 active:bg-amber-100 transition-colors group border-b border-slate-50 last:border-0 cursor-pointer"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                {item.label}
              </span>
              {item.isHot && (
                <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-sm animate-pulse">
                  HOT
                </span>
              )}
            </div>
            {item.note && <span className="text-xs text-slate-400 font-normal">{item.note}</span>}
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
        </Link>
      );
    }

    return (
      <a
        href={targetHref}
        onClick={(e) => {
          handleAnchorClick(e, item.href);
          onItemClick?.();
        }}
        className="flex items-center justify-between px-4 py-3 hover:bg-amber-50 active:bg-amber-100 transition-colors group border-b border-slate-50 last:border-0 cursor-pointer"
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
              {item.label}
            </span>
            {item.isHot && (
              <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 shadow-sm animate-pulse">
                HOT
              </span>
            )}
          </div>
          {item.note && <span className="text-xs text-slate-400 font-normal">{item.note}</span>}
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
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
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative group"
                data-dropdown-container
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={() => item.children && handleMouseLeave()}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdown(dropdown === item.label ? null : item.label);
                      }}
                      className={cn(
                        "flex items-center gap-1 px-3.5 py-2 text-[13px] font-semibold rounded-lg transition-colors cursor-pointer",
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

                    {/* Dropdown Container with padding bridge */}
                    {dropdown === item.label && (
                      <div
                        className="absolute top-full left-0 pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Invisible bridge over any gap */}
                        <div className="absolute -top-3 inset-x-0 h-3 pointer-events-auto" />

                        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden divide-y divide-slate-50 pointer-events-auto">
                          {item.children.map((child) => (
                            <Fragment key={child.label}>
                              {renderLink(child, handleLinkClick)}
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3.5 py-2 text-[13px] font-semibold rounded-lg transition-colors flex items-center",
                      scrolled || solid
                        ? "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                    {(item as any).badge && (
                      <span className="ml-1.5 text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 shadow-sm animate-pulse">
                        {(item as any).badge}
                      </span>
                    )}
                  </Link>
                ) : (
                  <a
                    href={item.href.startsWith("#") && !isOnHomePage ? "/" + item.href : item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className={cn(
                      "px-3.5 py-2 text-[13px] font-semibold rounded-lg transition-colors flex items-center",
                      scrolled || solid
                        ? "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                    {(item as any).badge && (
                      <span className="ml-1.5 text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 shadow-sm animate-pulse">
                        {(item as any).badge}
                      </span>
                    )}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* ── Actions ── */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className={cn(
                "hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200",
                scrolled || solid
                  ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
              )}
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                if (!isOnHomePage) {
                  window.location.href = "/#lien-he";
                  return;
                }
                const el = document.getElementById("lien-he");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950"
            >
              TƯ VẤN
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              className={cn(
                "lg:hidden p-2.5 rounded-xl transition-colors",
                scrolled || solid
                  ? "text-slate-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Mở menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => { setOpen(false); setDropdown(null); }}
          />

          {/* Drawer panel */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
            {/* Drawer header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <Link href="/" onClick={() => setOpen(false)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/KOG_Web_RGB_01.svg" alt="Kim Oanh Group" width={120} height={32} className="h-8 w-auto" />
              </Link>
              <button
                onClick={() => { setOpen(false); setDropdown(null); }}
                className="p-3 rounded-lg text-slate-500 hover:bg-gray-100 transition"
                aria-label="Đóng menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col px-4 py-2 overflow-y-auto flex-1">
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
                                href={child.href.startsWith("#") && !isOnHomePage ? "/" + child.href : child.href}
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
                                onClick={() => {
                                  setTimeout(() => setOpen(false), 120);
                                }}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <div className="text-[15px] font-bold text-slate-800 group-active:text-amber-600">{child.label}</div>
                                    {(child as any).isHot && (
                                      <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 shadow-sm animate-pulse">
                                        HOT
                                      </span>
                                    )}
                                  </div>
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
                      onClick={() => setOpen(false)}
                      className="py-4 text-base font-semibold border-b border-gray-100 flex items-center justify-between text-slate-700 active:bg-gray-50"
                    >
                      <span>{item.label}</span>
                      {(item as any).badge && (
                        <span className="text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-slate-950">
                          {(item as any).badge}
                        </span>
                      )}
                    </Link>
                  ) : (
                    <a
                      href={item.href.startsWith("#") && !isOnHomePage ? "/" + item.href : item.href}
                      onClick={(e) => { handleAnchorClick(e, item.href); setOpen(false); }}
                      className="py-4 text-base font-semibold border-b border-gray-100 flex items-center justify-between text-slate-700 active:bg-gray-50"
                    >
                      <span>{item.label}</span>
                      {(item as any).badge && (
                        <span className="text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-slate-950">
                          {(item as any).badge}
                        </span>
                      )}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Drawer footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex flex-col gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-slate-900 text-white text-sm font-bold active:scale-95 transition"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setOpen(false);
                  if (!isOnHomePage) {
                    window.location.href = "/#lien-he";
                    return;
                  }
                  const el = document.getElementById("lien-he");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-sm font-bold active:scale-95 transition shadow-sm"
              >
                LIÊN HỆ TƯ VẤN
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
