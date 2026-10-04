import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/dau-giay-len-thi-xa-2026-2030-the-link-city`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news68/1`;

export const metadata: Metadata = {
  title: "Dầu Giây Lên Thị Xã 2026–2030: Lộ Trình, Tiêu Chí & Tác Động Đến Giá Đất The Link City",
  description: "Phân tích lộ trình Dầu Giây lên thị xã 2026–2030: tiêu chí đô thị loại IV, bài học tăng giá từ Dĩ An & Long Khánh và tác động trực tiếp đến giá trị bất động sản The Link City.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "dầu giây lên thị xã khi nào",
    "đô thị hóa dầu giây 2026",
    "thị xã dầu giây quy hoạch",
    "dầu giây lên thành phố",
    "the link city dầu giây tăng giá",
    "bất động sản dầu giây 2026 2030",
  ],
  openGraph: {
    title: "Dầu Giây Lên Thị Xã 2026–2030: Lộ Trình & Tác Động Đến Giá Đất The Link City",
    description: "Lộ trình Dầu Giây lên thị xã, tiêu chí đô thị loại IV và bài học tăng giá từ Dĩ An & Long Khánh.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Dầu Giây lên thị xã 2026–2030 và The Link City" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dầu Giây Lên Thị Xã 2026–2030 & The Link City",
    description: "Lộ trình, tiêu chí và tác động tăng giá bất động sản khi Dầu Giây lên thị xã.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
