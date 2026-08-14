import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import Link from "next/link";
import { IMG_REGIONAL, IMG_PLANE } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Quy Hoạch Nhơn Trạch 2026 – Tác Động Đến Mega City 2 & BĐS",
  description:
    "Quy hoạch đô thị Nhơn Trạch 2026: sân bay Long Thành, cầu Nhơn Trạch, đường 25C và khu đô thị vệ tinh. Phân tích tác động đến giá đất và bất động sản Mega City 2.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/quy-hoach-nhan-trach" },
  openGraph: {
    title: "Quy Hoạch Nhơn Trạch 2026 – Tác Động BĐS Mega City 2",
    description:
      "Phân tích quy hoạch Nhơn Trạch: sân bay Long Thành, cầu Nhơn Trạch, đường 25C. Ảnh hưởng đến giá đất và tiềm năng Mega City 2.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [
      { url: IMG_REGIONAL["1"], width: 1280, height: 720, alt: "Quy hoạch Nhơn Trạch và liên kết vùng" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quy Hoạch Nhơn Trạch 2026 – Sân Bay Long Thành & Cầu Nhơn Trạch",
    description: "Phân tích quy hoạch và tác động hạ tầng đến bất động sản Nhơn Trạch, Đồng Nai.",
    images: [IMG_REGIONAL["1"]],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Quy hoạch Nhơn Trạch 2026 – Tác động đến bất động sản Mega City 2",
  description:
    "Phân tích quy hoạch phát triển đô thị Nhơn Trạch: các dự án hạ tầng lớn và tác động đến thị trường bất động sản khu vực, đặc biệt là Mega City 2.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-08-13",
  dateModified: "2026-08-13",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/quy-hoach-nhan-trach",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Nhơn Trạch được quy hoạch như thế nào theo định hướng tỉnh Đồng Nai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhơn Trạch được định hướng phát triển thành đô thị vệ tinh của TP.HCM trong quy hoạch tỉnh Đồng Nai, tập trung vào công nghiệp, dịch vụ và nhà ở cho người lao động. Khu vực được đầu tư hạ tầng giao thông đồng bộ với sân bay Long Thành, cầu Nhơn Trạch và đường 25C.",
      },
    },
    {
      "@type": "Question",
      name: "Sân bay Long Thành ảnh hưởng thế nào đến giá đất Nhơn Trạch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sân bay quốc tế Long Thành cách Nhơn Trạch khoảng 15–20 km. Kinh nghiệm từ các sân bay quốc tế lớn cho thấy bất động sản trong bán kính 20–30 km thường tăng giá khi sân bay đi vào hoạt động, do nhu cầu nhà ở từ chuyên gia, phi hành đoàn và nhân viên hàng không. Tuy nhiên, đây là yếu tố dài hạn và không phải cam kết về tăng giá.",
      },
    },
    {
      "@type": "Question",
      name: "Cầu Nhơn Trạch bắc qua đâu và ảnh hưởng gì đến Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cầu Nhơn Trạch bắc qua sông Đồng Nai, nối huyện Nhơn Trạch với TP.HCM (khu vực Quận 2 – Thủ Đức). Khi hoàn thành, thời gian di chuyển từ Mega City 2 đến trung tâm TP.HCM rút ngắn còn khoảng 20–25 phút, tăng đáng kể tiện ích di chuyển và giá trị bất động sản khu vực.",
      },
    },
    {
      "@type": "Question",
      name: "Khu công nghiệp Nhơn Trạch có bao nhiêu khu và ảnh hưởng gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhơn Trạch có 6 khu công nghiệp lớn (KCN Nhơn Trạch 1–6) trong bán kính 5–10 km, thu hút hàng chục nghìn công nhân, kỹ sư và chuyên gia. Đây tạo nhu cầu nhà ở ổn định và bền vững cho khu vực, hỗ trợ thanh khoản thị trường bất động sản Nhơn Trạch.",
      },
    },
    {
      "@type": "Question",
      name: "Đường 25C có vai trò gì trong quy hoạch Nhơn Trạch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đường 25C là trục giao thông huyết mạch kết nối Nhơn Trạch với TP.HCM và Long Thành. Mega City 2 có vị trí mặt tiền đường 25C, tạo lợi thế tiếp cận trực tiếp. Tuyến đường này nằm trong quy hoạch nâng cấp và mở rộng theo định hướng phát triển đô thị khu vực.",
      },
    },
  ],
};

const infraProjects = [
  {
    icon: "✈️",
    title: "Sân bay quốc tế Long Thành",
    status: "Đang xây dựng giai đoạn 1",
    distance: "~18 km",
    impact: "Tạo nhu cầu nhà ở cho chuyên gia hàng không, thúc đẩy dịch vụ và logistic khu vực",
    highlight: true,
  },
  {
    icon: "🌉",
    title: "Cầu Nhơn Trạch",
    status: "Trong quy hoạch & triển khai",
    distance: "Kết nối sang Q2 TP.HCM",
    impact: "Rút ngắn thời gian di chuyển xuống 20–25 phút, tăng mạnh giá trị BĐS khu vực",
    highlight: true,
  },
  {
    icon: "🛣️",
    title: "Đường 25C – trục kết nối",
    status: "Đã hoàn thiện & vận hành",
    distance: "Mặt tiền Mega City 2",
    impact: "Kết nối trực tiếp TP.HCM – Nhơn Trạch – Long Thành, giảm thời gian di chuyển",
    highlight: false,
  },
  {
    icon: "🚗",
    title: "Cao tốc Bến Lức – Long Thành",
    status: "Đang hoàn thiện",
    distance: "Kết nối vùng kinh tế trọng điểm",
    impact: "Hành trình đến các tỉnh lân cận rút ngắn đáng kể, mở rộng thị trường lao động",
    highlight: false,
  },
  {
    icon: "🚢",
    title: "Phà Cát Lái",
    status: "Đang vận hành",
    distance: "~15 km",
    impact: "Kết nối nhanh Nhơn Trạch – Quận 2 TP.HCM khoảng 25–35 phút, phương án hiện tại phổ biến",
    highlight: false,
  },
  {
    icon: "🏭",
    title: "6 KCN Nhơn Trạch 1–6",
    status: "Đang vận hành",
    distance: "5–10 km",
    impact: "Tạo nhu cầu nhà ở bền vững từ hàng chục nghìn công nhân và kỹ sư",
    highlight: false,
  },
];

export default function QuyHoachNhonTrachPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="Quy hoạch"
          title="Quy hoạch Nhơn Trạch & Tác động đến Mega City 2"
          subtitle="Phân tích các dự án hạ tầng lớn tại Nhơn Trạch và tác động đến tiềm năng bất động sản khu vực – cập nhật 2026."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "Quy hoạch Nhơn Trạch" },
          ]}
          updatedAt="08/2026"
        />

        {/* Disclaimer */}
        <section className="py-6 bg-amber-50 border-b border-amber-200">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs text-amber-700 leading-relaxed">
              <strong>Lưu ý:</strong> Thông tin quy hoạch tổng hợp từ nguồn công khai và
              mang tính tham khảo. Tiến độ các dự án hạ tầng phụ thuộc vào quyết định của
              cơ quan có thẩm quyền và có thể thay đổi. Không phải cam kết về tăng giá
              bất động sản.
            </p>
          </div>
        </section>

        {/* ── Tổng quan quy hoạch ── */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Nhơn Trạch trong quy hoạch phát triển Đồng Nai
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Huyện Nhơn Trạch (tỉnh Đồng Nai) được định hướng trở thành{" "}
              <strong>đô thị vệ tinh</strong> của TP.HCM theo quy hoạch tỉnh Đồng Nai
              đến năm 2030, tầm nhìn 2050. Khu vực nằm trong tam giác phát triển{" "}
              <strong>TP.HCM – Long Thành – Nhơn Trạch</strong>, được đầu tư hạ tầng
              giao thông đồng bộ từ nhiều nguồn vốn.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Các dự án hạ tầng trọng điểm đang triển khai — sân bay Long Thành, cầu
              Nhơn Trạch, cao tốc Bến Lức – Long Thành — tạo động lực phát triển đáng
              kể cho thị trường bất động sản khu vực, trong đó có dự án{" "}
              <Link href="/mega-city-2" className="text-primary-600 hover:underline font-semibold">
                Mega City 2
              </Link>{" "}
              tại xã Nhơn Trạch.
            </p>

            {/* Hình ảnh liên kết vùng */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[IMG_REGIONAL["1"], IMG_REGIONAL["2"], IMG_PLANE["1"], IMG_PLANE["2"]].map((src, i) => (
                <div key={i} className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Quy hoạch hạ tầng Nhơn Trạch ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                    loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6 dự án hạ tầng ── */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
              6 dự án hạ tầng ảnh hưởng đến bất động sản Nhơn Trạch
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Mỗi dự án đều tác động trực tiếp hoặc gián tiếp đến giá trị và thanh khoản
              bất động sản khu vực Nhơn Trạch.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {infraProjects.map((p) => (
                <div key={p.title}
                  className={`rounded-2xl border p-5 ${p.highlight
                    ? "bg-primary-50 border-primary-200"
                    : "bg-white border-slate-200"}`}>
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className={`font-bold text-sm mb-1 ${p.highlight ? "text-primary-800" : "text-slate-800"}`}>
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    <span className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded-full text-slate-500">{p.status}</span>
                    <span className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded-full text-slate-500">{p.distance}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Câu hỏi thường gặp về quy hoạch Nhơn Trạch
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
          title="Tìm hiểu cơ hội đầu tư tại Mega City 2 Nhơn Trạch"
          subtitle="Liên hệ để được tư vấn về tiềm năng vị trí và lựa chọn sản phẩm phù hợp."
        />

        <RelatedContent
          items={[
            { href: "/mega-city-2/vi-tri", title: "Vị trí & Liên kết vùng", description: "Phân tích chi tiết vị trí Mega City 2 và kết nối giao thông.", tag: "Vị trí" },
            { href: "/mega-city-2", title: "Tổng quan Mega City 2", description: "Thông tin đầy đủ về dự án Mega City 2 Nhơn Trạch.", tag: "Tổng quan" },
            { href: "/mega-city-2/phap-ly", title: "Pháp lý – QĐ 1772", description: "Tình trạng pháp lý và điều kiện giao dịch.", tag: "Pháp lý" },
            { href: "/mega-city-2/bang-gia", title: "Bảng giá 2026", description: "Giá chuyển nhượng tham khảo cập nhật.", tag: "Bảng giá" },
            { href: "/mega-city-2/san-bay-long-thanh", title: "Sân bay Long Thành & Mega City 2", description: "Phân tích tác động sân bay đến BĐS Nhơn Trạch.", tag: "Sân bay" },
            { href: "/mega-city-2/faq", title: "FAQ – Câu hỏi thường gặp", description: "Giải đáp đầy đủ về dự án Mega City 2.", tag: "FAQ" },
          ]}
        />
      </div>

      <Footer />
    </>
  );
}
