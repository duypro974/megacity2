"use client";

import { useState } from "react";
import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import { SITE_CONFIG } from "@/data/siteConfig";
import {
  Landmark, Phone, MessageCircle, ArrowRight, Download,
  Info, CheckCircle2, Percent, Building2, Store, Layers,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// JSON-LD (client page)
// ─────────────────────────────────────────────────────────────
const BASE_URL = "https://kimoanhdongnai.com.vn";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Chính sách bán hàng & Tiến độ thanh toán The Link City Dầu Giây 2026",
  description:
    "Tiến độ thanh toán đất nền liên kế, biệt thự và shophouse The Link City. Hỗ trợ vay VietinBank tối đa 70%, ân hạn nợ gốc 24 tháng. Chiết khấu thanh toán sớm 16%/năm.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: "2026-01-27",
  dateModified: "2026-09-04",
  url: `${BASE_URL}/the-link-city/thanh-toan`,
  about: { "@type": "RealEstateListing", name: "The Link City", url: `${BASE_URL}/the-link-city` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "The Link City", item: `${BASE_URL}/the-link-city` },
    { "@type": "ListItem", position: 3, name: "Thanh toán", item: `${BASE_URL}/the-link-city/thanh-toan` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Chính sách vay ngân hàng The Link City như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khách hàng được ngân hàng VietinBank hỗ trợ vay tới 70% giá trị sản phẩm trong 20–30 năm, với chính sách ưu đãi ân hạn nợ gốc lên đến 24 tháng (chỉ trả lãi suất trong 2 năm đầu). Vốn tự có tối thiểu chỉ 30%.",
      },
    },
    {
      "@type": "Question",
      name: "Tiến độ thanh toán đất nền liên kế The Link City như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo Thông báo số 14/2026/TB-KO/TGĐ ngày 27/01/2026: Cọc 50 triệu → Đợt 1 (7 ngày): 20% → Đợt 2–5 (30 ngày/đợt): 10%/đợt → Đợt 6–7 (30 ngày/đợt): 5%/đợt → Đợt 8 (120 ngày hoặc khi đủ điều kiện ký HĐCN): 25% → Đợt 9 (nhận thông báo bàn giao sổ): 5%.",
      },
    },
    {
      "@type": "Question",
      name: "Chiết khấu thanh toán sớm The Link City là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chiết khấu thanh toán sớm tương đương 16%/năm tính trên số tiền và số ngày vượt tiến độ. Ngoài ra, mua nhiều sản phẩm được chiết khấu thêm: 2 sản phẩm CK 1%, 3 sản phẩm CK 1,5%, từ 4 sản phẩm trở lên CK 2%.",
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// DATA — 3 tab tiến độ thanh toán
// ─────────────────────────────────────────────────────────────
type TabKey = "lien-ke" | "biet-thu" | "shophouse";

interface PaymentRow {
  dot: string;
  label: string;
  pct: string;
  note: string;
}

const paymentTabs: Record<TabKey, { title: string; icon: React.ElementType; coc: string; rows: PaymentRow[] }> = {
  "lien-ke": {
    title: "Đất nền liên kế",
    icon: Building2,
    coc: "50.000.000 đ",
    rows: [
      { dot: "Đợt 1",   label: "7 ngày kể từ cọc (Ký HĐ)",                          pct: "20%",  note: "Ký hợp đồng mua bán" },
      { dot: "Đợt 2",   label: "30 ngày sau Đợt 1",                                  pct: "10%",  note: "" },
      { dot: "Đợt 3",   label: "30 ngày sau Đợt 2",                                  pct: "10%",  note: "" },
      { dot: "Đợt 4",   label: "30 ngày sau Đợt 3",                                  pct: "10%",  note: "" },
      { dot: "Đợt 5",   label: "30 ngày sau Đợt 4",                                  pct: "10%",  note: "" },
      { dot: "Đợt 6",   label: "30 ngày sau Đợt 5",                                  pct: "5%",   note: "" },
      { dot: "Đợt 7",   label: "30 ngày sau Đợt 6",                                  pct: "5%",   note: "" },
      { dot: "Đợt 8",   label: "120 ngày sau Đợt 7 hoặc khi đủ điều kiện ký HĐCN",  pct: "25%",  note: "Ký HĐCN / HĐMB" },
      { dot: "Đợt 9",   label: "Khi nhận thông báo bàn giao sổ",                     pct: "5%",   note: "Nhận sổ hồng" },
    ],
  },
  "biet-thu": {
    title: "Đất nền biệt thự",
    icon: Layers,
    coc: "50.000.000 đ",
    rows: [
      { dot: "Đợt 1",   label: "7 ngày kể từ cọc (Ký HĐ)",          pct: "15%",  note: "Ký hợp đồng mua bán" },
      { dot: "Đợt 2",   label: "30 ngày sau Đợt 1",                  pct: "10%",  note: "" },
      { dot: "Đợt 3",   label: "30 ngày sau Đợt 2",                  pct: "10%",  note: "" },
      { dot: "Đợt 4",   label: "30 ngày sau Đợt 3",                  pct: "10%",  note: "" },
      { dot: "Đợt 5",   label: "30 ngày sau Đợt 4",                  pct: "10%",  note: "" },
      { dot: "Đợt 6",   label: "45 ngày sau Đợt 5",                  pct: "5%",   note: "" },
      { dot: "Đợt 7",   label: "45 ngày sau Đợt 6",                  pct: "5%",   note: "" },
      { dot: "Đợt 8",   label: "45 ngày sau Đợt 7",                  pct: "5%",   note: "" },
      { dot: "Đợt 9",   label: "Khi đủ điều kiện ký HĐCN / HĐMB",   pct: "25%",  note: "Ký HĐCN / HĐMB" },
      { dot: "Đợt 10",  label: "Khi nhận thông báo bàn giao sổ",     pct: "5%",   note: "Nhận sổ hồng" },
    ],
  },
  "shophouse": {
    title: "Nhà xây sẵn (Shophouse)",
    icon: Store,
    coc: "100.000.000 đ",
    rows: [
      { dot: "Đợt 1",   label: "7 ngày kể từ cọc (Ký HĐ)",                    pct: "20%",  note: "Ký hợp đồng mua bán" },
      { dot: "Đợt 2",   label: "45 ngày sau Đợt 1",                            pct: "10%",  note: "" },
      { dot: "Đợt 3",   label: "45 ngày sau Đợt 2",                            pct: "10%",  note: "" },
      { dot: "Đợt 4",   label: "45 ngày sau Đợt 3",                            pct: "10%",  note: "" },
      { dot: "Đợt 5",   label: "45 ngày sau Đợt 4",                            pct: "5%",   note: "" },
      { dot: "Đợt 6",   label: "45 ngày sau Đợt 5",                            pct: "5%",   note: "" },
      { dot: "Đợt 7",   label: "45 ngày sau Đợt 6",                            pct: "5%",   note: "" },
      { dot: "Đợt 8",   label: "45 ngày sau Đợt 7",                            pct: "5%",   note: "" },
      { dot: "Đợt 9",   label: "Khi nhận thông báo bàn giao nhà",              pct: "25%",  note: "Nhận bàn giao nhà" },
      { dot: "Đợt 10",  label: "Khi nhận thông báo bàn giao sổ",               pct: "5%",   note: "Nhận sổ hồng" },
    ],
  },
};

const tabOrder: TabKey[] = ["lien-ke", "biet-thu", "shophouse"];

// Màu badge theo % đợt
function pctColor(pct: string) {
  const n = parseInt(pct);
  if (n >= 25) return "bg-amber-100 text-amber-800 border-amber-200";
  if (n >= 15) return "bg-primary-100 text-primary-800 border-primary-200";
  return "bg-slate-100 text-slate-600 border-slate-200";
}

const relatedItems = [
  { href: "/the-link-city", title: "Tổng quan The Link City", description: "Thông tin đầy đủ về dự án.", tag: "Tổng quan" },
  { href: "/the-link-city/bang-gia", title: "Bảng giá The Link City", description: "Liên hệ nhận bảng giá cập nhật.", tag: "Bảng giá" },
  { href: "/the-link-city/phap-ly", title: "Pháp lý The Link City", description: "Sổ hồng 2026, UBND tỉnh chỉ đạo cấp sổ.", tag: "Pháp lý" },
  { href: "/the-link-city/mat-bang", title: "Mặt bằng The Link City", description: "3 loại sản phẩm, 2 giai đoạn.", tag: "Mặt bằng" },
  { href: "/the-link-city/faq", title: "Câu hỏi thường gặp", description: "Giải đáp câu hỏi phổ biến.", tag: "FAQ" },
];

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function ThanhToanPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("lien-ke");
  const tab = paymentTabs[activeTab];
  const Icon = tab.icon;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 min-h-screen">
        <SubPageHeader
          tag="Chính sách bán hàng"
          title="Chính Sách Bán Hàng & Tiến Độ Thanh Toán"
          subtitle="Căn cứ Thông báo số 14/2026/TB-KO/TGĐ ngày 27/01/2026 của Địa Ốc Kim Oanh. Gồm tiến độ thanh toán, gói vay VietinBank và chiết khấu ưu đãi."
          breadcrumbs={[
            { label: "The Link City", href: "/the-link-city" },
            { label: "Thanh toán" },
          ]}
          updatedAt="27/01/2026"
          backHref="/the-link-city"
          backLabel="Quay lại trang The Link City"
        />

        {/* ── SECTION 1: TIẾN ĐỘ THANH TOÁN 3 TAB ── */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">Tiến độ thanh toán</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
                Phương thức thanh toán vốn tự có
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Chọn loại sản phẩm để xem tiến độ thanh toán tương ứng.
                Căn cứ: TB số 14/2026/TB-KO/TGĐ ngày 27/01/2026.
              </p>
            </div>

            {/* Tab switcher */}
            <div className="flex gap-2 mb-6 anim-up overflow-x-auto no-scrollbar pb-1">
              {tabOrder.map((key) => {
                const t = paymentTabs[key];
                const TabIcon = t.icon;
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
                                flex-shrink-0 transition-all duration-200 border
                      ${isActive
                        ? "bg-primary-600 text-white border-primary-600 shadow-md"
                        : "bg-white text-slate-600 border-slate-200 hover:border-primary-300 hover:text-primary-600"}`}
                  >
                    <TabIcon className="w-4 h-4" />
                    {t.title}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden anim-up">
              {/* Header */}
              <div className={`px-5 py-4 border-b flex items-center justify-between gap-4 bg-primary-50 border-primary-100`}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-500 font-semibold uppercase tracking-widest">Loại sản phẩm</p>
                    <p className="font-bold text-primary-800">{tab.title}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Đặt cọc</p>
                  <p className="font-black text-slate-800 text-base">{tab.coc}</p>
                </div>
              </div>

              {/* Table — text HTML chuẩn để Google index */}
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-left px-5 py-2.5 text-xs font-bold text-slate-500 uppercase tracking-wider w-[80px]">Đợt</th>
                    <th className="text-left px-5 py-2.5 text-xs font-bold text-slate-500 uppercase tracking-wider">Thời điểm thanh toán</th>
                    <th className="text-right px-5 py-2.5 text-xs font-bold text-slate-500 uppercase tracking-wider w-[80px]">Tỷ lệ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {tab.rows.map((row, i) => (
                    <tr key={i} className={`hover:bg-slate-50 transition-colors ${row.note ? "bg-amber-50/40" : ""}`}>
                      <td className="px-5 py-3">
                        <span className="text-xs font-bold text-slate-500">{row.dot}</span>
                      </td>
                      <td className="px-5 py-3">
                        <p className="text-slate-700 text-sm leading-snug">{row.label}</p>
                        {row.note && (
                          <p className="text-[11px] text-amber-700 font-semibold mt-0.5">{row.note}</p>
                        )}
                      </td>
                      <td className="px-5 py-3 text-right">
                        <span className={`inline-block text-xs font-black px-2.5 py-1 rounded-full border ${pctColor(row.pct)}`}>
                          {row.pct}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-primary-50 border-t-2 border-primary-200">
                    <td className="px-5 py-3" colSpan={2}>
                      <p className="text-xs font-bold text-primary-800">Tổng giá trị thanh toán (chưa tính cọc)</p>
                      <p className="text-[11px] text-primary-600 mt-0.5">
                        Cọc {tab.coc} được trừ vào Đợt 1 khi ký hợp đồng
                      </p>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className="text-base font-black text-primary-800">100%</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Source note */}
            <p className="text-[11px] text-slate-400 mt-3 anim-up">
              Nguồn: Thông báo số 14/2026/TB-KO/TGĐ ngày 27/01/2026 của Địa Ốc Kim Oanh.
              Tiến độ có thể thay đổi — vui lòng liên hệ để xác nhận phiên bản hiện hành.
            </p>

            {/* Download PDF chính sách */}
            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 anim-up">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                  <Download className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-700">Văn bản chính sách bán hàng 14/2026</p>
                  <p className="text-xs text-slate-400 mt-0.5">TB số 14/2026/TB-KO/TGĐ ngày 27/01/2026 · File PDF</p>
                </div>
              </div>
              <a
                href="/the%20link/14.2026_Ch%C3%ADnh%20s%C3%A1ch%20cho%20kh%C3%A1ch%20h%C3%A0ng%20-%20D%E1%BB%B1%20%C3%A1n%20Khu%20d%C3%A2n%20c%C6%B0%20A1-C1-%C4%90%C3%B4%20th%E1%BB%8B%20D%E1%BA%A7u%20Gi%C3%A2y.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white
                           font-bold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm flex-shrink-0"
              >
                <Download className="w-4 h-4" />
                📥 Tải PDF Chính Sách
              </a>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: GÓI GIẢI PHÁP TÀI CHÍNH VIETINBANK ── */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">Hỗ trợ tài chính</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
                Gói Giải Pháp Tài Chính VietinBank
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Đồng hành độc quyền cùng VietinBank chi nhánh Biên Hòa.
              </p>
            </div>

            {/* Stats nổi bật */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 anim-stagger">
              {[
                { label: "Vốn tự có tối thiểu", value: "30%",      sub: "Chỉ cần 30% ban đầu",              color: "amber" },
                { label: "Hạn mức vay tối đa",  value: "70%",      sub: "Giá trị sản phẩm",                 color: "primary" },
                { label: "Thời gian vay",        value: "20–30",    sub: "Năm linh hoạt",                    color: "primary" },
                { label: "Ân hạn nợ gốc",        value: "24 tháng", sub: "Chỉ trả lãi 2 năm đầu",           color: "green" },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`rounded-2xl p-4 text-center border
                    ${s.color === "amber"   ? "bg-amber-50 border-amber-200"
                    : s.color === "green"   ? "bg-green-50 border-green-200"
                    : "bg-primary-50 border-primary-200"}`}
                >
                  <p className={`text-2xl font-black mb-1
                    ${s.color === "amber"   ? "text-amber-700"
                    : s.color === "green"   ? "text-green-700"
                    : "text-primary-700"}`}>
                    {s.value}
                  </p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">{s.label}</p>
                  <p className="text-[11px] text-slate-500">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Chi tiết gói */}
            <div className="rounded-2xl border border-blue-200 overflow-hidden anim-up">
              <div className="px-6 py-4 bg-blue-600 text-white flex items-center gap-3">
                <Landmark className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <div>
                  <p className="text-xs text-blue-200 font-bold uppercase tracking-widest">Ngân hàng đồng hành độc quyền</p>
                  <p className="font-bold text-lg">VietinBank chi nhánh Biên Hòa</p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="space-y-3">
                  {[
                    { icon: "💰", title: "Vốn tự có ban đầu",  detail: "Chỉ cần 30% — ngân hàng hỗ trợ phần còn lại" },
                    { icon: "📊", title: "Hạn mức vay",        detail: "Tối đa 70% giá trị sản phẩm" },
                    { icon: "📅", title: "Thời gian vay",      detail: "Linh hoạt từ 20 đến 30 năm tùy nhu cầu" },
                    { icon: "⭐", title: "Ưu đãi độc quyền",   detail: "Ân hạn nợ gốc 24 tháng — khách hàng chỉ trả lãi suất theo ngân hàng trong 2 năm đầu", highlight: true },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border
                        ${item.highlight
                          ? "bg-amber-50 border-amber-200"
                          : "bg-slate-50 border-slate-100"}`}
                    >
                      <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <p className={`text-sm font-bold mb-0.5 ${item.highlight ? "text-amber-800" : "text-slate-700"}`}>
                          {item.title}
                          {item.highlight && (
                            <span className="ml-2 text-[10px] font-black bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">
                              ƯU ĐÃI ĐỘC QUYỀN
                            </span>
                          )}
                        </p>
                        <p className={`text-xs leading-relaxed ${item.highlight ? "text-amber-700" : "text-slate-500"}`}>
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote VietinBank */}
                <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-4">
                  <blockquote className="text-sm text-blue-900 italic leading-relaxed">
                    &ldquo;VietinBank chi nhánh Biên Hòa rất an tâm về pháp lý cũng như tiến độ triển khai dự án The Link City.&rdquo;
                  </blockquote>
                  <p className="text-[11px] text-blue-600 mt-2">
                    — Bà Nguyễn Thị Ngọc Trúc, Phó Giám đốc VietinBank chi nhánh Biên Hòa · 23/12/2025
                  </p>
                </div>

                <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-3 flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[11px] text-amber-700 leading-relaxed">
                    Lãi suất cụ thể áp dụng theo chính sách VietinBank tại thời điểm giải ngân.
                    Vui lòng liên hệ VietinBank chi nhánh Biên Hòa hoặc tư vấn viên Kim Oanh Land để biết điều kiện chính xác.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: CHIẾT KHẤU ƯU ĐÃI ── */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">Chiết khấu ưu đãi</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
                Chính Sách Chiết Khấu Ưu Đãi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 anim-stagger">
              {/* CK thanh toán sớm */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-200 flex items-center justify-center flex-shrink-0">
                    <Percent className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Ưu đãi 1</p>
                    <h3 className="font-bold text-amber-900">Chiết khấu thanh toán sớm</h3>
                  </div>
                </div>
                <div className="rounded-xl bg-amber-100 border border-amber-200 px-4 py-3 mb-3">
                  <p className="text-2xl font-black text-amber-800 text-center">16%<span className="text-base font-bold">/năm</span></p>
                  <p className="text-xs text-amber-700 text-center mt-0.5">Lãi suất tương đương</p>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Hưởng mức chiết khấu tương đương <strong>16%/năm</strong> tính trên số tiền
                  và số ngày thanh toán <strong>vượt tiến độ</strong> quy định.
                </p>
              </div>

              {/* CK số lượng lớn */}
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-200 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest">Ưu đãi 2</p>
                    <h3 className="font-bold text-primary-900">Chiết khấu mua nhiều sản phẩm</h3>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    { qty: "Mua 2 sản phẩm",              ck: "CK 1%",   color: "bg-primary-100 text-primary-800 border-primary-200" },
                    { qty: "Mua 3 sản phẩm",              ck: "CK 1,5%", color: "bg-primary-200 text-primary-900 border-primary-300" },
                    { qty: "Mua từ 4 sản phẩm trở lên",   ck: "CK 2%",   color: "bg-primary-600 text-white border-primary-600" },
                  ].map((row) => (
                    <div key={row.qty} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                        <p className="text-xs font-semibold text-slate-700">{row.qty}</p>
                      </div>
                      <span className={`text-xs font-black px-3 py-1 rounded-full border ${row.color}`}>
                        {row.ck}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-primary-700 mt-3 leading-relaxed">
                  Áp dụng cho khách hàng và người thân. Tổng chiết khấu cộng dồn với CK thanh toán sớm.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 anim-up">
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Căn cứ: Thông báo số 14/2026/TB-KO/TGĐ ngày 27/01/2026 của Địa Ốc Kim Oanh.
                Các chính sách ưu đãi có thể thay đổi theo từng giai đoạn mở bán. Vui lòng xác nhận với tư vấn viên trước khi đặt cọc.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: FAQ ── */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <div className="mb-6 anim-up">
              <span className="section-label">FAQ</span>
              <h2 className="text-xl font-bold text-slate-800 mt-1">Câu hỏi về thanh toán & tài chính</h2>
            </div>
            <div className="space-y-3 anim-stagger-slow">
              {faqSchema.mainEntity.map((faq, i) => (
                <details key={i} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden anim-card">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer px-5 py-4
                                       font-semibold text-slate-800 text-sm list-none group-open:text-primary-700 select-none">
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
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center anim-up">
            <h2 className="text-2xl font-bold text-white mb-3">
              Nhận tư vấn tài chính The Link City
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              Tư vấn viên Kim Oanh Land sẽ kết nối bạn với VietinBank Biên Hòa
              và hỗ trợ toàn bộ thủ tục vay — ân hạn nợ gốc 24 tháng.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300
                           text-slate-900 font-bold text-sm px-7 py-3.5 rounded-full transition-colors
                           shadow-lg shadow-amber-400/30"
              >
                <Phone className="w-4 h-4" />
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={SITE_CONFIG.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20
                           border border-white/20 text-white font-bold text-sm px-7 py-3.5 rounded-full
                           transition-colors backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Nhắn Zalo
              </a>
            </div>
          </div>
        </section>

        <RelatedContent title="Tìm hiểu thêm về The Link City" items={relatedItems} />

        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/the-link-city" className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-semibold">
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            Quay lại trang tổng quan The Link City
          </Link>
        </div>
      </div>

      <CorpFooter />
    </>
  );
}
