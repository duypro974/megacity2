"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_LEGAL_2979, IMG_LEGAL } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/quyet-dinh-2979-giao-dat-mega-city-2`;
const PUBLISHED     = "24/09/2026";
const PUBLISHED_ISO = "2026-09-24";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type":    "NewsArticle",
  headline:   "QĐ 2979/QĐ-UBND: UBND TP Đồng Nai chính thức giao đất cho CĐT Mega City 2",
  description:
    "UBND TP Đồng Nai ban hành Quyết định 2979/QĐ-UBND ngày 24/9/2026 giao đất chính thức cho Công ty TNHH Khu đô thị Phú Hội tiếp tục triển khai dự án Mega City 2 Nhơn Trạch. Giao 321.248 m² hạ tầng kỹ thuật, chấp thuận ~839.256 m² toàn dự án.",
  image: [IMG_LEGAL_2979["1"], IMG_LEGAL_2979["2"], IMG_LEGAL_2979["3"], IMG_LEGAL_2979["4"]],
  author:    { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url:  BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished:    PUBLISHED_ISO,
  dateModified:     PUBLISHED_ISO,
  url:              PAGE_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "QĐ 2979 Mega City 2, quyết định 2979 UBND Đồng Nai, giao đất Mega City 2, pháp lý Mega City 2 2026, Phú Hội khu đô thị",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "QĐ 2979/QĐ-UBND có nội dung gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quyết định 2979/QĐ-UBND do UBND TP Đồng Nai ban hành ngày 24/9/2026 giao đất chính thức cho Công ty TNHH Khu đô thị Phú Hội để tiếp tục triển khai dự án Mega City 2 tại phường Nhơn Trạch. Cụ thể: giao 321.248 m² đất hạ tầng kỹ thuật không thu tiền sử dụng đất, và chấp thuận toàn bộ cơ cấu sử dụng ~839.256 m² gồm đất ở (449.695 m², thời hạn đến 30/6/2059), đất thương mại–giáo dục (69.562 m²) và đất hạ tầng kỹ thuật (320.221 m²).",
      },
    },
    {
      "@type": "Question",
      name: "QĐ 2979 khác gì so với QĐ 1772/QĐ-UBND trước đó?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QĐ 1772/QĐ-UBND (30/5/2025) chấp thuận 2.421 lô được phân lô bán nền — tức là quyết định cho phép chuyển nhượng từng nền đất cho cá nhân. QĐ 2979/QĐ-UBND (24/9/2026) là quyết định giao đất chính thức toàn dự án cho chủ đầu tư — xác nhận pháp lý đất tổng thể, bổ sung và củng cố thêm cho QĐ 1772.",
      },
    },
    {
      "@type": "Question",
      name: "QĐ 2979 ảnh hưởng thế nào đến người đang mua hoặc đang quan tâm Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đây là tín hiệu rất tích cực: chủ đầu tư đã được nhà nước giao đất chính thức toàn bộ dự án, đảm bảo pháp lý tiếp tục triển khai. Với người đang quan tâm, đây là mốc xác nhận dự án không bị vướng pháp lý tổng thể, là thời điểm tốt để tìm hiểu và giao dịch.",
      },
    },
    {
      "@type": "Question",
      name: "Thời hạn sử dụng đất tại Mega City 2 theo QĐ 2979 là bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo QĐ 2979/QĐ-UBND, đất ở tại Mega City 2 được giao với thời hạn đến ngày 30/6/2059, tức khoảng 33 năm tính từ thời điểm ban hành. Đất thương mại–dịch vụ và giáo dục được nhà nước cho thuê theo quy định.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức",   item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "QĐ 2979 giao đất Mega City 2", item: PAGE_URL },
  ],
};

// ─── Lightbox images ───────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src:     IMG_LEGAL_2979["1"],
    alt:     "Quyết định 2979/QĐ-UBND trang 1 – Tiêu đề và căn cứ pháp lý",
    caption: "QĐ 2979/QĐ-UBND trang 1: Tiêu đề, số quyết định và căn cứ pháp lý ban hành.",
  },
  {
    src:     IMG_LEGAL_2979["2"],
    alt:     "Quyết định 2979/QĐ-UBND trang 2 – Điều 1 và Điều 2 nội dung giao đất",
    caption: "QĐ 2979/QĐ-UBND trang 2: Điều 1 và Điều 2 — nội dung giao đất và cơ cấu sử dụng đất.",
  },
  {
    src:     IMG_LEGAL_2979["3"],
    alt:     "Quyết định 2979/QĐ-UBND trang 3 – Chi tiết diện tích từng loại đất",
    caption: "QĐ 2979/QĐ-UBND trang 3: Bảng chi tiết diện tích đất ở, thương mại, giáo dục và hạ tầng kỹ thuật.",
  },
  {
    src:     IMG_LEGAL_2979["4"],
    alt:     "Quyết định 2979/QĐ-UBND trang 4 – Điều khoản thi hành và chữ ký con dấu",
    caption: "QĐ 2979/QĐ-UBND trang 4: Điều 3, Điều 4 — điều khoản thi hành, chữ ký Phó Chủ tịch Nguyễn Tuấn Anh và con dấu UBND TP Đồng Nai.",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────
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

function InfoBox({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warn" | "success";
}) {
  const s =
    type === "warn"    ? "bg-amber-50 border-amber-200 text-amber-800"
    : type === "success" ? "bg-green-50 border-green-200 text-green-800"
    : "bg-slate-50 border-slate-200 text-slate-700";
  return (
    <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>
      {children}
    </div>
  );
}

function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-bold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all"
    >
      {children}
    </a>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function QD2979Page() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}
      <ScrollAnimator />
      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero ──────────────────────────────────────────── */}
        <div className="bg-gradient-to-b from-primary-50 to-white border-b border-primary-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a>
              <span className="text-slate-300">/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium line-clamp-1">QĐ 2979 giao đất Mega City 2</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-red-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                🆕 Mới nhất
              </span>
              <span className="inline-block bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Pháp lý dự án
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 6 phút đọc</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-4xl">
              QĐ 2979/QĐ-UBND: UBND TP Đồng Nai chính thức giao đất cho chủ đầu tư Mega City 2 — Ý nghĩa và tác động thực tế
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Ngày 24/9/2026, UBND TP Đồng Nai ban hành{" "}
              <strong className="text-slate-700">Quyết định 2979/QĐ-UBND</strong> giao đất chính thức
              cho Công ty TNHH Khu đô thị Phú Hội — mốc pháp lý quan trọng nhất của{" "}
              <a href="/mega-city-2" className="text-primary-600 font-semibold hover:underline">
                Mega City 2 Nhơn Trạch
              </a>{" "}
              trong năm 2026.
            </p>
          </div>

          {/* Hero image — trang 1 QĐ */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button" tabIndex={0}
              aria-label="Phóng to ảnh Quyết định 2979/QĐ-UBND"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_LEGAL_2979["1"]}
                alt="Quyết định 2979/QĐ-UBND ngày 24/9/2026 của UBND TP Đồng Nai giao đất cho chủ đầu tư Mega City 2"
                className="w-full h-auto block"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Trang 1 — Quyết định số 2979/QĐ-UBND ngày 24/9/2026 của UBND TP Đồng Nai. Click để phóng to.
            </p>
          </div>
        </div>

        {/* ── Main layout ───────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-1.5 text-sm text-slate-600 columns-1 sm:columns-2 gap-x-8">
                  {[
                    ["#tong-quan",   "Tổng quan QĐ 2979/QĐ-UBND"],
                    ["#noi-dung",    "1. Nội dung chi tiết quyết định"],
                    ["#co-cau",      "2. Cơ cấu sử dụng đất ~839.256 m²"],
                    ["#y-nghia",     "3. Ý nghĩa với người mua"],
                    ["#so-sanh",     "4. QĐ 2979 vs QĐ 1772 — khác gì?"],
                    ["#van-ban",     "5. Hình ảnh văn bản gốc 4 trang"],
                    ["#faq",         "Câu hỏi thường gặp"],
                    ["#ket-luan",    "Kết luận"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-primary-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <section className="mb-12" id="tong-quan">
                <SectionHeading id="tong-quan">Tổng quan Quyết định 2979/QĐ-UBND ngày 24/9/2026</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Đây là quyết định hành chính do{" "}
                    <strong className="text-slate-800">UBND Thành phố Đồng Nai</strong> ban hành ngày{" "}
                    <strong className="text-slate-800">24 tháng 9 năm 2026</strong>, giao đất cho{" "}
                    <strong className="text-slate-800">Công ty TNHH Khu đô thị Phú Hội</strong> để tiếp tục
                    thực hiện dự án khu dân cư tại phường Nhơn Trạch, TP Đồng Nai — tức{" "}
                    <a href="/mega-city-2" className="text-primary-600 font-semibold hover:underline">
                      dự án Mega City 2
                    </a>.
                  </p>

                  {/* 3 số liệu nổi bật */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose my-8">
                    {[
                      { value: "~839.256 m²", label: "Tổng diện tích toàn dự án được chấp thuận", color: "bg-primary-600" },
                      { value: "449.695 m²",  label: "Đất ở được giao — thời hạn đến 30/6/2059",  color: "bg-emerald-600" },
                      { value: "321.248 m²",  label: "Đất hạ tầng kỹ thuật giao không thu tiền",  color: "bg-slate-700"   },
                    ].map((s) => (
                      <div key={s.label} className={`${s.color} rounded-2xl p-5 text-white text-center`}>
                        <p className="text-2xl font-black tabular-nums mb-1">{s.value}</p>
                        <p className="text-xs text-white/75 leading-snug">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <InfoBox type="success">
                    <strong>📋 Ký bởi:</strong> KT. Chủ tịch — Phó Chủ tịch{" "}
                    <strong>Nguyễn Tuấn Anh</strong>, UBND TP Đồng Nai.
                    Văn bản có con dấu đỏ chính thức, có giá trị pháp lý ngay khi ban hành.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3 not-prose">
                    <a
                      href="/2979.QĐ-UBND.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-primary-600 text-white font-bold text-sm px-4 py-2 rounded-xl hover:bg-primary-700 transition-all"
                    >
                      📄 Tải văn bản gốc QĐ 2979 (PDF)
                    </a>
                    <LinkBtn href="/mega-city-2/phap-ly">
                      🔍 Xem toàn bộ pháp lý Mega City 2 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 1 */}
              <section className="mb-12" id="noi-dung">
                <SectionHeading id="noi-dung">1. Nội dung chi tiết Quyết định 2979/QĐ-UBND</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Quyết định gồm 4 điều chính, được ký và đóng dấu đầy đủ bởi UBND TP Đồng Nai:
                  </p>

                  <div className="space-y-4 not-prose">
                    {[
                      {
                        so: "Điều 1",
                        color: "bg-primary-600",
                        title: "Giao đất hạ tầng kỹ thuật",
                        desc: "Giao cho Công ty TNHH Khu đô thị Phú Hội tổng cộng 321.248 m² đất hạ tầng kỹ thuật (gồm 21.829 m² đất hành chính + 299.419 m² đất cây xanh – giao thông) để phục vụ xây dựng và hoàn thiện hạ tầng kỹ thuật dự án. Hình thức: giao không thu tiền sử dụng đất.",
                      },
                      {
                        so: "Điều 2",
                        color: "bg-emerald-600",
                        title: "Chấp thuận cơ cấu sử dụng toàn bộ ~839.256 m²",
                        desc: "Phê duyệt cơ cấu sử dụng đất toàn dự án bao gồm: đất ở liên kế phố (157.956 m²), đất ở liên kế vườn (179.525,7 m²), đất biệt thự song lập (22.264 m²), đất ở xã hội (89.948,8 m²), đất thương mại dịch vụ (29.281,4 m²), đất giáo dục (40.280,1 m²) và đất hạ tầng kỹ thuật (320.220,7 m²).",
                      },
                      {
                        so: "Điều 3",
                        color: "bg-slate-700",
                        title: "Trách nhiệm thi hành",
                        desc: "Quy định trách nhiệm của Công ty TNHH Khu đô thị Phú Hội trong việc sử dụng đất đúng mục đích, hoàn thành hạ tầng theo quy hoạch được duyệt và thực hiện nghĩa vụ tài chính liên quan.",
                      },
                      {
                        so: "Điều 4",
                        color: "bg-slate-500",
                        title: "Điều khoản hiệu lực",
                        desc: "Quyết định có hiệu lực ngay kể từ ngày ký (24/9/2026). Các cơ quan, đơn vị liên quan có trách nhiệm thi hành.",
                      },
                    ].map(({ so, color, title, desc }) => (
                      <div key={so} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
                        <div className={`flex-shrink-0 w-16 h-8 rounded-lg ${color} text-white font-black text-xs flex items-center justify-center`}>
                          {so}
                        </div>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-1">{title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-12" id="co-cau">
                <SectionHeading id="co-cau">2. Cơ cấu sử dụng đất ~839.256 m² toàn dự án</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Theo Điều 2 của QĐ 2979, toàn bộ quỹ đất dự án được phân chia chi tiết như sau:
                  </p>

                  <div className="rounded-2xl border border-slate-200 overflow-hidden not-prose shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-primary-600 text-white">
                            <th className="text-left px-4 py-3 font-bold">Loại đất</th>
                            <th className="text-right px-4 py-3 font-bold tabular-nums">Diện tích (m²)</th>
                            <th className="text-left px-4 py-3 font-bold">Hình thức</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {[
                            { loai: "Đất ở liên kế phố",      dien: "157.956,0",  hinh: "Giao có thu tiền SDĐ" },
                            { loai: "Đất ở liên kế vườn",     dien: "179.525,7",  hinh: "Giao có thu tiền SDĐ" },
                            { loai: "Đất biệt thự song lập",  dien: "22.264,0",   hinh: "Giao có thu tiền SDĐ" },
                            { loai: "Đất nhà ở xã hội",       dien: "89.948,8",   hinh: "Giao có thu tiền SDĐ" },
                            { loai: "Đất thương mại – DV",    dien: "29.281,4",   hinh: "Nhà nước cho thuê" },
                            { loai: "Đất giáo dục",           dien: "40.280,1",   hinh: "Nhà nước cho thuê" },
                            { loai: "Đất hạ tầng kỹ thuật",  dien: "320.220,7",  hinh: "Giao không thu tiền SDĐ" },
                          ].map((r) => (
                            <tr key={r.loai} className="hover:bg-slate-50">
                              <td className="px-4 py-3 font-semibold text-slate-800">{r.loai}</td>
                              <td className="px-4 py-3 text-right tabular-nums text-slate-700">{r.dien}</td>
                              <td className="px-4 py-3 text-slate-500 text-xs">{r.hinh}</td>
                            </tr>
                          ))}
                          <tr className="bg-primary-50 font-black">
                            <td className="px-4 py-3 text-primary-800">Tổng cộng</td>
                            <td className="px-4 py-3 text-right tabular-nums text-primary-800">~839.256,7</td>
                            <td className="px-4 py-3 text-primary-600 text-xs">Toàn dự án</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100">
                      <p className="text-[11px] text-slate-400">
                        * Đất ở được giao thời hạn đến 30/6/2059. Số liệu theo QĐ 2979/QĐ-UBND ngày 24/9/2026.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <ArticleFigure
                      src={IMG_LEGAL_2979["3"]}
                      alt="Quyết định 2979/QĐ-UBND trang 3 — Chi tiết cơ cấu diện tích sử dụng đất Mega City 2"
                      caption="Trang 3 QĐ 2979: Bảng chi tiết cơ cấu sử dụng đất theo từng loại — đất ở, thương mại, giáo dục và hạ tầng kỹ thuật."
                      images={images}
                      index={2}
                      onOpen={openLightbox}
                    />
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-12" id="y-nghia">
                <SectionHeading id="y-nghia">3. Ý nghĩa thực tế với người mua Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Đây không chỉ là văn bản hành chính thuần túy — nó có ảnh hưởng trực tiếp
                    đến quyền lợi của người mua và nhà đầu tư:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                    {[
                      {
                        icon: "🏛️",
                        title: "Xác nhận CĐT được tiếp tục dự án",
                        desc: "Nhà nước chính thức giao đất cho Công ty TNHH Khu đô thị Phú Hội — tức là dự án không bị vướng pháp lý tổng thể, chủ đầu tư có đủ cơ sở pháp lý để triển khai tiếp.",
                        color: "border-primary-200 bg-primary-50",
                        tc: "text-primary-800",
                      },
                      {
                        icon: "📜",
                        title: "Củng cố nền tảng cho QĐ 1772",
                        desc: "QĐ 2979 bổ sung và hoàn thiện pháp lý tổng thể, làm vững chắc hơn cơ sở pháp lý của QĐ 1772/QĐ-UBND cho phép phân lô bán nền 2.421 lô.",
                        color: "border-emerald-200 bg-emerald-50",
                        tc: "text-emerald-800",
                      },
                      {
                        icon: "⏰",
                        title: "Tín hiệu tích cực về tiến độ ra sổ",
                        desc: "Giao đất chính thức là bước tiền đề để hoàn tất nghiệm thu hạ tầng, đủ điều kiện cấp Giấy chứng nhận (sổ hồng) riêng từng nền cho người mua.",
                        color: "border-amber-200 bg-amber-50",
                        tc: "text-amber-800",
                      },
                      {
                        icon: "📍",
                        title: "Thời hạn đất ở rõ ràng: đến 30/6/2059",
                        desc: "Văn bản ghi rõ thời hạn giao đất ở là đến ngày 30/6/2059 — khoảng 33 năm, đủ cơ sở để người mua xây dựng, khai thác và chuyển nhượng.",
                        color: "border-slate-200 bg-slate-50",
                        tc: "text-slate-800",
                      },
                    ].map(({ icon, title, desc, color, tc }) => (
                      <div key={title} className={`rounded-2xl border p-5 ${color}`}>
                        <div className="text-2xl mb-2">{icon}</div>
                        <p className={`font-black text-sm mb-2 ${tc}`}>{title}</p>
                        <p className="text-slate-600 text-xs leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>

                  <InfoBox type="success">
                    <strong>⭐ Tóm lại:</strong> QĐ 2979 là <strong>mốc pháp lý quan trọng nhất trong năm 2026</strong>{" "}
                    của Mega City 2. Đây là thời điểm tốt để tìm hiểu dự án — pháp lý vừa được
                    hoàn thiện thêm một bước quan trọng.
                  </InfoBox>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12" id="so-sanh">
                <SectionHeading id="so-sanh">4. QĐ 2979 vs QĐ 1772 — Hai quyết định khác nhau thế nào?</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>Nhiều khách hàng nhầm lẫn giữa hai quyết định này. Đây là bảng so sánh rõ ràng:</p>

                  <div className="rounded-2xl border border-slate-200 overflow-hidden not-prose shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-slate-800 text-white">
                            <th className="text-left px-4 py-3 font-bold">Tiêu chí</th>
                            <th className="text-left px-4 py-3 font-bold">QĐ 1772/QĐ-UBND</th>
                            <th className="text-left px-4 py-3 font-bold">QĐ 2979/QĐ-UBND</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {[
                            { tieu: "Ngày ban hành",  qd1: "30/05/2025",          qd2: "24/09/2026" },
                            { tieu: "Cơ quan ký",     qd1: "UBND tỉnh Đồng Nai",  qd2: "UBND TP Đồng Nai" },
                            { tieu: "Nội dung chính", qd1: "Chấp thuận 2.421 lô phân lô bán nền", qd2: "Giao đất chính thức toàn dự án cho CĐT" },
                            { tieu: "Đối tượng hưởng lợi", qd1: "Cá nhân mua nền (2.421 lô)", qd2: "Công ty TNHH Khu đô thị Phú Hội" },
                            { tieu: "Diện tích liên quan", qd1: "~2.421 lô (đất ở)",  qd2: "~839.256 m² toàn dự án" },
                            { tieu: "Ý nghĩa",         qd1: "Được phép chuyển nhượng nền đất cho người dân", qd2: "Xác nhận CĐT có đủ pháp lý tiếp tục dự án" },
                          ].map((r, i) => (
                            <tr key={r.tieu} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                              <td className="px-4 py-3 font-semibold text-slate-700">{r.tieu}</td>
                              <td className="px-4 py-3 text-slate-600 text-xs leading-relaxed">{r.qd1}</td>
                              <td className="px-4 py-3 text-primary-700 text-xs leading-relaxed font-semibold">{r.qd2}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <InfoBox>
                    <strong>💡 Hiểu đúng:</strong> Hai quyết định <strong>bổ sung cho nhau</strong>, không thay thế nhau.
                    QĐ 1772 cho phép người dân mua nền, QĐ 2979 xác nhận chủ đầu tư có đủ cơ sở pháp lý
                    để tiếp tục vận hành và hoàn thiện toàn bộ dự án.
                  </InfoBox>
                </div>
              </section>

              {/* Section 5 — 4 ảnh văn bản */}
              <section className="mb-12" id="van-ban">
                <SectionHeading id="van-ban">5. Hình ảnh văn bản gốc QĐ 2979 — 4 trang đầy đủ</SectionHeading>
                <div className="pt-5 space-y-6 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Dưới đây là toàn bộ 4 trang văn bản gốc Quyết định 2979/QĐ-UBND. Click từng ảnh
                    để phóng to và đọc chi tiết nội dung từng điều khoản.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 not-prose">
                    {LIGHTBOX_IMAGES.map((img, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-zoom-in group"
                        onClick={() => openLightbox(i)}
                        role="button" tabIndex={0}
                        aria-label={`Phóng to trang ${i + 1}`}
                        onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                          <p className="text-xs font-semibold text-slate-600">{img.caption}</p>
                          <span className="text-[10px] text-primary-600 font-bold flex-shrink-0 ml-2">🔍 Phóng to</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 not-prose pt-2">
                    <a
                      href="/2979.QĐ-UBND.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-primary-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-primary-700 transition-all shadow"
                    >
                      📄 Tải toàn bộ văn bản PDF
                    </a>
                    <LinkBtn href="/Quyết định.pdf">
                      📋 Xem thêm QĐ 1772/QĐ-UBND →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">Câu hỏi thường gặp về QĐ 2979/QĐ-UBND</SectionHeading>
                <div className="pt-5 space-y-3 not-prose">
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details
                      key={i}
                      className="group rounded-2xl border border-slate-200 bg-white overflow-hidden open:border-primary-200 open:shadow-sm transition-all"
                    >
                      <summary className="flex items-center justify-between gap-4 cursor-pointer px-5 py-4 font-semibold text-slate-800 text-sm list-none group-open:text-primary-700 select-none">
                        <span>{faq.name}</span>
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 group-open:bg-primary-100 flex items-center justify-center transition-colors text-slate-400 group-open:text-primary-600 transition-transform group-open:rotate-180">
                          ▼
                        </span>
                      </summary>
                      <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 bg-primary-50/30">
                        {faq.acceptedAnswer.text}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Kết luận */}
              <section className="mb-12" id="ket-luan">
                <SectionHeading id="ket-luan">Kết luận</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Quyết định 2979/QĐ-UBND ngày 24/9/2026 là văn bản pháp lý có giá trị cao nhất
                    được ban hành cho Mega City 2 trong năm 2026, xác nhận nhà nước chính thức
                    giao đất cho chủ đầu tư để tiếp tục triển khai.
                  </p>
                  <p>
                    Kết hợp với QĐ 1772/QĐ-UBND (chấp thuận 2.421 lô phân lô bán nền) và tiến độ
                    hạ tầng đạt ~95%, dự án hiện có nền tảng pháp lý vững chắc nhất từ trước đến nay.
                  </p>

                  <div className="rounded-2xl bg-slate-900 p-6 text-white not-prose">
                    <p className="font-black text-base mb-3">Muốn tìm hiểu thêm hoặc đặt lịch xem thực tế?</p>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      Chuyên viên sẽ tư vấn chi tiết về pháp lý, giá thị trường và đưa bạn tham quan
                      trực tiếp hạ tầng tại dự án.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="tel:0937587438"
                        className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
                      >
                        📞 Gọi ngay: 0937.587.438
                      </a>
                      <a
                        href="/mega-city-2"
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all"
                      >
                        Xem tổng quan Mega City 2 →
                      </a>
                    </div>
                  </div>
                </div>
              </section>

            </article>

            {/* Sidebar */}
            <aside className="lg:w-72 flex-shrink-0 space-y-6">

              {/* Thông tin nhanh */}
              <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5 sticky top-24">
                <p className="text-xs font-black text-primary-600 uppercase tracking-widest mb-4">
                  Thông tin nhanh QĐ 2979
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Số quyết định", value: "2979/QĐ-UBND" },
                    { label: "Ngày ban hành",  value: "24/09/2026" },
                    { label: "Cơ quan ký",     value: "UBND TP Đồng Nai" },
                    { label: "Người ký",        value: "PCT Nguyễn Tuấn Anh" },
                    { label: "Nội dung",        value: "Giao đất CĐT Phú Hội" },
                    { label: "Diện tích giao",  value: "321.248 m² HT kỹ thuật" },
                    { label: "Tổng dự án",      value: "~839.256 m²" },
                    { label: "Thời hạn đất ở",  value: "Đến 30/6/2059" },
                  ].map((r) => (
                    <div key={r.label} className="flex justify-between gap-2 text-xs border-b border-primary-100 pb-2 last:border-0 last:pb-0">
                      <span className="text-primary-600 font-semibold flex-shrink-0">{r.label}</span>
                      <span className="text-primary-900 font-bold text-right">{r.value}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/2979.QĐ-UBND.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 bg-primary-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-primary-700 transition-colors w-full"
                >
                  📄 Tải PDF văn bản gốc
                </a>
              </div>

              {/* Pháp lý liên quan */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Pháp lý liên quan</p>
                <div className="space-y-3">
                  {[
                    { href: "/mega-city-2/phap-ly", label: "Toàn bộ hồ sơ pháp lý Mega City 2" },
                    { href: "/Quyết định.pdf",      label: "QĐ 1772/QĐ-UBND (30/5/2025)" },
                    { href: "/mega-city-2/tien-do",  label: "Tiến độ hạ tầng ~95%" },
                    { href: "/mega-city-2/bang-gia", label: "Bảng giá thị trường" },
                  ].map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium"
                      target={l.href.endsWith(".pdf") ? "_blank" : undefined}
                      rel={l.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                    >
                      <span className="text-primary-400">→</span> {l.label}
                    </a>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </div>

      <RelatedContent
        items={[
          {
            href:        "/mega-city-2/phap-ly",
            title:       "Pháp lý Mega City 2 – QĐ 2979 & QĐ 1772 đầy đủ",
            description: "Toàn bộ hồ sơ pháp lý, hình ảnh văn bản và FAQ pháp lý.",
            tag:         "Pháp lý",
          },
          {
            href:        "/mega-city-2/tien-do",
            title:       "Tiến độ hạ tầng Mega City 2 – Cập nhật 09/2026",
            description: "Timeline mốc pháp lý và tiến độ hạ tầng ~95% tại dự án.",
            tag:         "Tiến độ",
          },
          {
            href:        "/mega-city-2",
            title:       "Tổng quan Mega City 2 Nhơn Trạch",
            description: "84 ha, 2.421 lô phân lô bán nền, giá từ 1,15 tỷ/nền.",
            tag:         "Tổng quan",
          },
          {
            href:        "/mega-city-2/bang-gia",
            title:       "Bảng giá Mega City 2 tháng 09/2026",
            description: "Giá chuyển nhượng tham khảo theo từng block và mặt đường.",
            tag:         "Bảng giá",
          },
          {
            href:        "/tin-tuc/dat-nen-mega-city-2-co-duoc-xay-nha-ngay-khong",
            title:       "Đất nền Mega City 2 có được xây nhà ngay không?",
            description: "Lộ trình quy hoạch và thời điểm khởi công thực tế.",
            tag:         "Tin dự án",
          },
          {
            href:        "/mega-city-2/faq",
            title:       "FAQ – Câu hỏi thường gặp Mega City 2",
            description: "Giải đáp pháp lý, tiến độ, sổ hồng và thủ tục giao dịch.",
            tag:         "FAQ",
          },
        ]}
      />

      <CorpFooter />
    </>
  );
}
