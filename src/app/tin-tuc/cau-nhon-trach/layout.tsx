import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/cau-nhon-trach`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news19/1`;

export const metadata: Metadata = {
  title: "Cầu Nhơn Trạch 2026: Kết Nối Giao Thông & Tác Động Bất Động Sản",
  description: "Cập nhật cầu Nhơn Trạch 2026: vị trí, quy mô, kết nối Vành đai 3, cao tốc TP.HCM – Long Thành – Dầu Giây và tác động đến bất động sản Nhơn Trạch.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "cầu Nhơn Trạch",
    "cầu Nhơn Trạch 2026",
    "cầu Nhơn Trạch Vành đai 3",
    "cầu Nhơn Trạch Đồng Nai",
    "cầu Nhơn Trạch TP.HCM",
    "tiến độ cầu Nhơn Trạch",
    "cầu Nhơn Trạch thông xe",
    "cầu Nhơn Trạch nối TP.HCM Đồng Nai",
  ],
  openGraph: {
    title: "Cầu Nhơn Trạch 2026: Kết Nối Giao Thông & Tác Động BĐS",
    description: "Cầu Nhơn Trạch đã khánh thành 19/8/2025, khai thác từ 20/8/2025. Phân tích kết nối Vành đai 3, cao tốc và tác động đến thị trường bất động sản Nhơn Trạch.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Cầu Nhơn Trạch trên tuyến Vành đai 3 kết nối Đồng Nai và TP.HCM" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cầu Nhơn Trạch 2026 – Kết Nối Giao Thông Mới",
    description: "Cầu Nhơn Trạch đã khai thác từ tháng 8/2025 – tác động đến BĐS Nhơn Trạch và dự án Mega City 2.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
