import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/cau-cat-lai`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news15/1`;

export const metadata: Metadata = {
  title: "Cầu Cát Lái 2026: Tiến Độ Mới Nhất Và Tác Động Đến Bất Động Sản Nhơn Trạch",
  description: "Cập nhật tiến độ cầu Cát Lái mới nhất năm 2026. Phân tích khả năng kết nối giữa TP. Hồ Chí Minh và Nhơn Trạch cũng như tác động đến thị trường bất động sản.",
  alternates: { canonical: PAGE_URL },
  keywords: ["cầu Cát Lái", "cầu Cát Lái Nhơn Trạch", "tiến độ cầu Cát Lái 2026", "quy hoạch cầu Cát Lái", "bất động sản Nhơn Trạch", "Mega City 2 Nhơn Trạch"],
  openGraph: {
    title: "Cầu Cát Lái 2026: Tiến Độ Và Tác Động Đến BĐS Nhơn Trạch",
    description: "Tiến độ cầu Cát Lái, kết nối TP.HCM – Nhơn Trạch và tác động đến thị trường bất động sản 2026.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Cầu Cát Lái 2026 và bất động sản Nhơn Trạch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cầu Cát Lái 2026: Tiến Độ Mới Nhất",
    description: "Tiến độ và tác động của cầu Cát Lái đến bất động sản Nhơn Trạch và Mega City 2.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
