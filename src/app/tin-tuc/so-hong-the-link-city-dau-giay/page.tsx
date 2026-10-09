"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS74 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/so-hong-the-link-city-dau-giay`;
const PUBLISHED     = "09/10/2026";
const PUBLISHED_ISO = "2026-10-09";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sổ Hồng The Link City Dầu Giây: Thực Tế Đã Cấp, Quy Trình & Thời Gian Nhận 2026",
  description: "Sổ hồng The Link City Dầu Giây đã được cấp thực tế từng nền. Tìm hiểu quy trình nhận sổ, căn cứ pháp lý Công văn 2505 và thời gian dự kiến sang tên 2026.",
  image: [IMG_NEWS74["1"], IMG_NEWS74["2"], IMG_NEWS74["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "sổ hồng the link city, the link city có sổ hồng chưa, quy trình nhận sổ hồng the link city, sổ hồng dầu giây 2026",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "The Link City Dầu Giây có sổ hồng chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Chủ đầu tư Phú Việt Tín đã được UBND tỉnh Đồng Nai cấp Giấy chứng nhận quyền sử dụng đất (sổ hồng) cho toàn bộ quỹ đất dự án. Khi khách hàng ký hợp đồng chuyển nhượng và hoàn thành nghĩa vụ tài chính, sổ hồng sẽ được sang tên trực tiếp cho từng người mua.",
      },
    },
    {
      "@type": "Question",
      name: "Sổ hồng The Link City là loại đất gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đất tại The Link City được cấp sổ hồng loại Đất ở đô thị (ODT) — sở hữu lâu dài vĩnh viễn, không có thời hạn như đất nông nghiệp hay đất thuê. Đây là loại pháp lý cao nhất cho bất động sản nhà ở tại Việt Nam.",
      },
    },
    {
      "@type": "Question",
      name: "Quy trình nhận sổ hồng The Link City như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "4 bước: (1) Ký hợp đồng đặt cọc và hợp đồng mua bán với Kim Oanh Land; (2) Thanh toán theo tiến độ đến đủ điều kiện ký hợp đồng công chứng; (3) Công chứng hợp đồng chuyển nhượng tại văn phòng công chứng; (4) Nộp hồ sơ đăng ký biến động, nhận sổ hồng mang tên người mua.",
      },
    },
    {
      "@type": "Question",
      name: "Mất bao lâu để nhận sổ hồng sau khi ký hợp đồng The Link City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sau khi hoàn thành công chứng hợp đồng chuyển nhượng và nộp hồ sơ, thời gian đăng ký biến động tại Văn phòng Đăng ký đất đai huyện Thống Nhất thường mất 15–30 ngày làm việc. Tổng thời gian từ ký hợp đồng đến nhận sổ phụ thuộc vào tiến độ thanh toán và thời điểm đủ điều kiện công chứng.",
      },
    },
    {
      "@type": "Question",
      name: "Chi phí sang tên sổ hồng The Link City là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chi phí sang tên bao gồm: lệ phí trước bạ 0,5% giá trị đất, phí công chứng hợp đồng chuyển nhượng (theo biểu phí công chứng Nhà nước), lệ phí đăng ký biến động tại Văn phòng Đăng ký đất đai. Tổng chi phí thường dao động 1–2% giá trị hợp đồng tùy từng trường hợp cụ thể.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "The Link City", item: `${BASE_URL}/the-link-city` },
    { "@type": "ListItem", position: 4, name: "Sổ hồng The Link City", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS74["1"], alt: "Tập sổ hồng thực tế đã cấp dự án The Link City Dầu Giây Kim Oanh",              caption: "Sổ hồng (Giấy chứng nhận QSDĐ) đã được cấp thực tế tại The Link City Dầu Giây — minh chứng pháp lý rõ ràng nhất." },
  { src: IMG_NEWS74["2"], alt: "Cận cảnh sổ hồng The Link City Dầu Giây số thửa diện tích",                     caption: "Cận cảnh sổ hồng — ghi rõ loại đất ODT (đất ở đô thị), sở hữu lâu dài vĩnh viễn." },
  { src: IMG_NEWS74["3"], alt: "Khách hàng nhận sổ hồng tại văn phòng Kim Oanh Land Dầu Giây",                  caption: "Khách hàng nhận sổ hồng tại Kim Oanh Land — quy trình minh bạch, hồ sơ đầy đủ." },
  { src: IMG_NEWS74["4"], alt: "Văn bản pháp lý Công văn 2505 quyết định giao đất The Link City Dầu Giây",       caption: "Công văn 2505/UBND-KTN — căn cứ pháp lý quan trọng khẳng định quyền cấp sổ hồng từng nền tại The Link City." },
  { src: IMG_NEWS74["5"], alt: "Hạ tầng nội khu The Link City Dầu Giây hoàn thiện 100% đủ điều kiện cấp sổ",   caption: "Hạ tầng hoàn thiện 100% — một trong các điều kiện bắt buộc để được cấp sổ hồng theo quy định." },
];

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400 scroll-mt-24">
      {children}
    </h2>
  );
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-8">{children}</h3>;
}
function BulletList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="space-y-2.5 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-700 text-[16px] leading-relaxed">
          <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-[9px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
function StepCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl border border-slate-200 hover:border-amber-200 transition-colors">
      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-black text-sm flex items-center justify-center">{n}</span>
      <div>
        <p className="font-black text-slate-800 mb-1">{title}</p>
        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const s = type === "warn" ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-amber-50 border-amber-200 text-amber-800";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 transition-all">
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export default function SoHongTLCPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}

      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero ── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span>/</span>
              <a href="/the-link-city" className="hover:text-amber-600 transition-colors">The Link City</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">Sổ hồng</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">The Link City</span>
              <span className="inline-block bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Pháp lý</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 6 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Sổ Hồng The Link City Dầu Giây: Thực Tế Đã Cấp, Quy Trình & Thời Gian Nhận 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Câu hỏi pháp lý quan trọng nhất khi mua đất:{" "}
              <em>&ldquo;Sổ hồng The Link City có thật không?&rdquo;</em> — Câu trả lời ngắn:
              <strong> Có, đã cấp thực tế.</strong> Bài viết này phân tích căn cứ pháp lý,
              quy trình nhận sổ và những điều cần biết trước khi ký hợp đồng.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh sổ hồng The Link City"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS74["1"]}
                alt="Tập sổ hồng thực tế đã cấp dự án The Link City Dầu Giây Kim Oanh"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Sổ hồng (GCNQSDĐ) đã được cấp thực tế tại The Link City Dầu Giây — minh chứng pháp lý rõ ràng nhất.
            </p>
          </div>
        </div>

        {/* ── Main ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#tra-loi-nhanh", "1. Trả lời nhanh: The Link City có sổ hồng không?"],
                    ["#can-cu",        "2. Căn cứ pháp lý — Công văn 2505 & Quyết định giao đất"],
                    ["#loai-dat",      "3. Loại đất ODT — sở hữu lâu dài vĩnh viễn"],
                    ["#quy-trinh",     "4. Quy trình 4 bước từ đặt cọc đến nhận sổ"],
                    ["#thoi-gian",     "5. Thời gian và chi phí sang tên"],
                    ["#luu-y",         "6. Những điều cần kiểm tra trước khi ký"],
                    ["#faq",           "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Trong thị trường bất động sản Việt Nam, sổ hồng là yếu tố quyết định pháp lý
                quan trọng nhất. Không có sổ hồng = rủi ro cao, dù giá có hấp dẫn đến đâu.
                Đây là lý do câu hỏi <em>&ldquo;The Link City có sổ hồng chưa?&rdquo;</em> luôn
                là câu hỏi đầu tiên của bất kỳ người mua nghiêm túc nào.
              </p>

              {/* Section 1 — Trả lời nhanh */}
              <section className="mb-12">
                <SectionHeading id="tra-loi-nhanh">Trả lời nhanh: The Link City có sổ hồng không?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl flex-shrink-0">✅</span>
                      <div>
                        <p className="font-black text-emerald-800 text-lg mb-2">CÓ — Sổ hồng đã được cấp thực tế</p>
                        <p className="text-emerald-700 text-sm leading-relaxed">
                          Chủ đầu tư <strong>Công ty TNHH Đầu tư Phú Việt Tín</strong> (đơn vị sở hữu
                          quỹ đất The Link City) đã được UBND tỉnh Đồng Nai cấp Giấy chứng nhận
                          quyền sử dụng đất (sổ hồng) cho toàn bộ diện tích dự án. Khi khách hàng
                          ký hợp đồng chuyển nhượng và hoàn thành nghĩa vụ tài chính, sổ hồng sẽ
                          được sang tên trực tiếp cho người mua — không qua hợp đồng góp vốn hay
                          đặt cọc treo.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { icon: "📜", label: "Loại sổ", val: "Sổ hồng (GCNQSDĐ)" },
                      { icon: "🏛️", label: "Cơ quan cấp", val: "UBND tỉnh Đồng Nai" },
                      { icon: "⏳", label: "Thời hạn", val: "Lâu dài — vĩnh viễn" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-2xl bg-amber-50 border border-amber-100 p-4 text-center">
                        <span className="text-2xl block mb-1">{s.icon}</span>
                        <p className="text-xs text-slate-400 mb-0.5">{s.label}</p>
                        <p className="font-black text-amber-700 text-sm">{s.val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS74["2"]}
                alt="Cận cảnh sổ hồng The Link City Dầu Giây số thửa diện tích"
                caption="Cận cảnh sổ hồng The Link City — ghi rõ loại đất ODT, diện tích từng nền và thông tin chủ sở hữu."
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 2 — Căn cứ pháp lý */}
              <section className="mb-12">
                <SectionHeading id="can-cu">Căn cứ pháp lý — Công văn 2505 & Quyết định giao đất</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Pháp lý của The Link City được xây dựng trên 3 văn bản nền tảng, mỗi văn bản
                    là một tầng xác nhận từ cơ quan Nhà nước có thẩm quyền:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        n: "01",
                        title: "Quy hoạch 1/500 được phê duyệt",
                        desc: "UBND tỉnh Đồng Nai phê duyệt quy hoạch chi tiết xây dựng tỷ lệ 1/500 cho toàn bộ khu dự án — đây là điều kiện tiên quyết để giao đất và cấp sổ hồng.",
                        tag: "Nền tảng",
                      },
                      {
                        n: "02",
                        title: "Công văn 2505/UBND-KTN (13/02/2026)",
                        desc: "UBND tỉnh Đồng Nai ban hành Công văn 2505/UBND-KTN xác nhận Phú Việt Tín đã hoàn thành 100% nghĩa vụ tài chính về tiền sử dụng đất — căn cứ quan trọng nhất để thực hiện sang tên sổ hồng cho từng khách hàng.",
                        tag: "Quan trọng nhất",
                        highlight: true,
                      },
                      {
                        n: "03",
                        title: "Quyết định giao đất của UBND",
                        desc: "Quyết định giao đất chính thức từ UBND huyện Thống Nhất / TP Đồng Nai cho chủ đầu tư — hoàn tất chuỗi pháp lý từ quy hoạch đến sổ hồng thực tế.",
                        tag: "Hoàn tất chuỗi",
                      },
                    ].map((item) => (
                      <div key={item.n} className={`flex gap-4 p-5 rounded-2xl border-2 transition-colors ${item.highlight ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-white"}`}>
                        <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-black ${item.highlight ? "bg-amber-500 text-white" : "bg-amber-100 text-amber-700"}`}>{item.n}</span>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <p className="font-black text-slate-800">{item.title}</p>
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${item.highlight ? "bg-amber-500 text-white" : "bg-amber-100 text-amber-700"}`}>{item.tag}</span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026">Đọc giải mã Công văn 2505 chi tiết →</LinkBtn>
                    <LinkBtn href="/the-link-city/phap-ly">Xem hồ sơ pháp lý đầy đủ →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS74["4"]}
                alt="Văn bản pháp lý Công văn 2505 quyết định giao đất The Link City Dầu Giây"
                caption="Công văn 2505/UBND-KTN — văn bản xác nhận hoàn thành nghĩa vụ tài chính, căn cứ để sang tên sổ hồng từng nền."
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 3 — Loại đất */}
              <section className="mb-12">
                <SectionHeading id="loai-dat">Loại đất ODT — sở hữu lâu dài vĩnh viễn</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không phải sổ hồng nào cũng như nhau. Điều quan trọng không chỉ là
                    <em> có sổ hồng</em> mà còn là <em>sổ hồng loại đất gì</em>. Tại The
                    Link City, đất được cấp sổ là <strong>Đất ở tại đô thị (ODT)</strong> — loại
                    pháp lý cao nhất và an toàn nhất cho người mua nhà ở.
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-amber-50">
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Loại đất</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-amber-200">Thời hạn</th>
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Quyền xây dựng</th>
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">The Link City</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Đất ở đô thị (ODT)", "Vĩnh viễn", "Tự do theo quy hoạch", "✅ Đúng loại này"],
                          ["Đất ở nông thôn (ONT)", "Vĩnh viễn", "Tự do theo quy hoạch", "❌ Không"],
                          ["Đất nông nghiệp (CLN, LUC)", "50 năm", "Phải xin chuyển mục đích", "❌ Không"],
                          ["Đất thuê trả tiền hàng năm", "50 năm", "Hạn chế thế chấp, chuyển nhượng", "❌ Không"],
                        ].map(([loai, han, quyen, tlc]) => (
                          <tr key={loai} className={`hover:bg-slate-50 ${tlc.includes("✅") ? "bg-emerald-50" : ""}`}>
                            <td className="px-4 py-3 font-semibold text-slate-700">{loai}</td>
                            <td className="px-4 py-3 text-center">{han}</td>
                            <td className="px-4 py-3 text-slate-500 text-xs">{quyen}</td>
                            <td className="px-4 py-3 font-black text-emerald-700">{tlc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <InfoBox>
                    <strong>Điểm mấu chốt:</strong> Đất ODT cho phép thế chấp ngân hàng tự do,
                    chuyển nhượng không hạn chế, xây dựng theo quy chuẩn đô thị và được bảo hộ
                    pháp lý cao nhất. Đây là loại tài sản lý tưởng cho cả ở thực lẫn đầu tư.
                  </InfoBox>
                </div>
              </section>

              {/* Section 4 — Quy trình */}
              <section className="mb-12">
                <SectionHeading id="quy-trinh">Quy trình 4 bước từ đặt cọc đến nhận sổ</SectionHeading>
                <div className="pt-5 space-y-4">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Quy trình nhận sổ hồng tại The Link City rõ ràng và có thể theo dõi được
                    từng bước — không mơ hồ như nhiều dự án "cam kết sẽ có sổ" khác:
                  </p>

                  <StepCard n="01" title="Đặt cọc & ký hợp đồng mua bán"
                    desc="Nộp cọc 50 triệu (đất nền) hoặc 100 triệu (shophouse), ký hợp đồng mua bán với Kim Oanh Land trong 7 ngày. Hợp đồng ghi rõ cam kết sang tên sổ hồng." />
                  <StepCard n="02" title="Thanh toán theo tiến độ"
                    desc="Thực hiện 9–10 đợt thanh toán. Khi đạt đủ % giá trị theo hợp đồng (thường đến Đợt 8 — ký HĐCN), đủ điều kiện tiến hành công chứng." />
                  <StepCard n="03" title="Ký hợp đồng công chứng chuyển nhượng"
                    desc="Hai bên (chủ đầu tư & khách hàng) ký hợp đồng chuyển nhượng QSDĐ tại văn phòng công chứng. Đây là thời điểm pháp lý chính thức chuyển quyền sở hữu." />
                  <StepCard n="04" title="Đăng ký biến động & nhận sổ hồng"
                    desc="Nộp hồ sơ đăng ký biến động tại Văn phòng Đăng ký đất đai huyện Thống Nhất. Sau 15–30 ngày làm việc, nhận sổ hồng mang tên người mua." />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS74["3"]}
                alt="Khách hàng nhận sổ hồng tại văn phòng Kim Oanh Land Dầu Giây"
                caption="Khách hàng nhận sổ hồng tại Kim Oanh Land — từng bước rõ ràng, hồ sơ hoàn chỉnh."
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 5 — Thời gian & chi phí */}
              <section className="mb-12">
                <SectionHeading id="thoi-gian">Thời gian và chi phí sang tên</SectionHeading>
                <div className="pt-5 space-y-5">
                  <H3>Thời gian dự kiến</H3>
                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-amber-50">
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Giai đoạn</th>
                          <th className="text-center px-4 py-3 font-black text-slate-700 border-b border-amber-200">Thời gian</th>
                          <th className="text-left px-4 py-3 font-black text-slate-700 border-b border-amber-200">Ghi chú</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Đặt cọc → Ký HĐ mua bán", "7 ngày", "Bắt buộc theo chính sách"],
                          ["Ký HĐ → Đủ điều kiện công chứng", "Tùy tiến độ thanh toán", "Nhanh nhất khi thanh toán sớm"],
                          ["Công chứng HĐCN", "1–3 ngày", "Tại văn phòng công chứng"],
                          ["Nộp hồ sơ → Nhận sổ hồng", "15–30 ngày làm việc", "Tại Văn phòng ĐKĐĐ huyện TN"],
                        ].map(([gd, time, note]) => (
                          <tr key={gd} className="hover:bg-slate-50">
                            <td className="px-4 py-3 font-semibold text-slate-700">{gd}</td>
                            <td className="px-4 py-3 text-center font-black text-amber-700">{time}</td>
                            <td className="px-4 py-3 text-slate-500 text-xs">{note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <H3>Chi phí sang tên (ước tính cho lô 1,85 tỷ)</H3>
                  <BulletList items={[
                    <><strong>Lệ phí trước bạ:</strong> 0,5% giá trị đất = ~9,25 triệu đồng.</>,
                    <><strong>Phí công chứng hợp đồng chuyển nhượng:</strong> Theo biểu phí Nhà nước, khoảng 3–7 triệu đồng tùy giá trị.</>,
                    <><strong>Lệ phí đăng ký biến động:</strong> 100.000 – 500.000 đồng.</>,
                    <><strong>Thuế thu nhập cá nhân (nếu có):</strong> 2% giá trị chuyển nhượng — do bên bán (chủ đầu tư) chịu trong giao dịch đợt 1.</>,
                    <><strong>Tổng ước tính:</strong> Khoảng 15–20 triệu đồng cho lô 1,85 tỷ — tương đương 0,8–1,1% giá trị.</>,
                  ]} />

                  <InfoBox type="warn">
                    Chi phí trên là ước tính. Thực tế có thể thay đổi theo giá trị hợp đồng và
                    chính sách thuế tại thời điểm giao dịch. Tư vấn viên Kim Oanh sẽ hỗ trợ tính
                    toán cụ thể khi bạn tiến hành ký hợp đồng.
                  </InfoBox>
                </div>
              </section>

              {/* Section 6 — Lưu ý */}
              <section className="mb-12">
                <SectionHeading id="luu-y">Những điều cần kiểm tra trước khi ký</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dù pháp lý The Link City đã rõ ràng, người mua vẫn nên tự thẩm định độc lập
                    trước khi ký hợp đồng. Đây là checklist 5 điểm tối thiểu:
                  </p>
                  <BulletList items={[
                    <><strong>Yêu cầu xem bản sao sổ hồng gốc</strong> của chủ đầu tư — kiểm tra số thửa, diện tích, loại đất ODT và tình trạng thế chấp (nếu có phải giải chấp trước khi sang tên).</>,
                    <><strong>Đối chiếu sổ hồng với hợp đồng</strong> — số thửa trong hợp đồng phải khớp với sổ hồng. Không mua theo mô tả vị trí chung chung.</>,
                    <><strong>Kiểm tra quy hoạch</strong> — tra cứu lô đất tại Văn phòng ĐKĐĐ huyện Thống Nhất để xác nhận không có thay đổi quy hoạch sau ngày cấp sổ.</>,
                    <><strong>Xác nhận tình trạng pháp lý</strong> — sổ hồng không bị thế chấp tại ngân hàng khác. Nếu đang thế chấp, phải có cam kết giải chấp trước khi công chứng.</>,
                    <><strong>Tư vấn luật sư độc lập</strong> — đặc biệt nếu đây là lần đầu mua đất nền. Chi phí 1–3 triệu đồng cho buổi tư vấn là khoản đầu tư xứng đáng với quyết định vài tỷ đồng.</>,
                  ]} />

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/the-link-city/phap-ly">Xem hồ sơ pháp lý đầy đủ →</LinkBtn>
                    <LinkBtn href="/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026">Giải mã Công văn 2505 →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS74["5"]}
                alt="Hạ tầng nội khu The Link City Dầu Giây hoàn thiện 100% đủ điều kiện cấp sổ"
                caption="Hạ tầng hoàn thiện 100% là một trong các điều kiện bắt buộc để được cấp sổ hồng theo quy định pháp luật."
                images={images} index={4} onOpen={openLightbox}
              />

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về sổ hồng</SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details key={name} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-amber-200 transition-colors">
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-amber-700 select-none">
                        <span className="leading-snug">{name}</span>
                        <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-amber-600 transition-transform group-open:rotate-180 text-xs">▼</span>
                      </summary>
                      <div className="px-6 pb-5 border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-[16px] leading-relaxed">{acceptedAnswer.text}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Tìm hiểu thêm */}
              <section className="mb-12">
                <SectionHeading>Tìm hiểu thêm</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city/phap-ly",                                                      label: "Hồ sơ pháp lý The Link City đầy đủ" },
                    { href: "/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026",        label: "Giải mã Công văn 2505 chi tiết" },
                    { href: "/tin-tuc/chinh-sach-ban-hang-the-link-city-dau-giay-2026",                     label: "Chính sách bán hàng & tiến độ thanh toán" },
                    { href: "/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026",   label: "Quy trình mua bán 5 bước" },
                    { href: "/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026",                      label: "Có nên mua The Link City không?" },
                    { href: "/tin-tuc/ha-tang-ky-thuat-the-link-city-dau-giay",                             label: "Hạ tầng kỹ thuật hoàn thiện 100%" },
                    { href: "/the-link-city",                                                               label: "Tổng quan dự án The Link City" },
                    { href: "/the-link-city/bang-gia",                                                      label: "Bảng giá 2026" },
                  ].map((l) => (
                    <a key={l.href} href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 transition-colors px-4 py-3 rounded-xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50">
                      <span className="text-amber-400 flex-shrink-0">→</span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </section>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin pháp lý trong bài tổng hợp từ tài liệu công khai. Người mua nên
                  tự thẩm định pháp lý độc lập và tham khảo luật sư trước khi ký hợp đồng.
                  Chi phí và thời gian sang tên có thể thay đổi theo quy định tại thời điểm giao dịch.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5">
                  <p className="font-black text-emerald-800 text-sm mb-4 uppercase tracking-wider">Tóm tắt pháp lý</p>
                  <div className="space-y-2.5 text-sm">
                    {[
                      ["Loại đất", "ODT — Đất ở đô thị"],
                      ["Thời hạn", "Vĩnh viễn"],
                      ["Cơ quan cấp", "UBND tỉnh Đồng Nai"],
                      ["Căn cứ", "CV 2505/UBND-KTN"],
                      ["Trạng thái", "Đã cấp thực tế"],
                      ["Lệ phí trước bạ", "0,5% giá trị đất"],
                      ["Thời gian nhận sổ", "15–30 ngày LV"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-emerald-200 pb-2 last:border-0 last:pb-0">
                        <span className="text-emerald-700">{k}</span>
                        <span className="font-black text-emerald-800 text-right text-xs">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Pháp lý The Link City</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/the-link-city/phap-ly",    label: "Hồ sơ pháp lý" },
                      { href: "/the-link-city/bang-gia",   label: "Bảng giá 2026" },
                      { href: "/the-link-city/thanh-toan", label: "Tiến độ thanh toán" },
                      { href: "/the-link-city",            label: "Tổng quan dự án" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-amber-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white">
                        <span>{l.label}</span><span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Xem sổ hồng thực tế</p>
                  <p className="text-amber-100 text-xs mb-4">Gọi để được xem bản gốc sổ hồng và tư vấn quy trình sang tên.</p>
                  <a href="tel:0937587438" className="block text-center bg-white text-amber-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-amber-50 transition-colors">
                    0937.587.438
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-amber-50 border-t border-amber-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Muốn xem sổ hồng thực tế?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Gọi để được xem bản gốc sổ hồng, tư vấn quy trình sang tên và nhận bảng giá
              mới nhất — hoàn toàn miễn phí, không áp lực.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/the-link-city/phap-ly" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">
                Xem hồ sơ pháp lý →
              </a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            {
              href: "/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026",
              title: "Hồ Sơ Pháp Lý The Link City: Giải Mã Công Văn 2505",
              description: "Phân tích chi tiết Công văn 2505/UBND-KTN và tiến trình cấp sổ hồng từng nền.",
              tag: "Pháp lý",
            },
            {
              href: "/tin-tuc/chinh-sach-ban-hang-the-link-city-dau-giay-2026",
              title: "Chính Sách Bán Hàng The Link City 2026",
              description: "Tiến độ thanh toán 9–10 đợt, chiết khấu 16%/năm và điều kiện vay ngân hàng.",
              tag: "Tài chính",
            },
            {
              href: "/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026",
              title: "Quy Trình Mua Bán The Link City: 5 Bước Từ A–Z",
              description: "Hướng dẫn đầy đủ 5 bước mua bán chuẩn pháp lý và công chứng sang tên.",
              tag: "Hướng dẫn",
            },
            {
              href: "/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026",
              title: "Có Nên Mua The Link City Không? Phân Tích 2026",
              description: "Đánh giá trung thực ưu nhược điểm và bảng điểm tổng thể 7.3/10.",
              tag: "Phân tích",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
