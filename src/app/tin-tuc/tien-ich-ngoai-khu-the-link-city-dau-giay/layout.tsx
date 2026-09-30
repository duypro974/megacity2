import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/tien-ich-ngoai-khu-the-link-city-dau-giay`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news62/1`;

export const metadata: Metadata = {
  title: "Tiện Ích Ngoại Khu The Link City Dầu Giây: Bệnh Viện, Trường Học, Chợ & Kết Nối Giao Thông",
  description: "Khám phá hệ thống tiện ích ngoại khu trong bán kính 5km quanh The Link City Dầu Giây: bệnh viện đa khoa, trường học liên cấp, chợ sầm uất và cao tốc kết nối TP.HCM chỉ 45 phút.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "tiện ích ngoại khu the link city",
    "bệnh viện gần the link city dầu giây",
    "trường học gần dầu giây",
    "chợ dầu giây thống nhất",
    "sống tại the link city dầu giây",
    "tiện ích xung quanh khu đô thị dầu giây",
  ],
  openGraph: {
    title: "Tiện Ích Ngoại Khu The Link City Dầu Giây: Bệnh Viện, Trường Học, Chợ & Giao Thông",
    description: "Hệ thống tiện ích ngoại khu trong bán kính 5km quanh The Link City Dầu Giây: bệnh viện, trường học, chợ và cao tốc kết nối TP.HCM chỉ 45 phút.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Tiện ích ngoại khu The Link City Dầu Giây" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiện Ích Ngoại Khu The Link City Dầu Giây",
    description: "Bệnh viện, trường học, chợ và giao thông kết nối trong bán kính 5km quanh The Link City Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
