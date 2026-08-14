import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import PaymentSection from "@/components/PaymentSection";

export const metadata: Metadata = {
  title: "Phương Thức Thanh Toán Mega City 2 – Chính Sách Tài Chính 2026",
  description:
    "Phương thức thanh toán Mega City 2 Nhơn Trạch: đặt cọc 50 triệu, thanh toán nhanh 95% nhận ưu đãi. Hỗ trợ vay ngân hàng. Liên hệ 0937.587.438 để tư vấn.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/thanh-toan" },
  openGraph: {
    title: "Phương Thức Thanh Toán Mega City 2 – Cập Nhật 2026",
    description:
      "Chính sách thanh toán Mega City 2: đặt cọc 50 triệu, TT nhanh 95% hoặc theo tiến độ. Hỗ trợ vay NH.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanh Toán Mega City 2 – Đặt Cọc 50 Triệu",
    description: "Phương thức thanh toán và chính sách tài chính đất nền Mega City 2 Nhơn Trạch.",
  },
};

const faqPaymentSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Đặt cọc Mega City 2 bao nhiêu tiền?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mức đặt cọc thông thường là 50 triệu đồng/nền. Mức cọc cụ thể có thể thay đổi theo chính sách từng thời kỳ.",
      },
    },
    {
      "@type": "Question",
      name: "Có được vay ngân hàng để mua Mega City 2 không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án có hỗ trợ vay ngân hàng. Tỷ lệ vay, lãi suất và thời hạn tùy thuộc vào từng ngân hàng và hồ sơ của khách hàng. Liên hệ 0937.587.438 để được tư vấn ngân hàng phù hợp.",
      },
    },
    {
      "@type": "Question",
      name: "Thanh toán nhanh 95% có lợi gì khi mua đất Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khi thanh toán nhanh 95% giá trị hợp đồng, khách hàng nhận ưu đãi theo chính sách chiết khấu của đơn vị phân phối trong từng thời kỳ. Liên hệ để biết mức ưu đãi hiện tại.",
      },
    },
    {
      "@type": "Question",
      name: "Khi nào nhận được sổ hồng (GCN) khi mua đất Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GCN được cấp sau khi hoàn tất nghĩa vụ tài chính (thanh toán 100%). Đối với lô có điều kiện xây dựng theo QĐ 1772, cần hoàn thiện nhà trước 31/12/2029.",
      },
    },
    {
      "@type": "Question",
      name: "Chi phí phát sinh khi mua đất Mega City 2 gồm những gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ngoài giá đất, người mua cần chuẩn bị: thuế trước bạ (0,5% giá trị), phí công chứng, phí đăng ký quyền sử dụng đất và các chi phí hành chính khác theo quy định hiện hành.",
      },
    },
  ],
};

const paymentSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Phương thức thanh toán Mega City 2 Nhơn Trạch – Chính sách tài chính 2026",
  description:
    "Chi tiết các phương thức thanh toán đất nền Mega City 2: thanh toán nhanh, hỗ trợ vay ngân hàng và chính sách ưu đãi theo từng thời kỳ.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url: "https://kimoanhdongnai.com.vn",
  },
  datePublished: "2026-08-01",
  dateModified: "2026-08-13",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/thanh-toan",
};

const faqPayment = [
  {
    q: "Đặt cọc Mega City 2 bao nhiêu tiền?",
    a: "Mức đặt cọc thông thường là 50 triệu đồng/nền. Mức cọc cụ thể có thể thay đổi theo chính sách từng thời kỳ.",
  },
  {
    q: "Có được vay ngân hàng để mua Mega City 2 không?",
    a: "Dự án có hỗ trợ vay ngân hàng. Tỷ lệ vay, lãi suất và thời hạn tùy thuộc vào từng ngân hàng và hồ sơ của khách hàng. Liên hệ để được tư vấn ngân hàng phù hợp.",
  },
  {
    q: "Thanh toán nhanh 95% có lợi gì?",
    a: "Khi thanh toán nhanh 95% giá trị hợp đồng, khách hàng nhận ưu đãi theo chính sách chiết khấu của đơn vị phân phối trong từng thời kỳ. Liên hệ để biết mức ưu đãi hiện tại.",
  },
  {
    q: "Khi nào nhận được Giấy chứng nhận (sổ hồng)?",
    a: "GCN được cấp sau khi hoàn tất nghĩa vụ tài chính (thanh toán 100%). Đối với lô có điều kiện xây dựng, cần hoàn thiện nhà trước 31/12/2029 theo QĐ 1772.",
  },
  {
    q: "Chi phí phát sinh khi mua đất Mega City 2 gồm những gì?",
    a: "Ngoài giá đất, người mua cần chuẩn bị: thuế trước bạ (0,5% giá trị), phí công chứng, phí đăng ký quyền sử dụng đất và các chi phí hành chính khác theo quy định.",
  },
];

const benefits = [
  {
    icon: "💰",
    title: "Đặt cọc linh hoạt",
    desc: "Giữ lô với mức đặt cọc 50 triệu đồng. Thể hiện thiện chí và đảm bảo ưu tiên chọn lô.",
  },
  {
    icon: "⚡",
    title: "Ưu đãi TT nhanh",
    desc: "Thanh toán nhanh 95% nhận chiết khấu hấp dẫn theo chính sách từng thời kỳ.",
  },
  {
    icon: "🏦",
    title: "Hỗ trợ vay NH",
    desc: "Kết nối ngân hàng đối tác, hỗ trợ thủ tục vay mua nền đất và nhà ở.",
  },
  {
    icon: "📜",
    title: "Minh bạch chi phí",
    desc: "Tư vấn rõ ràng về tất cả chi phí phát sinh: thuế, phí công chứng, đăng ký.",
  },
];

export default function ThanhToanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paymentSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPaymentSchema) }}
      />

      <Header />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="Thanh toán"
          title="Phương thức thanh toán Mega City 2"
          subtitle="Chính sách thanh toán và hỗ trợ tài chính tại khu dân cư Mega City 2 Nhơn Trạch – cập nhật 2026."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "Thanh toán" },
          ]}
          updatedAt="08/2026"
        />

        {/* Disclaimer */}
        <section className="py-6 bg-amber-50 border-b border-amber-200">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs text-amber-700 leading-relaxed">
              <strong>Lưu ý:</strong> Chính sách thanh toán có thể thay đổi theo từng thời kỳ
              và từng lô giao dịch cụ thể. Thông tin dưới đây mang tính tham khảo.
              Liên hệ{" "}
              <a href="tel:0937587438" className="font-bold underline text-amber-800">
                0937.587.438
              </a>{" "}
              để nhận thông tin chính sách mới nhất.
            </p>
          </div>
        </section>

        {/* Lợi ích */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Chính sách hỗ trợ tài chính
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl bg-slate-50 border border-slate-200 p-5
                             hover:border-primary-200 hover:shadow-sm transition-all"
                >
                  <div className="text-2xl mb-3">{b.icon}</div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1.5">{b.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PaymentSection component tái sử dụng */}
        <PaymentSection />

        {/* FAQ */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Câu hỏi thường gặp về thanh toán
            </h2>
            <div className="space-y-3">
              {faqPayment.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden"
                >
                  <summary
                    className="flex items-center justify-between gap-4 cursor-pointer
                                 px-5 py-4 font-semibold text-slate-800 text-sm list-none
                                 group-open:text-primary-700 select-none"
                  >
                    <span>{faq.q}</span>
                    <span className="flex-shrink-0 w-5 h-5 text-slate-400 group-open:text-primary-600">▼</span>
                  </summary>
                  <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <PageCTA
          title="Tư vấn phương thức thanh toán phù hợp"
          subtitle="Liên hệ để được hỗ trợ chọn phương án thanh toán tối ưu và kết nối vay ngân hàng."
        />

        <RelatedContent
          items={[
            {
              href: "/mega-city-2/bang-gia",
              title: "Bảng giá Mega City 2",
              description: "Giá chuyển nhượng tham khảo TH, T, V cập nhật 2026.",
              tag: "Bảng giá",
            },
            {
              href: "/mega-city-2/phap-ly",
              title: "Pháp lý – QĐ 1772",
              description: "Tình trạng pháp lý và điều kiện giao dịch.",
              tag: "Pháp lý",
            },
            {
              href: "/mega-city-2/mat-bang",
              title: "Mặt bằng & Sản phẩm",
              description: "Bản đồ phân lô và các loại hình sản phẩm nhà ở.",
              tag: "Mặt bằng",
            },
            {
              href: "/mega-city-2",
              title: "Tổng quan Mega City 2",
              description: "Thông tin tổng hợp về dự án Mega City 2 Nhơn Trạch.",
              tag: "Tổng quan",
            },
            {
              href: "/mega-city-2/faq",
              title: "FAQ – Câu hỏi thường gặp",
              description: "Giải đáp các câu hỏi phổ biến về Mega City 2.",
              tag: "FAQ",
            },
            {
              href: "/mega-city-2/vi-tri",
              title: "Vị trí dự án",
              description: "Phân tích vị trí và kết nối giao thông.",
              tag: "Vị trí",
            },
          ]}
        />
      </div>

      <Footer />
    </>
  );
}
