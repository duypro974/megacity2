import type { Metadata } from "next";
import PhapLyMegaCity2Client from "./PhapLyMegaCity2Client";

// ─────────────────────────────────────────────────────────────
// Cloudinary CDN helpers
// ─────────────────────────────────────────────────────────────
const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good";
const img = (path: string, w = 1280) => `${CDN},w_${w},c_limit/${path}`;

const NEWS4 = {
  "1": img("megacity2/news4/1"),
};

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/phap-ly-mega-city-2`;
const PUBLISHED_ISO = "2026-08-15";

// ─────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Pháp lý Mega City 2 Nhơn Trạch 2026: Cập nhật mới nhất về quy hoạch và hồ sơ dự án",
  description:
    "Tìm hiểu pháp lý Mega City 2 Nhơn Trạch mới nhất. Cập nhật thông tin quy hoạch, quyết định phê duyệt, hồ sơ dự án và những vấn đề nhà đầu tư cần quan tâm.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "pháp lý Mega City 2",
    "pháp lý Mega City 2 Nhơn Trạch",
    "Mega City 2 có sổ đỏ không",
    "quy hoạch Mega City 2",
    "dự án Mega City 2 có pháp lý đầy đủ không",
    "hồ sơ pháp lý Mega City 2",
    "Quyết định 1772/QĐ-UBND",
    "phê duyệt Mega City 2",
    "đất nền Mega City 2",
  ],
  openGraph: {
    title: "Pháp lý Mega City 2 Nhơn Trạch 2026: Cập nhật mới nhất về quy hoạch và hồ sơ dự án",
    description:
      "Tìm hiểu pháp lý Mega City 2 Nhơn Trạch mới nhất. Cập nhật thông tin quy hoạch, quyết định phê duyệt, hồ sơ dự án và những vấn đề nhà đầu tư cần quan tâm.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: NEWS4["1"],
        width: 1280,
        height: 720,
        alt: "Pháp lý dự án Mega City 2 Nhơn Trạch năm 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pháp lý Mega City 2 Nhơn Trạch 2026: Cập nhật mới nhất",
    description:
      "Cập nhật thông tin quy hoạch, quyết định phê duyệt, hồ sơ pháp lý Mega City 2 Nhơn Trạch mới nhất 2026.",
    images: [NEWS4["1"]],
  },
};

// ─────────────────────────────────────────────────────────────
// Page (Server Component — renders Client)
// ─────────────────────────────────────────────────────────────
export default function PhapLyMegaCity2Page() {
  return <PhapLyMegaCity2Client />;
}
