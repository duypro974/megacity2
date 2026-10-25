"use client";

/**
 * SaBanGallery — Redesigned Editorial Architecture
 * ─────────────────────────────────────────────────────────────────────────────
 * • 8 ảnh sa bàn chia chuẩn 3 chuyên mục cân bằng (2 Toàn cảnh, 3 Shophouse & Nhà phố, 3 Tiện ích & Cảnh quan)
 * • Badge danh mục ăn khớp 100% với từng tab, loại bỏ hoàn toàn tình trạng sai lệch
 * • Lightbox đồng bộ chính xác với bộ lọc đang chọn (đếm đúng 1/3, 1/8...)
 * • Aspect ratio đồng nhất 4:3, responsive layout chuẩn không xê dịch
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useState, useMemo, useCallback } from "react";
import { ZoomIn, Camera } from "lucide-react";
import { useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { TLC_SABAN } from "@/lib/cloudinary";

type FilterKey = "tat-ca" | "toan-canh" | "shophouse" | "tien-ich";

interface SaBanImage extends LightboxImage {
  id: string;
  filterKey: "toan-canh" | "shophouse" | "tien-ich";
  title: string;
  category: string;
  categoryColor: string;
}

const SABAN_IMAGES: SaBanImage[] = [
  // ── NHÓM 1: TOÀN CẢNH (2 ảnh) ──
  {
    id: "toan-canh-45",
    src: TLC_SABAN["1"],
    alt: "Sa bàn toàn cảnh quy hoạch dự án The Link City Dầu Giây Đồng Nai",
    title: "Toàn Cảnh Quy Hoạch 45°",
    caption: "Toàn cảnh sa bàn The Link City góc nhìn 45° — đồng bộ hạ tầng và giao thông",
    filterKey: "toan-canh",
    category: "Toàn cảnh",
    categoryColor: "bg-amber-400 text-slate-950 font-bold",
  },
  {
    id: "toan-canh-gd2",
    src: TLC_SABAN["7"],
    alt: "Sa bàn toàn cảnh 2 giai đoạn The Link City Dầu Giây",
    title: "Layout Tổng Thể 2 Giai Đoạn",
    caption: "Quy hoạch phân kỳ 2 giai đoạn — kết nối cụm tiện ích sân bóng, trường học và công viên",
    filterKey: "toan-canh",
    category: "Toàn cảnh",
    categoryColor: "bg-amber-400 text-slate-950 font-bold",
  },

  // ── NHÓM 2: SHOPHOUSE & NHÀ PHỐ (3 ảnh) ──
  {
    id: "truc-shophouse",
    src: TLC_SABAN["2"],
    alt: "Góc sa bàn trục shophouse thương mại The Link City",
    title: "Đại Lộ Shophouse Thương Mại",
    caption: "Trục đường đôi giao thương huyết mạch — dãy shophouse kinh doanh sầm uất",
    filterKey: "shophouse",
    category: "Shophouse",
    categoryColor: "bg-orange-500 text-white font-bold",
  },
  {
    id: "biet-thu",
    src: TLC_SABAN["4"],
    alt: "Sa bàn khu nhà phố và biệt thự The Link City",
    title: "Khu Nhà Phố & Biệt Thự",
    caption: "Phân khu nhà phố vườn liền kề và biệt thự sinh thái biệt lập BT32 - BT35",
    filterKey: "shophouse",
    category: "Nhà phố",
    categoryColor: "bg-orange-500 text-white font-bold",
  },
  {
    id: "shophouse-thuc-te",
    src: TLC_SABAN["10"],
    alt: "Shophouse hoàn thiện thực tế tại The Link City Dầu Giây",
    title: "Shophouse Xây Sẵn Hoàn Thiện",
    caption: "Thực tế dãy shophouse đã hoàn thành mặt ngoài, mặt tiền kinh doanh tầng trệt",
    filterKey: "shophouse",
    category: "Thực tế",
    categoryColor: "bg-rose-500 text-white font-bold",
  },

  // ── NHÓM 3: TIỆN ÍCH & CẢNH QUAN (3 ảnh) ──
  {
    id: "clubhouse",
    src: TLC_SABAN["3"],
    alt: "Sa bàn clubhouse và trường học The Link City",
    title: "Clubhouse & Trường Liên Cấp",
    caption: "Tổ hợp Clubhouse đa năng và hệ thống trường học liên cấp tại trung tâm khu đô thị",
    filterKey: "tien-ich",
    category: "Tiện ích",
    categoryColor: "bg-emerald-600 text-white font-bold",
  },
  {
    id: "the-thao",
    src: TLC_SABAN["5"],
    alt: "Sa bàn khu thể thao và tiện ích The Link City",
    title: "Khu Thể Thao Ngoài Trời",
    caption: "Cụm tiện ích rèn luyện sức khỏe gồm sân thể thao ngoài trời và đường chạy bộ",
    filterKey: "tien-ich",
    category: "Tiện ích",
    categoryColor: "bg-emerald-600 text-white font-bold",
  },
  {
    id: "nut-giao-ql1a",
    src: TLC_SABAN["6"],
    alt: "Sa bàn công viên hồ bơi The Link City cạnh Quốc lộ 1A",
    title: "Hồ Bơi & Công Viên Cảnh Quan",
    caption: "Quần thể hồ bơi vô cực và công viên cảnh quan kết nối ngã tư Quốc lộ 1A",
    filterKey: "tien-ich",
    category: "Tiện ích",
    categoryColor: "bg-emerald-600 text-white font-bold",
  },
];

const FILTERS: { key: FilterKey; label: string; emoji: string }[] = [
  { key: "tat-ca",    label: "Tất cả",              emoji: "🗺️" },
  { key: "toan-canh", label: "Toàn cảnh",            emoji: "🛸" },
  { key: "shophouse", label: "Shophouse & Nhà phố",  emoji: "🏪" },
  { key: "tien-ich",  label: "Tiện ích & Cảnh quan", emoji: "🌳" },
];

export default function SaBanGallery() {
  const [active, setActive] = useState<FilterKey>("tat-ca");

  const filtered = useMemo(
    () => (active === "tat-ca" ? SABAN_IMAGES : SABAN_IMAGES.filter((img) => img.filterKey === active)),
    [active]
  );

  const lb = useLightbox(filtered as LightboxImage[]);

  const open = useCallback(
    (img: SaBanImage) => {
      const idx = filtered.findIndex((m) => m.id === img.id);
      lb.openLightbox(idx >= 0 ? idx : 0);
    },
    [filtered, lb]
  );

  return (
    <div className="w-full">
      {lb.LightboxPortal}

      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
            <Camera className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-800 leading-tight">
              Bộ Sưu Tập Sa Bàn Kiến Trúc 3D
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              8 góc chụp chi tiết mô hình tỷ lệ thực tế · Click ảnh để phóng to toàn màn hình
            </p>
          </div>
        </div>
      </div>

      {/* ── Filter tabs ── */}
      <div
        role="tablist"
        className="flex gap-2 mb-6 overflow-x-auto no-scrollbar pb-1"
      >
        {FILTERS.map((f) => {
          const count =
            f.key === "tat-ca"
              ? SABAN_IMAGES.length
              : SABAN_IMAGES.filter((img) => img.filterKey === f.key).length;
          const isActive = active === f.key;
          return (
            <button
              key={f.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(f.key)}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex-shrink-0 cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/15"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              <span>{f.emoji}</span>
              <span>{f.label}</span>
              <span
                className={`text-[10px] sm:text-xs font-bold tabular-nums min-w-[18px] text-center px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-amber-400 text-slate-950 font-extrabold" : "bg-white text-slate-500 shadow-sm"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Grid Gallery ── */}
      <div
        className={`grid grid-cols-2 ${
          filtered.length === 3
            ? "sm:grid-cols-3 max-w-4xl"
            : filtered.length === 2
            ? "sm:grid-cols-2 max-w-2xl"
            : "sm:grid-cols-2 lg:grid-cols-4"
        } gap-3.5 sm:gap-4 mx-auto`}
      >
        {filtered.map((img) => (
          <GalleryCard key={img.id} img={img} onOpen={open} />
        ))}
      </div>

      {/* ── Footer caption ── */}
      <p className="mt-5 text-[11px] text-slate-400 text-center italic">
        Ảnh chụp tại Showroom Kim Oanh Land · Sa bàn mô hình quy hoạch dự án The Link City, Dầu Giây, Đồng Nai
      </p>
    </div>
  );
}

/* ─── GalleryCard Component ──────────────────────────────────────────────── */
function GalleryCard({
  img,
  onOpen,
}: {
  img: SaBanImage;
  onOpen: (img: SaBanImage) => void;
}) {
  return (
    <button
      onClick={() => onOpen(img)}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-300/80 transition-all duration-300 hover:-translate-y-1 group block text-left cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-amber-500"
      aria-label={`Phóng to ảnh: ${img.title}`}
    >
      {/* Ảnh chính */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={img.alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Gradient phủ để đọc chữ rõ ràng */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 group-hover:from-black/90 transition-all duration-300" />

      {/* Category badge — góc trên trái */}
      <div className="absolute top-2.5 left-2.5 z-10">
        <span className={`${img.categoryColor} text-[10px] sm:text-[11px] px-2.5 py-1 rounded-lg shadow-sm tracking-wide`}>
          {img.category}
        </span>
      </div>

      {/* Zoom icon xuất hiện khi hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-xl text-slate-800 scale-90 group-hover:scale-100 transition-transform">
          <ZoomIn className="w-4 h-4 text-slate-800" />
        </div>
      </div>

      {/* Caption nằm gọn đáy card */}
      <div className="absolute bottom-0 inset-x-0 p-3 sm:p-3.5 z-10">
        <h4 className="text-white text-xs sm:text-sm font-bold leading-snug drop-shadow line-clamp-1">
          {img.title}
        </h4>
        <p className="text-white/80 text-[11px] leading-tight mt-1 line-clamp-1 group-hover:line-clamp-2 transition-all">
          {img.caption}
        </p>
      </div>
    </button>
  );
}
