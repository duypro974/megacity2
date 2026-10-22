import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiện Ích One Era Bình Dương – TTTM AEON Mall, Cầu Kén Vàng & Chuẩn Sống Quốc Tế",
  description:
    "Hệ sinh thái tiện ích All-In-One đẳng cấp tại siêu dự án One Era (50ha Chuẩn Quốc Tế). Đại siêu thị AEON Mall, Cầu Kén Vàng, Trường quốc tế VAS Saigon, hồ bơi resort và công viên 42ha.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/one-era/tien-ich" },
  openGraph: {
    title: "Tiện Ích One Era Bình Dương – TTTM AEON Mall, Cầu Kén Vàng & Chuẩn Sống Quốc Tế",
    description:
      "Khám phá trọn vẹn hơn 50 tiện ích cao cấp phục vụ mọi thế hệ tại đại đô thị kiểu mẫu One Era Kim Oanh Group & Nhật Bản.",
    url: "https://kimoanhdongnai.com.vn/one-era/tien-ich",
    siteName: "Kim Oanh Đồng Nai",
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dqy4lfmcf/image/upload/v1792642548/oneera/amenities/one-era-aeon-mall-shopping.webp",
        width: 1200,
        height: 630,
        alt: "Đại siêu thị AEON Mall tại One Era Bình Dương",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiện Ích One Era Bình Dương – Chuẩn Sống Quốc Tế All-In-One",
    description: "AEON Mall, trường liên cấp VAS Saigon và hệ sinh thái tiện ích Fitwel 3 sao tại One Era.",
    images: ["https://res.cloudinary.com/dqy4lfmcf/image/upload/v1792642548/oneera/amenities/one-era-aeon-mall-shopping.webp"],
  },
};

export default function TienIchOneEraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
