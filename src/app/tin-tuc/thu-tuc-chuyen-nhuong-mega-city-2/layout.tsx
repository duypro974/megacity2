import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/thu-tuc-chuyen-nhuong-mega-city-2`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news36/1`;

export const metadata: Metadata = {
  title: "Thủ tục sang tên & chuyển nhượng đất nền Mega City 2 mới nhất",
  description:
    "Hướng dẫn chi tiết quy trình thủ tục sang tên hợp đồng chuyển nhượng đất nền Mega City 2 Nhơn Trạch: hồ sơ pháp lý, thuế phí và các bước thực hiện an toàn.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "thủ tục chuyển nhượng Mega City 2",
    "sang tên hợp đồng Mega City 2",
    "chuyển nhượng đất nền Mega City 2",
    "mua bán đất Mega City 2",
    "phí chuyển nhượng Mega City 2",
    "hợp đồng Mega City 2 Nhơn Trạch",
    "đất nền Mega City 2",
    "dự án Mega City 2",
  ],
  openGraph: {
    title: "Thủ tục sang tên & chuyển nhượng đất nền Mega City 2 mới nhất",
    description:
      "Quy trình 4 bước sang tên hợp đồng Mega City 2: kiểm tra pháp lý, công chứng, nộp thuế TNCN 2% và xác nhận chủ đầu tư — hồ sơ cần chuẩn bị và kinh nghiệm phòng tránh rủi ro.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMG,
        width: 1280,
        height: 720,
        alt: "Thủ tục sang tên hợp đồng chuyển nhượng đất nền dự án Mega City 2 Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thủ tục sang tên & chuyển nhượng đất nền Mega City 2 mới nhất",
    description:
      "4 bước thủ tục chuyển nhượng Mega City 2: điều kiện pháp lý, hồ sơ, thuế phí và kinh nghiệm giao dịch an toàn.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
