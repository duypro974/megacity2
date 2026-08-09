"use client";

import { useState, useEffect } from "react";
import { ChevronRight, X, ZoomIn, Home, Crown, ArrowRight, Download } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */

const productTypes = [
  {
    code: "TH",
    name: "Nhà vườn liên kế TH",
    desc: "Các dãy nhà liên kế nội khu, phù hợp nhu cầu an cư và đầu tư dài hạn.",
    lots: "1.580 lô",
    area: "khoảng 90–120 m²*",
    icon: Home,
    highlight: false,
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "from-emerald-50 to-teal-50",
    border: "border-emerald-200",
    tag: "Phổ biến nhất",
  },
  {
    code: "T",
    name: "Nhà phố liên kế T",
    desc: "Các dãy nhà phố từ đường nội khu đến trục đường lớn, phù hợp ở kết hợp kinh doanh.",
    lots: "1.478 lô",
    area: "khoảng 90–160 m²*",
    icon: Home,
    highlight: true,
    gradient: "from-primary-500 to-emerald-600",
    lightBg: "from-primary-50 to-emerald-50",
    border: "border-primary-300",
    tag: "Đầu tư tốt nhất",
  },
  {
    code: "V",
    name: "Biệt thự song lập V",
    desc: "Biệt thự song lập quy hoạch thấp tầng, mật độ ≤70%, không gian riêng tư.",
    lots: "102 lô",
    area: "Tùy vị trí*",
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
   Main Component
───────────────────────────────────────── */
export default function ProductSection() {
  const sectionRef = useScrollFade();
  const [mapOpen, setMapOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

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

        {/* ── 2. 3 product type cards (TH / T / V) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-3">
          {productTypes.map((p, i) => {
            const Icon = p.icon;
            const isActive = activeCard === i;
            return (
              <div
                key={p.code}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                className={`relative rounded-2xl overflow-hidden cursor-default transition-all duration-300
                  ${isActive ? "shadow-2xl -translate-y-1.5" : "shadow-md hover:shadow-xl"}
                  ${p.highlight ? "ring-2 ring-primary-400 ring-offset-2" : ""}`}
              >
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${p.gradient}`} />
                {/* Tag */}
                <div className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider
                                  px-2 py-0.5 rounded-full bg-gradient-to-r ${p.gradient} text-white shadow`}>
                  {p.tag}
                </div>
                {/* Body */}
                <div className={`bg-gradient-to-br ${p.lightBg} p-6 flex flex-col border ${p.border} border-t-0`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.gradient}
                                     flex items-center justify-center shadow-md`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-4xl font-black bg-gradient-to-br ${p.gradient}
                                      bg-clip-text text-transparent leading-none`}>
                      {p.code}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-base mb-1 leading-snug">{p.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{p.desc}</p>
                  <div className="mt-4 pt-4 border-t border-white/60 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Số lượng</p>
                      <p className="text-sm font-black text-slate-700 mt-0.5">{p.lots}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Diện tích</p>
                      <p className="text-sm font-black text-slate-700 mt-0.5">{p.area}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ghi chú diện tích */}
        <p className="text-xs text-slate-400 mb-6 mt-1">
          * Diện tích thực tế thay đổi theo từng vị trí và lô cụ thể.
          Tổng cộng 1.478 + 1.580 + 102 = <strong className="text-slate-500">3.160 sản phẩm nhà ở thấp tầng</strong>.
        </p>

        {/* CTA bar */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900
                        p-5 flex flex-wrap items-center justify-between gap-4 mb-6 shadow-xl">
          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Tổng quy mô thấp tầng</p>
            <p className="text-white font-bold text-base mt-0.5">
              3.160 sản phẩm · 83,94 ha · Hạ tầng hoàn thiện 95%
            </p>
          </div>
          <a href="#lien-he"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400
                       text-white font-bold px-5 py-2.5 rounded-xl text-sm
                       transition-all hover:scale-105 shadow-lg shadow-primary-500/30 flex-shrink-0">
            Nhận báo giá <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* ── Shophouse xây sẵn ── */}
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 mb-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm">🏪</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Nhà phố &amp; Shophouse xây sẵn</h4>
              <p className="text-slate-600 text-sm mt-1">
                Một số sản phẩm nhà phố thương mại xây sẵn, phù hợp ở kết hợp kinh doanh.
                Số lượng có hạn – liên hệ xác nhận giỏ hàng và chính sách hiện hành.
              </p>
            </div>
          </div>
        </div>

        {/* ── Khu cao tầng & thương mại ── */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-700 to-slate-800 p-6 text-white flex items-center justify-between flex-wrap gap-4 mb-16">
          <div>
            <p className="text-xs font-bold opacity-60 uppercase tracking-widest mb-1">
              Đang phát triển
            </p>
            <h3 className="text-xl font-bold">
              Khu cao tầng &amp; Thương mại – Dịch vụ
            </h3>
            <p className="text-sm opacity-75 mt-1 max-w-md">
              Quỹ đất cao tầng và thương mại trong quy hoạch Mega City 2. Hiện có dự án
              K-Home Avenue được phát triển trên một phần quỹ đất (9 block, 1.202 căn hộ).
            </p>
          </div>
          <a
            href="#lien-he"
            className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20
                       text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors flex-shrink-0"
          >
            Tìm hiểu thêm <ChevronRight className="w-4 h-4" />
          </a>
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
            <a
              href="#gallery-ph-b5"
              onClick={(e) => { e.preventDefault(); document.getElementById("gallery-ph-b5")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700
                         text-white font-bold px-6 py-3 rounded-full shadow-md shadow-primary-500/20
                         transition-all duration-200 hover:scale-105 text-sm"
            >
              Xem mặt bằng chi tiết <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/PH-TKTCT-KT-B5_5x16.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-600
                         text-primary-600 hover:bg-primary-50 font-bold px-6 py-3 rounded-full
                         transition-all duration-200 hover:scale-105 text-sm"
            >
              <Download className="w-4 h-4" /> Tải bản vẽ thi công (PDF)
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
