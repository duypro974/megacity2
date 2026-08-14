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

const NEWS2 = {
  "1": img("megacity2/news2/1"),
  "2": img("megacity2/news2/2"),
  "3": img("megacity2/news2/3"),
  "4": img("megacity2/news2/4"),
  "5": img("megacity2/news2/5"),
};

const BASE_URL   = "https://kimoanhdongnai.com.vn";
const PAGE_URL   = `${BASE_URL}/tin-tuc/bang-gia-mega-city-2-moi-nhat`;
const PUBLISHED  = "13/08/2026";
const PUBLISHED_ISO = "2026-08-13";

// ─────────────────────────────────────────────────────────────
// JSON-LD Schemas
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bảng giá Mega City 2 Nhơn Trạch mới nhất năm 2026",
  description:
    "Cập nhật bảng giá Mega City 2 Nhơn Trạch mới nhất năm 2026. Tham khảo mức giá từng loại sản phẩm, các yếu tố ảnh hưởng và những lưu ý trước khi đầu tư.",
  image: [NEWS2["1"], NEWS2["2"], NEWS2["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO,
  dateModified: PUBLISHED_ISO,
  url: PAGE_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  about: {
    "@type": "RealEstateListing",
    name: "Mega City 2 Nhơn Trạch",
    url: `${BASE_URL}/mega-city-2`,
  },
  keywords:
    "bảng giá Mega City 2, giá Mega City 2 Nhơn Trạch, giá đất Mega City 2, giá nhà phố Mega City 2",
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  name: "Bảng giá Mega City 2 Nhơn Trạch 2026",
  description: "Giá tham khảo các sản phẩm tại dự án Mega City 2, Nhơn Trạch, Đồng Nai.",
  priceCurrency: "VND",
  lowPrice: "1150000000",
  highPrice: "2100000000",
  offerCount: "3",
  url: PAGE_URL,
  seller: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Bảng giá Mega City 2 hiện nay là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giá tham khảo của dự án bắt đầu từ khoảng 1,15 tỷ đồng tùy theo từng loại sản phẩm. Mức giá thực tế có thể thay đổi theo thời điểm và chính sách bán hàng.",
      },
    },
    {
      "@type": "Question",
      name: "Giá đất Mega City 2 có thay đổi không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Giá bất động sản nói chung và Mega City 2 nói riêng có thể thay đổi theo thời điểm, chính sách bán hàng và biến động thị trường.",
      },
    },
    {
      "@type": "Question",
      name: "Yếu tố nào ảnh hưởng đến giá Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Các yếu tố chính bao gồm: vị trí lô, diện tích, mặt tiền đường, hướng nhà, chính sách thanh toán và thời điểm giao dịch.",
      },
    },
    {
      "@type": "Question",
      name: "Làm thế nào để cập nhật bảng giá mới nhất?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Bạn nên theo dõi trực tiếp trên website ${BASE_URL} hoặc liên hệ tư vấn để cập nhật thông tin mới nhất.`,
      },
    },
    {
      "@type": "Question",
      name: "Có thể xem thêm thông tin ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Bạn có thể tham khảo tổng quan dự án tại ${BASE_URL}/mega-city-2, vị trí tại ${BASE_URL}/mega-city-2/vi-tri, pháp lý tại ${BASE_URL}/mega-city-2/phap-ly.`,
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bảng giá Mega City 2 mới nhất 2026",
      item: PAGE_URL,
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// Lightbox images list
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: NEWS2["1"], alt: "Toàn cảnh dự án Mega City 2 Nhơn Trạch",       caption: "Toàn cảnh dự án Mega City 2 Nhơn Trạch" },
  { src: NEWS2["2"], alt: "Nhà phố tại dự án Mega City 2",                 caption: "Nhà phố tại dự án Mega City 2" },
  { src: NEWS2["3"], alt: "Biệt thự tại dự án Mega City 2",                caption: "Biệt thự tại dự án Mega City 2" },
  { src: NEWS2["4"], alt: "Bảng giá tham khảo dự án Mega City 2",          caption: "Bảng giá tham khảo dự án Mega City 2" },
  { src: NEWS2["5"], alt: "Vị trí dự án Mega City 2 tại Nhơn Trạch",       caption: "Vị trí dự án Mega City 2 tại Nhơn Trạch" },
];

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const overviewRows = [
  { label: "Tên dự án",   value: "Mega City 2" },
  { label: "Vị trí",      value: "Nhơn Trạch, Đồng Nai" },
  { label: "Loại hình",   value: "Đất nền, nhà phố, biệt thự" },
  { label: "Quy mô",      value: "Hơn 2.400 sản phẩm" },
  { label: "Hạ tầng",     value: "Đường nội khu, tiện ích, giao thông kết nối" },
  { label: "Pháp lý",     value: "Theo quy định hiện hành" },
];

const priceRows = [
  { type: "Nhà phố TH", price: "Từ 1,15 tỷ đồng" },
  { type: "Nhà phố T",  price: "Từ 1,3 tỷ đồng" },
  { type: "Biệt thự V", price: "Từ 2,1 tỷ đồng" },
];

const priceFactors = [
  "Vị trí lô (mặt tiền đường lớn, góc,...)",
  "Diện tích sản phẩm",
  "Hướng nhà",
  "Chính sách bán hàng tại thời điểm",
  "Tiến độ thanh toán",
  "Các chương trình hỗ trợ tài chính",
];

const compareFacts = [
  "Giá trung bình của khu vực Nhơn Trạch",
  "Khả năng kết nối giao thông",
  "Tiềm năng phát triển dài hạn",
  "Quy hoạch tổng thể",
  "Hạ tầng hiện có và dự kiến",
  "Tình trạng pháp lý dự án",
];

const suitableFor = [
  "Tìm kiếm cơ hội đầu tư dài hạn tại Nhơn Trạch",
  "Quan tâm đến thị trường bất động sản Đồng Nai",
  "Muốn sở hữu tài sản tại khu vực đang phát triển hạ tầng",
];

const checklistBefore = [
  "Kiểm tra thông tin pháp lý đầy đủ",
  "Tham khảo bảng giá cập nhật mới nhất",
  "Cập nhật tiến độ thi công thực tế",
  "Đánh giá khả năng tài chính cá nhân",
];

const faqs = [
  {
    q: "Bảng giá Mega City 2 hiện nay là bao nhiêu?",
    a: "Giá tham khảo của dự án bắt đầu từ khoảng 1,15 tỷ đồng tùy theo từng loại sản phẩm. Mức giá thực tế có thể thay đổi theo thời điểm và chính sách bán hàng.",
  },
  {
    q: "Giá đất Mega City 2 có thay đổi không?",
    a: "Có. Giá bất động sản nói chung và Mega City 2 nói riêng có thể thay đổi theo thời điểm, chính sách bán hàng và biến động thị trường.",
  },
  {
    q: "Yếu tố nào ảnh hưởng đến giá Mega City 2?",
    a: "Các yếu tố chính bao gồm: vị trí lô, diện tích, mặt tiền đường, hướng nhà, chính sách thanh toán và thời điểm giao dịch.",
  },
  {
    q: "Làm thế nào để cập nhật bảng giá mới nhất?",
    a: null, // rendered with link
  },
  {
    q: "Có thể xem thêm thông tin ở đâu?",
    a: null, // rendered with links
  },
];

// ─────────────────────────────────────────────────────────────
// Reusable sub-components
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
        <li key={item} className="flex items-center gap-3.5 text-slate-700 text-base font-medium">
          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
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

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function BangGiaMegaCity2Page() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
              <span className="text-slate-500 font-medium line-clamp-1">Bảng giá Mega City 2</span>
            </nav>

            {/* Category + meta */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Bảng giá
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
              Bảng giá Mega City 2 Nhơn Trạch mới nhất năm 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Tham khảo mức giá từng loại sản phẩm, các yếu tố ảnh hưởng đến giá
              và những lưu ý quan trọng trước khi đưa ra quyết định đầu tư.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-50 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh toàn cảnh"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={NEWS2["1"]}
                alt="Toàn cảnh dự án Mega City 2 Nhơn Trạch"
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
              Toàn cảnh dự án Mega City 2 Nhơn Trạch
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
                  Bảng giá luôn là một trong những thông tin được nhà đầu tư quan tâm nhiều nhất khi
                  tìm hiểu về một dự án bất động sản.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Tại khu vực Nhơn Trạch, Mega City 2 đang nhận được nhiều sự chú ý nhờ vị trí kết
                  nối thuận lợi, hệ thống hạ tầng đang được đầu tư mạnh và tiềm năng phát triển
                  trong tương lai.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Tuy nhiên, giá bán của bất động sản không phải là một con số cố định. Giá có thể
                  thay đổi tùy thuộc vào vị trí, diện tích, loại hình sản phẩm, chính sách bán hàng
                  và thời điểm giao dịch.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Trong bài viết này, chúng tôi sẽ tổng hợp những thông tin tham khảo về bảng giá
                  Mega City 2 nhằm giúp người mua có thêm dữ liệu trước khi đưa ra quyết định.
                </p>
              </div>

              {/* Section: Tổng quan */}
              <section className="mb-14">
                <SectionHeading>Tổng quan về Mega City 2 Nhơn Trạch</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 là một dự án bất động sản tại Nhơn Trạch, Đồng Nai với nhiều loại
                    hình sản phẩm khác nhau. Một số thông tin cơ bản:
                  </p>
                </div>
              </section>

              {/* Overview table */}
              <div className="mb-8 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-48">Thông tin</th>
                      <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Chi tiết</th>
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
                <LinkButton href="/mega-city-2/vi-tri">Vị trí →</LinkButton>
                <LinkButton href="/mega-city-2/tien-ich">Tiện ích →</LinkButton>
                <LinkButton href="/mega-city-2/phap-ly">Pháp lý →</LinkButton>
                <LinkButton href="/mega-city-2/tien-do">Tiến độ →</LinkButton>
              </div>

              {/* Image 2 — Nhà phố */}
              <ArticleFigure
                src={NEWS2["2"]}
                alt="Nhà phố tại dự án Mega City 2"
                caption="Nhà phố tại dự án Mega City 2"
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section: Bảng giá */}
              <section className="mb-6">
                <SectionHeading>Bảng giá Mega City 2 mới nhất</SectionHeading>
                <div className="pt-6">
                  <div className="mb-5 rounded-xl bg-amber-50 border border-amber-200 px-6 py-4 text-sm text-amber-800 flex gap-4">
                    <span className="text-xl leading-tight mt-0.5">⚠️</span>
                    <div>
                      <p className="font-bold mb-1">Lưu ý quan trọng</p>
                      <p className="leading-relaxed">
                        Đây là mức giá tham khảo. Giá thực tế có thể thay đổi theo từng thời điểm,
                        chính sách bán hàng và vị trí cụ thể của từng sản phẩm.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Price table */}
              <div className="mb-8 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-amber-500 text-white">
                      <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Loại sản phẩm</th>
                      <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Giá tham khảo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {priceRows.map((row, i) => (
                      <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-6 py-4 font-semibold text-slate-700">{row.type}</td>
                        <td className="px-6 py-4 font-black text-amber-600 text-base">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mb-6">
                <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                  Mức giá thực tế có thể thay đổi dựa trên:
                </p>
                <BulletList items={priceFactors} />
              </div>

              <div className="mb-14">
                <a
                  href="/mega-city-2/bang-gia"
                  className="inline-flex items-center gap-2 bg-amber-500 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-amber-600 transition-all shadow-md shadow-amber-500/20"
                >
                  Xem bảng giá chi tiết tại đây →
                </a>
              </div>

              {/* Image 3 — Biệt thự */}
              <ArticleFigure
                src={NEWS2["3"]}
                alt="Biệt thự tại dự án Mega City 2"
                caption="Biệt thự tại dự án Mega City 2"
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section: Yếu tố ảnh hưởng giá */}
              <section className="mb-14">
                <SectionHeading>Những yếu tố ảnh hưởng đến giá Mega City 2</SectionHeading>
                <div className="pt-6 space-y-8">

                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">1. Vị trí sản phẩm</h3>
                    <p className="text-slate-600 text-[17px] leading-[1.85] mb-4">
                      Những sản phẩm nằm trên các trục đường lớn thường có giá cao hơn. Các yếu tố
                      ảnh hưởng bao gồm:
                    </p>
                    <BulletList items={["Mặt tiền đường", "Khả năng kinh doanh", "Khoảng cách đến tiện ích", "Khả năng kết nối giao thông"]} />
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">2. Diện tích</h3>
                    <p className="text-slate-600 text-[17px] leading-[1.85] mb-4">
                      Diện tích là một trong những yếu tố quan trọng nhất quyết định giá trị bất động
                      sản. Thông thường:
                    </p>
                    <BulletList items={["Diện tích nhỏ thường có tính thanh khoản cao hơn", "Diện tích lớn phù hợp với nhu cầu đầu tư dài hạn"]} />
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">3. Hạ tầng giao thông</h3>
                    <p className="text-slate-600 text-[17px] leading-[1.85] mb-4">
                      Nhơn Trạch đang được hưởng lợi từ nhiều dự án hạ tầng lớn như:
                    </p>
                    <BulletList items={["Sân bay Long Thành", "Cao tốc Biên Hòa – Vũng Tàu", "Vành đai 3 TP.HCM"]} />
                    <p className="text-slate-600 text-[17px] leading-[1.85] mt-4">
                      Sự phát triển của hạ tầng có thể tác động trực tiếp đến giá trị bất động sản
                      trong khu vực.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">4. Chính sách thanh toán</h3>
                    <p className="text-slate-600 text-[17px] leading-[1.85] mb-4">
                      Giá bán đôi khi sẽ thay đổi tùy theo:
                    </p>
                    <BulletList items={["Phương thức thanh toán", "Tiến độ thanh toán", "Chính sách ưu đãi", "Chương trình hỗ trợ tài chính"]} />
                    <p className="text-slate-600 text-[17px] leading-[1.85] mt-4">
                      Người mua nên theo dõi những thay đổi này để lựa chọn phương án phù hợp.
                    </p>
                  </div>
                </div>
              </section>

              {/* Image 4 — Bảng giá */}
              <ArticleFigure
                src={NEWS2["4"]}
                alt="Bảng giá tham khảo dự án Mega City 2"
                caption="Bảng giá tham khảo dự án Mega City 2"
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section: So sánh */}
              <section className="mb-14">
                <SectionHeading>So sánh Mega City 2 với mặt bằng giá khu vực</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi đánh giá một dự án, nhà đầu tư không nên chỉ nhìn vào giá bán. Một số yếu
                    tố cần được so sánh:
                  </p>
                  <BulletList items={compareFacts} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Việc so sánh nhiều dự án sẽ giúp nhà đầu tư có góc nhìn khách quan và đưa ra
                    quyết định phù hợp hơn.
                  </p>
                </div>
              </section>

              {/* Section: Có nên đầu tư */}
              <section className="mb-14">
                <SectionHeading>Có nên đầu tư Mega City 2 ở thời điểm hiện tại?</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không có một câu trả lời chung cho tất cả nhà đầu tư. Mega City 2 có thể phù hợp
                    với những người:
                  </p>
                  <BulletList items={suitableFor} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tuy nhiên, trước khi quyết định, người mua nên:
                  </p>
                  <BulletList items={checklistBefore} />
                  <LinkButton href="/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach">
                    Phân tích chi tiết: Có nên đầu tư Mega City 2? →
                  </LinkButton>
                </div>
              </section>

              {/* Image 5 — Vị trí */}
              <ArticleFigure
                src={NEWS2["5"]}
                alt="Vị trí dự án Mega City 2 tại Nhơn Trạch"
                caption="Vị trí dự án Mega City 2 tại Nhơn Trạch"
                images={images} index={4} onOpen={openLightbox}
              />

              {/* Section: Tham khảo thêm */}
              <section className="mb-14">
                <SectionHeading>Tham khảo thêm các thông tin liên quan</SectionHeading>
                <div className="pt-6">
                  <p className="text-slate-600 text-[17px] leading-[1.85] mb-6">
                    Để có cái nhìn toàn diện hơn về dự án, bạn có thể xem thêm:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <LinkButton href="/mega-city-2/vi-tri">Vị trí Mega City 2 →</LinkButton>
                    <LinkButton href="/mega-city-2/tien-ich">Tiện ích Mega City 2 →</LinkButton>
                    <LinkButton href="/mega-city-2/phap-ly">Pháp lý Mega City 2 →</LinkButton>
                    <LinkButton href="/mega-city-2/tien-do">Tiến độ Mega City 2 →</LinkButton>
                    <LinkButton href="/mega-city-2/hinh-anh">Hình ảnh Mega City 2 →</LinkButton>
                    <LinkButton href="/mega-city-2/thanh-toan">Phương thức thanh toán →</LinkButton>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-900 px-7 py-6">
                  <h2 className="text-white font-black text-xl tracking-tight">Câu hỏi thường gặp</h2>
                </div>
                <div className="divide-y divide-slate-100">
                  {faqs.map(({ q, a }, idx) => (
                    <div key={q} className="px-7 py-6 hover:bg-slate-50 transition-colors">
                      <p className="font-bold text-slate-800 text-base mb-2">{q}</p>
                      {a ? (
                        <p className="text-slate-500 text-[15px] leading-relaxed">{a}</p>
                      ) : idx === 3 ? (
                        <p className="text-slate-500 text-[15px] leading-relaxed">
                          Bạn nên theo dõi trực tiếp trên{" "}
                          <a href="/" className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-800">
                            website kimoanhdongnai.com.vn
                          </a>{" "}
                          hoặc liên hệ tư vấn để cập nhật thông tin mới nhất.
                        </p>
                      ) : (
                        <div className="text-slate-500 text-[15px] leading-relaxed space-y-1">
                          <p>Bạn có thể tham khảo:</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {[
                              { label: "Tổng quan dự án", href: "/mega-city-2" },
                              { label: "Vị trí", href: "/mega-city-2/vi-tri" },
                              { label: "Pháp lý", href: "/mega-city-2/phap-ly" },
                              { label: "Tiến độ", href: "/mega-city-2/tien-do" },
                              { label: "Thanh toán", href: "/mega-city-2/thanh-toan" },
                            ].map((l) => (
                              <a key={l.href} href={l.href}
                                className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-800 text-sm">
                                {l.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28 space-y-6">

                {/* Price quick card */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-amber-500 px-6 py-4">
                    <p className="text-white font-black text-sm uppercase tracking-wider">Giá tham khảo</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {priceRows.map((row) => (
                      <div key={row.type} className="px-6 py-4">
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">{row.type}</p>
                        <p className="text-base font-black text-amber-600">{row.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-xs text-slate-400 italic">
                      * Giá tham khảo, có thể thay đổi theo thời điểm
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-wider">Thông tin dự án</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      { label: "Tổng quan dự án",    href: "/mega-city-2" },
                      { label: "Bảng giá chi tiết",  href: "/mega-city-2/bang-gia" },
                      { label: "Vị trí & kết nối",   href: "/mega-city-2/vi-tri" },
                      { label: "Pháp lý dự án",      href: "/mega-city-2/phap-ly" },
                      { label: "Tiện ích nội khu",   href: "/mega-city-2/tien-ich" },
                      { label: "Tiến độ thi công",   href: "/mega-city-2/tien-do" },
                      { label: "Phương thức thanh toán", href: "/mega-city-2/thanh-toan" },
                      { label: "FAQ",                href: "/mega-city-2/faq" },
                    ].map((link) => (
                      <a key={link.href} href={link.href}
                        className="flex items-center justify-between px-6 py-4 text-sm font-semibold
                                   text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors group">
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

        {/* Page CTA */}
        <PageCTA
          title="Nhận bảng giá Mega City 2 mới nhất"
          subtitle="Liên hệ ngay để được cập nhật bảng giá, chọn vị trí lô phù hợp và tư vấn pháp lý miễn phí."
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
              href: "/mega-city-2/vi-tri",
              title: "Vị trí & Kết nối vùng",
              description: "Phân tích vị trí chiến lược tại Nhơn Trạch.",
              tag: "Vị trí",
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
