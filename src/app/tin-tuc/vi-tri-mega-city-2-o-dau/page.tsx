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
  title: "Vị trí Mega City 2 ở đâu? Phân tích chi tiết năm 2026",
  description:
    "Khám phá vị trí Mega City 2 Nhơn Trạch, khả năng kết nối với TP.HCM, sân bay Long Thành và các tuyến giao thông trọng điểm của khu vực.",
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
    title: "Vị trí Mega City 2 ở đâu? Phân tích kết nối giao thông và tiềm năng khu vực Nhơn Trạch",
    description:
      "Khám phá vị trí Mega City 2 Nhơn Trạch, khả năng kết nối với TP.HCM, sân bay Long Thành và các tuyến giao thông trọng điểm của khu vực.",
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
    title: "Vị trí Mega City 2 ở đâu? Phân tích chi tiết năm 2026",
    description:
      "Khám phá vị trí Mega City 2 Nhơn Trạch, kết nối TP.HCM, sân bay Long Thành và hạ tầng giao thông khu vực.",
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
    "Vị trí Mega City 2 ở đâu? Phân tích khả năng kết nối và tiềm năng phát triển khu vực Nhơn Trạch",
  description:
    "Khám phá vị trí Mega City 2 Nhơn Trạch, khả năng kết nối với TP.HCM, sân bay Long Thành và các tuyến giao thông trọng điểm của khu vực.",
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
        text: "Dự án nằm tại huyện Nhơn Trạch, tỉnh Đồng Nai.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 cách TP.HCM bao xa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bạn nên tham khảo bản đồ thực tế và các tuyến đường kết nối để xác định khoảng cách cụ thể.",
      },
    },
    {
      "@type": "Question",
      name: "Vị trí Mega City 2 có gần sân bay Long Thành không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án nằm trong khu vực được hưởng lợi từ hệ thống hạ tầng đang phát triển, bao gồm sân bay quốc tế Long Thành.",
      },
    },
    {
      "@type": "Question",
      name: "Vì sao vị trí lại quan trọng khi đầu tư bất động sản?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vị trí có thể ảnh hưởng đến khả năng kết nối, tính thanh khoản và tiềm năng tăng giá của bất động sản.",
      },
    },
    {
      "@type": "Question",
      name: "Có thể xem bản đồ Mega City 2 ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Bạn có thể tham khảo thêm tại ${BASE_URL}/mega-city-2/vi-tri`,
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
