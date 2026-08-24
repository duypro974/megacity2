import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/thi-truong-bat-dong-san-nhon-trach-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news28/1`;

export const metadata: Metadata = {
  title: "Thị trường bất động sản Nhơn Trạch 2026: Giá đất & tiềm năng",
  description:
    "Thị trường bất động sản Nhơn Trạch 2026 có gì đáng chú ý? Cập nhật giá đất, quy hoạch, hạ tầng, sân bay Long Thành và những yếu tố cần xem xét trước khi đầu tư.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "thị trường bất động sản Nhơn Trạch 2026",
    "bất động sản Nhơn Trạch 2026",
    "đất nền Nhơn Trạch 2026",
    "giá đất Nhơn Trạch 2026",
    "thị trường đất nền Nhơn Trạch",
    "đầu tư bất động sản Nhơn Trạch",
    "quy hoạch Nhơn Trạch 2026",
    "hạ tầng Nhơn Trạch",
    "sân bay Long Thành và Nhơn Trạch",
    "Vành đai 3 Nhơn Trạch",
    "đường 25C Nhơn Trạch",
  ],
  openGraph: {
    title: "Thị trường bất động sản Nhơn Trạch 2026: Giá đất & tiềm năng",
    description:
      "Cập nhật giá đất, quy hoạch, hạ tầng, sân bay Long Thành và những yếu tố cần xem xét trước khi đầu tư bất động sản Nhơn Trạch 2026.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Thị trường bất động sản Nhơn Trạch 2026 nhìn từ trên cao" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thị trường bất động sản Nhơn Trạch 2026: Giá đất & tiềm năng",
    description: "Cập nhật giá đất, quy hoạch, hạ tầng và tiềm năng đầu tư bất động sản Nhơn Trạch 2026.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
