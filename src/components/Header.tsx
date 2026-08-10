"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import { scrollToSection } from "@/lib/scrollTo";

const NAV = [
  { label: "Tổng quan",   id: "tong-quan" },
  { label: "Vị trí",      id: "vi-tri" },
  { label: "Tiện ích",    id: "tien-ich" },
  { label: "Hình ảnh",    id: "hinh-anh-thuc-te" },
  { label: "Sản phẩm",    id: "san-pham" },
  { label: "Bảng giá",    id: "bang-gia" },
  { label: "Thanh toán",  id: "thanh-toan" },
  { label: "Pháp lý",     id: "phap-ly" },
  { label: "Liên hệ",     id: "lien-he" },
];

export default function Header() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const handleNavClickMobile = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setOpen(false);
    // Nhỏ delay để drawer đóng trước khi scroll
    setTimeout(() => scrollToSection(id), 50);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
          ${scrolled
            ? "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] py-2.5"
            : "bg-transparent py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">

          {/* ── Logo — Kim Oanh Group SVG ── */}
          <Link href="/" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/KOG_Web_RGB_01.svg"
              alt="Kim Oanh Group"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-3 py-1.5 text-sm font-medium transition-colors duration-150 relative
                  ${active === item.id
                    ? "text-amber-600 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-amber-500 after:rounded-full"
                    : scrolled
                      ? "text-slate-600 hover:text-amber-600"
                      : "text-white/85 hover:text-white"}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="tel:0937587438"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600
                         text-white px-5 py-2.5 rounded-full text-sm font-bold
                         shadow-md shadow-amber-500/30 transition-all duration-200
                         hover:shadow-amber-500/40 hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5" />
              0937 587 438
            </a>
          </div>

          {/* ── Mobile burger ── */}
          <button
            className={`xl:hidden p-2 rounded-lg transition
              ${scrolled ? "text-slate-800 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <div className={`xl:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-white border-t border-gray-100 shadow-xl">
            <nav className="flex flex-col px-4 py-2">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClickMobile(e, item.id)}
                  className={`py-3 text-sm font-medium border-b border-gray-50 flex justify-between items-center
                    ${active === item.id ? "text-amber-600" : "text-slate-700"}`}
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 opacity-30 -rotate-90" />
                </a>
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

      {/* ── Sticky bottom bar (mobile) ── */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-slate-900">
        <div className="flex divide-x divide-white/10">
          <a href="tel:0937587438"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white text-sm font-bold">
            <Phone className="w-4 h-4 text-amber-400" />
            Gọi ngay
          </a>
          <a
            href="#lien-he"
            onClick={(e) => handleNavClick(e, "lien-he")}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-amber-500 text-white text-sm font-bold"
          >
            Đăng ký tư vấn
          </a>
        </div>
      </div>
    </>
  );
}
