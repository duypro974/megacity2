import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/quy-cach-xay-dung-mega-city-2`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news35/1`;

export const metadata: Metadata = {
  title: "Quy cách xây dựng Mega City 2: Tầng cao, khoảng lùi & mẫu nhà",
  description:
    "Hướng dẫn chi tiết quy cách xây dựng Mega City 2 Nhơn Trạch: tầng cao cho phép, mật độ xây dựng, khoảng lùi trước sau và thủ tục xin phép xây dựng thực tế.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "quy cách xây dựng Mega City 2",
    "tiêu chuẩn xây dựng Mega City 2",
    "mẫu nhà Mega City 2",
    "khoảng lùi xây dựng Mega City 2",
    "tầng cao xây dựng Mega City 2",
    "quy chuẩn 1/500 Mega City 2",
    "xây nhà Mega City 2 Nhơn Trạch",
    "dự án Mega City 2",
  ],
  openGraph: {
    title: "Quy cách xây dựng Mega City 2: Tầng cao, khoảng lùi & mẫu nhà",
    description:
      "Chi tiết tầng cao, mật độ xây dựng, khoảng lùi trước sau, kiến trúc mặt ngoài và quy trình 5 bước xin phép xây dựng tại Mega City 2 Nhơn Trạch.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Quy cách xây dựng nhà phố đồng bộ tại dự án Mega City 2 Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quy cách xây dựng Mega City 2: Tầng cao, khoảng lùi & mẫu nhà",
    description:
      "Tầng cao, khoảng lùi, mật độ xây dựng và quy trình xin phép xây dựng tại Mega City 2 Nhơn Trạch.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
