import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/quyet-dinh-2979-giao-dat-mega-city-2`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/legal2/1`;

export const metadata: Metadata = {
  title: "QĐ 2979/QĐ-UBND: UBND TP Đồng Nai giao đất chính thức cho chủ đầu tư Mega City 2",
  description:
    "Ngày 24/9/2026, UBND TP Đồng Nai ban hành Quyết định 2979/QĐ-UBND giao đất chính thức cho Công ty TNHH Khu đô thị Phú Hội tiếp tục triển khai Mega City 2. Giao 321.248 m² hạ tầng kỹ thuật, chấp thuận ~839.256 m² toàn dự án.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "QĐ 2979 Mega City 2",
    "quyết định 2979 UBND Đồng Nai",
    "giao đất Mega City 2 2026",
    "pháp lý Mega City 2 mới nhất",
    "Công ty TNHH Khu đô thị Phú Hội",
    "Mega City 2 Nhơn Trạch pháp lý",
    "QĐ 2979 QĐ-UBND ngày 24 tháng 9 năm 2026",
  ],
  openGraph: {
    title: "QĐ 2979/QĐ-UBND: UBND TP Đồng Nai giao đất chính thức cho chủ đầu tư Mega City 2",
    description:
      "UBND TP Đồng Nai chính thức giao đất cho CĐT Phú Hội — giao 321.248 m² hạ tầng kỹ thuật, chấp thuận ~839.256 m² toàn dự án Mega City 2 Nhơn Trạch.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Quyết định 2979/QĐ-UBND ngày 24/9/2026 — UBND TP Đồng Nai giao đất Mega City 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QĐ 2979/QĐ-UBND: UBND TP Đồng Nai giao đất chính thức Mega City 2",
    description:
      "Giao 321.248 m² đất hạ tầng kỹ thuật, chấp thuận ~839.256 m² toàn dự án. Ý nghĩa và tác động thực tế với người mua Mega City 2.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
