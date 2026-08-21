import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/cao-toc-bien-hoa-vung-tau`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news18/1`;

export const metadata: Metadata = {
  title: "Cao tốc Biên Hòa - Vũng Tàu 2026: Tiến Độ Và Tác Động Đến Bất Động Sản Nhơn Trạch",
  description: "Cập nhật cao tốc Biên Hòa - Vũng Tàu năm 2026, hướng tuyến, tiến độ, khả năng kết nối sân bay Long Thành và tác động đến bất động sản Nhơn Trạch.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "cao tốc Biên Hòa Vũng Tàu",
    "cao tốc Biên Hòa Vũng Tàu 2026",
    "tiến độ cao tốc Biên Hòa Vũng Tàu",
    "cao tốc Biên Hòa Vũng Tàu Đồng Nai",
    "cao tốc Biên Hòa Vũng Tàu Long Thành",
    "cao tốc Biên Hòa Vũng Tàu Nhơn Trạch",
    "hạ tầng Đồng Nai",
    "bất động sản Nhơn Trạch",
    "sân bay Long Thành",
    "Mega City 2 Nhơn Trạch",
  ],
  openGraph: {
    title: "Cao tốc Biên Hòa - Vũng Tàu 2026: Tiến Độ Và Tác Động Đến Nhơn Trạch",
    description: "Tiến độ cao tốc Biên Hòa - Vũng Tàu mới nhất, kết nối sân bay Long Thành và tác động đến thị trường bất động sản Nhơn Trạch.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Cao tốc Biên Hòa Vũng Tàu 2026 – Đồng Nai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cao tốc Biên Hòa - Vũng Tàu 2026 – Tiến Độ Mới Nhất",
    description: "Tiến độ và tác động của cao tốc Biên Hòa - Vũng Tàu đến BĐS Nhơn Trạch và dự án Mega City 2.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
