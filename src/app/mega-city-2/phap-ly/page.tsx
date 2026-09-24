import type { Metadata } from "next";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import { IMG_LEGAL, IMG_LEGAL_2979 } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Pháp Lý Mega City 2 – QĐ 2979 (09/2026) & QĐ 1772 Phân Lô Bán Nền",
  description:
    "Pháp lý Mega City 2 Nhơn Trạch: QĐ 2979/QĐ-UBND ngày 24/9/2026 giao đất chính thức CĐT Phú Hội. QĐ 1772/QĐ-UBND chấp thuận 2.421 lô phân lô bán nền. Quy hoạch 1/500, GCN và điều kiện giao dịch.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/phap-ly" },
  openGraph: {
    title: "Pháp Lý Mega City 2 – QĐ 2979 (09/2026) & QĐ 1772 Phân Lô Bán Nền",
    description:
      "QĐ 2979/QĐ-UBND ngày 24/9/2026: UBND TP Đồng Nai giao đất chính thức cho CĐT Phú Hội. QĐ 1772 chấp thuận 2.421 lô phân lô bán nền.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: IMG_LEGAL["1"], width: 1280, height: 720, alt: "Pháp lý Mega City 2 QĐ 1772" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pháp Lý Mega City 2 – QĐ 2979 (09/2026) & QĐ 1772",
    description: "QĐ 2979 ngày 24/9/2026 giao đất chính thức. QĐ 1772 chấp thuận 2.421 lô phân lô bán nền.",
    images: [IMG_LEGAL["1"]],
  },
};

const legalSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pháp lý Mega City 2 Nhơn Trạch – QĐ 2979/QĐ-UBND (09/2026) & QĐ 1772/QĐ-UBND",
  description:
    "Phân tích chi tiết tình trạng pháp lý dự án Mega City 2: QĐ 2979/QĐ-UBND ngày 24/9/2026 giao đất chính thức cho CĐT Phú Hội, QĐ 1772/QĐ-UBND chấp thuận 2.421 lô phân lô bán nền, quy hoạch 1/500.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url: "https://kimoanhdongnai.com.vn",
  },
  datePublished: "2026-08-01",
  dateModified: "2026-09-24",
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
      name: "QĐ 2979/QĐ-UBND ngày 24/9/2026 có ý nghĩa gì với dự án Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quyết định 2979/QĐ-UBND do UBND TP Đồng Nai ban hành ngày 24/9/2026 giao đất chính thức cho Công ty TNHH Khu đô thị Phú Hội tiếp tục triển khai dự án. Theo đó giao 321.248 m² đất hạ tầng kỹ thuật và chấp thuận toàn bộ cơ cấu sử dụng ~839.256 m² bao gồm đất ở (449.695 m²), đất thương mại/giáo dục (69.562 m²) và đất hạ tầng kỹ thuật (320.221 m²).",
      },
    },
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
    icon: "🆕",
    title: "Quyết định 2979/QĐ-UBND",
    date: "24/09/2026",
    issuer: "UBND TP Đồng Nai",
    summary:
      "Giao 321.248 m² đất hạ tầng kỹ thuật và chấp thuận toàn bộ cơ cấu sử dụng ~839.256 m² (đất ở 449.695 m², TM–GD 69.562 m², hạ tầng kỹ thuật 320.221 m²) cho Công ty TNHH Khu đô thị Phú Hội tiếp tục triển khai dự án.",
    highlight: true,
    pdfLink: "/2979.QĐ-UBND.pdf",
  },
  {
    icon: "📋",
    title: "Quyết định 1772/QĐ-UBND",
    date: "30/05/2025",
    issuer: "UBND tỉnh Đồng Nai",
    summary:
      "Chấp thuận 2.421 lô thuộc dự án Mega City 2 đủ điều kiện chuyển nhượng quyền sử dụng đất theo hình thức phân lô bán nền.",
    highlight: false,
    pdfLink: "/Quyết định.pdf",
  },
  {
    icon: "🗺️",
    title: "Quy hoạch chi tiết 1/500",
    date: "Đã được phê duyệt",
    issuer: "Cơ quan có thẩm quyền tỉnh Đồng Nai",
    summary:
      "Quy hoạch chi tiết tỷ lệ 1/500 của khu dân cư Mega City 2, xác định vị trí, diện tích và chỉ giới xây dựng từng lô đất.",
    highlight: false,
    pdfLink: null,
  },
  {
    icon: "📜",
    title: "GCN – Giấy chứng nhận",
    date: "110 GCN đã cấp*",
    issuer: "Cơ quan đăng ký đất đai",
    summary:
      "Một số lô đã được cấp Giấy chứng nhận quyền sử dụng đất. Tình trạng GCN cần kiểm tra theo từng lô trước giao dịch.",
    highlight: false,
    pdfLink: null,
  },
  {
    icon: "🏗️",
    title: "Điều kiện xây dựng",
    date: "Theo QĐ 1772",
    issuer: "UBND tỉnh Đồng Nai",
    summary:
      "Cá nhân nhận chuyển nhượng phải hoàn thành xây dựng nhà ở trước ngày 31/12/2029 và ghi nhận điều kiện này trong hợp đồng.",
    highlight: false,
    pdfLink: null,
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

const breadcrumbMc2PhapLy = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://kimoanhdongnai.com.vn" },
    { "@type": "ListItem", position: 2, name: "Mega City 2", item: "https://kimoanhdongnai.com.vn/mega-city-2" },
    { "@type": "ListItem", position: 3, name: "Pháp lý", item: "https://kimoanhdongnai.com.vn/mega-city-2/phap-ly" },
  ],
};

export default function PhapLyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbMc2PhapLy) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="Pháp lý"
          title="Pháp lý Mega City 2 Nhơn Trạch"
          subtitle="Chi tiết tình trạng pháp lý dự án: QĐ 2979/QĐ-UBND (24/9/2026), QĐ 1772/QĐ-UBND, quy hoạch 1/500 và điều kiện giao dịch."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "Pháp lý" },
          ]}
          updatedAt="09/2026 (QĐ 2979/QĐ-UBND ngày 24/09/2026)"
        />

        {/* Highlight 2 QĐ quan trọng */}
        <section className="py-10 bg-primary-50 border-b border-primary-100">
          <div className="max-w-6xl mx-auto px-4 space-y-4">

            {/* QĐ 2979 — mới nhất */}
            <div className="rounded-2xl bg-primary-600 text-white p-6 md:p-8 anim-scale">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-white/20 text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">
                      Mới nhất · 24/09/2026
                    </span>
                  </div>
                  <p className="text-primary-200 text-xs font-bold uppercase tracking-widest mb-1">
                    Văn bản pháp lý mới nhất
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold mb-3">
                    Quyết định 2979/QĐ-UBND
                  </h2>
                  <p className="text-primary-100 text-sm leading-relaxed mb-4">
                    UBND TP Đồng Nai giao đất chính thức cho{" "}
                    <strong className="text-white">Công ty TNHH Khu đô thị Phú Hội</strong>{" "}
                    tiếp tục triển khai dự án tại phường Nhơn Trạch. Giao{" "}
                    <strong className="text-white">321.248 m²</strong> đất hạ tầng kỹ thuật và
                    chấp thuận toàn bộ cơ cấu sử dụng{" "}
                    <strong className="text-white">~839.256 m²</strong> toàn dự án.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full font-semibold">449.695 m² đất ở</span>
                    <span className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full font-semibold">69.562 m² TM–Giáo dục</span>
                    <span className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full font-semibold">Đến 30/6/2059</span>
                    <span className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full font-semibold">UBND TP Đồng Nai</span>
                  </div>
                </div>
                <a
                  href="/2979.QĐ-UBND.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 self-start bg-white text-primary-700 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-primary-50 transition-colors"
                >
                  📄 Xem văn bản gốc
                </a>
              </div>
            </div>

            {/* QĐ 1772 */}
            <div className="rounded-2xl bg-white border border-primary-200 p-6 anim-up">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <p className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-1">
                    Văn bản pháp lý phân lô bán nền
                  </p>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    Quyết định 1772/QĐ-UBND
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Ngày 30/5/2025, UBND tỉnh Đồng Nai ban hành Quyết định 1772/QĐ-UBND chấp thuận{" "}
                    <strong className="text-slate-800">2.421 lô</strong> thuộc{" "}
                    <a href="/mega-city-2" className="text-primary-600 font-semibold underline underline-offset-2 hover:text-primary-700">
                      dự án Mega City 2 Nhơn Trạch
                    </a>{" "}
                    đủ điều kiện chuyển nhượng quyền sử dụng đất theo hình thức phân lô bán nền,
                    bao gồm các dãy T-1 đến T-29, TH-1 đến TH-28 và V-1 đến V-4.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs px-3 py-1.5 rounded-full font-semibold">
                      2.421 lô được chấp thuận
                    </span>
                    <span className="bg-slate-50 text-slate-600 border border-slate-200 text-xs px-3 py-1.5 rounded-full font-semibold">
                      30/05/2025
                    </span>
                    <span className="bg-slate-50 text-slate-600 border border-slate-200 text-xs px-3 py-1.5 rounded-full font-semibold">
                      UBND tỉnh Đồng Nai
                    </span>
                  </div>
                </div>
                <a
                  href="/Quyết định.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 self-start border-2 border-primary-600 text-primary-600 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-primary-50 transition-colors"
                >
                  📄 Xem văn bản gốc
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Hồ sơ pháp lý */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up">
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                Các văn bản pháp lý chính
              </h2>
              <p className="text-sm text-slate-500 mb-6">Hồ sơ pháp lý đã được công bố chính thức.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 anim-stagger">
              {legalDocs.map((doc) => (
                <div
                  key={doc.title}
                  className={`rounded-2xl p-5 border anim-card
                    ${doc.highlight
                      ? "bg-primary-50 border-primary-200"
                      : "bg-slate-50 border-slate-200"}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{doc.icon}</span>
                    <div className="flex-1 min-w-0">
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
                      {doc.pdfLink && (
                        <a
                          href={doc.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-primary-600 hover:underline"
                        >
                          📄 Xem văn bản gốc →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cơ cấu lô */}
            <h2 className="text-xl font-bold text-slate-800 mb-4 anim-up">
              Cơ cấu sản phẩm theo quy hoạch
            </h2>
            <div className="rounded-2xl border border-slate-200 overflow-hidden mb-8 anim-up anim-delay-100">
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
            <h2 className="text-xl font-bold text-slate-800 mb-6 anim-up">
              Hình ảnh hồ sơ pháp lý
            </h2>

            {/* Gallery QĐ-2979 — mới nhất */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4 anim-up">
                <span className="inline-flex items-center gap-1.5 bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  <span>🆕</span> Mới nhất · 24/09/2026
                </span>
                <h3 className="text-base font-bold text-slate-800">QĐ 2979/QĐ-UBND — 4 trang</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 anim-stagger">
                {[
                  { src: IMG_LEGAL_2979["1"], caption: "Trang 1 – Tiêu đề & căn cứ" },
                  { src: IMG_LEGAL_2979["2"], caption: "Trang 2 – Điều 1 & 2 giao đất" },
                  { src: IMG_LEGAL_2979["3"], caption: "Trang 3 – Cơ cấu sử dụng đất" },
                  { src: IMG_LEGAL_2979["4"], caption: "Trang 4 – Điều 3, 4 & con dấu" },
                ].map((img, i) => (
                  <div key={img.src}
                    className="rounded-2xl bg-slate-100 border border-primary-100 overflow-hidden anim-img-wrap group cursor-zoom-in shadow-sm hover:shadow-md transition-shadow">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={`Quyết định 2979/QĐ-UBND ngày 24/9/2026 – ${img.caption}`}
                      className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="px-3 py-2 bg-white border-t border-primary-100">
                      <p className="text-[11px] font-semibold text-primary-700 text-center">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-end anim-up">
                <a
                  href="/2979.QĐ-UBND.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary-600 hover:text-primary-700 hover:underline"
                >
                  📄 Tải văn bản gốc QĐ 2979/QĐ-UBND (PDF) →
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200 mb-10" />

            {/* Gallery QĐ-1772 */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-4 anim-up">
                <span className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  <span>✓</span> 30/05/2025
                </span>
                <h3 className="text-base font-bold text-slate-800">QĐ 1772/QĐ-UBND — hồ sơ phân lô</h3>
              </div>
              <p className="text-xs text-slate-400 mb-4 anim-up">
                Hình ảnh tài liệu pháp lý được công bố. Khách hàng nên yêu cầu xem bản gốc khi giao dịch.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 anim-stagger">
                {[
                  { src: IMG_LEGAL["1"], caption: "Quyết định 1772 – trang chính", alt: "Quyết định 1772/QĐ-UBND phân lô bán nền Mega City 2" },
                  { src: IMG_LEGAL["2"], caption: "Danh sách lô phân lô (trang 1)", alt: "Danh sách lô phân lô bán nền Mega City 2 trang 1" },
                  { src: IMG_LEGAL["3"], caption: "Danh sách lô phân lô (trang 2)", alt: "Danh sách lô phân lô bán nền Mega City 2 trang 2 – 2.421 lô" },
                ].map((img) => (
                  <div key={img.src}
                    className="rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden anim-img-wrap group cursor-zoom-in shadow-sm hover:shadow-md transition-shadow">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <div className="px-3 py-2 bg-white border-t border-slate-100">
                      <p className="text-[11px] font-semibold text-slate-500 text-center">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-end anim-up">
                <a
                  href="/Quyết định.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  📄 Tải văn bản gốc QĐ 1772/QĐ-UBND (PDF) →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Pháp lý */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <div className="anim-up">
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                Câu hỏi thường gặp về pháp lý
              </h2>
              <p className="text-sm text-slate-500 mb-6">Những thắc mắc phổ biến nhất từ khách hàng.</p>
            </div>
            <div className="space-y-3 anim-stagger-slow">
              {faqSchema.mainEntity.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden anim-card"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer
                                       px-5 py-4 font-semibold text-slate-800 text-sm list-none
                                       group-open:text-primary-700 select-none">
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
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 anim-up">
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

      <CorpFooter />
    </>
  );
}
