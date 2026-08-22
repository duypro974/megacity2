import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/so-sanh-mega-city-2-va-cac-khu-do-thi-nhon-trach`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news24/1`;

export const metadata: Metadata = {
  title: "So Sánh Mega City 2 Và Các Khu Đô Thị Nhơn Trạch 2026",
  description: "So sánh Mega City 2 với các khu đô thị nổi bật tại Nhơn Trạch và vùng lân cận về vị trí, quy mô, loại hình, hạ tầng, tiện ích và nhu cầu đầu tư.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "so sánh Mega City 2 và các khu đô thị Nhơn Trạch",
    "so sánh Mega City 2",
    "Mega City 2 và Aqua City",
    "Mega City 2 và Izumi City",
    "Mega City 2 và SwanBay",
    "các khu đô thị Nhơn Trạch",
    "khu đô thị Nhơn Trạch 2026",
    "dự án bất động sản Nhơn Trạch",
    "nên mua dự án nào ở Nhơn Trạch",
  ],
  openGraph: {
    title: "So Sánh Mega City 2 Và Các Khu Đô Thị Nhơn Trạch 2026",
    description: "So sánh Mega City 2, Aqua City, Izumi City và SwanBay theo vị trí, quy mô, sản phẩm, hạ tầng, tiện ích và nhu cầu sử dụng.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "So sánh Mega City 2 và các khu đô thị Nhơn Trạch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "So Sánh Mega City 2 Vs Các Khu Đô Thị Nhơn Trạch 2026",
    description: "Phân tích vị trí, quy mô, sản phẩm, pháp lý và tiện ích Mega City 2 so với Aqua City, Izumi City, SwanBay.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
