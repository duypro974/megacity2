"use client";

import { useState, useEffect, useRef } from "react";
import {
  Plane, Building2, HeartPulse, School, ShoppingBag,
  Plus, Minus,
} from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { emitSectionHover } from "@/lib/sectionHoverEvent";
import {
  IMG_REGIONAL as R,
  IMG_TRADE as TR,
  IMG_HEARTPULSE as HP,
  IMG_SCHOOL as SC,
  IMG_PLANE as PL,
} from "@/lib/cloudinary";
import { scrollToSection } from "@/lib/scrollTo";

const DEFAULT_IMG = R["1"];

/* ─── Types ─── */
interface GroupItem {
  name: string;
  note: string;
  img: string;
}
interface Group {
  id: number;
  icon: React.ElementType;
  label: string;
  img: string;
  items: GroupItem[];
}

const GROUPS: Group[] = [
  {
    id: 0,
    icon: Building2,
    label: "Khu công nghiệp",
    img: R["2"],
    items: [
      { name: "KCN Nhơn Trạch 1",       note: "~1 km theo đường 25C", img: R["2"] },
      { name: "KCN Nhơn Trạch 2",       note: "~1,5 km",              img: R["3"] },
      { name: "KCN Nhơn Trạch 3",       note: "~2 km",                img: R["4"] },
      { name: "KCN Nhơn Trạch 5",       note: "~2–4 km",              img: R["5"] },
      { name: "KCN Nhơn Trạch 6",       note: "~3–4 km",              img: R["6"] },
      { name: "KCN Phước An",           note: "Đang quy hoạch",       img: R["7"] },
      { name: "Cảng Cái Mép – Thị Vải", note: "Logistics quốc tế",    img: R["8"] },
    ],
  },
  {
    id: 1,
    icon: ShoppingBag,
    label: "Thương mại – Dịch vụ",
    img: TR["1"],
    items: [
      { name: "TT Triển lãm – Hội chợ QT Nhơn Trạch", note: "107 ha, liền kề",  img: TR["1"] },
      { name: "Siêu thị GO!",                          note: "~5–7 phút",        img: TR["2"] },
      { name: "Hệ thống ngân hàng",                    note: "Bán kính 1 km",    img: TR["3"] },
      { name: "Sân golf Long Thành",                   note: "~15 phút",         img: TR["4"] },
    ],
  },
  {
    id: 2,
    icon: HeartPulse,
    label: "Y tế",
    img: HP["1"],
    items: [
      { name: "BV Đa khoa Nhơn Trạch",      note: "Liền kề dự án", img: HP["1"] },
      { name: "Phòng khám đa khoa tư nhân", note: "Bán kính 2 km", img: HP["2"] },
    ],
  },
  {
    id: 3,
    icon: School,
    label: "Giáo dục",
    img: SC["1"],
    items: [
      { name: "Trường THCS Phú Hội",            note: "~3–5 phút",  img: SC["1"] },
      { name: "Trường THPT Nguyễn Bỉnh Khiêm",  note: "~5–7 phút",  img: SC["2"] },
      { name: "Trường TC Kỹ thuật Đồng Nai",    note: "Khu vực",    img: SC["3"] },
      { name: "Các trường mầm non & tiểu học",  note: "Xung quanh", img: SC["4"] },
      { name: "TT Thể dục thể thao huyện",      note: "~5 phút",    img: SC["5"] },
    ],
  },
  {
    id: 4,
    icon: Plane,
    label: "Sân bay & Giao thông",
    img: PL["1"],
    items: [
      { name: "Sân bay QT Long Thành",          note: "~10–15 phút",      img: PL["1"] },
      { name: "Cổng chính sân bay – đường 25C", note: "Trục trực tiếp",   img: PL["2"] },
      { name: "Cầu Cát Lái",                    note: "Kết nối TP.HCM",   img: PL["3"] },
      { name: "Cảng Cát Lái",                   note: "Cảng lớn nhất VN", img: PL["4"] },
    ],
  },
];

/* ─── Crossfade image — không chớp ─── */
function CrossfadeImage({ src }: { src: string }) {
  const [layers, setLayers] = useState([{ src, id: 0 }]);
  const prevSrc = useRef(src);
  const idRef   = useRef(1);

  useEffect(() => {
    if (src === prevSrc.current) return;
    prevSrc.current = src;

    const newId = idRef.current++;
    // Thêm layer mới — dùng CSS animation fadein nên không cần JS state toggle
    setLayers((prev) => [...prev, { src, id: newId }]);

    // Dọn layer cũ sau khi transition xong
    const t = setTimeout(() => {
      setLayers((prev) => prev.filter((l) => l.id === newId));
    }, 700);
    return () => clearTimeout(t);
  }, [src]);

  return (
    <div className="absolute inset-0">
      {layers.map((layer, i) => {
        const isTop = i === layers.length - 1;
        return (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={layer.id}
            src={layer.src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              zIndex: i + 1,
              animation: isTop && layers.length > 1
                ? "xfadeIn 0.55s ease forwards"
                : "none",
              opacity: isTop && layers.length === 1 ? 1 : isTop ? 0 : 1,
            }}
          />
        );
      })}
    </div>
  );
}

export default function ConnectivitySection() {
  const [openId, setOpenId]       = useState<number>(-1);  // -1 = không mở cái nào
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const sectionRef = useScrollFade();

  const activeGroup   = GROUPS.find((g) => g.id === openId);
  const currentImg    = hoverItem ?? activeGroup?.img ?? DEFAULT_IMG;
  const currentLabel  = activeGroup?.label ?? "Mega City 2 – Nhơn Trạch";
  const CurrentIcon   = activeGroup?.icon ?? Building2;

  return (
    <section
      id="vi-tri"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 md:py-32 bg-gradient-to-br from-white via-orange-50/20 to-amber-50/30"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT — ảnh + badges */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-slate-200 aspect-[4/3] shadow-xl">
              <CrossfadeImage src={currentImg} />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent
                              flex items-end px-6 pb-5 pointer-events-none">
                <div className="flex items-center gap-2">
                  <CurrentIcon className="w-4 h-4 text-white/80" />
                  <span className="text-white font-bold text-sm">{currentLabel}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Đường 25C",        note: "Mặt tiền · 100m" },
                { name: "Đường 319",         note: "Kết nối trung tâm" },
                { name: "Tôn Đức Thắng",    note: "Trục Bắc – Nam" },
                { name: "Nguyễn Hữu Cảnh", note: "Kết nối cảng" },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-2 bg-white border border-slate-200
                                        rounded-xl px-3.5 py-2.5 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-800 text-xs leading-none">{r.name}</p>
                    <p className="text-slate-400 text-[11px] mt-0.5">{r.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — tiêu đề + accordion */}
          <div className="space-y-8">
            <div>
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">
                Liên kết vùng
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Tâm mạch phát triển<br />
                <span className="text-amber-500">Đa dạng kết nối</span>
              </h2>
            </div>

            <div className="space-y-2">
              {GROUPS.map((group) => {
                const isOpen = openId === group.id;
                return (
                  <div
                    key={group.id}
                    className={`rounded-2xl border transition-colors duration-200 overflow-hidden
                      ${isOpen ? "border-amber-300 shadow-md shadow-amber-100" : "border-slate-200 bg-white"}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? -1 : group.id)}
                      onMouseEnter={() => emitSectionHover(group.label)}
                      onMouseLeave={() => emitSectionHover(null)}                      className={`w-full flex items-center gap-4 px-5 py-4 text-left
                        ${isOpen ? "bg-gradient-to-r from-amber-500 to-orange-400" : "bg-white hover:bg-amber-50"}`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0
                        ${isOpen ? "bg-white/20" : "bg-amber-100"}`}>
                        <group.icon className={`w-4 h-4 ${isOpen ? "text-white" : "text-amber-600"}`} />
                      </div>
                      <span className={`font-bold text-sm flex-1 ${isOpen ? "text-white" : "text-slate-800"}`}>
                        {group.label}
                      </span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0
                        ${isOpen ? "bg-white/20" : "bg-slate-100"}`}>
                        {isOpen
                          ? <Minus className="w-3.5 h-3.5 text-white" />
                          : <Plus  className="w-3.5 h-3.5 text-slate-500" />}
                      </div>
                    </button>

                    {/* Smooth expand */}
                    <div style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.28s ease",
                    }}>
                      <div style={{ overflow: "hidden" }}>
                        <ul className="px-4 py-3 space-y-1 bg-white border-t border-slate-100">
                          {group.items.map((item, j) => (
                            <li
                              key={j}
                              onMouseEnter={() => {
                                setHoverItem(item.img);
                                emitSectionHover(item.name);
                              }}
                              onMouseLeave={() => {
                                setHoverItem(null);
                                emitSectionHover(null);
                              }}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                                         hover:bg-amber-50 cursor-pointer transition-colors group/item"
                            >
                              <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-100
                                              flex items-center justify-center shrink-0
                                              group-hover/item:bg-amber-100 transition-colors">
                                <group.icon className="w-3.5 h-3.5 text-amber-500" />
                              </div>
                              <span className="text-slate-700 text-sm font-medium flex-1
                                               group-hover/item:text-amber-700 transition-colors">
                                {item.name}
                              </span>
                              {item.note && (
                                <span className="text-[11px] font-semibold text-amber-700
                                                 bg-amber-50 border border-amber-200
                                                 px-2 py-0.5 rounded-full shrink-0
                                                 group-hover/item:bg-amber-100 transition-colors">
                                  {item.note}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#lien-he"
              onClick={(e) => { e.preventDefault(); scrollToSection("lien-he"); }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-400
                         hover:from-amber-600 hover:to-orange-500 text-white font-bold
                         px-7 py-3.5 rounded-full shadow-lg shadow-amber-400/30
                         transition-all duration-200 hover:scale-105 text-sm"
            >
              Liên hệ tư vấn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
