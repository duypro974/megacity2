"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronRight, X, ZoomIn, Sparkles, Home, Store, Crown, ArrowRight, Download } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */

const productTypes = [
  {
    code: "TH",
    name: "Nhà phố TH",
    desc: "Lô liền kề mặt đường nội khu 13–17 m, phù hợp ở thực và cho thuê.",
    lots: "1.580 lô",
    area: "90–120 m²",
    icon: Home,
    highlight: false,
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "from-emerald-50 to-teal-50",
    border: "border-emerald-200",
    tag: "Phổ biến nhất",
  },
  {
    code: "T",
    name: "Nhà phố T",
    desc: "Mặt đường trục chính 15–32 m, vị trí đắc địa, tiềm năng thương mại cao.",
    lots: "1.478 lô",
    area: "90–160 m²",
    icon: Home,
    highlight: true,
    gradient: "from-primary-500 to-emerald-600",
    lightBg: "from-primary-50 to-emerald-50",
    border: "border-primary-300",
    tag: "Đầu tư tốt nhất",
  },
  {
    code: "SH",
    name: "Shophouse",
    desc: "Nhà phố thương mại mặt tiền đường lớn, kinh doanh ngay tầng trệt.",
    lots: "Hạn chế",
    area: "100–200 m²",
    icon: Store,
    highlight: false,
    gradient: "from-amber-500 to-orange-500",
    lightBg: "from-amber-50 to-orange-50",
    border: "border-amber-200",
    tag: "Thương mại",
  },
  {
    code: "V",
    name: "Biệt thự V",
    desc: "Biệt thự đơn lập & song lập, khuôn viên rộng, đẳng cấp vượt trội.",
    lots: "102 lô",
    area: "150–200 m²",
    icon: Crown,
    highlight: false,
    gradient: "from-purple-500 to-indigo-500",
    lightBg: "from-purple-50 to-indigo-50",
    border: "border-purple-200",
    tag: "Cao cấp",
  },
];

const specs = [
  { label: "Diện tích đất",              value: "80 m² (5 × 16 m)" },
  { label: "Diện tích xây dựng tầng 1",  value: "80 m²" },
  { label: "Diện tích sàn tầng 2",       value: "≈ 83,8 m²" },
  { label: "Diện tích sàn tầng 3",       value: "≈ 83,8 m²" },
  { label: "Tổng diện tích sàn",         value: "≈ 327,8 m² (không tính sân thượng)" },
  { label: "Chiều cao công trình",       value: "14,50 m" },
  { label: "Mật độ xây dựng",           value: "78%" },
  { label: "Lô áp dụng",                value: "T-30 – Ô số 13, 14 (và các lô tương tự)" },
];

const floors = [
  {
    label: "Tầng 1",
    rooms: "Gara xe · Phòng khách · Bếp · WC",
    color: "bg-primary-50 border-primary-200 text-primary-700",
    dot: "bg-primary-500",
  },
  {
    label: "Tầng 2",
    rooms: "Phòng ngủ · WC · Ban công",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    dot: "bg-emerald-500",
  },
  {
    label: "Tầng 3",
    rooms: "Phòng ngủ · WC · Ban công",
    color: "bg-amber-50 border-amber-200 text-amber-700",
    dot: "bg-amber-500",
  },
  {
    label: "Sân thượng + Tum mái",
    rooms: "Không gian thư giãn · Phơi đồ · Kỹ thuật",
    color: "bg-slate-50 border-slate-200 text-slate-600",
    dot: "bg-slate-400",
  },
];

const materials = [
  "Ốp đá marble đen tia chớp (mặt bậc tam cấp)",
  "Sơn nước màu trắng tường ngoài",
  "Mái đạp vữa xi măng + ngói mũi hài sơn màu xanh mực đậm",
  "Khe joint tường rộng 20 mm, sâu 10 mm",
];

const gallery = [
  {
    src: "/product/Trang 6.jpeg",
    alt: "Mặt bằng kích thước tầng 1 nhà phố PH-B5 Mega City 2",
    caption: "Mặt bằng tầng 1 – A2-03/17",
  },
  {
    src: "/product/Trang 7.jpeg",
    alt: "Mặt bằng kích thước tầng 2 và tầng 3 nhà phố PH-B5",
    caption: "Mặt bằng tầng 2 & 3 – A2-04/17",
  },
  {
    src: "/product/Trang 10.jpeg",
    alt: "Mặt đứng nhà phố liên kế 3 tầng PH-B5",
    caption: "Mặt đứng trục A-B / B-A – A2-07/17",
  },
  {
    src: "/product/Trang 11.jpeg",
    alt: "Mặt cắt A-A nhà phố PH-B5",
    caption: "Mặt cắt A-A – A2-08/17",
  },
  {
    src: "/product/Trang 12.jpeg",
    alt: "Chi tiết cầu thang nhà PH-B5",
    caption: "Chi tiết cầu thang – A2-09/17",
  },
  {
    src: "/product/Trang 4.jpeg",
    alt: "Bảng vật liệu hoàn thiện mẫu nhà PH-B5",
    caption: "Bảng vật liệu hoàn thiện – A2-01/17",
  },
];

const mapLegend = [
  { color: "bg-red-500",    label: "Khu thương mại – dịch vụ – trung tâm" },
  { color: "bg-green-500",  label: "Công viên, trường học, cây xanh" },
  { color: "bg-yellow-400", label: "Đất ở (nhà phố, biệt thự)" },
  { color: "bg-sky-300",    label: "Hồ cảnh quan / tiện ích" },
];

/* ─────────────────────────────────────────
   Lightbox
───────────────────────────────────────── */
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
                     flex items-center justify-center text-white transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-auto rounded-2xl shadow-2xl" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Gallery Item
───────────────────────────────────────── */
function GalleryItem({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="group flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative overflow-hidden rounded-xl bg-slate-100 cursor-zoom-in w-full
                     ring-1 ring-slate-200 hover:ring-primary-400 transition-all duration-300
                     hover:shadow-lg hover:shadow-primary-100"
          aria-label={`Phóng to: ${caption}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src} alt={alt}
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          flex items-end justify-center pb-4">
            <div className="flex items-center gap-1.5 bg-white/95 rounded-full px-3 py-1.5 shadow-md">
              <ZoomIn className="w-3.5 h-3.5 text-primary-600" />
              <span className="text-xs font-semibold text-slate-700">Phóng to</span>
            </div>
          </div>
        </button>
        <p className="text-center text-xs text-slate-400 font-medium tracking-wide">{caption}</p>
      </div>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}

/* ─────────────────────────────────────────
   Animated counter
───────────────────────────────────────── */
function AnimCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const steps = 40;
          const inc = value / steps;
          const timer = setInterval(() => {
            start += inc;
            if (start >= value) { setDisplay(value); clearInterval(timer); }
            else setDisplay(Math.round(start));
          }, 30);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display.toLocaleString("vi-VN")}{suffix}</span>;
}

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
export default function ProductSection() {
  const sectionRef = useScrollFade();
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <section
      id="san-pham"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* ── 1. Tiêu đề chính ── */}
        <div className="mb-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3">
            Sản phẩm
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
            Các loại hình sản phẩm
          </h2>
          <p className="mt-2 text-slate-500 text-sm md:text-base">
            Đa dạng loại hình, đáp ứng mọi nhu cầu ở thực và đầu tư
          </p>
        </div>

        {/* ── 2. 4 product type cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {productTypes.map((p) => (
            <div
              key={p.code}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col gap-2 hover:shadow-md transition-shadow"
            >
              <span className="text-3xl font-black text-primary-600">{p.code}</span>
              <h3 className="font-bold text-slate-800 text-lg">{p.name}</h3>
              <p className="text-slate-500 text-sm flex-1">{p.desc}</p>
              <div className="pt-2 border-t border-slate-200 mt-auto">
                <p className="text-xs text-slate-500">
                  Số lượng:{" "}
                  <span className="font-semibold text-slate-700">{p.lots}</span>
                </p>
                <p className="text-xs text-slate-500">
                  Diện tích:{" "}
                  <span className="font-semibold text-slate-700">{p.area}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── 3. CCC banner ── */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white flex items-center justify-between flex-wrap gap-4 mb-16">
          <div>
            <p className="text-sm font-semibold opacity-80 uppercase tracking-wide mb-1">
              Sắp ra mắt
            </p>
            <h3 className="text-xl font-bold">
              Phân khu CCC – Khu thương mại tương lai
            </h3>
            <p className="text-sm opacity-90 mt-1">
              Trung tâm thương mại, văn phòng và căn hộ cao tầng trong lòng khu đô thị.
            </p>
          </div>
          <ChevronRight className="w-8 h-8 opacity-70 flex-shrink-0" />
        </div>

        {/* ── DIVIDER ── */}
        <div className="border-t border-slate-100 mb-16" />

        {/* ── 4–8. Mẫu nhà PH-B5 ── */}
        <div className="mb-16">

          {/* H3 + intro */}
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
            Mẫu nhà liên kế phố 3 tầng – PH-B5 (5 × 16 m)
          </h3>
          <p className="text-slate-500 text-sm md:text-base mb-8 max-w-3xl">
            Mẫu thiết kế nhà liên kế phố 3 tầng PH-B5 được áp dụng cho các lô có kích thước
            5 × 16 m. Đây là mẫu nhà hoàn thiện mặt ngoài + xây thô bên trong, phù hợp với
            quy hoạch và nhu cầu ở thực tại dự án.
          </p>

          {/* Thông số + Công năng 2 cột */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

            {/* Thông số kỹ thuật */}
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
              <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wide mb-4">
                Thông số kỹ thuật
              </h4>
              <table className="w-full text-sm">
                <tbody>
                  {specs.map((s, i) => (
                    <tr
                      key={s.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                    >
                      <td className="py-2 px-3 text-slate-500 rounded-l-lg w-1/2">
                        {s.label}
                      </td>
                      <td className="py-2 px-3 font-semibold text-slate-800 rounded-r-lg">
                        {s.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Công năng + Vật liệu */}
            <div className="flex flex-col gap-6">
              {/* Công năng */}
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wide mb-4">
                  Công năng sử dụng
                </h4>
                <div className="space-y-2">
                  {floors.map((f) => (
                    <div
                      key={f.label}
                      className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${f.color}`}
                    >
                      <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${f.dot}`} />
                      <div>
                        <p className="font-bold text-sm">{f.label}</p>
                        <p className="text-xs opacity-80 mt-0.5">{f.rooms}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vật liệu hoàn thiện */}
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wide mb-4">
                  Vật liệu hoàn thiện mặt ngoài
                </h4>
                <ul className="space-y-2">
                  {materials.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 mt-1.5" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Gallery ảnh mặt bằng & mặt đứng */}
          <div className="mb-6">
            <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wide mb-5">
              Mặt bằng &amp; mặt đứng mẫu nhà PH-B5
            </h4>
            {/* Desktop: 3 cột | Mobile: 1 cột (scroll dọc) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gallery.map((item) => (
                <GalleryItem
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  caption={item.caption}
                />
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("gallery-ph-b5");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700
                         text-white font-bold px-6 py-3 rounded-full shadow-md shadow-primary-500/20
                         transition-all duration-200 hover:scale-105 text-sm"
            >
              Xem mặt bằng chi tiết
            </button>
            <a
              href="/PH-TKTCT-KT-B5_5x16.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-600
                         text-primary-600 hover:bg-primary-50 font-bold px-6 py-3 rounded-full
                         transition-all duration-200 hover:scale-105 text-sm"
            >
              Tải bản vẽ thi công (PDF)
            </a>
          </div>
        </div>

        {/* Anchor cho gallery */}
        <div id="gallery-ph-b5" />

        {/* ── DIVIDER ── */}
        <div className="border-t border-slate-100 mb-16" />

        {/* ── 9–10. Bản đồ phân lô ── */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
            Bản đồ phân lô tổng thể Mega City 2
          </h3>
          <p className="text-slate-500 text-sm md:text-base mb-6 max-w-3xl">
            Bản đồ phân lô toàn dự án giúp khách hàng dễ dàng xác định vị trí lô, hướng nhà
            và các tiện ích xung quanh.
          </p>

          {/* Chú thích màu */}
          <div className="flex flex-wrap gap-4 mb-5">
            {mapLegend.map((l) => (
              <div key={l.label} className="flex items-center gap-2 text-sm text-slate-600">
                <span className={`w-3 h-3 rounded-sm flex-shrink-0 ${l.color}`} />
                {l.label}
              </div>
            ))}
          </div>

          {/* Ảnh bản đồ full-width + zoomable */}
          <button
            type="button"
            onClick={() => setMapOpen(true)}
            className="relative w-full overflow-hidden rounded-2xl bg-slate-100 group cursor-zoom-in
                       shadow-md hover:shadow-xl transition-shadow duration-300"
            aria-label="Phóng to bản đồ phân lô"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/product/Bản đồ.jpeg"
              alt="Bản đồ phân lô tổng thể dự án Mega City 2 Nhơn Trạch – Khu dân cư theo quy hoạch Long Tân Phú Hội"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors
                            flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity
                              bg-white/90 rounded-full px-4 py-2 shadow flex items-center gap-2">
                <ZoomIn className="w-4 h-4 text-slate-700" />
                <span className="text-xs font-semibold text-slate-700">Phóng to xem chi tiết</span>
              </div>
            </div>
          </button>

          <p className="text-center text-xs text-slate-500 italic mt-3">
            Bản đồ phân lô dự án Mega City 2 Nhơn Trạch (quy mô khoảng 83,94 ha)
          </p>
        </div>

      </div>

      {/* Lightbox bản đồ */}
      {mapOpen && (
        <Lightbox
          src="/product/Bản đồ.jpeg"
          alt="Bản đồ phân lô tổng thể dự án Mega City 2 Nhơn Trạch"
          onClose={() => setMapOpen(false)}
        />
      )}
    </section>
  );
}
