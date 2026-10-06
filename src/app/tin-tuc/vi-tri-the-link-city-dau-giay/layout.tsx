import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/vi-tri-the-link-city-dau-giay`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news72/1`;

export const metadata: Metadata = {
  title: "Vị Trí The Link City Dầu Giây Ở Đâu? Tại Sao Ngã Tư QL1A – QL20 Là Điểm Đắc Địa Nhất Thống Nhất",
  description: "The Link City tọa lạc tại ngã tư QL1A – QL20, trung tâm thị trấn Dầu Giây, huyện Thống Nhất, Đồng Nai. Phân tích chi tiết lợi thế vị trí: 3 cao tốc giao nhau, 45 phút TP.HCM, 30 phút sân bay Long Thành.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "vị trí the link city dầu giây",
    "the link city ở đâu",
    "ngã tư dầu giây ql1a ql20",
    "the link city tọa lạc tại đâu",
    "the link city huyện thống nhất đồng nai",
    "vị trí dự án the link city",
  ],
  openGraph: {
    title: "Vị Trí The Link City Dầu Giây Ở Đâu? Ngã Tư QL1A – QL20 Điểm Đắc Địa Nhất Thống Nhất",
    description: "The Link City tại ngã tư QL1A – QL20, Dầu Giây: 45 phút TP.HCM, 30 phút sân bay Long Thành, 3 tuyến cao tốc giao nhau.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Vị trí The Link City ngã tư Dầu Giây QL1A QL20" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vị Trí The Link City Dầu Giây: Ngã Tư QL1A – QL20",
    description: "Phân tích chi tiết lợi thế vị trí The Link City tại ngã tư chiến lược Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
