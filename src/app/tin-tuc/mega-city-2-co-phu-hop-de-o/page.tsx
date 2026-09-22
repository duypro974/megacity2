import type { Metadata } from "next";
import PhuHopDeOClient from "./PhuHopDeOClient";

// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────
const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/mega-city-2-co-phu-hop-de-o`;

const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good";
const img = (path: string, w = 1280) => `${CDN},w_${w},c_limit/${path}`;
const OG_IMAGE = img("megacity2/news25/1");

// ─────────────────────────────────────────────────────────────
// Metadata (Server Component — client components cannot export metadata)
// SEO 2026-09-22 — Hướng B differentiation:
//   Bài này = phân tích góc an cư ("có phù hợp để ở không?")
//   /tin-tuc/co-nen-dau-tu = phân tích góc đầu tư ("có nên đầu tư không?")
//   Hai trang phục vụ intent khác nhau → giữ cả hai, canonical tự trỏ
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mega City 2 Có Phù Hợp Để Ở Không? Checklist 7 Tiêu Chí An Cư 2026",
  description:
    "Mega City 2 có phù hợp để ở lâu dài không? Checklist 7 tiêu chí: vị trí đi làm, trường học, y tế, hạ tầng nội khu, tiện ích dân sinh và tổng chi phí thực tế cho gia đình muốn an cư tại Nhơn Trạch.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "Mega City 2 có phù hợp để ở",
    "mua Mega City 2 để ở",
    "an cư Nhơn Trạch",
    "Mega City 2 an cư",
    "sống tại Mega City 2",
    "nhà ở Nhơn Trạch 2026",
    "tiện ích dân sinh Mega City 2",
    "trường học gần Mega City 2",
  ],
  openGraph: {
    title: "Mega City 2 Có Phù Hợp Để Ở Không? Checklist 7 Tiêu Chí An Cư 2026",
    description:
      "Checklist 7 tiêu chí: trường học, y tế, đi làm, tiện ích dân sinh, hạ tầng nội khu và tổng chi phí. Phân tích dành riêng cho người mua để ở — không phải góc đầu tư.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1280,
        height: 720,
        alt: "Mega City 2 Nhơn Trạch – phân tích nhu cầu an cư",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega City 2 Có Phù Hợp Để Ở Không? Checklist 7 Tiêu Chí (2026)",
    description:
      "Trường học, y tế, tiện ích dân sinh, thời gian đi làm, chi phí thực tế — checklist an cư đầy đủ trước khi quyết định mua.",
    images: [OG_IMAGE],
  },
};

// ─────────────────────────────────────────────────────────────
// Page (Server Component — renders Client)
// ─────────────────────────────────────────────────────────────
export default function MegaCity2CoPhuHopDeOPage() {
  return <PhuHopDeOClient />;
}
