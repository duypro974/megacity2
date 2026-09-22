import type { Metadata } from "next";
import ViTriMegaCity2Client from "./ViTriMegaCity2Client";

// ─────────────────────────────────────────────────────────────
// Cloudinary CDN helpers
// ─────────────────────────────────────────────────────────────
const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good";
const img = (path: string, w = 1280) => `${CDN},w_${w},c_limit/${path}`;

const NEWS3 = {
  "1": img("megacity2/news3/1"),
  "2": img("megacity2/news3/2"),
  "3": img("megacity2/news3/3"),
};

const BASE_URL   = "https://kimoanhdongnai.com.vn";
const PAGE_URL   = `${BASE_URL}/tin-tuc/vi-tri-mega-city-2-o-dau`;
const PUBLISHED_ISO = "2026-08-14";

// ─────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // SEO update 2026-09-22 — Hướng B differentiation:
  // Bài này = góc nhìn hỏi đáp / hướng dẫn ("ở đâu?", "đi bằng đường nào?")
  // /mega-city-2/vi-tri = trang chính thức với số liệu kỹ thuật, bản đồ, khoảng cách chính xác
  // Hai trang phục vụ intent khác nhau → giữ cả hai, KHÔNG redirect
  title: "Mega City 2 Ở Đâu? Cách TP.HCM Bao Xa & Đi Bằng Đường Nào? (2026)",
  description:
    "Mega City 2 Nhơn Trạch nằm trên đường 25C, cách TP.HCM 30–35 km. Hướng dẫn 3 đường đi từ trung tâm: đường 25C, phà Cát Lái và cao tốc Bến Lức–Long Thành. Xem bản đồ và phân tích chi tiết.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "vị trí Mega City 2",
    "Mega City 2 ở đâu",
    "bản đồ Mega City 2",
    "vị trí dự án Mega City 2",
    "Mega City 2 Nhơn Trạch",
    "kết nối giao thông Mega City 2",
    "bất động sản Nhơn Trạch",
  ],
  openGraph: {
    title: "Mega City 2 Ở Đâu? Cách TP.HCM Bao Xa & Đi Bằng Đường Nào? (2026)",
    description:
      "Đường 25C, cách TP.HCM 30–35 km. 3 tuyến di chuyển: đường 25C, phà Cát Lái, cao tốc Bến Lức–Long Thành. Phân tích giao thông khu vực Nhơn Trạch.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: NEWS3["1"],
        width: 1280,
        height: 720,
        alt: "Bản đồ vị trí dự án Mega City 2 tại Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega City 2 Ở Đâu? Cách TP.HCM Bao Xa? (2026)",
    description:
      "Đường 25C, Nhơn Trạch, cách TP.HCM 30–35 km. 3 tuyến đi: đường 25C, phà Cát Lái, cao tốc Bến Lức–Long Thành.",
    images: [NEWS3["1"]],
  },
};

// ─────────────────────────────────────────────────────────────
// JSON-LD Schemas
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Mega City 2 Ở Đâu? Cách TP.HCM Bao Xa & Đi Bằng Đường Nào? (2026)",
  description:
    "Mega City 2 nằm trên đường 25C, xã Nhơn Trạch, Đồng Nai. Cách TP.HCM 30–35 km. Hướng dẫn 3 tuyến di chuyển và phân tích kết nối giao thông khu vực.",
  image: [NEWS3["1"], NEWS3["2"], NEWS3["3"]],
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
    "@type": "RealEstateListing",
    name: "Mega City 2 Nhơn Trạch",
    url: `${BASE_URL}/mega-city-2`,
  },
  keywords:
    "vị trí Mega City 2, Mega City 2 ở đâu, bản đồ Mega City 2, Mega City 2 Nhơn Trạch, kết nối giao thông Mega City 2, bất động sản Nhơn Trạch",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mega City 2 nằm ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mega City 2 tọa lạc tại Đường 25C, xã Nhơn Trạch, tỉnh Đồng Nai. Dự án nằm trong tam giác phát triển TP.HCM – Long Thành – Nhơn Trạch.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 cách TP.HCM bao xa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mega City 2 cách trung tâm TP.HCM khoảng 30–35 km theo đường 25C. Thời gian di chuyển khoảng 45–60 phút qua đường 25C và cao tốc Bến Lức – Long Thành, hoặc 25–35 phút qua phà Cát Lái sang Quận 2.",
      },
    },
    {
      "@type": "Question",
      name: "Vị trí Mega City 2 có gần sân bay Long Thành không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Sân bay quốc tế Long Thành cách Mega City 2 khoảng 15–20 km, di chuyển khoảng 20–25 phút theo đường hiện hữu.",
      },
    },
    {
      "@type": "Question",
      name: "Từ Mega City 2 đi TP.HCM bằng đường nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có 3 tuyến chính: (1) Đường 25C – cao tốc Bến Lức Long Thành (~45–60 phút đến Q1); (2) Phà Cát Lái sang Quận 2 (~25–35 phút); (3) Khi cầu Nhơn Trạch hoàn thành, thời gian rút ngắn còn 20–25 phút.",
      },
    },
    {
      "@type": "Question",
      name: "Có thể xem bản đồ và số liệu chính xác về vị trí Mega City 2 ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Xem trang vị trí chính thức tại ${BASE_URL}/mega-city-2/vi-tri với bản đồ Google Maps nhúng, khoảng cách đến 6 điểm kết nối vùng và phân tích chi tiết 6 trục giao thông quan trọng.`,
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
      name: "Vị trí Mega City 2 ở đâu?",
      item: PAGE_URL,
    },
  ],
};

const placeSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Mega City 2 Nhơn Trạch",
  description:
    "Dự án bất động sản tại huyện Nhơn Trạch, tỉnh Đồng Nai, kết nối thuận lợi với TP.HCM và sân bay Long Thành.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nhơn Trạch",
    addressRegion: "Đồng Nai",
    addressCountry: "VN",
  },
  url: `${BASE_URL}/mega-city-2/vi-tri`,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Kim Oanh Đồng Nai",
  url: BASE_URL,
  logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+840937587438",
    contactType: "sales",
    availableLanguage: "Vietnamese",
  },
};

// ─────────────────────────────────────────────────────────────
// Page (Server Component)
// ─────────────────────────────────────────────────────────────
export default function ViTriMegaCity2Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <ViTriMegaCity2Client />
    </>
  );
}
