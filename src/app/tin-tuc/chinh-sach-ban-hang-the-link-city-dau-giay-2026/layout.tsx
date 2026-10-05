import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/chinh-sach-ban-hang-the-link-city-dau-giay-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news71/1`;

export const metadata: Metadata = {
  title: "Chính Sách Bán Hàng The Link City Dầu Giây 2026: Chiết Khấu, Tiến Độ & Điều Kiện Mua Mới Nhất",
  description: "Chi tiết chính sách bán hàng The Link City Dầu Giây 2026: tiến độ thanh toán 9–10 đợt, chiết khấu 16%/năm, vay VietinBank 70%, cọc từ 50 triệu và điều kiện ký hợp đồng.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "chính sách bán hàng the link city 2026",
    "ưu đãi the link city dầu giây",
    "chiết khấu the link city",
    "tiến độ thanh toán the link city",
    "vay ngân hàng mua the link city",
    "điều kiện mua the link city dầu giây",
  ],
  openGraph: {
    title: "Chính Sách Bán Hàng The Link City Dầu Giây 2026: Chiết Khấu & Tiến Độ Thanh Toán",
    description: "Tiến độ thanh toán 9–10 đợt, chiết khấu 16%/năm, vay VietinBank 70% và các điều kiện mua mới nhất tại The Link City Dầu Giây.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Chính sách bán hàng The Link City Dầu Giây 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chính Sách Bán Hàng The Link City Dầu Giây 2026",
    description: "Tiến độ thanh toán, chiết khấu 16%/năm và điều kiện vay ngân hàng mua The Link City.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
