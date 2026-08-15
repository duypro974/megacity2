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

const NEWS5 = {
  "1": img("megacity2/news5/1"),
  "2": img("megacity2/news5/2"),
  "3": img("megacity2/news5/3"),
  "4": img("megacity2/news5/4"),
  "5": img("megacity2/news5/5"),
  "6": img("megacity2/news5/6"),
  "7": img("megacity2/news5/7"),
};

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PUBLISHED     = "16/08/2026";
const PUBLISHED_ISO = "2026-08-16";

// ─────────────────────────────────────────────────────────────
// JSON-LD Schemas
// ─────────────────────────────────────────────────────────────
const PAGE_URL = `${BASE_URL}/tin-tuc/tien-do-mega-city-2`;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tiến độ Mega City 2 Nhơn Trạch 2026: Cập nhật mới nhất về hạ tầng và xây dựng",
  description:
    "Theo dõi tiến độ Mega City 2 Nhơn Trạch mới nhất năm 2026. Cập nhật tình hình xây dựng, hạ tầng, phân khu và những thay đổi mới nhất của dự án.",
  image: [NEWS5["1"], NEWS5["2"], NEWS5["3"], NEWS5["4"], NEWS5["5"], NEWS5["6"], NEWS5["7"]],
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
    "tiến độ Mega City 2, tiến độ xây dựng Mega City 2, hạ tầng Mega City 2, Mega City 2 đã xây đến đâu, tiến độ dự án Mega City 2 năm 2026, cập nhật tiến độ Mega City 2",
};

const imageObjectSchema = [
  { url: NEWS5["1"], caption: "Tiến độ xây dựng Mega City 2 Nhơn Trạch năm 2026" },
  { url: NEWS5["2"], caption: "Hạ tầng thực tế tại dự án Mega City 2" },
  { url: NEWS5["3"], caption: "Hình ảnh mới nhất của Mega City 2 Đồng Nai" },
  { url: NEWS5["4"], caption: "Đường nội khu dự án Mega City 2" },
  { url: NEWS5["5"], caption: "Tiến độ hoàn thiện hạ tầng Mega City 2" },
  { url: NEWS5["6"], caption: "Nhà xây sẵn tại Mega City 2 Nhơn Trạch" },
  { url: NEWS5["7"], caption: "Hình ảnh thực tế khu dân cư Mega City 2" },
].map((item) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  url: item.url,
  caption: item.caption,
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
}));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Tiến độ Mega City 2 hiện nay như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khách hàng nên theo dõi những hình ảnh và thông tin được cập nhật thường xuyên trên website để nắm bắt tình hình mới nhất về tiến độ thi công.",
      },
    },
    {
      "@type": "Question",
      name: "Hạ tầng nội khu đã hoàn thiện chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mức độ hoàn thiện của từng hạng mục có thể khác nhau. Người mua nên khảo sát thực tế trước khi đưa ra quyết định để có đánh giá chính xác nhất.",
      },
    },
    {
      "@type": "Question",
      name: "Có nên đến dự án để kiểm tra tiến độ không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Khảo sát thực tế sẽ giúp nhà đầu tư có cái nhìn khách quan và toàn diện hơn, đối chiếu được giữa thông tin công bố và hiện trạng thực tế.",
      },
    },
    {
      "@type": "Question",
      name: "Bao lâu nên cập nhật tiến độ một lần?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nên cập nhật ít nhất mỗi tháng một lần để theo dõi sự thay đổi của hạ tầng và đánh giá kịp thời tiềm năng của dự án.",
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
    { "@type": "ListItem", position: 3, name: "Tiến độ Mega City 2 mới nhất 2026", item: PAGE_URL },
  ],
};

// ─────────────────────────────────────────────────────────────
// Lightbox images
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: NEWS5["1"], alt: "Tiến độ xây dựng Mega City 2 Nhơn Trạch năm 2026",   caption: "Tiến độ xây dựng Mega City 2 Nhơn Trạch năm 2026" },
  { src: NEWS5["2"], alt: "Hạ tầng thực tế tại dự án Mega City 2",              caption: "Hạ tầng thực tế tại dự án Mega City 2" },
  { src: NEWS5["3"], alt: "Hình ảnh mới nhất của Mega City 2 Đồng Nai",         caption: "Hình ảnh mới nhất của Mega City 2 Đồng Nai" },
  { src: NEWS5["4"], alt: "Đường nội khu dự án Mega City 2",                    caption: "Đường nội khu dự án Mega City 2" },
  { src: NEWS5["5"], alt: "Tiến độ hoàn thiện hạ tầng Mega City 2",             caption: "Tiến độ hoàn thiện hạ tầng Mega City 2" },
  { src: NEWS5["6"], alt: "Nhà xây sẵn tại Mega City 2 Nhơn Trạch",             caption: "Nhà xây sẵn tại Mega City 2 Nhơn Trạch" },
  { src: NEWS5["7"], alt: "Hình ảnh thực tế khu dân cư Mega City 2",            caption: "Hình ảnh thực tế khu dân cư Mega City 2" },
];

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const infraItems = [
  { icon: "🛣️", label: "Hệ thống đường giao thông",    desc: "Đường nội khu rộng từ 15–32m, trải nhựa hoàn chỉnh" },
  { icon: "⚡", label: "Hệ thống điện",                  desc: "Điện ngầm, hộp biến áp được bố trí đồng bộ" },
  { icon: "💧", label: "Hệ thống cấp thoát nước",        desc: "Đường ống cấp nước sạch và thoát nước đô thị" },
  { icon: "🌳", label: "Cây xanh & cảnh quan",           desc: "Dải phân cách xanh dọc tuyến đường chính" },
  { icon: "💡", label: "Hệ thống chiếu sáng",            desc: "Đèn đường LED lắp dọc các tuyến nội khu" },
  { icon: "🏛️", label: "Khu vực công cộng",             desc: "Công viên, không gian sinh hoạt cộng đồng" },
];

const roadWidths = [
  { width: "15m", desc: "Đường liên lô trong khu dân cư" },
  { width: "17m", desc: "Đường trục phụ nối các phân khu" },
  { width: "24m", desc: "Đường trục chính nội khu" },
  { width: "32m", desc: "Đường vành đai và kết nối khu vực" },
];

const connectionPoints = [
  "Các tuyến đường trục chính khu vực Nhơn Trạch",
  "Khả năng kết nối với trung tâm TP.HCM",
  "Kết nối với các khu công nghiệp lân cận",
  "Hạ tầng khu vực đang được đầu tư đồng bộ",
];

const builtHomesChecklist = [
  "Chất lượng vật liệu xây dựng thực tế",
  "Kiến trúc và thẩm mỹ công trình",
  "Hệ thống điện, nước bên trong nhà",
  "Không gian sống và chiều cao tầng",
  "Mật độ xây dựng theo quy hoạch",
];

const whyFollowReasons = [
  {
    title: "Đánh giá khả năng đầu tư",
    desc: "Tiến độ thực tế phản ánh trực tiếp khả năng triển khai của chủ đầu tư. Dự án hoàn thiện đúng hạn thường là tín hiệu tốt về năng lực thi công và tài chính.",
  },
  {
    title: "Kiểm tra mức độ hoàn thiện",
    desc: "Nhà đầu tư có thể đối chiếu giữa thông tin được công bố và hình ảnh thực tế để đánh giá khách quan hơn về tiến độ triển khai.",
  },
  {
    title: "Theo dõi biến động thị trường",
    desc: "Sự phát triển của hạ tầng thường có tác động trực tiếp đến giá trị bất động sản. Cập nhật thường xuyên giúp nhà đầu tư nắm bắt thời điểm phù hợp.",
  },
];

const surveyChecklist = [
  { title: "Chụp ảnh hiện trạng",    items: ["Đường nội khu", "Công viên và cây xanh", "Hệ thống chiếu sáng", "Nhà xây sẵn"] },
  { title: "So sánh với quy hoạch",  items: ["Đối chiếu bản đồ quy hoạch", "Kiểm tra hạ tầng thực tế", "Đánh giá tiến độ triển khai"] },
  { title: "Kiểm tra pháp lý",       items: ["Hồ sơ pháp lý hiện hành", "Thông tin quy hoạch chi tiết", "Điều kiện chuyển nhượng"] },
];

const affectingFactors = [
  "Hạ tầng kết nối khu vực xung quanh",
  "Tiến độ hoàn thiện thủ tục hành chính",
  "Điều kiện và biến động thị trường",
  "Tiến độ hoàn thiện các hạng mục kỹ thuật",
  "Nguồn cung vật liệu và nhân lực thi công",
];

const faqs = [
  {
    q: "Tiến độ Mega City 2 hiện nay như thế nào?",
    a: "Khách hàng nên theo dõi những hình ảnh và thông tin được cập nhật thường xuyên trên website để nắm bắt tình hình mới nhất về tiến độ thi công.",
  },
  {
    q: "Hạ tầng nội khu đã hoàn thiện chưa?",
    a: "Mức độ hoàn thiện của từng hạng mục có thể khác nhau. Người mua nên khảo sát thực tế trước khi đưa ra quyết định để có đánh giá chính xác nhất.",
  },
  {
    q: "Có nên đến dự án để kiểm tra tiến độ không?",
    a: "Có. Khảo sát thực tế sẽ giúp nhà đầu tư có cái nhìn khách quan và toàn diện hơn, đối chiếu được giữa thông tin công bố và hiện trạng thực tế.",
  },
  {
    q: "Bao lâu nên cập nhật tiến độ một lần?",
    a: "Nên cập nhật ít nhất mỗi tháng một lần để theo dõi sự thay đổi của hạ tầng và đánh giá kịp thời tiềm năng của dự án.",
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
// Page
// ─────────────────────────────────────────────────────────────
export default function TienDoMegaCity2Client() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {imageObjectSchema.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
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
              <span className="text-slate-500 font-medium line-clamp-1">Tiến độ Mega City 2</span>
            </nav>

            {/* Category + meta */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Tiến độ
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Cập nhật ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 7 phút đọc</span>
            </div>

            {/* H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Tiến độ Mega City 2 Nhơn Trạch mới nhất năm 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Cập nhật tình hình thi công, hạ tầng nội khu, đường nội bộ và hình ảnh thực tế mới
              nhất của dự án Mega City 2 tại Nhơn Trạch, Đồng Nai.
            </p>

            {/* Update notice */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-4 py-2.5 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Bài viết được cập nhật thường xuyên — lần cuối: {PUBLISHED}
            </div>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-50 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh tiến độ Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={NEWS5["1"]}
                alt="Tiến độ xây dựng Mega City 2 Nhơn Trạch năm 2026"
                className="w-full h-auto block"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Tiến độ xây dựng Mega City 2 Nhơn Trạch năm 2026
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
                  Tiến độ xây dựng là một trong những yếu tố quan trọng giúp nhà đầu tư đánh giá
                  mức độ hoàn thiện của một dự án bất động sản. Không giống như các thông số trên
                  giấy tờ, tiến độ thực tế cho thấy chủ đầu tư có khả năng triển khai đúng kế hoạch
                  hay không.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Đối với{" "}
                  <a href="/mega-city-2" className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-800">
                    Mega City 2 Nhơn Trạch
                  </a>
                  , việc theo dõi tiến độ thường xuyên sẽ giúp khách hàng có thêm thông tin về:
                </p>
                <BulletList items={[
                  "Hạ tầng giao thông nội khu đã hoàn thiện đến đâu",
                  "Hệ thống đường nội bộ, điện, nước đã triển khai chưa",
                  "Cảnh quan và cây xanh đã được trồng chưa",
                  "Các khu nhà xây sẵn đã hoàn thiện ra sao",
                  "Khả năng khai thác và sinh sống trong tương lai gần",
                ]} />
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Bài viết này tổng hợp hình ảnh và thông tin tiến độ mới nhất tháng 08/2026 từ khảo
                  sát thực tế tại dự án.
                </p>
              </div>

              {/* Quick links */}
              <div className="flex flex-wrap gap-3 mb-14">
                <LinkButton href="/mega-city-2">Tổng quan dự án →</LinkButton>
                <LinkButton href="/mega-city-2/tien-do">Tiến độ chi tiết →</LinkButton>
                <LinkButton href="/mega-city-2/hinh-anh">Hình ảnh dự án →</LinkButton>
                <LinkButton href="/mega-city-2/phap-ly">Pháp lý →</LinkButton>
                <LinkButton href="/mega-city-2/mat-bang">Mặt bằng →</LinkButton>
              </div>

              {/* Section 1: Hạ tầng nội khu */}
              <section className="mb-14">
                <SectionHeading>Hạ tầng nội khu đang được triển khai như thế nào?</SectionHeading>
                <div className="pt-6 space-y-6">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hạ tầng là nền tảng quyết định chất lượng sống và giá trị lâu dài của một khu đô
                    thị. Khi theo dõi tiến độ, nhà đầu tư nên quan tâm đến mức độ hoàn thiện của
                    từng hạng mục:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {infraItems.map((item) => (
                      <div key={item.label}
                        className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                        <span className="text-2xl leading-none mt-0.5 shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-1">{item.label}</p>
                          <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Việc hoàn thiện đồng bộ các hạng mục này sẽ góp phần nâng cao chất lượng sống
                    và giá trị của dự án trong dài hạn. Bạn có thể xem thêm hình ảnh thực tế tại
                    trang{" "}
                    <a href="/mega-city-2/hinh-anh" className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-800">
                      hình ảnh Mega City 2
                    </a>.
                  </p>
                </div>
              </section>

              {/* Image 2 */}
              <ArticleFigure
                src={NEWS5["2"]}
                alt="Hạ tầng thực tế tại dự án Mega City 2"
                caption="Hạ tầng thực tế tại dự án Mega City 2"
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 2: Đường nội khu */}
              <section className="mb-14">
                <SectionHeading>Đường nội khu và hệ thống giao thông</SectionHeading>
                <div className="pt-6 space-y-6">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hệ thống đường là một trong những hạng mục được quan tâm nhất khi khảo sát thực
                    tế dự án. Mega City 2 được quy hoạch với các tuyến đường có chiều rộng đa dạng
                    theo từng cấp độ:
                  </p>
                  {/* Road widths */}
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-slate-900 px-6 py-4">
                      <p className="text-white font-black text-sm uppercase tracking-wider">Quy hoạch đường nội khu</p>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {roadWidths.map((road, i) => (
                        <div key={road.width} className={`flex items-center gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}>
                          <div className="w-16 h-10 rounded-lg bg-amber-500 text-white font-black text-base flex items-center justify-center shrink-0">
                            {road.width}
                          </div>
                          <span className="text-slate-600 text-sm">{road.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">Hệ thống kết nối</h3>
                    <p className="text-slate-600 text-[17px] leading-[1.85] mb-4">
                      Ngoài hệ thống đường nội khu, nhà đầu tư cũng nên đánh giá khả năng kết nối
                      của dự án với khu vực xung quanh:
                    </p>
                    <BulletList items={connectionPoints} />
                  </div>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tìm hiểu thêm về khả năng kết nối tại trang{" "}
                    <a href="/mega-city-2/vi-tri" className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-800">
                      vị trí Mega City 2
                    </a>.
                  </p>
                </div>
              </section>

              {/* Image 3 */}
              <ArticleFigure
                src={NEWS5["3"]}
                alt="Hình ảnh mới nhất của Mega City 2 Đồng Nai"
                caption="Hình ảnh mới nhất của Mega City 2 Đồng Nai — tháng 08/2026"
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Image 4 */}
              <ArticleFigure
                src={NEWS5["4"]}
                alt="Đường nội khu dự án Mega City 2"
                caption="Đường nội khu dự án Mega City 2"
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 3: Khu nhà xây sẵn */}
              <section className="mb-14">
                <SectionHeading>Khu nhà xây sẵn tại Mega City 2</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một số phân khu đã xuất hiện các sản phẩm nhà xây sẵn, tạo điều kiện thuận lợi
                    hơn cho người mua muốn đến ở ngay hoặc cho thuê sớm. Khi đi khảo sát thực tế,
                    khách hàng nên chú ý đến các yếu tố sau:
                  </p>
                  <BulletList items={builtHomesChecklist} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Để có cái nhìn chi tiết hơn về các sản phẩm, bạn có thể xem{" "}
                    <a href="/mega-city-2/mat-bang" className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-800">
                      mặt bằng phân lô Mega City 2
                    </a>{" "}
                    và{" "}
                    <a href="/mega-city-2/bang-gia" className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-800">
                      bảng giá tham khảo
                    </a>.
                  </p>
                </div>
              </section>

              {/* Image 5 */}
              <ArticleFigure
                src={NEWS5["5"]}
                alt="Tiến độ hoàn thiện hạ tầng Mega City 2"
                caption="Tiến độ hoàn thiện hạ tầng Mega City 2"
                images={images} index={4} onOpen={openLightbox}
              />

              {/* Section 4: Vì sao nên theo dõi tiến độ */}
              <section className="mb-14">
                <SectionHeading>Vì sao nên theo dõi tiến độ dự án thường xuyên?</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không ít nhà đầu tư chỉ tìm hiểu dự án một lần rồi bỏ qua việc cập nhật. Đây là
                    sai lầm phổ biến, bởi tiến độ thi công có thể thay đổi đáng kể theo từng tháng:
                  </p>
                  <div className="grid gap-5">
                    {whyFollowReasons.map((reason) => (
                      <div key={reason.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                          <h3 className="font-black text-slate-800 text-base">{reason.title}</h3>
                        </div>
                        <p className="text-slate-600 text-[15px] leading-relaxed">{reason.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Image 6 */}
              <ArticleFigure
                src={NEWS5["6"]}
                alt="Nhà xây sẵn tại Mega City 2 Nhơn Trạch"
                caption="Nhà xây sẵn tại Mega City 2 Nhơn Trạch"
                images={images} index={5} onOpen={openLightbox}
              />

              {/* Section 5: Khi đi khảo sát */}
              <section className="mb-14">
                <SectionHeading>Những thông tin nên kiểm tra khi đi khảo sát thực tế</SectionHeading>
                <div className="pt-6 space-y-8">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một chuyến khảo sát thực địa bài bản sẽ mang lại nhiều thông tin có giá trị hơn
                    nhiều so với chỉ xem hình ảnh quảng cáo. Dưới đây là checklist gợi ý:
                  </p>
                  {surveyChecklist.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-lg font-black text-slate-800 mb-3">{group.title}</h3>
                      <BulletList items={group.items} />
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-3">
                    <LinkButton href="/mega-city-2/phap-ly">Kiểm tra pháp lý →</LinkButton>
                    <LinkButton href="/mega-city-2/tien-do">Xem tiến độ chi tiết →</LinkButton>
                    <LinkButton href="/mega-city-2/hinh-anh">Xem hình ảnh thực tế →</LinkButton>
                  </div>
                </div>
              </section>

              {/* Image 7 */}
              <ArticleFigure
                src={NEWS5["7"]}
                alt="Hình ảnh thực tế khu dân cư Mega City 2"
                caption="Hình ảnh thực tế khu dân cư Mega City 2 — tháng 08/2026"
                images={images} index={6} onOpen={openLightbox}
              />

              {/* Section 6: Yếu tố ảnh hưởng tiến độ */}
              <section className="mb-14">
                <SectionHeading>Những yếu tố có thể ảnh hưởng đến tiến độ dự án</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong thực tế, không có dự án nào hoàn toàn bất biến về tiến độ. Một số yếu tố
                    có thể tác động đến quá trình triển khai mà nhà đầu tư nên lường trước:
                  </p>
                  <BulletList items={affectingFactors} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hiểu được những yếu tố này giúp nhà đầu tư đặt kỳ vọng thực tế hơn và có kế
                    hoạch dự phòng phù hợp. Tham khảo thêm{" "}
                    <a href="/mega-city-2/phap-ly" className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-800">
                      pháp lý dự án
                    </a>{" "}
                    để hiểu rõ hơn về tiến trình thủ tục hành chính.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-10">
                <div className="bg-slate-900 px-7 py-6">
                  <h2 className="text-white font-black text-xl tracking-tight">Câu hỏi thường gặp về tiến độ Mega City 2</h2>
                </div>
                <div className="divide-y divide-slate-100">
                  {faqs.map(({ q, a }) => (
                    <div key={q} className="px-7 py-6 hover:bg-slate-50 transition-colors">
                      <p className="font-bold text-slate-800 text-base mb-2">{q}</p>
                      <p className="text-slate-500 text-[15px] leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28 space-y-6">

                {/* Update notice */}
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 overflow-hidden">
                  <div className="bg-emerald-500 px-6 py-4">
                    <p className="text-white font-black text-sm uppercase tracking-wider">Lần cập nhật gần nhất</p>
                  </div>
                  <div className="px-6 py-5 space-y-3">
                    <div>
                      <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider mb-1">Tháng 08/2026</p>
                      <p className="text-sm text-emerald-900 font-semibold">7 hình ảnh thực tế mới</p>
                    </div>
                    <div className="border-t border-emerald-200 pt-3">
                      <p className="text-xs text-emerald-700 leading-relaxed">
                        Bài viết được cập nhật định kỳ. Quay lại vào tháng 09/2026 để xem cập nhật tiếp theo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project links */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-wider">Thông tin dự án</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      { label: "Tổng quan dự án",        href: "/mega-city-2" },
                      { label: "Tiến độ chi tiết",       href: "/mega-city-2/tien-do" },
                      { label: "Hình ảnh thực tế",       href: "/mega-city-2/hinh-anh" },
                      { label: "Mặt bằng phân lô",       href: "/mega-city-2/mat-bang" },
                      { label: "Pháp lý dự án",          href: "/mega-city-2/phap-ly" },
                      { label: "Bảng giá",               href: "/mega-city-2/bang-gia" },
                      { label: "Vị trí & kết nối",       href: "/mega-city-2/vi-tri" },
                      { label: "Tiện ích nội khu",       href: "/mega-city-2/tien-ich" },
                      { label: "Phương thức thanh toán", href: "/mega-city-2/thanh-toan" },
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
          title="Muốn cập nhật tiến độ Mega City 2 mới nhất?"
          subtitle="Liên hệ ngay để nhận thông tin tiến độ, hình ảnh thực tế mới nhất và tư vấn đầu tư miễn phí."
          variant="default"
        />

        {/* Related content */}
        <RelatedContent
          items={[
            {
              href: "/mega-city-2/tien-do",
              title: "Tiến độ Mega City 2 — Trang chính",
              description: "Cập nhật tiến độ thi công đầy đủ nhất của dự án.",
              tag: "Tiến độ",
            },
            {
              href: "/mega-city-2/hinh-anh",
              title: "Hình ảnh thực tế Mega City 2",
              description: "Bộ sưu tập hình ảnh mới nhất từ thực địa dự án.",
              tag: "Hình ảnh",
            },
            {
              href: "/mega-city-2/phap-ly",
              title: "Pháp lý Mega City 2",
              description: "Thông tin quy hoạch và quyết định phê duyệt dự án.",
              tag: "Pháp lý",
            },
            {
              href: "/mega-city-2/bang-gia",
              title: "Bảng giá Mega City 2",
              description: "Giá tham khảo từng loại sản phẩm.",
              tag: "Bảng giá",
            },
            {
              href: "/mega-city-2/mat-bang",
              title: "Mặt bằng phân lô",
              description: "Sơ đồ phân khu và vị trí từng lô.",
              tag: "Mặt bằng",
            },
            {
              href: "/tin-tuc/phap-ly-mega-city-2",
              title: "Pháp lý Mega City 2 có gì? Cập nhật 2026",
              description: "Thông tin về quyết định phê duyệt và hồ sơ pháp lý.",
              tag: "Tin tức",
            },
          ]}
        />
      </div>

      <CorpFooter />
      {LightboxPortal}
    </>
  );
}
