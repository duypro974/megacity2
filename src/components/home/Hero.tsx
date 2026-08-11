"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { cld } from "@/lib/cloudinary";

const HERO_IMAGE = cld("megacity2/hero", "all.jpg", "hero");

// ─────────────────────────────────────────────────────────────
// HomeHero — KIM OANH ĐỒNG NAI
// Định vị: Cổng thông tin dự án, không phải corporate group.
// ─────────────────────────────────────────────────────────────

export default function HomeHero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMAGE}
        alt="Dự án bất động sản Kim Oanh tại Đồng Nai"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />

      {/* Dark navy gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(115deg, rgba(8,15,30,0.94) 0%, rgba(8,15,30,0.75) 55%, rgba(8,15,30,0.50) 100%),
            linear-gradient(to top, rgba(8,15,30,0.98) 0%, rgba(8,15,30,0.60) 40%, transparent 80%)
          `,
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,1) 80px, rgba(255,255,255,1) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,1) 80px, rgba(255,255,255,1) 81px)",
        }}
      />

      {/* Gold glow accent */}
      <div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-36 pb-28 text-white">
        <div className="max-w-5xl mx-auto">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-10 h-px bg-amber-400" />
            <p className="text-amber-400 text-[11px] font-bold tracking-[0.2em] uppercase">
              THÔNG TIN BẤT ĐỘNG SẢN KIM OANH
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-black leading-none tracking-tight mb-8">
            <span className="block text-white text-[clamp(2.8rem,7.5vw,5.5rem)]">
              KIM OANH
            </span>
            <span
              className="block text-[clamp(1.6rem,4vw,3rem)] font-bold mt-1"
              style={{
                background: "linear-gradient(90deg, #f59e0b 0%, #fbbf24 60%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ĐỒNG NAI
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-white/60 text-sm md:text-base font-medium tracking-widest uppercase mb-5">
            Thông tin dự án&nbsp;•&nbsp;Tiến độ&nbsp;•&nbsp;Sản phẩm&nbsp;•&nbsp;Tư vấn
          </p>

          {/* Description */}
          <p className="text-white/60 text-base md:text-lg max-w-xl mb-12 leading-relaxed font-light">
            Kênh thông tin tổng hợp các dự án bất động sản Kim Oanh đang được giới
            thiệu tại Đồng Nai, giúp khách hàng thuận tiện tìm hiểu thông tin dự án
            và kết nối tư vấn.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button
              onClick={() => scrollTo("du-an")}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400
                         text-white px-8 py-4 rounded-full text-sm font-bold
                         shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5 group"
            >
              KHÁM PHÁ DỰ ÁN
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("lien-he")}
              className="inline-flex items-center justify-center gap-2 border border-white/25
                         text-white/90 hover:bg-white/10 hover:border-white/40
                         px-8 py-4 rounded-full text-sm font-semibold transition-all"
            >
              LIÊN HỆ TƯ VẤN
            </button>
          </div>

          {/* Information bar */}
          <div className="flex flex-wrap gap-x-10 gap-y-6 pt-8 border-t border-white/10">
            {[
              { label: "KHU VỰC", value: "ĐỒNG NAI" },
              { label: "DỰ ÁN", value: "ĐANG HỖ TRỢ" },
              { label: "THÔNG TIN", value: "CẬP NHẬT" },
              { label: "TƯ VẤN", value: "KẾT NỐI" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <p className="text-[10px] text-white/35 font-bold tracking-[0.2em] uppercase">
                  {item.label}
                </p>
                <p className="text-sm font-black text-white tracking-wider">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("gioi-thieu")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1
                   text-white/30 hover:text-white/60 transition-colors animate-bounce"
        aria-label="Cuộn xuống"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
}
