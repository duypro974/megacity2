import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/lo-dat-mega-city-2-mat-tien-bao-nhieu`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news57/1`;

export const metadata: Metadata = {
  title: "Lô đất Mega City 2 mặt tiền bao nhiêu? Cách đo kích thước thực tế",
  description:
    "Tìm hiểu chính xác lô đất Mega City 2 mặt tiền bao nhiêu mét: kích thước chuẩn 5m, 6m, 10m, 15m và hướng dẫn chi tiết cách kiểm tra cọc mốc, ranh giới thực địa.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "lô đất Mega City 2 mặt tiền bao nhiêu",
    "kích thước đất nền Mega City 2",
    "mặt tiền Mega City 2",
    "kiểm tra kích thước đất Mega City 2",
    "cách đo đất thực tế Mega City 2",
    "cọc mốc Mega City 2",
    "đất nền Mega City 2 Nhơn Trạch",
  ],
  openGraph: {
    title: "Lô đất Mega City 2 mặt tiền bao nhiêu? Cách đo kích thước thực tế",
    description:
      "Tìm hiểu chính xác lô đất Mega City 2 mặt tiền bao nhiêu mét: kích thước chuẩn 5m, 6m, 10m, 15m và hướng dẫn chi tiết cách kiểm tra cọc mốc, ranh giới thực địa.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Lô đất Mega City 2 mặt tiền 5m vuông vức đường nội khu hạ tầng hoàn thiện" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lô đất Mega City 2 mặt tiền bao nhiêu? Cách đo kích thước thực tế",
    description: "Mặt tiền 5m, 6m, 10m, 15m — tổng hợp kích thước chuẩn từng loại sản phẩm Mega City 2 và quy trình 4 bước kiểm tra cọc mốc thực địa.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
