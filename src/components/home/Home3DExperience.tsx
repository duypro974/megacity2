"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Play,
  Pause,
  RotateCw,
  Maximize2,
  Minimize2,
  Layers,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Eye,
  MapPin,
  Building,
  Trees,
  Train,
  ShoppingBag,
  Volume2,
  VolumeX,
} from "lucide-react";
import { IMG_ONE_ERA } from "@/lib/cloudinary";

const VIDEO_3D_URL = "https://ik.imagekit.io/huubao/69c02d66-6851-4950-8d3a-a624051b8092.mp4";

interface Hotspot3D {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  accent: string;
  desc: string;
}

const HOTSPOTS_3D: Hotspot3D[] = [
  {
    id: "central-district",
    name: "Central District (357 Căn)",
    category: "Mở Bán Đợt 1",
    x: 48,
    y: 45,
    accent: "#dfb552",
    desc: "357 căn thấp tầng Townhouse & Shophouse đẳng cấp bậc nhất bên dòng Suối Cát.",
  },
  {
    id: "kinera-tower",
    name: "Tháp Đôi Kinera Tower",
    category: "Biểu Tượng Kiến Trúc",
    x: 15,
    y: 52,
    accent: "#35a3ce",
    desc: "Trung tâm tài chính thương mại & căn hộ hạng sang kết nối trực tiếp ga Metro.",
  },
  {
    id: "aeon-mall",
    name: "TTTM AEON Mall & Cầu Kén Vàng",
    category: "Thương Mại Chuẩn Nhật",
    x: 32,
    y: 54,
    accent: "#dd668c",
    desc: "Đại siêu thị quốc tế và cầu bộ hành ánh sáng kết nối xuyên suốt các phân khu.",
  },
  {
    id: "metro-station",
    name: "2 Ga Metro Tuyến 1B & 2B",
    category: "Đường Sắt Đô Thị",
    x: 18,
    y: 74,
    accent: "#5DA9DD",
    desc: "Kết nối thẳng về trung tâm TP.HCM chỉ trong 20 phút không khói bụi.",
  },
];

export default function Home3DExperience() {
  const [activeTab, setActiveTab] = useState<"video" | "360" | "map">("video");
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [is360Active, setIs360Active] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot3D>(HOTSPOTS_3D[0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mouse tilt effect state
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeTab === "360" && is360Active) return; // avoid tilt while interacting with 360 iframe
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.012);
    setRotateY(x * 0.012);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isVideoMuted;
    setIsVideoMuted(!isVideoMuted);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#06080e] text-white relative overflow-hidden border-t border-b border-white/[0.08]">
      {/* Dynamic ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#dfb552]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#35a3ce]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Decorative Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#dfb552 1px, transparent 1px), linear-gradient(90deg, #dfb552 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4 shadow-[0_0_20px_rgba(223,181,82,0.2)]">
            <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
            <span>Công Nghệ Trực Quan Độc Bản</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            TRẢI NGHIỆM ĐẠI ĐÔ THỊ <span className="bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] bg-clip-text text-transparent">3D THỰC TẾ ẢO</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Công nghệ mô phỏng không gian 3 chiều đỉnh cao. Dạo bước qua đại đô thị sinh thái kiểu mẫu <strong className="text-white font-semibold">ONE ERA</strong> và toàn cảnh các phân khu trọng điểm ngay trên màn hình của bạn.
          </p>

          {/* Interactive Mode Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            <button
              onClick={() => {
                setActiveTab("video");
                setIs360Active(false);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "video"
                  ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-[0_0_25px_rgba(223,181,82,0.4)] scale-105"
                  : "bg-[#0c121e] text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>Phim 3D Cinematic 1080p</span>
            </button>

            <button
              onClick={() => { setActiveTab("360"); setIs360Active(true); }}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "360"
                  ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-[0_0_25px_rgba(223,181,82,0.4)] scale-105"
                  : "bg-[#0c121e] text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Virtual Tour 360° Thực Tế</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("map");
                setIs360Active(false);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === "map"
                  ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] shadow-[0_0_25px_rgba(223,181,82,0.4)] scale-105"
                  : "bg-[#0c121e] text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Sơ Đồ Quy Hoạch 3D 50ha</span>
            </button>
          </div>
        </div>

        {/* 3D Interactive Stage Canvas */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: 1200,
          }}
          className="relative max-w-6xl mx-auto"
        >
          <div
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: "transform 0.15s ease-out",
            }}
            className={`relative rounded-3xl overflow-hidden border border-white/[0.15] bg-[#0c101a] shadow-[0_25px_80px_rgba(0,0,0,0.9)] ${
              isFullscreen ? "fixed inset-4 z-[999] rounded-2xl" : "aspect-[16/10] sm:aspect-[16/9] w-full"
            }`}
          >
            {/* ── Mode 1: Real 1080p 3D Flythrough Video ── */}
            {activeTab === "video" && (
              <div className="relative w-full h-full group">
                <video
                  ref={videoRef}
                  src={VIDEO_3D_URL}
                  autoPlay
                  loop
                  muted={isVideoMuted}
                  playsInline
                  poster={IMG_ONE_ERA.hero.sunset}
                  className="w-full h-full object-cover"
                />

                {/* Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080e]/90 via-transparent to-black/30 pointer-events-none" />

                {/* Floating Controls */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                  <button
                    onClick={toggleVideoPlayback}
                    className="p-3 rounded-full bg-black/75 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all shadow-lg hover:scale-105"
                    aria-label={isVideoPlaying ? "Tạm dừng" : "Phát video"}
                  >
                    {isVideoPlaying ? <Pause className="w-4 h-4 text-[#dfb552]" /> : <Play className="w-4 h-4 text-[#dfb552]" />}
                  </button>
                  <button
                    onClick={toggleSound}
                    className="p-3 rounded-full bg-black/75 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all shadow-lg hover:scale-105"
                    aria-label={isVideoMuted ? "Bật âm thanh" : "Tắt âm thanh"}
                  >
                    {isVideoMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-[#dfb552]" />}
                  </button>
                </div>

                {/* Overlay Title & Quick Link */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#dfb552] mb-1 block">
                      Flythrough 3D Siêu Đô Thị 50ha
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      ONE ERA BÌNH DƯƠNG • ĐẠI ĐÔ THỊ KIỂU MẪU
                    </h3>
                  </div>

                  <Link
                    href="/one-era"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] text-[#06080e] font-extrabold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <span>Khám Phá Chi Tiết One Era</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}

            {/* ── Mode 2: Official Virtual Tour 360° ── */}
            {activeTab === "360" && (
              <div className="relative w-full h-full">
                {is360Active ? (
                  <div className="relative w-full h-full">
                    <iframe
                      src="https://360.oneera.com.vn"
                      title="Virtual Tour 360 One Era - Kim Oanh Group"
                      className="w-full h-full border-0"
                      allow="accelerometer; gyroscope; magnetometer; xr-spatial-tracking; fullscreen"
                      allowFullScreen
                    />

                    {/* Top-Left: Brand Shield */}
                    <div className="absolute top-4 left-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 bg-[#06080e]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-xl">
                      <span className="w-2 h-2 rounded-full bg-[#dfb552] animate-ping" />
                      <span className="text-[11px] font-mono tracking-widest text-[#f5f2eb] uppercase font-bold">
                        KIM OANH GROUP • ĐẠI ĐÔ THỊ ONE ERA
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                      <Link
                        href="/one-era/360"
                        className="bg-black/80 hover:bg-[#dfb552] hover:text-black text-white px-3.5 py-2.5 rounded-full text-xs font-bold backdrop-blur-md border border-white/20 transition-all shadow-lg flex items-center gap-1.5"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Trang 360° Riêng</span>
                      </Link>
                      <button
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        className="bg-black/80 hover:bg-black text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-lg"
                        aria-label="Toàn màn hình"
                      >
                        {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => {
                          setIs360Active(false);
                          setIsFullscreen(false);
                        }}
                        className="bg-black/80 hover:bg-black text-white px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md border border-white/20 transition-all shadow-lg"
                      >
                        Đóng 360°
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full group">
                    <Image
                      src={IMG_ONE_ERA.hero.panorama}
                      alt="Virtual Tour 360 One Era"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      sizes="(max-width: 1200px) 100vw, 1100px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                      <div className="w-20 h-20 rounded-full bg-[#dfb552]/20 border border-[#dfb552]/50 backdrop-blur-md flex items-center justify-center mb-5 text-[#dfb552] shadow-[0_0_35px_rgba(223,181,82,0.4)] group-hover:scale-110 group-hover:bg-[#dfb552] group-hover:text-black transition-all">
                        <RotateCw className="w-8 h-8 animate-spin" style={{ animationDuration: "8s" }} />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#dfb552] font-bold mb-2">
                        KrPano & WebGL Engine
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                        Xoay Chuyển 360° Không Gian Thực Tế
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-md mb-6 font-light">
                        Quan sát trục đại lộ 25m, tháp đôi Kinera, đại siêu thị AEON Mall và toàn cảnh 50ha từ độ cao 200m.
                      </p>
                      <button
                        onClick={() => setIs360Active(true)}
                        className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] text-[#06080e] font-extrabold text-xs uppercase tracking-wider shadow-[0_10px_35px_rgba(223,181,82,0.35)] hover:scale-105 transition-all flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Bật Trải Nghiệm 360° Ngay</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── Mode 3: Interactive 3D Hotspot Map ── */}
            {activeTab === "map" && (
              <div className="relative w-full h-full select-none">
                <Image
                  src={IMG_ONE_ERA.masterPlan.topView}
                  alt="Sơ đồ 3D One Era"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1100px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Hotspots */}
                {HOTSPOTS_3D.map((spot) => {
                  const isSelected = activeHotspot.id === spot.id;
                  return (
                    <div
                      key={spot.id}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                      onClick={() => setActiveHotspot(spot)}
                    >
                      <span
                        className={`absolute -inset-2 rounded-full transition-all duration-500 ${
                          isSelected ? "animate-ping opacity-75" : "opacity-0 group-hover:opacity-40"
                        }`}
                        style={{ backgroundColor: spot.accent }}
                      />
                      <div
                        className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl border ${
                          isSelected
                            ? "scale-125 border-white text-black shadow-[0_0_20px_#fff]"
                            : "border-white/40 text-white hover:scale-110 shadow-black/80"
                        }`}
                        style={{
                          backgroundColor: isSelected ? spot.accent : "rgba(10, 14, 23, 0.85)",
                        }}
                      >
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full mt-1.5 whitespace-nowrap px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider backdrop-blur-md border border-white/20 transition-all ${
                          isSelected ? "bg-slate-950 text-white font-bold border-amber-400" : "bg-black/80 text-slate-300 opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        {spot.name}
                      </div>
                    </div>
                  );
                })}

                {/* Active Hotspot Bottom Detail Box */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-30">
                  <div className="rounded-2xl bg-[#0c121e]/95 border border-white/20 backdrop-blur-xl p-4 shadow-2xl text-left">
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-widest block mb-1"
                      style={{ color: activeHotspot.accent }}
                    >
                      {activeHotspot.category}
                    </span>
                    <h4 className="text-base font-extrabold text-white mb-1">{activeHotspot.name}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">{activeHotspot.desc}</p>
                    <Link
                      href="/one-era"
                      className="text-xs font-bold text-[#dfb552] hover:underline flex items-center gap-1"
                    >
                      <span>Xem toàn bộ quy hoạch One Era</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Spotlight Feature Bar: 3 Flagship Projects */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link
            href="/one-era"
            className="p-5 rounded-2xl bg-[#0c121e]/60 hover:bg-[#0c121e] border border-white/[0.08] hover:border-[#dfb552]/40 transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#dfb552]/10 text-[#dfb552] border border-[#dfb552]/30 uppercase">
                50ha • Chuẩn Quốc Tế
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#dfb552] group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="font-extrabold text-white text-base group-hover:text-[#dfb552] transition-colors mb-1">
              One Era Bình Dương
            </h4>
            <p className="text-xs text-slate-400 font-light line-clamp-2">
              Khu đô thị kiểu mẫu thế hệ mới hợp tác cùng 3 tập đoàn Nhật Bản. Mở bán 357 căn Central District.
            </p>
          </Link>

          <Link
            href="/the-link-city"
            className="p-5 rounded-2xl bg-[#0c121e]/60 hover:bg-[#0c121e] border border-white/[0.08] hover:border-amber-400/40 transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase">
                Ngã Tư Dầu Giây
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="font-extrabold text-white text-base group-hover:text-amber-400 transition-colors mb-1">
              The Link City Dầu Giây
            </h4>
            <p className="text-xs text-slate-400 font-light line-clamp-2">
              KDC A1-C1 ngã tư QL1A & QL20. Sổ hồng trao tay, 50+ tiện ích nội khu, ngân hàng VietinBank hỗ trợ vay 70%.
            </p>
          </Link>

          <Link
            href="/mega-city-2"
            className="p-5 rounded-2xl bg-[#0c121e]/60 hover:bg-[#0c121e] border border-white/[0.08] hover:border-emerald-400/40 transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase">
                Nhơn Trạch • 84ha
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </div>
            <h4 className="font-extrabold text-white text-base group-hover:text-emerald-400 transition-colors mb-1">
              Mega City 2 Nhơn Trạch
            </h4>
            <p className="text-xs text-slate-400 font-light line-clamp-2">
              Đô thị sinh thái kề cận tuyến Vành Đai 3, cầu Nhơn Trạch và sân bay quốc tế Long Thành.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
