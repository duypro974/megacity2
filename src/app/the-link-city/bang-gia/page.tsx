import type { Metadata } from "next";
import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { TLC_OG } from "@/lib/cloudinary";
import { SITE_CONFIG } from "@/data/siteConfig";
import { Phone, MessageCircle, ArrowRight, Building2, Store, Layers, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bảng Giá The Link City Dầu Giây 2026 – Nhận Giá Chính Thức",
  description:
    "Bảng giá The Link City Dầu Giây 2026: liên hệ nhận giá chính thức. Chính sách thanh toán 9–10 đợt, vay VietinBank tối đa 70%, chiết khấu sớm 16%/năm.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city/bang-gia" },
  openGraph: {
    title: "Bảng Giá The Link City Dầu Giây 2026",
    description: "Liên hệ nhận bảng giá chính thức. Thanh toán 9–10 đợt, VietinBank hỗ trợ 70%, chiết khấu sớm 16%/năm.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: TLC_OG, width: 1280, height: 720, alt: "Bảng giá The Link City Dầu Giây 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảng Giá The Link City 2026",
    description: "Liên hệ nhận giá chính thức. 3 loại sản phẩm: shophouse, nhà phố, biệt thự.",
    images: [TLC_OG],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bảng giá The Link City Dầu Giây 2026 – Thông tin giá bán chính thức",
  description:
    "Trang thông tin bảng giá The Link City 2026. Giá bán chính thức nhận trực tiếp từ Kim Oanh Land. Chính sách thanh toán và ưu đãi theo TB 14/2026.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-01-27",
  dateModified: "2026-09-04",
  url: "https://kimoanhdongnai.com.vn/the-link-city/bang-gia",
  about: { "@type": "RealEstateListing", name: "The Link City", url: "https://kimoanhdongnai.com.vn/the-link-city" },
};

const relatedItems = [
  { href: "/the-link-city", title: "Tổng quan The Link City", description: "Thông tin đầy đủ về dự án.", tag: "Tổng quan" },
  { href: "/the-link-city/thanh-toan", title: "Chính sách & Tiến độ thanh toán", description: "Bảng thanh toán 3 loại sản phẩm, VietinBank 70%, CK 16%/năm.", tag: "Thanh toán" },
  { href: "/the-link-city/phap-ly", title: "Pháp lý The Link City", description: "Sổ hồng 2026, UBND tỉnh chỉ đạo cấp sổ.", tag: "Pháp lý" },
  { href: "/the-link-city/mat-bang", title: "Mặt bằng The Link City", description: "Sơ đồ phân lô, 3 loại sản phẩm, hồ sơ T3-2b.", tag: "Mặt bằng" },
  { href: "/the-link-city/faq", title: "Câu hỏi thường gặp", description: "Giải đáp câu hỏi phổ biến về dự án.", tag: "FAQ" },
];

export default function BangGiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 min-h-screen">
        <SubPageHeader
          tag="Bảng giá"
          title="Bảng Giá The Link City Dầu Giây"
          subtitle="Liên hệ để nhận bảng giá chính thức từ Kim Oanh Land. Chính sách thanh toán linh hoạt theo TB 14/2026 với ưu đãi vay VietinBank và chiết khấu sớm."
          breadcrumbs={[
            { label: "The Link City", href: "/the-link-city" },
            { label: "Bảng giá" },
          ]}
          updatedAt="04/09/2026"
          backHref="/the-link-city"
          backLabel="Quay lại trang The Link City"
        />

        {/* ── NHẬN BẢNG GIÁ ── */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 text-center anim-up shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center
                              justify-center mx-auto mb-5">
                <span className="text-3xl">📋</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
                Nhận bảng giá chính thức The Link City
              </h2>
              <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed mb-2">
                Bảng giá chi tiết từng lô được cung cấp trực tiếp từ đơn vị phát triển Kim Oanh Land
                theo đúng giá chủ đầu tư Phú Việt Tín công bố.
              </p>
              <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed mb-8">
                Thông tin giá từ các nguồn chưa xác minh sẽ không được đăng tải để đảm bảo tính chính xác.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700
                             text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  Gọi {SITE_CONFIG.phoneDisplay}
                </a>
                <a
                  href={SITE_CONFIG.social.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0068FF] hover:bg-blue-700
                             text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Nhắn Zalo nhận bảng giá
                </a>
              </div>
              <p className="text-xs text-slate-400">
                Tư vấn viên phản hồi trong giờ hành chính · Thứ 2 – Chủ nhật 8:00–18:00
              </p>
            </div>
          </div>
        </section>

        {/* ── CƠ CẤU SẢN PHẨM ── */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-8">
              <span className="section-label">Sản phẩm</span>
              <h2 className="text-xl font-bold text-slate-800 mt-1">3 loại hình sản phẩm đã xác minh</h2>
              <p className="text-sm text-slate-500 mt-1">
                Tổng cộng 1.397 sản phẩm. Giá bán từng loại: liên hệ để nhận bảng giá chính thức.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 anim-stagger">
              {[
                {
                  type: "Nhà phố thương mại", sub: "Shophouse",   icon: Store,
                  color: "amber",
                  features: ["Mặt tiền đường thương mại nội khu", "Kết hợp kinh doanh tầng trệt & ở trên", "Cọc 100 triệu · 10 đợt thanh toán"],
                },
                {
                  type: "Nhà phố liên kế",   sub: "Townhouse",   icon: Building2,
                  color: "primary",
                  features: ["Nội khu The Link City", "Phù hợp an cư và đầu tư dài hạn", "Cọc 50 triệu · 9 đợt thanh toán"],
                },
                {
                  type: "Biệt thự",          sub: "Villa",        icon: Layers,
                  color: "slate",
                  features: ["Sản phẩm cao cấp, không gian riêng tư", "Diện tích rộng hơn nhà phố", "Cọc 50 triệu · 10 đợt thanh toán"],
                },
              ].map((p) => (
                <div key={p.type} className="bg-white rounded-2xl border border-slate-200 p-5 anim-card hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3
                    ${p.color === "amber" ? "bg-amber-50" : p.color === "primary" ? "bg-primary-50" : "bg-slate-100"}`}>
                    <p.icon className={`w-5 h-5
                      ${p.color === "amber" ? "text-amber-600" : p.color === "primary" ? "text-primary-600" : "text-slate-600"}`} />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{p.sub}</p>
                  <h3 className="font-bold text-slate-800 mb-3">{p.type}</h3>
                  <ul className="space-y-1.5 mb-4">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="w-1 h-1 rounded-full bg-slate-400 flex-shrink-0 mt-1.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-lg bg-slate-50 px-3 py-2 border border-slate-100">
                    <p className="text-[10px] text-slate-400 italic">Giá bán: liên hệ nhận bảng giá chính thức</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TÓM TẮT CHÍNH SÁCH ── */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="anim-up mb-8">
              <span className="section-label">Chính sách ưu đãi</span>
              <h2 className="text-xl font-bold text-slate-800 mt-1">Tóm tắt chính sách bán hàng 2026</h2>
              <p className="text-sm text-slate-500 mt-1">
                Căn cứ TB số 14/2026/TB-KO/TGĐ ngày 27/01/2026.
                <Link href="/the-link-city/thanh-toan" className="ml-1.5 text-primary-600 hover:text-primary-700 font-semibold">
                  Xem bảng thanh toán chi tiết →
                </Link>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 anim-stagger">
              {[
                { icon: "📅", title: "Tiến độ linh hoạt",       desc: "9–10 đợt thanh toán tùy loại sản phẩm. Cọc từ 50–100 triệu." },
                { icon: "🏦", title: "Vay VietinBank tối đa 70%", desc: "Chỉ cần 30% vốn tự có. Ân hạn nợ gốc 24 tháng ưu đãi độc quyền." },
                { icon: "⚡", title: "Chiết khấu sớm 16%/năm",   desc: "Tính trên số tiền và số ngày thanh toán vượt tiến độ." },
                { icon: "🏆", title: "CK mua nhiều",              desc: "Mua 2 SP: CK 1% · Mua 3 SP: CK 1,5% · Từ 4 SP: CK 2%." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-slate-50 rounded-2xl border border-slate-200 p-4 anim-card">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-bold text-slate-800 text-sm mb-0.5">{item.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Link sang thanh-toan */}
            <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5 flex flex-col sm:flex-row
                            items-center justify-between gap-4 anim-up">
              <div>
                <p className="font-bold text-primary-800 text-sm">Xem đầy đủ tiến độ thanh toán và chính sách VietinBank</p>
                <p className="text-xs text-primary-600 mt-0.5">
                  Bảng thanh toán HTML chi tiết 3 loại sản phẩm · Gói tài chính · Chiết khấu
                </p>
              </div>
              <Link
                href="/the-link-city/thanh-toan"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white
                           font-bold text-sm px-5 py-3 rounded-xl transition-colors shadow-sm flex-shrink-0"
              >
                Xem chính sách đầy đủ
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA LIÊN HỆ ── */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-slate-800 mb-3 anim-up">Nhận bảng giá The Link City ngay hôm nay</h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 anim-up">
              Để lại thông tin liên hệ, tư vấn viên Kim Oanh Land sẽ gửi bảng giá cập nhật
              và thông tin mặt bằng từng lô phù hợp nhu cầu của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center anim-up">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700
                           text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Gọi {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={SITE_CONFIG.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0068FF] hover:bg-blue-700
                           text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Zalo {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <RelatedContent title="Tìm hiểu thêm về The Link City" items={relatedItems} />

        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link
            href="/the-link-city"
            className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-semibold"
          >
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            Quay lại trang tổng quan The Link City
          </Link>
        </div>
      </div>

      <CorpFooter />
    </>
  );
}
