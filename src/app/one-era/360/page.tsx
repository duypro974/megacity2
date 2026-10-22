import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, Share2, Compass, Maximize2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Virtual Tour 360° Siêu Dự Án One Era Bình Dương – Kim Oanh Group",
  description:
    "Trải nghiệm không gian thực tế ảo 360 độ toàn cảnh đại đô thị 50ha One Era Bình Dương. Xoay chuyển 360 độ từ trên cao, quan sát vị trí Suối Cát, Vành Đai 3, phân khu Central District và hệ thống tiện ích đẳng cấp.",
  alternates: {
    canonical: "https://kimoanhdongnai.com.vn/one-era/360",
  },
  openGraph: {
    title: "Virtual Tour 360° Đại Đô Thị One Era – Kim Oanh Group",
    description:
      "Trải nghiệm không gian thực tế ảo 360 độ toàn cảnh 50ha One Era Bình Dương liên danh Kim Oanh Group & 3 Tập đoàn Nhật Bản.",
    url: "https://kimoanhdongnai.com.vn/one-era/360",
    siteName: "Kim Oanh Đồng Nai",
    locale: "vi_VN",
    type: "website",
  },
};

export default function OneEra360Page() {
  return (
    <div className="min-h-screen bg-[#06080e] text-white flex flex-col overflow-hidden select-none">
      {/* Top Corporate Branded Bar */}
      <header className="h-14 bg-[#0a0f1d] border-b border-[#dfb552]/20 px-4 sm:px-6 flex items-center justify-between z-30 shrink-0">
        {/* Left: Back Link & Project Brand */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/one-era"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-[#dfb552] bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Về Trang Dự Án</span>
            <span className="sm:hidden">Quay lại</span>
          </Link>

          <div className="h-4 w-px bg-white/20 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#dfb552] animate-pulse" />
            <span className="font-extrabold text-white text-sm sm:text-base tracking-wider uppercase">
              ONE ERA
            </span>
            <span className="hidden md:inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#dfb552]/10 text-[#dfb552] border border-[#dfb552]/30">
              KIM OANH GROUP
            </span>
          </div>
        </div>

        {/* Center: Title */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-300">
          <Compass className="w-3.5 h-3.5 text-[#dfb552]" />
          <span>VIRTUAL TOUR 360° ĐẠI ĐÔ THỊ 50HA TOÀN CẢNH</span>
        </div>

        {/* Right: Contact Hotline & CTA */}
        <div className="flex items-center gap-2.5">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-bold hover:bg-green-500 hover:text-white transition-all shadow-md"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{SITE_CONFIG.phoneDisplay}</span>
          </a>

          <Link
            href="/one-era#lien-he"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] text-xs font-extrabold uppercase tracking-wider hover:brightness-110 shadow-md transition-all"
          >
            Nhận Bảng Giá
          </Link>
        </div>
      </header>

      {/* Main 360 Interactive Viewer Canvas (100% Viewport Height) */}
      <main className="relative flex-1 w-full bg-black">
        <iframe
          src="https://360.oneera.com.vn"
          title="Virtual Tour 360 One Era Bình Dương - Kim Oanh Group"
          className="w-full h-full border-0 absolute inset-0"
          allow="accelerometer; gyroscope; magnetometer; xr-spatial-tracking; fullscreen"
          allowFullScreen
        />

        {/* Top-Left Watermark Shielding: Brand Overlay */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 bg-[#06080e]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#dfb552] animate-ping" />
          <span className="text-[11px] font-mono tracking-widest text-[#f5f2eb] uppercase font-bold">
            KIM OANH GROUP • ĐẠI ĐÔ THỊ ONE ERA
          </span>
        </div>

        {/* Floating Bottom Hotline Pill */}
        <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none flex items-center justify-between text-xs text-white/60 font-mono">
          <div className="bg-[#06080e]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg pointer-events-auto">
            <span>Khu Đô Thị Sinh Thái Kiểu Mẫu 50ha • Phân Phối Trực Tiếp Kim Oanh Group</span>
          </div>

          <div className="bg-[#06080e]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#dfb552]/30 shadow-lg pointer-events-auto text-[#dfb552] font-bold">
            <a href={`tel:${SITE_CONFIG.phone}`}>Hotline: {SITE_CONFIG.phoneDisplay}</a>
          </div>
        </div>
      </main>
    </div>
  );
}
