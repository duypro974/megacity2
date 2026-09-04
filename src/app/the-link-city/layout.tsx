import type { Metadata } from "next";

// ─────────────────────────────────────────────────────────────
// Metadata cho /the-link-city (pillar page)
// Tách ra layout.tsx để page.tsx có thể là client component
// ─────────────────────────────────────────────────────────────

const TLC_OG_URL =
  "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/thelinkcity/overview/1.webp";

export const metadata: Metadata = {
  title: "The Link City Dầu Giây – Tổng Quan Dự Án, Vị Trí, Mặt Bằng & Tiện Ích",
  description:
    "Tổng quan dự án The Link City tại xã Dầu Giây, Đồng Nai: 1.397 sản phẩm nhà phố thương mại, nhà phố liên kế và biệt thự. Chủ đầu tư Phú Việt Tín, đơn vị phát triển Kim Oanh Land.",
  keywords: [
    "The Link City",
    "The Link City Dầu Giây",
    "The Link City Đồng Nai",
    "dự án The Link City",
    "The Link City Kim Oanh",
  ],
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city" },
  openGraph: {
    title: "The Link City Dầu Giây – Tổng Quan Dự Án, Vị Trí, Mặt Bằng & Tiện Ích",
    description:
      "1.397 sản phẩm nhà phố thương mại, nhà phố liên kế và biệt thự tại ngã tư Quốc lộ 1A và Quốc lộ 20, xã Dầu Giây, Đồng Nai.",
    type: "website",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: TLC_OG_URL, width: 1280, height: 720, alt: "Dự án The Link City tại xã Dầu Giây, Đồng Nai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Link City Dầu Giây – Tổng Quan Dự Án",
    description:
      "1.397 sản phẩm nhà phố, shophouse và biệt thự tại ngã tư QL1A – QL20, Dầu Giây, Đồng Nai.",
    images: [TLC_OG_URL],
  },
};

export default function TheLinkCityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
