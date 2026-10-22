import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vị Trí One Era Bình Dương – Tọa Độ Tam Giao, Vành Đai 3 & 2 Ga Metro",
  description:
    "Đánh giá chi tiết vị trí siêu dự án One Era Bình Dương (50ha Chuẩn Quốc Tế) tại TP. Thuận An. Kết nối ngã ba sông Suối Cát, Vành Đai 3, Quốc Lộ 13 và 2 tuyến Metro Line 1B & 2B.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/one-era/vi-tri" },
  openGraph: {
    title: "Vị Trí One Era Bình Dương – Tọa Độ Tam Giao, Vành Đai 3 & 2 Ga Metro",
    description:
      "Tọa độ vàng tại phường Thuận Giao, TP. Thuận An, Bình Dương. Kết nối thẳng về TP.HCM chỉ 20 phút qua mạng lưới giao thông liên vùng.",
    url: "https://kimoanhdongnai.com.vn/one-era/vi-tri",
    siteName: "Kim Oanh Đồng Nai",
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dqy4lfmcf/image/upload/v1792642548/oneera/master-plan/one-era-tam-giao-connectivity.webp",
        width: 1200,
        height: 630,
        alt: "Bản đồ vị trí kết nối giao thông One Era Bình Dương",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vị Trí One Era Bình Dương – Tọa Độ Tam Giao & 2 Tuyến Metro",
    description:
      "Phân tích vị trí chiến lược dự án chuẩn quốc tế One Era Kim Oanh tại Thuận An, Bình Dương kề cận Vành Đai 3.",
    images: ["https://res.cloudinary.com/dqy4lfmcf/image/upload/v1792642548/oneera/master-plan/one-era-tam-giao-connectivity.webp"],
  },
};

export default function ViTriOneEraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
