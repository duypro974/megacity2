"use client";

import { useState } from "react";
import {
  Trees, School, HeartPulse, ShoppingBag,
  Dumbbell, Baby, Users, Waves,
} from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { emitSectionHover } from "@/lib/sectionHoverEvent";
import { IMG_AMENITIES } from "@/lib/cloudinary";

/* ─────────────────────────────────────────
   Data — chỉ tiện ích NỘI KHU
───────────────────────────────────────── */
const CATEGORIES = [
  {
    id: "canh-quan",
    no: "01",
    icon: Waves,
    label: "Cảnh quan & Công viên",
    img: IMG_AMENITIES["1"],
    stat: "21.682 – 25.214 m²",
    statLabel: "Diện tích",
    title: "Hồ cảnh quan & Công viên trung tâm",
    desc: "Hồ nước rộng với đài phun nước nghệ thuật là trái tim của dự án. Công viên 2,5 ha phủ xanh toàn khu với cây đại thụ, thảm cỏ và hệ thống chiếu sáng nghệ thuật ban đêm.",
    highlights: ["Hồ cảnh quan trung tâm", "Đài phun nước nghệ thuật", "Đường dạo bộ thoáng mát", "Chiếu sáng nghệ thuật ban đêm"],
  },
  {
    id: "the-thao",
    no: "02",
    icon: Dumbbell,
    label: "Thể thao & Vận động",
    img: IMG_AMENITIES["2"],
    stat: "30 tỷ đồng",
    statLabel: "Đầu tư",
    title: "Khu thể thao đa năng ngoài trời",
    desc: "Khu phức hợp thể thao ngoài trời đầu tư 30 tỷ đồng với hồ bơi, sân tennis, sân bóng rổ và khu tập gym — đáp ứng nhu cầu vận động của mọi lứa tuổi.",
    highlights: ["Hồ bơi ngoài trời", "Sân tennis tiêu chuẩn", "Sân bóng rổ", "Gym ngoài trời"],
  },
  {
    id: "vui-choi",
    no: "03",
    icon: Baby,
    label: "Vui chơi trẻ em",
    img: IMG_AMENITIES["3"],
    stat: "2 – 12 tuổi",
    statLabel: "Độ tuổi",
    title: "Khu vui chơi an toàn cho trẻ em",
    desc: "Không gian vui chơi đầy màu sắc được thiết kế an toàn với thiết bị hiện đại, mặt sàn đàn hồi và khu vực giám sát. Phù hợp cho trẻ từ 2 đến 12 tuổi.",
    highlights: ["Cầu trượt & xích đu", "Bãi cát an toàn", "Mặt sàn đàn hồi", "Khu giám sát phụ huynh"],
  },
  {
    id: "giao-duc",
    no: "04",
    icon: School,
    label: "Giáo dục",
    img: IMG_AMENITIES["4"],
    stat: "31.406 m²",
    statLabel: "Đất giáo dục",
    title: "Quỹ đất giáo dục nội khu 3,1 ha",
    desc: "Dự án dành riêng 3,14 ha đất cho giáo dục, đáp ứng nhu cầu học tập cho cư dân ngay trong khu. Liền kề trường THCS Phú Hội và THCS Nguyễn Bỉnh Khiêm.",
    highlights: ["3,14 ha đất giáo dục", "Quy hoạch mầm non & tiểu học", "Liền kề THCS Phú Hội", "Hạ tầng giao thông thuận tiện"],
  },
  {
    id: "y-te",
    no: "05",
    icon: HeartPulse,
    label: "Y tế & Chăm sóc sức khỏe",
    img: IMG_AMENITIES["5"],
    stat: "5.320 m²",
    statLabel: "Đất y tế",
    title: "Trung tâm y tế nội khu",
    desc: "5.320 m² đất y tế được quy hoạch ngay trong dự án, đảm bảo chăm sóc sức khỏe cho cư dân. Khu vực cũng nằm gần Bệnh viện Đa khoa Nhơn Trạch.",
    highlights: ["5.320 m² đất y tế", "Quy hoạch trạm y tế", "Phòng khám đa khoa", "Gần BV Đa khoa Nhơn Trạch"],
  },
  {
    id: "thuong-mai",
    no: "06",
    icon: ShoppingBag,
    label: "Thương mại & Dịch vụ",
    img: IMG_AMENITIES["6"],
    stat: "26.813 m²",
    statLabel: "Đất TMDV",
    title: "Khu thương mại – dịch vụ 2,6 ha",
    desc: "2,68 ha đất thương mại dịch vụ tích hợp siêu thị VN Mart, trung tâm mua sắm và chuỗi F&B đa dạng, phục vụ nhu cầu mua sắm và ẩm thực hằng ngày của cư dân.",
    highlights: ["Siêu thị VN Mart", "Trung tâm mua sắm", "Chuỗi F&B", "Dịch vụ tài chính – ngân hàng"],
  },
  {
    id: "cong-dong",
    no: "07",
    icon: Users,
    label: "Cộng đồng",
    img: IMG_AMENITIES["7"],
    stat: "1.558 m²",
    statLabel: "Diện tích",
    title: "Trung tâm sinh hoạt cộng đồng",
    desc: "1.558 m² không gian sinh hoạt cộng đồng đa năng — nơi tổ chức sự kiện, lễ hội, họp mặt và các hoạt động văn hóa kết nối cư dân trong khu đô thị.",
    highlights: ["Hội trường sự kiện", "Khu họp mặt cư dân", "Không gian triển lãm", "Sân khấu ngoài trời"],
  },
];

const TABLE_DATA = [
  { icon: Waves,       label: "Công viên trung tâm",   note: "Hồ cảnh quan, đài phun nước, cây xanh", area: "21.682 – 25.214 m²", ha: "≈ 2,5 ha", color: "bg-emerald-500" },
  { icon: School,      label: "Trường học các cấp",    note: "Đất giáo dục quy hoạch nội khu",        area: "31.406 m²",          ha: "≈ 3,1 ha", color: "bg-sky-500" },
  { icon: ShoppingBag, label: "Thương mại – Dịch vụ", note: "Siêu thị, F&B, dịch vụ",               area: "26.813 m²",          ha: "≈ 2,6 ha", color: "bg-amber-500" },
  { icon: HeartPulse,  label: "Y tế nội khu",         note: "Trung tâm y tế quy hoạch",              area: "5.320 m²",           ha: "0,53 ha",  color: "bg-rose-500" },
  { icon: Users,       label: "Trung tâm cộng đồng",  note: "Hội trường, sự kiện cư dân",            area: "1.558 m²",           ha: "—",        color: "bg-violet-500" },
  { icon: Dumbbell,    label: "Bưu điện – Hạ tầng",   note: "Bưu điện, viễn thông, kỹ thuật",        area: "5.592 m²",           ha: "0,56 ha",  color: "bg-slate-500" },
];

/* ─────────────────────────────────────────
   Main
───────────────────────────────────────── */
export default function AmenitiesSection() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const sectionRef = useScrollFade();

  const active = CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];
  const ActiveIcon = active.icon;

  return (
    <section
      id="tien-ich"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* ── Header ── */}
        <div className="mb-14">
          <span className="section-label">Tiện ích nội khu</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 leading-tight">
            Tiện ích nội khu{" "}
            <span className="text-[#16B364]">Mega City 2 Nhơn Trạch</span>
          </h2>
          <p className="mt-3 text-slate-500 text-base max-w-lg leading-relaxed">
            Hệ thống tiện ích đồng bộ được quy hoạch ngay trong lòng dự án, đáp ứng
            toàn diện nhu cầu sống, học tập, thể thao và kết nối cộng đồng.
          </p>
        </div>

        {/* ── 2-col interactive ── */}
        <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-start mb-20">

          {/* LEFT — navigation */}
          <nav aria-label="Danh mục tiện ích nội khu">
            <ul className="space-y-1" role="tablist">
              {CATEGORIES.map((cat) => {
                const CatIcon = cat.icon;
                const isActive = cat.id === activeId;
                return (
                  <li key={cat.id} role="presentation">
                    <button
                      role="tab"
                      type="button"
                      id={`tab-${cat.id}`}
                      aria-selected={isActive}
                      aria-controls={`panel-${cat.id}`}
                      onClick={() => {
                        setActiveId(cat.id);
                        emitSectionHover(cat.label);
                      }}
                      onMouseEnter={() => emitSectionHover(cat.label)}
                      onMouseLeave={() => emitSectionHover(null)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left
                                  transition-colors duration-150
                        ${isActive
                          ? "bg-[#16B364] text-white"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"}`}
                    >
                      <span className={`text-[10px] font-bold tracking-widest w-6 flex-shrink-0
                        ${isActive ? "text-white/60" : "text-slate-300"}`}>
                        {cat.no}
                      </span>
                      <CatIcon className={`w-4 h-4 flex-shrink-0
                        ${isActive ? "text-white" : "text-[#16B364]"}`} />
                      <span className="text-sm font-medium leading-tight">{cat.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Note tổng quỹ đất */}
            <p className="mt-6 text-xs text-slate-400 leading-relaxed px-1">
              Theo quy hoạch chi tiết 1/500 đã được phê duyệt.
            </p>
          </nav>

          {/* RIGHT — content */}
          <div
            key={activeId}
            role="tabpanel"
            id={`panel-${activeId}`}
            aria-labelledby={`tab-${activeId}`}
            className="min-h-0"
            style={{ animation: "fadeInUp 0.25s ease both" }}
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[16/9] mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.img}
                alt={`${active.title} – Tiện ích nội khu Mega City 2 Nhơn Trạch`}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Stat badge — trên trái */}
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm rounded-xl px-3 py-2
                              shadow-lg border border-white/10">
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-wider">
                  {active.statLabel}
                </p>
                <p className="text-sm font-bold text-white leading-tight mt-0.5">
                  {active.stat}
                </p>
              </div>

              {/* Label + disclaimer — dưới */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent
                              px-4 py-3 flex items-center gap-2">
                <ActiveIcon className="w-3.5 h-3.5 text-white/80 flex-shrink-0" />
                <p className="text-white text-sm font-medium">{active.label}</p>
                <p className="text-white/40 text-[10px] ml-auto">Phối cảnh tham khảo</p>
              </div>
            </div>

            {/* Text */}
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">
              {active.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              {active.desc}
            </p>

            {/* Highlights — inline tags thay vì list card */}
            <div className="flex flex-wrap gap-2">
              {active.highlights.map((h) => (
                <span key={h}
                  className="inline-flex items-center gap-1.5 text-xs font-medium
                             text-emerald-700 bg-emerald-50 border border-emerald-100
                             px-2.5 py-1 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-[#16B364] flex-shrink-0" />
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bảng quy hoạch — section bổ sung, visual tách biệt ── */}
        <div className="border-t border-slate-100 pt-14">
          <div className="mb-6">
            <h3 className="text-base font-semibold text-slate-700">
              Diện tích quy hoạch từng tiện ích
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Theo quy hoạch chi tiết tỷ lệ 1/500 đã được phê duyệt.
            </p>
          </div>

          {/* Table — clean, ít border hơn */}
          <div className="rounded-2xl overflow-hidden border border-slate-150 shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_160px_72px]
                            bg-slate-800 text-white text-xs font-semibold uppercase
                            tracking-wider px-5 py-3 gap-4">
              <span>Tiện ích</span>
              <span className="text-right">Diện tích</span>
              <span className="text-right hidden sm:block">Ha</span>
            </div>

            {TABLE_DATA.map((row, i) => {
              const RowIcon = row.icon;
              return (
                <div key={row.label}
                  className={`grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_160px_72px]
                               items-center gap-4 px-5 py-3.5
                               ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                               hover:bg-emerald-50/40 transition-colors duration-150`}
                >
                  {/* Name + note */}
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`w-6 h-6 rounded-lg ${row.color} flex items-center
                                      justify-center flex-shrink-0`}>
                      <RowIcon className="w-3 h-3 text-white" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-800 truncate">{row.label}</p>
                      <p className="text-xs text-slate-400 truncate hidden sm:block">{row.note}</p>
                    </div>
                  </div>

                  {/* Area */}
                  <p className="text-sm font-semibold text-slate-700 text-right tabular-nums">
                    {row.area}
                  </p>

                  {/* Ha badge */}
                  <div className="hidden sm:flex justify-end">
                    {row.ha !== "—"
                      ? <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{row.ha}</span>
                      : <span className="text-xs text-slate-300">—</span>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Link đến trang tiện ích chi tiết */}
          <div className="mt-4 text-right">
            <a
              href="/mega-city-2/tien-ich"
              className="inline-flex items-center gap-1.5 text-xs font-semibold
                         text-primary-600 hover:text-primary-700 hover:underline transition-colors"
            >
              Xem đầy đủ tiện ích Mega City 2 →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
