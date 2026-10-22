"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Navigation, Sparkles, Building, Trees, Train, ShoppingBag, GraduationCap, Waves, X } from "lucide-react";
import { IMG_ONE_ERA } from "@/lib/cloudinary";

interface Hotspot {
  id: string;
  name: string;
  category: string;
  x: number; // percentage left
  y: number; // percentage top
  icon: any;
  accent: string;
  tagline: string;
  description: string;
  image: string;
  scrollTarget?: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "central-district",
    name: "Phân Khu Central District",
    category: "Mở Bán Đợt 1",
    x: 48,
    y: 44,
    icon: Sparkles,
    accent: "#dfb552",
    tagline: "Bộ sưu tập 357 căn thấp tầng giới hạn (Townhouse & Shophouse)",
    description: "Tâm điểm sầm uất với hồ bơi resort riêng biệt, các trục đường nội khu 13m - 25m, bàn giao dự kiến Quý 4/2028.",
    image: IMG_ONE_ERA.products.shophouseFacade,
    scrollTarget: "central-district",
  },
  {
    id: "kinera-tower",
    name: "Tháp Đôi Kinera Tower",
    category: "Biểu Tượng Thượng Đỉnh",
    x: 13,
    y: 50,
    icon: Building,
    accent: "#35a3ce",
    tagline: "Tòa tháp đôi tài chính & căn hộ hạng sang vươn lên bầu trời",
    description: "Tọa lạc ngay mặt tiền Đại lộ Bình Dương, kiến trúc biểu tượng với khối đế thương mại và skybridge kết nối trực tiếp ga Metro.",
    image: IMG_ONE_ERA.hero.nightTowers,
    scrollTarget: "tong-quan",
  },
  {
    id: "aeon-mall",
    name: "TTTM AEON Mall & Cầu Kén Vàng",
    category: "Thương Mại & Giải Trí",
    x: 32,
    y: 52,
    icon: ShoppingBag,
    accent: "#dd668c",
    tagline: "Đại siêu thị chuẩn Nhật và cầu bộ hành ánh sáng trên cao",
    description: "Điểm hẹn mua sắm, ẩm thực và vui chơi giải trí hàng đầu khu vực, kết nối xuyên suốt các phân khu qua Cầu Kén Vàng.",
    image: IMG_ONE_ERA.hero.boulevard,
    scrollTarget: "tien-ich",
  },
  {
    id: "metro-station",
    name: "Nhà Ga Metro (Tuyến 1B & 2B)",
    category: "Hạ Tầng Giao Thông",
    x: 16,
    y: 72,
    icon: Train,
    accent: "#5DA9DD",
    tagline: "Kết nối trực tiếp mạng lưới đường sắt đô thị TP.HCM",
    description: "Nhà ga Metro trên cao kết nối thẳng vào dự án, đưa cư dân về trung tâm Sài Gòn chỉ trong 20 phút không khói bụi.",
    image: IMG_ONE_ERA.masterPlan.tamGiao,
    scrollTarget: "vi-tri",
  },
  {
    id: "vas-school",
    name: "Trường Quốc Tế VAS Saigon & KindUp",
    category: "Giáo Dục Quốc Tế",
    x: 64,
    y: 42,
    icon: GraduationCap,
    accent: "#c2593f",
    tagline: "Hệ thống giáo dục liên cấp chuẩn Cambridge quốc tế",
    description: "Cơ sở vật chất chuẩn quốc tế với sân bóng cỏ nhân tạo, nhà thi đấu và hồ bơi riêng, ngay cạnh thềm nhà.",
    image: IMG_ONE_ERA.amenities.vasSaigon,
    scrollTarget: "tien-ich",
  },
  {
    id: "suoi-cat",
    name: "Dòng Kênh Sinh Thái Suối Cát",
    category: "Cảnh Quan Tự Nhiên",
    x: 68,
    y: 22,
    icon: Waves,
    accent: "#58aeb4",
    tagline: "Mạch nguồn phong thủy xanh mát uốn lượn quanh đô thị",
    description: "Dòng kênh tự nhiên được kè đá sinh thái và công viên ven suối, mang lại luồng sinh khí mát lành điều hòa nhiệt độ.",
    image: IMG_ONE_ERA.amenities.hydePark42ha,
    scrollTarget: "chuan-xanh",
  },
  {
    id: "hyde-park",
    name: "Đại Công Viên Trung Tâm Kế Cận 42ha",
    category: "Lá Phổi Xanh",
    x: 82,
    y: 30,
    icon: Trees,
    accent: "#4ade80",
    tagline: "Quần thể mảng xanh sinh thái rộng lớn kề cận dự án",
    description: "Không gian dạo bộ rợp bóng mát, thảm thực vật đa tầng nâng niu sức khỏe người cao tuổi và các gia đình đa thế hệ.",
    image: IMG_ONE_ERA.masterPlan.ecoParks,
    scrollTarget: "chuan-xanh",
  },
];

export default function OneEraInteractiveMap3D() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);
  const [showDetailCard, setShowDetailCard] = useState(true);

  const scrollTo = (id?: string) => {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="mat-bang-3d" className="py-20 lg:py-28 bg-[#090d16] text-white relative overflow-hidden border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4">
            <Navigation className="w-3.5 h-3.5" />
            <span>Sơ Đồ Quy Hoạch Tương Tác 3D</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            MẶT BẰNG QUY HOẠCH <span className="bg-gradient-to-r from-[#dfb552] via-[#f5f2eb] to-[#dfb552] bg-clip-text text-transparent">3D KHÔNG GIAN 50HA</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Chạm vào các điểm định vị để khám phá vị trí thực tế của từng phân khu, công trình biểu tượng và hệ thống tiện ích trong đại đô thị.
          </p>
        </div>

        {/* 3D Interactive Map Stage */}
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0c101a] shadow-[0_25px_80px_rgba(0,0,0,0.85)] mb-8">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full select-none">
            <Image
              src={IMG_ONE_ERA.masterPlan.topView}
              alt="Sơ đồ 3D Master Plan One Era Bình Dương"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
            />

            {/* Dark vignette gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

            {/* Interactive Pins */}
            {HOTSPOTS.map((spot) => {
              const isSelected = activeHotspot.id === spot.id;
              const IconComp = spot.icon;

              return (
                <div
                  key={spot.id}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                  onClick={() => {
                    setActiveHotspot(spot);
                    setShowDetailCard(true);
                  }}
                >
                  {/* Outer Pulsing Ring */}
                  <span
                    className={`absolute -inset-2 rounded-full transition-all duration-500 ${
                      isSelected
                        ? "animate-ping opacity-75"
                        : "opacity-0 group-hover:opacity-40"
                    }`}
                    style={{ backgroundColor: spot.accent }}
                  />

                  {/* Pin Core */}
                  <div
                    className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl border ${
                      isSelected
                        ? "scale-125 border-white text-slate-950 shadow-[0_0_25px_rgba(255,255,255,0.8)]"
                        : "border-white/40 text-white hover:scale-110 shadow-black/60"
                    }`}
                    style={{
                      backgroundColor: isSelected ? spot.accent : "rgba(10, 14, 23, 0.85)",
                    }}
                  >
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  {/* Pin Floating Label (Visible on hover or selected) */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full mt-1.5 whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider backdrop-blur-md border border-white/20 transition-all duration-300 pointer-events-none ${
                      isSelected
                        ? "opacity-100 translate-y-0 bg-slate-950/90 text-white font-bold border-amber-400/50"
                        : "opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 bg-black/80 text-slate-300"
                    }`}
                  >
                    {spot.name}
                  </div>
                </div>
              );
            })}

            {/* Overlay Interactive Detail Card (Floating inside map) */}
            {showDetailCard && activeHotspot && (
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-30 animate-fadeInUp">
                <div className="rounded-2xl bg-[#0c121e]/95 border border-white/20 backdrop-blur-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-left relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 bottom-0 w-1.5"
                    style={{ backgroundColor: activeHotspot.accent }}
                  />

                  <button
                    onClick={() => setShowDetailCard(false)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10"
                    aria-label="Đóng bảng chi tiết"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="pl-2">
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-1"
                      style={{ color: activeHotspot.accent }}
                    >
                      {activeHotspot.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white mb-1">
                      {activeHotspot.name}
                    </h3>
                    <p className="text-xs text-amber-300/90 italic font-medium mb-2">
                      "{activeHotspot.tagline}"
                    </p>
                    <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                      {activeHotspot.description}
                    </p>

                    <button
                      onClick={() => scrollTo(activeHotspot.scrollTarget)}
                      className="text-xs font-bold text-slate-950 px-4 py-2 rounded-xl transition-all hover:scale-105 inline-flex items-center gap-1.5 shadow"
                      style={{ backgroundColor: activeHotspot.accent }}
                    >
                      <span>Xem Chi Tiết Phần Này</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Selection Landmark Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {HOTSPOTS.map((spot) => {
            const isSelected = activeHotspot.id === spot.id;
            return (
              <button
                key={spot.id}
                onClick={() => {
                  setActiveHotspot(spot);
                  setShowDetailCard(true);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  isSelected
                    ? "bg-[#dfb552] text-slate-950 font-bold shadow-lg"
                    : "bg-[#0f172a] text-slate-300 hover:bg-[#1e293b] border border-white/[0.08]"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: spot.accent }}
                />
                <span>{spot.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
