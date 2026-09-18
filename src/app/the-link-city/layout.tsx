import type { Metadata } from "next";

// ─────────────────────────────────────────────────────────────
// Metadata cho /the-link-city (pillar page)
// Tách ra layout.tsx để page.tsx có thể là client component
// ─────────────────────────────────────────────────────────────

const TLC_OG_URL =
  "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/thelinkcity/overview/1.webp";

export const metadata: Metadata = {
  title: "The Link City Dầu Giây 2026: Giá Từ 1,85 Tỷ – Pháp Lý Đầy Đủ",
  description:
    "Dự án The Link City Dầu Giây tại ngã tư QL1A - QL20. Giá gốc CĐT từ 1,85 tỷ/nền, sổ hồng ODT lâu dài sẵn sàng công chứng. Cập nhật bảng hàng mới nhất 2026.",
  keywords: [
    "The Link City",
    "The Link City Dầu Giây",
    "giá The Link City",
    "bảng giá The Link City 2026",
    "pháp lý The Link City",
  ],
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city" },
  openGraph: {
    title: "The Link City Dầu Giây 2026: Giá Từ 1,85 Tỷ – Pháp Lý Đầy Đủ",
    description:
      "Quy mô 21ha tại ngã tư QL1A và QL20, Dầu Giây, Đồng Nai. Giá từ 1,85 tỷ/nền, sổ đỏ thổ cư riêng từng nền.",
    type: "website",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: TLC_OG_URL, width: 1280, height: 720, alt: "Dự án The Link City tại Dầu Giây Đồng Nai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Link City Dầu Giây 2026: Giá Từ 1,85 Tỷ – Pháp Lý Đầy Đủ",
    description: "Giá từ 1,85 tỷ/nền, sổ hồng sẵn sàng công chứng. Ngã tư QL1A - QL20.",
    images: [TLC_OG_URL],
  },
};

export default function TheLinkCityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
