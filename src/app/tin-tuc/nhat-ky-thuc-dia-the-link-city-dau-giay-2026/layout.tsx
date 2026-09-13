import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news49/1`;

export const metadata: Metadata = {
  title: "Nhật Ký Thực Địa The Link City Dầu Giây 2026: Một Ngày Tận Mục Sở Thị \"Mỏ Vàng\" Cửa Ngõ Cao Tốc",
  description:
    "Ký sự thực tế một ngày trải nghiệm The Link City Dầu Giây: 45 phút chạy xe từ TP.HCM, ngắm sa bàn 21ha, cầm trên tay sổ hồng từng nền và giải mã tiềm năng 1,85 tỷ.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "The Link City Dầu Giây",
    "dự án The Link City",
    "thực tế The Link City Dầu Giây",
    "có nên mua The Link City",
    "sổ hồng The Link City",
    "Kim Oanh Dầu Giây",
    "KDC A1 C1 Dầu Giây thực tế",
    "nhật ký thực địa The Link City",
  ],
  openGraph: {
    title: "Nhật Ký Thực Địa The Link City Dầu Giây 2026 — 45 Phút Từ TP.HCM",
    description:
      "Ký sự chân thực: 45 phút từ TP.HCM, ngắm sa bàn 21ha, cầm sổ hồng thực tế và giải mã tại sao 550 triệu vốn tự có có thể sở hữu đất đô thị ngay ngã tư cửa ngõ cao tốc.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Hình ảnh thực tế căn nhà phố biệt thự hiện hữu tại ngã tư đường dự án The Link City Dầu Giây",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhật Ký Thực Địa The Link City Dầu Giây — 45 Phút Từ TP.HCM",
    description:
      "Hạ tầng 100%, sổ hồng thực tế trên tay, công viên đồi cỏ và sân pickleball hiện hữu. Ký sự thực địa The Link City Dầu Giây 2026.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
