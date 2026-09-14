import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/cam-nang-chon-lo-dat-nen-the-link-city-dau-giay-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news50/1`;

export const metadata: Metadata = {
  title: "Cẩm Nang Chọn Lô Đất Nền The Link City Dầu Giây 2026: Phân Tích Chi Tiết Block LK17A, LK17B & Hướng Đẹp Nhất",
  description:
    "Phân tích chi tiết các block đất nền The Link City Dầu Giây: So sánh LK17A, LK17B, ưu nhược điểm từng trục đường N20, D1, hướng phong thủy và chiến lược chọn lô đẹp nhất.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "đất nền The Link City Dầu Giây",
    "The Link City Dầu Giây",
    "LK17A The Link City",
    "LK17B The Link City",
    "mặt bằng The Link City Dầu Giây",
    "chọn lô The Link City",
    "bảng giá LK17A The Link City",
    "cẩm nang chọn lô The Link City",
  ],
  openGraph: {
    title: "Cẩm Nang Chọn Lô The Link City Dầu Giây 2026 — LK17A, LK17B & Lô Góc",
    description:
      "Phân tích chi tiết Block LK17A (đường N20), LK17B (ven công viên), so sánh lô 95m² vs lô góc 2 mặt tiền, tư vấn hướng phong thủy và chiến lược phân bổ vốn theo 3 khẩu vị đầu tư.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Bản vẽ sơ đồ quy hoạch phân lô 1/500 các block LK17A LK17B dự án The Link City Dầu Giây",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cẩm Nang Chọn Lô The Link City — LK17A từ 1,85 tỷ",
    description:
      "Block LK17A đường N20, LK17B ven công viên, lô góc 2 mặt tiền — phân tích chi tiết + chiến lược vốn 500tr đến 3 tỷ tại The Link City Dầu Giây 2026.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
