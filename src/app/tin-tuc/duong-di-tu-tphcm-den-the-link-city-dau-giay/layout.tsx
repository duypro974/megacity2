import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/duong-di-tu-tphcm-den-the-link-city-dau-giay`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news63/1`;

export const metadata: Metadata = {
  title: "Chỉ 45 Phút: Đường Đi Từ TPHCM Đến The Link City Dầu Giây 2026 (Tránh Kẹt Xe)",
  description:
    "Hướng dẫn 3 lộ trình nhanh nhất từ TP.HCM đến The Link City Dầu Giây: chỉ 45 phút qua cao tốc Long Thành - Dầu Giây, bảng thời gian theo giờ cao điểm và kinh nghiệm né điểm kẹt xe 2026.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "đường đi từ tphcm đến the link city dầu giây",
    "từ tp hcm đi dầu giây bao lâu",
    "lộ trình từ sài gòn đến dầu giây",
    "the link city dầu giây cách tphcm bao xa",
    "đường đến the link city",
    "cao tốc tphcm long thành dầu giây",
    "khoảng cách tphcm dầu giây",
  ],
  openGraph: {
    title: "Chỉ 45 Phút: Đường Đi Từ TPHCM Đến The Link City Dầu Giây 2026 (Tránh Kẹt Xe)",
    description:
      "3 lộ trình thực tế nhanh nhất từ TP.HCM đến The Link City Dầu Giây: khoảng cách, thời gian và mẹo tránh kẹt xe ngã tư Dầu Giây 2026.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Đường đi từ TP.HCM đến The Link City Dầu Giây" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chỉ 45 Phút: Đường Đi Từ TPHCM Đến The Link City Dầu Giây 2026",
    description: "3 lộ trình nhanh nhất và mẹo tránh kẹt xe từ TP.HCM đến The Link City Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
