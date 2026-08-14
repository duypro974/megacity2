import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import { IMG_REAL } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Tiến Độ Mega City 2 Nhơn Trạch – Cập Nhật Hạ Tầng 2025–2026",
  description:
    "Tiến độ thi công hạ tầng Mega City 2 Nhơn Trạch: đường nội khu, điện nước, công viên đạt ~95% theo cập nhật 06/2025. Hình ảnh thực tế và timeline xây dựng.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/tien-do" },
  openGraph: {
    title: "Tiến Độ Mega City 2 – Hạ Tầng ~95% (06/2025)",
    description:
      "Cập nhật tiến độ hạ tầng Mega City 2: đường, điện, nước, công viên đạt ~95%. Hình ảnh thực tế.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: IMG_REAL["1"], width: 1280, height: 720, alt: "Tiến độ hạ tầng Mega City 2" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiến Độ Mega City 2 – Hạ Tầng ~95%",
    description: "Cập nhật tiến độ hạ tầng và hình ảnh thực tế dự án Mega City 2 Nhơn Trạch.",
    images: [IMG_REAL["1"]],
  },
};

const faqProgressSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Tiến độ hạ tầng Mega City 2 hiện nay đạt bao nhiêu phần trăm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo thông tin công bố tháng 06/2025, tiến độ hạ tầng Mega City 2 đạt khoảng 95%, bao gồm đường nội khu, điện, nước và công viên trung tâm. Tình trạng thực tế từng lô có thể khác nhau – nên tham quan thực tế trước khi giao dịch.",
      },
    },
    {
      "@type": "Question",
      name: "Đường nội khu Mega City 2 rộng bao nhiêu mét?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đường nội khu Mega City 2 có lộ giới từ 13 m đến 32 m tùy trục đường. Các trục chính có chiều rộng 24–32 m, đường nội bộ khu TH rộng 13–15 m, đều đã trải nhựa hoàn thiện.",
      },
    },
    {
      "@type": "Question",
      name: "Khi nào có thể xây nhà tại Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sau khi hoàn tất thủ tục chuyển nhượng và được cấp Giấy phép xây dựng, chủ sở hữu có thể tiến hành xây dựng. Với lô có điều kiện theo QĐ 1772/QĐ-UBND, cần hoàn thành xây dựng trước 31/12/2029.",
      },
    },
    {
      "@type": "Question",
      name: "Có thể tham quan thực tế hạ tầng Mega City 2 không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Liên hệ 0937.587.438 để đặt lịch tham quan thực tế. Chuyên viên sẽ đưa quý khách tham quan trực tiếp đường nội khu, công viên và các lô đang quan tâm tại dự án.",
      },
    },
  ],
};

const imageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Hình ảnh thực tế tiến độ hạ tầng Mega City 2 Nhơn Trạch",
  description: "Bộ ảnh thực tế ghi nhận tiến độ thi công hạ tầng khu dân cư Mega City 2 năm 2024–2025.",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/tien-do",
  about: {
    "@type": "RealEstateListing",
    name: "Mega City 2 Nhơn Trạch",
    url: "https://kimoanhdongnai.com.vn/mega-city-2",
  },
};

const progressSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tiến độ thi công hạ tầng Mega City 2 Nhơn Trạch (cập nhật 2025–2026)",
  description:
    "Thông tin cập nhật về tiến độ hoàn thiện hạ tầng dự án Mega City 2: đường nội khu, hệ thống điện, nước, công viên và cây xanh.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-08-01",
  dateModified: "2026-08-09",
  url: "https://kimoanhdongnai.com.vn/mega-city-2/tien-do",
};

const progressItems = [
  { label: "Đường nội khu",        pct: 100, note: "Đường nhựa 13–32 m theo quy hoạch" },
  { label: "Điện – Nước",          pct: 100, note: "Điện âm, nước thủy cục hoàn thiện" },
  { label: "Công viên trung tâm",  pct: 100, note: "Không gian xanh trung tâm đã hoàn thiện" },
  { label: "Cây xanh & Tiểu cảnh", pct: 95,  note: "Đang hoàn thiện một số khu vực" },
  { label: "Viễn thông",           pct: 95,  note: "Hạ tầng cáp ngầm, internet" },
  { label: "Tổng tiến độ",         pct: 95,  note: "Theo thông tin công bố 06/2025" },
];

const realImages = [
  { key: "1",  alt: "Đường nội khu Mega City 2 Nhơn Trạch nhìn từ trên cao" },
  { key: "2",  alt: "Hình ảnh thực tế đường nội khu rộng rãi Mega City 2" },
  { key: "3",  alt: "Hình ảnh nhà phố liên kế đã hoàn thiện tại Mega City 2" },
  { key: "4",  alt: "Cảnh quan cây xanh nội khu dự án Mega City 2 Nhơn Trạch" },
  { key: "5",  alt: "Nhà phố góc view đẹp tại Mega City 2" },
  { key: "6",  alt: "Đường trục chính nội khu Mega City 2 đã trải nhựa" },
  { key: "7",  alt: "Nhà phố mặt tiền đường lớn Mega City 2" },
  { key: "8",  alt: "Khu công viên trung tâm Mega City 2 Nhơn Trạch" },
];

export default function TienDoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(progressSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqProgressSchema) }}
      />

      <Header />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="Tiến độ"
          title="Tiến độ hạ tầng Mega City 2"
          subtitle="Cập nhật tiến độ thi công hạ tầng khu dân cư Mega City 2 tại xã Nhơn Trạch, tỉnh Đồng Nai."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "Tiến độ" },
          ]}
          updatedAt="06/2025 (cập nhật gần nhất)"
        />

        {/* Disclaimer nổi bật */}
        <section className="py-8 bg-amber-50 border-b border-amber-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">⚠️</span>
              <div>
                <p className="font-bold text-amber-800 text-sm mb-1">Lưu ý về số liệu tiến độ</p>
                <p className="text-xs text-amber-700 leading-relaxed">
                  Số liệu tiến độ (~95%) dựa trên thông tin được công bố gần nhất vào tháng 06/2025.
                  Tình trạng thực tế từng lô, từng block có thể khác nhau. Khách hàng nên tham quan
                  thực tế và xác nhận với chuyên viên trước khi ra quyết định giao dịch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Progress bars */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              Tiến độ theo hạng mục hạ tầng
            </h2>
            <p className="text-sm text-slate-500 mb-8">
              Theo thông tin công bố tháng 06/2025. Cập nhật lần cuối: 08/2026.
            </p>
            <div className="space-y-6 max-w-2xl">
              {progressItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-baseline justify-between mb-1.5">
                    <div>
                      <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                      {item.note && (
                        <span className="text-xs text-slate-400 ml-2">({item.note})</span>
                      )}
                    </div>
                    <span className={`text-sm font-black tabular-nums
                      ${item.pct === 100 ? "text-emerald-600" : "text-primary-600"}`}>
                      {item.pct}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.pct === 100 ? "bg-emerald-500" : "bg-primary-500"}`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hình ảnh thực tế */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              Hình ảnh thực tế tại dự án
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Hình ảnh ghi nhận thực tế tại khu dân cư Mega City 2 Nhơn Trạch.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {realImages.map((img) => (
                <div key={img.key}
                  className="relative overflow-hidden rounded-xl bg-slate-100 h-40 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={IMG_REAL[img.key]}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-3 italic">
              * Hình ảnh thực tế ghi nhận tại dự án, không phải phối cảnh.
            </p>
          </div>
        </section>

        {/* Timeline xây dựng */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Timeline pháp lý & hạ tầng quan trọng
            </h2>
            <div className="space-y-4 max-w-2xl">
              {[
                { year: "2018", event: "Kim Oanh Group bắt đầu đầu tư dự án Mega City 2", done: true },
                { year: "2022–2024", event: "Xây dựng hạ tầng nội khu: đường, điện, nước, cây xanh", done: true },
                { year: "30/05/2025", event: "UBND tỉnh Đồng Nai ban hành QĐ 1772/QĐ-UBND chấp thuận 2.421 lô phân lô bán nền", done: true, highlight: true },
                { year: "06/2025", event: "Hạ tầng đạt ~95% theo thông tin công bố", done: true },
                { year: "31/12/2029", event: "Hạn cuối hoàn thành xây dựng nhà ở (theo QĐ 1772)", done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold
                      ${item.highlight
                        ? "bg-primary-600 shadow-lg shadow-primary-300"
                        : item.done ? "bg-emerald-500" : "bg-slate-300"}`}>
                      {item.done ? "✓" : "○"}
                    </div>
                    {i < 4 && <div className="w-px h-8 bg-slate-200 mt-1" />}
                  </div>
                  <div className={`flex-1 rounded-2xl border p-4 -mt-1
                    ${item.highlight
                      ? "bg-primary-50 border-primary-200"
                      : "bg-white border-slate-200"}`}>
                    <p className={`text-[11px] font-bold uppercase tracking-wider mb-1
                      ${item.highlight ? "text-primary-600" : "text-slate-400"}`}>
                      {item.year}
                    </p>
                    <p className={`text-sm font-semibold
                      ${item.highlight ? "text-primary-800" : item.done ? "text-slate-700" : "text-slate-400"}`}>
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCTA
          title="Kiểm tra tiến độ thực tế tại Mega City 2"
          subtitle="Đặt lịch tham quan để tự mình xem xét tiến độ hạ tầng và hiện trạng các lô đang quan tâm."
        />

        <RelatedContent
          items={[
            {
              href: "/mega-city-2",
              title: "Tổng quan Mega City 2",
              description: "Thông tin tổng hợp về dự án.",
              tag: "Tổng quan",
            },
            {
              href: "/mega-city-2/hinh-anh",
              title: "Hình ảnh thực tế",
              description: "Thêm hình ảnh ghi nhận tại dự án.",
              tag: "Hình ảnh",
            },
            {
              href: "/mega-city-2/phap-ly",
              title: "Pháp lý dự án",
              description: "QĐ 1772 và điều kiện giao dịch.",
              tag: "Pháp lý",
            },
            {
              href: "/mega-city-2/bang-gia",
              title: "Bảng giá",
              description: "Giá chuyển nhượng tham khảo.",
              tag: "Bảng giá",
            },
            {
              href: "/mega-city-2/mat-bang",
              title: "Mặt bằng & Sản phẩm",
              description: "Bản đồ phân lô và loại hình sản phẩm.",
              tag: "Mặt bằng",
            },
            {
              href: "/mega-city-2/faq",
              title: "FAQ",
              description: "Giải đáp câu hỏi về tiến độ và pháp lý.",
              tag: "FAQ",
            },
          ]}
        />
      </div>

      <Footer />
    </>
  );
}
