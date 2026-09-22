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
  // SEO update 2026-09-22 — Hướng B differentiation:
  // Bài này = tin tức / nhật ký cập nhật tiến độ theo thời gian ("mới nhất", có ngày)
  // /mega-city-2/tien-do = trang thông tin kỹ thuật chính thức (tỷ lệ %, hình ảnh thực tế)
  // Hai trang phục vụ intent khác nhau → giữ cả hai, KHÔNG redirect
  title: "Cập Nhật Tiến Độ Mega City 2 Tháng 9/2026 – Hạ Tầng Đạt ~95%",
  description:
    "Tiến độ Mega City 2 Nhơn Trạch tháng 9/2026: hạ tầng nội khu ~95%, đường nhựa và điện nước hoàn thiện, 110 GCN đã cấp. Nhật ký cập nhật mới nhất từ thực địa.",
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
    title: "Cập Nhật Tiến Độ Mega City 2 Tháng 9/2026 – Hạ Tầng Đạt ~95%",
    description:
      "Hạ tầng Mega City 2 đạt ~95%, đường nhựa và điện nước hoàn thiện, 110 GCN đã cấp. Nhật ký tiến độ thực địa tháng 9/2026.",
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
    title: "Cập Nhật Tiến Độ Mega City 2 Tháng 9/2026 – Hạ Tầng ~95%",
    description:
      "Đường nhựa và điện nước hoàn thiện, 110 GCN đã cấp. Xem nhật ký tiến độ thực địa mới nhất tháng 9/2026.",
    images: [NEWS5["1"]],
  },
};

// ─────────────────────────────────────────────────────────────
// Page (Server Component — renders Client)
// ─────────────────────────────────────────────────────────────
export default function TienDoMegaCity2Page() {
  return <TienDoMegaCity2Client />;
}
