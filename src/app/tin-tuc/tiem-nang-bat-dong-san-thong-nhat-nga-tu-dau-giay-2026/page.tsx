"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS54 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/tiem-nang-bat-dong-san-thong-nhat-nga-tu-dau-giay-2026`;
const PUBLISHED     = "18/09/2026";
const PUBLISHED_ISO = "2026-09-18";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Tiềm Năng Bất Động Sản Huyện Thống Nhất 2026: Vì Sao Ngã Tư Dầu Giây Là \"Tọa Độ Vàng\" Hút Dòng Vốn?",
  description:
    "Phân tích toàn cảnh thị trường BĐS huyện Thống Nhất 2026: Hạ tầng ngã tư Dầu Giây, quy hoạch ĐT 769 kết nối sân bay Long Thành và sức hút của dự án The Link City.",
  image: [IMG_NEWS54["1"], IMG_NEWS54["2"], IMG_NEWS54["4"]],
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
  keywords:
    "Bất động sản Thống Nhất, The Link City Dầu Giây, Đất nền Thống Nhất Đồng Nai, Quy hoạch huyện Thống Nhất 2030, Giá đất ngã tư Dầu Giây",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Huyện Thống Nhất khi nào chính thức lên Thị xã?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo định hướng quy hoạch phát triển đô thị tỉnh Đồng Nai giai đoạn 2026–2030, huyện Thống Nhất đang hoàn thiện các tiêu chuẩn hạ tầng, dân số và kinh tế đô thị để nâng cấp thị trấn Dầu Giây và các xã phụ cận lên Đô thị loại IV và thành lập Thị xã Dầu Giây trước năm 2030.",
      },
    },
    {
      "@type": "Question",
      name: "Tuyến đường ĐT 769 kết nối từ Dầu Giây về sân bay Long Thành đã triển khai đến đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuyến đường ĐT 769 đang được tỉnh Đồng Nai ưu tiên nguồn vốn nâng cấp, mở rộng lên 4–6 làn xe (lộ giới 45m). Khi hoàn thành, đây sẽ là tuyến đường huyết mạch kết nối trực tiếp từ Thống Nhất vào Sân bay Quốc tế Long Thành chỉ mất khoảng 15–20 phút di chuyển.",
      },
    },
    {
      "@type": "Question",
      name: "Mua đất tại The Link City có hỗ trợ công chứng và sang tên sổ tận nơi không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Bộ phận pháp lý của Kim Oanh Land hỗ trợ trọn gói thủ tục nộp hồ sơ công chứng tại Văn phòng Công chứng nhà nước tại huyện Thống Nhất và thực hiện thủ tục đăng ký biến động sang tên sổ hồng chính chủ cho khách hàng mà không phát sinh thêm chi phí dịch vụ.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức",   item: `${BASE_URL}/tin-tuc` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tiềm năng BĐS huyện Thống Nhất ngã tư Dầu Giây 2026",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS54["1"],
    alt: "Bản đồ định hướng phát triển không gian đô thị và hạ tầng giao thông huyện Thống Nhất Đồng Nai 2026",
    caption: "Huyện Thống Nhất với tâm điểm Dầu Giây giữ vị trí chiến lược kết nối liên vùng Đông Nam Bộ.",
  },
  {
    src: IMG_NEWS54["2"],
    alt: "Sa bàn trục đường thương mại kết nối ngã tư Quốc lộ 1A dự án The Link City Dầu Giây",
    caption: "Vị trí mặt tiền kết nối trực tiếp các trục quốc lộ huyết mạch mang lại tiềm năng kinh doanh vượt trội.",
  },
  {
    src: IMG_NEWS54["3"],
    alt: "Khu phức hợp công nghiệp công nghệ cao và trung tâm logistics hiện đại tại huyện Thống Nhất Đồng Nai",
    caption: "Công nghiệp và dịch vụ logistics là động lực kép thúc đẩy kinh tế Thống Nhất bứt phá.",
  },
  {
    src: IMG_NEWS54["4"],
    alt: "Hạ tầng thực tế đường nội khu trải nhựa hoàn thiện 100 phần trăm tại The Link City Dầu Giây",
    caption: "Hạ tầng đô thị chuẩn mực hoàn thiện 100% – Yếu tố vượt trội so với mặt bằng chung khu vực.",
  },
  {
    src: IMG_NEWS54["5"],
    alt: "Tập sổ hồng thực tế từng nền dự án The Link City Dầu Giây Thống Nhất Đồng Nai",
    caption: "Pháp lý minh bạch với sổ hồng riêng từng thửa đất sẵn sàng công chứng sang tên.",
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

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-6">{children}</h3>;
}

function BulletList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="space-y-2.5 mb-4">
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
  type?: "info" | "warn" | "success";
}) {
  const s =
    type === "warn"
      ? "bg-amber-50 border-amber-200 text-amber-800"
      : type === "success"
      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
      : "bg-primary-50 border-primary-200 text-primary-800";
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
      className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all"
    >
      {children}
    </a>
  );
}

// ─── Comparison data ───────────────────────────────────────────────────────
const PRICE_TABLE = [
  {
    area:    "Thị trấn Dầu Giây (Thống Nhất)",
    legal:   "Sổ hồng riêng từng nền",
    infra:   "Hoàn chỉnh 100% (Chuẩn 1/500)",
    price:   "19,5 – 23,0 triệu/m²",
    note:    "Rất cao — Vùng trũng giá, đón cao tốc & lên thị xã",
    color:   "emerald",
  },
  {
    area:    "Huyện Trảng Bom",
    legal:   "Sổ hồng riêng",
    infra:   "Đô thị hóa dày đặc, ít quỹ đất mới",
    price:   "28 – 40 triệu/m²",
    note:    "Trung bình — Đã tăng trưởng ổn định",
    color:   "blue",
  },
  {
    area:    "TP. Long Khánh",
    legal:   "Sổ hồng riêng",
    infra:   "Đô thị loại III hiện hữu",
    price:   "35 – 55 triệu/m²",
    note:    "Ổn định — Biên độ tăng chậm lại",
    color:   "slate",
  },
  {
    area:    "Huyện Long Thành",
    legal:   "Sổ hồng / HĐMB",
    infra:   "Đang thi công sân bay",
    price:   "40 – 70 triệu/m²",
    note:    "Tốt nhưng vốn đầu tư ban đầu rất lớn",
    color:   "amber",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function ThongNhatBDSPage() {
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
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a>
              <span className="text-slate-300">/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium line-clamp-1">Tiềm năng BĐS huyện Thống Nhất 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Thị trường
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 11 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Tiềm Năng Bất Động Sản Huyện Thống Nhất 2026: Vì Sao Ngã Tư Dầu Giây Là "Tọa Độ Vàng" Hút Dòng Vốn?
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích toàn cảnh thị trường BĐS huyện Thống Nhất 2026: Hạ tầng ngã tư Dầu Giây hội tụ 3 cao tốc,
              quy hoạch ĐT 769 kết nối sân bay Long Thành và vùng trũng giá cuối cùng tại{" "}
              <a href="/the-link-city" className="text-primary-700 font-semibold hover:underline">
                The Link City
              </a>.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to bản đồ quy hoạch huyện Thống Nhất"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS54["1"]}
                alt="Bản đồ định hướng phát triển không gian đô thị và hạ tầng giao thông huyện Thống Nhất Đồng Nai 2026"
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
              Huyện Thống Nhất với tâm điểm Dầu Giây giữ vị trí chiến lược kết nối liên vùng Đông Nam Bộ
            </p>
          </div>
        </div>

        {/* ── Main ──────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Article ───────────────────────────────────── */}
            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-1.5 text-sm text-slate-600 columns-1 sm:columns-2 gap-x-8">
                  {[
                    ["#su-troi-day",   "1. Sự trỗi dậy của huyện Thống Nhất"],
                    ["#ha-tang",       "2. Bộ 3 mạch máu hạ tầng ngã tư Dầu Giây"],
                    ["#logistics",     "3. Thủ phủ Logistics & KCN Dầu Giây"],
                    ["#so-sanh",       "4. Bảng so sánh giá đất các khu vực"],
                    ["#the-link-city", "5. The Link City: Dự án tiên phong"],
                    ["#chien-luoc",    "6. Chiến lược đón sóng dòng tiền"],
                    ["#faq",           "7. Câu hỏi thường gặp (FAQ)"],
                    ["#tai-lieu",      "8. Tải bản đồ quy hoạch & Tư vấn"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-primary-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* ── Section 1 ── */}
              <section className="mb-12" id="su-troi-day">
                <SectionHeading id="su-troi-day">
                  1. Sự Trỗi Dậy Của Huyện Thống Nhất: Từ "Vùng Đệm" Trở Thành Đầu Mối Kinh Tế
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trước đây, dòng tiền của giới đầu tư Đồng Nai thường đổ dồn về Nhơn Trạch,
                    Long Thành hoặc TP. Biên Hòa. Huyện Thống Nhất với trung tâm là thị trấn
                    Dầu Giây thường chỉ được xem là{" "}
                    <em>"trạm dừng chân"</em> trên đường thiên lý Bắc – Nam.
                  </p>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bước sang năm 2026, bản đồ dòng tiền đã{" "}
                    <strong className="text-slate-800">thay đổi hoàn toàn</strong> với 3 yếu tố
                    cộng hưởng:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        icon: "🛣️",
                        title: "Hạ tầng giao thông quốc gia hội tụ",
                        body: "Dầu Giây chính thức trở thành điểm giao thoa của 3 tuyến cao tốc lớn nhất miền Nam: Cao tốc TP.HCM – Long Thành – Dầu Giây, Dầu Giây – Phan Thiết và chuẩn bị khởi công Dầu Giây – Tân Phú.",
                        color: "border-blue-200 bg-blue-50",
                        hd: "text-blue-800",
                        bd: "text-blue-700",
                      },
                      {
                        icon: "💰",
                        title: "Quỹ đất sạch giá mềm — Vùng trũng giá cuối cùng",
                        body: "Trong khi giá đất tại Biên Hòa vượt ngưỡng 60–100 triệu/m², Long Thành chạm mốc 35–50 triệu/m², thì khu vực trung tâm Thống Nhất vẫn đang ở \"vùng trũng giá\" chỉ từ 19–23 triệu/m².",
                        color: "border-emerald-200 bg-emerald-50",
                        hd: "text-emerald-800",
                        bd: "text-emerald-700",
                      },
                      {
                        icon: "🏙️",
                        title: "Định hướng quy hoạch lên Đô thị loại IV",
                        body: "Đề án nâng cấp thị trấn Dầu Giây và các xã phụ cận lên Thị xã giai đoạn 2026–2030 đang thu hút hàng loạt nguồn vốn đầu tư công để mở rộng đường sá, chỉnh trang đô thị và phát triển dịch vụ thương mại.",
                        color: "border-amber-200 bg-amber-50",
                        hd: "text-amber-800",
                        bd: "text-amber-700",
                      },
                    ].map((item) => (
                      <div key={item.title} className={`rounded-2xl border ${item.color} p-5 flex items-start gap-3`}>
                        <span className="text-2xl shrink-0">{item.icon}</span>
                        <div>
                          <p className={`font-black text-sm mb-1 ${item.hd}`}>{item.title}</p>
                          <p className={`text-sm leading-relaxed ${item.bd}`}>{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Section 2 ── */}
              <section className="mb-12" id="ha-tang">
                <SectionHeading id="ha-tang">
                  2. Bộ 3 "Mạch Máu" Hạ Tầng Định Hình Vị Thế Số 1 Của Ngã Tư Dầu Giây
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không một địa phương nào tại Đông Nam Bộ sở hữu mật độ giao thông đối ngoại
                    dày đặc và quy mô như ngã tư Dầu Giây:
                  </p>

                  {/* Hub diagram */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <p className="text-center font-black text-slate-700 text-sm mb-6 uppercase tracking-wider">
                      Tâm Điểm Kết Nối Giao Thông — Ngã Tư Dầu Giây
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        {
                          icon: "🛤️",
                          title: "Quốc lộ 1A & Quốc lộ 20",
                          desc: "Huyết mạch Bắc-Nam & Tây Nguyên — Cửa ngõ vận chuyển nông sản từ Tây Nguyên xuống cụm cảng Cái Mép – Thị Vải",
                          color: "border-blue-300 bg-blue-50",
                          hd: "text-blue-800",
                        },
                        {
                          icon: "✈️",
                          title: "Trục đường ĐT 769 (Lộ giới 45m)",
                          desc: "Kết nối thẳng Sân bay Quốc tế Long Thành — Chỉ 15–20 phút từ ngã tư Dầu Giây vào sân bay",
                          color: "border-emerald-300 bg-emerald-50",
                          hd: "text-emerald-800",
                        },
                        {
                          icon: "🚗",
                          title: "Hệ thống cụm Cao tốc",
                          desc: "Long Thành–Dầu Giây, Dầu Giây–Phan Thiết & Dầu Giây–Tân Phú (sắp khởi công)",
                          color: "border-amber-300 bg-amber-50",
                          hd: "text-amber-800",
                        },
                      ].map((item) => (
                        <div key={item.title} className={`rounded-xl border ${item.color} p-4`}>
                          <span className="text-2xl block mb-2">{item.icon}</span>
                          <p className={`font-black text-sm mb-2 ${item.hd}`}>{item.title}</p>
                          <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <BulletList
                    items={[
                      <><strong>Giao lộ QL1A & QL20:</strong> Trục xương sống vận tải hàng hóa xuyên suốt Việt Nam và cửa ngõ duy nhất vận chuyển nông sản, khoáng sản từ vùng Tây Nguyên xuống cụm cảng nước sâu Cái Mép – Thị Vải.</>,
                      <><strong>Tuyến ĐT 769 mở rộng:</strong> Tuyến đường chiến lược kết nối trực tiếp từ trung tâm Dầu Giây chạy thẳng vào Cảng HKQT Long Thành, đưa Dầu Giây trở thành "sân sau" hoàn hảo cho dịch vụ hậu cần sân bay.</>,
                      <><strong>Cụm nút giao Cao tốc Dầu Giây – Phan Thiết & Dầu Giây – Tân Phú:</strong> Giúp việc giao thương giữa TP.HCM, vùng biển miền Trung và Đà Lạt hội tụ tại một điểm trung chuyển duy nhất.</>,
                    ]}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/vi-tri">
                      📍 Xem chi tiết bản đồ kết nối hạ tầng giao thông →
                    </LinkBtn>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS54["2"]}
                    alt="Sa bàn trục đường thương mại kết nối ngã tư Quốc lộ 1A dự án The Link City Dầu Giây"
                    caption="Vị trí mặt tiền kết nối trực tiếp các trục quốc lộ huyết mạch mang lại tiềm năng kinh doanh vượt trội."
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 3 ── */}
              <section className="mb-12" id="logistics">
                <SectionHeading id="logistics">
                  3. Thủ Phủ Logistics & Công Nghiệp Mới: Cú Hích Từ KCN Dầu Giây & Chợ Đầu Mối
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sức mạnh kinh tế của huyện Thống Nhất không dừng lại ở hạ tầng giao thông,
                    mà được bảo chứng bởi nền sản xuất công nghiệp và chuỗi thương mại sầm uất
                    hiện hữu:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      {
                        icon: "🏭",
                        title: "Khu công nghiệp Dầu Giây — 330 ha",
                        items: [
                          "Lấp đầy hơn 85% diện tích với hàng loạt doanh nghiệp đa quốc gia (Nhật Bản, Hàn Quốc, Đức...)",
                          "Mở rộng giai đoạn 2 thu hút thêm hơn 20.000 kỹ sư, chuyên gia và công nhân lành nghề",
                          "Tạo áp lực khổng lồ lên nhu cầu nhà ở chất lượng cao trong bán kính 5km",
                        ],
                        color: "border-blue-200 bg-blue-50",
                        hd: "text-blue-800",
                      },
                      {
                        icon: "🌾",
                        title: "Chợ Đầu mối Nông sản Dầu Giây — 50 ha",
                        items: [
                          "Chợ đầu mối nông sản quy mô hiện đại nhất Đông Nam Bộ",
                          "Điểm trung chuyển hàng nghìn tấn nông sản mỗi đêm từ Lâm Đồng, Bình Thuận về TP.HCM",
                          "Tạo ra tầng lớp tiểu thương và chủ doanh nghiệp có sẵn dòng tiền mặt dồi dào",
                        ],
                        color: "border-emerald-200 bg-emerald-50",
                        hd: "text-emerald-800",
                      },
                    ].map((item) => (
                      <div key={item.title} className={`rounded-2xl border ${item.color} p-5`}>
                        <span className="text-2xl block mb-2">{item.icon}</span>
                        <p className={`font-black text-sm mb-3 ${item.hd}`}>{item.title}</p>
                        <ul className="space-y-2">
                          {item.items.map((li) => (
                            <li key={li} className="flex items-start gap-2 text-slate-600 text-xs leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                              {li}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <InfoBox type="success">
                    <strong>Quy luật bất biến:</strong> Nơi nào có công nghiệp phát triển và
                    dòng tiền thương mại sôi động, nơi đó bất động sản sở hữu{" "}
                    <strong>tính thanh khoản thật</strong> và giá trị khai thác kinh doanh bền
                    vững.
                  </InfoBox>

                  <ArticleFigure
                    src={IMG_NEWS54["3"]}
                    alt="Khu phức hợp công nghiệp công nghệ cao và trung tâm logistics hiện đại tại huyện Thống Nhất Đồng Nai"
                    caption="Công nghiệp và dịch vụ logistics là động lực kép thúc đẩy kinh tế Thống Nhất bứt phá."
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 4 ── */}
              <section className="mb-12" id="so-sanh">
                <SectionHeading id="so-sanh">
                  4. Bảng So Sánh Mặt Bằng Giá Đất Thống Nhất Với Các Khu Vực Lân Cận
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Để thấy rõ cơ hội đầu tư, hãy so sánh mặt bằng giá đất nền đô thị đã có
                    sổ hồng tại Thống Nhất so với các địa phương lân cận tại Đồng Nai:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[680px]">
                      <thead>
                        <tr className="bg-slate-700 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Khu vực</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Pháp lý</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Hạ tầng</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Giá TB</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Biên độ tăng</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {PRICE_TABLE.map((row, i) => {
                          const rowBg = i === 0 ? "bg-emerald-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50/50";
                          const textColor = i === 0 ? "text-emerald-700 font-bold" : "text-slate-600";
                          const noteColor = i === 0 ? "text-emerald-700 font-semibold" : "text-slate-500";
                          return (
                            <tr key={row.area} className={rowBg}>
                              <td className={`px-4 py-3 text-sm ${i === 0 ? "font-black text-emerald-800" : "font-semibold text-slate-700"}`}>
                                {i === 0 && <span className="inline-block bg-emerald-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded mr-1.5 align-middle">HOT</span>}
                                {row.area}
                              </td>
                              <td className={`px-4 py-3 text-xs ${textColor}`}>{row.legal}</td>
                              <td className={`px-4 py-3 text-xs ${textColor}`}>{row.infra}</td>
                              <td className={`px-4 py-3 text-sm font-bold ${i === 0 ? "text-emerald-700" : "text-slate-700"}`}>{row.price}</td>
                              <td className={`px-4 py-3 text-xs ${noteColor}`}>{row.note}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <InfoBox type="success">
                    <strong>👉 Nhận định:</strong> Với mức giá chỉ từ{" "}
                    <strong>1,85 tỷ đồng/nền</strong> (tương đương 19,5 triệu/m²) tại The Link
                    City, đây là mức giá chỉ bằng một nửa so với Trảng Bom hay Long Khánh,
                    trong khi vị thế hạ tầng của Dầu Giây hoàn toàn không hề thua kém.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/bang-gia">
                      💰 Tra cứu chi tiết giỏ hàng và bảng giá niêm yết →
                    </LinkBtn>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS54["4"]}
                    alt="Hạ tầng thực tế đường nội khu trải nhựa hoàn thiện 100 phần trăm tại The Link City Dầu Giây"
                    caption="Hạ tầng đô thị chuẩn mực hoàn thiện 100% – Yếu tố vượt trội so với mặt bằng chung khu vực."
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 5 ── */}
              <section className="mb-12" id="the-link-city">
                <SectionHeading id="the-link-city">
                  5. The Link City 21Ha: Dự Án Tiên Phong Đón Đầu Chu Kỳ Tăng Trưởng Mới
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Giữa lúc thị trường bất động sản Thống Nhất đang "khát" những khu đô thị
                    được đầu tư bài bản,{" "}
                    <strong className="text-primary-700">
                      The Link City (Khu dân cư A1-C1 Đô thị Dầu Giây)
                    </strong>{" "}
                    do Kim Oanh Land phát triển xuất hiện như một lời giải hoàn hảo:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        icon: "🏙️",
                        title: "Quy mô chuẩn đô thị",
                        body: "21 ha với 1.397 sản phẩm, tích hợp đầy đủ công viên cây xanh, cụm sân thể thao pickleball, sân bóng đá và Trung tâm thương mại dịch vụ 2,6 ha.",
                      },
                      {
                        icon: "📜",
                        title: "Pháp lý sạch 100%",
                        body: "Đã có văn bản phê duyệt 1/500, hoàn thành 100% nghĩa vụ tài chính và được cấp Sổ hồng riêng từng nền sở hữu lâu dài (ODT) theo Văn bản số 2505/UBND-KTN của UBND tỉnh Đồng Nai.",
                      },
                      {
                        icon: "💳",
                        title: "Bài toán tài chính nhẹ nhàng",
                        body: "Khách hàng chỉ cần chuẩn bị 30% vốn tự có (khoảng 550 triệu), 70% còn lại được ngân hàng OCB / Vietcombank tài trợ vay trong 20 năm với lịch trả nợ giảm dần chỉ từ 12–14 triệu/tháng.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-primary-200 hover:bg-primary-50/30 transition-colors">
                        <span className="text-2xl shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026">
                      📑 Xem trích lục công văn 2505 & mẫu sổ hồng thực tế →
                    </LinkBtn>
                    <LinkBtn href="/the-link-city/thanh-toan">
                      🧮 Tính dòng tiền vay mua đất →
                    </LinkBtn>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS54["5"]}
                    alt="Tập sổ hồng thực tế từng nền dự án The Link City Dầu Giây Thống Nhất Đồng Nai"
                    caption="Pháp lý minh bạch với sổ hồng riêng từng thửa đất sẵn sàng công chứng sang tên."
                    images={images}
                    index={4}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 6 ── */}
              <section className="mb-12" id="chien-luoc">
                <SectionHeading id="chien-luoc">
                  6. Chiến Lược Đón Sóng Dòng Tiền: Đâu Là Phân Khúc Thanh Khoản Tốt Nhất?
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dành cho các nhà đầu tư đang chuẩn bị cơ cấu vốn tại huyện Thống Nhất
                    trong năm 2026:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        priority: "ƯU TIÊN SỐ 1",
                        title: "Đất nền liên kế 95m² – 100m² (Block LK17A, LK17B)",
                        reason: "Tổng mức đầu tư vừa vặn (1,85–2,2 tỷ). Đây là phân khúc có tính thanh khoản nhanh nhất vì phục vụ đúng nhu cầu ở thực của các gia đình trẻ và chuyên gia KCN Dầu Giây.",
                        color:  "border-primary-400 bg-primary-50",
                        hd:     "text-primary-800",
                        badge:  "bg-primary-600",
                      },
                      {
                        priority: "ƯU TIÊN SỐ 2",
                        title: "Lô góc 2 mặt tiền & Shophouse trục đường đôi",
                        reason: "Khai thác dòng tiền cho thuê từ 15–30 triệu/tháng đón đầu hàng chục nghìn lượt khách qua lại ngã tư Quốc lộ 1A mỗi ngày.",
                        color:  "border-amber-300 bg-amber-50",
                        hd:     "text-amber-800",
                        badge:  "bg-amber-500",
                      },
                    ].map((item) => (
                      <div key={item.priority} className={`rounded-2xl border-2 ${item.color} p-5`}>
                        <span className={`inline-block ${item.badge} text-white text-[9px] font-black px-2 py-1 rounded-full mb-3 tracking-widest`}>
                          {item.priority}
                        </span>
                        <p className={`font-black text-sm mb-2 ${item.hd}`}>{item.title}</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.reason}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="font-black text-slate-800 text-sm mb-3">⏱️ Thời gian nắm giữ lý tưởng: 18 – 36 tháng</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Để đón trọn 2 cú hích lớn:{" "}
                      <strong>Cao tốc Dầu Giây – Tân Phú thông xe kỹ thuật</strong> và{" "}
                      <strong>Đề án thành lập Thị xã Dầu Giây được Quốc hội thông qua</strong>.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/mat-bang">
                      📐 Xem bản vẽ quy hoạch chi tiết các block đẹp nhất →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 7: FAQ ── */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">
                  7. Các Câu Hỏi Thường Gặp Về Bất Động Sản Thống Nhất
                </SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details
                      key={name}
                      className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary-300 transition-colors"
                    >
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-primary-700 select-none">
                        <span className="leading-snug">{name}</span>
                        <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-primary-600 transition-transform group-open:rotate-180 text-xs">▼</span>
                      </summary>
                      <div className="px-6 pb-5 border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-[16px] leading-relaxed">{acceptedAnswer.text}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* ── Section 8 ── */}
              <section className="mb-12" id="tai-lieu">
                <SectionHeading id="tai-lieu">
                  8. Tải Bản Đồ Quy Hoạch Huyện Thống Nhất Đến 2030 & Đăng Ký Tư Vấn
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cơ hội sở hữu đất nền sổ hồng tại "vùng trũng giá" ngã tư Dầu Giây với
                    số vốn ban đầu chỉ từ{" "}
                    <strong className="text-primary-700">550 triệu đồng</strong> đang mở ra cho
                    những nhà đầu tư có tầm nhìn đi trước thị trường.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: "🗺️", title: "Bản đồ quy hoạch đến 2030", desc: "Quy hoạch sử dụng đất huyện Thống Nhất và định hướng phát triển đô thị Dầu Giây" },
                      { icon: "📊", title: "Báo cáo thị trường BĐS", desc: "Phân tích chuyên sâu về diễn biến giá đất Thống Nhất và so sánh với các khu vực lân cận" },
                      { icon: "💼", title: "Tư vấn chiến lược đầu tư", desc: "Phân tích portfolio và xây dựng chiến lược đầu tư phù hợp với từng mức vốn" },
                    ].map((item) => (
                      <div key={item.icon} className="rounded-2xl border border-primary-200 bg-primary-50 p-5 text-center">
                        <p className="text-2xl mb-2">{item.icon}</p>
                        <p className="font-black text-primary-800 text-sm mb-1">{item.title}</p>
                        <p className="text-primary-600 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-primary-200 bg-primary-50 p-6 space-y-3">
                    <p className="font-black text-primary-800 text-base">
                      LIÊN HỆ PHÒNG KINH DOANH KIM OANH ĐỒNG NAI
                    </p>
                    <div className="space-y-2 text-sm text-primary-700">
                      <p><strong>Dự án:</strong> The Link City Dầu Giây (KDC A1-C1 Đô thị Dầu Giây)</p>
                      <p>
                        <strong>Website:</strong>{" "}
                        <a href="https://kimoanhdongnai.com.vn/the-link-city" className="underline hover:text-primary-900">
                          kimoanhdongnai.com.vn/the-link-city
                        </a>
                      </p>
                      <p><strong>Văn phòng giao dịch:</strong> 268A Phan Trung, P. Tam Hiệp, TP. Biên Hòa, Đồng Nai</p>
                      <p><strong>Văn phòng dự án:</strong> Ngã tư QL1A & QL20, xã Dầu Giây, H. Thống Nhất, Đồng Nai</p>
                      <p>
                        <strong>Hotline:</strong>{" "}
                        <a href="tel:0937587438" className="font-black text-primary-900 hover:underline">0937.587.438</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Bản quyền bài viết thuộc về Kim Oanh Đồng Nai — Mọi thông tin sao chép
                      vui lòng trích dẫn nguồn:{" "}
                      <a href="https://kimoanhdongnai.com.vn/the-link-city" className="text-primary-600 underline">
                        kimoanhdongnai.com.vn/the-link-city
                      </a>
                      . Cập nhật: {PUBLISHED}
                    </p>
                  </div>
                </div>
              </section>

              {/* Bài viết liên quan nội tuyến */}
              <section className="mb-12">
                <SectionHeading>Các nội dung liên quan về The Link City</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city",                                                                  label: "The Link City Dầu Giây — Tổng quan dự án" },
                    { href: "/the-link-city/vi-tri",                                                           label: "Vị trí & Liên kết vùng The Link City" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                                       label: "Tổng quan The Link City Dầu Giây" },
                    { href: "/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026",           label: "Hồ sơ pháp lý & Công văn 2505/UBND-KTN" },
                    { href: "/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city",                   label: "Đón sóng đô thị hóa Dầu Giây 2026–2030" },
                    { href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",            label: "Bảng giá & Bài toán vay ngân hàng 2026" },
                    { href: "/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026",               label: "Giải pháp an cư gia đình trẻ 2026" },
                    { href: "/tin-tuc/cam-nang-chon-lo-dat-nen-the-link-city-dau-giay-2026",                   label: "Cẩm nang chọn lô đất nền The Link City" },
                  ].map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors px-4 py-3 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50"
                    >
                      <span className="text-primary-400 flex-shrink-0">→</span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài mang tính phân tích và tham khảo. Dự báo tăng giá dựa
                  trên xu hướng lịch sử và quy hoạch được công bố, không phải cam kết. Số liệu
                  giá đất là tham khảo theo thị trường tại thời điểm xuất bản và có thể thay
                  đổi. Ban biên tập Kim Oanh Đồng Nai — Cập nhật: {PUBLISHED}
                </p>
              </div>

            </article>

            {/* ── Sidebar ──────────────────────────────────── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                {/* Lợi thế vị trí */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-bold text-amber-800 text-sm mb-4">📍 Lợi thế ngã tư Dầu Giây</p>
                  <div className="space-y-2.5 text-xs text-amber-700">
                    {[
                      ["3 tuyến cao tốc",     "Hội tụ tại 1 điểm duy nhất"],
                      ["ĐT 769 → Sân bay",    "15–20 phút vào Long Thành"],
                      ["KCN Dầu Giây",        "330ha, lấp đầy 85%"],
                      ["Chợ đầu mối",         "Lớn nhất Đông Nam Bộ"],
                      ["Lên Thị xã",          "Lộ trình 2026–2030"],
                      ["Giá đất",             "Chỉ 19–23 triệu/m²"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span>{k}</span>
                        <span className="font-bold text-amber-900">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nav nhanh */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu The Link City</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/the-link-city",           label: "Tổng quan dự án" },
                      { href: "/the-link-city/vi-tri",    label: "Vị trí & Liên kết vùng" },
                      { href: "/the-link-city/mat-bang",  label: "Mặt bằng tổng thể" },
                      { href: "/the-link-city/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/the-link-city/tien-do",   label: "Tiến độ xây dựng" },
                      { href: "/the-link-city/bang-gia",  label: "Bảng giá mới nhất" },
                      { href: "/the-link-city/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/the-link-city/hinh-anh",  label: "Hình ảnh thực tế" },
                    ].map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-primary-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white"
                      >
                        <span>{l.label}</span>
                        <span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bài viết liên quan */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Đón sóng đô thị hóa 2026–2030", href: "/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city" },
                      { label: "Pháp lý & Công văn 2505",        href: "/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026" },
                      { label: "Bảng giá & Vay ngân hàng",       href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026" },
                      { label: "An cư gia đình trẻ 2026",        href: "/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Nhận bản đồ quy hoạch PDF</p>
                  <p className="text-primary-100 text-xs mb-4">
                    Quy hoạch huyện Thống Nhất đến 2030 + Bảng giá The Link City gửi ngay qua Zalo.
                  </p>
                  <a
                    href="tel:0937587438"
                    className="block text-center bg-white text-primary-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-colors"
                  >
                    0937.587.438
                  </a>
                </div>

              </div>
            </aside>

          </div>
        </div>

        {/* ── CTA Banner ────────────────────────────────────── */}
        <section className="bg-gradient-to-r from-slate-800 to-amber-600 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl font-black mb-3">
              Ngã tư Dầu Giây — Tọa độ vàng cuối cùng ở vùng trũng giá
            </h2>
            <p className="text-slate-300 text-base mb-8 leading-relaxed">
              3 cao tốc hội tụ, KCN 330ha, ĐT 769 vào sân bay Long Thành. Giá đất chỉ 19–23 triệu/m² —
              thấp hơn Trảng Bom và Long Khánh đến 50%. The Link City: Cơ hội cuối mua ở vùng đệm.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/the-link-city"
                className="inline-flex items-center gap-2 bg-white text-slate-800 hover:bg-amber-50 font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Tìm hiểu The Link City →
              </a>
              <a
                href="tel:0937587438"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-7 py-3.5 rounded-full transition-all text-sm"
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
              href: "/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city",
              title: "Đón Sóng Đô Thị Hóa Dầu Giây 2026–2030",
              description: "Bài học Dĩ An tăng 300%, Long Khánh 250% — 3 cột mốc vàng kích hoạt sóng tăng giá.",
              tag: "Thị trường",
            },
            {
              href: "/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026",
              title: "Hồ Sơ Pháp Lý The Link City 2026",
              description: "Giải mã công văn 2505/UBND-KTN và tiến trình cấp sổ hồng riêng từng nền.",
              tag: "Pháp lý",
            },
            {
              href: "/tin-tuc/tong-quan-the-link-city-dau-giay",
              title: "Tổng Quan Dự Án The Link City Dầu Giây 2026",
              description: "Thông số kỹ thuật, vị trí, pháp lý và tiềm năng đầu tư toàn diện.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",
              title: "Bảng Giá The Link City & Bài Toán Vay Ngân Hàng",
              description: "Chi tiết giá từng block, 4 phương thức thanh toán và bảng tính trả nợ.",
              tag: "Tin dự án",
            },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}
