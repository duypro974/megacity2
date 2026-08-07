"use client";

import { MapPin, Building2, TrendingUp, ShieldCheck, Play, ChevronDown } from "lucide-react";

const STATS = [
  { icon: Building2,   value: "84 ha",    label: "Quy mô",      color: "text-gold-400" },
  { icon: TrendingUp,  value: "3.100+",   label: "Sản phẩm",    color: "text-gold-400" },
  { icon: MapPin,      value: "4 trục",   label: "Đường HM",     color: "text-gold-400" },
  { icon: ShieldCheck, value: "95%",      label: "Hạ tầng HT",  color: "text-gold-400" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── Background ── */}
      {/* IMAGE SLOT ─ replace this div with a real <Image> of the project aerial/render */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950">
        {/* 🖼 ẢNH GỢI Ý: Ảnh flycam toàn cảnh dự án Mega City 2 hoặc phối cảnh 3D tổng thể */}
        {/* Khi có ảnh: thêm <Image src="/images/hero-bg.jpg" fill className="object-cover opacity-40" alt="..." /> */}
        <div className="absolute inset-0">
          <div className="absolute top-0    left-0     w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0    w-[500px] h-[500px] bg-gold-500/15    rounded-full blur-[100px]" />
          <div className="absolute top-1/2  left-1/2   w-[300px] h-[300px] bg-primary-400/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
        </div>
        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full container mx-auto px-4 pt-28 pb-20 text-center text-white">

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold mb-6 animate-fade-in">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <MapPin className="w-3.5 h-3.5 text-gold-400" />
          <span>Đường 25C · Phú Hội · Nhơn Trạch · Đồng Nai</span>
        </div>

        {/* H1 */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-4 animate-fade-in-up">
          <span className="block text-white drop-shadow-2xl">MEGA CITY 2</span>
          <span className="block gradient-text mt-2">NHƠN TRẠCH</span>
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-3 font-medium animate-fade-in-up animate-delay-100">
          Đô thị hạt nhân cửa ngõ{" "}
          <strong className="text-gold-400 font-bold">Sân bay Quốc tế Long Thành</strong>
        </p>
        <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
          84 ha · 3.100 sản phẩm · Hạ tầng hoàn thiện 95% · Sổ hồng đầy đủ
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10 animate-fade-in-up animate-delay-300">
          {STATS.map((s, i) => (
            <div key={i} className="glass rounded-2xl p-4 card-hover">
              <s.icon className={`w-5 h-5 ${s.color} mx-auto mb-2`} />
              <p className="text-2xl font-black">{s.value}</p>
              <p className="text-xs text-white/60 mt-0.5 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 animate-fade-in-up animate-delay-400">
          <a
            href="#lien-he"
            className="group relative bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700
                       text-white px-8 py-4 rounded-full text-base font-bold
                       shadow-2xl shadow-primary-500/40 transition-all duration-200 hover:scale-105 hover:shadow-primary-500/60"
          >
            <span className="relative z-10">🎁 Nhận bảng giá & mặt bằng mới nhất</span>
          </a>
          <a
            href="#vi-tri"
            className="flex items-center gap-2 glass hover:bg-white/15 text-white px-7 py-4 rounded-full text-base font-semibold transition-all"
          >
            Xem vị trí chiến lược
          </a>
        </div>

        {/* Price tag */}
        <div className="inline-flex items-center gap-3 glass rounded-2xl px-6 py-3 animate-fade-in-up animate-delay-500">
          <div className="text-left">
            <p className="text-xs text-white/50 font-medium">Giá chuyển nhượng từ</p>
            <p className="text-2xl font-black text-gold-400">1,15 tỷ<span className="text-sm text-white/60 font-medium">/nền</span></p>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="text-left">
            <p className="text-xs text-white/50">Đường lớn 24–32m</p>
            <p className="text-xl font-black text-white">1,5–2,2 tỷ</p>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="text-left">
            <p className="text-xs text-white/50">Biệt thự từ</p>
            <p className="text-xl font-black text-white">2,1 tỷ+</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/40 text-xs font-medium">Khám phá</span>
        <ChevronDown className="w-5 h-5 text-white/40" />
      </div>
    </section>
  );
}
