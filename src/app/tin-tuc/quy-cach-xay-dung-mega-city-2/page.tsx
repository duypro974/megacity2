"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS35 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/quy-cach-xay-dung-mega-city-2`;
const PUBLISHED     = "29/08/2026";
const PUBLISHED_ISO = "2026-08-29";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tiêu chuẩn và quy cách xây dựng tại dự án Mega City 2 Nhơn Trạch mới nhất",
  description:
    "Hướng dẫn chi tiết quy cách xây dựng Mega City 2 Nhơn Trạch: tầng cao cho phép, mật độ xây dựng, khoảng lùi trước sau và thủ tục xin phép xây dựng thực tế.",
  image: [IMG_NEWS35["1"], IMG_NEWS35["2"], IMG_NEWS35["3"]],
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
  about: {
    "@type": "Place",
    name: "Nhơn Trạch, Đồng Nai",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nhơn Trạch",
      addressRegion: "Đồng Nai",
      addressCountry: "VN",
    },
  },
  keywords:
    "quy cách xây dựng Mega City 2, tiêu chuẩn xây dựng Mega City 2, khoảng lùi xây dựng Mega City 2, tầng cao xây dựng Mega City 2, mẫu nhà Mega City 2, xây nhà Mega City 2",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Xây nhà tại Mega City 2 có bắt buộc phải theo mẫu thiết kế sẵn không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án quy định đồng bộ về tầng cao (1 trệt 2 lầu / 1 trệt 3 lầu), khoảng lùi trước sau và độ vươn ban công theo quy chuẩn 1/500. Về bố trí công năng bên trong, gia chủ được tự do thiết kế linh hoạt theo nhu cầu sử dụng của gia đình.",
      },
    },
    {
      "@type": "Question",
      name: "Khoảng lùi trước và sau khi xây nhà Mega City 2 là bao nhiêu mét?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khoảng lùi trước thông thường từ 2,0m đến 3,0m (tùy tuyến đường), khoảng lùi sau bắt buộc tối thiểu từ 1,0m đến 2,0m để làm giếng trời và lối thoát hiểm kỹ thuật.",
      },
    },
    {
      "@type": "Question",
      name: "Đất nền Mega City 2 có thời hạn bắt buộc phải xây nhà ngay không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đối với đất nền phân lô đã bàn giao, chủ sở hữu có thể chủ động sắp xếp thời gian xây dựng theo kế hoạch tài chính cá nhân. Tuy nhiên nên kiểm tra điều kiện cụ thể trong hợp đồng mua bán và quy định của địa phương.",
      },
    },
    {
      "@type": "Question",
      name: "Nộp hồ sơ xin phép xây dựng nhà ở Mega City 2 ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hồ sơ xin cấp phép xây dựng được nộp tại Bộ phận Tiếp nhận và Trả kết quả (Một cửa) thuộc UBND huyện Nhơn Trạch hoặc liên hệ Ban quản lý dự án để được hỗ trợ hướng dẫn thủ tục.",
      },
    },
    {
      "@type": "Question",
      name: "Nhà phố tại Mega City 2 được xây tối đa mấy tầng?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà phố liên kế tại Mega City 2 được xây từ 2 đến 4 tầng tùy vị trí, phổ biến nhất là mô hình 1 trệt 2 lầu hoặc 1 trệt 3 lầu. Shophouse trên trục đường chính có thể lên đến 5 tầng. Cần xác nhận quy định cụ thể với Ban quản lý dự án.",
      },
    },
    {
      "@type": "Question",
      name: "Cốt nền tầng trệt tại Mega City 2 phải cao hơn vỉa hè bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cốt sàn tầng trệt phải cao hơn cốt đỉnh vỉa hè hoàn thiện từ +0,15m đến +0,30m (tương đương 1 đến 2 bậc tam cấp), đảm bảo chống tràn nước mưa và thuận tiện dẫn xe vào nhà.",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Quy cách xây dựng Mega City 2",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS35["1"],
    alt: "Quy cách xây dựng nhà phố đồng bộ tại dự án Mega City 2 Nhơn Trạch",
    caption: "Dãy nhà phố liền kề đồng bộ kiến trúc tại Mega City 2 — tiêu biểu cho quy cách xây dựng chuẩn 1/500",
  },
  {
    src: IMG_NEWS35["2"],
    alt: "Sơ đồ mặt cắt khoảng lùi trước và khoảng lùi sau khi xây nhà tại Mega City 2",
    caption: "Khoảng lùi trước 2–3m và khoảng lùi sau 1–2m theo quy định chỉ giới xây dựng tại Mega City 2",
  },
  {
    src: IMG_NEWS35["3"],
    alt: "Mẫu thiết kế nhà phố 1 trệt 2 lầu đúng quy chuẩn xây dựng tại Mega City 2",
    caption: "Mẫu nhà phố liên kế 5×18m (1 trệt 2 lầu) theo quy chuẩn kiến trúc đồng bộ Mega City 2",
  },
  {
    src: IMG_NEWS35["4"],
    alt: "Quy trình các bước xin giấy phép xây dựng nhà ở tại dự án Mega City 2",
    caption: "5 bước từ nhận nền đến khởi công và hoàn công theo đúng quy trình pháp lý tại Mega City 2",
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
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-black text-slate-800 mb-2 mt-6">{children}</h3>;
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
function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const s =
    type === "warn"
      ? "bg-amber-50 border-amber-200 text-amber-800"
      : "bg-slate-50 border-slate-200 text-slate-700";
  return (
    <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>
      {children}
    </div>
  );
}
function WarnBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border-l-4 border-red-400 bg-red-50 px-5 py-4 my-4">
      <p className="text-red-800 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all"
    >
      {children}
    </a>
  );
}
function StepCard({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-amber-300 transition-colors">
      <div className="w-9 h-9 rounded-xl bg-amber-500 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-sm">
        {n}
      </div>
      <div>
        <p className="font-bold text-slate-800 mb-1">{title}</p>
        <p className="text-slate-600 text-[14px] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function QuyCachXayDungMegaCity2Page() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Quy cách xây dựng Mega City 2</span>
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
              <span className="text-xs text-slate-400">· 12 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Tiêu chuẩn và quy cách xây dựng tại dự án Mega City 2 Nhơn Trạch mới nhất
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Hướng dẫn chi tiết tầng cao cho phép, mật độ xây dựng, khoảng lùi trước sau,
              kiến trúc mặt ngoài và quy trình xin phép xây dựng tại{" "}
              <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">
                Mega City 2 Nhơn Trạch
              </a>
              .
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh quy cách xây dựng Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS35["1"]}
                alt="Quy cách xây dựng nhà phố đồng bộ tại dự án Mega City 2 Nhơn Trạch"
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
              Dãy nhà phố liền kề đồng bộ kiến trúc tại Mega City 2 — tiêu biểu cho quy cách xây dựng chuẩn 1/500
            </p>
          </div>
        </div>

        {/* ── Main ──────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-1.5 text-sm text-slate-600 columns-1 sm:columns-2 gap-x-8">
                  {[
                    ["#vi-sao",       "Vì sao cần nắm rõ quy cách xây dựng?"],
                    ["#tang-cao",     "1. Tầng cao và chiều cao xây dựng"],
                    ["#khoang-lui",   "2. Khoảng lùi xây dựng (Chỉ giới)"],
                    ["#mat-do",       "3. Mật độ xây dựng tối đa"],
                    ["#kien-truc",    "4. Kiến trúc mặt ngoài & ban công"],
                    ["#quy-trinh",    "5. Quy trình xin phép xây dựng"],
                    ["#sai-pham",     "Những sai phạm cần tránh"],
                    ["#faq",          "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <section className="mb-12" id="vi-sao">
                <SectionHeading>Vì sao cần nắm rõ quy cách xây dựng tại Mega City 2 Nhơn Trạch?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khác với các khu đất thổ cư tự phát cho phép xây dựng tự do không theo quy
                    hoạch, Mega City 2 Nhơn Trạch là khu đô thị được phát triển theo đồ án quy
                    hoạch chi tiết xây dựng tỷ lệ 1/500 đã được cơ quan nhà nước có thẩm quyền
                    phê duyệt.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Việc hiểu đúng và tuân thủ quy cách xây dựng mang lại 3 lợi ích thiết thực:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { icon: "🏙️", title: "Đồng bộ kiến trúc",  desc: "Tạo diện mạo khu dân cư khang trang, nâng tầm giá trị thẩm mỹ và thương mại toàn dự án" },
                      { icon: "📋", title: "Đảm bảo hoàn công",  desc: "Nhà xây đúng chỉ giới và tầng cao sẽ thuận lợi 100% trong thủ tục nghiệm thu và cấp sổ hồng" },
                      { icon: "⚙️", title: "An toàn hạ tầng",    desc: "Tránh xâm lấn hành lang kỹ thuật điện âm, hố ga thoát nước và đường cấp nước đã chôn ngầm" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 text-center hover:border-amber-300 transition-colors">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <InfoBox>
                    <strong>Lưu ý:</strong> Các thông số trong bài dựa trên đồ án quy hoạch
                    1/500 và quy chuẩn xây dựng phổ biến. Trước khi thiết kế, chủ nhà cần xác
                    nhận lại chỉ tiêu cụ thể tại lô đất của mình với Ban quản lý dự án và Phòng
                    Quản lý Đô thị huyện Nhơn Trạch.
                  </InfoBox>
                </div>
              </section>

              {/* 1. Tầng cao */}
              <section className="mb-12">
                <SectionHeading id="tang-cao">1. Quy chuẩn tầng cao và chiều cao xây dựng tại Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tùy thuộc vào từng loại hình sản phẩm, quy chế quản lý kiến trúc tại dự án
                    quy định số tầng và chiều cao tối đa cụ thể:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: "🏘️",
                        title: "Nhà phố liên kế (Townhouse)",
                        color: "border-blue-200 bg-blue-50",
                        items: [
                          "Số tầng: 2–4 tầng, phổ biến nhất là 1 trệt 2 lầu hoặc 1 trệt 3 lầu",
                          "Chiều cao tầng trệt: khoảng 3,6m–3,9m (tính từ cao độ vỉa hè hoàn thiện)",
                          "Chiều cao tầng lầu: khoảng 3,3m–3,6m mỗi tầng",
                          "Tổng chiều cao công trình: không vượt quá 14m–16m (tính đến đỉnh mái)",
                        ],
                      },
                      {
                        icon: "🏪",
                        title: "Nhà phố thương mại – Shophouse (trục đường 24–32m)",
                        color: "border-amber-200 bg-amber-50",
                        items: [
                          "Số tầng: 3–5 tầng (1 trệt 2–3 lầu 1 tum)",
                          "Chiều cao tầng trệt: tối thiểu 3,9m để tối ưu không gian kinh doanh",
                          "Thiết kế mặt tiền đồng bộ theo đường phố thương mại",
                        ],
                      },
                      {
                        icon: "🏡",
                        title: "Biệt thự & nhà vườn sinh thái",
                        color: "border-emerald-200 bg-emerald-50",
                        items: [
                          "Số tầng: 2–3 tầng (1 trệt 1 lầu hoặc 1 trệt 2 lầu)",
                          "Tổng chiều cao: tối đa 12m–13,5m",
                          "Ưu tiên không gian mở, mái ngói dốc truyền thống hoặc hiện đại",
                          "Mật độ xây dựng thấp hơn, ưu tiên diện tích sân vườn",
                        ],
                      },
                    ].map((item) => (
                      <div key={item.title} className={`rounded-2xl border p-5 ${item.color}`}>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl">{item.icon}</span>
                          <p className="font-black text-slate-800 text-sm">{item.title}</p>
                        </div>
                        <ul className="space-y-1.5">
                          {item.items.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                              <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS35["3"]}
                alt="Mẫu thiết kế nhà phố 1 trệt 2 lầu đúng quy chuẩn xây dựng tại Mega City 2"
                caption="Mẫu nhà phố liên kế 5×18m (1 trệt 2 lầu) theo quy chuẩn kiến trúc đồng bộ Mega City 2"
                images={images}
                index={2}
                onOpen={openLightbox}
              />

              {/* 2. Khoảng lùi */}
              <section className="mb-12">
                <SectionHeading id="khoang-lui">2. Quy định về khoảng lùi xây dựng (Chỉ giới xây dựng)</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khoảng lùi là khoảng cách giữa chỉ giới đường đỏ (ranh lộ giới vỉa hè) và
                    chỉ giới xây dựng (mặt tiền ngôi nhà). Tại Mega City 2, khoảng lùi được phân
                    định rõ ràng nhằm tạo thông thoáng và đảm bảo an toàn PCCC.
                  </p>

                  {/* Sơ đồ luồng khoảng lùi */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 font-mono text-xs text-slate-600 space-y-2">
                    <p className="text-slate-400">[LÒNG ĐƯỜNG] → [VỈA HÈ] → [CHỈ GIỚI ĐƯỜNG ĐỎ]</p>
                    <p className="text-amber-600 font-bold pl-4">↓ Khoảng lùi trước: 2,0m – 3,0m</p>
                    <p className="text-blue-700 font-bold">[MẶT TIỀN NHÀ]</p>
                    <p className="text-slate-400 pl-4">│ Thân nhà xây dựng</p>
                    <p className="text-blue-700 font-bold">[MẶT SAU NHÀ]</p>
                    <p className="text-emerald-600 font-bold pl-4">↓ Khoảng lùi sau: 1,0m – 2,0m (giếng trời/thoát hiểm)</p>
                    <p className="text-slate-400">[RANH ĐẤT PHÍA SAU]</p>
                  </div>

                  <H3>Chi tiết khoảng lùi theo từng loại hình</H3>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                      <p className="font-black text-amber-800 text-sm mb-2">Khoảng lùi trước</p>
                      <BulletList
                        items={[
                          "Nhà phố liên kế nội bộ: lùi từ 2,0m–3,0m so với ranh đất phía trước (tạo khoảng sân trước để xe hoặc tiểu cảnh)",
                          "Shophouse trục đường chính: lùi theo đúng chỉ giới thiết kế mặt tiền mẫu được duyệt",
                        ]}
                      />
                    </div>
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                      <p className="font-black text-emerald-800 text-sm mb-2">Khoảng lùi sau</p>
                      <BulletList
                        items={[
                          "Bắt buộc lùi từ 1,0m–2,0m tính từ ranh đất phía sau",
                          "Mục đích: làm lối thoát hiểm kỹ thuật, lấy sáng cho giếng trời và bố trí hộp gen kỹ thuật",
                          "Tuyệt đối không được xây dựng kiên cố bịt kín phần không gian này",
                        ]}
                      />
                    </div>
                    <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                      <p className="font-black text-blue-800 text-sm mb-2">Khoảng lùi bên hông (biệt thự song lập/đơn lập)</p>
                      <BulletList
                        items={[
                          "Lùi từ 1,5m–2,5m mỗi bên để làm lối đi sân vườn",
                          "Đảm bảo khoảng cách an toàn với lô đất kế bên",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS35["2"]}
                alt="Sơ đồ mặt cắt khoảng lùi trước và khoảng lùi sau khi xây nhà tại Mega City 2"
                caption="Khoảng lùi trước 2–3m và khoảng lùi sau 1–2m theo quy định chỉ giới xây dựng tại Mega City 2"
                images={images}
                index={1}
                onOpen={openLightbox}
              />

              {/* 3. Mật độ */}
              <section className="mb-12">
                <SectionHeading id="mat-do">3. Mật độ xây dựng tối đa trên từng diện tích đất</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mật độ xây dựng là tỷ lệ diện tích chiếm đất của công trình trên tổng diện
                    tích lô đất, tuân theo{" "}
                    <strong>QCVN 01:2021/BXD</strong> — Quy chuẩn kỹ thuật quốc gia về quy
                    hoạch xây dựng.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[520px]">
                      <thead>
                        <tr className="bg-amber-500 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Diện tích lô đất</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Mật độ tối đa</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Sân vườn / khoảng trống</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["90–100m² (5×18m, 5×20m)",      "~80–85%",  "15–20m² (sân trước + sân sau)"],
                          ["110–150m² (5×22m, 6×20m)",     "~75–80%",  "25–30m²"],
                          ["200–250m² (10×20m, 10×25m)",   "~60–65%",  "70–90m² (sân vườn bao quanh)"],
                          ["300m² trở lên (biệt thự)",     "~50–55%",  "≥130m²"],
                        ].map(([dt, md, sv], i) => (
                          <tr key={dt} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700">{dt}</td>
                            <td className="px-4 py-3 text-amber-700 font-bold">{md}</td>
                            <td className="px-4 py-3 text-slate-600">{sv}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-500 italic mt-2">
                      Bảng mang tính định hướng theo QCVN 01:2021/BXD. Chỉ tiêu cụ thể tại từng
                      lô cần xác nhận qua tài liệu quy hoạch chính thức.
                    </p>
                  </div>

                  <InfoBox>
                    Mật độ xây dựng cao hơn không đồng nghĩa với không gian sống tốt hơn. Với
                    lô 90–100m², mật độ 80–85% vẫn đảm bảo đủ diện tích sàn sử dụng nếu thiết
                    kế tận dụng tốt không gian theo chiều cao và giếng trời.
                  </InfoBox>
                </div>
              </section>

              {/* 4. Kiến trúc mặt ngoài */}
              <section className="mb-12">
                <SectionHeading id="kien-truc">4. Quy định về kiến trúc mặt ngoài, màu sắc và ban công</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Để đảm bảo mỹ quan đồng nhất cho toàn khu đô thị, thiết kế hoàn thiện mặt
                    tiền nhà cần tuân thủ các nguyên tắc sau:
                  </p>

                  <H3>Độ vươn ban công và ô văng</H3>
                  <BulletList
                    items={[
                      "Đường có vỉa hè rộng từ 3m trở lên: ban công tầng 2–3 được phép nhô ra tối đa 0,9m–1,2m so với chỉ giới xây dựng",
                      "Tuyệt đối không xây phòng kín hoặc bao bọc kiên cố phần ban công nhô ra ngoài không gian công cộng",
                    ]}
                  />

                  <H3>Màu sắc và vật liệu hoàn thiện</H3>
                  <BulletList
                    items={[
                      "Ưu tiên tông màu trang nhã, hiện đại: trắng, kem, ghi xám, màu gỗ tự nhiên hoặc tông pastel",
                      "Không sử dụng màu sắc quá chói lóa, phản quang hoặc vật liệu gây ảnh hưởng thị giác người tham gia giao thông",
                      "Đồng bộ hóa thiết kế mặt tiền trong cùng một dãy block tạo nhịp điệu kiến trúc đẹp mắt",
                    ]}
                  />

                  <H3>Cao độ cốt nền tầng trệt</H3>
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4">
                    <p className="text-amber-800 text-sm leading-relaxed">
                      Cốt sàn tầng trệt phải cao hơn cốt đỉnh vỉa hè hoàn thiện từ{" "}
                      <strong>+0,15m đến +0,30m</strong> (tương đương 1–2 bậc tam cấp) —
                      đảm bảo chống tràn nước mưa vào nhà và thuận tiện dẫn xe vào garage.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach">
                      Bản đồ mặt bằng phân lô Mega City 2: Chi tiết từng phân khu →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* 5. Quy trình */}
              <section className="mb-12">
                <SectionHeading id="quy-trinh">5. Quy trình và thủ tục xin phép xây dựng tại Mega City 2</SectionHeading>
                <div className="pt-5 space-y-4">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Chủ sở hữu đất nền khi có kế hoạch khởi công cần thực hiện theo 5 bước thủ
                    tục pháp lý chuẩn chỉnh:
                  </p>

                  <StepCard
                    n={1}
                    title="Nhận bàn giao nền & rút hồ sơ thiết kế mẫu"
                    desc="Hoàn tất thủ tục nhận bàn giao nền với Ban quản lý dự án. Xin bộ tài liệu quy chuẩn xây dựng và thiết kế mẫu tham khảo từ chủ đầu tư."
                  />
                  <StepCard
                    n={2}
                    title="Thiết kế bản vẽ phù hợp quy chuẩn 1/500"
                    desc="Thuê kiến trúc sư hoặc đơn vị thiết kế uy tín lập bản vẽ đảm bảo đúng tầng cao, khoảng lùi, mật độ và kiến trúc mặt tiền theo quy định."
                  />
                  <StepCard
                    n={3}
                    title="Nộp hồ sơ xin phép / thông báo khởi công tại UBND"
                    desc="Nộp hồ sơ tại Bộ phận Một cửa UBND huyện Nhơn Trạch gồm: đơn đề nghị cấp phép, bản sao GCNQSDĐ hoặc HĐMB, bản vẽ thiết kế đầy đủ các mặt bằng, mặt đứng, mặt cắt."
                  />
                  <StepCard
                    n={4}
                    title="Đăng ký đấu nối điện, nước thi công"
                    desc="Liên hệ Ban quản lý dự án, Điện lực Nhơn Trạch và Công ty Cấp nước Đồng Nai (Dowaco) để đăng ký đấu nối nguồn thi công và lắp đặt đồng hồ điện, nước chính thức."
                  />
                  <StepCard
                    n={5}
                    title="Khởi công thi công & tiến hành hoàn công"
                    desc="Thi công theo đúng bản vẽ được duyệt. Sau khi hoàn thiện, thực hiện thủ tục nghiệm thu hoàn công với cơ quan quản lý để được cấp giấy chứng nhận quyền sở hữu nhà ở (sổ hồng nhà)."
                  />

                  <InfoBox type="warn">
                    <strong>Hồ sơ xin phép xây dựng cần có:</strong>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-amber-700">
                      <li>Đơn đề nghị cấp giấy phép xây dựng nhà ở riêng lẻ (theo mẫu)</li>
                      <li>Bản sao GCNQSDĐ hoặc Hợp đồng mua bán / Biên bản bàn giao nền</li>
                      <li>Bản vẽ thiết kế: mặt bằng vị trí, mặt bằng các tầng, mặt đứng, mặt cắt chính</li>
                      <li>Bản vẽ đấu nối hệ thống điện, nước, thoát nước ngầm</li>
                    </ul>
                  </InfoBox>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/chi-phi-xay-nha-mega-city-2">
                      Chi phí xây nhà thực tế tại Mega City 2 Nhơn Trạch →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS35["4"]}
                alt="Quy trình các bước xin giấy phép xây dựng nhà ở tại dự án Mega City 2"
                caption="5 bước từ nhận nền đến khởi công và hoàn công theo đúng quy trình pháp lý tại Mega City 2"
                images={images}
                index={3}
                onOpen={openLightbox}
              />

              {/* Sai phạm cần tránh */}
              <section className="mb-12">
                <SectionHeading id="sai-pham">Những sai phạm cần tuyệt đối tránh khi xây dựng tại Mega City 2</SectionHeading>
                <div className="pt-5 space-y-3">
                  {[
                    {
                      title: "Xây lấn chiếm khoảng lùi",
                      desc: "Tự ý cơi nới diện tích ra trọn vẹn phần sân trước hoặc lấn chiếm giếng trời phía sau. Sai phạm này sẽ bị đình chỉ thi công và không thể thực hiện thủ tục hoàn công.",
                    },
                    {
                      title: "Khoan đục làm hỏng hào kỹ thuật ngầm",
                      desc: "Khi ép cọc bê tông làm móng, phải kiểm tra kỹ bản đồ hạ tầng ngầm để không ép đè vào ống cấp thoát nước chính hoặc đường cáp điện âm đi dọc vỉa hè.",
                    },
                    {
                      title: "Tập kết vật liệu bừa bãi",
                      desc: "Đổ cát, đá, xi măng tràn ra lòng đường hoặc xả nước thải xi măng trực tiếp vào miệng cống thoát nước mưa gây tắc nghẽn hệ thống toàn khu.",
                    },
                    {
                      title: "Xây vượt tầng cao cho phép",
                      desc: "Tự ý xây thêm tầng hoặc tum vượt quá số tầng trong giấy phép. Phần xây vượt sẽ buộc phải tháo dỡ trước khi hoàn công, gây tốn kém và chậm tiến độ.",
                    },
                    {
                      title: "Không thông báo đấu nối điện nước thi công",
                      desc: "Tự ý kết nối điện thi công từ hộ bên cạnh hoặc đục ống cấp nước không đúng vị trí họng chờ, gây nguy hiểm và vi phạm quy định của đơn vị cung cấp dịch vụ.",
                    },
                  ].map((item) => (
                    <WarnBox key={item.title}>
                      <strong>⚠️ {item.title}:</strong> {item.desc}
                    </WarnBox>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về quy cách xây dựng Mega City 2</SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details
                      key={name}
                      className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-amber-300 transition-colors"
                    >
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
                <SectionHeading>Các nội dung chuyên sâu liên quan đến Mega City 2</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/mega-city-2",                                    label: "Mega City 2 Nhơn Trạch — Tổng quan dự án" },
                    { href: "/tin-tuc/checklist-nhan-nen-mega-city-2",         label: "Checklist nhận nền Mega City 2" },
                    { href: "/tin-tuc/chi-phi-xay-nha-mega-city-2",            label: "Chi phí xây nhà Mega City 2" },
                    { href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2",           label: "Hạ tầng kỹ thuật Mega City 2" },
                    { href: "/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach",label: "Mặt bằng phân lô Mega City 2" },
                    { href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",          label: "Bảng giá Mega City 2 mới nhất" },
                    { href: "/tin-tuc/phap-ly-mega-city-2",                    label: "Pháp lý dự án Mega City 2" },
                    { href: "/tin-tuc/tien-do-mega-city-2",                    label: "Tiến độ Mega City 2 mới nhất" },
                  ].map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 transition-colors px-4 py-3 rounded-xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50"
                    >
                      <span className="text-amber-400 flex-shrink-0">→</span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </section>

              {/* Kết luận */}
              <section className="mb-12">
                <SectionHeading>Kết luận</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nắm vững tiêu chuẩn và quy cách xây dựng tại Mega City 2 Nhơn Trạch là bước
                    chuẩn bị quan trọng giúp gia chủ chủ động lên phương án kiến trúc tối ưu,
                    dự toán chính xác kinh phí và đảm bảo quá trình thi công diễn ra thuận lợi,
                    đúng pháp luật.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trước khi ký hợp đồng thi công với nhà thầu, chủ nhà nên gửi bản vẽ thiết
                    kế sơ bộ đến Ban quản lý dự án hoặc Phòng Quản lý Đô thị huyện Nhơn Trạch
                    để được đối chiếu và hướng dẫn chi tiết nhất.
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài được tổng hợp từ các nguồn công khai và cần được đối chiếu
                  với thông tin chính thức mới nhất trước khi đưa ra quyết định giao dịch. Ban
                  biên tập Kim Oanh Đồng Nai — Cập nhật: {PUBLISHED}
                </p>
              </div>

            </article>

            {/* ── Sidebar ──────────────────────────────────── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu Mega City 2</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/mega-city-2",          label: "Tổng quan dự án" },
                      { href: "/mega-city-2/mat-bang",  label: "Mặt bằng tổng thể" },
                      { href: "/mega-city-2/vi-tri",    label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",   label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia",  label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/hinh-anh",  label: "Hình ảnh thực tế" },
                    ].map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-amber-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white"
                      >
                        <span>{l.label}</span>
                        <span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Checklist nhận nền Mega City 2",     href: "/tin-tuc/checklist-nhan-nen-mega-city-2" },
                      { label: "Chi phí xây nhà Mega City 2",        href: "/tin-tuc/chi-phi-xay-nha-mega-city-2" },
                      { label: "Hạ tầng kỹ thuật Mega City 2",       href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2" },
                      { label: "Mặt bằng phân lô Mega City 2",       href: "/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn xây dựng</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Nhận hướng dẫn thủ tục và quy cách xây dựng tại Mega City 2.
                  </p>
                  <a
                    href="tel:0937587438"
                    className="block text-center bg-white text-amber-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-amber-50 transition-colors"
                  >
                    0937.587.438
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="bg-amber-50 border-t border-amber-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">
              Đang chuẩn bị lên kế hoạch xây nhà tại Mega City 2?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Liên hệ để nhận tư vấn thủ tục xin phép, mẫu thiết kế và kiểm tra hiện trạng lô đất.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/mega-city-2"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Xem thông tin Mega City 2 →
              </a>
              <a
                href="tel:0937587438"
                className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm"
              >
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            {
              href: "/tin-tuc/checklist-nhan-nen-mega-city-2",
              title: "Checklist Nhận Nền & Kiểm Tra Hiện Trạng Tại Mega City 2",
              description: "Danh sách 12 bước kiểm tra chi tiết khi nhận bàn giao nền đất.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/chi-phi-xay-nha-mega-city-2",
              title: "Chi Phí Xây Nhà Thực Tế Tại Mega City 2 Nhơn Trạch 2026",
              description: "Cập nhật đơn giá xây thô, trọn gói và ước tính chi phí thực tế.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2",
              title: "Hạ Tầng Kỹ Thuật Mega City 2: Điện Âm, Nước Máy & Thoát Nước",
              description: "Chi tiết điện âm 100%, cấp nước và thoát nước 2 tuyến riêng biệt.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach",
              title: "Bản Đồ Mặt Bằng Phân Lô Mega City 2: Chi Tiết Từng Phân Khu",
              description: "Sơ đồ phân khu, diện tích lô 90–300m² và lộ giới đường 13–32m.",
              tag: "Tin dự án",
            },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}
