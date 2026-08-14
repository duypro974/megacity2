import type { Metadata } from "next";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import LienHeClient from "./LienHeClient";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/lien-he`;

export const metadata: Metadata = {
  title: "Liên hệ – Kim Oanh Đồng Nai | Tư vấn dự án bất động sản",
  description:
    "Kết nối với đội ngũ tư vấn Kim Oanh Đồng Nai để được hỗ trợ thông tin dự án, bảng giá và tư vấn bất động sản tại Đồng Nai.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Liên hệ – Kim Oanh Đồng Nai",
    description:
      "Kết nối với đội ngũ tư vấn Kim Oanh để được tư vấn thông tin dự án và sản phẩm phù hợp.",
    type: "website",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Liên hệ", item: PAGE_URL },
  ],
};

export default function LienHePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CorpHeader solid />
      <LienHeClient />
      <CorpFooter />
    </>
  );
}
