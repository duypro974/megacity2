"use client";

import Link from "next/link";
import { Phone, MapPin, Mail, ArrowUp, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

// ─── Social buttons — giống ContactSidebar ───────────────────
function FooterPhone() {
  return (
    <a
      href={`tel:${SITE_CONFIG.phone}`}
      aria-label={`Gọi ngay: ${SITE_CONFIG.phoneDisplay}`}
      className="flex items-center justify-center w-11 h-11 rounded-full
                 bg-green-500 hover:bg-green-400 shadow-lg hover:scale-110
                 transition-transform duration-200"
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    </a>
  );
}

function FooterZalo() {
  return (
    <a
      href={SITE_CONFIG.social.zalo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat Zalo"
      className="flex items-center justify-center w-11 h-11 rounded-full
                 bg-[#0068FF] hover:bg-[#0055cc] shadow-lg hover:scale-110
                 transition-transform duration-200"
    >
      <span className="text-white font-black text-[13px] tracking-tight select-none">Zalo</span>
    </a>
  );
}

function FooterMessenger() {
  return (
    <a
      href="https://m.me/61592416756280"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat Messenger"
      className="flex items-center justify-center w-11 h-11 rounded-full
                 shadow-lg hover:scale-110 transition-transform duration-200"
      style={{ background: "linear-gradient(135deg, #0099FF 0%, #A033FF 55%, #FF5C87 100%)" }}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.83 1.323 5.357 3.405 7.09V22l3.116-1.71A10.56 10.56 0 0 0 12 20.52c5.523 0 10-4.145 10-9.261C22 6.145 17.523 2 12 2zm1.008 12.462-2.548-2.718-4.973 2.718 5.47-5.806 2.611 2.718 4.91-2.718-5.47 5.806z"/>
      </svg>
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// CorpFooter — KIM OANH ĐỒNG NAI
// Tagline: Cổng thông tin dự án bất động sản Kim Oanh tại Đồng Nai
// KHÔNG tự nhận là Kim Oanh Group / chủ đầu tư
// ─────────────────────────────────────────────────────────────


const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function CorpFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* ── Brand column ── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/KOG_Web_RGB_01.svg"
                alt="Kim Oanh Group"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {SITE_CONFIG.siteTagline}
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              <FooterPhone />
              <FooterZalo />
              <FooterMessenger />
            </div>
          </div>

          {/* ── Khám phá ── */}
          <div>
            <h4 className="text-[11px] font-black text-white mb-5 uppercase tracking-[0.15em]">
              KHÁM PHÁ
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Trang chủ", href: "/" },
                { label: "Giới thiệu", href: "/ve-chung-toi", anchor: false },
                { label: "Dự án", href: "#du-an", anchor: true },
                { label: "Tin tức", href: "#tin-tuc", anchor: true },
                { label: "Liên hệ", href: "#lien-he", anchor: true },
              ].map((item) => (
                <li key={item.label}>
                  {item.anchor ? (
                    <button
                      onClick={() => scrollTo(item.href.slice(1))}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors group text-left"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-400 flex-shrink-0 transition-colors" />
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors group"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-400 flex-shrink-0 transition-colors" />
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Dự án ── */}
          <div>
            <h4 className="text-[11px] font-black text-white mb-5 uppercase tracking-[0.15em]">
              DỰ ÁN
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Mega City 2", href: "/mega-city-2", external: false },
                {
                  label: "K-Home CityView",
                  href: "https://k-homedongnai.com.vn/k-home-cityview-ho-nai",
                  external: true,
                },
                {
                  label: "K-Home Avenue",
                  href: "https://k-homedongnai.com.vn/k-home-avenue-nhon-trach",
                  external: true,
                },
                {
                  label: "K-Home Midtown",
                  href: "https://k-homedongnai.com.vn/k-home-midtown-trang-bom",
                  external: true,
                },
              ].map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors group"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-400 flex-shrink-0 transition-colors" />
                      {item.label}
                      <ExternalLink className="w-3 h-3 opacity-30 group-hover:opacity-100 flex-shrink-0" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors group"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-400 flex-shrink-0 transition-colors" />
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Kim Oanh section */}
            <h4 className="text-[11px] font-black text-white mt-8 mb-4 uppercase tracking-[0.15em]">
              KIM OANH
            </h4>
            <ul className="space-y-3">
              {[
                {
                  label: "Kim Oanh Group",
                  href: "/ve-chung-toi",
                  external: false,
                  anchor: false,
                },
                {
                  label: "Kim Oanh Realty",
                  href: "/ve-chung-toi",
                  external: false,
                  anchor: false,
                },
              ].map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors group"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-400 flex-shrink-0" />
                      {item.label}
                      <ExternalLink className="w-3 h-3 opacity-30 group-hover:opacity-100 flex-shrink-0" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors group"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-400 flex-shrink-0" />
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Liên hệ ── */}
          <div>
            <h4 className="text-[11px] font-black text-white mb-5 uppercase tracking-[0.15em]">
              LIÊN HỆ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 leading-snug">
                  {SITE_CONFIG.address.full}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 text-sm font-bold text-white hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="text-sm text-slate-500 pl-7">
                {SITE_CONFIG.workingHours}
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center sm:text-left space-y-1">
            <p>© 2026 Kim Oanh Đồng Nai. Tất cả quyền được bảo lưu.</p>
            <p className="text-slate-600">
              Website cung cấp thông tin dự án, không đại diện cho chủ đầu tư.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="text-xs text-slate-600 hover:text-amber-400 transition"
            >
              Admin
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-9 h-9 rounded-full bg-amber-500 hover:bg-amber-400
                         flex items-center justify-center transition-colors"
              aria-label="Lên đầu trang"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
