import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/quy-hoach-nhon-trach-moi-nhat`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news7/1`;

export const metadata: Metadata = {
  title: "Quy hoạch Nhơn Trạch mới nhất 2026: Cập nhật bản đồ và định hướng phát triển",
  description:
    "Cập nhật quy hoạch Nhơn Trạch mới nhất năm 2026. Phân tích bản đồ quy hoạch, hạ tầng giao thông, định hướng phát triển và tác động đến thị trường bất động sản.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "quy hoạch Nhơn Trạch mới nhất",
    "bản đồ quy hoạch Nhơn Trạch",
    "quy hoạch Nhơn Trạch 2026",
    "quy hoạch Đồng Nai",
    "quy hoạch sử dụng đất Nhơn Trạch",
    "quy hoạch 1/500 Nhơn Trạch",
    "Mega City 2",
  ],
  openGraph: {
    title: "Quy hoạch Nhơn Trạch mới nhất 2026: Cập nhật bản đồ và định hướng phát triển",
    description:
      "Cập nhật quy hoạch và bản đồ phát triển của Nhơn Trạch năm 2026. Phân tích tác động hạ tầng và bất động sản khu vực.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Bản đồ quy hoạch Nhơn Trạch năm 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quy hoạch Nhơn Trạch mới nhất 2026",
    description: "Bản đồ quy hoạch, hạ tầng giao thông và định hướng phát triển Nhơn Trạch 2026.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
