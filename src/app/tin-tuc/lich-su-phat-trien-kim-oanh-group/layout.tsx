import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/lich-su-phat-trien-kim-oanh-group`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news13/1`;

export const metadata: Metadata = {
  title: "Lịch sử hình thành và phát triển của Kim Oanh Group",
  description: "Khám phá hành trình phát triển của Kim Oanh Group từ những ngày đầu thành lập đến khi trở thành một trong những thương hiệu bất động sản nổi bật tại Việt Nam.",
  alternates: { canonical: PAGE_URL },
  keywords: ["Kim Oanh Group", "lịch sử Kim Oanh Group", "quá trình phát triển Kim Oanh Group", "tập đoàn Kim Oanh"],
  openGraph: {
    title: "Lịch sử hình thành và phát triển của Kim Oanh Group",
    description: "Hành trình phát triển của Kim Oanh Group từ những ngày đầu đến thương hiệu bất động sản nổi bật tại Việt Nam.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Kim Oanh Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lịch sử hình thành và phát triển của Kim Oanh Group",
    description: "Hành trình phát triển của Kim Oanh Group — thương hiệu bất động sản nổi bật tại Việt Nam.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
