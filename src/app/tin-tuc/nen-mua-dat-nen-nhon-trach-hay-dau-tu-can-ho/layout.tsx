import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/nen-mua-dat-nen-nhon-trach-hay-dau-tu-can-ho`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news21/1`;

export const metadata: Metadata = {
  title: "Nên Mua Đất Nền Nhơn Trạch Hay Đầu Tư Căn Hộ? So Sánh 2026",
  description: "Nên mua đất nền Nhơn Trạch hay đầu tư căn hộ? So sánh ưu nhược điểm, vốn, pháp lý, khả năng sử dụng, thanh khoản và tiềm năng từng loại hình.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "nên mua đất nền Nhơn Trạch hay đầu tư căn hộ",
    "đất nền Nhơn Trạch",
    "đầu tư căn hộ Nhơn Trạch",
    "bất động sản Nhơn Trạch 2026",
    "mua đất Nhơn Trạch",
    "đầu tư bất động sản Nhơn Trạch",
    "giá đất Nhơn Trạch",
    "có nên mua đất nền Nhơn Trạch",
    "kinh nghiệm đầu tư bất động sản Nhơn Trạch",
  ],
  openGraph: {
    title: "Nên Mua Đất Nền Nhơn Trạch Hay Đầu Tư Căn Hộ? So Sánh 2026",
    description: "Phân tích đất nền và căn hộ tại Nhơn Trạch theo mục tiêu đầu tư, vốn, pháp lý, dòng tiền, thanh khoản và khả năng sử dụng.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Nên mua đất nền Nhơn Trạch hay đầu tư căn hộ năm 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Đất Nền Hay Căn Hộ Nhơn Trạch 2026?",
    description: "So sánh ưu nhược điểm đất nền và căn hộ tại Nhơn Trạch để chọn đúng loại hình đầu tư.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
