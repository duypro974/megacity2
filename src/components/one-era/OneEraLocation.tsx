"use client";

import Image from "next/image";
import { MapPin, Navigation, Train, Compass, Clock, CheckCircle2, ZoomIn } from "lucide-react";
import { ONE_ERA_DATA } from "@/data/oneEraData";
import { IMG_ONE_ERA } from "@/lib/cloudinary";

interface Props {
  onOpenImage?: (src: string, alt: string) => void;
}

export default function OneEraLocation({ onOpenImage }: Props) {
  const loc = ONE_ERA_DATA.locationConnectivity;

  return (
    <section id="vi-tri" className="py-20 lg:py-28 bg-[#06080e] text-[#f5f2eb] relative overflow-hidden border-b border-white/[0.06]">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#35a3ce]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#dfb552]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Tọa Độ Kim Cương Kết Nối</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            VỊ TRÍ CHIẾN LƯỢC & <span className="bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] bg-clip-text text-transparent">TAM GIAO HUYẾT MẠCH</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Nằm ngay ngã ba giao thương sầm uất tại trung tâm TP. Thuận An, One Era sở hữu hạ tầng giao thông đa tầng với 3 trục đại lộ đối ngoại và 2 tuyến Metro trong tương lai.
          </p>
        </div>

        {/* Top Connectivity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Map Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl group bg-[#0c101a]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={IMG_ONE_ERA.masterPlan.tamGiao}
                  alt="Sơ đồ vị trí kết nối giao thông tam giao One Era Bình Dương"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Map Badge */}
              <div className="absolute top-4 left-4 bg-[#06080e]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-xs font-mono font-bold text-[#dfb552] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#dd668c]" />
                <span>Mặt tiền QL13 & Nguyễn Thị Minh Khai, Thuận An</span>
              </div>

              {onOpenImage && (
                <button
                  onClick={() => onOpenImage(IMG_ONE_ERA.masterPlan.tamGiao, "Bản đồ liên kết giao thông One Era")}
                  className="absolute bottom-4 right-4 bg-[#0c121e]/90 hover:bg-[#dfb552] hover:text-[#06080e] text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-lg"
                  aria-label="Phóng to bản đồ vị trí"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              )}
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center italic">
              * Bản đồ kết nối liên vùng 3 tuyến bộ & 2 tuyến Metro bao quanh dự án ONE ERA
            </p>
          </div>

          {/* Highways & Metro List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0c121e]/85 border border-white/[0.08] backdrop-blur-xl">
              <h3 className="text-sm font-bold text-[#dfb552] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#dfb552]" />
                <span>3 Tuyến Đường Bộ Huyết Mạch</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {loc.highways.slice(0, 3).map((h) => (
                  <li key={h.name} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#58aeb4] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-semibold">{h.name}:</strong>{" "}
                      <span className="text-slate-400 font-light">{h.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b1424]/85 border border-[#35a3ce]/30 backdrop-blur-xl">
              <h3 className="text-sm font-bold text-[#35a3ce] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Train className="w-4 h-4 text-[#35a3ce]" />
                <span>2 Tuyến Metro Tương Lai Kề Cận</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                {loc.metroLines.map((m) => (
                  <li key={m.line} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#35a3ce] flex-shrink-0 mt-1.5 shadow-[0_0_8px_#35a3ce]" />
                    <div>
                      <strong className="text-white font-semibold">{m.line}:</strong>{" "}
                      <span className="text-slate-400 font-light">{m.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Travel Time Indicators */}
        <div className="bg-[#0c121e]/80 border border-white/[0.08] rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          <h3 className="text-base sm:text-lg font-bold text-white mb-8 text-center flex items-center justify-center gap-2 uppercase tracking-wide">
            <Clock className="w-4 h-4 text-[#dfb552]" />
            <span>Thời Gian Di Chuyển Đến Các Điểm Trọng Yếu</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {loc.times.map((t) => (
              <div key={t.minutes} className="p-5 rounded-2xl bg-[#06080e]/80 border border-white/[0.08] text-center hover:border-[#dfb552]/40 transition-all">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#dfb552] mb-1 font-mono">
                  {t.minutes} <span className="text-xs font-sans font-semibold text-slate-300">{t.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {t.dest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
