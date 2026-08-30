"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS38 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/ket-noi-mega-city-2-va-cac-khu-cong-nghiep-nhon-trach`;
const PUBLISHED     = "30/08/2026";
const PUBLISHED_ISO = "2026-08-30";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kết nối từ Mega City 2 đến các khu công nghiệp Nhơn Trạch: Tiềm năng cho thuê và an cư",
  description:
    "Phân tích khoảng cách từ Mega City 2 đến 9 khu công nghiệp Nhơn Trạch, các mô hình khai thác cho thuê tiềm năng và lợi thế so với nhà trọ tự phát ven KCN.",
  image: [IMG_NEWS38["1"], IMG_NEWS38["2"], IMG_NEWS38["3"]],
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
    "Mega City 2 KCN Nhơn Trạch, khoảng cách Mega City 2 đến KCN, thuê nhà Mega City 2, khu công nghiệp Nhơn Trạch, đầu tư đất nền gần KCN",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Từ Mega City 2 đi làm tại KCN Nhơn Trạch 1, 2 mất bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khoảng cách từ dự án đến KCN Nhơn Trạch 1 và 2 chỉ khoảng 2,5–3,5 km, thời gian di chuyển bằng xe máy hoặc ô tô chỉ mất khoảng 5–7 phút theo đường Tôn Đức Thắng hoặc đường 319.",
      },
    },
    {
      "@type": "Question",
      name: "Nhu cầu thuê nhà tại khu vực Mega City 2 có cao không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhơn Trạch tập trung hơn 120.000 chuyên gia, kỹ sư và công nhân làm việc tại 9 KCN. Nhu cầu thuê nhà trong khu đô thị đồng bộ như Mega City 2 luôn ổn định, đặc biệt với chuyên gia nước ngoài và kỹ sư có thu nhập khá.",
      },
    },
    {
      "@type": "Question",
      name: "Đất nền Mega City 2 có phù hợp để xây phòng trọ hoặc căn hộ dịch vụ không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoàn toàn phù hợp. Với diện tích chuẩn 100–150m² và đường trước nhà rộng từ 13m trở lên, gia chủ có thể xây dựng mô hình căn hộ dịch vụ mini hoặc nhà trọ cao cấp phục vụ kỹ sư và nhân viên văn phòng.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 gần khu công nghiệp nào nhất?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KCN Nhơn Trạch 1 và KCN Nhơn Trạch 2 là hai khu công nghiệp gần Mega City 2 nhất, cách dự án khoảng 2,5–3,5 km theo đường Tôn Đức Thắng hoặc đường 319.",
      },
    },
    {
      "@type": "Question",
      name: "Nhơn Trạch có bao nhiêu khu công nghiệp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Huyện Nhơn Trạch hiện có 9 khu công nghiệp tập trung quy mô lớn: KCN Nhơn Trạch 1, 2, 3, 5, 6, KCN Dệt may Nhơn Trạch, KCN Ông Kèo và các cụm tiểu thủ công nghiệp vệ tinh.",
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
      name: "Kết nối Mega City 2 và các KCN Nhơn Trạch",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS38["1"],
    alt: "Sơ đồ kết nối giao thông giữa Mega City 2 và cụm 9 khu công nghiệp Nhơn Trạch",
    caption: "Mega City 2 tọa lạc ở vị trí trung tâm, bao quanh bởi 9 KCN lớn trong bán kính 3–10 km",
  },
  {
    src: IMG_NEWS38["2"],
    alt: "Trục đường giao thông rộng thoáng kết nối từ dự án Mega City 2 đến khu công nghiệp",
    caption: "Trục đường Tôn Đức Thắng / đường 25C kết nối nhanh từ Mega City 2 đến cổng KCN",
  },
  {
    src: IMG_NEWS38["3"],
    alt: "Toàn cảnh khu công nghiệp Nhơn Trạch với hàng chục nghìn lao động và chuyên gia",
    caption: "KCN Nhơn Trạch thu hút hàng trăm doanh nghiệp FDI và hơn 120.000 lao động chất lượng cao",
  },
  {
    src: IMG_NEWS38["4"],
    alt: "Mẫu nhà phố hiện đại phù hợp cho thuê chuyên gia tại khu đô thị Mega City 2",
    caption: "Nhà phố liên kế tại Mega City 2 phù hợp xây dựng cho chuyên gia KCN thuê dài hạn",
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

// ─── KCN data ──────────────────────────────────────────────────────────────
const KCN_LIST = [
  { name: "KCN Nhơn Trạch 1",                           area: "~430 ha",  dist: "~3 km",   road: "Đường Tôn Đức Thắng (25B)" },
  { name: "KCN Nhơn Trạch 2 (Lộc Khang, Nhơn Phú)",    area: "~350 ha",  dist: "~3,5 km", road: "Đường 319 / Tôn Đức Thắng" },
  { name: "KCN Nhơn Trạch 3",                           area: "~690 ha",  dist: "~4 km",   road: "Đại lộ 25C / Đường 319" },
  { name: "KCN Nhơn Trạch 5",                           area: "~300 ha",  dist: "~5 km",   road: "Đường 25C / Đường Hùng Vương" },
  { name: "KCN Nhơn Trạch 6",                           area: "~315 ha",  dist: "~5,5 km", road: "Đại lộ 25C" },
  { name: "KCN Dệt may Nhơn Trạch",                     area: "~184 ha",  dist: "~4 km",   road: "Đường ĐT 769 (Lý Thái Tổ)" },
  { name: "KCN Ông Kèo",                                area: "~823 ha",  dist: "~9 km",   road: "Đường Hùng Vương / Đường liên cảng" },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function KetNoiMegaCity2KCNPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Mega City 2 và các KCN Nhơn Trạch</span>
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
              Kết nối từ Mega City 2 đến các khu công nghiệp Nhơn Trạch: Tiềm năng cho thuê và an cư
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích vị trí{" "}
              <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">
                Mega City 2 Nhơn Trạch
              </a>{" "}
              trong bối cảnh 9 khu công nghiệp lớn bao quanh — khoảng cách thực tế, mô hình
              khai thác cho thuê và 4 lợi thế so với nhà trọ tự phát ven KCN.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to sơ đồ kết nối Mega City 2 và KCN"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS38["1"]}
                alt="Sơ đồ kết nối giao thông giữa Mega City 2 và cụm 9 khu công nghiệp Nhơn Trạch"
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
              Mega City 2 tọa lạc ở vị trí trung tâm, bao quanh bởi 9 KCN lớn trong bán kính 3–10 km
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
                    ["#vai-tro",      "Vai trò KCN với đô thị Mega City 2"],
                    ["#khoang-cach",  "1. Khoảng cách đến 9 KCN Nhơn Trạch"],
                    ["#bang-kcn",     "2. Bảng tổng hợp KCN bao quanh"],
                    ["#mo-hinh",      "3. Mô hình khai thác cho thuê"],
                    ["#loi-the",      "4. Lợi thế so với nhà trọ tự phát"],
                    ["#xay-nha-cho-thue","5. Kinh nghiệm xây nhà cho thuê"],
                    ["#faq",          "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Vai trò KCN */}
              <section className="mb-12" id="vai-tro">
                <SectionHeading>Vai trò của các khu công nghiệp đối với đô thị Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Huyện Nhơn Trạch được mệnh danh là một trong những "thủ phủ công nghiệp" lớn
                    nhất vùng kinh tế trọng điểm phía Nam với 9 khu công nghiệp tập trung quy mô
                    lớn, thu hút hàng trăm doanh nghiệp FDI và tạo việc làm cho hơn{" "}
                    <strong>120.000 chuyên gia, kỹ sư và công nhân</strong>.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tọa lạc tại vùng lõi đô thị của xã Phú Hội và Long Tân, Mega City 2 (84 ha)
                    nằm ở vị trí trung tâm, bao quanh bởi các cụm KCN hiện hữu. Mối liên kết này
                    tạo ra 3 giá trị cốt lõi:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { icon: "🏠", title: "Nguồn cầu ở thực",      desc: "120.000+ chuyên gia và kỹ sư KCN luôn có nhu cầu tìm kiếm không gian sống đồng bộ, an ninh" },
                      { icon: "💵", title: "Khai thác dòng tiền",    desc: "Cho thuê nhà phố, căn hộ mini, shophouse phục vụ chuyên gia và cư dân KCN ổn định lâu dài" },
                      { icon: "🚗", title: "Đi làm thuận tiện",      desc: "Khoảng cách 5–10 phút đến KCN giúp cư dân không lo ùn tắc giao thông mỗi ngày" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 text-center hover:border-amber-300 transition-colors">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <InfoBox>
                    <strong>Lưu ý:</strong> Khoảng cách và thời gian di chuyển trong bài mang
                    tính tham khảo theo điều kiện giao thông bình thường. Số lượng lao động
                    là con số tổng hợp từ nguồn công khai.
                  </InfoBox>
                </div>
              </section>

              {/* 1. Khoảng cách */}
              <section className="mb-12">
                <SectionHeading id="khoang-cach">1. Khoảng cách thực tế từ Mega City 2 đến 9 KCN Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hệ thống giao thông dạng bàn cờ bao quanh dự án — kết nối trực tiếp với
                    đường Tôn Đức Thắng, đường 25C và đường 319 — giúp di chuyển đến các KCN
                    diễn ra nhanh chóng:
                  </p>

                  <div className="space-y-2">
                    {[
                      { kcn: "KCN Nhơn Trạch 1 & 2",          dist: "2,5–3,5 km", time: "5–7 phút",  road: "Đường Tôn Đức Thắng hoặc đường 319" },
                      { kcn: "KCN Nhơn Trạch 3",               dist: "3,5–4,5 km", time: "7–10 phút", road: "Đại lộ 25C / đường 319" },
                      { kcn: "KCN Nhơn Trạch 5 & 6",           dist: "4,5–6 km",   time: "10–12 phút",road: "Đường 25C hoặc đường Hùng Vương" },
                      { kcn: "KCN Dệt May Nhơn Trạch",         dist: "3–4 km",     time: "7–9 phút",  road: "Đường Lý Thái Tổ và Huỳnh Văn Nghệ" },
                      { kcn: "KCN Ông Kèo (cảng biển)",        dist: "8–10 km",    time: "15–18 phút",road: "Đường Hùng Vương / đường liên cảng" },
                    ].map((item) => (
                      <div key={item.kcn} className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-300 transition-colors">
                        <div className="flex-shrink-0 text-center w-24">
                          <p className="font-black text-amber-600 text-sm">{item.dist}</p>
                          <p className="text-slate-400 text-[11px]">{item.time}</p>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-slate-800 text-sm">{item.kcn}</p>
                          <p className="text-slate-500 text-xs">Qua: {item.road}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS38["2"]}
                alt="Trục đường giao thông rộng thoáng kết nối từ dự án Mega City 2 đến khu công nghiệp"
                caption="Trục đường Tôn Đức Thắng / đường 25C kết nối nhanh từ Mega City 2 đến cổng KCN"
                images={images}
                index={1}
                onOpen={openLightbox}
              />

              {/* 2. Bảng KCN */}
              <section className="mb-12">
                <SectionHeading id="bang-kcn">2. Bảng tổng hợp các khu công nghiệp bao quanh Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[560px]">
                      <thead>
                        <tr className="bg-amber-500 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Tên KCN</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-20">Quy mô</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-24">Cách MC2</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Tuyến đường chính</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {KCN_LIST.map((kcn, i) => (
                          <tr key={kcn.name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700 text-sm">{kcn.name}</td>
                            <td className="px-4 py-3 text-slate-600 text-sm">{kcn.area}</td>
                            <td className="px-4 py-3 text-amber-700 font-bold text-sm">{kcn.dist}</td>
                            <td className="px-4 py-3 text-slate-600 text-xs">{kcn.road}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-500 italic mt-2">
                      Khoảng cách mang tính tham khảo theo đường di chuyển thực tế. Quy mô KCN
                      được tổng hợp từ nguồn công khai và có thể thay đổi.
                    </p>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS38["3"]}
                alt="Toàn cảnh khu công nghiệp Nhơn Trạch với hàng chục nghìn lao động và chuyên gia"
                caption="KCN Nhơn Trạch thu hút hàng trăm doanh nghiệp FDI và hơn 120.000 lao động chất lượng cao"
                images={images}
                index={2}
                onOpen={openLightbox}
              />

              {/* 3. Mô hình khai thác */}
              <section className="mb-12">
                <SectionHeading id="mo-hinh">3. Các mô hình khai thác kinh doanh và cho thuê tiềm năng</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhờ vị trí liền kề chuỗi KCN lớn, đất nền và nhà phố tại Mega City 2 có
                    tính đa dụng cao trong việc tạo ra dòng tiền khai thác:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: "🏠",
                        n: 1,
                        title: "Cho thuê nhà nguyên căn dành cho chuyên gia và kỹ sư",
                        color: "border-blue-200 bg-blue-50",
                        details: [
                          "Đối tượng: Kỹ sư trưởng, giám đốc nhà máy, chuyên gia nước ngoài (Hàn Quốc, Nhật Bản, Đài Loan) tại KCN 1, 2, 3, 5, 6",
                          "Mô hình: Nhà phố liên kế 1 trệt 2 lầu đồng bộ kiến trúc, hoàn thiện nội thất hiện đại, có gara ô tô riêng",
                          "Mức giá tham khảo: Dao động từ 8–15 triệu đồng/tháng/căn tùy mức độ đầu tư nội thất",
                        ],
                      },
                      {
                        icon: "🛏️",
                        n: 2,
                        title: "Mô hình căn hộ dịch vụ mini / Nhà trọ tiêu chuẩn cao",
                        color: "border-emerald-200 bg-emerald-50",
                        details: [
                          "Đối tượng: Chuyên viên văn phòng, nhân viên kỹ thuật, quản lý chuyền sản xuất",
                          "Mô hình: Lô đất 100–150m², xây nhà 3 tầng chia 6–10 phòng khép kín có gác lửng, đồng hồ điện nước riêng và camera an ninh",
                          "Tính ổn định cao do nhu cầu thuê liên tục từ nguồn lao động KCN",
                        ],
                      },
                      {
                        icon: "🏪",
                        n: 3,
                        title: "Kinh doanh thương mại dịch vụ tại Shophouse trục đường lớn",
                        color: "border-amber-200 bg-amber-50",
                        details: [
                          "Vị trí: Lô mặt tiền trục đường cảnh quan lộ giới 24–32m",
                          "Ngành phù hợp: Quán cafe sân vườn, quán ăn gia đình, siêu thị tiện lợi (WinMart, Bách Hóa Xanh), nhà thuốc, văn phòng logistics",
                          "Nhà phố thương mại tầng trệt 3,9m+ phục vụ nhu cầu tiêu dùng hàng ngày của cư dân và lao động KCN",
                        ],
                      },
                    ].map((item) => (
                      <div key={item.n} className={`rounded-2xl border p-5 ${item.color}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xl">{item.icon}</span>
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center flex-shrink-0">
                              {item.n}
                            </span>
                            <p className="font-black text-slate-800 text-sm">{item.title}</p>
                          </div>
                        </div>
                        <ul className="space-y-1.5">
                          {item.details.map((d, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                              <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/ha-tang-ky-thuat-mega-city-2">
                      Hạ tầng kỹ thuật Mega City 2: Điện âm, nước máy và thoát nước →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS38["4"]}
                alt="Mẫu nhà phố hiện đại phù hợp cho thuê chuyên gia tại khu đô thị Mega City 2"
                caption="Nhà phố liên kế tại Mega City 2 phù hợp xây dựng cho chuyên gia KCN thuê dài hạn"
                images={images}
                index={3}
                onOpen={openLightbox}
              />

              {/* 4. Lợi thế */}
              <section className="mb-12">
                <SectionHeading id="loi-the">4. Lợi thế của Mega City 2 so với các khu nhà trọ tự phát ven KCN</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhiều người lao động và chuyên gia tại Nhơn Trạch đang có xu hướng dịch
                    chuyển từ nhà trọ chật hẹp trong hẻm sâu ra các khu đô thị quy hoạch đồng
                    bộ nhờ 4 ưu điểm vượt trội:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        icon: "⚡",
                        title: "Hạ tầng hoàn chỉnh",
                        desc: "Điện âm Mega City 2, nước máy Dowaco ổn định, đường nội bộ 13–32m trải nhựa êm ái, ô tô đỗ tận cửa nhà — không có tình trạng cúp điện hay mất nước bất ngờ",
                        color: "border-blue-200 bg-blue-50",
                      },
                      {
                        icon: "🌳",
                        title: "Không gian sống trong lành",
                        desc: "Công viên trung tâm 2,1 ha và mảng cây xanh phân tán giúp tái tạo năng lượng sau những giờ làm việc căng thẳng trong nhà máy",
                        color: "border-emerald-200 bg-emerald-50",
                      },
                      {
                        icon: "🔒",
                        title: "An ninh và văn minh",
                        desc: "Khu đô thị có quy hoạch rõ ràng, tách biệt khỏi bụi bặm và tiếng ồn trực tiếp từ dây chuyền sản xuất công nghiệp nặng",
                        color: "border-amber-200 bg-amber-50",
                      },
                      {
                        icon: "🏥",
                        title: "Tiện ích dân sinh đầy đủ",
                        desc: "Bán kính 1,5 km tiếp cận ngay chợ Phú Hội, trung tâm y tế, trường học và hệ thống siêu thị — đáp ứng mọi nhu cầu thiết yếu hàng ngày",
                        color: "border-purple-200 bg-purple-50",
                      },
                    ].map((item) => (
                      <div key={item.title} className={`rounded-2xl border p-5 ${item.color}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">{item.icon}</span>
                          <p className="font-black text-slate-800 text-sm">{item.title}</p>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/quy-cach-xay-dung-mega-city-2">
                      Tiêu chuẩn và quy cách xây dựng tại Mega City 2 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* 5. Kinh nghiệm xây nhà cho thuê */}
              <section className="mb-12">
                <SectionHeading id="xay-nha-cho-thue">5. Kinh nghiệm xây nhà cho thuê tối ưu tại Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu bạn đang sở hữu đất nền tại dự án và có kế hoạch xây dựng nhà đón
                    nguồn khách thuê từ các KCN, đây là những kinh nghiệm thực tế cần lưu ý:
                  </p>

                  <H3>Tối ưu hóa công năng</H3>
                  <BulletList
                    items={[
                      "Chọn mẫu nhà 1 trệt 2 lầu có khoảng lùi trước làm sân để xe máy rộng rãi",
                      "Tầng trệt bố trí phòng khách chung hoặc phòng ngủ cho người lớn tuổi, tầng lầu thiết kế phòng ngủ độc lập",
                      "Đảm bảo mỗi tầng có toilet riêng và thông gió giếng trời tự nhiên",
                    ]}
                  />

                  <H3>Lắp đặt hệ thống kiểm soát thông minh</H3>
                  <BulletList
                    items={[
                      "Khóa cửa vân tay hoặc mã số giúp chủ nhà quản lý từ xa dễ dàng",
                      "Camera giám sát hành lang và khu vực chung đảm bảo an toàn cho khách thuê",
                      "Hệ thống PCCC tự động (bình cứu hỏa, đầu báo khói) đáp ứng yêu cầu thuê nguyên căn",
                    ]}
                  />

                  <H3>Đăng ký định mức điện nước đúng quy định</H3>
                  <BulletList
                    items={[
                      "Làm thủ tục đăng ký đồng hồ điện hạ thế và nước máy theo đúng quy chuẩn",
                      "Áp dụng giá điện sinh hoạt chuẩn cho người thuê trọ — không được thu vượt giá trần quy định",
                      "Lắp đặt từng đồng hồ phụ cho mỗi phòng nếu chia thành nhiều đơn vị thuê",
                    ]}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/chi-phi-xay-nha-mega-city-2">
                      Chi phí xây nhà thực tế tại Mega City 2 Nhơn Trạch →
                    </LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-cach-xay-dung-mega-city-2">
                      Quy cách xây dựng Mega City 2 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về Mega City 2 và khu công nghiệp</SectionHeading>
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
                    { href: "/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach",label: "Mặt bằng phân lô Mega City 2" },
                    { href: "/tin-tuc/duong-di-tu-tphcm-den-mega-city-2",      label: "Đường đi từ TP.HCM đến Mega City 2" },
                    { href: "/tin-tuc/thu-tuc-chuyen-nhuong-mega-city-2",      label: "Thủ tục chuyển nhượng Mega City 2" },
                    { href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",          label: "Bảng giá Mega City 2 mới nhất" },
                    { href: "/tin-tuc/chi-phi-xay-nha-mega-city-2",            label: "Chi phí xây nhà Mega City 2" },
                    { href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2",           label: "Hạ tầng kỹ thuật Mega City 2" },
                    { href: "/tin-tuc/quy-cach-xay-dung-mega-city-2",          label: "Quy cách xây dựng Mega City 2" },
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
                    Mối liên kết chặt chẽ giữa Mega City 2 và các khu công nghiệp Nhơn Trạch
                    chính là nền tảng cho giá trị sử dụng thực tế và tính thanh khoản lâu dài
                    của dự án. Với khoảng cách chỉ 5–10 phút di chuyển đến 9 KCN lớn cùng quy
                    hoạch hạ tầng đồng bộ 84 ha, Mega City 2 là lựa chọn phù hợp cho cả nhu
                    cầu an cư lẫn bài toán đầu tư khai thác dòng tiền cho thuê bền vững.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tuy nhiên, hiệu quả đầu tư thực tế phụ thuộc vào vị trí lô đất cụ thể,
                    chất lượng thi công, chiến lược cho thuê và diễn biến thị trường tại từng
                    thời điểm. Người mua nên đánh giá kỹ trước khi đưa ra quyết định.
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
                      { href: "/mega-city-2/vi-tri",    label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/mat-bang",  label: "Mặt bằng tổng thể" },
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
                      { label: "Đường đi từ TP.HCM đến Mega City 2", href: "/tin-tuc/duong-di-tu-tphcm-den-mega-city-2" },
                      { label: "Chi phí xây nhà Mega City 2",         href: "/tin-tuc/chi-phi-xay-nha-mega-city-2" },
                      { label: "Quy cách xây dựng Mega City 2",       href: "/tin-tuc/quy-cach-xay-dung-mega-city-2" },
                      { label: "Bảng giá Mega City 2 mới nhất",       href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn đầu tư</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Nhận tư vấn vị trí lô đất đẹp và phương án khai thác tại Mega City 2.
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
              Bạn muốn tìm hiểu cơ hội đầu tư đất nền Mega City 2 gần KCN?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Liên hệ để nhận tư vấn vị trí lô đất phù hợp kinh doanh và thông tin bảng giá
              mới nhất.
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
              href: "/tin-tuc/duong-di-tu-tphcm-den-mega-city-2",
              title: "Khoảng Cách Từ Mega City 2 Đến Trung Tâm TP.HCM",
              description: "3 hướng đường đi từ TP.HCM đến Mega City 2: phà Cát Lái, cao tốc và cầu Nhơn Trạch.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/chi-phi-xay-nha-mega-city-2",
              title: "Chi Phí Xây Nhà Thực Tế Tại Mega City 2 Nhơn Trạch 2026",
              description: "Cập nhật đơn giá xây thô, trọn gói và ước tính chi phí thực tế.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat",
              title: "Hạ Tầng Giao Thông Nhơn Trạch Mới Nhất 2026",
              description: "Cập nhật các tuyến giao thông trọng điểm tại khu vực Nhơn Trạch.",
              tag: "Thị trường",
            },
            {
              href: "/mega-city-2",
              title: "Mega City 2 Nhơn Trạch – Tổng Quan Dự Án",
              description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và sản phẩm.",
              tag: "Tin dự án",
            },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}
