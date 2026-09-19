import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/dien-tich-dat-nen-mega-city-2`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news56/1`;

export const metadata: Metadata = {
  title: "Diện tích nền Mega City 2 gồm những loại nào? Cách chọn chuẩn nhất",
  description:
    "Tổng hợp chi tiết các loại diện tích nền Mega City 2 Nhơn Trạch: 90m², 100m², 120m², 200m² - 300m² và cẩm nang lựa chọn diện tích tối ưu theo ngân sách, nhu cầu ở hoặc kinh doanh.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "diện tích nền Mega City 2",
    "diện tích đất nền Mega City 2",
    "các loại diện tích Mega City 2",
    "kích thước lô đất Mega City 2",
    "đất nền Mega City 2 Nhơn Trạch",
    "mặt bằng phân lô Mega City 2",
    "dự án Mega City 2 Nhơn Trạch",
    "mua đất Mega City 2",
  ],
  openGraph: {
    title: "Diện tích nền Mega City 2 gồm những loại nào? Cách chọn chuẩn nhất",
    description:
      "Tổng hợp chi tiết các loại diện tích nền Mega City 2 Nhơn Trạch: 90m², 100m², 120m², 200m² - 300m² và cẩm nang lựa chọn diện tích tối ưu theo ngân sách, nhu cầu ở hoặc kinh doanh.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Các loại diện tích đất nền tại dự án khu đô thị Mega City 2 Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diện tích nền Mega City 2 gồm những loại nào? Cách chọn chuẩn nhất",
    description:
      "90m², 100m², 120m², 200m²–300m² — Tổng hợp 4 nhóm diện tích nền Mega City 2 và hướng dẫn chọn theo ngân sách, nhu cầu ở thực và mục đích kinh doanh.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
