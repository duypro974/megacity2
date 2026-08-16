"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import PageCTA from "@/components/PageCTA";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS6 } from "@/lib/cloudinary";

// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────
const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good";
const img = (path: string, w = 1280) => `${CDN},w_${w},c_limit/${path}`;

const BASE_URL     = "https://kimoanhdongnai.com.vn";
const PAGE_URL     = `${BASE_URL}/tin-tuc/gia-dat-nhon-trach-2026`;
const PUBLISHED    = "16/08/2026";
const PUBLISHED_ISO = "2026-08-16";

// ─────────────────────────────────────────────────────────────
// JSON-LD Schemas
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Giá đất Nhơn Trạch 2026 mới nhất: Cập nhật thị trường và xu hướng đầu tư",
  description:
    "Cập nhật giá đất Nhơn Trạch 2026 mới nhất. Phân tích biến động thị trường, các khu vực tiềm năng và xu hướng đầu tư bất động sản tại Đồng Nai.",
  image: [IMG_NEWS6["1"], IMG_NEWS6["2"], IMG_NEWS6["3"]],
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
  keywords: "giá đất Nhơn Trạch 2026, đất nền Nhơn Trạch, giá đất Đồng Nai 2026, đầu tư đất Nhơn Trạch, giá đất gần sân bay Long Thành, Mega City 2",
  about: {
    "@type": "Place",
    name: "Nhơn Trạch, Đồng Nai",
    address: { "@type": "PostalAddress", addressLocality: "Nhơn Trạch", addressRegion: "Đồng Nai", addressCountry: "VN" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Giá đất Nhơn Trạch năm 2026 có tăng không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giá đất tại Nhơn Trạch phụ thuộc vào nhiều yếu tố như hạ tầng, quy hoạch và nhu cầu thị trường. Khu vực đang có nhiều dự án hạ tầng lớn như sân bay Long Thành và cầu Cát Lái được kỳ vọng tác động tích cực đến thị trường bất động sản trong dài hạn.",
      },
    },
    {
      "@type": "Question",
      name: "Giá đất Nhơn Trạch hiện nay là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giá đất thực tế tại Nhơn Trạch dao động từ 2 đến 35 triệu đồng/m² tùy khu vực và loại hình. Đất vườn tham khảo 2–8 triệu đồng/m², đất thổ cư 10–25 triệu đồng/m², đất nền dự án 15–35 triệu đồng/m². Bảng giá nhà nước (UBND tỉnh Đồng Nai) áp dụng từ 01/01/2026 là giá sàn theo quy định.",
      },
    },
    {
      "@type": "Question",
      name: "Có nên đầu tư đất Nhơn Trạch trong năm 2026 không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà đầu tư nên đánh giá kỹ pháp lý, quy hoạch, hạ tầng và khả năng kết nối trước khi quyết định. Nhơn Trạch có tiềm năng dài hạn nhờ vị trí chiến lược và hạ tầng đang phát triển, nhưng cần xác nhận thông tin pháp lý cụ thể từng lô trước giao dịch.",
      },
    },
    {
      "@type": "Question",
      name: "Dự án Mega City 2 ảnh hưởng thế nào đến thị trường đất Nhơn Trạch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mega City 2 là một trong những dự án quy mô lớn tại Nhơn Trạch với ~83,94 ha và 2.421 lô đã được UBND tỉnh Đồng Nai chấp thuận phân lô bán nền theo QĐ 1772/QĐ-UBND. Giá chuyển nhượng tham khảo từ 1,15 tỷ/nền (khoảng 12–15 triệu đồng/m²), phù hợp với mặt bằng giá khu vực.",
      },
    },
    {
      "@type": "Question",
      name: "Bảng giá đất Nhơn Trạch theo quy định nhà nước là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo bảng giá đất tỉnh Đồng Nai áp dụng từ 01/01/2026, một số tuyến đường tại Nhơn Trạch có mức giá như: đường Quách Thị Trang ~4,4 triệu đồng/m², đường Nguyễn Ái Quốc ~2,9 triệu đồng/m², đường Trần Phú ~800.000 đồng/m², các tuyến nội bộ 840.000–1,6 triệu đồng/m². Đây là giá nhà nước dùng tính thuế, không phải giá giao dịch thị trường.",
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
    { "@type": "ListItem", position: 3, name: "Giá đất Nhơn Trạch 2026", item: PAGE_URL },
  ],
};

// ─────────────────────────────────────────────────────────────
// Lightbox images
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS6["1"], alt: "Toàn cảnh khu vực Nhơn Trạch Đồng Nai năm 2026",         caption: "Toàn cảnh khu vực Nhơn Trạch, Đồng Nai năm 2026" },
  { src: IMG_NEWS6["2"], alt: "Thị trường đất nền Nhơn Trạch năm 2026",                  caption: "Thị trường đất nền Nhơn Trạch 2026" },
  { src: IMG_NEWS6["3"], alt: "Hạ tầng giao thông tại Nhơn Trạch Đồng Nai",              caption: "Hạ tầng giao thông Nhơn Trạch, Đồng Nai" },
  { src: IMG_NEWS6["4"], alt: "Sân bay Long Thành và khu vực lân cận",                   caption: "Sân bay quốc tế Long Thành" },
  { src: IMG_NEWS6["5"], alt: "Dự án Mega City 2 tại Nhơn Trạch Đồng Nai",               caption: "Dự án Mega City 2 tại Nhơn Trạch" },
  { src: IMG_NEWS6["6"], alt: "Khu dân cư phát triển tại Nhơn Trạch",                    caption: "Khu dân cư phát triển tại Nhơn Trạch" },
  { src: IMG_NEWS6["7"], alt: "Bản đồ quy hoạch khu vực Nhơn Trạch năm 2026",            caption: "Quy hoạch khu vực Nhơn Trạch 2026" },
];

// ─────────────────────────────────────────────────────────────
// Reusable sub-components
// ─────────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-primary-400 scroll-mt-24">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-8">{children}</h3>;
}

function BulletList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="space-y-2.5 pl-0 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-700 text-[16px] leading-relaxed">
          <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0 mt-[9px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const styles = type === "warn"
    ? "bg-amber-50 border-amber-200 text-amber-800"
    : "bg-primary-50 border-primary-200 text-primary-800";
  return (
    <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${styles}`}>
      {children}
    </div>
  );
}

function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200
               text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl
               hover:bg-primary-100 transition-all">
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function GiaDatNhonTrach2026Page() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}

      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero header ── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">Giá đất Nhơn Trạch 2026</span>
            </nav>

            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Thị trường
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 12 phút đọc</span>
            </div>

            {/* H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Giá đất Nhơn Trạch 2026: Thị trường đang diễn biến như thế nào?
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Cập nhật bảng giá đất Nhơn Trạch theo quy định mới nhất, giá thực tế thị trường,
              các khu vực tiềm năng và những yếu tố cần đánh giá trước khi đầu tư bất động sản
              tại Đồng Nai năm 2026.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button" tabIndex={0} aria-label="Phóng to ảnh toàn cảnh Nhơn Trạch"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS6["1"]} alt="Toàn cảnh khu vực Nhơn Trạch Đồng Nai năm 2026"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors
                              flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90
                                backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Toàn cảnh khu vực Nhơn Trạch, Đồng Nai năm 2026
            </p>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Article ── */}
            <article className="flex-1 min-w-0 prose-none">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#tong-quan",    "1. Tổng quan thị trường đất Nhơn Trạch 2026"],
                    ["#bang-gia-nn",  "2. Bảng giá đất Nhơn Trạch theo quy định nhà nước"],
                    ["#gia-thi-truong","3. Giá đất thực tế Nhơn Trạch hiện nay"],
                    ["#khu-vuc",      "4. Các khu vực có tiềm năng tăng giá"],
                    ["#co-nen",       "5. Có nên đầu tư đất Nhơn Trạch 2026?"],
                    ["#mega-city-2",  "6. Mega City 2 trong bức tranh thị trường"],
                    ["#faq",          "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-primary-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Nhơn Trạch là một trong những khu vực bất động sản được quan tâm nhiều nhất tại
                vùng kinh tế trọng điểm phía Nam trong năm 2026. Nằm liền kề TP.HCM, được hưởng
                lợi từ loạt dự án hạ tầng lớn và đang trong giai đoạn đô thị hóa mạnh mẽ, giá
                đất Nhơn Trạch đang diễn biến phức tạp với nhiều phân khúc và khu vực khác nhau.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Bài viết này tổng hợp thông tin về bảng giá đất Nhơn Trạch theo quy định mới nhất
                của tỉnh Đồng Nai, giá giao dịch thực tế trên thị trường, các khu vực có tiềm
                năng đáng chú ý và những tiêu chí cần đánh giá trước khi đưa ra quyết định đầu tư.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý quan trọng:</strong> Thông tin trong bài được tổng hợp từ nguồn công khai
                và mang tính tham khảo. Giá giao dịch thực tế có thể khác biệt đáng kể. Trước khi
                ra quyết định đầu tư, cần xác nhận pháp lý và giá cụ thể của từng lô đất.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">Tổng quan thị trường đất Nhơn Trạch 2026</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Huyện Nhơn Trạch (tỉnh Đồng Nai) từ lâu đã được xác định là một trong những
                    khu vực phát triển trọng điểm phía Nam theo định hướng quy hoạch vùng. Với
                    diện tích khoảng 410 km², Nhơn Trạch tiếp giáp trực tiếp với TP.HCM qua
                    sông Đồng Nai và các tuyến giao thông huyết mạch.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Thị trường bất động sản Nhơn Trạch 2026 đang chịu tác động từ nhiều yếu tố
                    vĩ mô và hạ tầng. Một số điểm nổi bật:
                  </p>
                  <BulletList items={[
                    "Sân bay quốc tế Long Thành đang xây dựng giai đoạn 1 (công suất 25 triệu hành khách/năm), cách trung tâm Nhơn Trạch khoảng 15–20 km",
                    "Dự án cầu Cát Lái (nối Nhơn Trạch – Quận 2 TP.HCM) đang trong kế hoạch triển khai, dự kiến rút ngắn thời gian di chuyển còn 15–20 phút",
                    "Cao tốc Bến Lức – Long Thành đang hoàn thiện, kết nối vùng kinh tế trọng điểm",
                    "Hệ thống 6 khu công nghiệp Nhơn Trạch (1–6) đang hoạt động, thu hút hàng chục nghìn lao động và chuyên gia",
                    "Nhiều dự án khu dân cư quy mô lớn được triển khai, trong đó có Mega City 2 (~83,94 ha)",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Những yếu tố trên tạo ra áp lực tăng cầu nhà ở và đất ở tại khu vực, đồng thời
                    thu hút dòng tiền đầu tư bất động sản từ TP.HCM và các tỉnh lân cận. Tuy nhiên,
                    mức độ tác động thực tế còn phụ thuộc vào tiến độ triển khai các dự án hạ tầng.
                  </p>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS6["2"]} alt="Thị trường đất nền Nhơn Trạch năm 2026"
                caption="Thị trường đất nền Nhơn Trạch đang thu hút nhiều nhà đầu tư năm 2026"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="bang-gia-nn">Bảng giá đất Nhơn Trạch theo quy định nhà nước 2026</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo bảng giá đất mới của tỉnh Đồng Nai áp dụng từ ngày 01/01/2026, nhiều
                    tuyến đường và khu vực tại Nhơn Trạch được cập nhật khung giá mới. Bảng giá
                    này được ban hành theo quy định của Luật Đất đai 2024 và là cơ sở để:
                  </p>
                  <BulletList items={[
                    "Tính thuế thu nhập cá nhân khi chuyển nhượng quyền sử dụng đất",
                    "Tính lệ phí trước bạ khi đăng ký sang tên",
                    "Xác định giá đất khi bồi thường giải phóng mặt bằng",
                    "Tính các loại thuế, phí liên quan đến đất đai",
                  ]} />

                  <InfoBox type="warn">
                    <strong>Phân biệt hai loại giá đất:</strong> Bảng giá đất nhà nước (giá quy định)
                    thường thấp hơn nhiều so với giá thị trường. Giá giao dịch thực tế trên thị
                    trường mới phản ánh đúng giá trị bất động sản.
                  </InfoBox>

                  <H3>Giá đất một số tuyến đường tại Nhơn Trạch (tham khảo)</H3>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-600 text-white">
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Tuyến đường / Khu vực</th>
                          <th className="text-right px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Giá tham khảo</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Đường Quách Thị Trang", "~4,4 triệu đồng/m²"],
                          ["Đường Nguyễn Ái Quốc",  "~2,9 triệu đồng/m²"],
                          ["Đường Trần Phú",         "~800.000 đồng/m²"],
                          ["Các tuyến đường nội bộ", "840.000 – 1,6 triệu đồng/m²"],
                          ["Khu đô thị, dự án quy hoạch", "Theo bảng giá riêng"],
                        ].map(([area, price], i) => (
                          <tr key={area} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-5 py-3.5 text-slate-700 font-medium">{area}</td>
                            <td className="px-5 py-3.5 text-primary-700 font-bold text-right tabular-nums">{price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100">
                      <p className="text-[11px] text-slate-400">
                        * Số liệu tham khảo từ bảng giá đất tỉnh Đồng Nai 2026. Giá nhà nước dùng để
                        tính thuế phí, không phải giá giao dịch thị trường.
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cần lưu ý rằng bảng giá nhà nước thường được xây dựng bảo thủ và thường thấp
                    hơn nhiều so với giá giao dịch thực tế. Tại các khu vực đang phát triển mạnh
                    như xã Nhơn Trạch (dọc đường 25C, gần khu công nghiệp), giá thị trường có
                    thể cao gấp nhiều lần giá nhà nước.
                  </p>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS6["3"]} alt="Hạ tầng giao thông tại Nhơn Trạch Đồng Nai"
                caption="Hạ tầng giao thông khu vực Nhơn Trạch đang được đầu tư mạnh mẽ"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="gia-thi-truong">Giá đất thực tế Nhơn Trạch hiện nay</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khảo sát từ các kênh giao dịch bất động sản cho thấy giá đất thực tế tại
                    Nhơn Trạch dao động khá lớn tùy theo vị trí, loại đất và tiện ích xung quanh.
                    Dưới đây là mức tham khảo theo từng phân khúc:
                  </p>

                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-800 text-white">
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Loại hình</th>
                          <th className="text-center px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Giá tham khảo</th>
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide hidden md:table-cell">Ghi chú</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Đất vườn (đất nông nghiệp)",  "2 – 8 triệu đồng/m²",   "Tùy vị trí, tiếp giáp đường"],
                          ["Đất thổ cư",                  "10 – 25 triệu đồng/m²",  "Có hạ tầng, gần đường lớn"],
                          ["Đất nền dự án quy hoạch",     "15 – 35 triệu đồng/m²",  "Có pháp lý, hạ tầng đồng bộ"],
                          ["Nhà phố dự án (đất + nhà)",   "Từ 25 triệu đồng/m² sàn","Tùy loại sản phẩm và dự án"],
                          ["Đất mặt tiền đường lớn",      "20 – 50 triệu đồng/m²",  "Đường 25C và các trục chính"],
                        ].map(([type, price, note], i) => (
                          <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-5 py-3.5 font-semibold text-slate-700">{type}</td>
                            <td className="px-5 py-3.5 font-black text-primary-700 text-center tabular-nums">{price}</td>
                            <td className="px-5 py-3.5 text-slate-500 text-xs hidden md:table-cell">{note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100">
                      <p className="text-[11px] text-slate-400">
                        * Giá tham khảo thị trường 2026, tổng hợp từ nhiều nguồn. Giá thực tế phụ thuộc vị trí, pháp lý và thời điểm giao dịch.
                      </p>
                    </div>
                  </div>

                  <H3>Những yếu tố tác động đến mức giá</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Giá đất tại Nhơn Trạch không đồng đều giữa các khu vực. Mức chênh lệch
                    có thể lên đến 5–10 lần giữa đất vườn xa trung tâm và đất nền dự án quy
                    hoạch có hạ tầng. Các yếu tố chính ảnh hưởng đến định giá:
                  </p>
                  <BulletList items={[
                    "Vị trí: khoảng cách đến đường lớn, đường 25C, khu công nghiệp, trung tâm thương mại",
                    "Pháp lý: đất đã có sổ hồng riêng, sổ hồng có điều kiện hay đang trong quy trình",
                    "Hạ tầng nội khu: đường nhựa, điện, nước, viễn thông đã hoàn thiện chưa",
                    "Mật độ dân cư: khu vực đã có cư dân ở hay còn thưa thớt",
                    "Quy hoạch: nằm trong khu dân cư quy hoạch hay đất tự phát",
                    "Tiện ích xung quanh: trường học, bệnh viện, chợ, siêu thị trong bán kính 2–5 km",
                  ]} />
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS6["4"]} alt="Sân bay Long Thành và khu vực lân cận"
                caption="Sân bay quốc tế Long Thành — động lực phát triển hạ tầng khu vực phía Nam"
                images={images} index={3} onOpen={openLightbox} />

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="khu-vuc">Các khu vực có tiềm năng tăng giá tại Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-8">

                  <H3>1. Khu vực gần sân bay Long Thành</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sân bay quốc tế Long Thành nằm tại huyện Long Thành, cách khu vực trung tâm
                    Nhơn Trạch khoảng 15–20 km. Với công suất giai đoạn 1 là 25 triệu hành
                    khách/năm, dự án này đang tạo ra làn sóng kỳ vọng mạnh mẽ trong giới đầu tư.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Kinh nghiệm từ các sân bay quốc tế lớn cho thấy bất động sản trong bán
                    kính 20–30 km thường có xu hướng tăng giá khi sân bay đi vào hoạt động,
                    do nhu cầu nhà ở từ phi hành đoàn, nhân viên hàng không, chuyên gia và
                    các ngành dịch vụ liên quan.
                  </p>
                  <InfoBox>
                    Đây là yếu tố dài hạn và không phải cam kết về tăng giá. Tiến độ sân bay
                    phụ thuộc vào quyết định của cơ quan có thẩm quyền.{" "}
                    <a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach"
                      className="font-bold text-primary-700 underline">
                      Đọc thêm: Sân bay Long Thành và BĐS Nhơn Trạch →
                    </a>
                  </InfoBox>

                  <H3>2. Khu vực dọc đường 25C</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đường 25C là trục giao thông huyết mạch kết nối Nhơn Trạch với TP.HCM và
                    Long Thành. Bất động sản mặt tiền hoặc trong bán kính gần đường 25C thường
                    có giá cao hơn đáng kể so với đất sâu trong nội địa nhờ lợi thế tiếp cận
                    và khả năng kinh doanh thương mại.
                  </p>
                  <BulletList items={[
                    "Kết nối trực tiếp TP.HCM (30–35 km) và Long Thành (gần sân bay)",
                    "Hạ tầng đường đã hoàn chỉnh, mặt đường rộng phù hợp giao thương",
                    "Các dự án khu dân cư lớn như Mega City 2 có mặt tiền trực tiếp đường 25C",
                  ]} />

                  <H3>3. Khu vực gần cầu Cát Lái (khi hoàn thành)</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu dự án cầu Cát Lái được triển khai đúng tiến độ, khoảng cách di chuyển
                    từ Nhơn Trạch sang Quận 2 – Thủ Đức (TP.HCM) rút ngắn còn 15–20 phút.
                    Đây có thể là yếu tố thay đổi cục diện thị trường bất động sản khu vực.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Phà Cát Lái hiện là phương án kết nối phổ biến, mất khoảng 25–35 phút.
                    Khi cầu hoàn thành, tiện ích di chuyển tăng lên đáng kể, tác động trực
                    tiếp đến nhu cầu ở thực và đầu tư của người làm việc tại TP.HCM.
                  </p>

                  <H3>4. Khu vực các dự án đô thị quy hoạch đồng bộ</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khác với đất tự phát, các dự án có quy hoạch 1/500 được phê duyệt và hạ
                    tầng đồng bộ thường có lợi thế rõ ràng về pháp lý, tiện ích và khả năng
                    thanh khoản. Khi đánh giá dự án khu đô thị tại Nhơn Trạch, cần xem xét:
                  </p>
                  <BulletList items={[
                    "Quy hoạch 1/500 đã được phê duyệt hay chưa",
                    "Hạ tầng nội khu (đường nhựa, điện, nước, cây xanh) đã hoàn thiện ở mức nào",
                    "Pháp lý: sổ hồng riêng từng lô hay đang xử lý",
                    "Tiện ích: trường học, y tế, thương mại trong quy hoạch và thực tế",
                    "Mật độ xây dựng và quy mô dự án",
                  ]} />
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS6["5"]} alt="Dự án Mega City 2 tại Nhơn Trạch Đồng Nai"
                caption="Dự án Mega City 2 tại xã Nhơn Trạch — một trong những dự án đất nền lớn nhất khu vực"
                images={images} index={4} onOpen={openLightbox} />

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="co-nen">Có nên đầu tư đất Nhơn Trạch trong năm 2026?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không có một câu trả lời chung cho tất cả nhà đầu tư. Quyết định đầu tư
                    phụ thuộc vào chiến lược tài chính cá nhân, khẩu vị rủi ro và mục tiêu
                    đầu tư dài hạn hay ngắn hạn.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dưới đây là một số tiêu chí cần đánh giá kỹ trước khi ra quyết định:
                  </p>

                  <H3>Đánh giá pháp lý</H3>
                  <BulletList items={[
                    "Quyết định phê duyệt quy hoạch: dự án đã có quy hoạch 1/500 được cấp có thẩm quyền phê duyệt chưa?",
                    "Tình trạng sổ hồng: đã có GCN riêng từng lô hay chưa? Nếu có điều kiện kèm theo là gì?",
                    "Văn bản pháp lý liên quan: quyết định chủ trương đầu tư, giấy phép xây dựng hạ tầng",
                    "Nghĩa vụ tài chính: chủ đầu tư đã hoàn thành nghĩa vụ tài chính với nhà nước chưa?",
                  ]} />

                  <H3>Đánh giá hạ tầng và kết nối</H3>
                  <BulletList items={[
                    "Hạ tầng nội khu đã hoàn thiện ở mức nào (đường, điện, nước, viễn thông)?",
                    "Khoảng cách và thời gian di chuyển thực tế đến TP.HCM theo các tuyến đường hiện hữu",
                    "Tiện ích xã hội lân cận: trường học, bệnh viện, siêu thị trong bán kính hợp lý",
                    "Tuyến đường kết nối có hay không trong quy hoạch giao thông khu vực",
                  ]} />

                  <H3>Đánh giá khả năng thanh khoản</H3>
                  <BulletList items={[
                    "Mật độ dân cư hiện tại trong khu vực: đã có cư dân về ở hay còn vắng vẻ?",
                    "Nhu cầu ở thực của khu vực: có đủ điều kiện sinh sống không (chợ, trường học gần)?",
                    "Lịch sử giao dịch: khu vực có thanh khoản tốt không, thời gian bán lại trung bình?",
                    "So sánh với các khu vực lân cận: giá có hợp lý so với tiện ích và pháp lý cùng phân khúc?",
                  ]} />

                  <InfoBox>
                    <strong>Lời khuyên thực tế:</strong> Tham quan thực địa trước khi quyết định. Xem
                    trực tiếp hạ tầng hiện trạng, hỏi người dân xung quanh, kiểm tra pháp lý với
                    cơ quan đất đai địa phương và đánh giá khả năng tài chính cá nhân.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat">Xem quy hoạch Nhơn Trạch mới nhất →</LinkBtn>
                    <LinkBtn href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach">Sân bay Long Thành & BĐS Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS6["6"]} alt="Khu dân cư phát triển tại Nhơn Trạch"
                caption="Khu dân cư đang phát triển mạnh tại Nhơn Trạch, Đồng Nai"
                images={images} index={5} onOpen={openLightbox} />

              {/* Section 6 — Mega City 2 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Mega City 2 trong bức tranh thị trường đất Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong số các dự án đất nền quy mô lớn tại Nhơn Trạch hiện nay,{" "}
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">
                      Mega City 2
                    </a>{" "}
                    là một trong những dự án được quan tâm nhất nhờ quy mô ~83,94 ha,
                    pháp lý được công bố rõ ràng và hạ tầng đã hoàn thiện phần lớn.
                  </p>

                  <H3>Một số thông tin chính về Mega City 2</H3>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-4">
                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Vị trí",             "Đường 25C, xã Nhơn Trạch, tỉnh Đồng Nai"],
                          ["Quy mô",             "~83,94 ha"],
                          ["Chủ đầu tư",         "Công ty TNHH Khu đô thị Phú Hội"],
                          ["Đơn vị phát triển",  "Kim Oanh Group"],
                          ["Pháp lý",            "QĐ 1772/QĐ-UBND ngày 30/05/2025 — 2.421 lô phân lô bán nền"],
                          ["Giá tham khảo",      "Từ 1,15 tỷ/nền (~12–15 triệu đồng/m²)"],
                          ["Tiến độ hạ tầng",    "~95% (theo thông tin công bố 06/2025)"],
                        ].map(([k, v], i) => (
                          <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-5 py-3 font-semibold text-slate-600 w-44 text-xs uppercase tracking-wide">{k}</td>
                            <td className="px-5 py-3 text-slate-800">{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <H3>Giá Mega City 2 so với mặt bằng khu vực</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với mức giá chuyển nhượng tham khảo từ khoảng 1,15 tỷ/nền (diện tích ~90 m²,
                    tương đương 12–15 triệu đồng/m²), Mega City 2 nằm trong phân khúc đất nền
                    dự án quy hoạch của khu vực. Mức giá này cao hơn đất vườn nông nghiệp nhưng
                    có lợi thế rõ ràng về pháp lý, hạ tầng và quy hoạch đồng bộ.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Điểm đáng chú ý là dự án đã được UBND tỉnh Đồng Nai ban hành Quyết định
                    1772/QĐ-UBND ngày 30/5/2025 chấp thuận 2.421 lô đủ điều kiện chuyển nhượng
                    theo hình thức phân lô bán nền — đây là nền tảng pháp lý rõ ràng hiếm thấy
                    ở nhiều dự án khác trong khu vực.
                  </p>

                  <H3>Các loại sản phẩm và mức giá tham khảo</H3>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-600 text-white">
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase">Loại sản phẩm</th>
                          <th className="text-center px-5 py-3.5 text-xs font-bold uppercase">Diện tích</th>
                          <th className="text-right px-5 py-3.5 text-xs font-bold uppercase">Giá tham khảo</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Nhà vườn liên kế TH", "90–120 m²", "1,15 – 1,8 tỷ/nền"],
                          ["Nhà phố liên kế T",   "80–160 m²", "1,3 – 3,5 tỷ/nền"],
                          ["Biệt thự song lập V", "150–200 m²","3,0 – 4,0 tỷ/nền"],
                          ["Nhà xây sẵn",         "Tùy lô",    "Từ 4 tỷ/căn"],
                        ].map(([type, area, price], i) => (
                          <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-5 py-3.5 font-semibold text-slate-700">{type}</td>
                            <td className="px-5 py-3.5 text-center text-slate-600">{area}</td>
                            <td className="px-5 py-3.5 text-right font-bold text-primary-700 tabular-nums">{price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100">
                      <p className="text-[11px] text-slate-400">* Giá chuyển nhượng tham khảo từ nguồn thị trường 05/2026. Cần xác nhận giá thực tế khi giao dịch.</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Tổng quan dự án Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá chi tiết →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý dự án →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí dự án →</LinkBtn>
                    <LinkBtn href="/mega-city-2/tien-do">Tiến độ xây dựng →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS6["7"]} alt="Bản đồ quy hoạch khu vực Nhơn Trạch năm 2026"
                caption="Bản đồ quy hoạch và phân khu phát triển khu vực Nhơn Trạch năm 2026"
                images={images} index={6} onOpen={openLightbox} />

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về giá đất Nhơn Trạch 2026</SectionHeading>
                <div className="pt-5 space-y-3">
                  {[
                    {
                      q: "Giá đất Nhơn Trạch năm 2026 có tăng không?",
                      a: "Giá đất tại Nhơn Trạch phụ thuộc vào nhiều yếu tố như hạ tầng, quy hoạch và nhu cầu thị trường. Khu vực đang có nhiều dự án hạ tầng lớn (sân bay Long Thành, cầu Cát Lái, cao tốc) được kỳ vọng tác động tích cực đến thị trường bất động sản trong dài hạn. Tuy nhiên, biến động giá thực tế còn phụ thuộc tiến độ triển khai và cung cầu từng thời điểm.",
                    },
                    {
                      q: "Giá đất Nhơn Trạch hiện nay là bao nhiêu?",
                      a: "Giá đất tại Nhơn Trạch dao động rộng từ 2 đến hơn 35 triệu đồng/m² tùy loại hình và vị trí. Đất vườn nông nghiệp tham khảo 2–8 triệu đồng/m², đất thổ cư 10–25 triệu đồng/m², đất nền dự án quy hoạch 15–35 triệu đồng/m². Đất mặt tiền đường 25C và các trục chính có thể cao hơn nhiều.",
                    },
                    {
                      q: "Có nên đầu tư đất Nhơn Trạch trong năm 2026 không?",
                      a: "Nhơn Trạch có tiềm năng dài hạn nhờ vị trí chiến lược và nhiều dự án hạ tầng đang triển khai. Tuy nhiên, nhà đầu tư cần đánh giá kỹ pháp lý từng lô, xác nhận quy hoạch, kiểm tra hạ tầng thực tế và cân nhắc khả năng thanh khoản trước khi quyết định.",
                    },
                    {
                      q: "Dự án Mega City 2 ảnh hưởng thế nào đến thị trường đất Nhơn Trạch?",
                      a: "Mega City 2 (~83,94 ha, 2.421 lô được chấp thuận phân lô bán nền) là một trong những dự án quy mô và có nền tảng pháp lý rõ nhất tại Nhơn Trạch. Giá tham khảo từ 1,15 tỷ/nền (12–15 triệu đồng/m²) phản ánh mặt bằng giá đất nền dự án có quy hoạch tại khu vực.",
                    },
                    {
                      q: "Bảng giá đất Nhơn Trạch theo quy định nhà nước là bao nhiêu?",
                      a: "Theo bảng giá đất tỉnh Đồng Nai áp dụng từ 01/01/2026, các tuyến đường tại Nhơn Trạch có khung giá từ 800.000 đến 4,4 triệu đồng/m² tùy tuyến đường. Đây là giá dùng để tính thuế phí, thấp hơn nhiều so với giá giao dịch thực tế trên thị trường.",
                    },
                  ].map(({ q, a }) => (
                    <details key={q} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary-200 transition-colors">
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-primary-700 select-none">
                        <span className="leading-snug">{q}</span>
                        <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-primary-600 transition-transform group-open:rotate-180 text-xs">▼</span>
                      </summary>
                      <div className="px-6 pb-5 border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-[16px] leading-relaxed">{a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài viết được tổng hợp từ nguồn công khai và mang tính tham khảo.
                  Website này không phải trang chính thức của cơ quan nhà nước hay chủ đầu tư.
                  Giá đất, bảng giá và thông tin quy hoạch có thể thay đổi. Trước khi ra quyết
                  định đầu tư, cần xác nhận thông tin với cơ quan có thẩm quyền và tư vấn pháp lý.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu Mega City 2</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/mega-city-2",           label: "Tổng quan dự án" },
                      { href: "/mega-city-2/bang-gia",  label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/vi-tri",    label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",   label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/mat-bang",  label: "Mặt bằng sản phẩm" },
                      { href: "/mega-city-2/hinh-anh",  label: "Hình ảnh thực tế" },
                      { href: "/mega-city-2/faq",       label: "FAQ dự án" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600
                                   hover:text-primary-600 hover:translate-x-1 transition-all px-3 py-2
                                   rounded-xl hover:bg-white">
                        <span>{l.label}</span>
                        <span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn miễn phí</p>
                  <p className="text-primary-200 text-xs mb-4">Nhận thông tin bảng giá, pháp lý và hỗ trợ chọn lô phù hợp.</p>
                  <a href="tel:0937587438"
                    className="block text-center bg-white text-primary-700 font-bold text-sm
                               px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-colors">
                    0937.587.438
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-primary-50 border-t border-primary-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Tìm hiểu thêm về Mega City 2</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Xem thông tin về vị trí, pháp lý, bảng giá, tiến độ và hình ảnh thực tế của
              dự án Mega City 2 tại xã Nhơn Trạch, tỉnh Đồng Nai.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700
                           text-white font-bold px-7 py-3.5 rounded-full shadow-md
                           transition-all hover:scale-105 text-sm">
                Khám phá dự án →
              </a>
              <a href="tel:0937587438"
                className="inline-flex items-center gap-2 border-2 border-primary-600
                           text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5
                           rounded-full transition-all text-sm">
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            { href: "/mega-city-2",                        title: "Mega City 2 Nhơn Trạch – Tổng quan dự án",         description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá dự án Mega City 2.", tag: "Dự án" },
            { href: "/mega-city-2/bang-gia",               title: "Bảng giá Mega City 2 chi tiết 2026",               description: "Giá chuyển nhượng tham khảo theo từng block, loại sản phẩm và vị trí lô.", tag: "Bảng giá" },
            { href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat", title: "Quy hoạch Nhơn Trạch mới nhất",              description: "Cập nhật quy hoạch phát triển đô thị Nhơn Trạch và tác động đến BĐS.", tag: "Quy hoạch" },
            { href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach", title: "Sân bay Long Thành & BĐS Nhơn Trạch", description: "Phân tích tác động sân bay quốc tế Long Thành đến thị trường đất Nhơn Trạch.", tag: "Sân bay" },
            { href: "/mega-city-2/phap-ly",                title: "Pháp lý Mega City 2 – QĐ 1772/QĐ-UBND",           description: "Chi tiết tình trạng pháp lý và điều kiện giao dịch tại Mega City 2.", tag: "Pháp lý" },
            { href: "/mega-city-2/vi-tri",                 title: "Vị trí dự án Mega City 2 Nhơn Trạch",             description: "Phân tích vị trí chiến lược: cách TP.HCM, sân bay Long Thành và kết nối vùng.", tag: "Vị trí" },
          ]}
        />

      </div>

      <CorpFooter />
    </>
  );
}
