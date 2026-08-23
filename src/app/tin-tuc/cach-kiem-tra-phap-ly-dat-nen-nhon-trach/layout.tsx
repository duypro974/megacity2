import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/cach-kiem-tra-phap-ly-dat-nen-nhon-trach`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news26/1`;

export const metadata: Metadata = {
  title: "Cách kiểm tra pháp lý đất nền Nhơn Trạch trước khi mua",
  description:
    "Hướng dẫn cách kiểm tra pháp lý đất nền Nhơn Trạch: sổ đỏ, quy hoạch, mục đích sử dụng đất, thế chấp, tranh chấp và hồ sơ cần kiểm tra trước khi giao dịch.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "cách kiểm tra pháp lý đất nền Nhơn Trạch",
    "pháp lý đất nền Nhơn Trạch",
    "kiểm tra sổ đỏ Nhơn Trạch",
    "kiểm tra quy hoạch đất Nhơn Trạch",
    "mua đất Nhơn Trạch cần kiểm tra gì",
    "kiểm tra đất có dính quy hoạch không",
    "kiểm tra pháp lý đất nền",
    "mua đất nền Nhơn Trạch",
    "tra cứu quy hoạch Nhơn Trạch",
  ],
  openGraph: {
    title: "Cách kiểm tra pháp lý đất nền Nhơn Trạch trước khi mua",
    description:
      "Hướng dẫn kiểm tra pháp lý đất nền Nhơn Trạch: sổ đỏ, quy hoạch, mục đích sử dụng đất, thế chấp, tranh chấp và hồ sơ cần xem trước khi giao dịch.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Cách kiểm tra pháp lý đất nền Nhơn Trạch trước khi mua" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cách kiểm tra pháp lý đất nền Nhơn Trạch trước khi mua",
    description: "Hướng dẫn kiểm tra pháp lý đất nền Nhơn Trạch: sổ đỏ, quy hoạch, thế chấp, tranh chấp trước khi giao dịch.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
