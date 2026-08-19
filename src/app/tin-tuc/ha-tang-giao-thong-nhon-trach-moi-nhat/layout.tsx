import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news12/1`;

export const metadata: Metadata = {
  title: "Hạ Tầng Giao Thông Nhơn Trạch Mới Nhất 2026 - Những Tuyến Đường Đang Thay Đổi Thị Trường Bất Động Sản",
  description: "Cập nhật hạ tầng giao thông Nhơn Trạch mới nhất năm 2026. Phân tích các tuyến đường quan trọng, sân bay Long Thành, Vành đai 3 và tác động đến thị trường bất động sản.",
  alternates: { canonical: PAGE_URL },
  keywords: ["hạ tầng Nhơn Trạch", "hạ tầng giao thông Nhơn Trạch", "giao thông Nhơn Trạch 2026", "đường Vành đai 3", "sân bay Long Thành", "bất động sản Nhơn Trạch", "Mega City 2 Nhơn Trạch"],
  openGraph: {
    title: "Hạ Tầng Giao Thông Nhơn Trạch Mới Nhất 2026",
    description: "Phân tích hạ tầng giao thông Nhơn Trạch: sân bay Long Thành, Vành đai 3, cao tốc và tác động đến bất động sản.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Hạ tầng giao thông Nhơn Trạch 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hạ Tầng Giao Thông Nhơn Trạch Mới Nhất 2026",
    description: "Sân bay Long Thành, Vành đai 3, cao tốc — cập nhật hạ tầng và tác động đến bất động sản Nhơn Trạch.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
