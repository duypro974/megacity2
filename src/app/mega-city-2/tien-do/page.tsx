import type { Metadata } from "next";
import type React from "react";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import { IMG_REAL } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Tiến Độ Mega City 2 Nhơn Trạch – QĐ 2979 Giao Đất 09/2026 & Hạ Tầng ~95%",
  description:
    "Tiến độ Mega City 2 Nhơn Trạch: UBND TP Đồng Nai ban hành QĐ 2979/QĐ-UBND ngày 24/9/2026 giao đất chính thức cho CĐT Phú Hội. Hạ tầng ~95%, đường nội khu, điện nước hoàn thiện. Hình ảnh thực tế.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/mega-city-2/tien-do" },
  openGraph: {
    title: "Tiến Độ Mega City 2 Nhơn Trạch – QĐ 2979 Giao Đất 09/2026 & Hạ Tầng ~95%",
    description:
      "QĐ 2979/QĐ-UBND ngày 24/9/2026: UBND TP Đồng Nai giao đất chính thức cho CĐT Phú Hội tiếp tục dự án Mega City 2. Hạ tầng ~95%, hình ảnh thực tế.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: IMG_REAL["1"], width: 1280, height: 720, alt: "Tiến độ hạ tầng Mega City 2" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiến Độ Mega City 2 Nhơn Trạch – QĐ 2979 Giao Đất 09/2026 & Hạ Tầng ~95%",
    description: "QĐ 2979 ngày 24/9/2026 giao đất chính thức CĐT Phú Hội. Hạ tầng Mega City 2 đạt ~95%. Hình ảnh thực tế.",
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
  headline: "Tiến độ Mega City 2 Nhơn Trạch – QĐ 2979 giao đất 24/9/2026 & hạ tầng ~95%",
  description:
    "Cập nhật tiến độ pháp lý và hạ tầng dự án Mega City 2: UBND TP Đồng Nai ban hành QĐ 2979/QĐ-UBND ngày 24/9/2026 giao đất chính thức cho Công ty TNHH Khu đô thị Phú Hội. Hạ tầng đường, điện, nước, công viên đạt ~95%.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-08-01",
  dateModified: "2026-09-24",
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

const breadcrumbMc2TienDo = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://kimoanhdongnai.com.vn" },
    { "@type": "ListItem", position: 2, name: "Mega City 2", item: "https://kimoanhdongnai.com.vn/mega-city-2" },
    { "@type": "ListItem", position: 3, name: "Tiến độ xây dựng", item: "https://kimoanhdongnai.com.vn/mega-city-2/tien-do" },
  ],
};

export default function TienDoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbMc2TienDo) }}
      />
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

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 lg:pb-0 min-h-screen">
        <SubPageHeader
          tag="Tiến độ"
          title="Tiến độ hạ tầng Mega City 2"
          subtitle="Cập nhật tiến độ thi công hạ tầng khu dân cư Mega City 2 tại xã Nhơn Trạch, tỉnh Đồng Nai."
          breadcrumbs={[
            { label: "Mega City 2", href: "/mega-city-2" },
            { label: "Tiến độ" },
          ]}
          updatedAt="09/2026 (QĐ 2979/QĐ-UBND ngày 24/09/2026)"
        />

        {/* Disclaimer nổi bật */}
        <section className="py-8 bg-amber-50 border-b border-amber-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-start gap-3 anim-left">
              <span className="text-2xl flex-shrink-0">⚠️</span>
              <div>
                <p className="font-bold text-amber-800 text-sm mb-1">Lưu ý về số liệu tiến độ</p>
                <p className="text-xs text-amber-700 leading-relaxed">
                  Số liệu tiến độ (~95%) dựa trên thông tin được công bố gần nhất vào tháng 06/2025.
                  Ngày 24/09/2026, UBND TP Đồng Nai ban hành{" "}
                  <span className="font-semibold">QĐ 2979/QĐ-UBND</span> giao đất chính thức cho Công ty TNHH Khu đô thị Phú Hội,
                  đây là mốc pháp lý quan trọng xác nhận chủ đầu tư được tiếp tục triển khai dự án.
                  Tình trạng thực tế từng lô, từng block có thể khác nhau.
                  Khách hàng nên tham quan thực tế và xác nhận với chuyên viên trước khi ra quyết định giao dịch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Banner QĐ 2979 mới nhất ── */}
        <section className="py-10 bg-primary-600">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-white/20 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full">
                    Cập nhật mới nhất
                  </span>
                  <span className="text-white/60 text-xs">24/09/2026</span>
                </div>
                <h3 className="text-white font-bold text-lg md:text-xl leading-snug mb-2">
                  QĐ 2979/QĐ-UBND – UBND TP Đồng Nai giao đất chính thức cho Công ty TNHH Khu đô thị Phú Hội
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Quyết định số 2979 ngày 24/9/2026 xác nhận chủ đầu tư được giao <strong className="text-white">321.248 m²</strong> đất hạ tầng kỹ thuật và chấp thuận cơ cấu sử dụng <strong className="text-white">~839.256 m²</strong> toàn dự án, bao gồm đất ở, đất thương mại và đất hạ tầng — đây là bước pháp lý xác nhận dự án tiếp tục triển khai theo đúng quy hoạch.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/2979.QĐ-UBND.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold text-sm px-5 py-3 rounded-xl hover:bg-primary-50 transition-colors shadow"
                >
                  <span>📄</span> Xem văn bản gốc
                </a>
              </div>
            </div>

            {/* 3 thống kê nhanh */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { label: "Đất ở được giao", value: "449.695 m²", sub: "Đến 30/6/2059" },
                { label: "Đất thương mại / giáo dục", value: "69.562 m²", sub: "Nhà nước cho thuê" },
                { label: "Đất hạ tầng kỹ thuật", value: "320.221 m²", sub: "Giao không thu tiền SDĐ" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-2xl px-4 py-3 text-center">
                  <p className="text-white font-black text-lg md:text-xl tabular-nums">{s.value}</p>
                  <p className="text-white/70 text-[11px] font-semibold mt-0.5">{s.label}</p>
                  <p className="text-white/50 text-[10px] mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Progress bars */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-2 anim-up">
              Tiến độ theo hạng mục hạ tầng
            </h2>
            <p className="text-sm text-slate-500 mb-8 anim-up anim-delay-100">
              Theo thông tin công bố tháng 06/2025. Cập nhật pháp lý lần cuối: 09/2026 (QĐ 2979/QĐ-UBND).
            </p>
            <div className="space-y-6 max-w-2xl">
              {progressItems.map((item, i) => (
                <div key={item.label} className="anim-bar-wrap" style={{ transitionDelay: `${i * 80}ms` }}>
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
                      className={`h-full rounded-full anim-bar-inner ${item.pct === 100 ? "bg-emerald-500" : "bg-primary-500"}`}
                      style={{ "--target-w": `${item.pct}%` } as React.CSSProperties}
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
            <h2 className="text-xl font-bold text-slate-800 mb-2 anim-up">
              Hình ảnh thực tế tại dự án
            </h2>
            <p className="text-xs text-slate-400 mb-6 anim-up anim-delay-100">
              Hình ảnh ghi nhận thực tế tại khu dân cư Mega City 2 Nhơn Trạch.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 anim-stagger">
              {realImages.map((img) => (
                <div key={img.key}
                  className="relative overflow-hidden rounded-xl bg-slate-100 h-40 group anim-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={IMG_REAL[img.key]}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-3 italic anim-up">
              * Hình ảnh thực tế ghi nhận tại dự án, không phải phối cảnh.
            </p>
          </div>
        </section>

        {/* Timeline xây dựng */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-800 mb-2 anim-up">
              Timeline pháp lý & hạ tầng quan trọng
            </h2>
            <p className="text-sm text-slate-500 mb-6 anim-up anim-delay-100">
              Cập nhật lần cuối: 09/2026
            </p>
            <div className="space-y-4 max-w-2xl">
              {[
                {
                  year: "2018",
                  event: "Kim Oanh Group bắt đầu đầu tư dự án Mega City 2",
                  done: true,
                  highlight: false,
                  new: false,
                },
                {
                  year: "2022–2024",
                  event: "Xây dựng hạ tầng nội khu: đường, điện, nước, cây xanh",
                  done: true,
                  highlight: false,
                  new: false,
                },
                {
                  year: "30/05/2025",
                  event: "UBND tỉnh Đồng Nai ban hành QĐ 1772/QĐ-UBND chấp thuận 2.421 lô phân lô bán nền",
                  done: true,
                  highlight: false,
                  new: false,
                },
                {
                  year: "06/2025",
                  event: "Hạ tầng đạt ~95% theo thông tin công bố",
                  done: true,
                  highlight: false,
                  new: false,
                },
                {
                  year: "24/09/2026",
                  event: "UBND TP Đồng Nai ban hành QĐ 2979/QĐ-UBND: giao đất chính thức 321.248 m² hạ tầng kỹ thuật và chấp thuận toàn bộ cơ cấu sử dụng đất ~839.256 m² cho Công ty TNHH Khu đô thị Phú Hội",
                  done: true,
                  highlight: true,
                  new: true,
                },
                {
                  year: "31/12/2029",
                  event: "Hạn cuối hoàn thành xây dựng nhà ở (theo QĐ 1772/QĐ-UBND)",
                  done: false,
                  highlight: false,
                  new: false,
                },
              ].map((item, i, arr) => (
                <div key={i} className="flex items-start gap-4 anim-left" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold
                      ${item.highlight
                        ? "bg-primary-600 shadow-lg shadow-primary-300 anim-timeline-dot"
                        : item.done ? "bg-emerald-500" : "bg-slate-300"}`}>
                      {item.done ? "✓" : "○"}
                    </div>
                    {i < arr.length - 1 && <div className="w-px h-8 bg-slate-200 mt-1 anim-timeline-line" />}
                  </div>
                  <div className={`flex-1 rounded-2xl border p-4 -mt-1 anim-card
                    ${item.highlight
                      ? "bg-primary-50 border-primary-200"
                      : "bg-white border-slate-200"}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <p className={`text-[11px] font-bold uppercase tracking-wider
                        ${item.highlight ? "text-primary-600" : "text-slate-400"}`}>
                        {item.year}
                      </p>
                      {item.new && (
                        <span className="inline-block bg-red-500 text-white text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full leading-none">
                          MỚI
                        </span>
                      )}
                    </div>
                    <p className={`text-sm font-semibold leading-relaxed
                      ${item.highlight ? "text-primary-800" : item.done ? "text-slate-700" : "text-slate-400"}`}>
                      {item.event}
                    </p>
                    {item.highlight && (
                      <div className="mt-3 space-y-1.5 border-t border-primary-200 pt-3">
                        <p className="text-xs text-primary-700 font-semibold">Chi tiết QĐ 2979/QĐ-UBND:</p>
                        <ul className="space-y-1 text-xs text-primary-700">
                          <li>• Giao 449.694,8 m² đất ở (thời hạn đến 30/6/2059): nhà liên kế phố, liên kế vườn, biệt thự song lập và nhà ở xã hội</li>
                          <li>• Cho thuê 69.561,5 m² đất thương mại dịch vụ và giáo dục</li>
                          <li>• Giao 320.220,7 m² đất hạ tầng kỹ thuật (giao thông, cây xanh, trạm y tế, TTSHCĐ)</li>
                          <li>• Ký bởi: KT. Chủ tịch – Phó Chủ tịch Nguyễn Tuấn Anh</li>
                        </ul>
                        <a
                          href="/2979.QĐ-UBND.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-primary-600 hover:text-primary-700 underline underline-offset-2"
                        >
                          📄 Xem văn bản QĐ 2979/QĐ-UBND
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 pb-8">
          <p className="text-sm text-slate-600">
            Xem thêm:{" "}
            <a href="/tin-tuc/tien-do-mega-city-2" className="text-primary-600 font-semibold hover:underline">
              Cập nhật tiến độ Mega City 2 mới nhất
            </a>{" "}
            — hình ảnh thực tế và đánh giá hạ tầng tại dự án.
          </p>
        </div>

        <PageCTA
          title="Kiểm tra tiến độ thực tế tại Mega City 2"
          subtitle="Đặt lịch tham quan để tự mình xem xét tiến độ hạ tầng và hiện trạng các lô đang quan tâm."
        />

        <RelatedContent
          items={[
            {
              href: "/tin-tuc/tien-do-mega-city-2",
              title: "Cập nhật tiến độ Mega City 2 tháng 9/2026",
              description: "Nhật ký tiến độ thực địa: hình ảnh đường nội khu, điện nước và nhà xây sẵn — cập nhật hàng tháng.",
              tag: "Cập nhật",
            },
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
              href: "/mega-city-2/faq",
              title: "FAQ",
              description: "Giải đáp câu hỏi về tiến độ và pháp lý.",
              tag: "FAQ",
            },
          ]}
        />
      </div>

      <CorpFooter />
    </>
  );
}
