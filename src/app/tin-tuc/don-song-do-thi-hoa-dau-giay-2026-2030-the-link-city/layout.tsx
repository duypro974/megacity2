import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news51/1`;

export const metadata: Metadata = {
  title: "Đón Sóng Đô Thị Hóa Dầu Giây 2026 – 2030: Cơ Hội \"Nhân Đôi Tài Sản\" Cùng The Link City",
  description:
    "Phân tích lộ trình Dầu Giây lên đô thị loại IV (Thị xã) giai đoạn 2026-2030: Bài học tăng giá từ Dĩ An, Long Khánh và cơ hội nhân đôi tài sản tại The Link City.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "The Link City Dầu Giây",
    "đô thị Dầu Giây",
    "quy hoạch Dầu Giây 2030",
    "Dầu Giây lên thị xã",
    "đầu tư đất nền Dầu Giây",
    "dự án The Link City Kim Oanh",
    "KDC A1 C1 Dầu Giây",
    "đô thị hóa Dầu Giây",
  ],
  openGraph: {
    title: "Đón Sóng Đô Thị Hóa Dầu Giây 2026–2030 — Nhân Đôi Tài Sản The Link City",
    description:
      "Lộ trình Dầu Giây lên thị xã 2026–2030, bài học Dĩ An/Long Khánh tăng 200–300%, 3 cột mốc vàng kích hoạt sóng tăng giá và cơ hội mua ở vùng đệm 1,85 tỷ tại The Link City.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Phối cảnh quy hoạch phát triển đô thị Dầu Giây hiện đại giai đoạn 2026 đến 2030",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đón Sóng Đô Thị Hóa Dầu Giây — Nhân Đôi Tài Sản 2026–2030",
    description:
      "Dầu Giây lên thị xã 2026–2030, bài học Dĩ An tăng 300%, Long Khánh 250%. Cơ hội mua The Link City ở giá 1,85 tỷ — vùng đệm an toàn trước sóng tăng giá.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}