import type { Metadata } from "next";

// ─────────────────────────────────────────────────────────────
// Metadata for /the-link-city/mat-bang
// Kept in layout.tsx so the page.tsx can be a client component
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Mặt Bằng The Link City Dầu Giây – Sơ Đồ Phân Lô & Mẫu Nhà T3-2b",
  description:
    "Sơ đồ phân lô tổng thể The Link City Dầu Giây, cơ cấu sản phẩm, hồ sơ mẫu nhà T3-2b (8 sheet kỹ thuật) và hướng dẫn đọc mặt bằng nhà phố liên kế.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city/mat-bang" },
  openGraph: {
    title: "Mặt Bằng The Link City Dầu Giây – Sơ Đồ Phân Lô & Mẫu Nhà T3-2b",
    description:
      "Sơ đồ phân lô tổng thể, cơ cấu sản phẩm, mẫu nhà T3-2b (8 sheet kỹ thuật) và cách đọc mặt bằng The Link City Dầu Giây.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [
      {
        url: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/thelinkcity/overview/1.webp",
        width: 1280,
        height: 720,
        alt: "Mặt bằng The Link City Dầu Giây",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mặt Bằng The Link City Dầu Giây – Sơ Đồ Phân Lô & Mẫu Nhà T3-2b",
    description:
      "Sơ đồ phân lô tổng thể, hồ sơ mẫu nhà T3-2b và cách đọc mặt bằng nhà phố liên kế The Link City.",
    images: [
      "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/thelinkcity/overview/1.webp",
    ],
  },
};

export default function MatBangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
