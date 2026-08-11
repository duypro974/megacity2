"use client";

import Link from "next/link";
import { Phone, MapPin, Mail, ArrowUp, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

// ─────────────────────────────────────────────────────────────
// CorpFooter — KIM OANH ĐỒNG NAI
// Tagline: Cổng thông tin dự án bất động sản Kim Oanh tại Đồng Nai
// KHÔNG tự nhận là Kim Oanh Group / chủ đầu tư
// ─────────────────────────────────────────────────────────────

const SOCIAL = [
  {
    label: "Facebook",
    href: SITE_CONFIG.social.facebook,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Zalo",
    href: SITE_CONFIG.social.zalo,
    icon: (
      <svg viewBox="0 0 48 48" className="w-4 h-4 fill-current">
        <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm8.5 28.5c-.55.55-1.3.8-2.05.8H17.55c-.75 0-1.5-.25-2.05-.8L12 29v-10c0-.75.3-1.5.8-2.05L16.3 13H31.7l3.5 3.95c.5.55.8 1.3.8 2.05v10l-3.5 3.5z" />
      </svg>
    ),
  },
];

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
            {/* Logo text */}
            <div className="flex flex-col leading-none mb-5">
              <span className="font-black text-[16px] tracking-[0.08em] uppercase text-white">
                KIM OANH
              </span>
              <span className="font-bold text-[12px] tracking-[0.15em] uppercase text-amber-500">
                ĐỒNG NAI
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {SITE_CONFIG.siteTagline}
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500
                             flex items-center justify-center transition-colors"
                >
                  {s.icon}
                </a>
              ))}
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
                  href: "https://kimoanh.com",
                  external: true,
                },
                {
                  label: "Kim Oanh Realty",
                  href: "#kim-oanh-group",
                  external: false,
                  anchor: true,
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
                    <button
                      onClick={() => item.anchor && scrollTo("kim-oanh-group")}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors group text-left"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500/40 group-hover:bg-amber-400 flex-shrink-0" />
                      {item.label}
                    </button>
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
