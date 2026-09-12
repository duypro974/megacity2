import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/shophouse-the-link-city-dau-giay-tiem-nang-kinh-doanh-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news48/1`;

export const metadata: Metadata = {
  title: "Shophouse The Link City Dầu Giây 2026: Vị Thế Mặt Tiền Giao Thương & Bài Toán Khai Thác Dòng Tiền Cho Thuê",
  description:
    "Phân tích tiềm năng đầu tư Shophouse The Link City Dầu Giây: Mặt tiền trục đường lớn QL1A, thiết kế 2 mặt thoáng tối ưu kinh doanh và bài toán lợi nhuận cho thuê 2026.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "shophouse The Link City",
    "shophouse The Link City Dầu Giây",
    "nhà phố thương mại The Link City",
    "mặt bằng kinh doanh Dầu Giây",
    "giá shophouse The Link City Kim Oanh",
    "KDC A1 C1 Dầu Giây shophouse",
    "đầu tư shophouse Đồng Nai",
    "rental yield shophouse Dầu Giây",
  ],
  openGraph: {
    title: "Shophouse The Link City Dầu Giây 2026: Mặt Tiền Giao Thương & Dòng Tiền Cho Thuê",
    description:
      "Giá từ 3,85 tỷ, rental yield 7,8%–9,2%/năm, vốn tự có chỉ 30% — phân tích toàn diện cơ hội đầu tư Shophouse mặt tiền QL1A tại The Link City Dầu Giây 2026.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Phối cảnh tuyến phố shophouse thương mại sầm uất rực rỡ ánh đèn tại The Link City Dầu Giây",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shophouse The Link City Dầu Giây — Rental Yield 7,8–9,2%/năm",
    description:
      "Từ 3,85 tỷ, vốn tự có 30%, rental yield lên đến 9,2%/năm + lãi vốn 15–20%/năm. Shophouse mặt tiền QL1A tại The Link City Dầu Giây 2026.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
