import type { Metadata } from "next";

const OG_URL =
  "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/thelinkcity/overview/1.webp";

export const metadata: Metadata = {
  title: "Hình Ảnh & Sa Bàn The Link City Dầu Giây Mới Nhất 2026 – Kim Oanh Đồng Nai",
  description:
    "Trọn bộ hình ảnh thực tế, sa bàn kiến trúc 21ha và video Flycam toàn cảnh dự án The Link City Dầu Giây. Cập nhật tiến độ và pháp lý mới nhất 2026.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city/hinh-anh" },
  openGraph: {
    title: "Hình Ảnh & Sa Bàn The Link City Dầu Giây Mới Nhất 2026",
    description:
      "Bộ sưu tập ảnh sa bàn, cảnh quan và tiến độ thực tế dự án The Link City Dầu Giây.",
    url: "https://kimoanhdongnai.com.vn/the-link-city/hinh-anh",
    type: "website",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: OG_URL, width: 1280, height: 720, alt: "Hình ảnh & sa bàn dự án The Link City Dầu Giây" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hình Ảnh & Sa Bàn The Link City Dầu Giây 2026",
    description: "Bộ sưu tập ảnh sa bàn, cảnh quan và tiến độ thực tế dự án The Link City.",
    images: [OG_URL],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
