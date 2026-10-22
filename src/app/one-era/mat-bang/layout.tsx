import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mặt Bằng One Era Bình Dương – Sơ Đồ Quy Hoạch 50ha & Phân Lô Central District",
  description:
    "Xem chi tiết mặt bằng quy hoạch 50ha siêu dự án One Era Bình Dương. Sơ đồ phân lô 357 căn thấp tầng Central District, kích thước từng lô nhà phố 5x16m, 6x18m và shophouse 6x23m.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/one-era/mat-bang" },
  openGraph: {
    title: "Mặt Bằng One Era Bình Dương – Sơ Đồ Quy Hoạch 50ha & Phân Lô Central District",
    description:
      "Bản vẽ phân lô vector siêu nét dự án One Era Kim Oanh & Nhật Bản. Lộ giới đường nội bộ 13m - 25m, hồ bơi resort và tiện ích trung tâm.",
    url: "https://kimoanhdongnai.com.vn/one-era/mat-bang",
    siteName: "Kim Oanh Đồng Nai",
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dqy4lfmcf/image/upload/v1792642548/oneera/leaflets/one-era-central-district-leaflet-back-plan.webp",
        width: 1200,
        height: 630,
        alt: "Sơ đồ phân lô chi tiết phân khu Central District One Era",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mặt Bằng One Era Bình Dương – Sơ Đồ Phân Lô Central District",
    description: "Khám phá sơ đồ bóc tách từng lô căn Townhouse và Shophouse One Era Bình Dương.",
    images: ["https://res.cloudinary.com/dqy4lfmcf/image/upload/v1792642548/oneera/leaflets/one-era-central-district-leaflet-back-plan.webp"],
  },
};

export default function MatBangOneEraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
