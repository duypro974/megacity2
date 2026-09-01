import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/dat-nen-nha-vuon-biet-thu-mega-city-2`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news40/1`;

export const metadata: Metadata = {
  title: "Biệt thự & nhà vườn Mega City 2: Đặc điểm & tiềm năng thực tế",
  description:
    "Phân tích chi tiết đất nền nhà vườn và biệt thự Mega City 2 Nhơn Trạch: diện tích 200–350m², quy hoạch, kiến trúc, 3 mô hình khai thác và so sánh với đất vườn tự phát.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "biệt thự Mega City 2",
    "đất nhà vườn Mega City 2",
    "biệt thự vườn Nhơn Trạch",
    "đất nền biệt thự Mega City 2",
    "nhà vườn Mega City 2 Nhơn Trạch",
    "đất nền diện tích lớn Mega City 2",
    "biệt thự khu đô thị Nhơn Trạch",
    "dự án Mega City 2",
  ],
  openGraph: {
    title: "Biệt thự & nhà vườn Mega City 2: Đặc điểm & tiềm năng thực tế",
    description:
      "Đất nền biệt thự Mega City 2 từ 200–350m²: quy hoạch chuẩn 1/500, khoảng lùi, mật độ xây dựng, 3 mô hình khai thác second-home/cho thuê chuyên gia/cafe sân vườn.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Phối cảnh biệt thự vườn hiện đại diện tích lớn tại khu đô thị Mega City 2 Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biệt thự & nhà vườn Mega City 2: Đặc điểm & tiềm năng thực tế",
    description:
      "Đất biệt thự Mega City 2 từ 200–350m², điện âm đồng bộ, ven công viên 2,1ha — phân tích tiềm năng second-home, cho thuê chuyên gia KCN và cafe sân vườn.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
