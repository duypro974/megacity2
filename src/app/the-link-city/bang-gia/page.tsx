import type { Metadata } from "next";
import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { TLC_OG } from "@/lib/cloudinary";
import { SITE_CONFIG } from "@/data/siteConfig";
import { Phone, MessageCircle, ArrowRight, Info, Building2, Store, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Bảng giá The Link City Dầu Giây – Nhận thông tin giá cập nhật",
  description:
    "Bảng giá The Link City Dầu Giây: liên hệ để nhận bảng giá chính thức từ Kim Oanh Land. 1.397 sản phẩm shophouse, nhà phố liên kế và biệt thự tại xã Dầu Giây, Đồng Nai.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city/bang-gia" },
  openGraph: {
    title: "Bảng giá The Link City Dầu Giây",
    description: "Liên hệ để nhận bảng giá chính thức The Link City. 3 dòng sản phẩm: shophouse, nhà phố liên kế, biệt thự.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: TLC_OG, width: 1280, height: 720, alt: "Bảng giá The Link City Dầu Giây" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảng giá The Link City Dầu Giây",
    description: "Liên hệ nhận bảng giá chính thức. Shophouse, nhà phố liên kế, biệt thự.",
    images: [TLC_OG],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bảng giá The Link City Dầu Giây – Thông tin giá bán chính thức",
  description: "Trang thông tin bảng giá dự án The Link City. Giá bán chính thức chưa được công bố — liên hệ để nhận thông tin cập nhật.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2025-12-23",
  dateModified: "2025-12-23",
  url: "https://kimoanhdongnai.com.vn/the-link-city/bang-gia",
  about: { "@type": "RealEstateListing", name: "The Link City", url: "https://kimoanhdongnai.com.vn/the-link-city" },
};

const relatedItems = [
  { href: "/the-link-city", title: "Tổng quan The Link City", description: "Thông tin đầy đủ về dự án.", tag: "Tổng quan" },
  { href: "/the-link-city/mat-bang", title: "Mặt bằng The Link City", description: "Quy hoạch 2 giai đoạn, 3 loại sản phẩm.", tag: "Mặt bằng" },
  { href: "/the-link-city/thanh-toan", title: "Thanh toán The Link City", description: "VietinBank Biên Hòa hỗ trợ tài chính.", tag: "Thanh toán" },
  { href: "/the-link-city/phap-ly", title: "Pháp lý The Link City", description: "CĐT Phú Việt Tín, tình trạng GCN.", tag: "Pháp lý" },
  { href: "/the-link-city/faq", title: "Câu hỏi thường gặp", description: "Giải đáp câu hỏi phổ biến.", tag: "FAQ" },
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
          title="Bảng giá The Link City Dầu Giây"
          subtitle="Thông tin giá bán dự án The Link City. Bảng giá chính thức sẽ được cập nhật khi có thông tin xác minh từ đơn vị phát triển."
          breadcrumbs={[
            { label: "The Link City", href: "/the-link-city" },
            { label: "Bảng giá" },
          ]}
          updatedAt="23/12/2025"
          backHref="/the-link-city"
          backLabel="Quay lại trang The Link City"
        />

        {/* Thông báo chưa có giá */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 text-center anim-up shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-5">
                <span className="text-3xl">📋</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
                Chưa có bảng giá chính thức công khai
              </h2>
              <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed mb-2">
                Chúng tôi chưa có bảng giá chính thức được xác minh từ chủ đầu tư Phú Việt Tín hoặc đơn vị
                phát triển Kim Oanh Land.
              </p>
              <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed mb-8">
                Thông tin giá từ các nguồn chưa xác minh sẽ không được đăng tải để đảm bảo tính chính xác.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
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
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border
                             border-slate-200 text-slate-700 font-bold text-sm px-7 py-3.5 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-blue-500" />
                  Nhắn Zalo nhận bảng giá
                </a>
              </div>
              <p className="text-xs text-slate-400">
                Bảng giá sẽ được cập nhật khi có thông tin chính thức được xác minh.
              </p>
            </div>
          </div>
        </section>

        {/* Cơ cấu sản phẩm */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Cơ cấu sản phẩm đã xác minh</h2>
              <p className="text-sm text-slate-500">
                Các thông tin về loại sản phẩm đã được xác minh từ kimoanhgroup.vn. Giá bán chưa có nguồn xác minh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 anim-stagger">
              {[
                {
                  type: "Nhà phố thương mại",
                  sub: "Shophouse",
                  icon: Store,
                  color: "amber",
                  features: ["Mặt tiền đường thương mại", "Kết hợp kinh doanh và ở", "Nội khu The Link City"],
                },
                {
                  type: "Nhà phố liên kế",
                  sub: "Townhouse",
                  icon: Building2,
                  color: "primary",
                  features: ["Nhà phố liên kế nội khu", "Phù hợp an cư & đầu tư", "Trong khu đô thị The Link City"],
                },
                {
                  type: "Biệt thự",
                  sub: "Villa",
                  icon: Layers,
                  color: "slate",
                  features: ["Sản phẩm cao cấp", "Không gian riêng tư", "Diện tích rộng hơn nhà phố"],
                },
              ].map((p) => (
                <div key={p.type} className="bg-white rounded-2xl border border-slate-200 p-5 anim-card">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3
                    ${p.color === "amber" ? "bg-amber-50" : p.color === "primary" ? "bg-primary-50" : "bg-slate-100"}`}>
                    <p.icon className={`w-5 h-5 ${p.color === "amber" ? "text-amber-600" : p.color === "primary" ? "text-primary-600" : "text-slate-600"}`} />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{p.sub}</p>
                  <h3 className="font-bold text-slate-800 mb-3">{p.type}</h3>
                  <ul className="space-y-1.5 mb-4">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-lg bg-slate-50 px-3 py-2 border border-slate-100">
                    <p className="text-[10px] text-slate-400 italic">Giá bán: liên hệ để nhận bảng giá</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 anim-up">
              <div className="flex items-start gap-3">
                <Info className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-700 mb-1">Vì sao không đăng giá tham khảo?</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Thông tin giá từ các trang môi giới không xác minh được nguồn và có thể không chính xác.
                    Chúng tôi ưu tiên tính chính xác và minh bạch thay vì chạy theo lượng thông tin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl font-bold text-slate-800 mb-3 anim-up">Nhận bảng giá The Link City</h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 anim-up">
              Để lại thông tin liên hệ, tư vấn viên Kim Oanh Land sẽ gửi bảng giá và
              thông tin mặt bằng sản phẩm phù hợp với nhu cầu của bạn.
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
