"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS56 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/dien-tich-dat-nen-mega-city-2`;
const PUBLISHED     = "19/09/2026";
const PUBLISHED_ISO = "2026-09-19";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mega City 2 có những diện tích nền nào? Hướng dẫn chọn diện tích theo nhu cầu",
  description:
    "Tổng hợp chi tiết các loại diện tích nền Mega City 2 Nhơn Trạch: 90m², 100m², 120m², 200m²–300m² và cẩm nang lựa chọn diện tích tối ưu theo ngân sách, nhu cầu ở hoặc kinh doanh.",
  image: [IMG_NEWS56["1"], IMG_NEWS56["2"], IMG_NEWS56["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO,
  dateModified:  PUBLISHED_ISO,
  url: PAGE_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "diện tích nền Mega City 2, kích thước lô đất Mega City 2, mặt bằng phân lô Mega City 2, đất nền Mega City 2 Nhơn Trạch",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Diện tích đất nền nhỏ nhất tại dự án Mega City 2 là bao nhiêu mét vuông?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lô đất nền có diện tích nhỏ nhất tại dự án là khoảng 90m² (kích thước chuẩn 5×18m), rất phù hợp cho các gia đình trẻ xây dựng nhà phố 1 trệt 2 lầu với chi phí vừa tầm.",
      },
    },
    {
      "@type": "Question",
      name: "Diện tích đất nền biệt thự Mega City 2 là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Các lô đất nền biệt thự và nhà vườn tại dự án có diện tích đa dạng từ 200m² (10×20m), 250m² (10×25m) đến 300m² (15×20m), được bố trí bao quanh cụm công viên trung tâm 2,1 ha.",
      },
    },
    {
      "@type": "Question",
      name: "Nên chọn diện tích nào tại Mega City 2 để dễ bán lại nhất?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhóm diện tích 90m² và 100m² (5×18m, 5×20m) sở hữu tính thanh khoản cao nhất và dễ giao dịch chuyển nhượng nhất do tổng giá trị vừa túi tiền của số đông người mua ở thực lẫn nhà đầu tư.",
      },
    },
    {
      "@type": "Question",
      name: "Đất nền shophouse thương mại Mega City 2 có diện tích bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Các lô shophouse thương mại mặt tiền đường lớn 24m–32m thường có diện tích từ 110m² đến 150m² (kích thước 5×22m, 6×20m, 6×25m) và các lô góc 2 mặt tiền rộng từ 150m² đến trên 250m².",
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
    { "@type": "ListItem", position: 3, name: "Diện tích nền Mega City 2", item: PAGE_URL },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS56["1"],
    alt: "Các loại diện tích đất nền tại dự án khu đô thị Mega City 2 Nhơn Trạch",
    caption: "Quy hoạch tổng thể Mega City 2 với 4 nhóm diện tích nền: 90m², 100m², 120m²–150m² và 200m²–300m².",
  },
  {
    src: IMG_NEWS56["2"],
    alt: "Sơ đồ kích thước và khoảng lùi xây dựng thửa đất 100m2 tại Mega City 2",
    caption: "Lô đất 5×20m (100m²): khoảng lùi sân trước 2,5m, thân nhà 5×15,5m, sân sau 2m làm giếng trời.",
  },
  {
    src: IMG_NEWS56["3"],
    alt: "Mẫu thiết kế biệt thự vườn diện tích 200m2 ven công viên tại Mega City 2",
    caption: "Biệt thự vườn 10×20m (200m²) với sân cỏ, hồ cá tiểu cảnh và gara ô tô bao quanh công viên 2,1ha.",
  },
  {
    src: IMG_NEWS56["4"],
    alt: "Infographic hướng dẫn chọn diện tích đất nền Mega City 2 theo nhu cầu tài chính",
    caption: "4 tiêu chí chọn diện tích nền: Ngân sách, Thành viên gia đình, Mục đích kinh doanh và Tích sản.",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400 scroll-mt-24"
    >
      {children}
    </h2>
  );
}

function SubHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="text-xl font-black text-slate-800 mb-3 mt-8 scroll-mt-24">
      {children}
    </h3>
  );
}

function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" | "tip" }) {
  const s =
    type === "warn" ? "bg-amber-50 border-amber-200 text-amber-800"
    : type === "tip"  ? "bg-blue-50 border-blue-200 text-blue-800"
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
      className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 transition-all"
    >
      {children}
    </a>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────
const DIEN_TICH_TABLE = [
  { nhom: "Nhà phố liên kế nhỏ",  kt: "5×18m",              dt: "90m²",        tang: "2–4 tầng", mk: "≈85%" },
  { nhom: "Nhà phố liên kế chuẩn", kt: "5×20m",             dt: "100m²",       tang: "2–4 tầng", mk: "≈80%" },
  { nhom: "Nhà phố thương mại",    kt: "5×22m / 6×20m",     dt: "110m²–120m²", tang: "3–5 tầng", mk: "≈75%–80%" },
  { nhom: "Biệt thự song lập",     kt: "10×20m / 10×25m",   dt: "200m²–250m²", tang: "2–3 tầng", mk: "≈60%–65%" },
  { nhom: "Biệt thự đơn lập",      kt: "15×20m",            dt: "300m²",       tang: "2–3 tầng", mk: "≈50%–55%" },
  { nhom: "Lô góc 2 mặt tiền",     kt: "Hình thể đặc biệt", dt: "130m²–350m²+", tang: "3–5 tầng", mk: "≈70%–80%" },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function DienTichDatNenMegaCity2Page() {
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
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span className="text-slate-300">/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium line-clamp-1">Diện tích nền Mega City 2</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Tin dự án
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 10 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-4xl">
              Mega City 2 có những diện tích nền nào? Hướng dẫn chọn diện tích theo nhu cầu
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Tổng hợp chi tiết 4 nhóm diện tích nền tại{" "}
              <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">Mega City 2 Nhơn Trạch</a>
              {" "}— từ nhà phố liên kế 90m², shophouse 120m² đến biệt thự vườn 200m²–300m² — kèm hướng dẫn chọn lựa theo ngân sách và mục đích sử dụng.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button" tabIndex={0}
              aria-label="Phóng to ảnh các loại diện tích nền Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS56["1"]}
                alt="Các loại diện tích đất nền tại dự án khu đô thị Mega City 2 Nhơn Trạch"
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
              Quy hoạch 3D tổng thể Mega City 2 với 4 nhóm diện tích nền chính: 90m², 100m², 120m²–150m² và 200m²–300m².
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
                    ["#ly-do",       "Tầm quan trọng của việc chọn diện tích"],
                    ["#tong-hop",    "1. Tổng hợp các loại diện tích"],
                    ["#chi-tiet",    "2. Đặc điểm từng nhóm diện tích"],
                    ["#huong-dan",   "3. Hướng dẫn chọn theo nhu cầu"],
                    ["#luu-y",       "4. Lưu ý kỹ thuật trên bản vẽ"],
                    ["#faq",         "Câu hỏi thường gặp"],
                    ["#ket-luan",    "Kết luận"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Section: Tầm quan trọng */}
              <section className="mb-12" id="ly-do">
                <SectionHeading id="ly-do">Vì sao việc lựa chọn diện tích nền tại Mega City 2 lại quan trọng?</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Tại dự án <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">Mega City 2 Nhơn Trạch</a> (Khu dân cư xã Phú Hội quy mô 84 ha với hơn 3.160 sản phẩm đất nền do Kim Oanh Group phát triển), cơ cấu sản phẩm được quy hoạch rất đa dạng nhằm đáp ứng nhiều phân khúc khách hàng khác nhau.
                  </p>
                  <p>Việc nắm rõ diện tích nền Mega City 2 và kích thước từng loại lô đất ảnh hưởng trực tiếp đến:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
                    {[
                      { icon: "🏗️", title: "Phương án thiết kế & chi phí xây dựng", desc: "Diện tích đất quyết định quy mô sàn, số phòng ngủ, mật độ xây dựng và khoảng lùi theo quy chuẩn 1/500." },
                      { icon: "🎯", title: "Mục đích sử dụng thực tế", desc: "Xác định thửa đất phù hợp để xây nhà phố định cư, nhà trọ cho thuê, cửa hàng kinh doanh hay biệt thự nghỉ dưỡng." },
                      { icon: "📈", title: "Thanh khoản & tiềm năng tăng giá", desc: "Mỗi nhóm diện tích sở hữu biên độ tăng trưởng và nhóm khách hàng mục tiêu riêng khi giao dịch thứ cấp." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 1: Tổng hợp */}
              <section className="mb-12" id="tong-hop">
                <SectionHeading id="tong-hop">1. Tổng hợp các loại diện tích nền hiện có tại Mega City 2</SectionHeading>
                <div className="pt-5 space-y-6 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Theo bản đồ quy hoạch chi tiết xây dựng tỷ lệ 1/500, các sản phẩm đất nền tại dự án được chia thành <strong className="text-slate-800">4 nhóm diện tích chính:</strong>
                  </p>

                  {/* 4 nhóm cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                    {[
                      { n: "1", color: "amber", label: "Nhóm Tiêu Chuẩn", sub: "Nhà phố liên kế", range: "90m² – 100m²", kt: "5×18m, 5×20m", icon: "🏠" },
                      { n: "2", color: "blue",  label: "Nhóm Thương Mại", sub: "Shophouse đường lớn", range: "110m² – 150m²", kt: "5×22m, 6×20m, 6×25m", icon: "🏪" },
                      { n: "3", color: "green", label: "Nhóm Nhà Vườn & Biệt Thự", sub: "Ven công viên 2,1ha", range: "200m² – 300m²", kt: "10×20m, 10×25m, 15×20m", icon: "🌿" },
                      { n: "4", color: "purple",label: "Nhóm Lô Góc 2 Mặt Tiền", sub: "Ngã ba, ngã tư trục lớn", range: "130m² – 350m²+", kt: "Hình thể đặc biệt, vát góc", icon: "⭐" },
                    ].map((item) => (
                      <div key={item.n} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex gap-4">
                        <div className="text-3xl flex-shrink-0">{item.icon}</div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Nhóm {item.n}</p>
                          <p className="font-black text-slate-800 text-sm">{item.label}</p>
                          <p className="text-slate-500 text-xs mb-1">{item.sub}</p>
                          <p className="text-amber-700 font-bold text-sm">{item.range}</p>
                          <p className="text-slate-400 text-xs">{item.kt}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bảng thông số */}
                  <div className="overflow-x-auto not-prose">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[580px]">
                      <thead>
                        <tr className="bg-slate-800 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Nhóm sản phẩm</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Kích thước</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Diện tích</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Tầng cao</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Mật độ XD</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {DIEN_TICH_TABLE.map((row, i) => (
                          <tr key={row.nhom} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700 text-xs">{row.nhom}</td>
                            <td className="px-4 py-3 text-slate-600 text-xs font-mono">{row.kt}</td>
                            <td className="px-4 py-3 text-amber-700 font-bold text-xs">{row.dt}</td>
                            <td className="px-4 py-3 text-slate-600 text-xs">{row.tang}</td>
                            <td className="px-4 py-3 text-slate-600 text-xs">{row.mk}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach">
                      🗺️ Bản đồ mặt bằng phân lô Mega City 2 Nhơn Trạch: Chi tiết từng phân khu và diện tích →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 2: Chi tiết từng nhóm */}
              <section className="mb-12" id="chi-tiet">
                <SectionHeading id="chi-tiet">2. Đặc điểm chi tiết của từng loại diện tích nền</SectionHeading>

                {/* 2.1 */}
                <div className="pt-5 space-y-4">
                  <SubHeading id="nhom-90-100">2.1. Nhóm diện tích 90m² – 100m² (5×18m, 5×20m)</SubHeading>
                  <div className="space-y-4 text-slate-600 text-[16px] leading-[1.85]">
                    <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-amber-500 font-bold text-sm flex-shrink-0 w-28">📍 Vị trí</span>
                        <p className="text-sm">Nằm chủ yếu trên các tuyến đường nội bộ có lộ giới 13m – 14m (lòng đường 7m, vỉa hè mỗi bên 3m).</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-amber-500 font-bold text-sm flex-shrink-0 w-28">📐 Đặc điểm</span>
                        <p className="text-sm">Kích thước vuông vắn, chiều sâu 18m–20m rất thuận lợi để bố trí gara ô tô phía trước và khoảng giếng trời phía sau. Chiếm tỷ lệ lớn nhất trong cơ cấu sản phẩm.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-amber-500 font-bold text-sm flex-shrink-0 w-28">👥 Phù hợp</span>
                        <p className="text-sm">Gia đình trẻ tích lũy vừa phải, nhà đầu tư cá nhân tìm suất vốn nhỏ với tính thanh khoản chuyển nhượng nhanh nhất.</p>
                      </div>
                    </div>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS56["2"]}
                    alt="Sơ đồ kích thước và khoảng lùi xây dựng thửa đất 100m2 tại Mega City 2"
                    caption="Lô đất 5×20m (100m²): khoảng lùi sân trước 2,5m, thân nhà 5×15,5m, sân sau 2m làm giếng trời."
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />

                  {/* 2.2 */}
                  <SubHeading id="nhom-110-150">2.2. Nhóm diện tích 110m² – 150m² (5×22m, 6×20m, 6×25m)</SubHeading>
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-sm flex-shrink-0 w-28">📍 Vị trí</span>
                      <p className="text-sm text-slate-600">Tiếp giáp mặt tiền các trục đại lộ cảnh quan chính lộ giới từ 17,5m đến 32m (trục đường kết nối ra đường Nguyễn Hữu Cảnh và đại lộ 25C).</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-sm flex-shrink-0 w-28">📐 Đặc điểm</span>
                      <p className="text-sm text-slate-600">Mặt tiền rộng 5m–6m và chiều dài sâu giúp tối ưu không gian tầng trệt để trưng bày hàng hóa, mở văn phòng hoặc quán ăn, cafe.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-sm flex-shrink-0 w-28">👥 Phù hợp</span>
                      <p className="text-sm text-slate-600">Khách hàng kinh doanh thương mại trực tiếp hoặc kết hợp ở tầng trên, cho thuê mặt bằng tầng trệt tạo dòng tiền thụ động hàng tháng.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/tin-tuc/shophouse-mega-city-2-khai-thac-kinh-doanh">
                      🏪 Shophouse Mega City 2: Khả năng khai thác kinh doanh dọc các trục đường lớn →
                    </LinkBtn>
                  </div>

                  {/* 2.3 */}
                  <SubHeading id="nhom-200-300">2.3. Nhóm diện tích 200m² – 300m² (10×20m, 15×20m)</SubHeading>
                  <div className="rounded-2xl border border-green-100 bg-green-50/50 p-5 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 font-bold text-sm flex-shrink-0 w-28">📍 Vị trí</span>
                      <p className="text-sm text-slate-600">Nằm bao quanh cụm công viên trung tâm quy mô 2,1 ha hoặc các khu vực dải cây xanh cách ly yên tĩnh.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 font-bold text-sm flex-shrink-0 w-28">📐 Đặc điểm</span>
                      <p className="text-sm text-slate-600">Mặt tiền rộng 10m–15m. Mật độ xây dựng chỉ 50%–60%, phần còn lại (70m²–130m²) dành trọn cho sân vườn, hồ cá tiểu cảnh, lối dạo bộ và bãi đỗ xe ngoài trời.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-700 font-bold text-sm flex-shrink-0 w-28">👥 Phù hợp</span>
                      <p className="text-sm text-slate-600">Khách hàng tài chính dồi dào muốn xây ngôi nhà thứ hai nghỉ dưỡng cuối tuần hoặc cho chuyên gia nước ngoài tại các KCN thuê ở.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/tin-tuc/dat-nen-nha-vuon-biet-thu-mega-city-2">
                      🌿 Đất nền nhà vườn & biệt thự Mega City 2: Đặc điểm và tiềm năng khai thác →
                    </LinkBtn>
                  </div>
                </div>

                <div className="mt-6">
                  <ArticleFigure
                    src={IMG_NEWS56["3"]}
                    alt="Mẫu thiết kế biệt thự vườn diện tích 200m2 ven công viên tại Mega City 2"
                    caption="Biệt thự vườn 10×20m (200m²) với sân cỏ, hồ cá tiểu cảnh và gara ô tô bao quanh công viên 2,1ha."
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />
                </div>

                {/* 2.4 */}
                <div className="space-y-4">
                  <SubHeading id="nhom-lo-goc">2.4. Nhóm lô góc 2 mặt tiền (130m² đến trên 350m²)</SubHeading>
                  <div className="rounded-2xl border border-purple-100 bg-purple-50/50 p-5 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-purple-700 font-bold text-sm flex-shrink-0 w-28">📍 Vị trí</span>
                      <p className="text-sm text-slate-600">Nằm tại các ngã ba, ngã tư giao nhau giữa các trục đường lớn.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-700 font-bold text-sm flex-shrink-0 w-28">📐 Đặc điểm</span>
                      <p className="text-sm text-slate-600">Sở hữu 2 mặt thoáng vỉa hè rộng, đón ánh sáng và gió từ hai hướng, tầm nhìn khoáng đạt và độ nhận diện thương hiệu vượt trội.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-700 font-bold text-sm flex-shrink-0 w-28">👥 Phù hợp</span>
                      <p className="text-sm text-slate-600">Mở chuỗi nhà hàng F&B, siêu thị mini 24/7, phòng khám đa khoa tư nhân hoặc văn phòng giao dịch công ty logistics.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Hướng dẫn chọn */}
              <section className="mb-12" id="huong-dan">
                <SectionHeading id="huong-dan">3. Hướng dẫn chọn diện tích nền Mega City 2 theo từng nhu cầu cụ thể</SectionHeading>
                <div className="pt-5 space-y-6">

                  {/* 4 tiêu chí */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        icon: "💰", title: "Dựa trên tài chính",
                        items: [
                          "Ngân sách 2–2,5 tỷ (đất + xây): Chọn nền 90m² hoặc 100m²",
                          "Dòng tiền sẵn sàng 3,5–5 tỷ: Tự tin sở hữu lô 200m² xây biệt thự vườn",
                        ],
                        color: "amber",
                      },
                      {
                        icon: "👨‍👩‍👧‍👦", title: "Dựa trên thành viên gia đình",
                        items: [
                          "Gia đình trẻ 3–4 người: Nền 100m², xây 1 trệt 2 lầu, bố trí được 3PN + phòng thờ + sân phơi",
                          "Gia đình đa thế hệ 5–7 người: Ưu tiên lô 120m² hoặc 200m²",
                        ],
                        color: "blue",
                      },
                      {
                        icon: "🏪", title: "Dựa trên mục đích kinh doanh",
                        items: [
                          "Mở cửa hàng/cafe: Chọn shophouse 120m²–150m² mặt tiền đường lớn",
                          "Cho kỹ sư KCN thuê: Lô 120m²–150m² (6×20m, 6×25m) xây 6–10 phòng khép kín",
                        ],
                        color: "green",
                      },
                      {
                        icon: "📈", title: "Dựa trên mục tiêu tích sản",
                        items: [
                          "Thanh khoản nhanh nhất: Nhóm 90m²–100m²",
                          "Biên độ tăng giá cao nhất: Lô góc 2 mặt tiền trục đường 32m",
                        ],
                        color: "purple",
                      },
                    ].map((card) => (
                      <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="font-black text-slate-800 text-sm mb-3">{card.icon} {card.title}</p>
                        <ul className="space-y-2">
                          {card.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                              <span className="text-slate-300 flex-shrink-0 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS56["4"]}
                    alt="Infographic hướng dẫn chọn diện tích đất nền Mega City 2 theo nhu cầu tài chính"
                    caption="4 tiêu chí chọn diện tích nền: Ngân sách, Thành viên gia đình, Mục đích kinh doanh và Tích sản."
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/tin-tuc/chi-phi-xay-nha-mega-city-2">
                      🏗️ Chi phí xây nhà thực tế tại Mega City 2 Nhơn Trạch →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 4: Lưu ý kỹ thuật */}
              <section className="mb-12" id="luu-y">
                <SectionHeading id="luu-y">4. Những lưu ý kỹ thuật trên bản vẽ khi chọn diện tích đất nền</SectionHeading>
                <div className="pt-5 space-y-4 text-slate-600 text-[16px] leading-[1.85]">
                  {[
                    {
                      n: "01",
                      title: "Chiều rộng vỉa hè trước mặt lô đất",
                      desc: "Các lô 100m² đường 13m có vỉa hè 3m; shophouse 120m² mặt tiền đường 24m–32m có vỉa hè rộng 5m–8m, tạo không gian để xe rất thuận tiện.",
                    },
                    {
                      n: "02",
                      title: "Vị trí hố ga thoát nước và tủ điện ngầm (Pillar)",
                      desc: "Kiểm tra xem nắp hố ga và tủ điện hạ thế có nằm đúng mép ranh giới giữa 2 lô hay không, tránh tình trạng nằm chính giữa cửa chính hoặc đường dẫn ô tô vào nhà.",
                    },
                    {
                      n: "03",
                      title: "Hướng nắng và hướng gió",
                      desc: "Hướng Đông Nam và Nam: Đón gió mát quanh năm. Hướng Tây và Tây Bắc: Nên bố trí khoảng lùi trồng cây bóng mát hoặc thiết kế lam chắn nắng khi xây nhà.",
                    },
                    {
                      n: "04",
                      title: "Khoảng lùi bắt buộc theo diện tích",
                      desc: "Nắm rõ quy định lùi trước 2m–3m và lùi sau 1m–2m để khi lên bản vẽ thiết kế công năng nhà ở không bị hụt diện tích phòng sinh hoạt.",
                    },
                  ].map((item) => (
                    <div key={item.n} className="flex gap-5 rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500 text-white font-black text-sm flex items-center justify-center">
                        {item.n}
                      </div>
                      <div>
                        <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-wrap gap-3 not-prose pt-2">
                    <LinkBtn href="/tin-tuc/checklist-nhan-nen-mega-city-2">
                      ✅ Checklist nhận nền và kiểm tra hiện trạng trước khi xây nhà tại Mega City 2 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">Câu hỏi thường gặp về diện tích nền Mega City 2</SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details
                      key={name}
                      className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-amber-300 transition-colors"
                    >
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-amber-700 select-none">
                        <span className="leading-snug">{name}</span>
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-5 text-slate-600 text-[15px] leading-relaxed border-t border-slate-100 pt-4">
                        {acceptedAnswer.text}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Kết luận */}
              <section className="mb-12" id="ket-luan">
                <SectionHeading id="ket-luan">Kết luận</SectionHeading>
                <div className="pt-5 space-y-4 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Việc nắm rõ <strong className="text-slate-800">Mega City 2 có những diện tích nền nào</strong> sẽ giúp bạn chủ động lựa chọn sản phẩm phù hợp nhất với điều kiện tài chính và kế hoạch sử dụng. Dù là lô nhà phố liên kế chuẩn <strong className="text-slate-800">90m²–100m²</strong> dễ thanh khoản, shophouse thương mại <strong className="text-slate-800">120m²–150m²</strong> giàu tiềm năng kinh doanh hay biệt thự nhà vườn sinh thái <strong className="text-slate-800">200m²–300m²</strong>, khu đô thị Mega City 2 Nhơn Trạch đều mang đến giá trị an cư văn minh và tiềm năng tăng trưởng tài sản bền vững theo nhịp phát triển hạ tầng Đồng Nai.
                  </p>
                  <InfoBox type="tip">
                    <strong>💡 Bạn cần hỗ trợ kiểm tra mã lô, vị trí và bảng giá chi tiết từng loại diện tích tại Mega City 2?</strong>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <a href="/mega-city-2" className="inline-flex items-center gap-1.5 bg-white border border-blue-300 text-blue-700 font-bold text-sm px-4 py-2 rounded-xl hover:bg-blue-50 transition-all">
                        🏙️ Xem thông tin Mega City 2 Nhơn Trạch →
                      </a>
                      <a href="/mega-city-2/bang-gia" className="inline-flex items-center gap-1.5 bg-white border border-blue-300 text-blue-700 font-bold text-sm px-4 py-2 rounded-xl hover:bg-blue-50 transition-all">
                        💰 Bảng giá mới nhất →
                      </a>
                    </div>
                  </InfoBox>
                </div>
              </section>

            </article>

            {/* ── Sidebar ───────────────────────────────────── */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-6">

                {/* Quick overview */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-black text-amber-900 text-sm mb-3 uppercase tracking-wider">📐 Tóm tắt diện tích nền</p>
                  <div className="space-y-2">
                    {[
                      { label: "Nhà phố liên kế",  val: "90m² – 100m²" },
                      { label: "Shophouse trục lớn", val: "110m² – 150m²" },
                      { label: "Biệt thự vườn",     val: "200m² – 300m²" },
                      { label: "Lô góc 2 mặt tiền", val: "130m² – 350m²+" },
                    ].map(({ label, val }) => (
                      <div key={label} className="flex justify-between items-center text-sm border-b border-amber-100 pb-2 last:border-0">
                        <span className="text-slate-700">{label}</span>
                        <span className="text-amber-700 font-bold">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-slate-900 p-5 text-white">
                  <p className="font-black text-base mb-2">Xem dự án Mega City 2</p>
                  <p className="text-slate-400 text-xs mb-4 leading-relaxed">Bảng giá, sơ đồ phân lô và mặt bằng chi tiết từng block.</p>
                  <a href="/mega-city-2" className="block text-center bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm py-2.5 px-4 rounded-xl transition-colors">
                    Xem dự án →
                  </a>
                </div>

                {/* Related links */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Bài viết liên quan</p>
                  <ul className="space-y-2">
                    {[
                      { href: "/mega-city-2/bang-gia", label: "Bảng giá Mega City 2 mới nhất" },
                      { href: "/tin-tuc/chi-phi-xay-nha-mega-city-2", label: "Chi phí xây nhà tại Mega City 2" },
                      { href: "/tin-tuc/checklist-nhan-nen-mega-city-2", label: "Checklist nhận nền Mega City 2" },
                      { href: "/mega-city-2/phap-ly", label: "Pháp lý dự án Mega City 2" },
                      { href: "/tin-tuc/tien-do-mega-city-2", label: "Tiến độ Mega City 2 mới nhất" },
                    ].map(({ href, label }) => (
                      <li key={href}>
                        <a href={href} className="text-sm text-slate-600 hover:text-amber-600 transition-colors leading-snug block">
                          → {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </aside>

          </div>
        </div>

        {/* Related content */}
        <RelatedContent
          title="Tìm hiểu thêm về Mega City 2 Nhơn Trạch"
          items={[
            {
              href: "/mega-city-2",
              title: "Tổng quan dự án Mega City 2 Nhơn Trạch",
              description: "Khu đô thị 84ha, 3.160 sản phẩm đất nền với hạ tầng đồng bộ, công viên 2,1ha và đường nội khu rộng đến 32m.",
              tag: "Dự án",
            },
            {
              href: "/mega-city-2/bang-gia",
              title: "Bảng giá Mega City 2 Nhơn Trạch mới nhất",
              description: "Cập nhật bảng giá chi tiết từng phân khu, từng loại diện tích và chính sách thanh toán linh hoạt.",
              tag: "Bảng giá",
            },
            {
              href: "/tin-tuc/thu-tuc-chuyen-nhuong-mega-city-2",
              title: "Thủ tục sang tên & chuyển nhượng đất nền Mega City 2",
              description: "Hướng dẫn chi tiết quy trình sang tên hợp đồng, phí và thời gian xử lý tại Mega City 2.",
              tag: "Pháp lý",
            },
          ]}
        />

      </div>

      <CorpFooter />
    </>
  );
}
