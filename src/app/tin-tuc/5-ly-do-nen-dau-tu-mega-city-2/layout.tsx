import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/5-ly-do-nen-dau-tu-mega-city-2`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news11/1`;

export const metadata: Metadata = {
  title: "5 Lý Do Nên Đầu Tư Mega City 2 Nhơn Trạch Trong Năm 2026",
  description:
    "Có nên đầu tư Mega City 2 Nhơn Trạch trong năm 2026? Phân tích 5 lý do giúp dự án trở thành điểm đến hấp dẫn của nhiều nhà đầu tư tại Đồng Nai.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "đầu tư Mega City 2",
    "có nên đầu tư Mega City 2",
    "tiềm năng Mega City 2",
    "đất nền Mega City 2",
    "Mega City 2 Nhơn Trạch",
    "đầu tư bất động sản Nhơn Trạch",
    "đầu tư đất nền Đồng Nai",
  ],
  openGraph: {
    title: "5 Lý Do Nên Đầu Tư Mega City 2 Nhơn Trạch Trong Năm 2026",
    description:
      "Phân tích 5 lý do: vị trí chiến lược, hạ tầng vùng, quy hoạch đồng bộ, giá hợp lý và tiềm năng dài hạn của dự án Mega City 2 Nhơn Trạch.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "5 Lý Do Nên Đầu Tư Mega City 2 Nhơn Trạch 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Lý Do Nên Đầu Tư Mega City 2 Nhơn Trạch 2026",
    description: "Vị trí, hạ tầng, tiện ích, giá hợp lý và tiềm năng dài hạn — phân tích đầy đủ trước khi đầu tư.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
