import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/duong-25c`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news14/1`;

export const metadata: Metadata = {
  title: "Đường 25C Nhơn Trạch: Tiến Độ Mới Nhất 2026 Và Tác Động Đến Mega City 2",
  description: "Cập nhật tiến độ đường 25C Nhơn Trạch mới nhất năm 2026. Phân tích khả năng kết nối đến sân bay Long Thành và tác động của hạ tầng đến dự án Mega City 2.",
  alternates: { canonical: PAGE_URL },
  keywords: ["đường 25c nhơn trạch", "đường 25c đồng nai", "tiến độ đường 25c", "đường 25c sân bay long thành", "hạ tầng nhơn trạch", "mega city 2 nhơn trạch"],
  openGraph: {
    title: "Đường 25C Nhơn Trạch: Tiến Độ 2026 Và Tác Động Đến Mega City 2",
    description: "Tiến độ đường 25C, kết nối sân bay Long Thành và tác động đến BĐS Nhơn Trạch.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Đường 25C Nhơn Trạch 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đường 25C Nhơn Trạch Mới Nhất 2026",
    description: "Tiến độ và tác động của đường 25C đến BĐS Nhơn Trạch và Mega City 2.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
