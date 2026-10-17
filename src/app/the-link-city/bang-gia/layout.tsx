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
  title: "Bán Đất Dầu Giây 2026: Bảng Giá The Link City Từ 1,85 Tỷ (Sổ Hồng Riêng)",
  description:
    "Thông tin mua bán đất Dầu Giây mới nhất 2026: Bảng giá 369 lô đất nền The Link City (KDC A1-C1) giá gốc CĐT từ 1,852 tỷ/nền (19,5 tr/m²). Sổ hồng sẵn từng nền, ngân hàng VietinBank hỗ trợ vay 70%.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "bán đất dầu giây",
    "mua bán đất dầu giây",
    "bán đất dầu giây đồng nai",
    "bán đất ngã tư dầu giây",
    "bảng giá The Link City",
    "giá The Link City Dầu Giây",
    "bảng giá đất nền Dầu Giây 2026",
    "giá đất The Link City",
    "bảng giá dầu giây center city",
    "giá đất nền ngã tư dầu giây",
    "đất nền Dầu Giây giá bao nhiêu",
    "giá nhà phố The Link City",
  ],
  openGraph: {
    title: "Bán Đất Dầu Giây 2026: Bảng Giá The Link City Từ 1,85 Tỷ (Sổ Hồng Riêng)",
    description:
      "Mua bán đất nền Dầu Giây giá gốc CĐT: 369 sản phẩm The Link City từ 1,852 tỷ/nền. Sổ hồng công chứng ngay trong tuần, VietinBank cho vay 70%, ân hạn nợ gốc 24 tháng.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Bảng giá mua bán đất Dầu Giây The Link City 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bán Đất Dầu Giây 2026: Bảng Giá The Link City Từ 1,85 Tỷ",
    description: "Mua bán đất Dầu Giây sổ hồng trao tay: 369 lô từ 1,852 tỷ tại ngã tư QL1A - QL20.",
    images: [OG_IMG],
  },
};

export default function BangGiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
