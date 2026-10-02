import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/khu-cong-nghiep-dau-giay-the-link-city`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news66/1`;

export const metadata: Metadata = {
  title: "Khu Công Nghiệp Dầu Giây & Cơ Hội Đầu Tư The Link City 2026: Tại Sao 300.000 Lao Động Tạo Ra Sóng BĐS?",
  description: "Phân tích 8 khu công nghiệp quanh Dầu Giây – Thống Nhất, nhu cầu nhà ở 300.000 lao động và tại sao The Link City là lựa chọn an cư & đầu tư cho thuê lý tưởng nhất khu vực.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "khu công nghiệp dầu giây",
    "khu công nghiệp thống nhất đồng nai",
    "nhà ở gần khu công nghiệp dầu giây",
    "the link city gần khu công nghiệp",
    "đầu tư cho thuê khu công nghiệp dầu giây",
    "nhà phố gần kcn thống nhất",
  ],
  openGraph: {
    title: "Khu Công Nghiệp Dầu Giây & Cơ Hội Đầu Tư The Link City 2026",
    description: "8 KCN quanh Dầu Giây, 300.000 lao động và tại sao The Link City là điểm đến an cư & đầu tư cho thuê lý tưởng nhất khu vực.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Khu công nghiệp Dầu Giây và The Link City" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khu Công Nghiệp Dầu Giây & The Link City: Cơ Hội Đầu Tư 2026",
    description: "300.000 lao động KCN, nhu cầu nhà ở khổng lồ và vị thế của The Link City Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
