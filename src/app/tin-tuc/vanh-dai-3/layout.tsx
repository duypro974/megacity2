import type { Metadata } from "next";

const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/tin-tuc/vanh-dai-3`;
const CDN      = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit";
const OG_IMG   = `${CDN}/megacity2/news61/1`;

export const metadata: Metadata = {
  title: "Vành đai 3 qua Đồng Nai đã thông xe chưa? Cập nhật 9/2026",
  description: "Cập nhật tiến độ Vành đai 3 qua Đồng Nai cuối tháng 9/2026: đoạn nào đã khai thác tạm, hạng mục nào đang hoàn thiện và tác động đến kết nối Nhơn Trạch – TP.HCM – Long Thành.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "vành đai 3 đồng nai",
    "vành đai 3 thông xe",
    "tiến độ vành đai 3",
    "vành đai 3 nhơn trạch",
    "cầu nhơn trạch vành đai 3",
    "hạ tầng giao thông nhơn trạch",
    "mega city 2 nhơn trạch",
  ],
  openGraph: {
    title: "Vành đai 3 qua Đồng Nai đã thông xe chưa? Cập nhật 9/2026",
    description: "Cập nhật tiến độ Vành đai 3 qua Đồng Nai cuối tháng 9/2026: đoạn nào đã khai thác tạm, hạng mục nào đang hoàn thiện và tác động đến kết nối Nhơn Trạch – TP.HCM – Long Thành.",
    type: "article", locale: "vi_VN", siteName: "Kim Oanh Đồng Nai", url: PAGE_URL,
    images: [{ url: OG_IMG, width: 1280, height: 720, alt: "Vành đai 3 qua Đồng Nai tháng 9/2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vành đai 3 qua Đồng Nai đã thông xe chưa? Cập nhật 9/2026",
    description: "Tiến độ Vành đai 3 qua Đồng Nai cuối tháng 9/2026 và tác động đến kết nối Nhơn Trạch – TP.HCM.",
    images: [OG_IMG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
