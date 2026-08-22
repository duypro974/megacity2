import type { Metadata } from "next";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import LeadPopup from "@/components/LeadPopup";

// Homepage sections — theo đúng thứ tự cấu trúc
import HomeHero from "@/components/home/Hero";
import ProjectsSection from "@/components/home/ProjectsSection";
import BusinessAreasSection from "@/components/home/BusinessAreasSection";
import ValuesSection from "@/components/home/ValuesSection";
import NewsSection from "@/components/home/NewsSection";
import ContactCTA from "@/components/home/ContactCTA";
import CorpContactSection from "@/components/home/CorpContactSection";

export const metadata: Metadata = {
  title: "Kim Oanh Đồng Nai – Thông tin dự án bất động sản Kim Oanh",
  description:
    "Cổng thông tin tổng hợp các dự án bất động sản Kim Oanh tại Đồng Nai. Tìm hiểu Mega City 2 Nhơn Trạch, K-Home CityView và kết nối tư vấn.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn" },
  // E-E-A-T: khai báo tác giả/tổ chức xuất bản
  authors: [{ name: "Ban biên tập KIM OANH ĐỒNG NAI" }],
  openGraph: {
    title: "Kim Oanh Đồng Nai – Thông tin dự án bất động sản Kim Oanh",
    description:
      "Cổng thông tin dự án bất động sản Kim Oanh tại Đồng Nai – Mega City 2 Nhơn Trạch, K-Home CityView.",
    url: "https://kimoanhdongnai.com.vn",
    type: "website",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [
      {
        url: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/megacity2/overview/1.jpg",
        width: 1280,
        height: 720,
        alt: "Kim Oanh Đồng Nai – Mega City 2 Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kim Oanh Đồng Nai – Thông tin dự án bất động sản Kim Oanh",
    description:
      "Cổng thông tin dự án bất động sản Kim Oanh tại Đồng Nai – Mega City 2 Nhơn Trạch, K-Home CityView.",
    images: [
      "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/megacity2/overview/1.jpg",
    ],
  },
};

// ─────────────────────────────────────────────────────────────
// JSON-LD WebPage — E-E-A-T: author, publisher, dateModified
// ─────────────────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Kim Oanh Đồng Nai – Thông tin dự án bất động sản Kim Oanh",
  url: "https://kimoanhdongnai.com.vn",
  description:
    "Cổng thông tin tổng hợp các dự án bất động sản Kim Oanh tại Đồng Nai. Tìm hiểu Mega City 2 Nhơn Trạch, K-Home CityView và kết nối tư vấn.",
  author: {
    "@type": "Organization",
    name: "KIM OANH ĐỒNG NAI",
    url: "https://kimoanhdongnai.com.vn",
  },
  publisher: {
    "@type": "Organization",
    name: "KIM OANH ĐỒNG NAI",
    url: "https://kimoanhdongnai.com.vn",
  },
  dateModified: "2026-08-19",
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
      {/* JSON-LD WebPage — E-E-A-T */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* 01. Header */}
      <CorpHeader />

      {/* Scroll reveal observer */}
      <ScrollRevealInit />

      {/* Popup tư vấn — hiện sau 5s, 1 lần/session */}
      <LeadPopup />

      <main>
        {/* 02. Hero */}
        <HomeHero />

        {/* 03. Dự án đang được quan tâm */}
        <ProjectsSection />

        {/* 06. Lĩnh vực hoạt động Kim Oanh Group */}
        <BusinessAreasSection />

        {/* 07. Vì sao nên tìm hiểu qua website */}
        <ValuesSection />

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
