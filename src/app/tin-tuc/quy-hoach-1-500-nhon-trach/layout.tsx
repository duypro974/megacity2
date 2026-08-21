import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/quy-hoach-1-500-nhon-trach`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news20/1`;

export const metadata: Metadata = {
  title: "Quy hoạch 1/500 Nhơn Trạch 2026: Cách Xem Và Những Điều Cần Biết",
  description: "Quy hoạch 1/500 Nhơn Trạch là gì? Hướng dẫn cách đọc bản đồ quy hoạch chi tiết, phân biệt quy hoạch chung và 1/500, kiểm tra pháp lý trước khi mua đất.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "quy hoạch 1/500 Nhơn Trạch",
    "quy hoạch 1/500 Nhơn Trạch 2026",
    "QH 1/500 Nhơn Trạch",
    "bản đồ quy hoạch 1/500 Nhơn Trạch",
    "quy hoạch chi tiết 1/500 Nhơn Trạch",
    "xem quy hoạch 1/500 Nhơn Trạch",
    "quy hoạch đất Nhơn Trạch",
    "bản đồ quy hoạch Nhơn Trạch",
    "quy hoạch Nhơn Trạch",
  ],
  openGraph: {
    title: "Quy hoạch 1/500 Nhơn Trạch 2026: Cách Xem Và Những Điều Cần Biết",
    description: "Hướng dẫn đọc bản đồ quy hoạch chi tiết 1/500 Nhơn Trạch, phân biệt các cấp quy hoạch và kiểm tra pháp lý trước khi mua đất.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Quy hoạch 1/500 Nhơn Trạch 2026 và bản đồ quy hoạch chi tiết" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quy hoạch 1/500 Nhơn Trạch 2026",
    description: "Hướng dẫn đọc bản đồ quy hoạch chi tiết 1/500 và kiểm tra pháp lý trước khi mua đất Nhơn Trạch.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
