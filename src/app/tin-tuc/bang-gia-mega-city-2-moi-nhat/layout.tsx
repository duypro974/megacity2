import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/bang-gia-mega-city-2-moi-nhat`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news2/1`;

export const metadata: Metadata = {
  title: "Bảng giá Mega City 2 Nhơn Trạch mới nhất 2026 | Cập nhật giá tham khảo",
  description:
    "Cập nhật bảng giá Mega City 2 Nhơn Trạch mới nhất năm 2026. Tham khảo mức giá từng loại sản phẩm, các yếu tố ảnh hưởng đến giá và những lưu ý trước khi đầu tư.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "bảng giá Mega City 2",
    "giá Mega City 2 Nhơn Trạch",
    "giá đất Mega City 2",
    "giá nhà phố Mega City 2",
    "giá dự án Mega City 2",
    "giá bất động sản Nhơn Trạch",
  ],
  openGraph: {
    title: "Bảng giá Mega City 2 Nhơn Trạch mới nhất 2026",
    description:
      "Cập nhật bảng giá Mega City 2 Nhơn Trạch mới nhất năm 2026. Tham khảo mức giá từng loại sản phẩm và những lưu ý trước khi đầu tư.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Toàn cảnh dự án Mega City 2 Nhơn Trạch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảng giá Mega City 2 Nhơn Trạch mới nhất 2026",
    description: "Cập nhật bảng giá tham khảo dự án Mega City 2 Nhơn Trạch năm 2026.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
