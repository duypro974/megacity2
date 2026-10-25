"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Download,
  ShieldCheck,
  Building,
  Trees,
  Compass,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Layers,
  Eye,
  Maximize2,
} from "lucide-react";
import { IMG_ONE_ERA } from "@/lib/cloudinary";

const VIDEO_3D_URL = "https://ik.imagekit.io/huubao/69c02d66-6851-4950-8d3a-a624051b8092.mp4";

const SLIDES = [
  {
    title: "Hoàng Hôn Thượng Đỉnh",
    subtitle: "Tầm nhìn biểu tượng hướng về trung tâm Thành phố Hồ Chí Minh",
    url: IMG_ONE_ERA.hero.sunset,
    alt: "Phối cảnh hoàng hôn siêu dự án One Era Bình Dương",
  },
  {
    title: "Toàn Cảnh 50 Hécta Về Đêm",
    subtitle: "Quy hoạch đại đô thị sinh thái 50ha lung linh rực sáng Đông Bắc Sài Gòn",
    url: IMG_ONE_ERA.hero.nightTowers,
    alt: "Toàn cảnh 50ha master plan về đêm One Era Kim Oanh",
  },
  {
    title: "Đêm Huyền Diệu Tháp Đôi Kinera",
    subtitle: "Quần thể cao ốc kết hợp đại siêu thị AEON Mall và Cầu Kén Vàng Mizuhiki",
    url: IMG_ONE_ERA.hero.kineraTowers,
    alt: "Phối cảnh đêm tháp đôi Kinera Tower và TTTM AEON Mall One Era",
  },
  {
    title: "Đại Lộ Phồn Hoa One Era (25m)",
    subtitle: "Trục đại lộ giao thương sầm uất với các dãy phố thương mại thịnh vượng",
    url: IMG_ONE_ERA.hero.boulevard,
    alt: "Đại lộ thương mại sầm uất và cầu đi bộ biểu tượng tại One Era",
  },
];

export default function OneEraHero() {
  const [useVideo, setUseVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Cycle image slides if not using video
  useEffect(() => {
    if (useVideo) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [useVideo]);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#06080e] text-white pt-24 pb-16">
      {/* Background Media Layer */}
      <div className="absolute inset-0 z-0">
        {useVideo ? (
          /* Real 1080p 3D Flythrough Video */
          <div className="relative w-full h-full overflow-hidden">
            <video
              ref={videoRef}
              src={VIDEO_3D_URL}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster={IMG_ONE_ERA.hero.sunset}
              className="w-full h-full object-cover scale-105"
            />
          </div>
        ) : (
          /* 4K Still Images Carousel */
          SLIDES.map((slide, idx) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              } transform transition-transform duration-[7000ms]`}
            >
              <Image
                src={slide.url}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className="object-cover object-center"
                sizes="100vw"
                quality={90}
              />
            </div>
          ))
        )}

        {/* Luminous Warm Horizon Overlay — sáng, rực rỡ, không bị đen vùng header */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(180deg, rgba(8,12,20,0.50) 0%, rgba(8,12,20,0.15) 25%, rgba(8,12,20,0.55) 75%, rgba(6,8,14,0.98) 100%),
              radial-gradient(ellipse at top right, rgba(223,181,82,0.22) 0%, transparent 65%)
            `,
          }}
        />
      </div>

      {/* Floating Media Controls (Top Right on desktop / absolute bottom on mobile) */}
      <div className="absolute top-24 right-4 sm:right-8 z-30 flex items-center gap-2">
        {/* Toggle Video / Photo Mode */}
        <button
          onClick={() => setUseVideo(!useVideo)}
          className="px-3.5 py-1.5 rounded-full bg-[#0c121e]/80 hover:bg-[#0c121e] text-white text-xs font-mono tracking-wider backdrop-blur-md border border-white/15 transition-all flex items-center gap-2 shadow-lg"
          title="Chuyển chế độ hiển thị 3D Video / Ảnh 4K"
        >
          <Layers className="w-3.5 h-3.5 text-[#dfb552]" />
          <span className="hidden sm:inline">{useVideo ? "Chế độ: 3D Flythrough" : "Chế độ: Ảnh 4K"}</span>
          <span className="sm:hidden">{useVideo ? "3D Video" : "Ảnh 4K"}</span>
        </button>

        {useVideo && (
          <>
            <button
              onClick={toggleVideoPlayback}
              className="p-2 rounded-full bg-[#0c121e]/80 hover:bg-[#0c121e] text-white backdrop-blur-md border border-white/15 transition-all shadow-lg"
              aria-label={isPlaying ? "Tạm dừng video" : "Phát video"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#dfb552]" /> : <Play className="w-3.5 h-3.5 text-[#dfb552]" />}
            </button>
            <button
              onClick={toggleSound}
              className="p-2 rounded-full bg-[#0c121e]/80 hover:bg-[#0c121e] text-white backdrop-blur-md border border-white/15 transition-all shadow-lg"
              aria-label={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-400" /> : <Volume2 className="w-3.5 h-3.5 text-[#dfb552]" />}
            </button>
          </>
        )}
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
        <div className="max-w-4xl">
          {/* Official One Era Brand Logo & Japanese Heritage Pill */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="relative w-14 h-16 sm:w-16 sm:h-20 flex-shrink-0 drop-shadow-[0_10px_25px_rgba(223,181,82,0.35)]">
              <Image
                src={IMG_ONE_ERA.logo}
                alt="Logo chính thức đại đô thị One Era Bình Dương"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 backdrop-blur-xl shadow-xl shadow-black/40">
              <span className="w-2 h-2 rounded-full bg-[#dfb552] animate-ping" />
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#dfb552]">
                Đại Đô Thị Kiểu Mẫu • Kim Oanh Group & 3 Tập Đoàn Nhật Bản
              </span>
            </div>
          </div>

          {/* Main H1 Title - Japanese Luxury Minimalist */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 drop-shadow-2xl font-sans">
            <span className="block text-[#f5f2eb]">KHU ĐÔ THỊ KIỂU MẪU</span>
            <span className="block bg-gradient-to-r from-[#dfb552] via-[#fff3d4] to-[#c99e39] bg-clip-text text-transparent">
              ONE ERA BÌNH DƯƠNG
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8 drop-shadow">
            Đại đô thị sinh thái thông minh chuẩn Nhật Bản quy mô gần{" "}
            <strong className="text-[#dfb552] font-semibold">50 Hécta</strong> với tổng vốn đầu tư{" "}
            <strong className="text-[#dfb552] font-semibold">Quy Chuẩn Quốc Tế</strong>. Sở hữu vị trí độc tôn ngã ba sông Suối Cát, trực tiếp kết nối Vành Đai 3 và{" "}
            <strong className="text-[#dfb552] font-semibold">2 tuyến Metro tương lai</strong>.
          </p>

          {/* Key Stat Badges - Obsidian Glassmorphism */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-3xl">
            <div className="p-4 rounded-2xl bg-[#0c121e]/85 border border-white/[0.08] hover:border-[#dfb552]/40 backdrop-blur-xl transition-all shadow-lg group">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#dfb552] mb-1 font-mono group-hover:scale-105 transition-transform">
                ~50 ha
              </div>
              <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                <Trees className="w-3.5 h-3.5 text-[#58aeb4]" />
                <span>Quy mô đại đô thị</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0c121e]/85 border border-white/[0.08] hover:border-[#dfb552]/40 backdrop-blur-xl transition-all shadow-lg group">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#dfb552] mb-1 font-mono group-hover:scale-105 transition-transform">
                Fitwel 3★
              </div>
              <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#dfb552]" />
                <span>Chuẩn sống quốc tế</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0c121e]/85 border border-white/[0.08] hover:border-[#dfb552]/40 backdrop-blur-xl transition-all shadow-lg group">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#dfb552] mb-1 font-mono group-hover:scale-105 transition-transform">
                3 Tập Đoàn
              </div>
              <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#35a3ce]" />
                <span>Nhật Bản đồng phát triển</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0c121e]/85 border border-white/[0.08] hover:border-[#dfb552]/40 backdrop-blur-xl transition-all shadow-lg group">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#dfb552] mb-1 font-mono group-hover:scale-105 transition-transform">
                357 Căn
              </div>
              <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#dd668c]" />
                <span>Central District đợt 1</span>
              </div>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            {/* Primary: Virtual Tour 360 */}
            <button
              onClick={() => scrollTo("trai-nghiem-360")}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] text-[#06080e] font-extrabold text-sm uppercase tracking-wider shadow-[0_10px_35px_rgba(223,181,82,0.35)] hover:shadow-[0_15px_45px_rgba(223,181,82,0.55)] hover:scale-[1.02] transition-all"
            >
              <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: "10s" }} />
              <span>Khám Phá Virtual Tour 360°</span>
            </button>

            {/* Secondary: Sơ đồ 3D 50ha */}
            <button
              onClick={() => scrollTo("mat-bang-3d")}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#0c121e]/90 hover:bg-[#141b2a] border border-white/20 hover:border-[#dfb552]/50 text-white font-semibold text-sm backdrop-blur-xl transition-all hover:scale-[1.02] shadow-lg"
            >
              <Eye className="w-4 h-4 text-[#dfb552]" />
              <span>Sơ Đồ Quy Hoạch 3D</span>
            </button>

            {/* Tertiary: Central District */}
            <button
              onClick={() => scrollTo("central-district")}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-slate-300 hover:text-white font-medium text-sm backdrop-blur-md transition-all"
            >
              <span>Phân Khu Central District</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Slide Switcher / Video Indicator */}
        <div className="mt-12 lg:mt-16 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-mono uppercase tracking-[0.2em] text-[#dfb552] font-semibold">
              {useVideo ? "Đang phát:" : "Góc nhìn:"}
            </span>
            <span className="text-slate-300 font-medium">
              {useVideo ? "Phim 3D Cinematic Flythrough 1080p toàn cảnh đô thị One Era" : SLIDES[currentSlide].title}
            </span>
          </div>

          {!useVideo && (
            <div className="flex items-center gap-2">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.title}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "w-8 bg-[#dfb552] shadow-lg shadow-[#dfb552]/50"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Chuyển tới slide ${slide.title}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
