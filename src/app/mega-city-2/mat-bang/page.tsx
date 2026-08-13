import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ProductSection from "@/components/ProductSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mặt Bằng Mega City 2 – Bản Đồ Phân Lô & Sản Phẩm Nhà Ở 2026",
  description:
    "Mặt bằng phân lô tổng thể và các loại sản phẩm nhà ở tại Mega City 2 Nhơn Trạch: TH (1.580 lô), T (1.478 lô), V (102 lô). Bản vẽ mẫu nhà PH-B5 5×16m chi tiết.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/mat-bang" },
  openGraph: {
    title: "Mặt Bằng Mega City 2 – Bản Đồ Phân Lô & Sản Phẩm",
    description:
      "Bản đồ phân lô tổng thể Mega City 2: 3.160 sản phẩm thấp tầng, mẫu nhà PH-B5, quy hoạch chi tiết.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mặt Bằng & Sản Phẩm Mega City 2 Nhơn Trạch",
    description: "3.160 sản phẩm thấp tầng: TH, T, V. Bản vẽ mẫu nhà PH-B5.",
  },
};

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Mặt bằng phân lô và bản vẽ sản phẩm Mega City 2 Nhơn Trạch",
  description: "Bản đồ phân lô tổng thể và bản vẽ mẫu nhà PH-B5 tại khu dân cư Mega City 2 xã Nhơn Trạch, tỉnh Đồng Nai.",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/mat-bang",
  about: {
    "@type": "RealEstateListing",
    name: "Mega City 2 Nhơn Trạch",
    url: "https://kimoanhdongnai.com.vn/mega-city-2",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mặt bằng và sản phẩm nhà ở tại Mega City 2 Nhơn Trạch",
  description:
    "Mô tả chi tiết các loại sản phẩm nhà ở tại Mega City 2: nhà vườn liên kế TH, nhà phố T, biệt thự V và mẫu thiết kế PH-B5.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url: "https://kimoanhdongnai.com.vn",
  },
  datePublished: "2026-08-01",
  dateModified: "2026-08-13",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/mat-bang",
};

const faqMatBangSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Nhà phố liên kế Mega City 2 có những loại nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mega City 2 có 3 loại sản phẩm nhà phố liên kế: TH (nhà vườn liên kế, 1.580 lô, diện tích 90–120 m²), T (nhà phố liên kế, 1.478 lô, diện tích 80–160 m²) và V (biệt thự song lập, 102 lô, diện tích 150–200 m²). Tổng 3.160 sản phẩm theo quy hoạch.",
      },
    },
    {
      "@type": "Question",
      name: "Mẫu nhà PH-B5 Mega City 2 thiết kế như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mẫu nhà liên kế phố PH-B5 tại Mega City 2 có kích thước 5×16 m, 3 tầng, tổng diện tích sàn khoảng 327,8 m², chiều cao 14,50 m. Thiết kế hoàn thiện mặt ngoài, xây thô bên trong. Áp dụng cho các lô T-30 và các lô có kích thước tương đương.",
      },
    },
    {
      "@type": "Question",
      name: "Lô đất Mega City 2 diện tích bao nhiêu m²?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Diện tích lô đất phổ biến tại Mega City 2 từ 80 m² đến 200 m²: nhà phố TH khoảng 90–120 m², nhà phố T khoảng 80–160 m², biệt thự V khoảng 150–200 m². Mặt tiền phổ biến 5 m với nhà phố và 8–10 m với biệt thự.",
      },
    },
    {
      "@type": "Question",
      name: "Quy hoạch 1/500 Mega City 2 đã được phê duyệt chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Quy hoạch chi tiết tỷ lệ 1/500 của khu dân cư Mega City 2 đã được cơ quan có thẩm quyền tỉnh Đồng Nai phê duyệt, xác định rõ vị trí, diện tích và chỉ giới xây dựng từng lô. UBND tỉnh cũng đã ban hành QĐ 1772/QĐ-UBND ngày 30/5/2025 chấp thuận 2.421 lô phân lô bán nền.",
      },
    },
  ],
};

const productTypes = [
  {
    code: "TH",
    name: "Nhà vườn liên kế TH",
    count: "1.580 lô",
    area: "90–120 m²",
    frontage: "5–6 m",
    blocks: "TH-1 đến TH-28",
    desc: "Nhà vườn liên kế nội khu, nằm trên các trục đường 13–15 m. Phù hợp nhu cầu ở thực với không gian sân vườn, mật độ thấp, view thoáng. Giá tham khảo từ 1,15 tỷ/nền.",
    highlight: false,
  },
  {
    code: "T",
    name: "Nhà phố liên kế T",
    count: "1.478 lô",
    area: "80–160 m²",
    frontage: "5 m",
    blocks: "T-1 đến T-29",
    desc: "Nhà phố liên kế mặt đường nội khu 17–32 m. Thích hợp vừa ở vừa kinh doanh. Các block T mặt đường lớn 24–32 m có tiềm năng thương mại cao. Giá từ 1,3 tỷ đến hơn 3 tỷ tùy vị trí.",
    highlight: true,
  },
  {
    code: "V",
    name: "Biệt thự song lập V",
    count: "102 lô",
    area: "150–200 m²",
    frontage: "8–10 m",
    blocks: "V-1 đến V-4",
    desc: "Biệt thự song lập cao cấp, số lượng giới hạn. Diện tích rộng 150–200 m², mặt tiền 8–10 m. Vị trí đẹp trong khu dân cư, phù hợp nhu cầu nghỉ dưỡng kết hợp đầu tư dài hạn.",
    highlight: false,
  },
];

const comparePoints = [
  {
    label: "Vị trí trong dự án",
    th: "Nội khu, đường 13–15 m",
    t: "Trục chính 17–32 m",
    v: "Khu biệt thự riêng biệt",
  },
  {
    label: "Diện tích phổ biến",
    th: "90–120 m²",
    t: "80–160 m²",
    v: "150–200 m²",
  },
  {
    label: "Mặt tiền",
    th: "5–6 m",
    t: "5 m",
    v: "8–10 m",
  },
  {
    label: "Số lượng (QH)",
    th: "1.580 lô",
    t: "1.478 lô",
    v: "102 lô",
  },
  {
    label: "Giá tham khảo",
    th: "1,15 – 1,8 tỷ",
    t: "1,3 – 3,5 tỷ",
    v: "3,0 – 4,0 tỷ",
  },
  {
    label: "Phù hợp nhất cho",
    th: "Ở thực, gia đình",
    t: "Ở + kinh doanh",
    v: "Đầu tư, nghỉ dưỡng",
  },
];

export default function MatBangPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqMatBangSchema) }}
      />

      <Header />
      <ContactSidebar />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="Mặt bằng"
          title="Mặt bằng & Sản phẩm Mega City 2"
          subtitle="Bản đồ phân lô tổng thể, các loại hình sản phẩm nhà ở và bản vẽ mẫu nhà tại dự án Mega City 2 Nhơn Trạch."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "Mặt bằng" },
          ]}
          updatedAt="08/2026"
        />

        {/* ── Tổng quan quy hoạch ── */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
              Tổng quan quy hoạch Mega City 2
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Khu dân cư Mega City 2 có quy mô khoảng <strong>83,94 ha</strong> tại xã Nhơn
              Trạch, tỉnh Đồng Nai, được quy hoạch theo tiêu chuẩn đô thị đồng bộ với hệ
              thống đường nội khu, cây xanh và tiện ích tích hợp.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Toàn dự án có <strong>3.160 sản phẩm nhà ở thấp tầng</strong> theo quy hoạch,
              chia thành 3 loại hình chính: nhà vườn liên kế TH, nhà phố liên kế T và biệt
              thự song lập V. Trong đó <strong>2.421 lô</strong> đã được UBND tỉnh Đồng Nai
              chấp thuận thực hiện phân lô bán nền theo{" "}
              <Link href="/mega-city-2/phap-ly" className="text-primary-600 hover:underline font-semibold">
                Quyết định 1772/QĐ-UBND ngày 30/5/2025
              </Link>
              .
            </p>

            {/* Stats nhanh */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                { val: "~84 ha", label: "Quy mô tổng thể" },
                { val: "3.160", label: "Sản phẩm theo QH" },
                { val: "2.421 lô", label: "Được phân lô bán nền" },
                { val: "3 loại", label: "Hình thức sản phẩm" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-primary-50 border border-primary-100 p-4 text-center">
                  <p className="text-xl font-black text-primary-700">{s.val}</p>
                  <p className="text-[11px] text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Quy hoạch đường nội khu */}
            <h3 className="text-base font-bold text-slate-800 mb-3">
              Hệ thống đường nội khu theo quy hoạch
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Mạng lưới đường nội khu Mega City 2 được thiết kế với lộ giới từ{" "}
              <strong>13 m đến 32 m</strong>, phân cấp rõ ràng:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                { width: "32 m", type: "Trục đường chính", note: "Kết nối đường 25C, thương mại hai bên" },
                { width: "17–24 m", type: "Trục nội khu cấp 1", note: "Các tuyến trục ngang và dọc chính" },
                { width: "13–15 m", type: "Đường nhánh nội bộ", note: "Tiếp cận các lô TH và T nội khu" },
              ].map((r) => (
                <div key={r.width} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-lg font-black text-slate-800">{r.width}</p>
                  <p className="text-sm font-semibold text-slate-700 mt-0.5">{r.type}</p>
                  <p className="text-xs text-slate-500 mt-1">{r.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3 loại sản phẩm ── */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
              3 loại hình sản phẩm nhà phố liên kế
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Mỗi loại sản phẩm được thiết kế cho nhu cầu và ngân sách khác nhau.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {productTypes.map((p) => (
                <div
                  key={p.code}
                  className={`rounded-2xl border p-5 flex flex-col
                    ${p.highlight
                      ? "bg-primary-50 border-primary-200 shadow-md shadow-primary-100"
                      : "bg-white border-slate-200"}`}
                >
                  {p.highlight && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                     text-primary-600 bg-primary-100 px-2.5 py-1 rounded-full mb-3 self-start">
                      Phổ biến nhất
                    </span>
                  )}
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-black text-slate-800">{p.code}</span>
                    <span className="text-sm font-semibold text-slate-600">{p.name}</span>
                  </div>
                  <div className="mt-3 space-y-1.5 text-xs text-slate-500 mb-4">
                    <div className="flex justify-between"><span>Số lượng (QH)</span><strong className="text-slate-700">{p.count}</strong></div>
                    <div className="flex justify-between"><span>Diện tích</span><strong className="text-slate-700">{p.area}</strong></div>
                    <div className="flex justify-between"><span>Mặt tiền</span><strong className="text-slate-700">{p.frontage}</strong></div>
                    <div className="flex justify-between"><span>Block</span><strong className="text-slate-700 font-mono">{p.blocks}</strong></div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* So sánh nhanh */}
            <h3 className="text-base font-bold text-slate-800 mb-4">
              Bảng so sánh 3 loại sản phẩm
            </h3>
            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left px-4 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">Tiêu chí</th>
                      <th className="text-center px-4 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">TH</th>
                      <th className="text-center px-4 py-3 text-xs font-bold text-primary-700 uppercase tracking-wider bg-primary-50">T</th>
                      <th className="text-center px-4 py-3 text-xs font-bold text-slate-600 uppercase tracking-wider">V</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {comparePoints.map((r) => (
                      <tr key={r.label} className="hover:bg-slate-50">
                        <td className="px-4 py-3 text-slate-600 text-xs font-medium">{r.label}</td>
                        <td className="px-4 py-3 text-center text-slate-700 text-xs">{r.th}</td>
                        <td className="px-4 py-3 text-center text-xs font-semibold text-primary-700 bg-primary-50/50">{r.t}</td>
                        <td className="px-4 py-3 text-center text-slate-700 text-xs">{r.v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100">
                <p className="text-[11px] text-slate-400">* Giá tham khảo, thay đổi theo vị trí và thời điểm. Nguồn: thị trường 05/2026.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mẫu nhà PH-B5 ── */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
              Mẫu nhà PH-B5 – Nhà liên kế phố 3 tầng 5×16 m
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Mẫu thiết kế nhà liên kế phố <strong>PH-B5</strong> là mẫu chuẩn được áp dụng
              cho các lô T-30 ô số 13, 14 và các lô có kích thước 5×16 m tương đương tại
              Mega City 2. Đây là thiết kế <strong>3 tầng</strong> với tổng diện tích sàn
              khoảng <strong>327,8 m²</strong> và chiều cao tổng thể <strong>14,50 m</strong>.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label: "Kích thước lô", val: "5 × 16 m" },
                { label: "Số tầng", val: "3 tầng" },
                { label: "Tổng diện tích sàn", val: "~327,8 m²" },
                { label: "Chiều cao tổng", val: "14,50 m" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-center">
                  <p className="text-base font-black text-slate-800">{s.val}</p>
                  <p className="text-[11px] text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 mb-6">
              <p className="text-xs text-amber-700 leading-relaxed">
                <strong>Lưu ý:</strong> Mẫu nhà PH-B5 hoàn thiện phần mặt ngoài, xây thô
                phần bên trong. Chủ nhà chịu trách nhiệm hoàn thiện nội thất theo nhu cầu.
                Bản vẽ chi tiết xem tại mục sản phẩm bên dưới.
              </p>
            </div>
          </div>
        </section>

        {/* ── Hướng dẫn chọn sản phẩm ── */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Nên chọn loại sản phẩm nào?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: "🏡",
                  title: "Chọn TH nếu...",
                  points: [
                    "Ngân sách 1,2 – 1,8 tỷ",
                    "Ưu tiên không gian xanh, yên tĩnh",
                    "Nhu cầu ở thực cho gia đình",
                    "Muốn mật độ dân cư thấp hơn",
                  ],
                  color: "bg-emerald-50 border-emerald-200",
                },
                {
                  icon: "🏙️",
                  title: "Chọn T nếu...",
                  points: [
                    "Ngân sách 1,3 – 3,5 tỷ",
                    "Vừa ở vừa kinh doanh",
                    "Muốn mặt tiền đường lớn",
                    "Đầu tư cho thuê thương mại",
                  ],
                  color: "bg-primary-50 border-primary-200",
                },
                {
                  icon: "🏰",
                  title: "Chọn V nếu...",
                  points: [
                    "Ngân sách 3 – 4 tỷ+",
                    "Cần không gian sống rộng rãi",
                    "Đầu tư dài hạn, cao cấp",
                    "Muốn sở hữu số lượng giới hạn",
                  ],
                  color: "bg-amber-50 border-amber-200",
                },
              ].map((g) => (
                <div key={g.title} className={`rounded-2xl border p-5 ${g.color}`}>
                  <div className="text-2xl mb-2">{g.icon}</div>
                  <h3 className="font-bold text-slate-800 text-sm mb-3">{g.title}</h3>
                  <ul className="space-y-1.5">
                    {g.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-primary-500 mt-0.5 flex-shrink-0">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ProductSection component — bản vẽ chi tiết */}
        <ProductSection />

        <PageCTA
          title="Tư vấn chọn vị trí & sản phẩm phù hợp"
          subtitle="Liên hệ để nhận tư vấn về loại sản phẩm, vị trí lô và so sánh giá các block trong dự án."
        />

        <RelatedContent
          items={[
            {
              href: "/mega-city-2/bang-gia",
              title: "Bảng giá Mega City 2 cập nhật",
              description: "Giá chuyển nhượng tham khảo TH, T, V và nhà xây sẵn.",
              tag: "Bảng giá",
            },
            {
              href: "/mega-city-2/vi-tri",
              title: "Vị trí Mega City 2",
              description: "Phân tích vị trí và kết nối giao thông.",
              tag: "Vị trí",
            },
            {
              href: "/mega-city-2/tien-ich",
              title: "Tiện ích nội khu",
              description: "Hệ thống tiện ích đồng bộ trong khu dân cư.",
              tag: "Tiện ích",
            },
            {
              href: "/mega-city-2/phap-ly",
              title: "Pháp lý – QĐ 1772",
              description: "Tình trạng pháp lý và điều kiện giao dịch.",
              tag: "Pháp lý",
            },
            {
              href: "/mega-city-2/hinh-anh",
              title: "Hình ảnh thực tế",
              description: "Ảnh thực tế ghi nhận tại dự án.",
              tag: "Hình ảnh",
            },
            {
              href: "/mega-city-2/thanh-toan",
              title: "Phương thức thanh toán",
              description: "Các hình thức thanh toán và hỗ trợ tài chính.",
              tag: "Thanh toán",
            },
          ]}
        />
      </div>

      <Footer />
    </>
  );
}
