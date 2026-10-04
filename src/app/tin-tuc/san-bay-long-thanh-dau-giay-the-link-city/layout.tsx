import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/san-bay-long-thanh-dau-giay-the-link-city`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news69/1`;

export const metadata: Metadata = {
  title: "Sân Bay Long Thành & BĐS Dầu Giây: The Link City Cách Sân Bay Bao Xa? Cập Nhật 2026",
  description: "The Link City Dầu Giây cách sân bay Long Thành khoảng 30–35km, di chuyển 25–35 phút. Phân tích tác động sân bay đến BĐS Dầu Giây và lý do vị trí The Link City hưởng lợi gián tiếp.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "the link city cách sân bay long thành bao xa",
    "bất động sản dầu giây sân bay long thành",
    "dầu giây đến sân bay long thành",
    "sân bay long thành ảnh hưởng đến dầu giây",
    "the link city gần sân bay long thành",
    "đầu tư dầu giây vì sân bay",
  ],
  openGraph: {
    title: "Sân Bay Long Thành & BĐS Dầu Giây: The Link City Cách Sân Bay Bao Xa?",
    description: "The Link City cách sân bay Long Thành 30–35km. Phân tích tác động sân bay đến BĐS Dầu Giây và cơ hội đầu tư The Link City.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Sân bay Long Thành và The Link City Dầu Giây" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sân Bay Long Thành & The Link City Dầu Giây 2026",
    description: "Khoảng cách, lộ trình và tác động của sân bay Long Thành đến BĐS Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
