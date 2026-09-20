import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/dat-nen-mega-city-2-co-duoc-xay-nha-ngay-khong`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news58/1`;

export const metadata: Metadata = {
  title: "Đất nền Mega City 2 có được xây nhà ngay không? Cập nhật mới nhất",
  description:
    "Giải đáp thắc mắc đất nền Mega City 2 có được xây nhà ngay không: cập nhật tiến độ điều chỉnh quy hoạch chung Nhơn Trạch, lộ trình cấp sổ và thời điểm khởi công dự kiến.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "đất nền Mega City 2 có được xây nhà ngay không",
    "thời điểm xây nhà Mega City 2",
    "tiến độ ra sổ Mega City 2",
    "khi nào Mega City 2 được xây dựng",
    "quy hoạch Nhơn Trạch Mega City 2",
    "giấy phép xây dựng Mega City 2",
    "dự án Mega City 2 Nhơn Trạch",
  ],
  openGraph: {
    title: "Đất nền Mega City 2 có được xây nhà ngay không? Cập nhật mới nhất",
    description:
      "Giải đáp thắc mắc đất nền Mega City 2 có được xây nhà ngay không: cập nhật tiến độ điều chỉnh quy hoạch chung Nhơn Trạch, lộ trình cấp sổ và thời điểm khởi công dự kiến.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Đất nền dự án Mega City 2 Nhơn Trạch và lộ trình cho phép xây nhà thực tế" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đất nền Mega City 2 có được xây nhà ngay không? Cập nhật mới nhất",
    description: "Cập nhật tiến độ điều chỉnh quy hoạch Nhơn Trạch, lộ trình ra sổ hồng và dự kiến tháng 3 năm sau Mega City 2 chính thức cấp phép xây dựng.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
