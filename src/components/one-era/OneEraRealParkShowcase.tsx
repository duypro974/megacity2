"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import {
  Sun,
  Moon,
  Camera,
  Sparkles,
  Maximize2,
  ChevronRight,
  ChevronLeft,
  X,
  Compass,
  CheckCircle2,
  Car,
  Waves,
  Building2,
  Trees,
  Smile,
  Layers,
  ArrowRight,
} from "lucide-react";
import {
  REAL_PARK_PHOTOS,
  REAL_PARK_FILTERS,
  filterRealParkPhotos,
  getCategoryBadgeLabel,
  getLightboxImageUrl,
  getThumbnailImageUrl,
  getCardImageUrl,
  RealParkPhoto,
} from "@/data/oneEraRealParkData";

interface Props {
  onOpenImage?: (src: string, alt: string) => void;
}

export default function OneEraRealParkShowcase({ onOpenImage }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement | null>(null);

  // Filter photos based on active single unified filter
  const filteredPhotos = useMemo(() => {
    return filterRealParkPhotos(activeFilter);
  }, [activeFilter]);

  const displayedPhotos = useMemo(() => {
    return filteredPhotos.slice(0, visibleCount);
  }, [filteredPhotos, visibleCount]);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  }, [selectedPhotoIndex, filteredPhotos.length]);

  // Aggressive background preloading of adjacent images into browser memory
  // This completely eliminates any lag or delay when switching photos
  useEffect(() => {
    if (selectedPhotoIndex === null || filteredPhotos.length === 0) return;

    const total = filteredPhotos.length;
    const indicesToPreload = [
      (selectedPhotoIndex + 1) % total,
      (selectedPhotoIndex + 2) % total,
      (selectedPhotoIndex - 1 + total) % total,
      (selectedPhotoIndex - 2 + total) % total,
    ];

    indicesToPreload.forEach((idx) => {
      if (filteredPhotos[idx]) {
        const img = new window.Image();
        img.src = getLightboxImageUrl(filteredPhotos[idx].url);
      }
    });
  }, [selectedPhotoIndex, filteredPhotos]);

  // Keyboard navigation (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, handlePrev, handleNext]);

  // Auto-scroll thumbnail strip so active photo is always centered
  useEffect(() => {
    if (selectedPhotoIndex === null || !thumbnailContainerRef.current) return;
    const container = thumbnailContainerRef.current;
    const activeThumb = container.children[selectedPhotoIndex] as HTMLElement;
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [selectedPhotoIndex]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext(); // swipe left -> next
      } else {
        handlePrev(); // swipe right -> prev
      }
    }
    setTouchStartX(null);
  };

  const selectedPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  // Icon mapping for filter tabs
  const getFilterIcon = (filterId: string) => {
    switch (filterId) {
      case "all":
        return <Layers className="w-3.5 h-3.5" />;
      case "day":
        return <Sun className="w-3.5 h-3.5 text-amber-400" />;
      case "night":
        return <Moon className="w-3.5 h-3.5 text-sky-400" />;
      case "ho-boi":
        return <Waves className="w-3.5 h-3.5 text-cyan-400" />;
      case "sales-gallery":
        return <Building2 className="w-3.5 h-3.5 text-amber-300" />;
      case "cong-vien":
        return <Trees className="w-3.5 h-3.5 text-emerald-400" />;
      case "khu-vui-choi":
        return <Smile className="w-3.5 h-3.5 text-rose-400" />;
      case "toan-canh":
        return <Compass className="w-3.5 h-3.5 text-indigo-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section
      id="thuc-te-one-park"
      className="scroll-mt-24 sm:scroll-mt-28 py-20 lg:py-28 bg-[#06080e] text-[#f5f2eb] relative overflow-hidden border-b border-white/[0.06]"
    >
      {/* Decorative ambient backdrop glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#dfb552]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-16 right-10 w-[600px] h-[400px] bg-[#35a3ce]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-xs font-mono uppercase tracking-[0.25em] mb-4 shadow-lg shadow-[#dfb552]/5">
            <Camera className="w-3.5 h-3.5 animate-pulse text-[#dfb552]" />
            <span>Thực Tế Dự Án • 100% Đã Hoàn Thiện</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 text-white uppercase font-sans">
            KIỆT TÁC CẢNH QUAN{" "}
            <span className="bg-gradient-to-r from-[#dfb552] via-[#fff3d4] to-[#dfb552] bg-clip-text text-transparent">
              ONE PARK
            </span>{" "}
            & SALES GALLERY
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light max-w-3xl mx-auto">
            Mục sở thị không gian sinh thái xanh ngát ban ngày và vũ điệu ánh sáng lộng lẫy về đêm của công viên One Park – minh chứng sống động cho tiềm lực vượt trội và tiến độ cam kết chuẩn mực quốc tế của liên minh CĐT Kim Oanh Group & Longfor Group.
          </p>

          {/* Integrated Stat Ribbon */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-6 text-xs font-mono">
            <span className="px-3.5 py-1.5 rounded-full bg-[#0c121e]/90 border border-white/10 text-emerald-400 flex items-center gap-2 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Đã hoàn thiện & đón khách</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#0c121e]/90 border border-white/10 text-[#dfb552] flex items-center gap-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#dfb552]" />
              <span>32 góc chụp thực tế</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#0c121e]/90 border border-white/10 text-sky-400 flex items-center gap-2 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              <span>Đại lộ QL13, Thuận Giao</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#0c121e]/90 border border-white/10 text-amber-300 flex items-center gap-2 shadow-sm">
              <Car className="w-3.5 h-3.5 text-amber-300" />
              <span>Đưa đón xe điện Buggy VIP</span>
            </span>
          </div>
        </div>

        {/* Single Unified Filter Bar (Wraps gracefully, never cut off, no scrollbar bug) */}
        <div className="max-w-5xl mx-auto mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {REAL_PARK_FILTERS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveFilter(tab.id);
                    setVisibleCount(12);
                  }}
                  className={`px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 border ${
                    isActive
                      ? "bg-gradient-to-r from-[#dfb552] via-[#e5c065] to-[#cfa339] text-[#06080e] font-extrabold border-transparent shadow-[0_6px_25px_rgba(223,181,82,0.4)] scale-105"
                      : "bg-[#0c121e]/80 text-slate-300 border-white/10 hover:border-[#dfb552]/40 hover:text-white"
                  }`}
                >
                  {getFilterIcon(tab.id)}
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isActive ? "bg-black/25 text-[#06080e] font-bold" : "bg-white/10 text-slate-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Result Header */}
        <div className="flex items-center justify-between border-t border-white/[0.08] pt-6 mb-8">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#dfb552] animate-ping" />
            <span className="text-xs sm:text-sm font-mono text-slate-300">
              Đang hiển thị:{" "}
              <strong className="text-white font-semibold">
                {REAL_PARK_FILTERS.find((f) => f.id === activeFilter)?.label}
              </strong>
            </span>
          </div>
          <span className="text-xs font-mono text-[#dfb552]">
            {filteredPhotos.length} góc chụp thực tế
          </span>
        </div>

        {/* Panoramic 3-Column Luxury Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-12 sm:mb-16">
          {displayedPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c121e] border border-white/[0.08] hover:border-[#dfb552]/70 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_35px_rgba(223,181,82,0.15)] cursor-pointer"
            >
              {/* Image Full-Bleed via Direct High-Speed Cloudinary CDN */}
              <img
                src={getCardImageUrl(photo.url)}
                alt={photo.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Silk Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-[#06080e]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity pointer-events-none" />

              {/* Floating Top Bar: Time Badge & Expand Icon */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                {photo.timeOfDay === "day" ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-white/95 text-[11px] font-sans font-medium shadow-md">
                    <Sun className="w-3 h-3 text-amber-400" />
                    <span>Ban Ngày</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-sky-400/30 text-sky-300 text-[11px] font-sans font-medium shadow-md">
                    <Moon className="w-3 h-3 text-sky-400" />
                    <span>Ban Đêm</span>
                  </span>
                )}

                <div className="w-8 h-8 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-white/80 group-hover:text-[#dfb552] group-hover:border-[#dfb552]/50 group-hover:scale-110 transition-all flex items-center justify-center">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Floating Bottom Caption (Integrated seamlessly) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                <span className="text-[10px] font-mono tracking-widest text-[#dfb552] uppercase font-bold block mb-1">
                  {getCategoryBadgeLabel(photo.category)}
                </span>

                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#dfb552] transition-colors line-clamp-1 font-sans">
                  {photo.title}
                </h4>

                <p className="text-xs text-slate-300 font-light line-clamp-2 leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity mt-1">
                  {photo.description}
                </p>

                <div className="mt-3 pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-mono">One Park • One Era</span>
                  <span className="text-[#dfb552] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Phóng to góc nhìn</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="text-center pt-2 mb-14 sm:mb-20">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 12, filteredPhotos.length))}
              className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#0c1424] to-[#121c30] hover:from-[#15223c] hover:to-[#1b2a4a] border border-[#dfb552]/40 text-white font-semibold text-sm transition-all hover:scale-105 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
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
                Khu công viên One Park và Nhà mẫu Sales Gallery One Era đã chính thức mở cửa đón khách hằng ngày tại Đại lộ QL13, Thuận Giao, Bình Dương. Đăng ký ngay để nhận đặc quyền đưa đón trải nghiệm bằng xe điện VIP và tư vấn giỏ hàng đợt 1.
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

      {/* High-Performance 60FPS Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-between p-3 sm:p-5 animate-fadeIn select-none"
          onClick={closeLightbox}
        >
          {/* Top Controls Bar */}
          <div className="w-full max-w-6xl flex items-center justify-between z-20 pointer-events-auto">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-mono font-bold px-3.5 py-1.5 rounded-full bg-black/60 text-[#dfb552] border border-[#dfb552]/30 backdrop-blur-md">
                {selectedPhotoIndex! + 1} / {filteredPhotos.length}
              </span>
              <span className="text-xs font-mono text-slate-300 hidden sm:inline">
                {selectedPhoto.timeOfDay === "day" ? "☀️ Ban ngày sinh thái" : "🌙 Vũ điệu ánh sáng đêm"} • {getCategoryBadgeLabel(selectedPhoto.category)}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110 border border-white/20"
              aria-label="Đóng ảnh (Phím Escape)"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Center Main Image Container with Instant Zero-Lag Switch */}
          <div
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-2"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[#dfb552] text-white hover:text-[#06080e] flex items-center justify-center transition-all hover:scale-110 border border-white/20 z-20 backdrop-blur-md"
              aria-label="Ảnh trước (Phím mũi tên trái)"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[#dfb552] text-white hover:text-[#06080e] flex items-center justify-center transition-all hover:scale-110 border border-white/20 z-20 backdrop-blur-md"
              aria-label="Ảnh tiếp theo (Phím mũi tên phải)"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* The Main High-Res Image (Served directly from Cloudinary Edge CDN with preloaded cache) */}
            <div className="relative w-full h-[52vh] sm:h-[64vh] flex items-center justify-center">
              <img
                key={selectedPhoto.id}
                src={getLightboxImageUrl(selectedPhoto.url)}
                alt={selectedPhoto.title}
                className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl transition-opacity duration-200"
                decoding="async"
              />
            </div>
          </div>

          {/* Bottom Interactive Strip: Caption & Mini-Thumbnails Carousel */}
          <div
            className="w-full max-w-4xl flex flex-col items-center gap-2.5 z-20 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Caption Card */}
            <div className="w-full px-5 py-3 rounded-2xl bg-[#0c121e]/90 border border-white/15 backdrop-blur-xl text-center">
              <span className="text-[10px] font-mono tracking-widest text-[#dfb552] uppercase font-bold block mb-1">
                {getCategoryBadgeLabel(selectedPhoto.category)}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 font-sans">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed max-w-2xl mx-auto line-clamp-2">
                {selectedPhoto.description}
              </p>
            </div>

            {/* Mini Thumbnails Carousel Strip with Auto-Scroll to Active */}
            <div
              ref={thumbnailContainerRef}
              className="w-full flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-2"
            >
              {filteredPhotos.map((photo, i) => {
                const isActive = i === selectedPhotoIndex;
                return (
                  <button
                    key={photo.id}
                    onClick={() => setSelectedPhotoIndex(i)}
                    className={`relative w-12 sm:w-16 h-8 sm:h-10 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 border ${
                      isActive
                        ? "border-[#dfb552] scale-110 shadow-lg shadow-[#dfb552]/40 ring-2 ring-[#dfb552]/50"
                        : "border-white/15 opacity-50 hover:opacity-100 hover:border-white/40"
                    }`}
                  >
                    <img
                      src={getThumbnailImageUrl(photo.url)}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width={160}
                      height={100}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
