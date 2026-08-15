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

const NEWS4 = {
  "1": img("megacity2/news4/1"),
  "2": img("megacity2/news4/2"),
  "3": img("megacity2/news4/3"),
  "4": img("megacity2/news4/4"),
  "5": img("megacity2/news4/5"),
};

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/phap-ly-mega-city-2`;
const PUBLISHED     = "15/08/2026";
const PUBLISHED_ISO = "2026-08-15";

// ─────────────────────────────────────────────────────────────
// JSON-LD Schemas
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pháp lý Mega City 2 Nhơn Trạch 2026: Cập nhật mới nhất về quy hoạch và hồ sơ dự án",
  description:
    "Tìm hiểu pháp lý Mega City 2 Nhơn Trạch mới nhất. Cập nhật thông tin quy hoạch, quyết định phê duyệt, hồ sơ dự án và những vấn đề nhà đầu tư cần quan tâm.",
  image: [NEWS4["1"], NEWS4["2"], NEWS4["3"]],
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
    "pháp lý Mega City 2, Mega City 2 có sổ đỏ không, quy hoạch Mega City 2, hồ sơ pháp lý Mega City 2, Quyết định 1772/QĐ-UBND, phê duyệt Mega City 2, đất nền Mega City 2",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mega City 2 đã được phê duyệt chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà đầu tư nên tham khảo các văn bản chính thức được công bố bởi cơ quan có thẩm quyền để cập nhật thông tin mới nhất về tình trạng phê duyệt của dự án.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có được phép phân lô bán nền không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thông tin công khai cho thấy dự án đã có Quyết định số 1772/QĐ-UBND ngày 30/05/2025 của UBND tỉnh Đồng Nai liên quan đến việc phân lô bán nền. Người mua nên kiểm tra trực tiếp các tài liệu pháp lý để xác nhận.",
      },
    },
    {
      "@type": "Question",
      name: "Có nên kiểm tra hồ sơ pháp lý trước khi đầu tư không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Đây là bước quan trọng giúp giảm thiểu rủi ro trong quá trình đầu tư. Nhà đầu tư nên kiểm tra quyết định phê duyệt, quy hoạch chi tiết, hồ sơ chuyển nhượng và tiến độ hạ tầng thực tế.",
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
      name: "Pháp lý Mega City 2 Nhơn Trạch 2026",
      item: PAGE_URL,
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// Lightbox images
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: NEWS4["1"], alt: "Pháp lý dự án Mega City 2 Nhơn Trạch năm 2026",         caption: "Pháp lý dự án Mega City 2 Nhơn Trạch năm 2026" },
  { src: NEWS4["2"], alt: "Quy hoạch dự án Mega City 2 Đồng Nai",                  caption: "Quy hoạch dự án Mega City 2 Đồng Nai" },
  { src: NEWS4["3"], alt: "Quyết định phê duyệt dự án Mega City 2",                 caption: "Quyết định phê duyệt dự án Mega City 2" },
  { src: NEWS4["4"], alt: "Hồ sơ pháp lý Mega City 2",                             caption: "Hồ sơ pháp lý Mega City 2" },
  { src: NEWS4["5"], alt: "Quy hoạch khu dân cư Mega City 2 Nhơn Trạch",           caption: "Quy hoạch khu dân cư Mega City 2 Nhơn Trạch" },
];

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const projectStages = [
  "Phê duyệt quy hoạch",
  "Hoàn thiện hạ tầng",
  "Hoàn tất hồ sơ pháp lý",
  "Cấp phép xây dựng",
  "Hoàn thiện các thủ tục chuyển nhượng",
];

const contractChecklist = [
  "Hợp đồng chuyển nhượng",
  "Điều khoản thanh toán",
  "Nghĩa vụ của các bên",
  "Điều kiện chuyển nhượng",
];

const infraChecklist = [
  "Hạ tầng thực tế tại dự án",
  "Tiến độ xây dựng theo cam kết",
  "Quy hoạch được phê duyệt chính thức",
];

const masterplanChecklist = [
  "Bản đồ quy hoạch tổng thể",
  "Phân khu chức năng",
  "Hệ thống giao thông nội khu",
  "Diện tích từng lô",
];

const legalImportancePoints = [
  { title: "Khả năng chuyển nhượng", desc: "Một dự án có hồ sơ minh bạch thường sẽ thuận lợi hơn trong quá trình giao dịch mua bán, chuyển nhượng và thế chấp ngân hàng." },
  { title: "Giá trị tài sản",         desc: "Những dự án hoàn thiện pháp lý thường có tính thanh khoản cao hơn và ít biến động giá hơn trong dài hạn." },
  { title: "Mức độ an toàn",          desc: "Kiểm tra pháp lý trước khi đầu tư sẽ giúp hạn chế những rủi ro không cần thiết, bảo vệ lợi ích của người mua." },
];

const faqs = [
  {
    q: "Mega City 2 đã được phê duyệt chưa?",
    a: "Nhà đầu tư nên tham khảo các văn bản chính thức được công bố bởi cơ quan có thẩm quyền để cập nhật thông tin mới nhất về tình trạng phê duyệt.",
  },
  {
    q: "Mega City 2 có được phép phân lô bán nền không?",
    a: "Thông tin công khai cho thấy dự án đã có Quyết định số 1772/QĐ-UBND liên quan đến việc phân lô bán nền. Người mua nên kiểm tra trực tiếp các tài liệu pháp lý để xác nhận.",
  },
  {
    q: "Có nên kiểm tra hồ sơ pháp lý trước khi đầu tư không?",
    a: "Có. Đây là bước quan trọng giúp giảm thiểu rủi ro trong quá trình đầu tư. Nhà đầu tư nên kiểm tra quyết định phê duyệt, quy hoạch chi tiết, hồ sơ chuyển nhượng và tiến độ hạ tầng thực tế.",
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
export default function PhapLyMegaCity2Page() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
              <span className="text-slate-500 font-medium line-clamp-1">Pháp lý Mega City 2</span>
            </nav>

            {/* Category + meta */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Pháp lý
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
              <span className="text-xs text-slate-400">· 8 phút đọc</span>
            </div>

            {/* H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Pháp lý Mega City 2 Nhơn Trạch: Những thông tin nhà đầu tư cần biết
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Tìm hiểu thông tin quy hoạch, quyết định phê duyệt, hồ sơ pháp lý và những điều cần
              kiểm tra trước khi quyết định đầu tư vào dự án Mega City 2 Nhơn Trạch.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-50 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh pháp lý Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={NEWS4["1"]}
                alt="Pháp lý dự án Mega City 2 Nhơn Trạch năm 2026"
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
              Pháp lý dự án Mega City 2 Nhơn Trạch năm 2026
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
                  Khi lựa chọn một dự án bất động sản, pháp lý luôn là một trong những yếu tố được
                  nhà đầu tư quan tâm hàng đầu. Đây không phải ngẫu nhiên — hồ sơ pháp lý minh bạch
                  là nền tảng để giao dịch diễn ra thuận lợi, bảo vệ quyền lợi của người mua và đảm
                  bảo tính thanh khoản cho tài sản trong tương lai.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Đối với{" "}
                  <a href="/mega-city-2" className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-800">
                    Mega City 2 Nhơn Trạch
                  </a>
                  , nhiều khách hàng thường đặt câu hỏi:
                </p>
                <div className="rounded-2xl bg-amber-50 border border-amber-200 px-7 py-6 space-y-2">
                  {[
                    "Dự án đã được phê duyệt chưa?",
                    "Quy hoạch như thế nào?",
                    "Có được phép phân lô bán nền hay không?",
                    "Thủ tục chuyển nhượng có minh bạch không?",
                  ].map((q) => (
                    <div key={q} className="flex items-start gap-3">
                      <span className="text-amber-500 font-black text-lg leading-snug mt-0.5">?</span>
                      <p className="text-amber-900 font-semibold text-[15px]">{q}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Việc tìm hiểu kỹ hồ sơ pháp lý sẽ giúp người mua hạn chế rủi ro và có cơ sở đánh
                  giá tiềm năng của dự án một cách khách quan, thay vì chỉ dựa vào thông tin quảng
                  cáo từ phía chủ đầu tư.
                </p>
              </div>

              {/* Quick links */}
              <div className="flex flex-wrap gap-3 mb-14">
                <LinkButton href="/mega-city-2">Tổng quan dự án →</LinkButton>
                <LinkButton href="/mega-city-2/phap-ly">Pháp lý chi tiết →</LinkButton>
                <LinkButton href="/mega-city-2/bang-gia">Bảng giá →</LinkButton>
                <LinkButton href="/mega-city-2/vi-tri">Vị trí →</LinkButton>
                <LinkButton href="/mega-city-2/mat-bang">Mặt bằng →</LinkButton>
              </div>

              {/* Section 1: Quyết định 1772 */}
              <section className="mb-14">
                <SectionHeading>Quyết định 1772/QĐ-UBND là gì?</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo thông tin được công bố, UBND tỉnh Đồng Nai đã ban hành{" "}
                    <strong className="text-slate-800">Quyết định số 1772/QĐ-UBND ngày 30/05/2025</strong>{" "}
                    liên quan đến việc chấp thuận cho phép phân lô bán nền tại dự án Mega City 2.
                  </p>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-slate-900 px-6 py-4">
                      <p className="text-white font-black text-sm uppercase tracking-wider">Thông tin văn bản</p>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {[
                        { label: "Số hiệu",     value: "1772/QĐ-UBND" },
                        { label: "Ngày ban hành", value: "30/05/2025" },
                        { label: "Cơ quan ban hành", value: "UBND tỉnh Đồng Nai" },
                        { label: "Nội dung",     value: "Chấp thuận phân lô bán nền tại dự án" },
                      ].map((row) => (
                        <div key={row.label} className="flex px-6 py-4 gap-4">
                          <span className="text-sm font-bold text-slate-500 w-40 shrink-0">{row.label}</span>
                          <span className="text-sm text-slate-700">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Thông tin này cho thấy dự án đã có những bước tiến quan trọng về mặt thủ tục hành
                    chính. Tuy nhiên, nhà đầu tư nên thường xuyên cập nhật các văn bản chính thức từ
                    cơ quan quản lý để có thông tin chính xác và đầy đủ nhất.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bạn có thể xem thêm chi tiết tại trang{" "}
                    <a href="/mega-city-2/phap-ly" className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-800">
                      pháp lý Mega City 2
                    </a>{" "}
                    hoặc liên hệ trực tiếp để được cung cấp tài liệu cụ thể.
                  </p>
                </div>
              </section>

              {/* Image 2 */}
              <ArticleFigure
                src={NEWS4["2"]}
                alt="Quy hoạch dự án Mega City 2 Đồng Nai"
                caption="Quy hoạch dự án Mega City 2 Đồng Nai"
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 2: Quy hoạch */}
              <section className="mb-14">
                <SectionHeading>Quy hoạch Mega City 2 được triển khai như thế nào?</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một dự án bất động sản thường phải trải qua nhiều giai đoạn trước khi đến tay
                    người mua. Hiểu được lộ trình này giúp nhà đầu tư đánh giá được mức độ hoàn thiện
                    pháp lý và độ an toàn của dự án:
                  </p>
                  <div className="space-y-3">
                    {projectStages.map((stage, i) => (
                      <div key={stage} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                        <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm flex items-center justify-center shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-slate-700 font-semibold text-[15px]">{stage}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Việc theo dõi tiến độ pháp lý sẽ giúp khách hàng đánh giá được mức độ hoàn thiện
                    của dự án tại thời điểm muốn giao dịch, tránh rủi ro mua phải dự án chưa hoàn
                    chỉnh về mặt thủ tục.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tham khảo thêm thông tin tại trang{" "}
                    <a href="/mega-city-2/tien-do" className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-800">
                      tiến độ dự án Mega City 2
                    </a>.
                  </p>
                </div>
              </section>

              {/* Image 3 */}
              <ArticleFigure
                src={NEWS4["3"]}
                alt="Quyết định phê duyệt dự án Mega City 2"
                caption="Quyết định phê duyệt dự án Mega City 2"
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 3: Giấy tờ cần kiểm tra */}
              <section className="mb-14">
                <SectionHeading>Những giấy tờ pháp lý nhà đầu tư nên kiểm tra</SectionHeading>
                <div className="pt-6 space-y-10">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trước khi quyết định đầu tư, khách hàng nên tự mình kiểm tra hoặc nhờ chuyên gia
                    pháp lý hỗ trợ xem xét các tài liệu sau:
                  </p>

                  {/* 1. Quyết định phê duyệt */}
                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">1. Quyết định phê duyệt</h3>
                    <p className="text-slate-600 text-[17px] leading-[1.85]">
                      Đây là căn cứ pháp lý xác nhận dự án được cơ quan có thẩm quyền chấp thuận.
                      Không có quyết định phê duyệt, mọi giao dịch đều tiềm ẩn rủi ro pháp lý nghiêm
                      trọng cho người mua. Đối với Mega City 2, Quyết định 1772/QĐ-UBND là một trong
                      những văn bản quan trọng cần kiểm tra.
                    </p>
                  </div>

                  {/* 2. Quy hoạch chi tiết */}
                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">2. Quy hoạch chi tiết</h3>
                    <p className="text-slate-600 text-[17px] leading-[1.85] mb-4">
                      Nhà đầu tư nên kiểm tra bản đồ quy hoạch để xác nhận lô đất mình quan tâm nằm
                      trong phân khu nào và có phù hợp mục đích sử dụng không:
                    </p>
                    <BulletList items={masterplanChecklist} />
                    <div className="mt-4">
                      <LinkButton href="/mega-city-2/mat-bang">Xem mặt bằng phân lô Mega City 2 →</LinkButton>
                    </div>
                  </div>

                  {/* 3. Hồ sơ chuyển nhượng */}
                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">3. Hồ sơ chuyển nhượng</h3>
                    <p className="text-slate-600 text-[17px] leading-[1.85] mb-4">
                      Khi tiến hành giao dịch, người mua nên đọc kỹ và hiểu rõ từng điều khoản trong
                      hợp đồng:
                    </p>
                    <BulletList items={contractChecklist} />
                    <p className="text-slate-600 text-[17px] leading-[1.85] mt-4">
                      Nếu còn thắc mắc về bất kỳ điều khoản nào, hãy tham khảo ý kiến của luật sư
                      hoặc chuyên gia pháp lý trước khi ký kết.
                    </p>
                  </div>

                  {/* 4. Thông tin hạ tầng */}
                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">4. Thông tin hạ tầng thực tế</h3>
                    <p className="text-slate-600 text-[17px] leading-[1.85] mb-4">
                      Hạ tầng thực tế đôi khi không khớp hoàn toàn với quy hoạch trên giấy tờ. Để
                      tránh bất ngờ, nên đối chiếu:
                    </p>
                    <BulletList items={infraChecklist} />
                    <div className="mt-4">
                      <LinkButton href="/mega-city-2/tien-do">Xem tiến độ thi công Mega City 2 →</LinkButton>
                    </div>
                  </div>
                </div>
              </section>

              {/* Image 4 */}
              <ArticleFigure
                src={NEWS4["4"]}
                alt="Hồ sơ pháp lý Mega City 2"
                caption="Hồ sơ pháp lý Mega City 2"
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 4: Vì sao pháp lý quan trọng */}
              <section className="mb-14">
                <SectionHeading>Vì sao pháp lý lại quan trọng khi đầu tư bất động sản?</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong thị trường bất động sản, pháp lý không chỉ là thủ tục hành chính — nó là
                    yếu tố quyết định đến giá trị và tính thanh khoản của tài sản. Dưới đây là ba
                    khía cạnh quan trọng nhất:
                  </p>
                  <div className="grid gap-5">
                    {legalImportancePoints.map((point) => (
                      <div key={point.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                          <h3 className="font-black text-slate-800 text-base">{point.title}</h3>
                        </div>
                        <p className="text-slate-600 text-[15px] leading-relaxed">{point.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là lý do tại sao các chuyên gia bất động sản luôn khuyến nghị người mua nên
                    ưu tiên kiểm tra pháp lý trước, thay vì bị cuốn vào các chương trình khuyến mãi
                    hay áp lực từ phía bán hàng.
                  </p>
                </div>
              </section>

              {/* Image 5 */}
              <ArticleFigure
                src={NEWS4["5"]}
                alt="Quy hoạch khu dân cư Mega City 2 Nhơn Trạch"
                caption="Quy hoạch khu dân cư Mega City 2 Nhơn Trạch"
                images={images} index={4} onOpen={openLightbox}
              />

              {/* Section 5: Tìm hiểu thêm */}
              <section className="mb-14">
                <SectionHeading>Nhà đầu tư nên tìm hiểu thêm những thông tin nào?</SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ngoài yếu tố pháp lý, một quyết định đầu tư sáng suốt cần dựa trên nhiều góc
                    độ khác nhau. Khách hàng cũng nên tham khảo thêm:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { label: "Vị trí dự án",         href: "/mega-city-2/vi-tri",   desc: "Khả năng kết nối giao thông và tiềm năng khu vực" },
                      { label: "Bảng giá",              href: "/mega-city-2/bang-gia", desc: "Giá tham khảo từng loại sản phẩm" },
                      { label: "Tiến độ xây dựng",      href: "/mega-city-2/tien-do",  desc: "Cập nhật tiến độ thi công thực tế" },
                      { label: "Tiện ích nội khu",       href: "/mega-city-2/tien-ich", desc: "Hệ thống tiện ích được quy hoạch" },
                      { label: "Mặt bằng phân lô",      href: "/mega-city-2/mat-bang", desc: "Sơ đồ phân khu và vị trí lô" },
                      { label: "Tổng quan dự án",       href: "/mega-city-2",          desc: "Thông tin tổng hợp về Mega City 2" },
                    ].map((item) => (
                      <a key={item.href} href={item.href}
                        className="group rounded-xl border border-slate-200 bg-slate-50 p-5
                                   hover:border-amber-300 hover:bg-amber-50 transition-all">
                        <p className="font-black text-slate-800 text-sm mb-1 group-hover:text-amber-700 transition-colors">
                          {item.label} →
                        </p>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-10">
                <div className="bg-slate-900 px-7 py-6">
                  <h2 className="text-white font-black text-xl tracking-tight">Câu hỏi thường gặp về pháp lý Mega City 2</h2>
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

                {/* Legal quick info */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-amber-500 px-6 py-4">
                    <p className="text-white font-black text-sm uppercase tracking-wider">Pháp lý nổi bật</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      { label: "Quyết định",  value: "1772/QĐ-UBND" },
                      { label: "Ngày ký",     value: "30/05/2025" },
                      { label: "Cơ quan",     value: "UBND Đồng Nai" },
                      { label: "Nội dung",    value: "Phân lô bán nền" },
                    ].map((row) => (
                      <div key={row.label} className="px-6 py-4">
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">{row.label}</p>
                        <p className="text-sm font-black text-slate-800">{row.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-xs text-slate-400 italic">
                      * Kiểm tra trực tiếp tài liệu pháp lý để xác nhận
                    </p>
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
                      { label: "Pháp lý chi tiết",       href: "/mega-city-2/phap-ly" },
                      { label: "Bảng giá",               href: "/mega-city-2/bang-gia" },
                      { label: "Vị trí & kết nối",       href: "/mega-city-2/vi-tri" },
                      { label: "Tiến độ thi công",       href: "/mega-city-2/tien-do" },
                      { label: "Mặt bằng phân lô",       href: "/mega-city-2/mat-bang" },
                      { label: "Tiện ích nội khu",       href: "/mega-city-2/tien-ich" },
                      { label: "Phương thức thanh toán", href: "/mega-city-2/thanh-toan" },
                      { label: "FAQ",                    href: "/mega-city-2/faq" },
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
          title="Cần tư vấn về pháp lý Mega City 2?"
          subtitle="Liên hệ ngay để được cung cấp tài liệu pháp lý, hỗ trợ kiểm tra hồ sơ và tư vấn đầu tư miễn phí."
          variant="default"
        />

        {/* Related content */}
        <RelatedContent
          items={[
            {
              href: "/mega-city-2/phap-ly",
              title: "Pháp lý Mega City 2 — Trang chính",
              description: "Hồ sơ pháp lý đầy đủ và cập nhật nhất về dự án.",
              tag: "Pháp lý",
            },
            {
              href: "/mega-city-2/bang-gia",
              title: "Bảng giá Mega City 2",
              description: "Giá tham khảo các loại sản phẩm tại dự án.",
              tag: "Bảng giá",
            },
            {
              href: "/mega-city-2/vi-tri",
              title: "Vị trí Mega City 2",
              description: "Phân tích vị trí và khả năng kết nối vùng.",
              tag: "Vị trí",
            },
            {
              href: "/mega-city-2/tien-do",
              title: "Tiến độ thi công",
              description: "Cập nhật tiến độ xây dựng thực tế.",
              tag: "Tiến độ",
            },
            {
              href: "/mega-city-2/mat-bang",
              title: "Mặt bằng phân lô",
              description: "Sơ đồ phân khu và vị trí từng lô.",
              tag: "Mặt bằng",
            },
            {
              href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",
              title: "Bảng giá Mega City 2 mới nhất 2026",
              description: "Cập nhật giá tham khảo và yếu tố ảnh hưởng.",
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
