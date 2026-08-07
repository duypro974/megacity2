"use client";

import { useState, useRef, useEffect } from "react";
import {
  Trees, School, HeartPulse, ShoppingBag,
  Dumbbell, Baby, Users, Waves, Camera,
} from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { emitSectionHover } from "@/lib/sectionHoverEvent";

const ITEMS = [
  { id: 0, icon: Waves,       label: "Hồ cảnh quan & Đài phun nước",    thumb: "Hồ cảnh quan",
    desc: "Hồ nước rộng cùng đài phun nước nghệ thuật tại trung tâm công viên 21.682 m².",
    imgHint: "Ảnh thực tế hồ cảnh quan, đài phun nước công viên trung tâm Mega City 2" },
  { id: 1, icon: Dumbbell,    label: "Khu thể thao đa năng",             thumb: "Thể thao",
    desc: "Hồ bơi, sân tennis, bóng rổ — khu phức hợp thể thao ngoài trời 30 tỷ đồng.",
    imgHint: "Ảnh khu thể thao ngoài trời: hồ bơi, sân tennis, bóng rổ Mega City 2" },
  { id: 2, icon: Trees,       label: "Công viên cây xanh",               thumb: "Công viên",
    desc: "2,5 ha mảng xanh với cây đại thụ, thảm cỏ và chiếu sáng nghệ thuật ban đêm.",
    imgHint: "Ảnh công viên cây xanh 2,5ha, đường dạo bộ thoáng mát nội khu Mega City 2" },
  { id: 3, icon: Baby,        label: "Sân chơi trẻ em",                  thumb: "Trẻ em",
    desc: "Khu vui chơi an toàn, đầy màu sắc với trang thiết bị hiện đại cho trẻ 2–12 tuổi.",
    imgHint: "Ảnh khu vui chơi trẻ em: xích đu, cầu trượt, bãi cát an toàn nội khu" },
  { id: 4, icon: School,      label: "Trường học các cấp",               thumb: "Trường học",
    desc: "3,14 ha đất giáo dục. THCS Phú Hội & THCS Nguyễn Bỉnh Khiêm liền kề.",
    imgHint: "Ảnh phối cảnh trường học nội khu hoặc trường THCS Phú Hội thực tế" },
  { id: 5, icon: HeartPulse,  label: "Trung tâm y tế",                   thumb: "Y tế",
    desc: "5.320 m² đất y tế nội khu. BV Đa khoa Nhơn Trạch chỉ cách vài phút.",
    imgHint: "Ảnh BV Đa khoa Nhơn Trạch hoặc phối cảnh trung tâm y tế nội khu" },
  { id: 6, icon: ShoppingBag, label: "Thương mại – Dịch vụ",            thumb: "Thương mại",
    desc: "2,68 ha đất TMDV — siêu thị VN Mart, trung tâm mua sắm, chuỗi F&B.",
    imgHint: "Ảnh khu thương mại dịch vụ, siêu thị VN Mart hoặc phối cảnh shophouse" },
  { id: 7, icon: Users,       label: "Trung tâm sinh hoạt cộng đồng",   thumb: "Cộng đồng",
    desc: "1.558 m² trung tâm sinh hoạt cộng đồng — không gian sự kiện, họp mặt.",
    imgHint: "Ảnh phối cảnh trung tâm sinh hoạt cộng đồng Mega City 2" },
];

/* ─── Fade image ─── */
function FadeImage({ hint, imgKey }: { hint: string; imgKey: string }) {
  const [visible, setVisible] = useState(true);
  const prevKey = useRef(imgKey);

  useEffect(() => {
    if (prevKey.current === imgKey) return;
    setVisible(false);
    const t = setTimeout(() => { prevKey.current = imgKey; setVisible(true); }, 180);
    return () => clearTimeout(t);
  }, [imgKey]);

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center
                 bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400
                 transition-opacity duration-200"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <Camera className="w-10 h-10 opacity-40" />
      <p className="text-sm font-medium opacity-70">🖼 {hint}</p>
    </div>
  );
}

export default function AmenitiesSection() {
  const [active, setActive]       = useState(0);
  const [hoverIdx, setHoverIdx]   = useState<number | null>(null);
  const sectionRef = useScrollFade();

  const current     = ITEMS[active];
  const displayItem = hoverIdx !== null ? ITEMS[hoverIdx] : current;

  return (
    <section
      id="tien-ich"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 bg-gradient-to-br from-white via-emerald-50/30 to-white"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── LEFT: tiêu đề + list ── */}
          <div className="space-y-8">
            <div>
              <p className="text-primary-600 text-sm font-semibold uppercase tracking-widest mb-2">
                Tiện ích nội khu
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Tự hào sở hữu<br />
                <span className="gradient-text">chốn sống đủ đầy</span>
              </h2>
            </div>

            <ul className="space-y-1">
              {ITEMS.map((item, i) => {
                const isActive = active === i;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => { setHoverIdx(i); emitSectionHover(item.label); }}
                      onMouseLeave={() => { setHoverIdx(null); emitSectionHover(null); }}
                      className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-left
                        transition-all duration-200
                        ${isActive
                          ? "bg-gradient-to-r from-primary-600 to-primary-500 shadow-lg shadow-primary-500/25"
                          : "bg-white hover:bg-primary-50 border border-slate-200 hover:border-primary-200"}`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0
                        ${isActive ? "bg-white/20" : "bg-primary-100"}`}>
                        <item.icon className={`w-4 h-4 ${isActive ? "text-white" : "text-primary-600"}`} />
                      </div>
                      <span className={`font-semibold text-sm ${isActive ? "text-white" : "text-slate-700"}`}>
                        {item.label}
                      </span>
                      {isActive && (
                        <div className="ml-auto w-5 h-5 rounded-full bg-white/25 flex items-center justify-center shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── RIGHT: ảnh lớn + thumbnails ── */}
          <div className="space-y-4">

            {/* Main image with fade */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-200 aspect-[4/3] shadow-xl">
              <FadeImage hint={displayItem.imgHint} imgKey={displayItem.imgHint} />
              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent
                              flex items-end p-6 pointer-events-none">
                <div>
                  <p className="text-white font-bold text-lg leading-snug">{displayItem.label}</p>
                  <p className="text-white/70 text-xs mt-1">{displayItem.desc}</p>
                </div>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
              {ITEMS.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => { setHoverIdx(i); emitSectionHover(item.label); }}
                  onMouseLeave={() => { setHoverIdx(null); emitSectionHover(null); }}
                  className={`shrink-0 w-16 h-12 rounded-xl border-2 transition-all duration-200
                    flex flex-col items-center justify-center gap-0.5
                    ${active === i
                      ? "border-primary-500 bg-primary-50 text-primary-700 scale-105 shadow-md shadow-primary-500/20"
                      : "border-slate-200 bg-slate-100 text-slate-500 opacity-60 hover:opacity-90"}`}
                >
                  <item.icon className={`w-3.5 h-3.5 ${active === i ? "text-primary-600" : "text-slate-400"}`} />
                  <span className="text-[9px] font-bold">{item.thumb}</span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
