import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bảng Giá One Era Bình Dương Đợt 1 – Giá Gốc CĐT & Chính Sách Ưu Đãi 2026",
  description:
    "Cập nhật bảng giá One Era Bình Dương mới nhất đợt 1 phân khu Central District (357 căn thấp tầng). Chính sách thanh toán giãn tiến độ đến Q4/2028, ngân hàng hỗ trợ vay 70% ân hạn nợ gốc.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/one-era/bang-gia" },
  openGraph: {
    title: "Bảng Giá One Era Bình Dương Đợt 1 – Giá Gốc CĐT & Chính Sách Ưu Đãi 2026",
    description:
      "Bảng giá gốc và chính sách thanh toán ưu đãi dự án chuẩn quốc tế One Era Kim Oanh Group & 3 Tập đoàn Nhật Bản. Suất ngoại giao căn đẹp đợt 1.",
    url: "https://kimoanhdongnai.com.vn/one-era/bang-gia",
    siteName: "Kim Oanh Đồng Nai",
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dqy4lfmcf/image/upload/v1792642548/oneera/products/one-era-shophouse-commercial-facade.webp",
        width: 1200,
        height: 630,
        alt: "Bảng giá Townhouse và Shophouse One Era Bình Dương",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảng Giá One Era Bình Dương – Suất Ngoại Giao Đợt 1",
    description: "Nhận bảng giá và chính sách ưu đãi mở bán đợt 1 phân khu Central District One Era.",
    images: ["https://res.cloudinary.com/dqy4lfmcf/image/upload/v1792642548/oneera/products/one-era-shophouse-commercial-facade.webp"],
  },
};

export default function BangGiaOneEraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
