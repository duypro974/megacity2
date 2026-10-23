"use client";

/**
 * /the-link-city/bang-gia
 * Bảng giá chính thức The Link City — 369 sản phẩm Sẵn sàng
 */

import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import BangGiaTable from "@/components/thelinkcity/BangGiaTable";
import { SITE_CONFIG } from "@/data/siteConfig";
import { STATS } from "@/data/bangGiaData";
import {
  Phone, MessageCircle, ArrowRight, Download,
  Building2, Store, Layers, ChevronRight,
  TrendingDown, ShieldCheck, Banknote, Star,
  CheckCircle2, HelpCircle, Sparkles, MapPin, TrendingUp,
} from "lucide-react";

// ── JSON-LD Schemas ────────────────────────────────────────────────────────
const BASE_URL = "https://kimoanhdongnai.com.vn";
const PAGE_URL = `${BASE_URL}/the-link-city/bang-gia`;

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Mua Bán Đất Nền The Link City Dầu Giây 2026",
  image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1280,c_limit/thelinkcity/overview/1.webp",
  description:
    "Thông tin mua bán đất Dầu Giây mới nhất 2026: Bảng giá 369 sản phẩm đất nền The Link City giá gốc CĐT từ 1,852 tỷ/nền. Sổ hồng sẵn từng nền, VietinBank cho vay 70%, ân hạn nợ gốc 24 tháng.",
  brand: {
    "@type": "Brand",
    name: "Kim Oanh Land",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "VND",
    lowPrice: String(STATS.minPrice),
    highPrice: String(STATS.maxPrice),
    offerCount: String(STATS.total),
    priceValidUntil: "2026-12-31",
    itemCondition: "https://schema.org/NewCondition",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Kim Oanh Đồng Nai",
      url: BASE_URL,
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "128",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Lê Văn Hùng",
      },
      datePublished: "2026-02-18",
      reviewBody: "Đất nền The Link City Dầu Giây sổ hồng riêng trao tay, vị trí ngay nút giao cao tốc rất thuận tiện đầu tư dài hạn.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Thị trường mua bán đất Dầu Giây năm 2026 có gì nổi bật và giá bao nhiêu 1m²?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thị trường mua bán đất Dầu Giây năm 2026 ghi nhận mức giá phổ biến từ 19,5 – 22 triệu/m² đối với các dự án đô thị quy hoạch chuẩn chỉnh và 25 – 32 triệu/m² tại khu dân cư tự phát mặt tiền kinh doanh. Trong đó, đất nền The Link City (KDC A1-C1) là điểm sáng nhờ mức giá gốc chỉ từ 19,5 triệu/m², sổ hồng sẵn trao tay và hạ tầng điện âm hoàn thiện 100%.",
      },
    },
    {
      "@type": "Question",
      name: "Mua bán đất Dầu Giây tại The Link City có sổ hồng sang tên công chứng ngay không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Toàn bộ 369 sản phẩm đất nền The Link City Dầu Giây đều đã có sổ hồng riêng từng nền đứng tên chủ đầu tư. Khách hàng giao dịch được ký hợp đồng công chứng chuyển nhượng quyền sử dụng đất ngay trong tuần, pháp lý minh bạch tuyệt đối.",
      },
    },
    {
      "@type": "Question",
      name: "Đất nền The Link City Dầu Giây giá bao nhiêu 1m²?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đơn giá đất nền liên kế The Link City dao động từ 19,5 – 22 triệu/m² tùy theo vị trí trục đường và lô góc. Biệt thự vườn có đơn giá từ ~15,6 triệu/m². Đây là mức giá đã bao gồm VAT và hạ tầng kỹ thuật hoàn thiện 100%.",
      },
    },
    {
      "@type": "Question",
      name: "Lô đất có giá thấp nhất tại The Link City hiện tại là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lô đất có giá thấp nhất là 1.852.500.000 VNĐ cho diện tích chuẩn 95 m² (5x19m) thuộc trục đường nội bộ N20 (lộ giới 13m).",
      },
    },
    {
      "@type": "Question",
      name: "Chính sách vay ngân hàng VietinBank tại The Link City như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VietinBank chi nhánh Biên Hòa hỗ trợ khách hàng vay tối đa 70% giá trị lô đất với thời hạn vay lên đến 20 năm, đặc biệt được hỗ trợ ân hạn nợ gốc 24 tháng.",
      },
    },
    {
      "@type": "Question",
      name: "Mua The Link City có được hưởng chiết khấu thanh toán sớm không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khách hàng thanh toán sớm được hưởng mức chiết khấu tương đương lãi suất 16%/năm tính trên số tiền và số ngày thanh toán trước hạn. Khách mua sỉ từ 2 sản phẩm trở lên được chiết khấu thêm từ 1% đến 2%.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "The Link City", item: `${BASE_URL}/the-link-city` },
    { "@type": "ListItem", position: 3, name: "Bảng giá", item: PAGE_URL },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bán Đất Dầu Giây 2026: Bảng Giá The Link City Từ 1,85 Tỷ (Sổ Hồng Riêng)",
  description:
    "Thông tin mua bán đất Dầu Giây 2026: 369 lô đất nền The Link City giá từ 1,852 tỷ/nền (19,5 tr/m²). Sổ hồng riêng từng nền, VietinBank cho vay 70%, công chứng sang tên ngay.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  datePublished: "2026-01-27",
  dateModified: "2026-10-17",
  url: PAGE_URL,
};

// ── Price summary cards ───────────────────────────────────────────────────
const PRICE_CARDS = [
  {
    icon: "🏞️",
    type: "Đất nền liên kế",
    tag: "Đất nền",
    fromPrice: "1,852 tỷ/nền",
    area: "95 m² – 162 m²",
    unitPrice: "Đơn giá từ ~19,5 tr/m²",
    count: STATS.datNen,
    color: "amber",
    highlight: false,
  },
  {
    icon: "🏡",
    type: "Biệt thự vườn",
    tag: "Biệt thự",
    fromPrice: "3,744 tỷ/căn",
    area: "240 m² – 312 m²",
    unitPrice: "Đơn giá từ ~15,6 tr/m²",
    count: STATS.bietThu,
    color: "violet",
    highlight: true,
  },
  {
    icon: "🏪",
    type: "Nhà phố xây sẵn",
    tag: "Nhà phố",
    fromPrice: "3,855 tỷ/căn",
    area: "100 m² – 152 m²",
    unitPrice: "Đã gồm nhà hoàn thiện",
    count: STATS.nhaPho,
    color: "emerald",
    highlight: false,
  },
];

const relatedItems = [
  { href: "/the-link-city",            title: "Tổng quan The Link City",       description: "Thông tin đầy đủ về dự án.",               tag: "Tổng quan" },
  { href: "/the-link-city/thanh-toan", title: "Chính sách thanh toán",         description: "VietinBank 70%, CK 16%/năm.",               tag: "Thanh toán" },
  { href: "/the-link-city/mat-bang",   title: "Mặt bằng phân lô",              description: "Sơ đồ phân lô chi tiết 2 giai đoạn.",       tag: "Mặt bằng" },
  { href: "/the-link-city/phap-ly",    title: "Pháp lý The Link City",         description: "Sổ hồng 2026, UBND tỉnh chỉ đạo cấp sổ.",  tag: "Pháp lý" },
  { href: "/the-link-city/tien-do",    title: "Tiến độ xây dựng",              description: "GĐ1 hoàn thiện, GĐ2 ~55%.",                tag: "Tiến độ" },
];

// ── Component ─────────────────────────────────────────────────────────────
export default function BangGiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 min-h-screen">
        <SubPageHeader
          tag="Mua Bán Đất Dầu Giây · Bảng Giá 2026"
          title="Bảng Giá Mua Bán Đất Dầu Giây — The Link City 2026"
          subtitle={`${STATS.total} sản phẩm đất nền sổ hồng riêng · Giá gốc CĐT Kim Oanh từ 1,852 tỷ/nền (19,5 tr/m²) · VietinBank cho vay 70% ân hạn gốc 24 tháng`}
          breadcrumbs={[
            { label: "The Link City", href: "/the-link-city" },
            { label: "Bảng giá" },
          ]}
          updatedAt="17/10/2026"
          backHref="/the-link-city"
          backLabel="Quay lại trang The Link City"
        />

        {/* ── Trust & Rating Badge ── */}
        <div className="bg-amber-50/80 border-b border-amber-200 py-3">
          <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-amber-900">4.9 / 5.0</span>
              <span className="text-slate-500 font-normal">(128 nhà đầu tư đã xác thực giỏ hàng)</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600 font-medium">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Sổ hồng sẵn từng nền</span>
              <span className="flex items-center gap-1.5"><Banknote className="w-4 h-4 text-primary-600" /> VietinBank giải ngân 70%</span>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            1. PRICE SUMMARY CARDS
        ══════════════════════════════════════════════════ */}
        <section className="py-10 bg-white border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-6 anim-up">
              <span className="section-label">Khoảng giá</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
                3 dòng sản phẩm · Giá chính thức từ Kim Oanh Land
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Giá có VAT · Cập nhật mới nhất tháng 10/2026 · Số lượng lô <strong>Sẵn sàng</strong> theo CRM
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 anim-stagger">
              {PRICE_CARDS.map((c) => {
                const borderColor =
                  c.color === "amber"  ? "border-amber-200"  :
                  c.color === "violet" ? "border-violet-200" : "border-emerald-200";
                const bgColor =
                  c.color === "amber"  ? "bg-amber-50"  :
                  c.color === "violet" ? "bg-violet-50" : "bg-emerald-50";
                const tagColor =
                  c.color === "amber"  ? "bg-amber-400 text-slate-900"  :
                  c.color === "violet" ? "bg-violet-500 text-white"     : "bg-emerald-500 text-white";
                const priceColor =
                  c.color === "amber"  ? "text-amber-700"  :
                  c.color === "violet" ? "text-violet-700" : "text-emerald-700";

                return (
                  <div key={c.type}
                    className={`relative rounded-2xl border-2 p-6 transition-shadow hover:shadow-lg
                      ${borderColor} ${c.highlight ? "shadow-md ring-2 ring-violet-200" : "bg-white shadow-sm"}`}>
                    {c.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-violet-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow">
                          ✦ Sản phẩm nổi bật
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{c.icon}</span>
                      <div>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${tagColor}`}>
                          {c.tag}
                        </span>
                        <p className="font-bold text-slate-800 mt-1 text-sm">{c.type}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Giá từ</p>
                      <p className={`text-2xl font-black ${priceColor}`}>{c.fromPrice}</p>
                    </div>

                    <div className={`rounded-xl p-3 space-y-1.5 ${bgColor}`}>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Diện tích</span>
                        <span className="font-semibold text-slate-700">{c.area}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Đơn giá</span>
                        <span className="font-semibold text-slate-700">{c.unitPrice}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Sẵn sàng</span>
                        <span className="font-bold text-emerald-600">{c.count} lô</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ưu đãi nhanh */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 anim-stagger">
              {[
                { icon: Banknote,   text: "Vay VietinBank tối đa 70% · Ân hạn gốc 24 tháng" },
                { icon: TrendingDown, text: "Chiết khấu thanh toán sớm 16%/năm" },
                { icon: ShieldCheck,  text: "Sổ hồng từng nền · CĐT Phú Việt Tín" },
              ].map((item) => (
                <div key={item.text}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                  <item.icon className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  <p className="text-xs text-slate-600 font-medium leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            2. BẢNG GIÁ TƯƠNG TÁC
        ══════════════════════════════════════════════════ */}
        <section id="bang-gia-table" className="py-12 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-6 anim-up">
              <span className="section-label">Danh sách sản phẩm</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
                Bảng giá chi tiết — {STATS.total} lô Sẵn sàng
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Lọc theo loại sản phẩm · Click <strong>Tính lãi</strong> để xem dòng tiền · Click <strong>Báo giá</strong> để giữ chỗ
              </p>
            </div>

            <BangGiaTable />

            {/* Disclaimer */}
            <p className="mt-4 text-[11px] text-slate-400 text-center leading-relaxed">
              * Giá trên là giá niêm yết có VAT từ hệ thống CRM · Giá thực tế có thể điều chỉnh theo từng thời điểm · Vui lòng liên hệ để xác nhận
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            3. LEAD MAGNET — Tải file Excel
        ══════════════════════════════════════════════════ */}
        <section className="py-10 bg-white border-t border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-10 text-center anim-up shadow-xl">
              <div className="text-4xl mb-4">📊</div>
              <h2 className="text-lg md:text-2xl font-black text-white mb-3 leading-snug">
                Bạn muốn xem bảng giá đầy đủ chi tiết từng mét vuông<br className="hidden md:block" />
                của toàn bộ 100+ lô đất?
              </h2>
              <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
                File Excel gốc từ Kim Oanh Land gồm đầy đủ: mã lô, diện tích, giá VAT,
                trục đường, trạng thái và sơ đồ vị trí từng lô.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {/* Tải Excel trực tiếp từ /public */}
                <a
                  href="/bang-gia-the-link-city.xlsx"
                  download="Bang-Gia-The-Link-City-2026.xlsx"
                  className="inline-flex items-center justify-center gap-2.5
                             bg-amber-400 hover:bg-amber-300 text-slate-900
                             font-black text-sm px-7 py-3.5 rounded-xl
                             transition-all shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50"
                >
                  <Download className="w-4 h-4" />
                  Tải File Excel Bảng Giá Gốc (.xlsx)
                </a>
                <a
                  href={`${SITE_CONFIG.social.zalo}?text=Tôi muốn nhận bảng phân lô trống và báo giá The Link City`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5
                             bg-[#0068FF] hover:bg-blue-700 text-white
                             font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Nhận Bảng Phân Lô &amp; Báo Giá Qua Zalo
                </a>
              </div>
              <p className="text-slate-500 text-xs mt-5">
                Phản hồi trong vòng 30 phút · Thứ 2 – Chủ nhật, 8:00–18:00
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            4. CHÍNH SÁCH TÓM TẮT
        ══════════════════════════════════════════════════ */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="anim-up mb-6">
              <span className="section-label">Chính sách ưu đãi</span>
              <h2 className="text-xl font-bold text-slate-800 mt-1">Tóm tắt chính sách bán hàng 2026</h2>
              <p className="text-sm text-slate-500 mt-1">
                Căn cứ TB số 14/2026/TB-KO/TGĐ ngày 27/01/2026.{" "}
                <Link href="/the-link-city/thanh-toan"
                  className="text-primary-600 hover:text-primary-700 font-semibold">
                  Xem bảng thanh toán chi tiết →
                </Link>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 anim-stagger">
              {[
                { icon: "📅", title: "Tiến độ linh hoạt",        desc: "9–10 đợt thanh toán. Cọc từ 50–100 triệu đồng." },
                { icon: "🏦", title: "Vay VietinBank tối đa 70%", desc: "Chỉ cần 30% vốn tự có. Ân hạn nợ gốc 24 tháng." },
                { icon: "⚡", title: "Chiết khấu sớm 16%/năm",    desc: "Tính trên số tiền và số ngày thanh toán vượt tiến độ." },
                { icon: "🏆", title: "Chiết khấu mua nhiều lô",   desc: "Mua 2 SP: +1% · 3 SP: +1,5% · Từ 4 SP: +2%." },
              ].map((item) => (
                <div key={item.title}
                  className="flex items-start gap-4 bg-white rounded-2xl border border-slate-200 p-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-bold text-slate-800 text-sm mb-0.5">{item.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5
                            flex flex-col sm:flex-row items-center justify-between gap-4 anim-up">
              <div>
                <p className="font-bold text-primary-800 text-sm">Xem đầy đủ tiến độ thanh toán và chính sách VietinBank</p>
                <p className="text-xs text-primary-600 mt-0.5">Bảng thanh toán 3 loại SP · Gói tài chính · Widget tính lãi</p>
              </div>
              <Link href="/the-link-city/thanh-toan"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700
                           text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors shadow-sm flex-shrink-0">
                Xem chính sách đầy đủ
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            5. PHÂN TÍCH GIÁ THEO TRỤC ĐƯỜNG & SO SÁNH THỊ TRƯỜNG
        ══════════════════════════════════════════════════ */}
        <section className="py-14 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="anim-up mb-8">
              <span className="section-label">Góc nhìn đầu tư</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
                Phân tích mặt bằng giá The Link City theo trục đường &amp; tiềm năng
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Đánh giá chi tiết cơ cấu giá 369 sản phẩm đất nền ngã tư Dầu Giây tháng 10/2026
              </p>
            </div>

            {/* Price by Road Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs mb-10 anim-up">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Trục đường</th>
                    <th className="p-4">Lộ giới</th>
                    <th className="p-4">Khoảng giá (có VAT)</th>
                    <th className="p-4">Đơn giá TB</th>
                    <th className="p-4">Đặc điểm &amp; Phù hợp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-amber-50/40 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Trục N20</td>
                    <td className="p-4">13 m</td>
                    <td className="p-4 font-black text-amber-700">Từ 1,852 tỷ/lô</td>
                    <td className="p-4 font-semibold">~19,5 tr/m²</td>
                    <td className="p-4 text-xs text-slate-500">Mức giá thấp nhất giỏ hàng, phù hợp vốn tự có 550 triệu, dễ thanh khoản.</td>
                  </tr>
                  <tr className="hover:bg-amber-50/40 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Trục N21 – N23</td>
                    <td className="p-4">13 m – 17 m</td>
                    <td className="p-4 font-black text-amber-700">1,95 – 2,2 tỷ/lô</td>
                    <td className="p-4 font-semibold">~20,5 tr/m²</td>
                    <td className="p-4 text-xs text-slate-500">Liền kề công viên nội khu, không gian thoáng đãng xây nhà vườn an cư.</td>
                  </tr>
                  <tr className="hover:bg-amber-50/40 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Trục D1 – D2</td>
                    <td className="p-4">20,5 m</td>
                    <td className="p-4 font-black text-primary-700">2,3 – 2,8 tỷ/lô</td>
                    <td className="p-4 font-semibold">~22,0 tr/m²</td>
                    <td className="p-4 text-xs text-slate-500">Trục giao thông chính xuyên tâm dự án, tiện mở văn phòng, tiệm thuốc, kinh doanh.</td>
                  </tr>
                  <tr className="hover:bg-amber-50/40 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Biệt thự vườn (BT)</td>
                    <td className="p-4">13 m – 17 m</td>
                    <td className="p-4 font-black text-violet-700">Từ 3,744 tỷ/lô</td>
                    <td className="p-4 font-semibold">~15,6 tr/m²</td>
                    <td className="p-4 text-xs text-slate-500">Diện tích lớn 240–312 m², đơn giá trên mét vuông rẻ nhất toàn dự án.</td>
                  </tr>
                  <tr className="hover:bg-amber-50/40 transition-colors">
                    <td className="p-4 font-bold text-slate-900">Shophouse xây sẵn</td>
                    <td className="p-4">25 m (mặt tiền)</td>
                    <td className="p-4 font-black text-emerald-700">Từ 3,855 tỷ/căn</td>
                    <td className="p-4 font-semibold">Đã gồm nhà</td>
                    <td className="p-4 text-xs text-slate-500">Nhà 1 trệt 2 lầu hoàn thiện mặt ngoài, đón trọn dòng khách ngã tư QL1A &amp; QL20.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Comparison Matrix with Market */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 mb-10 anim-up">
              <div className="flex items-center gap-2 mb-4">
                <span className="p-1.5 bg-primary-600 text-white rounded-lg"><TrendingUp className="w-4 h-4" /></span>
                <h3 className="text-lg font-bold text-slate-900">So sánh mặt bằng giá mua bán đất Dầu Giây 2026</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Khi so sánh trực tiếp với thị trường mua bán đất Dầu Giây (đất thổ cư dân sinh) và các khu đô thị lân cận tại Nhơn Trạch, Long Thành, mức giá từ 19,5 tr/m² của The Link City sở hữu ưu thế áp đảo về hạ tầng quy hoạch bài bản và tính minh bạch pháp lý sổ hồng riêng từng nền:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-4 rounded-2xl border-2 border-emerald-400 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-emerald-700 uppercase">The Link City Dầu Giây</span>
                    <span className="bg-emerald-100 text-emerald-800 font-black px-2 py-0.5 rounded-full">Top 1 Đầu Tư</span>
                  </div>
                  <p className="text-xl font-black text-slate-900 mb-2">~19,5 – 22 tr/m²</p>
                  <ul className="space-y-1.5 text-slate-600">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Sổ hồng riêng từng nền có sẵn</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Điện âm, đường nhựa 13-25m</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> VietinBank cho vay 70%</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200">
                  <span className="font-bold text-slate-600 uppercase mb-2 block">Đất dân ngã tư Dầu Giây</span>
                  <p className="text-xl font-black text-slate-700 mb-2">~25 – 32 tr/m²</p>
                  <ul className="space-y-1.5 text-slate-500">
                    <li>• Hẻm nhỏ 4–6m, hạ tầng tự phát</li>
                    <li>• Dễ dính quy hoạch lộ giới mở đường</li>
                    <li>• Khó tiếp cận gói vay ưu đãi ân hạn gốc</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200">
                  <span className="font-bold text-slate-600 uppercase mb-2 block">Đất nền Nhơn Trạch / Long Thành</span>
                  <p className="text-xl font-black text-slate-700 mb-2">~28 – 45 tr/m²</p>
                  <ul className="space-y-1.5 text-slate-500">
                    <li>• Mặt bằng giá đã neo ở mức cao</li>
                    <li>• Nhiều dự án còn chờ đợi thủ tục ra sổ</li>
                    <li>• Vốn khởi điểm tối thiểu từ 2,8 – 3,5 tỷ</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Accordion Section */}
            <div className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white anim-up">
              <div className="flex items-center gap-2 mb-6">
                <span className="p-1.5 bg-amber-500 text-white rounded-lg"><HelpCircle className="w-4 h-4" /></span>
                <h3 className="text-lg font-bold text-slate-900">Câu hỏi thường gặp về giá bán &amp; pháp lý The Link City</h3>
              </div>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-start gap-2">
                      <span className="text-amber-600">Q{idx + 1}:</span>
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                      {item.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            6. CTA LIÊN HỆ
        ══════════════════════════════════════════════════ */}
        <section className="py-14 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-slate-800 mb-3 anim-up">
              Tư vấn chọn lô & nhận báo giá ngay
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-lg mx-auto anim-up">
              Tư vấn viên Kim Oanh Land hỗ trợ chọn lô phù hợp nhu cầu, tính toán tài chính
              và đặt cọc giữ chỗ trong ngày.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center anim-up">
              <a href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2
                           bg-primary-600 hover:bg-primary-700 text-white
                           font-bold px-7 py-3.5 rounded-xl transition-colors text-sm shadow-sm">
                <Phone className="w-4 h-4" />
                Gọi {SITE_CONFIG.phoneDisplay}
              </a>
              <a href={SITE_CONFIG.social.zalo} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                           bg-[#0068FF] hover:bg-blue-700 text-white
                           font-bold px-7 py-3.5 rounded-xl transition-colors text-sm">
                <MessageCircle className="w-4 h-4" />
                Zalo {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <RelatedContent title="Tìm hiểu thêm về The Link City" items={relatedItems} />

        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/the-link-city"
            className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-semibold">
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            Quay lại trang tổng quan The Link City
          </Link>
        </div>
      </div>

      <CorpFooter />
    </>
  );
}
