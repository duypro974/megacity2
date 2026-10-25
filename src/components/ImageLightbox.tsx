"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

// ─────────────────────────────────────────────────────────────
// ArticleFigure — ảnh trong bài viết, click để phóng to
// ─────────────────────────────────────────────────────────────
export function ArticleFigure({
  src,
  alt,
  caption,
  images,
  index = 0,
  onOpen,
}: {
  src: string;
  alt: string;
  caption?: string;
  images?: LightboxImage[];
  index?: number;
  onOpen?: (index: number) => void;
}) {
  return (
    <figure className="my-10 -mx-4 sm:mx-0">
      <div
        className="relative bg-slate-100 rounded-none sm:rounded-2xl overflow-hidden border border-slate-200 group cursor-zoom-in"
        onClick={() => onOpen?.(index)}
        role="button"
        tabIndex={0}
        aria-label={`Phóng to ảnh: ${alt}`}
        onKeyDown={(e) => e.key === "Enter" && onOpen?.(index)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
            <ZoomIn className="w-5 h-5 text-slate-700" />
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-slate-400 italic px-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────
// Lightbox modal
// ─────────────────────────────────────────────────────────────
export function Lightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: LightboxImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const img = images[current];

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-5 select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh phóng to"
    >
      {/* Top Bar: Counter on left, Close on right */}
      <div
        className="w-full flex items-center justify-between z-20 px-1 sm:px-2"
        onClick={(e) => e.stopPropagation()}
      >
        {images.length > 1 ? (
          <div className="bg-white/10 backdrop-blur-md text-white/90 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm tracking-wide">
            {current + 1} / {images.length}
          </div>
        ) : (
          <div />
        )}

        <button
          onClick={onClose}
          className="bg-white/10 hover:bg-white/20 active:scale-95 text-white rounded-full p-2 sm:p-2.5 transition backdrop-blur-md border border-white/10 shadow-sm cursor-pointer"
          aria-label="Đóng (Phím Esc)"
          title="Đóng (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Viewport */}
      <div
        className="relative flex-1 w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-0 my-2 px-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev button */}
        {images.length > 1 && (
          <button
            onClick={prev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 active:scale-95 text-white rounded-full p-2.5 sm:p-3.5 transition backdrop-blur-md border border-white/10 shadow-xl cursor-pointer"
            aria-label="Ảnh trước (Mũi tên trái)"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Next button */}
        {images.length > 1 && (
          <button
            onClick={next}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 active:scale-95 text-white rounded-full p-2.5 sm:p-3.5 transition backdrop-blur-md border border-white/10 shadow-xl cursor-pointer"
            aria-label="Ảnh tiếp theo (Mũi tên phải)"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Active Image */}
        <div className="relative flex items-center justify-center max-h-[68vh] sm:max-h-[72vh] w-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            className="max-h-[68vh] sm:max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-200"
          />
        </div>

        {/* Caption */}
        {img.caption && (
          <div className="mt-3 px-4 py-2 bg-slate-900/85 backdrop-blur-md rounded-full border border-white/10 text-white/90 text-xs sm:text-sm text-center max-w-2xl shadow-lg line-clamp-2">
            {img.caption}
          </div>
        )}
      </div>

      {/* Bottom Thumbnails Strip */}
      {images.length > 1 && (
        <div
          className="w-full flex justify-center z-20 pt-1 pb-1 overflow-x-auto no-scrollbar"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex gap-2 p-1.5 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 max-w-full overflow-x-auto">
            {images.map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative flex-shrink-0 w-12 h-10 sm:w-14 sm:h-11 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                  i === current
                    ? "border-amber-400 scale-105 shadow-md shadow-amber-500/20 opacity-100"
                    : "border-transparent opacity-40 hover:opacity-80"
                }`}
                aria-label={`Xem ảnh ${i + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// useLightbox — hook dùng trực tiếp trong client component
// ─────────────────────────────────────────────────────────────
export function useLightbox(images: LightboxImage[]) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const LightboxPortal = lightboxIndex !== null ? (
    <Lightbox images={images} initialIndex={lightboxIndex} onClose={closeLightbox} />
  ) : null;

  return { openLightbox, LightboxPortal, images };
}

// ─────────────────────────────────────────────────────────────
// ArticleWithLightbox — kept for backward compat, delegates to useLightbox
// NOTE: dùng useLightbox trực tiếp trong client component là preferred
// ─────────────────────────────────────────────────────────────
export function ArticleWithLightbox({
  images,
  children,
}: {
  images: LightboxImage[];
  children: React.ReactNode;
}) {
  const { LightboxPortal } = useLightbox(images);
  return (
    <>
      {children}
      {LightboxPortal}
    </>
  );
}