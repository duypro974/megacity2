import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/cach-doc-ban-do-quy-hoach-nhon-trach`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news27/1`;

export const metadata: Metadata = {
  title: "Cách đọc bản đồ quy hoạch Nhơn Trạch cho người mua đất",
  description:
    "Hướng dẫn cách đọc bản đồ quy hoạch Nhơn Trạch: ký hiệu đất, màu sắc, số thửa, đường giao thông, quy hoạch sử dụng đất và cách đối chiếu vị trí trước khi mua.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "cách đọc bản đồ quy hoạch Nhơn Trạch",
    "bản đồ quy hoạch Nhơn Trạch",
    "cách xem quy hoạch Nhơn Trạch",
    "tra cứu quy hoạch Nhơn Trạch",
    "quy hoạch sử dụng đất Nhơn Trạch",
    "bản đồ quy hoạch đất Nhơn Trạch",
    "cách kiểm tra quy hoạch đất",
    "ký hiệu quy hoạch đất",
    "quy hoạch Nhơn Trạch mới nhất",
  ],
  openGraph: {
    title: "Cách đọc bản đồ quy hoạch Nhơn Trạch cho người mua đất",
    description:
      "Hướng dẫn đọc bản đồ quy hoạch Nhơn Trạch: ký hiệu, màu sắc, số thửa, đường giao thông và cách đối chiếu vị trí trước khi mua đất.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Cách đọc bản đồ quy hoạch Nhơn Trạch cho người mua đất" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cách đọc bản đồ quy hoạch Nhơn Trạch cho người mua đất",
    description: "Hướng dẫn đọc bản đồ quy hoạch, ký hiệu, màu sắc và đối chiếu vị trí đất tại Nhơn Trạch.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
