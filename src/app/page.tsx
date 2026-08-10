import type { Metadata } from "next";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import HomeHero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import ProjectsSection from "@/components/home/ProjectsSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import PartnersSection from "@/components/home/PartnersSection";
import CorpContactSection from "@/components/home/CorpContactSection";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export const metadata: Metadata = {
  title: "Kim Oanh Group – Kiến Tạo Cộng Đồng, Phát Triển Bền Vững",
  description:
    "Kim Oanh Group – Tập đoàn Địa ốc thành lập năm 2009, chuyên phát triển các dự án khu dân cư và nhà ở tại Đông Nam Bộ. Mega City 2, K-Home CityView, K-Home Avenue, K-Home Midtown.",
  alternates: { canonical: "https://kimoanh.com" },
};

export default function CorporateHomePage() {
  return (
    <>
      <CorpHeader />
      <ScrollRevealInit />

      <main>
        {/* Hero — full-screen editorial */}
        <HomeHero />

        {/* Về Kim Oanh — brand intro + pillars */}
        <BrandIntro />

        {/* Dự án — project cards grid */}
        <ProjectsSection />

        {/* Lãnh đạo & Hành trình */}
        <LeadershipSection />

        {/* Đối tác chiến lược */}
        <PartnersSection />

        {/* Liên hệ & Form đăng ký */}
        <CorpContactSection />
      </main>

      <CorpFooter />
    </>
  );
}
