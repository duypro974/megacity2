import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/tien-do-the-link-city-dau-giay`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/progress/1.jpg`;

export const metadata: Metadata = {
  title: "Tiến Độ The Link City Dầu Giây 09/2026 – Hạ Tầng Hoàn Thiện, Chờ Trạm XLNT Mở Bán Lại",
  description:
    "Tiến độ The Link City Dầu Giây tháng 9/2026: toàn bộ hạ tầng kỹ thuật đã hoàn thiện. Dự án đang chờ trạm xử lý nước thải hoàn tất để chính thức mở bán trở lại. Cập nhật mới nhất.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "tiến độ The Link City Dầu Giây",
    "tiến độ The Link City 2026",
    "The Link City mở bán lại",
    "trạm xử lý nước thải The Link City",
    "hạ tầng The Link City hoàn thiện",
    "cập nhật tiến độ The Link City",
    "The Link City khi nào mở bán",
  ],
  openGraph: {
    title: "Tiến Độ The Link City Dầu Giây 09/2026 – Hạ Tầng Hoàn Thiện, Chờ Trạm XLNT",
    description:
      "Hạ tầng The Link City đã hoàn thiện toàn bộ. Đang chờ trạm xử lý nước thải hoàn tất để mở bán trở lại. Cập nhật tiến độ tháng 9/2026.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Tiến độ The Link City Dầu Giây tháng 9/2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiến Độ The Link City 09/2026 – Hạ Tầng Hoàn Thiện, Chờ Trạm XLNT Mở Bán",
    description: "Hạ tầng hoàn thiện, đang chờ trạm xử lý nước thải để mở bán trở lại.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
