import type { Metadata } from "next";

// ─────────────────────────────────────────────────────────────
// Metadata cho /the-link-city (pillar page)
// Tách ra layout.tsx để page.tsx có thể là client component
// ─────────────────────────────────────────────────────────────

const TLC_OG_URL =
  "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/thelinkcity/overview/1.webp";

export const metadata: Metadata = {
  title: "The Link City Dầu Giây 2026: Giá Gốc 1.85 Tỷ, Sổ Hồng Sẵn Sàng Công Chứng",
  description:
    "Dự án The Link City Dầu Giây (Khu dân cư A1-C1) tại ngã tư QL1A - QL20. Giá gốc CĐT từ 1,85 tỷ/nền, sổ hồng ODT lâu dài, VietinBank cho vay 70%. Bảng giá 369 lô mới nhất 2026.",
  keywords: [
    "The Link City",
    "The Link City Dầu Giây",
    "the link city dầu giây",
    "giá The Link City",
    "bảng giá The Link City 2026",
    "pháp lý The Link City",
    "the link city khi nào ra sổ",
    "the link city có sổ chưa",
    "sổ hồng the link city",
    "dầu giây center city",
    "dự án dầu giây center city 2",
    "khu dân cư a1 c1 dầu giây",
    "bán đất dầu giây",
    "link city",
    "linkcity",
    "tiến độ cao tốc dầu giây - tân phú",
  ],
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city" },
  openGraph: {
    title: "The Link City Dầu Giây 2026: Giá Gốc 1.85 Tỷ, Sổ Hồng Sẵn Sàng Công Chứng",
    description:
      "Dự án The Link City Dầu Giây (KDC A1-C1) quy mô 21ha tại ngã tư QL1A & QL20. Giá từ 1,85 tỷ/nền, sổ đỏ thổ cư riêng từng nền, công chứng ngay.",
    type: "website",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: TLC_OG_URL, width: 1280, height: 720, alt: "Dự án The Link City tại Dầu Giây Đồng Nai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Link City Dầu Giây 2026: Giá Gốc 1.85 Tỷ – Sổ Hồng Sẵn Sàng",
    description: "Giá từ 1,85 tỷ/nền, sổ hồng trao tay sẵn sàng công chứng. Ngã tư QL1A - QL20 Dầu Giây.",
    images: [TLC_OG_URL],
  },
};

export default function TheLinkCityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
