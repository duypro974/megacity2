import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/ket-noi-mega-city-2-va-cac-khu-cong-nghiep-nhon-trach`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news38/1`;

export const metadata: Metadata = {
  title: "Kết nối từ Mega City 2 đến các KCN Nhơn Trạch: Tiềm năng thực tế",
  description:
    "Phân tích khoảng cách từ Mega City 2 đến 9 khu công nghiệp Nhơn Trạch, các mô hình khai thác cho thuê tiềm năng và lợi thế so với nhà trọ tự phát ven KCN.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "Mega City 2 và KCN Nhơn Trạch",
    "Mega City 2 gần khu công nghiệp nào",
    "khoảng cách Mega City 2 đến KCN",
    "thuê nhà Mega City 2",
    "khu công nghiệp Nhơn Trạch",
    "khu công nghiệp Nhơn Trạch 1 2 3",
    "đầu tư đất nền gần KCN",
    "Mega City 2 Nhơn Trạch",
  ],
  openGraph: {
    title: "Kết nối từ Mega City 2 đến các KCN Nhơn Trạch: Tiềm năng thực tế",
    description:
      "Khoảng cách 2,5–10km đến 9 KCN Nhơn Trạch, 3 mô hình khai thác cho thuê và 4 lợi thế của Mega City 2 so với nhà trọ tự phát ven khu công nghiệp.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Sơ đồ kết nối giao thông giữa Mega City 2 và cụm 9 khu công nghiệp Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kết nối từ Mega City 2 đến các KCN Nhơn Trạch: Tiềm năng thực tế",
    description:
      "Vị trí Mega City 2 cách KCN Nhơn Trạch 1 chỉ 3km — phân tích tiềm năng cho thuê và khai thác dòng tiền từ 120.000+ lao động công nghiệp.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
