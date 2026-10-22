"use client";

import { useState } from "react";
import Image from "next/image";
import { Home, ShoppingBag, ArrowRight, CheckCircle2, ZoomIn } from "lucide-react";
import { ONE_ERA_DATA, type OneEraProduct } from "@/data/oneEraData";

interface Props {
  onOpenImage?: (src: string, alt: string) => void;
  onSelectProduct?: (prod: OneEraProduct) => void;
}

export default function OneEraProducts({ onOpenImage }: Props) {
  const [filter, setFilter] = useState<"all" | "townhouse" | "shophouse">("all");
  const products = ONE_ERA_DATA.centralDistrict.products;

  const filtered = filter === "all" ? products : products.filter((p) => p.type === filter);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="san-pham" className="py-20 lg:py-28 bg-[#06080e] text-[#f5f2eb] relative overflow-hidden border-b border-white/[0.06]">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#dfb552]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4">
            <Home className="w-3.5 h-3.5" />
            <span>Sản Phẩm Thấp Tầng Điển Hình</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            BỘ SƯU TẬP <span className="bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] bg-clip-text text-transparent">TOWNHOUSE & SHOPHOUSE</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Thiết kế tối ưu công năng, hài hòa giữa nhịp kinh doanh thịnh vượng tầng trệt và không gian an cư tĩnh tại các tầng trên.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2.5 mt-8 flex-wrap">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === "all"
                  ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-lg shadow-[#dfb552]/20 font-extrabold"
                  : "bg-[#0c121e] text-slate-300 hover:text-white border border-white/[0.08]"
              }`}
            >
              Tất Cả ({products.length})
            </button>
            <button
              onClick={() => setFilter("townhouse")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === "townhouse"
                  ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-lg shadow-[#dfb552]/20 font-extrabold"
                  : "bg-[#0c121e] text-slate-300 hover:text-white border border-white/[0.08]"
              }`}
            >
              Townhouse (Nhà Phố)
            </button>
            <button
              onClick={() => setFilter("shophouse")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                filter === "shophouse"
                  ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-lg shadow-[#dfb552]/20 font-extrabold"
                  : "bg-[#0c121e] text-slate-300 hover:text-white border border-white/[0.08]"
              }`}
            >
              Shophouse (Thương Mại)
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              className="rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] overflow-hidden hover:border-[#dfb552]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col group backdrop-blur-xl"
            >
              {/* Product Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#06080e]">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent" />

                {/* Badge Type */}
                <div className="absolute top-4 left-4 bg-[#06080e]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono font-bold text-[#dfb552] flex items-center gap-1.5">
                  {prod.type === "townhouse" ? <Home className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                  <span>{prod.type === "townhouse" ? "Townhouse" : "Shophouse"}</span>
                </div>

                {/* Lots Badge */}
                <div className="absolute top-4 right-4 bg-[#dfb552] text-[#06080e] px-2.5 py-1 rounded-md text-[10px] font-mono font-extrabold uppercase shadow">
                  Lô: {prod.lots.slice(0, 3).join(", ")}
                </div>

                {/* Zoom */}
                {onOpenImage && (
                  <button
                    onClick={() => onOpenImage(prod.image, prod.name)}
                    className="absolute bottom-3 right-3 bg-[#0c121e]/90 hover:bg-[#dfb552] hover:text-[#06080e] text-white p-2 rounded-full backdrop-blur-md border border-white/20 transition-all shadow"
                    aria-label={`Xem ảnh lớn ${prod.name}`}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-white mb-1 group-hover:text-[#dfb552] transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#dfb552]/90 font-medium italic mb-4">
                    "{prod.tagline}"
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 p-3.5 rounded-2xl bg-[#06080e]/70 border border-white/[0.06] text-xs mb-4">
                    <div>
                      <span className="text-slate-400 block text-[10px] font-mono uppercase">Kích thước:</span>
                      <strong className="text-white">{prod.dimension}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] font-mono uppercase">Cơ cấu tầng:</span>
                      <strong className="text-white">{prod.floors}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] font-mono uppercase">Diện tích đất:</span>
                      <strong className="text-[#dfb552] font-mono">{prod.landArea}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] font-mono uppercase">Diện tích sàn XD:</span>
                      <strong className="text-[#dfb552] font-mono">{prod.builtArea}</strong>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3 font-light">
                    {prod.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-400">
                    {prod.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#58aeb4] flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                  <div className="text-xs font-mono font-bold text-[#dfb552]">
                    {prod.priceEst}
                  </div>
                  <button
                    onClick={() => scrollTo("bang-gia")}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#dfb552]/10 hover:bg-[#dfb552] hover:text-[#06080e] text-[#dfb552] font-bold text-xs transition-all border border-[#dfb552]/30"
                  >
                    <span>Nhận Báo Giá</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
