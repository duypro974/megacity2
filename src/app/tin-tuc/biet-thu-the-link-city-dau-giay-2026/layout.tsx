import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/biet-thu-the-link-city-dau-giay-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news67/1`;

export const metadata: Metadata = {
  title: "Biệt Thự The Link City Dầu Giây: Diện Tích, Thiết Kế & Tiềm Năng Đầu Tư 2026",
  description: "Chi tiết biệt thự The Link City Dầu Giây 2026: kích thước nền 200–350m², thiết kế vườn riêng, tiêu chuẩn xây dựng và tiềm năng đầu tư so với nhà phố liên kế cùng phân khúc.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "biệt thự the link city dầu giây",
    "biệt thự dầu giây 2026",
    "biệt thự đồng nai dưới 5 tỷ",
    "mua biệt thự dầu giây",
    "biệt thự vườn the link city",
    "biệt thự khu đô thị dầu giây",
  ],
  openGraph: {
    title: "Biệt Thự The Link City Dầu Giây: Diện Tích, Thiết Kế & Tiềm Năng Đầu Tư 2026",
    description: "Chi tiết biệt thự The Link City: diện tích 200–350m², vườn riêng, tiêu chuẩn xây dựng và tiềm năng đầu tư 2026.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Biệt thự The Link City Dầu Giây 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biệt Thự The Link City Dầu Giây 2026",
    description: "Diện tích, thiết kế vườn riêng và tiềm năng đầu tư biệt thự The Link City Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
