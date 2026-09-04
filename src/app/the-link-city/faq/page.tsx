import type { Metadata } from "next";
import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import { TLC_OG } from "@/lib/cloudinary";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ The Link City Dầu Giây – Câu hỏi thường gặp về dự án",
  description:
    "Giải đáp câu hỏi thường gặp về dự án The Link City tại Dầu Giây, Đồng Nai: vị trí, chủ đầu tư, pháp lý, tiến độ, tiện ích và cách liên hệ.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city/faq" },
  openGraph: {
    title: "FAQ The Link City Dầu Giây – Câu hỏi thường gặp",
    description: "Giải đáp các câu hỏi phổ biến về The Link City: vị trí, CĐT Phú Việt Tín, pháp lý, tiến độ và tiện ích.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: TLC_OG, width: 1280, height: 720, alt: "FAQ về dự án The Link City Dầu Giây" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ The Link City Dầu Giây",
    description: "Câu hỏi thường gặp về vị trí, pháp lý, tiến độ và tiện ích The Link City.",
    images: [TLC_OG],
  },
};

const faqs = [
  {
    category: "Tổng quan dự án",
    questions: [
      {
        q: "The Link City là dự án gì?",
        a: "The Link City là khu dân cư có tên quy hoạch Khu dân cư A1 - C1 Dầu Giây, cung cấp 1.397 sản phẩm gồm nhà phố thương mại (shophouse), nhà phố liên kế và biệt thự.",
        source: "Kim Oanh Land · Báo Đồng Nai (23/12/2025)",
      },
      {
        q: "The Link City ở đâu?",
        a: "Dự án tọa lạc tại xã Dầu Giây, tỉnh Đồng Nai, ngay tại ngã tư Quốc lộ 1A và Quốc lộ 20, trung tâm hành chính xã Dầu Giây.",
        source: "Báo Đồng Nai (23/12/2025)",
      },
      {
        q: "The Link City có bao nhiêu sản phẩm?",
        a: "1.397 sản phẩm gồm nhà phố thương mại (shophouse), nhà phố liên kế và biệt thự.",
        source: "Kim Oanh Land · Báo Đồng Nai (23/12/2025)",
      },
    ],
  },
  {
    category: "Chủ đầu tư & Đơn vị phát triển",
    questions: [
      {
        q: "Chủ đầu tư The Link City là ai?",
        a: "Chủ đầu tư pháp lý là Công ty TNHH Đầu tư Phú Việt Tín (đại diện: Ông Đặng Phước Bình – Tổng Giám đốc). Kim Oanh Land (thuộc Kim Oanh Group) là đơn vị tham gia phát triển và phân phối dự án — không phải chủ đầu tư.",
        source: "Báo Đồng Nai (23/12/2025) — xác nhận bởi ông Mai Văn Hiền – Chủ tịch UBND xã Dầu Giây",
      },
      {
        q: "Kim Oanh Group có phải chủ đầu tư The Link City không?",
        a: "Không. Kim Oanh Land (thuộc Kim Oanh Group) là đơn vị tham gia phát triển và phân phối — không phải chủ đầu tư pháp lý. Chủ đầu tư pháp lý là Công ty TNHH Đầu tư Phú Việt Tín.",
        source: "Báo Đồng Nai (23/12/2025)",
      },
    ],
  },
  {
    category: "Pháp lý",
    questions: [
      {
        q: "The Link City đã có sổ hồng chưa?",
        a: "Theo thông tin công bố ngày 23/12/2025: Giai đoạn 1 một số sản phẩm đã được cấp Giấy chứng nhận quyền sử dụng đất. Giai đoạn 2 đang hoàn thiện điều kiện cấp GCN. Tình trạng GCN từng sản phẩm cụ thể cần kiểm tra trực tiếp trước khi giao dịch.",
        source: "Ông Đặng Phước Bình – TGĐ Phú Việt Tín (23/12/2025)",
      },
      {
        q: "VietinBank có xác nhận pháp lý The Link City không?",
        a: 'Có. Bà Nguyễn Thị Ngọc Trúc – Phó Giám đốc VietinBank chi nhánh Biên Hòa phát biểu: "VietinBank chi nhánh Biên Hòa rất an tâm về pháp lý cũng như tiến độ triển khai dự án The Link City." (23/12/2025)',
        source: "Báo Đồng Nai (23/12/2025)",
      },
      {
        q: "Số quyết định phê duyệt quy hoạch The Link City là gì?",
        a: "Thông tin về số quyết định phê duyệt quy hoạch cụ thể hiện chưa được công bố trong các nguồn đã xác minh. Vui lòng yêu cầu chủ đầu tư Phú Việt Tín hoặc Kim Oanh Land cung cấp hồ sơ gốc.",
        source: "Chưa có nguồn xác minh",
      },
    ],
  },
  {
    category: "Tiến độ xây dựng",
    questions: [
      {
        q: "Tiến độ xây dựng The Link City hiện tại như thế nào?",
        a: "Theo thông tin công bố ngày 23/12/2025 (lưu ý: hiện tại là tháng 9/2026 — thông tin có thể đã thay đổi): Giai đoạn 1 (~53 ha) đã hoàn thiện hạ tầng kỹ thuật. Giai đoạn 2 (~47 ha) đạt khoảng 55% hạ tầng theo giấy phép xây dựng.",
        source: "Báo Đồng Nai (23/12/2025)",
      },
      {
        q: "Trung tâm thương mại 2,6 ha đã xây dựng chưa?",
        a: "Theo thông tin công bố 23/12/2025: Trung tâm thương mại 2,6 ha đã hoàn tất thủ tục pháp lý đất, dự kiến triển khai xây dựng trong năm 2026. Chưa có xác nhận đã khởi công sau thời điểm này.",
        source: "Ông Đặng Phước Bình – TGĐ Phú Việt Tín (23/12/2025)",
      },
    ],
  },
  {
    category: "Tiện ích & Sản phẩm",
    questions: [
      {
        q: "The Link City có những tiện ích gì?",
        a: "Theo thông tin công bố, dự án quy hoạch 50 tiện ích, nổi bật gồm: trường liên cấp, trung tâm thương mại 2,6 ha, hồ bơi, công viên cảnh quan, tổ hợp thể thao ngoài trời, khu vui chơi trẻ em, BBQ, quảng trường sự kiện, đường dạo bộ và khu sinh hoạt cộng đồng.",
        source: "Kim Oanh Land · Báo Đồng Nai (23/12/2025)",
      },
      {
        q: "Diện tích và số tầng từng loại sản phẩm là bao nhiêu?",
        a: "Thông số diện tích và số tầng từng loại sản phẩm hiện chưa có nguồn xác minh chính thức. Vui lòng liên hệ để biết thông số cụ thể.",
        source: "Chưa có nguồn xác minh",
      },
    ],
  },
  {
    category: "Tài chính & Liên hệ",
    questions: [
      {
        q: "Ngân hàng nào hỗ trợ mua tại The Link City?",
        a: "VietinBank chi nhánh Biên Hòa là ngân hàng đồng hành chính thức, hỗ trợ từ giai đoạn 1 và tiếp tục giai đoạn 2. Các gói vay cụ thể liên hệ VietinBank hoặc Kim Oanh Land để biết chi tiết.",
        source: "Báo Đồng Nai (23/12/2025)",
      },
      {
        q: "Giá bán The Link City là bao nhiêu?",
        a: "Chưa có bảng giá chính thức được xác minh từ chủ đầu tư hoặc đơn vị phát triển. Thông tin giá từ nguồn chưa xác minh sẽ không được đăng tải. Vui lòng liên hệ Kim Oanh Land để nhận bảng giá cập nhật.",
        source: "Chưa có nguồn xác minh — không xuất bản giá",
      },
    ],
  },
];

const faqSchemaEntities = faqs.flatMap((cat) =>
  cat.questions.map((q) => ({
    "@type": "Question",
    name: q.q,
    acceptedAnswer: { "@type": "Answer", text: q.a },
  }))
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSchemaEntities,
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Câu hỏi thường gặp về dự án The Link City Dầu Giây",
  description: "Tổng hợp các câu hỏi thường gặp về The Link City, giải đáp dựa trên thông tin đã xác minh.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2025-12-23",
  dateModified: "2025-12-23",
  url: "https://kimoanhdongnai.com.vn/the-link-city/faq",
  about: { "@type": "RealEstateListing", name: "The Link City", url: "https://kimoanhdongnai.com.vn/the-link-city" },
};

const relatedItems = [
  { href: "/the-link-city", title: "Tổng quan The Link City", description: "Thông tin đầy đủ về dự án.", tag: "Tổng quan" },
  { href: "/the-link-city/phap-ly", title: "Pháp lý The Link City", description: "CĐT Phú Việt Tín, tình trạng GCN.", tag: "Pháp lý" },
  { href: "/the-link-city/tien-do", title: "Tiến độ xây dựng", description: "GĐ1 hoàn thiện, GĐ2 ~55% (23/12/2025).", tag: "Tiến độ" },
  { href: "/the-link-city/vi-tri", title: "Vị trí The Link City", description: "Ngã tư QL1A và QL20, xã Dầu Giây.", tag: "Vị trí" },
  { href: "/the-link-city/bang-gia", title: "Bảng giá The Link City", description: "Liên hệ nhận bảng giá chính thức.", tag: "Bảng giá" },
];

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 min-h-screen">
        <SubPageHeader
          tag="FAQ"
          title="Câu hỏi thường gặp về The Link City"
          subtitle="Các câu hỏi được giải đáp dựa trên thông tin đã xác minh từ Kim Oanh Group và Báo Đồng Nai (23/12/2025). Câu hỏi chưa có nguồn xác minh sẽ được ghi rõ."
          breadcrumbs={[
            { label: "The Link City", href: "/the-link-city" },
            { label: "FAQ" },
          ]}
          updatedAt="23/12/2025"
          backHref="/the-link-city"
          backLabel="Quay lại trang The Link City"
        />

        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-10">
              {faqs.map((cat) => (
                <div key={cat.category} className="anim-up">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
                      {cat.category}
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  <div className="space-y-2.5 anim-stagger-slow">
                    {cat.questions.map((faq, i) => (
                      <details key={i} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden anim-card">
                        <summary className="flex items-center justify-between gap-4 cursor-pointer
                                             px-5 py-4 font-semibold text-slate-800 text-sm list-none
                                             group-open:text-primary-700 select-none">
                          <span>{faq.q}</span>
                          <span className="flex-shrink-0 w-5 h-5 text-slate-400 group-open:text-primary-600
                                           transition-transform duration-300 group-open:rotate-180">▼</span>
                        </summary>
                        <div className="border-t border-slate-100">
                          <p className="px-5 pt-4 pb-3 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                          <p className="px-5 pb-4 text-[10px] text-slate-400">Nguồn: {faq.source}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
              <p className="text-sm font-semibold text-slate-700 mb-2">Câu hỏi chưa được trả lời?</p>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Nếu câu hỏi của bạn chưa có trong danh sách hoặc cần xác minh thêm, hãy liên hệ trực tiếp để được tư vấn cụ thể.
              </p>
              <p className="text-[11px] text-slate-400">
                Tất cả câu trả lời được tổng hợp từ nguồn đã xác minh (Kim Oanh Land · Báo Đồng Nai · 23/12/2025).
              </p>
            </div>
          </div>
        </section>

        <PageCTA
          title="Cần tư vấn trực tiếp về The Link City?"
          subtitle="Liên hệ để được giải đáp chi tiết về sản phẩm, pháp lý và tiến độ dự án."
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
