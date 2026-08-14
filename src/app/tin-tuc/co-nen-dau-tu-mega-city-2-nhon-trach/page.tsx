import type { Metadata } from "next";
import CoNenDauTuClient from "./CoNenDauTuClient";

// ─────────────────────────────────────────────────────────────
// Cloudinary CDN helpers (needed for schemas & OG images)
// ─────────────────────────────────────────────────────────────
const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good";
const img = (path: string, w = 1280) => `${CDN},w_${w},c_limit/${path}`;

const NEWS1 = {
  "1": img("megacity2/news1/1"),
  "2": img("megacity2/news1/2"),
  "3": img("megacity2/news1/3"),
};

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach`;
const PUBLISHED_ISO = "2026-08-13";

// ─────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026? Phân tích chi tiết",
  description:
    "Đánh giá tiềm năng đầu tư Mega City 2 Nhơn Trạch năm 2026 dựa trên vị trí, pháp lý, hạ tầng, bảng giá và khả năng tăng trưởng.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "đầu tư Mega City 2",
    "Mega City 2 Nhơn Trạch",
    "có nên mua Mega City 2",
    "giá đất Mega City 2",
    "đất nền Nhơn Trạch",
  ],
  openGraph: {
    title: "Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026?",
    description:
      "Đánh giá tiềm năng đầu tư Mega City 2 Nhơn Trạch năm 2026 dựa trên vị trí, pháp lý, hạ tầng và bảng giá.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: NEWS1["1"],
        width: 1280,
        height: 720,
        alt: "Toàn cảnh dự án Mega City 2 Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026?",
    description: "Phân tích chi tiết tiềm năng đầu tư Mega City 2 Nhơn Trạch 2026.",
    images: [NEWS1["1"]],
  },
};

// ─────────────────────────────────────────────────────────────
// JSON-LD Schemas
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026? Phân tích chi tiết",
  description:
    "Đánh giá tiềm năng đầu tư Mega City 2 Nhơn Trạch năm 2026 dựa trên vị trí, pháp lý, hạ tầng, bảng giá và khả năng tăng trưởng.",
  image: [NEWS1["1"], NEWS1["2"], NEWS1["3"]],
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
    "đầu tư Mega City 2, Mega City 2 Nhơn Trạch, có nên mua Mega City 2, giá đất Mega City 2, đất nền Nhơn Trạch",
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
      name: "Giá đất Mega City 2 hiện nay là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mức giá tham khảo dao động từ khoảng 1,15 tỷ đồng tùy theo loại sản phẩm và vị trí. Giá thực tế có thể thay đổi theo thị trường và thời điểm giao dịch.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có phù hợp để đầu tư dài hạn không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Điều này phụ thuộc vào mục tiêu đầu tư, khả năng tài chính và chiến lược của từng nhà đầu tư. Cần nghiên cứu kỹ pháp lý, tiến độ và biến động thị trường trước khi quyết định.",
      },
    },
    {
      "@type": "Question",
      name: "Pháp lý của Mega City 2 như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà đầu tư nên kiểm tra trực tiếp các tài liệu pháp lý mới nhất trước khi giao dịch. Xem thêm tại trang pháp lý của dự án.",
      },
    },
    {
      "@type": "Question",
      name: "Có thể xem bảng giá Mega City 2 ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Bạn có thể tham khảo bảng giá cập nhật tại ${BASE_URL}/mega-city-2/bang-gia`,
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
      name: "Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026?",
      item: PAGE_URL,
    },
  ],
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
export default function CoNenDauTuPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <CoNenDauTuClient />
    </>
  );
}
