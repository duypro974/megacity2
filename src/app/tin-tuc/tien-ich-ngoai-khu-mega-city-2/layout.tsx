import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/tien-ich-ngoai-khu-mega-city-2`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news39/1`;

export const metadata: Metadata = {
  title: "Tiện ích ngoại khu Mega City 2: Trường học, bệnh viện & chợ",
  description:
    "Tìm hiểu hệ thống tiện ích ngoại khu quanh Mega City 2 Nhơn Trạch: trường học các cấp, bệnh viện đa khoa, chợ, siêu thị và trung tâm hành chính huyện trong bán kính 1–5 km.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "tiện ích quanh Mega City 2",
    "tiện ích ngoại khu Mega City 2",
    "chợ gần Mega City 2",
    "trường học gần Mega City 2 Nhơn Trạch",
    "bệnh viện gần Mega City 2",
    "trung tâm hành chính Nhơn Trạch",
    "Mega City 2 Nhơn Trạch",
    "dự án Mega City 2",
  ],
  openGraph: {
    title: "Tiện ích ngoại khu Mega City 2: Trường học, bệnh viện & chợ",
    description:
      "Hệ thống tiện ích quanh Mega City 2: bệnh viện đa khoa 2km, trường học 800m–3km, chợ Phú Hội 1,2km, UBND huyện 2km và sân golf 10km — bán kính tiện ích đầy đủ nhất Nhơn Trạch.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Bản đồ bán kính tiện ích ngoại khu trường học bệnh viện chợ quanh Mega City 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiện ích ngoại khu Mega City 2: Trường học, bệnh viện & chợ",
    description:
      "Bán kính 1–3 km đến bệnh viện, trường học, chợ, siêu thị và UBND huyện — tiện ích ngoại khu đầy đủ quanh Mega City 2 Nhơn Trạch.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
