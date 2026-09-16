import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/tiem-nang-bat-dong-san-thong-nhat-nga-tu-dau-giay-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news54/1`;

export const metadata: Metadata = {
  title: "Tiềm Năng Bất Động Sản Huyện Thống Nhất 2026: Vì Sao Ngã Tư Dầu Giây Là \"Tọa Độ Vàng\" Hút Dòng Vốn?",
  description:
    "Phân tích toàn cảnh thị trường BĐS huyện Thống Nhất 2026: Hạ tầng ngã tư Dầu Giây, quy hoạch ĐT 769 kết nối sân bay Long Thành và sức hút của dự án The Link City.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "Bất động sản Thống Nhất",
    "The Link City Dầu Giây",
    "Đất nền Thống Nhất Đồng Nai",
    "Quy hoạch huyện Thống Nhất 2030",
    "Giá đất ngã tư Dầu Giây",
    "Dự án The Link City Kim Oanh",
    "KDC A1 C1 Dầu Giây",
  ],
  openGraph: {
    title: "Tiềm Năng BĐS Huyện Thống Nhất 2026 — Ngã Tư Dầu Giây Tọa Độ Vàng",
    description:
      "Phân tích toàn cảnh BĐS Thống Nhất 2026: Hạ tầng hội tụ 3 cao tốc, KCN Dầu Giây 330ha, ĐT 769 kết nối sân bay Long Thành và vùng trũng giá 19–23 triệu/m².",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Bản đồ định hướng phát triển không gian đô thị và hạ tầng giao thông huyện Thống Nhất Đồng Nai 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BĐS Huyện Thống Nhất 2026 — Tại Sao Ngã Tư Dầu Giây Là Tọa Độ Vàng?",
    description:
      "Hội tụ 3 cao tốc, KCN 330ha, ĐT 769 vào sân bay Long Thành. Giá đất chỉ 19–23 triệu/m² — thấp hơn Trảng Bom và Long Khánh đến 50%.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
