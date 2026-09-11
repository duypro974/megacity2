import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/thelinkcity/news46/1`;

export const metadata: Metadata = {
  title: "Hướng Dẫn Quy Trình Mua Bán The Link City Dầu Giây & Tiêu Chuẩn Xây Dựng Mẫu Nhà T3-2b Mới Nhất 2026",
  description:
    "Hướng dẫn từ A-Z quy trình mua bán, thủ tục công chứng sang tên sổ hồng The Link City Dầu Giây và chi tiết bản vẽ tiêu chuẩn xây dựng mẫu nhà phố liên kế T3-2b.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "quy trình mua bán The Link City",
    "xây dựng The Link City Dầu Giây",
    "mẫu nhà T3-2b The Link City",
    "thủ tục sang tên sổ đỏ The Link City",
    "quy chuẩn xây dựng KDC A1 C1 Dầu Giây",
    "hợp đồng The Link City Kim Oanh",
    "nhà phố The Link City",
    "chi phí xây nhà The Link City",
  ],
  openGraph: {
    title: "Quy Trình Mua Bán The Link City & Tiêu Chuẩn Xây Dựng Mẫu Nhà T3-2b 2026",
    description:
      "5 bước mua bán chuẩn pháp lý, thủ tục công chứng sang tên sổ hồng, bảng thông số kỹ thuật mẫu nhà T3-2b và dự toán chi phí xây dựng hoàn thiện tại The Link City Dầu Giây.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Khách hàng làm thủ tục ký hợp đồng giao dịch đất nền The Link City Dầu Giây",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quy Trình Mua Bán The Link City & Tiêu Chuẩn Xây Dựng T3-2b 2026",
    description:
      "5 bước mua bán chuẩn pháp lý, bản vẽ mẫu nhà T3-2b 1 trệt 2 lầu và dự toán ~1,25 tỷ xây nhà hoàn thiện tại The Link City Dầu Giây.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
