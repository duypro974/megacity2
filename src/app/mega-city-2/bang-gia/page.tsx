import type { Metadata } from "next";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import { IMG_REAL } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Bảng Giá Mega City 2 Nhơn Trạch – Giá Đất Nền Tham Khảo 2026",
  description:
    "Bảng giá đất nền Mega City 2 Nhơn Trạch cập nhật 2026: từ 1,15 tỷ/nền. Chi tiết giá TH, T, V theo từng vị trí, diện tích và block. Liên hệ 0937.587.438 để nhận báo giá.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/bang-gia" },
  openGraph: {
    title: "Bảng Giá Mega City 2 Nhơn Trạch – Cập Nhật 2026",
    description:
      "Bảng giá đất nền Mega City 2 từ 1,15 tỷ/nền. TH, T, V – giá theo vị trí và diện tích.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: IMG_REAL["9"], width: 1280, height: 720, alt: "Bảng giá đất nền Mega City 2 Nhơn Trạch" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bảng Giá Mega City 2 – Từ 1,15 Tỷ/Nền",
    description: "Giá chuyển nhượng tham khảo TH, T, V tại Mega City 2 Nhơn Trạch 2026.",
    images: [IMG_REAL["9"]],
  },
};

const priceSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bảng giá đất nền Mega City 2 Nhơn Trạch – Cập nhật 2026",
  description:
    "Giá chuyển nhượng tham khảo các loại sản phẩm TH, T, V tại khu dân cư Mega City 2 Nhơn Trạch theo từng vị trí và diện tích.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url: "https://kimoanhdongnai.com.vn",
  },
  datePublished: "2026-08-01",
  dateModified: "2026-08-13",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/bang-gia",
  about: {
    "@type": "RealEstateListing",
    name: "Mega City 2 Nhơn Trạch",
    url: "https://kimoanhdongnai.com.vn/mega-city-2",
  },
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  name: "Đất nền Mega City 2 Nhơn Trạch",
  lowPrice: "1150000000",
  highPrice: "4000000000",
  priceCurrency: "VND",
  description:
    "Giá chuyển nhượng tham khảo đất nền tại Mega City 2, tùy theo loại sản phẩm TH, T, V, vị trí và thời điểm giao dịch.",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/bang-gia",
};

const faqPriceSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Giá đất nền Mega City 2 hiện nay bao nhiêu tiền?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giá chuyển nhượng tham khảo đất nền Mega City 2 từ khoảng 1,15 tỷ đồng/nền đối với nhà phố TH và T diện tích 90 m². Nhà phố mặt đường lớn và biệt thự V có giá từ 2,2 – 4 tỷ. Giá thực tế phụ thuộc vị trí, block và thời điểm giao dịch. Liên hệ 0937.587.438 để nhận báo giá cập nhật.",
      },
    },
    {
      "@type": "Question",
      name: "Nhà phố TH Mega City 2 giá bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà phố liên kế TH tại Mega City 2 có diện tích 90–120 m², giá tham khảo từ 1,15 – 1,8 tỷ đồng/nền tùy block TH-1 đến TH-28 và vị trí trong dự án.",
      },
    },
    {
      "@type": "Question",
      name: "Biệt thự V Mega City 2 giá bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biệt thự song lập V tại Mega City 2 có diện tích 150–200 m², mặt tiền 8–10 m, giá tham khảo từ 3,0 – 4,0 tỷ đồng/nền. Số lượng giới hạn tại các block V-1 đến V-4.",
      },
    },
    {
      "@type": "Question",
      name: "Những yếu tố nào ảnh hưởng đến giá đất tại Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "6 yếu tố chính ảnh hưởng đến giá: (1) vị trí lô – mặt đường lớn hay hẻm nội khu; (2) diện tích – lô lớn thường giá/m² thấp hơn; (3) block và hướng – gần công viên, trường học; (4) tình trạng pháp lý – sổ hồng riêng hay có điều kiện; (5) đã có nhà hay chỉ là đất nền; (6) thời điểm giao dịch.",
      },
    },
  ],
};

const priceRanges = [
  {
    type: "TH – Nhà vườn liên kế",
    area: "90–120 m²",
    frontage: "5–6 m",
    priceRange: "1,15 – 1,8 tỷ",
    unit: "đ/nền",
    note: "Block TH-1 đến TH-28",
    highlight: false,
  },
  {
    type: "T – Nhà phố liên kế",
    area: "80–100 m²",
    frontage: "5 m",
    priceRange: "1,3 – 2,2 tỷ",
    unit: "đ/nền",
    note: "Block T-1 đến T-29, mặt tiền đường nội khu",
    highlight: true,
  },
  {
    type: "T – Nhà phố mặt đường lớn",
    area: "100–160 m²",
    frontage: "5–6 m",
    priceRange: "2,2 – 3,5 tỷ",
    unit: "đ/nền",
    note: "Vị trí góc hoặc mặt tiền đường 25C và trục chính",
    highlight: false,
  },
  {
    type: "V – Biệt thự song lập",
    area: "150–200 m²",
    frontage: "8–10 m",
    priceRange: "3,0 – 4,0 tỷ",
    unit: "đ/nền",
    note: "Block V-1 đến V-4, số lượng giới hạn",
    highlight: false,
  },
  {
    type: "Nhà xây sẵn (đã có nhà)",
    area: "Tùy lô",
    frontage: "5–6 m",
    priceRange: "2,5 – 5,0 tỷ",
    unit: "đ/căn",
    note: "Giá phụ thuộc tình trạng xây dựng và hoàn thiện",
    highlight: false,
  },
];

const priceFactors = [
  {
    icon: "📍",
    title: "Vị trí lô",
    desc: "Lô mặt tiền đường lớn, đường 25C, trục chính nội khu thường có giá cao hơn lô trong hẻm 15–30%.",
  },
  {
    icon: "📐",
    title: "Diện tích",
    desc: "Lô diện tích lớn (>120 m²) thường có giá/m² thấp hơn. Lô nhỏ (80–90 m²) phù hợp đầu tư.",
  },
  {
    icon: "🗺️",
    title: "Block & Hướng",
    desc: "Block gần công viên trung tâm, khu thương mại, trường học thường được định giá cao hơn.",
  },
  {
    icon: "📜",
    title: "Pháp lý",
    desc: "Lô đã có GCN (sổ hồng riêng) hoặc sổ hồng không điều kiện thường có giá cao hơn lô có điều kiện.",
  },
  {
    icon: "🏗️",
    title: "Đã có nhà",
    desc: "Lô kèm nhà xây sẵn có giá cao hơn đáng kể và phù hợp nhu cầu ở ngay.",
  },
  {
    icon: "📅",
    title: "Thời điểm",
    desc: "Giá thị trường có thể biến động. Liên hệ để nhận báo giá cập nhật nhất.",
  },
];

export default function BangGiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPriceSchema) }}
      />

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="Bảng giá"
          title="Bảng giá Mega City 2 Nhơn Trạch"
          subtitle="Giá chuyển nhượng tham khảo đất nền các loại sản phẩm TH, T, V tại khu dân cư Mega City 2 – cập nhật 2026."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "Bảng giá" },
          ]}
          updatedAt="08/2026"
        />

        {/* Disclaimer nổi bật */}
        <section className="py-8 bg-amber-50 border-b border-amber-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-start gap-3 anim-left">
              <span className="text-2xl flex-shrink-0">⚠️</span>
              <div>
                <p className="font-bold text-amber-800 text-sm mb-1">
                  Giá tham khảo – không phải báo giá chính thức
                </p>
                <p className="text-xs text-amber-700 leading-relaxed">
                  Thông tin giá dưới đây được tổng hợp từ dữ liệu thị trường và chỉ mang tính
                  tham khảo. Giá thực tế phụ thuộc vào từng lô cụ thể, thời điểm giao dịch và
                  thỏa thuận giữa các bên. Liên hệ{" "}
                  <a href="tel:0937587438" className="font-bold text-amber-800 underline">
                    0937.587.438
                  </a>{" "}
                  để nhận báo giá cập nhật.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bảng giá tham khảo */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                Bảng giá tham khảo theo loại sản phẩm
              </h2>
              <p className="text-sm text-slate-500 mb-8">
                Giá từ khoảng <strong className="text-slate-700">1,15 tỷ đồng/nền</strong> tùy vị trí, block và thời điểm giao dịch.
              </p>
            </div>

            {/* Desktop table */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden mb-8 hidden md:block anim-up anim-delay-100">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left px-4 py-3.5 text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Loại sản phẩm
                      </th>
                      <th className="text-left px-4 py-3.5 text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Diện tích
                      </th>
                      <th className="text-left px-4 py-3.5 text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Mặt tiền
                      </th>
                      <th className="text-left px-4 py-3.5 text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Giá tham khảo
                      </th>
                      <th className="text-left px-4 py-3.5 text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Ghi chú
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {priceRanges.map((row) => (
                      <tr
                        key={row.type}
                        className={`hover:bg-slate-50 transition-colors
                          ${row.highlight ? "bg-primary-50/40" : ""}`}
                      >
                        <td className="px-4 py-3.5 font-semibold text-slate-800">
                          {row.type}
                          {row.highlight && (
                            <span className="ml-2 inline-block text-[10px] bg-primary-100
                                             text-primary-700 px-1.5 py-0.5 rounded-full font-bold">
                              Phổ biến
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3.5 text-slate-600">{row.area}</td>
                        <td className="px-4 py-3.5 text-slate-600">{row.frontage}</td>
                        <td className="px-4 py-3.5">
                          <span className="font-black text-primary-700 text-base">{row.priceRange}</span>
                          <span className="text-slate-400 text-xs ml-1">{row.unit}</span>
                        </td>
                        <td className="px-4 py-3.5 text-slate-500 text-xs">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100">
                <p className="text-[11px] text-slate-400">
                  * Giá tham khảo, có thể thay đổi theo thị trường và thời điểm. Cần xác nhận lại khi giao dịch.
                </p>
              </div>
            </div>

            {/* Mobile cards */}
            <div className="space-y-3 md:hidden anim-stagger">
              {priceRanges.map((row) => (
                <div
                  key={row.type}
                  className={`rounded-2xl border p-4
                    ${row.highlight ? "bg-primary-50 border-primary-200" : "bg-slate-50 border-slate-200"}`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className={`font-bold text-sm ${row.highlight ? "text-primary-800" : "text-slate-800"}`}>
                      {row.type}
                      {row.highlight && (
                        <span className="ml-2 inline-block text-[10px] bg-primary-100
                                         text-primary-700 px-1.5 py-0.5 rounded-full font-bold">
                          Phổ biến
                        </span>
                      )}
                    </p>
                    <p className="font-black text-primary-700 text-base whitespace-nowrap flex-shrink-0">
                      {row.priceRange}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-xs text-slate-500 mb-1.5">
                    <span>Diện tích: <strong>{row.area}</strong></span>
                    <span>Mặt tiền: <strong>{row.frontage}</strong></span>
                  </div>
                  <p className="text-xs text-slate-400">{row.note}</p>
                </div>
              ))}
              <p className="text-[11px] text-slate-400 px-1">
                * Giá tham khảo, cần xác nhận khi giao dịch.
              </p>
            </div>
          </div>
        </section>

        {/* Yếu tố ảnh hưởng giá */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up">
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                6 yếu tố ảnh hưởng đến giá
              </h2>
              <p className="text-sm text-slate-500 mb-8">
                Hiểu rõ các yếu tố định giá giúp bạn đưa ra quyết định đầu tư đúng đắn.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 anim-stagger">
              {priceFactors.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl bg-white border border-slate-200 p-5 anim-card
                             hover:border-primary-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1.5">{f.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCTA
          title="Tư vấn bảng giá chi tiết từng lô"
          subtitle="Liên hệ để nhận bảng giá mới nhất, hỗ trợ so sánh vị trí và chính sách ưu đãi."
          variant="default"
        />

        <RelatedContent
          items={[
            {
              href: "/mega-city-2",
              title: "Tổng quan Mega City 2 Nhơn Trạch",
              description: "Thông tin tổng hợp về dự án: quy mô, chủ đầu tư và pháp lý.",
              tag: "Tổng quan",
            },
            {
              href: "/mega-city-2/thanh-toan",
              title: "Phương thức thanh toán",
              description: "Các hình thức thanh toán và chính sách hỗ trợ tài chính.",
              tag: "Thanh toán",
            },
            {
              href: "/mega-city-2/mat-bang",
              title: "Mặt bằng & Sản phẩm",
              description: "Bản đồ phân lô và các loại hình sản phẩm nhà ở TH, T, V.",
              tag: "Mặt bằng",
            },
            {
              href: "/mega-city-2/phap-ly",
              title: "Pháp lý – QĐ 1772",
              description: "Tình trạng pháp lý và điều kiện giao dịch chính thức.",
              tag: "Pháp lý",
            },
            {
              href: "/mega-city-2/vi-tri",
              title: "Vị trí & Kết nối vùng",
              description: "Phân tích vị trí chiến lược Nhơn Trạch.",
              tag: "Vị trí",
            },
            {
              href: "/mega-city-2/faq",
              title: "FAQ – Câu hỏi thường gặp",
              description: "Giải đáp các câu hỏi về giá, pháp lý và tiến độ.",
              tag: "FAQ",
            },
          ]}
        />
      </div>

      <CorpFooter />
    </>
  );
}
