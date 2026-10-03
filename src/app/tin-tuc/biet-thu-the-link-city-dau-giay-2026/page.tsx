"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS67 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/biet-thu-the-link-city-dau-giay-2026`;
const PUBLISHED     = "04/10/2026";
const PUBLISHED_ISO = "2026-10-04";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Biệt Thự The Link City Dầu Giây: Diện Tích, Thiết Kế & Tiềm Năng Đầu Tư 2026",
  description: "Chi tiết biệt thự The Link City Dầu Giây 2026: kích thước nền 200–350m², thiết kế vườn riêng, tiêu chuẩn xây dựng và tiềm năng đầu tư so với nhà phố liên kế cùng phân khúc.",
  image: [IMG_NEWS67["1"], IMG_NEWS67["2"], IMG_NEWS67["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "biệt thự the link city dầu giây, biệt thự dầu giây 2026, biệt thự đồng nai dưới 5 tỷ, mua biệt thự dầu giây",
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
      name: "Biệt thự The Link City có diện tích bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biệt thự tại The Link City có diện tích nền từ 200m² đến 350m², tùy vị trí trong phân khu. Đây là sản phẩm cao cấp nhất trong danh mục dự án, có sân vườn riêng, khoảng lùi rộng và mật độ xây dựng thấp hơn nhà phố liên kế.",
      },
    },
    {
      "@type": "Question",
      name: "Biệt thự The Link City giá bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giá biệt thự The Link City phụ thuộc vào vị trí, diện tích và loại biệt thự. Với nền 200m², đơn giá khoảng 20–25 triệu/m² đất, tổng giá trị lô đất từ khoảng 4–5 tỷ đồng. Cộng thêm chi phí xây dựng 2–3 tỷ, tổng đầu tư một căn biệt thự hoàn chỉnh khoảng 6–8 tỷ đồng.",
      },
    },
    {
      "@type": "Question",
      name: "Biệt thự The Link City có khác gì so với nhà phố liên kế?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "4 điểm khác biệt chính: (1) Diện tích nền lớn hơn nhiều — 200–350m² so với 100–120m²; (2) Có sân vườn riêng, không chung tường với nhà hàng xóm; (3) Mật độ xây dựng thấp hơn — tối đa 60–70% so với 80%; (4) Không gian sống riêng tư, yên tĩnh hơn. Đổi lại, giá đầu tư cao hơn đáng kể.",
      },
    },
    {
      "@type": "Question",
      name: "Có nên mua biệt thự The Link City để đầu tư không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biệt thự phù hợp với nhà đầu tư dài hạn hơn là lướt sóng ngắn hạn. Thanh khoản thứ cấp của biệt thự thường thấp hơn nhà phố, nhưng biên tăng giá tuyệt đối cao hơn khi khu vực phát triển. Khai thác cho thuê biệt thự cũng mang lại rental yield ổn định từ nhóm chuyên gia nước ngoài và quản lý cấp cao tại các KCN.",
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
    { "@type": "ListItem", position: 4, name: "Biệt thự The Link City", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS67["1"], alt: "Toàn cảnh khu biệt thự The Link City Dầu Giây Thống Nhất Đồng Nai",              caption: "Khu biệt thự The Link City — không gian sống riêng tư, sân vườn rộng giữa lòng đô thị Dầu Giây." },
  { src: IMG_NEWS67["2"], alt: "Cận cảnh mặt tiền biệt thự hoàn thiện tại The Link City Dầu Giây",               caption: "Mặt tiền biệt thự hoàn thiện — kiến trúc đồng bộ, cổng sân vườn riêng biệt." },
  { src: IMG_NEWS67["3"], alt: "Sơ đồ mặt bằng bản vẽ biệt thự The Link City Dầu Giây diện tích nền",           caption: "Sơ đồ mặt bằng biệt thự — nền 200–350m², mật độ xây dựng thấp, vườn bao quanh." },
  { src: IMG_NEWS67["4"], alt: "Không gian sân vườn cảnh quan biệt thự The Link City Dầu Giây xanh mát",         caption: "Sân vườn riêng rộng rãi — điểm khác biệt lớn nhất của biệt thự so với nhà phố liên kế." },
  { src: IMG_NEWS67["5"], alt: "Khu biệt thự trong tổng thể quy hoạch khu đô thị The Link City Dầu Giây",        caption: "Phân khu biệt thự nằm trong tổng thể 21ha của The Link City — quy hoạch đồng bộ, hạ tầng hoàn thiện." },
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
function CompareRow({ label, bt, np }: { label: string; bt: string; np: string }) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td className="px-4 py-3 text-sm font-semibold text-slate-600">{label}</td>
      <td className="px-4 py-3 text-sm font-black text-amber-700 text-center">{bt}</td>
      <td className="px-4 py-3 text-sm text-slate-600 text-center">{np}</td>
    </tr>
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
export default function BietThuTLCPage() {
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
              <span className="text-slate-600 font-medium">Biệt thự</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">The Link City</span>
              <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Tin dự án</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 7 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Biệt Thự The Link City Dầu Giây: Diện Tích, Thiết Kế & Tiềm Năng Đầu Tư 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích chi tiết sản phẩm biệt thự tại{" "}
              <a href="/the-link-city" className="text-amber-700 font-semibold hover:underline">The Link City Dầu Giây</a>:
              kích thước nền, thiết kế vườn riêng, tiêu chuẩn xây dựng, chi phí đầu tư và
              so sánh với nhà phố liên kế — giúp bạn chọn đúng sản phẩm phù hợp mục tiêu.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh biệt thự The Link City"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS67["1"]}
                alt="Toàn cảnh khu biệt thự The Link City Dầu Giây Thống Nhất Đồng Nai"
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
              Khu biệt thự The Link City — không gian sống riêng tư, sân vườn rộng giữa lòng đô thị Dầu Giây.
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
                    ["#tong-quan",   "1. Tổng quan phân khu biệt thự The Link City"],
                    ["#dien-tich",   "2. Diện tích & kích thước các loại nền biệt thự"],
                    ["#thiet-ke",    "3. Thiết kế & tiêu chuẩn kiến trúc"],
                    ["#chi-phi",     "4. Chi phí xây dựng & tổng đầu tư"],
                    ["#so-sanh",     "5. So sánh biệt thự vs nhà phố liên kế"],
                    ["#dau-tu",      "6. Tiềm năng đầu tư & khai thác cho thuê"],
                    ["#faq",         "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Trong danh mục sản phẩm của The Link City, biệt thự là phân khúc ít được
                nhắc đến nhất — nhưng lại là lựa chọn đáng cân nhắc nhất với người tìm không
                gian sống riêng tư, rộng rãi và sẵn sàng đầu tư dài hạn hơn.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Không giống biệt thự tại các khu đô thị lớn ở TP.HCM hay Biên Hòa — nơi giá
                đã vượt 10–20 tỷ/căn — biệt thự The Link City Dầu Giây vẫn ở mức có thể tiếp
                cận được với tổng đầu tư từ khoảng 6–8 tỷ đồng cho một căn hoàn chỉnh.
              </p>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">Tổng quan phân khu biệt thự The Link City</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    The Link City quy hoạch phân khu biệt thự ở các vị trí đặc quyền trong tổng
                    thể 21ha — thường tiếp giáp công viên, cảnh quan xanh hoặc trục đường nội
                    khu rộng để tạo không gian thoáng đãng tối đa cho từng căn.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      ["Diện tích nền", "200–350 m²"],
                      ["Số tầng tối đa", "3–4 tầng"],
                      ["Mật độ XD", "Tối đa 60–70%"],
                      ["Sân vườn", "Có — bao quanh 3 mặt"],
                    ].map(([label, val]) => (
                      <div key={label} className="rounded-2xl bg-amber-50 border border-amber-100 p-4 text-center">
                        <p className="text-sm font-black text-amber-700 mb-1">{val}</p>
                        <p className="text-[11px] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Có 2 dạng biệt thự chính trong dự án:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
                      <p className="font-black text-amber-800 mb-2">Biệt thự đơn lập</p>
                      <p className="text-sm text-amber-700 leading-relaxed">
                        Nền từ 250–350m², 4 mặt thoáng, sân vườn bao quanh hoàn toàn.
                        Riêng tư tuyệt đối. Thường ở vị trí góc hoặc cuối dãy.
                      </p>
                    </div>
                    <div className="rounded-2xl border-2 border-slate-200 bg-white p-5">
                      <p className="font-black text-slate-800 mb-2">Biệt thự song lập</p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Nền từ 200–250m², chung 1 tường với căn kề bên, 3 mặt còn lại
                        có vườn riêng. Phổ biến hơn, giá thấp hơn biệt thự đơn lập.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS67["2"]}
                alt="Cận cảnh mặt tiền biệt thự hoàn thiện tại The Link City Dầu Giây"
                caption="Mặt tiền biệt thự hoàn thiện — kiến trúc đồng bộ theo bộ nhận diện The Link City."
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="dien-tich">Diện tích & kích thước các loại nền biệt thự</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nền biệt thự tại The Link City có kích thước đa dạng, phần lớn có chiều
                    rộng mặt tiền từ 10–15m và chiều sâu 15–25m. Diện tích sân vườn thực tế
                    phụ thuộc vào hướng nền và vị trí trong phân khu.
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-amber-50">
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Loại</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-amber-200">Mặt tiền</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-amber-200">Chiều sâu</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-amber-200">Diện tích</th>
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Ghi chú</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["BT song lập nhỏ", "10m", "20m", "200m²", "Phổ biến nhất, giá thấp nhất"],
                          ["BT song lập lớn", "12m", "20m", "240m²", "Sân vườn 2 bên rộng hơn"],
                          ["BT đơn lập tiêu chuẩn", "12m", "22m", "264m²", "4 mặt thoáng, vị trí đẹp"],
                          ["BT đơn lập góc", "15m", "20–25m", "300–350m²", "Hiếm, giá cao nhất"],
                        ].map(([loai, mt, cs, dt, note]) => (
                          <tr key={loai} className="hover:bg-slate-50">
                            <td className="px-4 py-3 font-semibold text-slate-700">{loai}</td>
                            <td className="px-4 py-3 text-center text-amber-700 font-bold">{mt}</td>
                            <td className="px-4 py-3 text-center text-amber-700 font-bold">{cs}</td>
                            <td className="px-4 py-3 text-center font-black text-slate-800">{dt}</td>
                            <td className="px-4 py-3 text-slate-500 text-xs">{note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <H3>Diện tích sàn xây dựng thực tế</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với nền 200m², mật độ xây dựng 60% và xây 3 tầng, tổng diện tích sàn
                    đạt khoảng <strong>200 × 60% × 3 = 360m²</strong>. Đây là diện tích
                    sàn gần gấp đôi so với nhà phố liên kế 3 tầng trên nền 100m² (~240m²
                    sàn), trong khi diện tích sân vườn và không gian sống ngoài trời vượt
                    trội hơn nhiều.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/the-link-city/mat-bang">Xem mặt bằng phân lô →</LinkBtn>
                    <LinkBtn href="/the-link-city/bang-gia">Bảng giá 2026 →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS67["3"]}
                alt="Sơ đồ mặt bằng bản vẽ biệt thự The Link City Dầu Giây diện tích nền"
                caption="Sơ đồ mặt bằng biệt thự — khoảng lùi 4 phía, vườn riêng, gara ô tô nội khu."
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="thiet-ke">Thiết kế & tiêu chuẩn kiến trúc</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Giống nhà phố liên kế, biệt thự tại The Link City tuân theo bộ tiêu chuẩn
                    kiến trúc chung của dự án — đảm bảo tính đồng bộ mỹ quan nhưng vẫn cho
                    phép chủ nhà tùy chỉnh nội thất và thiết kế sân vườn theo sở thích.
                  </p>

                  <H3>Tiêu chuẩn xây dựng biệt thự</H3>
                  <BulletList items={[
                    <><strong>Số tầng tối đa:</strong> 3 tầng (1 trệt + 2 lầu) hoặc 4 tầng tùy vị trí và loại biệt thự.</>,
                    <><strong>Mật độ xây dựng:</strong> Tối đa 60–70% diện tích đất, phần còn lại là sân vườn và khoảng lùi.</>,
                    <><strong>Khoảng lùi trước:</strong> Tối thiểu 3–4m — rộng hơn nhà phố, đủ đỗ ô tô trong sân.</>,
                    <><strong>Khoảng lùi sau:</strong> Tối thiểu 3m — tạo khu vực sân vườn sau nhà.</>,
                    <><strong>Khoảng lùi bên:</strong> Tối thiểu 1,5–2m mỗi bên (biệt thự song lập) hoặc 3m (biệt thự đơn lập).</>,
                    <><strong>Chiều cao tối đa:</strong> ≤ 16m tính từ cốt nền.</>,
                    <><strong>Màu sắc & vật liệu:</strong> Tuân theo bộ nhận diện kiến trúc The Link City.</>,
                    <><strong>Gara ô tô:</strong> Thiết kế có khoảng sân đủ để đỗ 1–2 ô tô trước nhà.</>,
                  ]} />

                  <H3>Công năng gợi ý cho biệt thự 3 tầng nền 200m²</H3>
                  <div className="space-y-3">
                    {[
                      { tang: "Tầng trệt", items: ["Sảnh đón + phòng khách lớn ~35m²", "Phòng bếp + ăn thông thoáng ~25m²", "1 phòng ngủ master tầng trệt (dành cho ông bà)", "1 WC khách + 1 WC master", "Sân trước đỗ ô tô, sân sau vườn cây"] },
                      { tang: "Tầng 2", items: ["2 phòng ngủ lớn ~20m²/phòng, mỗi phòng có WC riêng", "Phòng sinh hoạt gia đình + góc đọc sách ~15m²", "Ban công nhìn ra vườn hoặc đường nội khu"] },
                      { tang: "Tầng 3", items: ["1–2 phòng ngủ phụ hoặc phòng làm việc từ xa", "Phòng thờ + kho", "Sân thượng ~30–40m² — không gian ngoài trời đặc quyền"] },
                    ].map((t) => (
                      <div key={t.tang} className="rounded-2xl border border-slate-200 p-4">
                        <p className="font-black text-amber-700 text-sm mb-2">{t.tang}</p>
                        <ul className="space-y-1">
                          {t.items.map((item) => (
                            <li key={item} className="text-sm text-slate-600 flex items-start gap-2">
                              <span className="text-amber-400 flex-shrink-0 mt-0.5">·</span>{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS67["4"]}
                alt="Không gian sân vườn cảnh quan biệt thự The Link City Dầu Giây xanh mát"
                caption="Sân vườn riêng rộng rãi — ưu điểm lớn nhất của biệt thự so với nhà phố liên kế tại cùng dự án."
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="chi-phi">Chi phí xây dựng & tổng đầu tư</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Chi phí xây dựng biệt thự cao hơn nhà phố do diện tích lớn hơn và yêu cầu
                    hoàn thiện sân vườn, cổng rào và hệ thống tưới tự động. Dưới đây là ước
                    tính tổng đầu tư cho biệt thự song lập 200m² xây 3 tầng:
                  </p>

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
                          ["Giá đất nền 200m²",       "~4 tỷ", "~4 tỷ", "~4 tỷ"],
                          ["Xây thô 360m² sàn",        "~1,3 tỷ", "~1,5 tỷ", "~1,5 tỷ"],
                          ["Hoàn thiện nội ngoại thất", "~0,7 tỷ", "~1 tỷ", "~1,5 tỷ"],
                          ["Sân vườn, cổng, hàng rào",  "~0,2 tỷ", "~0,3 tỷ", "~0,5 tỷ"],
                          ["Chi phí phụ (10%)",          "~0,6 tỷ", "~0,7 tỷ", "~0,8 tỷ"],
                        ].map(([label, a, b, c]) => (
                          <tr key={label} className="hover:bg-slate-50">
                            <td className="px-4 py-3 font-semibold text-slate-700">{label}</td>
                            <td className="px-4 py-3 text-right text-slate-600">{a}</td>
                            <td className="px-4 py-3 text-right text-slate-600">{b}</td>
                            <td className="px-4 py-3 text-right text-slate-600">{c}</td>
                          </tr>
                        ))}
                        <tr className="bg-amber-50">
                          <td className="px-4 py-3 font-black text-amber-800">Tổng đầu tư</td>
                          <td className="px-4 py-3 text-right font-black text-amber-700">~6,8 tỷ</td>
                          <td className="px-4 py-3 text-right font-black text-amber-700">~7,5 tỷ</td>
                          <td className="px-4 py-3 text-right font-black text-amber-700">~8,3 tỷ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <InfoBox type="warn">
                    Giá đất nền biệt thự (~4 tỷ/nền 200m²) là ước tính dựa trên đơn giá
                    khoảng 20 triệu/m² — cao hơn đất nền liên kế do vị trí đặc quyền và
                    quy mô lô lớn hơn. Liên hệ trực tiếp để nhận bảng giá chính xác theo
                    từng lô cụ thể.
                  </InfoBox>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="so-sanh">So sánh biệt thự vs nhà phố liên kế</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Câu hỏi phổ biến nhất: <em>&ldquo;Mua biệt thự hay nhà phố The Link City?&rdquo;</em>
                    Dưới đây là bảng so sánh thực tế để bạn tự đánh giá theo nhu cầu.
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-slate-200">Tiêu chí</th>
                          <th className="text-center px-4 py-3 font-black text-amber-700 border-b border-slate-200">Biệt thự</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-slate-200">Nhà phố liên kế</th>
                        </tr>
                      </thead>
                      <tbody>
                        <CompareRow label="Diện tích nền" bt="200–350m²" np="100–120m²" />
                        <CompareRow label="Sân vườn riêng" bt="✅ Có — bao quanh" np="❌ Không" />
                        <CompareRow label="Tổng đầu tư" bt="~6,8–8,5 tỷ" np="~3,5–4,5 tỷ" />
                        <CompareRow label="Riêng tư" bt="⭐⭐⭐⭐⭐" np="⭐⭐⭐" />
                        <CompareRow label="Thanh khoản thứ cấp" bt="Thấp hơn" np="Cao hơn" />
                        <CompareRow label="Rental yield" bt="~5–7%/năm" np="~4–6%/năm" />
                        <CompareRow label="Phù hợp để ở thực" bt="✅ Rất phù hợp" np="✅ Phù hợp" />
                        <CompareRow label="Phù hợp kinh doanh tầng trệt" bt="Hạn chế" np="✅ Rất tốt" />
                        <CompareRow label="Vốn tự có tối thiểu" bt="~2–2,5 tỷ" np="~550 triệu – 1 tỷ" />
                      </tbody>
                    </table>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="rounded-2xl bg-amber-50 border-2 border-amber-200 p-5">
                      <p className="font-black text-amber-800 mb-2">Chọn biệt thự khi:</p>
                      <ul className="space-y-1.5 text-sm text-amber-700">
                        {["Ưu tiên không gian sống rộng, riêng tư", "Có ngân sách 7–9 tỷ trở lên", "Muốn vườn riêng cho trẻ em và ông bà", "Đầu tư dài hạn 5–10 năm"].map(i => (
                          <li key={i} className="flex items-center gap-2"><span>✓</span>{i}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-slate-50 border-2 border-slate-200 p-5">
                      <p className="font-black text-slate-800 mb-2">Chọn nhà phố khi:</p>
                      <ul className="space-y-1.5 text-sm text-slate-700">
                        {["Ngân sách 3,5–5 tỷ", "Muốn kinh doanh tầng trệt", "Cần thanh khoản tốt hơn", "Vốn tự có dưới 1 tỷ đồng"].map(i => (
                          <li key={i} className="flex items-center gap-2"><span>✓</span>{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS67["5"]}
                alt="Khu biệt thự trong tổng thể quy hoạch khu đô thị The Link City Dầu Giây"
                caption="Phân khu biệt thự trong tổng thể 21ha The Link City — vị trí đặc quyền, hạ tầng đồng bộ hoàn thiện."
                images={images} index={4} onOpen={openLightbox}
              />

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="dau-tu">Tiềm năng đầu tư & khai thác cho thuê</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Biệt thự tại các khu đô thị gần KCN lớn có một lợi thế riêng: nhóm khách
                    thuê chất lượng cao từ chuyên gia nước ngoài, quản lý cấp cao và giám đốc
                    nhà máy — những người sẵn sàng trả giá thuê cao để có không gian sống
                    xứng tầm.
                  </p>

                  <H3>3 mô hình khai thác biệt thự phổ biến</H3>
                  <div className="space-y-3">
                    {[
                      {
                        icon: "🏠",
                        title: "Cho thuê nguyên căn — chuyên gia nước ngoài",
                        rent: "20–35 triệu/tháng",
                        yield: "~4–6%/năm",
                        desc: "Phù hợp nhất với biệt thự có đủ phòng ngủ (3–4 phòng), sân vườn và gara ô tô. Nhóm expat tại các KCN Dầu Giây, Bàu Xéo rất ưa chuộng loại hình này.",
                      },
                      {
                        icon: "🛌",
                        title: "Cho thuê phòng — quản lý & kỹ sư cấp cao",
                        rent: "5–8 triệu/phòng/tháng",
                        yield: "~5–7%/năm (khai thác 4 phòng)",
                        desc: "Mỗi phòng ngủ cho thuê riêng, phòng khách và bếp dùng chung. Phù hợp biệt thự đơn lập lớn có nhiều phòng ngủ độc lập.",
                      },
                      {
                        icon: "🏡",
                        title: "Second home cuối tuần",
                        rent: "Giữ tài sản + tăng giá",
                        yield: "Lãi vốn 30–50% sau 5 năm (dự kiến)",
                        desc: "Không cho thuê, dùng làm nơi nghỉ dưỡng cuối tuần cho gia đình. Kết hợp hưởng lợi từ sóng tăng giá khi Dầu Giây lên thị xã 2026–2030.",
                      },
                    ].map((m) => (
                      <div key={m.title} className="rounded-2xl border border-slate-200 p-5 hover:border-amber-200 transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{m.icon}</span>
                            <p className="font-black text-slate-800">{m.title}</p>
                          </div>
                          <span className="text-xs font-black bg-amber-100 text-amber-700 px-2 py-1 rounded-full whitespace-nowrap">{m.yield}</span>
                        </div>
                        <p className="text-lg font-black text-amber-600 mb-2">{m.rent}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                      </div>
                    ))}
                  </div>

                  <InfoBox>
                    Xem thêm phân tích về nhu cầu thuê nhà từ lao động và chuyên gia KCN:{" "}
                    <a href="/tin-tuc/khu-cong-nghiep-dau-giay-the-link-city" className="font-bold text-amber-700 underline">
                      Khu công nghiệp Dầu Giây & cơ hội đầu tư The Link City →
                    </a>
                  </InfoBox>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/the-link-city/bang-gia">Bảng giá biệt thự →</LinkBtn>
                    <LinkBtn href="/the-link-city/thanh-toan">Phương án thanh toán →</LinkBtn>
                    <LinkBtn href="/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026">Có nên mua The Link City không? →</LinkBtn>
                  </div>
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
                    { href: "/the-link-city",                                                        label: "Tổng quan dự án The Link City" },
                    { href: "/the-link-city/bang-gia",                                               label: "Bảng giá 2026" },
                    { href: "/the-link-city/mat-bang",                                               label: "Mặt bằng phân lô biệt thự" },
                    { href: "/tin-tuc/nha-pho-lien-ke-the-link-city-dau-giay-2026",                  label: "Nhà phố liên kế: chi tiết & so sánh" },
                    { href: "/tin-tuc/shophouse-the-link-city-dau-giay-tiem-nang-kinh-doanh-2026",   label: "Shophouse mặt tiền QL1A" },
                    { href: "/tin-tuc/khu-cong-nghiep-dau-giay-the-link-city",                       label: "KCN Dầu Giây & cơ hội cho thuê" },
                    { href: "/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026",               label: "Có nên mua The Link City không?" },
                    { href: "/tin-tuc/duong-di-tu-tphcm-den-the-link-city-dau-giay",                 label: "Đường đi từ TP.HCM đến dự án" },
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
                  Chi phí xây dựng, giá đất và rental yield trong bài là ước tính tham khảo.
                  Giá thực tế từng lô biệt thự cần liên hệ trực tiếp với Kim Oanh Land để
                  nhận bảng giá chính xác. Phân tích đầu tư không phải cam kết lợi nhuận.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5">
                  <p className="font-black text-amber-800 text-sm mb-4 uppercase tracking-wider">Thông số nhanh</p>
                  <div className="space-y-2.5 text-sm">
                    {[
                      ["Diện tích nền", "200–350 m²"],
                      ["Loại", "Song lập & Đơn lập"],
                      ["Mật độ XD", "Tối đa 60–70%"],
                      ["Số tầng", "3–4 tầng"],
                      ["Sân vườn", "Có — bao quanh"],
                      ["Giá đất từ", "~4 tỷ/nền 200m²"],
                      ["Tổng đầu tư", "~6,8–8,5 tỷ"],
                      ["Rental yield", "~5–7%/năm"],
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
                  <p className="font-bold text-sm mb-1">Tư vấn biệt thự</p>
                  <p className="text-amber-100 text-xs mb-4">Nhận bảng giá từng lô biệt thự và tư vấn chọn vị trí phù hợp.</p>
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
            <h2 className="text-2xl font-black text-slate-900 mb-3">Quan tâm biệt thự The Link City?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Số lượng lô biệt thự hạn chế — liên hệ sớm để nhận bảng giá, xem vị trí
              thực địa và tư vấn phương án tài chính phù hợp.
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
              href: "/tin-tuc/nha-pho-lien-ke-the-link-city-dau-giay-2026",
              title: "Nhà Phố Liên Kế The Link City: Diện Tích, Thiết Kế & Chi Phí Xây",
              description: "Chi tiết nhà phố liên kế 5×20m, mẫu nhà T3-2b và bảng chi phí xây dựng thực tế.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/shophouse-the-link-city-dau-giay-tiem-nang-kinh-doanh-2026",
              title: "Shophouse The Link City: Tiềm Năng Mặt Tiền QL1A",
              description: "Phân tích rental yield shophouse và top 5 mô hình kinh doanh sinh lời.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/khu-cong-nghiep-dau-giay-the-link-city",
              title: "KCN Dầu Giây & Cơ Hội Đầu Tư Cho Thuê The Link City",
              description: "300.000 lao động KCN tạo ra nhu cầu thuê biệt thự và nhà phố ổn định.",
              tag: "Thị trường",
            },
            {
              href: "/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026",
              title: "Có Nên Mua The Link City Không? Phân Tích 2026",
              description: "Đánh giá trung thực ưu nhược điểm và bảng điểm 7.3/10.",
              tag: "Phân tích",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
