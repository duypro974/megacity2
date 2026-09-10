import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news44/1`;

export const metadata: Metadata = {
  title: "Bảng Giá The Link City Dầu Giây 2026 & Bài Toán Vay Mua Đất Nền Chỉ Từ 550 Triệu Vốn Tự Có",
  description:
    "Phân tích chi tiết bảng giá The Link City Dầu Giây đợt 1 năm 2026: Giá từng block LK17A từ 1,85 tỷ, 4 phương thức thanh toán và bài toán vay ngân hàng 70% lãi suất ưu đãi.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "bảng giá The Link City Dầu Giây",
    "bảng giá The Link City",
    "thanh toán The Link City",
    "vay mua The Link City",
    "giá đất nền The Link City Kim Oanh",
    "KDC A1 C1 Dầu Giây bảng giá",
    "LK17A The Link City",
    "đất nền Dầu Giây vay ngân hàng",
    "bài toán vay mua đất Dầu Giây 2026",
  ],
  openGraph: {
    title: "Bảng Giá The Link City Dầu Giây 2026 & Bài Toán Vay Chỉ Từ 550 Triệu Vốn Tự Có",
    description:
      "Giá từng block LK17A từ 1,85 tỷ, 4 phương thức thanh toán linh hoạt, bảng tính trả nợ giảm dần 20 năm và so sánh chi phí cơ hội đầu tư vs gửi tiết kiệm — The Link City Dầu Giây 2026.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Bảng giá đất nền phân khu mở bán đợt 1 dự án The Link City Dầu Giây năm 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảng Giá The Link City Dầu Giây 2026 & Bài Toán Vay Từ 550 Triệu",
    description:
      "LK17A từ 1,85 tỷ – vay 70% ngân hàng trả ~14 triệu/tháng, giảm dần qua 20 năm. Phân tích dòng tiền thực chiến The Link City Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
