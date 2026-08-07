"use client";

import { MapPin, Building2, TrendingUp, ShieldCheck, ChevronDown, Phone } from "lucide-react";

const STATS = [
  { icon: Building2,   value: "84 ha",   label: "Quy mô" },
  { icon: TrendingUp,  value: "3.100+",  label: "Sản phẩm" },
  { icon: MapPin,      value: "4 trục",  label: "Đường HM" },
  { icon: ShieldCheck, value: "95%",     label: "Hạ tầng HT" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── Background image ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/all.jpg"
        alt="Mega City 2 Nhơn Trạch"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-b
                      from-black/70 via-black/45 to-black/75" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pt-28 pb-20 text-center text-white">

        {/* Location badge */}
        <div className="inline-flex items-center gap-2
                        bg-white/10 backdrop-blur-sm border border-white/20
                        rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <MapPin className="w-3.5 h-3.5 text-gold-400" />
          Đường 25C · Phú Hội · Nhơn Trạch · Đồng Nai
        </div>

        {/* H1 */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-5 drop-shadow-2xl">
          <span className="block">MEGA CITY 2</span>
          <span className="block gradient-text mt-2">NHƠN TRẠCH</span>
        </h1>

        {/* Sub */}
        <p className="text-base md:text-xl text-white/85 max-w-2xl mx-auto mb-3 font-medium">
          Đô thị hạt nhân cửa ngõ{" "}
          <strong className="text-gold-400">Sân bay Quốc tế Long Thành</strong>
        </p>
        <p className="text-sm text-white/60 max-w-xl mx-auto mb-10">
          84 ha · 3.100 sản phẩm · Hạ tầng hoàn thiện 95% · Sổ hồng đầy đủ
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
          {STATS.map((s, i) => (
            <div key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/15
                         rounded-2xl p-4"
            >
              <s.icon className="w-5 h-5 text-gold-400 mx-auto mb-2" />
              <p className="text-2xl font-black">{s.value}</p>
              <p className="text-xs text-white/60 mt-0.5 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <a
            href="#lien-he"
            className="bg-gradient-to-r from-primary-500 to-primary-600
                       hover:from-primary-600 hover:to-primary-700
                       text-white px-8 py-4 rounded-full text-base font-bold
                       shadow-2xl shadow-primary-500/40
                       transition-all duration-200 hover:scale-105"
          >
            🎁 Nhận bảng giá & mặt bằng mới nhất
          </a>
          <a
            href="tel:0907839986"
            className="flex items-center gap-2
                       bg-white/10 hover:bg-white/20 backdrop-blur-sm
                       border border-white/25 text-white
                       px-7 py-4 rounded-full text-base font-semibold
                       transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            0937.587.438
          </a>
        </div>

        {/* Price tag */}
        <div className="inline-flex items-center gap-4
                        bg-white/10 backdrop-blur-sm border border-white/15
                        rounded-2xl px-6 py-3">
          <div className="text-left">
            <p className="text-xs text-white/50 font-medium">Giá từ</p>
            <p className="text-2xl font-black text-gold-400">
              1,15 tỷ<span className="text-sm text-white/60 font-medium">/nền</span>
            </p>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="text-left">
            <p className="text-xs text-white/50">Đường 24–32m</p>
            <p className="text-xl font-black">1,5–2,5 tỷ</p>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="text-left">
            <p className="text-xs text-white/50">Biệt thự từ</p>
            <p className="text-xl font-black">2,1 tỷ+</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10
                      flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/40 text-xs font-medium">Khám phá</span>
        <ChevronDown className="w-5 h-5 text-white/40" />
      </div>
    </section>
  );
}
