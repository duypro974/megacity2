import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/tien-do-cao-toc-dau-giay-tan-phu-2026-the-link-city`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/maps/1.webp`;

export const metadata: Metadata = {
  title: "Tiến Độ Cao Tốc Dầu Giây – Tân Phú 2026: Đòn Bẩy Cho The Link City",
  description:
    "Cập nhật tiến độ dự án cao tốc Dầu Giây – Tân Phú mới nhất năm 2026: quy mô, mốc giải phóng mặt bằng, hướng tuyến và tác động bứt phá đến giá trị đất nền The Link City.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "tiến độ cao tốc dầu giây - tân phú",
    "cao tốc dầu giây tân phú",
    "dầu giây tân phú",
    "cao tốc dầu giây liên khương",
    "the link city dầu giây",
    "bán đất dầu giây",
    "đất nền dầu giây thống nhất",
  ],
  openGraph: {
    title: "Tiến Độ Cao Tốc Dầu Giây – Tân Phú 2026: Đòn Bẩy Cho The Link City",
    description:
      "Cập nhật tiến độ cao tốc Dầu Giây – Tân Phú 2026 và phân tích lợi thế đón đầu tăng trưởng của khu đô thị The Link City Dầu Giây.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Bản đồ quy hoạch tiến độ cao tốc Dầu Giây Tân Phú và The Link City" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiến Độ Cao Tốc Dầu Giây – Tân Phú 2026 & The Link City",
    description: "Cập nhật tiến độ cao tốc Dầu Giây – Tân Phú mới nhất và cơ hội đầu tư The Link City Dầu Giây 2026.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
