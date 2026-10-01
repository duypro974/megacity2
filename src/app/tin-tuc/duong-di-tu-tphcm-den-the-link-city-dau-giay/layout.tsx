import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/duong-di-tu-tphcm-den-the-link-city-dau-giay`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news63/1`;

export const metadata: Metadata = {
  title: "Đường Đi Từ TP.HCM Đến The Link City Dầu Giây: 3 Lộ Trình & Thời Gian Thực Tế 2026",
  description: "Hướng dẫn 3 lộ trình đi từ TP.HCM đến The Link City Dầu Giây: qua cao tốc Long Thành–Dầu Giây, QL1A và hướng từ Biên Hòa. Khoảng cách, thời gian và mẹo di chuyển thực tế.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "đường đi từ tphcm đến the link city dầu giây",
    "từ tp hcm đi dầu giây bao lâu",
    "lộ trình từ sài gòn đến dầu giây",
    "the link city dầu giây cách tphcm bao xa",
    "đường đến the link city",
    "cao tốc tphcm long thành dầu giây",
  ],
  openGraph: {
    title: "Đường Đi Từ TP.HCM Đến The Link City Dầu Giây: 3 Lộ Trình Thực Tế 2026",
    description: "3 lộ trình đi từ TP.HCM đến The Link City Dầu Giây: khoảng cách, thời gian và mẹo di chuyển thực tế theo từng hướng xuất phát.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Đường đi từ TP.HCM đến The Link City Dầu Giây" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đường Đi Từ TP.HCM Đến The Link City Dầu Giây 2026",
    description: "3 lộ trình, khoảng cách và thời gian thực tế từ TP.HCM đến The Link City Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
