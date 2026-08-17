import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/cao-toc-bien-hoa-vung-tau`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news9/1`;

export const metadata: Metadata = {
  title: "Cao tốc Biên Hòa - Vũng Tàu tác động như thế nào đến bất động sản Nhơn Trạch?",
  description:
    "Tìm hiểu tác động của cao tốc Biên Hòa - Vũng Tàu đến thị trường bất động sản Nhơn Trạch. Phân tích hạ tầng, kết nối giao thông và tiềm năng tăng giá trong tương lai.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "cao tốc Biên Hòa Vũng Tàu",
    "cao tốc Biên Hòa Vũng Tàu Nhơn Trạch",
    "bất động sản Nhơn Trạch",
    "hạ tầng Nhơn Trạch",
    "giá đất Nhơn Trạch",
    "đầu tư bất động sản Nhơn Trạch",
    "Mega City 2 Nhơn Trạch",
  ],
  openGraph: {
    title: "Cao tốc Biên Hòa - Vũng Tàu tác động như thế nào đến bất động sản Nhơn Trạch?",
    description:
      "Phân tích tác động của cao tốc Biên Hòa - Vũng Tàu đến hạ tầng, kết nối giao thông và tiềm năng bất động sản Nhơn Trạch.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Cao tốc Biên Hòa - Vũng Tàu và bất động sản Nhơn Trạch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cao tốc Biên Hòa - Vũng Tàu tác động đến BĐS Nhơn Trạch",
    description: "Hạ tầng, kết nối giao thông và tiềm năng bất động sản Nhơn Trạch từ dự án cao tốc trọng điểm.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
