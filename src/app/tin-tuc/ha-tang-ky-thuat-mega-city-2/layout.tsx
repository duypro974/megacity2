import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/ha-tang-ky-thuat-mega-city-2`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news33/1`;

export const metadata: Metadata = {
  title: "Hạ tầng kỹ thuật Mega City 2: Điện âm, Nước máy & Thoát nước",
  description:
    "Tìm hiểu chi tiết hạ tầng kỹ thuật Mega City 2 Nhơn Trạch: mạng lưới điện âm, hệ thống cấp nước sạch, thoát nước mưa - nước thải và cốt nền chống ngập.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "hạ tầng kỹ thuật Mega City 2",
    "điện âm Mega City 2",
    "hệ thống thoát nước Mega City 2",
    "cấp nước Mega City 2",
    "hạ tầng Mega City 2 Nhơn Trạch",
    "cốt nền Mega City 2",
    "đường nội khu Mega City 2",
    "dự án Mega City 2 Nhơn Trạch",
  ],
  openGraph: {
    title: "Hạ tầng kỹ thuật Mega City 2: Điện âm, Nước máy & Thoát nước",
    description:
      "Chi tiết hạ tầng kỹ thuật Mega City 2 Nhơn Trạch: điện âm 100%, cấp nước Dowaco, thoát nước 2 tuyến riêng biệt, cốt nền chống ngập và đường nội khu lộ giới 13–32m.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Hạ tầng kỹ thuật Mega City 2 Nhơn Trạch với điện âm và đường nội khu rộng rãi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hạ tầng kỹ thuật Mega City 2: Điện âm, Nước máy & Thoát nước",
    description:
      "Phân tích chi tiết điện âm, cấp nước, thoát nước 2 tuyến, cốt nền và đường nội khu tại Mega City 2 Nhơn Trạch.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
