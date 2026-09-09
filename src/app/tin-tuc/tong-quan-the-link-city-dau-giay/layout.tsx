import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/tong-quan-the-link-city-dau-giay`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news43/1`;

export const metadata: Metadata = {
  title: "The Link City Dầu Giây – Tổng Quan Dự Án & Giá Bán Đợt 1 Năm 2026",
  description:
    "Tổng quan dự án The Link City (Khu dân cư A1-C1 Đô thị Dầu Giây): vị trí ngã tư QL1A & QL20, pháp lý sổ hồng từng nền, bảng giá đợt 1 từ 1,85 tỷ, tiến độ hạ tầng hoàn thiện 100% năm 2026.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "The Link City Dầu Giây",
    "Khu dân cư A1-C1 Đô thị Dầu Giây",
    "đất nền The Link City",
    "giá bán The Link City 2026",
    "Kim Oanh Land Đồng Nai",
    "đất nền Dầu Giây sổ hồng",
    "dự án bất động sản Thống Nhất Đồng Nai",
    "đất nền ngã tư Quốc lộ 1A Quốc lộ 20",
    "Phú Việt Tín Dầu Giây",
  ],
  openGraph: {
    title: "The Link City Dầu Giây – Tổng Quan Dự Án & Giá Bán Đợt 1 Năm 2026",
    description:
      "21ha tại ngã tư QL1A & QL20, sổ hồng từng nền sẵn sàng công chứng, giá mở bán đợt 1 chỉ từ 1,85 tỷ đồng. Khám phá toàn bộ thông số kỹ thuật, bảng giá và tiềm năng đầu tư The Link City Dầu Giây 2026.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Toàn cảnh sa bàn dự án The Link City Dầu Giây 21ha do Kim Oanh phát triển tại Đồng Nai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Link City Dầu Giây – Tổng Quan & Giá Bán Đợt 1 Năm 2026",
    description:
      "Sổ hồng từng nền, hạ tầng hoàn thiện 100%, giá từ 1,85 tỷ – Tổng quan toàn diện dự án The Link City tại ngã tư QL1A & QL20 Dầu Giây Đồng Nai.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
