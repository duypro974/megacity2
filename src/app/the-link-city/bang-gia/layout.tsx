import type { Metadata } from "next";

// ─────────────────────────────────────────────────────────────
// Metadata cho /the-link-city/bang-gia
// Tách ra layout.tsx để page.tsx có thể là "use client"
// SEO fix: thêm canonical tag (2026-09-22)
// ─────────────────────────────────────────────────────────────

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/the-link-city/bang-gia`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/overview/1.webp`;

export const metadata: Metadata = {
  title: "Bảng Giá The Link City Dầu Giây 2026 – Giá Chính Thức Từng Lô",
  description:
    "Bảng giá The Link City Dầu Giây 2026: 369 lô Sẵn sàng, đất nền từ 1,852 tỷ, biệt thự từ 3,744 tỷ, nhà phố xây sẵn từ 3,855 tỷ. Dữ liệu từ CRM Kim Oanh Land, cập nhật realtime.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "bảng giá The Link City",
    "giá The Link City Dầu Giây",
    "bảng giá đất nền Dầu Giây 2026",
    "giá nhà phố The Link City",
    "đất nền Dầu Giây giá bao nhiêu",
  ],
  openGraph: {
    title: "Bảng Giá The Link City Dầu Giây 2026 – Giá Chính Thức Từng Lô",
    description:
      "369 lô Sẵn sàng: đất nền từ 1,852 tỷ, biệt thự từ 3,744 tỷ, nhà phố xây sẵn từ 3,855 tỷ. Dữ liệu realtime từ CRM Kim Oanh Land.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Bảng giá The Link City Dầu Giây 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảng Giá The Link City Dầu Giây 2026",
    description: "369 lô Sẵn sàng từ 1,852 tỷ. Đất nền, biệt thự, nhà phố xây sẵn – giá chính thức.",
    images: [OG_IMG],
  },
};

export default function BangGiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
