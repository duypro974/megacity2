"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS72 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/vi-tri-the-link-city-dau-giay`;
const PUBLISHED     = "08/10/2026";
const PUBLISHED_ISO = "2026-10-08";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vị Trí The Link City Dầu Giây Ở Đâu? Tại Sao Ngã Tư QL1A – QL20 Là Điểm Đắc Địa Nhất Thống Nhất",
  description: "The Link City tọa lạc tại ngã tư QL1A – QL20, trung tâm thị trấn Dầu Giây. Phân tích chi tiết lợi thế vị trí: 3 cao tốc giao nhau, 45 phút TP.HCM, 30 phút sân bay Long Thành.",
  image: [IMG_NEWS72["1"], IMG_NEWS72["3"], IMG_NEWS72["5"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "vị trí the link city dầu giây, the link city ở đâu, ngã tư dầu giây ql1a ql20, the link city huyện thống nhất đồng nai",
  about: {
    "@type": "Place",
    name: "The Link City, Ngã tư QL1A – QL20, Dầu Giây, Thống Nhất, Đồng Nai",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ngã tư Quốc lộ 1A và Quốc lộ 20",
      addressLocality: "Dầu Giây",
      addressRegion: "Đồng Nai",
      addressCountry: "VN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 10.9427836, longitude: 107.2458344 },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "The Link City Dầu Giây ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City (tên quy hoạch: Khu dân cư A1-C1 Đô thị Dầu Giây) tọa lạc tại ngã tư Quốc lộ 1A và Quốc lộ 20, thị trấn Dầu Giây, huyện Thống Nhất, tỉnh Đồng Nai. Tọa độ GPS: 10.9427836, 107.2458344.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City cách TP.HCM bao xa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City cách trung tâm TP.HCM (Q.1) khoảng 65–70km theo cao tốc TP.HCM–Long Thành–Dầu Giây (VEC E4). Thời gian di chuyển khoảng 45–55 phút trong điều kiện bình thường.",
      },
    },
    {
      "@type": "Question",
      name: "Tại sao vị trí ngã tư Dầu Giây được đánh giá là đắc địa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ngã tư Dầu Giây là điểm giao nhau của QL1A (trục Bắc–Nam xuyên Việt), QL20 (hướng Đà Lạt) và nút giao 3 tuyến cao tốc: TP.HCM–Long Thành–Dầu Giây, Biên Hòa–Vũng Tàu (đang triển khai) và Dầu Giây–Liên Khương (quy hoạch). Đây là vị trí logistics huyết mạch của miền Nam.",
      },
    },
    {
      "@type": "Question",
      name: "Làm sao tìm đường đến The Link City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mở Google Maps và search 'The Link City Dầu Giây' hoặc 'Khu dân cư A1-C1 Đô thị Dầu Giây'. Từ TP.HCM: đi cao tốc VEC E4 → thoát tại nút Dầu Giây → QL1A hướng Bắc 1–2km → thấy dự án bên phải. Từ Biên Hòa: đi QL1A hướng Nam khoảng 35km.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City nằm ở xã hay thị trấn nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City tọa lạc tại xã Dầu Giây (nay thuộc thị trấn Dầu Giây đang hướng đến nâng cấp), huyện Thống Nhất, tỉnh Đồng Nai. Đây là trung tâm hành chính – thương mại của huyện Thống Nhất.",
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
    { "@type": "ListItem", position: 4, name: "Vị trí The Link City Dầu Giây", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS72["1"], alt: "Toàn cảnh ngã tư Dầu Giây nhìn từ trên cao QL1A QL20 huyện Thống Nhất Đồng Nai",   caption: "Ngã tư QL1A – QL20 Dầu Giây nhìn từ trên — vị trí trung tâm của huyện Thống Nhất và tọa độ của The Link City." },
  { src: IMG_NEWS72["2"], alt: "Biển chỉ đường cột mốc ngã tư QL1A QL20 Dầu Giây Thống Nhất Đồng Nai",             caption: "Cột mốc ngã tư QL1A – QL20 — điểm giao thoa của 2 trục đường quốc gia huyết mạch." },
  { src: IMG_NEWS72["3"], alt: "Bản đồ kết nối vùng The Link City Dầu Giây TP.HCM Biên Hòa Long Khánh Vũng Tàu",   caption: "Bản đồ kết nối vùng — The Link City là điểm trung tâm của mạng lưới giao thông Đông Nam Bộ." },
  { src: IMG_NEWS72["4"], alt: "Cao tốc TP.HCM Long Thành Dầu Giây VEC E4 nút giao Dầu Giây Đồng Nai",             caption: "Cao tốc VEC E4 — trục kết nối nhanh nhất từ The Link City về TP.HCM chỉ 45 phút." },
  { src: IMG_NEWS72["5"], alt: "The Link City Dầu Giây nhìn từ Quốc lộ 1A mặt tiền dự án Kim Oanh Land",            caption: "The Link City nhìn từ QL1A — mặt tiền dự án ngay trung tâm thương mại Dầu Giây." },
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
function DistRow({ dest, dist, time, via }: { dest: string; dist: string; time: string; via: string }) {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-4 py-3 font-semibold text-slate-700">{dest}</td>
      <td className="px-4 py-3 text-center font-black text-amber-700">{dist}</td>
      <td className="px-4 py-3 text-center font-black text-amber-700">{time}</td>
      <td className="px-4 py-3 text-slate-500 text-xs">{via}</td>
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
export default function ViTriTLCPage() {
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
              <span className="text-slate-600 font-medium">Vị trí</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">The Link City</span>
              <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Tin dự án</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 6 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Vị Trí The Link City Dầu Giây Ở Đâu? Tại Sao Ngã Tư QL1A – QL20 Là Điểm Đắc Địa Nhất Thống Nhất
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              <a href="/the-link-city" className="text-amber-700 font-semibold hover:underline">The Link City</a>{" "}
              tọa lạc ngay ngã tư Quốc lộ 1A và Quốc lộ 20, trung tâm thị trấn Dầu Giây,
              huyện Thống Nhất, Đồng Nai — nơi 3 tuyến cao tốc giao nhau và kết nối TP.HCM
              chỉ 45 phút. Phân tích chi tiết tại sao đây là vị trí đắc địa hiếm có.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh ngã tư Dầu Giây"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS72["1"]}
                alt="Toàn cảnh ngã tư Dầu Giây nhìn từ trên cao QL1A QL20 huyện Thống Nhất Đồng Nai"
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
              Ngã tư QL1A – QL20 Dầu Giây nhìn từ trên — tọa độ của The Link City, trung tâm kết nối giao thương của huyện Thống Nhất.
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
                    ["#dia-chi",      "1. Địa chỉ & tọa độ chính xác"],
                    ["#nga-tu",       "2. Ngã tư QL1A – QL20: vì sao đặc biệt?"],
                    ["#ket-noi",      "3. Kết nối đến các điểm đến quan trọng"],
                    ["#cao-toc",      "4. Lợi thế 3 tuyến cao tốc giao nhau"],
                    ["#trung-tam",    "5. Vị trí trung tâm thương mại Dầu Giây"],
                    ["#duong-den",    "6. Hướng dẫn đường đến The Link City"],
                    ["#faq",          "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Câu hỏi đầu tiên bất kỳ ai quan tâm đến một dự án bất động sản cũng đặt ra:
                <em>&ldquo;Ở đâu?&rdquo;</em> Với The Link City, câu trả lời ngắn là: ngay
                ngã tư QL1A – QL20, Dầu Giây, Đồng Nai. Nhưng con số địa lý đó chưa nói lên
                hết ý nghĩa thực sự của vị trí này.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Bài viết này phân tích cụ thể: vị trí chính xác, các tuyến đường kết nối,
                khoảng cách đến các điểm đến quan trọng và lý do vị trí ngã tư Dầu Giây
                được xem là điểm đắc địa hiếm có ở miền Nam.
              </p>

              {/* Section 1 — Địa chỉ */}
              <section className="mb-12">
                <SectionHeading id="dia-chi">Địa chỉ & tọa độ chính xác</SectionHeading>
                <div className="pt-5 space-y-5">
                  <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6">
                    <p className="text-xs font-black uppercase tracking-wider text-amber-500 mb-3">📍 Địa chỉ chính thức</p>
                    <div className="space-y-2 text-sm text-amber-800">
                      {[
                        ["Tên dự án", "The Link City (Khu dân cư A1-C1 Đô thị Dầu Giây)"],
                        ["Vị trí", "Ngã tư Quốc lộ 1A và Quốc lộ 20"],
                        ["Thị trấn", "Dầu Giây"],
                        ["Huyện", "Thống Nhất"],
                        ["Tỉnh", "Đồng Nai"],
                        ["Tọa độ GPS", "10.9427836, 107.2458344"],
                        ["Chủ đầu tư", "Công ty TNHH Đầu tư Phú Việt Tín"],
                        ["Đơn vị phát triển", "Kim Oanh Land"],
                      ].map(([k, v]) => (
                        <div key={k} className="flex gap-3">
                          <span className="font-bold w-32 flex-shrink-0">{k}:</span>
                          <span>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <InfoBox>
                    Để tìm đường bằng Google Maps: search{" "}
                    <strong>&ldquo;The Link City Dầu Giây&rdquo;</strong> hoặc{" "}
                    <strong>&ldquo;Kim Oanh Land Dầu Giây&rdquo;</strong> — app sẽ dẫn thẳng
                    đến cổng dự án.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS72["2"]}
                alt="Biển chỉ đường cột mốc ngã tư QL1A QL20 Dầu Giây Thống Nhất Đồng Nai"
                caption="Cột mốc ngã tư QL1A – QL20 Dầu Giây — điểm giao thoa của 2 trục đường quốc gia huyết mạch."
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 2 — Ngã tư */}
              <section className="mb-12">
                <SectionHeading id="nga-tu">Ngã tư QL1A – QL20: vì sao đặc biệt?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không phải ngã tư nào cũng có giá trị như nhau. Ngã tư Dầu Giây đặc biệt
                    vì nó là giao điểm của <strong>2 trục đường quốc gia huyết mạch</strong> —
                    không phải đường tỉnh lộ hay đường vành đai đô thị.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
                      <p className="font-black text-amber-800 mb-2">Quốc lộ 1A — Trục Bắc–Nam</p>
                      <p className="text-sm text-amber-700 leading-relaxed">
                        Tuyến đường xuyên Việt dài nhất, kết nối Hà Nội–TP.HCM. Đi qua Dầu Giây
                        nối với <strong>Biên Hòa</strong> (phía Bắc) và{" "}
                        <strong>Long Khánh, Phan Thiết</strong> (phía Nam). Lưu lượng xe lớn nhất
                        miền Nam, thúc đẩy thương mại và dịch vụ tự nhiên.
                      </p>
                    </div>
                    <div className="rounded-2xl border-2 border-slate-200 bg-white p-5">
                      <p className="font-black text-slate-800 mb-2">Quốc lộ 20 — Trục Đà Lạt</p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Tuyến độc đạo nối vùng Đông Nam Bộ với <strong>Đà Lạt, Di Linh, Bảo Lộc</strong>.
                        Toàn bộ lưu lượng xe từ Tây Nguyên đổ về TP.HCM đều phải qua ngã tư Dầu
                        Giây — tạo mật độ giao thương cao liên tục.
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Kết quả: ngã tư Dầu Giây trở thành <strong>điểm dừng chân tự nhiên</strong>{" "}
                    của hàng triệu lượt xe mỗi năm — xe tải, xe du lịch, xe khách liên tỉnh và
                    xe cá nhân. Đây là lý do khu vực này luôn có hoạt động thương mại sôi nổi
                    bất kể thời điểm.
                  </p>
                </div>
              </section>

              {/* Section 3 — Kết nối */}
              <section className="mb-12">
                <SectionHeading id="ket-noi">Kết nối đến các điểm đến quan trọng</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Từ The Link City, thời gian di chuyển đến các điểm đến quan trọng trong
                    vùng Đông Nam Bộ:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-amber-50">
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Điểm đến</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-amber-200">Khoảng cách</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-amber-200">Thời gian</th>
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Đường đi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <DistRow dest="TP.HCM (Q.1)" dist="~68 km" time="~50 phút" via="Cao tốc VEC E4" />
                        <DistRow dest="Sân bay Tân Sơn Nhất" dist="~75 km" time="~60 phút" via="Cao tốc VEC E4" />
                        <DistRow dest="Sân bay Long Thành" dist="~30–35 km" time="~25–35 phút" via="ĐT769" />
                        <DistRow dest="Biên Hòa (trung tâm)" dist="~35 km" time="~35 phút" via="QL1A" />
                        <DistRow dest="Long Khánh" dist="~15 km" time="~15 phút" via="QL1A" />
                        <DistRow dest="Vũng Tàu" dist="~120 km" time="~90 phút" via="QL1A + QL51" />
                        <DistRow dest="Đà Lạt" dist="~200 km" time="~3 giờ" via="QL20" />
                        <DistRow dest="Bình Dương (Thủ Dầu Một)" dist="~65 km" time="~55 phút" via="QL1A qua Biên Hòa" />
                      </tbody>
                    </table>
                  </div>

                  <InfoBox type="warn">
                    Thời gian di chuyển là ước tính trong điều kiện bình thường, ngày thường.
                    Cao điểm cuối tuần (QL1A hướng Vũng Tàu/Đà Lạt) có thể tăng thêm 30–60 phút.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS72["3"]}
                alt="Bản đồ kết nối vùng The Link City Dầu Giây TP.HCM Biên Hòa Long Khánh Vũng Tàu"
                caption="Bản đồ kết nối vùng từ The Link City — trung tâm của mạng lưới giao thông Đông Nam Bộ."
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 4 — Cao tốc */}
              <section className="mb-12">
                <SectionHeading id="cao-toc">Lợi thế 3 tuyến cao tốc giao nhau</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu QL1A và QL20 là nền tảng lịch sử của vị trí Dầu Giây, thì hệ thống
                    cao tốc đang và sẽ hình thành mới là yếu tố đẩy vị trí này lên một tầm
                    cao mới trong 5–10 năm tới.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        n: "01",
                        name: "Cao tốc TP.HCM – Long Thành – Dầu Giây (VEC E4)",
                        status: "Đang vận hành",
                        tag: "bg-emerald-100 text-emerald-700",
                        desc: "Tuyến cao tốc hiện hữu, dài ~55km, kết nối nút giao Dầu Giây với trung tâm TP.HCM trong 45–55 phút. Đây là tuyến đường chính của người dân và nhà đầu tư đi đến The Link City từ TP.HCM.",
                      },
                      {
                        n: "02",
                        name: "Cao tốc Biên Hòa – Vũng Tàu",
                        status: "Đang triển khai",
                        tag: "bg-amber-100 text-amber-700",
                        desc: "Tuyến đang thi công, kết nối Biên Hòa qua Dầu Giây đến Vũng Tàu. Khi hoàn thành, Dầu Giây trở thành điểm trung chuyển giữa vùng kinh tế TP.HCM – Biên Hòa và dải duyên hải Đông Nam Bộ.",
                      },
                      {
                        n: "03",
                        name: "Cao tốc Dầu Giây – Liên Khương (Đà Lạt)",
                        status: "Quy hoạch",
                        tag: "bg-slate-100 text-slate-600",
                        desc: "Tuyến quy hoạch nối Dầu Giây với Liên Khương (Đà Lạt), dài ~209km. Khi hình thành, Dầu Giây trở thành cửa ngõ duy nhất vào Tây Nguyên theo đường cao tốc từ phía Nam.",
                      },
                    ].map((item) => (
                      <div key={item.n} className="flex gap-4 p-5 rounded-2xl border border-slate-200 hover:border-amber-200 transition-colors">
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-black text-sm flex items-center justify-center">{item.n}</span>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <p className="font-black text-slate-800">{item.name}</p>
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${item.tag}`}>{item.status}</span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ít có vị trí nào ở miền Nam có thể tự hào là điểm giao nhau của 3 tuyến
                    cao tốc. Khi cả 3 tuyến đi vào vận hành, Dầu Giây sẽ là <strong>trung tâm
                    logistics và giao thương quan trọng nhất của toàn vùng Đông Nam Bộ</strong>,
                    vượt xa vai trò hiện tại.
                  </p>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS72["4"]}
                alt="Cao tốc TP.HCM Long Thành Dầu Giây VEC E4 nút giao Dầu Giây Đồng Nai"
                caption="Cao tốc VEC E4 — trục giao thông nhanh nhất kết nối The Link City với TP.HCM chỉ 45 phút."
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 5 — Trung tâm TM */}
              <section className="mb-12">
                <SectionHeading id="trung-tam">Vị trí trung tâm thương mại Dầu Giây</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không chỉ là ngã tư cao tốc, The Link City còn nằm ngay trung tâm thương
                    mại – hành chính của huyện Thống Nhất. Điều này có nghĩa là:
                  </p>

                  <BulletList items={[
                    <><strong>Chợ Dầu Giây</strong> — họp hàng ngày ngay trung tâm thị trấn, cách dự án ~1–2km. Đây là chợ đầu mối lớn nhất huyện, nguồn thực phẩm tươi sống dồi dào.</>,
                    <><strong>Các chuỗi dịch vụ tài chính</strong> — Vietcombank, Agribank, BIDV, VietinBank đều có chi nhánh tại trung tâm Dầu Giây trong bán kính 2km.</>,
                    <><strong>Trường học các cấp</strong> — từ mầm non đến THPT, phân bổ đều trong bán kính 800m–3km. Không cần đi xa để có đủ lựa chọn giáo dục cho con em.</>,
                    <><strong>Bệnh viện và y tế</strong> — Bệnh viện Đa khoa huyện Thống Nhất trong bán kính 3–5km, phòng khám tư nhiều lựa chọn dọc QL1A.</>,
                    <><strong>Cơ quan hành chính</strong> — UBND huyện Thống Nhất và các dịch vụ công trong bán kính 3km, thuận tiện cho mọi thủ tục hành chính.</>,
                  ]} />

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/tien-ich-ngoai-khu-the-link-city-dau-giay">Xem chi tiết tiện ích ngoại khu →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 6 — Đường đến */}
              <section className="mb-12">
                <SectionHeading id="duong-den">Hướng dẫn đường đến The Link City</SectionHeading>
                <div className="pt-5 space-y-5">
                  <H3>Từ TP.HCM (Q.1 / Q.3 / Q.7)</H3>
                  <BulletList items={[
                    "Đi về hướng Đông theo đường Mai Chí Thọ hoặc Xa Lộ Hà Nội.",
                    "Vào cao tốc tại nút giao An Phú (Q.2) hoặc nút Long Phước (TP. Thủ Đức), chọn hướng Long Thành – Dầu Giây.",
                    "Đi thẳng cao tốc VEC E4 khoảng 40km, qua trạm thu phí Long Thành.",
                    "Thoát cao tốc tại nút giao Dầu Giây, đi QL1A hướng Bắc khoảng 1–2km.",
                    "The Link City nằm bên phải, ngay tại ngã tư QL1A – QL20.",
                  ]} />

                  <H3>Từ Biên Hòa</H3>
                  <BulletList items={[
                    "Đi QL1A hướng Nam (hướng Phan Thiết / Long Khánh).",
                    "Qua thị trấn Trảng Bom khoảng 15km tiếp tục QL1A.",
                    "Thêm khoảng 20km đến ngã tư Dầu Giây — The Link City bên trái đường.",
                  ]} />

                  <H3>Từ Long Khánh / Phan Thiết</H3>
                  <BulletList items={[
                    "Đi QL1A hướng TP.HCM (hướng Biên Hòa).",
                    "Đến ngã tư Dầu Giây — The Link City bên phải đường.",
                    "Khoảng cách từ Long Khánh khoảng 15km, từ Phan Thiết khoảng 130km.",
                  ]} />

                  <InfoBox>
                    Search Google Maps: <strong>&ldquo;The Link City Dầu Giây&rdquo;</strong> →
                    Landmark: Ngã tư QL1A – QL20, thị trấn Dầu Giây.
                    Hoặc gọi hotline <strong>0937.587.438</strong> để được hướng dẫn cụ thể
                    từ điểm xuất phát của bạn.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS72["5"]}
                alt="The Link City Dầu Giây nhìn từ Quốc lộ 1A mặt tiền dự án Kim Oanh Land"
                caption="The Link City nhìn từ QL1A — mặt tiền dự án ngay trung tâm thương mại Dầu Giây."
                images={images} index={4} onOpen={openLightbox}
              />

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về vị trí</SectionHeading>
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
                    { href: "/the-link-city/vi-tri",                                                   label: "Bản đồ vị trí chi tiết" },
                    { href: "/the-link-city/bang-gia",                                                 label: "Bảng giá 2026" },
                    { href: "/tin-tuc/duong-di-tu-tphcm-den-the-link-city-dau-giay",                   label: "Đường đi từ TP.HCM: 3 lộ trình" },
                    { href: "/tin-tuc/tien-ich-ngoai-khu-the-link-city-dau-giay",                      label: "Tiện ích ngoại khu trong 5km" },
                    { href: "/tin-tuc/dau-giay-len-thi-xa-2026-2030-the-link-city",                    label: "Dầu Giây lên thị xã 2026–2030" },
                    { href: "/tin-tuc/khu-cong-nghiep-dau-giay-the-link-city",                         label: "KCN Dầu Giây & nhu cầu nhà ở" },
                    { href: "/tin-tuc/san-bay-long-thanh-dau-giay-the-link-city",                      label: "The Link City cách sân bay bao xa?" },
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
                  Khoảng cách và thời gian di chuyển là ước tính trong điều kiện bình thường.
                  Thông tin quy hoạch cao tốc dựa trên tài liệu công khai, tiến độ thực tế
                  phụ thuộc quyết định của cơ quan có thẩm quyền.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5">
                  <p className="font-black text-amber-800 text-sm mb-4 uppercase tracking-wider">Khoảng cách nhanh</p>
                  <div className="space-y-2.5 text-sm">
                    {[
                      ["TP.HCM (Q.1)", "~68 km / ~50 phút"],
                      ["Sân bay Long Thành", "~30–35 km / ~30 phút"],
                      ["Biên Hòa", "~35 km / ~35 phút"],
                      ["Long Khánh", "~15 km / ~15 phút"],
                      ["Vũng Tàu", "~120 km / ~90 phút"],
                      ["Đà Lạt", "~200 km / ~3 giờ"],
                    ].map(([dest, info]) => (
                      <div key={dest} className="flex justify-between border-b border-amber-200 pb-2 last:border-0 last:pb-0">
                        <span className="text-amber-700">{dest}</span>
                        <span className="font-black text-amber-800 text-right text-xs">{info}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu The Link City</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/the-link-city",           label: "Tổng quan dự án" },
                      { href: "/the-link-city/vi-tri",    label: "Bản đồ vị trí" },
                      { href: "/the-link-city/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/the-link-city/bang-gia",  label: "Bảng giá 2026" },
                      { href: "/the-link-city/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/the-link-city/mat-bang",  label: "Mặt bằng phân lô" },
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
                  <p className="text-amber-100 text-xs mb-4">Gọi để được hướng dẫn lộ trình từ điểm xuất phát của bạn.</p>
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
            <h2 className="text-2xl font-black text-slate-900 mb-3">Muốn đến xem thực địa?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Chỉ 45 phút từ TP.HCM, ngay ngã tư cao tốc Dầu Giây. Gọi trước để được
              đón tiếp và hướng dẫn lộ trình từ điểm xuất phát của bạn.
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
              href: "/tin-tuc/duong-di-tu-tphcm-den-the-link-city-dau-giay",
              title: "Đường Đi Từ TP.HCM Đến The Link City: 3 Lộ Trình Thực Tế",
              description: "Khoảng cách, thời gian và mẹo tránh kẹt xe từ 3 điểm xuất phát khác nhau.",
              tag: "Di chuyển",
            },
            {
              href: "/tin-tuc/tien-ich-ngoai-khu-the-link-city-dau-giay",
              title: "Tiện Ích Ngoại Khu The Link City: Bệnh Viện, Trường Học & Chợ",
              description: "Hệ thống tiện ích thiết yếu trong bán kính 5km quanh dự án.",
              tag: "Tiện ích",
            },
            {
              href: "/tin-tuc/dau-giay-len-thi-xa-2026-2030-the-link-city",
              title: "Dầu Giây Lên Thị Xã 2026–2030: Lộ Trình & Tác Động Giá Đất",
              description: "5 tiêu chí đô thị và bài học tăng giá từ Dĩ An & Long Khánh.",
              tag: "Thị trường",
            },
            {
              href: "/tin-tuc/san-bay-long-thanh-dau-giay-the-link-city",
              title: "Sân Bay Long Thành & The Link City Cách Sân Bay Bao Xa?",
              description: "Khoảng cách 30–35km, lộ trình và tác động đến BĐS Dầu Giây.",
              tag: "Hạ tầng",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
