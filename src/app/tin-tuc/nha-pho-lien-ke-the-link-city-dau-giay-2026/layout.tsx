import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/nha-pho-lien-ke-the-link-city-dau-giay-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news65/1`;

export const metadata: Metadata = {
  title: "Nhà Phố Liên Kế The Link City Dầu Giây: Diện Tích, Thiết Kế & Chi Phí Xây 2026",
  description: "Chi tiết nhà phố liên kế The Link City Dầu Giây: diện tích 5×20m, công năng mẫu nhà T3-2b, tiêu chuẩn xây dựng và chi phí hoàn thiện thực tế năm 2026.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "nhà phố the link city dầu giây",
    "nhà phố liên kế the link city",
    "diện tích nhà phố dầu giây",
    "mẫu nhà t3-2b the link city",
    "xây nhà the link city bao nhiêu tiền",
    "nhà phố liên kế đồng nai 2026",
  ],
  openGraph: {
    title: "Nhà Phố Liên Kế The Link City Dầu Giây: Diện Tích, Thiết Kế & Chi Phí Xây 2026",
    description: "Chi tiết nhà phố liên kế The Link City: diện tích, công năng mẫu nhà T3-2b, tiêu chuẩn xây dựng và chi phí hoàn thiện thực tế 2026.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Nhà phố liên kế The Link City Dầu Giây 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhà Phố Liên Kế The Link City Dầu Giây 2026",
    description: "Diện tích, thiết kế mẫu nhà T3-2b và chi phí xây dựng thực tế tại The Link City Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
