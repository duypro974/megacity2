import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news64/1`;

export const metadata: Metadata = {
  title: "Có Nên Mua Đất Nền The Link City Dầu Giây Không? Phân Tích Thực Tế 2026",
  description: "Đánh giá trung thực The Link City Dầu Giây 2026: ưu điểm pháp lý sổ hồng, hạ tầng hoàn thiện, vị trí cao tốc và nhược điểm cần biết trước khi quyết định xuống tiền.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "có nên mua the link city không",
    "the link city dầu giây có đáng mua không",
    "review the link city 2026",
    "đánh giá the link city dầu giây",
    "mua đất nền dầu giây 2026",
    "the link city lừa đảo không",
  ],
  openGraph: {
    title: "Có Nên Mua Đất Nền The Link City Dầu Giây Không? Phân Tích Thực Tế 2026",
    description: "Đánh giá trung thực The Link City 2026: ưu nhược điểm thực tế, pháp lý sổ hồng, hạ tầng và những điều cần cân nhắc trước khi xuống tiền.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Có nên mua đất nền The Link City Dầu Giây không?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Có Nên Mua The Link City Dầu Giây Không? Phân Tích 2026",
    description: "Ưu nhược điểm thực tế, pháp lý sổ hồng và những điều cần biết trước khi mua The Link City Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
