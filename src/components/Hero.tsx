"use client";

import { MapPin, FileCheck, LayoutGrid, TrendingUp, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { IMG_HERO } from "@/lib/cloudinary";
import { scrollToSection } from "@/lib/scrollTo";

/* ── Stats: thông tin có giá trị pháp lý/quy mô thật ── */
const STATS = [
  { icon: LayoutGrid,  value: "~84",     unit: "ha",  label: "Quy mô dự án" },
  { icon: TrendingUp,  value: "3.160",   unit: "SP",  label: "Sản phẩm thấp tầng*" },
  { icon: FileCheck,   value: "2.421",   unit: "lô",  label: "Theo QĐ 1772/QĐ-UBND" },
  { icon: MapPin,      value: "~95%",    unit: "",    label: "Tiến độ hạ tầng*" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Background ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMG_HERO}
        alt="Phối cảnh tham khảo dự án Mega City 2 Nhơn Trạch"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />

      {/* Overlay: góc trái đậm → phải nhạt, + dưới lên trên đậm */}
      <div className="absolute inset-0"
        style={{
          background: `
            linear-gradient(105deg, rgba(3,22,45,0.88) 0%, rgba(3,22,45,0.62) 50%, rgba(3,22,45,0.38) 100%),
            linear-gradient(to top, rgba(3,22,45,0.90) 0%, rgba(3,22,45,0.45) 40%, transparent 75%)
          `,
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full px-4 pt-24 pb-16 text-white">
        <div className="max-w-5xl mx-auto">

          {/* Location — nhỏ, tinh tế */}
          <p className="inline-flex items-center gap-1.5 text-white/55 text-xs font-medium
                        tracking-widest uppercase mb-5">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            Đường 25C · Xã Nhơn Trạch · Tỉnh Đồng Nai
          </p>

          {/* H1 — hierarchy rõ: MEGA CITY 2 nhỏ hơn, NHƠN TRẠCH nổi bật */}
          <h1 className="font-black leading-none tracking-tight mb-5 drop-shadow-xl">
            <span className="block text-white/90
                             text-[clamp(1.8rem,6vw,3.75rem)]">
              MEGA CITY 2
            </span>
            <span className="block text-[#16B364]
                             text-[clamp(2.5rem,9vw,5rem)] mt-1">
              NHƠN TRẠCH
            </span>
          </h1>

          {/* Sub — ngắn gọn, súc tích */}
          <p className="text-white/75 text-sm md:text-base max-w-lg mb-2 leading-relaxed font-medium">
            Khu dân cư theo quy hoạch 1/500 tại xã Nhơn Trạch, tỉnh Đồng Nai.
            Hạ tầng hoàn thiện phần lớn, pháp lý rõ ràng từng nền.
          </p>
          <p className="text-white/40 text-xs mb-8">
            *Thông tin tham khảo · Theo dữ liệu công bố gần nhất
          </p>

          {/* Stats — 4 card giá trị cao */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 mb-8 max-w-2xl">
            {STATS.map((s, i) => (
              <div key={i}
                className="rounded-xl p-3 md:p-4 text-left"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <s.icon className="w-3.5 h-3.5 text-[#16B364] mb-2 opacity-90" />
                <p className="font-black leading-none text-white">
                  <span className="text-xl md:text-2xl">{s.value}</span>
                  {s.unit && <span className="text-sm ml-0.5 font-semibold opacity-70">{s.unit}</span>}
                </p>
                <p className="text-[10px] text-white/45 mt-1.5 leading-tight font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA — 2 nút, ngắn gọn */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="#bang-gia"
              onClick={(e) => { e.preventDefault(); scrollToSection("bang-gia"); }}
              className="inline-flex items-center justify-center gap-2
                         bg-[#16B364] hover:bg-[#13a057]
                         text-white px-6 py-3 rounded-xl text-sm font-bold
                         shadow-lg shadow-green-900/30 transition-all duration-200
                         hover:shadow-xl hover:-translate-y-0.5"
            >
              Xem bảng giá <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:0937587438"
              className="inline-flex items-center justify-center gap-2
                         border border-white/25 text-white/90 hover:bg-white/10
                         px-6 py-3 rounded-xl text-sm font-semibold
                         transition-all duration-200"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              0937.587.438
            </a>
          </div>

          {/* Price bar — nhỏ gọn, không scroll ngang */}
          <div className="inline-flex flex-wrap items-center gap-x-5 gap-y-1
                          rounded-xl px-4 py-2.5"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div>
              <span className="text-[10px] text-white/40 uppercase tracking-wider">Giá tham khảo từ</span>
              <span className="ml-1.5 text-sm font-black text-amber-400">1,15 tỷ</span>
              <span className="text-[11px] text-white/40">/nền</span>
            </div>
            <span className="text-white/20 hidden sm:inline">·</span>
            <div>
              <span className="text-[10px] text-white/40">Đường 24–32m</span>
              <span className="ml-1.5 text-sm font-bold text-white/80">1,5–2,5 tỷ</span>
            </div>
            <span className="text-white/20 hidden sm:inline">·</span>
            <div>
              <span className="text-[10px] text-white/40">Biệt thự từ</span>
              <span className="ml-1.5 text-sm font-bold text-white/80">2,1 tỷ+</span>
            </div>
            <span className="text-[10px] text-white/30 hidden sm:inline">· Cập nhật 05/2026</span>
          </div>

        </div>
      </div>

      {/* Phối cảnh disclaimer */}
      <p className="absolute bottom-14 right-4 z-10 text-[10px] text-white/30 italic">
        Hình ảnh phối cảnh mang tính minh họa
      </p>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10
                      flex flex-col items-center gap-1 animate-bounce">
        <ChevronDown className="w-4 h-4 text-white/30" />
      </div>
    </section>
  );
}
