import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/quy-trinh-mua-dat-nen-nhon-trach`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news23/1`;

export const metadata: Metadata = {
  title: "Quy Trình Mua Đất Nền Nhơn Trạch Từ A–Z: 8 Bước Cần Biết 2026",
  description: "Tìm hiểu quy trình mua đất nền Nhơn Trạch từ A–Z gồm kiểm tra pháp lý, quy hoạch, khảo sát thực tế, thương lượng, đặt cọc, công chứng và sang tên.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "quy trình mua đất nền Nhơn Trạch",
    "quy trình mua đất nền",
    "quy trình mua đất Nhơn Trạch",
    "các bước mua đất nền",
    "thủ tục mua đất nền Nhơn Trạch",
    "kinh nghiệm mua đất Nhơn Trạch",
    "đặt cọc mua đất nền",
    "công chứng mua bán đất",
    "sang tên sổ đỏ",
  ],
  openGraph: {
    title: "Quy Trình Mua Đất Nền Nhơn Trạch Từ A–Z: 8 Bước Cần Biết 2026",
    description: "Hướng dẫn 8 bước mua đất nền Nhơn Trạch từ kiểm tra pháp lý, quy hoạch đến đặt cọc, công chứng và hoàn tất thủ tục sang tên.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Quy trình mua đất nền Nhơn Trạch năm 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quy Trình Mua Đất Nền Nhơn Trạch – 8 Bước Từ A–Z",
    description: "8 bước quy trình mua đất nền Nhơn Trạch từ kiểm tra pháp lý đến sang tên.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
