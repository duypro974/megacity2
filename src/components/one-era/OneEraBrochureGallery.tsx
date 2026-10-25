"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  BookOpen,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Download,
  Sparkles,
  Layers,
  ZoomIn,
  Eye,
  FileText,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  ONE_ERA_BROCHURE_SPREADS,
  ONE_ERA_PANORAMAS,
  ONE_ERA_PERSPECTIVES,
  OneEraBrochureSpread,
} from "@/data/oneEraData";

interface Props {
  onOpenImage?: (src: string, alt: string) => void;
}

export default function OneEraBrochureGallery({ onOpenImage }: Props) {
  const [activeTab, setActiveTab] = useState<"brochure" | "panoramas" | "perspectives">("brochure");

  // Brochure State
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [brochureFilter, setBrochureFilter] = useState<string>("all");
  const thumbScrollRef = useRef<HTMLDivElement>(null);

  // Perspective Filter State
  const [perspectiveFilter, setPerspectiveFilter] = useState<string>("all");
  const isInitialMount = useRef(true);

  const filteredSpreads =
    brochureFilter === "all"
      ? ONE_ERA_BROCHURE_SPREADS
      : ONE_ERA_BROCHURE_SPREADS.filter((s) => s.category === brochureFilter);

  const activeSpread: OneEraBrochureSpread =
    filteredSpreads[currentSpreadIndex] ?? ONE_ERA_BROCHURE_SPREADS[0];

  const handlePrevSpread = () => {
    setCurrentSpreadIndex((prev) => (prev > 0 ? prev - 1 : filteredSpreads.length - 1));
  };

  const handleNextSpread = () => {
    setCurrentSpreadIndex((prev) => (prev < filteredSpreads.length - 1 ? prev + 1 : 0));
  };

  // Only scroll thumbnail bar horizontally when user changes spreads, NEVER on initial page load
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (thumbScrollRef.current) {
      const activeThumb = thumbScrollRef.current.children[currentSpreadIndex] as HTMLElement;
      if (activeThumb) {
        thumbScrollRef.current.scrollTo({
          left: activeThumb.offsetLeft - thumbScrollRef.current.clientWidth / 2 + activeThumb.clientWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [currentSpreadIndex]);

  const filteredPerspectives =
    perspectiveFilter === "all"
      ? ONE_ERA_PERSPECTIVES
      : ONE_ERA_PERSPECTIVES.filter((p) => p.category === perspectiveFilter);

  return (
    <section id="thu-vien-anh" className="py-20 lg:py-28 bg-[#04060a] text-[#f5f2eb] relative overflow-hidden border-b border-white/[0.06]">
      {/* Ambient decorative glowing backdrops */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#dfb552]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-[#35a3ce]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Thư Viện Hình Ảnh & Ấn Phẩm Gốc</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            BỘ SƯU TẬP <span className="bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] bg-clip-text text-transparent">BROCHURE & PHỐI CẢNH 3D</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Khám phá trọn bộ 28 trang ấn phẩm bán hàng chính thức, 4 góc nhìn Gigapixel toàn cảnh 10K và thư viện 20 phối cảnh sắc nét nhất từ Chủ đầu tư Kinera &amp; Kim Oanh Group.
          </p>

          {/* Master Segmented Control Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0c121e] border border-white/10 mt-8 shadow-2xl">
            <button
              onClick={() => setActiveTab("brochure")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "brochure"
                  ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-lg font-extrabold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Brochure Gốc (28 Trang)</span>
            </button>
            <button
              onClick={() => setActiveTab("panoramas")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "panoramas"
                  ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-lg font-extrabold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Toàn Cảnh 10K-12K</span>
            </button>
            <button
              onClick={() => setActiveTab("perspectives")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "perspectives"
                  ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-lg font-extrabold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Phối Cảnh Dự Án ({ONE_ERA_PERSPECTIVES.length})</span>
            </button>
          </div>
        </div>

        {/* ================================================================= */}
        {/* TAB 1: 28-SPREAD INTERACTIVE BROCHURE READER                      */}
        {/* ================================================================= */}
        {activeTab === "brochure" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Category Filter for Brochure */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0a0f1a] p-4 rounded-2xl border border-white/[0.08]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Mục lục:</span>
                {[
                  { id: "all", label: `Tất Cả (${ONE_ERA_BROCHURE_SPREADS.length})` },
                  { id: "tong-quan", label: "Tổng Quan" },
                  { id: "vi-tri", label: "Vị Trí & Hạ Tầng" },
                  { id: "tien-ich", label: "Hệ Tiện Ích" },
                  { id: "san-pham", label: "Sản Phẩm Central District" },
                  { id: "chinh-sach", label: "Chứng Nhận & CSBH" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setBrochureFilter(cat.id);
                      setCurrentSpreadIndex(0);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      brochureFilter === cat.id
                        ? "bg-[#dfb552] text-[#06080e] font-bold"
                        : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Page Counter & Direct Download */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#dfb552] bg-[#dfb552]/10 px-3 py-1.5 rounded-lg border border-[#dfb552]/30">
                  {activeSpread.pageRange} / {filteredSpreads.length * 2}
                </span>
                <a
                  href="/docs/one-era/leaflet-central-street-mat-truoc.pdf"
                  download
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-300 hover:text-[#dfb552] bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF Leaflet (16MB)</span>
                </a>
              </div>
            </div>

            {/* Main Stage: Large Spread Preview */}
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#070b12] shadow-2xl group">
              {/* Aspect Ratio 3545 / 1276 ~ 2.77:1 spread */}
              <div className="relative aspect-[16/8] sm:aspect-[16/7] md:aspect-[2.5/1] w-full">
                <Image
                  src={activeSpread.image}
                  alt={activeSpread.title}
                  fill
                  className="object-contain p-2 sm:p-4"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  priority
                />
              </div>

              {/* Prev / Next Spread Floating Controls */}
              <button
                onClick={handlePrevSpread}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#06080e]/85 hover:bg-[#dfb552] hover:text-[#06080e] text-white flex items-center justify-center transition-all border border-white/20 shadow-2xl backdrop-blur-md group-hover:scale-105"
                aria-label="Trang trước"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextSpread}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#06080e]/85 hover:bg-[#dfb552] hover:text-[#06080e] text-white flex items-center justify-center transition-all border border-white/20 shadow-2xl backdrop-blur-md group-hover:scale-105"
                aria-label="Trang tiếp theo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Bottom Caption Bar */}
              <div className="p-4 sm:p-6 bg-gradient-to-t from-[#04060a] via-[#070b12]/95 to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.06]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-[#dfb552] font-bold uppercase tracking-wider">
                      {activeSpread.pageRange}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="text-xs text-slate-400">Ấn Phẩm Kinh Doanh KINERA</span>
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-white">
                    {activeSpread.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
                    {activeSpread.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {onOpenImage && (
                    <button
                      onClick={() => onOpenImage(activeSpread.image, `${activeSpread.title} (${activeSpread.pageRange})`)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#dfb552] hover:bg-[#c99e39] text-[#06080e] font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>Xem Full Phóng To</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Horizontal Thumbnail Strip for Fast Jump */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Duyệt nhanh 28 trang (Click để xem ngay):
                </span>
                <span className="text-xs text-slate-400">
                  {currentSpreadIndex + 1} / {filteredSpreads.length} trang đôi
                </span>
              </div>
              <div
                ref={thumbScrollRef}
                className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent snap-x"
              >
                {filteredSpreads.map((spread, idx) => (
                  <button
                    key={spread.spreadNumber}
                    onClick={() => setCurrentSpreadIndex(idx)}
                    className={`relative shrink-0 w-28 sm:w-36 aspect-[2.5/1] rounded-xl overflow-hidden border transition-all snap-start ${
                      idx === currentSpreadIndex
                        ? "border-[#dfb552] ring-2 ring-[#dfb552]/40 scale-105 shadow-xl"
                        : "border-white/10 hover:border-white/30 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={spread.image}
                      alt={spread.title}
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <span className="absolute bottom-1 right-1 bg-black/80 text-[#dfb552] text-[9px] font-mono px-1.5 py-0.5 rounded font-bold">
                      {spread.spreadNumber}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 2: GIGAPIXEL MASTER PANORAMAS (10K - 12K RESOLUTION)          */}
        {/* ================================================================= */}
        {activeTab === "panoramas" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-[#0a0f1a] border border-white/[0.08] text-xs text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#dfb552]" />
                <span>Các bức ảnh toàn cảnh Gigapixel độ phân giải gốc lên đến 12,331 × 7,112 px (tương đương ảnh 87 Megapixels).</span>
              </span>
              <span className="text-[#dfb552] font-mono font-bold hidden sm:inline">4 Góc Nhìn Biểu Tượng</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ONE_ERA_PANORAMAS.map((pano) => (
                <div
                  key={pano.id}
                  className="rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] overflow-hidden hover:border-[#dfb552]/40 transition-all duration-300 shadow-2xl flex flex-col justify-between group backdrop-blur-xl"
                >
                  {/* Visual Stage */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-black">
                    <Image
                      src={pano.image}
                      alt={pano.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-[#06080e]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-mono font-bold text-[#dfb552]">
                      {pano.badge}
                    </div>

                    <div className="absolute top-4 right-4 bg-[#06080e]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] font-mono text-slate-300">
                      {pano.resolution}
                    </div>

                    {/* Open Zoom Button */}
                    {onOpenImage && (
                      <button
                        onClick={() => onOpenImage(pano.image, `${pano.title} - ${pano.resolution}`)}
                        className="absolute bottom-4 right-4 bg-[#0c121e]/90 hover:bg-[#dfb552] hover:text-[#06080e] text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-xl"
                        aria-label={`Phóng to ảnh ${pano.title}`}
                      >
                        <ZoomIn className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#dfb552] transition-colors">
                      {pano.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#dfb552] mb-3">
                      {pano.subtitle}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
                      {pano.description}
                    </p>
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>Độ nét: {pano.resolution}</span>
                      <button
                        onClick={() => onOpenImage && onOpenImage(pano.image, pano.title)}
                        className="text-[#dfb552] font-bold hover:underline inline-flex items-center gap-1"
                      >
                        <span>Xem Nét Cực Đại</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 3: 20 DETAILED PERSPECTIVES (CENTRAL DISTRICT & AMENITIES)    */}
        {/* ================================================================= */}
        {activeTab === "perspectives" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Filter buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { id: "all", label: `Tất Cả (${ONE_ERA_PERSPECTIVES.length})` },
                { id: "central-district", label: "Phân Khu Central District (7)" },
                { id: "education-health", label: "Giáo Dục VAS & Y Tế Meret (5)" },
                { id: "sports-nature", label: "Nghỉ Dưỡng & Thể Thao (8)" },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setPerspectiveFilter(btn.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    perspectiveFilter === btn.id
                      ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-md font-extrabold"
                      : "bg-[#0c121e] text-slate-300 hover:text-white border border-white/[0.08]"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Perspectives Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPerspectives.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] overflow-hidden hover:border-[#dfb552]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col group backdrop-blur-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent" />

                    {/* Tag badge */}
                    <div className="absolute top-3.5 left-3.5 bg-[#06080e]/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] font-mono font-bold text-[#dfb552] uppercase tracking-wider">
                      {item.tag}
                    </div>

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

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white mb-2 group-hover:text-[#dfb552] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}