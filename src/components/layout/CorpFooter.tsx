"use client";

import Link from "next/link";
import { Phone, MapPin, Mail, ArrowUp, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/projects";

const SOCIAL = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/kimoanhhomes",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Zalo",
    href: "https://zalo.me/0937587438",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 16.624c-.189.189-.439.293-.703.293H7.14c-.264 0-.514-.104-.703-.293L4.5 14.688V7.14c0-.264.104-.514.293-.703L6.73 4.5h10.54l1.938 1.937c.189.189.293.439.293.703v7.548l-1.938 1.936z" />
      </svg>
    ),
  },
];

export default function CorpFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/KOG_Web_RGB_01.svg"
              alt="Kim Oanh Group"
              className="h-10 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Tập đoàn Địa ốc Kim Oanh – Kiến tạo cộng đồng, phát triển bền vững. Thành lập năm 2009, hoạt động tại Đông Nam Bộ.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">
              Dự Án
            </h4>
            <ul className="space-y-3">
              {PROJECTS.map((p) => (
                <li key={p.slug}>
                  {p.href.startsWith("http") ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors group"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500/50 group-hover:bg-amber-400 flex-shrink-0 transition-colors" />
                      {p.name}
                      <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 flex-shrink-0" />
                    </a>
                  ) : (
                    <Link
                      href={p.href}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors group"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500/50 group-hover:bg-amber-400 flex-shrink-0 transition-colors" />
                      {p.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-5 border-t border-white/10">
              <a
                href="https://k-homedongnai.com.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                K-Home Đồng Nai <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">
              Liên Hệ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 leading-snug">
                  268A Phan Trung, Phường Tam Hiệp, Tỉnh Đồng Nai
                </span>
              </li>
              <li>
                <a
                  href="tel:0937587438"
                  className="flex items-center gap-3 text-sm font-bold text-white hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  0937.587.438
                </a>
              </li>
              <li>
                <a
                  href="mailto:k.homekog@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  k.homekog@gmail.com
                </a>
              </li>
              <li className="text-sm text-slate-500">
                Giờ làm việc: 8:00 – 18:00 hàng ngày
              </li>
            </ul>
          </div>

          {/* About links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">
              Kim Oanh Group
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Về Kim Oanh", href: "#ve-kim-oanh" },
                { label: "Lãnh đạo", href: "#lanh-dao" },
                { label: "Đối tác", href: "#doi-tac" },
                { label: "Cộng đồng", href: "#cong-dong" },
                { label: "Liên hệ tư vấn", href: "#lien-he" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(item.href.slice(1));
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500/50 group-hover:bg-amber-400 flex-shrink-0" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © 2026 Kim Oanh Group. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="text-xs text-slate-500 hover:text-amber-400 transition"
            >
              Admin
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-8 h-8 rounded-full bg-amber-500 hover:bg-amber-400 flex items-center justify-center transition-colors"
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
