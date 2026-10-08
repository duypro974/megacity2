import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/ha-tang-ky-thuat-the-link-city-dau-giay`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news73/1`;

export const metadata: Metadata = {
  title: "Hạ Tầng Kỹ Thuật The Link City Dầu Giây: Đường Nhựa, Điện Âm, Nước Máy & Thoát Nước Đã Hoàn Thiện 100%",
  description: "Hạ tầng kỹ thuật The Link City Dầu Giây hoàn thiện 100%: đường nội khu nhựa phẳng, điện âm đô thị, nước máy đến từng lô và hệ thống thoát nước đồng bộ — tiêu chuẩn khu đô thị chính thức, không phải đất tự phát.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "hạ tầng the link city",
    "the link city hạ tầng hoàn thiện",
    "đường nội khu the link city",
    "hạ tầng kỹ thuật the link city dầu giây",
    "điện nước the link city",
    "thoát nước the link city dầu giây",
  ],
  openGraph: {
    title: "Hạ Tầng Kỹ Thuật The Link City Dầu Giây: Đường Nhựa, Điện Âm, Nước Máy & Thoát Nước Hoàn Thiện 100%",
    description: "Hạ tầng kỹ thuật The Link City hoàn thiện 100%: đường nhựa, điện âm, nước máy và thoát nước đồng bộ theo tiêu chuẩn đô thị chính thức.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Hạ tầng kỹ thuật The Link City Dầu Giây hoàn thiện" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hạ Tầng Kỹ Thuật The Link City Dầu Giây Hoàn Thiện 100%",
    description: "Đường nhựa, điện âm, nước máy và thoát nước đồng bộ — hạ tầng tiêu chuẩn đô thị tại The Link City Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
