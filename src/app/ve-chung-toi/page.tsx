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
// Trang VỀ CHÚNG TÔI — /ve-chung-toi
//
// Nội dung: Giới thiệu Kim Oanh Group (tham khảo từ nguồn công khai)
// KIM OANH ĐỒNG NAI là kênh thông tin — không phải website chính thức KOG
// ─────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
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
