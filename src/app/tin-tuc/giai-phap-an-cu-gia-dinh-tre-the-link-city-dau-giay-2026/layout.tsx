import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news52/1`;

export const metadata: Metadata = {
  title: "Giải Pháp An Cư Cho Gia Đình Trẻ 2026: Sở Hữu Nhà Phố The Link City Dầu Giây Chỉ Từ 12 Triệu/Tháng",
  description:
    "Bài toán an cư cho vợ chồng trẻ và chuyên gia KCN tại The Link City Dầu Giây: Vốn tự có 550 triệu, trả góp 12 triệu/tháng sở hữu nhà phố 3 tầng sổ hồng riêng.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "The Link City Dầu Giây",
    "Mua nhà The Link City",
    "Nhà phố The Link City",
    "An cư The Link City",
    "Đất nền sổ hồng Dầu Giây",
    "Vay mua nhà The Link City Kim Oanh",
    "KDC A1 C1 Dầu Giây",
  ],
  openGraph: {
    title: "Giải Pháp An Cư Gia Đình Trẻ 2026 — Nhà Phố The Link City Chỉ Từ 12 Triệu/Tháng",
    description:
      "Vốn tự có 550 triệu, trả góp 12 triệu/tháng sở hữu nhà phố 3 tầng sổ hồng riêng tại The Link City Dầu Giây — giải pháp an cư vượt trội so với chung cư vùng ven.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Gia đình trẻ hạnh phúc sinh sống tại khu đô thị hiện đại The Link City Dầu Giây",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "An Cư Nhà Phố The Link City Dầu Giây Chỉ 12 Triệu/Tháng",
    description:
      "Vốn tự có 550 triệu, trả góp 12 triệu/tháng — Sở hữu nhà phố 3 tầng sổ hồng riêng tại The Link City Dầu Giây 2026.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
