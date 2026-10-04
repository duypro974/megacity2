import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/pho-thu-tuong-kiem-tra-san-bay-long-thanh`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news70/1`;

export const metadata: Metadata = {
  title: "Phó Thủ tướng Phạm Gia Túc Kiểm Tra Sân Bay Long Thành: Tiến Độ Và Ý Nghĩa Với BĐS Nhơn Trạch – Dầu Giây",
  description: "Ngày 4/10/2026, Phó Thủ tướng Thường trực Phạm Gia Túc kiểm tra tiến độ sân bay Long Thành và các tuyến giao thông kết nối. Phân tích tác động đến BĐS Nhơn Trạch và Dầu Giây.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "phó thủ tướng kiểm tra sân bay long thành",
    "tiến độ sân bay long thành 2026",
    "sân bay long thành tháng 10 2026",
    "bất động sản nhơn trạch sân bay long thành",
    "the link city sân bay long thành",
    "mega city 2 sân bay long thành",
  ],
  openGraph: {
    title: "Phó Thủ tướng Kiểm Tra Sân Bay Long Thành: Tiến Độ & Tác Động BĐS Nhơn Trạch – Dầu Giây",
    description: "Ngày 4/10/2026, Phó Thủ tướng Thường trực Phạm Gia Túc kiểm tra tiến độ sân bay Long Thành và các tuyến giao thông kết nối.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Phó Thủ tướng kiểm tra sân bay Long Thành tháng 10/2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phó Thủ tướng Kiểm Tra Sân Bay Long Thành 4/10/2026",
    description: "Tiến độ sân bay Long Thành và tác động đến BĐS Nhơn Trạch – Dầu Giây tháng 10/2026.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
