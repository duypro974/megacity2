"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, CheckCircle, Home, ShoppingBag, Waves, ZoomIn, Download, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { ONE_ERA_DATA } from "@/data/oneEraData";
import { IMG_ONE_ERA } from "@/lib/cloudinary";

interface Props {
  onOpenImage?: (src: string, alt: string) => void;
}

export default function OneEraCentralDistrict({ onOpenImage }: Props) {
  const cd = ONE_ERA_DATA.centralDistrict;
  const [activeLeaflet, setActiveLeaflet] = useState<"back" | "front">("back");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="central-district" className="py-16 lg:py-24 bg-[#06080e] text-[#f5f2eb] relative overflow-hidden border-b border-white/[0.06]">
      {/* Top golden ambient spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-[#dfb552]/10 via-[#dfb552]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4 shadow-[0_0_20px_rgba(223,181,82,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfb552] animate-ping" />
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mở Bán Đợt 1 • Số Lượng Giới Hạn</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            PHÂN KHU <span className="bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#c99e39] bg-clip-text text-transparent">CENTRAL DISTRICT</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Tâm điểm thương mại & an cư phồn vinh bậc nhất đại đô thị One Era. Sở hữu tọa độ ngã ba trục đại lộ 25m và dòng Suối Cát sinh thái mát lành.
          </p>
        </div>

        {/* 3 Rich Visual Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Tổng Thể Central District */}
          <div className="rounded-3xl bg-gradient-to-b from-[#0e1422] to-[#080c14] border border-[#dfb552]/30 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-[#dfb552]/60 hover:shadow-[0_20px_50px_rgba(223,181,82,0.15)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Image with Dark Vignette */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <Image
                  src={IMG_ONE_ERA.hero.boulevard}
                  alt="Đại lộ phồn hoa Central District One Era"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-[#0e1422]/40 to-transparent" />

                <div className="absolute top-3.5 left-3.5 bg-[#06080e]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono font-bold text-[#dfb552] uppercase tracking-wider">
                  Trục Đại Lộ 25m
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5 text-[#dfb552]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Mở Bán Đợt 1</span>
                  </span>
                  <span className="text-slate-400">Q4/2028 Nhận Nhà</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#dfb552] font-mono">
                    357 <span className="text-base font-sans font-bold text-white">Căn</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    Độc Quyền
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white mb-2 uppercase tracking-wide group-hover:text-[#dfb552] transition-colors">
                  Tổng Thấp Tầng Giới Hạn
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-light mb-5">
                  Bộ sưu tập thấp tầng mở bán đầu tiên với mức giá gốc ưu đãi nhất toàn dự án. Tọa lạc trực diện công viên và hồ bơi phong cách resort.
                </p>

                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#dfb552] flex-shrink-0" />
                    <span>Hồ bơi phong cách resort riêng biệt phân khu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#dfb552] flex-shrink-0" />
                    <span>Đường nội khu quy hoạch lộ giới 13m – 25m</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#dfb552] flex-shrink-0" />
                    <span>Hạ tầng hoàn chỉnh, Coteccons thi công</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => scrollTo("mat-bang-phan-lo")}
                className="w-full py-3 px-4 rounded-xl bg-[#dfb552]/10 hover:bg-[#dfb552] text-[#dfb552] hover:text-[#06080e] font-extrabold text-xs uppercase tracking-wider transition-all border border-[#dfb552]/30 flex items-center justify-center gap-2"
              >
                <span>Xem Sơ Đồ Phân Lô Từng Căn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: 208 Căn Townhouse */}
          <div className="rounded-3xl bg-gradient-to-b from-[#0e1422] to-[#080c14] border border-[#dfb552]/30 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-[#dfb552]/60 hover:shadow-[0_20px_50px_rgba(223,181,82,0.15)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Image with Dark Vignette */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <Image
                  src={IMG_ONE_ERA.products.townhouseMizuhiki}
                  alt="Phối cảnh nhà phố liền kề Townhouse One Era"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-[#0e1422]/40 to-transparent" />

                <div className="absolute top-3.5 left-3.5 bg-[#06080e]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono font-bold text-[#dfb552] uppercase tracking-wider">
                  Townhouse Liền Kề
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5 text-white">
                    <Home className="w-3.5 h-3.5 text-[#dfb552]" />
                    <span>3 – 4 Tầng</span>
                  </span>
                  <span className="text-[#dfb552] font-semibold">Tổ Ấm Đa Thế Hệ</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#dfb552] font-mono">
                    208 <span className="text-base font-sans font-bold text-white">Căn</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#dfb552] uppercase tracking-wider font-semibold">
                    5x16m & 6x18m
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white mb-2 uppercase tracking-wide group-hover:text-[#dfb552] transition-colors">
                  Nhà Phố Liền Kề Nghỉ Dưỡng
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-light mb-5">
                  Thiết kế mở chuẩn phong cách Japandi đón trọn ánh sáng tự nhiên. Các dãy ven kênh Suối Cát sở hữu tầm nhìn cảnh quan mặt nước đắt giá.
                </p>

                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#dfb552] flex-shrink-0" />
                    <span>Mẫu 5x16m (3 tầng): Diện tích sàn 169.8 m²</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#dfb552] flex-shrink-0" />
                    <span>Mẫu 6x18m (4 tầng): Ven suối, DT sàn 302.4 m²</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#dfb552] flex-shrink-0" />
                    <span>Ban công kính rộng thoáng, chỗ đậu ô tô riêng</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => scrollTo("san-pham")}
                className="w-full py-3 px-4 rounded-xl bg-[#dfb552]/10 hover:bg-[#dfb552] text-[#dfb552] hover:text-[#06080e] font-extrabold text-xs uppercase tracking-wider transition-all border border-[#dfb552]/30 flex items-center justify-center gap-2"
              >
                <span>Xem Phối Cảnh & Mặt Bằng Townhouse</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: 149 Căn Shophouse */}
          <div className="rounded-3xl bg-gradient-to-b from-[#0e1422] to-[#080c14] border border-[#dfb552]/30 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-[#dfb552]/60 hover:shadow-[0_20px_50px_rgba(223,181,82,0.15)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Image with Dark Vignette */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <Image
                  src={IMG_ONE_ERA.products.shophouseFacade}
                  alt="Phối cảnh nhà phố thương mại Shophouse One Era"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-[#0e1422]/40 to-transparent" />

                <div className="absolute top-3.5 left-3.5 bg-[#06080e]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono font-bold text-[#dfb552] uppercase tracking-wider">
                  Shophouse Thương Mại
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5 text-white">
                    <ShoppingBag className="w-3.5 h-3.5 text-[#dfb552]" />
                    <span>4 Tầng Cao Cấp</span>
                  </span>
                  <span className="text-amber-400 font-semibold">Kinh Doanh Đỉnh Cao</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#dfb552] font-mono">
                    149 <span className="text-base font-sans font-bold text-white">Căn</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#dfb552] uppercase tracking-wider font-semibold">
                    5x18m · 6x18m · 6x23m
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white mb-2 uppercase tracking-wide group-hover:text-[#dfb552] transition-colors">
                  Nhà Phố Thương Mại Sầm Uất
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-light mb-5">
                  Mặt tiền đại lộ lớn đón lưu lượng khách khổng lồ. Tầng 1 tối ưu showroom, cafe, nhà hàng; các tầng trên là không gian sống sang trọng biệt lập.
                </p>

                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#dfb552] flex-shrink-0" />
                    <span>Mẫu 5x18m (4 tầng): Gần trường quốc tế VAS Saigon</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#dfb552] flex-shrink-0" />
                    <span>Mẫu 6x18m (4 tầng): Trục đường thông rộng 22m</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#dfb552] flex-shrink-0" />
                    <span>Mẫu 6x23m (4 tầng): Căn góc 2 mặt tiền cực VIP</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => scrollTo("form-dang-ky")}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] text-[#06080e] font-extrabold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>Nhận Báo Giá Suất Ngoại Giao Shophouse</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Exclusive Amenities Strip */}
        <div className="bg-gradient-to-r from-[#0a0f1a] via-[#0d1422] to-[#0a0f1a] border border-white/[0.08] rounded-3xl p-6 sm:p-8 mb-16 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.06]">
            <h3 className="text-base sm:text-lg font-extrabold text-white flex items-center gap-2.5 uppercase tracking-wide">
              <Waves className="w-5 h-5 text-[#dfb552]" />
              <span>Đặc Quyền Riêng Biệt Cư Dân Central District</span>
            </h3>
            <span className="text-xs font-mono text-[#dfb552] bg-[#dfb552]/10 px-3 py-1 rounded-full border border-[#dfb552]/20 w-fit">
              All-In-One Resort Amenities
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {cd.exclusiveAmenities.map((amenity, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#06080e]/80 border border-white/[0.06] hover:border-[#dfb552]/40 transition-colors">
                <CheckCircle className="w-4 h-4 text-[#dfb552] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium leading-relaxed">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Master Plan Map Leaflet Tabs */}
        <div id="mat-bang-phan-lo">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#dfb552] uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Bản Vẽ Quy Hoạch Vector 1/500</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase font-sans">
                Sơ Đồ Phân Lô Quy Hoạch Central District
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light">
                Bóc tách chi tiết từng block lô căn, lộ giới đường nội bộ 13m – 25m và công viên nội khu
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#0c121e] p-1.5 rounded-2xl border border-white/10 shadow-lg">
              <button
                onClick={() => setActiveLeaflet("back")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${
                  activeLeaflet === "back"
                    ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-md font-extrabold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Sơ Đồ Phân Lô Từng Căn
              </button>
              <button
                onClick={() => setActiveLeaflet("front")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${
                  activeLeaflet === "front"
                    ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-md font-extrabold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Tổng Thể & Thông Số
              </button>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl bg-[#0c101a] group">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full">
              <Image
                src={
                  activeLeaflet === "back"
                    ? IMG_ONE_ERA.leaflets.back
                    : IMG_ONE_ERA.leaflets.front
                }
                alt="Sơ đồ phân lô chi tiết phân khu Central District One Era"
                fill
                className="object-contain bg-[#06080e]"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>

            {/* Quick Actions */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              {onOpenImage && (
                <button
                  onClick={() =>
                    onOpenImage(
                      activeLeaflet === "back" ? IMG_ONE_ERA.leaflets.back : IMG_ONE_ERA.leaflets.front,
                      "Sơ đồ phân lô Central District One Era"
                    )
                  }
                  className="bg-[#0c121e]/90 hover:bg-[#dfb552] hover:text-[#06080e] text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-lg"
                  aria-label="Phóng to sơ đồ phân lô"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-[#06080e]/95 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-slate-300 max-w-2xl">
                <span className="font-bold text-[#dfb552]">Lộ giới chi tiết:</span> Đại lộ One Era (25m), Đường CKV-TG11 (22m), KV-D29 (20m), KV-N1 (19m), S1 (18m), đường nội bộ GP1–GP3 & V1–V6 (13m).
              </div>
              <a
                href="#tai-lieu"
                className="inline-flex items-center gap-1.5 text-[#dfb552] font-mono font-bold hover:underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Tải File PDF In Ấn (83MB)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
