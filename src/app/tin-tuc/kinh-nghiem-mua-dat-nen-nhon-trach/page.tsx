"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS10 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach`;
const PUBLISHED     = "18/08/2026";
const PUBLISHED_ISO = "2026-08-18";

// ─────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kinh Nghiệm Mua Đất Nền Nhơn Trạch Từ A-Z Cho Người Mới Năm 2026",
  description: "Tổng hợp kinh nghiệm mua đất nền Nhơn Trạch dành cho người mới. Hướng dẫn kiểm tra pháp lý, quy hoạch, vị trí, giá bán và những lưu ý quan trọng trước khi đầu tư.",
  image: [IMG_NEWS10["1"], IMG_NEWS10["2"], IMG_NEWS10["3"]],
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
  keywords: "kinh nghiệm mua đất nền Nhơn Trạch, mua đất nền Nhơn Trạch, đầu tư đất nền Nhơn Trạch, pháp lý đất nền Nhơn Trạch, giá đất Nhơn Trạch, Mega City 2 Nhơn Trạch",
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
      name: "Có nên mua đất nền Nhơn Trạch trong năm 2026 không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhơn Trạch đang được hưởng lợi từ nhiều dự án hạ tầng lớn như sân bay Long Thành, cao tốc Biên Hòa - Vũng Tàu và Vành đai 3. Tuy nhiên, nhà đầu tư nên đánh giá kỹ vị trí cụ thể, pháp lý từng lô và khả năng tài chính trước khi đưa ra quyết định.",
      },
    },
    {
      "@type": "Question",
      name: "Khi mua đất nền Nhơn Trạch cần kiểm tra những gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bạn cần kiểm tra: giấy chứng nhận quyền sử dụng đất (sổ hồng), quyết định phê duyệt quy hoạch 1/500, quyết định phân lô bán nền, tình trạng tranh chấp, nghĩa vụ tài chính của chủ đầu tư và hiện trạng hạ tầng thực tế.",
      },
    },
    {
      "@type": "Question",
      name: "Đầu tư đất nền hay căn hộ tại Nhơn Trạch sẽ tốt hơn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mỗi loại hình có ưu nhược điểm riêng. Đất nền thường phù hợp với tầm nhìn dài hạn và nhu cầu xây dựng nhà ở, trong khi căn hộ phù hợp với nhu cầu ở thực hoặc cho thuê ngay. Quyết định phụ thuộc vào mục tiêu đầu tư và khả năng tài chính của từng người.",
      },
    },
    {
      "@type": "Question",
      name: "Những sai lầm phổ biến nhất khi mua đất nền Nhơn Trạch là gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Các sai lầm phổ biến gồm: không kiểm tra pháp lý kỹ lưỡng, mua theo tâm lý đám đông khi thị trường sốt nóng, bỏ qua quy hoạch khu vực, chỉ quan tâm đến giá bán mà không xem tiện ích, và sử dụng đòn bẩy tài chính vượt quá khả năng trả nợ.",
      },
    },
    {
      "@type": "Question",
      name: "Làm thế nào để kiểm tra quy hoạch đất tại Nhơn Trạch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bạn có thể kiểm tra quy hoạch trực tiếp tại UBND huyện Nhơn Trạch, Sở Xây dựng tỉnh Đồng Nai hoặc Sở Tài nguyên và Môi trường tỉnh Đồng Nai. Không nên chỉ dựa vào thông tin từ người bán hoặc môi giới.",
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
    { "@type": "ListItem", position: 3, name: "Kinh nghiệm mua đất nền Nhơn Trạch", item: PAGE_URL },
  ],
};

// ─────────────────────────────────────────────────────────────
// Lightbox images
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS10["1"], alt: "Đất nền tại Nhơn Trạch Đồng Nai năm 2026",                   caption: "Đất nền tại Nhơn Trạch, Đồng Nai năm 2026" },
  { src: IMG_NEWS10["2"], alt: "Nhà đầu tư khảo sát thị trường bất động sản Nhơn Trạch",    caption: "Khảo sát thực tế thị trường bất động sản Nhơn Trạch" },
  { src: IMG_NEWS10["3"], alt: "Bản đồ quy hoạch khu vực Nhơn Trạch Đồng Nai",              caption: "Bản đồ quy hoạch khu vực Nhơn Trạch, Đồng Nai" },
  { src: IMG_NEWS10["4"], alt: "Phối cảnh dự án Mega City 2 tại Nhơn Trạch",                 caption: "Phối cảnh dự án Mega City 2 Nhơn Trạch" },
  { src: IMG_NEWS10["5"], alt: "Phối cảnh dự án Mega City 2 tại Nhơn Trạch",                 caption: "Không gian sống tại Mega City 2 Nhơn Trạch" },
  { src: IMG_NEWS10["6"], alt: "Phối cảnh dự án Mega City 2 tại Nhơn Trạch",                 caption: "Hạ tầng và tiện ích tại Mega City 2 Nhơn Trạch" },
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
// Kinh nghiệm step card
// ─────────────────────────────────────────────────────────────
function ExpStep({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 mb-10">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-primary-200">
        {num}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 leading-snug">{title}</h3>
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function KinhNghiemMuaDatNenNhonTrachPage() {
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
              <span className="text-slate-600 font-medium">Kinh nghiệm mua đất nền Nhơn Trạch</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Kinh nghiệm</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 12 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Kinh Nghiệm Mua Đất Nền Nhơn Trạch Từ A-Z Cho Người Mới Năm 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Tổng hợp kinh nghiệm mua đất nền Nhơn Trạch dành cho người mới. Hướng dẫn kiểm tra
              pháp lý, quy hoạch, vị trí, giá bán và những lưu ý quan trọng trước khi đầu tư.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh đất nền Nhơn Trạch"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS10["1"]} alt="Đất nền tại Nhơn Trạch Đồng Nai năm 2026"
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
              Đất nền tại khu vực Nhơn Trạch, tỉnh Đồng Nai năm 2026
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
                    ["#vi-sao",       "1. Vì sao nhiều người chọn đầu tư đất nền Nhơn Trạch?"],
                    ["#kinh-nghiem",  "2. 5 kinh nghiệm quan trọng khi mua đất nền"],
                    ["#sai-lam",      "3. Những sai lầm cần tránh"],
                    ["#mega-city-2",  "4. Mega City 2 — lựa chọn có nên cân nhắc?"],
                    ["#checklist",    "5. Checklist trước khi đặt cọc"],
                    ["#faq",          "6. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Thị trường bất động sản Nhơn Trạch đang thu hút sự quan tâm của nhiều nhà đầu tư
                nhờ sự phát triển mạnh mẽ của hệ thống hạ tầng và các dự án quy hoạch lớn. Tuy
                nhiên, không phải ai cũng có kinh nghiệm trong việc lựa chọn sản phẩm phù hợp.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Việc mua đất nền mà không tìm hiểu kỹ có thể dẫn đến nhiều rủi ro liên quan đến
                pháp lý, quy hoạch hoặc giá bán. Bài viết này tổng hợp những kinh nghiệm quan
                trọng giúp bạn đưa ra quyết định đầu tư hiệu quả hơn.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin trong bài mang tính tham khảo chung. Mỗi sản
                phẩm bất động sản có đặc thù riêng về pháp lý và vị trí. Luôn xác nhận trực tiếp
                với cơ quan nhà nước và chủ đầu tư trước khi giao dịch.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="vi-sao">Vì sao nhiều người lựa chọn đầu tư đất nền Nhơn Trạch?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch được đánh giá là một trong những khu vực có nhiều tiềm năng phát
                    triển tại Đồng Nai. Sự quan tâm ngày càng tăng đến thị trường bất động sản
                    nơi đây đến từ nhiều yếu tố hội tụ cùng lúc:
                  </p>
                  <BulletList items={[
                    "Vị trí tiếp giáp trực tiếp TP. Hồ Chí Minh qua sông Đồng Nai — thị trường bất động sản lớn nhất cả nước",
                    "Hệ thống hạ tầng giao thông đang được đầu tư đồng bộ: đường 25C, cao tốc, vành đai",
                    "Sân bay quốc tế Long Thành — dự án hàng không trọng điểm quốc gia đang thi công",
                    "Cao tốc Biên Hòa - Vũng Tàu kết nối cảng Cái Mép - Thị Vải và khu công nghiệp",
                    "6 khu công nghiệp Nhơn Trạch đang hoạt động với hàng chục nghìn lao động và chuyên gia",
                    "Quy hoạch đô thị hiện đại theo định hướng đô thị vệ tinh TP.HCM đến năm 2030",
                    "Mức giá đất còn thấp hơn nhiều so với các khu vực tương đương tại TP.HCM",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tuy nhiên, tiềm năng thị trường không đồng nghĩa với việc mọi sản phẩm đều
                    phù hợp. Người mua cần có kiến thức và phương pháp đánh giá đúng để tránh
                    những rủi ro không cần thiết.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach">Sân bay Long Thành & BĐS Nhơn Trạch →</LinkBtn>
                    <LinkBtn href="/tin-tuc/cao-toc-bien-hoa-vung-tau">Cao tốc Biên Hòa - Vũng Tàu →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS10["2"]} alt="Nhà đầu tư khảo sát thị trường bất động sản Nhơn Trạch"
                caption="Khảo sát thực địa là bước quan trọng trước khi quyết định mua đất nền Nhơn Trạch"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 2 — 5 kinh nghiệm */}
              <section className="mb-12">
                <SectionHeading id="kinh-nghiem">5 Kinh nghiệm quan trọng khi mua đất nền Nhơn Trạch</SectionHeading>
                <div className="pt-5">

                  <ExpStep num={1} title="Kiểm tra pháp lý trước khi mua — đây là bước không được bỏ qua">
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Pháp lý là yếu tố quan trọng nhất khi đầu tư bất động sản. Một sản phẩm có
                      giá hấp dẫn nhưng pháp lý không rõ ràng sẽ mang lại nhiều rủi ro hơn lợi ích.
                      Trước khi đặt cọc hoặc ký hợp đồng, bạn cần xác nhận:
                    </p>
                    <BulletList items={[
                      "Giấy chứng nhận quyền sử dụng đất (sổ hồng): đã cấp riêng từng lô hay chưa",
                      "Quyết định phê duyệt quy hoạch chi tiết 1/500 của khu vực",
                      "Quyết định chấp thuận phân lô bán nền của UBND tỉnh",
                      "Tình trạng tranh chấp: tra cứu tại UBND huyện hoặc tòa án",
                      "Nghĩa vụ tài chính: chủ đầu tư đã nộp tiền sử dụng đất chưa",
                      "Giấy phép xây dựng: điều kiện xây dựng được ghi rõ trong quyết định",
                    ]} />
                    <InfoBox>
                      Xem ví dụ về pháp lý minh bạch:{" "}
                      <a href="/mega-city-2/phap-ly" className="font-bold text-primary-700 underline">
                        Pháp lý Mega City 2 – QĐ 1772/QĐ-UBND →
                      </a>
                    </InfoBox>
                  </ExpStep>

                  <ExpStep num={2} title="Tìm hiểu kỹ quy hoạch của khu vực trước khi quyết định">
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Quy hoạch ảnh hưởng trực tiếp đến giá trị và khả năng sử dụng của bất động
                      sản. Đất nằm trong quy hoạch đường hoặc công viên sẽ không thể xây dựng dù
                      đã có sổ hồng. Bạn cần tìm hiểu:
                    </p>
                    <BulletList items={[
                      "Quy hoạch sử dụng đất: đất ở đô thị, đất ở nông thôn hay đất nông nghiệp",
                      "Quy hoạch giao thông: lô đất có nằm trong lộ giới mở đường không",
                      "Quy hoạch mật độ xây dựng: tầng cao tối đa và diện tích sàn được phép",
                      "Quy hoạch khu chức năng xung quanh: công nghiệp, dân cư hay thương mại",
                    ]} />
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-3">
                      Xác nhận quy hoạch trực tiếp tại UBND huyện Nhơn Trạch, Sở Xây dựng hoặc
                      Sở Tài nguyên và Môi trường tỉnh Đồng Nai — không chỉ dựa vào lời người bán.
                    </p>
                    <InfoBox>
                      <a href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat" className="font-bold text-primary-700 underline">
                        Quy hoạch Nhơn Trạch mới nhất 2026 →
                      </a>
                    </InfoBox>
                  </ExpStep>

                  <ArticleFigure src={IMG_NEWS10["3"]} alt="Bản đồ quy hoạch khu vực Nhơn Trạch Đồng Nai"
                    caption="Bản đồ quy hoạch khu vực Nhơn Trạch — công cụ không thể thiếu khi đánh giá đất nền"
                    images={images} index={2} onOpen={openLightbox} />

                  <ExpStep num={3} title="Ưu tiên khu vực có hạ tầng giao thông phát triển">
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Hạ tầng giao thông luôn là yếu tố tạo ra và duy trì giá trị bất động sản.
                      Nhơn Trạch hiện đang hưởng lợi từ nhiều công trình lớn đang triển khai đồng
                      thời — điều hiếm có so với các khu vực khác:
                    </p>
                    <BulletList items={[
                      "Sân bay quốc tế Long Thành (~18 km): dự án hàng không trọng điểm quốc gia",
                      "Cao tốc Biên Hòa - Vũng Tàu: kết nối cảng biển lớn nhất Việt Nam",
                      "Vành đai 3 TP. Hồ Chí Minh: trục vành đai quan trọng khu vực phía Nam",
                      "Cao tốc TP.HCM – Long Thành – Dầu Giây: đang khai thác, kết nối toàn vùng",
                      "Cầu Cát Lái (dự kiến): rút ngắn đến TP.HCM xuống còn 15–20 phút",
                    ]} />
                    <p className="text-slate-600 text-[16px] leading-relaxed">
                      Khi đánh giá một lô đất cụ thể, hãy xem xét khoảng cách thực tế đến các
                      nút giao thông quan trọng và tuyến đường tiếp cận trực tiếp là loại đường gì.
                    </p>
                  </ExpStep>

                  <ExpStep num={4} title="So sánh giá bán và không quyết định dựa trên một mức giá duy nhất">
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Nhiều người mua mắc sai lầm khi chỉ nhìn vào giá niêm yết mà không đặt
                      trong bối cảnh toàn thị trường. Để đánh giá giá hợp lý, bạn cần so sánh:
                    </p>
                    <BulletList items={[
                      "Giá đất nền cùng khu vực với vị trí và diện tích tương đương",
                      "Giá theo loại đường tiếp cận: đường lớn vs đường nội bộ có thể chênh 20–40%",
                      "Giá theo hướng lô: hướng Đông - Nam thường được định giá cao hơn",
                      "Giá theo tình trạng pháp lý: sổ hồng riêng vs đang xử lý",
                      "Chính sách thanh toán: trả thẳng vs trả góp có thể ảnh hưởng giá gốc",
                    ]} />
                    <InfoBox>
                      Tham khảo mức giá dự án được quy hoạch bài bản:{" "}
                      <a href="/mega-city-2/bang-gia" className="font-bold text-primary-700 underline">
                        Bảng giá Mega City 2 Nhơn Trạch →
                      </a>
                    </InfoBox>
                  </ExpStep>

                  <ArticleFigure src={IMG_NEWS10["4"]} alt="Phối cảnh dự án Mega City 2 tại Nhơn Trạch"
                    caption="Phối cảnh tổng thể dự án Mega City 2 — khu đô thị được quy hoạch đồng bộ tại Nhơn Trạch"
                    images={images} index={3} onOpen={openLightbox} />

                  <ExpStep num={5} title="Ưu tiên dự án có quy hoạch đồng bộ và hạ tầng hoàn thiện">
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Một dự án được quy hoạch bài bản và có hạ tầng nội khu hoàn thiện mang lại
                      nhiều lợi thế quan trọng so với đất tự phát hoặc đất nông nghiệp chưa chuyển
                      đổi:
                    </p>
                    <BulletList items={[
                      "Hệ thống đường nội khu nhựa hoàn chỉnh — có thể xây nhà và ở ngay",
                      "Điện, nước, thoát nước, viễn thông đã kéo đến ranh từng lô",
                      "Không gian xanh và công viên theo quy hoạch — nâng chất lượng sống",
                      "Hệ thống thương mại, trường học, y tế trong quy hoạch tổng thể",
                      "Mật độ xây dựng được kiểm soát — không bị bao quanh bởi công trình tự phát",
                      "Thanh khoản tốt hơn khi cần bán lại do pháp lý và hạ tầng rõ ràng",
                    ]} />
                    <p className="text-slate-600 text-[16px] leading-relaxed">
                      Những dự án như vậy phù hợp với cả nhu cầu ở thực lẫn đầu tư dài hạn, và
                      thường có giá trị bền vững hơn theo thời gian so với đất tự phát.
                    </p>
                  </ExpStep>

                </div>
              </section>

              {/* Section 3 — Sai lầm */}
              <section className="mb-12">
                <SectionHeading id="sai-lam">Những sai lầm cần tránh khi mua đất nền Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Thị trường đang sốt nóng là lúc người mua dễ mắc sai lầm nhất. Dưới đây là
                    những lỗi phổ biến mà nhiều nhà đầu tư không có kinh nghiệm thường gặp:
                  </p>

                  <H3>1. Không kiểm tra pháp lý đầy đủ</H3>
                  <p className="text-slate-600 text-[16px] leading-relaxed mb-3">
                    Đây là sai lầm nghiêm trọng nhất. Mua đất không có sổ hồng riêng, không có
                    quyết định phân lô bán nền hoặc đất đang trong tranh chấp sẽ gây ra hậu quả
                    pháp lý rất khó giải quyết. Không có ngoại lệ: kiểm tra pháp lý là bắt buộc.
                  </p>

                  <H3>2. Mua theo tâm lý đám đông khi thị trường sốt</H3>
                  <p className="text-slate-600 text-[16px] leading-relaxed mb-3">
                    Khi thị trường sốt đất, nhiều người mua vội vàng vì sợ mất cơ hội. Đây
                    chính là lúc rủi ro cao nhất — giá có thể đã bị thổi lên, pháp lý chưa
                    rõ và thanh khoản sau đó có thể rất kém. Hãy luôn bình tĩnh và thực địa
                    trước khi quyết định.
                  </p>

                  <H3>3. Bỏ qua thực địa, chỉ xem ảnh và phối cảnh</H3>
                  <p className="text-slate-600 text-[16px] leading-relaxed mb-3">
                    Ảnh phối cảnh đẹp không phản ánh thực tế hiện trạng. Hãy trực tiếp đến
                    xem lô đất, đánh giá con đường tiếp cận, tình trạng san nền, hạ tầng nội
                    khu và khu vực xung quanh trước khi đặt cọc bất kỳ khoản tiền nào.
                  </p>

                  <H3>4. Không đánh giá đúng khả năng tài chính</H3>
                  <p className="text-slate-600 text-[16px] leading-relaxed mb-3">
                    Sử dụng đòn bẩy tài chính quá mức — vay ngân hàng tỷ lệ cao để mua đất
                    chờ tăng giá — là một trong những rủi ro lớn nhất trong đầu tư bất động sản.
                    Nếu thị trường không tăng hoặc thanh khoản kém, áp lực lãi suất có thể
                    buộc bạn phải bán lỗ.
                  </p>

                  <H3>5. Chỉ quan tâm đến giá mà bỏ qua tiện ích và vị trí thực tế</H3>
                  <p className="text-slate-600 text-[16px] leading-relaxed">
                    Đất giá rẻ ở vị trí xa trung tâm, không có tiện ích xung quanh và khó tiếp
                    cận thường có thanh khoản rất kém. Giá trị bất động sản dài hạn được quyết
                    định bởi tổng thể các yếu tố, không chỉ đơn thuần là mức giá tại thời điểm
                    mua.
                  </p>

                  <InfoBox type="warn">
                    <strong>Nguyên tắc vàng:</strong> Thực địa + Pháp lý + Tài chính hợp lý = Đầu tư
                    an toàn. Không có đường tắt nào trong đầu tư bất động sản.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS10["5"]} alt="Phối cảnh dự án Mega City 2 tại Nhơn Trạch"
                caption="Không gian sống được quy hoạch đồng bộ tại dự án Mega City 2 Nhơn Trạch"
                images={images} index={4} onOpen={openLightbox} />

              {/* Section 4 — Mega City 2 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Mega City 2 — lựa chọn có nên cân nhắc?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong bức tranh thị trường đất nền Nhơn Trạch, dự án{" "}
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2</a>{" "}
                    là một trong những cái tên được nhắc đến nhiều nhờ sự kết hợp giữa vị trí
                    chiến lược, nền tảng pháp lý rõ ràng và quy hoạch đồng bộ.
                  </p>

                  <H3>Những điểm nổi bật đáng chú ý</H3>
                  <BulletList items={[
                    "Vị trí thuận lợi trên đường 25C — trục kết nối trực tiếp đến sân bay Long Thành (~18 km) và TP.HCM",
                    "Quy mô lớn (~83,94 ha, hơn 2.400 sản phẩm) cho thấy sức mạnh của chủ đầu tư",
                    "Quy hoạch chi tiết 1/500 đã được phê duyệt — cơ sở pháp lý quan trọng",
                    "Quyết định 1772/QĐ-UBND của UBND tỉnh Đồng Nai chấp thuận 2.421 lô đủ điều kiện phân lô bán nền",
                    "Hạ tầng nội khu đang được thi công — đường, điện, nước, cây xanh",
                    "Hệ thống tiện ích đa dạng theo quy hoạch tổng thể khu đô thị",
                  ]} />

                  <H3>Những điểm cần xác nhận trước khi giao dịch</H3>
                  <BulletList items={[
                    "Tình trạng sổ hồng riêng của từng lô cụ thể bạn đang quan tâm",
                    "Điều kiện xây dựng: một số lô theo QĐ 1772 cần hoàn thành nhà trước 31/12/2029",
                    "Hiện trạng hạ tầng thực tế tại khu vực lô đất — xem trực tiếp",
                    "Giá chuyển nhượng tại thời điểm giao dịch — thị trường thay đổi liên tục",
                    "Phương thức thanh toán và các chính sách hỗ trợ tài chính hiện hành",
                  ]} />

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Tổng quan dự án →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí →</LinkBtn>
                    <LinkBtn href="/mega-city-2/tien-ich">Tiện ích →</LinkBtn>
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS10["6"]} alt="Phối cảnh dự án Mega City 2 tại Nhơn Trạch"
                caption="Hạ tầng và tiện ích đồng bộ tại dự án Mega City 2, Nhơn Trạch, Đồng Nai"
                images={images} index={5} onOpen={openLightbox} />

              {/* Section 5 — Checklist */}
              <section className="mb-12">
                <SectionHeading id="checklist">Checklist trước khi đặt cọc mua đất nền Nhơn Trạch</SectionHeading>
                <div className="pt-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85] mb-6">
                    Trước khi ký bất kỳ hợp đồng hoặc đặt cọc nào, hãy đảm bảo bạn đã hoàn thành
                    đầy đủ các bước kiểm tra sau:
                  </p>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-slate-800 px-6 py-4">
                      <p className="text-white font-black text-sm uppercase tracking-wider">Checklist kiểm tra trước khi mua</p>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {[
                        ["Pháp lý",        "Xác nhận sổ hồng riêng hoặc quyết định phân lô bán nền tại cơ quan có thẩm quyền"],
                        ["Quy hoạch",      "Kiểm tra mục đích sử dụng đất tại UBND huyện — đất ở hay đất nông nghiệp"],
                        ["Thực địa",       "Tham quan trực tiếp lô đất, đường tiếp cận, hạ tầng nội khu và khu vực xung quanh"],
                        ["Giá cả",         "So sánh ít nhất 3–5 sản phẩm tương đương trong cùng khu vực trước khi quyết định"],
                        ["Chủ đầu tư",     "Tìm hiểu uy tín và lịch sử dự án của chủ đầu tư, kiểm tra nghĩa vụ tài chính"],
                        ["Tài chính",      "Xác định rõ tổng chi phí: giá đất + thuế phí + lãi vay (nếu có) trước khi cam kết"],
                        ["Hợp đồng",       "Đọc kỹ toàn bộ hợp đồng, đặc biệt điều khoản giao đất, điều kiện xây dựng và bồi thường"],
                        ["Tiện ích",       "Kiểm tra thực tế trường học, bệnh viện, chợ, siêu thị trong bán kính 3–5 km"],
                      ].map(([label, desc], i) => (
                        <div key={label} className={`flex items-start gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                          <div className="w-5 h-5 rounded border-2 border-primary-300 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-800 text-sm">{label}: </span>
                            <span className="text-slate-600 text-sm leading-relaxed">{desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp khi mua đất nền Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-3">
                  {[
                    {
                      q: "Có nên mua đất nền Nhơn Trạch trong năm 2026 không?",
                      a: "Nhơn Trạch đang được hưởng lợi từ nhiều dự án hạ tầng lớn. Tuy nhiên, nhà đầu tư nên đánh giá kỹ vị trí cụ thể, pháp lý từng lô và khả năng tài chính trước khi đưa ra quyết định. Tiềm năng vĩ mô tốt không có nghĩa là mọi sản phẩm đều phù hợp.",
                    },
                    {
                      q: "Khi mua đất nền Nhơn Trạch cần kiểm tra những gì?",
                      a: "Bạn cần kiểm tra: sổ hồng riêng hoặc quyết định phân lô bán nền, quy hoạch chi tiết 1/500, tình trạng tranh chấp, nghĩa vụ tài chính của chủ đầu tư và hiện trạng hạ tầng thực tế. Không nên bỏ qua bất kỳ bước nào trong danh sách này.",
                    },
                    {
                      q: "Đầu tư đất nền hay căn hộ tại Nhơn Trạch sẽ tốt hơn?",
                      a: "Mỗi loại hình có ưu nhược điểm riêng. Đất nền phù hợp với tầm nhìn dài hạn, nhu cầu xây nhà ở hoặc đầu tư cho thuê theo thời gian. Căn hộ phù hợp hơn với nhu cầu ở thực hoặc cho thuê ngay. Quyết định phụ thuộc vào mục tiêu và khả năng tài chính cụ thể của bạn.",
                    },
                    {
                      q: "Những sai lầm phổ biến nhất khi mua đất nền Nhơn Trạch là gì?",
                      a: "Các sai lầm phổ biến: không kiểm tra pháp lý đầy đủ, mua theo tâm lý đám đông khi thị trường sốt, bỏ qua thực địa, không đánh giá đúng khả năng tài chính và chỉ quan tâm giá mà bỏ qua tiện ích và vị trí thực tế.",
                    },
                    {
                      q: "Làm thế nào để kiểm tra quy hoạch đất tại Nhơn Trạch?",
                      a: "Kiểm tra trực tiếp tại UBND huyện Nhơn Trạch, Sở Xây dựng tỉnh Đồng Nai hoặc Sở Tài nguyên và Môi trường tỉnh Đồng Nai. Không nên chỉ dựa vào thông tin từ người bán hoặc môi giới — quy hoạch phải được xác nhận từ cơ quan nhà nước.",
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
                  Thông tin trong bài viết mang tính tham khảo chung và không phải tư vấn đầu tư tài chính.
                  Mỗi sản phẩm bất động sản có đặc thù riêng. Trước khi giao dịch, cần xác nhận
                  pháp lý tại cơ quan nhà nước có thẩm quyền và tham khảo ý kiến chuyên gia pháp lý.
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
                      { href: "/mega-city-2",          label: "Tổng quan dự án" },
                      { href: "/mega-city-2/vi-tri",    label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",   label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia",  label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/mat-bang",  label: "Mặt bằng sản phẩm" },
                      { href: "/mega-city-2/hinh-anh",  label: "Hình ảnh thực tế" },
                      { href: "/mega-city-2/thanh-toan",label: "Phương thức thanh toán" },
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
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Giá đất Nhơn Trạch 2026", href: "/tin-tuc/gia-dat-nhon-trach-2026" },
                      { label: "Quy hoạch Nhơn Trạch mới nhất", href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat" },
                      { label: "Sân bay Long Thành & BĐS Nhơn Trạch", href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" },
                      { label: "Cao tốc Biên Hòa - Vũng Tàu", href: "/tin-tuc/cao-toc-bien-hoa-vung-tau" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
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
              Dự án đất nền được quy hoạch đồng bộ, pháp lý rõ ràng tại Nhơn Trạch, Đồng Nai.
              Xem đầy đủ thông tin về vị trí, pháp lý, tiện ích và bảng giá.
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
            { href: "/tin-tuc/gia-dat-nhon-trach-2026",                       title: "Giá đất Nhơn Trạch 2026 mới nhất",                    description: "Bảng giá, thị trường và các khu vực tiềm năng tại Nhơn Trạch.", tag: "Thị trường" },
            { href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat",                 title: "Quy hoạch Nhơn Trạch mới nhất 2026",                  description: "Cập nhật quy hoạch phát triển đô thị và tác động đến BĐS Nhơn Trạch.", tag: "Quy hoạch" },
            { href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach", title: "Sân bay Long Thành & BĐS Nhơn Trạch",                 description: "Tác động của sân bay Long Thành đến thị trường bất động sản Nhơn Trạch.", tag: "Hạ tầng" },
            { href: "/tin-tuc/cao-toc-bien-hoa-vung-tau",                     title: "Cao tốc Biên Hòa - Vũng Tàu & BĐS Nhơn Trạch",       description: "Phân tích tác động cao tốc Biên Hòa - Vũng Tàu đến hạ tầng và BĐS.", tag: "Hạ tầng" },
            { href: "/mega-city-2/phap-ly",                                   title: "Pháp lý Mega City 2 – QĐ 1772/QĐ-UBND",               description: "Chi tiết pháp lý và điều kiện giao dịch tại dự án Mega City 2.", tag: "Pháp lý" },
          ]}
        />
      </div>

      <CorpFooter />
    </>
  );
}
