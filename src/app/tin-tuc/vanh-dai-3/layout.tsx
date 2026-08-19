import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/vanh-dai-3`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news16/1`;

export const metadata: Metadata = {
  title: "Vành đai 3 TP.HCM 2026: Tiến Độ Mới Nhất Và Tác Động Đến Bất Động Sản Nhơn Trạch",
  description: "Cập nhật tiến độ Vành đai 3 TP.HCM mới nhất năm 2026. Phân tích vị trí, quy hoạch, khả năng kết nối với Nhơn Trạch và tác động đến thị trường bất động sản.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "vành đai 3 TP.HCM",
    "vành đai 3 nhơn trạch",
    "tiến độ vành đai 3",
    "quy hoạch vành đai 3",
    "bất động sản nhơn trạch",
    "hạ tầng giao thông đồng nai",
    "mega city 2 nhơn trạch",
  ],
  openGraph: {
    title: "Vành đai 3 TP.HCM 2026: Tiến Độ Và Tác Động Đến BĐS Nhơn Trạch",
    description: "Tiến độ Vành đai 3 mới nhất, kết nối sân bay Long Thành và tác động đến thị trường bất động sản Nhơn Trạch.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Vành đai 3 TP.HCM 2026 – Nhơn Trạch Đồng Nai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vành đai 3 TP.HCM 2026 – Tiến Độ Mới Nhất",
    description: "Tiến độ và tác động của Vành đai 3 đến BĐS Nhơn Trạch và dự án Mega City 2.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
