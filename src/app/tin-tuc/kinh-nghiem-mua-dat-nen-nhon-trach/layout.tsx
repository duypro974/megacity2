import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news10/1`;

export const metadata: Metadata = {
  title: "Kinh Nghiệm Mua Đất Nền Nhơn Trạch Từ A-Z Cho Người Mới Năm 2026",
  description:
    "Tổng hợp kinh nghiệm mua đất nền Nhơn Trạch dành cho người mới. Hướng dẫn kiểm tra pháp lý, quy hoạch, vị trí, giá bán và những lưu ý quan trọng trước khi đầu tư.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "kinh nghiệm mua đất nền Nhơn Trạch",
    "mua đất nền Nhơn Trạch",
    "đầu tư đất nền Nhơn Trạch",
    "pháp lý đất nền Nhơn Trạch",
    "giá đất Nhơn Trạch",
    "có nên mua đất Nhơn Trạch không",
    "Mega City 2 Nhơn Trạch",
  ],
  openGraph: {
    title: "Kinh Nghiệm Mua Đất Nền Nhơn Trạch Từ A-Z Cho Người Mới Năm 2026",
    description:
      "Hướng dẫn kiểm tra pháp lý, quy hoạch, vị trí và giá bán — những kinh nghiệm quan trọng trước khi mua đất nền Nhơn Trạch.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Kinh nghiệm mua đất nền Nhơn Trạch 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinh Nghiệm Mua Đất Nền Nhơn Trạch Từ A-Z 2026",
    description: "Pháp lý, quy hoạch, vị trí và giá bán — hướng dẫn đầy đủ cho người mới đầu tư đất nền Nhơn Trạch.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
