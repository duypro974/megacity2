import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import Link from "next/link";
import { IMG_PLANE, IMG_REGIONAL } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Sân Bay Long Thành & Mega City 2 Nhơn Trạch – Khoảng Cách & Tác Động",
  description:
    "Sân bay Long Thành cách Mega City 2 Nhơn Trạch khoảng 15–20 km. Phân tích tác động sân bay quốc tế Long Thành đến giá đất và bất động sản Nhơn Trạch 2026.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/san-bay-long-thanh" },
  openGraph: {
    title: "Sân Bay Long Thành & Mega City 2 – Khoảng Cách & Tác Động BĐS",
    description: "Sân bay Long Thành cách Mega City 2 ~18 km. Phân tích tác động đến giá đất Nhơn Trạch.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: IMG_PLANE["1"], width: 1280, height: 720, alt: "Sân bay Long Thành gần Mega City 2" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sân Bay Long Thành Cách Mega City 2 Bao Xa?",
    description: "Khoảng cách và tác động của sân bay quốc tế Long Thành đến bất động sản Nhơn Trạch.",
    images: [IMG_PLANE["1"]],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sân bay quốc tế Long Thành và tác động đến bất động sản Mega City 2 Nhơn Trạch",
  description: "Phân tích khoảng cách từ sân bay Long Thành đến Mega City 2 và tác động đến thị trường bất động sản Nhơn Trạch.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-08-13",
  dateModified: "2026-08-13",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/san-bay-long-thanh",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Sân bay Long Thành cách Mega City 2 bao nhiêu km?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sân bay quốc tế Long Thành cách dự án Mega City 2 Nhơn Trạch khoảng 15–20 km theo đường hiện hữu, di chuyển khoảng 20–25 phút. Đây là một trong những sân bay quốc tế lớn nhất Đông Nam Á đang trong giai đoạn xây dựng giai đoạn 1.",
      },
    },
    {
      "@type": "Question",
      name: "Sân bay Long Thành bao giờ hoàn thành và đưa vào khai thác?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sân bay quốc tế Long Thành đang được xây dựng giai đoạn 1 với công suất 25 triệu hành khách/năm. Tiến độ phụ thuộc vào quyết định của Chính phủ và Ban quản lý dự án. Thông tin chính thức cập nhật từ Tổng công ty Cảng hàng không Việt Nam (ACV).",
      },
    },
    {
      "@type": "Question",
      name: "Sân bay Long Thành có làm tăng giá đất Nhơn Trạch không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sân bay quốc tế thường tác động tích cực đến giá bất động sản trong bán kính 20–30 km do nhu cầu nhà ở từ phi hành đoàn, nhân viên hàng không và chuyên gia. Tuy nhiên, tác động phụ thuộc vào nhiều yếu tố và không phải cam kết tăng giá. Nhà đầu tư cần đánh giá toàn diện trước khi quyết định.",
      },
    },
    {
      "@type": "Question",
      name: "Từ sân bay Long Thành đến Mega City 2 đi bằng đường nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Từ sân bay Long Thành đến Mega City 2 Nhơn Trạch di chuyển theo đường 25C hoặc các tuyến nội địa khu vực Long Thành – Nhơn Trạch, khoảng 15–20 km và 20–25 phút. Khi cao tốc Bến Lức – Long Thành và các tuyến kết nối hoàn thiện, hành trình sẽ thuận tiện hơn.",
      },
    },
  ],
};

const airportFacts = [
  { label: "Khoảng cách đến Mega City 2", val: "~15–20 km" },
  { label: "Thời gian di chuyển", val: "20–25 phút" },
  { label: "Công suất giai đoạn 1", val: "25 triệu HK/năm" },
  { label: "Vị trí", val: "Huyện Long Thành, Đồng Nai" },
];

export default function SanBayLongThanhPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />
      <ContactSidebar />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="Sân bay Long Thành"
          title="Sân bay Long Thành & Mega City 2 Nhơn Trạch"
          subtitle="Phân tích khoảng cách, kết nối và tác động của sân bay quốc tế Long Thành đến bất động sản khu vực Nhơn Trạch."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "Sân bay Long Thành" },
          ]}
          updatedAt="08/2026"
        />

        {/* Disclaimer */}
        <section className="py-6 bg-amber-50 border-b border-amber-200">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs text-amber-700 leading-relaxed">
              <strong>Lưu ý:</strong> Thông tin về tiến độ sân bay Long Thành tổng hợp từ
              nguồn công khai. Tiến độ thực tế phụ thuộc quyết định cơ quan có thẩm quyền.
              Phân tích tác động BĐS mang tính tham khảo, không phải cam kết tăng giá.
            </p>
          </div>
        </section>

        {/* ── Tổng quan ── */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Sân bay Long Thành – Dự án hạ tầng hàng không trọng điểm quốc gia
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Sân bay quốc tế Long Thành là dự án hạ tầng hàng không lớn nhất Việt Nam,
              tọa lạc tại huyện Long Thành, tỉnh Đồng Nai. Giai đoạn 1 có công suất{" "}
              <strong>25 triệu hành khách/năm</strong>, dự kiến trở thành cửa ngõ hàng
              không quốc tế chiến lược cho toàn vùng kinh tế trọng điểm phía Nam.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Với vị trí chỉ cách{" "}
              <Link href="/mega-city-2" className="text-primary-600 hover:underline font-semibold">
                Mega City 2 Nhơn Trạch
              </Link>{" "}
              khoảng <strong>15–20 km</strong>, sân bay Long Thành được xem là một trong
              những yếu tố hạ tầng dài hạn quan trọng của khu vực, tạo nhu cầu nhà ở
              từ lực lượng lao động hàng không, chuyên gia và dịch vụ liên quan.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {airportFacts.map((f) => (
                <div key={f.label} className="rounded-2xl bg-primary-50 border border-primary-100 p-4 text-center">
                  <p className="text-lg font-black text-primary-700">{f.val}</p>
                  <p className="text-[11px] text-slate-500 mt-1">{f.label}</p>
                </div>
              ))}
            </div>

            {/* Ảnh sân bay */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[IMG_PLANE["1"], IMG_PLANE["2"], IMG_PLANE["3"], IMG_PLANE["4"]].map((src, i) => (
                <div key={i} className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Sân bay quốc tế Long Thành gần Mega City 2 Nhơn Trạch ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                    loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tác động BĐS ── */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Tác động của sân bay Long Thành đến BĐS Nhơn Trạch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {[
                {
                  icon: "👥",
                  title: "Nhu cầu nhà ở từ nhân lực hàng không",
                  desc: "Sân bay quy mô lớn thu hút hàng nghìn lao động trực tiếp — phi hành đoàn, nhân viên kỹ thuật, kiểm soát không lưu — và hàng chục nghìn lao động gián tiếp trong dịch vụ logistics, khách sạn, thương mại. Đây tạo nhu cầu nhà ở bền vững cho khu vực Nhơn Trạch.",
                },
                {
                  icon: "🏢",
                  title: "Phát triển dịch vụ thương mại",
                  desc: "Khu vực lân cận sân bay thường phát triển mạnh về dịch vụ: khách sạn, trung tâm thương mại, logistic, văn phòng. Nhà phố liên kế T mặt đường tại Mega City 2 có tiềm năng thương mại khi khu vực phát triển.",
                },
                {
                  icon: "🔗",
                  title: "Cải thiện kết nối vùng",
                  desc: "Sân bay Long Thành kích hoạt đầu tư hạ tầng giao thông vùng: đường kết nối, cao tốc, cầu vượt. Khu vực Nhơn Trạch hưởng lợi trực tiếp từ các tuyến đường kết nối sân bay được xây mới hoặc nâng cấp.",
                },
                {
                  icon: "📈",
                  title: "Tâm lý thị trường dài hạn",
                  desc: "Sự hiện diện của dự án sân bay lớn thường tạo kỳ vọng tích cực trong tâm lý nhà đầu tư BĐS khu vực. Tuy nhiên, tác động thực tế phụ thuộc tiến độ triển khai và cần đánh giá thận trọng.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white border border-slate-200 p-5">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-slate-800 text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Ảnh liên kết vùng */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[IMG_REGIONAL["1"], IMG_REGIONAL["2"], IMG_REGIONAL["3"], IMG_REGIONAL["4"]].map((src, i) => (
                <div key={i} className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Hạ tầng giao thông kết nối sân bay Long Thành và Nhơn Trạch ${i + 1}`}
                    className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Câu hỏi thường gặp về sân bay Long Thành & Mega City 2
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
          title="Tìm hiểu cơ hội đầu tư gần sân bay Long Thành"
          subtitle="Liên hệ để được tư vấn về các lô đất và sản phẩm phù hợp tại Mega City 2 Nhơn Trạch."
        />

        <RelatedContent
          items={[
            { href: "/mega-city-2/vi-tri", title: "Vị trí & Liên kết vùng", description: "Phân tích chi tiết vị trí Mega City 2 và các trục giao thông kết nối.", tag: "Vị trí" },
            { href: "/mega-city-2/quy-hoach-nhan-trach", title: "Quy hoạch Nhơn Trạch", description: "Các dự án hạ tầng lớn và tác động đến BĐS khu vực.", tag: "Quy hoạch" },
            { href: "/mega-city-2", title: "Tổng quan Mega City 2", description: "Thông tin đầy đủ về dự án Mega City 2 Nhơn Trạch.", tag: "Tổng quan" },
            { href: "/mega-city-2/bang-gia", title: "Bảng giá 2026", description: "Giá chuyển nhượng tham khảo đất nền Mega City 2.", tag: "Bảng giá" },
            { href: "/mega-city-2/phap-ly", title: "Pháp lý – QĐ 1772", description: "Tình trạng pháp lý và điều kiện giao dịch.", tag: "Pháp lý" },
            { href: "/mega-city-2/faq", title: "FAQ – Câu hỏi thường gặp", description: "Giải đáp về pháp lý, giá, tiến độ Mega City 2.", tag: "FAQ" },
          ]}
        />
      </div>

      <Footer />
    </>
  );
}
