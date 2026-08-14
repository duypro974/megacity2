import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import { IMG_LEGAL } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Pháp Lý Mega City 2 – QĐ 1772/QĐ-UBND Phân Lô Bán Nền 2025",
  description:
    "Pháp lý dự án Mega City 2 Nhơn Trạch: Quyết định 1772/QĐ-UBND ngày 30/5/2025 chấp thuận 2.421 lô phân lô bán nền. Quy hoạch 1/500, GCN đã cấp và điều kiện xây dựng.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/phap-ly" },
  openGraph: {
    title: "Pháp Lý Mega City 2 – QĐ 1772/QĐ-UBND Phân Lô Bán Nền",
    description:
      "Chi tiết pháp lý Mega City 2: QĐ 1772/QĐ-UBND, quy hoạch 1/500, 2.421 lô được chấp thuận và điều kiện xây dựng trước 31/12/2029.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: IMG_LEGAL["1"], width: 1280, height: 720, alt: "Pháp lý Mega City 2 QĐ 1772" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pháp Lý Mega City 2 – QĐ 1772/QĐ-UBND",
    description: "2.421 lô phân lô bán nền theo QĐ 1772/QĐ-UBND ngày 30/5/2025.",
    images: [IMG_LEGAL["1"]],
  },
};

const legalSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pháp lý Mega City 2 Nhơn Trạch – Quyết định 1772/QĐ-UBND",
  description:
    "Phân tích chi tiết tình trạng pháp lý dự án Mega City 2, bao gồm QĐ 1772/QĐ-UBND và quy hoạch 1/500.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url: "https://kimoanhdongnai.com.vn",
  },
  datePublished: "2026-08-01",
  dateModified: "2026-08-09",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/phap-ly",
  about: {
    "@type": "RealEstateListing",
    name: "Mega City 2 Nhơn Trạch",
    url: "https://kimoanhdongnai.com.vn/mega-city-2",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mega City 2 có được phép phân lô bán nền không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. UBND tỉnh Đồng Nai đã ban hành Quyết định số 1772/QĐ-UBND ngày 30/5/2025 chấp thuận 2.421 lô được chuyển nhượng quyền sử dụng đất theo hình thức phân lô bán nền.",
      },
    },
    {
      "@type": "Question",
      name: "Chủ đầu tư pháp lý của Mega City 2 là ai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chủ đầu tư chính thức theo hồ sơ pháp lý là Công ty TNHH Khu đô thị Phú Hội. Kim Oanh Group là đơn vị tham gia phát triển và phân phối.",
      },
    },
    {
      "@type": "Question",
      name: "Thời hạn xây dựng nhà tại Mega City 2 là bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo QĐ 1772/QĐ-UBND, cá nhân nhận chuyển nhượng phải hoàn thành xây dựng nhà ở trước ngày 31/12/2029.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 đã cấp sổ hồng chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo thông tin công bố, dự án đã cấp 110 GCN (Giấy chứng nhận). Tình trạng sổ hồng từng lô cụ thể cần được kiểm tra trước khi giao dịch.",
      },
    },
  ],
};

const legalDocs = [
  {
    icon: "📋",
    title: "Quyết định 1772/QĐ-UBND",
    date: "30/05/2025",
    issuer: "UBND tỉnh Đồng Nai",
    summary:
      "Chấp thuận 2.421 lô thuộc dự án Mega City 2 đủ điều kiện chuyển nhượng quyền sử dụng đất theo hình thức phân lô bán nền.",
    highlight: true,
  },
  {
    icon: "🗺️",
    title: "Quy hoạch chi tiết 1/500",
    date: "Đã được phê duyệt",
    issuer: "Cơ quan có thẩm quyền tỉnh Đồng Nai",
    summary:
      "Quy hoạch chi tiết tỷ lệ 1/500 của khu dân cư Mega City 2, xác định vị trí, diện tích và chỉ giới xây dựng từng lô đất.",
    highlight: false,
  },
  {
    icon: "📜",
    title: "GCN – Giấy chứng nhận",
    date: "110 GCN đã cấp*",
    issuer: "Cơ quan đăng ký đất đai",
    summary:
      "Một số lô đã được cấp Giấy chứng nhận quyền sử dụng đất. Tình trạng GCN cần kiểm tra theo từng lô trước giao dịch.",
    highlight: false,
  },
  {
    icon: "🏗️",
    title: "Điều kiện xây dựng",
    date: "Theo QĐ 1772",
    issuer: "UBND tỉnh Đồng Nai",
    summary:
      "Cá nhân nhận chuyển nhượng phải hoàn thành xây dựng nhà ở trước ngày 31/12/2029 và ghi nhận điều kiện này trong hợp đồng.",
    highlight: false,
  },
];

const loTypes = [
  {
    type: "Nhà vườn liên kế TH",
    blocks: "TH-1 đến TH-28",
    count: "1.580 lô (tổng QH)",
    note: "Sổ hồng riêng, không ràng buộc xây dựng (một số block)",
  },
  {
    type: "Nhà phố liên kế T",
    blocks: "T-1 đến T-29",
    count: "1.478 lô (tổng QH)",
    note: "Một số block sổ hồng có điều kiện xây dựng trước 31/12/2029",
  },
  {
    type: "Biệt thự song lập V",
    blocks: "V-1 đến V-4",
    count: "102 lô (tổng QH)",
    note: "Sản phẩm cao cấp, diện tích 150–200 m²",
  },
];

export default function PhapLyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="Pháp lý"
          title="Pháp lý Mega City 2 Nhơn Trạch"
          subtitle="Chi tiết tình trạng pháp lý dự án: Quyết định 1772/QĐ-UBND, quy hoạch 1/500 và điều kiện giao dịch."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "Pháp lý" },
          ]}
          updatedAt="08/2026"
        />

        {/* Highlight QĐ 1772 */}
        <section className="py-10 bg-primary-50 border-b border-primary-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl bg-primary-600 text-white p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">📋</div>
                <div>
                  <p className="text-primary-200 text-xs font-bold uppercase tracking-widest mb-1">
                    Văn bản pháp lý quan trọng nhất
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold mb-3">
                    Quyết định 1772/QĐ-UBND
                  </h2>
                  <p className="text-primary-100 text-sm leading-relaxed mb-4">
                    Ngày 30/5/2025, UBND tỉnh Đồng Nai ban hành Quyết định 1772/QĐ-UBND
                    chấp thuận{" "}
                    <strong className="text-white">2.421 lô</strong> thuộc dự án Mega City 2
                    đủ điều kiện chuyển nhượng quyền sử dụng đất theo hình thức phân lô bán nền,
                    bao gồm các dãy T-1 đến T-29, TH-1 đến TH-28 và V-1 đến V-4.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                      2.421 lô được chấp thuận
                    </span>
                    <span className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                      30/05/2025
                    </span>
                    <span className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                      UBND tỉnh Đồng Nai
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hồ sơ pháp lý */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Các văn bản pháp lý chính
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {legalDocs.map((doc) => (
                <div
                  key={doc.title}
                  className={`rounded-2xl p-5 border
                    ${doc.highlight
                      ? "bg-primary-50 border-primary-200"
                      : "bg-slate-50 border-slate-200"}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{doc.icon}</span>
                    <div>
                      <h3 className={`font-bold text-sm mb-1
                        ${doc.highlight ? "text-primary-800" : "text-slate-800"}`}>
                        {doc.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-[10px] text-slate-400 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                          {doc.date}
                        </span>
                        <span className="text-[10px] text-slate-400 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                          {doc.issuer}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{doc.summary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cơ cấu lô */}
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Cơ cấu sản phẩm theo quy hoạch
            </h2>
            <div className="rounded-2xl border border-slate-200 overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left px-4 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Loại sản phẩm
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Block
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Số lượng (QH)
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Ghi chú
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {loTypes.map((r) => (
                      <tr key={r.type} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-semibold text-slate-800">{r.type}</td>
                        <td className="px-4 py-3 text-slate-500 font-mono text-xs">{r.blocks}</td>
                        <td className="px-4 py-3 text-slate-700">{r.count}</td>
                        <td className="px-4 py-3 text-slate-500 text-xs">{r.note}</td>
                      </tr>
                    ))}
                    <tr className="bg-primary-50 font-bold">
                      <td className="px-4 py-3 text-primary-800">Tổng cơ cấu QH</td>
                      <td className="px-4 py-3 text-primary-700">—</td>
                      <td className="px-4 py-3 text-primary-800">3.160 sản phẩm</td>
                      <td className="px-4 py-3 text-primary-600 text-xs">2.421 lô được phân lô bán nền</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100">
                <p className="text-[11px] text-slate-400">
                  * 3.160 là tổng cơ cấu theo quy hoạch. 2.421 lô là số được UBND tỉnh Đồng Nai chấp thuận phân lô bán nền.
                </p>
              </div>
            </div>

            {/* Ảnh pháp lý */}
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Hình ảnh hồ sơ pháp lý
            </h2>
            <p className="text-xs text-slate-400 mb-4">
              Hình ảnh tài liệu pháp lý được công bố. Khách hàng nên yêu cầu xem bản gốc khi giao dịch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { src: IMG_LEGAL["1"], alt: "Quyết định 1772/QĐ-UBND phân lô bán nền Mega City 2" },
                { src: IMG_LEGAL["2"], alt: "Quy hoạch 1/500 khu dân cư Mega City 2 Nhơn Trạch" },
                { src: IMG_LEGAL["3"], alt: "Giấy chứng nhận quyền sử dụng đất Mega City 2" },
              ].map((img) => (
                <div key={img.src}
                  className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Pháp lý */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Câu hỏi thường gặp về pháp lý
            </h2>
            <div className="space-y-3">
              {faqSchema.mainEntity.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer
                                       px-5 py-4 font-semibold text-slate-800 text-sm list-none
                                       group-open:text-primary-700 select-none">
                    <span>{faq.name}</span>
                    <span className="flex-shrink-0 w-5 h-5 text-slate-400 group-open:text-primary-600">▼</span>
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
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-800 mb-2">⚠️ Lưu ý pháp lý quan trọng</p>
              <p className="text-xs text-amber-700 leading-relaxed">
                Thông tin pháp lý trên đây được tổng hợp từ văn bản công khai và nguồn thị trường.
                Website này không phải trang chính thức của chủ đầu tư. Trước khi giao dịch, khách
                hàng cần xác nhận trực tiếp với chủ đầu tư hoặc cơ quan có thẩm quyền về tình trạng
                pháp lý của từng lô đất cụ thể.
              </p>
            </div>
          </div>
        </section>

        <PageCTA
          title="Tư vấn pháp lý Mega City 2"
          subtitle="Liên hệ để nhận hồ sơ pháp lý chi tiết và được tư vấn về thủ tục giao dịch."
        />

        <RelatedContent
          items={[
            {
              href: "/mega-city-2",
              title: "Tổng quan Mega City 2 Nhơn Trạch",
              description: "Thông tin tổng hợp: quy mô, chủ đầu tư, tiến độ và bảng giá.",
              tag: "Tổng quan",
            },
            {
              href: "/mega-city-2/bang-gia",
              title: "Bảng giá Mega City 2",
              description: "Giá chuyển nhượng tham khảo TH, T, V và nhà xây sẵn.",
              tag: "Bảng giá",
            },
            {
              href: "/mega-city-2/mat-bang",
              title: "Mặt bằng & Sản phẩm",
              description: "Bản vẽ quy hoạch và các loại sản phẩm nhà ở.",
              tag: "Mặt bằng",
            },
            {
              href: "/mega-city-2/tien-do",
              title: "Tiến độ xây dựng",
              description: "Cập nhật tiến độ hạ tầng và hiện trạng thực tế.",
              tag: "Tiến độ",
            },
            {
              href: "/mega-city-2/faq",
              title: "FAQ – Câu hỏi thường gặp",
              description: "Giải đáp đầy đủ các thắc mắc về Mega City 2.",
              tag: "FAQ",
            },
            {
              href: "/mega-city-2/thanh-toan",
              title: "Phương thức thanh toán",
              description: "Các hình thức thanh toán và chính sách hỗ trợ tài chính.",
              tag: "Thanh toán",
            },
          ]}
        />
      </div>

      <Footer />
    </>
  );
}
