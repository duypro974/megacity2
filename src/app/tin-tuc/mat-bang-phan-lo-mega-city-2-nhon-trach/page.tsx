"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS34 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach`;
const PUBLISHED     = "29/08/2026";
const PUBLISHED_ISO = "2026-08-29";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bản đồ mặt bằng phân lô Mega City 2 Nhơn Trạch: Chi tiết từng phân khu và diện tích",
  description:
    "Khám phá bản đồ mặt bằng phân lô Mega City 2 Nhơn Trạch: sơ đồ chi tiết các phân khu, cơ cấu diện tích 90m²–300m² và lộ giới đường nội bộ dự án.",
  image: [IMG_NEWS34["1"], IMG_NEWS34["2"], IMG_NEWS34["3"]],
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
    "mặt bằng Mega City 2, sơ đồ phân lô Mega City 2, bản đồ Mega City 2 Nhơn Trạch, phân khu Mega City 2, diện tích đất nền Mega City 2",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Diện tích đất nền nhỏ nhất tại Mega City 2 là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lô đất nền có diện tích nhỏ nhất tại dự án là khoảng 90m² (kích thước chuẩn 5×18m), phù hợp để xây dựng nhà phố liên kế từ 1 trệt 2 lầu trở lên.",
      },
    },
    {
      "@type": "Question",
      name: "Lộ giới đường nội bộ trước nhà tại Mega City 2 rộng bao nhiêu mét?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đường nội bộ nhỏ nhất tại dự án có lộ giới 13m, gồm lòng đường trải nhựa 7m và vỉa hè mỗi bên 3m. Các trục đường cảnh quan chính có lộ giới từ 24m đến 32m.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có những loại hình sản phẩm đất nền nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án cung cấp các dòng sản phẩm chính: đất nền nhà phố liên kế, đất nền nhà phố thương mại (shophouse), đất nền nhà vườn và đất nền biệt thự. Người mua cần kiểm tra tình trạng mở bán thực tế tại từng thời điểm.",
      },
    },
    {
      "@type": "Question",
      name: "Bản đồ phân lô 1/500 của Mega City 2 đã được phê duyệt chính thức chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án Mega City 2 (Khu dân cư Phú Hội) đã được UBND tỉnh Đồng Nai phê duyệt đồ án quy hoạch chi tiết xây dựng tỷ lệ 1/500 theo đúng quy định. Người mua nên xem tài liệu pháp lý chính thức để xác nhận chi tiết.",
      },
    },
    {
      "@type": "Question",
      name: "Công viên trung tâm Mega City 2 rộng bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo đồ án quy hoạch, khu công viên cảnh quan trung tâm của Mega City 2 có diện tích khoảng 2,1 ha, tích hợp hồ điều hòa và hệ thống cây xanh bóng mát.",
      },
    },
    {
      "@type": "Question",
      name: "Nên chọn vị trí lô đất nào trên mặt bằng Mega City 2 để ở?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Với nhu cầu an cư, nên ưu tiên lô đối diện hoặc gần công viên trung tâm, hướng Nam hoặc Đông Nam để đón gió tự nhiên. Với mục đích kinh doanh, ưu tiên lô góc 2 mặt tiền trên trục đường 24–32m gần cổng dự án.",
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
      name: "Mặt bằng phân lô Mega City 2 Nhơn Trạch",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS34["1"],
    alt: "Bản đồ mặt bằng tổng thể dự án Mega City 2 Nhơn Trạch quy mô 84 ha",
    caption: "Tổng thể mặt bằng Mega City 2 Nhơn Trạch với các phân khu nhà phố, nhà vườn, biệt thự và công viên trung tâm 2,1 ha",
  },
  {
    src: IMG_NEWS34["2"],
    alt: "Sơ đồ phân lô chi tiết các block đất nền và diện tích tại Mega City 2",
    caption: "Sơ đồ phân lô chi tiết thể hiện từng block và kích thước lô đất tại Mega City 2",
  },
  {
    src: IMG_NEWS34["3"],
    alt: "Phối cảnh phân khu công viên trung tâm và hồ điều hòa tại Mega City 2 Nhơn Trạch",
    caption: "Phân khu công viên trung tâm 2,1 ha và các dãy biệt thự vườn bao quanh hồ cảnh quan",
  },
  {
    src: IMG_NEWS34["4"],
    alt: "Sơ đồ mặt cắt lộ giới đường nội khu 13m đến 32m tại dự án Mega City 2",
    caption: "Mặt cắt ngang các trục đường nội khu với lộ giới từ 13m đến 32m tại Mega City 2",
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

// ─── Loại hình sản phẩm data ───────────────────────────────────────────────
const PRODUCT_TYPES = [
  {
    icon: "🏘️",
    name: "Nhà phố liên kế (Townhouse)",
    sizes: "5×18m · 5×19m · 5×20m",
    area: "90–100 m²",
    color: "border-blue-200 bg-blue-50",
    badgeColor: "bg-blue-100 text-blue-700",
    desc: "Chiếm tỷ trọng lớn nhất dự án, nằm dọc các trục đường nội bộ 13–17,5m. Phù hợp xây nhà ở định cư lâu dài hoặc khai thác cho thuê nguyên căn.",
  },
  {
    icon: "🏪",
    name: "Nhà phố thương mại (Shophouse)",
    sizes: "5×22m · 6×20m · 6×25m",
    area: "110–150 m²",
    color: "border-amber-200 bg-amber-50",
    badgeColor: "bg-amber-100 text-amber-700",
    desc: "Bố trí tiếp giáp mặt tiền đường lớn lộ giới 24–32m. Phù hợp kinh doanh quán cafe, văn phòng, siêu thị tiện lợi hoặc phòng khám.",
  },
  {
    icon: "🏡",
    name: "Nhà vườn & Biệt thự",
    sizes: "10×20m · 10×25m · 15×20m",
    area: "200–300 m²",
    color: "border-emerald-200 bg-emerald-50",
    badgeColor: "bg-emerald-100 text-emerald-700",
    desc: "Nằm liền kề công viên trung tâm hoặc góc 2 mặt tiền thoáng mát. Phù hợp gia đình ưa không gian sân vườn rộng và môi trường yên tĩnh.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function MatBangPhanLoMegaCity2Page() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Mặt bằng phân lô Mega City 2 Nhơn Trạch</span>
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
              <span className="text-xs text-slate-400">· 11 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Bản đồ mặt bằng phân lô Mega City 2 Nhơn Trạch: Chi tiết từng phân khu và diện tích
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích tổng thể quy hoạch mặt bằng{" "}
              <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">
                Mega City 2 Nhơn Trạch
              </a>
              : sơ đồ các phân khu chức năng, cơ cấu diện tích lô 90–300m², lộ giới đường 13–32m,
              vị trí công viên trung tâm và kinh nghiệm chọn vị trí đất phù hợp với từng nhu cầu.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to bản đồ mặt bằng Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS34["1"]}
                alt="Bản đồ mặt bằng tổng thể dự án Mega City 2 Nhơn Trạch quy mô 84 ha"
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
              Tổng thể mặt bằng Mega City 2 Nhơn Trạch với các phân khu nhà phố, nhà vườn, biệt thự và công viên trung tâm 2,1 ha
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
                    ["#tong-quan",    "Tổng quan quy mô và cơ cấu mặt bằng"],
                    ["#co-cau",       "1. Cơ cấu diện tích sản phẩm"],
                    ["#phan-khu",     "2. Chi tiết các phân khu chức năng"],
                    ["#lo-gioi",      "3. Mạng lưới giao thông và lộ giới"],
                    ["#doc-ban-do",   "4. Cách đọc ký hiệu trên bản đồ"],
                    ["#chon-vi-tri",  "5. Kinh nghiệm chọn vị trí lô đất"],
                    ["#so-sanh",      "So sánh với các dự án lân cận"],
                    ["#faq",          "Câu hỏi thường gặp"],
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
                  Khi tìm hiểu về một dự án bất động sản quy mô lớn, bản đồ mặt bằng phân lô
                  là tài liệu quan trọng nhất giúp người mua hiểu cách tổ chức không gian, vị
                  trí từng loại sản phẩm và khả năng kết nối trong dự án.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Với Mega City 2 Nhơn Trạch, quy mô 84 ha và hơn 3.160 sản phẩm theo đồ án
                  quy hoạch 1/500, mặt bằng dự án phản ánh định hướng phát triển đô thị bài
                  bản với sự phân cấp rõ ràng giữa các phân khu chức năng.
                </p>
                <InfoBox>
                  <strong>Lưu ý:</strong> Thông tin diện tích, số lượng sản phẩm và cơ cấu phân
                  khu trong bài dựa trên đồ án quy hoạch được phê duyệt. Tình trạng mở bán thực
                  tế tại từng thời điểm cần kiểm tra trực tiếp với chủ đầu tư hoặc đơn vị phân
                  phối.
                </InfoBox>
              </div>

              {/* Tổng quan */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">Tổng quan quy mô và cơ cấu mặt bằng Mega City 2 Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dự án Mega City 2 Nhơn Trạch (tên quy hoạch: Khu dân cư xã Phú Hội) do Kim
                    Oanh Group phát triển với quy mô khoảng 84 ha — một trong những quỹ đất đô
                    thị quy hoạch đồng bộ lớn tại vùng lõi huyện Nhơn Trạch, tỉnh Đồng Nai.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Tổng diện tích", value: "~84 ha" },
                      { label: "Sản phẩm", value: ">3.160 lô" },
                      { label: "Công viên TT", value: "2,1 ha" },
                      { label: "Lộ giới đường", value: "13–32 m" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center">
                        <p className="font-black text-amber-700 text-xl mb-1">{item.value}</p>
                        <p className="text-slate-500 text-xs">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo đồ án quy hoạch chi tiết 1/500, tổng thể mặt bằng Mega City 2 được
                    phân bổ hài hòa giữa quỹ đất ở, công trình công cộng, hạ tầng giao thông và
                    diện tích cây xanh mặt nước — tạo nền tảng cho một khu đô thị đồng bộ, đầy
                    đủ tiện ích sinh hoạt.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/mega-city-2/mat-bang">Xem mặt bằng tổng thể Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2">Tổng quan dự án Mega City 2 →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* 1. Cơ cấu sản phẩm */}
              <section className="mb-12">
                <SectionHeading id="co-cau">1. Cơ cấu diện tích sản phẩm trên mặt bằng Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trên sơ đồ phân lô Mega City 2, các lô đất được thiết kế với kích thước đa
                    dạng, vuông vức, đáp ứng linh hoạt từ nhu cầu xây nhà ở gia đình, nhà vườn
                    nghỉ dưỡng cho đến mô hình kinh doanh dịch vụ.
                  </p>

                  <div className="space-y-4">
                    {PRODUCT_TYPES.map((item) => (
                      <div key={item.name} className={`rounded-2xl border p-5 ${item.color}`}>
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-2xl flex-shrink-0">{item.icon}</span>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <p className="font-black text-slate-800">{item.name}</p>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                                {item.area}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 font-mono mb-2">Kích thước phổ biến: {item.sizes}</p>
                          </div>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <InfoBox type="warn">
                    Số lượng và kích thước lô cụ thể tại từng block cần được xác nhận qua tài
                    liệu phân lô chính thức từ chủ đầu tư hoặc đơn vị phân phối. Diện tích thực
                    đo có thể chênh lệch nhỏ so với thiết kế.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS34["2"]}
                alt="Sơ đồ phân lô chi tiết các block đất nền và diện tích tại Mega City 2"
                caption="Sơ đồ phân lô chi tiết thể hiện từng block và kích thước lô đất tại Mega City 2"
                images={images}
                index={1}
                onOpen={openLightbox}
              />

              {/* 2. Phân khu chức năng */}
              <section className="mb-12">
                <SectionHeading id="phan-khu">2. Chi tiết các phân khu chức năng trên bản đồ Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tổng thể mặt bằng dự án được quy hoạch theo mô hình bàn cờ thông thoáng,
                    chia thành 3 phân khu chức năng chính bao quanh khu vực công viên và tiện
                    ích trung tâm:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: "🏪",
                        title: "Phân khu thương mại dịch vụ",
                        color: "border-amber-300 bg-amber-50",
                        titleColor: "text-amber-800",
                        points: [
                          "Nằm ở các block mặt tiền hướng ra tuyến đường đối ngoại và trục giao thông chính 32m",
                          "Định hướng phát triển chuỗi shophouse đồng bộ, trung tâm thương mại nội khu",
                          "Các dịch vụ tiện ích phục vụ toàn bộ cư dân: siêu thị, cafe, phòng khám, ngân hàng",
                        ],
                      },
                      {
                        icon: "🏘️",
                        title: "Phân khu nhà phố an cư",
                        color: "border-blue-300 bg-blue-50",
                        titleColor: "text-blue-800",
                        points: [
                          "Các dãy block nhà phố liên kế sắp xếp đối xứng qua tuyến đường nội bộ có vỉa hè cây xanh",
                          "Bố cục giúp giảm tiếng ồn, tạo yên tĩnh tối đa cho không gian sinh hoạt gia đình",
                          "Chiếm tỷ trọng lớn nhất trong cơ cấu sản phẩm, đa dạng diện tích từ 90–150m²",
                        ],
                      },
                      {
                        icon: "🌳",
                        title: "Phân khu biệt thự vườn ven công viên",
                        color: "border-emerald-300 bg-emerald-50",
                        titleColor: "text-emerald-800",
                        points: [
                          "Tọa lạc vị trí trung tâm, ôm trọn quần thể công viên cây xanh và hồ cảnh quan 2,1 ha",
                          "Mật độ xây dựng thấp hơn các phân khu khác, ưu tiên sân vườn và không gian riêng tư",
                          "Lô đất 200–300m², phù hợp gia đình cần không gian rộng và yên tĩnh",
                        ],
                      },
                    ].map((pk) => (
                      <div key={pk.title} className={`rounded-2xl border p-5 ${pk.color}`}>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl">{pk.icon}</span>
                          <p className={`font-black text-sm ${pk.titleColor}`}>{pk.title}</p>
                        </div>
                        <ul className="space-y-1.5">
                          {pk.points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                              <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/ha-tang-ky-thuat-mega-city-2">
                      Hạ tầng kỹ thuật Mega City 2: Điện âm, nước máy và thoát nước →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS34["3"]}
                alt="Phối cảnh phân khu công viên trung tâm và hồ điều hòa tại Mega City 2 Nhơn Trạch"
                caption="Phân khu công viên trung tâm 2,1 ha và các dãy biệt thự vườn bao quanh hồ cảnh quan"
                images={images}
                index={2}
                onOpen={openLightbox}
              />

              {/* 3. Lộ giới */}
              <section className="mb-12">
                <SectionHeading id="lo-gioi">3. Mạng lưới giao thông và lộ giới trên mặt bằng phân lô</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một điểm nổi bật của bản đồ Mega City 2 Nhơn Trạch là tỷ lệ diện tích dành
                    cho giao thông chiếm tỷ trọng cao và toàn bộ mạng lưới đường được thiết kế
                    thông suốt — không có ngõ cụt.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[520px]">
                      <thead>
                        <tr className="bg-amber-500 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Loại trục đường</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Lộ giới</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Lòng đường</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Vỉa hè</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Trục chính cảnh quan",   "24m – 32m",   "14m – 16m, 4 làn xe", "5m – 8m/bên"],
                          ["Trục nhánh kết nối",     "17,5m – 20,5m","7,5m – 10,5m",        "5m/bên"],
                          ["Đường nội bộ phân khu",  "13m – 14m",   "7m (2 làn tránh nhau)","3m – 3,5m/bên"],
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
                      Thông số dựa trên đồ án quy hoạch 1/500. Cần kiểm tra tài liệu chính thức
                      để xác nhận lộ giới cụ thể tại từng vị trí.
                    </p>
                  </div>

                  <InfoBox>
                    Không có ngõ cụt trong toàn bộ mạng lưới đường nội bộ Mega City 2 — đây là
                    yêu cầu quan trọng giúp lưu thông xe cộ thông suốt và đảm bảo xe cứu hỏa,
                    xe cứu thương tiếp cận được mọi vị trí trong dự án.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS34["4"]}
                alt="Sơ đồ mặt cắt lộ giới đường nội khu 13m đến 32m tại dự án Mega City 2"
                caption="Mặt cắt ngang các trục đường nội khu với lộ giới từ 13m đến 32m tại Mega City 2"
                images={images}
                index={3}
                onOpen={openLightbox}
              />

              {/* 4. Đọc bản đồ */}
              <section className="mb-12">
                <SectionHeading id="doc-ban-do">4. Cách đọc ký hiệu và số thửa trên bản đồ Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi xem bản đồ phân lô chi tiết, người mua cần nắm được các ký hiệu và quy
                    ước kỹ thuật để xác định đúng vị trí lô đất mình quan tâm.
                  </p>

                  <H3>Ký hiệu Block và số lô</H3>
                  <BulletList
                    items={[
                      <>
                        <strong>Ký hiệu Block (Dãy):</strong> Ví dụ LK1, LK2, LK3 (Block liền kề), BT1, BT2 (Block biệt thự), SP (Shophouse)
                      </>,
                      <>
                        <strong>Số lô (Thửa đất):</strong> Đánh số thứ tự từ đầu dãy đến cuối dãy theo chiều kim đồng hồ hoặc theo hướng tuyến đường
                      </>,
                    ]}
                  />

                  <H3>Màu sắc phân bổ chức năng</H3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { color: "bg-rose-100 border-rose-300",    label: "Hồng/Cam",   desc: "Đất ở đô thị (nhà phố, biệt thự)" },
                      { color: "bg-emerald-100 border-emerald-300", label: "Xanh lá",  desc: "Công viên, cây xanh, vườn hoa" },
                      { color: "bg-yellow-100 border-yellow-300", label: "Vàng/Đỏ",   desc: "Đất thương mại, trường học, DVCC" },
                      { color: "bg-slate-200 border-slate-400",   label: "Ghi xám",   desc: "Giao thông, vỉa hè, hạ tầng KT" },
                    ].map((item) => (
                      <div key={item.label} className={`rounded-xl border p-3 ${item.color}`}>
                        <p className="font-bold text-slate-700 text-xs mb-1">{item.label}</p>
                        <p className="text-slate-600 text-[11px] leading-tight">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <H3>Hướng đất và định vị</H3>
                  <p className="text-slate-600 text-[16px] leading-relaxed">
                    Hướng đất (Bắc, Nam, Đông, Tây, Đông Nam, Đông Bắc, Tây Nam, Tây Bắc) được
                    định vị theo la bàn chuẩn ở góc bản đồ quy hoạch. Khi xác định hướng nhà,
                    cần xác định hướng cửa chính ra đường nội khu tiếp giáp, không phải hướng
                    của toàn thửa đất.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/cach-doc-ban-do-quy-hoach-nhon-trach">
                      Cách đọc bản đồ quy hoạch Nhơn Trạch: Hướng dẫn cho người mua đất →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* 5. Kinh nghiệm chọn */}
              <section className="mb-12">
                <SectionHeading id="chon-vi-tri">5. Kinh nghiệm chọn vị trí lô đất đẹp trên mặt bằng Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tùy mục đích sử dụng, các tiêu chí chọn vị trí nền đất sẽ khác nhau. Dưới
                    đây là một số gợi ý tham khảo — người mua nên kết hợp khảo sát thực địa và
                    tham chiếu mặt bằng thực tế trước khi quyết định.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: "🏠",
                        title: "Nhu cầu an cư, nghỉ dưỡng",
                        items: [
                          "Ưu tiên lô đối diện hoặc cách công viên trung tâm từ 50–100m để đón gió mát và có không gian tập thể dục hàng ngày",
                          "Chọn hướng Nam hoặc Đông Nam để đón gió tự nhiên và tránh nắng chiều gay gắt",
                          "Tránh lô tiếp giáp trực tiếp với trục đường 24–32m nếu ưu tiên yên tĩnh",
                        ],
                      },
                      {
                        icon: "💼",
                        title: "Nhu cầu kinh doanh hoặc cho thuê",
                        items: [
                          "Ưu tiên lô góc 2 mặt tiền trên trục đường lớn 24–32m với tầm nhìn thoáng và vỉa hè rộng",
                          "Chọn lô gần cổng chào dự án hoặc trục đường kết nối ra đường Nguyễn Hữu Cảnh và đường 25C",
                          "Xem xét tổng lưu lượng người qua lại và khả năng đỗ xe trước lô đất",
                        ],
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl">{item.icon}</span>
                          <p className="font-black text-slate-800 text-sm">{item.title}</p>
                        </div>
                        <ul className="space-y-2">
                          {item.items.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600 text-[14px] leading-relaxed">
                              <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl bg-amber-50 border border-amber-200 px-6 py-5">
                    <p className="font-bold text-amber-800 text-sm mb-2">📍 Lưu ý kỹ thuật khi chọn nền</p>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      Kiểm tra vị trí nắp hố ga, tủ điện hạ thế (Pillar) và cây xanh trước mặt
                      lô đất để đảm bảo không cản trở lối ra vào garage ô tô và không ảnh hưởng
                      đến thiết kế mặt tiền ngôi nhà.
                    </p>
                  </div>
                </div>
              </section>

              {/* So sánh */}
              <section className="mb-12">
                <SectionHeading id="so-sanh">So sánh mặt bằng Mega City 2 với các dự án lân cận</SectionHeading>
                <div className="pt-5 space-y-5">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[560px]">
                      <thead>
                        <tr className="bg-slate-700 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-36">Tiêu chí</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Mega City 2</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Khu dân cư tự phát</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Dự án đô thị cũ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Quy mô",        "~84 ha, đồng bộ",          "0,5–2 ha, nhỏ lẻ",        "10–30 ha"],
                          ["Giao thông",    "Bàn cờ, lộ giới 13–32m",   "Hẻm cụt 3–5m",            "Đường 10–16m"],
                          ["Công viên TT",  "2,1 ha, hồ điều hòa",      "Không có",                 "500–1.000m²"],
                          ["Phân lô",       "Vuông vức, 90–300m²",       "Méo mó, tóp hậu",         "Thường diện tích nhỏ"],
                          ["Hạ tầng KT",    "Điện âm, 2 tuyến thoát nước","Tự phát",               "Một phần đồng bộ"],
                        ].map(([tc, mc2, kdc, cu], i) => (
                          <tr key={tc} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700">{tc}</td>
                            <td className="px-4 py-3 text-amber-700 font-medium">{mc2}</td>
                            <td className="px-4 py-3 text-slate-500">{kdc}</td>
                            <td className="px-4 py-3 text-slate-500">{cu}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-500 italic mt-2">
                      Bảng mang tính định hướng tổng quát. Đặc điểm cụ thể cần kiểm tra theo từng dự án.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về mặt bằng Mega City 2</SectionHeading>
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
                    { href: "/mega-city-2/mat-bang",                          label: "Mặt bằng tổng thể Mega City 2" },
                    { href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",         label: "Bảng giá Mega City 2 mới nhất" },
                    { href: "/tin-tuc/phap-ly-mega-city-2",                   label: "Pháp lý dự án Mega City 2" },
                    { href: "/tin-tuc/tien-do-mega-city-2",                   label: "Tiến độ Mega City 2 mới nhất" },
                    { href: "/tin-tuc/vi-tri-mega-city-2-o-dau",              label: "Vị trí Mega City 2 ở đâu?" },
                    { href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2",          label: "Hạ tầng kỹ thuật Mega City 2" },
                    { href: "/tin-tuc/mega-city-2-co-nhung-loai-san-pham-nao",label: "Các loại sản phẩm Mega City 2" },
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
                    Bản đồ mặt bằng phân lô Mega City 2 Nhơn Trạch được quy hoạch khoa học với
                    sự cân bằng giữa mật độ xây dựng và mảng xanh tiện ích. Sự đa dạng về diện
                    tích từ 90m² đến hơn 300m², mạng lưới đường thông suốt 13–32m và công viên
                    trung tâm 2,1 ha tạo nền tảng cho một khu đô thị đồng bộ và có chất lượng
                    sống cao.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trước khi lựa chọn vị trí lô đất, người mua nên kết hợp xem bản đồ phân lô
                    chi tiết, khảo sát thực địa và đối chiếu với thông tin pháp lý, bảng giá
                    hiện tại để có quyết định phù hợp nhất với nhu cầu thực tế.
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
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
                      { href: "/mega-city-2/mat-bang", label: "Mặt bằng tổng thể" },
                      { href: "/mega-city-2/vi-tri",   label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",  label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",  label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia", label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich", label: "Tiện ích nội khu" },
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
                      { label: "Hạ tầng kỹ thuật Mega City 2",       href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2" },
                      { label: "Checklist nhận nền Mega City 2",      href: "/tin-tuc/checklist-nhan-nen-mega-city-2" },
                      { label: "Các loại sản phẩm Mega City 2",       href: "/tin-tuc/mega-city-2-co-nhung-loai-san-pham-nao" },
                      { label: "Bảng giá Mega City 2 mới nhất",       href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Nhận file mặt bằng</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Liên hệ để nhận bản đồ phân lô chi tiết và bảng giá mới nhất.
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
              Bạn muốn nhận file bản đồ phân lô Mega City 2 chất lượng cao?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Liên hệ để nhận thông tin chi tiết từng block, bảng giá hoặc hướng dẫn xem thực địa.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/mega-city-2"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Xem thông tin Mega City 2 →
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
              href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2",
              title: "Hạ Tầng Kỹ Thuật Mega City 2: Điện Âm, Nước Máy & Thoát Nước",
              description: "Chi tiết điện âm 100%, cấp nước Dowaco và thoát nước 2 tuyến riêng biệt.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/mega-city-2-co-nhung-loai-san-pham-nao",
              title: "Mega City 2 Có Những Loại Sản Phẩm Nào? Đất Nền, Nhà Phố, Nhà Vườn",
              description: "Phân tích đặc điểm từng loại hình sản phẩm tại Mega City 2 Nhơn Trạch.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/checklist-nhan-nen-mega-city-2",
              title: "Checklist Nhận Nền & Kiểm Tra Hiện Trạng Tại Mega City 2",
              description: "Danh sách 12 bước kiểm tra chi tiết khi nhận bàn giao nền đất.",
              tag: "Tin dự án",
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
