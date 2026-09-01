import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/shophouse-mega-city-2-khai-thac-kinh-doanh`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news41/1`;

export const metadata: Metadata = {
  title: "Shophouse Mega City 2: Khả năng khai thác kinh doanh thực tế",
  description:
    "Đánh giá tiềm năng khai thác kinh doanh của Shophouse Mega City 2 Nhơn Trạch dọc các trục đường 24m–32m: ngành nghề phù hợp, đối tượng khách hàng và tỷ suất sinh lời.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "shophouse Mega City 2",
    "nhà phố thương mại Mega City 2",
    "kinh doanh tại Mega City 2",
    "mặt bằng kinh doanh Mega City 2 Nhơn Trạch",
    "shophouse Nhơn Trạch Đồng Nai",
    "đất nền mặt tiền Mega City 2",
    "dự án Mega City 2 Nhơn Trạch",
    "đất nền Mega City 2",
  ],
  openGraph: {
    title: "Shophouse Mega City 2: Khả năng khai thác kinh doanh thực tế",
    description:
      "Shophouse Mega City 2 dọc trục đường 24–32m: 4 nhóm ngành nghề tiềm năng, bảng tài chính tham khảo, kinh nghiệm chọn lô đẹp và so sánh công năng kép vừa ở vừa kinh doanh.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Dãy nhà phố thương mại shophouse hiện đại tại dự án Mega City 2 Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shophouse Mega City 2: Khả năng khai thác kinh doanh thực tế",
    description:
      "12.000+ cư dân nội khu + hàng vạn lao động KCN — tiềm năng khai thác shophouse mặt tiền 24–32m tại Mega City 2 Nhơn Trạch.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
