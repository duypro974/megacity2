import type { Metadata } from "next";
import Script from "next/script";
import OneEraClient from "./OneEraClient";
import { ONE_ERA_DATA } from "@/data/oneEraData";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "One Era Bình Dương – Khu Đô Thị Chuẩn Nhật Kim Oanh Group & Đối Tác",
  description:
    "Khu đô thị One Era Bình Dương (50ha Chuẩn Quốc Tế) liên doanh Kim Oanh Group & 3 tập đoàn Nhật Bản (Sumitomo Forestry, Kumagai Gumi, NTT UD). Mở bán đợt 1 phân khu Central District 357 căn giá gốc CĐT.",
  keywords: [
    "One Era",
    "One Era Bình Dương",
    "Dự án One Era",
    "Khu đô thị One Era",
    "Central District One Era",
    "One Era Thuận An",
    "Một Thế Giới Kim Oanh",
    "The One World",
    "Kim Oanh Group One Era",
    "Kinera One Era",
    "Nhà phố One Era",
    "Shophouse One Era",
  ],
  alternates: {
    canonical: "https://kimoanhdongnai.com.vn/one-era",
  },
  openGraph: {
    title: "One Era Bình Dương – Đại Đô Thị Kiểu Mẫu Kim Oanh & Đối Tác Nhật",
    description:
      "Quy mô 50ha tại Thuận An, Bình Dương kề cận tuyến Vành Đai 3 và 2 ga Metro. Mở bán 357 căn thấp tầng Central District Quý 4/2028 bàn giao.",
    url: "https://kimoanhdongnai.com.vn/one-era",
    siteName: "Kim Oanh Đồng Nai",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dqy4lfmcf/image/upload/v1792642548/oneera/hero/one-era-night-kinera-towers.webp",
        width: 1200,
        height: 630,
        alt: "Siêu đô thị One Era Bình Dương - Kim Oanh Group & Nhật Bản",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Era Bình Dương – Đại Đô Thị Kiểu Mẫu Kim Oanh & Đối Tác Nhật",
    description:
      "Dự án One Era 50ha tại TP. Thuận An, Bình Dương. Vốn đầu tư chuẩn quốc tế, chuẩn xanh Fitwel 3 sao & EDGE quốc tế.",
    images: ["https://res.cloudinary.com/dqy4lfmcf/image/upload/v1792642548/oneera/hero/one-era-night-kinera-towers.webp"],
  },
};

export default function OneEraPage() {
  const p = ONE_ERA_DATA.project;
  const d = ONE_ERA_DATA.developers;
  const faqs = ONE_ERA_DATA.faqs;

  // Schema: RealEstateListing & SingleFamilyResidence
  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: p.fullName,
    description: p.tagline,
    url: "https://kimoanhdongnai.com.vn/one-era",
    datePosted: "2026-01-01",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "VND",
      availability: "https://schema.org/InStock",
      offerCount: "357",
      description: "Mở bán đợt 1 phân khu Central District 357 căn thấp tầng",
    },
    category: "Real Estate Development",
    containedInPlace: {
      "@type": "Place",
      name: "Phường Thuận Giao, TP. Thuận An, Tỉnh Bình Dương",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mặt tiền Quốc lộ 13 & Nguyễn Thị Minh Khai",
        addressLocality: "Thuận An",
        addressRegion: "Bình Dương",
        addressCountry: "VN",
      },
    },
  };

  // Schema: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang Chủ",
        item: "https://kimoanhdongnai.com.vn",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dự Án",
        item: "https://kimoanhdongnai.com.vn/#du-an",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "One Era Bình Dương",
        item: "https://kimoanhdongnai.com.vn/one-era",
      },
    ],
  };

  // Schema: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  // Schema: Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kim Oanh Group",
    alternateName: "Kinera",
    url: "https://kimoanhdongnai.com.vn",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
  };

  return (
    <>
      {/* Schema Structured Data for SEO */}
      <Script
        id="schema-real-estate"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <OneEraClient />
    </>
  );
}
