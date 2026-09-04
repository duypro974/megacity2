"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import Breadcrumb from "@/components/Breadcrumb";
import LeadForm from "@/components/LeadForm";
import RelatedContent from "@/components/RelatedContent";
import FadeSection from "@/components/FadeSection";
import ScrollAnimator from "@/components/ScrollAnimator";
import ScrollLink from "@/components/ScrollLink";
import TLCSectionNav from "@/components/thelinkcity/TLCSectionNav";
import { useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import {
  TLC_OG,
  TLC_HERO,
  TLC_OVERVIEW,
  TLC_REAL,
  TLC_AMENITIES,
  TLC_DIAGRAM,
  TLC_T3_2B,
  TLC_CERTIFICATE,
  TLC_LEGAL_AS1,
  TLC_LAYOUT,
} from "@/lib/cloudinary";
import { SITE_CONFIG } from "@/data/siteConfig";
import {
  MapPin,
  Building2,
  Users,
  Layers,
  ShieldCheck,
  Phone,
  MessageCircle,
  ChevronRight,
  ArrowRight,
  Info,
  Clock,
  Landmark,
  Trees,
  Store,
  GraduationCap,
  Dumbbell,
  Waves,
  Calendar,
  FileText,
  LayoutGrid,
  Download,
  ZoomIn,
  CheckCircle2,
  BadgeCheck,
  Calculator,
  TrendingDown,
  Home,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// JSON-LD — RealEstateListing
// ─────────────────────────────────────────────────────────────
const listingSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "@id": "https://kimoanhdongnai.com.vn/the-link-city#listing",
  name: "The Link City – Khu dân cư A1-C1 Dầu Giây",
  description:
    "Dự án tại xã Dầu Giây, ngã tư Quốc lộ 1A và Quốc lộ 20, tỉnh Đồng Nai. 1.397 sản phẩm gồm nhà phố thương mại (shophouse), nhà phố liên kế và biệt thự. Chủ đầu tư: Công ty TNHH Đầu tư Phú Việt Tín. Đơn vị phát triển và phân phối: Kim Oanh Land.",
  url: "https://kimoanhdongnai.com.vn/the-link-city",
  datePosted: "2025-12-23",
  dateModified: "2026-09-04",
  image: TLC_OG,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Xã Dầu Giây",
    addressRegion: "Đồng Nai",
    addressCountry: "VN",
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Chủ đầu tư", value: "Công ty TNHH Đầu tư Phú Việt Tín" },
    { "@type": "PropertyValue", name: "Đơn vị phát triển", value: "Kim Oanh Land" },
    { "@type": "PropertyValue", name: "Số lượng sản phẩm", value: "1.397 sản phẩm" },
    { "@type": "PropertyValue", name: "Quy mô giai đoạn 1", value: "~53 ha" },
    { "@type": "PropertyValue", name: "Quy mô giai đoạn 2", value: "~47 ha" },
    { "@type": "PropertyValue", name: "Vị trí", value: "Ngã tư Quốc lộ 1A và Quốc lộ 20, xã Dầu Giây, Đồng Nai" },
  ],
  seller: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url: "https://kimoanhdongnai.com.vn",
    telephone: `+84${SITE_CONFIG.phone}`,
  },
};

// ─────────────────────────────────────────────────────────────
// JSON-LD — BreadcrumbList
// ─────────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://kimoanhdongnai.com.vn" },
    { "@type": "ListItem", position: 2, name: "Dự án", item: "https://kimoanhdongnai.com.vn/#du-an" },
    { "@type": "ListItem", position: 3, name: "The Link City", item: "https://kimoanhdongnai.com.vn/the-link-city" },
  ],
};

// ─────────────────────────────────────────────────────────────
// JSON-LD — FAQPage (tổng quan — không lấy FAQ mặt bằng/bản vẽ)
// ─────────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "The Link City là dự án gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City (tên quy hoạch: Khu dân cư A1-C1 Dầu Giây) là khu đô thị cung cấp 1.397 sản phẩm gồm nhà phố thương mại (shophouse), nhà phố liên kế và biệt thự. Dự án do Công ty TNHH Đầu tư Phú Việt Tín làm chủ đầu tư, Kim Oanh Land tham gia phát triển và phân phối.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City tọa lạc tại xã Dầu Giây, tỉnh Đồng Nai, ngay tại ngã tư Quốc lộ 1A và Quốc lộ 20 — trung tâm hành chính xã Dầu Giây.",
      },
    },
    {
      "@type": "Question",
      name: "Chủ đầu tư The Link City là ai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chủ đầu tư pháp lý là Công ty TNHH Đầu tư Phú Việt Tín (đại diện: Ông Đặng Phước Bình – Tổng Giám đốc). Kim Oanh Land (thuộc Kim Oanh Group) là đơn vị tham gia phát triển và phân phối dự án.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City có bao nhiêu sản phẩm và loại hình gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City cung cấp tổng cộng 1.397 sản phẩm, gồm 3 loại hình: nhà phố thương mại (shophouse), nhà phố liên kế và biệt thự, phân bổ trong 2 giai đoạn triển khai (~53 ha và ~47 ha).",
      },
    },
    {
      "@type": "Question",
      name: "Tình trạng pháp lý The Link City như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo thông tin công bố ngày 23/12/2025: Giai đoạn 1 — một số sản phẩm đã được cấp Giấy chứng nhận quyền sử dụng đất. Giai đoạn 2 — đang hoàn thiện điều kiện cấp GCN. VietinBank chi nhánh Biên Hòa là ngân hàng đồng hành chính thức. Tình trạng GCN từng sản phẩm cụ thể cần kiểm tra trực tiếp trước khi giao dịch.",
      },
    },
    {
      "@type": "Question",
      name: "Tiến độ xây dựng The Link City hiện ra sao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo thông tin công bố tại 23/12/2025: Giai đoạn 1 (~53 ha) hạ tầng kỹ thuật đã hoàn thiện. Giai đoạn 2 (~47 ha) hạ tầng đạt khoảng 55% theo GPXD. Hiện đã là tháng 9/2026 — tình trạng thực tế có thể đã thay đổi, vui lòng liên hệ để cập nhật.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City có những tiện ích gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo thông tin công bố, dự án quy hoạch 50 tiện ích, nổi bật gồm trường liên cấp, trung tâm thương mại 2,6 ha, hồ bơi, hệ thống công viên cảnh quan, tổ hợp thể thao ngoài trời và quảng trường sự kiện.",
      },
    },
    {
      "@type": "Question",
      name: "Ngân hàng nào hỗ trợ mua nhà tại The Link City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VietinBank chi nhánh Biên Hòa là ngân hàng đồng hành chính thức của dự án, hỗ trợ tài chính cho cả giai đoạn 1 và giai đoạn 2.",
      },
    },
    {
      "@type": "Question",
      name: "Pháp lý dự án The Link City đã có sổ đỏ chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City đã có Giấy chứng nhận quyền sử dụng đất (Sổ hồng) từng nền cấp cho Chủ đầu tư Phú Việt Tín, hoàn thành 100% tiền sử dụng đất với Cục Thuế Đồng Nai và quy hoạch chi tiết 1/500 phê duyệt đầy đủ. UBND tỉnh Đồng Nai đã ban hành Công văn số 2505/UBND-KTN ngày 13/02/2026 chỉ đạo Sở NN&MT đẩy nhanh cấp sổ cho từng khách hàng.",
      },
    },
    {
      "@type": "Question",
      name: "Chính sách vay ngân hàng The Link City như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khách hàng được ngân hàng VietinBank hỗ trợ vay tới 70% giá trị sản phẩm trong 20–30 năm, với chính sách ưu đãi ân hạn nợ gốc lên đến 24 tháng (chỉ trả lãi suất trong 2 năm đầu). Vốn tự có tối thiểu chỉ 30%. Ngoài ra có chiết khấu thanh toán sớm tương đương 16%/năm.",
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────
const projectFacts = [
  { label: "Tên dự án",         value: "The Link City",                           highlight: true },
  { label: "Tên quy hoạch",     value: "KDC A1 – C1 Dầu Giây" },
  { label: "Địa điểm",          value: "Xã Dầu Giây, Đồng Nai" },
  { label: "Vị trí",            value: "Ngã tư QL1A & QL20" },
  { label: "Chủ đầu tư",        value: "Phú Việt Tín" },
  { label: "Đơn vị phát triển", value: "Kim Oanh Land",                           highlight: true },
  { label: "Tổng sản phẩm",     value: "1.397 sản phẩm",                          highlight: true },
  { label: "Loại hình",         value: "Shophouse · Nhà phố · Biệt thự" },
  { label: "Quy mô GĐ1",        value: "~53 ha" },
  { label: "Quy mô GĐ2",        value: "~47 ha" },
  { label: "Tiện ích",          value: "50 tiện ích (theo công bố)" },
  { label: "Ngân hàng",         value: "VietinBank Biên Hòa" },
];

const amenitiesHighlight = [
  { icon: GraduationCap, label: "Trường liên cấp" },
  { icon: Store,         label: "TTMM 2,6 ha" },
  { icon: Waves,         label: "Hồ bơi" },
  { icon: Trees,         label: "Công viên cảnh quan" },
  { icon: Dumbbell,      label: "Thể thao ngoài trời" },
  { icon: Calendar,      label: "Quảng trường sự kiện" },
];

const clusterPages = [
  { href: "/the-link-city/vi-tri",    label: "Vị trí",      icon: MapPin },
  { href: "/the-link-city/mat-bang",  label: "Mặt bằng",    icon: LayoutGrid },
  { href: "/the-link-city/tien-ich",  label: "Tiện ích",     icon: Trees },
  { href: "/the-link-city/phap-ly",   label: "Pháp lý",      icon: ShieldCheck },
  { href: "/the-link-city/tien-do",   label: "Tiến độ",      icon: Clock },
  { href: "/the-link-city/hinh-anh",  label: "Hình ảnh",     icon: Layers },
  { href: "/the-link-city/bang-gia",  label: "Bảng giá",     icon: FileText },
  { href: "/the-link-city/thanh-toan",label: "Thanh toán",   icon: Building2 },
  { href: "/the-link-city/faq",       label: "FAQ",           icon: Info },
];

const relatedItems = [
  {
    href: "/the-link-city/vi-tri",
    title: "Vị trí The Link City Dầu Giây",
    description: "Chi tiết vị trí tại ngã tư Quốc lộ 1A và Quốc lộ 20, trung tâm hành chính xã Dầu Giây, Đồng Nai.",
    tag: "Vị trí",
  },
  {
    href: "/the-link-city/mat-bang",
    title: "Mặt bằng The Link City Dầu Giây",
    description: "Sơ đồ phân lô tổng thể, cơ cấu sản phẩm, hồ sơ mẫu nhà T3-2b và cách đọc mặt bằng.",
    tag: "Mặt bằng",
  },
  {
    href: "/the-link-city/tien-ich",
    title: "Hệ tiện ích The Link City",
    description: "50 tiện ích theo công bố: trung tâm thương mại 2,6 ha, trường liên cấp, công viên và hơn thế nữa.",
    tag: "Tiện ích",
  },
  {
    href: "/the-link-city/phap-ly",
    title: "Pháp lý The Link City Dầu Giây",
    description: "Sổ hồng 2026 đã cấp cho CĐT Phú Việt Tín, UBND tỉnh chỉ đạo cấp sổ, kiểm toán thông qua.",
    tag: "Pháp lý",
  },
  {
    href: "/the-link-city/tien-do",
    title: "Tiến độ xây dựng The Link City",
    description: "Cập nhật tiến độ 2 giai đoạn theo thông tin công bố ngày 23/12/2025.",
    tag: "Tiến độ",
  },
  {
    href: "/the-link-city/hinh-anh",
    title: "Hình ảnh The Link City Dầu Giây",
    description: "Ảnh thực tế hạ tầng, đường nội khu và các hạng mục đã hoàn thiện tại dự án.",
    tag: "Hình ảnh",
  },
  {
    href: "/the-link-city/bang-gia",
    title: "Bảng giá The Link City",
    description: "Thông tin giá bán và hướng dẫn liên hệ để nhận bảng giá cập nhật từ đơn vị phát triển.",
    tag: "Bảng giá",
  },
  {
    href: "/the-link-city/thanh-toan",
    title: "Phương thức thanh toán",
    description: "VietinBank chi nhánh Biên Hòa hỗ trợ tài chính tại The Link City cho cả 2 giai đoạn.",
    tag: "Thanh toán",
  },
  {
    href: "/the-link-city/faq",
    title: "Câu hỏi thường gặp về The Link City",
    description: "Giải đáp các câu hỏi phổ biến về vị trí, pháp lý, tiến độ và thông tin dự án.",
    tag: "FAQ",
  },
];

// ─────────────────────────────────────────────────────────────
// LIGHTBOX IMAGE ARRAYS
// ─────────────────────────────────────────────────────────────
const overviewImages: LightboxImage[] = [
  { src: TLC_OVERVIEW["1"], alt: "Toàn cảnh khu đô thị The Link City tại xã Dầu Giây, Đồng Nai",    caption: "Toàn cảnh dự án The Link City" },
  { src: TLC_OVERVIEW["2"], alt: "Hạ tầng kỹ thuật khu đô thị The Link City Dầu Giây",               caption: "Hạ tầng nội khu" },
  { src: TLC_OVERVIEW["3"], alt: "Cảnh quan khu đô thị The Link City tại xã Dầu Giây, Đồng Nai",     caption: "Cảnh quan dự án" },
];

const diagramImages: LightboxImage[] = [
  { src: TLC_DIAGRAM, alt: "Sơ đồ phân lô tổng thể The Link City Dầu Giây Đồng Nai", caption: "Sơ đồ phân lô tổng thể The Link City Dầu Giây · Nguồn: tài liệu dự án" },
];

const amenitiesImages: LightboxImage[] = [
  { src: TLC_AMENITIES["1"], alt: "Tiện ích nội khu The Link City Dầu Giây — hạng mục 1", caption: "Tiện ích The Link City" },
  { src: TLC_AMENITIES["2"], alt: "Tiện ích nội khu The Link City Dầu Giây — hạng mục 2", caption: "Tiện ích The Link City" },
  { src: TLC_AMENITIES["3"], alt: "Tiện ích nội khu The Link City Dầu Giây — hạng mục 3", caption: "Tiện ích The Link City" },
  { src: TLC_AMENITIES["4"], alt: "Tiện ích nội khu The Link City Dầu Giây — hạng mục 4", caption: "Tiện ích The Link City" },
  { src: TLC_AMENITIES["5"], alt: "Tiện ích nội khu The Link City Dầu Giây — hạng mục 5", caption: "Tiện ích The Link City" },
];

const realImages: LightboxImage[] = [
  { src: TLC_REAL["1"], alt: "Hình ảnh thực tế The Link City Dầu Giây",                 caption: "Hình ảnh thực tế The Link City" },
  { src: TLC_REAL["2"], alt: "Đường nội khu The Link City Dầu Giây",                    caption: "Đường nội khu The Link City" },
  { src: TLC_REAL["3"], alt: "Cảnh quan khu đô thị The Link City xã Dầu Giây",          caption: "Cảnh quan The Link City" },
  { src: TLC_REAL["4"], alt: "Hạ tầng The Link City Dầu Giây Đồng Nai",                 caption: "Hạ tầng The Link City" },
  { src: TLC_REAL["5"], alt: "Tiến độ xây dựng The Link City Dầu Giây",                 caption: "Tiến độ The Link City" },
  { src: TLC_REAL["6"], alt: "Toàn khu The Link City xã Dầu Giây nhìn từ xa",           caption: "Toàn khu The Link City" },
];

const t3ThumbImages: LightboxImage[] = [
  { src: TLC_T3_2B["a01-01"], alt: "Mặt bằng vị trí mẫu nhà T3-2b The Link City Dầu Giây", caption: "A01-01 · Mặt bằng vị trí mẫu nhà T3-2b" },
];

const t3AllImages: LightboxImage[] = [
  { src: TLC_T3_2B["a01-01"], alt: "A01-01 · Mặt bằng vị trí mẫu nhà T3-2b",    caption: "A01-01 · Mặt bằng vị trí mẫu nhà T3-2b" },
  { src: TLC_T3_2B["a01-02"], alt: "A01-02 · Bảng thông số lô đất T3-2b",        caption: "A01-02 · Bảng thông số lô đất" },
  { src: TLC_T3_2B["a02-01"], alt: "A02-01 · Mặt bằng công năng tầng 1 T3-2b",   caption: "A02-01 · Tầng 1 – Kinh doanh / Tầng hầm kỹ thuật" },
  { src: TLC_T3_2B["a02-02"], alt: "A02-02 · Mặt bằng công năng tầng 2–3 T3-2b", caption: "A02-02 · Tầng 2 – Phòng khách, bếp, ngủ · Tầng 3 – Ngủ, thờ, sân thượng" },
  { src: TLC_T3_2B["a03-01"], alt: "A03-01 · Mặt đứng trục A-C và C-A T3-2b",    caption: "A03-01 · Mặt đứng trục A-C, C-A" },
  { src: TLC_T3_2B["a03-02"], alt: "A03-02 · Mặt đứng trục 4-1 T3-2b",           caption: "A03-02 · Mặt đứng trục 4-1" },
  { src: TLC_T3_2B["a04-01"], alt: "A04-01 · Mặt cắt A04-01 T3-2b",              caption: "A04-01 · Mặt cắt A04-01" },
  { src: TLC_T3_2B["a04-02"], alt: "A04-02 · Mặt cắt A04-02 T3-2b",              caption: "A04-02 · Mặt cắt A04-02" },
];

const certificateImages: LightboxImage[] = [
  { src: TLC_CERTIFICATE, alt: "Sổ hồng thực tế The Link City – Giấy chứng nhận QSDĐ cấp cho CĐT Phú Việt Tín", caption: "Sổ hồng thực tế – GCN quyền sử dụng đất, có dấu mộc đỏ của Sở TN&MT tỉnh Đồng Nai" },
  { src: TLC_LEGAL_AS1,   alt: "Công văn pháp lý The Link City – tài liệu pháp lý thực tế",                      caption: "Tài liệu pháp lý AS1 – Công văn / xác nhận pháp lý dự án The Link City" },
];

const layoutDetailImages: LightboxImage[] = [
  { src: TLC_LAYOUT["1"], alt: "Mặt bằng phân lô chi tiết The Link City – Cụm Shophouse QL1A",         caption: "Cụm Shophouse mặt tiền Quốc lộ 1A" },
  { src: TLC_LAYOUT["2"], alt: "Mặt bằng phân lô chi tiết The Link City – Cụm Nhà phố liên kế",        caption: "Cụm Nhà phố liên kế nội khu" },
  { src: TLC_LAYOUT["3"], alt: "Mặt bằng phân lô chi tiết The Link City – Cụm Công viên và Tiện ích",  caption: "Cụm Công viên & Tiện ích cộng đồng" },
  { src: TLC_LAYOUT["4"], alt: "Mặt bằng phân lô chi tiết The Link City – Cụm Biệt thự và Shophouse",  caption: "Cụm Biệt thự & Shophouse – chi tiết lô" },
];

// ─────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
export default function TheLinkCityPage() {
  const overviewLb     = useLightbox(overviewImages);
  const diagramLb      = useLightbox(diagramImages);
  const amenitiesLb    = useLightbox(amenitiesImages);
  const realLb         = useLightbox(realImages);
  const t3Lb           = useLightbox(t3AllImages);
  const certLb         = useLightbox(certificateImages);
  const layoutDetailLb = useLightbox(layoutDetailImages);

  // ─── Widget tính lãi vay ───
  const [loanPrice,   setLoanPrice]   = useState(3000);  // triệu VNĐ
  const [loanRatio,   setLoanRatio]   = useState(70);    // %
  const [loanRate,    setLoanRate]    = useState(9);     // %/năm
  const [loanTerm,    setLoanTerm]    = useState(20);    // năm
  const [gracePeriod, setGracePeriod] = useState(24);   // tháng ân hạn gốc

  const loanAmount          = loanPrice * loanRatio / 100;
  const monthlyRate         = loanRate / 100 / 12;
  const totalMonths         = loanTerm * 12;
  const monthlyInterestOnly = loanAmount * monthlyRate;
  const remainingMonths     = totalMonths - gracePeriod;
  const monthlyAfterGrace   =
    remainingMonths > 0 && monthlyRate > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, remainingMonths)) /
        (Math.pow(1 + monthlyRate, remainingMonths) - 1)
      : loanAmount / Math.max(remainingMonths, 1);
  const ownCapital = loanPrice * (1 - loanRatio / 100);

  return (
    <>
      {/* Lightbox portals */}
      {overviewLb.LightboxPortal}
      {diagramLb.LightboxPortal}
      {amenitiesLb.LightboxPortal}
      {realLb.LightboxPortal}
      {t3Lb.LightboxPortal}
      {certLb.LightboxPortal}
      {layoutDetailLb.LightboxPortal}

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ScrollAnimator />
      <CorpHeader />
      <TLCSectionNav />

      {/* ─── SECTION 01: HERO ─── */}
      <section className="relative h-screen min-h-[640px] max-h-[900px] flex flex-col overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={TLC_HERO}
            alt="Toàn cảnh dự án The Link City tại xã Dầu Giây, Đồng Nai"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/20" />
          <div className="absolute inset-0 bg-slate-950/25" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/70 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-slate-950/55 to-transparent" />
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-400/60 to-transparent hidden lg:block" />

        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="absolute left-0 top-0 bottom-0 w-full md:w-2/3 lg:w-1/2
                            bg-gradient-to-r from-slate-950/70 to-transparent pointer-events-none" />

            <div className="mb-8 animate-fade-in">
              <Breadcrumb
                items={[
                  { label: "Dự án", href: "/#du-an" },
                  { label: "The Link City" },
                ]}
                className="text-white/50"
              />
            </div>

            <div className="flex items-center gap-3 mb-5 animate-fade-in" style={{ animationDelay: "80ms" }}>
              <div className="h-0.5 w-8 bg-amber-400" />
              <span
                className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
              >
                Dự án tại Dầu Giây · Đồng Nai
              </span>
            </div>

            <h1
              className="font-black leading-none mb-5 animate-fade-in-up"
              style={{ animationDelay: "160ms", textShadow: "0 2px 20px rgba(0,0,0,0.6), 0 0 60px rgba(0,0,0,0.4)" }}
            >
              <span className="block text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl">THE LINK</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl text-amber-400 drop-shadow-2xl">CITY</span>
            </h1>

            <div className="flex items-center gap-3 mb-5 animate-fade-in" style={{ animationDelay: "220ms" }}>
              <div className="h-px w-6 bg-white/60" />
              <span
                className="text-white/90 text-xs md:text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ textShadow: "0 1px 10px rgba(0,0,0,0.8)" }}
              >
                Tâm điểm giao thương
              </span>
              <div className="h-px w-6 bg-white/60" />
            </div>

            <p
              className="text-white/60 text-xs md:text-sm font-bold uppercase tracking-[0.15em] mb-3 animate-fade-in"
              style={{ animationDelay: "240ms" }}
            >
              Khu dân cư A1 – C1 · 1.397 sản phẩm · Shophouse · Nhà phố · Biệt thự
            </p>

            <p
              className="text-white/70 text-sm md:text-base leading-relaxed max-w-lg mb-8 animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              Tọa lạc tại ngã tư Quốc lộ 1A &amp; Quốc lộ 20, trung tâm hành chính xã Dầu Giây.
              Chủ đầu tư: Phú Việt Tín · Phát triển: Kim Oanh Land.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "380ms" }}>
              <ScrollLink
                to="tong-quan"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900
                           font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200
                           shadow-lg shadow-amber-400/40 hover:shadow-amber-400/60"
              >
                Khám phá dự án
                <ChevronRight className="w-4 h-4" />
              </ScrollLink>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25
                           text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200
                           backdrop-blur-sm"
              >
                <Phone className="w-4 h-4" />
                Liên hệ tư vấn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="relative z-10 border-t border-white/10 bg-slate-950/60 backdrop-blur-md">
          <div className="w-full px-4 md:px-8">
            <div className="flex items-stretch divide-x divide-white/10">
              {[
                { label: "Khu vực",     value: "Dầu Giây",     sub: "Đồng Nai",                         icon: "📍" },
                { label: "Sản phẩm",   value: "1.397",         sub: "Shophouse · Nhà phố · Biệt thự",   icon: "🏠" },
                { label: "Chủ đầu tư", value: "Phú Việt Tín",  sub: "Công ty TNHH Đầu tư",              icon: "🏛️" },
                { label: "Phát triển", value: "Kim Oanh Land", sub: "Kim Oanh Group",                    icon: "🏢" },
              ].map((stat) => (
                <div key={stat.label} className="flex-1 flex items-center gap-3 px-5 py-4">
                  <span className="text-xl flex-shrink-0 opacity-60 hidden md:block">{stat.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40 mb-0.5">{stat.label}</p>
                    <p className="text-sm font-black text-white leading-tight">{stat.value}</p>
                    <p className="text-[10px] text-white/50 mt-0.5 truncate">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="pb-16">

        {/* ── STICKY QUICK NAV ── */}
        <nav
          aria-label="Mục nội dung trang The Link City"
          className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-3">
              {[
                { id: "tong-quan",  label: "Tổng quan" },
                { id: "vi-tri",     label: "Vị trí" },
                { id: "san-pham",   label: "Sản phẩm" },
                { id: "mat-bang",   label: "Mặt bằng" },
                { id: "tien-ich",   label: "Tiện ích" },
                { id: "phap-ly",    label: "Pháp lý" },
                { id: "tien-do",    label: "Tiến độ" },
                { id: "thanh-toan", label: "Thanh toán" },
                { id: "hinh-anh",   label: "Hình ảnh" },
                { id: "mau-nha",    label: "Mẫu nhà" },
                { id: "chuyen-trang", label: "Chuyên trang" },
                { id: "faq",        label: "FAQ" },
              ].map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  className="flex-shrink-0 text-xs font-semibold text-slate-500 hover:text-primary-600
                             hover:bg-primary-50 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>
          </div>
        </nav>

        {/* ─── SECTION 02: THE LINK CITY LÀ GÌ? / TỔNG QUAN ─── */}
        <FadeSection id="tong-quan" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">Tổng quan dự án</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug mt-1">
                The Link City là gì?
              </h2>
              <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed max-w-3xl">
                The Link City là khu đô thị phức hợp thuộc tên quy hoạch <strong>Khu dân cư A1-C1 Dầu Giây</strong>,
                tọa lạc tại ngã tư Quốc lộ 1A và Quốc lộ 20, trung tâm hành chính xã Dầu Giây, tỉnh Đồng Nai.
                Chủ đầu tư pháp lý là Công ty TNHH Đầu tư Phú Việt Tín; Kim Oanh Land (thuộc Kim Oanh Group)
                tham gia phát triển và phân phối. Dự án cung cấp <strong>1.397 sản phẩm</strong> gồm nhà phố
                thương mại (shophouse), nhà phố liên kế và biệt thự, quy hoạch trên tổng diện tích
                khoảng 100 ha chia thành 2 giai đoạn.
              </p>
            </div>

            {/* Facts grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10 anim-stagger">
              {projectFacts.map((f) => (
                <div
                  key={f.label}
                  className={`rounded-2xl p-4 border transition-shadow hover:shadow-md
                    ${f.highlight ? "bg-amber-50 border-amber-200" : "bg-slate-50 border-slate-100"}`}
                >
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">{f.label}</p>
                  <p className={`text-sm font-bold leading-snug
                    ${f.highlight ? "text-amber-700 text-base" : "text-slate-700"}`}>
                    {f.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Overview image grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8 anim-stagger">
              {[
                { src: TLC_OVERVIEW["1"], alt: "Toàn cảnh khu đô thị The Link City tại xã Dầu Giây, Đồng Nai",  cap: "Toàn cảnh dự án",     col: "col-span-2 md:col-span-1 md:row-span-2", idx: 0 },
                { src: TLC_OVERVIEW["2"], alt: "Hạ tầng kỹ thuật khu đô thị The Link City Dầu Giây",            cap: "Hạ tầng nội khu",     col: "",                                      idx: 1 },
                { src: TLC_OVERVIEW["3"], alt: "Cảnh quan khu đô thị The Link City tại xã Dầu Giây, Đồng Nai",  cap: "Cảnh quan dự án",     col: "",                                      idx: 2 },
              ].map((img) => (
                <div
                  key={img.alt}
                  className={`relative overflow-hidden rounded-2xl bg-slate-100 group h-48 cursor-zoom-in ${img.col}`}
                  onClick={() => overviewLb.openLightbox(img.idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Phóng to: ${img.alt}`}
                  onKeyDown={(e) => e.key === "Enter" && overviewLb.openLightbox(img.idx)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-xs font-semibold">{img.cap}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note box */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 overflow-hidden anim-up">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-amber-200 bg-white">
                <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Lưu ý về vai trò các bên
                </span>
              </div>
              <div className="px-5 py-4 space-y-2">
                <p className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-800">Chủ đầu tư pháp lý:</span>{" "}
                  Công ty TNHH Đầu tư Phú Việt Tín — đơn vị sở hữu và triển khai dự án theo quy định pháp luật.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <span className="font-semibold text-slate-800">Đơn vị phát triển &amp; phân phối:</span>{" "}
                  Kim Oanh Land (thuộc Kim Oanh Group) — tham gia phát triển dự án, đầu tư tiện ích cảnh quan và phân phối sản phẩm.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tổng diện tích ~100 ha là tổng hợp từ GĐ1 (~53 ha) và GĐ2 (~47 ha) theo thông tin công bố.
                </p>
              </div>
              <div className="flex items-center justify-between px-5 py-3 border-t border-amber-200 bg-white">
                <p className="text-[11px] text-slate-400">Nguồn: Kim Oanh Group · Báo Đồng Nai (23/12/2025)</p>
                <Link
                  href="/the-link-city/phap-ly"
                  className="text-[11px] font-bold text-primary-600 hover:text-primary-700
                             flex items-center gap-1 transition-colors flex-shrink-0 ml-4"
                >
                  Xem pháp lý →
                </Link>
              </div>
            </div>
          </div>
        </FadeSection>

        {/* ─── SECTION 03: QUY MÔ DỰ ÁN ─── */}
        <FadeSection id="san-pham" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">Quy mô &amp; Sản phẩm</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
                Cơ cấu sản phẩm The Link City
              </h2>
              <p className="mt-2 text-slate-500 text-sm md:text-base">
                Dự án triển khai theo 2 giai đoạn với 3 dòng sản phẩm chính, tổng cộng 1.397 sản phẩm.
              </p>
            </div>

            {/* 3 product types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 anim-stagger">
              {[
                {
                  type: "Nhà phố thương mại",
                  sub: "Shophouse",
                  icon: Store,
                  color: "amber",
                  desc: "Sản phẩm kết hợp kinh doanh và để ở, mặt tiền đường nội khu và tuyến thương mại chính nội khu.",
                },
                {
                  type: "Nhà phố liên kế",
                  sub: "Townhouse",
                  icon: Building2,
                  color: "primary",
                  desc: "Nhà phố liên kế nội khu, phù hợp nhu cầu an cư và đầu tư lâu dài tại vùng Dầu Giây.",
                },
                {
                  type: "Biệt thự",
                  sub: "Villa",
                  icon: Layers,
                  color: "slate",
                  desc: "Sản phẩm cao cấp với không gian riêng tư, diện tích và thiết kế khác biệt so với nhà phố.",
                },
              ].map((p) => (
                <div key={p.type} className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow anim-card">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3
                    ${p.color === "amber" ? "bg-amber-50" : p.color === "primary" ? "bg-primary-50" : "bg-slate-100"}`}>
                    <p.icon className={`w-5 h-5
                      ${p.color === "amber" ? "text-amber-600" : p.color === "primary" ? "text-primary-600" : "text-slate-600"}`} />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{p.sub}</p>
                  <h3 className="font-bold text-slate-800 text-base mb-2">{p.type}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                  <p className="text-[10px] text-slate-400 mt-3 italic">Thông số diện tích, số tầng: liên hệ để biết chi tiết</p>
                </div>
              ))}
            </div>

            {/* 2 phases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 anim-stagger">
              {[
                {
                  phase: "Giai đoạn 1", area: "~53 ha",
                  status: "Hạ tầng kỹ thuật hoàn thiện",
                  legal: "Một số sản phẩm đã cấp GCN",
                  badge: "bg-green-100 text-green-700 border-green-200",
                },
                {
                  phase: "Giai đoạn 2", area: "~47 ha",
                  status: "Hạ tầng ~55% theo GPXD",
                  legal: "Đang hoàn thiện điều kiện cấp GCN",
                  badge: "bg-amber-100 text-amber-700 border-amber-200",
                },
              ].map((ph) => (
                <div key={ph.phase} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 anim-card">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-800">{ph.phase}</h3>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${ph.badge}`}>{ph.area}</span>
                  </div>
                  <p className="text-xs text-slate-600 mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                    Tiến độ: {ph.status}
                  </p>
                  <p className="text-xs text-slate-600 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    Pháp lý: {ph.legal}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-3">Theo thông tin công bố ngày 23/12/2025</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 mb-4 anim-up">
              Thông số chi tiết từng sản phẩm (diện tích, số tầng) chưa có nguồn xác minh — vui lòng liên hệ để biết thêm.
            </p>
          </div>
        </FadeSection>

        {/* ─── SECTION 04: VỊ TRÍ ─── */}
        <FadeSection id="vi-tri" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">Vị trí</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
                Vị trí The Link City Dầu Giây
              </h2>
              <p className="mt-2 text-slate-500 text-sm md:text-base">
                Ngay tại ngã tư Quốc lộ 1A và Quốc lộ 20, trung tâm hành chính xã Dầu Giây.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 anim-up anim-delay-100">
              <div className="space-y-3">
                {[
                  { icon: MapPin,    title: "Địa chỉ hành chính",  desc: "Xã Dầu Giây, tỉnh Đồng Nai" },
                  { icon: Landmark,  title: "Vị trí giao thông",   desc: "Ngã tư Quốc lộ 1A và Quốc lộ 20" },
                  { icon: Building2, title: "Khu vực",             desc: "Trung tâm hành chính xã Dầu Giây" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-slate-200">
                    <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">{item.title}</p>
                      <p className="text-sm font-semibold text-slate-800">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-800 text-sm mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary-600" />
                  Kết nối giao thông khu vực
                </h3>
                <ul className="space-y-2.5 text-sm">
                  {[
                    "Quốc lộ 1A — trục Bắc – Nam Việt Nam",
                    "Quốc lộ 20 — kết nối Dầu Giây – Đà Lạt",
                    "Cao tốc TP.HCM – Long Thành – Dầu Giây",
                    "Dầu Giây là điểm giao thoa của nhiều tuyến đường huyết mạch phía Đông Nam",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-slate-400 mt-4 pt-3 border-t border-slate-100">
                  Khoảng cách và thời gian di chuyển không được đăng do chưa có nguồn xác minh.
                </p>
              </div>
            </div>

            <div className="flex justify-center anim-up">
              <Link
                href="/the-link-city/vi-tri"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white
                           font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                Xem chi tiết vị trí The Link City
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeSection>

        {/* ─── SECTION 06: SƠ ĐỒ MẶT BẰNG TỔNG THỂ ─── */}
        <FadeSection id="mat-bang" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">

            {/* Header */}
            <div className="mb-8 anim-up">
              <span className="section-label">Sơ đồ mặt bằng</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
                Mặt bằng phân lô The Link City
              </h2>
              <p className="mt-2 text-slate-500 text-sm md:text-base">
                Toàn bộ sơ đồ phân lô tổng thể và bản đồ chi tiết từng cụm sản phẩm — click vào ảnh để phóng to.
              </p>
            </div>

            {/* ── Sơ đồ tổng thể — click phóng to ── */}
            <div
              className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 mb-8 anim-up cursor-zoom-in group shadow-lg"
              onClick={() => diagramLb.openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to sơ đồ phân lô tổng thể The Link City"
              onKeyDown={(e) => e.key === "Enter" && diagramLb.openLightbox(0)}
            >
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={TLC_DIAGRAM}
                  alt="Sơ đồ phân lô tổng thể The Link City Dầu Giây Đồng Nai"
                  title="Sơ đồ phân lô tổng thể The Link City Dầu Giây"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                {/* Overlay zoom hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 text-sm font-bold text-slate-700 shadow-xl flex items-center gap-2">
                    <ZoomIn className="w-5 h-5 text-primary-600" /> Click để xem phóng to toàn màn hình
                  </span>
                </div>
                {/* Watermark badge */}
                <div className="absolute top-3 right-3 bg-amber-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full shadow">
                  🗺 SƠ ĐỒ TỔNG THỂ
                </div>
              </div>
              <div className="px-5 py-3 bg-white border-t border-slate-100 flex items-center justify-between">
                <p className="text-xs text-slate-500 italic">
                  Sơ đồ phân lô tổng thể The Link City Dầu Giây · Nguồn: tài liệu dự án CĐT Phú Việt Tín
                </p>
                <span className="text-xs font-bold text-primary-600 flex-shrink-0 ml-3 flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5" /> Phóng to
                </span>
              </div>
            </div>

            {/* ── Tiêu đề cụm chi tiết ── */}
            <div className="mb-5 anim-up">
              <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-primary-600" />
                Bản đồ chi tiết từng cụm sản phẩm
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Click vào từng ảnh để xem phóng to và đọc chi tiết lô đất.
              </p>
            </div>

            {/* ── Grid 4 ảnh chi tiết cụm ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 anim-stagger">
              {[
                {
                  idx: 0,
                  label: "Cụm Shophouse QL1A",
                  sub:   "Nhà phố thương mại · Mặt tiền Quốc lộ 1A",
                  color: "amber",
                  icon:  Store,
                },
                {
                  idx: 1,
                  label: "Cụm Nhà phố liên kế",
                  sub:   "Townhouse nội khu · Đường nội bộ rộng",
                  color: "primary",
                  icon:  Home,
                },
                {
                  idx: 2,
                  label: "Cụm Công viên & Tiện ích",
                  sub:   "Công viên cảnh quan · Quảng trường cộng đồng",
                  color: "green",
                  icon:  Trees,
                },
                {
                  idx: 3,
                  label: "Cụm Biệt thự & Shophouse",
                  sub:   "Villa & Shophouse · Chi tiết phân lô",
                  color: "slate",
                  icon:  Building2,
                },
              ].map((cluster) => (
                <div
                  key={cluster.idx}
                  className="group rounded-2xl overflow-hidden border border-slate-200 bg-white
                             hover:shadow-lg transition-all duration-300 cursor-zoom-in"
                  onClick={() => layoutDetailLb.openLightbox(cluster.idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Phóng to: ${cluster.label}`}
                  onKeyDown={(e) => e.key === "Enter" && layoutDetailLb.openLightbox(cluster.idx)}
                >
                  {/* Ảnh */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={TLC_LAYOUT[String(cluster.idx + 1)]}
                      alt={`${cluster.label} — Mặt bằng chi tiết The Link City Dầu Giây`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-slate-700 shadow flex items-center gap-1.5">
                        <ZoomIn className="w-3.5 h-3.5" /> Phóng to
                      </span>
                    </div>
                  </div>
                  {/* Label */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0
                        ${cluster.color === "amber"   ? "bg-amber-50"   : ""}
                        ${cluster.color === "primary" ? "bg-primary-50" : ""}
                        ${cluster.color === "green"   ? "bg-green-50"   : ""}
                        ${cluster.color === "slate"   ? "bg-slate-100"  : ""}`}>
                        <cluster.icon className={`w-4 h-4
                          ${cluster.color === "amber"   ? "text-amber-600"   : ""}
                          ${cluster.color === "primary" ? "text-primary-600" : ""}
                          ${cluster.color === "green"   ? "text-green-600"   : ""}
                          ${cluster.color === "slate"   ? "text-slate-500"   : ""}`} />
                      </div>
                      <p className="font-bold text-slate-800 text-sm leading-snug">{cluster.label}</p>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug pl-9">{cluster.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sơ đồ tổng thể PDF download */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5 mb-6 anim-up flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-800 text-sm mb-1">Tải sơ đồ phân lô dạng PDF</p>
                <p className="text-xs text-slate-500">File SƠ ĐỒ THE LINK CITY DẦU GIÂY — độ phân giải cao, in được</p>
              </div>
              <div className="flex flex-wrap gap-2 flex-shrink-0">
                <a
                  href="/the%20link/diagram/S%C6%A0%20%C4%90%E1%BB%92%20THE%20LINK%20CITY%20D%E1%BA%A6U%20GI%C3%82Y.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white
                             font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  Tải sơ đồ PDF
                </a>
                <Link
                  href="/the-link-city/mat-bang"
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50
                             text-slate-700 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
                >
                  Xem chuyên trang mặt bằng
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeSection>

        {/* ─── SECTION 07: TIỆN ÍCH ─── */}
        <FadeSection id="tien-ich" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">Tiện ích</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
                Hệ tiện ích The Link City
              </h2>
              <p className="mt-2 text-slate-500 text-sm md:text-base">
                50 tiện ích theo thông tin công bố, trong đó có trung tâm thương mại 2,6 ha và trường liên cấp.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-8 anim-stagger">
              {amenitiesHighlight.map((a) => (
                <div key={a.label} className="bg-white rounded-2xl border border-slate-200 p-4 text-center hover:shadow-md transition-shadow anim-card">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-2.5">
                    <a.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="text-xs font-semibold text-slate-700 leading-snug">{a.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8 anim-stagger">
              {/* Ảnh 0 — infographic tổng quan tiện ích, chiếm full hàng */}
              <div
                className="col-span-2 relative rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden anim-img-wrap cursor-zoom-in group"
                onClick={() => amenitiesLb.openLightbox(0)}
                role="button" tabIndex={0}
                aria-label="Phóng to tiện ích 1"
                onKeyDown={(e) => e.key === "Enter" && amenitiesLb.openLightbox(0)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={TLC_AMENITIES["1"]}
                  alt="Hệ tiện ích đa dạng The Link City Dầu Giây — sơ đồ tổng quan"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-semibold text-slate-700 shadow">
                    🔍 Phóng to
                  </span>
                </div>
              </div>

              {/* Ảnh 2–5 — collage theo nhóm tiện ích, 2 cột */}
              {[2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="relative rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden anim-img-wrap cursor-zoom-in group"
                  onClick={() => amenitiesLb.openLightbox(i - 1)}
                  role="button" tabIndex={0}
                  aria-label={`Phóng to tiện ích ${i}`}
                  onKeyDown={(e) => e.key === "Enter" && amenitiesLb.openLightbox(i - 1)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={TLC_AMENITIES[String(i)]}
                    alt={`Tiện ích nội khu The Link City Dầu Giây — hạng mục ${i}`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-semibold text-slate-700 shadow">
                      🔍 Phóng to
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 mb-6 anim-up">
              <p className="text-xs text-amber-800 leading-relaxed">
                <span className="font-bold">Lưu ý:</span> Danh sách tiện ích theo thông tin công bố tại sự kiện 23/12/2025.
                Các tiện ích đang ở các giai đoạn hoàn thiện khác nhau.
                Trung tâm thương mại 2,6 ha đã hoàn tất pháp lý đất, dự kiến triển khai xây dựng trong năm 2026.
              </p>
            </div>

            <div className="flex justify-center anim-up">
              <Link
                href="/the-link-city/tien-ich"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white
                           font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                Xem toàn bộ hệ tiện ích
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeSection>

        {/* ─── SECTION 08: PHÁP LÝ ─── */}
        <FadeSection id="phap-ly" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">

            {/* Header */}
            <div className="mb-10 anim-up">
              <span className="section-label">Pháp lý</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
                Pháp lý The Link City — Sổ hồng thực tế
              </h2>
              <p className="mt-2 text-slate-500 text-sm md:text-base max-w-3xl">
                The Link City có đầy đủ hồ sơ pháp lý: Sổ hồng từng nền cấp cho CĐT Phú Việt Tín,
                hoàn thành 100% tiền sử dụng đất với Cục Thuế Đồng Nai và quy hoạch 1/500 phê duyệt.
              </p>
            </div>

            {/* ── HERO: Ảnh sổ hồng nổi bật nhất ── */}
            <div className="mb-10 anim-up">
              <div className="rounded-3xl overflow-hidden border-2 border-green-200 shadow-xl bg-white">
                {/* Badge nổi bật */}
                <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-4 flex items-center gap-3">
                  <BadgeCheck className="w-6 h-6 text-white flex-shrink-0" />
                  <div>
                    <p className="text-white font-black text-base tracking-wide">
                      SỔ HỒNG THỰC TẾ — CÓ DẤU MỘC ĐỎ CỦA SỞ TN&amp;MT ĐỒNG NAI
                    </p>
                    <p className="text-green-100 text-xs mt-0.5">
                      Giấy chứng nhận quyền sử dụng đất từng nền cấp cho CĐT Phú Việt Tín · Ảnh chụp thực tế tại Sở
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                  {/* Ảnh sổ hồng */}
                  <div
                    className="relative cursor-zoom-in group bg-slate-50 min-h-[280px] flex items-center justify-center"
                    onClick={() => certLb.openLightbox(0)}
                    role="button"
                    tabIndex={0}
                    aria-label="Phóng to ảnh sổ hồng thực tế The Link City"
                    onKeyDown={(e) => e.key === "Enter" && certLb.openLightbox(0)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={TLC_CERTIFICATE}
                      alt="Sổ hồng thực tế The Link City – Giấy chứng nhận QSDĐ cấp cho CĐT Phú Việt Tín, có dấu mộc đỏ Sở TN&MT Đồng Nai"
                      className="w-full h-full object-contain max-h-[380px] transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold text-slate-700 shadow-lg flex items-center gap-2">
                        <ZoomIn className="w-4 h-4" /> Phóng to xem chi tiết
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-green-600/90 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      📷 Ảnh thực tế · Có dấu mộc đỏ
                    </div>
                  </div>
                  {/* Ảnh pháp lý AS1 */}
                  <div
                    className="relative cursor-zoom-in group bg-slate-50 min-h-[280px] flex items-center justify-center"
                    onClick={() => certLb.openLightbox(1)}
                    role="button"
                    tabIndex={0}
                    aria-label="Phóng to tài liệu pháp lý The Link City"
                    onKeyDown={(e) => e.key === "Enter" && certLb.openLightbox(1)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={TLC_LEGAL_AS1}
                      alt="Tài liệu pháp lý The Link City – Công văn xác nhận pháp lý dự án"
                      className="w-full h-full object-contain max-h-[380px] transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold text-slate-700 shadow-lg flex items-center gap-2">
                        <ZoomIn className="w-4 h-4" /> Phóng to xem chi tiết
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-blue-600/90 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      📄 Công văn pháp lý
                    </div>
                  </div>
                </div>
                <div className="px-6 py-3 bg-green-50 border-t border-green-100 flex items-center justify-between">
                  <p className="text-xs text-green-700 font-semibold">
                    ✅ Xấp sổ hồng thực tế — Nguồn: CĐT Phú Việt Tín · Sở TN&amp;MT tỉnh Đồng Nai
                  </p>
                  <a
                    href="/the-link-city/phap-ly"
                    className="text-xs font-bold text-green-700 hover:text-green-800 flex items-center gap-1 flex-shrink-0 ml-4"
                  >
                    Xem thêm →
                  </a>
                </div>
              </div>
            </div>

            {/* ── TIMELINE các mốc pháp lý đắt giá ── */}
            <div className="mb-10 anim-up">
              <h3 className="font-bold text-slate-800 text-lg mb-6 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-primary-600" />
                Timeline các mốc pháp lý quan trọng
              </h3>
              <div className="relative">
                {/* Đường kẻ dọc */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-green-400 to-slate-200 hidden md:block" />
                <div className="space-y-4">
                  {[
                    {
                      year: "2022",
                      color: "primary",
                      icon: "📋",
                      title: "Quyết định phê duyệt quy hoạch 1/500",
                      desc: "QĐ số 2022 — Quy hoạch chi tiết 1/500 Khu dân cư A1-C1 Dầu Giây được UBND tỉnh Đồng Nai phê duyệt chính thức. Đây là nền tảng pháp lý cơ bản nhất của dự án.",
                      badge: "Quy hoạch 1/500",
                      badgeColor: "bg-primary-100 text-primary-700 border-primary-200",
                    },
                    {
                      year: "QĐ 3963",
                      color: "amber",
                      icon: "🏗️",
                      title: "Quyết định giao đất số 3963",
                      desc: "UBND tỉnh Đồng Nai ban hành Quyết định giao đất cho Công ty TNHH Đầu tư Phú Việt Tín để triển khai dự án theo quy hoạch được duyệt.",
                      badge: "Giao đất CĐT",
                      badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
                    },
                    {
                      year: "7259",
                      color: "green",
                      icon: "💰",
                      title: "Xác nhận hoàn thành nộp tiền sử dụng đất — Biên lai 7259",
                      desc: "Cục Thuế tỉnh Đồng Nai xác nhận CĐT Phú Việt Tín đã hoàn thành 100% nghĩa vụ tài chính tiền sử dụng đất. Đây là điều kiện tiên quyết để cấp sổ hồng từng nền.",
                      badge: "100% tiền SDĐ",
                      badgeColor: "bg-green-100 text-green-700 border-green-200",
                    },
                    {
                      year: "2025",
                      color: "green",
                      icon: "📕",
                      title: "Sổ hồng từng nền — Cấp cho CĐT Phú Việt Tín",
                      desc: "Sở TN&MT tỉnh Đồng Nai cấp Giấy chứng nhận QSDĐ (sổ hồng) từng nền riêng lẻ cho Chủ đầu tư Phú Việt Tín. Có dấu mộc đỏ chính thức của Sở. VietinBank Biên Hòa xác nhận 'rất an tâm về pháp lý dự án'.",
                      badge: "Sổ hồng thực tế ✅",
                      badgeColor: "bg-green-100 text-green-700 border-green-200",
                    },
                    {
                      year: "2505/2026",
                      color: "blue",
                      icon: "🏛️",
                      title: "Công văn UBND tỉnh số 2505 — Chỉ đạo cấp sổ cho khách hàng",
                      desc: "UBND tỉnh Đồng Nai ban hành Công văn số 2505/UBND-KTN ngày 13/02/2026, chỉ đạo Sở NN&MT đẩy nhanh tiến độ cấp Giấy chứng nhận QSDĐ cho từng khách hàng mua sản phẩm tại The Link City.",
                      badge: "CV 2505/UBND",
                      badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 md:gap-6 pl-0 md:pl-12 relative">
                      {/* Dot trên timeline */}
                      <div className={`absolute left-3.5 top-5 w-3 h-3 rounded-full border-2 border-white shadow-sm hidden md:block
                        ${item.color === "primary" ? "bg-primary-500"
                          : item.color === "amber"   ? "bg-amber-400"
                          : item.color === "green"   ? "bg-green-500"
                          : "bg-blue-500"}`}
                      />
                      <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{item.icon}</span>
                            <p className="font-bold text-slate-800 text-sm leading-snug">{item.title}</p>
                          </div>
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border flex-shrink-0 whitespace-nowrap ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                        <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-wider">Mốc: {item.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Nút tải bộ file pháp lý PDF ── */}
            <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 p-6 mb-8 anim-up">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-black text-white text-base mb-1 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Tải trọn bộ file pháp lý PDF
                  </h3>
                  <p className="text-primary-100 text-sm">
                    Bao gồm: QĐ 1/500 · QĐ giao đất 3963 · Xác nhận nộp thuế 7259 · Công văn UBND 2505 · Sổ hồng CĐT
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 flex-shrink-0">
                  <a
                    href="/the%20link/14.2026_Ch%C3%ADnh%20s%C3%A1ch%20cho%20kh%C3%A1ch%20h%C3%A0ng%20-%20D%E1%BB%B1%20%C3%A1n%20Khu%20d%C3%A2n%20c%C6%B0%20A1-C1-%C4%90%C3%B4%20th%E1%BB%8B%20D%E1%BA%A7u%20Gi%C3%A2y.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold text-sm
                               px-5 py-2.5 rounded-xl hover:bg-primary-50 transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    Chính sách khách hàng 2026
                  </a>
                  <a
                    href="/the%20link/2505_CV_CV_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-sm
                               px-5 py-2.5 rounded-xl border border-white/30 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    CV UBND 2505/2026
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm
                               px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Nhận toàn bộ hồ sơ
                  </a>
                </div>
              </div>
            </div>

            {/* Lưu ý + link chuyên trang */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 mb-6 anim-up">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-700 mb-1">Lưu ý quan trọng</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Thông tin pháp lý tổng hợp từ nguồn công bố. Tình trạng GCN từng sản phẩm cụ thể cần kiểm tra
                    trực tiếp trước khi giao dịch. Website không cung cấp tư vấn pháp lý.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-2">Nguồn: Báo Đồng Nai · Kim Oanh Group · 23/12/2025 · UBND tỉnh Đồng Nai 13/02/2026</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center anim-up">
              <Link
                href="/the-link-city/phap-ly"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white
                           font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                Xem hồ sơ pháp lý đầy đủ
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50
                           text-slate-700 font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Tư vấn pháp lý trực tiếp
              </a>
            </div>
          </div>
        </FadeSection>

        {/* ─── SECTION 09: TIẾN ĐỘ ─── */}
        <FadeSection id="tien-do" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-6 anim-up">
              <span className="section-label">Tiến độ</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
                Tiến độ xây dựng The Link City
              </h2>
            </div>

            <div className="rounded-2xl bg-blue-50 border border-blue-200 p-4 mb-8 flex items-start gap-3 anim-up">
              <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-blue-800 leading-relaxed">
                <span className="font-bold">Lưu ý về thời điểm dữ liệu:</span> Thông tin tiến độ dưới đây được tổng hợp
                theo nguồn công bố ngày <strong>23/12/2025</strong>. Hiện tại là tháng 9/2026 — tình trạng thực tế có thể
                đã thay đổi. Vui lòng liên hệ để cập nhật tiến độ mới nhất.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 anim-stagger">
              {/* GĐ1 */}
              <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden anim-card">
                <div className="px-5 py-3.5 bg-green-50 border-b border-green-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-green-800">Giai đoạn 1 · ~53 ha</h3>
                    <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-full border border-green-200">
                      Hạ tầng hoàn thiện
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-3 text-sm">
                  {[
                    { item: "Hạ tầng kỹ thuật",                  status: "Hoàn thiện, đưa vào sử dụng" },
                    { item: "Vỉa hè",                             status: "Hoàn thiện" },
                    { item: "Một số GCN quyền sử dụng đất",       status: "Đã cấp" },
                    { item: "Trạm xử lý nước thải",               status: "Khánh thành 25/12/2025 (kế hoạch)" },
                  ].map((r) => (
                    <div key={r.item} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 bg-green-500 flex items-center justify-center">
                        <span className="text-white text-[8px] font-black">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-700">{r.item}</p>
                        <p className="text-xs text-slate-500">{r.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-slate-100 bg-slate-50">
                  <p className="text-[11px] text-slate-400">Theo thông tin công bố ngày 23/12/2025</p>
                </div>
              </div>

              {/* GĐ2 */}
              <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden anim-card">
                <div className="px-5 py-3.5 bg-amber-50 border-b border-amber-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-amber-800">Giai đoạn 2 · ~47 ha</h3>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200">
                      ~55% hạ tầng
                    </span>
                  </div>
                </div>
                <div className="p-5 space-y-3 text-sm">
                  {[
                    { item: "Hạ tầng kỹ thuật",                 status: "~55% theo GPXD (dự kiến hoàn thiện ~9 tháng)" },
                    { item: "Điện trung thế & chiếu sáng",       status: "Đang nâng cấp, bàn giao trước Tết 2026 (kế hoạch)" },
                    { item: "Hệ thống cây xanh",                 status: "Dự kiến Q1-2026" },
                    { item: "Trung tâm thương mại 2,6 ha",       status: "Pháp lý hoàn tất, dự kiến xây dựng 2026" },
                  ].map((r) => (
                    <div key={r.item} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 bg-amber-200 flex items-center justify-center">
                        <span className="text-amber-700 text-[8px] font-black">~</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-700">{r.item}</p>
                        <p className="text-xs text-slate-500">{r.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-slate-100 bg-slate-50">
                  <p className="text-[11px] text-slate-400">Dự kiến theo kế hoạch tại 23/12/2025 · Nhà thầu: Tài Nguyên Xanh</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center anim-up">
              <Link
                href="/the-link-city/tien-do"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white
                           font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                Xem chi tiết tiến độ
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeSection>

        {/* ─── SECTION 10b: THANH TOÁN & WIDGET TÍNH LÃI VAY ─── */}
        <FadeSection id="thanh-toan" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">

            {/* Header */}
            <div className="mb-10 anim-up">
              <span className="section-label">Thanh toán</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
                Tiến độ thanh toán &amp; Công cụ tính lãi vay
              </h2>
              <p className="mt-2 text-slate-500 text-sm md:text-base max-w-3xl">
                Bảng tiến độ thanh toán chuẩn cho đất nền &amp; nhà phố, kèm công cụ tính lãi vay
                tương tác — kéo thanh trượt để tính ngay số tiền trả hàng tháng với ân hạn gốc 24 tháng.
              </p>
            </div>

            {/* ── BẢNG TIẾN ĐỘ THANH TOÁN ── */}
            <div className="mb-12 anim-up">
              <h3 className="font-bold text-slate-800 text-lg mb-5 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary-600" />
                Bảng tiến độ thanh toán chuẩn
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Đất nền */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <div className="px-5 py-3.5 bg-amber-50 border-b border-amber-100 flex items-center justify-between">
                    <h4 className="font-bold text-amber-800 flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Đất nền (Giai đoạn 1 &amp; 2)
                    </h4>
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full">
                      Vốn tự có 30%
                    </span>
                  </div>
                  <div className="bg-white">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-100">
                          <th className="text-left px-4 py-2.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider w-10">Đợt</th>
                          <th className="text-left px-4 py-2.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Mốc thanh toán</th>
                          <th className="text-right px-4 py-2.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider w-16">Tỷ lệ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {[
                          { dot: 1, milestone: "Ký HĐMB",                          pct: "30%", hl: true },
                          { dot: 2, milestone: "Sau ký HĐMB 90 ngày",              pct: "20%", hl: false },
                          { dot: 3, milestone: "Sau đợt 2 · 90 ngày",              pct: "20%", hl: false },
                          { dot: 4, milestone: "Sau đợt 3 · 90 ngày",              pct: "10%", hl: false },
                          { dot: 5, milestone: "Bàn giao sổ hồng / công chứng",    pct: "20%", hl: true },
                        ].map((row) => (
                          <tr key={row.dot} className={`hover:bg-slate-50/60 transition-colors ${row.hl ? "bg-amber-50/40" : ""}`}>
                            <td className="px-4 py-3">
                              <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-900 text-[10px] font-black flex items-center justify-center">
                                {row.dot}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-slate-700 text-xs leading-snug">{row.milestone}</td>
                            <td className="px-4 py-3 text-right font-black text-amber-700">{row.pct}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="border-t-2 border-amber-200 bg-amber-50">
                          <td colSpan={2} className="px-4 py-3 font-bold text-slate-700 text-sm">Tổng cộng</td>
                          <td className="px-4 py-3 text-right font-black text-amber-700 text-base">100%</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="px-5 py-3 bg-slate-50 border-t border-slate-100">
                    <p className="text-[11px] text-slate-400">Ngân hàng hỗ trợ 70% · VietinBank Biên Hòa · Ân hạn gốc 24 tháng</p>
                  </div>
                </div>

                {/* Nhà phố & Shophouse */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <div className="px-5 py-3.5 bg-primary-50 border-b border-primary-100 flex items-center justify-between">
                    <h4 className="font-bold text-primary-800 flex items-center gap-2">
                      <Building2 className="w-4 h-4" /> Nhà phố &amp; Shophouse
                    </h4>
                    <span className="text-[10px] font-bold bg-primary-100 text-primary-700 border border-primary-200 px-2.5 py-1 rounded-full">
                      Vay tới 70%
                    </span>
                  </div>
                  <div className="bg-white">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-100">
                          <th className="text-left px-4 py-2.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider w-10">Đợt</th>
                          <th className="text-left px-4 py-2.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">Mốc thanh toán</th>
                          <th className="text-right px-4 py-2.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider w-16">Tỷ lệ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {[
                          { dot: 1, milestone: "Đặt cọc giữ chỗ",               pct: "5%",  hl: false },
                          { dot: 2, milestone: "Ký HĐMB",                        pct: "25%", hl: true },
                          { dot: 3, milestone: "Sau ký HĐMB 90 ngày",            pct: "20%", hl: false },
                          { dot: 4, milestone: "Sau đợt 3 · 90 ngày",            pct: "20%", hl: false },
                          { dot: 5, milestone: "Sau đợt 4 · 90 ngày",            pct: "10%", hl: false },
                          { dot: 6, milestone: "Bàn giao nhà / công chứng",      pct: "20%", hl: true },
                        ].map((row) => (
                          <tr key={row.dot} className={`hover:bg-slate-50/60 transition-colors ${row.hl ? "bg-primary-50/40" : ""}`}>
                            <td className="px-4 py-3">
                              <span className="w-6 h-6 rounded-full bg-primary-500 text-white text-[10px] font-black flex items-center justify-center">
                                {row.dot}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-slate-700 text-xs leading-snug">{row.milestone}</td>
                            <td className="px-4 py-3 text-right font-black text-primary-700">{row.pct}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="border-t-2 border-primary-200 bg-primary-50">
                          <td colSpan={2} className="px-4 py-3 font-bold text-slate-700 text-sm">Tổng cộng</td>
                          <td className="px-4 py-3 text-right font-black text-primary-700 text-base">100%</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="px-5 py-3 bg-slate-50 border-t border-slate-100">
                    <p className="text-[11px] text-slate-400">Chiết khấu thanh toán sớm ~16%/năm · Liên hệ để biết chi tiết</p>
                  </div>
                </div>
              </div>

              {/* Nút tải bảng dự toán Excel */}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white
                             font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  Tải bảng dự toán dòng tiền (Excel)
                </a>
                <a
                  href="/the%20link/14.2026_Ch%C3%ADnh%20s%C3%A1ch%20cho%20kh%C3%A1ch%20h%C3%A0ng%20-%20D%E1%BB%B1%20%C3%A1n%20Khu%20d%C3%A2n%20c%C6%B0%20A1-C1-%C4%90%C3%B4%20th%E1%BB%8B%20D%E1%BA%A7u%20Gi%C3%A2y.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50
                             text-slate-700 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Chính sách khách hàng 2026 (PDF)
                </a>
              </div>
            </div>

            {/* ── WIDGET TÍNH LÃI VAY INTERACTIVE ── */}
            <div className="rounded-3xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white overflow-hidden shadow-lg anim-up">
              {/* Header widget */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-5">
                <div className="flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-white flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-black text-base">Bảng tính lãi vay &amp; dòng tiền trả góp</h3>
                    <p className="text-primary-100 text-xs mt-0.5">Kéo thanh trượt để tính ngay — ân hạn gốc 24 tháng từ VietinBank</p>
                  </div>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Cột trái: thanh trượt */}
                <div className="space-y-6">

                  {/* Giá trị bất động sản */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-bold text-slate-700">Giá trị bất động sản</label>
                      <span className="text-primary-700 font-black text-base">{loanPrice.toLocaleString("vi-VN")} triệu</span>
                    </div>
                    <input
                      type="range" min={500} max={10000} step={100}
                      value={loanPrice}
                      onChange={(e) => setLoanPrice(Number(e.target.value))}
                      className="w-full h-2 bg-primary-200 rounded-full appearance-none cursor-pointer accent-primary-600"
                      aria-label="Giá trị bất động sản"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>500 triệu</span><span>10 tỷ</span>
                    </div>
                  </div>

                  {/* Tỷ lệ vay */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-bold text-slate-700">Tỷ lệ vay ngân hàng</label>
                      <span className="text-primary-700 font-black text-base">{loanRatio}%</span>
                    </div>
                    <input
                      type="range" min={10} max={70} step={5}
                      value={loanRatio}
                      onChange={(e) => setLoanRatio(Number(e.target.value))}
                      className="w-full h-2 bg-primary-200 rounded-full appearance-none cursor-pointer accent-primary-600"
                      aria-label="Tỷ lệ vay ngân hàng"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>10%</span><span className="text-primary-500 font-bold">Tối đa 70%</span>
                    </div>
                  </div>

                  {/* Lãi suất */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-bold text-slate-700">Lãi suất (%/năm)</label>
                      <span className="text-primary-700 font-black text-base">{loanRate}%</span>
                    </div>
                    <input
                      type="range" min={6} max={14} step={0.5}
                      value={loanRate}
                      onChange={(e) => setLoanRate(Number(e.target.value))}
                      className="w-full h-2 bg-primary-200 rounded-full appearance-none cursor-pointer accent-primary-600"
                      aria-label="Lãi suất năm"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>6%</span><span>14%</span>
                    </div>
                  </div>

                  {/* Thời hạn vay */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-bold text-slate-700">Thời hạn vay</label>
                      <span className="text-primary-700 font-black text-base">{loanTerm} năm</span>
                    </div>
                    <input
                      type="range" min={5} max={30} step={1}
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full h-2 bg-primary-200 rounded-full appearance-none cursor-pointer accent-primary-600"
                      aria-label="Thời hạn vay"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>5 năm</span><span>30 năm</span>
                    </div>
                  </div>

                  {/* Ân hạn nợ gốc */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-bold text-slate-700">Ân hạn nợ gốc</label>
                      <span className="text-amber-600 font-black text-base">{gracePeriod} tháng</span>
                    </div>
                    <input
                      type="range" min={0} max={36} step={6}
                      value={gracePeriod}
                      onChange={(e) => setGracePeriod(Number(e.target.value))}
                      className="w-full h-2 bg-amber-200 rounded-full appearance-none cursor-pointer accent-amber-500"
                      aria-label="Ân hạn nợ gốc"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>0 tháng</span>
                      <span className="text-amber-500 font-bold">VietinBank hỗ trợ 24 tháng</span>
                    </div>
                  </div>
                </div>

                {/* Cột phải: kết quả */}
                <div className="space-y-4">

                  {/* Summary cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Vốn tự có</p>
                      <p className="text-xl font-black text-slate-800">
                        {Math.round(ownCapital).toLocaleString("vi-VN")}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">triệu đồng ({100 - loanRatio}%)</p>
                    </div>
                    <div className="bg-primary-600 rounded-2xl p-4 shadow-sm">
                      <p className="text-[10px] font-bold text-primary-200 uppercase tracking-wider mb-1">Số tiền vay</p>
                      <p className="text-xl font-black text-white">
                        {Math.round(loanAmount).toLocaleString("vi-VN")}
                      </p>
                      <p className="text-xs text-primary-200 mt-0.5">triệu đồng ({loanRatio}%)</p>
                    </div>
                  </div>

                  {/* Dòng tiền hàng tháng */}
                  <div className="bg-white rounded-2xl border border-amber-200 overflow-hidden shadow-sm">
                    <div className="px-4 py-3 bg-amber-50 border-b border-amber-100">
                      <p className="text-xs font-bold text-amber-800 flex items-center gap-1.5">
                        <TrendingDown className="w-4 h-4" />
                        Dòng tiền trả góp hàng tháng
                      </p>
                    </div>
                    <div className="divide-y divide-slate-50">
                      {/* Trong ân hạn */}
                      <div className="px-4 py-4">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-xs font-bold text-amber-700">
                              {gracePeriod > 0 ? `${gracePeriod} tháng đầu (ân hạn gốc)` : "Không có ân hạn gốc"}
                            </p>
                            <p className="text-[11px] text-slate-500 mt-0.5">Chỉ trả lãi — chưa trả nợ gốc</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-lg font-black text-amber-600">
                              {gracePeriod > 0 ? monthlyInterestOnly.toLocaleString("vi-VN", { maximumFractionDigits: 1 }) : "—"}
                            </p>
                            <p className="text-[10px] text-slate-400">triệu/tháng</p>
                          </div>
                        </div>
                        {gracePeriod > 0 && (
                          <div className="mt-2 bg-amber-50 rounded-lg px-3 py-2">
                            <p className="text-[11px] text-amber-700">
                              ✅ Tiết kiệm so với trả đủ gốc lãi: ~{Math.max(0, monthlyAfterGrace - monthlyInterestOnly).toLocaleString("vi-VN", { maximumFractionDigits: 1 })} triệu/tháng
                            </p>
                          </div>
                        )}
                      </div>
                      {/* Sau ân hạn */}
                      <div className="px-4 py-4">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-xs font-bold text-primary-700">
                              {gracePeriod > 0
                                ? `Từ tháng ${gracePeriod + 1} đến ${loanTerm * 12}`
                                : `Toàn bộ ${loanTerm * 12} tháng`}
                            </p>
                            <p className="text-[11px] text-slate-500 mt-0.5">Trả cả gốc lẫn lãi (phương thức đều)</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-lg font-black text-primary-700">
                              {monthlyAfterGrace.toLocaleString("vi-VN", { maximumFractionDigits: 1 })}
                            </p>
                            <p className="text-[10px] text-slate-400">triệu/tháng</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      <span className="font-bold text-slate-600">Lưu ý:</span> Số liệu mang tính tham khảo, tính theo
                      phương thức trả đều (annuity). Lãi suất thực tế do VietinBank Biên Hòa xác định theo hợp đồng.
                      Liên hệ tư vấn viên để có con số chính xác.
                    </p>
                  </div>

                  {/* CTA gọi điện */}
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700
                               text-white font-bold text-sm py-3.5 rounded-xl transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Tư vấn lãi vay trực tiếp — {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Link sang chuyên trang */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center anim-up">
              <Link
                href="/the-link-city/thanh-toan"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white
                           font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                Xem chuyên trang thanh toán đầy đủ
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/the-link-city/bang-gia"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50
                           text-slate-700 font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                Bảng giá The Link City
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeSection>

        {/* ─── SECTION 10: HÌNH ẢNH ─── */}
        <FadeSection id="hinh-anh" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">Hình ảnh thực tế</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
                Hình ảnh The Link City Dầu Giây
              </h2>
              <p className="mt-2 text-slate-500 text-sm">
                Hình ảnh thực tế tại dự án The Link City, xã Dầu Giây. Ảnh phối cảnh được ghi nhãn rõ ràng.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8 anim-stagger">
              {([
                "Hình ảnh thực tế The Link City Dầu Giây",
                "Đường nội khu The Link City Dầu Giây",
                "Cảnh quan khu đô thị The Link City xã Dầu Giây",
                "Hạ tầng The Link City Dầu Giây Đồng Nai",
                "Tiến độ xây dựng The Link City Dầu Giây",
                "Toàn khu The Link City xã Dầu Giây nhìn từ xa",
              ] as string[]).map((altText, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl bg-slate-100 overflow-hidden h-44 group anim-img-wrap cursor-zoom-in"
                  onClick={() => realLb.openLightbox(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Phóng to: ${altText}`}
                  onKeyDown={(e) => e.key === "Enter" && realLb.openLightbox(idx)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={TLC_REAL[String(idx + 1)]}
                    alt={altText}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <p className="text-white text-xs font-semibold">The Link City Dầu Giây</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center anim-up">
              <Link
                href="/the-link-city/hinh-anh"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white
                           font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                Xem toàn bộ hình ảnh thực tế
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeSection>

        {/* ─── SECTION 11: MẪU NHÀ T3-2B — ĐẦY ĐỦ 8 BẢN VẼ ─── */}
        <FadeSection id="mau-nha" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">

            {/* Header */}
            <div className="mb-8 anim-up">
              <span className="section-label">Mẫu nhà</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
                Bản vẽ mẫu nhà T3-2b — Công năng 3 tầng
              </h2>
              <p className="mt-2 text-slate-500 text-sm md:text-base max-w-3xl">
                Hồ sơ kỹ thuật đầy đủ 8 bản vẽ của mẫu nhà T3-2b tại The Link City —
                bao gồm mặt bằng công năng từng tầng, mặt đứng và mặt cắt. Click vào bất kỳ ảnh nào để phóng to.
              </p>
            </div>

            {/* ── Mô tả công năng 3 tầng ── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 anim-stagger">
              {[
                {
                  floor: "Tầng 1",
                  label: "Kinh doanh / Thương mại",
                  color: "amber",
                  icon:  Store,
                  items: ["Mặt tiền kinh doanh rộng", "Tầng hầm kỹ thuật (thoát nước, điện)", "Không gian linh hoạt — shop, văn phòng, nhà hàng"],
                },
                {
                  floor: "Tầng 2",
                  label: "Phòng khách, Bếp & Phòng ngủ",
                  color: "primary",
                  icon:  Home,
                  items: ["Phòng khách rộng hướng đường", "Bếp + bàn ăn liền thông", "1–2 phòng ngủ + WC riêng"],
                },
                {
                  floor: "Tầng 3",
                  label: "Ngủ, Thờ & Sân thượng",
                  color: "green",
                  icon:  Layers,
                  items: ["Phòng ngủ master + ban công", "Phòng thờ / thư giãn", "Sân thượng cảnh quan · Thoáng mát"],
                },
              ].map((floor) => (
                <div
                  key={floor.floor}
                  className={`rounded-2xl border p-5 hover:shadow-md transition-shadow
                    ${floor.color === "amber"   ? "bg-amber-50 border-amber-200"   : ""}
                    ${floor.color === "primary" ? "bg-primary-50 border-primary-200" : ""}
                    ${floor.color === "green"   ? "bg-green-50 border-green-200"   : ""}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0
                      ${floor.color === "amber"   ? "bg-amber-100"   : ""}
                      ${floor.color === "primary" ? "bg-primary-100" : ""}
                      ${floor.color === "green"   ? "bg-green-100"   : ""}`}>
                      <floor.icon className={`w-5 h-5
                        ${floor.color === "amber"   ? "text-amber-600"   : ""}
                        ${floor.color === "primary" ? "text-primary-600" : ""}
                        ${floor.color === "green"   ? "text-green-600"   : ""}`} />
                    </div>
                    <div>
                      <p className={`text-[10px] font-black uppercase tracking-widest
                        ${floor.color === "amber"   ? "text-amber-600"   : ""}
                        ${floor.color === "primary" ? "text-primary-600" : ""}
                        ${floor.color === "green"   ? "text-green-600"   : ""}`}>{floor.floor}</p>
                      <p className="font-bold text-slate-800 text-sm leading-snug">{floor.label}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {floor.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5
                          ${floor.color === "amber"   ? "text-amber-500"   : ""}
                          ${floor.color === "primary" ? "text-primary-500" : ""}
                          ${floor.color === "green"   ? "text-green-500"   : ""}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ── 8 bản vẽ kỹ thuật — grid 4 cột ── */}
            <div className="mb-6 anim-up">
              <h3 className="font-bold text-slate-800 text-base mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary-600" />
                8 bản vẽ kỹ thuật đầy đủ — click để phóng to
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { key: "a01-01", label: "A01-01",  desc: "Mặt bằng vị trí",          idx: 0 },
                  { key: "a01-02", label: "A01-02",  desc: "Bảng thông số lô đất",      idx: 1 },
                  { key: "a02-01", label: "A02-01",  desc: "Công năng Tầng 1",           idx: 2 },
                  { key: "a02-02", label: "A02-02",  desc: "Công năng Tầng 2–3",         idx: 3 },
                  { key: "a03-01", label: "A03-01",  desc: "Mặt đứng A-C, C-A",         idx: 4 },
                  { key: "a03-02", label: "A03-02",  desc: "Mặt đứng trục 4-1",         idx: 5 },
                  { key: "a04-01", label: "A04-01",  desc: "Mặt cắt A04-01",            idx: 6 },
                  { key: "a04-02", label: "A04-02",  desc: "Mặt cắt A04-02",            idx: 7 },
                ].map((sheet) => (
                  <div
                    key={sheet.key}
                    className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50
                               hover:shadow-md transition-all duration-300 cursor-zoom-in"
                    onClick={() => t3Lb.openLightbox(sheet.idx)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Phóng to bản vẽ ${sheet.label} — ${sheet.desc}`}
                    onKeyDown={(e) => e.key === "Enter" && t3Lb.openLightbox(sheet.idx)}
                  >
                    {/* Ảnh thumbnail */}
                    <div className="relative h-36 overflow-hidden bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={TLC_T3_2B[sheet.key]}
                        alt={`Bản vẽ ${sheet.label} — ${sheet.desc} mẫu nhà T3-2b The Link City`}
                        title={`${sheet.label} · ${sheet.desc} · Mẫu nhà T3-2b The Link City`}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.05]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow flex items-center gap-1">
                          <ZoomIn className="w-3 h-3" /> Phóng to
                        </span>
                      </div>
                    </div>
                    {/* Label */}
                    <div className="px-3 py-2.5">
                      <p className="text-[10px] font-black text-primary-600 uppercase tracking-wider">{sheet.label}</p>
                      <p className="text-xs font-semibold text-slate-700 leading-snug mt-0.5">{sheet.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lưu ý + nút xem thêm */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 mb-6 anim-up">
              <div className="flex items-start gap-3">
                <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 leading-relaxed">
                  <span className="font-bold">Lưu ý:</span> T3-2b là mẫu nhà trong hồ sơ được cung cấp bởi CĐT Phú Việt Tín —
                  không đại diện mặc định cho toàn bộ sản phẩm dự án.
                  Thông số thực tế (diện tích lô, số tầng, công năng cụ thể) từng căn cần xác nhận trực tiếp trước giao dịch.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 justify-center anim-up">
              <a
                href="/the%20link/cross-section/T3-2b.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white
                           font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                Tải bản vẽ T3-2b (PDF đầy đủ)
              </a>
              <Link
                href="/the-link-city/mat-bang"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50
                           text-slate-700 font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                Xem chuyên trang mặt bằng
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50
                           text-slate-700 font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Tư vấn mẫu nhà phù hợp
              </a>
            </div>
          </div>
        </FadeSection>

        {/* ─── SECTION 12: CÁC CHUYÊN TRANG THE LINK CITY ─── */}
        <FadeSection id="chuyen-trang" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">Chuyên trang</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
                Tìm hiểu chuyên sâu The Link City
              </h2>
              <p className="mt-2 text-slate-500 text-sm">
                Mỗi chuyên trang tập trung vào một khía cạnh cụ thể của dự án.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 anim-stagger">
              {clusterPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex flex-col items-center gap-2.5 bg-white hover:bg-primary-50
                             border border-slate-200 hover:border-primary-200
                             rounded-2xl p-5 text-center transition-all duration-200 hover:shadow-md anim-card"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-primary-100
                                  flex items-center justify-center transition-colors">
                    <page.icon className="w-5 h-5 text-slate-500 group-hover:text-primary-600 transition-colors" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 group-hover:text-primary-700 transition-colors">
                    {page.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </FadeSection>

        {/* ─── SECTION 13: FAQ TỔNG QUAN ─── */}
        <FadeSection id="faq" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">FAQ</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
                Câu hỏi thường gặp về The Link City
              </h2>
              <p className="mt-2 text-slate-500 text-sm">
                Các câu hỏi tổng quan về dự án, vị trí, quy mô, pháp lý và tiện ích.
              </p>
            </div>

            <div className="space-y-3 anim-stagger-slow">
              {faqSchema.mainEntity.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden anim-card"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer
                                       px-5 py-4 font-semibold text-slate-800 text-sm list-none
                                       group-open:text-primary-700 select-none">
                    <span>{faq.name}</span>
                    <span className="flex-shrink-0 w-5 h-5 text-slate-400 group-open:text-primary-600
                                     transition-transform duration-300 group-open:rotate-180">▼</span>
                  </summary>
                  <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-6 text-center anim-up">
              <Link
                href="/the-link-city/faq"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
              >
                Xem tất cả câu hỏi thường gặp
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeSection>

        {/* ─── SECTION 14: CTA CUỐI TRANG ─── */}
        <FadeSection className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="anim-up">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">
                  Liên hệ
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-1 mb-4">
                  Nhận thông tin The Link City
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Để lại thông tin để nhận bảng giá cập nhật, thông tin mặt bằng và tư vấn về dự án.
                  Tư vấn viên sẽ liên hệ trong thời gian sớm nhất.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    { icon: Phone,         text: SITE_CONFIG.phoneDisplay, href: `tel:${SITE_CONFIG.phone}` },
                    { icon: MessageCircle, text: "Nhắn Zalo ngay",          href: SITE_CONFIG.social.zalo },
                  ].map((c) => (
                    <a
                      key={c.text}
                      href={c.href}
                      target={c.href.startsWith("https") ? "_blank" : undefined}
                      rel={c.href.startsWith("https") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 p-4 bg-white/10 border border-white/15 rounded-2xl
                                 hover:bg-white/15 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                        <c.icon className="w-4 h-4 text-amber-400" />
                      </div>
                      <span className="text-sm font-semibold text-white">{c.text}</span>
                    </a>
                  ))}
                </div>

                {/* Internal link sang mat-bang */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-slate-400 mb-2">Trang chuyên đề</p>
                  <Link
                    href="/the-link-city/mat-bang"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Mặt bằng The Link City — sơ đồ phân lô &amp; hồ sơ T3-2b
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="anim-up anim-delay-100">
                <LeadForm />
              </div>
            </div>
          </div>
        </FadeSection>

        {/* Trust / nguồn */}
        <FadeSection className="py-14 bg-slate-50 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center anim-up">
              <h2 className="text-lg font-bold text-slate-700 mb-3">Nguồn thông tin dự án</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Thông tin trên trang này được tổng hợp từ các nguồn công khai, ưu tiên tính chính xác hơn tính đầy đủ.
                Dữ liệu chưa xác minh không được đăng tải.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "Kim Oanh Land",   sub: "Đơn vị phát triển & phân phối",          icon: "🏢" },
                  { label: "Báo Đồng Nai",    sub: "baodongnai.com.vn · 23/12/2025",         icon: "📰" },
                  { label: "UBND xã Dầu Giây",sub: "Phát biểu chính thức tại sự kiện",       icon: "🏛️" },
                ].map((src) => (
                  <div key={src.label} className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-left min-w-[160px]">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span>{src.icon}</span>
                      <p className="text-xs font-bold text-slate-700">{src.label}</p>
                    </div>
                    <p className="text-[10px] text-slate-400 pl-5">{src.sub}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-5">
                Cập nhật lần cuối theo nguồn gần nhất: 23/12/2025 ·{" "}
                Hiện tại: 09/2026 — một số thông tin tiến độ có thể đã thay đổi.
              </p>
            </div>
          </div>
        </FadeSection>

        {/* Related content */}
        <RelatedContent
          title="Tìm hiểu thêm về The Link City"
          items={relatedItems}
        />
      </main>

      <CorpFooter />
    </>
  );
}
