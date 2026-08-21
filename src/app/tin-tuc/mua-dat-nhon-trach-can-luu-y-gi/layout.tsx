import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news22/1`;

export const metadata: Metadata = {
  title: "Mua Đất Nhơn Trạch Cần Lưu Ý Gì? 10 Điều Cần Biết 2026",
  description: "Mua đất Nhơn Trạch cần lưu ý gì? Cùng tìm hiểu 10 yếu tố quan trọng về pháp lý, quy hoạch, vị trí, giá bán, hạ tầng và tài chính trước khi mua đất năm 2026.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "mua đất Nhơn Trạch cần lưu ý gì",
    "mua đất Nhơn Trạch",
    "kinh nghiệm mua đất Nhơn Trạch",
    "mua đất nền Nhơn Trạch",
    "lưu ý khi mua đất Nhơn Trạch",
    "kiểm tra pháp lý đất Nhơn Trạch",
    "quy hoạch Nhơn Trạch",
    "giá đất Nhơn Trạch 2026",
    "đất nền Nhơn Trạch 2026",
  ],
  openGraph: {
    title: "Mua Đất Nhơn Trạch Cần Lưu Ý Gì? 10 Điều Cần Biết 2026",
    description: "10 lưu ý quan trọng khi mua đất Nhơn Trạch: pháp lý, quy hoạch, vị trí, hạ tầng, giá, tài chính và hợp đồng.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Mua đất Nhơn Trạch cần lưu ý gì năm 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "10 Điều Cần Biết Khi Mua Đất Nhơn Trạch 2026",
    description: "Checklist 10 lưu ý quan trọng về pháp lý, quy hoạch, vị trí và tài chính khi mua đất Nhơn Trạch.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
