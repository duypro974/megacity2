"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS69 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/san-bay-long-thanh-dau-giay-the-link-city`;
const PUBLISHED     = "06/10/2026";
const PUBLISHED_ISO = "2026-10-06";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sân Bay Long Thành & BĐS Dầu Giây: The Link City Cách Sân Bay Bao Xa? Cập Nhật 2026",
  description: "The Link City Dầu Giây cách sân bay Long Thành khoảng 30–35km, di chuyển 25–35 phút. Phân tích tác động sân bay đến BĐS Dầu Giây và lý do vị trí The Link City hưởng lợi gián tiếp.",
  image: [IMG_NEWS69["1"], IMG_NEWS69["2"], IMG_NEWS69["4"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "the link city cách sân bay long thành bao xa, bất động sản dầu giây sân bay long thành, sân bay long thành ảnh hưởng đến dầu giây",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "The Link City Dầu Giây cách sân bay Long Thành bao xa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City tọa lạc tại ngã tư QL1A – QL20, Dầu Giây, cách sân bay Long Thành khoảng 30–35km theo đường ĐT769 hoặc cao tốc. Thời gian di chuyển khoảng 25–35 phút trong điều kiện bình thường.",
      },
    },
    {
      "@type": "Question",
      name: "Sân bay Long Thành có ảnh hưởng đến giá đất Dầu Giây không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có, nhưng là tác động gián tiếp. Sân bay Long Thành tạo ra hàng chục nghìn việc làm mới, thúc đẩy logistics và thương mại toàn khu vực Đông Nam Bộ. Dầu Giây — nằm trên trục giao thông nối sân bay với các tỉnh phía Bắc — hưởng lợi từ làn sóng đầu tư và dân cư đổ vào khu vực.",
      },
    },
    {
      "@type": "Question",
      name: "Đi từ The Link City đến sân bay Long Thành theo đường nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có 2 lộ trình chính: (1) QL1A → ĐT769 → sân bay Long Thành, khoảng 30–35km, 25–35 phút; (2) QL1A → nút giao Dầu Giây → cao tốc TP.HCM–Long Thành–Dầu Giây (đi ngược về hướng Long Thành), khoảng 35–40km, 30–40 phút.",
      },
    },
    {
      "@type": "Question",
      name: "Sân bay Long Thành khai thác chính thức vào năm nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo kế hoạch, giai đoạn 1 sân bay Long Thành dự kiến đưa vào khai thác năm 2026. Công suất giai đoạn 1 là 25 triệu hành khách/năm. Giai đoạn hoàn chỉnh lên đến 100 triệu hành khách/năm — trở thành một trong những sân bay lớn nhất khu vực Đông Nam Á.",
      },
    },
    {
      "@type": "Question",
      name: "Nên mua đất Dầu Giây hay Long Thành để gần sân bay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đất Long Thành gần sân bay hơn nhưng giá đã tăng mạnh và cao hơn đáng kể. Đất Dầu Giây (như The Link City) xa hơn 15–20km nhưng giá còn rất cạnh tranh, pháp lý rõ ràng và vị trí ngã tư cao tốc tạo lợi thế riêng. Đây là 2 phân khúc khác nhau: Long Thành phù hợp đầu tư trực tiếp hưởng lợi sân bay, Dầu Giây phù hợp đầu tư hưởng lợi từ đô thị hóa và logistics.",
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
    { "@type": "ListItem", position: 4, name: "Sân bay Long Thành & Dầu Giây", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS69["1"], alt: "Phối cảnh công trường sân bay Long Thành Đồng Nai đang xây dựng 2026",               caption: "Sân bay quốc tế Long Thành — dự án hàng không lớn nhất Việt Nam, dự kiến khai thác giai đoạn 1 năm 2026." },
  { src: IMG_NEWS69["2"], alt: "Bản đồ khoảng cách Dầu Giây đến sân bay Long Thành Google Maps lộ trình",            caption: "Lộ trình từ ngã tư Dầu Giây (The Link City) đến sân bay Long Thành — khoảng 30–35km, 25–35 phút." },
  { src: IMG_NEWS69["3"], alt: "Đường ĐT769 cao tốc kết nối Dầu Giây Long Thành Đồng Nai hạ tầng 2026",             caption: "Đường ĐT769 và các tuyến kết nối Dầu Giây – Long Thành đang được nâng cấp mạnh." },
  { src: IMG_NEWS69["4"], alt: "The Link City Dầu Giây trong bối cảnh kết nối sân bay Long Thành Đồng Nai",          caption: "The Link City — tọa lạc trên trục kết nối chiến lược giữa TP.HCM, Dầu Giây và sân bay Long Thành." },
  { src: IMG_NEWS69["5"], alt: "Khu vực xung quanh sân bay Long Thành đang phát triển đô thị hóa 2026",              caption: "Vùng kinh tế động lực quanh sân bay Long Thành đang thu hút đầu tư mạnh từ khắp nơi." },
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
function DistanceCard({ from, km, time, via }: { from: string; km: string; time: string; via: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4 hover:border-amber-200 transition-colors">
      <p className="font-black text-slate-800 text-sm mb-2">{from}</p>
      <div className="flex gap-4 mb-2">
        <div className="text-center">
          <p className="text-lg font-black text-amber-600">{km}</p>
          <p className="text-[11px] text-slate-400">Khoảng cách</p>
        </div>
        <div className="w-px bg-slate-200" />
        <div className="text-center">
          <p className="text-lg font-black text-amber-600">{time}</p>
          <p className="text-[11px] text-slate-400">Thời gian</p>
        </div>
      </div>
      <p className="text-xs text-slate-500">Qua: {via}</p>
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
export default function SanBayLongThanhPage() {
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
              <span className="text-slate-600 font-medium">Sân bay Long Thành</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">The Link City</span>
              <span className="inline-block bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Thị trường</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 6 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Sân Bay Long Thành & BĐS Dầu Giây: The Link City Cách Sân Bay Bao Xa? Cập Nhật 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Câu hỏi nhiều người hỏi khi tìm hiểu{" "}
              <a href="/the-link-city" className="text-amber-700 font-semibold hover:underline">The Link City</a>:{" "}
              &ldquo;Dầu Giây có gần sân bay Long Thành không?&rdquo; Câu trả lời ngắn:
              khoảng <strong>30–35km, 25–35 phút</strong>. Bài viết phân tích chi tiết
              lộ trình, tác động thực tế của sân bay đến BĐS Dầu Giây và góc nhìn đầu tư đúng đắn.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh sân bay Long Thành"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS69["1"]}
                alt="Phối cảnh công trường sân bay Long Thành Đồng Nai đang xây dựng 2026"
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
              Sân bay quốc tế Long Thành — dự kiến khai thác giai đoạn 1 năm 2026, công suất 25 triệu hành khách/năm.
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
                    ["#khoang-cach",   "1. Khoảng cách & lộ trình thực tế"],
                    ["#san-bay",       "2. Sân bay Long Thành — quy mô và tiến độ"],
                    ["#tac-dong",      "3. Tác động đến BĐS Dầu Giây"],
                    ["#dau-giay-vs-long-thanh", "4. Dầu Giây vs Long Thành: nên mua ở đâu?"],
                    ["#the-link-city", "5. The Link City trong bức tranh sân bay"],
                    ["#faq",           "6. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="khoang-cach">Khoảng cách & lộ trình thực tế</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    The Link City tọa lạc tại ngã tư QL1A – QL20, trung tâm thị trấn Dầu Giây,
                    huyện Thống Nhất. Từ đây đến sân bay Long Thành có 2 lộ trình chính:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <DistanceCard
                      from="Lộ trình 1: QL1A → ĐT769"
                      km="~30–33 km"
                      time="25–30 phút"
                      via="QL1A → ĐT769 (đường tỉnh 769) → cổng sân bay"
                    />
                    <DistanceCard
                      from="Lộ trình 2: Cao tốc VEC E4"
                      km="~35–38 km"
                      time="30–40 phút"
                      via="Nút giao Dầu Giây → cao tốc → nút Long Thành → ĐT769"
                    />
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200 mt-4">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-amber-50">
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Từ</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-amber-200">Khoảng cách</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-amber-200">Thời gian</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["The Link City (Dầu Giây)", "~30–35 km", "25–35 phút"],
                          ["Trung tâm TP.HCM (Q.1)", "~40–45 km", "35–50 phút"],
                          ["Biên Hòa", "~25–28 km", "20–30 phút"],
                          ["Long Khánh", "~30 km", "25–35 phút"],
                          ["Nhơn Trạch", "~15–18 km", "15–25 phút"],
                        ].map(([from, dist, time]) => (
                          <tr key={from} className="hover:bg-slate-50">
                            <td className="px-4 py-3 font-semibold text-slate-700">{from}</td>
                            <td className="px-4 py-3 text-center font-black text-amber-700">{dist}</td>
                            <td className="px-4 py-3 text-center font-black text-amber-700">{time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <InfoBox type="warn">
                    Khoảng cách và thời gian là ước tính trong điều kiện giao thông bình thường.
                    Khi sân bay đi vào hoạt động, đường ĐT769 và các tuyến kết nối sẽ được
                    nâng cấp, rút ngắn thời gian di chuyển hơn nữa.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS69["2"]}
                alt="Bản đồ khoảng cách Dầu Giây đến sân bay Long Thành Google Maps lộ trình"
                caption="Lộ trình từ ngã tư Dầu Giây đến sân bay Long Thành — khoảng 30–35km theo đường ĐT769."
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="san-bay">Sân bay Long Thành — quy mô và tiến độ</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sân bay quốc tế Long Thành là dự án hàng không lớn nhất lịch sử Việt Nam,
                    được kỳ vọng trở thành một trong những hub hàng không của khu vực Đông Nam Á.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      ["Tổng diện tích", "5.000 ha"],
                      ["Công suất GĐ1", "25 triệu HK/năm"],
                      ["Công suất tối đa", "100 triệu HK/năm"],
                      ["Khai thác GĐ1", "2026"],
                    ].map(([label, val]) => (
                      <div key={label} className="rounded-2xl bg-amber-50 border border-amber-100 p-4 text-center">
                        <p className="text-sm font-black text-amber-700 mb-1">{val}</p>
                        <p className="text-[11px] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>

                  <H3>Những gì sân bay mang lại cho khu vực</H3>
                  <BulletList items={[
                    <><strong>200.000+ việc làm trực tiếp và gián tiếp</strong> tại khu vực Long Thành và vùng phụ cận trong giai đoạn vận hành đầy đủ.</>,
                    <><strong>Hàng chục nghìn chuyên gia, kỹ sư, phi công và nhân viên hàng không</strong> cần chỗ ở trong bán kính 30–50km — tạo ra nhu cầu thuê nhà khổng lồ.</>,
                    <><strong>Thúc đẩy logistics và thương mại</strong> toàn khu vực Đông Nam Bộ — Dầu Giây là điểm kết nối trên trục QL1A và cao tốc.</>,
                    <><strong>Khu đô thị sân bay và khu dịch vụ phụ trợ</strong> phát triển mạnh quanh sân bay — tạo sức lan tỏa ra các khu vực lân cận.</>,
                  ]} />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS69["3"]}
                alt="Đường ĐT769 cao tốc kết nối Dầu Giây Long Thành Đồng Nai hạ tầng 2026"
                caption="Đường ĐT769 — tuyến kết nối trực tiếp từ Dầu Giây đến sân bay Long Thành đang được nâng cấp."
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="tac-dong">Tác động đến BĐS Dầu Giây</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tác động của sân bay Long Thành đến BĐS Dầu Giây là <strong>gián tiếp</strong>,
                    không trực tiếp như đất ngay cạnh sân bay. Tuy nhiên, gián tiếp không có
                    nghĩa là không đáng kể — lịch sử các sân bay lớn cho thấy vùng ảnh hưởng
                    thực sự rộng hơn nhiều người nghĩ.
                  </p>

                  <H3>3 kênh tác động chính</H3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: "👥",
                        title: "Nhu cầu nhà ở từ lực lượng lao động sân bay",
                        desc: "Hàng chục nghìn nhân viên sân bay, tiếp viên, phi công và nhân sự logistics không thể ở ngay cạnh sân bay. Họ tìm nhà trong bán kính 30–50km — Dầu Giây là lựa chọn hợp lý với giá nhà thấp hơn nhưng thời gian di chuyển chấp nhận được.",
                        highlight: false,
                      },
                      {
                        icon: "🚛",
                        title: "Sân bay thúc đẩy logistics — Dầu Giây hưởng lợi trực tiếp",
                        desc: "Dầu Giây nằm trên trục QL1A nối sân bay với TP.HCM, Bình Dương và các tỉnh Tây Nguyên. Khi sân bay hoạt động, khối lượng vận chuyển hàng hóa tăng mạnh — KCN Dầu Giây và hạ tầng logistics khu vực hưởng lợi trực tiếp, tạo thêm nhu cầu nhà ở và dịch vụ.",
                        highlight: true,
                      },
                      {
                        icon: "💰",
                        title: "Hiệu ứng tâm lý và đầu cơ đón đầu",
                        desc: "Nhà đầu tư từ TP.HCM và Biên Hòa tìm kiếm đất vùng ven sân bay trước khi giá tăng mạnh. Dầu Giây — cách sân bay 30km, giá còn rất cạnh tranh — trở thành điểm đến thay thế hấp dẫn so với đất Long Thành đã tăng cao.",
                        highlight: false,
                      },
                    ].map((item) => (
                      <div key={item.title} className={`flex gap-4 p-5 rounded-2xl border-2 transition-colors ${item.highlight ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-white"}`}>
                        <span className="text-2xl flex-shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-black text-slate-800 mb-1">{item.title}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="dau-giay-vs-long-thanh">Dầu Giây vs Long Thành: nên mua ở đâu?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là câu hỏi nhiều nhà đầu tư đặt ra. Hai khu vực có đặc điểm hoàn toàn
                    khác nhau — không có câu trả lời đúng hay sai, chỉ có câu trả lời phù hợp
                    hay không phù hợp với <em>mục tiêu của bạn</em>.
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-slate-200">Tiêu chí</th>
                          <th className="text-center px-4 py-3 font-black text-amber-700 border-b border-slate-200">Dầu Giây (The Link City)</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-slate-200">Long Thành (gần sân bay)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Khoảng cách đến sân bay", "~30–35 km", "~5–15 km"],
                          ["Giá đất hiện tại", "~19–25 triệu/m²", "~35–60 triệu/m²"],
                          ["Pháp lý sổ hồng", "✅ Sẵn (The Link City)", "Tùy từng lô"],
                          ["Hạ tầng hoàn thiện", "✅ 100% (The Link City)", "Phụ thuộc dự án"],
                          ["Tiện ích đô thị hiện tại", "✅ Đầy đủ trung tâm Dầu Giây", "Đang phát triển"],
                          ["Kết nối TP.HCM", "45 phút cao tốc", "30–40 phút cao tốc"],
                          ["Tiềm năng tăng giá từ sân bay", "Gián tiếp — trung hạn", "Trực tiếp — ngắn-trung hạn"],
                          ["Phù hợp đầu tư", "Đô thị hóa + KCN + sân bay", "Trực tiếp sân bay"],
                        ].map(([label, a, b]) => (
                          <tr key={label} className="hover:bg-slate-50">
                            <td className="px-4 py-3 font-semibold text-slate-600">{label}</td>
                            <td className="px-4 py-3 text-center text-amber-700 font-bold text-xs">{a}</td>
                            <td className="px-4 py-3 text-center text-slate-600 text-xs">{b}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="rounded-2xl bg-amber-50 border-2 border-amber-200 p-5">
                      <p className="font-black text-amber-800 mb-2">Chọn Dầu Giây khi:</p>
                      <ul className="space-y-1.5 text-sm text-amber-700">
                        {["Ngân sách 1,85–4 tỷ", "Muốn pháp lý sổ hồng sẵn", "Đầu tư trung-dài hạn 3–7 năm", "Cần tiện ích đô thị đầy đủ ngay"].map(i => (
                          <li key={i} className="flex items-center gap-2"><span>✓</span>{i}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-slate-50 border-2 border-slate-200 p-5">
                      <p className="font-black text-slate-800 mb-2">Chọn Long Thành khi:</p>
                      <ul className="space-y-1.5 text-sm text-slate-700">
                        {["Ngân sách trên 5–10 tỷ", "Muốn gần sân bay nhất", "Chấp nhận giá cao hơn", "Kỳ vọng tăng giá mạnh ngắn hạn"].map(i => (
                          <li key={i} className="flex items-center gap-2"><span>✓</span>{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS69["5"]}
                alt="Khu vực xung quanh sân bay Long Thành đang phát triển đô thị hóa 2026"
                caption="Vùng kinh tế quanh sân bay Long Thành đang thu hút đầu tư mạnh — sức lan tỏa tác động đến cả Dầu Giây."
                images={images} index={4} onOpen={openLightbox}
              />

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="the-link-city">The Link City trong bức tranh sân bay</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sân bay Long Thành là <em>một trong nhiều</em> lý do để đầu tư vào
                    The Link City — không phải lý do duy nhất và cũng không phải lý do
                    quan trọng nhất. Đây là điều cần hiểu đúng để có kỳ vọng thực tế.
                  </p>

                  <H3>Thứ tự ưu tiên các yếu tố đầu tư The Link City</H3>
                  <div className="space-y-2">
                    {[
                      { rank: "01", factor: "Vị trí ngã tư QL1A – QL20 + cao tốc", weight: "Quan trọng nhất", color: "bg-amber-500 text-white" },
                      { rank: "02", factor: "Đô thị hóa Dầu Giây lên thị xã 2026–2030", weight: "Rất quan trọng", color: "bg-amber-400 text-white" },
                      { rank: "03", factor: "KCN Dầu Giây 330ha — nhu cầu nhà ở thực", weight: "Quan trọng", color: "bg-amber-300 text-slate-800" },
                      { rank: "04", factor: "Pháp lý sổ hồng + hạ tầng 100%", weight: "Quan trọng", color: "bg-amber-200 text-slate-800" },
                      { rank: "05", factor: "Tác động gián tiếp từ sân bay Long Thành", weight: "Hỗ trợ thêm", color: "bg-slate-100 text-slate-700" },
                    ].map((item) => (
                      <div key={item.rank} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100">
                        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${item.color}`}>{item.rank}</span>
                        <div className="flex-1">
                          <p className="font-semibold text-slate-800 text-sm">{item.factor}</p>
                        </div>
                        <span className="text-xs text-slate-400 whitespace-nowrap">{item.weight}</span>
                      </div>
                    ))}
                  </div>

                  <InfoBox>
                    Tóm lại: sân bay Long Thành là <strong>yếu tố hỗ trợ thêm</strong> cho
                    luận điểm đầu tư The Link City — không phải lý do chính. Người mua nên
                    đánh giá dựa trên tổng thể 5 yếu tố, không nên kỳ vọng quá cao vào
                    tác động sân bay đối với đất cách 30km.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/the-link-city">Tổng quan The Link City →</LinkBtn>
                    <LinkBtn href="/tin-tuc/dau-giay-len-thi-xa-2026-2030-the-link-city">Lộ trình lên thị xã →</LinkBtn>
                    <LinkBtn href="/tin-tuc/khu-cong-nghiep-dau-giay-the-link-city">KCN Dầu Giây →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS69["4"]}
                alt="The Link City Dầu Giây trong bối cảnh kết nối sân bay Long Thành Đồng Nai"
                caption="The Link City — kết nối thuận tiện đến sân bay Long Thành, đồng thời hưởng lợi từ 4 yếu tố tăng trưởng khác."
                images={images} index={3} onOpen={openLightbox}
              />

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
                <SectionHeading>Tìm hiểu thêm</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city",                                                          label: "Tổng quan The Link City Dầu Giây" },
                    { href: "/the-link-city/vi-tri",                                                   label: "Vị trí & kết nối giao thông" },
                    { href: "/the-link-city/bang-gia",                                                 label: "Bảng giá 2026" },
                    { href: "/tin-tuc/dau-giay-len-thi-xa-2026-2030-the-link-city",                    label: "Dầu Giây lên thị xã 2026–2030" },
                    { href: "/tin-tuc/khu-cong-nghiep-dau-giay-the-link-city",                         label: "KCN Dầu Giây & nhu cầu thuê nhà" },
                    { href: "/tin-tuc/tiem-nang-bat-dong-san-thong-nhat-nga-tu-dau-giay-2026",         label: "Tiềm năng BĐS ngã tư Dầu Giây" },
                    { href: "/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026",                 label: "Có nên mua The Link City không?" },
                    { href: "/tin-tuc/duong-di-tu-tphcm-den-the-link-city-dau-giay",                   label: "Đường đi từ TP.HCM đến dự án" },
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
                  Khoảng cách, thời gian di chuyển và phân tích tác động trong bài là ước tính
                  tham khảo. Tiến độ khai thác sân bay phụ thuộc quyết định của ACV và cơ quan
                  có thẩm quyền. Phân tích đầu tư không phải cam kết lợi nhuận.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5">
                  <p className="font-black text-amber-800 text-sm mb-4 uppercase tracking-wider">Khoảng cách nhanh</p>
                  <div className="space-y-3 text-sm">
                    {[
                      { from: "The Link City → Sân bay", dist: "~30–35 km", time: "25–35 phút" },
                      { from: "Biên Hòa → Sân bay", dist: "~25–28 km", time: "20–30 phút" },
                      { from: "Q.1 TP.HCM → Sân bay", dist: "~40–45 km", time: "35–50 phút" },
                    ].map((r) => (
                      <div key={r.from} className="border-b border-amber-200 pb-3 last:border-0 last:pb-0">
                        <p className="font-bold text-slate-700 text-xs mb-1">{r.from}</p>
                        <div className="flex gap-3 text-xs">
                          <span className="font-black text-amber-600">{r.dist}</span>
                          <span className="text-slate-400">·</span>
                          <span className="font-black text-amber-600">{r.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu The Link City</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/the-link-city",           label: "Tổng quan dự án" },
                      { href: "/the-link-city/vi-tri",    label: "Vị trí & Kết nối" },
                      { href: "/the-link-city/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/the-link-city/bang-gia",  label: "Bảng giá 2026" },
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
                  <p className="font-bold text-sm mb-1">Tư vấn đầu tư</p>
                  <p className="text-amber-100 text-xs mb-4">Nhận bảng giá và phân tích vị trí phù hợp với mục tiêu của bạn.</p>
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
            <h2 className="text-2xl font-black text-slate-900 mb-3">Dầu Giây — Vị trí chiến lược nhất Đông Nam Bộ</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              30 phút đến sân bay Long Thành, 45 phút về TP.HCM, ngay trung tâm ngã tư cao tốc
              lớn nhất miền Nam. The Link City đang ở đúng tọa độ đó.
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
              href: "/tin-tuc/dau-giay-len-thi-xa-2026-2030-the-link-city",
              title: "Dầu Giây Lên Thị Xã 2026–2030: Lộ Trình & Tác Động Giá Đất",
              description: "5 tiêu chí đô thị, bài học từ Dĩ An & Long Khánh và cơ hội The Link City.",
              tag: "Thị trường",
            },
            {
              href: "/tin-tuc/khu-cong-nghiep-dau-giay-the-link-city",
              title: "KCN Dầu Giây & Cơ Hội Đầu Tư Cho Thuê The Link City",
              description: "300.000 lao động KCN tạo nhu cầu nhà ở khổng lồ tại Dầu Giây.",
              tag: "Thị trường",
            },
            {
              href: "/tin-tuc/duong-di-tu-tphcm-den-the-link-city-dau-giay",
              title: "Đường Đi Từ TP.HCM Đến The Link City: 3 Lộ Trình",
              description: "Khoảng cách, thời gian thực tế và mẹo tránh kẹt xe.",
              tag: "Di chuyển",
            },
            {
              href: "/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026",
              title: "Có Nên Mua The Link City Không? Phân Tích 2026",
              description: "Đánh giá trung thực ưu nhược điểm, bảng điểm 7.3/10.",
              tag: "Phân tích",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
