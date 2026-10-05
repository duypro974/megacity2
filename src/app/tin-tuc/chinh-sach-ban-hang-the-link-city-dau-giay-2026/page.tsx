"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS71 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/chinh-sach-ban-hang-the-link-city-dau-giay-2026`;
const PUBLISHED     = "07/10/2026";
const PUBLISHED_ISO = "2026-10-07";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Chính Sách Bán Hàng The Link City Dầu Giây 2026: Chiết Khấu, Tiến Độ & Điều Kiện Mua Mới Nhất",
  description: "Chi tiết chính sách bán hàng The Link City Dầu Giây 2026: tiến độ thanh toán 9–10 đợt, chiết khấu 16%/năm, vay VietinBank 70%, cọc từ 50 triệu và điều kiện ký hợp đồng.",
  image: [IMG_NEWS71["1"], IMG_NEWS71["2"], IMG_NEWS71["4"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "chính sách bán hàng the link city 2026, ưu đãi the link city dầu giây, chiết khấu the link city, tiến độ thanh toán the link city",
  about: {
    "@type": "Place",
    name: "The Link City, Dầu Giây, Đồng Nai",
    address: { "@type": "PostalAddress", addressLocality: "Dầu Giây", addressRegion: "Đồng Nai", addressCountry: "VN" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Đặt cọc The Link City Dầu Giây bao nhiêu tiền?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đặt cọc giữ chỗ tại The Link City: đất nền liên kế và biệt thự cọc 50.000.000 đồng; nhà xây sẵn shophouse cọc 100.000.000 đồng. Tiền cọc được trừ vào Đợt 1 khi ký hợp đồng mua bán.",
      },
    },
    {
      "@type": "Question",
      name: "Tiến độ thanh toán The Link City có mấy đợt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đất nền liên kế thanh toán 9 đợt. Đất nền biệt thự thanh toán 10 đợt. Shophouse nhà xây sẵn thanh toán 10 đợt. Các đợt giãn cách 30–45 ngày/đợt, đợt cuối thanh toán khi nhận thông báo bàn giao sổ hồng.",
      },
    },
    {
      "@type": "Question",
      name: "Chiết khấu thanh toán sớm The Link City là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chiết khấu thanh toán sớm tương đương 16%/năm tính trên số tiền và số ngày vượt tiến độ. Ví dụ: thanh toán trước tiến độ 180 ngày số tiền 1 tỷ đồng sẽ được chiết khấu khoảng 80 triệu đồng.",
      },
    },
    {
      "@type": "Question",
      name: "Ngân hàng nào hỗ trợ vay mua The Link City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VietinBank là ngân hàng đối tác chính thức hỗ trợ vay mua The Link City, với mức vay tối đa 70% giá trị sản phẩm, thời hạn vay 20–30 năm và ân hạn nợ gốc lên đến 24 tháng (chỉ trả lãi trong 2 năm đầu).",
      },
    },
    {
      "@type": "Question",
      name: "Mua nhiều lô tại The Link City có được chiết khấu thêm không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Chính sách chiết khấu mua nhiều sản phẩm tại The Link City: mua 2 sản phẩm được chiết khấu thêm 1%, mua 3 sản phẩm chiết khấu thêm 1,5%, từ 4 sản phẩm trở lên chiết khấu thêm 2% trên tổng giá trị.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "The Link City", item: `${BASE_URL}/the-link-city` },
    { "@type": "ListItem", position: 4, name: "Chính sách bán hàng 2026", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS71["1"], alt: "Khách hàng ký hợp đồng tư vấn tại showroom The Link City Dầu Giây Kim Oanh Land",    caption: "Khách hàng ký hợp đồng mua bán tại Kim Oanh Land — quy trình minh bạch, hồ sơ pháp lý đầy đủ." },
  { src: IMG_NEWS71["2"], alt: "Bảng giá chiết khấu chính sách bán hàng The Link City Dầu Giây 2026",                 caption: "Bảng chiết khấu và chính sách ưu đãi The Link City — căn cứ TB số 14/2026/TB-KO/TGĐ." },
  { src: IMG_NEWS71["3"], alt: "Ngân hàng VietinBank đối tác hỗ trợ vay mua The Link City Dầu Giây Đồng Nai",        caption: "VietinBank — ngân hàng đối tác chính thức, hỗ trợ vay tối đa 70%, ân hạn gốc 24 tháng." },
  { src: IMG_NEWS71["4"], alt: "Sổ hồng giấy chứng nhận quyền sử dụng đất thực tế The Link City Dầu Giây Đồng Nai", caption: "Sổ hồng từng nền thực tế đã cấp — minh chứng pháp lý hoàn chỉnh khi thực hiện giao dịch." },
  { src: IMG_NEWS71["5"], alt: "Toàn cảnh khu đô thị The Link City Dầu Giây hạ tầng nội khu hoàn thiện 100%",        caption: "Hạ tầng The Link City hoàn thiện 100% — đủ điều kiện bàn giao và ký hợp đồng ngay." },
];

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400 scroll-mt-24">
      {children}
    </h2>
  );
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-8">{children}</h3>;
}
function BulletList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="space-y-2.5 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-700 text-[16px] leading-relaxed">
          <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-[9px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Bảng tiến độ thanh toán
function PaymentTable({ rows, coc }: {
  coc: string;
  rows: { dot: string; label: string; pct: string; note: string }[];
}) {
  const total = rows.reduce((s, r) => s + parseInt(r.pct), 0);
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-amber-50">
            <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200 w-20">Đợt</th>
            <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Thời điểm thanh toán</th>
            <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-amber-200 w-16">Tỷ lệ</th>
            <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Ghi chú</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {/* Hàng cọc */}
          <tr className="bg-slate-50">
            <td className="px-4 py-3 font-bold text-slate-500 text-xs">Cọc</td>
            <td className="px-4 py-3 text-slate-600">Đặt cọc giữ chỗ</td>
            <td className="px-4 py-3 text-center font-black text-slate-700">{coc}</td>
            <td className="px-4 py-3 text-xs text-slate-400">Trừ vào Đợt 1</td>
          </tr>
          {rows.map((row, i) => (
            <tr key={i} className={`hover:bg-slate-50 transition-colors ${row.note ? "bg-amber-50/40" : ""}`}>
              <td className="px-4 py-3 font-bold text-slate-500 text-xs">{row.dot}</td>
              <td className="px-4 py-3 text-slate-700">{row.label}</td>
              <td className="px-4 py-3 text-center">
                <span className={`inline-block font-black text-sm px-2 py-0.5 rounded-lg border ${
                  parseInt(row.pct) >= 25
                    ? "bg-amber-100 text-amber-800 border-amber-200"
                    : parseInt(row.pct) >= 15
                    ? "bg-primary-100 text-primary-800 border-primary-200"
                    : "bg-slate-100 text-slate-600 border-slate-200"
                }`}>{row.pct}</span>
              </td>
              <td className="px-4 py-3 text-xs text-slate-400">{row.note}</td>
            </tr>
          ))}
          <tr className="bg-amber-50 border-t-2 border-amber-200">
            <td colSpan={2} className="px-4 py-3 font-black text-amber-800 text-sm">Tổng (chưa tính cọc)</td>
            <td className="px-4 py-3 text-center font-black text-amber-800 text-base">{total}%</td>
            <td className="px-4 py-3" />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const s = type === "warn" ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-amber-50 border-amber-200 text-amber-800";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 transition-all">
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export default function ChinhSachBanHangPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  const lienKeRows = [
    { dot: "Đợt 1",  label: "7 ngày kể từ cọc (Ký HĐ)",                         pct: "20%", note: "Ký hợp đồng mua bán" },
    { dot: "Đợt 2",  label: "30 ngày sau Đợt 1",                                  pct: "10%", note: "" },
    { dot: "Đợt 3",  label: "30 ngày sau Đợt 2",                                  pct: "10%", note: "" },
    { dot: "Đợt 4",  label: "30 ngày sau Đợt 3",                                  pct: "10%", note: "" },
    { dot: "Đợt 5",  label: "30 ngày sau Đợt 4",                                  pct: "10%", note: "" },
    { dot: "Đợt 6",  label: "30 ngày sau Đợt 5",                                  pct: "5%",  note: "" },
    { dot: "Đợt 7",  label: "30 ngày sau Đợt 6",                                  pct: "5%",  note: "" },
    { dot: "Đợt 8",  label: "120 ngày sau Đợt 7 hoặc khi đủ điều kiện ký HĐCN",  pct: "25%", note: "Ký HĐCN / HĐMB" },
    { dot: "Đợt 9",  label: "Khi nhận thông báo bàn giao sổ",                     pct: "5%",  note: "Nhận sổ hồng" },
  ];

  const bietThuRows = [
    { dot: "Đợt 1",  label: "7 ngày kể từ cọc (Ký HĐ)",       pct: "15%", note: "Ký hợp đồng mua bán" },
    { dot: "Đợt 2",  label: "30 ngày sau Đợt 1",               pct: "10%", note: "" },
    { dot: "Đợt 3",  label: "30 ngày sau Đợt 2",               pct: "10%", note: "" },
    { dot: "Đợt 4",  label: "30 ngày sau Đợt 3",               pct: "10%", note: "" },
    { dot: "Đợt 5",  label: "30 ngày sau Đợt 4",               pct: "10%", note: "" },
    { dot: "Đợt 6",  label: "45 ngày sau Đợt 5",               pct: "5%",  note: "" },
    { dot: "Đợt 7",  label: "45 ngày sau Đợt 6",               pct: "5%",  note: "" },
    { dot: "Đợt 8",  label: "45 ngày sau Đợt 7",               pct: "5%",  note: "" },
    { dot: "Đợt 9",  label: "Khi đủ điều kiện ký HĐCN / HĐMB", pct: "25%", note: "Ký HĐCN / HĐMB" },
    { dot: "Đợt 10", label: "Khi nhận thông báo bàn giao sổ",  pct: "5%",  note: "Nhận sổ hồng" },
  ];

  const shopRows = [
    { dot: "Đợt 1",  label: "7 ngày kể từ cọc (Ký HĐ)",               pct: "20%", note: "Ký hợp đồng mua bán" },
    { dot: "Đợt 2",  label: "45 ngày sau Đợt 1",                        pct: "10%", note: "" },
    { dot: "Đợt 3",  label: "45 ngày sau Đợt 2",                        pct: "10%", note: "" },
    { dot: "Đợt 4",  label: "45 ngày sau Đợt 3",                        pct: "10%", note: "" },
    { dot: "Đợt 5",  label: "45 ngày sau Đợt 4",                        pct: "5%",  note: "" },
    { dot: "Đợt 6",  label: "45 ngày sau Đợt 5",                        pct: "5%",  note: "" },
    { dot: "Đợt 7",  label: "45 ngày sau Đợt 6",                        pct: "5%",  note: "" },
    { dot: "Đợt 8",  label: "45 ngày sau Đợt 7",                        pct: "5%",  note: "" },
    { dot: "Đợt 9",  label: "Khi nhận thông báo bàn giao nhà",          pct: "25%", note: "Nhận bàn giao nhà" },
    { dot: "Đợt 10", label: "Khi nhận thông báo bàn giao sổ",           pct: "5%",  note: "Nhận sổ hồng" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}

      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero ── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span>/</span>
              <a href="/the-link-city" className="hover:text-amber-600 transition-colors">The Link City</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">Chính sách bán hàng</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">The Link City</span>
              <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Tin dự án</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 8 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Chính Sách Bán Hàng The Link City Dầu Giây 2026: Chiết Khấu, Tiến Độ Thanh Toán & Điều Kiện Mua Mới Nhất
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Tổng hợp đầy đủ chính sách bán hàng{" "}
              <a href="/the-link-city" className="text-amber-700 font-semibold hover:underline">The Link City Dầu Giây</a>{" "}
              theo Thông báo số 14/2026/TB-KO/TGĐ: tiến độ thanh toán từng loại sản phẩm,
              chiết khấu 16%/năm khi thanh toán sớm, gói vay VietinBank 70% và chính sách
              mua nhiều lô.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS71["1"]}
                alt="Khách hàng ký hợp đồng tư vấn tại showroom The Link City Dầu Giây Kim Oanh Land"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Khách hàng ký hợp đồng mua bán tại Kim Oanh Land — quy trình minh bạch, hồ sơ pháp lý hoàn chỉnh.
            </p>
          </div>
        </div>

        {/* ── Main ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#tom-tat",     "1. Tóm tắt chính sách — đọc nhanh"],
                    ["#dat-coc",     "2. Điều kiện đặt cọc giữ chỗ"],
                    ["#tien-do",     "3. Tiến độ thanh toán 3 loại sản phẩm"],
                    ["#chiet-khau",  "4. Chiết khấu thanh toán sớm 16%/năm"],
                    ["#vay-ngan-hang","5. Gói vay VietinBank 70% — Ân hạn 24 tháng"],
                    ["#nhieu-lo",    "6. Chính sách mua nhiều lô"],
                    ["#quy-trinh",   "7. Quy trình từ đặt cọc đến nhận sổ"],
                    ["#faq",         "8. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Chính sách bán hàng là thứ nhiều người hỏi nhất khi tìm hiểu một dự án —
                nhưng lại ít khi được trình bày đầy đủ, cụ thể ở một chỗ. Bài viết này
                tổng hợp toàn bộ chính sách của The Link City Dầu Giây theo Thông báo số
                14/2026/TB-KO/TGĐ ngày 27/01/2026 của Địa Ốc Kim Oanh, bao gồm tất cả
                các điều kiện, con số và mốc thời gian cụ thể.
              </p>

              {/* Section 1 — Tóm tắt */}
              <section className="mb-12">
                <SectionHeading id="tom-tat">Tóm tắt chính sách — đọc nhanh</SectionHeading>
                <div className="pt-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: "💰", label: "Cọc giữ chỗ", val: "50 tr (đất nền) / 100 tr (shophouse)" },
                      { icon: "📅", label: "Số đợt thanh toán", val: "9 đợt (liên kế) / 10 đợt (BT & shop)" },
                      { icon: "⚡", label: "Chiết khấu sớm", val: "16%/năm trên số tiền & số ngày vượt" },
                      { icon: "🏦", label: "Ngân hàng hỗ trợ", val: "VietinBank — vay tối đa 70%" },
                      { icon: "⏳", label: "Ân hạn nợ gốc", val: "24 tháng (chỉ trả lãi 2 năm đầu)" },
                      { icon: "📦", label: "Mua nhiều lô", val: "CK thêm 1% – 2% tùy số lượng" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3 p-4 rounded-2xl border border-slate-200 hover:border-amber-200 transition-colors">
                        <span className="text-2xl flex-shrink-0">{item.icon}</span>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                          <p className="font-black text-slate-800 text-sm leading-snug">{item.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <InfoBox>
                    <strong>Căn cứ:</strong> Thông báo số 14/2026/TB-KO/TGĐ ngày 27/01/2026
                    của Địa Ốc Kim Oanh. Chính sách có thể cập nhật theo từng đợt mở bán.
                    Liên hệ trực tiếp để nhận thông báo chính sách mới nhất.
                  </InfoBox>
                </div>
              </section>

              {/* Section 2 — Đặt cọc */}
              <section className="mb-12">
                <SectionHeading id="dat-coc">Điều kiện đặt cọc giữ chỗ</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đặt cọc là bước đầu tiên để giữ chỗ một lô đất tại The Link City. Số tiền
                    cọc phụ thuộc loại sản phẩm và được trừ vào Đợt 1 khi ký hợp đồng chính thức.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { type: "Đất nền liên kế",      coc: "50.000.000 đ",  color: "border-amber-300 bg-amber-50",   dot: "bg-amber-500" },
                      { type: "Đất nền biệt thự",     coc: "50.000.000 đ",  color: "border-slate-200 bg-white",      dot: "bg-slate-400" },
                      { type: "Shophouse xây sẵn",    coc: "100.000.000 đ", color: "border-amber-300 bg-amber-50",   dot: "bg-amber-500" },
                    ].map((s) => (
                      <div key={s.type} className={`rounded-2xl border-2 p-5 text-center ${s.color}`}>
                        <p className="font-black text-slate-800 mb-2 text-sm">{s.type}</p>
                        <p className="text-2xl font-black text-amber-700">{s.coc}</p>
                        <p className="text-xs text-slate-400 mt-1">Trừ vào Đợt 1 khi ký HĐ</p>
                      </div>
                    ))}
                  </div>
                  <BulletList items={[
                    "Tiền cọc không phải thêm vào giá — được khấu trừ trực tiếp vào đợt thanh toán đầu tiên khi ký hợp đồng mua bán.",
                    "Sau khi đặt cọc, khách hàng có 7 ngày để ký hợp đồng và thanh toán Đợt 1.",
                    "Đặt cọc xác nhận quyền ưu tiên chọn lô — thủ tục đơn giản, có thể thực hiện ngay tại văn phòng Kim Oanh hoặc qua tư vấn viên.",
                  ]} />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS71["2"]}
                alt="Bảng giá chiết khấu chính sách bán hàng The Link City Dầu Giây 2026"
                caption="Bảng chiết khấu và ưu đãi The Link City 2026 — căn cứ Thông báo số 14/2026/TB-KO/TGĐ."
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 3 — Tiến độ */}
              <section className="mb-12">
                <SectionHeading id="tien-do">Tiến độ thanh toán 3 loại sản phẩm</SectionHeading>
                <div className="pt-5 space-y-8">

                  <div>
                    <H3>1. Đất nền liên kế — 9 đợt</H3>
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Sản phẩm chủ lực của dự án, giá từ 1,85 tỷ/nền (block LK17A). Cọc 50 triệu, thanh toán giãn cách 30 ngày/đợt.
                    </p>
                    <PaymentTable coc="50 triệu" rows={lienKeRows} />
                  </div>

                  <div>
                    <H3>2. Đất nền biệt thự — 10 đợt</H3>
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Nền 200–350m², thanh toán giãn cách 30–45 ngày/đợt. Đợt 1 chỉ 15% (thấp hơn liên kế), phù hợp người cần thời gian chuẩn bị vốn.
                    </p>
                    <PaymentTable coc="50 triệu" rows={bietThuRows} />
                  </div>

                  <div>
                    <H3>3. Shophouse nhà xây sẵn — 10 đợt</H3>
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-4">
                      Cọc 100 triệu, thanh toán giãn cách 45 ngày/đợt — chu kỳ dài hơn đất nền, phù hợp với giá trị sản phẩm cao hơn.
                    </p>
                    <PaymentTable coc="100 triệu" rows={shopRows} />
                  </div>

                  <InfoBox type="warn">
                    <strong>Lưu ý Đợt 8:</strong> Đây là đợt lớn nhất (25% giá trị). Đối với
                    đất nền liên kế, Đợt 8 thanh toán sau 120 ngày kể từ Đợt 7 <em>hoặc</em>{" "}
                    khi đủ điều kiện ký hợp đồng công chứng — tùy điều kiện nào đến trước. Khách
                    hàng nên chuẩn bị nguồn vốn cho đợt này từ sớm.
                  </InfoBox>
                </div>
              </section>

              {/* Section 4 — Chiết khấu */}
              <section className="mb-12">
                <SectionHeading id="chiet-khau">Chiết khấu thanh toán sớm 16%/năm</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là ưu đãi hấp dẫn nhất trong chính sách The Link City — và cũng là
                    điều nhiều người chưa hiểu đúng. Chiết khấu <strong>16%/năm</strong> không
                    phải là giảm giá 16% trên tổng giá trị — mà là <em>lãi suất quy đổi</em>{" "}
                    tính trên số tiền và số ngày bạn thanh toán vượt tiến độ.
                  </p>

                  <H3>Công thức tính chiết khấu</H3>
                  <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 font-mono text-sm">
                    <p className="font-black text-amber-900 text-base mb-3 font-sans">📊 Chiết khấu = Số tiền × (Số ngày vượt tiến độ / 365) × 16%</p>
                    <div className="space-y-2 text-amber-800">
                      <div className="border-b border-amber-200 pb-2">
                        <p className="font-sans text-xs text-amber-600 mb-1">Ví dụ 1: Thanh toán trước 180 ngày, số tiền 500 triệu</p>
                        <p>= 500.000.000 × (180/365) × 16% = <strong>~39,5 triệu đồng</strong></p>
                      </div>
                      <div className="border-b border-amber-200 pb-2">
                        <p className="font-sans text-xs text-amber-600 mb-1">Ví dụ 2: Thanh toán trước 365 ngày (1 năm), số tiền 1 tỷ</p>
                        <p>= 1.000.000.000 × (365/365) × 16% = <strong>160 triệu đồng</strong></p>
                      </div>
                      <div>
                        <p className="font-sans text-xs text-amber-600 mb-1">Ví dụ 3: Thanh toán toàn bộ 95% ngay khi ký HĐ (vay ngân hàng giải ngân)</p>
                        <p>= Chiết khấu tối đa dựa trên tổng số tiền × số ngày còn lại</p>
                      </div>
                    </div>
                  </div>

                  <H3>Chiến lược tối ưu chiết khấu</H3>
                  <BulletList items={[
                    <><strong>Vay ngân hàng giải ngân sớm:</strong> Nếu vay VietinBank và ngân hàng giải ngân trả cho chủ đầu tư ngay, bạn được tính chiết khấu trên toàn bộ số tiền vay — trong khi chỉ trả lãi ngân hàng ở mức thấp hơn 16%/năm. Đây là bài toán đòn bẩy tài chính hiệu quả.</>,
                    <><strong>Tích lũy để thanh toán vượt tiến độ nhiều đợt:</strong> Mỗi đợt thanh toán trước đều được tính chiết khấu riêng, tích lũy theo thời gian.</>,
                    <><strong>Chiết khấu tối đa khi thanh toán lên đến 95%:</strong> Chính sách áp dụng khi thanh toán sớm đến mức 95% giá trị hợp đồng — đây là ngưỡng tối đa được chiết khấu.</>,
                  ]} />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS71["3"]}
                alt="Ngân hàng VietinBank đối tác hỗ trợ vay mua The Link City Dầu Giây Đồng Nai"
                caption="VietinBank — ngân hàng đối tác chính thức hỗ trợ vay mua The Link City, tối đa 70% giá trị sản phẩm."
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 5 — Vay ngân hàng */}
              <section className="mb-12">
                <SectionHeading id="vay-ngan-hang">Gói vay VietinBank 70% — Ân hạn 24 tháng</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    VietinBank là ngân hàng đối tác chính thức của The Link City, cung cấp gói
                    vay ưu đãi riêng cho khách hàng mua sản phẩm tại dự án.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      ["Mức vay tối đa", "70% giá trị SP"],
                      ["Thời hạn vay", "20–30 năm"],
                      ["Ân hạn nợ gốc", "Lên đến 24 tháng"],
                      ["Vốn tự có tối thiểu", "~30% (~555 triệu)"],
                    ].map(([label, val]) => (
                      <div key={label} className="rounded-2xl bg-amber-50 border border-amber-100 p-4 text-center">
                        <p className="text-sm font-black text-amber-700 mb-1 leading-tight">{val}</p>
                        <p className="text-[11px] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>

                  <H3>Ân hạn nợ gốc 24 tháng có nghĩa là gì?</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong 24 tháng đầu sau khi giải ngân, bạn <strong>chỉ phải trả lãi</strong>,
                    không phải trả gốc. Điều này giảm đáng kể áp lực dòng tiền trong giai đoạn
                    đầu khi bạn vừa thanh toán tiền đất vừa cần vốn xây nhà hoặc chi phí khác.
                  </p>

                  <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5">
                    <p className="font-black text-amber-800 text-sm mb-3">💡 Ví dụ thực tế: Mua lô 100m² giá 1,852 tỷ</p>
                    <div className="space-y-2 text-sm text-amber-800">
                      {[
                        ["Vốn tự có (30%)", "~555.000.000 đ"],
                        ["Vay VietinBank (70%)", "~1.296.000.000 đ"],
                        ["Trả gốc/tháng (240 tháng)", "~5.400.000 đ"],
                        ["Lãi tháng đầu (ân hạn)", "~8.000.000 đ"],
                        ["Tổng trả góp ban đầu", "~8–9 tr/tháng (chỉ lãi)"],
                        ["Tổng trả góp sau ân hạn", "~12–13,5 tr/tháng"],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between border-b border-amber-200 pb-2 last:border-0 last:pb-0 last:font-black">
                          <span>{k}</span><span className="font-bold">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/the-link-city/thanh-toan">Tự tính lịch trả góp chi tiết →</LinkBtn>
                    <LinkBtn href="/the-link-city/bang-gia">Xem bảng giá 2026 →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS71["4"]}
                alt="Sổ hồng giấy chứng nhận quyền sử dụng đất thực tế The Link City Dầu Giây Đồng Nai"
                caption="Sổ hồng từng nền thực tế đã cấp — điều kiện để thực hiện vay ngân hàng và chuyển nhượng."
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 6 — Nhiều lô */}
              <section className="mb-12">
                <SectionHeading id="nhieu-lo">Chính sách mua nhiều lô</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhà đầu tư mua từ 2 sản phẩm trở lên tại The Link City được hưởng chiết
                    khấu thêm trên tổng giá trị, cộng dồn với chiết khấu thanh toán sớm.
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-amber-50">
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Số lượng sản phẩm</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-amber-200">Chiết khấu thêm</th>
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Ví dụ tiết kiệm</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["1 sản phẩm", "—", "Không áp dụng"],
                          ["2 sản phẩm", "+1%", "2 lô × 1,85 tỷ → tiết kiệm ~37 triệu"],
                          ["3 sản phẩm", "+1,5%", "3 lô × 1,85 tỷ → tiết kiệm ~83 triệu"],
                          ["4+ sản phẩm", "+2%", "4 lô × 1,85 tỷ → tiết kiệm ~148 triệu"],
                        ].map(([qty, ck, ex]) => (
                          <tr key={qty} className="hover:bg-slate-50">
                            <td className="px-4 py-3 font-semibold text-slate-700">{qty}</td>
                            <td className="px-4 py-3 text-center font-black text-amber-700">{ck}</td>
                            <td className="px-4 py-3 text-slate-500 text-xs">{ex}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <InfoBox>
                    Chiết khấu mua nhiều lô <strong>cộng dồn</strong> với chiết khấu thanh toán
                    sớm 16%/năm — đây là bài toán đầu tư rất hấp dẫn cho nhà đầu tư có vốn từ
                    3–4 tỷ trở lên muốn diversify trong cùng một dự án đã biết rõ pháp lý.
                  </InfoBox>
                </div>
              </section>

              {/* Section 7 — Quy trình */}
              <section className="mb-12">
                <SectionHeading id="quy-trinh">Quy trình từ đặt cọc đến nhận sổ</SectionHeading>
                <div className="pt-5 space-y-3">
                  {[
                    { step: "01", title: "Đặt cọc giữ chỗ", desc: "Nộp cọc 50 triệu (đất nền) hoặc 100 triệu (shophouse) tại văn phòng Kim Oanh Land để giữ lô ưng ý. Nhận biên lai xác nhận chọn lô." },
                    { step: "02", title: "Ký hợp đồng mua bán (7 ngày sau cọc)", desc: "Trong vòng 7 ngày, ký hợp đồng mua bán và thanh toán Đợt 1 (15–20% tùy loại SP). Tiền cọc được khấu trừ vào đợt này." },
                    { step: "03", title: "Thanh toán theo tiến độ (Đợt 2–7)", desc: "Thanh toán các đợt giữa theo lịch 30–45 ngày/đợt. Đây là giai đoạn có thể áp dụng chiết khấu thanh toán sớm 16%/năm." },
                    { step: "04", title: "Vay ngân hàng (nếu có)", desc: "Nộp hồ sơ vay VietinBank song song với các đợt thanh toán. Ngân hàng thẩm định và giải ngân vào tài khoản chủ đầu tư." },
                    { step: "05", title: "Ký HĐCN / Công chứng (Đợt 8)", desc: "Khi đủ điều kiện pháp lý (quy hoạch, nghiệm thu hạ tầng), ký hợp đồng chuyển nhượng/công chứng. Đây là mốc quan trọng xác lập quyền sở hữu." },
                    { step: "06", title: "Nhận sổ hồng (Đợt 9–10)", desc: "Sau khi hoàn thành nghĩa vụ tài chính, nhận thông báo bàn giao sổ hồng riêng từng nền — pháp lý hoàn chỉnh, sang tên tự do." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-5 rounded-2xl border border-slate-200 hover:border-amber-200 transition-colors">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-black text-sm flex items-center justify-center">{item.step}</span>
                      <div>
                        <p className="font-black text-slate-800 mb-1">{item.title}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS71["5"]}
                alt="Toàn cảnh khu đô thị The Link City Dầu Giây hạ tầng nội khu hoàn thiện 100%"
                caption="Hạ tầng The Link City hoàn thiện 100% — đủ điều kiện bàn giao và ký hợp đồng ngay khi mở bán trở lại."
                images={images} index={4} onOpen={openLightbox}
              />

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp</SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details key={name} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-amber-200 transition-colors">
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-amber-700 select-none">
                        <span className="leading-snug">{name}</span>
                        <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-amber-600 transition-transform group-open:rotate-180 text-xs">▼</span>
                      </summary>
                      <div className="px-6 pb-5 border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-[16px] leading-relaxed">{acceptedAnswer.text}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Tìm hiểu thêm */}
              <section className="mb-12">
                <SectionHeading>Tìm hiểu thêm về The Link City</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city",                                                           label: "Tổng quan dự án The Link City" },
                    { href: "/the-link-city/thanh-toan",                                                label: "Công cụ tính lịch trả góp" },
                    { href: "/the-link-city/bang-gia",                                                  label: "Bảng giá 2026" },
                    { href: "/the-link-city/phap-ly",                                                   label: "Pháp lý — sổ hồng từng nền" },
                    { href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",     label: "Bài toán vay ngân hàng chi tiết" },
                    { href: "/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026",        label: "Giải pháp 550 triệu vốn tự có" },
                    { href: "/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026",                  label: "Có nên mua The Link City không?" },
                    { href: "/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026", label: "Quy trình mua bán đầy đủ" },
                  ].map((l) => (
                    <a key={l.href} href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 transition-colors px-4 py-3 rounded-xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50">
                      <span className="text-amber-400 flex-shrink-0">→</span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </section>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin chính sách bán hàng căn cứ Thông báo số 14/2026/TB-KO/TGĐ ngày
                  27/01/2026. Chính sách có thể thay đổi theo từng đợt mở bán. Liên hệ trực
                  tiếp Kim Oanh Land để xác nhận chính sách áp dụng tại thời điểm giao dịch.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5">
                  <p className="font-black text-amber-800 text-sm mb-4 uppercase tracking-wider">Tóm tắt chính sách</p>
                  <div className="space-y-2.5 text-sm">
                    {[
                      ["Cọc đất nền", "50 triệu"],
                      ["Cọc shophouse", "100 triệu"],
                      ["Số đợt TT", "9–10 đợt"],
                      ["Chiết khấu sớm", "16%/năm"],
                      ["Vay tối đa", "70% (VietinBank)"],
                      ["Ân hạn gốc", "24 tháng"],
                      ["Mua 2 lô", "+1% CK"],
                      ["Mua 4+ lô", "+2% CK"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-amber-200 pb-2 last:border-0 last:pb-0">
                        <span className="text-amber-700">{k}</span>
                        <span className="font-black text-amber-800">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu The Link City</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/the-link-city",            label: "Tổng quan dự án" },
                      { href: "/the-link-city/bang-gia",   label: "Bảng giá 2026" },
                      { href: "/the-link-city/thanh-toan", label: "Tính lịch trả góp" },
                      { href: "/the-link-city/phap-ly",    label: "Pháp lý dự án" },
                      { href: "/the-link-city/mat-bang",   label: "Mặt bằng phân lô" },
                      { href: "/the-link-city/tien-ich",   label: "Tiện ích nội khu" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-amber-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white">
                        <span>{l.label}</span><span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Nhận tư vấn chính sách</p>
                  <p className="text-amber-100 text-xs mb-4">Tư vấn viên tính toán chiết khấu cụ thể theo ngân sách của bạn.</p>
                  <a href="tel:0937587438" className="block text-center bg-white text-amber-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-amber-50 transition-colors">
                    0937.587.438
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-amber-50 border-t border-amber-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Sẵn sàng tính toán bài toán tài chính?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Chỉ cần 550 triệu vốn tự có, phần còn lại VietinBank hỗ trợ 70%.
              Gọi để tư vấn viên tính toán chiết khấu tối ưu theo ngân sách của bạn.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/the-link-city/thanh-toan" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">
                Tính lịch trả góp →
              </a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            {
              href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",
              title: "Bảng Giá The Link City & Bài Toán Vay Ngân Hàng 2026",
              description: "Chi tiết bảng giá từng block, 4 phương thức thanh toán và bảng tính trả nợ giảm dần 20 năm.",
              tag: "Tài chính",
            },
            {
              href: "/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026",
              title: "Giải Pháp An Cư: Chỉ Từ 12 Triệu/Tháng",
              description: "Vốn tự có 550 triệu, trả góp 12 triệu/tháng sở hữu nhà phố 3 tầng sổ hồng riêng.",
              tag: "Tài chính",
            },
            {
              href: "/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026",
              title: "Có Nên Mua The Link City Không? Phân Tích 2026",
              description: "Đánh giá trung thực ưu nhược điểm và bảng điểm tổng thể 7.3/10.",
              tag: "Phân tích",
            },
            {
              href: "/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026",
              title: "Quy Trình Mua Bán The Link City: Từ A-Z",
              description: "Hướng dẫn 5 bước mua bán chuẩn pháp lý, công chứng sang tên sổ hồng.",
              tag: "Tin dự án",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
