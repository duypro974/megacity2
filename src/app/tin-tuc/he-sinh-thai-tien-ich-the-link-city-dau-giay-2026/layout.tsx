import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news47/1`;

export const metadata: Metadata = {
  title: "Hệ Sinh Thái 50+ Tiện Ích The Link City Dầu Giây: Chuẩn Mực Sống \"All-In-One\" Giữa Trung Tâm Đô Thị Mới",
  description:
    "Khám phá trọn bộ 50+ tiện ích đẳng cấp tại The Link City Dầu Giây: Trung tâm thương mại 2,6ha, cụm sân thể thao pickleball, công viên đa thế hệ và trường liên cấp.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "tiện ích The Link City",
    "The Link City Dầu Giây",
    "sống tại The Link City",
    "trung tâm thương mại The Link City",
    "sân pickleball The Link City Dầu Giây",
    "khu đô thị A1 C1 Dầu Giây tiện ích",
    "Kim Oanh Đồng Nai The Link City",
    "50 tiện ích The Link City",
  ],
  openGraph: {
    title: "Hệ Sinh Thái 50+ Tiện Ích The Link City Dầu Giây 2026",
    description:
      "TTTM 2,6ha, cụm sân pickleball đêm, công viên đa thế hệ, trường học liên cấp và liên kết ngoại khu 5 phút — trọn bộ tiện ích All-In-One tại The Link City Dầu Giây.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Phối cảnh đại lộ thương mại sầm uất và cổng chào khu đô thị The Link City Dầu Giây",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "50+ Tiện Ích The Link City Dầu Giây — Sống All-In-One",
    description:
      "TTTM 2,6ha, pickleball, công viên đa thế hệ, trường học nội khu — The Link City kiến tạo chuẩn mực sống mới tại trung tâm đô thị Dầu Giây 2026.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
