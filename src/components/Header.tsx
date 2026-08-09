"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";

const NAV = [
  { label: "Tổng quan",  href: "#tong-quan" },
  { label: "Vị trí",     href: "#vi-tri" },
  { label: "Tiện ích",   href: "#tien-ich" },
  { label: "Sản phẩm",   href: "#san-pham" },
  { label: "Bảng giá",   href: "#bang-gia" },
  { label: "Thanh toán", href: "#thanh-toan" },
  { label: "Pháp lý",    href: "#phap-ly" },
  { label: "Liên hệ",    href: "#lien-he" },
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

  /* Highlight active section */
  useEffect(() => {
    const ids = NAV.map((n) => n.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const navCls = (href: string) =>
    `text-sm font-medium transition-colors duration-200 hover:text-primary-500 relative py-1
     after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-primary-500
     after:transition-all after:duration-200
     ${active === href.replace("#", "")
       ? "text-primary-600 after:w-full"
       : scrolled ? "text-slate-700 after:w-0" : "text-white/90 after:w-0"}`;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
          ${scrolled
            ? "bg-white/96 backdrop-blur-lg shadow-lg shadow-black/5 py-2"
            : "bg-transparent py-4"}`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-gold-500
                            flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-sm tracking-tight">MC2</span>
            </div>
            <div className={scrolled ? "text-slate-900" : "text-white"}>
              <p className="font-extrabold text-base leading-none">Mega City 2</p>
              <p className="text-[10px] opacity-70 font-medium mt-0.5">Nhơn Trạch · Kim Oanh Group</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className={`${navCls(item.href)} px-3`}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:0937587438"
              className={`flex items-center gap-1.5 text-sm font-bold transition
                ${scrolled ? "text-primary-700 hover:text-primary-800" : "text-white/90 hover:text-white"}`}
            >
              <div className="relative">
                <div className="w-7 h-7 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
              </div>
              0937.587.438
            </a>
            <a
              href="#lien-he"
              className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600
                         text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary-500/25
                         transition-all duration-200 hover:shadow-primary-500/40 hover:scale-105"
            >
              Nhận tư vấn ngay
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className={`xl:hidden p-2 rounded-lg transition ${scrolled ? "text-slate-800 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300
            ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="bg-white border-t border-gray-100 shadow-xl">
            <nav className="flex flex-col px-4 py-3">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-sm font-medium border-b border-gray-50 flex justify-between items-center
                    ${active === item.href.replace("#", "") ? "text-primary-600" : "text-slate-700"}`}
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 opacity-40 -rotate-90" />
                </a>
              ))}
              <div className="pt-4 pb-2 flex flex-col gap-3">
                <a
                  href="tel:0937587438"
                  className="flex items-center justify-center gap-2 border-2 border-primary-500 text-primary-600 py-3 rounded-full font-bold text-sm"
                >
                  <Phone className="w-4 h-4" /> Gọi ngay: 0937.587.438
                </a>
                <a
                  href="#lien-he"
                  onClick={() => setOpen(false)}
                  className="bg-gradient-to-r from-primary-600 to-primary-500 text-white text-center py-3 rounded-full font-bold text-sm shadow-lg"
                >
                  Nhận tư vấn miễn phí
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Sticky bottom CTA (mobile only) */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden sticky-cta">
        <div className="flex divide-x divide-white/10">
          <a
            href="tel:0937587438"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white text-sm font-bold"
          >
            <Phone className="w-4 h-4 text-green-400" />
            Gọi ngay
          </a>
          <a
            href="#lien-he"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary-500 text-white text-sm font-bold"
          >
            Đăng ký tư vấn
          </a>
        </div>
      </div>
    </>
  );
}
