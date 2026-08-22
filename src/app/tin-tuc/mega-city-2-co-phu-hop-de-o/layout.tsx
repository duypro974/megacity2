import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/mega-city-2-co-phu-hop-de-o`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news25/1`;

export const metadata: Metadata = {
  title: "Mega City 2 có phù hợp để ở không? Phân tích chi tiết 2026",
  description:
    "Mega City 2 có phù hợp để ở không? Cùng phân tích vị trí, hạ tầng, tiện ích, loại hình nhà ở và những yếu tố cần cân nhắc trước khi mua để an cư tại Nhơn Trạch.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "Mega City 2 có phù hợp để ở",
    "Mega City 2 có nên mua để ở",
    "Mega City 2 an cư",
    "sống tại Mega City 2 Nhơn Trạch",
    "mua nhà Mega City 2 để ở",
    "Mega City 2 Nhơn Trạch",
    "tiện ích Mega City 2",
    "vị trí Mega City 2",
    "nhà ở Mega City 2",
  ],
  openGraph: {
    title: "Mega City 2 có phù hợp để ở không? Phân tích nhu cầu an cư tại Nhơn Trạch",
    description:
      "Mega City 2 có phù hợp để ở không? Phân tích vị trí, hạ tầng, tiện ích, loại hình nhà ở và các yếu tố cần cân nhắc trước khi mua để an cư tại Nhơn Trạch.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Mega City 2 Nhơn Trạch có phù hợp để ở không" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega City 2 có phù hợp để ở không? Phân tích 2026",
    description: "Phân tích vị trí, hạ tầng, tiện ích và các yếu tố an cư tại Mega City 2 Nhơn Trạch.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
