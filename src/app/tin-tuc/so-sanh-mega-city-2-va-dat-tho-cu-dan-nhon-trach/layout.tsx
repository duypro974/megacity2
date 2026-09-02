import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/so-sanh-mega-city-2-va-dat-tho-cu-dan-nhon-trach`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news42/1`;

export const metadata: Metadata = {
  title: "Nên mua Mega City 2 hay đất thổ cư tự phân lô tại Nhơn Trạch?",
  description:
    "So sánh chi tiết đất nền dự án Mega City 2 Nhơn Trạch và đất thổ cư dân tự phân lô: phân tích 5 tiêu chí hạ tầng, pháp lý, tiện ích, thanh khoản và an toàn vốn.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "so sánh đất dự án Mega City 2 và đất thổ cư Nhơn Trạch",
    "nên mua Mega City 2 hay đất dân",
    "so sánh đất nền Mega City 2",
    "đất thổ cư Nhơn Trạch",
    "kinh nghiệm mua đất Nhơn Trạch",
    "đất phân lô Nhơn Trạch",
    "dự án Mega City 2 Nhơn Trạch",
    "đất nền Mega City 2",
  ],
  openGraph: {
    title: "Nên mua Mega City 2 hay đất thổ cư tự phân lô tại Nhơn Trạch?",
    description:
      "So sánh 5 tiêu chí: hạ tầng kỹ thuật, pháp lý 1/500, quy cách xây dựng, tiện ích sinh thái và thanh khoản giữa đất dự án Mega City 2 và đất thổ cư dân tự phân lô Nhơn Trạch.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "So sánh suất đầu tư đất nền dự án Mega City 2 và đất thổ cư dân phân lô Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nên mua Mega City 2 hay đất thổ cư tự phân lô tại Nhơn Trạch?",
    description:
      "5 tiêu chí so sánh: hạ tầng điện âm, pháp lý 1/500, đường 13–32m, công viên 2,1ha và thanh khoản — Mega City 2 vs đất thổ cư dân phân lô.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
