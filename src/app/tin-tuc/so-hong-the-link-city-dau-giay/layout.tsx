import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/so-hong-the-link-city-dau-giay`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news74/1`;

export const metadata: Metadata = {
  title: "The Link City Dầu Giây Khi Nào Ra Sổ? Thực Tế Pháp Lý & Sổ Hồng 2026",
  description:
    "Giải đáp chính xác The Link City khi nào ra sổ: Sở TN&MT Đồng Nai đã cấp sổ hồng riêng từng nền cho CĐT Phú Việt Tín. Hướng dẫn quy trình, điều kiện công chứng và thời gian nhận sổ sang tên 2026.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "the link city khi nào ra sổ",
    "the link city có sổ chưa",
    "sổ hồng the link city",
    "sổ hồng the link city dầu giây",
    "pháp lý the link city có sổ hồng chưa",
    "quy trình nhận sổ hồng the link city",
    "nhận sổ hồng the link city dầu giây",
    "khi nào the link city ra sổ",
    "sổ hồng dầu giây 2026",
  ],
  openGraph: {
    title: "The Link City Dầu Giây Khi Nào Ra Sổ? Thực Tế Sổ Hồng Đã Cấp Từng Nền 2026",
    description:
      "Sở TN&MT Đồng Nai đã cấp sổ hồng riêng từng nền cho CĐT Phú Việt Tín. Quy trình công chứng sang tên và thời gian nhận sổ thực tế 2026.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Sổ hồng The Link City Dầu Giây đã cấp thực tế" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Link City Dầu Giây Khi Nào Ra Sổ? Thực Tế Sổ Hồng Đã Cấp 2026",
    description:
      "Sổ hồng riêng từng nền đã cấp thực tế, điều kiện công chứng và thời gian nhận sổ tại The Link City Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
