"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import PageCTA from "@/components/PageCTA";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS25 } from "@/lib/cloudinary";

// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────
const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/mega-city-2-co-phu-hop-de-o`;
const PUBLISHED     = "23/08/2026";
const PUBLISHED_ISO = "2026-08-23";

// ─────────────────────────────────────────────────────────────
// JSON-LD Schemas
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mega City 2 có phù hợp để ở không? Phân tích nhu cầu an cư tại Nhơn Trạch",
  description:
    "Mega City 2 có phù hợp để ở không? Cùng phân tích vị trí, hạ tầng, tiện ích, loại hình nhà ở và những yếu tố cần cân nhắc trước khi mua để an cư tại Nhơn Trạch.",
  image: [IMG_NEWS25["1"], IMG_NEWS25["2"], IMG_NEWS25["3"]],
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
    "Mega City 2 có phù hợp để ở, Mega City 2 an cư, mua nhà Mega City 2 để ở, sống tại Mega City 2 Nhơn Trạch",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mega City 2 có phù hợp để gia đình ở lâu dài không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có thể phù hợp nếu vị trí, loại hình sản phẩm, hạ tầng, tiện ích và khả năng tài chính đáp ứng nhu cầu của gia đình. Người mua nên khảo sát thực tế trước khi quyết định.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có những loại nhà ở nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo cơ cấu quy hoạch được công bố, Mega City 2 có nhà vườn liên kế TH, nhà phố liên kế T và biệt thự song lập V. Tổng cơ cấu quy hoạch là 3.160 sản phẩm thấp tầng.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có tiện ích phục vụ cư dân không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo thông tin quy hoạch và giới thiệu dự án, Mega City 2 có các quỹ đất và hạng mục dành cho công viên, giáo dục, thương mại – dịch vụ, y tế, sinh hoạt cộng đồng. Người mua nên kiểm tra tình trạng hoàn thiện và vận hành thực tế của từng tiện ích tại thời điểm mua.",
      },
    },
    {
      "@type": "Question",
      name: "Người làm việc tại TP.HCM có nên mua Mega City 2 để ở không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Điều này phụ thuộc vào nơi làm việc và thời gian di chuyển chấp nhận được của mỗi gia đình. Nên thử tuyến đường thực tế vào giờ cao điểm trước khi quyết định.",
      },
    },
    {
      "@type": "Question",
      name: "Mua Mega City 2 để ở cần kiểm tra những gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nên kiểm tra vị trí sản phẩm, pháp lý, hạ tầng, tiện ích, tổng chi phí mua và xây dựng, khả năng vay cũng như khoảng cách đến nơi làm việc và trường học.",
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
      name: "Mega City 2 có phù hợp để ở không?",
      item: PAGE_URL,
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kim Oanh Đồng Nai",
  url: BASE_URL,
  logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
};

// ─────────────────────────────────────────────────────────────
// Lightbox images
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS25["1"],
    alt: "Mega City 2 Nhơn Trạch có phù hợp để ở không",
    caption: "Mega City 2 Nhơn Trạch – góc nhìn về nhu cầu an cư và chất lượng không gian sống",
  },
  {
    src: IMG_NEWS25["2"],
    alt: "Vị trí Mega City 2 Nhơn Trạch và các tuyến giao thông kết nối khu vực",
    caption: "Vị trí Mega City 2 và mạng lưới giao thông kết nối khu vực Nhơn Trạch",
  },
  {
    src: IMG_NEWS25["3"],
    alt: "Không gian sống và tiện ích nội khu tại Mega City 2 Nhơn Trạch",
    caption: "Không gian cây xanh, đường nội khu và các tiện ích được quy hoạch tại Mega City 2",
  },
  {
    src: IMG_NEWS25["4"],
    alt: "Các loại hình nhà ở tại Mega City 2 gồm nhà vườn liên kế nhà phố liên kế và biệt thự song lập",
    caption: "Ba nhóm sản phẩm nhà ở thấp tầng được quy hoạch tại Mega City 2",
  },
];

// ─────────────────────────────────────────────────────────────
// Reusable sub-components
// ─────────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400 scroll-mt-24"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-8">
      {children}
    </h3>
  );
}

function BulletList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="space-y-2.5 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-700 text-[16px] leading-relaxed">
          <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-[9px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const s =
    type === "warn"
      ? "bg-amber-50 border-amber-200 text-amber-800"
      : "bg-slate-50 border-slate-200 text-slate-700";
  return (
    <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>
      {children}
    </div>
  );
}

function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300
                 text-amber-800 font-bold text-sm px-4 py-2 rounded-xl
                 hover:bg-amber-100 hover:border-amber-400 transition-all"
    >
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Checklist data
// ─────────────────────────────────────────────────────────────
const checklistItems = [
  { label: "Vị trí", desc: "Có thuận tiện cho công việc và sinh hoạt không?" },
  { label: "Tài chính", desc: "Tổng chi phí mua và xây nhà có nằm trong khả năng không?" },
  { label: "Hạ tầng", desc: "Hạ tầng thực tế hiện nay đã đáp ứng nhu cầu chưa?" },
  { label: "Tiện ích", desc: "Trường học, y tế, mua sắm và vui chơi có thuận tiện không?" },
  { label: "Sản phẩm", desc: "Diện tích và loại hình nhà ở có phù hợp không?" },
  { label: "Pháp lý", desc: "Hồ sơ của sản phẩm cụ thể đã được kiểm tra chưa?" },
  { label: "Thời gian", desc: "Bạn có nhu cầu ở ngay hay có thể chờ thêm?" },
];

const suitableGroups = [
  {
    title: "Nhóm 1: Gia đình muốn mua nhà đất để an cư",
    desc: "Những gia đình ưu tiên sở hữu đất và nhà thấp tầng có thể quan tâm đến Mega City 2 thay vì lựa chọn căn hộ.",
  },
  {
    title: "Nhóm 2: Người đang sinh sống hoặc làm việc tại Nhơn Trạch",
    desc: "Đây là nhóm có lợi thế về khoảng cách và khả năng sử dụng các tiện ích trong khu vực.",
  },
  {
    title: "Nhóm 3: Gia đình muốn tìm nơi ở lâu dài",
    desc: "Những người không cần ở ngay trung tâm TP.HCM và chấp nhận lựa chọn khu vực đang phát triển có thể đưa Mega City 2 vào danh sách tham khảo.",
  },
  {
    title: "Nhóm 4: Người muốn kết hợp ở và kinh doanh",
    desc: "Một số vị trí nhà phố có thể phù hợp với mô hình ở kết hợp kinh doanh, nhưng cần đánh giá từng vị trí, mặt đường và quy định sử dụng cụ thể.",
  },
];

const faqs = [
  {
    q: "Mega City 2 có phù hợp để gia đình ở lâu dài không?",
    a: "Có thể phù hợp nếu vị trí, loại hình sản phẩm, hạ tầng, tiện ích và khả năng tài chính đáp ứng nhu cầu của gia đình. Người mua nên khảo sát thực tế trước khi quyết định.",
  },
  {
    q: "Mega City 2 có những loại nhà ở nào?",
    a: "Theo cơ cấu quy hoạch được công bố, Mega City 2 có nhà vườn liên kế TH, nhà phố liên kế T và biệt thự song lập V. Tổng cơ cấu quy hoạch là 3.160 sản phẩm thấp tầng.",
  },
  {
    q: "Mega City 2 có tiện ích phục vụ cư dân không?",
    a: "Theo thông tin quy hoạch và giới thiệu dự án, Mega City 2 có các quỹ đất và hạng mục dành cho công viên, giáo dục, thương mại – dịch vụ, y tế, sinh hoạt cộng đồng. Người mua nên kiểm tra tình trạng hoàn thiện và vận hành thực tế của từng tiện ích tại thời điểm mua.",
  },
  {
    q: "Người làm việc tại TP.HCM có nên mua Mega City 2 để ở không?",
    a: "Điều này phụ thuộc vào nơi làm việc và thời gian di chuyển chấp nhận được của mỗi gia đình. Nên thử tuyến đường thực tế vào giờ cao điểm trước khi quyết định.",
  },
  {
    q: "Mua Mega City 2 để ở cần kiểm tra những gì?",
    a: "Nên kiểm tra vị trí sản phẩm, pháp lý, hạ tầng, tiện ích, tổng chi phí mua và xây dựng, khả năng vay cũng như khoảng cách đến nơi làm việc và trường học.",
  },
];

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function MegaCity2CoPhuHopDeOPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {LightboxPortal}
      <ScrollAnimator />
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
              <span className="text-slate-500 font-medium line-clamp-1">Mega City 2 có phù hợp để ở không?</span>
            </nav>

            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Tin dự án
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
              <span className="text-xs text-slate-400">· 11 phút đọc</span>
            </div>

            {/* H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Mega City 2 có phù hợp để ở không? Phân tích nhu cầu an cư tại Nhơn Trạch
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích vị trí, hạ tầng, tiện ích, loại hình nhà ở và những yếu tố cần cân nhắc
              trước khi mua để an cư tại Mega City 2 Nhơn Trạch.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh Mega City 2 Nhơn Trạch"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS25["1"]}
                alt="Mega City 2 Nhơn Trạch có phù hợp để ở không"
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
              Mega City 2 Nhơn Trạch – góc nhìn về nhu cầu an cư và chất lượng không gian sống
            </p>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Article ── */}
            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#vi-tri",         "1. Vị trí có thuận tiện cho việc ở lâu dài không?"],
                    ["#khong-gian",     "2. Không gian sống có phù hợp với gia đình?"],
                    ["#loai-hinh",      "3. Các loại hình nhà ở tại Mega City 2"],
                    ["#ha-tang",        "4. Hạ tầng nội khu có quan trọng không?"],
                    ["#con-nho",        "5. Gia đình có con nhỏ có phù hợp không?"],
                    ["#di-lam-hcm",     "6. Người đi làm tại TP.HCM có nên mua không?"],
                    ["#phu-hop-ai",     "7. Mega City 2 phù hợp với những ai?"],
                    ["#khong-nen",      "8. Những trường hợp nào không nên vội mua?"],
                    ["#nen-mua-2026",   "9. Có nên mua để ở trong năm 2026?"],
                    ["#truoc-khi-mua",  "10. Những thông tin nên kiểm tra trước khi mua"],
                    ["#faq",            "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <div className="space-y-5 mb-14">
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Khi tìm hiểu một khu đô thị để an cư, người mua thường quan tâm nhiều hơn giá bán.
                  Vị trí, khả năng kết nối giao thông, môi trường sống, tiện ích, loại hình nhà ở,
                  hạ tầng nội khu và khả năng đáp ứng nhu cầu sinh hoạt hằng ngày đều là những yếu
                  tố cần được xem xét.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Mega City 2 tại Nhơn Trạch, Đồng Nai là khu dân cư có quy mô khoảng 83,94 ha,
                  được quy hoạch với hệ thống sản phẩm nhà ở thấp tầng gồm nhà vườn liên kế, nhà
                  phố liên kế và biệt thự song lập. Theo thông tin quy hoạch được công bố, tổng cơ
                  cấu gồm 3.160 sản phẩm; trong đó 2.421 lô được chấp thuận thực hiện chuyển nhượng
                  quyền sử dụng đất theo hình thức phân lô, bán nền.
                </p>
                <InfoBox type="info">
                  <strong>Vậy Mega City 2 có phù hợp để ở hay không?</strong> Câu trả lời phụ
                  thuộc vào nhu cầu, khả năng tài chính và nơi làm việc của từng gia đình. Tuy nhiên,
                  nếu ưu tiên một không gian sống tại Nhơn Trạch, muốn sở hữu nhà đất thay vì chỉ
                  tìm căn hộ và cần khả năng kết nối với các khu vực phát triển của Đồng Nai và
                  TP.HCM, Mega City 2 là một dự án đáng để đưa vào danh sách tham khảo.
                </InfoBox>
              </div>

              {/* Section 1 */}
              <section className="mb-14">
                <SectionHeading id="vi-tri">
                  1. Vị trí Mega City 2 có thuận tiện cho việc ở lâu dài không?
                </SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một trong những yếu tố quan trọng đối với nhu cầu an cư là khả năng di chuyển
                    hằng ngày.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 nằm tại khu vực Nhơn Trạch và được kết nối với các tuyến đường lớn
                    như đường 25C, đường 319, Tôn Đức Thắng và Nguyễn Hữu Cảnh. Các tuyến giao thông
                    này tạo điều kiện kết nối dự án với trung tâm Nhơn Trạch và mạng lưới giao thông
                    liên vùng.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đối với người mua để ở, lợi thế của vị trí không chỉ nằm ở khả năng đi đến
                    TP.HCM mà còn ở việc tiếp cận các khu vực làm việc, trường học, bệnh viện,
                    trung tâm thương mại và các dịch vụ thiết yếu trong khu vực.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đặc biệt, Nhơn Trạch đang được hưởng lợi từ quá trình đầu tư hạ tầng giao thông
                    của vùng Đông Nam Bộ. Tuy nhiên, người mua vẫn nên đánh giá thời gian di chuyển
                    thực tế từ nơi ở đến nơi làm việc thay vì chỉ dựa vào khoảng cách trên bản đồ.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí Mega City 2 Nhơn Trạch →</LinkBtn>
                    <LinkBtn href="/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat">Hạ tầng giao thông Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Image 1 */}
              <ArticleFigure
                src={IMG_NEWS25["2"]}
                alt="Vị trí Mega City 2 Nhơn Trạch và các tuyến giao thông kết nối khu vực"
                caption="Vị trí Mega City 2 và mạng lưới giao thông kết nối khu vực Nhơn Trạch"
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 2 */}
              <section className="mb-14">
                <SectionHeading id="khong-gian">
                  2. Không gian sống tại Mega City 2 có phù hợp với gia đình?
                </SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đối với người mua để ở, một khu đô thị cần đáp ứng được nhiều nhu cầu hơn việc
                    chỉ có một căn nhà. Gia đình thường quan tâm đến đường nội khu, cây xanh, không
                    gian sinh hoạt, khu vui chơi trẻ em, trường học, y tế và các tiện ích phục vụ
                    đời sống hằng ngày.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo thông tin được công bố, Mega City 2 được quy hoạch với các quỹ đất dành cho
                    thương mại – dịch vụ, giáo dục, công viên cảnh quan, y tế và trung tâm sinh hoạt
                    cộng đồng. Một số nguồn thông tin về dự án cũng đề cập đến khu phức hợp thể thao
                    ngoài trời và khu vui chơi trẻ em.
                  </p>
                  <InfoBox type="warn">
                    <strong>Lưu ý:</strong> Khi đánh giá thực tế, nên phân biệt rõ giữa tiện ích
                    đã hoàn thiện và đang sử dụng, tiện ích đang triển khai, tiện ích nằm trong quy
                    hoạch và tiện ích liên kết bên ngoài dự án. Việc phân biệt này giúp người mua
                    có kỳ vọng thực tế hơn về chất lượng cuộc sống tại từng thời điểm.
                  </InfoBox>
                </div>
              </section>

              {/* Image 2 */}
              <ArticleFigure
                src={IMG_NEWS25["3"]}
                alt="Không gian sống và tiện ích nội khu tại Mega City 2 Nhơn Trạch"
                caption="Không gian cây xanh, đường nội khu và các tiện ích được quy hoạch tại Mega City 2"
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 3 */}
              <section className="mb-14">
                <SectionHeading id="loai-hinh">
                  3. Mega City 2 có những loại hình nhà ở nào?
                </SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một điểm đáng chú ý đối với người mua để ở là sự đa dạng về loại hình sản phẩm.
                    Theo thông tin quy hoạch hiện có, Mega City 2 gồm ba nhóm sản phẩm thấp tầng chính:
                  </p>

                  {/* Product type cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                    {[
                      {
                        code: "TH",
                        name: "Nhà vườn liên kế",
                        desc: "Phù hợp với gia đình muốn sở hữu nhà đất trong khu đô thị nhưng vẫn ưu tiên diện tích và không gian sinh hoạt.",
                      },
                      {
                        code: "T",
                        name: "Nhà phố liên kế",
                        desc: "Phù hợp với người muốn xây dựng hoặc sở hữu nhà trong khu dân cư quy hoạch đồng bộ. Một số vị trí có thể kết hợp ở và kinh doanh.",
                      },
                      {
                        code: "V",
                        name: "Biệt thự song lập",
                        desc: "Hướng đến nhóm khách hàng cần không gian sống rộng hơn, ưu tiên sự riêng tư và chất lượng không gian sống.",
                      },
                    ].map((p) => (
                      <div key={p.code} className="rounded-2xl border border-slate-200 p-5 bg-white hover:border-amber-300 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-amber-500 text-white font-black text-base flex items-center justify-center mb-3">
                          {p.code}
                        </div>
                        <p className="font-black text-slate-800 text-sm mb-2">{p.name}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tổng cơ cấu quy hoạch là 3.160 sản phẩm thấp tầng. Sự đa dạng này giúp người
                    mua có thể lựa chọn sản phẩm dựa trên nhu cầu sử dụng và khả năng tài chính.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2/nha-pho-lien-ke">Nhà phố liên kế Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/mat-bang">Mặt bằng Mega City 2 →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Image 3 */}
              <ArticleFigure
                src={IMG_NEWS25["4"]}
                alt="Các loại hình nhà ở tại Mega City 2 gồm nhà vườn liên kế nhà phố liên kế và biệt thự song lập"
                caption="Ba nhóm sản phẩm nhà ở thấp tầng được quy hoạch tại Mega City 2"
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 4 */}
              <section className="mb-14">
                <SectionHeading id="ha-tang">
                  4. Hạ tầng nội khu có quan trọng đối với người mua để ở?
                </SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Có. Một căn nhà có thể đẹp nhưng nếu đường sá, thoát nước, điện, nước hoặc cảnh
                    quan xung quanh chưa đáp ứng nhu cầu thì trải nghiệm sống sẽ bị ảnh hưởng.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo thông tin dự án, Mega City 2 được quy hoạch với hệ thống đường nội khu và
                    hạ tầng kỹ thuật đồng bộ. Đối với người mua để ở, nên kiểm tra trực tiếp các
                    yếu tố sau:
                  </p>
                  <BulletList items={[
                    "Đường trước nhà rộng bao nhiêu và khả năng tiếp cận ô tô",
                    "Hệ thống thoát nước",
                    "Điện và nước thực tế",
                    "Vỉa hè và cây xanh",
                    "Tình trạng xây dựng của khu vực xung quanh",
                    "Khoảng cách từ nhà đến tiện ích gần nhất",
                  ]} />
                  <InfoBox>
                    Đây là những yếu tố rất thực tế nhưng đôi khi bị bỏ qua khi người mua chỉ tập
                    trung vào giá đất. Hãy đến khảo sát trực tiếp trước khi quyết định.
                  </InfoBox>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-14">
                <SectionHeading id="con-nho">
                  5. Gia đình có con nhỏ có phù hợp với Mega City 2 không?
                </SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là một trong những nhóm khách hàng nên xem xét kỹ hệ thống tiện ích giáo dục
                    và vui chơi. Thông tin quy hoạch dự án có quỹ đất dành cho giáo dục và các tiện
                    ích phục vụ cộng đồng.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tuy nhiên, nếu gia đình có con nhỏ, không nên chỉ nhìn vào tên tiện ích trong
                    quy hoạch. Nên kiểm tra thực tế:
                  </p>
                  <BulletList items={[
                    "Trường học nào đang hoạt động gần nhà và khoảng cách thực tế",
                    "Thời gian di chuyển đến trường vào giờ cao điểm",
                    "Có khu vui chơi phù hợp với trẻ em hay không?",
                    "Bệnh viện và cơ sở y tế gần nhất ở đâu?",
                    "Các dịch vụ thiết yếu (chợ, siêu thị, nhà thuốc) có thuận tiện không?",
                  ]} />
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-14">
                <SectionHeading id="di-lam-hcm">
                  6. Người đi làm tại TP.HCM có nên mua Mega City 2 để ở?
                </SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là câu hỏi cần xem xét theo từng trường hợp. Mega City 2 có lợi thế về kết
                    nối khu vực thông qua đường 25C, 319 và các tuyến giao thông lớn của Nhơn Trạch.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tuy nhiên, nếu bạn làm việc tại TP.HCM và phải di chuyển mỗi ngày, hãy thử tính
                    thời gian đi lại vào hai khung giờ thực tế:
                  </p>
                  <BulletList items={[
                    "Buổi sáng: từ nhà → nơi làm việc",
                    "Buổi chiều: từ nơi làm việc → nhà",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không nên chỉ căn cứ vào con số khoảng cách. Thời gian di chuyển thực tế phụ
                    thuộc vào tuyến đường sử dụng, tình trạng giao thông, thời điểm di chuyển,
                    phương tiện cá nhân và các điểm ùn tắc trên hành trình.
                  </p>
                  <InfoBox>
                    Nếu gia đình làm việc chủ yếu tại Nhơn Trạch, Long Thành hoặc các khu vực lân
                    cận, bài toán khoảng cách có thể khác so với người làm việc sâu trong trung
                    tâm TP.HCM.
                  </InfoBox>
                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/duong-25c">Tiến độ đường 25C →</LinkBtn>
                    <LinkBtn href="/tin-tuc/cau-nhon-trach">Cầu Nhơn Trạch →</LinkBtn>
                    <LinkBtn href="/tin-tuc/vanh-dai-3">Vành đai 3 TP.HCM →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section className="mb-14">
                <SectionHeading id="phu-hop-ai">
                  7. Mega City 2 phù hợp với những ai?
                </SectionHeading>
                <div className="pt-6 space-y-6">
                  {suitableGroups.map((g) => (
                    <div key={g.title} className="rounded-2xl border border-slate-200 p-5 bg-white hover:border-amber-300 transition-colors">
                      <p className="font-black text-slate-800 text-base mb-2">{g.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{g.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 8 */}
              <section className="mb-14">
                <SectionHeading id="khong-nen">
                  8. Những trường hợp nào không nên vội mua Mega City 2 để ở?
                </SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không phải ai cũng phù hợp. Nếu bạn đang tìm một căn hộ ngay trung tâm TP.HCM
                    để thuận tiện đi làm mỗi ngày, Mega City 2 có thể chưa phải lựa chọn phù hợp nhất.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tương tự, nếu tài chính chưa ổn định hoặc khoản vay vượt quá khả năng chi trả,
                    người mua cũng không nên quyết định chỉ vì kỳ vọng giá bất động sản sẽ tăng.
                  </p>
                  <InfoBox type="warn">
                    Trước khi mua để ở, nên tính đầy đủ: <strong>Giá sản phẩm + chi phí xây
                    dựng + nội thất + thuế/phí + chi phí vay + chi phí sinh hoạt hằng tháng.</strong>{" "}
                    Một bất động sản phù hợp để an cư không chỉ là bất động sản có vị trí tốt mà
                    còn phải phù hợp với khả năng tài chính của gia đình.
                  </InfoBox>
                </div>
              </section>

              {/* Section 9 – Checklist */}
              <section className="mb-14">
                <SectionHeading id="nen-mua-2026">
                  9. Có nên mua Mega City 2 để ở trong năm 2026?
                </SectionHeading>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không có câu trả lời chung cho tất cả mọi người. Mega City 2 có một số yếu tố
                    phù hợp với nhu cầu an cư như quy mô khu dân cư lớn, nhiều loại hình nhà ở
                    thấp tầng, hệ thống hạ tầng nội khu và định hướng phát triển tiện ích.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Người mua để ở nên đánh giá dự án theo nhu cầu thực tế của gia đình thay vì chỉ
                    dựa trên tiềm năng tăng giá. Có thể sử dụng checklist đơn giản sau:
                  </p>

                  {/* Checklist */}
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm my-6">
                    <div className="bg-amber-500 px-6 py-4">
                      <p className="text-white font-black text-sm uppercase tracking-wider">
                        Mega City 2 có phù hợp để ở? — Checklist 7 tiêu chí
                      </p>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {checklistItems.map((item) => (
                        <div key={item.label} className="flex items-start gap-4 px-6 py-4 hover:bg-amber-50/40 transition-colors">
                          <span className="w-6 h-6 rounded-full border-2 border-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          </span>
                          <div>
                            <p className="font-bold text-slate-800 text-sm">{item.label}</p>
                            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu các câu trả lời đều phù hợp, Mega City 2 có thể là một phương án đáng cân
                    nhắc cho nhu cầu an cư tại Nhơn Trạch.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section className="mb-14">
                <SectionHeading id="truoc-khi-mua">
                  10. Những thông tin nên kiểm tra trước khi mua
                </SectionHeading>
                <div className="pt-6 space-y-6">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu mục tiêu là ở lâu dài, người mua nên tìm hiểu trực tiếp sản phẩm dự định
                    mua thay vì chỉ xem thông tin tổng quan của dự án.
                  </p>

                  {[
                    {
                      title: "Kiểm tra vị trí",
                      desc: "Xác định chính xác lô đất hoặc căn nhà nằm ở đâu, đường trước nhà bao nhiêu mét và khoảng cách đến các tiện ích.",
                    },
                    {
                      title: "Kiểm tra pháp lý",
                      desc: "Kiểm tra hồ sơ pháp lý liên quan đến sản phẩm cụ thể, quy hoạch, quyền sử dụng đất và các giấy tờ cần thiết trước giao dịch.",
                    },
                    {
                      title: "Kiểm tra hạ tầng",
                      desc: "Đến trực tiếp dự án vào nhiều thời điểm khác nhau để quan sát đường sá, điện, nước, thoát nước và môi trường xung quanh.",
                    },
                    {
                      title: "Kiểm tra chi phí xây dựng",
                      desc: "Nếu mua đất để xây nhà, cần dự trù thêm chi phí thiết kế, xây dựng, nội thất và các chi phí phát sinh.",
                    },
                    {
                      title: "Kiểm tra khả năng tài chính",
                      desc: "Không nên sử dụng mức vay vượt quá khả năng trả nợ ổn định của gia đình.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-1.5 rounded-full bg-amber-400 flex-shrink-0 my-1" />
                      <div>
                        <H3>{item.title}</H3>
                        <p className="text-slate-600 text-[17px] leading-[1.85]">{item.desc}</p>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4">
                    <p className="font-bold text-slate-700 text-sm mb-4">Các bài viết liên quan về Mega City 2:</p>
                    <div className="flex flex-wrap gap-3">
                      <LinkBtn href="/mega-city-2">Tổng quan Mega City 2 →</LinkBtn>
                      <LinkBtn href="/mega-city-2/vi-tri">Vị trí →</LinkBtn>
                      <LinkBtn href="/mega-city-2/tien-ich">Tiện ích →</LinkBtn>
                      <LinkBtn href="/mega-city-2/mat-bang">Mặt bằng →</LinkBtn>
                      <LinkBtn href="/mega-city-2/nha-pho-lien-ke">Nhà phố liên kế →</LinkBtn>
                      <LinkBtn href="/mega-city-2/phap-ly">Pháp lý →</LinkBtn>
                      <LinkBtn href="/mega-city-2/bang-gia">Bảng giá →</LinkBtn>
                      <LinkBtn href="/mega-city-2/faq">FAQ →</LinkBtn>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <div id="faq" className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm scroll-mt-24">
                <div className="bg-slate-900 px-7 py-6">
                  <h2 className="text-white font-black text-xl tracking-tight">
                    FAQ – Mega City 2 có phù hợp để ở không?
                  </h2>
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

              {/* Kết luận */}
              <div className="mt-14 rounded-2xl bg-amber-50 border border-amber-200 px-7 py-7">
                <h2 className="text-xl font-black text-slate-900 mb-4">Kết luận</h2>
                <p className="text-slate-700 text-[16px] leading-[1.85] mb-4">
                  Mega City 2 có những yếu tố có thể đáp ứng nhu cầu an cư như quy mô khu dân cư lớn,
                  sản phẩm nhà ở thấp tầng đa dạng, hạ tầng nội khu và hệ thống tiện ích được quy hoạch.
                  Vị trí tại Nhơn Trạch cũng tạo khả năng kết nối với nhiều tuyến giao thông quan trọng
                  của khu vực.
                </p>
                <p className="text-slate-700 text-[16px] leading-[1.85] mb-4">
                  Tuy nhiên, câu hỏi <em>"Mega City 2 có phù hợp để ở không?"</em> nên được trả lời
                  dựa trên hoàn cảnh của từng gia đình. Nếu bạn đang tìm một nơi để an cư tại Nhơn
                  Trạch, hãy ưu tiên 5 yếu tố:
                </p>
                <BulletList items={[
                  "Vị trí → kết nối công việc và sinh hoạt",
                  "Hạ tầng → đường, điện, nước thực tế",
                  "Tiện ích → trường, y tế, mua sắm",
                  "Pháp lý → hồ sơ sản phẩm cụ thể",
                  "Khả năng tài chính → tổng chi phí, không chỉ giá đất",
                ]} />
                <p className="text-slate-700 text-[16px] leading-[1.85]">
                  Đừng chỉ nhìn vào giá hoặc kỳ vọng tăng giá. Hãy kiểm tra sản phẩm thực tế, hồ
                  sơ pháp lý và điều kiện sinh hoạt trước khi đưa ra quyết định.
                </p>
                <div className="mt-5">
                  <LinkBtn href="/mega-city-2">Tìm hiểu thêm Mega City 2 Nhơn Trạch →</LinkBtn>
                </div>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28 space-y-6">

                {/* Checklist quick card */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-amber-500 px-6 py-4">
                    <p className="text-white font-black text-sm uppercase tracking-wider">Checklist an cư</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {checklistItems.map((item) => (
                      <div key={item.label} className="flex items-center gap-3 px-5 py-3.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                        <p className="text-sm font-semibold text-slate-700">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-5 pb-4 pt-2">
                    <p className="text-xs text-slate-400 italic">
                      * Kiểm tra đầy đủ 7 tiêu chí trước khi quyết định mua
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
                      { label: "Tổng quan dự án",     href: "/mega-city-2" },
                      { label: "Vị trí & kết nối",    href: "/mega-city-2/vi-tri" },
                      { label: "Tiện ích nội khu",    href: "/mega-city-2/tien-ich" },
                      { label: "Mặt bằng",            href: "/mega-city-2/mat-bang" },
                      { label: "Nhà phố liên kế",     href: "/mega-city-2/nha-pho-lien-ke" },
                      { label: "Pháp lý dự án",       href: "/mega-city-2/phap-ly" },
                      { label: "Bảng giá",            href: "/mega-city-2/bang-gia" },
                      { label: "FAQ",                 href: "/mega-city-2/faq" },
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

        {/* Page CTA */}
        <PageCTA
          title="Tìm hiểu thêm về Mega City 2 Nhơn Trạch"
          subtitle="Liên hệ để được tư vấn về sản phẩm, vị trí, pháp lý và khả năng an cư tại Mega City 2."
          variant="default"
        />

        {/* Related content */}
        <RelatedContent
          items={[
            {
              href: "/mega-city-2",
              title: "Tổng quan Mega City 2 Nhơn Trạch",
              description: "Thông tin tổng hợp về dự án: quy mô, chủ đầu tư, pháp lý và sản phẩm.",
              tag: "Tổng quan",
            },
            {
              href: "/mega-city-2/vi-tri",
              title: "Vị trí Mega City 2",
              description: "Phân tích vị trí chiến lược và khả năng kết nối giao thông tại Nhơn Trạch.",
              tag: "Vị trí",
            },
            {
              href: "/mega-city-2/tien-ich",
              title: "Tiện ích Mega City 2",
              description: "Các tiện ích được quy hoạch trong khu dân cư Mega City 2.",
              tag: "Tiện ích",
            },
            {
              href: "/mega-city-2/phap-ly",
              title: "Pháp lý Mega City 2",
              description: "Tình trạng pháp lý và điều kiện giao dịch tại Mega City 2.",
              tag: "Pháp lý",
            },
            {
              href: "/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach",
              title: "Có nên đầu tư Mega City 2 năm 2026?",
              description: "Phân tích tiềm năng đầu tư dựa trên vị trí, pháp lý và bảng giá.",
              tag: "Phân tích",
            },
            {
              href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach",
              title: "Kinh nghiệm mua đất nền Nhơn Trạch",
              description: "Những điều cần kiểm tra trước khi mua đất nền tại Nhơn Trạch.",
              tag: "Kinh nghiệm",
            },
          ]}
        />
      </div>

      <CorpFooter />
    </>
  );
}
