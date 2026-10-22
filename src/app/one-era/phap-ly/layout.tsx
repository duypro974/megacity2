import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pháp Lý One Era Bình Dương – Quy Hoạch 1/500 & Bảo Chứng Quốc Tế Chuẩn Quốc Tế",
  description:
    "Tìm hiểu chi tiết hồ sơ pháp lý dự án One Era Bình Dương (50ha). Phê duyệt quy hoạch 1/500, vốn liên doanh quốc tế giữa Kim Oanh Group & 3 Tập đoàn Nhật Bản, tổng thầu thi công Coteccons.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/one-era/phap-ly" },
  openGraph: {
    title: "Pháp Lý One Era Bình Dương – Quy Hoạch 1/500 & Bảo Chứng Quốc Tế Chuẩn Quốc Tế",
    description:
      "Minh bạch pháp lý siêu đô thị One Era Bình Dương. Bảo chứng vững chắc từ liên minh Kinera và nhà thầu xây dựng số 1 Việt Nam Coteccons.",
    url: "https://kimoanhdongnai.com.vn/one-era/phap-ly",
    siteName: "Kim Oanh Đồng Nai",
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: "https://res.cloudinary.com/dqy4lfmcf/image/upload/v1792642548/oneera/developers/one-era-kinera-consortium.webp",
        width: 1200,
        height: 630,
        alt: "Liên danh phát triển Kinera siêu dự án One Era Bình Dương",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pháp Lý One Era Bình Dương – Quy Hoạch 1/500 & Tổng Thầu Coteccons",
    description: "Hồ sơ pháp lý minh bạch và năng lực liên danh Nhật Bản tại dự án chuẩn quốc tế One Era.",
    images: ["https://res.cloudinary.com/dqy4lfmcf/image/upload/v1792642548/oneera/developers/one-era-kinera-consortium.webp"],
  },
};

export default function PhapLyOneEraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
