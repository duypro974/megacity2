import type { Metadata } from "next";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import TinTucClient from "./TinTucClient";

// ─────────────────────────────────────────────────────────────
// Metadata (server component)
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tin tức & Cập nhật – Kim Oanh Đồng Nai",
  description:
    "Tin tức mới nhất về dự án bất động sản Kim Oanh tại Đồng Nai. Cập nhật thị trường, tiến độ và thông tin dự án Mega City 2 Nhơn Trạch.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/tin-tuc" },
  openGraph: {
    title: "Tin tức & Cập nhật – Kim Oanh Đồng Nai",
    description: "Tin tức mới nhất về dự án bất động sản Kim Oanh tại Đồng Nai.",
    type: "website",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://kimoanhdongnai.com.vn" },
    { "@type": "ListItem", position: 2, name: "Tin tức",   item: "https://kimoanhdongnai.com.vn/tin-tuc" },
  ],
};

export default function TinTucPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CorpHeader solid />
      <TinTucClient />
      <CorpFooter />
    </>
  );
}
