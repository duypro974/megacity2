import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/duong-di-tu-tphcm-den-mega-city-2`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news37/1`;

export const metadata: Metadata = {
  title: "Đường đi Mega City 2 từ TP.HCM: Khoảng cách & lộ trình chi tiết",
  description:
    "Hướng dẫn chi tiết các hướng đường đi từ trung tâm TP.HCM đến Mega City 2 Nhơn Trạch: qua phà Cát Lái, Cao tốc Long Thành và cầu Nhơn Trạch (Vành đai 3).",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "đường đi Mega City 2",
    "từ Mega City 2 đi TP.HCM bao xa",
    "khoảng cách Mega City 2 đến TP.HCM",
    "di chuyển từ quận 2 sang Mega City 2",
    "đường đi Mega City 2 Nhơn Trạch",
    "vị trí dự án Mega City 2",
    "Mega City 2 Nhơn Trạch",
    "dự án Mega City 2",
  ],
  openGraph: {
    title: "Đường đi Mega City 2 từ TP.HCM: Khoảng cách & lộ trình chi tiết",
    description:
      "3 hướng đường đi từ TP.HCM đến Mega City 2 Nhơn Trạch: qua phà Cát Lái (ngắn nhất cho xe máy), cao tốc + đường 319 (nhanh nhất cho ô tô) và cầu Nhơn Trạch Vành đai 3.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Sơ đồ hướng tuyến đường đi từ trung tâm TP.HCM đến dự án Mega City 2 Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đường đi Mega City 2 từ TP.HCM: Khoảng cách & lộ trình chi tiết",
    description:
      "Khoảng cách 15–30km, 3 lộ trình: phà Cát Lái, cao tốc Long Thành và cầu Nhơn Trạch — từ TP.HCM đến Mega City 2 Nhơn Trạch.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
