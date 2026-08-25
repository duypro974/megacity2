"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";

// ─────────────────────────────────────────────────────────────
// Cloudinary CDN helpers
// ─────────────────────────────────────────────────────────────
const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good";
const img = (path: string, w = 1280) => `${CDN},w_${w},c_limit/${path}`;

const NEWS30 = {
  "1": img("megacity2/news30/1"),
  "2": img("megacity2/news30/2"),
  "3": img("megacity2/news30/3"),
  "4": img("megacity2/news30/4"),
};

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/chi-phi-xay-nha-mega-city-2`;
const PUBLISHED     = "25/08/2026";
const PUBLISHED_ISO = "2026-08-25";

// ─────────────────────────────────────────────────────────────
// JSON-LD Schemas
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Chi Phí Xây Nhà Thực Tế Tại Mega City 2 Nhơn Trạch 2026",
  description:
    "Cập nhật chi phí xây nhà phố thực tế tại Mega City 2 Nhơn Trạch 2026: đơn giá xây thô 3,5–3,9 triệu/m², trọn gói 5–8,5 triệu/m² theo diện tích 100–150m², chi phí phát sinh, thời gian thi công và so sánh với mua nhà xây sẵn.",
  image: [NEWS30["1"], NEWS30["2"], NEWS30["3"], NEWS30["4"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO,
  dateModified: PUBLISHED_ISO,
  url: PAGE_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords:
    "chi phí xây nhà Mega City 2, giá xây thô nhà phố Nhơn Trạch, xây nhà hoàn thiện Mega City 2, so sánh xây nhà vs mua nhà xây sẵn, chi phí xây nhà Nhơn Trạch 2026",
  about: {
    "@type": "Place",
    name: "Mega City 2, Nhơn Trạch, Đồng Nai",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nhơn Trạch",
      addressRegion: "Đồng Nai",
      addressCountry: "VN",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Chi phí xây nhà 100 m² tại Mega City 2 khoảng bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Với nền 100 m² xây 1 trệt 1–2 lầu (sàn ~220 m²): xây thô khoảng 770–860 triệu đồng, gói phổ thông–trung cấp khoảng 1,1–1,45 tỷ đồng, gói cao cấp khoảng 1,5–1,9 tỷ đồng. Chưa gồm nội thất, thiết kế, giấy phép.",
      },
    },
    {
      "@type": "Question",
      name: "Xây thô hay trọn gói tốt hơn khi xây nhà tại Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tùy vào kinh nghiệm và thời gian quản lý. Xây thô rồi tự hoàn thiện thường tiết kiệm 15–25% nhưng cần theo dõi sát. Gói trọn gói tiện lợi hơn nhưng chi phí cao hơn. Cần yêu cầu báo giá chi tiết từ nhà thầu sau khảo sát thực địa.",
      },
    },
    {
      "@type": "Question",
      name: "Thời gian xây xong nhà để ở tại Mega City 2 là bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Phần thô mất khoảng 3–5 tháng, hoàn thiện 2–4 tháng. Tổng thời gian chìa khóa trao tay thường từ 6–10 tháng tùy quy mô, thời tiết và tiến độ nhà thầu.",
      },
    },
    {
      "@type": "Question",
      name: "Có nên xây nhà mới hay mua nhà xây sẵn tại Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nếu đã có đất và ngân sách 1,5–2,2 tỷ, xây mới thường tối ưu về chi phí và chủ động thiết kế. Nếu cần ở ngay hoặc không muốn quản lý thi công, mua nhà xây sẵn (3,2–4 tỷ/căn) tiện lợi hơn.",
      },
    },
    {
      "@type": "Question",
      name: "Chi phí phát sinh khi xây nhà tại Mega City 2 gồm những khoản nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cần dự trù thêm 10–20%: gia cố móng (50–150 triệu nếu địa chất yếu), điện nước, chống thấm bổ sung, giấy phép xây dựng, thiết kế kiến trúc, nội thất cơ bản (150–400 triệu tùy mức) và chi phí giám sát, phát sinh do thay đổi thiết kế.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Chi phí xây nhà Mega City 2 2026", item: PAGE_URL },
  ],
};

// ─────────────────────────────────────────────────────────────
// Lightbox images
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: NEWS30["1"],
    alt: "Bảng chi phí xây nhà phần thô và trọn gói tại Mega City 2 Nhơn Trạch 2026 theo diện tích 100-150m2",
    caption: "Bảng so sánh chi phí xây thô và trọn gói trên nền đất Mega City 2",
  },
  {
    src: NEWS30["2"],
    alt: "Thi công xây phần thô nhà phố tại khu đô thị Mega City 2 Nhơn Trạch Đồng Nai",
    caption: "Công nhân thi công phần thô nhà phố tại dự án Mega City 2",
  },
  {
    src: NEWS30["3"],
    alt: "Nhà phố xây sẵn và nhà tự xây tại dự án Mega City 2 Nhơn Trạch so sánh chi phí 2026",
    caption: "Nhà phố hoàn thiện tại Mega City 2 — so sánh với nhà tự xây",
  },
  {
    src: NEWS30["4"],
    alt: "Mặt bằng nền đất 100m2 150m2 phổ biến tại Mega City 2 để tính chi phí xây nhà",
    caption: "Mặt bằng nền đất 100–150 m² điển hình trong dự án Mega City 2",
  },
];

// ─────────────────────────────────────────────────────────────
// Reusable sub-components
// ─────────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-primary-400 scroll-mt-24"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-8">{children}</h3>
  );
}

function BulletList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="space-y-2.5 pl-0 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-700 text-[16px] leading-relaxed">
          <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0 mt-[9px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoBox({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warn";
}) {
  const styles =
    type === "warn"
      ? "bg-amber-50 border-amber-200 text-amber-800"
      : "bg-primary-50 border-primary-200 text-primary-800";
  return (
    <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${styles}`}>
      {children}
    </div>
  );
}

function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200
                 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl
                 hover:bg-primary-100 transition-all"
    >
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Price table data
// ─────────────────────────────────────────────────────────────
const donGiaRows = [
  ["Xây phần thô", "3.500.000 – 3.900.000", "Thép Việt Nhật, xi măng Hà Tiên/Holcim, gạch Tuynel"],
  ["Gói tiết kiệm / phổ thông", "5.000.000 – 6.000.000", "Vật tư tầm trung"],
  ["Gói trung cấp", "5.500.000 – 6.500.000", "Cân bằng chất lượng – giá"],
  ["Gói chìa khóa trao tay cao cấp", "6.800.000 – 8.500.000", "Vật tư cao cấp, thiết kế hiện đại"],
];

const chiPhiPhatSinhRows = [
  "Gia cố móng (nếu địa chất yếu): 50–150 triệu đồng",
  "Hệ thống điện nước, chống thấm bổ sung",
  "Giấy phép xây dựng, thiết kế kiến trúc + kết cấu",
  "Vận chuyển vật tư (đường nội khu thuận lợi, chi phí thấp hơn hẻm sâu)",
  "Nội thất cơ bản (tủ bếp, thiết bị vệ sinh, cửa): 150–400 triệu tùy mức",
  "Chi phí giám sát, bảo hiểm, phát sinh do thay đổi thiết kế",
];

const luuYRows = [
  "Kiểm tra quy hoạch 1/500, chỉ giới xây dựng, mật độ xây dựng của lô đất",
  "Yêu cầu nhà thầu khảo sát địa chất thực tế",
  "Ký hợp đồng rõ ràng về vật tư, tiến độ, bảo hành (kết cấu thường 5–10 năm)",
  "Dự phòng 10–15% ngân sách cho phát sinh",
  "Liên hệ tư vấn pháp lý và hiện trạng nền đất trước khi quyết định",
];

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function ChiPhiXayNhaMegaCity2Page() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {LightboxPortal}

      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero header ── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav
              aria-label="breadcrumb"
              className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5"
            >
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">Chi phí xây nhà Mega City 2 2026</span>
            </nav>

            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Tin dự án
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">
                {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 10 phút đọc</span>
            </div>

            {/* H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Chi Phí Xây Nhà Thực Tế Tại Mega City 2 Nhơn Trạch 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Tổng hợp đơn giá xây dựng nhà phố cập nhật 2026 từ các nhà thầu tại Đồng Nai
              và Nhơn Trạch — ước tính chi phí nền 100–150 m², chi phí phát sinh, thời gian
              thi công và so sánh với nhà xây sẵn tại Mega City 2.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh bảng chi phí xây nhà Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={NEWS30["1"]}
                alt="Bảng chi phí xây nhà phần thô và trọn gói tại Mega City 2 Nhơn Trạch 2026 theo diện tích 100-150m2"
                className="w-full h-auto block"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg
                    className="w-5 h-5 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Bảng so sánh chi phí xây thô và trọn gói trên nền đất Mega City 2
            </p>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Article ── */}
            <article className="flex-1 min-w-0 prose-none">

              {/* TOC */}
              <nav
                aria-label="Mục lục bài viết"
                className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12"
              >
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">
                  Nội dung bài viết
                </p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#don-gia",       "1. Đơn giá xây dựng nhà phố tại Đồng Nai – Nhơn Trạch 2026"],
                    ["#uoc-tinh",      "2. Ước tính chi phí cho nền 100 m² và 150 m²"],
                    ["#phat-sinh",     "3. Chi phí phát sinh thường gặp"],
                    ["#thoi-gian",     "4. Thời gian xây dựng thực tế"],
                    ["#so-sanh",       "5. So sánh xây nhà mới vs mua nhà xây sẵn"],
                    ["#luu-y",         "6. Lưu ý quan trọng trước khi xây"],
                    ["#faq",           "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-primary-600 transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Nhiều khách hàng sở hữu nền đất tại Mega City 2 (quy mô ~84 ha, xã Phú Hội,
                Nhơn Trạch) quan tâm đến chi phí xây nhà thực tế để ở hoặc đầu tư. Bài viết
                tổng hợp đơn giá xây dựng nhà phố cập nhật năm 2026 từ các nhà thầu tại Đồng
                Nai và Nhơn Trạch, áp dụng cho diện tích đất phổ biến 100–150 m².
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý quan trọng:</strong> Đơn giá mang tính tham khảo. Chi phí thực tế
                phụ thuộc vào thiết kế, vật tư, địa chất, nhà thầu và thời điểm thi công. Luôn
                yêu cầu báo giá chi tiết sau khi khảo sát thực địa.
              </InfoBox>

              {/* Section 1 — Đơn giá */}
              <section className="mb-12">
                <SectionHeading id="don-gia">
                  Đơn giá xây dựng nhà phố tại Đồng Nai – Nhơn Trạch 2026
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo báo giá của nhiều đơn vị xây dựng uy tín tại Đồng Nai và Nhơn Trạch
                    (cập nhật 2026), đơn giá được phân theo gói như sau:
                  </p>

                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-600 text-white">
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                            Hạng mục
                          </th>
                          <th className="text-right px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                            Đơn giá (VNĐ/m² sàn)
                          </th>
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide hidden md:table-cell">
                            Ghi chú
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {donGiaRows.map(([hang_muc, don_gia, ghi_chu], i) => (
                          <tr
                            key={hang_muc}
                            className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                          >
                            <td className="px-5 py-3.5 font-semibold text-slate-700">
                              {hang_muc}
                            </td>
                            <td className="px-5 py-3.5 text-primary-700 font-black text-right tabular-nums">
                              {don_gia}
                            </td>
                            <td className="px-5 py-3.5 text-slate-500 text-xs hidden md:table-cell">
                              {ghi_chu}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100">
                      <p className="text-[11px] text-slate-400">
                        * Nguồn tham khảo: Báo giá nhà thầu Đồng Nai &amp; Nhơn Trạch 2026
                        (An Thịnh, ST Decor và các đơn vị khác). Giá chưa gồm VAT và có thể
                        thay đổi theo thời điểm.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 — Ước tính chi phí */}
              <section className="mb-12">
                <SectionHeading id="uoc-tinh">
                  Ước tính chi phí cho nền 100 m² và 150 m²
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Diện tích sàn xây dựng thường lớn hơn diện tích đất do xây nhiều tầng.
                    Ví dụ tham khảo phổ biến:
                  </p>
                  <BulletList
                    items={[
                      "Nền 100 m² → diện tích sàn khoảng 200–250 m² (1 trệt 1–2 lầu)",
                      "Nền 150 m² → diện tích sàn khoảng 280–350 m²",
                    ]}
                  />

                  <H3>Nền 100 m² (sàn ~220 m²)</H3>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-800 text-white">
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                            Gói xây dựng
                          </th>
                          <th className="text-right px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                            Chi phí ước tính
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Xây thô", "770 – 860 triệu đồng"],
                          ["Trọn gói phổ thông – trung cấp", "1,1 – 1,45 tỷ đồng"],
                          ["Trọn gói cao cấp", "1,5 – 1,9 tỷ đồng"],
                        ].map(([goi, chi_phi], i) => (
                          <tr
                            key={goi}
                            className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                          >
                            <td className="px-5 py-3.5 font-semibold text-slate-700">{goi}</td>
                            <td className="px-5 py-3.5 text-primary-700 font-black text-right tabular-nums">
                              {chi_phi}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <H3>Nền 150 m² (sàn ~300 m²)</H3>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-800 text-white">
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                            Gói xây dựng
                          </th>
                          <th className="text-right px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                            Chi phí ước tính
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Xây thô", "1,05 – 1,17 tỷ đồng"],
                          ["Trọn gói phổ thông – trung cấp", "1,5 – 1,95 tỷ đồng"],
                          ["Trọn gói cao cấp", "2,0 – 2,55 tỷ đồng"],
                        ].map(([goi, chi_phi], i) => (
                          <tr
                            key={goi}
                            className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                          >
                            <td className="px-5 py-3.5 font-semibold text-slate-700">{goi}</td>
                            <td className="px-5 py-3.5 text-primary-700 font-black text-right tabular-nums">
                              {chi_phi}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <InfoBox type="info">
                    Các con số trên chưa gồm nội thất cao cấp, thiết kế, giấy phép và chi phí
                    phát sinh. Cần cộng thêm 10–20% dự phòng vào tổng ngân sách.
                  </InfoBox>
                </div>
              </section>

              {/* Image 2 */}
              <ArticleFigure
                src={NEWS30["2"]}
                alt="Thi công xây phần thô nhà phố tại khu đô thị Mega City 2 Nhơn Trạch Đồng Nai"
                caption="Công nhân thi công phần thô nhà phố tại dự án Mega City 2"
                images={images}
                index={1}
                onOpen={openLightbox}
              />

              {/* Section 3 — Chi phí phát sinh */}
              <section className="mb-12">
                <SectionHeading id="phat-sinh">Chi phí phát sinh thường gặp</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ngoài đơn giá m², cần dự trù thêm <strong>10–20%</strong> ngân sách cho
                    các khoản phát sinh sau:
                  </p>
                  <BulletList items={chiPhiPhatSinhRows} />

                  <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                    <p className="font-bold text-amber-800 mb-1">Lưu ý về địa chất tại Nhơn Trạch</p>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      Một số khu vực tại Nhơn Trạch có nền đất yếu, đòi hỏi gia cố móng cọc
                      bổ sung. Chi phí có thể dao động từ 50–150 triệu tùy quy mô và phương án
                      kỹ thuật. Yêu cầu nhà thầu khảo sát địa chất thực tế trước khi lập dự toán.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 — Thời gian xây dựng */}
              <section className="mb-12">
                <SectionHeading id="thoi-gian">Thời gian xây dựng thực tế</SectionHeading>
                <div className="pt-5 space-y-5">
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-600 text-white">
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                            Giai đoạn
                          </th>
                          <th className="text-center px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                            Thời gian
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Thi công phần thô", "3 – 5 tháng"],
                          ["Hoàn thiện nội ngoại thất", "2 – 4 tháng"],
                          ["Tổng chìa khóa trao tay", "6 – 10 tháng"],
                        ].map(([giai_doan, thoi_gian], i) => (
                          <tr
                            key={giai_doan}
                            className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                          >
                            <td className="px-5 py-3.5 font-semibold text-slate-700">
                              {giai_doan}
                            </td>
                            <td className="px-5 py-3.5 text-center font-bold text-primary-700 tabular-nums">
                              {thoi_gian}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tại Mega City 2, hạ tầng nội khu đã hoàn thiện phần lớn (đường nhựa, điện,
                    nước) nên việc vận chuyển vật liệu và thi công thuận lợi hơn so với khu vực
                    chưa có hạ tầng, giúp rút ngắn tiến độ và giảm chi phí phát sinh.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/tien-do-mega-city-2">
                      Xem tiến độ Mega City 2 mới nhất →
                    </LinkBtn>
                    <LinkBtn href="/mega-city-2">
                      Tổng quan dự án Mega City 2 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* Image 3 */}
              <ArticleFigure
                src={NEWS30["3"]}
                alt="Nhà phố xây sẵn và nhà tự xây tại dự án Mega City 2 Nhơn Trạch so sánh chi phí 2026"
                caption="Nhà phố hoàn thiện tại Mega City 2 — so sánh với nhà tự xây"
                images={images}
                index={2}
                onOpen={openLightbox}
              />

              {/* Section 5 — So sánh */}
              <section className="mb-12">
                <SectionHeading id="so-sanh">
                  So sánh xây nhà mới vs mua nhà xây sẵn tại Mega City 2
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo thông tin thị trường 2025–2026, nhà phố xây sẵn tại Mega City 2 được
                    rao bán khoảng{" "}
                    <strong className="text-primary-700">3,2 – 4 tỷ đồng/căn</strong> (tùy vị
                    trí, diện tích, mức hoàn thiện).
                  </p>

                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-800 text-white">
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide w-40">
                            Tiêu chí
                          </th>
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                            Xây nhà mới
                          </th>
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                            Mua nhà xây sẵn
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          [
                            "Chi phí",
                            "Thấp hơn nếu chọn gói trung cấp (đã có đất)",
                            "3,2 – 4 tỷ/căn (gồm đất + nhà)",
                          ],
                          [
                            "Thời gian",
                            "6 – 10 tháng thi công",
                            "Có thể ở ngay",
                          ],
                          [
                            "Thiết kế",
                            "Chủ động theo nhu cầu",
                            "Theo mẫu có sẵn",
                          ],
                          [
                            "Kiểm soát chất lượng",
                            "Tự giám sát vật tư, kỹ thuật",
                            "Phụ thuộc chủ đầu tư",
                          ],
                          [
                            "Phù hợp",
                            "Người có thời gian, muốn tối ưu chi phí",
                            "Người cần ở ngay, không muốn quản lý thi công",
                          ],
                        ].map(([tieu_chi, xay_moi, xay_san], i) => (
                          <tr
                            key={tieu_chi}
                            className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                          >
                            <td className="px-5 py-3.5 font-semibold text-slate-700">
                              {tieu_chi}
                            </td>
                            <td className="px-5 py-3.5 text-slate-600">{xay_moi}</td>
                            <td className="px-5 py-3.5 text-slate-600">{xay_san}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <InfoBox type="info">
                    <strong>Khuyến nghị:</strong> Nếu ngân sách khoảng 1,5–2,2 tỷ (đã có đất)
                    và có thời gian theo dõi công trình, xây mới thường tối ưu hơn về chi phí.
                    Nếu cần ở ngay hoặc không muốn quản lý thi công, mua nhà xây sẵn tiện
                    lợi hơn.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/mega-city-2-co-phu-hop-de-o">
                      Mega City 2 có phù hợp để ở không? →
                    </LinkBtn>
                    <LinkBtn href="/tin-tuc/bang-gia-mega-city-2-moi-nhat">
                      Bảng giá Mega City 2 mới nhất →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* Image 4 */}
              <ArticleFigure
                src={NEWS30["4"]}
                alt="Mặt bằng nền đất 100m2 150m2 phổ biến tại Mega City 2 để tính chi phí xây nhà"
                caption="Mặt bằng nền đất 100–150 m² điển hình trong dự án Mega City 2"
                images={images}
                index={3}
                onOpen={openLightbox}
              />

              {/* Section 6 — Lưu ý */}
              <section className="mb-12">
                <SectionHeading id="luu-y">Lưu ý quan trọng trước khi xây</SectionHeading>
                <div className="pt-5 space-y-5">
                  <BulletList items={luuYRows} />
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/phap-ly-mega-city-2">
                      Pháp lý Mega City 2 →
                    </LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat">
                      Quy hoạch Nhơn Trạch mới nhất →
                    </LinkBtn>
                    <LinkBtn href="/tin-tuc/cach-kiem-tra-phap-ly-dat-nen-nhon-trach">
                      Cách kiểm tra pháp lý đất nền →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-slate-900 px-7 py-6">
                    <h2 className="text-white font-black text-xl tracking-tight">
                      Câu hỏi thường gặp
                    </h2>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      {
                        q: "Chi phí xây nhà 100 m² tại Mega City 2 khoảng bao nhiêu?",
                        a: "Với sàn ~220 m²: xây thô khoảng 770–860 triệu đồng, gói phổ thông–trung cấp khoảng 1,1–1,45 tỷ đồng, gói cao cấp khoảng 1,5–1,9 tỷ đồng. Chưa gồm nội thất, thiết kế và giấy phép.",
                      },
                      {
                        q: "Xây thô hay trọn gói tốt hơn?",
                        a: "Tùy kinh nghiệm quản lý. Xây thô rồi tự hoàn thiện tiết kiệm 15–25% nhưng cần theo dõi sát. Gói trọn gói tiện lợi hơn nhưng chi phí cao hơn. Nhiều gia chủ chọn thô + tự hoàn thiện để tiết kiệm tối đa.",
                      },
                      {
                        q: "Thời gian xây xong để ở là bao lâu?",
                        a: "Thường 6–10 tháng: phần thô 3–5 tháng, hoàn thiện 2–4 tháng. Tại Mega City 2 có hạ tầng nội khu sẵn có nên thi công thuận lợi hơn.",
                      },
                      {
                        q: "Có nên xây nhà mới hay mua nhà xây sẵn tại Mega City 2?",
                        a: "Nếu đã có đất và ngân sách 1,5–2,2 tỷ, xây mới thường tối ưu về chi phí. Nếu cần ở ngay, mua nhà xây sẵn (3,2–4 tỷ/căn) tiện lợi hơn.",
                      },
                      {
                        q: "Chi phí phát sinh khi xây nhà tại Mega City 2 gồm những gì?",
                        a: "Cần dự trù thêm 10–20%: gia cố móng (50–150 triệu nếu địa chất yếu), điện nước, giấy phép, thiết kế kiến trúc, nội thất cơ bản (150–400 triệu) và chi phí giám sát, phát sinh thiết kế.",
                      },
                    ].map(({ q, a }) => (
                      <div
                        key={q}
                        className="px-7 py-6 hover:bg-slate-50 transition-colors"
                      >
                        <p className="font-bold text-slate-800 text-base mb-2">{q}</p>
                        <p className="text-slate-500 text-[15px] leading-relaxed">{a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-8 text-white text-center">
                <p className="font-black text-xl mb-2">
                  Bạn đang sở hữu nền đất tại Mega City 2?
                </p>
                <p className="text-primary-100 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
                  Liên hệ để được hỗ trợ thông tin dự án, kết nối nhà thầu uy tín tại Nhơn
                  Trạch và nhận tư vấn miễn phí về chi phí xây dựng thực tế.
                </p>
                <a
                  href="tel:0937587438"
                  className="inline-flex items-center gap-2 bg-white text-primary-700 font-black
                             px-8 py-3.5 rounded-xl hover:bg-primary-50 transition-all shadow-lg"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Hotline / Zalo: 0937.587.438
                </a>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28 space-y-6">

                {/* Quick contact */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-black text-slate-900 mb-1">Tư vấn chi phí xây nhà</p>
                  <p className="text-slate-500 text-xs mb-4 leading-relaxed">
                    Kết nối nhà thầu uy tín tại Nhơn Trạch và nhận báo giá miễn phí.
                  </p>
                  <a
                    href="tel:0937587438"
                    className="flex items-center justify-center gap-2 w-full bg-primary-600
                               text-white font-bold py-3 rounded-xl hover:bg-primary-700 transition-all text-sm"
                  >
                    Gọi 0937.587.438
                  </a>
                  <a
                    href="https://zalo.me/0937587438"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full mt-2 bg-slate-100
                               text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-200 transition-all text-sm"
                  >
                    Nhắn Zalo
                  </a>
                </div>

                {/* Related articles */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-black text-slate-900 mb-4 text-sm uppercase tracking-wide">
                    Bài viết liên quan
                  </p>
                  <ul className="space-y-3">
                    {[
                      { href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",    label: "Bảng giá Mega City 2 mới nhất 2026" },
                      { href: "/tin-tuc/tien-do-mega-city-2",              label: "Tiến độ Mega City 2 tháng 8/2026" },
                      { href: "/tin-tuc/mega-city-2-co-phu-hop-de-o",      label: "Mega City 2 có phù hợp để ở không?" },
                      { href: "/tin-tuc/phap-ly-mega-city-2",              label: "Pháp lý Mega City 2" },
                      { href: "/tin-tuc/gia-dat-nhon-trach-2026",          label: "Giá đất Nhơn Trạch 2026" },
                    ].map(({ href, label }) => (
                      <li key={href}>
                        <a
                          href={href}
                          className="text-sm text-primary-700 hover:text-primary-900 font-medium
                                     hover:underline transition-colors leading-snug block"
                        >
                          {label} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </div>

      <RelatedContent
        items={[
          {
            href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",
            title: "Bảng giá Mega City 2 Nhơn Trạch mới nhất 2026",
            description: "Tham khảo mức giá từng loại sản phẩm, các yếu tố ảnh hưởng và lưu ý trước khi đầu tư.",
            tag: "Bảng giá",
          },
          {
            href: "/tin-tuc/tien-do-mega-city-2",
            title: "Tiến độ Mega City 2 tháng 8/2026",
            description: "Cập nhật hình ảnh thi công thực tế: đường nội khu, hạ tầng kỹ thuật và khu nhà xây sẵn.",
            tag: "Tiến độ",
          },
          {
            href: "/tin-tuc/mega-city-2-co-phu-hop-de-o",
            title: "Mega City 2 có phù hợp để ở không?",
            description: "Phân tích vị trí, hạ tầng, tiện ích và những yếu tố cần cân nhắc trước khi an cư.",
            tag: "Tin dự án",
          },
          {
            href: "/tin-tuc/phap-ly-mega-city-2",
            title: "Pháp lý Mega City 2 có gì?",
            description: "Cập nhật quy hoạch, quyết định 1772/QĐ-UBND và hồ sơ pháp lý dự án mới nhất 2026.",
            tag: "Pháp lý",
          },
          {
            href: "/tin-tuc/gia-dat-nhon-trach-2026",
            title: "Giá đất Nhơn Trạch 2026",
            description: "Cập nhật bảng giá đất nhà nước, giá thực tế thị trường và các khu vực tiềm năng.",
            tag: "Thị trường",
          },
          {
            href: "/mega-city-2",
            title: "Tổng quan dự án Mega City 2",
            description: "Tất cả thông tin về vị trí, mặt bằng, tiện ích, pháp lý và bảng giá dự án Mega City 2.",
            tag: "Dự án",
          },
        ]}
      />
      <CorpFooter />
    </>
  );
}
