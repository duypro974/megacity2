import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "FAQ Mega City 2 – Câu Hỏi Thường Gặp Về Pháp Lý, Giá & Tiến Độ",
  description:
    "Giải đáp các câu hỏi thường gặp về dự án Mega City 2 Nhơn Trạch: pháp lý QĐ 1772, giá đất, tiến độ, thanh toán, sổ hồng và thông tin chủ đầu tư.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/faq" },
  openGraph: {
    title: "FAQ Mega City 2 – Câu Hỏi Thường Gặp",
    description:
      "Giải đáp đầy đủ câu hỏi về Mega City 2 Nhơn Trạch: pháp lý, giá, tiến độ, thanh toán, sổ hồng.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ Mega City 2 Nhơn Trạch",
    description: "Giải đáp pháp lý, giá, tiến độ và thanh toán Mega City 2.",
  },
};

const faqGroups = [
  {
    group: "Tổng quan dự án",
    items: [
      {
        q: "Dự án Mega City 2 nằm ở đâu?",
        a: "Mega City 2 tọa lạc tại Đường 25C, xã Nhơn Trạch, tỉnh Đồng Nai. Dự án tiếp giáp TP.HCM qua đường 25C và phà Cát Lái, cách trung tâm TP.HCM khoảng 30–35 km.",
      },
      {
        q: "Chủ đầu tư Mega City 2 là ai?",
        a: "Chủ đầu tư chính thức theo hồ sơ pháp lý là Công ty TNHH Khu đô thị Phú Hội. Kim Oanh Group là đơn vị tham gia phát triển và phân phối dự án.",
      },
      {
        q: "Quy mô và cơ cấu sản phẩm của Mega City 2 như thế nào?",
        a: "Mega City 2 có quy mô khoảng 83,94 ha với tổng cơ cấu quy hoạch 3.160 sản phẩm thấp tầng: TH (nhà vườn liên kế), T (nhà phố liên kế) và V (biệt thự song lập). Trong đó 2.421 lô được UBND tỉnh Đồng Nai chấp thuận phân lô bán nền.",
      },
    ],
  },
  {
    group: "Pháp lý",
    items: [
      {
        q: "Mega City 2 đã được phép phân lô bán nền chưa?",
        a: "Có. UBND tỉnh Đồng Nai đã ban hành Quyết định số 1772/QĐ-UBND ngày 30/5/2025 chấp thuận 2.421 lô thuộc dự án Mega City 2 đủ điều kiện chuyển nhượng quyền sử dụng đất theo hình thức phân lô bán nền.",
      },
      {
        q: "Mega City 2 đã cấp sổ hồng (GCN) chưa?",
        a: "Theo thông tin công bố, dự án đã cấp khoảng 110 Giấy chứng nhận. Tình trạng sổ của từng lô cụ thể cần xác nhận trực tiếp với chuyên viên tư vấn trước khi giao dịch.",
      },
      {
        q: "Thời hạn xây dựng nhà tại Mega City 2 là bao lâu?",
        a: "Theo QĐ 1772/QĐ-UBND, cá nhân nhận chuyển nhượng lô đất có điều kiện phải hoàn thành xây dựng nhà ở trước ngày 31/12/2029. Điều kiện này được ghi nhận trong hợp đồng chuyển nhượng.",
      },
      {
        q: "Website này có phải trang chính thức của chủ đầu tư không?",
        a: "Không. Đây là cổng thông tin độc lập cung cấp thông tin tham khảo về dự án Mega City 2. Mọi giao dịch cần được xác nhận với chủ đầu tư hoặc đơn vị phân phối ủy quyền.",
      },
    ],
  },
  {
    group: "Giá & Thanh toán",
    items: [
      {
        q: "Giá đất nền Mega City 2 hiện nay bao nhiêu?",
        a: "Giá chuyển nhượng tham khảo từ khoảng 1,15 tỷ đồng/nền tùy vị trí, loại sản phẩm (TH, T, V) và thời điểm giao dịch. Liên hệ 0937.587.438 để nhận báo giá cập nhật theo từng lô cụ thể.",
      },
      {
        q: "Đặt cọc bao nhiêu tiền để giữ lô tại Mega City 2?",
        a: "Mức đặt cọc thông thường là 50 triệu đồng/nền. Mức cọc có thể thay đổi theo chính sách từng thời kỳ.",
      },
      {
        q: "Có hỗ trợ vay ngân hàng để mua đất tại Mega City 2 không?",
        a: "Có hỗ trợ kết nối ngân hàng đối tác. Tỷ lệ vay, lãi suất và điều kiện phụ thuộc vào ngân hàng và hồ sơ tài chính của từng khách hàng. Liên hệ để được tư vấn cụ thể.",
      },
      {
        q: "Ngoài giá đất còn phát sinh chi phí gì?",
        a: "Người mua cần chuẩn bị: thuế trước bạ (0,5% giá trị đất), phí công chứng, phí đăng ký quyền sử dụng đất theo quy định của cơ quan nhà nước có thẩm quyền.",
      },
    ],
  },
  {
    group: "Tiến độ & Hạ tầng",
    items: [
      {
        q: "Tiến độ hạ tầng Mega City 2 hiện đạt bao nhiêu?",
        a: "Theo thông tin công bố tháng 06/2025, hạ tầng nội khu đạt khoảng 95%, bao gồm đường nhựa, điện, nước, công viên trung tâm. Tình trạng thực tế từng lô có thể khác nhau.",
      },
      {
        q: "Có thể tham quan thực tế dự án Mega City 2 không?",
        a: "Có. Liên hệ 0937.587.438 để đặt lịch tham quan thực tế. Chuyên viên sẽ đón tiếp và đưa quý khách tham quan trực tiếp tại dự án.",
      },
      {
        q: "Khi nào có thể xây nhà tại Mega City 2?",
        a: "Sau khi hoàn tất thủ tục chuyển nhượng và được cấp Giấy phép xây dựng, chủ sở hữu có thể tiến hành xây dựng. Cần hoàn thành trước 31/12/2029 với lô có điều kiện theo QĐ 1772.",
      },
    ],
  },
  {
    group: "Vị trí & Kết nối",
    items: [
      {
        q: "Từ Mega City 2 đến TP.HCM mất bao lâu?",
        a: "Từ dự án đến trung tâm TP.HCM (Q1) khoảng 45–60 phút theo đường 25C, tùy thời điểm. Qua phà Cát Lái đến Quận 2 – Thủ Đức khoảng 25–35 phút.",
      },
      {
        q: "Sân bay Long Thành cách Mega City 2 bao xa?",
        a: "Sân bay quốc tế Long Thành cách dự án khoảng 15–20 km, di chuyển khoảng 20–25 phút. Đây là yếu tố được kỳ vọng thúc đẩy giá trị bất động sản khu vực.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="FAQ"
          title="Câu hỏi thường gặp về Mega City 2"
          subtitle="Giải đáp các câu hỏi phổ biến về pháp lý, giá, tiến độ, thanh toán và vị trí dự án Mega City 2 Nhơn Trạch."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "FAQ" },
          ]}
          updatedAt="08/2026"
        />

        {/* FAQ Groups */}
        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4 space-y-12">
            {faqGroups.map((group) => (
              <div key={group.group}>
                <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                  {group.group}
                </h2>
                <div className="space-y-3">
                  {group.items.map((faq, i) => (
                    <details
                      key={i}
                      className="group rounded-2xl border border-slate-200 bg-white overflow-hidden
                                 hover:border-primary-200 transition-colors"
                    >
                      <summary
                        className="flex items-start justify-between gap-4 cursor-pointer
                                     px-5 py-4 font-semibold text-slate-800 text-sm list-none
                                     group-open:text-primary-700 select-none"
                      >
                        <span className="leading-snug">{faq.q}</span>
                        <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-primary-600
                                         transition-transform group-open:rotate-180 text-xs">
                          ▼
                        </span>
                      </summary>
                      <div className="px-5 pb-5 border-t border-slate-100 pt-3">
                        <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <PageCTA
          title="Tư vấn miễn phí về Mega City 2"
          subtitle="Đội ngũ chuyên viên sẵn sàng giải đáp mọi thắc mắc và hỗ trợ bạn đưa ra quyết định đúng đắn."
        />

        <RelatedContent
          items={[
            {
              href: "/mega-city-2",
              title: "Tổng quan Mega City 2 Nhơn Trạch",
              description: "Thông tin tổng hợp: quy mô, chủ đầu tư và pháp lý.",
              tag: "Tổng quan",
            },
            {
              href: "/mega-city-2/phap-ly",
              title: "Pháp lý – QĐ 1772",
              description: "Chi tiết pháp lý và văn bản chính thức.",
              tag: "Pháp lý",
            },
            {
              href: "/mega-city-2/bang-gia",
              title: "Bảng giá tham khảo",
              description: "Giá chuyển nhượng TH, T, V cập nhật 2026.",
              tag: "Bảng giá",
            },
            {
              href: "/mega-city-2/thanh-toan",
              title: "Phương thức thanh toán",
              description: "Chính sách đặt cọc và hỗ trợ vay ngân hàng.",
              tag: "Thanh toán",
            },
            {
              href: "/mega-city-2/vi-tri",
              title: "Vị trí & Kết nối",
              description: "Phân tích vị trí và liên kết giao thông.",
              tag: "Vị trí",
            },
            {
              href: "/mega-city-2/tien-do",
              title: "Tiến độ hạ tầng",
              description: "Cập nhật tiến độ và hình ảnh thực tế.",
              tag: "Tiến độ",
            },
          ]}
        />
      </div>

      <Footer />
    </>
  );
}
