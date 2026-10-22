"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ZoomIn } from "lucide-react";
import { ONE_ERA_DATA } from "@/data/oneEraData";

interface Props {
  onOpenImage?: (src: string, alt: string) => void;
}

export default function OneEraAmenities({ onOpenImage }: Props) {
  const [filter, setFilter] = useState<"all" | "commercial" | "education" | "health" | "green">("all");
  const amenities = ONE_ERA_DATA.amenities;

  const filtered = filter === "all" ? amenities : amenities.filter((a) => a.category === filter);

  return (
    <section id="tien-ich" className="py-20 lg:py-28 bg-[#06080e] text-[#f5f2eb] relative overflow-hidden border-b border-white/[0.06]">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#dfb552]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hệ Sinh Thái Đỉnh Cao All-In-One</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            TIỆN ÍCH QUỐC TẾ <span className="bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] bg-clip-text text-transparent">ĐẲNG CẤP THẾ GIỚI</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Mọi nhu cầu mua sắm, học tập, chăm sóc sức khỏe và giải trí của cư dân đều được phục vụ trọn vẹn chỉ trong vài bước chân ngay trong lòng đại đô thị.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === "all"
                  ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-md font-extrabold"
                  : "bg-[#0c121e] text-slate-300 hover:text-white border border-white/[0.08]"
              }`}
            >
              Tất Cả ({amenities.length})
            </button>
            <button
              onClick={() => setFilter("commercial")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === "commercial"
                  ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-md font-extrabold"
                  : "bg-[#0c121e] text-slate-300 hover:text-white border border-white/[0.08]"
              }`}
            >
              Thương Mại & Giải Trí
            </button>
            <button
              onClick={() => setFilter("education")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === "education"
                  ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-md font-extrabold"
                  : "bg-[#0c121e] text-slate-300 hover:text-white border border-white/[0.08]"
              }`}
            >
              Giáo Dục Quốc Tế
            </button>
            <button
              onClick={() => setFilter("health")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === "health"
                  ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-md font-extrabold"
                  : "bg-[#0c121e] text-slate-300 hover:text-white border border-white/[0.08]"
              }`}
            >
              Y Tế AI
            </button>
            <button
              onClick={() => setFilter("green")}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === "green"
                  ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-md font-extrabold"
                  : "bg-[#0c121e] text-slate-300 hover:text-white border border-white/[0.08]"
              }`}
            >
              Mảng Xanh 42ha
            </button>
          </div>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] overflow-hidden hover:border-[#dfb552]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col group backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#06080e]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent" />

                {item.stats && (
                  <div className="absolute top-4 left-4 bg-[#06080e]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono font-bold text-[#dfb552]">
                    {item.stats}
                  </div>
                )}

                {onOpenImage && (
                  <button
                    onClick={() => onOpenImage(item.image, item.title)}
                    className="absolute bottom-3 right-3 bg-[#0c121e]/90 hover:bg-[#dfb552] hover:text-[#06080e] text-white p-2 rounded-full backdrop-blur-md border border-white/20 transition-all shadow"
                    aria-label={`Xem ảnh ${item.title}`}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Text */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-white mb-1 group-hover:text-[#dfb552] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#dfb552]/90 font-medium italic mb-3">
                    "{item.tagline}"
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
