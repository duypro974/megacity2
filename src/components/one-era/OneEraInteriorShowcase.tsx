"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ZoomIn, ChevronRight } from "lucide-react";
import { IMG_ONE_ERA } from "@/lib/cloudinary";

interface Props {
  onOpenImage?: (src: string, alt: string) => void;
}

const SPACES = [
  {
    id: "townhouse-living",
    title: "Phòng Khách Gia Đình Japandi",
    room: "Townhouse Tầng Trệt",
    tagline: "Gắn kết yêu thương – Dòng chảy kết nối hài hòa",
    desc: "Bố cục mở thông thoáng giữa phòng khách, bàn ăn và tiểu cảnh, đón ánh sáng tự nhiên ngập tràn, nuôi dưỡng sinh khí an lành.",
    image: IMG_ONE_ERA.products.townhouseLiving,
  },
  {
    id: "townhouse-kitchen",
    title: "Bếp Nấu & Bàn Đảo Hiện Đại",
    room: "Townhouse Tầng Trệt",
    tagline: "Ấm nồng bữa cơm gia đình",
    desc: "Đảo bếp tinh tế kết hợp bàn ăn phong cách Nhật, hệ tủ âm tường kịch trần và cầu thang đèn LED sang trọng.",
    image: IMG_ONE_ERA.products.townhouseKitchen,
  },
  {
    id: "townhouse-master-bed",
    title: "Phòng Ngủ Master Ban Công Xanh",
    room: "Townhouse Tầng 2",
    tagline: "Tái tạo năng lượng trong sự tĩnh lặng",
    desc: "Cửa kính kịch trần nhìn ra ban công rợp bóng cây, nội thất gỗ sồi cao cấp và rèm sáo gỗ chuẩn phong cách nghỉ dưỡng.",
    image: IMG_ONE_ERA.products.townhouseMasterBed,
  },
  {
    id: "townhouse-tea-room",
    title: "Phòng Trà Đạo Nhật Sân Thượng",
    room: "Townhouse Tầng 3",
    tagline: "Thưởng trà đàm đạo ngắm trọn thành phố",
    desc: "Không gian trà đạo thiền tịnh kết nối trực tiếp sân vườn ban công trên cao, nơi tâm hồn tìm về sự an nhiên trọn vẹn.",
    image: IMG_ONE_ERA.products.townhouseTeaRoom,
  },
  {
    id: "shophouse-cafe",
    title: "Showroom & Coffee Lounge Tầng Trệt",
    room: "Shophouse Tầng 1 & Lửng",
    tagline: "Thịnh vượng kinh doanh đa mô hình",
    desc: "Chiều cao tầng lý tưởng, cửa kính panorama đón khách sầm uất, thuận tiện làm boutique shop, cafe hoặc showroom cao cấp.",
    image: IMG_ONE_ERA.products.shophouseCafe,
  },
  {
    id: "shophouse-master-suite",
    title: "Master Suite & Phòng Tắm Đá Tự Nhiên",
    room: "Shophouse Tầng 3",
    tagline: "Chuẩn mực khách sạn 5 sao",
    desc: "Phòng tắm vách kính riêng biệt với bồn tắm nằm, lavabo đôi và thiết bị vệ sinh thông minh chuẩn Nhật Bản.",
    image: IMG_ONE_ERA.products.shophouseMasterSuite,
  },
  {
    id: "shophouse-kids-room",
    title: "Phòng Trẻ Em Montessori Sáng Tạo",
    room: "Shophouse Tầng 3",
    tagline: "Không gian vui chơi và kích thích trí tưởng tượng",
    desc: "Giường tầng tích hợp cầu trượt, hố bóng mini và góc đọc sách hình quả trứng sắc màu tươi vui.",
    image: IMG_ONE_ERA.products.shophouseKidsRoom,
  },
];

export default function OneEraInteriorShowcase({ onOpenImage }: Props) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = SPACES[selectedIdx];

  return (
    <section id="noi-that" className="py-20 lg:py-28 bg-[#06080e] text-[#f5f2eb] relative overflow-hidden border-b border-white/[0.06]">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#dfb552]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nghệ Thuật Không Gian Nhật Bản</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            PHỐI CẢNH NỘI THẤT 3D <span className="bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] bg-clip-text text-transparent">ĐẲNG CẤP 5 SAO</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Chắt lọc tinh hoa kiến trúc Nhật Bản kết hợp công năng tối ưu cho người Việt, mang đến không gian sống cân bằng, sang trọng và đầy cảm xúc.
          </p>
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          {/* Main Visual */}
          <div className="lg:col-span-8">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl group bg-[#0c101a]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
              </div>

              {/* Tag Overlays */}
              <div className="absolute top-4 left-4 bg-[#06080e]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-xs font-mono font-bold text-[#dfb552]">
                {current.room}
              </div>

              {onOpenImage && (
                <button
                  onClick={() => onOpenImage(current.image, current.title)}
                  className="absolute bottom-4 right-4 bg-[#0c121e]/90 hover:bg-[#dfb552] hover:text-[#06080e] text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-lg"
                  aria-label={`Phóng to ảnh ${current.title}`}
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Details & Room Selector */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] backdrop-blur-xl mb-6 shadow-xl">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#dfb552] font-bold block mb-1">
                {current.room}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                {current.title}
              </h3>
              <p className="text-xs text-[#dfb552]/90 font-medium italic mb-4">
                "{current.tagline}"
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {current.desc}
              </p>
            </div>

            {/* Space Navigation List */}
            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {SPACES.map((space, idx) => (
                <button
                  key={space.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-xs font-semibold flex items-center justify-between transition-all ${
                    idx === selectedIdx
                      ? "bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] font-extrabold shadow-md"
                      : "bg-[#0c121e]/60 text-slate-300 hover:bg-[#0c121e] border border-white/[0.06]"
                  }`}
                >
                  <span>{space.title}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
