import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news34/1`;

export const metadata: Metadata = {
  title: "Mặt bằng phân lô Mega City 2: Sơ đồ chi tiết từng phân khu",
  description:
    "Khám phá bản đồ mặt bằng phân lô Mega City 2 Nhơn Trạch: sơ đồ chi tiết các phân khu, cơ cấu diện tích 90m²–300m² và lộ giới đường nội bộ dự án.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "mặt bằng Mega City 2",
    "sơ đồ phân lô Mega City 2",
    "bản đồ Mega City 2 Nhơn Trạch",
    "phân khu Mega City 2",
    "diện tích đất nền Mega City 2",
    "mặt bằng phân lô Mega City 2 Nhơn Trạch",
    "đất nền Mega City 2 Nhơn Trạch",
    "dự án Mega City 2",
  ],
  openGraph: {
    title: "Mặt bằng phân lô Mega City 2: Sơ đồ chi tiết từng phân khu",
    description:
      "Bản đồ mặt bằng phân lô Mega City 2 Nhơn Trạch: sơ đồ các phân khu, diện tích 90–300m², lộ giới đường 13–32m và vị trí công viên trung tâm 2,1 ha.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Bản đồ mặt bằng tổng thể dự án Mega City 2 Nhơn Trạch quy mô 84 ha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mặt bằng phân lô Mega City 2: Sơ đồ chi tiết từng phân khu",
    description:
      "Phân tích mặt bằng Mega City 2 Nhơn Trạch: phân khu, diện tích lô 90–300m², lộ giới 13–32m, công viên 2,1 ha và kinh nghiệm chọn vị trí đất đẹp.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
