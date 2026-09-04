import type { Metadata } from "next";

const TLC_OG_URL =
  "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/thelinkcity/overview/1.webp";

export const metadata: Metadata = {
  title: "Pháp lý The Link City Dầu Giây – Sổ Hồng, Quy Hoạch & Hồ Sơ 2026",
  description:
    "Toàn bộ pháp lý The Link City Dầu Giây 2026: sổ hồng cấp cho CĐT Phú Việt Tín, QH 1/500 phê duyệt, 100% nghĩa vụ tài chính, kiểm toán nhà nước thông qua và UBND tỉnh chỉ đạo cấp sổ.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city/phap-ly" },
  openGraph: {
    title: "Pháp lý The Link City Dầu Giây – Sổ Hồng & Hồ Sơ 2026",
    description:
      "Sổ hồng từng nền đã cấp cho CĐT Phú Việt Tín. UBND tỉnh Đồng Nai ban hành CV 2505 chỉ đạo cấp sổ. QH 1/500, 100% nghĩa vụ tài chính, kiểm toán thông qua.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: TLC_OG_URL, width: 1280, height: 720, alt: "Pháp lý The Link City Dầu Giây 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pháp lý The Link City 2026 – Sổ hồng & CV 2505",
    description: "Sổ hồng cấp cho CĐT, UBND tỉnh chỉ đạo cấp sổ, kiểm toán thông qua.",
    images: [TLC_OG_URL],
  },
};

export default function PhapLyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
