"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS63 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/duong-di-tu-tphcm-den-the-link-city-dau-giay`;
const PUBLISHED     = "01/10/2026";
const PUBLISHED_ISO = "2026-10-01";

// ─────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Đường Đi Từ TP.HCM Đến The Link City Dầu Giây: 3 Lộ Trình & Thời Gian Thực Tế 2026",
  description: "Hướng dẫn 3 lộ trình đi từ TP.HCM đến The Link City Dầu Giây: qua cao tốc Long Thành–Dầu Giây, QL1A và hướng từ Biên Hòa. Khoảng cách, thời gian và mẹo di chuyển thực tế.",
  image: [IMG_NEWS63["1"], IMG_NEWS63["4"], IMG_NEWS63["5"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "đường đi từ tphcm đến the link city dầu giây, từ tp hcm đi dầu giây bao lâu, lộ trình từ sài gòn đến dầu giây, the link city dầu giây cách tphcm bao xa",
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
      name: "Từ TP.HCM đến The Link City Dầu Giây bao xa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Từ trung tâm TP.HCM (Q.1) đến The Link City Dầu Giây khoảng 65–70km theo cao tốc TP.HCM–Long Thành–Dầu Giây. Nếu xuất phát từ Q.7 hoặc Q.9 (TP. Thủ Đức), khoảng cách rút ngắn còn khoảng 55–60km.",
      },
    },
    {
      "@type": "Question",
      name: "Đi từ TP.HCM đến Dầu Giây mất bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo cao tốc TP.HCM–Long Thành–Dầu Giây, thời gian di chuyển khoảng 45–55 phút trong điều kiện bình thường. Giờ cao điểm sáng thứ Hai hoặc chiều thứ Sáu có thể kéo dài thêm 15–20 phút do kẹt xe tại các nút giao vào cao tốc.",
      },
    },
    {
      "@type": "Question",
      name: "Có cần đi cao tốc mới đến được The Link City không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Không bắt buộc. Bạn có thể đi QL1A từ Biên Hòa hoặc Long Khánh xuống Dầu Giây mà không qua cao tốc, tuy nhiên mất thêm 20–30 phút so với đi cao tốc. Lộ trình cao tốc vẫn là lựa chọn tối ưu nhất về thời gian.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City ở vị trí nào tại Dầu Giây?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City tọa lạc tại ngã tư QL1A – QL20, thị trấn Dầu Giây, huyện Thống Nhất, Đồng Nai. Từ nút giao cao tốc Dầu Giây, đi theo QL1A khoảng 1–2km về hướng Bắc là đến dự án.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "The Link City Dầu Giây", item: `${BASE_URL}/the-link-city` },
    { "@type": "ListItem", position: 4, name: "Đường đi từ TP.HCM", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS63["1"], alt: "Cao tốc TP.HCM Long Thành Dầu Giây lộ trình đến The Link City",                    caption: "Cao tốc TP.HCM–Long Thành–Dầu Giây — tuyến đường nhanh nhất kết nối TP.HCM với The Link City." },
  { src: IMG_NEWS63["2"], alt: "Nút giao cao tốc biển chỉ đường Dầu Giây Thống Nhất Đồng Nai",                     caption: "Nút giao cao tốc tại Dầu Giây — điểm thoát cao tốc để vào trung tâm thị trấn." },
  { src: IMG_NEWS63["3"], alt: "Quốc lộ 1A đoạn qua trung tâm thị trấn Dầu Giây huyện Thống Nhất",               caption: "QL1A đoạn qua Dầu Giây — tuyến đường quen thuộc nối Biên Hòa với Long Khánh." },
  { src: IMG_NEWS63["4"], alt: "Cổng dự án The Link City Dầu Giây Kim Oanh Group Thống Nhất Đồng Nai",             caption: "The Link City — điểm đến cuối hành trình, tọa lạc ngay mặt tiền QL1A ngã tư Dầu Giây." },
  { src: IMG_NEWS63["5"], alt: "Sơ đồ lộ trình Google Maps từ TP.HCM đến The Link City Dầu Giây Đồng Nai",        caption: "Lộ trình trên Google Maps từ trung tâm TP.HCM đến The Link City Dầu Giây theo cao tốc." },
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
function RouteCard({
  number, title, distance, time, via, highlight,
}: {
  number: number; title: string; distance: string; time: string; via: string; highlight?: boolean;
}) {
  return (
    <div className={`rounded-2xl border-2 p-6 ${highlight ? "border-amber-400 bg-amber-50" : "border-slate-200 bg-white"}`}>
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-lg ${highlight ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-600"}`}>
          {number}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <p className="font-black text-slate-800 text-base">{title}</p>
            {highlight && <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500 text-white px-2 py-0.5 rounded-full">Khuyến nghị</span>}
          </div>
          <p className="text-xs text-slate-500 mb-3">Qua: {via}</p>
          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-lg font-black text-amber-600">{distance}</p>
              <p className="text-[11px] text-slate-400">Khoảng cách</p>
            </div>
            <div className="w-px bg-slate-200" />
            <div className="text-center">
              <p className="text-lg font-black text-amber-600">{time}</p>
              <p className="text-[11px] text-slate-400">Thời gian</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const s = type === "warn"
    ? "bg-amber-50 border-amber-200 text-amber-800"
    : "bg-amber-50 border-amber-200 text-amber-800";
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
export default function DuongDiTLCPage() {
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
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span>/</span>
              <a href="/the-link-city" className="hover:text-amber-600 transition-colors">The Link City</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">Đường đi từ TP.HCM</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">The Link City</span>
              <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Tin dự án</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 5 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Đường Đi Từ TP.HCM Đến The Link City Dầu Giây: 3 Lộ Trình & Thời Gian Thực Tế 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Từ trung tâm TP.HCM đến The Link City Dầu Giây chỉ khoảng 45–55 phút theo cao tốc.
              Bài viết phân tích 3 lộ trình cụ thể theo từng điểm xuất phát, kèm khoảng cách,
              thời gian thực tế và mẹo di chuyển tránh kẹt xe.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh cao tốc TP.HCM–Dầu Giây"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS63["1"]}
                alt="Cao tốc TP.HCM Long Thành Dầu Giây lộ trình đến The Link City"
                className="w-full h-auto block"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Cao tốc TP.HCM–Long Thành–Dầu Giây — tuyến đường nhanh nhất kết nối TP.HCM với The Link City.
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
                    ["#tom-tat",        "1. Tóm tắt nhanh: khoảng cách & thời gian"],
                    ["#lo-trinh-1",     "2. Lộ trình 1 — Cao tốc TP.HCM–Long Thành–Dầu Giây (khuyến nghị)"],
                    ["#lo-trinh-2",     "3. Lộ trình 2 — Từ Biên Hòa theo QL1A"],
                    ["#lo-trinh-3",     "4. Lộ trình 3 — Từ Q.9 / TP.Thủ Đức theo QL1A"],
                    ["#diem-den",       "5. Điểm đến: vị trí The Link City tại Dầu Giây"],
                    ["#meo-di-chuyen",  "6. Mẹo di chuyển tránh kẹt xe"],
                    ["#faq",            "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Một trong những câu hỏi phổ biến nhất khi khách hàng tìm hiểu{" "}
                <a href="/the-link-city" className="text-amber-700 font-semibold hover:underline">The Link City Dầu Giây</a>{" "}
                là: <em>&ldquo;Đi từ TP.HCM lên mất bao lâu?&rdquo;</em>. Câu trả lời phụ thuộc
                vào điểm xuất phát và lộ trình bạn chọn — nhưng trong điều kiện bình thường,
                con số là <strong>45–55 phút</strong>.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Bài viết này phân tích cụ thể 3 lộ trình thực tế, mỗi lộ trình phù hợp với
                một nhóm điểm xuất phát khác nhau trong TP.HCM, kèm khoảng cách, thời gian
                ước tính và những điểm cần chú ý trên đường.
              </p>

              {/* Section 1 — Tóm tắt */}
              <section className="mb-12">
                <SectionHeading id="tom-tat">Tóm tắt nhanh: khoảng cách & thời gian</SectionHeading>
                <div className="pt-5 space-y-5">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-amber-50 border-b-2 border-amber-200">
                          <th className="text-left px-4 py-3 font-black text-slate-700">Điểm xuất phát</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700">Khoảng cách</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700">Thời gian</th>
                          <th className="text-left px-4 py-3 font-black text-slate-700">Lộ trình</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Q.1 / Q.3 (trung tâm)", "~68 km", "~50–60 phút", "Cao tốc VEC E4"],
                          ["Q.7 / Nhà Bè", "~72 km", "~55–65 phút", "Cao tốc VEC E4"],
                          ["TP. Thủ Đức / Q.9", "~58 km", "~45–55 phút", "Cao tốc VEC E4"],
                          ["Biên Hòa", "~35 km", "~35–40 phút", "QL1A trực tiếp"],
                          ["Bình Dương (Thủ Dầu Một)", "~65 km", "~55–65 phút", "QL1A qua Biên Hòa"],
                        ].map(([from, dist, time, route]) => (
                          <tr key={from} className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 py-3 font-semibold text-slate-700">{from}</td>
                            <td className="px-4 py-3 text-center text-amber-700 font-bold">{dist}</td>
                            <td className="px-4 py-3 text-center text-amber-700 font-bold">{time}</td>
                            <td className="px-4 py-3 text-slate-500">{route}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <InfoBox type="warn">
                    Thời gian trên là ước tính trong điều kiện giao thông bình thường, ngày thường.
                    Giờ cao điểm sáng thứ Hai và chiều thứ Sáu tại nút giao An Phú (Q.2) có thể
                    cộng thêm 15–25 phút. Nên xuất phát trước 7h sáng hoặc sau 9h sáng.
                  </InfoBox>
                </div>
              </section>

              {/* Section 2 — Lộ trình 1 */}
              <section className="mb-12">
                <SectionHeading id="lo-trinh-1">Lộ trình 1 — Cao tốc TP.HCM–Long Thành–Dầu Giây</SectionHeading>
                <div className="pt-5 space-y-5">
                  <RouteCard
                    number={1}
                    title="Cao tốc VEC E4 (TP.HCM–Long Thành–Dầu Giây)"
                    distance="~65–70 km"
                    time="45–55 phút"
                    via="Nút giao An Phú → Cao tốc → Nút giao Dầu Giây → QL1A"
                    highlight
                  />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là lộ trình nhanh nhất và phổ biến nhất cho người xuất phát từ trung tâm
                    TP.HCM, Q.7, Q.2, TP. Thủ Đức hoặc vùng phía Đông thành phố. Toàn bộ đoạn
                    cao tốc là đường trả phí — phí thu qua ETC hoặc trạm thủ công.
                  </p>
                  <H3>Các bước di chuyển chi tiết</H3>
                  <BulletList items={[
                    <><strong>Bước 1:</strong> Từ trung tâm TP.HCM, đi về hướng Đông — theo đường Mai Chí Thọ hoặc Xa Lộ Hà Nội về phía TP. Thủ Đức.</>,
                    <><strong>Bước 2:</strong> Vào cao tốc tại <strong>nút giao An Phú</strong> (Q.2) hoặc <strong>nút giao Long Phước</strong> (TP. Thủ Đức). Chọn hướng <em>Long Thành – Dầu Giây</em>.</>,
                    <><strong>Bước 3:</strong> Đi thẳng trên cao tốc VEC E4 khoảng 40–45km. Qua trạm thu phí Long Thành. Tiếp tục đến <strong>nút giao Dầu Giây</strong> — thoát cao tốc theo hướng <em>Dầu Giây / QL1A</em>.</>,
                    <><strong>Bước 4:</strong> Từ nút giao Dầu Giây, đi theo <strong>QL1A hướng Bắc</strong> (hướng Hà Nội) khoảng 1–2km. The Link City nằm bên phải đường, ngay tại ngã tư QL1A – QL20.</>,
                  ]} />
                  <InfoBox>
                    <strong>Mẹo:</strong> Cài <em>Google Maps</em> hoặc <em>Waze</em> và search{" "}
                    <em>&ldquo;The Link City Dầu Giây&rdquo;</em> hoặc{" "}
                    <em>&ldquo;Khu dân cư A1-C1 Đô thị Dầu Giây&rdquo;</em>. App sẽ dẫn thẳng
                    đến cổng dự án mà không cần nhớ từng bước.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS63["2"]}
                alt="Nút giao cao tốc biển chỉ đường Dầu Giây Thống Nhất Đồng Nai"
                caption="Nút giao cao tốc tại Dầu Giây — thoát cao tốc rồi đi theo QL1A khoảng 1–2km là đến The Link City."
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 3 — Lộ trình 2 */}
              <section className="mb-12">
                <SectionHeading id="lo-trinh-2">Lộ trình 2 — Từ Biên Hòa theo QL1A</SectionHeading>
                <div className="pt-5 space-y-5">
                  <RouteCard
                    number={2}
                    title="QL1A từ Biên Hòa xuống Dầu Giây"
                    distance="~35 km"
                    time="35–45 phút"
                    via="QL1A (Biên Hòa) → Trảng Bom → Dầu Giây"
                  />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Phù hợp với người xuất phát từ Biên Hòa, Bình Dương (đi qua Biên Hòa) hoặc
                    các tỉnh phía Bắc. Đây là tuyến QL1A truyền thống — không mất phí cao tốc
                    nhưng đi qua nhiều đoạn đô thị nên dễ gặp đèn đỏ và kẹt xe tại trung tâm
                    Biên Hòa và thị trấn Trảng Bom.
                  </p>
                  <H3>Các bước di chuyển chi tiết</H3>
                  <BulletList items={[
                    <><strong>Bước 1:</strong> Từ Biên Hòa, đi theo <strong>QL1A hướng Nam</strong> — theo hướng Long Khánh / Phan Thiết.</>,
                    <><strong>Bước 2:</strong> Qua thị trấn <strong>Trảng Bom</strong> (khoảng 15km từ Biên Hòa). Chú ý khu vực này đông xe tải, nên giữ tốc độ và quan sát kỹ.</>,
                    <><strong>Bước 3:</strong> Tiếp tục theo QL1A thêm khoảng 20km đến <strong>ngã tư Dầu Giây</strong> (giao QL1A và QL20). The Link City nằm ngay tại khu vực ngã tư này.</>,
                  ]} />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS63["3"]}
                alt="Quốc lộ 1A đoạn qua trung tâm thị trấn Dầu Giây huyện Thống Nhất"
                caption="QL1A đoạn qua Dầu Giây — tuyến đường quen thuộc nối Biên Hòa với Long Khánh, The Link City nằm ngay mặt tiền."
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 4 — Lộ trình 3 */}
              <section className="mb-12">
                <SectionHeading id="lo-trinh-3">Lộ trình 3 — Từ Q.9 / TP. Thủ Đức theo QL1A</SectionHeading>
                <div className="pt-5 space-y-5">
                  <RouteCard
                    number={3}
                    title="QL1A từ TP. Thủ Đức / Q.9 qua Biên Hòa"
                    distance="~55–60 km"
                    time="50–65 phút"
                    via="Xa Lộ Hà Nội → Biên Hòa → QL1A → Dầu Giây"
                  />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Lộ trình này phù hợp cho người không muốn đi cao tốc (tiết kiệm phí) hoặc
                    xuất phát từ khu vực Thủ Đức, Dĩ An, Bình Dương. Tuy nhiên đoạn qua trung
                    tâm Biên Hòa thường đông đúc vào giờ cao điểm, có thể mất thêm 15–20 phút
                    so với đi cao tốc.
                  </p>
                  <H3>Lưu ý khi chọn lộ trình này</H3>
                  <BulletList items={[
                    "Tránh giờ cao điểm 7h–8h30 sáng và 5h–6h30 chiều tại khu vực ngã tư Amata, Biên Hòa.",
                    "Đoạn từ Biên Hòa qua Trảng Bom có nhiều xe tải nặng ra vào KCN — giữ khoảng cách an toàn.",
                    "Nếu xuất phát trước 7h sáng hoặc sau 9h, thời gian di chuyển tương đương lộ trình cao tốc.",
                  ]} />
                </div>
              </section>

              {/* Section 5 — Điểm đến */}
              <section className="mb-12">
                <SectionHeading id="diem-den">Điểm đến: vị trí The Link City tại Dầu Giây</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    The Link City (Khu dân cư A1-C1 Đô thị Dầu Giây) tọa lạc ngay <strong>ngã tư
                    QL1A – QL20</strong>, thị trấn Dầu Giây, huyện Thống Nhất, Đồng Nai. Đây là
                    vị trí cực kỳ dễ tìm — từ nút giao cao tốc Dầu Giây, chỉ cần đi thêm 1–2km
                    theo QL1A là thấy cổng dự án.
                  </p>
                  <H3>Cách xác định vị trí chính xác</H3>
                  <BulletList items={[
                    <>Mở <strong>Google Maps</strong>, search: <em>&ldquo;The Link City Dầu Giây&rdquo;</em> hoặc <em>&ldquo;Kim Oanh Land Dầu Giây&rdquo;</em>.</>,
                    <>Landmark gần nhất: <strong>Ngã tư QL1A – QL20</strong> tại trung tâm thị trấn Dầu Giây. Dự án nằm ngay tại khu vực này.</>,
                    <>Nhìn biển hiệu <strong>&ldquo;The Link City&rdquo;</strong> hoặc <strong>&ldquo;Khu đô thị Dầu Giây&rdquo;</strong> dọc QL1A.</>,
                    <>Nếu đến từ hướng TP.HCM (từ Nam lên), sau khi thoát cao tốc và lên QL1A, dự án nằm <strong>bên tay phải</strong>.</>,
                  ]} />

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/the-link-city/vi-tri">Xem bản đồ vị trí chi tiết →</LinkBtn>
                    <LinkBtn href="/the-link-city">Tổng quan dự án →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS63["4"]}
                alt="Cổng dự án The Link City Dầu Giây Kim Oanh Group Thống Nhất Đồng Nai"
                caption="The Link City — điểm đến cuối hành trình, tọa lạc ngay mặt tiền QL1A tại ngã tư Dầu Giây."
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 6 — Mẹo */}
              <section className="mb-12">
                <SectionHeading id="meo-di-chuyen">Mẹo di chuyển tránh kẹt xe</SectionHeading>
                <div className="pt-5 space-y-5">
                  <H3>Khung giờ nên xuất phát</H3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { time: "Trước 7:00", label: "Buổi sáng", note: "Tốt nhất — đường thông, đến nơi trước giờ làm việc", color: "bg-emerald-50 border-emerald-200" },
                      { time: "9:00–11:00", label: "Sáng muộn", note: "Ổn — qua cao điểm buổi sáng, đường khá thông thoáng", color: "bg-amber-50 border-amber-200" },
                      { time: "14:00–16:00", label: "Chiều sớm", note: "Ổn — tránh được cao điểm buổi chiều tối", color: "bg-amber-50 border-amber-200" },
                    ].map((s) => (
                      <div key={s.time} className={`rounded-2xl border p-4 ${s.color}`}>
                        <p className="text-lg font-black text-slate-800">{s.time}</p>
                        <p className="text-xs font-bold text-slate-500 mb-1">{s.label}</p>
                        <p className="text-xs text-slate-600 leading-relaxed">{s.note}</p>
                      </div>
                    ))}
                  </div>

                  <H3>Các điểm thường gặp kẹt xe</H3>
                  <BulletList items={[
                    <><strong>Nút giao An Phú (Q.2):</strong> Cửa vào cao tốc từ TP.HCM — kẹt nặng sáng thứ Hai và chiều thứ Sáu.</>,
                    <><strong>Trung tâm Biên Hòa:</strong> Nếu đi QL1A qua Biên Hòa, khu vực ngã tư Amata và chợ Biên Hòa thường đông giờ cao điểm.</>,
                    <><strong>Trạm thu phí Long Thành:</strong> Nếu chưa có ETC, nên vào làn thu tiền mặt tránh kẹt ở làn ETC khi tag chưa nạp tiền.</>,
                    <><strong>Đoạn Trảng Bom:</strong> Nhiều xe tải ra vào KCN — không vượt ẩu, giữ khoảng cách.</>,
                  ]} />

                  <H3>Chuẩn bị trước khi xuất phát</H3>
                  <BulletList items={[
                    "Nạp tiền thẻ ETC trước — đi cao tốc sẽ nhanh hơn và không cần dừng trạm.",
                    "Lưu số hotline The Link City: 0937.587.438 — tiện liên hệ nếu cần hướng dẫn thêm khi gần đến nơi.",
                    "Mang theo giấy tờ tùy thân nếu vào tham quan dự án — một số khu yêu cầu đăng ký trước.",
                    "Nên ghé trạm xăng trước khi lên cao tốc nếu xe còn ít nhiên liệu — trạm xăng trên cao tốc thường đắt hơn.",
                  ]} />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS63["5"]}
                alt="Sơ đồ lộ trình Google Maps từ TP.HCM đến The Link City Dầu Giây Đồng Nai"
                caption="Lộ trình trên Google Maps từ trung tâm TP.HCM đến The Link City Dầu Giây theo cao tốc — khoảng 65km, 50 phút."
                images={images} index={4} onOpen={openLightbox}
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
                <SectionHeading>Tìm hiểu thêm về The Link City</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city",                                                          label: "Tổng quan dự án The Link City" },
                    { href: "/the-link-city/vi-tri",                                                   label: "Vị trí & kết nối giao thông" },
                    { href: "/the-link-city/bang-gia",                                                 label: "Bảng giá The Link City 2026" },
                    { href: "/the-link-city/phap-ly",                                                  label: "Pháp lý — sổ hồng từng nền" },
                    { href: "/tin-tuc/tien-ich-ngoai-khu-the-link-city-dau-giay",                      label: "Tiện ích ngoại khu trong 5km" },
                    { href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",                   label: "Nhật ký thực địa The Link City" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                               label: "Tổng quan & giá bán đợt 1" },
                    { href: "/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026",       label: "Giải pháp an cư gia đình trẻ" },
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
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Lưu ý</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Khoảng cách và thời gian di chuyển là ước tính dựa trên điều kiện giao thông
                  bình thường. Thực tế có thể thay đổi theo giờ, ngày trong tuần và tình trạng
                  đường. Luôn kiểm tra Google Maps trước khi xuất phát để có thông tin cập nhật nhất.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                {/* Quick summary */}
                <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5">
                  <p className="font-black text-amber-800 text-sm mb-4 uppercase tracking-wider">Tóm tắt lộ trình</p>
                  <div className="space-y-3 text-sm">
                    {[
                      { from: "Từ Q.1/Q.3", time: "~50–60 phút", via: "Cao tốc VEC E4" },
                      { from: "Từ Thủ Đức", time: "~45–55 phút", via: "Cao tốc VEC E4" },
                      { from: "Từ Biên Hòa", time: "~35–45 phút", via: "QL1A trực tiếp" },
                    ].map((r) => (
                      <div key={r.from} className="flex items-start justify-between gap-2 border-b border-amber-200 pb-3 last:border-0 last:pb-0">
                        <div>
                          <p className="font-bold text-slate-700">{r.from}</p>
                          <p className="text-xs text-slate-400">{r.via}</p>
                        </div>
                        <p className="font-black text-amber-600 whitespace-nowrap">{r.time}</p>
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
                      { href: "/the-link-city/tien-do",   label: "Tiến độ xây dựng" },
                      { href: "/the-link-city/bang-gia",  label: "Bảng giá 2026" },
                      { href: "/the-link-city/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/the-link-city/mat-bang",  label: "Mặt bằng phân lô" },
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
                  <p className="font-bold text-sm mb-1">Đặt lịch tham quan</p>
                  <p className="text-amber-100 text-xs mb-4">Gọi trước để được đón tiếp và hướng dẫn lộ trình tận nơi.</p>
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
            <h2 className="text-2xl font-black text-slate-900 mb-3">Sẵn sàng đến thăm The Link City?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Chỉ 45 phút từ TP.HCM theo cao tốc. Gọi trước để được tư vấn lộ trình và
              đặt lịch tham quan dự án — đội ngũ sẽ hỗ trợ hướng dẫn chi tiết từ điểm xuất phát của bạn.
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
              href: "/tin-tuc/tien-ich-ngoai-khu-the-link-city-dau-giay",
              title: "Tiện Ích Ngoại Khu The Link City: Bệnh Viện, Trường Học & Chợ",
              description: "Hệ thống tiện ích trong bán kính 5km: bệnh viện, trường học liên cấp và chợ Dầu Giây sầm uất.",
              tag: "Tiện ích",
            },
            {
              href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",
              title: "Nhật Ký Thực Địa The Link City Dầu Giây 2026",
              description: "Ký sự một ngày khảo sát thực địa: đường nhựa phẳng, sổ hồng cầm tay, công viên đồi cỏ xanh.",
              tag: "Thực địa",
            },
            {
              href: "/tin-tuc/tong-quan-the-link-city-dau-giay",
              title: "The Link City Dầu Giây – Tổng Quan & Giá Bán Đợt 1",
              description: "Tổng quan dự án: vị trí ngã tư QL1A & QL20, pháp lý sổ hồng, bảng giá từ 1,85 tỷ.",
              tag: "Dự án",
            },
            {
              href: "/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026",
              title: "Giải Pháp An Cư Gia Đình Trẻ: Chỉ Từ 12 Triệu/Tháng",
              description: "Vốn tự có 550 triệu, trả góp 12 triệu/tháng sở hữu nhà phố 3 tầng sổ hồng riêng.",
              tag: "Tài chính",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
