"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import PageCTA from "@/components/PageCTA";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";

// ─────────────────────────────────────────────────────────────
// Cloudinary CDN helpers
// ─────────────────────────────────────────────────────────────
const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good";
const img = (path: string, w = 1280) => `${CDN},w_${w},c_limit/${path}`;

// ảnh 1–4: bản đồ / giao thông / hạ tầng / sân bay
// ảnh 5–10: Toàn cảnh khu vực Mega City 2
const NEWS3 = {
  "1":  img("megacity2/news3/1"),
  "2":  img("megacity2/news3/2"),
  "3":  img("megacity2/news3/3"),
  "4":  img("megacity2/news3/4"),
  "5":  img("megacity2/news3/5"),
  "6":  img("megacity2/news3/6"),
  "7":  img("megacity2/news3/7"),
  "8":  img("megacity2/news3/8"),
  "9":  img("megacity2/news3/9"),
  "10": img("megacity2/news3/10"),
};

const PUBLISHED     = "14/08/2026";
const PUBLISHED_ISO = "2026-08-14";

// ─────────────────────────────────────────────────────────────
// Lightbox images
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: NEWS3["1"],  alt: "Bản đồ vị trí dự án Mega City 2 tại Nhơn Trạch",    caption: "Bản đồ vị trí dự án Mega City 2 tại Nhơn Trạch" },
  { src: NEWS3["2"],  alt: "Hệ thống giao thông kết nối khu vực Mega City 2",    caption: "Hệ thống giao thông kết nối khu vực Mega City 2" },
  { src: NEWS3["3"],  alt: "Hạ tầng giao thông khu vực Nhơn Trạch",              caption: "Hạ tầng giao thông khu vực Nhơn Trạch" },
  { src: NEWS3["4"],  alt: "Sân bay Long Thành và khu vực lân cận",              caption: "Sân bay Long Thành và khu vực lân cận" },
  { src: NEWS3["5"],  alt: "Toàn cảnh khu vực Mega City 2 – ảnh 1",             caption: "Toàn cảnh khu vực Mega City 2" },
  { src: NEWS3["6"],  alt: "Toàn cảnh khu vực Mega City 2 – ảnh 2",             caption: "Toàn cảnh khu vực Mega City 2" },
  { src: NEWS3["7"],  alt: "Toàn cảnh khu vực Mega City 2 – ảnh 3",             caption: "Toàn cảnh khu vực Mega City 2" },
  { src: NEWS3["8"],  alt: "Toàn cảnh khu vực Mega City 2 – ảnh 4",             caption: "Toàn cảnh khu vực Mega City 2" },
  { src: NEWS3["9"],  alt: "Toàn cảnh khu vực Mega City 2 – ảnh 5",             caption: "Toàn cảnh khu vực Mega City 2" },
  { src: NEWS3["10"], alt: "Toàn cảnh khu vực Mega City 2 – ảnh 6",             caption: "Toàn cảnh khu vực Mega City 2" },
];

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const overviewRows = [
  { label: "Tên dự án",  value: "Mega City 2" },
  { label: "Vị trí",     value: "Nhơn Trạch, Đồng Nai" },
  { label: "Loại hình",  value: "Đất nền, nhà phố, biệt thự" },
  { label: "Quy mô",     value: "Hơn 2.400 sản phẩm" },
  { label: "Kết nối",    value: "TP.HCM, sân bay Long Thành, cao tốc Biên Hòa – Vũng Tàu" },
  { label: "Pháp lý",    value: "Theo quy định hiện hành" },
];

const nearbyAreas = [
  "TP.HCM",
  "Thành phố Biên Hòa",
  "Sân bay quốc tế Long Thành",
  "Các khu công nghiệp tại Đồng Nai",
  "Hệ thống cảng biển khu vực phía Nam",
];

const infraFactors = [
  "Sân bay quốc tế Long Thành",
  "Cao tốc Biên Hòa – Vũng Tàu",
  "Vành đai 3 TP.HCM",
  "Hệ thống giao thông kết nối giữa Đồng Nai và TP.HCM",
];

const airportImpacts = [
  "Thị trường bất động sản",
  "Hoạt động thương mại",
  "Dịch vụ & logistics",
  "Nhu cầu về nhà ở",
];

const locationChecklist = [
  "Thời gian di chuyển đến trung tâm",
  "Mức độ thuận tiện hàng ngày",
  "Khả năng kết nối đa chiều",
];

const utilitiesChecklist = [
  "Trường học, bệnh viện",
  "Trung tâm thương mại",
  "Khu vui chơi, công viên",
  "Khu công nghiệp lân cận",
];

const planningChecklist = [
  "Bản đồ quy hoạch chính thức",
  "Hạ tầng giao thông theo quy hoạch",
  "Kế hoạch phát triển của địa phương",
];

const investChecklist = [
  "Pháp lý đầy đủ và minh bạch",
  "Giá bán phù hợp khả năng tài chính",
  "Tiến độ thi công thực tế",
  "Chính sách thanh toán linh hoạt",
  "Khả năng phát triển trong tương lai",
];

const faqs = [
  {
    q: "Mega City 2 nằm ở đâu?",
    a: "Dự án nằm tại huyện Nhơn Trạch, tỉnh Đồng Nai.",
  },
  {
    q: "Mega City 2 cách TP.HCM bao xa?",
    a: "Bạn nên tham khảo bản đồ thực tế và các tuyến đường kết nối để xác định khoảng cách cụ thể.",
  },
  {
    q: "Vị trí Mega City 2 có gần sân bay Long Thành không?",
    a: "Dự án nằm trong khu vực được hưởng lợi từ hệ thống hạ tầng đang phát triển, bao gồm sân bay quốc tế Long Thành.",
  },
  {
    q: "Vì sao vị trí lại quan trọng khi đầu tư bất động sản?",
    a: "Vị trí có thể ảnh hưởng đến khả năng kết nối, tính thanh khoản và tiềm năng tăng giá của bất động sản.",
  },
  {
    q: "Có thể xem bản đồ Mega City 2 ở đâu?",
    a: null, // rendered with link
  },
];

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
      {children}
    </h2>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 pl-0">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3.5 text-slate-700 text-base font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300
                 text-amber-800 font-bold text-sm px-5 py-2.5 rounded-xl
                 hover:bg-amber-100 hover:border-amber-400 transition-all"
    >
      {children}
    </a>
  );
}

// Gallery grid for panoramic shots (images 5–10)
function PanoramaGallery({
  images,
  onOpen,
  lightboxImages,
}: {
  images: typeof LIGHTBOX_IMAGES;
  onOpen: (idx: number) => void;
  lightboxImages: LightboxImage[];
}) {
  // indices 4–9 (news3 ảnh 5–10, 0-indexed in lightbox)
  const slots = [4, 5, 6, 7, 8, 9];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-8">
      {slots.map((idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => onOpen(idx)}
          aria-label={lightboxImages[idx]?.alt}
          className="relative overflow-hidden rounded-xl border border-slate-200 aspect-video
                     group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LIGHTBOX_IMAGES[idx].src}
            alt={LIGHTBOX_IMAGES[idx].alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
        </button>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function ViTriMegaCity2Client() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero header ── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span className="text-slate-300">/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium line-clamp-1">Vị trí Mega City 2 ở đâu?</span>
            </nav>

            {/* Category + meta */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Vị trí & Kết nối
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 7 phút đọc</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Vị trí Mega City 2 ở đâu? Phân tích khả năng kết nối và tiềm năng phát triển khu vực Nhơn Trạch
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Khám phá vị trí chiến lược của Mega City 2 tại Nhơn Trạch — khả năng kết nối với
              TP.HCM, sân bay Long Thành và các tuyến giao thông trọng điểm đang hình thành.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-50 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to bản đồ vị trí"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={NEWS3["1"]}
                alt="Bản đồ vị trí dự án Mega City 2 tại Nhơn Trạch"
                className="w-full h-auto block"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Bản đồ vị trí dự án Mega City 2 tại Nhơn Trạch
            </p>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Article ── */}
            <article className="flex-1 min-w-0">

              {/* Intro */}
              <div className="space-y-5 mb-14">
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Vị trí luôn là một trong những yếu tố quan trọng nhất khi đánh giá tiềm năng
                  của một dự án bất động sản.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Một dự án sở hữu vị trí thuận lợi không chỉ giúp việc di chuyển trở nên dễ dàng
                  hơn mà còn có thể tác động trực tiếp đến giá trị bất động sản trong tương lai.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Mega City 2 là một trong những dự án đang nhận được nhiều sự quan tâm tại khu
                  vực Nhơn Trạch, Đồng Nai. Bên cạnh yếu tố quy hoạch, hệ thống hạ tầng đang được
                  đầu tư mạnh mẽ cũng là một trong những lý do khiến nhiều nhà đầu tư chú ý đến
                  khu vực này.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Vậy vị trí Mega City 2 nằm ở đâu? Khả năng kết nối với TP.HCM, sân bay Long
                  Thành và các khu vực lân cận như thế nào? Hãy cùng tìm hiểu chi tiết trong bài
                  viết dưới đây.
                </p>
              </div>

              {/* ── Section 1: Mega City 2 nằm ở đâu? ── */}
              <section className="mb-14">
                <SectionHeading>Mega City 2 nằm ở đâu?</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 tọa lạc tại huyện Nhơn Trạch, tỉnh Đồng Nai.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch là một trong những khu vực đang được quy hoạch để trở thành đô thị
                    vệ tinh của TP.HCM. Nhờ vị trí địa lý thuận lợi, khu vực này đang thu hút sự
                    quan tâm của nhiều nhà đầu tư bất động sản.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một số khu vực kết nối xung quanh bao gồm:
                  </p>
                  <BulletList items={nearbyAreas} />
                </div>
              </section>

              {/* Overview table */}
              <div className="mb-10 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-48">
                        Thông tin
                      </th>
                      <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Chi tiết
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {overviewRows.map((row) => (
                      <tr key={row.label} className="hover:bg-amber-50/40 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-700">{row.label}</td>
                        <td className="px-6 py-4 text-slate-600">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Quick links */}
              <div className="flex flex-wrap gap-3 mb-14">
                <LinkButton href="/mega-city-2">Tổng quan dự án →</LinkButton>
                <LinkButton href="/mega-city-2/vi-tri">Bản đồ vị trí chi tiết →</LinkButton>
                <LinkButton href="/mega-city-2/bang-gia">Bảng giá →</LinkButton>
                <LinkButton href="/mega-city-2/phap-ly">Pháp lý →</LinkButton>
              </div>

              {/* Image 2 — Giao thông */}
              <ArticleFigure
                src={NEWS3["2"]}
                alt="Hệ thống giao thông kết nối khu vực Mega City 2"
                caption="Hệ thống giao thông kết nối khu vực Mega City 2"
                images={images} index={1} onOpen={openLightbox}
              />

              {/* ── Section 2: Vị trí là lợi thế ── */}
              <section className="mb-14">
                <SectionHeading>Vị trí là lợi thế quan trọng nhất của Mega City 2</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không phải ngẫu nhiên mà nhiều dự án bất động sản tại Nhơn Trạch lại nhận được
                    sự quan tâm lớn trong những năm gần đây.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Yếu tố quan trọng nhất chính là khả năng kết nối. Những công trình hạ tầng đang
                    được đầu tư có thể tạo ra nhiều thay đổi đối với thị trường bất động sản trong
                    tương lai.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một số yếu tố đang tác động trực tiếp đến khu vực bao gồm:
                  </p>
                  <BulletList items={infraFactors} />
                </div>
              </section>

              {/* Image 3 — Hạ tầng */}
              <ArticleFigure
                src={NEWS3["3"]}
                alt="Hạ tầng giao thông khu vực Nhơn Trạch"
                caption="Hạ tầng giao thông khu vực Nhơn Trạch"
                images={images} index={2} onOpen={openLightbox}
              />

              {/* ── Section 3: Kết nối TP.HCM ── */}
              <section className="mb-14">
                <SectionHeading>Khả năng kết nối từ Mega City 2 đến TP.HCM</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    TP.HCM luôn là trung tâm kinh tế lớn nhất khu vực phía Nam. Vì vậy, khả năng
                    kết nối giữa Nhơn Trạch và TP.HCM luôn là yếu tố được quan tâm hàng đầu.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong những năm gần đây, hàng loạt công trình giao thông đã và đang được đầu
                    tư nhằm rút ngắn thời gian di chuyển giữa hai khu vực. Những yếu tố này có thể
                    mang lại nhiều cơ hội cho thị trường bất động sản tại Nhơn Trạch.
                  </p>
                  <LinkButton href="/mega-city-2/vi-tri">Xem bản đồ liên kết vùng →</LinkButton>
                </div>
              </section>

              {/* Image 4 — Sân bay */}
              <ArticleFigure
                src={NEWS3["4"]}
                alt="Sân bay Long Thành và khu vực lân cận"
                caption="Sân bay Long Thành và khu vực lân cận"
                images={images} index={3} onOpen={openLightbox}
              />

              {/* ── Section 4: Sân bay Long Thành ── */}
              <section className="mb-14">
                <SectionHeading>Sân bay Long Thành và tác động đến Mega City 2</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sân bay quốc tế Long Thành là một trong những dự án hạ tầng lớn nhất tại khu
                    vực phía Nam. Việc xây dựng sân bay không chỉ tạo ra sự thay đổi về giao thông
                    mà còn tác động đến nhiều lĩnh vực:
                  </p>
                  <BulletList items={airportImpacts} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Những khu vực có vị trí kết nối thuận lợi với sân bay thường nhận được nhiều
                    sự quan tâm từ các nhà đầu tư.
                  </p>
                </div>
              </section>

              {/* ── Section 5: Cao tốc Biên Hòa – Vũng Tàu ── */}
              <section className="mb-14">
                <SectionHeading>Cao tốc Biên Hòa – Vũng Tàu và cơ hội phát triển</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hệ thống giao thông luôn là một trong những động lực quan trọng đối với sự phát
                    triển của thị trường bất động sản.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tuyến cao tốc Biên Hòa – Vũng Tàu được kỳ vọng sẽ giúp tăng khả năng kết nối
                    giữa các khu vực trong tỉnh Đồng Nai. Điều này có thể tạo ra nhiều cơ hội mới
                    cho thị trường bất động sản tại Nhơn Trạch.
                  </p>
                </div>
              </section>

              {/* ── Panorama gallery (ảnh 5–10) ── */}
              <section className="mb-14">
                <SectionHeading>Toàn cảnh khu vực Mega City 2</SectionHeading>
                <div className="pt-6">
                  <p className="text-slate-600 text-[17px] leading-[1.85] mb-6">
                    Nhìn từ trên cao, khu vực dự án Mega City 2 hiện ra với quy mô rộng lớn và vị
                    trí kết nối đa chiều — minh chứng cho tiềm năng phát triển của một đô thị vệ
                    tinh đang hình thành tại Nhơn Trạch.
                  </p>
                  <PanoramaGallery
                    images={LIGHTBOX_IMAGES}
                    onOpen={openLightbox}
                    lightboxImages={LIGHTBOX_IMAGES}
                  />
                  <p className="text-xs text-slate-400 italic text-center mt-2">
                    Nhấn vào ảnh để phóng to — Toàn cảnh khu vực Mega City 2
                  </p>
                </div>
              </section>

              {/* ── Section 6: Những yếu tố cần đánh giá ── */}
              <section className="mb-14">
                <SectionHeading>Những yếu tố cần đánh giá khi lựa chọn bất động sản theo vị trí</SectionHeading>
                <div className="pt-6 space-y-8">

                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">1. Khoảng cách đến trung tâm</h3>
                    <BulletList items={locationChecklist} />
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">2. Hệ thống tiện ích xung quanh</h3>
                    <BulletList items={utilitiesChecklist} />
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">3. Quy hoạch trong tương lai</h3>
                    <BulletList items={planningChecklist} />
                    <p className="text-slate-600 text-[17px] leading-[1.85] mt-4">
                      Bạn nên kiểm tra kỹ các thông tin này trước khi đưa ra quyết định.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Section 7: Có nên chọn? ── */}
              <section className="mb-14">
                <SectionHeading>Có nên lựa chọn Mega City 2 dựa trên yếu tố vị trí?</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu bạn đang tìm kiếm một dự án tại khu vực Nhơn Trạch, vị trí chắc chắn là
                    một trong những yếu tố cần được ưu tiên. Tuy nhiên, quyết định đầu tư không
                    nên chỉ dựa vào vị trí. Bạn cũng nên xem xét thêm:
                  </p>
                  <BulletList items={investChecklist} />
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkButton href="/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach">
                      Phân tích: Có nên đầu tư Mega City 2? →
                    </LinkButton>
                    <LinkButton href="/mega-city-2/phap-ly">Pháp lý dự án →</LinkButton>
                    <LinkButton href="/mega-city-2/bang-gia">Bảng giá 2026 →</LinkButton>
                  </div>
                </div>
              </section>

              {/* ── Tham khảo thêm ── */}
              <section className="mb-14">
                <SectionHeading>Tham khảo thêm các thông tin liên quan</SectionHeading>
                <div className="pt-6">
                  <p className="text-slate-600 text-[17px] leading-[1.85] mb-6">
                    Để có cái nhìn toàn diện hơn về dự án, bạn có thể xem thêm:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <LinkButton href="/mega-city-2">Tổng quan dự án →</LinkButton>
                    <LinkButton href="/mega-city-2/vi-tri">Vị trí Mega City 2 →</LinkButton>
                    <LinkButton href="/mega-city-2/tien-ich">Tiện ích Mega City 2 →</LinkButton>
                    <LinkButton href="/mega-city-2/phap-ly">Pháp lý Mega City 2 →</LinkButton>
                    <LinkButton href="/mega-city-2/tien-do">Tiến độ Mega City 2 →</LinkButton>
                    <LinkButton href="/mega-city-2/mat-bang">Mặt bằng →</LinkButton>
                    <LinkButton href="/mega-city-2/hinh-anh">Hình ảnh Mega City 2 →</LinkButton>
                    <LinkButton href="/mega-city-2/thanh-toan">Phương thức thanh toán →</LinkButton>
                    <LinkButton href="/mega-city-2/faq">FAQ →</LinkButton>
                  </div>
                </div>
              </section>

              {/* ── FAQ ── */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-900 px-7 py-6">
                  <h2 className="text-white font-black text-xl tracking-tight">Câu hỏi thường gặp</h2>
                </div>
                <div className="divide-y divide-slate-100">
                  {faqs.map(({ q, a }) => (
                    <div key={q} className="px-7 py-6 hover:bg-slate-50 transition-colors">
                      <p className="font-bold text-slate-800 text-base mb-2">{q}</p>
                      {a ? (
                        <p className="text-slate-500 text-[15px] leading-relaxed">{a}</p>
                      ) : (
                        <p className="text-slate-500 text-[15px] leading-relaxed">
                          Bạn có thể tham khảo thêm tại{" "}
                          <a
                            href="/mega-city-2/vi-tri"
                            className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-800"
                          >
                            /mega-city-2/vi-tri
                          </a>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28 space-y-6">

                {/* Quick info card */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-amber-500 px-6 py-4">
                    <p className="text-white font-black text-sm uppercase tracking-wider">Thông tin nhanh</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {overviewRows.map((row) => (
                      <div key={row.label} className="px-6 py-4">
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">
                          {row.label}
                        </p>
                        <p className="text-sm font-bold text-slate-800">{row.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-wider">Thông tin dự án</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      { label: "Tổng quan dự án",         href: "/mega-city-2" },
                      { label: "Bản đồ vị trí",           href: "/mega-city-2/vi-tri" },
                      { label: "Bảng giá 2026",           href: "/mega-city-2/bang-gia" },
                      { label: "Pháp lý dự án",           href: "/mega-city-2/phap-ly" },
                      { label: "Tiện ích nội khu",        href: "/mega-city-2/tien-ich" },
                      { label: "Tiến độ thi công",        href: "/mega-city-2/tien-do" },
                      { label: "Mặt bằng",                href: "/mega-city-2/mat-bang" },
                      { label: "Phương thức thanh toán",  href: "/mega-city-2/thanh-toan" },
                      { label: "FAQ",                     href: "/mega-city-2/faq" },
                    ].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between px-6 py-4 text-sm font-semibold
                                   text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors group"
                      >
                        <span>{link.label}</span>
                        <span className="text-slate-300 group-hover:text-amber-500 transition-colors text-base">→</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>

        {/* CTA */}
        <PageCTA
          title="Tìm hiểu vị trí & cơ hội đầu tư Mega City 2"
          subtitle="Liên hệ để được tư vấn chi tiết về vị trí, pháp lý và bảng giá mới nhất."
          variant="default"
        />

        {/* Related content */}
        <RelatedContent
          items={[
            {
              href: "/mega-city-2",
              title: "Tổng quan Mega City 2 Nhơn Trạch",
              description: "Thông tin tổng hợp về dự án: quy mô, chủ đầu tư và pháp lý.",
              tag: "Tổng quan",
            },
            {
              href: "/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach",
              title: "Có nên đầu tư Mega City 2 năm 2026?",
              description: "Phân tích tiềm năng đầu tư dựa trên vị trí, pháp lý và bảng giá.",
              tag: "Phân tích",
            },
            {
              href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",
              title: "Bảng giá Mega City 2 mới nhất 2026",
              description: "Cập nhật giá tham khảo các loại sản phẩm tại Mega City 2.",
              tag: "Bảng giá",
            },
            {
              href: "/mega-city-2/phap-ly",
              title: "Pháp lý – QĐ 1772",
              description: "Tình trạng pháp lý và điều kiện giao dịch.",
              tag: "Pháp lý",
            },
            {
              href: "/mega-city-2/tien-ich",
              title: "Tiện ích nội khu",
              description: "Các tiện ích được quy hoạch trong khu dân cư.",
              tag: "Tiện ích",
            },
            {
              href: "/mega-city-2/faq",
              title: "FAQ – Câu hỏi thường gặp",
              description: "Giải đáp các câu hỏi về giá, pháp lý và tiến độ.",
              tag: "FAQ",
            },
          ]}
        />
      </div>

      <CorpFooter />
      {LightboxPortal}
    </>
  );
}
