import type { Metadata } from "next";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import ScrollRevealInit from "@/components/ScrollRevealInit";

import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import VisionMission from "@/components/about/VisionMission";
import BusinessPhilosophy from "@/components/about/BusinessPhilosophy";
import CoreValues from "@/components/about/CoreValues";
import Timeline from "@/components/about/Timeline";
import EcosystemSection from "@/components/about/EcosystemSection";
import LeadershipSection from "@/components/about/LeadershipSection";
import AwardsSection from "@/components/about/AwardsSection";
import AboutNewsSection from "@/components/about/AboutNewsSection";
import AboutCTA from "@/components/about/AboutCTA";
import { COMPANY_INFO } from "@/data/companyInfo";

export const metadata: Metadata = {
  title: "Về chúng tôi – Kim Oanh Đồng Nai",
  description:
    "Tìm hiểu về Kim Oanh Group – Tập đoàn bất động sản với hệ sinh thái đa dạng. Tầm nhìn, sứ mệnh, triết lý kinh doanh và hành trình phát triển.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/ve-chung-toi" },
  openGraph: {
    title: "Về Kim Oanh – Kim Oanh Đồng Nai",
    description: COMPANY_INFO.description,
    type: "website",
    locale: "vi_VN",
  },
};

// ─────────────────────────────────────────────────────────────
// JSON-LD — BreadcrumbList
// ─────────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://kimoanhdongnai.com.vn" },
    { "@type": "ListItem", position: 2, name: "Về chúng tôi", item: "https://kimoanhdongnai.com.vn/ve-chung-toi" },
  ],
};

// ─────────────────────────────────────────────────────────────
// JSON-LD — Organization
//   Dữ liệu lấy từ COMPANY_INFO và SITE_CONFIG — chỉ điền field
//   có dữ liệu đã xác thực, bỏ qua founding year (không có trong codebase).
// ─────────────────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://kimoanhdongnai.com.vn/#organization",
  name: "Kim Oanh Group",
  alternateName: "Tập đoàn Kim Oanh",
  url: "https://kimoanhdongnai.com.vn",
  logo: {
    "@type": "ImageObject",
    url: "https://kimoanhdongnai.com.vn/KOG_Web_RGB_01.svg",
  },
  description: COMPANY_INFO.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "268A Phan Trung",
    addressLocality: "Phường Tam Hiệp",
    addressRegion: "Đồng Nai",
    addressCountry: "VN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+840937587438",
    contactType: "sales",
    availableLanguage: "Vietnamese",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
  },
  email: "k.homekog@gmail.com",
  sameAs: [
    "https://www.facebook.com/kimoanhhomes",
    "https://zalo.me/0937587438",
  ],
  knowsAbout: [
    "Bất động sản",
    "Phát triển khu đô thị",
    "Đất nền Nhơn Trạch",
    "Đất nền Dầu Giây",
  ],
};

// ─────────────────────────────────────────────────────────────
// JSON-LD — AboutPage (wraps Organization as mainEntity)
// ─────────────────────────────────────────────────────────────
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://kimoanhdongnai.com.vn/ve-chung-toi",
  url: "https://kimoanhdongnai.com.vn/ve-chung-toi",
  name: "Về chúng tôi – Kim Oanh Đồng Nai",
  description:
    "Tìm hiểu về Kim Oanh Group – tầm nhìn, sứ mệnh, triết lý kinh doanh và hành trình phát triển tập đoàn bất động sản tại Đồng Nai.",
  isPartOf: { "@type": "WebSite", url: "https://kimoanhdongnai.com.vn" },
  mainEntity: { "@id": "https://kimoanhdongnai.com.vn/#organization" },
};

// ─────────────────────────────────────────────────────────────
// Trang VỀ CHÚNG TÔI — /ve-chung-toi
//
// Nội dung: Giới thiệu Kim Oanh Group (tham khảo từ nguồn công khai)
// KIM OANH ĐỒNG NAI là kênh thông tin — không phải website chính thức KOG
// ─────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <CorpHeader />
      <ScrollRevealInit />

      <main>
        {/* 01. Hero */}
        <AboutHero />

        {/* 02. Kim Oanh Group là ai? */}
        <AboutIntro />

        {/* 03. Tầm nhìn & Sứ mệnh */}
        <VisionMission />

        {/* 04. Triết lý kinh doanh */}
        <BusinessPhilosophy />

        {/* 05. Giá trị cốt lõi */}
        <CoreValues />

        {/* 06. Hành trình phát triển */}
        <Timeline />

        {/* 07. Hệ sinh thái */}
        <EcosystemSection />

        {/* 08. Đội ngũ lãnh đạo */}
        <LeadershipSection />

        {/* 09. Giải thưởng & Dấu ấn */}
        <AwardsSection />

        {/* 10. Tin tức nổi bật */}
        <AboutNewsSection />

        {/* 11. CTA */}
        <AboutCTA />
      </main>

      <CorpFooter />
    </>
  );
}
