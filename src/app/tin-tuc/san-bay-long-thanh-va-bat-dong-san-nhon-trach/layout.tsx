import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news8/1`;

export const metadata: Metadata = {
  title: "Sân bay Long Thành ảnh hưởng như thế nào đến bất động sản Nhơn Trạch?",
  description:
    "Sân bay Long Thành đang tạo ra những tác động đáng kể đến thị trường bất động sản Nhơn Trạch. Cùng tìm hiểu khoảng cách, tiềm năng phát triển và những khu vực được hưởng lợi từ dự án hạ tầng trọng điểm này.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "sân bay Long Thành và bất động sản Nhơn Trạch",
    "sân bay Long Thành ảnh hưởng đến Nhơn Trạch",
    "bất động sản Nhơn Trạch",
    "khoảng cách từ Nhơn Trạch đến sân bay Long Thành",
    "giá đất Nhơn Trạch",
    "tiềm năng đầu tư Nhơn Trạch",
    "Mega City 2",
  ],
  openGraph: {
    title: "Sân bay Long Thành ảnh hưởng như thế nào đến bất động sản Nhơn Trạch?",
    description:
      "Phân tích khoảng cách, tiềm năng phát triển và những khu vực tại Nhơn Trạch được hưởng lợi từ sân bay quốc tế Long Thành.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Sân bay Long Thành và bất động sản Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sân bay Long Thành ảnh hưởng như thế nào đến bất động sản Nhơn Trạch?",
    description:
      "Khoảng cách, tiềm năng và các khu vực được hưởng lợi từ sân bay Long Thành tại Nhơn Trạch.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
