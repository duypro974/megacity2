import type { Metadata } from "next";

const TLC_OG_URL =
  "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/thelinkcity/overview/1.webp";

export const metadata: Metadata = {
  title: "Thanh Toán The Link City – Tiến Độ, Vay VietinBank & Chiết Khấu 2026",
  description:
    "Chính sách bán hàng The Link City 2026: tiến độ thanh toán đất nền liên kế, biệt thự, shophouse. Vay VietinBank tối đa 70%, ân hạn nợ gốc 24 tháng. Chiết khấu sớm 16%/năm.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city/thanh-toan" },
  openGraph: {
    title: "Thanh Toán The Link City – Tiến Độ & Vay VietinBank 2026",
    description:
      "Tiến độ thanh toán 9–10 đợt theo TB 14/2026. Vay VietinBank tối đa 70%, ân hạn nợ gốc 24 tháng. Chiết khấu thanh toán sớm 16%/năm.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: TLC_OG_URL, width: 1280, height: 720, alt: "Chính sách thanh toán The Link City Dầu Giây 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanh Toán The Link City 2026 – VietinBank, CK 16%/năm",
    description: "Tiến độ thanh toán, vay 70% VietinBank, ân hạn 24 tháng, CK sớm 16%/năm.",
    images: [TLC_OG_URL],
  },
};

export default function ThanhToanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
