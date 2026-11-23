"use client";

import { useState } from "react";
import {
  Play,
  Pause,
  Video,
  Image as ImageIcon,
  Building2,
  CheckCircle2,
  Calendar,
  Sparkles,
  X,
  Maximize2,
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";
import {
  PROGRESS_UPDATE_DATE,
  LATEST_PROGRESS_VIDEOS,
  LATEST_PROGRESS_PHOTOS,
  NOXH_AVENUE_HIGHLIGHT,
  type ProgressMediaItem,
} from "@/data/megaCity2Progress2026";

export default function MegaCity2LatestProgressShowcase({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [activeVideoId, setActiveVideoId] = useState(LATEST_PROGRESS_VIDEOS[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<ProgressMediaItem | null>(null);

  const currentVideo =
    LATEST_PROGRESS_VIDEOS.find((v) => v.id === activeVideoId) || LATEST_PROGRESS_VIDEOS[0];

  return (
    <div className="space-y-8">
      {/* ── Tiêu đề & Badge ngày cập nhật ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>CẬP NHẬT THỰC ĐỊA MỚI NHẤT: {PROGRESS_UPDATE_DATE}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Tiến Độ Thực Tế Đất Nền &amp; Thi Công NOXH K-Home Avenue
          </h3>
        </div>
        <div className="text-xs text-slate-500 flex items-center gap-1.5 self-start sm:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Hình ảnh &amp; Video 100% ghi nhận tại thực địa dự án</span>
        </div>
      </div>

      {/* ── Khối thông tin cốt lõi: 20% Quỹ đất xây dựng NOXH K-Home Avenue ── */}
      <div className="bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        {/* Glow hiệu ứng nền */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {NOXH_AVENUE_HIGHLIGHT.tag}
            </span>
            <span className="text-emerald-300 text-xs font-semibold">
              Khu dân cư Phú Hội · Mega City 2 Nhơn Trạch
            </span>
          </div>

          <h4 className="text-xl sm:text-2xl font-black text-white leading-tight mb-3">
            {NOXH_AVENUE_HIGHLIGHT.title}
          </h4>

          <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-4xl">
            {NOXH_AVENUE_HIGHLIGHT.description} Hiện tại, tổng thầu quốc tế{" "}
            <strong className="text-emerald-400">Handong E&amp;C</strong> đang vận hành{" "}
            <strong className="text-white">2 cần cẩu tháp</strong> khẩn trương đổ sàn các tầng nổi,
            đưa toàn bộ dự án bước vào giai đoạn thi công sôi động nhất.
          </p>

          {/* 4 trụ cột phân tích giá trị */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2.5">
                <Building2 className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-white text-sm mb-1">2 cẩu tháp vận hành</h5>
              <p className="text-slate-300 text-xs leading-relaxed">
                Thi công thần tốc kết cấu tầng nổi, công nhân làm việc liên tục trên đại công trường.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-2.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-white text-sm mb-1">Bảo chứng pháp lý</h5>
              <p className="text-slate-300 text-xs leading-relaxed">
                Minh chứng rõ ràng cho tính pháp lý hoàn chỉnh theo QĐ 2979/QĐ-UBND của tỉnh Đồng Nai.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2.5">
                <Users className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-white text-sm mb-1">Kéo 1.000+ hộ dân</h5>
              <p className="text-slate-300 text-xs leading-relaxed">
                Hơn 1.000 căn hộ hoàn thiện sẽ đưa hàng ngàn cư dân về sinh sống, tạo cộng đồng sầm uất.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-2.5">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h5 className="font-bold text-white text-sm mb-1">Gia tăng giá đất nền</h5>
              <p className="text-slate-300 text-xs leading-relaxed">
                Hạ tầng và dòng người ở thực giải quyết dứt điểm nỗi lo đất trống, thúc đẩy giá trị đất nền.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Video Thực Địa & Công Trường ── */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-emerald-600" />
            <h4 className="font-bold text-slate-900 text-base sm:text-lg">
              Video Thực Địa Quay Tại Mega City 2 (Cập nhật {PROGRESS_UPDATE_DATE})
            </h4>
          </div>

          {/* Tab chọn video */}
          <div className="flex items-center gap-1.5 bg-slate-200/80 p-1 rounded-xl self-start sm:self-auto">
            {LATEST_PROGRESS_VIDEOS.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => {
                  setActiveVideoId(v.id);
                  setIsPlaying(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeVideoId === v.id
                    ? "bg-white text-emerald-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {v.title}
              </button>
            ))}
          </div>
        </div>

        {/* Video Player chính */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-video max-h-[460px] flex items-center justify-center">
          <video
            key={currentVideo.src}
            controls
            playsInline
            poster={currentVideo.poster}
            className="w-full h-full object-contain"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={currentVideo.src} type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
        </div>

        <div className="mt-3 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-slate-800">{currentVideo.title}</p>
            <p className="text-xs text-slate-500 mt-0.5">{currentVideo.caption}</p>
          </div>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md shrink-0">
            {currentVideo.badge}
          </span>
        </div>
      </div>

      {/* ── Bộ ảnh thực tế mới nhất 23/11/2026 ── */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-emerald-600" />
            <h4 className="font-bold text-slate-900 text-base sm:text-lg">
              Bộ Ảnh Thực Tế Ngày {PROGRESS_UPDATE_DATE}
            </h4>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            (Bấm vào ảnh để phóng to)
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {LATEST_PROGRESS_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightboxItem(photo)}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer aspect-[4/3] flex flex-col"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Badge trên ảnh */}
              {photo.badge && (
                <div className="absolute top-2.5 left-2.5">
                  <span className="bg-emerald-600/90 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                    {photo.badge}
                  </span>
                </div>
              )}

              {/* Icon phóng to */}
              <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Chú thích dưới ảnh */}
              <div className="absolute bottom-2.5 inset-x-2.5">
                <p className="text-white text-xs font-bold leading-tight truncate">
                  {photo.title}
                </p>
                <p className="text-white/70 text-[10px] mt-0.5 line-clamp-1">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Modal Lightbox phóng to ảnh ── */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nút đóng */}
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Ảnh lớn */}
            <div className="max-h-[75vh] flex items-center justify-center bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Thông tin ảnh */}
            <div className="p-4 sm:p-5 bg-slate-900 border-t border-white/10 text-white">
              <div className="flex items-center gap-2 mb-1">
                {lightboxItem.badge && (
                  <span className="bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                    {lightboxItem.badge}
                  </span>
                )}
                <span className="text-xs text-slate-400">Ghi nhận: {lightboxItem.date}</span>
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                {lightboxItem.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
