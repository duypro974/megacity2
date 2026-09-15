import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news53/1`;

export const metadata: Metadata = {
  title: "Hồ Sơ Pháp Lý The Link City Dầu Giây 2026: Giải Mã Công Văn 2505/UBND-KTN & Tiến Trình Cấp Sổ Đỏ Từng Nền",
  description:
    "Báo cáo thẩm định pháp lý The Link City Dầu Giây 2026: Giải mã công văn 2505/UBND-KTN của UBND tỉnh Đồng Nai, nghĩa vụ tài chính và tiến trình cấp sổ hồng từng nền.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "Pháp lý The Link City",
    "Pháp lý The Link City Dầu Giây",
    "Sổ đỏ The Link City Dầu Giây",
    "Công văn 2505 UBND KTN",
    "Chủ đầu tư Phú Việt Tín",
    "KDC A1 C1 Dầu Giây pháp lý",
    "Kim Oanh The Link City pháp lý",
  ],
  openGraph: {
    title: "Hồ Sơ Pháp Lý The Link City 2026 — Giải Mã Công Văn 2505/UBND-KTN",
    description:
      "Giải mã công văn 2505/UBND-KTN ngày 13/02/2026 của UBND Đồng Nai, hoàn thành 100% nghĩa vụ tài chính và tiến trình cấp sổ hồng riêng từng nền tại The Link City Dầu Giây.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Báo cáo thẩm định hồ sơ pháp lý minh bạch dự án The Link City Dầu Giây Đồng Nai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pháp Lý The Link City 2026 — Công Văn 2505 & Cấp Sổ Hồng Từng Nền",
    description:
      "Giải mã công văn 2505/UBND-KTN, hoàn thành 100% nghĩa vụ tài chính, quy trình công chứng và nhận sổ hồng riêng tại The Link City Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
