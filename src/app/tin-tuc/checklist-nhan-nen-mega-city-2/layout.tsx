import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/checklist-nhan-nen-mega-city-2`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news31/1`;

export const metadata: Metadata = {
  title: "Checklist Nhận Nền & Kiểm Tra Hiện Trạng Trước Khi Xây Nhà Tại Mega City 2 Nhơn Trạch 2026",
  description:
    "Checklist chi tiết 12 bước kiểm tra khi nhận nền đất Mega City 2 Nhơn Trạch: pháp lý, hạ tầng kỹ thuật, chỉ giới xây dựng, địa chất, tiện ích và những lưu ý quan trọng trước khi khởi công xây nhà.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "checklist nhận nền Mega City 2",
    "kiểm tra hiện trạng đất nền trước khi xây",
    "nhận nền Mega City 2 Nhơn Trạch",
    "lưu ý khi xây nhà đất nền",
    "kiểm tra nền đất Nhơn Trạch",
    "biên bản nhận nền đất nền dự án",
    "chỉ giới xây dựng Mega City 2",
    "kiểm tra hạ tầng nội khu Mega City 2",
  ],
  openGraph: {
    title: "Checklist Nhận Nền & Kiểm Tra Hiện Trạng Trước Khi Xây Nhà Tại Mega City 2 Nhơn Trạch 2026",
    description:
      "Checklist 12 bước kiểm tra khi nhận nền đất Mega City 2: pháp lý, hạ tầng, chỉ giới xây dựng, địa chất và biên bản bàn giao hiện trạng.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Checklist nhận nền và kiểm tra hiện trạng trước khi xây nhà tại Mega City 2 Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Checklist Nhận Nền Mega City 2 Nhơn Trạch 2026",
    description:
      "12 bước kiểm tra hiện trạng khi nhận nền đất Mega City 2: pháp lý, hạ tầng, chỉ giới, địa chất và biên bản bàn giao.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
