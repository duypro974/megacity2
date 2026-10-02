"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS65 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/nha-pho-lien-ke-the-link-city-dau-giay-2026`;
const PUBLISHED     = "02/10/2026";
const PUBLISHED_ISO = "2026-10-02";

// ─────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nhà Phố Liên Kế The Link City Dầu Giây: Diện Tích, Thiết Kế & Chi Phí Xây 2026",
  description: "Chi tiết nhà phố liên kế The Link City Dầu Giây: diện tích 5×20m, công năng mẫu nhà T3-2b, tiêu chuẩn xây dựng và chi phí hoàn thiện thực tế năm 2026.",
  image: [IMG_NEWS65["1"], IMG_NEWS65["2"], IMG_NEWS65["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "nhà phố the link city dầu giây, nhà phố liên kế the link city, diện tích nhà phố dầu giây, mẫu nhà t3-2b the link city, xây nhà the link city",
  about: {
    "@type": "Place",
    name: "The Link City, Dầu Giây, Đồng Nai",
    address: { "@type": "PostalAddress", addressLocality: "Dầu Giây", addressRegion: "Đồng Nai", addressCountry: "VN" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Nhà phố liên kế The Link City có diện tích bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà phố liên kế tiêu chuẩn tại The Link City có kích thước nền 5×20m (100m²). Ngoài ra còn có các lô 6m, 8m mặt tiền và lô góc 2 mặt tiền với diện tích lớn hơn. Diện tích xây dựng mỗi tầng theo quy chuẩn khoảng 80–85m²/tầng sau trừ khoảng lùi.",
      },
    },
    {
      "@type": "Question",
      name: "Mẫu nhà T3-2b The Link City có công năng gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mẫu nhà T3-2b là thiết kế chuẩn nhà phố liên kế 1 trệt 2 lầu tại The Link City. Tầng trệt gồm phòng khách, bếp, nhà vệ sinh và sân sau. Tầng 2–3 bố trí 2–3 phòng ngủ, phòng vệ sinh riêng và khu sinh hoạt gia đình. Tổng diện tích sàn sử dụng khoảng 220–240m².",
      },
    },
    {
      "@type": "Question",
      name: "Chi phí xây nhà phố tại The Link City Dầu Giây là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chi phí xây thô nhà phố liên kế tại khu vực Dầu Giây dao động 3,5–4,2 triệu đồng/m² sàn xây dựng. Xây trọn gói hoàn thiện cơ bản 5–7 triệu/m², hoàn thiện nội thất đầy đủ 7–10 triệu/m². Tổng chi phí xây 1 căn nhà phố 3 tầng 100m² nền hoàn chỉnh ước tính 1,2–1,8 tỷ đồng tùy mức độ hoàn thiện.",
      },
    },
    {
      "@type": "Question",
      name: "Nhà phố liên kế The Link City có được xây tự do không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Không hoàn toàn tự do. Chủ đầu tư quy định tiêu chuẩn kiến trúc mặt tiền để đảm bảo đồng bộ mỹ quan khu đô thị: chiều cao tối đa 4 tầng, mật độ xây dựng 80%, khoảng lùi trước tối thiểu 2m, khoảng lùi sau tối thiểu 2m. Màu sắc và vật liệu mặt ngoài phải tuân theo bộ nhận diện kiến trúc được phê duyệt.",
      },
    },
    {
      "@type": "Question",
      name: "Có thể kinh doanh tại nhà phố liên kế The Link City không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Tầng trệt nhà phố liên kế hoàn toàn phù hợp để kinh doanh: cửa hàng tạp hóa, văn phòng, phòng khám, salon, quán cà phê hoặc dịch vụ ăn uống. Các lô mặt tiền trục đường thương mại nội khu có lợi thế kinh doanh cao hơn. Tuy nhiên cần xin phép thay đổi mục đích sử dụng tầng trệt theo quy định địa phương.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "The Link City", item: `${BASE_URL}/the-link-city` },
    { "@type": "ListItem", position: 4, name: "Nhà phố liên kế The Link City", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS65["1"], alt: "Dãy nhà phố liên kế The Link City Dầu Giây nhìn từ mặt đường nội khu",            caption: "Dãy nhà phố liên kế The Link City — mặt tiền đồng bộ, đường nội khu rộng, vỉa hè hoàn thiện." },
  { src: IMG_NEWS65["2"], alt: "Cận cảnh mặt tiền nhà phố liên kế hoàn thiện tại The Link City Dầu Giây",          caption: "Cận cảnh mặt tiền nhà phố liên kế đã hoàn thiện — chất lượng xây dựng thực tế tại dự án." },
  { src: IMG_NEWS65["3"], alt: "Bản vẽ mặt bằng mẫu nhà phố T3-2b The Link City Dầu Giây công năng các tầng",     caption: "Bản vẽ mặt bằng công năng mẫu nhà T3-2b — 1 trệt 2 lầu, tổng sàn ~230m²." },
  { src: IMG_NEWS65["4"], alt: "Không gian nội thất phòng khách nhà phố liên kế The Link City Dầu Giây",           caption: "Không gian nội thất tầng trệt — thoáng rộng, đón sáng tốt nhờ mặt tiền 5m." },
  { src: IMG_NEWS65["5"], alt: "Góc giao lộ nội khu The Link City nhà phố liên kế hai bên đường rộng",             caption: "Góc giao lộ nội khu The Link City — quy hoạch đường rộng 12–16m tạo không gian thoáng cho cư dân." },
];

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400 scroll-mt-24">
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
          <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-[9px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
function SpecRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <tr className={highlight ? "bg-amber-50" : "bg-white"}>
      <td className="px-4 py-3 text-sm font-semibold text-slate-600 border-b border-slate-100">{label}</td>
      <td className={`px-4 py-3 text-sm font-black border-b border-slate-100 ${highlight ? "text-amber-700" : "text-slate-800"}`}>{value}</td>
    </tr>
  );
}
function CostCard({ tier, range, desc }: { tier: string; range: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 hover:border-amber-200 hover:bg-amber-50 transition-colors">
      <p className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1">{tier}</p>
      <p className="text-xl font-black text-amber-600 mb-1">{range}</p>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}
function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const s = type === "warn" ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-amber-50 border-amber-200 text-amber-800";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 transition-all">
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export default function NhaPhooTLCPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}

      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero ── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span>/</span>
              <a href="/the-link-city" className="hover:text-amber-600 transition-colors">The Link City</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">Nhà phố liên kế</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">The Link City</span>
              <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Tin dự án</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 7 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Nhà Phố Liên Kế The Link City Dầu Giây: Diện Tích, Thiết Kế & Chi Phí Xây Thực Tế 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Hướng dẫn chi tiết về nhà phố liên kế tại The Link City Dầu Giây: kích thước nền,
              công năng mẫu nhà T3-2b, tiêu chuẩn kiến trúc bắt buộc và bảng chi phí xây dựng
              hoàn thiện thực tế theo từng cấp độ.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh nhà phố The Link City"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS65["1"]}
                alt="Dãy nhà phố liên kế The Link City Dầu Giây nhìn từ mặt đường nội khu"
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
              Dãy nhà phố liên kế The Link City — mặt tiền đồng bộ, đường nội khu rộng, vỉa hè hoàn thiện.
            </p>
          </div>
        </div>

        {/* ── Main ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#tong-quan",      "1. Tổng quan nhà phố liên kế tại The Link City"],
                    ["#dien-tich",      "2. Diện tích & kích thước các loại lô"],
                    ["#mau-nha",        "3. Mẫu nhà T3-2b: công năng chi tiết từng tầng"],
                    ["#tieu-chuan",     "4. Tiêu chuẩn kiến trúc & quy cách xây dựng"],
                    ["#chi-phi",        "5. Chi phí xây dựng & hoàn thiện thực tế"],
                    ["#kinh-doanh",     "6. Tiềm năng kinh doanh tầng trệt"],
                    ["#faq",           "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Nhà phố liên kế là sản phẩm chủ lực tại{" "}
                <a href="/the-link-city" className="text-amber-700 font-semibold hover:underline">The Link City Dầu Giây</a>.
                Đây là loại hình được phần lớn người mua lựa chọn vì tích hợp được cả không gian
                ở lẫn tiềm năng kinh doanh trong một tài sản duy nhất — với mức giá hợp lý hơn
                biệt thự nhưng vẫn có sổ hồng riêng và hạ tầng đồng bộ.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Bài viết này đi vào chi tiết kỹ thuật, công năng thiết kế và chi phí thực tế —
                những thông tin mà tài liệu bán hàng thường trình bày chung chung nhưng người
                mua cần biết cụ thể trước khi ra quyết định.
              </p>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">Tổng quan nhà phố liên kế tại The Link City</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    The Link City quy hoạch các dãy nhà phố liên kế dọc theo các trục đường nội
                    khu rộng 12–16m. Nhà phố được chia thành 2 nhóm chính theo vị trí:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
                      <p className="font-black text-amber-800 mb-2">Nhà phố trục thương mại</p>
                      <p className="text-sm text-amber-700 leading-relaxed">
                        Mặt tiền các trục đường lớn, QL1A và đường trung tâm khu đô thị. Phù hợp
                        kinh doanh tầng trệt. Giá cao hơn 15–25% so với nhà phố nội khu.
                      </p>
                    </div>
                    <div className="rounded-2xl border-2 border-slate-200 bg-white p-5">
                      <p className="font-black text-slate-800 mb-2">Nhà phố nội khu (LK17A, LK17B)</p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Nằm sâu trong khu dân cư, yên tĩnh hơn. Phù hợp để ở, cho thuê dài hạn
                        hoặc mở văn phòng nhỏ. Đây là loại đang mở bán đợt 1 từ 1,85 tỷ.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/the-link-city/mat-bang">Xem mặt bằng phân lô →</LinkBtn>
                    <LinkBtn href="/the-link-city/bang-gia">Bảng giá 2026 →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS65["2"]}
                alt="Cận cảnh mặt tiền nhà phố liên kế hoàn thiện tại The Link City Dầu Giây"
                caption="Cận cảnh mặt tiền nhà phố liên kế đã hoàn thiện — chất lượng xây dựng thực tế tại dự án."
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="dien-tich">Diện tích & kích thước các loại lô</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    The Link City có nhiều loại lô nhà phố khác nhau về mặt tiền và diện tích,
                    phù hợp với nhiều nhu cầu sử dụng và ngân sách. Dưới đây là thông số chi tiết
                    từng loại:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-amber-50">
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Loại lô</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-amber-200">Mặt tiền</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-amber-200">Chiều sâu</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-amber-200">Diện tích</th>
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Đặc điểm</th>
                        </tr>
                      </thead>
                      <tbody>
                        <SpecRow label="LK tiêu chuẩn" value="5m × 20m = 100m²" />
                        <SpecRow label="LK mặt tiền rộng" value="6m × 20m = 120m²" highlight />
                        <SpecRow label="LK lô lớn" value="8m × 20m = 160m²" />
                        <SpecRow label="Lô góc 2 mặt tiền" value="5×20 + 5×20 = ~150–200m²" highlight />
                        <SpecRow label="LK trục thương mại QL1A" value="5–8m × 20m, tùy vị trí" />
                      </tbody>
                    </table>
                  </div>

                  <InfoBox>
                    Lô tiêu chuẩn 5×20m (100m²) là loại phổ biến nhất, giá từ 1,85 tỷ tại
                    block LK17A. Lô góc 2 mặt tiền thường đắt hơn 20–30% nhưng có lợi thế
                    thông thoáng và kinh doanh tốt hơn.
                  </InfoBox>

                  <H3>Diện tích sàn xây dựng thực tế</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với lô 5×20m, sau khi trừ khoảng lùi trước (2m) và sau (2m), diện tích sàn
                    thực tế mỗi tầng khoảng <strong>5 × 16 = 80m²</strong>. Nhà phố 3 tầng
                    (1 trệt + 2 lầu) cho tổng diện tích sàn khoảng <strong>240m²</strong>.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="mau-nha">Mẫu nhà T3-2b: công năng chi tiết từng tầng</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Kim Oanh ban hành mẫu nhà tham khảo T3-2b (1 trệt 2 lầu, nền 5×20m) như
                    hướng dẫn thiết kế chuẩn cho nhà phố liên kế tại The Link City. Chủ nhà có
                    thể tùy chỉnh nội thất và bố trí phòng nhưng phải tuân theo quy chuẩn mặt
                    ngoài và kết cấu.
                  </p>

                  <H3>Tầng trệt — Kinh doanh & sinh hoạt chính</H3>
                  <BulletList items={[
                    "Mặt tiền thông thoáng, cửa cuốn hoặc kính khung nhôm, dễ cải tạo thành mặt bằng kinh doanh.",
                    "Phòng khách rộng ~25m², liên thông với khu ăn và bếp.",
                    "Bếp và phòng ăn ~15m², cửa sổ hoặc giếng trời thông gió tự nhiên.",
                    "1 phòng vệ sinh tầng trệt (~4m²) tiếp khách.",
                    "Sân sau ~2×5m = 10m² — có thể làm kho, bãi xe máy hoặc mở rộng không gian xanh.",
                    "Cầu thang bộ kết nối lên tầng 2–3, bố trí hợp lý không chiếm nhiều diện tích.",
                  ]} />

                  <H3>Tầng 2 — Khu ngủ chính</H3>
                  <BulletList items={[
                    "2 phòng ngủ, diện tích mỗi phòng 12–15m², đủ đặt giường đôi + tủ + bàn làm việc.",
                    "1 phòng vệ sinh chung (~5m²) hoặc master bedroom có toilet riêng.",
                    "Ban công trước ~5m² — không gian thư giãn nhìn ra đường nội khu.",
                    "Khu sinh hoạt gia đình nhỏ hoặc góc học tập ~10m².",
                  ]} />

                  <H3>Tầng 3 — Phòng ngủ phụ & không gian linh hoạt</H3>
                  <BulletList items={[
                    "1–2 phòng ngủ phụ, phù hợp cho con em hoặc khách.",
                    "1 phòng vệ sinh tầng 3.",
                    "Sân thượng ~10–15m² — phơi đồ, trồng cây hoặc làm phòng thờ.",
                    "Tùy chủ nhà có thể cải tạo thành phòng làm việc từ xa (home office) hoặc phòng gym mini.",
                  ]} />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS65["3"]}
                alt="Bản vẽ mặt bằng mẫu nhà phố T3-2b The Link City Dầu Giây công năng các tầng"
                caption="Bản vẽ mặt bằng công năng mẫu nhà T3-2b — 1 trệt 2 lầu trên nền 5×20m, tổng sàn ~240m²."
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="tieu-chuan">Tiêu chuẩn kiến trúc & quy cách xây dựng</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Để đảm bảo tính đồng bộ và mỹ quan khu đô thị, Kim Oanh ban hành bộ tiêu chuẩn
                    kiến trúc áp dụng bắt buộc cho tất cả nhà phố liên kế tại The Link City.
                    Chủ nhà cần nắm rõ trước khi lên phương án thiết kế.
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-slate-200">Hạng mục</th>
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-slate-200">Quy định</th>
                        </tr>
                      </thead>
                      <tbody>
                        <SpecRow label="Số tầng tối đa" value="4 tầng (1 trệt + 3 lầu)" />
                        <SpecRow label="Mật độ xây dựng" value="Tối đa 80% diện tích đất" highlight />
                        <SpecRow label="Khoảng lùi trước" value="Tối thiểu 2m tính từ ranh đất" />
                        <SpecRow label="Khoảng lùi sau" value="Tối thiểu 2m" highlight />
                        <SpecRow label="Khoảng lùi bên" value="0m (nhà liền kề — xây sát)" />
                        <SpecRow label="Chiều cao tối đa" value="≤ 16m tính từ cốt nền" highlight />
                        <SpecRow label="Màu sắc mặt ngoài" value="Tuân theo bộ nhận diện kiến trúc TLC" />
                        <SpecRow label="Vật liệu mặt tiền" value="Sơn, gạch ốp hoặc kính theo palette được duyệt" highlight />
                        <SpecRow label="Mái" value="Mái bằng hoặc mái che theo thiết kế chuẩn" />
                      </tbody>
                    </table>
                  </div>

                  <InfoBox type="warn">
                    <strong>Lưu ý quan trọng:</strong> Mọi thay đổi so với thiết kế chuẩn cần
                    được chủ đầu tư phê duyệt trước khi thi công. Xây sai quy chuẩn có thể bị
                    yêu cầu tháo dỡ. Nên tham khảo bộ hồ sơ thiết kế chuẩn từ Kim Oanh trước
                    khi thuê đơn vị thiết kế và thi công.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS65["4"]}
                alt="Không gian nội thất phòng khách nhà phố liên kế The Link City Dầu Giây"
                caption="Không gian tầng trệt thoáng rộng — mặt tiền 5m đón sáng tốt, phù hợp cả ở lẫn kinh doanh."
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="chi-phi">Chi phí xây dựng & hoàn thiện thực tế</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Chi phí xây dựng phụ thuộc nhiều vào mức độ hoàn thiện bạn muốn. Dưới đây
                    là các mốc chi phí thực tế tại khu vực Đồng Nai năm 2026, áp dụng cho lô
                    nền 100m² xây nhà phố 3 tầng.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <CostCard
                      tier="Xây thô"
                      range="3,5–4,2 tr/m² sàn"
                      desc="Hoàn thiện phần thô: móng, cột, dầm, sàn, tường, mái. Chưa bao gồm điện nước, sơn và cửa."
                    />
                    <CostCard
                      tier="Trọn gói cơ bản"
                      range="5–7 tr/m² sàn"
                      desc="Hoàn thiện đầy đủ: sơn tường, lát nền, cửa, điện nước, vệ sinh cơ bản. Chưa có nội thất."
                    />
                    <CostCard
                      tier="Trọn gói cao cấp"
                      range="7–10 tr/m² sàn"
                      desc="Hoàn thiện + nội thất cố định (tủ bếp, tủ âm tường, bếp, thiết bị vệ sinh cao cấp)."
                    />
                  </div>

                  <H3>Ước tính tổng chi phí nhà phố 3 tầng (lô 100m²)</H3>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-amber-50">
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Hạng mục</th>
                          <th className="text-right px-4 py-3 font-black text-slate-700 border-b border-amber-200">Cơ bản</th>
                          <th className="text-right px-4 py-3 font-black text-slate-700 border-b border-amber-200">Trung bình</th>
                          <th className="text-right px-4 py-3 font-black text-slate-700 border-b border-amber-200">Cao cấp</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Xây thô (240m² sàn)", "840 tr", "1 tỷ", "1 tỷ"],
                          ["Hoàn thiện", "360 tr", "480 tr", "720 tr"],
                          ["Nội thất cố định", "—", "200 tr", "500 tr"],
                          ["Chi phí phụ (10%)", "120 tr", "168 tr", "222 tr"],
                        ].map(([label, a, b, c]) => (
                          <tr key={label} className="hover:bg-slate-50">
                            <td className="px-4 py-3 font-semibold text-slate-700">{label}</td>
                            <td className="px-4 py-3 text-right text-slate-600">{a}</td>
                            <td className="px-4 py-3 text-right text-slate-600">{b}</td>
                            <td className="px-4 py-3 text-right text-slate-600">{c}</td>
                          </tr>
                        ))}
                        <tr className="bg-amber-50">
                          <td className="px-4 py-3 font-black text-amber-800">Tổng ước tính</td>
                          <td className="px-4 py-3 text-right font-black text-amber-700">~1,3 tỷ</td>
                          <td className="px-4 py-3 text-right font-black text-amber-700">~1,85 tỷ</td>
                          <td className="px-4 py-3 text-right font-black text-amber-700">~2,4 tỷ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <InfoBox type="warn">
                    Chi phí trên là ước tính tham khảo, thực tế có thể thay đổi theo đơn vị thi
                    công, vật liệu lựa chọn và thời điểm xây dựng. Nên lấy ít nhất 3 báo giá từ
                    các nhà thầu địa phương trước khi quyết định.
                  </InfoBox>

                  <H3>Tổng đầu tư trọn gói (đất + xây)</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với lô tiêu chuẩn 100m² giá 1,85 tỷ + chi phí xây trung bình 1,85 tỷ, tổng
                    đầu tư vào khoảng <strong>3,7 tỷ đồng</strong> để có ngôi nhà phố 3 tầng hoàn
                    thiện đầy đủ, sổ hồng riêng tại The Link City Dầu Giây. Đây là mức giá cạnh
                    tranh so với nhà phố đã xây sẵn ở TP.HCM cùng diện tích.
                  </p>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS65["5"]}
                alt="Góc giao lộ nội khu The Link City nhà phố liên kế hai bên đường rộng"
                caption="Góc giao lộ nội khu — đường rộng 12–16m tạo không gian thoáng đãng và thuận lợi kinh doanh."
                images={images} index={4} onOpen={openLightbox}
              />

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="kinh-doanh">Tiềm năng kinh doanh tầng trệt</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một trong những lý do nhà phố liên kế được ưa chuộng là khả năng sinh dòng
                    tiền từ tầng trệt trong khi gia đình vẫn sinh sống ở tầng trên. Tại khu vực
                    Dầu Giây, nhu cầu thuê mặt bằng kinh doanh đang tăng theo tốc độ phát triển
                    của khu công nghiệp và dân số.
                  </p>
                  <H3>Mô hình khai thác phổ biến</H3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: "☕", title: "Quán cà phê / trà sữa", rent: "5–10 tr/tháng", note: "Nhu cầu cao từ công nhân và cư dân" },
                      { icon: "🛒", title: "Cửa hàng tạp hóa / tiện lợi", rent: "4–8 tr/tháng", note: "Phù hợp vị trí nội khu dân cư đông" },
                      { icon: "🏥", title: "Phòng khám / nhà thuốc", rent: "6–12 tr/tháng", note: "Thiếu hụt trong khu vực, nhu cầu ổn định" },
                      { icon: "💼", title: "Văn phòng / coworking nhỏ", rent: "5–9 tr/tháng", note: "Phù hợp doanh nghiệp vừa và nhỏ khu vực" },
                      { icon: "🍜", title: "Quán ăn / cơm văn phòng", rent: "6–10 tr/tháng", note: "Nhu cầu bữa trưa từ khu công nghiệp" },
                      { icon: "💇", title: "Salon tóc / làm đẹp", rent: "4–7 tr/tháng", note: "Chi phí thấp, vận hành đơn giản" },
                    ].map((m) => (
                      <div key={m.title} className="flex gap-3 p-4 rounded-2xl border border-slate-200 hover:border-amber-200 transition-colors">
                        <span className="text-2xl flex-shrink-0">{m.icon}</span>
                        <div>
                          <p className="font-black text-slate-800 text-sm">{m.title}</p>
                          <p className="text-amber-600 font-bold text-sm">{m.rent}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{m.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <InfoBox>
                    Rental yield ước tính 4–6%/năm nếu cho thuê toàn bộ tầng trệt. Lô mặt tiền
                    trục thương mại QL1A có thể đạt 7–9%/năm. Tuy nhiên đây là ước tính — thực
                    tế phụ thuộc vào thời điểm, vị trí cụ thể và tình trạng thị trường cho thuê
                    khu vực Dầu Giây.
                  </InfoBox>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp</SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details key={name} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-amber-200 transition-colors">
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
                <SectionHeading>Tìm hiểu thêm về The Link City</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city",                                                          label: "Tổng quan dự án The Link City" },
                    { href: "/the-link-city/mat-bang",                                                 label: "Mặt bằng phân lô chi tiết" },
                    { href: "/the-link-city/bang-gia",                                                 label: "Bảng giá nhà phố 2026" },
                    { href: "/the-link-city/phap-ly",                                                  label: "Pháp lý — sổ hồng từng nền" },
                    { href: "/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026", label: "Quy trình mua bán & tiêu chuẩn xây" },
                    { href: "/tin-tuc/shophouse-the-link-city-dau-giay-tiem-nang-kinh-doanh-2026",     label: "Shophouse mặt tiền QL1A" },
                    { href: "/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026",                 label: "Có nên mua The Link City không?" },
                    { href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",                   label: "Nhật ký thực địa The Link City" },
                  ].map((l) => (
                    <a key={l.href} href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 transition-colors px-4 py-3 rounded-xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50">
                      <span className="text-amber-400 flex-shrink-0">→</span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </section>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Chi phí xây dựng và giá cho thuê trong bài là ước tính tham khảo, không phải
                  cam kết. Thực tế phụ thuộc vào nhiều yếu tố. Người mua nên tự khảo sát và
                  tham khảo đơn vị thi công địa phương để có báo giá chính xác.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                {/* Quick specs */}
                <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5">
                  <p className="font-black text-amber-800 text-sm mb-4 uppercase tracking-wider">Thông số nhanh</p>
                  <div className="space-y-2.5 text-sm">
                    {[
                      ["Kích thước tiêu chuẩn", "5×20m (100m²)"],
                      ["Số tầng tối đa", "4 tầng"],
                      ["Diện tích sàn (3T)", "~240m²"],
                      ["Khoảng lùi trước", "2m"],
                      ["Mật độ xây dựng", "Tối đa 80%"],
                      ["Giá từ", "1,85 tỷ/nền"],
                      ["Chi phí xây (TB)", "~1,85 tỷ"],
                      ["Tổng đầu tư (TB)", "~3,7 tỷ"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-start justify-between gap-2 border-b border-amber-200 pb-2 last:border-0 last:pb-0">
                        <span className="text-amber-700">{k}</span>
                        <span className="font-black text-amber-800 text-right">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu The Link City</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/the-link-city",           label: "Tổng quan dự án" },
                      { href: "/the-link-city/mat-bang",  label: "Mặt bằng phân lô" },
                      { href: "/the-link-city/bang-gia",  label: "Bảng giá 2026" },
                      { href: "/the-link-city/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/the-link-city/tien-do",   label: "Tiến độ xây dựng" },
                      { href: "/the-link-city/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/the-link-city/hinh-anh",  label: "Hình ảnh thực tế" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-amber-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white">
                        <span>{l.label}</span><span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Nhận tư vấn chi tiết</p>
                  <p className="text-amber-100 text-xs mb-4">Hỏi về bản vẽ mẫu nhà, quy chuẩn xây dựng và bảng giá mới nhất.</p>
                  <a href="tel:0937587438" className="block text-center bg-white text-amber-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-amber-50 transition-colors">
                    0937.587.438
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-amber-50 border-t border-amber-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Muốn xem bản vẽ mẫu nhà T3-2b đầy đủ?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Gọi hoặc nhắn tin để nhận bộ hồ sơ thiết kế mẫu, bảng giá và chính sách thanh
              toán mới nhất — miễn phí, không áp lực.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/the-link-city" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">
                Xem dự án →
              </a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            {
              href: "/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026",
              title: "Quy Trình Mua Bán & Tiêu Chuẩn Xây Dựng The Link City",
              description: "Hướng dẫn 5 bước mua bán chuẩn pháp lý và thông số kỹ thuật mẫu nhà T3-2b đầy đủ.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/shophouse-the-link-city-dau-giay-tiem-nang-kinh-doanh-2026",
              title: "Shophouse The Link City: Tiềm Năng Kinh Doanh Mặt Tiền QL1A",
              description: "Phân tích tiềm năng shophouse mặt tiền QL1A, rental yield và mô hình khai thác dòng tiền.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026",
              title: "Có Nên Mua Đất Nền The Link City Không? Phân Tích 2026",
              description: "Đánh giá trung thực ưu nhược điểm, điểm tổng thể 7.3/10 và đối tượng phù hợp.",
              tag: "Phân tích",
            },
            {
              href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",
              title: "Bảng Giá The Link City 2026 & Bài Toán Vay Ngân Hàng",
              description: "Giá từng block, 4 phương thức thanh toán và bảng tính trả nợ giảm dần 20 năm.",
              tag: "Tài chính",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
