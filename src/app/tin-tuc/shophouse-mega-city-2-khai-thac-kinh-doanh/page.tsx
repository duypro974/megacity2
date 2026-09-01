"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS41 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/shophouse-mega-city-2-khai-thac-kinh-doanh`;
const PUBLISHED     = "01/09/2026";
const PUBLISHED_ISO = "2026-09-01";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shophouse Mega City 2 Nhơn Trạch: Khả năng khai thác kinh doanh dọc các trục đường lớn",
  description:
    "Đánh giá tiềm năng khai thác kinh doanh của Shophouse Mega City 2 Nhơn Trạch dọc các trục đường 24m–32m: ngành nghề phù hợp, đối tượng khách hàng và tỷ suất sinh lời.",
  image: [IMG_NEWS41["1"], IMG_NEWS41["2"], IMG_NEWS41["3"]],
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
    "shophouse Mega City 2, nhà phố thương mại Mega City 2, kinh doanh tại Mega City 2, mặt bằng kinh doanh Mega City 2, shophouse Nhơn Trạch, đất nền mặt tiền Mega City 2",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Lộ giới đường trước các căn Shophouse Mega City 2 rộng bao nhiêu mét?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Các căn shophouse thương mại tại dự án được quy hoạch mặt tiền trên trục đường chính có lộ giới từ 24m đến 32m, gồm lòng đường rộng 14–16m (4 làn xe) và vỉa hè mỗi bên rộng 5–8m.",
      },
    },
    {
      "@type": "Question",
      name: "Xây dựng Shophouse tại Mega City 2 được phép xây tối đa mấy tầng?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shophouse tại dự án được phép xây dựng từ 3 đến 5 tầng (phổ biến nhất là 1 trệt 2 lầu 1 tum hoặc 1 trệt 3 lầu), độ cao tầng trệt tối thiểu 3,9m để tối ưu không gian kinh doanh.",
      },
    },
    {
      "@type": "Question",
      name: "Các ngành nghề nào phù hợp nhất để mở tại Shophouse Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Các ngành tiềm năng nhất: quán cafe, nhà hàng ẩm thực F&B, siêu thị tiện lợi mini, nhà thuốc tây, phòng khám, văn phòng dịch vụ logistics và spa làm đẹp — phục vụ 12.000+ cư dân nội khu và lao động từ các KCN lân cận.",
      },
    },
    {
      "@type": "Question",
      name: "Diện tích các lô shophouse tại Mega City 2 là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shophouse tiêu chuẩn 100–120m² (5×20m, 5×22m, 6×20m), shophouse diện tích lớn 130–160m² (6×22m đến 6×26m) và lô góc 2 mặt tiền 150–250m². Cần xác nhận tài liệu phân lô chính thức.",
      },
    },
    {
      "@type": "Question",
      name: "Tỷ suất sinh lời từ cho thuê shophouse Mega City 2 khoảng bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tỷ suất cho thuê ước tính tham khảo khoảng 6–8%/năm trên tổng vốn đầu tư hoàn thiện. Mức thực tế phụ thuộc vào vị trí lô, chất lượng xây dựng, ngành nghề kinh doanh và diễn biến thị trường.",
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
      name: "Shophouse Mega City 2: Khai thác kinh doanh",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS41["1"],
    alt: "Dãy nhà phố thương mại shophouse hiện đại tại dự án Mega City 2 Nhơn Trạch",
    caption: "Shophouse Mega City 2 dọc trục đại lộ 32m — vị trí đắc địa cho hoạt động thương mại",
  },
  {
    src: IMG_NEWS41["2"],
    alt: "Sơ đồ phân bổ các dãy block shophouse thương mại trên mặt bằng Mega City 2",
    caption: "Các block shophouse được bố trí dọc trục đường 24m–32m tiếp giáp đường liên vùng",
  },
  {
    src: IMG_NEWS41["3"],
    alt: "Thiết kế công năng kép vừa ở vừa kinh doanh của shophouse Mega City 2",
    caption: "Công năng kép: tầng trệt kinh doanh 3,9m+ và các tầng lầu sinh hoạt gia đình riêng biệt",
  },
  {
    src: IMG_NEWS41["4"],
    alt: "Hoạt động kinh doanh ăn uống giải trí F&B tại shophouse Mega City 2",
    caption: "Phố thương mại F&B sầm uất phục vụ cư dân đô thị và lao động KCN Nhơn Trạch",
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

// ─── Page ──────────────────────────────────────────────────────────────────
export default function ShophouseMegaCity2Page() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Shophouse Mega City 2</span>
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
              Shophouse Mega City 2 Nhơn Trạch: Khả năng khai thác kinh doanh dọc các trục đường lớn
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích tiềm năng khai thác kinh doanh của nhà phố thương mại tại{" "}
              <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">
                Mega City 2 Nhơn Trạch
              </a>
              : vị trí mặt bằng, quy cách xây dựng, 4 nhóm ngành nghề tiềm năng và bảng
              tài chính tham khảo cho nhà đầu tư.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh shophouse Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS41["1"]}
                alt="Dãy nhà phố thương mại shophouse hiện đại tại dự án Mega City 2 Nhơn Trạch"
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
              Shophouse Mega City 2 dọc trục đại lộ 32m — vị trí đắc địa cho hoạt động thương mại
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
                    ["#vi-sao",      "Vì sao shophouse được quan tâm?"],
                    ["#mat-bang",    "1. Vị trí và thông số mặt bằng"],
                    ["#quy-cach",    "2. Quy cách xây dựng chuẩn thương mại"],
                    ["#nganh-nghe",  "3. Ngành nghề kinh doanh tiềm năng"],
                    ["#tai-chinh",   "4. Bài toán tài chính tham khảo"],
                    ["#kinh-nghiem", "5. Kinh nghiệm chọn mua an toàn"],
                    ["#faq",         "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <section className="mb-12" id="vi-sao">
                <SectionHeading>Vì sao dòng sản phẩm Shophouse tại Mega City 2 được quan tâm?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong cấu trúc quy hoạch đô thị hiện đại, nhà phố thương mại (shophouse)
                    luôn là phân khúc có tính thanh khoản cao nhờ{" "}
                    <strong>công năng kép vượt trội</strong>: vừa đáp ứng không gian sinh hoạt
                    gia đình ở các tầng trên, vừa tận dụng tầng trệt để tự kinh doanh hoặc
                    cho thuê sinh dòng tiền hàng tháng.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tại Mega City 2 (84 ha, hơn 3.160 sản phẩm), các dãy shophouse được bố
                    trí dọc theo các trục đại lộ cảnh quan có lộ giới 24–32m, tiếp giáp trực
                    tiếp đường 25C và đường Nguyễn Hữu Cảnh.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { icon: "👥", title: "12.000+ cư dân nội khu",   desc: "Tệp khách hàng nội tại khi khu đô thị lấp đầy — ổn định và tái mua cao" },
                      { icon: "🚗", title: "Lưu lượng vãng lai lớn",   desc: "Đón dòng phương tiện từ KCN Nhơn Trạch và hướng sân bay Long Thành" },
                      { icon: "🏪", title: "Mặt tiền rộng, vỉa hè lớn",desc: "Vỉa hè 5–8m thuận tiện đỗ xe khách và trưng bày sản phẩm dịch vụ" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 text-center hover:border-amber-300 transition-colors">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <InfoBox>
                    <strong>Lưu ý:</strong> Thông tin trong bài mang tính tham khảo định
                    hướng. Các số liệu về dân số, doanh thu cho thuê và tỷ suất lợi nhuận
                    là ước tính và có thể thay đổi theo thực tế thị trường. Người mua cần
                    cân nhắc kỹ trước khi quyết định.
                  </InfoBox>
                </div>
              </section>

              {/* 1. Mặt bằng */}
              <section className="mb-12">
                <SectionHeading id="mat-bang">1. Vị trí và thông số mặt bằng các trục Shophouse Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Shophouse Mega City 2 được quy hoạch trên các trục đường có thông số kỹ
                    thuật tối ưu cho hoạt động thương mại:
                  </p>

                  {/* Sơ đồ mặt cắt */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 font-mono text-xs text-slate-600 space-y-1.5">
                    <p className="text-blue-700 font-bold">[LÒNG ĐƯỜNG 14–16m — 4 LÀN XE]</p>
                    <p className="pl-4 text-slate-400">↓</p>
                    <p className="text-amber-700 font-bold">[VỈA HÈ LÁT GẠCH 5–8m — ĐỖ XE & KINH DOANH]</p>
                    <p className="pl-4 text-slate-400">↓</p>
                    <div className="border border-slate-300 rounded-xl p-3 space-y-1">
                      <p className="text-emerald-700 font-bold">│ MẶT BẰNG KINH DOANH TẦNG TRỆT (cao 3,9m+)</p>
                      <p className="text-slate-400">│ Phòng trưng bày / Cửa hàng / Showroom</p>
                      <p className="text-slate-300">├──────────────────────────</p>
                      <p className="text-blue-700 font-bold">│ KHÔNG GIAN SINH HOẠT GIA ĐÌNH CÁC TẦNG LẦU</p>
                      <p className="text-slate-400">│ Tầng 2, 3, Tum: Phòng khách, Phòng ngủ</p>
                    </div>
                  </div>

                  <H3>Các nhóm diện tích Shophouse điển hình</H3>
                  <div className="space-y-3">
                    {[
                      {
                        label: "Shophouse tiêu chuẩn (100–120 m²)",
                        sizes: "5×20m · 5×22m · 6×20m",
                        color: "border-blue-200 bg-blue-50",
                        badge: "bg-blue-100 text-blue-700",
                        suitable: "Siêu thị mini, tiệm thuốc, quán cafe, spa làm đẹp",
                      },
                      {
                        label: "Shophouse diện tích lớn (130–160 m²)",
                        sizes: "6×22m → 6×26m",
                        color: "border-amber-200 bg-amber-50",
                        badge: "bg-amber-100 text-amber-700",
                        suitable: "Nhà hàng ăn uống, phòng khám, showroom nội thất",
                      },
                      {
                        label: "Lô góc 2 mặt tiền (150–250 m²)",
                        sizes: "Ngã tư đường 32m × 24m",
                        color: "border-emerald-200 bg-emerald-50",
                        badge: "bg-emerald-100 text-emerald-700",
                        suitable: "Chuỗi nhượng quyền F&B, chi nhánh ngân hàng, showroom ô tô",
                      },
                    ].map((item) => (
                      <div key={item.label} className={`rounded-2xl border p-5 ${item.color}`}>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <p className="font-black text-slate-800 text-sm">{item.label}</p>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono ${item.badge}`}>
                            {item.sizes}
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm">
                          <span className="text-slate-400 text-xs">Phù hợp: </span>{item.suitable}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach">
                      Bản đồ mặt bằng phân lô Mega City 2: Chi tiết từng phân khu →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS41["2"]}
                alt="Sơ đồ phân bổ các dãy block shophouse thương mại trên mặt bằng Mega City 2"
                caption="Các block shophouse được bố trí dọc trục đường 24m–32m tiếp giáp đường liên vùng"
                images={images}
                index={1}
                onOpen={openLightbox}
              />

              {/* 2. Quy cách xây dựng */}
              <section className="mb-12">
                <SectionHeading id="quy-cach">2. Quy cách xây dựng chuẩn thương mại cho Shophouse Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khác với nhà phố liên kế nội bộ, shophouse được áp dụng quy chuẩn tối
                    ưu hóa diện tích mặt bằng kinh doanh:
                  </p>

                  <div className="space-y-3">
                    {[
                      { icon: "📏", label: "Tầng cao cho phép",    value: "3–5 tầng",  desc: "Phổ biến: 1 trệt 2 lầu 1 tum hoặc 1 trệt 3 lầu" },
                      { icon: "🏗️", label: "Độ cao tầng trệt",    value: "≥ 3,9m",    desc: "Không gian cao ráo, dễ lắp biển hiệu và điều hòa âm trần" },
                      { icon: "🚪", label: "Lối đi riêng biệt",   value: "Độc lập",   desc: "Thang bộ/thang máy riêng giúp kinh doanh không ảnh hưởng sinh hoạt gia đình" },
                      { icon: "📐", label: "Khoảng lùi mặt tiền", value: "Đồng bộ",   desc: "Lùi theo chỉ giới quy hoạch tạo hành lang đi bộ thương mại liền mạch" },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-300 transition-colors">
                        <span className="text-xl flex-shrink-0">{item.icon}</span>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-0.5">
                            <p className="font-bold text-slate-800 text-sm">{item.label}</p>
                            <span className="text-xs font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">{item.value}</span>
                          </div>
                          <p className="text-slate-500 text-[13px]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/quy-cach-xay-dung-mega-city-2">
                      Tiêu chuẩn và quy cách xây dựng tại Mega City 2 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS41["3"]}
                alt="Thiết kế công năng kép vừa ở vừa kinh doanh của shophouse Mega City 2"
                caption="Công năng kép: tầng trệt kinh doanh 3,9m+ và các tầng lầu sinh hoạt gia đình riêng biệt"
                images={images}
                index={2}
                onOpen={openLightbox}
              />

              {/* 3. Ngành nghề */}
              <section className="mb-12">
                <SectionHeading id="nganh-nghe">3. Top các ngành nghề kinh doanh tiềm năng nhất tại Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Căn cứ vào đặc thù dân cư vùng công nghiệp và quy hoạch đô thị vệ tinh
                    tại Nhơn Trạch, các mô hình kinh doanh sau có tiềm năng phù hợp cao:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: "☕",
                        n: 1,
                        title: "Dịch vụ Ẩm thực & Đồ uống (F&B)",
                        color: "border-amber-200 bg-amber-50",
                        items: [
                          "Quán cafe sân vườn, cafe văn phòng, trà sữa nhượng quyền (Highlands, The Coffee House, Phúc Long)",
                          "Nhà hàng ẩm thực gia đình, quán ăn sáng, nhà hàng hải sản phục vụ cư dân và doanh nghiệp FDI",
                        ],
                      },
                      {
                        icon: "🛒",
                        n: 2,
                        title: "Bán lẻ tiêu dùng & Cửa hàng tiện lợi",
                        color: "border-blue-200 bg-blue-50",
                        items: [
                          "Siêu thị tiện lợi 24/7 (WinMart+, GS25, Circle K, 7-Eleven)",
                          "Cửa hàng thực phẩm sạch, trái cây nhập khẩu, nhà thuốc chuẩn GPP (Long Châu, An Khang)",
                        ],
                      },
                      {
                        icon: "💆",
                        n: 3,
                        title: "Dịch vụ chăm sóc sức khỏe & Làm đẹp",
                        color: "border-emerald-200 bg-emerald-50",
                        items: [
                          "Phòng khám nha khoa thẩm mỹ, phòng khám nhi khoa tư nhân",
                          "Spa dưỡng sinh, salon tóc cao cấp, phòng tập Gym & Yoga chuyên nghiệp",
                        ],
                      },
                      {
                        icon: "🏢",
                        n: 4,
                        title: "Văn phòng đại diện & Logistics công nghiệp",
                        color: "border-purple-200 bg-purple-50",
                        items: [
                          "Văn phòng tư vấn xuất nhập khẩu, đại lý hải quan, logistics phục vụ KCN Nhơn Trạch và cụm cảng biển",
                          "Văn phòng công chứng, trung tâm tư vấn thiết kế và thi công xây dựng",
                        ],
                      },
                    ].map((item) => (
                      <div key={item.n} className={`rounded-2xl border p-5 ${item.color}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xl">{item.icon}</span>
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center flex-shrink-0">
                              {item.n}
                            </span>
                            <p className="font-black text-slate-800 text-sm">{item.title}</p>
                          </div>
                        </div>
                        <ul className="space-y-1.5">
                          {item.items.map((d, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                              <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/ha-tang-ky-thuat-mega-city-2">
                      Hạ tầng kỹ thuật Mega City 2: Điện âm, nước máy và thoát nước →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS41["4"]}
                alt="Hoạt động kinh doanh ăn uống giải trí F&B tại shophouse Mega City 2"
                caption="Phố thương mại F&B sầm uất phục vụ cư dân đô thị và lao động KCN Nhơn Trạch"
                images={images}
                index={3}
                onOpen={openLightbox}
              />

              {/* 4. Tài chính */}
              <section className="mb-12">
                <SectionHeading id="tai-chinh">4. Bài toán tài chính và tỷ suất sinh lời tham khảo</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dưới đây là bảng dự toán tài chính tham khảo cho mô hình shophouse mặt
                    tiền đường 24–32m tại Mega City 2:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[500px]">
                      <thead>
                        <tr className="bg-amber-500 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Hạng mục</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Tham khảo</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Ghi chú</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Diện tích đất chuẩn",           "100–120 m²",                "Mặt tiền rộng 5–6m"],
                          ["Giá vốn đất nền",               "[Liên hệ bảng giá]",        "Theo thị trường hiện hành"],
                          ["Chi phí xây dựng hoàn thiện",   "1,2–1,8 tỷ đồng",           "Nhà 1 trệt 2 lầu kiên cố"],
                          ["Giá thuê tầng trệt KD",         "10–15 triệu đồng/tháng",    "F&B, siêu thị mini, văn phòng"],
                          ["Giá thuê nguyên căn",           "18–25 triệu đồng/tháng",    "Vừa kinh doanh vừa ở"],
                          ["Tỷ suất thuê ước tính",         "~6–8%/năm",                 "Trên tổng vốn đầu tư hoàn thiện"],
                        ].map(([hang, tham, ghi], i) => (
                          <tr key={hang} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700 text-sm">{hang}</td>
                            <td className="px-4 py-3 text-amber-700 font-bold text-sm">{tham}</td>
                            <td className="px-4 py-3 text-slate-500 text-xs">{ghi}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-500 italic mt-2">
                      Bảng mang tính tham khảo định hướng. Các số liệu là ước tính và không
                      phải cam kết lợi nhuận. Người mua cần đánh giá kỹ trước khi quyết định.
                    </p>
                  </div>

                  <InfoBox type="warn">
                    <strong>Lợi nhuận kép:</strong> Ngoài dòng tiền cho thuê hàng tháng, đất
                    nền mặt tiền trục đại lộ lớn thường có biên độ tăng giá vốn cao hơn so với
                    các lô đường nhánh khi hạ tầng khu vực hoàn thiện. Tuy nhiên mức tăng thực
                    tế phụ thuộc nhiều yếu tố và không có cam kết.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/bang-gia-mega-city-2-moi-nhat">
                      Bảng giá Mega City 2 Nhơn Trạch mới nhất →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* 5. Kinh nghiệm */}
              <section className="mb-12">
                <SectionHeading id="kinh-nghiem">5. Kinh nghiệm chọn mua đất nền Shophouse Mega City 2 an toàn</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Để tối ưu hóa hiệu quả kinh doanh và thanh khoản sau này:
                  </p>

                  <BulletList
                    items={[
                      <>
                        <strong>Ưu tiên trục đường thông suốt:</strong> Chọn lô trên tuyến đường 32m hoặc 24m có điểm đầu kết nối trực tiếp ra đường Nguyễn Hữu Cảnh hoặc đường 25C, thay vì các đoạn đường bị ngắt quãng
                      </>,
                      <>
                        <strong>Khảo sát hướng nắng và vỉa hè:</strong> Shophouse hướng Đông, Đông Nam hoặc Nam thường có vỉa hè mát mẻ buổi chiều — thuận lợi cho kinh doanh cafe và ăn uống ngoài trời
                      </>,
                      <>
                        <strong>Kiểm tra pháp lý và quy chuẩn:</strong> Đảm bảo thửa đất đã hoàn tất nghĩa vụ tài chính và có thể nộp hồ sơ xin phép xây dựng thương mại theo đúng quy định
                      </>,
                      <>
                        <strong>Đánh giá lưu lượng thực tế:</strong> Khảo sát trực tiếp số lượng phương tiện lưu thông tại vị trí lô vào giờ cao điểm sáng và chiều để ước lượng tệp khách hàng vãng lai
                      </>,
                    ]}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/thu-tuc-chuyen-nhuong-mega-city-2">
                      Thủ tục sang tên & chuyển nhượng đất nền Mega City 2 →
                    </LinkBtn>
                    <LinkBtn href="/tin-tuc/phap-ly-mega-city-2">
                      Pháp lý dự án Mega City 2 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về Shophouse Mega City 2</SectionHeading>
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
                    { href: "/mega-city-2",                                                     label: "Mega City 2 Nhơn Trạch — Tổng quan dự án" },
                    { href: "/tin-tuc/dat-nen-nha-vuon-biet-thu-mega-city-2",                   label: "Biệt thự & nhà vườn Mega City 2" },
                    { href: "/tin-tuc/tien-ich-ngoai-khu-mega-city-2",                          label: "Tiện ích ngoại khu Mega City 2" },
                    { href: "/tin-tuc/ket-noi-mega-city-2-va-cac-khu-cong-nghiep-nhon-trach",   label: "Kết nối Mega City 2 và KCN Nhơn Trạch" },
                    { href: "/tin-tuc/duong-di-tu-tphcm-den-mega-city-2",                       label: "Đường đi từ TP.HCM đến Mega City 2" },
                    { href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",                           label: "Bảng giá Mega City 2 mới nhất" },
                    { href: "/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach",                 label: "Mặt bằng phân lô Mega City 2" },
                    { href: "/tin-tuc/quy-cach-xay-dung-mega-city-2",                           label: "Quy cách xây dựng Mega City 2" },
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
                    Sở hữu vị trí dọc các trục đại lộ 24–32m, hạ tầng ngầm đồng bộ và tệp
                    khách hàng tiềm năng từ 12.000+ cư dân nội khu cùng hàng vạn lao động KCN
                    lân cận, shophouse Mega City 2 là dòng sản phẩm có công năng kép — vừa
                    phục vụ nhu cầu sinh hoạt gia đình vừa tạo dòng tiền kinh doanh ổn định.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tuy nhiên, hiệu quả thực tế phụ thuộc vào nhiều yếu tố: vị trí lô cụ thể,
                    ngành nghề kinh doanh, chất lượng xây dựng và diễn biến thị trường. Người
                    mua nên cân nhắc kỹ và tham khảo thông tin pháp lý, bảng giá chính thức
                    trước khi quyết định.
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
                      { href: "/mega-city-2",          label: "Tổng quan dự án" },
                      { href: "/mega-city-2/mat-bang",  label: "Mặt bằng tổng thể" },
                      { href: "/mega-city-2/vi-tri",    label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",   label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia",  label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/hinh-anh",  label: "Hình ảnh thực tế" },
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
                      { label: "Biệt thự & nhà vườn Mega City 2",   href: "/tin-tuc/dat-nen-nha-vuon-biet-thu-mega-city-2" },
                      { label: "Kết nối Mega City 2 và KCN",         href: "/tin-tuc/ket-noi-mega-city-2-va-cac-khu-cong-nghiep-nhon-trach" },
                      { label: "Quy cách xây dựng Mega City 2",      href: "/tin-tuc/quy-cach-xay-dung-mega-city-2" },
                      { label: "Bảng giá Mega City 2 mới nhất",      href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn Shophouse</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Nhận danh sách lô góc 2 mặt tiền và bảng giá shophouse Mega City 2.
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
              Bạn muốn tìm kiếm các lô Shophouse mặt tiền đẹp nhất tại Mega City 2?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Liên hệ để nhận bảng giá các lô góc 2 mặt tiền và tư vấn phương án xây dựng
              shophouse tối ưu.
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
              href: "/tin-tuc/dat-nen-nha-vuon-biet-thu-mega-city-2",
              title: "Đất Nền Nhà Vườn Và Biệt Thự Mega City 2: Đặc Điểm & Tiềm Năng",
              description: "Phân tích diện tích 200–350m² và 3 mô hình khai thác biệt thự.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/ket-noi-mega-city-2-va-cac-khu-cong-nghiep-nhon-trach",
              title: "Kết Nối Mega City 2 Và Các KCN Nhơn Trạch",
              description: "120.000+ lao động KCN — nguồn khách hàng tiềm năng cho shophouse.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/quy-cach-xay-dung-mega-city-2",
              title: "Quy Cách Xây Dựng Mega City 2: Tầng Cao, Khoảng Lùi & Mẫu Nhà",
              description: "Quy định tầng cao, khoảng lùi và thủ tục xin phép xây dựng.",
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
