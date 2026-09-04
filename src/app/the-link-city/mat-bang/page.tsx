"use client";

import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import ScrollAnimator from "@/components/ScrollAnimator";
import { useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import {
  TLC_OG,
  TLC_DIAGRAM,
  TLC_T3_2B,
  TLC_PRODUCT,
} from "@/lib/cloudinary";
import { SITE_CONFIG } from "@/data/siteConfig";
import {
  ArrowRight,
  ZoomIn,
  Phone,
  MessageCircle,
  Info,
  AlertTriangle,
  BookOpen,
  ChevronRight,
  Building2,
  Store,
  Layers,
  ShieldCheck,
  LayoutGrid,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// JSON-LD schemas (injected via <script> tag in JSX — standard
// pattern for "use client" pages in this project)
// ─────────────────────────────────────────────────────────────
const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/the-link-city/mat-bang`;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mặt Bằng The Link City Dầu Giây – Sơ Đồ Phân Lô & Mẫu Nhà T3-2b",
  description:
    "Sơ đồ phân lô tổng thể The Link City Dầu Giây, cơ cấu sản phẩm, hồ sơ mẫu nhà T3-2b (8 sheet kỹ thuật) và cách đọc mặt bằng.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: "2025-12-23",
  dateModified: "2026-09-03",
  url: PAGE_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  image: TLC_OG,
  about: {
    "@type": "RealEstateListing",
    name: "The Link City",
    url: `${BASE_URL}/the-link-city`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "The Link City", item: `${BASE_URL}/the-link-city` },
    { "@type": "ListItem", position: 3, name: "Mặt bằng", item: PAGE_URL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mặt bằng The Link City có bao nhiêu giai đoạn và phân khu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City được quy hoạch 2 giai đoạn: Giai đoạn 1 (~53 ha, hạ tầng hoàn thiện) và Giai đoạn 2 (~47 ha, đang triển khai). Sơ đồ phân lô tổng thể thể hiện bố cục toàn khu, bao gồm các tuyến đường nội khu, khu vực tiện ích và phân bổ sản phẩm.",
      },
    },
    {
      "@type": "Question",
      name: "T3-2b là mẫu nhà gì và có đại diện cho toàn dự án không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "T3-2b là mẫu nhà được thể hiện trong hồ sơ kỹ thuật được cung cấp. Mẫu này không đại diện mặc định cho toàn bộ sản phẩm của dự án. Thông số thực tế từng lô cần xác nhận trực tiếp với chủ đầu tư Phú Việt Tín.",
      },
    },
    {
      "@type": "Question",
      name: "Hồ sơ T3-2b gồm những gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hồ sơ T3-2b gồm 8 sheet: A01-01 (mặt bằng vị trí mẫu nhà), A01-02 (bảng thông số lô đất), A02-01 (mặt bằng công năng tầng 1), A02-02 (mặt bằng công năng tầng 2, 3), A03-01 (mặt đứng trục A-C, C-A), A03-02 (mặt đứng trục 4-1), A04-01 và A04-02 (mặt cắt).",
      },
    },
    {
      "@type": "Question",
      name: "Làm sao để đọc sơ đồ phân lô tổng thể The Link City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sơ đồ phân lô thể hiện toàn khu từ trên cao với các ký hiệu phân biệt loại sản phẩm, tuyến đường nội khu và khu tiện ích. Để đọc chi tiết từng lô, cần kết hợp với bảng thông số lô đất (A01-02) và mặt bằng vị trí mẫu nhà (A01-01).",
      },
    },
    {
      "@type": "Question",
      name: "Mặt bằng The Link City có những loại sản phẩm nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án cung cấp 3 loại sản phẩm: nhà phố thương mại (shophouse) mặt tiền đường thương mại, nhà phố liên kế nội khu và biệt thự. Tổng cộng 1.397 sản phẩm. Thông số diện tích, số tầng từng loại cần liên hệ chủ đầu tư.",
      },
    },
    {
      "@type": "Question",
      name: "Thông số lô đất mẫu T3-2b là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thông số chi tiết về diện tích, mặt tiền, chiều sâu được thể hiện trong sheet A01-02. Thông số thực tế từng lô trong dự án có thể khác — cần xác nhận trực tiếp với chủ đầu tư Phú Việt Tín.",
      },
    },
    {
      "@type": "Question",
      name: "Sơ đồ phân lô tổng thể có khác với hồ sơ bán hàng không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sơ đồ và hồ sơ T3-2b được cung cấp mang tính tham khảo. Hồ sơ bán hàng chính thức từ chủ đầu tư Phú Việt Tín là tài liệu pháp lý có giá trị ràng buộc. Vui lòng yêu cầu hồ sơ chính thức khi giao dịch.",
      },
    },
    {
      "@type": "Question",
      name: "Có được phép tự sửa đổi thiết kế so với mẫu T3-2b không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Câu hỏi này cần được xác nhận trực tiếp với chủ đầu tư Phú Việt Tín và đơn vị phát triển Kim Oanh Land. Website chỉ cung cấp thông tin tham khảo, không tư vấn pháp lý hay xây dựng.",
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// LIGHTBOX IMAGES — sơ đồ tổng thể + 8 sheets T3-2b
// ─────────────────────────────────────────────────────────────
const DIAGRAM_IMAGES: LightboxImage[] = [
  {
    src: TLC_DIAGRAM,
    alt: "Sơ đồ phân lô tổng thể The Link City Dầu Giây Đồng Nai",
    caption: "Sơ đồ phân lô tổng thể The Link City Dầu Giây · Nguồn: tài liệu dự án",
  },
];

const T3_IMAGES: LightboxImage[] = [
  { src: TLC_T3_2B["a01-01"], alt: "Mặt bằng vị trí mẫu nhà T3-2b The Link City Dầu Giây",             caption: "A01-01 · Mặt bằng vị trí mẫu nhà T3-2b" },
  { src: TLC_T3_2B["a01-02"], alt: "Bảng thông số lô đất mẫu nhà T3-2b The Link City Dầu Giây",        caption: "A01-02 · Bảng thông số lô đất T3-2b" },
  { src: TLC_T3_2B["a02-01"], alt: "Mặt bằng công năng tầng 1 mẫu nhà T3-2b The Link City Dầu Giây",   caption: "A02-01 · Mặt bằng công năng tầng 1" },
  { src: TLC_T3_2B["a02-02"], alt: "Mặt bằng công năng tầng 2-3 mẫu nhà T3-2b The Link City Dầu Giây", caption: "A02-02 · Mặt bằng công năng tầng 2, tầng 3" },
  { src: TLC_T3_2B["a03-01"], alt: "Mặt đứng trục A-C C-A mẫu nhà T3-2b The Link City Dầu Giây",       caption: "A03-01 · Mặt đứng trục A-C, C-A" },
  { src: TLC_T3_2B["a03-02"], alt: "Mặt đứng trục 4-1 mẫu nhà T3-2b The Link City Dầu Giây",           caption: "A03-02 · Mặt đứng trục 4-1" },
  { src: TLC_T3_2B["a04-01"], alt: "Mặt cắt A04-01 mẫu nhà T3-2b The Link City Dầu Giây",              caption: "A04-01 · Mặt cắt" },
  { src: TLC_T3_2B["a04-02"], alt: "Mặt cắt A04-02 mẫu nhà T3-2b The Link City Dầu Giây",              caption: "A04-02 · Mặt cắt" },
];

// ─────────────────────────────────────────────────────────────
// CLUSTER IMAGES — 4 cụm sản phẩm The Link City
// ─────────────────────────────────────────────────────────────
const CLUSTER_IMAGES: LightboxImage[] = [
  {
    src: TLC_PRODUCT["1"],
    alt: "Cụm Shophouse QL1A – Mặt bằng chi tiết The Link City Dầu Giây",
    caption: "Cụm Shophouse QL1A · Nhà phố thương mại mặt tiền Quốc lộ 1A",
  },
  {
    src: TLC_PRODUCT["2"],
    alt: "Cụm Nhà phố liên kế – Mặt bằng chi tiết The Link City Dầu Giây",
    caption: "Cụm Nhà phố liên kế · Townhouse nội khu · Đường nội bộ rộng",
  },
  {
    src: TLC_PRODUCT["3"],
    alt: "Cụm Công viên & Tiện ích – Mặt bằng chi tiết The Link City Dầu Giây",
    caption: "Cụm Công viên & Tiện ích · Công viên cảnh quan · Quảng trường cộng đồng",
  },
  {
    src: TLC_PRODUCT["4"],
    alt: "Cụm Biệt thự & Shophouse – Mặt bằng chi tiết The Link City Dầu Giây",
    caption: "Cụm Biệt thự & Shophouse · Villa & Shophouse · Chi tiết phân lô",
  },
];

const CLUSTER_META = [
  { icon: "🏪", name: "Cụm Shophouse QL1A",        sub: "Nhà phố thương mại · Mặt tiền Quốc lộ 1A" },
  { icon: "🏠", name: "Cụm Nhà phố liên kế",       sub: "Townhouse nội khu · Đường nội bộ rộng" },
  { icon: "🌳", name: "Cụm Công viên & Tiện ích",  sub: "Công viên cảnh quan · Quảng trường cộng đồng" },
  { icon: "🏡", name: "Cụm Biệt thự & Shophouse",  sub: "Villa & Shophouse · Chi tiết phân lô" },
];

// ─────────────────────────────────────────────────────────────
// SHEET CARD — hiển thị 1 sheet với zoom trigger
// ─────────────────────────────────────────────────────────────
function SheetCard({
  image,
  sheetCode,
  title,
  caption,
  index,
  onZoom,
}: {
  image: LightboxImage;
  sheetCode: string;
  title: string;
  caption: string;
  index: number;
  onZoom: (index: number) => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden group hover:shadow-lg transition-shadow">
      {/* Sheet label bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{sheetCode}</span>
        <button
          onClick={() => onZoom(index)}
          className="flex items-center gap-1 text-[10px] font-semibold text-primary-600 hover:text-primary-700
                     bg-primary-50 hover:bg-primary-100 px-2.5 py-1 rounded-lg transition-colors"
          aria-label={`Phóng to ${title}`}
        >
          <ZoomIn className="w-3 h-3" />
          Phóng to
        </button>
      </div>

      {/* Image (click to zoom) */}
      <button
        className="block w-full cursor-zoom-in focus:outline-none"
        onClick={() => onZoom(index)}
        aria-label={`Phóng to ${title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          title={title}
          className="w-full h-auto object-contain bg-slate-50 transition-opacity duration-300 group-hover:opacity-95"
          loading="lazy"
        />
      </button>

      {/* Caption */}
      <div className="px-4 py-3 border-t border-slate-100">
        <p className="text-xs font-semibold text-slate-700">{title}</p>
        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{caption}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
export default function MatBangPage() {
  // Two separate lightbox contexts: diagram + T3 sheets
  const diagramLightbox = useLightbox(DIAGRAM_IMAGES);
  const t3Lightbox      = useLightbox(T3_IMAGES);
  const clusterLightbox = useLightbox(CLUSTER_IMAGES);

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Lightbox portals */}
      {diagramLightbox.LightboxPortal}
      {t3Lightbox.LightboxPortal}
      {clusterLightbox.LightboxPortal}

      <ScrollAnimator />
      <CorpHeader solid />

      {/* HEADER */}
      <SubPageHeader
        tag="Mặt bằng"
        title="Mặt Bằng The Link City Dầu Giây"
        subtitle="Sơ đồ phân lô tổng thể, cơ cấu sản phẩm, hồ sơ mẫu nhà T3-2b và cách đọc mặt bằng."
        breadcrumbs={[
          { label: "The Link City", href: "/the-link-city" },
          { label: "Mặt bằng" },
        ]}
        updatedAt="03/09/2026"
        backHref="/the-link-city"
        backLabel="Quay lại tổng quan The Link City"
      />

      <div className="pb-20 min-h-screen">

        {/* ─── SECTION 01: GIỚI THIỆU TRANG ─── */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="rounded-2xl bg-primary-50 border border-primary-100 p-6 anim-up">
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Trang này tập trung phân tích <strong>mặt bằng The Link City Dầu Giây</strong>:
                sơ đồ phân lô tổng thể, cơ cấu loại hình sản phẩm, hồ sơ mẫu nhà T3-2b (8 sheet kỹ thuật)
                và hướng dẫn đọc mặt bằng. Đây là trang chuyên đề — xem tổng quan dự án tại{" "}
                <Link
                  href="/the-link-city"
                  className="font-semibold text-primary-600 hover:text-primary-700 underline underline-offset-2"
                >
                  Tổng quan The Link City
                </Link>.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Tài liệu sơ đồ và hồ sơ T3-2b mang tính tham khảo. Hồ sơ pháp lý chính thức
                từ chủ đầu tư Phú Việt Tín là căn cứ duy nhất có giá trị ràng buộc khi giao dịch.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 02: SƠ ĐỒ PHÂN LÔ TỔNG THỂ ─── */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">Sơ đồ tổng thể</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
                Sơ đồ phân lô tổng thể The Link City Dầu Giây
              </h2>
              <p className="mt-2 text-sm text-slate-500 max-w-3xl">
                Sơ đồ dưới đây thể hiện toàn bộ bố cục khu đô thị The Link City — 2 giai đoạn,
                các tuyến đường nội khu, phân khu sản phẩm và khu vực tiện ích công cộng.
                Nhấn vào ảnh hoặc nút phóng to để xem chi tiết.
              </p>
            </div>

            {/* 1 ảnh tổng thể duy nhất — KHÔNG crop thêm */}
            <div
              className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 mb-4 cursor-zoom-in anim-up group"
              onClick={() => diagramLightbox.openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to sơ đồ phân lô tổng thể The Link City"
              onKeyDown={(e) => e.key === "Enter" && diagramLightbox.openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={TLC_DIAGRAM}
                alt="Sơ đồ phân lô tổng thể The Link City Dầu Giây Đồng Nai"
                title="Sơ đồ phân lô tổng thể The Link City Dầu Giây"
                className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-95"
                loading="lazy"
              />
              <div className="flex items-center justify-between px-5 py-3 bg-white border-t border-slate-100">
                <p className="text-xs text-slate-500 italic">
                  Sơ đồ phân lô tổng thể The Link City Dầu Giây · Nguồn: tài liệu dự án
                </p>
                <span className="flex items-center gap-1 text-xs font-semibold text-primary-600">
                  <ZoomIn className="w-3.5 h-3.5" />
                  Phóng to
                </span>
              </div>
            </div>

            {/* Phân tích sâu hơn pillar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 anim-stagger">
              <div className="rounded-2xl bg-white border border-slate-200 p-5">
                <h3 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-black text-green-700">1</span>
                  </span>
                  Giai đoạn 1 · ~53 ha
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {[
                    "Hạ tầng kỹ thuật đã hoàn thiện, đưa vào sử dụng",
                    "Một số lô đã được cấp Giấy chứng nhận quyền sử dụng đất",
                    "Tuyến đường nội khu và vỉa hè đã hoàn chỉnh",
                    "Trạm xử lý nước thải khánh thành 25/12/2025 (kế hoạch)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5">
                <h3 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-black text-amber-700">2</span>
                  </span>
                  Giai đoạn 2 · ~47 ha
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {[
                    "Hạ tầng đạt ~55% theo GPXD tại thời điểm 23/12/2025",
                    "Khu vực trung tâm thương mại 2,6 ha đã hoàn tất pháp lý đất",
                    "Dự kiến hoàn thiện hạ tầng trong ~9 tháng từ 23/12/2025",
                    "Đang hoàn thiện điều kiện cấp GCN quyền sử dụng đất",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Summary stats */}
            <div className="rounded-2xl bg-primary-50 border border-primary-100 p-5 anim-up">
              <div className="flex flex-wrap gap-6">
                {[
                  { label: "Tổng sản phẩm",     value: "1.397" },
                  { label: "Tổng quy mô (2 GĐ)", value: "~100 ha" },
                  { label: "Tên quy hoạch",       value: "KDC A1-C1 Dầu Giây" },
                  { label: "Vị trí",              value: "Ngã tư QL1A & QL20, Dầu Giây" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-primary-500 uppercase tracking-widest">{s.label}:</span>
                    <span className="text-sm font-bold text-primary-800">{s.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-primary-600 mt-3">
                Nguồn: Kim Oanh Land · Báo Đồng Nai (23/12/2025). Tổng ~100 ha là tổng hợp từ 2 giai đoạn.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 02b: BẢN ĐỒ CHI TIẾT TỪNG CỤM SẢN PHẨM ─── */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-2 anim-up">
              <span className="section-label">Phân khu sản phẩm</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-1 flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-primary-600 flex-shrink-0" />
                Bản đồ chi tiết từng cụm sản phẩm
              </h2>
              <p className="mt-2 text-sm text-slate-500 max-w-3xl">
                Click vào từng ảnh để xem phóng to và đọc chi tiết lô đất.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 anim-stagger">
              {CLUSTER_META.map((cluster, i) => (
                <button
                  key={cluster.name}
                  onClick={() => clusterLightbox.openLightbox(i)}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden
                             hover:shadow-md hover:border-primary-200 transition-all duration-200
                             text-left cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary-300"
                  aria-label={`Phóng to ${cluster.name}`}
                >
                  {/* Ảnh */}
                  <div className="relative overflow-hidden bg-slate-100 aspect-[4/3]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={CLUSTER_IMAGES[i].src}
                      alt={CLUSTER_IMAGES[i].alt}
                      className="w-full h-full object-cover transition-transform duration-300
                                 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                    <span className="absolute top-2 right-2 flex items-center gap-1 text-[10px] font-bold
                                     bg-white/90 text-slate-700 px-2 py-1 rounded-lg opacity-0
                                     group-hover:opacity-100 transition-opacity duration-200">
                      <ZoomIn className="w-3 h-3" />
                      Phóng to
                    </span>
                  </div>

                  {/* Caption */}
                  <div className="px-4 py-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{cluster.icon}</span>
                      <p className="font-semibold text-slate-800 text-sm leading-snug">{cluster.name}</p>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{cluster.sub}</p>
                  </div>
                </button>
              ))}
            </div>

            <p className="text-[11px] text-slate-400 mt-4 anim-up">
              Nguồn: tài liệu dự án The Link City Dầu Giây · Tham khảo, không thay thế hồ sơ pháp lý chính thức.
            </p>
          </div>
        </section>

        {/* ─── SECTION 03: CƠ CẤU MẶT BẰNG & LOẠI HÌNH SẢN PHẨM ─── */}        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">Cơ cấu sản phẩm</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
                Cơ cấu mặt bằng và loại hình sản phẩm
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                The Link City có 3 loại hình sản phẩm, phân bổ theo từng phân khu trên sơ đồ tổng thể.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 anim-stagger">
              {[
                {
                  type: "Nhà phố thương mại",
                  sub: "Shophouse",
                  icon: Store,
                  color: "amber",
                  desc: "Mặt tiền các trục đường thương mại chính nội khu. Thiết kế kết hợp kinh doanh tầng trệt và sinh hoạt các tầng trên.",
                  note: "Vị trí phân bổ theo sơ đồ phân lô tổng thể",
                },
                {
                  type: "Nhà phố liên kế",
                  sub: "Townhouse",
                  icon: Building2,
                  color: "primary",
                  desc: "Phân bổ trong các ô phố nội khu, hướng tới nhu cầu an cư. Phù hợp gia đình và đầu tư dài hạn tại Dầu Giây.",
                  note: "Chiếm tỷ trọng lớn trong tổng 1.397 sản phẩm",
                },
                {
                  type: "Biệt thự",
                  sub: "Villa",
                  icon: Layers,
                  color: "slate",
                  desc: "Sản phẩm cao cấp, không gian riêng tư, diện tích lớn hơn nhà phố, phân bổ tại vị trí đặc biệt trong khu.",
                  note: "Số lượng và vị trí: liên hệ để biết chi tiết",
                },
              ].map((p) => (
                <div key={p.type} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow anim-card">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4
                    ${p.color === "amber" ? "bg-amber-50" : p.color === "primary" ? "bg-primary-50" : "bg-slate-100"}`}>
                    <p.icon className={`w-6 h-6 ${p.color === "amber" ? "text-amber-600" : p.color === "primary" ? "text-primary-600" : "text-slate-600"}`} />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{p.sub}</p>
                  <h3 className="font-bold text-slate-800 text-base mb-2">{p.type}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{p.desc}</p>
                  <div className="rounded-lg bg-slate-50 px-3 py-2 border border-slate-100">
                    <p className="text-[10px] text-slate-400 italic">{p.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden anim-up">
              <div className="px-5 py-3.5 border-b border-slate-100 bg-slate-50">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Bảng tóm tắt thông tin sản phẩm</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Loại sản phẩm</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Vị trí phân bổ</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Thông số</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { type: "Nhà phố thương mại (Shophouse)", pos: "Mặt tiền đường thương mại nội khu",  spec: "Liên hệ để biết chi tiết" },
                    { type: "Nhà phố liên kế",                pos: "Các ô phố nội khu 2 giai đoạn",     spec: "Liên hệ để biết chi tiết" },
                    { type: "Biệt thự",                       pos: "Khu vực đặc biệt trong dự án",      spec: "Liên hệ để biết chi tiết" },
                  ].map((r) => (
                    <tr key={r.type} className="hover:bg-slate-50">
                      <td className="px-5 py-3 font-semibold text-slate-800">{r.type}</td>
                      <td className="px-5 py-3 text-slate-500 text-xs">{r.pos}</td>
                      <td className="px-5 py-3 text-slate-400 text-xs italic">{r.spec}</td>
                    </tr>
                  ))}
                  <tr className="bg-primary-50">
                    <td className="px-5 py-3 font-bold text-primary-800">Tổng cộng</td>
                    <td className="px-5 py-3 text-primary-600 text-xs font-semibold">2 giai đoạn · ~100 ha</td>
                    <td className="px-5 py-3 font-bold text-primary-800">1.397 sản phẩm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── SECTION 04: MẪU NHÀ T3-2B — GIỚI THIỆU ─── */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-6 anim-up">
              <span className="section-label">Hồ sơ mẫu nhà</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
                Mẫu nhà T3-2b trong hồ sơ dự án
              </h2>
            </div>

            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 mb-6 anim-up">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-amber-800 mb-1">Lưu ý quan trọng về T3-2b</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    <strong>T3-2b là mẫu nhà được thể hiện trong hồ sơ kỹ thuật được cung cấp.</strong>{" "}
                    Mẫu này không được công bố chính thức là mẫu tiêu chuẩn hay mẫu duy nhất của toàn dự án.
                    Thông số thực tế từng lô cần xác nhận trực tiếp với chủ đầu tư Phú Việt Tín trước khi giao dịch.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-3xl mb-2 anim-up">
              Hồ sơ T3-2b gồm <strong>8 sheet kỹ thuật</strong> trình bày đầy đủ một mẫu nhà phố liên kế điển hình:
              từ vị trí trên mặt bằng tổng thể (A01-01), thông số lô đất (A01-02),
              công năng từng tầng (A02-01, A02-02), đến mặt đứng (A03-01, A03-02)
              và mặt cắt (A04-01, A04-02). Nhấn vào từng ảnh để phóng to.
            </p>
            <p className="text-xs text-slate-400 mb-8 anim-up">
              Tất cả ảnh bên dưới đều có thể phóng to và xem fullscreen. Dùng nút mũi tên trái/phải hoặc
              phím bàn phím để chuyển giữa các sheet khi đang ở chế độ fullscreen.
            </p>
          </div>
        </section>

        {/* ─── SECTION 05: MẶT BẰNG VỊ TRÍ MẪU NHÀ — A01-01 ─── */}
        <section className="py-8 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-lg font-bold text-slate-800 mb-6 anim-up">
              Mặt bằng vị trí mẫu nhà T3-2b
            </h2>
            <SheetCard
              image={T3_IMAGES[0]}
              sheetCode="A01-01"
              title="Mặt bằng vị trí mẫu nhà T3-2b"
              caption="Thể hiện vị trí của lô mẫu T3-2b trên sơ đồ phân lô tổng thể. Giúp xác định hướng nhà, lô đất và mối quan hệ với các lô xung quanh, tuyến đường và tiện ích lân cận."
              index={0}
              onZoom={t3Lightbox.openLightbox}
            />
          </div>
        </section>

        {/* ─── SECTION 06: THÔNG SỐ LÔ ĐẤT — A01-02 ─── */}
        <section className="py-8 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-lg font-bold text-slate-800 mb-6 anim-up">
              Bảng thông số lô đất mẫu T3-2b
            </h2>
            <SheetCard
              image={T3_IMAGES[1]}
              sheetCode="A01-02"
              title="Bảng thông số lô đất T3-2b"
              caption="Cung cấp thông số kỹ thuật chi tiết của lô đất mẫu T3-2b: diện tích, mặt tiền, chiều sâu lô và các chỉ tiêu quy hoạch xây dựng liên quan."
              index={1}
              onZoom={t3Lightbox.openLightbox}
            />
            <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
              <p className="text-xs text-slate-500 leading-relaxed">
                <span className="font-semibold text-slate-700">Lưu ý:</span>{" "}
                Thông số trên là của lô mẫu T3-2b trong hồ sơ được cung cấp.
                Thông số thực tế từng lô trong dự án có thể khác — cần xác nhận với chủ đầu tư Phú Việt Tín.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 07: MẶT BẰNG CÔNG NĂNG — A02-01 + A02-02 ─── */}
        <section className="py-8 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-lg font-bold text-slate-800 mb-2 anim-up">
              Mặt bằng định hướng công năng T3-2b
            </h2>
            <p className="text-sm text-slate-500 mb-6 anim-up">
              Hai sheet A02 thể hiện định hướng bố trí công năng cho từng tầng của mẫu nhà T3-2b.
              Lưu ý chữ "định hướng" — đây là gợi ý bố trí, không phải bản vẽ hoàn thiện cố định.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 anim-stagger">
              <SheetCard
                image={T3_IMAGES[2]}
                sheetCode="A02-01"
                title="Mặt bằng công năng tầng 1"
                caption="Định hướng bố trí công năng tầng trệt: không gian kinh doanh, phòng khách, bếp và WC."
                index={2}
                onZoom={t3Lightbox.openLightbox}
              />
              <SheetCard
                image={T3_IMAGES[3]}
                sheetCode="A02-02"
                title="Mặt bằng công năng tầng 2, tầng 3"
                caption="Định hướng bố trí công năng tầng 2 và tầng 3: phòng ngủ, phòng sinh hoạt và WC gia đình."
                index={3}
                onZoom={t3Lightbox.openLightbox}
              />
            </div>
          </div>
        </section>

        {/* ─── SECTION 08: MẶT ĐỨNG — A03-01 + A03-02 ─── */}
        <section className="py-8 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-lg font-bold text-slate-800 mb-2 anim-up">
              Mặt đứng mẫu nhà T3-2b
            </h2>
            <p className="text-sm text-slate-500 mb-6 anim-up">
              Hai sheet A03 thể hiện hình thức kiến trúc bên ngoài của mẫu nhà T3-2b theo 2 trục nhìn.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 anim-stagger">
              <SheetCard
                image={T3_IMAGES[4]}
                sheetCode="A03-01"
                title="Mặt đứng trục A-C, C-A"
                caption="Mặt đứng nhìn từ trước (trục A-C) và từ sau (trục C-A): cửa sổ, ban công, mái và vật liệu hoàn thiện."
                index={4}
                onZoom={t3Lightbox.openLightbox}
              />
              <SheetCard
                image={T3_IMAGES[5]}
                sheetCode="A03-02"
                title="Mặt đứng trục 4-1"
                caption="Mặt đứng nhìn từ bên (trục 4-1): chiều cao từng tầng và hình thức kiến trúc mặt bên nhà."
                index={5}
                onZoom={t3Lightbox.openLightbox}
              />
            </div>
          </div>
        </section>

        {/* ─── SECTION 09: MẶT CẮT — A04-01 + A04-02 ─── */}
        <section className="py-8 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-lg font-bold text-slate-800 mb-2 anim-up">
              Mặt cắt mẫu nhà T3-2b
            </h2>
            <p className="text-sm text-slate-500 mb-6 anim-up">
              Hai sheet A04 cắt qua nhà để thể hiện chiều cao thông tầng, kết cấu sàn, dầm và mái.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 anim-stagger">
              <SheetCard
                image={T3_IMAGES[6]}
                sheetCode="A04-01"
                title="Mặt cắt A04-01"
                caption="Mặt cắt dọc theo trục cắt thứ nhất: chiều cao thông tầng, kết cấu sàn và mái của mẫu nhà T3-2b."
                index={6}
                onZoom={t3Lightbox.openLightbox}
              />
              <SheetCard
                image={T3_IMAGES[7]}
                sheetCode="A04-02"
                title="Mặt cắt A04-02"
                caption="Mặt cắt dọc theo trục cắt thứ hai: chi tiết kết cấu và không gian nội thất theo chiều ngang."
                index={7}
                onZoom={t3Lightbox.openLightbox}
              />
            </div>
          </div>
        </section>

        {/* ─── SECTION 10: CÁCH ĐỌC MẶT BẰNG ─── */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">Hướng dẫn</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
                Cách đọc mặt bằng The Link City
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Hướng dẫn đọc và hiểu các loại bản vẽ trong hồ sơ mẫu nhà T3-2b.
              </p>
            </div>

            <div className="space-y-4 anim-stagger-slow">
              {[
                {
                  code: "A01",
                  title: "Mặt bằng vị trí & Thông số lô đất",
                  icon: "📍",
                  items: [
                    "A01-01 cho biết vị trí lô mẫu trên sơ đồ tổng thể — xác định hướng nhà, vị trí tiếp giáp và khoảng lùi",
                    "A01-02 cung cấp bảng thông số: diện tích lô, mặt tiền, chiều sâu, chỉ giới xây dựng và mật độ xây dựng",
                    "Đọc kết hợp A01-01 và A01-02 để hiểu đầy đủ về đặc điểm lô đất mẫu",
                  ],
                },
                {
                  code: "A02",
                  title: "Mặt bằng công năng các tầng",
                  icon: "🏠",
                  items: [
                    "A02-01: định hướng bố trí tầng 1 — phòng khách, bếp, WC, không gian kinh doanh nếu là shophouse",
                    "A02-02: định hướng tầng 2 và tầng 3 — phòng ngủ, phòng sinh hoạt, WC",
                    "Chữ \"định hướng\" nghĩa là đây là gợi ý bố trí, không phải thiết kế hoàn thiện bắt buộc",
                  ],
                },
                {
                  code: "A03",
                  title: "Mặt đứng kiến trúc",
                  icon: "🏗️",
                  items: [
                    "Mặt đứng thể hiện hình thức kiến trúc bên ngoài: cửa sổ, ban công, mái, vật liệu hoàn thiện",
                    "A03-01 (trục A-C, C-A): mặt trước và mặt sau nhà theo hướng nhìn song song với trục lô",
                    "A03-02 (trục 4-1): mặt bên nhà — thể hiện chiều cao từng tầng và khối lượng công trình",
                  ],
                },
                {
                  code: "A04",
                  title: "Mặt cắt kết cấu",
                  icon: "✂️",
                  items: [
                    "Mặt cắt cắt qua nhà theo chiều dọc để thấy cấu trúc bên trong: chiều cao thông tầng, dầm, sàn, mái",
                    "A04-01 và A04-02 cắt theo 2 trục khác nhau để thể hiện đầy đủ kết cấu không gian",
                    "Đây là tài liệu kỹ thuật — cần đơn vị thiết kế hoặc thi công diễn giải khi áp dụng thực tế",
                  ],
                },
              ].map((sec) => (
                <div key={sec.code} className="rounded-2xl border border-slate-200 bg-white overflow-hidden anim-card">
                  <div className="flex items-center gap-3 px-5 py-3.5 bg-slate-50 border-b border-slate-200">
                    <span className="text-lg">{sec.icon}</span>
                    <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{sec.code}</span>
                      <p className="text-sm font-bold text-slate-800">{sec.title}</p>
                    </div>
                  </div>
                  <ul className="p-5 space-y-2">
                    {sec.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <ChevronRight className="w-3 h-3 text-primary-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 11: LƯU Ý KHI THAM KHẢO HỒ SƠ ─── */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-6 anim-up">
              <span className="section-label">Lưu ý</span>
              <h2 className="text-xl font-bold text-slate-800 mt-1">
                Lưu ý khi tham khảo hồ sơ mặt bằng
              </h2>
            </div>

            <div className="space-y-3 anim-stagger-slow">
              {[
                {
                  icon: BookOpen,
                  title: "Hồ sơ mang tính tham khảo",
                  desc: "Sơ đồ phân lô tổng thể và 8 sheet T3-2b được cung cấp để tham khảo. Hồ sơ bán hàng chính thức từ chủ đầu tư Phú Việt Tín là căn cứ pháp lý duy nhất có giá trị khi giao dịch.",
                },
                {
                  icon: AlertTriangle,
                  title: "T3-2b không đại diện toàn bộ sản phẩm",
                  desc: "T3-2b là một mẫu nhà trong hồ sơ được cung cấp. Dự án có nhiều loại lô và mẫu nhà khác nhau. Không tự suy rộng thông số T3-2b sang các lô khác khi chưa xác nhận.",
                },
                {
                  icon: Info,
                  title: "Thông số diện tích và số tầng",
                  desc: "Diện tích lô, chiều cao, số tầng của từng sản phẩm cụ thể cần xác nhận trực tiếp với chủ đầu tư hoặc đơn vị phân phối. Website không công bố thông số chưa được xác minh.",
                },
                {
                  icon: ShieldCheck,
                  title: "Không tư vấn pháp lý hay xây dựng",
                  desc: "Nội dung trên trang này không phải tư vấn pháp lý, tư vấn xây dựng hay cam kết về tình trạng sản phẩm. Vui lòng tham khảo ý kiến chuyên gia độc lập trước khi ra quyết định.",
                },
              ].map((note) => (
                <div key={note.title} className="flex items-start gap-4 bg-white rounded-2xl border border-slate-200 p-5 anim-card">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <note.icon className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-1">{note.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{note.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 12: FAQ VỀ MẶT BẰNG ─── */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">FAQ</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
                Câu hỏi về mặt bằng The Link City
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Các câu hỏi tập trung vào sơ đồ phân lô, hồ sơ T3-2b và cách đọc bản vẽ.
              </p>
            </div>

            <div className="space-y-3 anim-stagger-slow">
              {faqSchema.mainEntity.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden anim-card"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer
                                       px-5 py-4 font-semibold text-slate-800 text-sm list-none
                                       group-open:text-primary-700 select-none">
                    <span>{faq.name}</span>
                    <span className="flex-shrink-0 w-5 h-5 text-slate-400 group-open:text-primary-600
                                     transition-transform duration-300 group-open:rotate-180">▼</span>
                  </summary>
                  <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 13: CTA ─── */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center anim-up">
            <h2 className="text-2xl font-bold text-white mb-3">
              Cần tư vấn về mặt bằng The Link City?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              Liên hệ để nhận bản đồ mặt bằng cập nhật, thông tin từng lô và hồ sơ bán hàng chính thức
              từ đơn vị phát triển Kim Oanh Land.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300
                           text-slate-900 font-bold text-sm px-7 py-3.5 rounded-full transition-colors
                           shadow-lg shadow-amber-400/30"
              >
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={SITE_CONFIG.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20
                           border border-white/20 text-white font-bold text-sm px-7 py-3.5 rounded-full
                           transition-colors backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Nhắn Zalo
              </a>
            </div>
            <p className="text-slate-400 text-xs">
              Tư vấn viên Kim Oanh Land sẽ liên hệ trong thời gian sớm nhất.
            </p>
          </div>
        </section>

        {/* ─── SECTION 14: INTERNAL LINKS ─── */}
        <section className="py-14 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-6 anim-up">
              <h2 className="text-lg font-bold text-slate-800">Tìm hiểu thêm về The Link City</h2>
              <p className="text-sm text-slate-500 mt-1">
                Xem các chuyên trang khác để có bức tranh toàn diện về dự án.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 anim-stagger">
              {[
                {
                  href: "/the-link-city",
                  title: "Tổng quan The Link City Dầu Giây",
                  desc: "Thông tin toàn diện về dự án: quy mô, vị trí, sản phẩm, tiện ích và pháp lý.",
                  tag: "Tổng quan",
                  highlight: true,
                },
                {
                  href: "/the-link-city/vi-tri",
                  title: "Vị trí The Link City",
                  desc: "Vị trí tại ngã tư QL1A và QL20, xã Dầu Giây. Kết nối giao thông khu vực.",
                  tag: "Vị trí",
                  highlight: false,
                },
                {
                  href: "/the-link-city/tien-ich",
                  title: "Tiện ích The Link City",
                  desc: "50 tiện ích theo công bố: TTMM 2,6 ha, trường liên cấp, công viên.",
                  tag: "Tiện ích",
                  highlight: false,
                },
                {
                  href: "/the-link-city/phap-ly",
                  title: "Pháp lý The Link City",
                  desc: "Chủ đầu tư Phú Việt Tín, tình trạng GCN và VietinBank đồng hành.",
                  tag: "Pháp lý",
                  highlight: false,
                },
                {
                  href: "/the-link-city/tien-do",
                  title: "Tiến độ xây dựng",
                  desc: "Cập nhật tiến độ 2 giai đoạn theo thông tin công bố 23/12/2025.",
                  tag: "Tiến độ",
                  highlight: false,
                },
                {
                  href: "/the-link-city/hinh-anh",
                  title: "Hình ảnh thực tế",
                  desc: "Ảnh thực tế hạ tầng, đường nội khu và tiến độ xây dựng tại dự án.",
                  tag: "Hình ảnh",
                  highlight: false,
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group rounded-2xl border p-5 hover:shadow-md transition-all duration-200 anim-card
                    ${item.highlight
                      ? "bg-primary-50 border-primary-200 hover:border-primary-300"
                      : "bg-white border-slate-200 hover:border-slate-300"}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded
                      ${item.highlight ? "bg-primary-100 text-primary-700" : "bg-slate-100 text-slate-500"}`}>
                      {item.tag}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5
                      ${item.highlight ? "text-primary-500" : "text-slate-400"}`} />
                  </div>
                  <p className={`font-bold text-sm mb-1.5 ${item.highlight ? "text-primary-800" : "text-slate-800"}`}>
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>

            {/* Attribution */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 px-5 py-4 anim-up">
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Thông tin và hồ sơ mặt bằng trên trang này được tổng hợp từ tài liệu dự án và nguồn công bố chính thức.
                Cập nhật theo nguồn: 23/12/2025 · Trang chỉnh sửa: 03/09/2026.
                Vui lòng liên hệ Kim Oanh Land để nhận hồ sơ pháp lý và bán hàng chính thức.
              </p>
            </div>
          </div>
        </section>

      </div>

      <CorpFooter />
    </>
  );
}
