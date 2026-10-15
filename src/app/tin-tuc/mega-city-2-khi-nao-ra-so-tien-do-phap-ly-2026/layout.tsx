import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/mega-city-2-khi-nao-ra-so-tien-do-phap-ly-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/legal/1.jpeg`;

export const metadata: Metadata = {
  title: "Mega City 2 Khi Nào Ra Sổ? Tiến Độ Pháp Lý & Cấp Sổ Mới Nhất 2026",
  description:
    "Giải đáp chi tiết thắc mắc Mega City 2 khi nào ra sổ: căn cứ Quyết định 2979, tiến độ nghiệm thu hạ tầng, quy trình nộp hồ sơ cấp giấy chứng nhận quyền sử dụng đất năm 2026.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "mega city 2 khi nào ra sổ",
    "khi nào mega city 2 ra sổ",
    "pháp lý mega city 2",
    "sổ đỏ mega city 2 nhơn trạch",
    "tiến độ cấp sổ mega city 2",
    "quyết định 2979 giao đất mega city 2",
    "đất nền mega city 2",
  ],
  openGraph: {
    title: "Mega City 2 Khi Nào Ra Sổ? Tiến Độ Pháp Lý Mới Nhất 2026",
    description:
      "Cập nhật thông tin mới nhất về tiến độ cấp sổ hồng Mega City 2 Nhơn Trạch năm 2026, cơ sở pháp lý và quyền lợi khách hàng.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Hồ sơ pháp lý và tiến độ cấp sổ Mega City 2 Nhơn Trạch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega City 2 Khi Nào Ra Sổ? Tiến Độ Pháp Lý 2026",
    description: "Giải đáp thắc mắc tiến độ cấp sổ hồng dự án Mega City 2 Nhơn Trạch mới nhất 2026.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
