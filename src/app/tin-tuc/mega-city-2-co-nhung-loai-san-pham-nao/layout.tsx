import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/mega-city-2-co-nhung-loai-san-pham-nao`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news32/1`;

export const metadata: Metadata = {
  title: "Mega City 2 Có Những Loại Sản Phẩm Nào? Đất Nền, Nhà Phố, Nhà Vườn",
  description:
    "Tìm hiểu các loại sản phẩm Mega City 2 Nhơn Trạch, đặc điểm đất nền, nhà phố, nhà vườn và những yếu tố cần xem xét trước khi lựa chọn.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "Mega City 2 có những loại sản phẩm nào",
    "sản phẩm Mega City 2",
    "các loại sản phẩm Mega City 2",
    "đất nền Mega City 2",
    "nhà phố Mega City 2",
    "nhà vườn Mega City 2",
    "biệt thự Mega City 2",
    "loại hình sản phẩm Mega City 2",
    "Mega City 2 Nhơn Trạch",
    "diện tích Mega City 2",
  ],
  openGraph: {
    title: "Mega City 2 Có Những Loại Sản Phẩm Nào? Đất Nền, Nhà Phố, Nhà Vườn",
    description:
      "Tìm hiểu các loại sản phẩm Mega City 2 Nhơn Trạch, đặc điểm đất nền, nhà phố, nhà vườn và những yếu tố cần xem xét trước khi lựa chọn.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Các loại sản phẩm tại Mega City 2 Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega City 2 Có Những Loại Sản Phẩm Nào? Đất Nền, Nhà Phố, Nhà Vườn",
    description:
      "Phân tích đặc điểm đất nền, nhà phố liền kề, nhà vườn liên kế và biệt thự tại Mega City 2 Nhơn Trạch.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
