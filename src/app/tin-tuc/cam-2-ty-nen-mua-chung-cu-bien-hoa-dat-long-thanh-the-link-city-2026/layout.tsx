import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/cam-2-ty-nen-mua-chung-cu-bien-hoa-dat-long-thanh-the-link-city-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news55/1`;

export const metadata: Metadata = {
  title: "Cầm 2 Tỷ 2026: Nên Mua Chung Cư Biên Hòa, Đất Long Thành Hay The Link City Dầu Giây?",
  description:
    "Phân tích so sánh 3 kênh đầu tư 2 tỷ tại Đồng Nai 2026: Chung cư Biên Hòa, đất nền Long Thành hay đất sổ hồng The Link City Dầu Giây – Kênh nào sinh lời cao nhất?",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "The Link City Dầu Giây",
    "đầu tư bất động sản Đồng Nai 2026",
    "có 2 tỷ nên mua gì Đồng Nai",
    "so sánh The Link City chung cư Biên Hòa đất Long Thành",
    "chung cư Biên Hòa 2026",
    "đất nền Long Thành giá rẻ",
    "giá đất The Link City Kim Oanh",
    "cầm 2 tỷ mua bất động sản",
  ],
  openGraph: {
    title: "Cầm 2 Tỷ 2026: Nên Mua Chung Cư Biên Hòa, Đất Long Thành Hay The Link City?",
    description:
      "Phân tích so sánh 3 kênh đầu tư 2 tỷ tại Đồng Nai 2026: Chung cư Biên Hòa, đất nền Long Thành hay đất sổ hồng The Link City Dầu Giây – Kênh nào sinh lời cao nhất?",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Phân tích so sánh các kênh đầu tư bất động sản 2 tỷ đồng tại Đồng Nai năm 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cầm 2 Tỷ 2026: Nên Mua Chung Cư Biên Hòa, Đất Long Thành Hay The Link City?",
    description:
      "So sánh 3 kênh đầu tư 2 tỷ tại Đồng Nai: chung cư Biên Hòa, đất hẻm Long Thành hay đất sổ hồng The Link City – phân tích vốn, pháp lý, lợi nhuận.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
