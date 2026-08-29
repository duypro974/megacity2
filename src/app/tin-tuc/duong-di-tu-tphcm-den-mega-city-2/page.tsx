"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS37 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/duong-di-tu-tphcm-den-mega-city-2`;
const PUBLISHED     = "29/08/2026";
const PUBLISHED_ISO = "2026-08-29";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Khoảng cách từ Mega City 2 đến trung tâm TP.HCM: Các hướng di chuyển thực tế",
  description:
    "Hướng dẫn chi tiết các hướng đường đi từ trung tâm TP.HCM đến Mega City 2 Nhơn Trạch: qua phà Cát Lái, Cao tốc Long Thành và cầu Nhơn Trạch (Vành đai 3).",
  image: [IMG_NEWS37["1"], IMG_NEWS37["2"], IMG_NEWS37["3"]],
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
    "đường đi Mega City 2, khoảng cách Mega City 2 đến TP.HCM, từ Mega City 2 đi TP.HCM bao xa, di chuyển từ quận 2 sang Mega City 2, vị trí Mega City 2 Nhơn Trạch",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Từ trung tâm TP.HCM đi xe máy đến Mega City 2 mất bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nếu đi xe máy từ Quận 1 qua hầm Thủ Thiêm và phà Cát Lái, thời gian di chuyển thường mất khoảng 45–55 phút, tùy thuộc vào mật độ phương tiện tại bến phà và trên đường.",
      },
    },
    {
      "@type": "Question",
      name: "Đi ô tô từ TP. Thủ Đức đến Mega City 2 theo đường nào nhanh nhất?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hướng nhanh nhất cho ô tô là đi Cao tốc TP.HCM – Long Thành – Dầu Giây, rẽ xuống nút giao đường 319 rồi đi theo trục Tôn Đức Thắng vào dự án. Thời gian di chuyển khoảng 30–35 phút trong điều kiện giao thông thuận lợi.",
      },
    },
    {
      "@type": "Question",
      name: "Tuyến đường 25C có kết nối thẳng từ Mega City 2 đến sân bay Long Thành không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đúng. Theo quy hoạch, đường 25C là trục đại lộ chạy qua vùng lõi Nhơn Trạch và kết nối vào khu vực sân bay Long Thành, đây là một trong những lý do Mega City 2 được đánh giá có vị trí kết nối vùng thuận lợi.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 cách cầu Nhơn Trạch bao xa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Từ cầu Nhơn Trạch (thuộc tuyến Vành đai 3 TP.HCM) đến khu vực dự án Mega City 2 khoảng 5–8 km theo trục đường 25C hoặc đường Tôn Đức Thắng.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 cách trung tâm Quận 1 bao nhiêu km?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khoảng cách tuyến đường từ trung tâm Quận 1 (Chợ Bến Thành) đến Mega City 2 dao động từ 25–30 km tùy hướng di chuyển. Hướng qua phà Cát Lái là cự ly ngắn nhất.",
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
      name: "Đường đi từ TP.HCM đến Mega City 2",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS37["1"],
    alt: "Sơ đồ hướng tuyến đường đi từ trung tâm TP.HCM đến dự án Mega City 2 Nhơn Trạch",
    caption: "3 hướng kết nối từ TP.HCM đến Mega City 2 Nhơn Trạch: phà Cát Lái, cao tốc và cầu Nhơn Trạch",
  },
  {
    src: IMG_NEWS37["2"],
    alt: "Lộ trình di chuyển từ Quận 2 qua phà Cát Lái đến dự án Mega City 2",
    caption: "Hướng qua phà Cát Lái là lộ trình ngắn nhất cho xe máy và ô tô từ khu vực Quận 2 cũ",
  },
  {
    src: IMG_NEWS37["3"],
    alt: "Nút giao đường 319 kết nối cao tốc dẫn thẳng về dự án Mega City 2",
    caption: "Nút giao đường 319 trên tuyến Cao tốc TP.HCM – Long Thành – Dầu Giây dẫn về Nhơn Trạch",
  },
  {
    src: IMG_NEWS37["4"],
    alt: "Cầu Nhơn Trạch thuộc Vành đai 3 kết nối trực tiếp TP.HCM và khu vực Mega City 2",
    caption: "Cầu Nhơn Trạch trên tuyến Vành đai 3 TP.HCM — hướng kết nối trực tiếp không qua phà",
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

// ─── Hướng di chuyển data ──────────────────────────────────────────────────
const ROUTES = [
  {
    id: "pha-cat-lai",
    n: 1,
    title: "Qua Phà Cát Lái",
    subtitle: "Lộ trình ngắn nhất từ Quận 2 cũ",
    badge: "Xe máy & ô tô",
    badgeColor: "bg-blue-100 text-blue-700",
    distance: "~22–25 km",
    time: "~45–55 phút",
    color: "border-blue-200 bg-blue-50",
    steps: [
      "Từ Quận 1, qua hầm Thủ Thiêm vào đại lộ Mai Chí Thọ",
      "Rẽ vào đường Đồng Văn Cống, qua vòng xoay Mỹ Thủy đến bến Phà Cát Lái",
      "Qua phà sang địa phận xã Phú Hữu (Nhơn Trạch), tiếp tục theo đường Lý Thái Tổ (ĐT 769) khoảng 8 km",
      "Rẽ vào đường Nguyễn Hữu Cảnh / Tôn Đức Thắng đến cổng dự án Mega City 2 tại xã Phú Hội",
    ],
    pros: "Cự ly ngắn nhất, đường bằng phẳng, phù hợp cả xe máy",
    note: "Có thể đông xe vào giờ cao điểm hoặc dịp lễ tết tại bến phà",
  },
  {
    id: "cao-toc-319",
    n: 2,
    title: "Qua Cao tốc & Đường 319",
    subtitle: "Nhanh nhất dành cho ô tô từ khu Đông Sài Gòn",
    badge: "Chỉ ô tô",
    badgeColor: "bg-amber-100 text-amber-700",
    distance: "~30–32 km",
    time: "~30–35 phút",
    color: "border-amber-200 bg-amber-50",
    steps: [
      "Từ nút giao An Phú (TP. Thủ Đức), lên Cao tốc TP.HCM – Long Thành – Dầu Giây",
      "Chạy cao tốc ~12 km đến nút giao đường 319 (đã thông xe và khai thác chính thức)",
      "Rẽ xuống nút giao, đi theo đường 319 qua các KCN Nhơn Trạch đến ngã ba Tôn Đức Thắng",
      "Rẽ phải theo đường Tôn Đức Thắng, rẽ vào đường Nguyễn Hữu Cảnh đến dự án",
    ],
    pros: "Cao tốc thông thoáng, không phụ thuộc giờ chạy phà",
    note: "Chỉ áp dụng cho ô tô, có trạm thu phí theo quy định",
  },
  {
    id: "cau-nhon-trach",
    n: 3,
    title: "Qua Cầu Nhơn Trạch (Vành đai 3)",
    subtitle: "Hướng kết nối mới — không qua phà",
    badge: "Ô tô & Xe tải",
    badgeColor: "bg-emerald-100 text-emerald-700",
    distance: "~18–22 km",
    time: "~25–30 phút (dự kiến)",
    color: "border-emerald-200 bg-emerald-50",
    steps: [
      "Từ TP. Thủ Đức (nút giao Vành đai 3), di chuyển trực tiếp qua cầu Nhơn Trạch vượt sông Đồng Nai",
      "Xuống cầu sang địa phận Nhơn Trạch, đấu nối vào tuyến đường 25C hoặc Tôn Đức Thắng",
      "Chạy theo trục 25C khoảng 5–7 phút tiếp cận khu đô thị Mega City 2",
    ],
    pros: "Kết nối trực tiếp, không qua phà, rút ngắn đáng kể thời gian di chuyển",
    note: "Đã khai thác từ 20/8/2025, là hướng kết nối mới quan trọng nhất của khu vực",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function DuongDiMegaCity2Page() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Đường đi từ TP.HCM đến Mega City 2</span>
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
              <span className="text-xs text-slate-400">· 10 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Khoảng cách từ Mega City 2 đến trung tâm TP.HCM: Các hướng di chuyển thực tế
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích 3 lộ trình đường đi từ TP.HCM đến{" "}
              <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">
                Mega City 2 Nhơn Trạch
              </a>
              : qua phà Cát Lái, Cao tốc Long Thành và cầu Nhơn Trạch — kèm bảng so sánh
              cự ly, thời gian và ưu nhược điểm từng hướng.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to bản đồ đường đi Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS37["1"]}
                alt="Sơ đồ hướng tuyến đường đi từ trung tâm TP.HCM đến dự án Mega City 2 Nhơn Trạch"
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
              3 hướng kết nối từ TP.HCM đến Mega City 2 Nhơn Trạch: phà Cát Lái, cao tốc và cầu Nhơn Trạch
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
                    ["#khoang-cach",  "Khoảng cách tổng quan"],
                    ["#huong-1",      "Hướng 1: Qua Phà Cát Lái"],
                    ["#huong-2",      "Hướng 2: Qua Cao tốc & Đường 319"],
                    ["#huong-3",      "Hướng 3: Qua Cầu Nhơn Trạch"],
                    ["#so-sanh",      "Bảng so sánh 3 hướng di chuyển"],
                    ["#ket-noi-vung", "Kết nối đến các khu vực khác"],
                    ["#faq",          "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Khoảng cách tổng quan */}
              <section className="mb-12" id="khoang-cach">
                <SectionHeading>Khoảng cách từ trung tâm TP.HCM đến Mega City 2 Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dự án Mega City 2 Nhơn Trạch tọa lạc tại vị trí trung tâm huyện Nhơn Trạch,
                    tỉnh Đồng Nai — trong vùng đô thị vệ tinh phía Đông TP.HCM. Khoảng cách đến
                    các khu vực trọng điểm:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { label: "TP. Thủ Đức (Q.2, Q.9 cũ)",  value: "15–22 km",  note: "Tùy hướng qua phà hoặc cao tốc" },
                      { label: "Trung tâm Quận 1",             value: "25–30 km",  note: "Chợ Bến Thành, Phố đi bộ Nguyễn Huệ" },
                      { label: "Sân bay Long Thành",           value: "12–15 km",  note: "Qua trục đường 25C" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center">
                        <p className="font-black text-amber-700 text-xl mb-1">{item.value}</p>
                        <p className="text-slate-700 text-xs font-semibold mb-1">{item.label}</p>
                        <p className="text-slate-500 text-[11px]">{item.note}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tùy phương tiện và điểm xuất phát, người dân có thể lựa chọn 3 lộ trình
                    di chuyển chính. Mỗi hướng có đặc điểm, ưu nhược điểm và phù hợp với loại
                    phương tiện khác nhau.
                  </p>

                  <InfoBox>
                    Khoảng cách và thời gian di chuyển trong bài mang tính tham khảo theo điều
                    kiện giao thông bình thường. Thực tế có thể thay đổi tùy khung giờ, mùa
                    mưa hoặc các sự kiện đặc biệt tại TP.HCM và Nhơn Trạch.
                  </InfoBox>
                </div>
              </section>

              {/* 3 Hướng di chuyển */}
              {ROUTES.map((route, idx) => (
                <section key={route.id} className="mb-12" id={`huong-${route.n}`}>
                  <SectionHeading>{`Hướng ${route.n}: ${route.title}`}</SectionHeading>
                  <div className="pt-5 space-y-5">
                    <p className="text-slate-600 text-[17px] leading-[1.85]">
                      {route.subtitle}
                    </p>

                    {/* Stats bar */}
                    <div className="flex flex-wrap gap-3">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${route.badgeColor}`}>
                        🚗 {route.badge}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">
                        📍 {route.distance}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">
                        ⏱ {route.time}
                      </span>
                    </div>

                    {/* Route flow */}
                    <div className={`rounded-2xl border p-5 ${route.color}`}>
                      <p className="font-bold text-slate-700 text-sm mb-3">Lộ trình chi tiết:</p>
                      <ol className="space-y-2">
                        {route.steps.map((step, i) => (
                          <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                            <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-black text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                        <p className="text-xs font-bold text-emerald-700 mb-1">✅ Ưu điểm</p>
                        <p className="text-emerald-700 text-sm">{route.pros}</p>
                      </div>
                      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                        <p className="text-xs font-bold text-amber-700 mb-1">⚠️ Lưu ý</p>
                        <p className="text-amber-700 text-sm">{route.note}</p>
                      </div>
                    </div>

                    {/* Internal links per section */}
                    {idx === 1 && (
                      <div className="flex flex-wrap gap-3">
                        <LinkBtn href="/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat">
                          Hạ tầng giao thông Nhơn Trạch mới nhất →
                        </LinkBtn>
                      </div>
                    )}
                    {idx === 2 && (
                      <div className="flex flex-wrap gap-3">
                        <LinkBtn href="/tin-tuc/vanh-dai-3">
                          Tiến độ đường Vành đai 3 đoạn qua Đồng Nai →
                        </LinkBtn>
                        <LinkBtn href="/tin-tuc/cau-nhon-trach">
                          Cầu Nhơn Trạch 2026 →
                        </LinkBtn>
                      </div>
                    )}
                  </div>

                  {/* Article figure for each route */}
                  {idx < 3 && (
                    <div className="mt-6">
                      <ArticleFigure
                        src={IMG_NEWS37[String(idx + 2) as "2" | "3" | "4"]}
                        alt={LIGHTBOX_IMAGES[idx + 1].alt}
                        caption={LIGHTBOX_IMAGES[idx + 1].caption}
                        images={images}
                        index={idx + 1}
                        onOpen={openLightbox}
                      />
                    </div>
                  )}
                </section>
              ))}

              {/* Bảng so sánh */}
              <section className="mb-12" id="so-sanh">
                <SectionHeading>Bảng so sánh 3 hướng di chuyển đến Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[580px]">
                      <thead>
                        <tr className="bg-amber-500 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-28">Tiêu chí</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Hướng 1: Phà Cát Lái</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Hướng 2: Cao tốc + 319</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Hướng 3: Cầu Nhơn Trạch</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Phương tiện",   "Xe máy & ô tô",         "Chỉ ô tô",                  "Ô tô & xe tải"],
                          ["Cự ly",         "~22–25 km",              "~30–32 km",                 "~18–22 km"],
                          ["Thời gian",     "~45–55 phút",            "~30–35 phút",               "~25–30 phút (dự kiến)"],
                          ["Đặc điểm",      "Qua đường dân sinh, phà","Cao tốc tiêu chuẩn",        "Cầu vượt sông trực tiếp"],
                          ["Hiện trạng",    "Khai thác hàng ngày",    "Thông suốt, có phí",        "Đã khai thác từ 20/8/2025"],
                          ["Phù hợp nhất",  "Xe máy, giờ không cao điểm","Ô tô, giờ cao điểm",   "Ô tô, đặc biệt ban ngày"],
                        ].map(([tc, h1, h2, h3], i) => (
                          <tr key={tc} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700">{tc}</td>
                            <td className="px-4 py-3 text-blue-700 font-medium text-sm">{h1}</td>
                            <td className="px-4 py-3 text-amber-700 font-medium text-sm">{h2}</td>
                            <td className="px-4 py-3 text-emerald-700 font-medium text-sm">{h3}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-500 italic mt-2">
                      Cự ly và thời gian mang tính tham khảo. Thực tế phụ thuộc vào điều kiện
                      giao thông tại từng thời điểm.
                    </p>
                  </div>
                </div>
              </section>

              {/* Kết nối vùng */}
              <section className="mb-12" id="ket-noi-vung">
                <SectionHeading>Vị trí Mega City 2 kết nối đến các khu vực trọng điểm khác</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ngoài kết nối về TP.HCM, vị trí Mega City 2 còn thuận lợi tiếp cận các khu
                    vực kinh tế quan trọng trong vùng Đông Nam Bộ:
                  </p>

                  <div className="space-y-2">
                    {[
                      { label: "Trung tâm Hành chính huyện Nhơn Trạch",      dist: "~1,5–2 km",  note: "UBND huyện, Công an, Tòa án, Bưu điện" },
                      { label: "Cụm KCN Nhơn Trạch (1, 2, 3, 5, 6)",         dist: "~3–5 km",    note: "Thuận tiện cho chuyên gia, kỹ sư đi làm hàng ngày" },
                      { label: "Sân bay Quốc tế Long Thành",                  dist: "~12–15 km",  note: "Theo trục đại lộ 25C" },
                      { label: "TP. Biên Hòa",                                dist: "~35 km",     note: "Theo QL51 hoặc đường Huỳnh Văn Nghệ" },
                      { label: "TP. Vũng Tàu",                                dist: "~60 km",     note: "Theo Cao tốc Biên Hòa – Vũng Tàu hoặc QL51" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-300 transition-colors">
                        <div className="flex-shrink-0 font-black text-amber-600 text-sm w-16 text-center">{item.dist}</div>
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">{item.label}</p>
                          <p className="text-slate-500 text-xs">{item.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/vi-tri-mega-city-2-o-dau">
                      Vị trí Mega City 2 ở đâu? →
                    </LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">
                      Trang vị trí & liên kết vùng →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về đường đi Mega City 2</SectionHeading>
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
                    { href: "/mega-city-2",                                    label: "Mega City 2 Nhơn Trạch — Tổng quan dự án" },
                    { href: "/tin-tuc/vi-tri-mega-city-2-o-dau",               label: "Vị trí Mega City 2 ở đâu?" },
                    { href: "/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach",label: "Mặt bằng phân lô Mega City 2" },
                    { href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2",           label: "Hạ tầng kỹ thuật Mega City 2" },
                    { href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",          label: "Bảng giá Mega City 2 mới nhất" },
                    { href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat", label: "Hạ tầng giao thông Nhơn Trạch" },
                    { href: "/tin-tuc/cau-nhon-trach",                         label: "Cầu Nhơn Trạch 2026" },
                    { href: "/tin-tuc/duong-25c",                              label: "Đường 25C Nhơn Trạch" },
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
                    Việc nắm rõ các hướng đường đi Mega City 2 giúp người mua chủ động lựa
                    chọn lộ trình di chuyển nhanh chóng và thuận tiện nhất. Hiện tại đã có 2
                    hướng đường khai thác ổn định: qua phà Cát Lái (phù hợp mọi phương tiện)
                    và qua cao tốc Long Thành + đường 319 (tối ưu cho ô tô). Cầu Nhơn Trạch
                    đã khai thác từ 20/8/2025 bổ sung thêm hướng kết nối thứ ba không qua phà.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với hạ tầng giao thông đang tiếp tục hoàn thiện, khoảng cách di chuyển giữa
                    TP.HCM và Mega City 2 Nhơn Trạch đang được rút ngắn rõ rệt theo từng giai
                    đoạn phát triển hạ tầng vùng.
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
                      { href: "/mega-city-2/vi-tri",    label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/mat-bang",  label: "Mặt bằng tổng thể" },
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
                  <p className="font-bold text-slate-800 text-sm mb-3">Hạ tầng giao thông</p>
                  <div className="space-y-3">
                    {[
                      { label: "Cầu Nhơn Trạch 2026",           href: "/tin-tuc/cau-nhon-trach" },
                      { label: "Đường 25C Nhơn Trạch",           href: "/tin-tuc/duong-25c" },
                      { label: "Vành đai 3 TP.HCM 2026",         href: "/tin-tuc/vanh-dai-3" },
                      { label: "Hạ tầng giao thông Nhơn Trạch",  href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Đặt lịch khảo sát</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Liên hệ để được hỗ trợ xe đưa đón tham quan thực địa Mega City 2.
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
              Bạn cần bản đồ chỉ đường hoặc xe đưa đón khảo sát thực tế?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Liên hệ để nhận hỗ trợ đặt lịch tham quan thực địa và thông tin bảng giá Mega
              City 2 mới nhất.
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
              href: "/tin-tuc/vi-tri-mega-city-2-o-dau",
              title: "Vị Trí Mega City 2 Ở Đâu? Kết Nối Giao Thông & Tiềm Năng",
              description: "Phân tích vị trí, khả năng kết nối với TP.HCM và sân bay Long Thành.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/cau-nhon-trach",
              title: "Cầu Nhơn Trạch 2026: Kết Nối Giao Thông & Tác Động BĐS",
              description: "Cầu Nhơn Trạch đã khai thác từ 20/8/2025, phân tích tác động khu vực.",
              tag: "Thị trường",
            },
            {
              href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat",
              title: "Hạ Tầng Giao Thông Nhơn Trạch Mới Nhất 2026",
              description: "Cập nhật toàn bộ các tuyến giao thông trọng điểm tại Nhơn Trạch.",
              tag: "Thị trường",
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
