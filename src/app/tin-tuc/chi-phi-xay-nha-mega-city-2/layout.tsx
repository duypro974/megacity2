import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/chi-phi-xay-nha-mega-city-2`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news30/1`;

export const metadata: Metadata = {
  title: "Chi Phí Xây Nhà Thực Tế Tại Mega City 2 Nhơn Trạch 2026: Giá Xây Thô, Hoàn Thiện & So Sánh Nhà Xây Sẵn",
  description:
    "Cập nhật chi phí xây nhà phố thực tế tại Mega City 2 Nhơn Trạch 2026: đơn giá xây thô 3,5–3,9 triệu/m², trọn gói 5–8,5 triệu/m² theo diện tích 100–150m², chi phí phát sinh, thời gian thi công và so sánh với mua nhà xây sẵn.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "chi phí xây nhà Mega City 2",
    "giá xây thô nhà phố Nhơn Trạch",
    "xây nhà hoàn thiện Mega City 2",
    "so sánh xây nhà vs mua nhà xây sẵn",
    "chi phí xây nhà Nhơn Trạch 2026",
    "đơn giá xây dựng Đồng Nai 2026",
    "xây nhà phố Nhơn Trạch",
    "chi phí xây nhà 100m2",
    "chi phí xây nhà 150m2",
  ],
  openGraph: {
    title: "Chi Phí Xây Nhà Thực Tế Tại Mega City 2 Nhơn Trạch 2026",
    description:
      "Cập nhật chi phí xây nhà phố thực tế tại Mega City 2 Nhơn Trạch 2026: đơn giá xây thô 3,5–3,9 triệu/m², trọn gói 5–8,5 triệu/m² theo diện tích 100–150m².",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Chi phí xây nhà thực tế tại Mega City 2 Nhơn Trạch 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chi Phí Xây Nhà Thực Tế Tại Mega City 2 Nhơn Trạch 2026",
    description: "Đơn giá xây thô 3,5–3,9 triệu/m², trọn gói 5–8,5 triệu/m², ước tính chi phí nền 100–150m² và so sánh xây mới vs nhà xây sẵn.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
