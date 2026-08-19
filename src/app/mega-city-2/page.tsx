import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Mega City 2 Nhơn Trạch - Thông tin dự án mới nhất 2026",
  description:
    "Cập nhật thông tin dự án Mega City 2 Nhơn Trạch mới nhất: vị trí, bảng giá, tiện ích, pháp lý, tiến độ, hình ảnh và các thông tin liên quan.",
  keywords: [
    "Mega City 2",
    "Mega City 2 Nhơn Trạch",
    "Dự án Mega City 2",
    "Khu đô thị Mega City 2",
    "bảng giá Mega City 2",
  ],
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2" },
  openGraph: {
    title: "Mega City 2 Nhơn Trạch - Thông tin dự án mới nhất 2026",
    description:
      "Khu dân cư ~83,94 ha tại Nhơn Trạch, Đồng Nai. 2.421 lô phân lô bán nền theo QĐ 1772/QĐ-UBND. Giá từ 1,15 tỷ/nền.",
    type: "website",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [
      {
        url: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/megacity2/overview/1.jpg",
        width: 1280,
        height: 720,
        alt: "Toàn cảnh khu đô thị Mega City 2 Nhơn Trạch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega City 2 Nhơn Trạch - Thông tin mới nhất 2026",
    description:
      "2.421 lô phân lô bán nền, hạ tầng ~95%, giá từ 1,15 tỷ/nền. QĐ 1772/QĐ-UBND ngày 30/5/2025.",
    images: [
      "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/megacity2/overview/1.jpg",
    ],
  },
};

/* ─────────────────────────────────────────
   JSON-LD — RealEstateListing (pillar page)
   Đặt tại đây thay vì layout.tsx để schema
   chỉ xuất hiện đúng trên trang này.
───────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "@id": "https://kimoanhdongnai.com.vn/mega-city-2#listing",
  name: "Mega City 2 Nhơn Trạch – Khu dân cư phân lô bán nền",
  description:
    "Khu dân cư Mega City 2 quy mô ~83,94 ha tại xã Nhơn Trạch, tỉnh Đồng Nai. 2.421 lô phân lô bán nền được UBND tỉnh Đồng Nai chấp thuận theo QĐ 1772/QĐ-UBND ngày 30/05/2025. Chủ đầu tư: Công ty TNHH Khu đô thị Phú Hội. Phát triển: Kim Oanh Group.",
  url: "https://kimoanhdongnai.com.vn/mega-city-2",
  datePosted: "2026-08-13",
  image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,h_720,c_fill,g_auto/megacity2/overview/1.jpg",
  floorSize: {
    "@type": "QuantitativeValue",
    value: 90,
    minValue: 90,
    maxValue: 200,
    unitCode: "MTK",
    unitText: "m²",
  },
  numberOfRooms: null,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Đường 25C",
    addressLocality: "Xã Nhơn Trạch",
    addressRegion: "Đồng Nai",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.7567,
    longitude: 106.9667,
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "VND",
    lowPrice: 1150000000,
    highPrice: 2500000000,
    offerCount: 2421,
    offers: [
      {
        "@type": "Offer",
        name: "Nhà phố TH – lô liền kề nội khu",
        priceCurrency: "VND",
        lowPrice: 1200000000,
        highPrice: 1600000000,
      },
      {
        "@type": "Offer",
        name: "Nhà phố T – theo mặt đường",
        priceCurrency: "VND",
        lowPrice: 1150000000,
        highPrice: 2200000000,
      },
      {
        "@type": "Offer",
        name: "Biệt thự V",
        priceCurrency: "VND",
        lowPrice: 2100000000,
        highPrice: 2500000000,
      },
    ],
  },
  seller: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url: "https://kimoanhdongnai.com.vn",
    telephone: "+840937587438",
    email: "k.homekog@gmail.com",
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Quy mô",
      value: "83,94 ha",
    },
    {
      "@type": "PropertyValue",
      name: "Số lô phân lô bán nền",
      value: "2.421 lô",
    },
    {
      "@type": "PropertyValue",
      name: "Pháp lý",
      value: "QĐ 1772/QĐ-UBND ngày 30/05/2025",
    },
    {
      "@type": "PropertyValue",
      name: "Chủ đầu tư",
      value: "Công ty TNHH Khu đô thị Phú Hội",
    },
    {
      "@type": "PropertyValue",
      name: "Đơn vị phát triển",
      value: "Kim Oanh Group",
    },
    {
      "@type": "PropertyValue",
      name: "Tiến độ hạ tầng",
      value: "~95% (cập nhật 06/2025)",
    },
    {
      "@type": "PropertyValue",
      name: "GCN đã cấp",
      value: "110 GCN",
    },
  ],
};

/* ─────────────────────────────────────────
   JSON-LD — BreadcrumbList (pillar page)
───────────────────────────────────────── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Trang chủ",
      item: "https://kimoanhdongnai.com.vn",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Mega City 2",
      item: "https://kimoanhdongnai.com.vn/mega-city-2",
    },
  ],
};

/* ─────────────────────────────────────────
   JSON-LD — FAQPage (pillar page)
   Lấy từ faqs array bên dưới để đồng bộ nội dung.
   Khai báo ở đây vì faqs được define sau, sẽ
   được inject vào component sau khi build.
───────────────────────────────────────── */
const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dự án cách TP.HCM bao xa và đi bằng đường nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mega City Nhơn Trạch cách trung tâm TP.HCM khoảng 30–35 km. Khách hàng có thể đi theo đường 25C (cao tốc Bến Lức – Long Thành) hoặc phà Cát Lái – Nhơn Trạch. Khi cầu Nhơn Trạch hoàn thành thời gian di chuyển rút ngắn còn 20–25 phút.",
      },
    },
    {
      "@type": "Question",
      name: "Tiến độ thực tế và tình trạng sổ hồng ra sao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hạ tầng đã hoàn thiện ~95% theo thông tin công bố 06/2025. Dự án đã được cấp 110 GCN (sổ hồng). Các lô Block TH và T đường 13–17 m có sổ hồng riêng không ràng buộc xây dựng. Các lô T đường 24–32 m có sổ hồng với điều kiện xây dựng trong 5 năm.",
      },
    },
    {
      "@type": "Question",
      name: "Quy mô dự án Mega City 2 như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mega City 2 có quy mô khoảng 83,94 ha tại xã Nhơn Trạch, tỉnh Đồng Nai. Dự án có 3.160 sản phẩm nhà ở thấp tầng gồm nhà vườn liên kế TH (1.580 lô), nhà phố liên kế T (1.478 lô) và biệt thự song lập V (102 lô). Trong đó 2.421 lô đã được UBND tỉnh Đồng Nai chấp thuận phân lô bán nền theo QĐ 1772/QĐ-UBND ngày 30/5/2025.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có những loại sản phẩm nào? Giá khởi điểm bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án có 3 loại chính: Nhà phố TH (90–120 m², từ 1,2 tỷ), Nhà phố T (90–160 m², từ 1,15 tỷ) và Biệt thự V (150–200 m², từ 2,1 tỷ). Nhà xây sẵn T6–T13 có giá trên 4 tỷ.",
      },
    },
    {
      "@type": "Question",
      name: "Dự án Mega City 2 đã được phép phân lô bán nền chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. UBND tỉnh Đồng Nai đã ban hành Quyết định số 1772/QĐ-UBND ngày 30/5/2025 chấp thuận 2.421 lô được chuyển nhượng quyền sử dụng đất dưới hình thức phân lô bán nền, bao gồm các dãy T-1 đến T-29, TH-1 đến TH-28 và V-1 đến V-4.",
      },
    },
    {
      "@type": "Question",
      name: "Thời hạn xây dựng nhà ở tại Mega City 2 là bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cá nhân nhận chuyển nhượng phải hoàn thành xây dựng nhà ở trước ngày 31/12/2029. Thời hạn này được ghi rõ trong Hợp đồng chuyển nhượng theo yêu cầu của Quyết định 1772/QĐ-UBND.",
      },
    },
    {
      "@type": "Question",
      name: "Chủ đầu tư Mega City 2 là ai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chủ đầu tư chính thức theo hồ sơ pháp lý là Công ty TNHH Khu đô thị Phú Hội. Kim Oanh Group là đơn vị tham gia phát triển và phân phối dự án.",
      },
    },
    {
      "@type": "Question",
      name: "Mẫu nhà PH-B5 áp dụng cho lô nào tại Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mẫu thiết kế nhà liên kế phố 3 tầng PH-B5 (5×16 m) áp dụng cho các lô T-30 ô số 13, 14 và các lô có kích thước tương tự theo quy hoạch. Tổng diện tích sàn khoảng 327,8 m² và chiều cao 14,50 m.",
      },
    },
  ],
};
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import RelatedContent from "@/components/RelatedContent";
import AmenitiesSection from "@/components/AmenitiesSection";
import ConnectivitySection from "@/components/ConnectivitySection";
import LegalSection from "@/components/LegalSection";
import ProductSection from "@/components/ProductSection";
import PaymentSection from "@/components/PaymentSection";
import RealPhotoSection from "@/components/RealPhotoSection";
import { PROGRESS_IMAGES } from "@/data/realImages";
import LeadPopup from "@/components/LeadPopup";
import SectionNav from "@/components/SectionNav";
import FadeSection from "@/components/FadeSection";
import ScrollLink from "@/components/ScrollLink";
import TableOfContents from "@/components/megacity2/TableOfContents";
import {
  Phone, Mail, MapPin, ChevronRight,
} from "lucide-react";
import {
  IMG_OVERVIEW as OV,
} from "@/lib/cloudinary";

/* ─────────────────────────────────────────
   Helper micro-components
───────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3">
      {children}
    </span>
  );
}

function SectionHeader({
  children,
  sub,
}: {
  children: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
        {children}
      </h2>
      {sub && <p className="mt-2 text-slate-500 text-sm md:text-base">{sub}</p>}
    </div>
  );
}


/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */

const projectFacts = [
  { label: "Tên dự án",                     value: "Mega City 2 Nhơn Trạch",           highlight: false },
  { label: "Vị trí",                        value: "Xã Nhơn Trạch, tỉnh Đồng Nai",     highlight: false },
  { label: "Chủ đầu tư chính thức",         value: "Công ty TNHH Khu đô thị Phú Hội", highlight: false },
  { label: "Đơn vị phát triển / phân phối", value: "Kim Oanh Group",                   highlight: false },
  { label: "Quy mô",                        value: "Khoảng 84 ha",                     highlight: true  },
  { label: "Lô được chấp thuận phân lô",    value: "2.421 lô",                         highlight: true  },
  { label: "Loại hình",                     value: "Nhà phố liên kế · Nhà vườn liên kế · Biệt thự", highlight: false },
  { label: "Diện tích phổ biến",            value: "90–200 m²*",                       highlight: false },
  { label: "Hạ tầng nội khu",               value: "Đường nhựa nội khu theo quy hoạch", highlight: false },
  { label: "Tiến độ hạ tầng",               value: "~95%*",                            highlight: false },
  { label: "GCN đã cấp",                    value: "110 GCN đã cấp*",                  highlight: false },
  { label: "Thông tin pháp lý",             value: "QH 1/500 · QĐ 1772/QĐ-UBND",      highlight: true  },
];


const hotListings = [
  { code: "T9/T10/T11/T20",  area: "90 m²",   price: "1,15 tỷ", note: "" },
  { code: "TH24–TH27",       area: "",         price: "1,35 tỷ", note: "Tùy diện tích / vị trí" },
  { code: "TH14–TH34",       area: "100 m²",  price: "1,2 tỷ",  note: "" },
  { code: "T28-8",           area: "110 m²",  price: "1,4 tỷ",  note: "" },
  { code: "T28-67",          area: "",         price: "1,55 tỷ", note: "Mặt đường 24 m" },
  { code: "TH3-5",           area: "",         price: "1,4 tỷ",  note: "Đường 15 m, hướng công viên" },
];

const progressItems = [
  { label: "Đường nội khu", pct: 100 },
  { label: "Điện – Nước", pct: 100 },
  { label: "Công viên trung tâm", pct: 100 },
  { label: "Cây xanh & tiểu cảnh", pct: 95 },
  { label: "Viễn thông", pct: 95 },
  { label: "Tổng tiến độ", pct: 95 },
];

const investReasons = [
  {
    no: "01",
    title: "Vị trí kết nối vùng",
    desc: "Tiếp giáp TP.HCM qua đường 25C, gần sân bay Long Thành, nằm giữa 4 trục giao thông huyết mạch Đông Nam Bộ.",
    link: { href: "/mega-city-2/vi-tri", label: "Xem phân tích vị trí →" },
  },
  {
    no: "02",
    title: "Hạ tầng đồng bộ",
    desc: "Đường nội khu 13–32 m, điện âm, nước thủy cục, viễn thông hoàn chỉnh. Cư dân có thể kiểm tra hiện trạng trước khi giao dịch.",
    link: { href: "/mega-city-2/tien-do", label: "Xem tiến độ hạ tầng →" },
  },
  {
    no: "03",
    title: "Hạ tầng đã hoàn thiện phần lớn",
    desc: "Theo cập nhật gần nhất được công bố (06/2025), tiến độ hạ tầng đạt ~95%. Khách hàng nên xác nhận tình trạng thực tế từng lô trước khi ký hợp đồng.",
    link: { href: "/mega-city-2/hinh-anh", label: "Xem hình ảnh thực tế →" },
  },
  {
    no: "04",
    title: "Pháp lý rõ ràng",
    desc: "Quy hoạch 1/500 được phê duyệt. UBND tỉnh Đồng Nai đã chấp thuận 2.421 lô đủ điều kiện phân lô bán nền theo QĐ 1772/QĐ-UBND ngày 30/5/2025.",
    link: { href: "/mega-city-2/phap-ly", label: "Xem chi tiết pháp lý →" },
  },
  {
    no: "05",
    title: "Mức giá tham khảo cạnh tranh",
    desc: "Giá chuyển nhượng tham khảo từ 1,15 tỷ/nền theo nguồn thị trường 05/2026. Giá thực tế phụ thuộc vị trí, diện tích và thời điểm giao dịch.",
    link: { href: "/mega-city-2/bang-gia", label: "Xem bảng giá Mega City 2 →" },
  },
  {
    no: "06",
    title: "Nhơn Trạch phát triển đô thị",
    desc: "Khu vực Nhơn Trạch đang trong quá trình phát triển đô thị theo định hướng quy hoạch tỉnh Đồng Nai, là một trong các khu vực trọng điểm phía Nam.",
    link: { href: "/mega-city-2/quy-hoach-nhan-trach", label: "Xem quy hoạch Nhơn Trạch →" },
  },
];

const faqs = [
  {
    q: "Dự án cách TP.HCM bao xa và đi bằng đường nào?",
    a: "Mega City Nhơn Trạch cách trung tâm TP.HCM khoảng 30–35 km. Khách hàng có thể đi theo đường 25C (cao tốc Bến Lức – Long Thành) hoặc phà Cát Lái – Nhơn Trạch. Khi cầu Nhơn Trạch hoàn thành (dự kiến 2025) thời gian di chuyển rút ngắn còn 20–25 phút.",
  },
  {
    q: "Tiến độ thực tế và tình trạng sổ hồng ra sao?",
    a: "Hạ tầng đã hoàn thiện 95%. Dự án đã được cấp 110 GCN (sổ hồng). Các lô Block TH và T đường 13–17 m có sổ hồng riêng không ràng buộc xây dựng. Các lô T đường 24–32 m có sổ hồng với điều kiện xây dựng trong 5 năm.",
  },
  {
    q: "Quy mô dự án như thế nào?",
    a: "Mega City 2 có quy mô khoảng 83,94 ha tại xã Nhơn Trạch, tỉnh Đồng Nai. Theo cơ cấu quy hoạch, dự án có 3.160 sản phẩm nhà ở thấp tầng gồm nhà vườn liên kế TH (1.580 lô), nhà phố liên kế T (1.478 lô) và biệt thự song lập V (102 lô). Trong đó 2.421 lô đã được UBND tỉnh Đồng Nai chấp thuận phân lô bán nền theo QĐ 1772/QĐ-UBND ngày 30/5/2025.",
  },
  {
    q: "Có những loại sản phẩm nào? Giá khởi điểm bao nhiêu?",
    a: "Dự án có 4 loại: Nhà phố TH (90–120 m², từ 1,2 tỷ), Nhà phố T (90–160 m², từ 1,15 tỷ), Shophouse mặt tiền đường lớn và Biệt thự V (150–200 m², từ 2,1 tỷ). Nhà xây sẵn T6–T13 có giá trên 4 tỷ.",
  },
  {
    q: "Khách hàng phản ánh gì về dự án?",
    a: "Đa số khách hàng đánh giá cao vị trí, hạ tầng hoàn thiện và tính pháp lý rõ ràng. Một số khách lưu ý khu vực chưa có nhiều tiện ích thương mại lân cận, tuy nhiên điều này đang được cải thiện nhanh khi dân cư và hạ tầng xã hội phát triển.",
  },
  {
    q: "Dự án đã được phép phân lô bán nền chưa?",
    a: "Có. UBND tỉnh Đồng Nai đã ban hành Quyết định số 1772/QĐ-UBND ngày 30/5/2025 chấp thuận 2.421 lô được chuyển nhượng quyền sử dụng đất dưới hình thức phân lô bán nền, bao gồm các dãy T-1 đến T-29, TH-1 đến TH-28 và V-1 đến V-4.",
  },
  {
    q: "Thời hạn xây dựng nhà ở là bao lâu?",
    a: "Cá nhân nhận chuyển nhượng phải hoàn thành xây dựng nhà ở trước ngày 31/12/2029. Thời hạn này được ghi rõ trong Hợp đồng chuyển nhượng quyền sử dụng đất theo yêu cầu của Quyết định 1772/QĐ-UBND.",
  },
  {
    q: "Mẫu nhà PH-B5 áp dụng cho lô nào?",
    a: "Mẫu thiết kế nhà liên kế phố 3 tầng PH-B5 (5×16 m) áp dụng cho các lô T-30 ô số 13, 14 và các lô có kích thước tương tự theo quy hoạch. Mẫu nhà hoàn thiện mặt ngoài, xây thô bên trong với tổng diện tích sàn khoảng 327,8 m² và chiều cao 14,50 m.",
  },
];

/* ─────────────────────────────────────────
   Main Page Component
───────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* JSON-LD — RealEstateListing cho trang pillar Mega City 2 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* JSON-LD — BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* JSON-LD — FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <Header />
      <SectionNav />
      <LeadPopup />

      <main className="pb-16 lg:pb-0">
        {/* ── Hero ── */}
        <Hero />

        {/* ── Mục lục ── */}
        <div className="max-w-2xl mx-auto px-4 pt-8 pb-2">
          <TableOfContents />
        </div>

        {/* ── Tổng Quan ── */}
        <FadeSection id="tong-quan" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">

            {/* Header */}
            <div className="mb-8">
              <span className="section-label">Tổng quan dự án</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug mt-1">
                Mega City 2 Nhơn Trạch – Tổng quan
              </h2>
              <p className="mt-2 text-slate-500 text-sm md:text-base">
                Khu dân cư theo quy hoạch tại xã Nhơn Trạch, tỉnh Đồng Nai
              </p>
            </div>

            {/* Facts grid — cards premium */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
              {projectFacts.map((f) => (
                <div
                  key={f.label}
                  className={`rounded-2xl p-4 border transition-shadow hover:shadow-md
                    ${f.highlight
                      ? "bg-primary-50 border-primary-200"
                      : "bg-slate-50 border-slate-100"}`}
                >
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                    {f.label}
                  </p>
                  <p className={`text-sm font-bold leading-snug
                    ${f.highlight ? "text-primary-700 text-base" : "text-slate-700"}`}>
                    {f.value}
                  </p>
                  {/* Sub-note */}
                  {f.label === "Lô được chấp thuận phân lô" && (
                    <p className="text-[10px] text-primary-500 mt-1 font-medium">
                      QĐ 1772/QĐ-UBND · 30/05/2025
                    </p>
                  )}
                  {f.label === "GCN đã cấp" && (
                    <p className="text-[10px] text-slate-400 mt-1">
                      Cần kiểm tra theo từng lô cụ thể
                    </p>
                  )}
                  {f.label === "Tiến độ hạ tầng" && (
                    <p className="text-[10px] text-slate-400 mt-1">
                      Theo dữ liệu công bố gần nhất
                    </p>
                  )}
                  {f.label === "Thông tin pháp lý" && (
                    <p className="text-[10px] text-primary-500 mt-1 font-medium">
                      Xem hồ sơ chi tiết →
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* 3 images — ảnh chính lớn + 2 nhỏ */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {/* Ảnh chính span 2 hàng */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-100 group
                              col-span-2 md:col-span-1 md:row-span-2 h-48 md:h-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={OV["1"]} alt="Toàn cảnh khu đô thị Mega City 2 Nhơn Trạch"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white text-sm font-semibold">Toàn cảnh dự án</p>
                    <p className="text-white/55 text-[10px] mt-0.5">Phối cảnh tham khảo</p>
                  </div>
                </div>
              </div>
              {/* 2 ảnh nhỏ */}
              {[
                { src: OV["2"],  alt: "Hạ tầng đường nội khu Mega City 2 Nhơn Trạch",  cap: "Hạ tầng nội khu" },
                { src: OV["3"],  alt: "Cảnh quan công viên trung tâm Mega City 2",      cap: "Công viên trung tâm" },
              ].map((img) => (
                <div key={img.src}
                  className="relative overflow-hidden rounded-2xl bg-slate-100 group h-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <div>
                      <p className="text-white text-xs font-semibold">{img.cap}</p>
                      <p className="text-white/55 text-[10px]">Phối cảnh tham khảo</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legal note — styled đẹp, trust-first */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-200 bg-white">
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-600 text-[11px] font-black">!</span>
                </div>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Lưu ý quan trọng về số liệu
                </span>
              </div>
              <div className="px-5 py-4 space-y-2">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-semibold text-slate-700">3.160 sản phẩm</span> là tổng cơ cấu sản phẩm nhà ở thấp tầng theo quy hoạch (1.580 TH + 1.478 T + 102 V), không phải số lượng sản phẩm đang mở bán.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-semibold text-slate-700">2.421 lô</span> là số lô được UBND tỉnh Đồng Nai chấp thuận thực hiện chuyển nhượng quyền sử dụng đất theo hình thức phân lô, bán nền (QĐ 1772/QĐ-UBND ngày 30/05/2025). Các lô còn lại do Chủ đầu tư thực hiện xây nhà.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-semibold text-slate-700">110 GCN</span> là số Giấy chứng nhận theo thông tin công bố. Tình trạng GCN cần được kiểm tra theo từng nền/lô cụ thể trước giao dịch.
                </p>
              </div>
              <div className="flex items-center justify-between px-5 py-3 border-t border-slate-200 bg-white">
                <p className="text-[11px] text-slate-400">
                  Thông tin tổng hợp từ hồ sơ, văn bản công bố và nguồn thị trường
                </p>
                <ScrollLink to="phap-ly"
                  className="text-[11px] font-bold text-primary-600 hover:text-primary-700
                             flex items-center gap-1 transition-colors flex-shrink-0 ml-4">
                  Xem hồ sơ pháp lý →
                </ScrollLink>
              </div>
            </div>

            {/* Ngày cập nhật */}
            <p className="text-[11px] text-slate-400 mt-3 text-right">
              Cập nhật lần cuối: 09/08/2026
            </p>
          </div>
        </FadeSection>

        {/* ── Liên kết vùng ── */}
        <ConnectivitySection />

        {/* ── Tiện ích nội khu ── */}
        <AmenitiesSection />

        {/* ── Hình ảnh thực tế ── */}
        <RealPhotoSection />

        {/* ── Sản Phẩm ── */}
        <ProductSection />

        {/* ── Bảng Giá ── */}
        <FadeSection id="bang-gia" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">

            {/* Header */}
            <div className="mb-10">
              <span className="section-label">Bảng giá</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2 leading-snug">
                Bảng giá Mega City 2 Nhơn Trạch
              </h2>
              <p className="mt-2 text-slate-500 text-sm md:text-base">
                Giá chuyển nhượng tham khảo theo từng block, mặt đường và diện tích.
                Cập nhật theo từng thời điểm giao dịch.
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Cập nhật gần nhất: 05/2026
              </p>
            </div>

            {/* 3 nhóm giá */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {/* Nhà phố TH */}
              <div className="rounded-2xl bg-white border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-800 mb-1 text-base">Nhà phố TH</h3>
                <p className="text-xs text-slate-400 mb-4">Lô liền kề nội khu</p>
                <ul className="space-y-2.5 text-sm">
                  {[
                    { block: "TH24–TH28", price: "1,2 – 1,5 tỷ" },
                    { block: "TH16–TH22", price: "1,3 – 1,6 tỷ" },
                    { block: "TH1–TH8",   price: "1,4 – 1,5 tỷ" },
                    { block: "T9–T12",    price: "~1,15–1,4 tỷ" },
                  ].map((r) => (
                    <li key={r.block} className="flex justify-between gap-2 items-baseline">
                      <span className="text-slate-500">{r.block}</span>
                      <span className="font-semibold text-slate-800 text-right tabular-nums">{r.price}</span>
                    </li>
                  ))}
                </ul>
                <ScrollLink to="lien-he"
                  className="mt-5 block text-center text-xs font-semibold text-[#16B364]
                             border border-[#16B364]/30 hover:bg-emerald-50 rounded-xl py-2
                             transition-colors">
                  Xem các vị trí →
                </ScrollLink>
              </div>

              {/* Nhà phố T */}
              <div className="rounded-2xl bg-white border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-800 mb-1 text-base">Nhà phố T</h3>
                <p className="text-xs text-slate-400 mb-4">Theo mặt đường</p>
                <ul className="space-y-2.5 text-sm">
                  {[
                    { road: "Đường 15–17 m", price: "1,5 – 1,8 tỷ" },
                    { road: "Đường 21–24 m", price: "1,8 – 2,2 tỷ" },
                    { road: "Đường 32 m",    price: "~2,0–2,5 tỷ" },
                  ].map((r) => (
                    <li key={r.road} className="flex justify-between gap-2 items-baseline">
                      <span className="text-slate-500">{r.road}</span>
                      <span className="font-semibold text-slate-800 text-right tabular-nums">{r.price}</span>
                    </li>
                  ))}
                </ul>
                <ScrollLink to="lien-he"
                  className="mt-5 block text-center text-xs font-semibold text-[#16B364]
                             border border-[#16B364]/30 hover:bg-emerald-50 rounded-xl py-2
                             transition-colors">
                  Xem các vị trí →
                </ScrollLink>
              </div>

              {/* Biệt thự & Nhà xây sẵn */}
              <div className="rounded-2xl bg-white border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-800 mb-1 text-base">Biệt thự &amp; Nhà xây sẵn</h3>
                <p className="text-xs text-slate-400 mb-4">Nhà phố thương mại &amp; Biệt thự</p>
                <ul className="space-y-2.5 text-sm">
                  <li className="flex justify-between gap-2 items-baseline">
                    <span className="text-slate-500">Biệt thự V</span>
                    <span className="font-semibold text-slate-800 text-right">~từ 2,1 tỷ</span>
                  </li>
                  <li className="flex justify-between gap-2 items-baseline">
                    <span className="text-slate-500">Nhà xây sẵn T6–T13</span>
                    <span className="font-semibold text-slate-800 text-right">Trên 4 tỷ</span>
                  </li>
                </ul>
                <ScrollLink to="lien-he"
                  className="mt-5 block text-center text-xs font-semibold text-[#16B364]
                             border border-[#16B364]/30 hover:bg-emerald-50 rounded-xl py-2
                             transition-colors">
                  Xem các vị trí →
                </ScrollLink>
              </div>
            </div>

            {/* Một số vị trí đang được chào bán */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-slate-700 mb-1">
                Một số vị trí đang được chào bán
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Nguồn: tổng hợp thị trường 05/2026. Giá tham khảo, chưa bao gồm thuế phí.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {hotListings.map((item) => (
                  <div key={item.code}
                    className="rounded-xl bg-white border border-slate-200 px-4 py-3.5 text-sm
                               hover:border-slate-300 transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-slate-800">{item.code}</p>
                      <p className="font-bold text-[#16B364] tabular-nums flex-shrink-0">{item.price}</p>
                    </div>
                    {(item.area || item.note) && (
                      <p className="text-slate-400 text-xs mt-1">
                        {[item.area, item.note].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Nhà phố & Shophouse xây sẵn */}
            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden mb-6">
              <div className="px-5 py-3.5 border-b border-slate-100 bg-slate-50">
                <p className="text-sm font-semibold text-slate-700">
                  Nhà phố &amp; Shophouse xây sẵn
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Liên hệ xác nhận giỏ hàng và chính sách hiện hành
                </p>
              </div>
              <div className="p-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { code: "T6-13", price: "Trên 4 tỷ" },
                  { code: "T6-14", price: "Gần 4 tỷ" },
                  { code: "T6-15", price: "Gần 4 tỷ" },
                  { code: "T6-16", price: "Gần 4 tỷ" },
                ].map((item) => (
                  <div key={item.code} className="rounded-xl bg-slate-50 border border-slate-200 px-3 py-2.5 text-center">
                    <p className="font-semibold text-slate-800 text-sm">{item.code}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 pt-4">
              * Giá chuyển nhượng tham khảo, có thể thay đổi theo vị trí, diện tích, hồ sơ
              và thời điểm giao dịch. Thông tin tổng hợp từ nguồn thị trường, không phải
              bảng giá chính thức của chủ đầu tư. Liên hệ để xác nhận thông tin cụ thể.{" "}
              <a href="/mega-city-2/bang-gia" className="text-primary-600 hover:underline font-semibold">
                Xem bảng giá Mega City 2 chi tiết →
              </a>
            </p>
          </div>
        </FadeSection>

        {/* ── Phương thức thanh toán ── */}
        <PaymentSection />

        {/* ── Pháp Lý ── */}
        <LegalSection />

        {/* ── Chủ đầu tư & Đơn vị phát triển ── */}
        <section className="py-20 bg-white" data-reveal>
          <div className="max-w-6xl mx-auto px-4">

            {/* Header */}
            <div className="mb-10">
              <span className="section-label">Đơn vị phát triển</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2 leading-snug">
                Chủ đầu tư và đơn vị phát triển Mega City 2
              </h2>
              <p className="mt-2 text-slate-500 text-sm md:text-base max-w-2xl">
                Mega City 2 được triển khai tại khu vực Nhơn Trạch, Đồng Nai.
                Công ty TNHH Khu đô thị Phú Hội là chủ đầu tư pháp lý;
                Kim Oanh Group tham gia phát triển và phân phối dự án.
              </p>
            </div>

            {/* Phân biệt rõ vai trò */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Chủ đầu tư pháp lý
                </p>
                <h3 className="font-bold text-slate-800 text-base">
                  Công ty TNHH Khu đô thị Phú Hội
                </h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  Chủ đầu tư chính thức theo hồ sơ pháp lý và Quyết định
                  1772/QĐ-UBND ngày 30/05/2025.
                </p>
                <ScrollLink to="phap-ly"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold
                             text-[#16B364] hover:underline">
                  Xem hồ sơ pháp lý →
                </ScrollLink>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Đơn vị phát triển &amp; phân phối
                </p>
                <h3 className="font-bold text-slate-800 text-base">Kim Oanh Group</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  Tham gia phát triển hạ tầng, kinh doanh và phân phối sản phẩm
                  tại dự án Mega City 2 Nhơn Trạch.
                </p>
              </div>
            </div>

            {/* Hệ sinh thái Kim Oanh */}
            <h3 className="text-base font-semibold text-slate-700 mb-4">
              Hệ sinh thái Kim Oanh Group
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                {
                  name: "Kim Oanh Land",
                  role: "Đầu tư & phát triển",
                  desc: "Đầu tư và phát triển dự án bất động sản quy mô lớn.",
                },
                {
                  name: "Kim Oanh Construction",
                  role: "Xây dựng",
                  desc: "Thi công hạ tầng và xây dựng nhà ở dân dụng.",
                },
                {
                  name: "Kim Oanh Realty",
                  role: "Kinh doanh & phân phối",
                  desc: "Kinh doanh, tiếp thị và phân phối bất động sản toàn quốc.",
                },
              ].map((m) => (
                <div key={m.name}
                  className="rounded-2xl border border-slate-200 bg-white p-5
                             hover:border-slate-300 hover:shadow-sm transition-all duration-200">
                  <p className="text-[10px] font-bold text-[#16B364] uppercase tracking-widest mb-1">
                    {m.role}
                  </p>
                  <h3 className="font-semibold text-slate-800 text-sm">{m.name}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats — chỉ dùng số có căn cứ */}
            <div className="rounded-2xl bg-slate-900 p-6 md:p-8 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
                <div className="p-3">
                  <p className="text-2xl md:text-3xl font-bold">2009</p>
                  <p className="text-xs text-slate-400 mt-1">Năm thành lập Kim Oanh Group</p>
                </div>
                <div className="p-3">
                  <p className="text-2xl md:text-3xl font-bold">~84 ha</p>
                  <p className="text-xs text-slate-400 mt-1">Quy mô Mega City 2</p>
                </div>
                <div className="p-3">
                  <p className="text-2xl md:text-3xl font-bold">2018</p>
                  <p className="text-xs text-slate-400 mt-1">Năm đầu tư Mega City 2</p>
                </div>
                <div className="p-3">
                  <p className="text-2xl md:text-3xl font-bold">4</p>
                  <p className="text-xs text-slate-400 mt-1">Mảng hoạt động chính</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Tiến Độ ── */}
        <section className="py-20 bg-slate-50" data-reveal>
          <div className="max-w-6xl mx-auto px-4">
            <SectionLabel>Tiến độ</SectionLabel>
            <SectionHeader sub="Theo thông tin được công bố gần nhất – tháng 06/2025">
              Tiến độ thi công hạ tầng Mega City 2
            </SectionHeader>

            <div className="mb-6 rounded-2xl bg-amber-50 border border-amber-200 px-4 py-3">
              <p className="text-xs text-amber-700">
                <span className="font-bold">Lưu ý:</span> Số liệu tiến độ dưới đây theo cập nhật tháng 06/2025.
                Tình trạng thực tế có thể thay đổi – vui lòng liên hệ để xác nhận.{" "}
                <a href="/mega-city-2/tien-do" className="font-bold text-amber-800 underline">
                  Xem tiến độ xây dựng chi tiết →
                </a>
              </p>
            </div>

            {/* 6 progress bars */}
            <div className="space-y-5 mb-10">
              {progressItems.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold text-slate-700">
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-primary-600">
                      {item.pct}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-600 rounded-full"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Hiện trạng thực tế */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-slate-700 mb-1">Hiện trạng thực tế</h3>
              <p className="text-xs text-slate-400 mb-4">
                Một số hình ảnh thực tế ghi nhận tại dự án, thể hiện hiện trạng nhà phố,
                đường nội khu và cảnh quan.{" "}
                <a href="/mega-city-2/hinh-anh" className="text-primary-600 hover:underline font-semibold">
                  Xem toàn bộ hình ảnh thực tế →
                </a>
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {PROGRESS_IMAGES.map((img) => (
                  <div key={img.src}
                    className="relative overflow-hidden rounded-xl bg-slate-100 h-36 md:h-40 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                    flex items-end p-3">
                      <p className="text-white text-xs font-medium leading-snug">{img.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6 điểm đáng chú ý ── */}
        <section className="py-20 bg-white" data-reveal>
          <div className="max-w-6xl mx-auto px-4">
            <SectionLabel>Tại sao nên quan tâm</SectionLabel>
            <SectionHeader sub="6 điểm nổi bật về dự án Mega City 2 tại xã Nhơn Trạch, tỉnh Đồng Nai">
              6 điểm đáng chú ý của dự án
            </SectionHeader>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {investReasons.map((r) => (
                <div
                  key={r.no}
                  className="group rounded-2xl border border-slate-200 bg-white p-5
                             hover:border-primary-200 hover:shadow-lg hover:shadow-primary-50
                             hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Number badge + title row */}
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-primary-50
                                     group-hover:bg-primary-100 transition-colors
                                     flex items-center justify-center
                                     text-xs font-black text-primary-600">
                      {r.no}
                    </span>
                    <h3 className="font-bold text-slate-800 text-sm leading-snug pt-1">
                      {r.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed pl-11">{r.desc}</p>
                  {r.link && (
                    <a
                      href={r.link.href}
                      className="mt-3 ml-11 inline-flex items-center gap-1 text-xs font-semibold
                                 text-primary-600 hover:text-primary-700 hover:underline transition-colors"
                    >
                      {r.link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-slate-50" data-reveal>
          <div className="max-w-3xl mx-auto px-4">
            <SectionLabel>FAQ</SectionLabel>
            <SectionHeader sub="Những câu hỏi thường gặp về dự án Mega City 2 Nhơn Trạch">
              Câu hỏi thường gặp về Mega City 2
            </SectionHeader>

            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden
                             open:border-primary-200 open:shadow-md open:shadow-primary-50
                             transition-all duration-200"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer
                                       px-5 py-4 font-semibold text-slate-800 text-sm list-none
                                       group-open:text-primary-700 select-none">
                    <span>{faq.q}</span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100
                                     group-open:bg-primary-100 flex items-center justify-center
                                     transition-colors">
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-open:text-primary-600
                                               transition-transform group-open:rotate-90" />
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed
                                border-t border-slate-100 pt-3 bg-primary-50/30">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

            {/* CTA dưới FAQ */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800
                            p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-bold text-sm">Còn câu hỏi khác?</p>
                <p className="text-slate-400 text-xs mt-0.5">
                  Chuyên viên tư vấn sẽ giải đáp trực tiếp trong 30 phút
                </p>
              </div>
              <ScrollLink
                to="lien-he"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400
                           text-white font-bold px-5 py-2.5 rounded-xl text-sm
                           transition-all hover:scale-105 flex-shrink-0"
              >
                <Phone className="w-4 h-4" /> Liên hệ ngay
              </ScrollLink>
            </div>
          </div>
        </section>

        {/* ── Liên Hệ ── */}
        <section id="lien-he" className="py-20 bg-white" data-reveal>
          <div className="max-w-6xl mx-auto px-4">
            <SectionLabel>Liên hệ</SectionLabel>
            <SectionHeader sub="Để lại thông tin – chuyên viên tư vấn sẽ liên hệ trong 30 phút">
              Đăng ký tư vấn miễn phí
            </SectionHeader>

            {/* Mobile: form trước, contact sau | Desktop: 2 cột ngang */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* LeadForm — luôn trên cùng trên mobile */}
              <LeadForm />

              {/* Contact info */}
              <div className="space-y-5">
                {/* Hotline — nổi bật nhất */}
                <a
                  href="tel:0937587438"
                  className="flex items-center gap-4 p-4 rounded-2xl
                             bg-primary-600 hover:bg-primary-700 transition-colors
                             shadow-lg shadow-primary-500/25 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-semibold uppercase tracking-wide">
                      Hotline tư vấn
                    </p>
                    <p className="text-white font-black text-xl tracking-wide">
                      0937.587.438
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/60 ml-auto
                                           group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Email + Địa chỉ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="mailto:k.homekog@gmail.com"
                    className="flex items-start gap-3 p-4 rounded-2xl border border-slate-200
                               bg-slate-50 hover:border-primary-200 hover:bg-primary-50
                               transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200
                                    flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-slate-500" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Email</p>
                      <p className="text-sm font-semibold text-slate-800 break-all mt-0.5">
                        k.homekog@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-4 rounded-2xl border border-slate-200 bg-slate-50">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200
                                    flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-slate-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Địa chỉ</p>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5 leading-snug">
                        Đường 25C, Xã Nhơn Trạch
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">Tỉnh Đồng Nai</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <iframe
                    title="Bản đồ dự án Mega City 2 Nhơn Trạch"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31362.776564104588!2d106.8598273743164!3d10.707690599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317523006254ef57%3A0xc66fe772724b7d3!2sMega%20City%202%20-%20Kim%20Oanh%20Land!5e0!3m2!1svi!2s!4v1787137712216!5m2!1svi!2s"
                    width="100%"
                    height="240"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100
                                  flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                    <p className="text-xs text-slate-500">
                      Đường 25C, Xã Nhơn Trạch, Tỉnh Đồng Nai
                    </p>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  Thông tin tư vấn mang tính tham khảo. Website không phải trang chính thức
                  của chủ đầu tư Công ty TNHH Khu đô thị Phú Hội.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Internal links: pillar → cluster ── */}
      <RelatedContent
        title="Tìm hiểu chi tiết từng khía cạnh của Mega City 2"
        items={[
          {
            href: "/mega-city-2/vi-tri",
            title: "Vị trí & Liên kết vùng",
            description: "Phân tích vị trí chiến lược tại Nhơn Trạch: cách TP.HCM 30–35 km, đường 25C, sân bay Long Thành.",
            tag: "Vị trí",
          },
          {
            href: "/mega-city-2/mat-bang",
            title: "Mặt bằng & Sản phẩm",
            description: "Bản đồ phân lô tổng thể, các loại nhà phố liên kế TH, T và biệt thự V. Bản vẽ mẫu nhà PH-B5.",
            tag: "Mặt bằng",
          },
          {
            href: "/mega-city-2/bang-gia",
            title: "Bảng giá cập nhật 2026",
            description: "Giá chuyển nhượng tham khảo từ 1,15 tỷ/nền theo từng block, vị trí và loại sản phẩm.",
            tag: "Bảng giá",
          },
          {
            href: "/mega-city-2/tien-ich",
            title: "Tiện ích nội khu & ngoại khu",
            description: "Công viên trung tâm, trường học, y tế, thương mại dịch vụ và hạ tầng đồng bộ.",
            tag: "Tiện ích",
          },
          {
            href: "/mega-city-2/phap-ly",
            title: "Pháp lý – QĐ 1772/QĐ-UBND",
            description: "Tình trạng pháp lý, 2.421 lô được chấp thuận phân lô bán nền và điều kiện xây dựng.",
            tag: "Pháp lý",
          },
          {
            href: "/mega-city-2/hinh-anh",
            title: "Hình ảnh thực tế",
            description: "Bộ sưu tập ảnh thực tế đường nội khu, công viên, nhà mẫu và hạ tầng đã hoàn thiện.",
            tag: "Hình ảnh",
          },
          {
            href: "/mega-city-2/tien-do",
            title: "Tiến độ hạ tầng",
            description: "Cập nhật tiến độ thi công: đường, điện, nước, cây xanh đạt ~95% theo thông tin 06/2025.",
            tag: "Tiến độ",
          },
          {
            href: "/mega-city-2/thanh-toan",
            title: "Phương thức thanh toán",
            description: "Đặt cọc 50 triệu, thanh toán nhanh ưu đãi, hỗ trợ vay ngân hàng đối tác.",
            tag: "Thanh toán",
          },
          {
            href: "/mega-city-2/faq",
            title: "FAQ – Câu hỏi thường gặp",
            description: "Giải đáp đầy đủ về pháp lý, giá, tiến độ, sổ hồng và thủ tục giao dịch.",
            tag: "FAQ",
          },
          {
            href: "/mega-city-2/nha-pho-lien-ke",
            title: "Nhà phố liên kế TH, T & Biệt thự V",
            description: "So sánh chi tiết 3 loại sản phẩm: diện tích, giá tham khảo, pháp lý và hướng dẫn chọn phù hợp.",
            tag: "Nhà phố",
          },
          {
            href: "/mega-city-2/quy-hoach-nhan-trach",
            title: "Quy hoạch Nhơn Trạch 2026",
            description: "Sân bay Long Thành, cầu Nhơn Trạch, đường 25C và tác động đến bất động sản khu vực.",
            tag: "Quy hoạch",
          },
          {
            href: "/mega-city-2/san-bay-long-thanh",
            title: "Sân bay Long Thành & Mega City 2",
            description: "Khoảng cách ~18 km, phân tích tác động sân bay quốc tế đến giá đất Nhơn Trạch.",
            tag: "Sân bay",
          },
        ]}
      />

      <Footer />
    </>
  );
}
