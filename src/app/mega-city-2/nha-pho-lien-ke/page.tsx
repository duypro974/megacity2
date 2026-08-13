import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import Link from "next/link";
import { IMG_REAL, IMG_AMENITIES } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Nhà Phố Liên Kế Mega City 2 – TH, T & Biệt Thự V Nhơn Trạch 2026",
  description:
    "Nhà phố liên kế tại Mega City 2 Nhơn Trạch: TH (1.580 lô, từ 1,15 tỷ), T (1.478 lô, mặt đường lớn) và biệt thự V (102 lô). Diện tích 80–200 m², sổ hồng, hạ tầng 95%.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/nha-pho-lien-ke" },
  openGraph: {
    title: "Nhà Phố Liên Kế Mega City 2 Nhơn Trạch – TH, T, V",
    description:
      "3 loại nhà phố liên kế tại Mega City 2: TH từ 1,15 tỷ, T mặt đường lớn, biệt thự V. Diện tích 80–200 m², pháp lý QĐ 1772.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [
      { url: IMG_REAL["3"], width: 1280, height: 720, alt: "Nhà phố liên kế Mega City 2 Nhơn Trạch" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhà Phố Liên Kế Mega City 2 – TH, T & Biệt Thự V",
    description: "3 loại nhà phố liên kế Mega City 2: từ 1,15 tỷ, sổ hồng, hạ tầng 95%.",
    images: [IMG_REAL["3"]],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nhà phố liên kế Mega City 2 Nhơn Trạch – Loại TH, T và Biệt thự V",
  description:
    "Thông tin chi tiết về các loại nhà phố liên kế tại khu dân cư Mega City 2: nhà vườn liên kế TH, nhà phố liên kế T và biệt thự song lập V.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-08-13",
  dateModified: "2026-08-13",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/nha-pho-lien-ke",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Nhà phố liên kế Mega City 2 có những loại nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mega City 2 có 3 loại nhà phố liên kế: TH (nhà vườn liên kế nội khu, 1.580 lô, diện tích 90–120 m², từ 1,15 tỷ), T (nhà phố liên kế mặt đường chính, 1.478 lô, diện tích 80–160 m², từ 1,3 tỷ) và V (biệt thự song lập, 102 lô, diện tích 150–200 m², từ 3 tỷ).",
      },
    },
    {
      "@type": "Question",
      name: "Nhà phố liên kế TH Mega City 2 khác gì so với loại T?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà phố TH (nhà vườn liên kế) nằm sâu trong nội khu trên đường 13–15 m, diện tích 90–120 m², phù hợp ở thực yên tĩnh. Nhà phố T nằm mặt đường lớn 17–32 m, phù hợp vừa ở vừa kinh doanh. TH có giá thấp hơn T cùng diện tích do vị trí và khả năng thương mại khác nhau.",
      },
    },
    {
      "@type": "Question",
      name: "Nhà phố liên kế Mega City 2 có sổ hồng chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án đã cấp khoảng 110 Giấy chứng nhận (sổ hồng). Một số block TH và T nội khu có sổ hồng riêng không ràng buộc điều kiện. Một số lô T mặt đường lớn có sổ hồng với điều kiện xây dựng trước 31/12/2029 theo QĐ 1772/QĐ-UBND. Cần kiểm tra tình trạng từng lô cụ thể trước giao dịch.",
      },
    },
    {
      "@type": "Question",
      name: "Giá nhà phố liên kế Mega City 2 bao nhiêu tiền?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giá tham khảo: nhà phố TH từ 1,15 – 1,8 tỷ/nền; nhà phố T mặt đường 17–24 m từ 1,5 – 2,2 tỷ; nhà phố T mặt đường 32 m từ 2 – 3,5 tỷ; biệt thự V từ 3 – 4 tỷ. Giá thực tế phụ thuộc vị trí, block và thời điểm giao dịch.",
      },
    },
    {
      "@type": "Question",
      name: "Diện tích nhà phố liên kế tại Mega City 2 là bao nhiêu m²?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Diện tích phổ biến: nhà phố TH 90–120 m², mặt tiền 5–6 m; nhà phố T 80–160 m², mặt tiền 5 m; biệt thự V 150–200 m², mặt tiền 8–10 m. Các lô góc thường có diện tích lớn hơn.",
      },
    },
  ],
};

const productRows = [
  {
    code: "TH",
    name: "Nhà vườn liên kế",
    count: "1.580 lô",
    area: "90–120 m²",
    front: "5–6 m",
    road: "13–15 m",
    price: "1,15 – 1,8 tỷ",
    best: "Ở thực, gia đình",
    color: "bg-emerald-50 border-emerald-200",
    textColor: "text-emerald-700",
  },
  {
    code: "T",
    name: "Nhà phố liên kế",
    count: "1.478 lô",
    area: "80–160 m²",
    front: "5 m",
    road: "17–32 m",
    price: "1,3 – 3,5 tỷ",
    best: "Ở + kinh doanh",
    color: "bg-primary-50 border-primary-200",
    textColor: "text-primary-700",
  },
  {
    code: "V",
    name: "Biệt thự song lập",
    count: "102 lô",
    area: "150–200 m²",
    front: "8–10 m",
    road: "Trục chính",
    price: "3,0 – 4,0 tỷ",
    best: "Đầu tư, cao cấp",
    color: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
  },
];

const highlights = [
  { icon: "📜", title: "Pháp lý QĐ 1772", desc: "2.421 lô được UBND tỉnh Đồng Nai chấp thuận phân lô bán nền ngày 30/5/2025." },
  { icon: "🛣️", title: "Hạ tầng ~95%", desc: "Đường nhựa, điện âm, nước thủy cục, công viên trung tâm đã hoàn thiện." },
  { icon: "📍", title: "Vị trí chiến lược", desc: "Mặt tiền đường 25C, cách TP.HCM 30–35 km, gần sân bay Long Thành ~18 km." },
  { icon: "🏦", title: "Hỗ trợ vay NH", desc: "Kết nối ngân hàng đối tác, đặt cọc từ 50 triệu, hỗ trợ vay mua nền." },
];

export default function NhaPhoCLienKePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />
      <ContactSidebar />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="Nhà phố liên kế"
          title="Nhà phố liên kế Mega City 2 Nhơn Trạch"
          subtitle="Tổng hợp thông tin 3 loại nhà phố liên kế tại Mega City 2: TH, T và biệt thự V – diện tích, giá, pháp lý và hướng dẫn chọn sản phẩm phù hợp."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "Nhà phố liên kế" },
          ]}
          updatedAt="08/2026"
        />

        {/* ── Tổng quan ── */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Nhà phố liên kế tại Mega City 2 là gì?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Nhà phố liên kế (hay còn gọi là nhà liền kề) là loại hình nhà ở phổ biến
              nhất tại khu dân cư Mega City 2 Nhơn Trạch. Mỗi căn nhà phố liên kế được
              xây dựng liền kề nhau trên một lô đất riêng, có mặt tiền độc lập hướng ra
              đường nội khu, sổ hồng riêng từng lô.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Tại Mega City 2, nhà phố liên kế được chia làm 3 loại chính theo vị trí và
              quy mô: <strong>TH</strong> (nhà vườn liên kế nội khu),{" "}
              <strong>T</strong> (nhà phố liên kế mặt đường trục chính) và{" "}
              <strong>V</strong> (biệt thự song lập cao cấp). Tổng số{" "}
              <strong>3.160 sản phẩm</strong> theo quy hoạch, trong đó{" "}
              <strong>2.421 lô</strong> được chấp thuận phân lô bán nền theo{" "}
              <Link href="/mega-city-2/phap-ly" className="text-primary-600 hover:underline font-semibold">
                QĐ 1772/QĐ-UBND ngày 30/5/2025
              </Link>.
            </p>

            {/* 4 highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                  <div className="text-2xl mb-2">{h.icon}</div>
                  <h3 className="font-bold text-slate-800 text-xs mb-1">{h.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Ảnh thực tế */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[IMG_REAL["3"], IMG_REAL["5"], IMG_REAL["7"],
                IMG_REAL["1"], IMG_AMENITIES["1"], IMG_REAL["9"]].map((src, i) => (
                <div key={i} className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Nhà phố liên kế Mega City 2 Nhơn Trạch ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                    loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3 loại sản phẩm ── */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-8">
              So sánh 3 loại nhà phố liên kế Mega City 2
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {productRows.map((p) => (
                <div key={p.code} className={`rounded-2xl border p-6 ${p.color}`}>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className={`text-3xl font-black ${p.textColor}`}>{p.code}</span>
                    <span className="text-sm font-semibold text-slate-700">{p.name}</span>
                  </div>
                  <div className="space-y-2 text-xs mb-4">
                    {[
                      ["Số lượng (QH)", p.count],
                      ["Diện tích", p.area],
                      ["Mặt tiền", p.front],
                      ["Mặt đường", p.road],
                      ["Giá tham khảo", p.price],
                      ["Phù hợp", p.best],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-2">
                        <span className="text-slate-500">{k}</span>
                        <strong className="text-slate-800 text-right">{v}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400">
              * Giá tham khảo từ nguồn thị trường 05/2026. Liên hệ{" "}
              <a href="tel:0937587438" className="text-primary-600 font-semibold hover:underline">
                0937.587.438
              </a>{" "}
              để nhận báo giá cập nhật.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Câu hỏi thường gặp về nhà phố liên kế Mega City 2
            </h2>
            <div className="space-y-3">
              {faqSchema.mainEntity.map((faq, i) => (
                <details key={i}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary-200 transition-colors">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer px-5 py-4 font-semibold text-slate-800 text-sm list-none group-open:text-primary-700 select-none">
                    <span className="leading-snug">{faq.name}</span>
                    <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-primary-600 transition-transform group-open:rotate-180 text-xs">▼</span>
                  </summary>
                  <div className="px-5 pb-5 border-t border-slate-100 pt-3">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <PageCTA
          title="Tư vấn chọn loại nhà phố liên kế phù hợp"
          subtitle="Liên hệ để nhận tư vấn về loại sản phẩm, block và giá phù hợp với ngân sách của bạn."
        />

        <RelatedContent
          items={[
            { href: "/mega-city-2/mat-bang", title: "Mặt bằng & Bản đồ phân lô", description: "Xem bản đồ phân lô tổng thể và bản vẽ mẫu nhà PH-B5.", tag: "Mặt bằng" },
            { href: "/mega-city-2/bang-gia", title: "Bảng giá cập nhật 2026", description: "Giá chuyển nhượng TH, T, V theo từng block và vị trí.", tag: "Bảng giá" },
            { href: "/mega-city-2/phap-ly", title: "Pháp lý – QĐ 1772", description: "2.421 lô được chấp thuận phân lô bán nền.", tag: "Pháp lý" },
            { href: "/mega-city-2/tien-ich", title: "Tiện ích nội khu", description: "Công viên, trường học, thương mại tại Mega City 2.", tag: "Tiện ích" },
            { href: "/mega-city-2/vi-tri", title: "Vị trí & Kết nối vùng", description: "Cách TP.HCM 30–35 km, gần sân bay Long Thành.", tag: "Vị trí" },
            { href: "/mega-city-2/faq", title: "FAQ – Câu hỏi thường gặp", description: "Giải đáp pháp lý, giá, tiến độ và thủ tục.", tag: "FAQ" },
          ]}
        />
      </div>

      <Footer />
    </>
  );
}
