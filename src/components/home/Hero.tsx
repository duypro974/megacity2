"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { cld } from "@/lib/cloudinary";

// Dùng lại ảnh thực tế từ Mega City 2 làm hero cho corporate homepage
const HERO_IMAGE = cld("megacity2/hero", "all.jpg", "hero");

export default function HomeHero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_IMAGE}
        alt="Kim Oanh Group – Kiến tạo cộng đồng, phát triển bền vững"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />

      {/* Overlay — corporate: đậm, sang, editorial */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(110deg, rgba(8,15,30,0.92) 0%, rgba(8,15,30,0.70) 50%, rgba(8,15,30,0.45) 100%),
            linear-gradient(to top, rgba(8,15,30,0.95) 0%, rgba(8,15,30,0.50) 40%, transparent 75%)
          `,
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,1) 80px, rgba(255,255,255,1) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,1) 80px, rgba(255,255,255,1) 81px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-white">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 text-amber-400/80 text-xs font-bold tracking-widest uppercase mb-8">
            <span className="inline-block w-8 h-0.5 bg-amber-400 rounded-full" />
            Tập đoàn Địa ốc Kim Oanh
          </p>

          {/* Headline */}
          <h1 className="font-black leading-none tracking-tight mb-7 drop-shadow-2xl">
            <span className="block text-white text-[clamp(2.2rem,6vw,4rem)] mb-2">
              KIẾN TẠO
            </span>
            <span
              className="block text-[clamp(2.8rem,8.5vw,6rem)]"
              style={{
                background: "linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CỘNG ĐỒNG
            </span>
            <span className="block text-white/80 text-[clamp(1.4rem,3.5vw,2.5rem)] font-bold mt-2">
              PHÁT TRIỂN BỀN VỮNG
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-white/65 text-base md:text-lg max-w-xl mb-12 leading-relaxed font-light">
            Từ năm 2009, Kim Oanh Group đã kiến tạo hàng ngàn ngôi nhà và cộng đồng sống đáng tự hào tại Đông Nam Bộ.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => scrollToSection("ve-kim-oanh")}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5"
            >
              Khám phá Kim Oanh <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection("du-an")}
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/90 hover:bg-white/10 px-8 py-4 rounded-full text-sm font-semibold transition-all"
            >
              Xem dự án
            </button>
          </div>

          {/* Key numbers — horizontal strip */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            {[
              { value: "2009", label: "Năm thành lập" },
              { value: "4", label: "Dự án đang triển khai" },
              { value: "5.000+", label: "Sản phẩm nhà ở" },
              { value: "Đồng Nai", label: "Trọng tâm phát triển" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-black text-white leading-none">
                  {stat.value}
                </p>
                <p className="text-xs text-white/45 mt-1.5 font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <ChevronDown className="w-5 h-5 text-white/30" />
      </div>
    </section>
  );
}
