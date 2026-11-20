"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Sun,
  Moon,
  Camera,
  Sparkles,
  Layers,
  Maximize2,
  ChevronRight,
  ChevronLeft,
  X,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { REAL_PARK_PHOTOS, REAL_PARK_CATEGORIES, RealParkPhoto } from "@/data/oneEraRealParkData";

interface Props {
  onOpenImage?: (src: string, alt: string) => void;
}

export default function OneEraRealParkShowcase({ onOpenImage }: Props) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const filteredPhotos = useMemo(() => {
    if (activeTab === "all") return REAL_PARK_PHOTOS;
    if (activeTab === "day") return REAL_PARK_PHOTOS.filter((p) => p.timeOfDay === "day");
    if (activeTab === "night") return REAL_PARK_PHOTOS.filter((p) => p.timeOfDay === "night");
    return REAL_PARK_PHOTOS.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const displayedPhotos = filteredPhotos.slice(0, visibleCount);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  };

  const selectedPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  return (
    <section
      id="thuc-te-one-park"
      className="py-16 sm:py-24 bg-[#070b14] text-[#f5f2eb] relative overflow-hidden border-b border-white/[0.06]"
    >
      {/* Decorative ambient backdrop glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#dfb552]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#35a3ce]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4 shadow-lg shadow-[#dfb552]/5">
            <Camera className="w-3.5 h-3.5 animate-pulse" />
            <span>Hình Ảnh Thực Tế Tại Dự Án</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            CÔNG VIÊN <span className="bg-gradient-to-r from-[#dfb552] via-[#fff3d4] to-[#dfb552] bg-clip-text text-transparent">ONE PARK</span> & SALES GALLERY
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Mục sở thị không gian sinh thái xanh mướt ban ngày và vũ điệu ánh sáng lộng lẫy về đêm của công viên One Park – minh chứng thực tế cho tiềm lực và cam kết chuẩn mực quốc tế của liên minh CĐT.
          </p>

          {/* Key Stat Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs font-mono">
            <span className="px-3.5 py-1.5 rounded-full bg-[#0c121e] border border-white/10 text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Đã hoàn thiện & đón khách
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#0c121e] border border-white/10 text-[#dfb552] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              32 góc chụp thực tế
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#0c121e] border border-white/10 text-sky-400 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              Đại lộ QL13, Thuận Giao
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {REAL_PARK_CATEGORIES.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setVisibleCount(12);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#dfb552] text-[#06080e] border-[#dfb552] font-bold shadow-lg shadow-[#dfb552]/25 scale-105"
                    : "bg-[#0c121e]/80 text-slate-300 border-white/10 hover:border-[#dfb552]/40 hover:text-white"
                }`}
              >
                {tab.id === "day" && <Sun className="w-3.5 h-3.5 text-amber-500" />}
                {tab.id === "night" && <Moon className="w-3.5 h-3.5 text-sky-400" />}
                {tab.id === "all" && <Layers className="w-3.5 h-3.5" />}
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-black/20 text-[#06080e]" : "bg-white/10 text-slate-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {displayedPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-[#0c121e]/80 border border-white/[0.08] hover:border-[#dfb552]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#dfb552]/10 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                  quality={85}
                />

                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-[#06080e]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badges on top */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                  {photo.timeOfDay === "day" ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/90 text-[#06080e] text-[10px] font-mono font-bold tracking-wider backdrop-blur-md shadow-md">
                      <Sun className="w-3 h-3" />
                      Ban Ngày
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/90 text-sky-400 text-[10px] font-mono font-bold tracking-wider border border-sky-400/30 backdrop-blur-md shadow-md">
                      <Moon className="w-3 h-3" />
                      Về Đêm
                    </span>
                  )}

                  <span className="p-1.5 rounded-full bg-black/60 text-white/80 group-hover:text-[#dfb552] group-hover:bg-black/90 transition-all backdrop-blur-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Caption Area */}
              <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-[#dfb552] transition-colors line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light line-clamp-2">
                    {photo.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>One Park • One Era</span>
                  <span className="text-[#dfb552] font-semibold group-hover:underline flex items-center gap-0.5">
                    Xem ảnh lớn
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="text-center pt-2 mb-12">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 12, filteredPhotos.length))}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0c121e] hover:bg-[#151c2c] border border-white/20 hover:border-[#dfb552]/50 text-white font-semibold text-sm transition-all hover:scale-105 shadow-xl"
            >
              <span>Xem Thêm {filteredPhotos.length - visibleCount} Ảnh Thực Tế</span>
              <ChevronRight className="w-4 h-4 text-[#dfb552]" />
            </button>
          </div>
        )}

        {/* VIP On-Site Tour Invitation Banner */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#0c1424] via-[#101b30] to-[#0c1424] border border-[#dfb552]/30 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#dfb552]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#dfb552] mb-2 block">
                Trải Nghiệm Thực Tế Tại Dự Án
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-sans">
                ĐĂNG KÝ THAM QUAN CÔNG VIÊN ONE PARK BẰNG XE ĐIỆN VIP
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Khu công viên One Park và Nhà mẫu Sales Gallery One Era đã chính thức mở cửa đón khách. Đăng ký ngay để nhận đặc quyền đưa đón trải nghiệm bằng xe điện VIP và tư vấn giỏ hàng suất nội bộ đợt 1.
              </p>
            </div>

            <a
              href="#dang-ky"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#dfb552] via-[#fff3d4] to-[#dfb552] text-[#06080e] font-extrabold text-sm uppercase tracking-wider shadow-[0_10px_35px_rgba(223,181,82,0.35)] hover:scale-105 transition-all whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4" />
              <span>Đăng Ký Tham Quan Ngay</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-auto">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-white/10 text-[#dfb552] border border-white/15 backdrop-blur-md">
                {selectedPhotoIndex! + 1} / {filteredPhotos.length}
              </span>
              <span className="text-xs font-mono text-slate-300 hidden sm:inline">
                {selectedPhoto.timeOfDay === "day" ? "☀️ Ban ngày" : "🌙 Về đêm"} • One Park
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110 border border-white/20"
              aria-label="Đóng ảnh"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Navigation Prev / Next */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110 border border-white/20 z-20 backdrop-blur-md"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110 border border-white/20 z-20 backdrop-blur-md"
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Modal Main Content */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh]">
              <Image
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>

            {/* Bottom Photo Caption */}
            <div className="w-full mt-3 p-4 rounded-2xl bg-[#0c121e]/90 border border-white/15 backdrop-blur-xl text-center max-w-3xl">
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
