import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/so-hong-the-link-city-dau-giay`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news74/1`;

export const metadata: Metadata = {
  title: "Sổ Hồng The Link City Dầu Giây: Thực Tế Đã Cấp, Quy Trình & Thời Gian Nhận 2026",
  description: "Sổ hồng The Link City Dầu Giây đã được cấp thực tế từng nền. Tìm hiểu quy trình nhận sổ, căn cứ pháp lý Công văn 2505, điều kiện ký hợp đồng công chứng và thời gian dự kiến sang tên 2026.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "sổ hồng the link city",
    "the link city có sổ hồng chưa",
    "quy trình nhận sổ hồng the link city",
    "sổ hồng dầu giây 2026",
    "the link city pháp lý sổ hồng",
    "nhận sổ hồng the link city dầu giây",
  ],
  openGraph: {
    title: "Sổ Hồng The Link City Dầu Giây: Đã Cấp Thực Tế, Quy Trình & Thời Gian Nhận 2026",
    description: "Sổ hồng The Link City đã cấp thực tế từng nền. Quy trình nhận sổ, căn cứ pháp lý và thời gian dự kiến 2026.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Sổ hồng The Link City Dầu Giây đã cấp thực tế" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sổ Hồng The Link City Dầu Giây: Thực Tế Đã Cấp 2026",
    description: "Sổ hồng từng nền đã cấp, quy trình nhận và thời gian dự kiến tại The Link City Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
