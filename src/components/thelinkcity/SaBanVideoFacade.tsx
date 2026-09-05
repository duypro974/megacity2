"use client";

/**
 * SaBanVideoFacade — v4 native controls
 * ─────────────────────────────────────────────────────────────────────────────
 * Dùng native browser controls — không gọi play() bằng JS.
 * Poster hiện trước, khi click mới mount <video controls>.
 * Browser tự handle việc phát — không có AbortError.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useState, useCallback } from "react";
import { Play } from "lucide-react";
import { TLC_SABAN, TLC_SABAN_VIDEO } from "@/lib/cloudinary";

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Video sa bàn quy hoạch dự án The Link City Dầu Giây",
  description: "Toàn cảnh sa bàn dự án The Link City tại Dầu Giây, Đồng Nai: Trục giao thương Shophouse, cụm tiện ích thể thao, công viên trung tâm và khu nhà phố biệt thự.",
  uploadDate: "2026-09-05",
  thumbnailUrl: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit/thelinkcity/real1/7",
  contentUrl: "https://kimoanhdongnai.com.vn/the%20link/real1/11.mp4",
  embedUrl: "https://kimoanhdongnai.com.vn/the-link-city#hinh-anh",
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
};

const CLIPS = [
  { id: "toan-canh",   label: "Toàn cảnh sa bàn", src: TLC_SABAN_VIDEO.clip9,  poster: TLC_SABAN["7"] },
  { id: "giao-thuong", label: "Góc giao thương",   src: TLC_SABAN_VIDEO.clip8,  poster: TLC_SABAN["2"] },
  { id: "tien-ich",    label: "Góc tiện ích",       src: TLC_SABAN_VIDEO.clip11, poster: TLC_SABAN["3"] },
];

export default function SaBanVideoFacade() {
  const [activeClip, setActiveClip] = useState(0);
  const [started,    setStarted]    = useState(false);

  const handleSelectClip = useCallback((idx: number) => {
    if (idx === activeClip) return;
    setActiveClip(idx);
    setStarted(false);
  }, [activeClip]);

  const clip = CLIPS[activeClip];

  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />

      <div className="w-full">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-base font-bold text-slate-800">
            Video Trải Nghiệm Sa Bàn Thực Tế Dự Án The Link City
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Quét toàn bộ mô hình kiến trúc — nhấn Play để xem
          </p>
        </div>

        {/* Tab chọn clip */}
        <div className="flex gap-2 mb-3 flex-wrap">
          {CLIPS.map((c, i) => (
            <button key={c.id} onClick={() => handleSelectClip(i)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all
                ${i === activeClip
                  ? "bg-amber-400 text-slate-900 border-amber-400"
                  : "bg-white text-slate-500 border-slate-200 hover:border-amber-300"}`}>
              {c.label}
            </button>
          ))}
        </div>

        {/* Container 16:9 */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900 shadow-xl"
             style={{ aspectRatio: "16 / 9" }}>

          {/* FACADE — poster + nút Play */}
          {!started && (
            <div className="absolute inset-0 z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={clip.poster} alt={`Poster ${clip.label}`}
                className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/10" />
              <button onClick={() => setStarted(true)} aria-label="Phát video sa bàn"
                className="absolute inset-0 flex items-center justify-center group">
                <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-400
                                 shadow-2xl shadow-amber-400/50 flex items-center justify-center
                                 group-hover:bg-amber-300 group-hover:scale-110 transition-all duration-200">
                  <Play className="w-7 h-7 md:w-9 md:h-9 text-slate-900 ml-1" fill="currentColor" />
                </span>
              </button>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  🎬 {clip.label} · Sa bàn The Link City
                </span>
                <span className="bg-amber-400/90 text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-full">
                  Nhấn để xem
                </span>
              </div>
            </div>
          )}

          {/* VIDEO với native controls — browser tự handle play/pause/fullscreen */}
          {started && (
            /* eslint-disable-next-line jsx-a11y/media-has-caption */
            <video
              key={clip.src}
              className="absolute inset-0 w-full h-full"
              src={clip.src}
              poster={clip.poster}
              controls
              playsInline
              preload="metadata"
            />
          )}
        </div>

        <p className="mt-2 text-[11px] text-slate-400 text-center">
          Mô hình sa bàn kiến trúc The Link City · Showroom Kim Oanh Land, Dầu Giây, Đồng Nai
        </p>
      </div>
    </>
  );
}
