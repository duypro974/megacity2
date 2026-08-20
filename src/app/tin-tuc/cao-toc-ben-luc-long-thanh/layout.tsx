import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/cao-toc-ben-luc-long-thanh`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news17/1`;

export const metadata: Metadata = {
  title: "Cao tốc Bến Lức - Long Thành 2026: Tiến Độ Và Tác Động Đến Bất Động Sản Nhơn Trạch",
  description: "Cập nhật tiến độ cao tốc Bến Lức - Long Thành năm 2026, khả năng kết nối Nhơn Trạch với TP.HCM, Long Thành và các khu vực kinh tế phía Nam.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "cao tốc Bến Lức Long Thành",
    "cao tốc Bến Lức Long Thành 2026",
    "tiến độ cao tốc Bến Lức Long Thành",
    "cao tốc Bến Lức Long Thành Nhơn Trạch",
    "cao tốc Bến Lức Long Thành Đồng Nai",
    "hạ tầng Nhơn Trạch",
    "bất động sản Nhơn Trạch",
    "Mega City 2 Nhơn Trạch",
  ],
  openGraph: {
    title: "Cao tốc Bến Lức - Long Thành 2026: Tiến Độ Và Tác Động Đến Nhơn Trạch",
    description: "Tiến độ cao tốc Bến Lức - Long Thành mới nhất, kết nối Nhơn Trạch và tác động đến thị trường bất động sản khu vực phía Nam.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Cao tốc Bến Lức Long Thành 2026 – Nhơn Trạch Đồng Nai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cao tốc Bến Lức - Long Thành 2026 – Tiến Độ Mới Nhất",
    description: "Tiến độ và tác động của cao tốc Bến Lức - Long Thành đến BĐS Nhơn Trạch và dự án Mega City 2.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
