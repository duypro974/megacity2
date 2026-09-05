"use client";

/**
 * SaBanGallery — v2 Editorial redesign
 * ─────────────────────────────────────────────────────────────────────────────
 * • Caption nằm TRONG card (overlay gradient), không thò ra ngoài
 * • Layout editorial: 1 hero lớn + 2 col thumbnail khi "Tất cả"
 * • Filter tab gọn, đếm badge nhỏ
 * • Hover: slide caption lên từ dưới, zoom icon trung tâm
 * • Tất cả card cùng aspect-ratio → grid đều nhau
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useState, useMemo, useCallback } from "react";
import { ZoomIn, Camera } from "lucide-react";
import { useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { TLC_SABAN } from "@/lib/cloudinary";

type FilterKey = "tat-ca" | "toan-canh" | "shophouse" | "tien-ich" | "nha-pho";

interface SaBanImage extends LightboxImage {
  id: string;
  filter: FilterKey[];
  category: string;
  categoryColor: string; // tailwind bg class
  hero?: boolean;        // hiển thị to hàng đầu
}

const SABAN_IMAGES: SaBanImage[] = [
  {
    id: "toan-canh-45",
    src: TLC_SABAN["1"],
    alt: "Sa bàn toàn cảnh quy hoạch dự án The Link City Dầu Giây Đồng Nai",
    caption: "Toàn cảnh quy hoạch hạ tầng đồng bộ — góc 45°",
    filter: ["tat-ca", "toan-canh"],
    category: "Toàn cảnh",
    categoryColor: "bg-amber-400 text-slate-900",
    hero: true,
  },
  {
    id: "toan-canh-gd2",
    src: TLC_SABAN["7"],
    alt: "Sa bàn toàn cảnh 2 giai đoạn The Link City Dầu Giây",
    caption: "Layout 2 giai đoạn — sân bóng đá, tiện ích, khu dân cư",
    filter: ["tat-ca", "toan-canh"],
    category: "Toàn cảnh",
    categoryColor: "bg-amber-400 text-slate-900",
  },
  {
    id: "truc-shophouse",
    src: TLC_SABAN["2"],
    alt: "Góc sa bàn trục shophouse thương mại The Link City",
    caption: "Trục shophouse — đường đôi giao thương chính",
    filter: ["tat-ca", "shophouse"],
    category: "Shophouse",
    categoryColor: "bg-orange-500 text-white",
  },
  {
    id: "nga-4-ql1a",
    src: TLC_SABAN["6"],
    alt: "Sa bàn vị trí ngã tư Quốc lộ 1A The Link City",
    caption: "Ngã 4 Dầu Giây — QL1A, hồ bơi & khu vui chơi",
    filter: ["tat-ca", "shophouse", "tien-ich"],
    category: "Vị trí",
    categoryColor: "bg-sky-500 text-white",
  },
  {
    id: "clubhouse",
    src: TLC_SABAN["3"],
    alt: "Sa bàn clubhouse và trường học The Link City",
    caption: "Clubhouse & Trường học liên cấp — trung tâm dự án",
    filter: ["tat-ca", "tien-ich"],
    category: "Tiện ích",
    categoryColor: "bg-emerald-500 text-white",
    hero: false,
  },
  {
    id: "the-thao",
    src: TLC_SABAN["5"],
    alt: "Sa bàn khu thể thao và tiện ích The Link City",
    caption: "Khu thể thao ngoài trời & Trường liên cấp",
    filter: ["tat-ca", "tien-ich"],
    category: "Tiện ích",
    categoryColor: "bg-emerald-500 text-white",
  },
  {
    id: "biet-thu",
    src: TLC_SABAN["4"],
    alt: "Sa bàn khu nhà phố và biệt thự The Link City",
    caption: "Phân khu nhà phố & biệt thự — BT32 / BT34 / BT35",
    filter: ["tat-ca", "nha-pho"],
    category: "Nhà phố & Biệt thự",
    categoryColor: "bg-violet-500 text-white",
  },
  {
    id: "shophouse-thuc-te",
    src: TLC_SABAN["10"],
    alt: "Shophouse hoàn thiện thực tế tại The Link City Dầu Giây",
    caption: "Shophouse hoàn thiện — mặt tiền kinh doanh tầng 1",
    filter: ["tat-ca", "shophouse"],
    category: "Shophouse",
    categoryColor: "bg-orange-500 text-white",
  },
];

const FILTERS: { key: FilterKey; label: string; emoji: string }[] = [
  { key: "tat-ca",    label: "Tất cả",              emoji: "🗺️" },
  { key: "toan-canh", label: "Toàn cảnh",            emoji: "🛸" },
  { key: "shophouse", label: "Shophouse",             emoji: "🏪" },
  { key: "tien-ich",  label: "Tiện ích",              emoji: "🌳" },
  { key: "nha-pho",   label: "Nhà phố & Biệt thự",   emoji: "🏡" },
];

export default function SaBanGallery() {
  const [active, setActive] = useState<FilterKey>("tat-ca");

  const filtered = useMemo(
    () => SABAN_IMAGES.filter((img) => img.filter.includes(active)),
    [active]
  );

  const lb = useLightbox(SABAN_IMAGES as LightboxImage[]);

  const open = useCallback(
    (img: SaBanImage) => {
      lb.openLightbox(SABAN_IMAGES.findIndex((m) => m.id === img.id));
    },
    [lb]
  );

  // Tách hero khỏi rest khi "Tất cả"
  const hero   = active === "tat-ca" ? filtered.find((i) => i.hero) : null;
  const rest   = active === "tat-ca" ? filtered.filter((i) => !i.hero) : filtered;

  return (
    <div className="w-full">
      {lb.LightboxPortal}

      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-5 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
            <Camera className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800 leading-tight">Gallery Sa Bàn Kiến Trúc</h3>
            <p className="text-[11px] text-slate-400 mt-0.5">Click ảnh để phóng to · {filtered.length} góc</p>
          </div>
        </div>
      </div>

      {/* ── Filter tabs ── */}
      <div
        role="tablist"
        className="flex gap-1.5 mb-6 overflow-x-auto no-scrollbar pb-1"
      >
        {FILTERS.map((f) => {
          const count = SABAN_IMAGES.filter((img) => img.filter.includes(f.key)).length;
          const isActive = active === f.key;
          return (
            <button
              key={f.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(f.key)}
              className={`flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2 rounded-xl
                text-xs font-semibold transition-all duration-150 flex-shrink-0
                ${isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
                }`}
            >
              <span>{f.emoji}</span>
              {f.label}
              <span className={`text-[10px] font-bold tabular-nums min-w-[16px] text-center
                px-1 py-0.5 rounded-full
                ${isActive ? "bg-white/20" : "bg-white text-slate-400"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── LAYOUT "Tất cả": Hero lớn + grid đều ── */}
      {active === "tat-ca" && hero ? (
        <div className="space-y-3">
          {/* Hero card */}
          <GalleryCard img={hero} onOpen={open} tall />

          {/* Grid 3 cols cho 7 ảnh còn lại */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {rest.map((img) => (
              <GalleryCard key={img.id} img={img} onOpen={open} />
            ))}
          </div>
        </div>
      ) : (
        /* ── LAYOUT filtered: uniform grid ── */
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {filtered.map((img) => (
            <GalleryCard key={img.id} img={img} onOpen={open} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-400 text-sm">
          Không có ảnh trong mục này.
        </div>
      )}

      {/* ── Footer ── */}
      <p className="mt-5 text-[11px] text-slate-400 text-center italic">
        Ảnh chụp tại Showroom Kim Oanh Land · Sa bàn mô hình tỷ lệ thực tế The Link City, Dầu Giây
      </p>
    </div>
  );
}

/* ─── GalleryCard sub-component ──────────────────────────────────────────── */
function GalleryCard({
  img,
  onOpen,
  tall = false,
}: {
  img: SaBanImage;
  onOpen: (img: SaBanImage) => void;
  tall?: boolean;
}) {
  return (
    <button
      onClick={() => onOpen(img)}
      className={`relative w-full overflow-hidden rounded-2xl bg-slate-100 group
                  cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-amber-400
                  block text-left`}
      style={{ aspectRatio: tall ? "21/9" : "4/3" }}
      aria-label={`Phóng to: ${img.alt}`}
    >
      {/* ── Ảnh ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={img.alt}
        className="absolute inset-0 w-full h-full object-cover
                   transition-transform duration-500 group-hover:scale-[1.06]"
        loading="lazy"
      />

      {/* ── Gradient tĩnh (luôn hiện để badge đọc được) ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

      {/* ── Category badge — top left ── */}
      <div className="absolute top-2.5 left-2.5">
        <span className={`${img.categoryColor} text-[10px] font-bold px-2 py-1 rounded-lg`}>
          {img.category}
        </span>
      </div>

      {/* ── Caption slide-up — mặc định hiện 1 dòng, hover hiện đầy đủ ── */}
      <div className="absolute bottom-0 left-0 right-0 p-3
                      translate-y-1 group-hover:translate-y-0
                      transition-transform duration-300">
        <p className="text-white text-xs font-semibold leading-snug line-clamp-2 drop-shadow">
          {img.caption}
        </p>
      </div>

      {/* ── Zoom icon — center, chỉ hiện khi hover ── */}
      <div className="absolute inset-0 flex items-center justify-center
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg">
          <ZoomIn className="w-4 h-4 text-slate-700" />
        </div>
      </div>
    </button>
  );
}
