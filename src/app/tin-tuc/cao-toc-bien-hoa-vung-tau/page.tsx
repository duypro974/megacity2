"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS9 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/cao-toc-bien-hoa-vung-tau`;
const PUBLISHED     = "17/08/2026";
const PUBLISHED_ISO = "2026-08-17";

// ─────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cao tốc Biên Hòa - Vũng Tàu tác động như thế nào đến bất động sản Nhơn Trạch?",
  description: "Tìm hiểu tác động của cao tốc Biên Hòa - Vũng Tàu đến thị trường bất động sản Nhơn Trạch. Phân tích hạ tầng, kết nối giao thông và tiềm năng tăng giá trong tương lai.",
  image: [IMG_NEWS9["1"], IMG_NEWS9["2"], IMG_NEWS9["3"]],
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
  keywords: "cao tốc Biên Hòa Vũng Tàu, cao tốc Biên Hòa Vũng Tàu Nhơn Trạch, bất động sản Nhơn Trạch, hạ tầng Nhơn Trạch, giá đất Nhơn Trạch, Mega City 2 Nhơn Trạch",
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
      name: "Cao tốc Biên Hòa - Vũng Tàu có đi qua Nhơn Trạch không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuyến cao tốc Biên Hòa - Vũng Tàu kết nối khu vực Biên Hòa (Đồng Nai) với Bà Rịa - Vũng Tàu, tăng khả năng kết nối vùng kinh tế Đông Nam Bộ. Nhơn Trạch nằm trong hành lang hưởng lợi từ hệ thống kết nối vùng này cùng với các tuyến đường 25C, cao tốc TP.HCM - Long Thành và Vành đai 3.",
      },
    },
    {
      "@type": "Question",
      name: "Cao tốc Biên Hòa - Vũng Tàu có làm tăng giá đất Nhơn Trạch không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hạ tầng giao thông thường là một trong những yếu tố tác động đến giá trị bất động sản. Tuy nhiên, mức độ ảnh hưởng còn phụ thuộc vào vị trí cụ thể, tiến độ triển khai, pháp lý và nhiều yếu tố thị trường khác. Nhà đầu tư cần đánh giá tổng thể trước khi quyết định.",
      },
    },
    {
      "@type": "Question",
      name: "Có nên đầu tư bất động sản Nhơn Trạch trong giai đoạn hiện nay không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà đầu tư nên đánh giá kỹ vị trí, pháp lý, quy hoạch và tiềm năng phát triển trước khi đưa ra quyết định. Nhơn Trạch có nhiều yếu tố hạ tầng hỗ trợ dài hạn nhưng mỗi sản phẩm cụ thể cần được xem xét riêng về tính pháp lý và khả năng thanh khoản.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có được hưởng lợi từ cao tốc Biên Hòa - Vũng Tàu không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mega City 2 nằm trên đường 25C tại Nhơn Trạch, khu vực được hưởng lợi từ hệ thống hạ tầng vùng bao gồm sân bay Long Thành, cao tốc Biên Hòa - Vũng Tàu và Vành đai 3. Dự án có quy hoạch 1/500 phê duyệt và QĐ 1772/QĐ-UBND chấp thuận 2.421 lô phân lô bán nền.",
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
    { "@type": "ListItem", position: 3, name: "Cao tốc Biên Hòa - Vũng Tàu và BĐS Nhơn Trạch", item: PAGE_URL },
  ],
};

// ─────────────────────────────────────────────────────────────
// Lightbox images
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS9["1"], alt: "Toàn cảnh dự án cao tốc Biên Hòa - Vũng Tàu",                        caption: "Toàn cảnh dự án cao tốc Biên Hòa - Vũng Tàu" },
  { src: IMG_NEWS9["2"], alt: "Bản đồ kết nối cao tốc Biên Hòa - Vũng Tàu với khu vực Nhơn Trạch", caption: "Kết nối cao tốc Biên Hòa - Vũng Tàu với Nhơn Trạch" },
  { src: IMG_NEWS9["3"], alt: "Hạ tầng giao thông tại huyện Nhơn Trạch, Đồng Nai",                  caption: "Hạ tầng giao thông khu vực Nhơn Trạch, Đồng Nai" },
  { src: IMG_NEWS9["4"], alt: "Phối cảnh dự án Mega City 2 tại Nhơn Trạch",                          caption: "Phối cảnh dự án Mega City 2 Nhơn Trạch" },
];

// ─────────────────────────────────────────────────────────────
// Sub-components
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
    <ul className="space-y-2.5 mb-4">
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
  const s = type === "warn"
    ? "bg-amber-50 border-amber-200 text-amber-800"
    : "bg-primary-50 border-primary-200 text-primary-800";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200
               text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function CaoTocBienHoaVungTauPage() {
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
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">Cao tốc Biên Hòa - Vũng Tàu</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Hạ tầng</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 9 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Cao tốc Biên Hòa - Vũng Tàu tác động như thế nào đến bất động sản Nhơn Trạch?
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Tìm hiểu tác động của cao tốc Biên Hòa - Vũng Tàu đến thị trường bất động sản
              Nhơn Trạch. Phân tích hạ tầng, kết nối giao thông và tiềm năng trong tương lai.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh cao tốc Biên Hòa - Vũng Tàu"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS9["1"]} alt="Toàn cảnh dự án cao tốc Biên Hòa - Vũng Tàu"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Toàn cảnh dự án cao tốc Biên Hòa - Vũng Tàu — tuyến giao thông trọng điểm khu vực Đông Nam Bộ
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
                    ["#tong-quan",     "1. Tổng quan về cao tốc Biên Hòa - Vũng Tàu"],
                    ["#khoang-cach",   "2. Nhơn Trạch và hệ thống giao thông kết nối"],
                    ["#anh-huong-gia", "3. Cao tốc ảnh hưởng đến giá đất Nhơn Trạch"],
                    ["#khu-vuc",       "4. Những khu vực được hưởng lợi tại Nhơn Trạch"],
                    ["#tiem-nang",     "5. Tiềm năng đầu tư bất động sản Nhơn Trạch"],
                    ["#mega-city-2",   "6. Mega City 2 trong bức tranh hạ tầng vùng"],
                    ["#faq",           "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Trong những năm gần đây, hạ tầng giao thông đang trở thành một trong những yếu tố
                quan trọng thúc đẩy sự phát triển của thị trường bất động sản tại Đồng Nai. Trong
                đó, dự án cao tốc Biên Hòa - Vũng Tàu được xem là một trong những công trình giao
                thông trọng điểm, góp phần tăng khả năng kết nối giữa Đồng Nai, Bà Rịa - Vũng Tàu
                và nhiều khu vực kinh tế trọng điểm phía Nam.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Sự xuất hiện của tuyến cao tốc này không chỉ giúp rút ngắn thời gian di chuyển mà
                còn tạo ra những tác động đáng kể đối với thị trường bất động sản Nhơn Trạch — khu
                vực nằm trong hành lang hưởng lợi trực tiếp từ hệ thống giao thông vùng đang được
                đầu tư mạnh mẽ.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin trong bài được tổng hợp từ nguồn công khai và mang
                tính tham khảo. Tiến độ và tác động thực tế của các dự án hạ tầng phụ thuộc vào
                quyết định của cơ quan có thẩm quyền. Trước khi đầu tư, cần xác nhận pháp lý
                cụ thể từng sản phẩm.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">Tổng quan về cao tốc Biên Hòa - Vũng Tàu</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cao tốc Biên Hòa - Vũng Tàu là dự án giao thông quan trọng kết nối tỉnh Đồng
                    Nai với tỉnh Bà Rịa - Vũng Tàu. Tuyến đường được kỳ vọng sẽ góp phần giảm áp
                    lực cho Quốc lộ 51 — trục đường huyết mạch hiện đang quá tải — đồng thời tăng
                    cường khả năng lưu thông hàng hóa giữa các khu công nghiệp, cảng biển và khu
                    đô thị trong khu vực kinh tế trọng điểm phía Nam.
                  </p>

                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm my-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-600 text-white">
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide w-44">Thông tin</th>
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Chi tiết</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Tên dự án",     "Cao tốc Biên Hòa - Vũng Tàu"],
                          ["Kết nối",       "Biên Hòa (Đồng Nai) – Bà Rịa - Vũng Tàu"],
                          ["Chiều dài",     "Khoảng 53,7 km"],
                          ["Vai trò",       "Giảm tải Quốc lộ 51, tăng kết nối cảng biển và khu công nghiệp"],
                          ["Khu vực lân cận hưởng lợi", "Nhơn Trạch, Long Thành, Biên Hòa, Bà Rịa - Vũng Tàu"],
                        ].map(([label, value], i) => (
                          <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-5 py-3.5 font-semibold text-slate-700">{label}</td>
                            <td className="px-5 py-3.5 text-slate-600">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <H3>Mục tiêu chính của dự án</H3>
                  <BulletList items={[
                    "Tăng khả năng kết nối giữa các địa phương trong vùng Đông Nam Bộ",
                    "Giảm tải áp lực giao thông trên Quốc lộ 51 — hiện là cửa ngõ chính ra vào cảng Cái Mép - Thị Vải",
                    "Hỗ trợ phát triển kinh tế vùng, đặc biệt hoạt động xuất nhập khẩu qua hệ thống cảng biển",
                    "Thúc đẩy quá trình đô thị hóa và phát triển khu công nghiệp dọc hành lang tuyến đường",
                    "Tạo động lực phát triển cho thị trường bất động sản khu vực lân cận",
                  ]} />

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là dự án nằm trong quy hoạch mạng lưới đường cao tốc quốc gia, được triển
                    khai theo hình thức đầu tư công. Khi hoàn thành, tuyến cao tốc này cùng với
                    sân bay Long Thành và Vành đai 3 TP.HCM sẽ tạo thành tam giác hạ tầng vùng
                    quan trọng cho khu vực Đông Nam Bộ.
                  </p>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS9["2"]} alt="Bản đồ kết nối cao tốc Biên Hòa - Vũng Tàu với khu vực Nhơn Trạch"
                caption="Bản đồ kết nối cao tốc Biên Hòa - Vũng Tàu với khu vực Nhơn Trạch, Đồng Nai"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="khoang-cach">Nhơn Trạch và hệ thống giao thông kết nối vùng</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch được đánh giá là một trong những khu vực hưởng lợi trực tiếp từ hệ
                    thống hạ tầng giao thông đang được đầu tư mạnh mẽ tại vùng Đông Nam Bộ. Không
                    chỉ có cao tốc Biên Hòa - Vũng Tàu, khu vực này còn được bao phủ bởi nhiều
                    tuyến kết nối quan trọng đang triển khai đồng thời:
                  </p>

                  <BulletList items={[
                    "Cao tốc TP. Hồ Chí Minh – Long Thành – Dầu Giây: trục kết nối huyết mạch TP.HCM – Đồng Nai đang khai thác",
                    "Đường Vành đai 3 TP. Hồ Chí Minh: tuyến vành đai quan trọng đang thi công đoạn qua Đồng Nai",
                    "Cao tốc Biên Hòa – Vũng Tàu: kết nối cảng Cái Mép - Thị Vải, giảm tải QL51",
                    "Đường 25C: trục nội vùng kết nối Nhơn Trạch với Long Thành và TP.HCM qua phà Cát Lái",
                    "Cầu Cát Lái (dự kiến): khi hoàn thành sẽ rút ngắn đến Quận 2 TP.HCM còn 15–20 phút",
                    "Sân bay quốc tế Long Thành: dự án hàng không trọng điểm quốc gia cách Nhơn Trạch ~18 km",
                  ]} />

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sự phát triển đồng bộ của hệ thống giao thông giúp việc di chuyển từ Nhơn Trạch
                    đến TP.HCM, sân bay Long Thành, cảng Cái Mép - Thị Vải và Biên Hòa ngày càng
                    thuận tiện hơn — đây là yếu tố quan trọng thu hút cả nhu cầu ở thực lẫn
                    dòng vốn đầu tư bất động sản.
                  </p>

                  <InfoBox>
                    Xem thêm phân tích vị trí và kết nối vùng:{" "}
                    <a href="/mega-city-2/vi-tri" className="font-bold text-primary-700 underline">
                      Vị trí Mega City 2 Nhơn Trạch →
                    </a>
                  </InfoBox>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí dự án →</LinkBtn>
                    <LinkBtn href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach">Sân bay Long Thành & BĐS Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS9["3"]} alt="Hạ tầng giao thông tại huyện Nhơn Trạch, Đồng Nai"
                caption="Hạ tầng giao thông đang được đầu tư đồng bộ tại huyện Nhơn Trạch, Đồng Nai"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="anh-huong-gia">Cao tốc Biên Hòa - Vũng Tàu ảnh hưởng đến giá đất Nhơn Trạch như thế nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong lĩnh vực bất động sản, hạ tầng giao thông thường là yếu tố tác động trực
                    tiếp đến giá trị của một khu vực. Khi hệ thống giao thông được cải thiện, khả
                    năng kết nối được nâng cao, nhu cầu sinh sống và đầu tư cũng có xu hướng gia
                    tăng theo. Tác động này thường diễn ra theo hai giai đoạn:
                  </p>

                  <H3>Giai đoạn 1: Kỳ vọng trước khi dự án hoàn thành</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi thông tin về dự án hạ tầng lớn được công bố và triển khai, thị trường
                    bất động sản lân cận thường phản ứng sớm. Một số tác động phổ biến:
                  </p>
                  <BulletList items={[
                    "Tăng sự quan tâm từ nhà đầu tư khu vực và nhà đầu tư từ TP.HCM",
                    "Gia tăng giao dịch đất nền tại các khu vực dọc hành lang tuyến đường",
                    "Hình thành kỳ vọng tăng giá trong dài hạn dựa trên tiến độ hạ tầng",
                    "Xuất hiện nguy cơ đầu cơ và thổi giá trong giai đoạn tin tức sốt nóng",
                  ]} />

                  <H3>Giai đoạn 2: Tác động thực tế sau khi hạ tầng hoàn thành</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi tuyến cao tốc đi vào khai thác chính thức, các tác động cụ thể và bền
                    vững hơn thường xuất hiện:
                  </p>
                  <BulletList items={[
                    "Tăng khả năng tiếp cận các khu vực kinh tế trọng điểm: cảng biển, khu công nghiệp, sân bay",
                    "Thu hút dân cư và chuyên gia đến sinh sống tại Nhơn Trạch do di chuyển thuận tiện hơn",
                    "Tạo điều kiện phát triển thương mại, dịch vụ và logistics khu vực",
                    "Nhu cầu nhà ở ở thực tăng từ lực lượng lao động khu công nghiệp và dịch vụ",
                    "Thúc đẩy quá trình đô thị hóa bền vững thay vì chỉ đầu cơ ngắn hạn",
                  ]} />

                  <InfoBox type="warn">
                    <strong>Lưu ý:</strong> Không phải khu vực nào cũng hưởng lợi đồng đều. Vị trí
                    cụ thể, pháp lý và quy hoạch từng lô đất quyết định rất lớn đến giá trị thực
                    tế. Nhà đầu tư không nên chỉ dựa vào yếu tố hạ tầng để ra quyết định.
                  </InfoBox>

                  <InfoBox>
                    Xem thêm phân tích giá đất chi tiết:{" "}
                    <a href="/tin-tuc/gia-dat-nhon-trach-2026" className="font-bold text-primary-700 underline">
                      Giá đất Nhơn Trạch 2026: Thị trường đang diễn biến như thế nào? →
                    </a>
                  </InfoBox>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="khu-vuc">Những khu vực tại Nhơn Trạch được hưởng lợi từ tuyến cao tốc</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không phải khu vực nào cũng được hưởng lợi như nhau từ sự phát triển của hạ
                    tầng giao thông. Mức độ tác động phụ thuộc vào khoảng cách đến nút giao, khả
                    năng tiếp cận tuyến đường và chất lượng quy hoạch khu vực. Những tiêu chí
                    quan trọng khi đánh giá một khu bất động sản tại Nhơn Trạch:
                  </p>
                  <BulletList items={[
                    "Nằm gần các trục đường lớn kết nối với tuyến cao tốc: đường 25C, QL51, đường 319",
                    "Thuộc khu vực quy hoạch đô thị hoặc khu dân cư đã được phê duyệt 1/500",
                    "Có hạ tầng nội khu hoàn chỉnh: đường nhựa, điện, nước, hạ tầng kỹ thuật",
                    "Pháp lý rõ ràng: có quyết định phân lô bán nền hoặc sổ hồng riêng từng lô",
                    "Tiện ích xung quanh: trường học, y tế, chợ, siêu thị trong bán kính 3–5 km",
                  ]} />

                  <H3>Trung tâm huyện Nhơn Trạch</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khu vực trung tâm hành chính huyện với đầy đủ tiện ích công cộng, dịch vụ
                    và kết nối giao thông tốt thường có giá cao nhất và thanh khoản tốt nhất
                    trong khu vực.
                  </p>

                  <H3>Khu vực dọc đường 25C</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đường 25C là trục huyết mạch nối Nhơn Trạch với Long Thành và sân bay,
                    đồng thời kết nối với hệ thống cao tốc vùng. Bất động sản dọc tuyến này
                    có lợi thế kép: vừa gần sân bay Long Thành vừa hưởng lợi từ cao tốc
                    Biên Hòa - Vũng Tàu qua các nút giao khu vực.
                  </p>

                  <H3>Các dự án khu đô thị có quy hoạch bài bản</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khác với đất tự phát hoặc đất nông nghiệp chưa chuyển đổi, các khu đô thị
                    có quy hoạch chi tiết được phê duyệt thường có đủ điều kiện pháp lý để giao
                    dịch và xây dựng ngay. Đây là yếu tố phân biệt rõ nhất giữa bất động sản
                    tiềm năng thực và đất đầu cơ rủi ro cao.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Mega City 2 Nhơn Trạch →</LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat">Quy hoạch Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS9["4"]} alt="Phối cảnh dự án Mega City 2 tại Nhơn Trạch"
                caption="Phối cảnh dự án Mega City 2 — khu đô thị tọa lạc trên đường 25C, Nhơn Trạch"
                images={images} index={3} onOpen={openLightbox} />

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="tiem-nang">Tiềm năng đầu tư bất động sản Nhơn Trạch trong tương lai</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Thị trường bất động sản Nhơn Trạch đang được hỗ trợ bởi sự hội tụ hiếm có
                    của nhiều yếu tố hạ tầng cùng triển khai trong một giai đoạn — điều mà nhiều
                    khu vực khác không có được:
                  </p>
                  <BulletList items={[
                    "Hạ tầng giao thông đa tầng: cao tốc, vành đai, đường nội tỉnh đang đầu tư đồng bộ",
                    "Sân bay Long Thành — dự án hàng không trọng điểm quốc gia đang thi công giai đoạn 1",
                    "Cổng biển Cái Mép - Thị Vải trong tầm kết nối: cảng container lớn nhất Việt Nam",
                    "6 khu công nghiệp Nhơn Trạch với hàng chục nghìn lao động và chuyên gia",
                    "Vị trí giáp TP.HCM — thị trường bất động sản lớn nhất cả nước",
                    "Mức giá đất nền còn thấp hơn nhiều so với các khu vực tương đương ở TP.HCM",
                  ]} />

                  <H3>Những yếu tố nhà đầu tư cần đánh giá kỹ</H3>
                  <BulletList items={[
                    "Pháp lý: sổ hồng riêng hay đang trong quá trình xử lý — đây là yếu tố quyết định thanh khoản",
                    "Vị trí cụ thể: tiếp cận đường lớn hay đường nội bộ, khoảng cách đến cao tốc và trung tâm",
                    "Quy hoạch: đất ở hay đất nông nghiệp chưa chuyển đổi — rủi ro pháp lý rất khác nhau",
                    "Tiến độ hạ tầng thực tế: đường, điện, nước đã vào hay chỉ có trên bản vẽ",
                    "Khả năng tài chính và horizon đầu tư: bất động sản Nhơn Trạch phù hợp với tầm nhìn 3–5 năm",
                    "Tính thanh khoản: khu vực đã có giao dịch thực tế hay còn khó mua bán",
                  ]} />

                  <InfoBox type="warn">
                    <strong>Khuyến nghị:</strong> Tránh đầu cơ theo làn sóng tin tức hạ tầng mà
                    chưa xác nhận pháp lý. Hãy thực địa, xem trực tiếp hiện trạng và đọc kỹ
                    hợp đồng trước khi đặt cọc hay giao dịch bất kỳ sản phẩm nào tại Nhơn Trạch.
                  </InfoBox>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Mega City 2 trong bức tranh hạ tầng vùng</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong bối cảnh hạ tầng giao thông vùng Đông Nam Bộ đang được đầu tư đồng bộ,
                    dự án{" "}
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2</a>{" "}
                    nổi bật như một trong những khu dân cư có nền tảng pháp lý rõ ràng và vị trí
                    hưởng lợi trực tiếp từ nhiều tuyến hạ tầng cùng lúc.
                  </p>

                  <H3>Vị trí chiến lược trên đường 25C</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 tọa lạc trực tiếp trên đường 25C tại xã Nhơn Trạch — trục giao
                    thông quan trọng kết nối Nhơn Trạch với Long Thành (sân bay), Biên Hòa và
                    hệ thống cao tốc vùng. Từ đây, nhà đầu tư và cư dân có thể tiếp cận:
                  </p>
                  <BulletList items={[
                    "Sân bay Long Thành: ~18 km qua đường 25C",
                    "Cao tốc TP.HCM – Long Thành – Dầu Giây: ~10 km",
                    "TP. Hồ Chí Minh (Quận 2): qua phà Cát Lái ~20 phút, qua cầu Cát Lái khi hoàn thành",
                    "Biên Hòa và cao tốc Biên Hòa – Vũng Tàu: thông qua các tuyến kết nối nội tỉnh",
                    "Cảng Cái Mép - Thị Vải: qua cao tốc Biên Hòa – Vũng Tàu",
                  ]} />

                  <H3>Pháp lý đã được công nhận</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dự án đã có quy hoạch chi tiết 1/500 được phê duyệt và UBND tỉnh Đồng Nai
                    ban hành Quyết định 1772/QĐ-UBND chấp thuận 2.421 lô đủ điều kiện phân lô
                    bán nền. Đây là nền tảng pháp lý quan trọng mà nhiều bất động sản khác
                    trong khu vực chưa có được.
                  </p>

                  <H3>Những điểm cần xác nhận trước khi giao dịch</H3>
                  <BulletList items={[
                    "Tình trạng pháp lý cụ thể của từng lô — xem chi tiết tại trang pháp lý dự án",
                    "Điều kiện xây dựng: một số lô cần hoàn thành nhà trước thời hạn theo QĐ 1772",
                    "Hiện trạng hạ tầng nội khu thực tế — nên tham quan trước khi quyết định",
                    "Giá chuyển nhượng tại thời điểm giao dịch (thị trường thay đổi theo thời gian)",
                  ]} />

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Tổng quan Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý dự án →</LinkBtn>
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá →</LinkBtn>
                    <LinkBtn href="/mega-city-2/tien-ich">Tiện ích nội khu →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về cao tốc Biên Hòa - Vũng Tàu và BĐS Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-3">
                  {[
                    {
                      q: "Cao tốc Biên Hòa - Vũng Tàu có đi qua Nhơn Trạch không?",
                      a: "Tuyến cao tốc Biên Hòa - Vũng Tàu kết nối Biên Hòa (Đồng Nai) với Bà Rịa - Vũng Tàu, không đi trực tiếp qua trung tâm huyện Nhơn Trạch. Tuy nhiên Nhơn Trạch nằm trong hành lang hưởng lợi từ hệ thống kết nối vùng này, đặc biệt khi kết hợp với đường 25C, cao tốc TP.HCM - Long Thành và Vành đai 3.",
                    },
                    {
                      q: "Cao tốc Biên Hòa - Vũng Tàu có làm tăng giá đất Nhơn Trạch không?",
                      a: "Hạ tầng giao thông là một trong những yếu tố tác động đến giá trị bất động sản. Tuy nhiên mức độ ảnh hưởng còn phụ thuộc vào vị trí cụ thể, tiến độ triển khai và nhiều yếu tố thị trường khác. Nhà đầu tư cần đánh giá tổng thể, không chỉ dựa vào một yếu tố hạ tầng.",
                    },
                    {
                      q: "Có nên đầu tư bất động sản Nhơn Trạch trong giai đoạn hiện nay không?",
                      a: "Nhà đầu tư nên đánh giá kỹ vị trí, pháp lý, quy hoạch và tiềm năng phát triển trước khi đưa ra quyết định. Nhơn Trạch có nhiều yếu tố hạ tầng hỗ trợ dài hạn, nhưng mỗi sản phẩm cụ thể cần xem xét riêng về pháp lý và khả năng thanh khoản.",
                    },
                    {
                      q: "Mega City 2 có được hưởng lợi từ cao tốc Biên Hòa - Vũng Tàu không?",
                      a: "Mega City 2 nằm trên đường 25C, hưởng lợi từ hệ thống hạ tầng vùng bao gồm sân bay Long Thành, cao tốc TP.HCM - Long Thành, Vành đai 3 và hệ thống kết nối đến cao tốc Biên Hòa - Vũng Tàu. Dự án có quy hoạch 1/500 và QĐ 1772/QĐ-UBND chấp thuận 2.421 lô phân lô bán nền.",
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
                  Tiến độ và tác động của các dự án hạ tầng có thể thay đổi theo quyết định của
                  cơ quan có thẩm quyền. Trước khi ra quyết định đầu tư, cần xác nhận pháp lý
                  và thông tin cụ thể tại cơ quan nhà nước hoặc chủ đầu tư dự án.
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
                      { href: "/mega-city-2/vi-tri",     label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",    label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",    label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia",   label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",   label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/mat-bang",   label: "Mặt bằng sản phẩm" },
                      { href: "/mega-city-2/hinh-anh",   label: "Hình ảnh thực tế" },
                      { href: "/mega-city-2/faq",        label: "FAQ dự án" },
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
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    <a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach"
                      className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                      → Sân bay Long Thành & BĐS Nhơn Trạch
                    </a>
                    <a href="/tin-tuc/gia-dat-nhon-trach-2026"
                      className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                      → Giá đất Nhơn Trạch 2026
                    </a>
                    <a href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat"
                      className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                      → Quy hoạch Nhơn Trạch mới nhất
                    </a>
                  </div>
                </div>
                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn miễn phí</p>
                  <p className="text-primary-200 text-xs mb-4">Nhận thông tin pháp lý và bảng giá Mega City 2.</p>
                  <a href="tel:0937587438"
                    className="block text-center bg-white text-primary-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-colors">
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
              Xem thông tin về vị trí, pháp lý, tiện ích và bảng giá dự án Mega City 2
              tại Nhơn Trạch — hưởng lợi từ hệ thống hạ tầng vùng đang phát triển đồng bộ.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700
                           text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">
                Khám phá dự án →
              </a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600
                           text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            { href: "/mega-city-2",                                           title: "Mega City 2 Nhơn Trạch – Tổng quan dự án",            description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá dự án.", tag: "Dự án" },
            { href: "/mega-city-2/vi-tri",                                    title: "Vị trí Mega City 2 & Kết nối vùng",                   description: "Phân tích vị trí chiến lược trên đường 25C, kết nối sân bay Long Thành.", tag: "Vị trí" },
            { href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach", title: "Sân bay Long Thành & BĐS Nhơn Trạch",                 description: "Tác động của sân bay Long Thành đến thị trường bất động sản Nhơn Trạch.", tag: "Hạ tầng" },
            { href: "/tin-tuc/gia-dat-nhon-trach-2026",                       title: "Giá đất Nhơn Trạch 2026 mới nhất",                    description: "Bảng giá, thị trường và các khu vực tiềm năng tại Nhơn Trạch năm 2026.", tag: "Thị trường" },
            { href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat",                 title: "Quy hoạch Nhơn Trạch mới nhất 2026",                  description: "Cập nhật quy hoạch phát triển đô thị và tác động đến BĐS Nhơn Trạch.", tag: "Quy hoạch" },
            { href: "/mega-city-2/phap-ly",                                   title: "Pháp lý Mega City 2 – QĐ 1772/QĐ-UBND",               description: "Chi tiết pháp lý và điều kiện giao dịch tại dự án Mega City 2.", tag: "Pháp lý" },
          ]}
        />
      </div>

      <CorpFooter />
    </>
  );
}
