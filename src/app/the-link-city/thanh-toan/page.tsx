import type { Metadata } from "next";
import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import { TLC_OG } from "@/lib/cloudinary";
import { SITE_CONFIG } from "@/data/siteConfig";
import { Landmark, Phone, MessageCircle, ArrowRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Thanh toán The Link City Dầu Giây – VietinBank Hỗ trợ Tài chính",
  description:
    "Thông tin thanh toán và hỗ trợ tài chính dự án The Link City Dầu Giây. VietinBank chi nhánh Biên Hòa là ngân hàng đồng hành chính thức từ giai đoạn 1 và 2.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city/thanh-toan" },
  openGraph: {
    title: "Thanh toán The Link City – VietinBank Biên Hòa",
    description: "VietinBank chi nhánh Biên Hòa hỗ trợ tài chính tại The Link City. Liên hệ để biết thông tin gói vay.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: TLC_OG, width: 1280, height: 720, alt: "Thanh toán The Link City Dầu Giây" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanh toán The Link City – VietinBank",
    description: "VietinBank Biên Hòa đồng hành GĐ1 và GĐ2. Liên hệ nhận thông tin gói vay.",
    images: [TLC_OG],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Thanh toán và hỗ trợ tài chính dự án The Link City Dầu Giây",
  description: "Thông tin về phương thức thanh toán và ngân hàng hỗ trợ tài chính tại dự án The Link City.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2025-12-23",
  dateModified: "2025-12-23",
  url: "https://kimoanhdongnai.com.vn/the-link-city/thanh-toan",
  about: { "@type": "RealEstateListing", name: "The Link City", url: "https://kimoanhdongnai.com.vn/the-link-city" },
};

const relatedItems = [
  { href: "/the-link-city", title: "Tổng quan The Link City", description: "Thông tin đầy đủ về dự án.", tag: "Tổng quan" },
  { href: "/the-link-city/bang-gia", title: "Bảng giá The Link City", description: "Liên hệ để nhận bảng giá cập nhật.", tag: "Bảng giá" },
  { href: "/the-link-city/phap-ly", title: "Pháp lý The Link City", description: "CĐT Phú Việt Tín, tình trạng GCN.", tag: "Pháp lý" },
  { href: "/the-link-city/mat-bang", title: "Mặt bằng The Link City", description: "3 loại sản phẩm, 2 giai đoạn.", tag: "Mặt bằng" },
  { href: "/the-link-city/faq", title: "Câu hỏi thường gặp", description: "Giải đáp các câu hỏi phổ biến.", tag: "FAQ" },
];

export default function ThanhToanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 min-h-screen">
        <SubPageHeader
          tag="Thanh toán"
          title="Thanh toán & Hỗ trợ tài chính The Link City"
          subtitle="VietinBank chi nhánh Biên Hòa là ngân hàng đồng hành chính thức của dự án từ giai đoạn 1 và tiếp tục hỗ trợ tài chính giai đoạn 2."
          breadcrumbs={[
            { label: "The Link City", href: "/the-link-city" },
            { label: "Thanh toán" },
          ]}
          updatedAt="23/12/2025"
          backHref="/the-link-city"
          backLabel="Quay lại trang The Link City"
        />

        {/* VietinBank */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Ngân hàng đồng hành chính thức</h2>
              <p className="text-sm text-slate-500">Thông tin xác minh tại sự kiện công bố ngày 23/12/2025.</p>
            </div>

            <div className="rounded-2xl border border-blue-200 overflow-hidden mb-8 anim-up">
              <div className="px-6 py-5 bg-blue-600 text-white flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Landmark className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-0.5">Ngân hàng đồng hành</p>
                  <h3 className="text-xl font-bold">VietinBank chi nhánh Biên Hòa</h3>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <h4 className="font-bold text-slate-700 text-sm mb-3">Hỗ trợ tài chính đã xác minh</h4>
                    <ul className="space-y-2.5 text-sm">
                      {[
                        "Hỗ trợ chi phí chuyển nhượng quyền sử dụng đất",
                        "Hỗ trợ đầu tư hoàn thiện hạ tầng",
                        "Đồng hành từ giai đoạn 1 và tiếp tục GĐ2",
                        "Phối hợp xây dựng gói vay phù hợp với chủ đầu tư",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[10px] text-slate-400 mt-3">
                      Nguồn: Bà Nguyễn Thị Ngọc Trúc – Phó GĐ VietinBank Biên Hòa (23/12/2025)
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <p className="text-xs font-bold text-blue-800 mb-2">Trích dẫn chính thức</p>
                    <blockquote className="text-sm text-blue-900 leading-relaxed italic">
                      &ldquo;VietinBank chi nhánh Biên Hòa rất an tâm về pháp lý cũng như tiến độ triển khai
                      dự án The Link City.&rdquo;
                    </blockquote>
                    <p className="text-[10px] text-blue-600 mt-2 not-italic">
                      — Bà Nguyễn Thị Ngọc Trúc, Phó GĐ VietinBank chi nhánh Biên Hòa
                    </p>
                    <p className="text-[10px] text-blue-500">Sự kiện 23/12/2025 tại xã Dầu Giây</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 anim-up">
              <div className="flex items-start gap-3">
                <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-amber-800 mb-1">Thông tin chưa có nguồn xác minh</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    Thông số cụ thể của các gói vay (lãi suất, tỷ lệ vay, thời hạn vay, điều kiện) hiện chưa được
                    công bố trong các nguồn đã xác minh. Vui lòng liên hệ VietinBank chi nhánh Biên Hòa hoặc
                    Kim Oanh Land để biết thông tin chính thức.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Các bước */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Phương thức thanh toán</h2>
              <p className="text-sm text-slate-500">
                Tiến độ thanh toán cụ thể (%) chưa được công bố chính thức. Liên hệ để nhận thông tin đầy đủ.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 anim-stagger">
              {[
                {
                  step: "01",
                  title: "Liên hệ & Đặt chỗ",
                  desc: "Liên hệ tư vấn viên Kim Oanh Land để nhận thông tin sản phẩm, vị trí và bảng giá.",
                },
                {
                  step: "02",
                  title: "Ký hợp đồng & Thanh toán",
                  desc: "Tiến độ thanh toán theo hợp đồng với chủ đầu tư Phú Việt Tín. Thông số cụ thể liên hệ để biết.",
                },
                {
                  step: "03",
                  title: "Hỗ trợ vay vốn",
                  desc: "VietinBank chi nhánh Biên Hòa sẵn sàng tư vấn gói vay phù hợp theo nhu cầu từng khách hàng.",
                },
              ].map((s) => (
                <div key={s.step} className="bg-white rounded-2xl border border-slate-200 p-5 anim-card">
                  <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center mb-3">
                    <span className="text-white font-black text-sm">{s.step}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-primary-600 text-white p-6 md:p-8 anim-up">
              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <div>
                  <h3 className="font-bold text-lg mb-1">Nhận tư vấn tài chính The Link City</h3>
                  <p className="text-primary-200 text-sm">Liên hệ Kim Oanh Land hoặc VietinBank Biên Hòa để nhận tư vấn gói vay phù hợp.</p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50
                               font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Gọi ngay
                  </a>
                  <a
                    href={SITE_CONFIG.social.zalo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white
                               font-bold text-sm px-5 py-3 rounded-xl transition-colors border border-white/30"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Zalo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs text-slate-400">
              Nguồn: Báo Đồng Nai (23/12/2025) · VietinBank chi nhánh Biên Hòa · Cập nhật: 23/12/2025
            </p>
          </div>
        </section>

        <PageCTA
          title="Hỗ trợ thủ tục vay mua tại The Link City"
          subtitle="Tư vấn viên sẽ kết nối bạn với VietinBank Biên Hòa và hỗ trợ toàn bộ thủ tục tài chính."
          primaryHref="tel:0937587438"
          primaryLabel="Gọi 0937.587.438"
          secondaryHref="https://zalo.me/0937587438"
          secondaryLabel="Nhắn Zalo"
        />

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
