"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS33 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/ha-tang-ky-thuat-mega-city-2`;
const PUBLISHED     = "27/08/2026";
const PUBLISHED_ISO = "2026-08-27";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hạ tầng kỹ thuật Mega City 2 Nhơn Trạch: Điện âm, Nước máy và Hệ thống thoát nước",
  description:
    "Tìm hiểu chi tiết hạ tầng kỹ thuật Mega City 2 Nhơn Trạch: mạng lưới điện âm, hệ thống cấp nước sạch, thoát nước mưa - nước thải và cốt nền chống ngập.",
  image: [IMG_NEWS33["1"], IMG_NEWS33["2"], IMG_NEWS33["3"]],
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
    "@type": "Place",
    name: "Nhơn Trạch, Đồng Nai",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nhơn Trạch",
      addressRegion: "Đồng Nai",
      addressCountry: "VN",
    },
  },
  keywords:
    "hạ tầng kỹ thuật Mega City 2, điện âm Mega City 2, hệ thống thoát nước Mega City 2, cấp nước Mega City 2, cốt nền Mega City 2, đường nội khu Mega City 2",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mega City 2 Nhơn Trạch sử dụng điện âm hay điện nổi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án Mega City 2 được đầu tư ngầm hóa 100% hệ thống cấp điện trung - hạ thế và cáp chiếu sáng công cộng dưới vỉa hè theo đồ án quy hoạch 1/500 được phê duyệt, đảm bảo an toàn và mỹ quan đô thị.",
      },
    },
    {
      "@type": "Question",
      name: "Nguồn cấp nước sạch tại Mega City 2 lấy từ đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nguồn nước sạch sinh hoạt tại dự án được kết nối trực tiếp vào mạng lưới cấp nước sạch đô thị của Công ty Cổ phần Cấp nước Đồng Nai (Dowaco) phục vụ toàn huyện Nhơn Trạch.",
      },
    },
    {
      "@type": "Question",
      name: "Dự án Mega City 2 có bị ngập nước vào mùa mưa không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án tọa lạc tại khu vực đồi cao ráo tự nhiên của xã Phú Hội, đồng thời được san nền chuẩn cốt cao độ và trang bị hệ thống thoát nước mưa độc lập giúp mặt đường thoát nước nhanh khi có mưa lớn.",
      },
    },
    {
      "@type": "Question",
      name: "Chiều rộng đường nội bộ nhỏ nhất tại Mega City 2 là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuyến đường nội bộ nhỏ nhất tại dự án có lộ giới 13m, bao gồm lòng đường trải nhựa 7m và vỉa hè mỗi bên 3m. Các trục chính cảnh quan có lộ giới từ 24m đến 32m.",
      },
    },
    {
      "@type": "Question",
      name: "Hệ thống thoát nước Mega City 2 có tách riêng nước mưa và nước thải không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Theo đồ án quy hoạch 1/500, hệ thống thoát nước Mega City 2 được thiết kế 2 tuyến hoàn toàn độc lập: một tuyến thu gom nước mưa bề mặt dẫn ra kênh thoát tự nhiên, và một tuyến riêng thu gom nước thải sinh hoạt dẫn về trạm xử lý tập trung.",
      },
    },
    {
      "@type": "Question",
      name: "Khi nhận nền Mega City 2 cần kiểm tra những hạng mục hạ tầng nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cần kiểm tra: cọc mốc ranh giới thửa đất, hiện trạng vỉa hè và bó vỉa, vị trí hố ga thoát nước và tủ điện phân phối, đấu nối nguồn nước sinh hoạt và tình trạng đường nội khu trước lô đất.",
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
      name: "Hạ tầng kỹ thuật Mega City 2",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS33["1"],
    alt: "Hạ tầng kỹ thuật Mega City 2 Nhơn Trạch với hệ thống điện âm và đường nội khu rộng rãi",
    caption: "Trục đường nội khu Mega City 2 với hệ thống điện âm, vỉa hè lát gạch và cây xanh hai bên",
  },
  {
    src: IMG_NEWS33["2"],
    alt: "Hệ thống điện âm và tủ điện kỹ thuật phân phối tại dự án Mega City 2",
    caption: "Tủ điện phân phối (Pillar) được bố trí tại ranh giới giữa các lô đất theo quy chuẩn kỹ thuật",
  },
  {
    src: IMG_NEWS33["3"],
    alt: "Hệ thống thoát nước ngầm và hố ga thu gom tại Mega City 2 Nhơn Trạch",
    caption: "Hệ thống thoát nước 2 tuyến riêng biệt: nước mưa và nước thải sinh hoạt hoàn toàn tách rời",
  },
  {
    src: IMG_NEWS33["4"],
    alt: "Tuyến đường nội bộ và vỉa hè lát gạch hoàn chỉnh tại dự án Mega City 2 Nhơn Trạch",
    caption: "Tuyến đường nhánh nội bộ lộ giới 13m tại Mega City 2 với nhựa asphalt hoàn thiện",
  },
  {
    src: IMG_NEWS33["5"],
    alt: "So sánh chất lượng hạ tầng kỹ thuật Mega City 2 và đất phân lô tự do",
    caption: "Sự khác biệt về chất lượng hạ tầng giữa khu đô thị có quy hoạch 1/500 và đất dân cư tự phát",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────
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
  return <h3 className="text-lg font-black text-slate-800 mb-2 mt-6">{children}</h3>;
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
function WarnBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4 my-4">
      <p className="text-amber-800 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all"
    >
      {children}
    </a>
  );
}
function CheckItem({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white">
      <div className="w-7 h-7 rounded-lg bg-amber-500 text-white font-black text-xs flex items-center justify-center flex-shrink-0">
        {n}
      </div>
      <div>
        <p className="font-bold text-slate-800 text-sm">{title}</p>
        <p className="text-slate-600 text-[14px] leading-relaxed mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function HaTangKyThuatMegaCity2Page() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}
      <ScrollAnimator />
      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero ──────────────────────────────────────────── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span className="text-slate-300">/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium line-clamp-1">Hạ tầng kỹ thuật Mega City 2</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Tin dự án
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 12 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Hạ tầng kỹ thuật Mega City 2 Nhơn Trạch: Điện âm, Nước máy và Hệ thống thoát nước
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích chi tiết các hạng mục hạ tầng kỹ thuật đồng bộ tại{" "}
              <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">
                Mega City 2 Nhơn Trạch
              </a>
              : điện âm 100%, cấp nước Dowaco, thoát nước 2 tuyến riêng biệt, cốt nền chống ngập
              và đường nội khu lộ giới 13–32m.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh hạ tầng kỹ thuật Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS33["1"]}
                alt="Hạ tầng kỹ thuật Mega City 2 Nhơn Trạch với hệ thống điện âm và đường nội khu rộng rãi"
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
              Trục đường nội khu Mega City 2 với hệ thống điện âm, vỉa hè lát gạch và cây xanh hai bên
            </p>
          </div>
        </div>

        {/* ── Main ──────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-1.5 text-sm text-slate-600 columns-1 sm:columns-2 gap-x-8">
                  {[
                    ["#tong-quan",    "Tổng quan hạ tầng kỹ thuật Mega City 2"],
                    ["#dien-am",      "1. Hệ thống điện âm và chiếu sáng"],
                    ["#cap-nuoc",     "2. Hệ thống cấp nước sạch"],
                    ["#thoat-nuoc",   "3. Thoát nước mưa và nước thải"],
                    ["#cot-nen",      "4. Cốt nền và chống ngập úng"],
                    ["#duong-noi-khu","5. Đường giao thông nội khu"],
                    ["#vien-thong",   "6. Hạ tầng viễn thông ngầm"],
                    ["#so-sanh",      "So sánh với đất phân lô tự do"],
                    ["#kiem-tra",     "Người mua cần kiểm tra gì?"],
                    ["#faq",          "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Mở đầu */}
              <div className="space-y-5 mb-14">
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Đối với một dự án khu đô thị quy mô lên đến 84 ha như Mega City 2 Nhơn Trạch
                  (Khu dân cư Phú Hội), chất lượng thi công các hạng mục hạ tầng kỹ thuật ngầm
                  và nổi là yếu tố then chốt quyết định giá trị an cư lâu dài và sự an toàn của
                  công trình nhà ở.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Theo đồ án quy hoạch chi tiết xây dựng tỷ lệ 1/500 được cơ quan nhà nước có
                  thẩm quyền phê duyệt, hệ thống hạ tầng kỹ thuật Mega City 2 được đầu tư đồng
                  bộ theo tiêu chuẩn đô thị hiện đại. Bài viết này phân tích chi tiết từng hạng
                  mục.
                </p>
                <InfoBox>
                  <strong>Lưu ý:</strong> Thông tin trong bài phản ánh thiết kế theo đồ án quy
                  hoạch được phê duyệt. Tình trạng hoàn thiện thực tế tại từng khu vực cần được
                  kiểm tra trực tiếp tại thời điểm nhận bàn giao.
                </InfoBox>
              </div>

              {/* Tổng quan */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">Hạ tầng kỹ thuật Mega City 2 Nhơn Trạch gồm những gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Toàn bộ hệ thống hạ tầng kỹ thuật bao gồm 6 hạng mục chính:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: "⚡", label: "Điện âm 100%",          desc: "Cáp điện trung - hạ thế ngầm hóa hoàn toàn, chiếu sáng đô thị đồng bộ" },
                      { icon: "💧", label: "Cấp nước sạch",          desc: "Đấu nối mạng lưới Dowaco, họng chờ từng lô, trụ cứu hỏa đúng tiêu chuẩn" },
                      { icon: "🌧️", label: "Thoát nước 2 tuyến",     desc: "Tuyến nước mưa và nước thải hoàn toàn tách biệt theo quy chuẩn đô thị" },
                      { icon: "📐", label: "Cốt nền chống ngập",      desc: "San nền chuẩn cao độ kỹ thuật, cao hơn mức đỉnh triều khu vực" },
                      { icon: "🛣️", label: "Đường nội khu 13–32m",    desc: "Trải nhựa asphalt, vỉa hè lát gạch, dải cây xanh phân tầng" },
                      { icon: "📡", label: "Viễn thông ngầm",         desc: "Cáp quang ngầm đồng bộ, hố ga kỹ thuật, sẵn sàng cho VNPT/Viettel/FPT" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-300 transition-colors"
                      >
                        <div className="text-2xl flex-shrink-0">{item.icon}</div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm mb-1">{item.label}</p>
                          <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 1. Điện âm */}
              <section className="mb-12">
                <SectionHeading id="dien-am">1. Hệ thống điện âm và chiếu sáng đô thị tại Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khác với các khu dân cư tự phát sử dụng mạng lưới dây điện nổi chằng chịt,
                    điện âm Mega City 2 được quy hoạch và thi công ngầm hóa toàn bộ dưới lòng đất
                    và vỉa hè theo đồ án 1/500.
                  </p>

                  <H3>Đặc điểm kỹ thuật mạng lưới cấp điện</H3>
                  <BulletList
                    items={[
                      "Hạ ngầm toàn diện: Cáp điện trung thế, hạ thế và dây dẫn đấu nối vào từng lô đều được luồn trong ống bảo vệ chịu lực chuyên dụng đặt dưới vỉa hè",
                      "Tủ điện phân phối (tủ Pillar): Bố trí tại ranh giới giữa các lô đất theo quy chuẩn kỹ thuật ngành điện, giúp chủ sở hữu đăng ký đấu nối công tơ khi xây dựng",
                      "Chiếu sáng công cộng: Hệ thống cột đèn chiếu sáng đồng bộ toàn tuyến đường nội khu, đảm bảo mỹ quan và an ninh ban đêm",
                    ]}
                  />

                  <H3>Lợi ích thực tế cho cư dân</H3>
                  <div className="space-y-3">
                    {[
                      { icon: "🏙️", title: "Mỹ quan thông thoáng", desc: "Loại bỏ hoàn toàn cột điện bê tông và bó dây cáp trên không, tạo không gian mở thoáng đãng" },
                      { icon: "🔒", title: "An toàn cao hơn",       desc: "Giảm thiểu nguy cơ chập cháy, đứt dây trong mùa mưa bão hoặc sự cố va chạm giao thông" },
                      { icon: "🔧", title: "Bảo trì dễ dàng",       desc: "Hệ thống ngầm có kết cấu bảo vệ bền vững, tuổi thọ cao hơn hệ thống dây nổi ngoài trời" },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-slate-200 bg-white">
                        <span className="text-xl flex-shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-bold text-slate-800 text-sm mb-0.5">{item.title}</p>
                          <p className="text-slate-600 text-[14px] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/checklist-nhan-nen-mega-city-2">
                      Checklist nhận nền và kiểm tra hiện trạng trước khi xây nhà tại Mega City 2 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS33["2"]}
                alt="Hệ thống điện âm và tủ điện kỹ thuật phân phối tại dự án Mega City 2"
                caption="Tủ điện phân phối (Pillar) được bố trí tại ranh giới giữa các lô đất theo quy chuẩn kỹ thuật ngành điện"
                images={images}
                index={1}
                onOpen={openLightbox}
              />

              {/* 2. Cấp nước */}
              <section className="mb-12">
                <SectionHeading id="cap-nuoc">2. Hệ thống cấp nước sạch sinh hoạt tại Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nguồn nước sinh hoạt tại Mega City 2 được đấu nối trực tiếp vào mạng lưới cấp
                    nước của Công ty Cổ phần Cấp nước Đồng Nai (Dowaco) thông qua hệ thống đường
                    ống chuyên dụng đi qua địa bàn huyện Nhơn Trạch.
                  </p>

                  <H3>Cấu trúc mạng lưới cấp nước</H3>
                  <BulletList
                    items={[
                      "Tuyến ống phân phối: Đường ống cấp nước bằng nhựa chịu áp lực cao (HDPE/uPVC) chôn ngầm dọc vỉa hè các trục đường nội khu",
                      "Đầu chờ từng thửa đất: Mỗi lô đất được định vị sẵn vị trí họng chờ cấp nước, sẵn sàng lắp đặt đồng hồ khi chủ nhà thi công",
                      "Hệ thống trụ cứu hỏa (PCCC): Bố trí dọc ngã giao và trục đường chính với khoảng cách đúng tiêu chuẩn PCCC hiện hành",
                    ]}
                  />

                  <InfoBox type="warn">
                    Khi khởi công xây dựng, chủ sở hữu cần liên hệ trực tiếp với{" "}
                    <strong>Công ty Cổ phần Cấp nước Đồng Nai (Dowaco)</strong> và Ban quản lý
                    dự án để thực hiện đúng quy trình thủ tục đăng ký đấu nối và lắp đặt đồng
                    hồ nước.
                  </InfoBox>
                </div>
              </section>

              {/* 3. Thoát nước */}
              <section className="mb-12">
                <SectionHeading id="thoat-nuoc">3. Hệ thống thoát nước mưa và xử lý nước thải riêng biệt</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một trong những tiêu chuẩn kỹ thuật quan trọng của khu đô thị theo quy hoạch
                    1/500 là hệ thống thoát nước Mega City 2 được thiết kế{" "}
                    <strong>2 tuyến hoàn toàn độc lập</strong>:
                  </p>

                  {/* Sơ đồ luồng */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-4 font-mono text-xs text-slate-600">
                    <div>
                      <p className="font-bold text-blue-700 mb-1">TUYẾN 1 — Thoát nước mưa bề mặt</p>
                      <p className="text-slate-500">Vỉa hè / Lòng đường → Hố ga thu nước mưa → Cống hộp/tròn bê tông → Kênh thoát tự nhiên</p>
                    </div>
                    <div className="border-t border-slate-200 pt-4">
                      <p className="font-bold text-emerald-700 mb-1">TUYẾN 2 — Thu gom nước thải sinh hoạt</p>
                      <p className="text-slate-500">Hộ gia đình → Hầm tự hoại cục bộ → Cống gom ngầm → Trạm xử lý tập trung</p>
                    </div>
                  </div>

                  <H3>Chi tiết từng hệ thống</H3>
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                      <p className="font-black text-blue-800 text-sm mb-2">🌧️ Hệ thống thoát nước mưa</p>
                      <p className="text-blue-700 text-sm leading-relaxed">
                        Hố ga thu gom nước có lưới chắn rác đặt sát mép vỉa hè dọc tuyến đường
                        nội bộ, dẫn vào cống bê tông ly tâm đường kính lớn. Kết hợp với độ dốc
                        đường và vỉa hè đúng chuẩn, mặt đường thoát nước nhanh khi có mưa lớn.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                      <p className="font-black text-emerald-800 text-sm mb-2">🚿 Hệ thống thu gom nước thải</p>
                      <p className="text-emerald-700 text-sm leading-relaxed">
                        Tuyến cống thu gom nước thải sinh hoạt đặt sâu hơn tuyến thoát nước mưa,
                        thu gom nước thải đã qua xử lý sơ bộ từ từng căn nhà để dẫn về trạm xử
                        lý tập trung trước khi xả ra môi trường — đáp ứng tiêu chuẩn môi trường
                        đô thị hiện hành.
                      </p>
                    </div>
                  </div>

                  <WarnBox>
                    Đây là yêu cầu bắt buộc của quy hoạch đô thị theo tiêu chuẩn QCVN 07. Đất
                    phân lô tự phát thường không có hệ thống phân tách này, dẫn đến nguy cơ ô
                    nhiễm môi trường nước ngầm và kênh rạch xung quanh.
                  </WarnBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS33["3"]}
                alt="Hệ thống thoát nước ngầm và hố ga thu gom tại Mega City 2 Nhơn Trạch"
                caption="Hệ thống thoát nước 2 tuyến riêng biệt: nước mưa và nước thải sinh hoạt hoàn toàn tách rời"
                images={images}
                index={2}
                onOpen={openLightbox}
              />

              {/* 4. Cốt nền */}
              <section className="mb-12">
                <SectionHeading id="cot-nen">4. Cốt nền và giải pháp chống ngập úng tại Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Được quy hoạch trên địa hình đất đồi cao ráo đặc trưng của khu vực xã Phú Hội
                    và Long Tân (Nhơn Trạch), dự án sở hữu lợi thế tự nhiên về khả năng thoát
                    nước. Kết hợp với giải pháp san nền kỹ thuật, đây là nền tảng chống ngập của
                    toàn bộ khu đô thị.
                  </p>

                  <H3>Giải pháp san nền và cao độ kỹ thuật</H3>
                  <BulletList
                    items={[
                      "Cốt cao độ hoàn thiện: Toàn bộ mặt bằng dự án đã được san nền đạt cao độ chuẩn kỹ thuật xây dựng đô thị, cao hơn mức đỉnh triều cường ghi nhận trong khu vực",
                      "Độ dốc thoát nước tự nhiên: Thiết kế độ dốc đường và vỉa hè đạt chuẩn, đảm bảo nước mưa tự chảy về cửa thu hố ga mà không đọng nước cục bộ",
                      "Địa hình tự nhiên thuận lợi: Khu vực Phú Hội - Long Tân có nền đất đồi cao, ít chịu ảnh hưởng triều cường so với các vùng đất thấp ven sông",
                    ]}
                  />

                  <InfoBox>
                    Người mua nên kiểm tra cao độ cốt nền thực tế tại lô đất cụ thể khi nhận bàn
                    giao, đảm bảo nền nhà xây dựng không thấp hơn mặt đường nội khu sau khi hoàn
                    thiện.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/chi-phi-xay-nha-mega-city-2">
                      Chi phí xây nhà thực tế tại Mega City 2 Nhơn Trạch →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* 5. Đường nội khu */}
              <section className="mb-12">
                <SectionHeading id="duong-noi-khu">5. Mạng lưới đường giao thông nội khu và vỉa hè</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hệ thống giao thông nội bộ Mega City 2 được quy hoạch theo dạng bàn cờ thông
                    suốt, kết nối trực tiếp với các trục đối ngoại của huyện Nhơn Trạch như đường
                    25C, đường Tôn Đức Thắng và đường Nguyễn Hữu Cảnh.
                  </p>

                  <H3>Thông số lộ giới các trục đường nội bộ</H3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[500px]">
                      <thead>
                        <tr className="bg-amber-500 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Loại trục đường</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Lộ giới</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Lòng đường</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Vỉa hè mỗi bên</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Trục chính cảnh quan",  "24m – 32m",  "Trải nhựa đồng bộ",     "3m – 5m, lát gạch"],
                          ["Tuyến đường nhánh",     "13m – 17,5m","7m – 8m trải nhựa",     "3m – 4,5m mỗi bên"],
                        ].map(([loai, lo, long, via], i) => (
                          <tr key={loai} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700">{loai}</td>
                            <td className="px-4 py-3 text-amber-700 font-bold">{lo}</td>
                            <td className="px-4 py-3 text-slate-600">{long}</td>
                            <td className="px-4 py-3 text-slate-600">{via}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-500 italic mt-2">
                      Thông số trên phản ánh thiết kế theo đồ án quy hoạch. Cần kiểm tra tài liệu
                      chính thức để xác nhận lộ giới cụ thể tại từng vị trí.
                    </p>
                  </div>

                  <H3>Quy chuẩn vỉa hè và cây xanh</H3>
                  <BulletList
                    items={[
                      "Vỉa hè lát gạch Terrazzo/bê tông tự chèn, kết hợp ô trồng cây xanh bóng mát",
                      "Cây xanh hai tầng (cây bóng mát + cây bụi cảnh) tạo độ phủ xanh đồng đều",
                      "Dải phân cách giữa trục chính cảnh quan trồng hoa và cây cảnh",
                    ]}
                  />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS33["4"]}
                alt="Tuyến đường nội bộ và vỉa hè lát gạch hoàn chỉnh tại dự án Mega City 2 Nhơn Trạch"
                caption="Tuyến đường nhánh nội bộ lộ giới 13m tại Mega City 2 với nhựa asphalt hoàn thiện"
                images={images}
                index={3}
                onOpen={openLightbox}
              />

              {/* 6. Viễn thông */}
              <section className="mb-12">
                <SectionHeading id="vien-thong">6. Hạ tầng viễn thông và cáp quang ngầm</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Song song với hệ thống cấp điện, hệ thống hạ tầng viễn thông (cáp điện thoại,
                    mạng internet cáp quang) cũng được đi ngầm trong các tuyến hào kỹ thuật dưới
                    vỉa hè theo cùng quy hoạch 1/500.
                  </p>
                  <BulletList
                    items={[
                      "Tính sẵn sàng đa nhà mạng: VNPT, Viettel, FPT và các nhà mạng khác có thể kéo cáp đấu nối mà không cần dựng cột treo cáp nổi",
                      "Hố ga kỹ thuật viễn thông: Đặt cách quãng trên vỉa hè, thuận tiện cho bảo trì, sửa chữa và nâng cấp thiết bị",
                      "Tích hợp với tuyến điện âm: Tuyến hào kỹ thuật ngầm bố trí các loại cáp có lớp ngăn cách đúng tiêu chuẩn kỹ thuật",
                    ]}
                  />
                </div>
              </section>

              {/* So sánh */}
              <section className="mb-12">
                <SectionHeading id="so-sanh">So sánh hạ tầng Mega City 2 với đất phân lô tự do</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hiểu sự khác biệt về tiêu chuẩn hạ tầng giúp người mua đánh giá đúng giá trị
                    thực của từng loại sản phẩm:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[580px]">
                      <thead>
                        <tr className="bg-slate-700 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-36">Tiêu chí</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Mega City 2 (QH 1/500)</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Đất dân cư tự phân lô</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Hệ thống điện",   "Ngầm hóa 100%, tủ phân phối kỹ thuật",   "Dây điện nổi kéo cột bê tông hoặc trụ tạm"],
                          ["Thoát nước",      "Tách riêng 2 tuyến nước mưa & nước thải",  "Chung một rãnh hoặc xả tràn tự nhiên"],
                          ["Lộ giới đường",   "Quy chuẩn rõ ràng 13m–32m, nhựa đồng bộ", "Hẻm bê tông/nhựa nhỏ 3–6m, khó quay đầu"],
                          ["Vỉa hè & Cây xanh","Rộng 3–5m, lát gạch, cây xanh quy hoạch","Thường không có, sát ranh nhà dân"],
                          ["Cốt nền",         "San nền kỹ thuật đồng bộ toàn dự án",     "Cao độ không đồng đều, dễ ngập cục bộ"],
                          ["Viễn thông",      "Cáp ngầm đồng bộ, sẵn đa nhà mạng",      "Cáp nổi, phụ thuộc vào từng hộ lắp đặt"],
                        ].map(([tc, mc2, dat], i) => (
                          <tr key={tc} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700">{tc}</td>
                            <td className="px-4 py-3 text-amber-700 font-medium">{mc2}</td>
                            <td className="px-4 py-3 text-slate-500">{dat}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-500 italic mt-2">
                      Bảng mang tính định hướng tổng quát. Đặc điểm thực tế phụ thuộc vào từng
                      khu vực và thời điểm cụ thể.
                    </p>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS33["5"]}
                alt="So sánh chất lượng hạ tầng kỹ thuật Mega City 2 và đất phân lô tự do"
                caption="Sự khác biệt về chất lượng hạ tầng giữa khu đô thị có quy hoạch 1/500 và đất dân cư tự phát"
                images={images}
                index={4}
                onOpen={openLightbox}
              />

              {/* Checklist kiểm tra */}
              <section className="mb-12">
                <SectionHeading id="kiem-tra">Người mua cần kiểm tra những gì về hạ tầng khi nhận nền?</SectionHeading>
                <div className="pt-5 space-y-3">
                  <p className="text-slate-600 text-[17px] leading-[1.85] mb-6">
                    Nếu bạn chuẩn bị nhận bàn giao nền hoặc đang khảo sát thực tế, hãy kiểm tra
                    4 hạng mục hạ tầng quan trọng ngay tại vị trí lô đất:
                  </p>
                  <CheckItem
                    n={1}
                    title="Cọc mốc ranh giới thửa đất"
                    desc="Xác định chính xác 4 cọc mốc bê tông định vị góc ranh thửa đất, đảm bảo đúng vị trí trên bản đồ phân lô và không bị xê dịch trong quá trình thi công."
                  />
                  <CheckItem
                    n={2}
                    title="Hiện trạng vỉa hè và bó vỉa"
                    desc="Kiểm tra độ nguyên vẹn của gạch lát vỉa hè, cao độ bó vỉa hè trước cửa nhà xem có bị sụt lún hay nứt vỡ do các công trình xung quanh vận chuyển vật liệu."
                  />
                  <CheckItem
                    n={3}
                    title="Vị trí hố ga thoát nước và tủ điện"
                    desc="Xác định vị trí nắp hố ga thu nước mưa và tủ điện Pillar có nằm đúng ranh giới tiếp giáp giữa 2 lô đất, tránh cản trở lối ra vào garage khi xây dựng."
                  />
                  <CheckItem
                    n={4}
                    title="Đấu nối nguồn nước sinh hoạt"
                    desc="Kiểm tra vị trí họng chờ cấp nước ngầm để lập phương án thi công lắp đặt đồng hồ nước thuận tiện nhất, tránh đào bới vỉa hè lại sau khi hoàn thiện."
                  />

                  <div className="flex flex-wrap gap-3 pt-4">
                    <LinkBtn href="/tin-tuc/checklist-nhan-nen-mega-city-2">
                      Xem đầy đủ checklist nhận nền Mega City 2 →
                    </LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">
                      Pháp lý dự án Mega City 2 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về hạ tầng kỹ thuật Mega City 2</SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details
                      key={name}
                      className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-amber-300 transition-colors"
                    >
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-amber-700 select-none">
                        <span className="leading-snug">{name}</span>
                        <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-amber-600 transition-transform group-open:rotate-180 text-xs">▼</span>
                      </summary>
                      <div className="px-6 pb-5 border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-[16px] leading-relaxed">{acceptedAnswer.text}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Tìm hiểu thêm */}
              <section className="mb-12">
                <SectionHeading>Các nội dung chuyên sâu liên quan đến Mega City 2</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/mega-city-2",                                   label: "Mega City 2 Nhơn Trạch — Tổng quan dự án" },
                    { href: "/tin-tuc/tien-do-mega-city-2",                   label: "Tiến độ Mega City 2 mới nhất" },
                    { href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",         label: "Bảng giá Mega City 2 mới nhất" },
                    { href: "/tin-tuc/phap-ly-mega-city-2",                   label: "Pháp lý dự án Mega City 2" },
                    { href: "/tin-tuc/checklist-nhan-nen-mega-city-2",        label: "Checklist nhận nền Mega City 2" },
                    { href: "/tin-tuc/chi-phi-xay-nha-mega-city-2",           label: "Chi phí xây nhà Mega City 2" },
                    { href: "/mega-city-2/mat-bang",                          label: "Mặt bằng Mega City 2" },
                    { href: "/mega-city-2/phap-ly",                           label: "Pháp lý dự án Mega City 2" },
                  ].map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 transition-colors px-4 py-3 rounded-xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50"
                    >
                      <span className="text-amber-400 flex-shrink-0">→</span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </section>

              {/* Kết luận */}
              <section className="mb-12">
                <SectionHeading>Kết luận</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hệ thống hạ tầng kỹ thuật Mega City 2 Nhơn Trạch được thiết kế đồng bộ với
                    điện âm 100%, cấp nước kết nối Dowaco, thoát nước 2 tuyến riêng biệt, cốt nền
                    cao ráo và đường nội khu lộ giới từ 13m đến 32m. Đây là nền tảng kỹ thuật tạo
                    nên không gian đô thị chuẩn mực và bền vững cho cư dân.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tuy nhiên, khi chuẩn bị khởi công xây dựng thực tế, chủ sở hữu vẫn nên liên
                    hệ trực tiếp với Ban quản lý dự án và các đơn vị cung cấp dịch vụ công ích
                    (Điện lực, Cấp nước Nhơn Trạch) để thực hiện đúng quy trình thủ tục đấu nối
                    kỹ thuật theo quy định hiện hành.
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                  Tuyên bố miễn trách nhiệm
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài được tổng hợp từ các nguồn công khai và cần được đối chiếu
                  với thông tin chính thức mới nhất trước khi đưa ra quyết định giao dịch. Ban
                  biên tập Kim Oanh Đồng Nai — Cập nhật: {PUBLISHED}
                </p>
              </div>

            </article>

            {/* ── Sidebar ──────────────────────────────────── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu Mega City 2</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/mega-city-2",         label: "Tổng quan dự án" },
                      { href: "/mega-city-2/vi-tri",   label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",  label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",  label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia", label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich", label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/mat-bang", label: "Mặt bằng sản phẩm" },
                      { href: "/mega-city-2/hinh-anh", label: "Hình ảnh thực tế" },
                    ].map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-amber-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white"
                      >
                        <span>{l.label}</span>
                        <span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Checklist nhận nền Mega City 2",  href: "/tin-tuc/checklist-nhan-nen-mega-city-2" },
                      { label: "Chi phí xây nhà Mega City 2",     href: "/tin-tuc/chi-phi-xay-nha-mega-city-2" },
                      { label: "Tiến độ Mega City 2 2026",        href: "/tin-tuc/tien-do-mega-city-2" },
                      { label: "Pháp lý dự án Mega City 2",       href: "/tin-tuc/phap-ly-mega-city-2" },
                    ].map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="block text-sm text-slate-600 hover:text-amber-600 transition-colors"
                      >
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn miễn phí</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Nhận thông tin pháp lý, bảng giá và hạ tầng Mega City 2.
                  </p>
                  <a
                    href="tel:0937587438"
                    className="block text-center bg-white text-amber-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-amber-50 transition-colors"
                  >
                    0937.587.438
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="bg-amber-50 border-t border-amber-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">
              Đang tìm hiểu dự án Mega City 2 Nhơn Trạch?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Xem thông tin dự án theo từng chuyên mục để có đầy đủ cơ sở lựa chọn.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/mega-city-2"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Xem dự án →
              </a>
              <a
                href="tel:0937587438"
                className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm"
              >
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            {
              href: "/tin-tuc/checklist-nhan-nen-mega-city-2",
              title: "Checklist Nhận Nền & Kiểm Tra Hiện Trạng Tại Mega City 2",
              description: "Danh sách 12 bước kiểm tra chi tiết khi nhận bàn giao nền đất.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/chi-phi-xay-nha-mega-city-2",
              title: "Chi Phí Xây Nhà Thực Tế Tại Mega City 2 Nhơn Trạch 2026",
              description: "Cập nhật đơn giá xây thô, trọn gói và ước tính chi phí thực tế.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/tien-do-mega-city-2",
              title: "Tiến Độ Mega City 2 Nhơn Trạch Mới Nhất Năm 2026",
              description: "Cập nhật hình ảnh và tình hình thi công thực tế tại Mega City 2.",
              tag: "Tiến độ",
            },
            {
              href: "/mega-city-2",
              title: "Mega City 2 Nhơn Trạch – Tổng Quan Dự Án",
              description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và sản phẩm.",
              tag: "Tin dự án",
            },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}
