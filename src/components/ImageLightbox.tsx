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
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-colors"
        aria-label="Đóng"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 text-white text-xs font-bold px-3 py-1.5 rounded-full">
          {current + 1} / {images.length}
        </div>
      )}

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-colors"
          aria-label="Ảnh trước"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-colors"
          aria-label="Ảnh tiếp theo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[80vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl"
        />
        {img.caption && (
          <p className="mt-3 text-white/60 text-xs italic text-center max-w-lg">
            {img.caption}
          </p>
        )}
      </div>

      {/* Thumbnails strip (khi > 1 ảnh) */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`w-12 h-8 rounded-lg overflow-hidden border-2 transition-all ${
                i === current ? "border-amber-400 opacity-100" : "border-transparent opacity-50 hover:opacity-75"
              }`}
              aria-label={`Xem ảnh ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </button>
          ))}
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
