import type { Metadata } from "next";
import TienDoMegaCity2Client from "./TienDoMegaCity2Client";

// ─────────────────────────────────────────────────────────────
// Cloudinary CDN helpers
// ─────────────────────────────────────────────────────────────
const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good";
const img = (path: string, w = 1280) => `${CDN},w_${w},c_limit/${path}`;

const NEWS5 = {
  "1": img("megacity2/news5/1"),
};

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/tien-do-mega-city-2`;
const PUBLISHED_ISO = "2026-08-16";

// ─────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Tiến độ Mega City 2 Nhơn Trạch 2026: Cập nhật mới nhất về hạ tầng và xây dựng",
  description:
    "Theo dõi tiến độ Mega City 2 Nhơn Trạch mới nhất năm 2026. Cập nhật tình hình xây dựng, hạ tầng, phân khu và những thay đổi mới nhất của dự án.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "tiến độ Mega City 2",
    "tiến độ Mega City 2 Nhơn Trạch",
    "tiến độ xây dựng Mega City 2",
    "hạ tầng Mega City 2",
    "Mega City 2 đã xây đến đâu",
    "tiến độ dự án Mega City 2 năm 2026",
    "hình ảnh tiến độ Mega City 2",
    "cập nhật tiến độ Mega City 2",
    "Mega City 2 Đồng Nai",
  ],
  openGraph: {
    title: "Tiến độ Mega City 2 Nhơn Trạch 2026: Cập nhật mới nhất về hạ tầng và xây dựng",
    description:
      "Theo dõi tiến độ Mega City 2 Nhơn Trạch mới nhất năm 2026. Cập nhật tình hình xây dựng, hạ tầng, phân khu và những thay đổi mới nhất của dự án.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: NEWS5["1"],
        width: 1280,
        height: 720,
        alt: "Tiến độ xây dựng Mega City 2 Nhơn Trạch năm 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiến độ Mega City 2 Nhơn Trạch 2026: Cập nhật mới nhất",
    description:
      "Cập nhật tình hình xây dựng, hạ tầng và hình ảnh thực tế mới nhất của Mega City 2 Nhơn Trạch tháng 08/2026.",
    images: [NEWS5["1"]],
  },
};

// ─────────────────────────────────────────────────────────────
// Page (Server Component — renders Client)
// ─────────────────────────────────────────────────────────────
export default function TienDoMegaCity2Page() {
  return <TienDoMegaCity2Client />;
}
