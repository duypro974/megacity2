"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, Maximize2, Minimize2, RotateCw, RefreshCw, Phone, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { IMG_ONE_ERA } from "@/lib/cloudinary";

export default function OneEraInteractive3D() {
  const [is360Active, setIs360Active] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen360 = () => {
      setIs360Active(true);
    };
    window.addEventListener("open-oneera-360", handleOpen360);
    return () => window.removeEventListener("open-oneera-360", handleOpen360);
  }, []);

  const toggleNativeFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        // Fallback to state-based fullscreen if API blocked
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {
        setIsFullscreen(false);
      });
    }
  };

  const reloadIframe = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <section id="trai-nghiem-360" className="py-20 lg:py-28 bg-[#06080e] text-white relative overflow-hidden border-t border-b border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#35a3ce]/10 via-[#dfb552]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4 shadow-[0_0_20px_rgba(223,181,82,0.15)]">
            <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
            <span>Virtual Tour 360° Không Gian Thực Tế</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            ĐẮM CHÌM TRONG KHÔNG GIAN <span className="bg-gradient-to-r from-[#dfb552] via-[#f5f2eb] to-[#dfb552] bg-clip-text text-transparent">360° ONE ERA</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Khám phá trọn vẹn toàn cảnh đại đô thị 50 Hécta từ độ cao 200m và dạo bước qua từng phân khu với công nghệ thực tế ảo 360 độ tương tác trực tiếp.
          </p>

          {/* Action CTAs - 100% INTERNAL TO KIM OANH GROUP */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <Link
              href="/one-era/360"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#dfb552] via-[#eecb77] to-[#dfb552] text-slate-950 font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_10px_30px_rgba(223,181,82,0.35)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(223,181,82,0.5)] transition-all group"
            >
              <span>🚀 Mở Chế Độ 360° Toàn Trang</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <button
              onClick={toggleNativeFullscreen}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#dfb552]" />
              <span>Phóng Toàn Màn Hình</span>
            </button>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-green-500/20 hover:bg-green-500 border border-green-500/40 text-green-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Tư Vấn: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* 360 Interactive Viewer Box */}
        <div
          ref={containerRef}
          className={`relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0c101a] shadow-[0_25px_70px_rgba(0,0,0,0.8)] transition-all duration-500 ${
            isFullscreen ? "fixed inset-0 z-[9999] rounded-none w-screen h-screen" : "aspect-[16/10] sm:aspect-[16/9] w-full"
          }`}
        >
          {is360Active ? (
            /* Active 360 iframe with internal shielding */
            <div className="relative w-full h-full">
              <iframe
                key={iframeKey}
                src="https://360.oneera.com.vn"
                title="Virtual Tour 360 One Era Bình Dương - Kim Oanh Group"
                className="w-full h-full border-0"
                allow="accelerometer; gyroscope; magnetometer; xr-spatial-tracking; fullscreen"
                allowFullScreen
              />

              {/* Top-Left: Kim Oanh Group Watermark Shield */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 bg-[#06080e]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-[#dfb552] animate-ping" />
                <span className="text-[11px] font-mono tracking-widest text-[#f5f2eb] uppercase font-bold">
                  KIM OANH GROUP • ĐẠI ĐÔ THỊ ONE ERA
                </span>
              </div>

              {/* Top-Right: Internal Controls Bar */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <Link
                  href="/one-era/360"
                  className="bg-black/75 hover:bg-[#dfb552] hover:text-black text-white px-3.5 py-2 rounded-full text-xs font-bold backdrop-blur-md border border-white/20 transition-all shadow-lg flex items-center gap-1.5"
                  title="Mở trang 360 riêng biệt"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Trang Riêng 360°</span>
                </Link>

                <button
                  onClick={toggleNativeFullscreen}
                  className="bg-black/75 hover:bg-black text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-lg hover:scale-105"
                  aria-label={isFullscreen ? "Thu nhỏ" : "Toàn màn hình"}
                  title={isFullscreen ? "Thu nhỏ" : "Toàn màn hình"}
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={reloadIframe}
                  className="bg-black/75 hover:bg-black text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-lg hover:scale-105"
                  aria-label="Tải lại tour"
                  title="Tải lại khung hình"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {/* Floating Bottom Info Bar - 100% Brand Ownership */}
              <div className="absolute bottom-3 left-4 right-4 z-20 pointer-events-none flex items-center justify-between text-[11px] text-white/70 font-mono">
                <div className="bg-[#06080e]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg pointer-events-auto hidden sm:block">
                  <span>Khu Đô Thị Kiểu Mẫu 50ha • Phân Phối Trực Tiếp: Kim Oanh Group</span>
                </div>

                <div className="bg-[#06080e]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#dfb552]/30 shadow-lg pointer-events-auto text-[#dfb552] font-bold ml-auto sm:ml-0">
                  <a href={`tel:${SITE_CONFIG.phone}`}>Hotline Tư Vấn: {SITE_CONFIG.phoneDisplay}</a>
                </div>
              </div>
            </div>
          ) : (
            /* Preview Stage */
            <div className="relative w-full h-full group">
              <Image
                src={IMG_ONE_ERA.hero.panorama}
                alt="360 Panorama siêu dự án One Era Bình Dương"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-[#06080e]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <button
                  onClick={() => setIs360Active(true)}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#dfb552] via-[#f5f2eb] to-[#dfb552] text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-[0_10px_35px_rgba(223,181,82,0.35)] hover:scale-105 transition-all flex items-center gap-3"
                >
                  <RotateCw className="w-4 h-4" />
                  <span>Kích Hoạt Trải Nghiệm 360°</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
