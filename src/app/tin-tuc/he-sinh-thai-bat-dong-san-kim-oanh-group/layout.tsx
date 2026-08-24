import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/he-sinh-thai-bat-dong-san-kim-oanh-group`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news29/1`;

export const metadata: Metadata = {
  title: "Hệ sinh thái bất động sản Kim Oanh Group gồm những gì?",
  description:
    "Tìm hiểu hệ sinh thái bất động sản Kim Oanh Group, các lĩnh vực hoạt động, vai trò của Kim Oanh Land, phát triển đô thị, nhà ở và những định hướng mới.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "hệ sinh thái bất động sản Kim Oanh Group",
    "Kim Oanh Group",
    "hệ sinh thái Kim Oanh Group",
    "Kim Oanh Land",
    "bất động sản Kim Oanh",
    "dự án Kim Oanh Group",
    "nhà ở xã hội K-Home",
    "Kim Oanh Group Đồng Nai",
    "hệ sinh thái bất động sản",
  ],
  openGraph: {
    title: "Hệ sinh thái bất động sản Kim Oanh Group gồm những gì?",
    description:
      "Tìm hiểu hệ sinh thái bất động sản Kim Oanh Group, các lĩnh vực hoạt động, vai trò của Kim Oanh Land, phát triển đô thị, nhà ở và những định hướng mới.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Hệ sinh thái bất động sản Kim Oanh Group với các lĩnh vực phát triển đô thị và nhà ở" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hệ sinh thái bất động sản Kim Oanh Group gồm những gì?",
    description: "Các lĩnh vực hoạt động, Kim Oanh Land, nhà ở xã hội K-Home và định hướng phát triển đô thị của Kim Oanh Group.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
