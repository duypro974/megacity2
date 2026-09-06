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
  TrendingDown, ShieldCheck, Banknote,
} from "lucide-react";

// ── JSON-LD (inline vì "use client") ─────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bảng Giá The Link City Dầu Giây 2026 – Giá chính thức từng lô",
  description:
    "Bảng giá The Link City 2026: 369 lô Sẵn sàng, đất nền từ 1,852 tỷ, biệt thự từ 3,744 tỷ, nhà phố xây sẵn từ 3,855 tỷ. Dữ liệu từ CRM Kim Oanh Land.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-01-27",
  dateModified: "2026-09-05",
  url: "https://kimoanhdongnai.com.vn/the-link-city/bang-gia",
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  name: "Bảng giá The Link City Dầu Giây",
  priceCurrency: "VND",
  lowPrice: String(STATS.minPrice),
  highPrice: String(STATS.maxPrice),
  offerCount: STATS.total,
  itemCondition: "https://schema.org/NewCondition",
  seller: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 min-h-screen">
        <SubPageHeader
          tag="Bảng giá"
          title="Bảng Giá The Link City Dầu Giây"
          subtitle={`${STATS.total} sản phẩm Sẵn sàng · Dữ liệu từ CRM Kim Oanh Land · Đất nền từ 1,852 tỷ · Biệt thự từ 3,744 tỷ · Nhà phố từ 3,855 tỷ`}
          breadcrumbs={[
            { label: "The Link City", href: "/the-link-city" },
            { label: "Bảng giá" },
          ]}
          updatedAt="05/09/2026"
          backHref="/the-link-city"
          backLabel="Quay lại trang The Link City"
        />

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
                Giá có VAT · Cập nhật tháng 9/2026 · Số lượng lô <strong>Sẵn sàng</strong> theo CRM
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
            5. CTA LIÊN HỆ
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
