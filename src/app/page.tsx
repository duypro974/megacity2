import type { Metadata } from "next";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import ScrollRevealInit from "@/components/ScrollRevealInit";

// Homepage sections — theo đúng thứ tự cấu trúc
import HomeHero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import BusinessAreasSection from "@/components/home/BusinessAreasSection";
import ValuesSection from "@/components/home/ValuesSection";
import KimOanhGroupSection from "@/components/home/KimOanhGroupSection";
import NewsSection from "@/components/home/NewsSection";
import ContactCTA from "@/components/home/ContactCTA";
import CorpContactSection from "@/components/home/CorpContactSection";

export const metadata: Metadata = {
  title: "Kim Oanh Đồng Nai – Thông tin dự án bất động sản Kim Oanh",
  description:
    "Cổng thông tin tổng hợp các dự án bất động sản Kim Oanh tại Đồng Nai. Tìm hiểu Mega City 2 Nhơn Trạch, K-Home CityView và kết nối tư vấn.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn" },
  openGraph: {
    title: "Kim Oanh Đồng Nai – Thông tin dự án bất động sản Kim Oanh",
    description:
      "Cổng thông tin dự án bất động sản Kim Oanh tại Đồng Nai – Mega City 2 Nhơn Trạch, K-Home CityView.",
    type: "website",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
  },
};

// ─────────────────────────────────────────────────────────────
// Homepage — KIM OANH ĐỒNG NAI
// Cổng thông tin dự án bất động sản Kim Oanh tại Đồng Nai
//
// Thứ tự sections:
//   01. HEADER
//   02. HERO
//   03. GIỚI THIỆU KIM OANH
//   04. DỰ ÁN ĐANG ĐƯỢC HỖ TRỢ
//   05. TÌM KIẾM / KHÁM PHÁ DỰ ÁN
//   06. LĨNH VỰC HOẠT ĐỘNG (editorial blocks)
//   07. VÌ SAO NÊN TÌM HIỂU QUA WEBSITE
//   08. GIỚI THIỆU KIM OANH GROUP
//   09. TIN TỨC & CẬP NHẬT
//   10. CONTACT CTA
//   11. FORM LIÊN HỆ
//   12. FOOTER
// ─────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* 01. Header */}
      <CorpHeader />

      {/* Scroll reveal observer */}
      <ScrollRevealInit />

      <main>
        {/* 02. Hero */}
        <HomeHero />

        {/* 03. Giới thiệu Kim Oanh + Kim Oanh Realty subsection */}
        <IntroSection />

        {/* 04. Dự án đang được quan tâm */}
        <ProjectsSection />

        {/* 06. Lĩnh vực hoạt động Kim Oanh Group */}
        <BusinessAreasSection />

        {/* 07. Vì sao nên tìm hiểu qua website */}
        <ValuesSection />

        {/* 07. Kim Oanh Group */}
        <KimOanhGroupSection />

        {/* 08. Tin tức & cập nhật */}
        <NewsSection />

        {/* 09. Contact CTA strip */}
        <ContactCTA />

        {/* 10. Form liên hệ */}
        <CorpContactSection />
      </main>

      {/* 11. Footer */}
      <CorpFooter />
    </>
  );
}
