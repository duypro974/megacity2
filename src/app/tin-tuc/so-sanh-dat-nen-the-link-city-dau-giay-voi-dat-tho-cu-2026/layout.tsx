import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news45/1`;

export const metadata: Metadata = {
  title: "So Sánh Đất Nền The Link City Dầu Giây Với Đất Thổ Cư Khu Vực: Có Đáng Xuống Tiền Đợt 1 Năm 2026?",
  description:
    "So sánh chi tiết đất nền The Link City Dầu Giây với đất thổ cư ven QL1A Thống Nhất: Phân tích pháp lý, hạ tầng, bài toán thanh khoản và 5 lý do nhà đầu tư xuống tiền đợt 1.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "đất nền The Link City Dầu Giây",
    "The Link City Dầu Giây",
    "có nên mua The Link City",
    "đất nền Dầu Giây Thống Nhất",
    "đầu tư The Link City Kim Oanh",
    "giá đất ngã tư Dầu Giây",
    "dự án A1 C1 Dầu Giây 2026",
    "so sánh đất nền dự án và đất thổ cư Đồng Nai",
  ],
  openGraph: {
    title: "So Sánh The Link City vs Đất Thổ Cư Dầu Giây: Có Đáng Xuống Tiền Đợt 1 Không?",
    description:
      "Phân tích 6 tiêu chí then chốt, 5 ngòi nổ tăng giá 2026–2028 và chiến lược chốt lời thực chiến — giúp nhà đầu tư đưa ra quyết định chính xác với đất nền The Link City Dầu Giây.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Khu đô thị The Link City Dầu Giây quy hoạch hạ tầng đồng bộ chuẩn 1/500 tại Đồng Nai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Link City vs Đất Thổ Cư Dầu Giây — Đáng Xuống Tiền Đợt 1 Không?",
    description:
      "6 tiêu chí so sánh trực diện, 5 đòn bẩy tăng giá 2026–2028 và 3 chiến lược chốt lời cho nhà đầu tư đất nền The Link City Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
