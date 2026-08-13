import type { Metadata } from "next";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import PageCTA from "@/components/PageCTA";
import RelatedContent from "@/components/RelatedContent";

// ─────────────────────────────────────────────────────────────
// Cloudinary CDN helpers
// ─────────────────────────────────────────────────────────────
const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good";
const img = (path: string, w = 1280) => `${CDN},w_${w},c_limit/${path}`;

const NEWS1 = {
  "1": img("megacity2/news1/1"),
  "2": img("megacity2/news1/2"),
  "3": img("megacity2/news1/3"),
  "4": img("megacity2/news1/4"),
  "5": img("megacity2/news1/5"),
};

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach`;
const PUBLISHED = "13/08/2026";
const PUBLISHED_ISO = "2026-08-13";

// ─────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026? Phân tích chi tiết",
  description:
    "Đánh giá tiềm năng đầu tư Mega City 2 Nhơn Trạch năm 2026 dựa trên vị trí, pháp lý, hạ tầng, bảng giá và khả năng tăng trưởng.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "đầu tư Mega City 2",
    "Mega City 2 Nhơn Trạch",
    "có nên mua Mega City 2",
    "giá đất Mega City 2",
    "đất nền Nhơn Trạch",
  ],
  openGraph: {
    title: "Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026?",
    description:
      "Đánh giá tiềm năng đầu tư Mega City 2 Nhơn Trạch năm 2026 dựa trên vị trí, pháp lý, hạ tầng và bảng giá.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: NEWS1["1"],
        width: 1280,
        height: 720,
        alt: "Toàn cảnh dự án Mega City 2 Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026?",
    description: "Phân tích chi tiết tiềm năng đầu tư Mega City 2 Nhơn Trạch 2026.",
    images: [NEWS1["1"]],
  },
};

// ─────────────────────────────────────────────────────────────
// JSON-LD Schemas
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026? Phân tích chi tiết",
  description:
    "Đánh giá tiềm năng đầu tư Mega City 2 Nhơn Trạch năm 2026 dựa trên vị trí, pháp lý, hạ tầng, bảng giá và khả năng tăng trưởng.",
  image: [NEWS1["1"], NEWS1["2"], NEWS1["3"]],
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
    "đầu tư Mega City 2, Mega City 2 Nhơn Trạch, có nên mua Mega City 2, giá đất Mega City 2, đất nền Nhơn Trạch",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mega City 2 nằm ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án nằm tại huyện Nhơn Trạch, tỉnh Đồng Nai.",
      },
    },
    {
      "@type": "Question",
      name: "Giá đất Mega City 2 hiện nay là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mức giá tham khảo dao động từ khoảng 1,15 tỷ đồng tùy theo loại sản phẩm và vị trí. Giá thực tế có thể thay đổi theo thị trường và thời điểm giao dịch.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có phù hợp để đầu tư dài hạn không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Điều này phụ thuộc vào mục tiêu đầu tư, khả năng tài chính và chiến lược của từng nhà đầu tư. Cần nghiên cứu kỹ pháp lý, tiến độ và biến động thị trường trước khi quyết định.",
      },
    },
    {
      "@type": "Question",
      name: "Pháp lý của Mega City 2 như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà đầu tư nên kiểm tra trực tiếp các tài liệu pháp lý mới nhất trước khi giao dịch. Xem thêm tại trang pháp lý của dự án.",
      },
    },
    {
      "@type": "Question",
      name: "Có thể xem bảng giá Mega City 2 ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Bạn có thể tham khảo bảng giá cập nhật tại ${BASE_URL}/mega-city-2/bang-gia`,
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
      name: "Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026?",
      item: PAGE_URL,
    },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Kim Oanh Đồng Nai",
  url: BASE_URL,
  logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+840937587438",
    contactType: "sales",
    availableLanguage: "Vietnamese",
  },
};

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const priceRows = [
  { type: "Nhà phố TH", price: "1,15 – 1,8 tỷ" },
  { type: "Nhà phố T",  price: "1,3 – 2,2 tỷ" },
  { type: "Biệt thự V", price: "Từ 2,1 tỷ" },
];

const overviewRows = [
  { label: "Tên dự án",        value: "Mega City 2" },
  { label: "Vị trí",           value: "Nhơn Trạch – Đồng Nai" },
  { label: "Loại hình",        value: "Đất nền, nhà phố, biệt thự" },
  { label: "Quy mô",           value: "Hơn 2.400 sản phẩm" },
  { label: "Hình thức sở hữu", value: "Theo quy định hiện hành" },
];

const faqs = [
  {
    q: "Mega City 2 nằm ở đâu?",
    a: "Dự án nằm tại huyện Nhơn Trạch, tỉnh Đồng Nai.",
  },
  {
    q: "Giá đất Mega City 2 hiện nay là bao nhiêu?",
    a: "Mức giá tham khảo dao động từ khoảng 1,15 tỷ đồng tùy theo loại sản phẩm và vị trí. Liên hệ để nhận báo giá cụ thể.",
  },
  {
    q: "Mega City 2 có phù hợp để đầu tư dài hạn không?",
    a: "Điều này phụ thuộc vào mục tiêu đầu tư, khả năng tài chính và chiến lược của từng nhà đầu tư.",
  },
  {
    q: "Pháp lý của Mega City 2 như thế nào?",
    a: "Nhà đầu tư nên kiểm tra trực tiếp các tài liệu pháp lý mới nhất trước khi giao dịch.",
  },
  {
    q: "Có thể xem bảng giá ở đâu?",
    a: null, // rendered separately with link
  },
];

// ─────────────────────────────────────────────────────────────
// Shared figure component (no crop, full image)
// ─────────────────────────────────────────────────────────────
function ArticleFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-8 -mx-4 sm:mx-0">
      <div className="bg-slate-100 rounded-none sm:rounded-2xl overflow-hidden border border-slate-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center text-xs text-slate-400 italic px-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function CoNenDauTuPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero header ───────────────────────────────────── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span className="text-slate-300">/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium line-clamp-1">Có nên đầu tư Mega City 2?</span>
            </nav>

            {/* Category + meta */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Phân tích đầu tư
              </span>
              <time
                dateTime={PUBLISHED_ISO}
                className="text-xs text-slate-400 flex items-center gap-1"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 8 phút đọc</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026?
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Đánh giá toàn diện tiềm năng đầu tư dựa trên vị trí chiến lược, tình trạng pháp lý,
              hạ tầng giao thông và bảng giá thị trường năm 2026.
            </p>
          </div>

          {/* Hero image — full width, no crop */}
          <div className="max-w-5xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={NEWS1["1"]}
                alt="Toàn cảnh dự án Mega City 2 Nhơn Trạch"
                className="w-full h-auto block"
                loading="eager"
              />
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Toàn cảnh dự án Mega City 2 Nhơn Trạch
            </p>
          </div>
        </div>

        {/* ── Main content layout ───────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Article column ── */}
            <article className="flex-1 min-w-0">

              {/* ── Intro ── */}
              <div className="space-y-5 mb-14">
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Trong bối cảnh thị trường bất động sản Đồng Nai đang dần phục hồi, Nhơn Trạch
                  tiếp tục là một trong những khu vực thu hút sự quan tâm của nhiều nhà đầu tư.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Sự phát triển của hệ thống hạ tầng giao thông — đặc biệt là sân bay quốc tế
                  Long Thành, cao tốc Biên Hòa – Vũng Tàu và các tuyến đường kết nối với TP.HCM
                  — đã tạo ra nhiều cơ hội cho thị trường bất động sản khu vực này.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Trong số những dự án đang nhận được nhiều sự quan tâm, Mega City 2 là một cái
                  tên nổi bật nhờ quy mô lớn, vị trí thuận lợi và định hướng phát triển lâu dài.
                  Vậy có nên đầu tư Mega City 2 trong năm 2026 hay không?
                </p>
              </div>

              {/* ── Section: Tổng quan ── */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Tổng quan về Mega City 2 Nhơn Trạch
                </h2>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 là khu dân cư được quy hoạch tại huyện Nhơn Trạch, tỉnh Đồng Nai.
                    Dự án được phát triển theo mô hình khu đô thị với nhiều loại hình sản phẩm:
                  </p>
                  <ul className="space-y-3 pl-0">
                    {["Đất nền", "Nhà phố", "Nhà phố thương mại", "Biệt thự", "Nhà xây sẵn"].map((item) => (
                      <li key={item} className="flex items-center gap-3.5 text-slate-700 text-base font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
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

              {/* Links — dạng button nổi bật */}
              <div className="flex flex-wrap gap-3 mb-14">
                <a href="/mega-city-2"
                  className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all">
                  Tổng quan Mega City 2 →
                </a>
                <a href="/mega-city-2/bang-gia"
                  className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all">
                  Bảng giá →
                </a>
              </div>

              {/* Image 2 — Vị trí */}
              <ArticleFigure
                src={NEWS1["2"]}
                alt="Vị trí dự án Mega City 2 tại Nhơn Trạch"
                caption="Vị trí dự án Mega City 2 tại Nhơn Trạch"
              />

              {/* ── Section: Vị trí ── */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Vị trí là yếu tố quan trọng nhất
                </h2>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một trong những lý do khiến nhiều nhà đầu tư quan tâm đến Mega City 2 chính là
                    vị trí. Dự án nằm trong khu vực đang được hưởng lợi từ hàng loạt công trình hạ
                    tầng lớn:
                  </p>
                  <ul className="space-y-3 pl-0">
                    {[
                      "Sân bay Long Thành",
                      "Cao tốc Biên Hòa – Vũng Tàu",
                      "Vành đai 3 TP.HCM",
                      "Hệ thống cảng biển khu vực Đồng Nai",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3.5 text-slate-700 text-base font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhờ lợi thế này, khả năng kết nối giữa Nhơn Trạch với TP.HCM ngày càng được
                    cải thiện, có thể tạo ra tiềm năng tăng giá trong trung và dài hạn.
                  </p>
                  <a href="/mega-city-2/vi-tri"
                    className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all">
                    Xem chi tiết vị trí &amp; kết nối vùng →
                  </a>
                </div>
              </section>

              {/* Image 3 — Hạ tầng */}
              <ArticleFigure
                src={NEWS1["3"]}
                alt="Hạ tầng giao thông kết nối Mega City 2"
                caption="Hạ tầng giao thông kết nối Mega City 2"
              />

              {/* ── Section: Pháp lý ── */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Pháp lý của Mega City 2 có phải là lợi thế?
                </h2>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Pháp lý luôn là yếu tố được quan tâm hàng đầu khi đầu tư bất động sản. Nhà
                    đầu tư nên kiểm tra:
                  </p>
                  <ul className="space-y-3 pl-0">
                    {[
                      "Quy hoạch",
                      "Hồ sơ pháp lý",
                      "Thông tin phân lô",
                      "Tình trạng chuyển nhượng",
                      "Giấy tờ liên quan",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3.5 text-slate-700 text-base font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trước khi quyết định đầu tư, bạn nên tham khảo trực tiếp các tài liệu pháp lý
                    mới nhất từ đơn vị phân phối hoặc chủ đầu tư.
                  </p>
                  <a href="/mega-city-2/phap-ly"
                    className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all">
                    Xem thêm: Pháp lý Mega City 2 →
                  </a>
                </div>
              </section>

              {/* ── Section: Bảng giá ── */}
              <section className="mb-6">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Bảng giá Mega City 2 năm 2026
                </h2>
                <div className="pt-6">
                  <p className="text-slate-600 text-[17px] leading-[1.85] mb-6">
                    Theo dữ liệu thị trường được cập nhật trong năm 2026, mức giá tham khảo của
                    một số sản phẩm như sau:
                  </p>
                </div>
              </section>

              {/* Price table */}
              <div className="mb-5 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
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

              {/* Disclaimer */}
              <div className="mb-5 rounded-xl bg-amber-50 border border-amber-200 px-6 py-5 text-sm text-amber-800 flex gap-4">
                <span className="text-xl leading-tight mt-0.5">⚠️</span>
                <div>
                  <p className="font-bold mb-1">Lưu ý</p>
                  <p className="leading-relaxed">
                    Đây chỉ là mức giá tham khảo. Giá thực tế có thể thay đổi tùy theo vị trí,
                    diện tích, hướng và thời điểm giao dịch.
                  </p>
                </div>
              </div>

              <div className="mb-14">
                <a href="/mega-city-2/bang-gia"
                  className="inline-flex items-center gap-2 bg-amber-500 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-amber-600 transition-all shadow-md shadow-amber-500/20">
                  Xem bảng giá chi tiết →
                </a>
              </div>

              {/* Image 4 — Thực tế */}
              <ArticleFigure
                src={NEWS1["4"]}
                alt="Hình ảnh thực tế dự án Mega City 2"
                caption="Hình ảnh thực tế dự án Mega City 2"
              />

              {/* ── Section: Rủi ro ── */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Những rủi ro cần cân nhắc
                </h2>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không có bất kỳ khoản đầu tư nào hoàn toàn không có rủi ro. Trước khi quyết
                    định đầu tư, bạn nên cân nhắc:
                  </p>
                  <ul className="space-y-3 pl-0">
                    {[
                      "Khả năng tài chính của bản thân",
                      "Mục tiêu đầu tư ngắn, trung hay dài hạn",
                      "Tính thanh khoản của sản phẩm",
                      "Biến động thị trường bất động sản khu vực",
                      "Thời gian nắm giữ dự kiến",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3.5 text-slate-700 text-base font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đầu tư bất động sản nên được xem là chiến lược dài hạn thay vì tìm kiếm lợi
                    nhuận trong thời gian ngắn.
                  </p>
                </div>
              </section>

              {/* Image 5 — Quy hoạch */}
              <ArticleFigure
                src={NEWS1["5"]}
                alt="Quy hoạch khu dân cư Mega City 2"
                caption="Quy hoạch khu dân cư Mega City 2"
              />

              {/* ── Section: Kết luận ── */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Kết luận
                </h2>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 là một dự án đáng để nghiên cứu nếu bạn đang quan tâm đến thị
                    trường bất động sản Nhơn Trạch. Tuy nhiên, trước khi đưa ra quyết định, bạn nên:
                  </p>
                  <ul className="space-y-3 pl-0">
                    {[
                      "Kiểm tra pháp lý đầy đủ",
                      "Cập nhật bảng giá mới nhất",
                      "Theo dõi tiến độ thi công thực tế",
                      "Tham khảo thông tin từ nhiều nguồn",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3.5 text-slate-700 text-base font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* FAQ */}
              <div className="mt-4 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
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
                          Bạn có thể tham khảo tại{" "}
                          <a href="/mega-city-2/bang-gia" className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-800">
                            /mega-city-2/bang-gia
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
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">{row.label}</p>
                        <p className="text-sm font-bold text-slate-800">{row.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-wider">Xem thêm</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      { label: "Tổng quan dự án", href: "/mega-city-2" },
                      { label: "Bảng giá 2026", href: "/mega-city-2/bang-gia" },
                      { label: "Vị trí & kết nối", href: "/mega-city-2/vi-tri" },
                      { label: "Pháp lý dự án", href: "/mega-city-2/phap-ly" },
                      { label: "Tiện ích nội khu", href: "/mega-city-2/tien-ich" },
                    ].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between px-6 py-4 text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors group"
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

        {/* Page CTA */}
        <PageCTA
          title="Tư vấn đầu tư Mega City 2 Nhơn Trạch"
          subtitle="Liên hệ để được hỗ trợ chọn vị trí, cập nhật pháp lý và nhận bảng giá mới nhất."
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
              href: "/mega-city-2/bang-gia",
              title: "Bảng giá Mega City 2 2026",
              description: "Giá tham khảo TH, T, V theo vị trí và diện tích.",
              tag: "Bảng giá",
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
    </>
  );
}
