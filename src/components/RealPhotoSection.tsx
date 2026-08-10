"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { REAL_IMAGES, type ImageCategory, type RealImage } from "@/data/realImages";
import { scrollToSection } from "@/lib/scrollTo";

/* ─────────────────────────────────────────
   Filter config
───────────────────────────────────────── */
const FILTERS: { id: ImageCategory; label: string }[] = [
  { id: "all",             label: "Tất cả" },
  { id: "completed-homes", label: "Nhà phố đã hoàn thiện" },
  { id: "internal-roads",  label: "Đường nội khu & cảnh quan" },
  { id: "aerial",          label: "Toàn cảnh từ trên cao" },
  { id: "connectivity",    label: "Kết nối giao thông" },
];

/* ─────────────────────────────────────────
   Lightbox
───────────────────────────────────────── */
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: RealImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  // Touch swipe
  useEffect(() => {
    let startX = 0;
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) { dx < 0 ? onNext() : onPrev(); }
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [onPrev, onNext]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "rgba(3,22,45,0.94)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={img.title}
    >
      {/* Close — fixed góc trên phải viewport */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Đóng"
        className="fixed top-4 right-4 z-[10000] w-11 h-11 rounded-full bg-white/20
                   hover:bg-white/35 flex items-center justify-center text-white
                   transition-colors shadow-lg"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev — fixed giữa trái viewport */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Ảnh trước"
        className="fixed left-3 top-1/2 -translate-y-1/2 z-[10000] w-11 h-11 rounded-full
                   bg-white/20 hover:bg-white/35 flex items-center justify-center
                   text-white transition-colors shadow-lg"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next — fixed giữa phải viewport */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Ảnh tiếp theo"
        className="fixed right-3 top-1/2 -translate-y-1/2 z-[10000] w-11 h-11 rounded-full
                   bg-white/20 hover:bg-white/35 flex items-center justify-center
                   text-white transition-colors shadow-lg"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Image + caption — click ảnh không đóng, click vùng tối xung quanh đóng */}
      <div
        className="flex flex-col items-center justify-center w-full h-full px-16 py-12"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src}
          alt={img.alt}
          className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
          style={{ touchAction: "pinch-zoom" }}
          onClick={(e) => e.stopPropagation()}
        />
        <div className="mt-3 text-center px-4">
          <p className="text-white font-semibold text-sm">{img.title}</p>
          <p className="text-white/55 text-xs mt-1">{img.caption}</p>
        </div>
        <p className="mt-1.5 text-white/30 text-xs tabular-nums">
          {index + 1} / {images.length}
        </p>
      </div>
    </div>,
    document.body
  );
}

/* ─────────────────────────────────────────
   Gallery grid
───────────────────────────────────────── */
function GalleryGrid({
  images,
  onOpen,
}: {
  images: RealImage[];
  onOpen: (i: number) => void;
}) {
  if (images.length === 0) {
    return (
      <div className="py-16 text-center text-slate-400 text-sm">
        Không có ảnh trong danh mục này.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {images.map((img, i) => {
        // Ảnh đầu tiên luôn span 2 cột trên lg
        const isFeature = i === 0;
        return (
          <button
            key={img.src}
            type="button"
            onClick={() => onOpen(i)}
            aria-label={`Xem ảnh: ${img.title}`}
            className={`relative overflow-hidden rounded-2xl bg-slate-100 group
                        text-left focus-visible:outline-none focus-visible:ring-2
                        focus-visible:ring-[#16B364]
                        ${isFeature ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading={i < 3 ? "eager" : "lazy"}
              decoding="async"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            flex items-end justify-between p-4">
              <p className="text-white text-sm font-medium leading-snug">{img.title}</p>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 ml-2">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────
   Main
───────────────────────────────────────── */
export default function RealPhotoSection() {
  const [activeFilter, setActiveFilter] = useState<ImageCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useScrollFade();

  const filtered = activeFilter === "all"
    ? REAL_IMAGES
    : REAL_IMAGES.filter((img) => img.categories.includes(activeFilter as Exclude<ImageCategory, "all">));

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() =>
    setLightboxIndex((i) => i !== null ? (i - 1 + filtered.length) % filtered.length : 0),
    [filtered.length]
  );
  const nextImage = useCallback(() =>
    setLightboxIndex((i) => i !== null ? (i + 1) % filtered.length : 0),
    [filtered.length]
  );

  return (
    <>
      <section
        id="hinh-anh-thuc-te"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4">

          {/* Header */}
          <div className="mb-10">
            <span className="section-label">Hình ảnh thực tế</span>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-2">
              Không chỉ nhìn trên phối cảnh — hãy xem hiện trạng thực tế
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
              Hình ảnh thực tế dự án
            </h2>
            <p className="mt-2 text-slate-500 text-sm md:text-base max-w-xl">
              Những hình ảnh thực tế được ghi nhận tại dự án, đường nội khu và khu vực xung quanh,
              giúp khách hàng có góc nhìn trực quan hơn về hiện trạng.
            </p>
          </div>

          {/* Filter — scroll ngang trên mobile */}
          <div className="flex gap-2 overflow-x-auto pb-1 mb-7 scrollbar-hide">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                aria-pressed={activeFilter === f.id}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold
                             transition-colors duration-150 whitespace-nowrap
                  ${activeFilter === f.id
                    ? "bg-[#16B364] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                {f.label}
                <span className={`ml-1.5 text-[10px] font-normal
                  ${activeFilter === f.id ? "text-white/70" : "text-slate-400"}`}>
                  {f.id === "all"
                    ? REAL_IMAGES.length
                    : REAL_IMAGES.filter((img) => img.categories.includes(f.id as Exclude<ImageCategory, "all">)).length}
                </span>
              </button>
            ))}
          </div>

          {/* Gallery */}
          <GalleryGrid images={filtered} onOpen={openLightbox} />

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-700">
                Muốn xem thực tế dự án?
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Đặt lịch tham quan trực tiếp — chúng tôi sẽ dẫn bạn đến tận nơi.
              </p>
            </div>
            <a
              href="#lien-he"
              onClick={(e) => { e.preventDefault(); scrollToSection("lien-he"); }}
              className="inline-flex items-center gap-2 bg-[#16B364] hover:bg-[#13a057]
                         text-white font-semibold px-5 py-2.5 rounded-xl text-sm
                         transition-colors flex-shrink-0 shadow-sm"
            >
              Đăng ký nhận thông tin
            </a>
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
