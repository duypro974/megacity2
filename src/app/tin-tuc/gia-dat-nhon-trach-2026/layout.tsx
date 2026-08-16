import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/gia-dat-nhon-trach-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news6/1`;

export const metadata: Metadata = {
  title: "Giá đất Nhơn Trạch 2026 mới nhất: Cập nhật thị trường và xu hướng đầu tư",
  description:
    "Cập nhật giá đất Nhơn Trạch 2026 mới nhất. Phân tích biến động thị trường, các khu vực tiềm năng và xu hướng đầu tư bất động sản tại Đồng Nai.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "giá đất Nhơn Trạch 2026",
    "đất nền Nhơn Trạch",
    "giá đất Đồng Nai 2026",
    "đầu tư đất Nhơn Trạch",
    "bất động sản Nhơn Trạch",
    "giá đất gần sân bay Long Thành",
    "Mega City 2",
  ],
  openGraph: {
    title: "Giá đất Nhơn Trạch 2026 mới nhất: Thị trường đang diễn biến như thế nào?",
    description:
      "Bảng giá đất Nhơn Trạch theo quy định mới 2026, giá thực tế thị trường, khu vực tiềm năng và đánh giá dự án Mega City 2.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Giá đất Nhơn Trạch 2026 – khu vực Đồng Nai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giá đất Nhơn Trạch 2026 mới nhất",
    description: "Bảng giá, thị trường và các khu vực tiềm năng tại Nhơn Trạch, Đồng Nai năm 2026.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
