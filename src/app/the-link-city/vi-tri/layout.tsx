import type { Metadata } from "next";

const TLC_OG_URL =
  "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/thelinkcity/overview/1.webp";

export const metadata: Metadata = {
  title: "Vị Trí The Link City Dầu Giây – Kết Nối QL1A, QL20 & Cao Tốc Khu Vực",
  description:
    "Vị trí The Link City tại ngã tư Quốc lộ 1A và Quốc lộ 20, Dầu Giây, Đồng Nai. Tìm hiểu kết nối giao thông khu vực và các tuyến cao tốc liên quan đến dự án.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city/vi-tri" },
  openGraph: {
    title: "Vị Trí The Link City Dầu Giây – Kết Nối QL1A, QL20 & Cao Tốc Khu Vực",
    description:
      "Dự án tọa lạc tại ngã tư Quốc lộ 1A và Quốc lộ 20, trung tâm hành chính xã Dầu Giây, Đồng Nai. Khu vực kết nối với cao tốc TP.HCM – Long Thành – Dầu Giây và tuyến cao tốc Dầu Giây – Tân Phú.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: TLC_OG_URL, width: 1280, height: 720, alt: "Vị trí The Link City Dầu Giây Đồng Nai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vị Trí The Link City Dầu Giây – QL1A, QL20 & Cao Tốc",
    description: "Ngã tư Quốc lộ 1A và Quốc lộ 20, xã Dầu Giây, Đồng Nai. Kết nối cao tốc TP.HCM – Long Thành – Dầu Giây và cao tốc Dầu Giây – Tân Phú.",
    images: [TLC_OG_URL],
  },
};

export default function ViTriLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
