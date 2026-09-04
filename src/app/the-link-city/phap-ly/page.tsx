import type { Metadata } from "next";
import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import { TLC_OG, TLC_LEGAL } from "@/lib/cloudinary";
import { ShieldCheck, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pháp lý The Link City Dầu Giây – Thông tin & Hồ sơ Cập nhật",
  description:
    "Thông tin pháp lý dự án The Link City Dầu Giây: chủ đầu tư Phú Việt Tín, tình trạng cấp GCN theo giai đoạn và VietinBank đồng hành. Cập nhật theo nguồn 23/12/2025.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city/phap-ly" },
  openGraph: {
    title: "Pháp lý The Link City Dầu Giây",
    description: "CĐT: Phú Việt Tín. GĐ1 một số sản phẩm đã cấp GCN. GĐ2 đang hoàn thiện. VietinBank Biên Hòa đồng hành.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: TLC_OG, width: 1280, height: 720, alt: "Pháp lý The Link City Dầu Giây" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pháp lý The Link City Dầu Giây",
    description: "CĐT Phú Việt Tín, GĐ1 đã cấp GCN một phần, VietinBank đồng hành.",
    images: [TLC_OG],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pháp lý The Link City Dầu Giây – Thông tin hồ sơ cập nhật",
  description: "Phân tích tình trạng pháp lý dự án The Link City: chủ đầu tư Phú Việt Tín, Kim Oanh Land và tình trạng cấp GCN.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2025-12-23",
  dateModified: "2025-12-23",
  url: "https://kimoanhdongnai.com.vn/the-link-city/phap-ly",
  about: { "@type": "RealEstateListing", name: "The Link City", url: "https://kimoanhdongnai.com.vn/the-link-city" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Chủ đầu tư pháp lý của The Link City là ai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chủ đầu tư pháp lý là Công ty TNHH Đầu tư Phú Việt Tín. Kim Oanh Land (thuộc Kim Oanh Group) là đơn vị tham gia phát triển và phân phối dự án. Thông tin này được xác nhận bởi ông Đặng Phước Bình – TGĐ Phú Việt Tín và ông Mai Văn Hiền – Chủ tịch UBND xã Dầu Giây tại sự kiện 23/12/2025.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City đã có sổ hồng chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo thông tin công bố ngày 23/12/2025: Giai đoạn 1 một số sản phẩm đã được cấp Giấy chứng nhận quyền sử dụng đất. Giai đoạn 2 đang hoàn thiện điều kiện cấp GCN. Tình trạng GCN từng sản phẩm cụ thể cần kiểm tra trực tiếp trước khi giao dịch.",
      },
    },
    {
      "@type": "Question",
      name: "VietinBank có xác nhận pháp lý The Link City không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bà Nguyễn Thị Ngọc Trúc – Phó Giám đốc VietinBank chi nhánh Biên Hòa phát biểu tại sự kiện 23/12/2025: 'VietinBank chi nhánh Biên Hòa rất an tâm về pháp lý cũng như tiến độ triển khai dự án The Link City.'",
      },
    },
    {
      "@type": "Question",
      name: "Số quyết định phê duyệt quy hoạch The Link City là gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thông tin về số quyết định phê duyệt quy hoạch cụ thể hiện chưa được công bố trong các nguồn đã xác minh. Khách hàng nên yêu cầu chủ đầu tư Phú Việt Tín hoặc Kim Oanh Land cung cấp hồ sơ gốc trước khi giao dịch.",
      },
    },
  ],
};

const legalItems = [
  {
    icon: "🏛️",
    title: "Chủ đầu tư",
    content: "Công ty TNHH Đầu tư Phú Việt Tín",
    detail: "Đại diện: Ông Đặng Phước Bình – Tổng Giám đốc",
    source: "Báo Đồng Nai (23/12/2025)",
    highlight: true,
    confidence: "VERIFIED",
  },
  {
    icon: "🏢",
    title: "Đơn vị phát triển & phân phối",
    content: "Kim Oanh Land (thuộc Kim Oanh Group)",
    detail: "Bà Đặng Thị Kim Oanh – Chủ tịch HĐQT kiêm TGĐ Kim Oanh Group",
    source: "Báo Đồng Nai (23/12/2025)",
    highlight: false,
    confidence: "VERIFIED",
  },
  {
    icon: "📋",
    title: "Pháp lý Giai đoạn 1",
    content: "Một số sản phẩm đã được cấp GCN quyền sử dụng đất",
    detail: "Hạ tầng kỹ thuật đã hoàn thiện và đưa vào sử dụng",
    source: "Ông Đặng Phước Bình – TGĐ Phú Việt Tín (23/12/2025)",
    highlight: true,
    confidence: "VERIFIED — TIME-SENSITIVE",
  },
  {
    icon: "⏳",
    title: "Pháp lý Giai đoạn 2",
    content: "Đang hoàn thiện điều kiện cấp GCN",
    detail: "UBND xã Dầu Giây đã đề nghị chủ đầu tư sớm hoàn thiện hạ tầng đủ điều kiện cấp GCN",
    source: "Ông Mai Văn Hiền – Chủ tịch UBND xã Dầu Giây (23/12/2025)",
    highlight: false,
    confidence: "VERIFIED — TIME-SENSITIVE",
  },
  {
    icon: "🏦",
    title: "Ngân hàng đồng hành",
    content: "VietinBank chi nhánh Biên Hòa",
    detail: '"Rất an tâm về pháp lý cũng như tiến độ triển khai dự án The Link City"',
    source: "Bà Nguyễn Thị Ngọc Trúc – Phó GĐ VietinBank Biên Hòa (23/12/2025)",
    highlight: false,
    confidence: "VERIFIED",
  },
  {
    icon: "📅",
    title: "Sự kiện minh bạch thông tin",
    content: "Lễ công bố kế hoạch phát triển dự án The Link City",
    detail: "Ngày 23/12/2025 tại xã Dầu Giây — nhằm minh bạch thông tin pháp lý và tiến độ",
    source: "Báo Đồng Nai (baodongnai.com.vn)",
    highlight: false,
    confidence: "VERIFIED",
  },
];

const relatedItems = [
  { href: "/the-link-city", title: "Tổng quan The Link City", description: "Thông tin đầy đủ về dự án.", tag: "Tổng quan" },
  { href: "/the-link-city/tien-do", title: "Tiến độ The Link City", description: "Cập nhật tiến độ GĐ1 và GĐ2 (23/12/2025).", tag: "Tiến độ" },
  { href: "/the-link-city/mat-bang", title: "Mặt bằng The Link City", description: "Quy hoạch 2 giai đoạn, cơ cấu sản phẩm.", tag: "Mặt bằng" },
  { href: "/the-link-city/vi-tri", title: "Vị trí The Link City", description: "Ngã tư QL1A và QL20, xã Dầu Giây.", tag: "Vị trí" },
  { href: "/the-link-city/faq", title: "Câu hỏi thường gặp", description: "Giải đáp câu hỏi về pháp lý, tiến độ và vị trí.", tag: "FAQ" },
];

export default function PhapLyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 min-h-screen">
        <SubPageHeader
          tag="Pháp lý"
          title="Pháp lý The Link City Dầu Giây"
          subtitle="Thông tin pháp lý tổng hợp từ nguồn công bố chính thức. Tình trạng cấp GCN theo từng giai đoạn và vai trò các bên liên quan."
          breadcrumbs={[
            { label: "The Link City", href: "/the-link-city" },
            { label: "Pháp lý" },
          ]}
          updatedAt="23/12/2025"
          backHref="/the-link-city"
          backLabel="Quay lại trang The Link City"
        />

        {/* Highlight sự kiện */}
        <section className="py-10 bg-primary-50 border-b border-primary-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl bg-primary-600 text-white p-6 md:p-8 anim-scale">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-primary-200 flex-shrink-0" />
                <div>
                  <p className="text-primary-200 text-xs font-bold uppercase tracking-widest mb-1">Minh bạch thông tin pháp lý</p>
                  <h2 className="text-xl md:text-2xl font-bold mb-3">Sự kiện công bố ngày 23/12/2025</h2>
                  <p className="text-primary-100 text-sm leading-relaxed mb-4">
                    Ngày 23/12/2025, Kim Oanh Land và Công ty TNHH Đầu tư Phú Việt Tín tổ chức lễ công bố kế hoạch
                    phát triển dự án The Link City với mục tiêu <strong className="text-white">minh bạch thông tin pháp lý
                    và tiến độ xây dựng</strong>. Sự kiện có sự tham dự của đại diện UBND xã Dầu Giây và VietinBank.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Phú Việt Tín — Chủ đầu tư", "Kim Oanh Land — Phát triển", "VietinBank — Ngân hàng", "UBND xã Dầu Giây"].map((tag) => (
                      <span key={tag} className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full font-semibold">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thông tin pháp lý */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Thông tin pháp lý theo nguồn xác minh</h2>
              <p className="text-sm text-slate-500">Mỗi thông tin đều ghi rõ nguồn và thời điểm xác minh.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 anim-stagger">
              {legalItems.map((item) => (
                <div key={item.title} className={`rounded-2xl p-5 border anim-card ${item.highlight ? "bg-primary-50 border-primary-200" : "bg-slate-50 border-slate-200"}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.title}</p>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0 ${item.confidence === "VERIFIED" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                          {item.confidence}
                        </span>
                      </div>
                      <p className={`font-bold text-sm mb-1 ${item.highlight ? "text-primary-800" : "text-slate-800"}`}>{item.content}</p>
                      <p className="text-xs text-slate-500 leading-relaxed mb-1">{item.detail}</p>
                      <p className="text-[10px] text-slate-400">Nguồn: {item.source}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 anim-up">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-amber-800 mb-1">Thông tin chưa có nguồn xác minh</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    Số quyết định phê duyệt quy hoạch cụ thể hiện chưa được công bố trong các nguồn đã xác minh.
                    Khách hàng nên yêu cầu chủ đầu tư cung cấp hồ sơ gốc trước khi thực hiện giao dịch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ảnh pháp lý */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Hình ảnh hồ sơ pháp lý</h2>
              <p className="text-sm text-slate-500">
                Hình ảnh tài liệu pháp lý sẽ được cập nhật khi có. Khách hàng nên yêu cầu xem bản gốc khi giao dịch.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 anim-stagger">
              {[
                { src: TLC_LEGAL["1"], alt: "Hồ sơ pháp lý The Link City Dầu Giây — tài liệu 1" },
                { src: TLC_LEGAL["2"], alt: "Giấy chứng nhận quyền sử dụng đất The Link City Dầu Giây" },
                { src: TLC_LEGAL["3"], alt: "Quyết định quy hoạch dự án The Link City Dầu Giây" },
              ].map((img, i) => (
                <div key={i} className="relative rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden anim-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} className="w-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="anim-up mb-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Câu hỏi về pháp lý The Link City</h2>
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

        {/* Disclaimer */}
        <section className="py-8 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-600 mb-1">Lưu ý về thông tin pháp lý</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Thông tin pháp lý trên trang này được tổng hợp từ nguồn công bố ngày 23/12/2025.
                    Hiện tại là tháng 9/2026 — tình trạng pháp lý thực tế có thể đã thay đổi.
                    Website không cung cấp tư vấn pháp lý. Tình trạng GCN từng sản phẩm cụ thể
                    cần được kiểm tra trực tiếp với chủ đầu tư hoặc cơ quan nhà nước có thẩm quyền.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Nguồn: Báo Đồng Nai (baodongnai.com.vn) · Kim Oanh Group (kimoanhgroup.vn) · 23/12/2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageCTA
          title="Cần xác minh pháp lý The Link City?"
          subtitle="Liên hệ để được hỗ trợ kiểm tra tình trạng pháp lý từng sản phẩm cụ thể."
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
