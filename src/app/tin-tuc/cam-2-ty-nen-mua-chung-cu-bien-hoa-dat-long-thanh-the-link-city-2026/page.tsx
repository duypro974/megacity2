"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS55 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/cam-2-ty-nen-mua-chung-cu-bien-hoa-dat-long-thanh-the-link-city-2026`;
const PUBLISHED     = "17/09/2026";
const PUBLISHED_ISO = "2026-09-17";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cầm 1,8 – 2 Tỷ Năm 2026: Nên Mua Chung Cư Biên Hòa, Đất Long Thành Hay The Link City Dầu Giây?",
  description:
    "Phân tích so sánh 3 kênh đầu tư 2 tỷ tại Đồng Nai 2026: Chung cư Biên Hòa, đất nền Long Thành hay đất sổ hồng The Link City Dầu Giây – Kênh nào sinh lời cao nhất?",
  image: [IMG_NEWS55["1"], IMG_NEWS55["2"], IMG_NEWS55["3"]],
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
    "The Link City Dầu Giây, đầu tư bất động sản Đồng Nai 2026, có 2 tỷ nên mua gì Đồng Nai, so sánh The Link City, chung cư Biên Hòa 2026, đất nền Long Thành giá rẻ, giá đất The Link City Kim Oanh",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Nếu mua The Link City thì sau bao lâu tôi có thể bán lại chốt lời được?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khách hàng có thể chuyển nhượng lại bất cứ lúc nào. Với những nhà đầu tư muốn tối ưu hóa lợi nhuận, thời điểm chốt lời đẹp nhất là sau 12 – 24 tháng, khi các công trình tiện ích nội khu (TTTM 2,6ha) khởi công và tuyến cao tốc Dầu Giây – Tân Phú hoàn thành các hạng mục thi công đầu tiên.",
      },
    },
    {
      "@type": "Question",
      name: "Ngân hàng OCB và Vietcombank thẩm định đất ở The Link City như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Do dự án đã có sổ hồng riêng từng nền và hạ tầng hoàn thiện 100%, ngân hàng định giá sản phẩm dựa trên giá trị thị trường thực tế và giải ngân lên đến 70% giá trị hợp đồng mua bán, thủ tục xét duyệt hồ sơ nhanh gọn trong vòng 24 – 48 giờ.",
      },
    },
    {
      "@type": "Question",
      name: "Đất tại The Link City có bị ngập nước vào mùa mưa không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuyệt đối không. Khu vực ngã tư Dầu Giây sở hữu cao độ địa hình tự nhiên cao ráo (cao hơn khu vực Biên Hòa và TP.HCM từ 30m – 50m so với mực nước biển). Thêm vào đó, dự án được đầu tư hệ thống cống thoát nước mưa ngầm khẩu độ lớn, đảm bảo đô thị luôn khô ráo 100%.",
      },
    },
    {
      "@type": "Question",
      name: "Cầm 600 triệu có mua được đất The Link City không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Với vốn tự có khoảng 550 – 600 triệu đồng (30% giá trị lô đất), bạn có thể vay ngân hàng OCB hoặc Vietcombank 70% tương đương khoảng 1,3 tỷ, trả góp khoảng 12 – 13,4 triệu/tháng trong 20 năm để sở hữu ngay nền đất 95m² có sổ hồng tại The Link City.",
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
      name: "Cầm 2 tỷ 2026: Chung cư Biên Hòa, Đất Long Thành hay The Link City?",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS55["1"],
    alt: "Phân tích so sánh các kênh đầu tư bất động sản 2 tỷ đồng tại Đồng Nai năm 2026",
    caption: "Lựa chọn đúng kênh đầu tư tại thời điểm 2026 sẽ quyết định tốc độ gia tăng tài sản trong 3 năm tới.",
  },
  {
    src: IMG_NEWS55["2"],
    alt: "Căn hộ chung cư hiện đại tại thành phố Biên Hòa Đồng Nai",
    caption: "Chung cư Biên Hòa phù hợp để cho thuê dòng tiền ngắn hạn nhưng biên độ tăng giá vốn không cao.",
  },
  {
    src: IMG_NEWS55["3"],
    alt: "Hạ tầng kỹ thuật hoàn thiện đồng bộ 100 phần trăm tại khu đô thị The Link City Dầu Giây",
    caption: "Hạ tầng đường nhựa chuẩn mực 100% tại The Link City vượt trội hơn hẳn đất phân lô tự do.",
  },
  {
    src: IMG_NEWS55["4"],
    alt: "Tập sổ hồng Giấy chứng nhận quyền sử dụng đất trao tay dự án The Link City Dầu Giây",
    caption: "Sổ hồng riêng từng nền sở hữu vĩnh viễn – Thước đo an toàn cao nhất cho dòng tiền 2 tỷ.",
  },
  {
    src: IMG_NEWS55["5"],
    alt: "Sa bàn toàn cảnh dự án The Link City Dầu Giây 21ha do Kim Oanh Land phát triển",
    caption: "Sa bàn trực quan giúp nhà đầu tư nhìn thấy bức tranh sinh lời rõ ràng trong tương lai.",
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

function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" | "success" }) {
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
      className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all"
    >
      {children}
    </a>
  );
}

// ─── Comparison table data ────────────────────────────────────────────────
const COMPARE_ROWS = [
  ["Mức vốn tối thiểu",         "2,4 tỷ – 3,0 tỷ VNĐ",          "1,8 tỷ – 2,2 tỷ VNĐ",                   "1,85 tỷ – 2,25 tỷ VNĐ ✅ Vừa vặn"],
  ["Loại hình sở hữu",          "Căn hộ (Thời hạn 50 năm)",      "Đất dân (Sổ đỏ riêng)",                  "Đất ở đô thị ODT (Sổ hồng vĩnh viễn)"],
  ["Hạ tầng & Tiện ích",        "Tiện ích khối đế tòa nhà",       "Không có tiện ích, đường hẻm 4m",         "Hạ tầng ngầm 100%, 50+ tiện ích nội khu"],
  ["Dòng tiền cho thuê",        "7 – 10 triệu/tháng (ngay)",     "Khó cho thuê",                            "10 – 20 triệu/tháng khi xây nhà"],
  ["Biên độ tăng giá vốn",      "Rất thấp (5% – 8%/năm)",        "Phụ thuộc sóng sân bay (10% – 15%)",      "Đột phá (20% – 35%/năm)"],
  ["Tính an toàn pháp lý",      "Chờ cấp sổ hồng căn hộ",        "Rủi ro dính quy hoạch treo",             "An toàn 100% (Sổ hồng từng nền sẵn sàng)"],
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function Cam2TyNenMuaPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Cầm 2 tỷ 2026: Nên mua gì tại Đồng Nai?</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Phân tích đầu tư
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 12 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-4xl">
              Cầm 1,8 – 2 Tỷ Năm 2026: Nên Mua Chung Cư Biên Hòa, Đất Long Thành Hay The Link City Dầu Giây?
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích chi tiết 3 kênh đầu tư phổ biến nhất tại Đồng Nai 2026 cho dòng vốn 1,8 – 2 tỷ đồng — giúp bạn tìm ra bài toán sinh lời tối ưu và an toàn nhất.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh phân tích đầu tư bất động sản 2 tỷ"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS55["1"]}
                alt="Phân tích so sánh các kênh đầu tư bất động sản 2 tỷ đồng tại Đồng Nai năm 2026"
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
              Lựa chọn đúng kênh đầu tư tại thời điểm 2026 sẽ quyết định tốc độ gia tăng tài sản trong 3 năm tới.
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
                    ["#kha-uu-dau-tu",  "Khẩu vị đầu tư 2026"],
                    ["#kenh-1",         "1. Chung cư Biên Hòa"],
                    ["#kenh-2",         "2. Đất nền Long Thành"],
                    ["#kenh-3",         "3. The Link City Dầu Giây"],
                    ["#bang-so-sanh",   "Bảng so sánh 3 kênh"],
                    ["#don-bay",        "Bài toán đòn bẩy 600 triệu"],
                    ["#faq",            "Câu hỏi thường gặp"],
                    ["#dang-ky",        "Đăng ký tư vấn"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Section 1: Intro */}
              <section className="mb-12" id="kha-uu-dau-tu">
                <SectionHeading id="kha-uu-dau-tu">
                  Khẩu Vị Đầu Tư Năm 2026: Dòng Tiền 1,8 – 2 Tỷ Đang Tìm Kiếm "Bến Đỗ" Nào?
                </SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Năm 2026 đánh dấu chu kỳ phục hồi rõ nét của thị trường bất động sản phía Nam. Dòng tiền nhàn rỗi trong dân không còn nằm im trong các sổ tiết kiệm lãi suất thấp (chỉ khoảng 5% – 6%/năm) mà bắt đầu tìm đường quay trở lại bất động sản để bảo toàn giá trị trước áp lực lạm phát.
                  </p>
                  <p>
                    Trong đó, tầm tài chính từ <strong className="text-slate-800">1,8 tỷ đến 2,2 tỷ đồng</strong> là phân khúc chiếm tỷ trọng giao dịch lớn nhất trên thị trường. Đây là số tiền tích lũy phổ biến của các gia đình trung lưu, người làm công ăn lương và các nhà đầu tư cá nhân vừa và nhỏ.
                  </p>
                  <p>Khi cầm khoản tiền này về thị trường Đồng Nai, nhà đầu tư thường đứng trước <strong className="text-slate-800">3 ngã rẽ lớn:</strong></p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
                    {[
                      { icon: "🏢", label: "Kênh 1", title: "Chung cư Biên Hòa", desc: "Căn hộ 2PN tại TP. Biên Hòa, dòng tiền cho thuê ổn định" },
                      { icon: "✈️", label: "Kênh 2", title: "Đất Long Thành", desc: "Đất nền ven sân bay, tiềm năng lớn nhưng giá đã neo cao" },
                      { icon: "🏙️", label: "Kênh 3", title: "The Link City Dầu Giây", desc: "Đất ở đô thị 95m², sổ hồng sẵn, vùng trũng giá đón sóng kép" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <InfoBox>
                    Mỗi phương án đều có ưu và nhược điểm riêng. Hãy cùng phân tích chi tiết từng kênh để tìm ra bài toán hiệu quả nhất cho đồng vốn của bạn.
                  </InfoBox>
                </div>
              </section>

              {/* Section 2: Chung cư Biên Hòa */}
              <section className="mb-12" id="kenh-1">
                <SectionHeading id="kenh-1">
                  Kênh 1: Căn Hộ Chung Cư Biên Hòa – Dòng Tiền Đều Nhưng Lãi Vốn Hạn Chế
                </SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Tại TP. Biên Hòa, các dự án chung cư mới bàn giao hoặc đang xây dựng hiện có mức giá dao động từ <strong className="text-slate-800">35 – 45 triệu đồng/m²</strong>. Để sở hữu một căn hộ 2 phòng ngủ (diện tích khoảng 65m² – 70m²), bạn cần chuẩn bị ngân sách từ 2,4 tỷ đến 3,0 tỷ đồng. Với tầm tiền 1,8 – 2 tỷ, bạn chỉ có thể mua được các căn hộ 1 phòng ngủ nhỏ hoặc chung cư cũ đã qua sử dụng từ 7 – 10 năm.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                    <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
                      <p className="font-black text-green-800 text-sm mb-3">✅ Ưu điểm</p>
                      <ul className="space-y-2">
                        {[
                          "Dễ dàng khai thác cho thuê ngay lập tức: 7 – 10 triệu/tháng",
                          "Phục vụ chuyên gia KCN Biên Hòa 1, Biên Hòa 2, Amata",
                          "Tỷ suất sinh lời từ dòng tiền: 4,0% – 4,8%/năm",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-green-800 text-sm leading-relaxed">
                            <span className="flex-shrink-0 mt-0.5">•</span><span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                      <p className="font-black text-red-700 text-sm mb-3">⚠️ Nhược điểm</p>
                      <ul className="space-y-2">
                        {[
                          "Khả năng tăng giá đất bằng 0: Chung cư hao mòn theo thời gian",
                          "Sau 5 – 7 năm giá chỉ tăng nhẹ theo lạm phát hoặc đi ngang",
                          "Gánh nặng phí quản lý, gửi xe, bảo trì định kỳ hàng tháng",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-red-700 text-sm leading-relaxed">
                            <span className="flex-shrink-0 mt-0.5">•</span><span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <ArticleFigure
                    src={IMG_NEWS55["2"]}
                    alt="Căn hộ chung cư hiện đại tại thành phố Biên Hòa Đồng Nai"
                    caption="Chung cư Biên Hòa phù hợp để cho thuê dòng tiền ngắn hạn nhưng biên độ tăng giá vốn không cao."
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* Section 3: Đất Long Thành */}
              <section className="mb-12" id="kenh-2">
                <SectionHeading id="kenh-2">
                  Kênh 2: Đất Nền Long Thành – Tiềm Năng Lớn Nhưng Giá Đã Bị Đẩy Lên Đỉnh
                </SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Không thể phủ nhận sức nóng của Cảng hàng không Quốc tế Long Thành. Tuy nhiên, sau nhiều đợt "sốt đất" dồn dập, mặt bằng giá đất tại Long Thành năm 2026 đã neo ở mức rất cao. Đất nền trong các khu tái định cư (như Lộc An – Bình Sơn) hiện đang giao dịch từ <strong className="text-slate-800">35 – 55 triệu đồng/m²</strong> (tổng tiền một lô từ 4 tỷ đến 6 tỷ đồng – vượt xa ngân sách 2 tỷ).
                  </p>
                  <p>
                    Với số tiền 1,8 – 2 tỷ tại Long Thành, bạn chỉ có thể tìm mua được:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2 text-[17px]">
                    <li>Đất nông nghiệp (đất trồng cây lâu năm) diện tích nhỏ chờ chuyển mục đích sử dụng</li>
                    <li>Đất thổ cư trong các hẻm sâu, đường đất 3m – 4m tại các xã xa sân bay như Phước Bình, Bàu Cạn</li>
                  </ul>

                  <div className="rounded-2xl border border-red-100 bg-red-50 p-5 not-prose">
                    <p className="font-black text-red-700 text-sm mb-3">⚠️ Nhược điểm lớn</p>
                    <ul className="space-y-2">
                      {[
                        "Nguy cơ \"chôn vốn\": Đất hẻm sâu hoặc đất nông nghiệp rất khó thanh khoản",
                        "Phải chờ hàng năm để hạ tầng đường làng được nâng cấp",
                        "Rủi ro quy hoạch: Dễ dính hành lang an toàn bay, quy hoạch mở đường hoặc đất dịch vụ",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-red-700 text-sm leading-relaxed">
                          <span className="flex-shrink-0 mt-0.5">•</span><span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <ArticleFigure
                    src={IMG_NEWS55["3"]}
                    alt="Hạ tầng kỹ thuật hoàn thiện đồng bộ 100 phần trăm tại khu đô thị The Link City Dầu Giây"
                    caption="Hạ tầng đường nhựa chuẩn mực 100% tại The Link City vượt trội hơn hẳn đất phân lô tự do."
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* Section 4: The Link City */}
              <section className="mb-12" id="kenh-3">
                <SectionHeading id="kenh-3">
                  Kênh 3: Đất Nền The Link City Dầu Giây – "Vùng Trũng Giá" Đón Đầu Sóng Kép
                </SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Trong khi Biên Hòa giá chung cư đã cao và Long Thành giá đất nền đã tiệm cận vùng đỉnh, <strong className="text-slate-800">The Link City Dầu Giây</strong> nổi lên như một điểm sáng cân bằng hoàn hảo giữa Giá bán – Pháp lý – Tiềm năng tăng trưởng.
                  </p>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 not-prose">
                    <p className="font-black text-amber-900 text-base mb-4">💰 Mức giá "gốc F0" chỉ từ 1,852 tỷ đồng/nền (95m² – Block LK17A)</p>
                    <ul className="space-y-2">
                      {[
                        "Đơn giá chỉ khoảng 19,5 triệu/m² – rẻ bằng một nửa đất Long Thành và 1/3 giá chung cư Biên Hòa",
                        "Đất ở đô thị (ODT) sở hữu lâu dài vĩnh viễn, sổ hồng trao tay",
                        "Hạ tầng ngầm hoàn thiện 100%, ký công chứng sang tên và nhận đất xây dựng ngay",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-amber-800 text-sm leading-relaxed">
                          <span className="text-amber-500 flex-shrink-0 mt-0.5">✓</span><span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="font-bold text-slate-800">🌊 Đón sóng kép từ hạ tầng:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 not-prose">
                    {[
                      { icon: "✈️", title: "Sóng sân bay Long Thành", desc: "Nối thẳng qua đường ĐT 769 mở rộng, chỉ 20 phút chạy xe" },
                      { icon: "🛣️", title: "Sóng nút giao cao tốc", desc: "Tọa lạc ngay ngã tư QL1A – QL20, liền kề Cao tốc Long Thành – Dầu Giây, Dầu Giây – Phan Thiết" },
                      { icon: "🏛️", title: "Sóng lên Thị xã Dầu Giây", desc: "Lộ trình đô thị loại IV 2026 – 2030, tăng giá mạnh như Long Khánh hay Dĩ An trước đây" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="text-xl mb-1">{item.icon}</div>
                        <p className="font-black text-slate-800 text-xs mb-1">{item.title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 not-prose pt-2">
                    <LinkBtn href="/the-link-city/vi-tri">📍 Xem bản đồ kết nối giao thông và quy hoạch vùng</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 5: Bảng so sánh */}
              <section className="mb-12" id="bang-so-sanh">
                <SectionHeading id="bang-so-sanh">
                  Bảng So Sánh Đối Chiếu Chi Tiết 3 Kênh Đầu Tư
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[600px]">
                      <thead>
                        <tr className="bg-slate-800 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-44">Tiêu chí</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">🏢 Chung cư Biên Hòa</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">✈️ Đất hẻm Long Thành</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide text-amber-300">🏙️ The Link City</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {COMPARE_ROWS.map(([tc, col1, col2, col3], i) => (
                          <tr key={tc} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700 text-xs">{tc}</td>
                            <td className="px-4 py-3 text-slate-600 text-xs">{col1}</td>
                            <td className="px-4 py-3 text-slate-600 text-xs">{col2}</td>
                            <td className="px-4 py-3 text-amber-700 font-semibold text-xs">{col3}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="font-black text-slate-700 text-sm mb-2">🏢 Chọn Chung cư Biên Hòa khi:</p>
                      <p className="text-slate-600 text-sm leading-relaxed">Bạn chỉ cần dòng tiền cho thuê ngay 8 triệu/tháng và không quan tâm đến lãi vốn dài hạn.</p>
                    </div>
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                      <p className="font-black text-amber-800 text-sm mb-2">🏙️ Chọn The Link City khi:</p>
                      <p className="text-amber-700 text-sm leading-relaxed">Bạn muốn nhân đôi tài sản sau 2 – 3 năm, sở hữu đất sổ hồng tại vị trí giao thương chiến lược — đây là lựa chọn số 1 vượt trội về bài toán kinh tế!</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/the-link-city/phap-ly">📑 Kiểm chứng pháp lý và văn bản cấp sổ đỏ The Link City</LinkBtn>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS55["4"]}
                    alt="Tập sổ hồng Giấy chứng nhận quyền sử dụng đất trao tay dự án The Link City Dầu Giây"
                    caption="Sổ hồng riêng từng nền sở hữu vĩnh viễn – Thước đo an toàn cao nhất cho dòng tiền 2 tỷ."
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* Section 6: Đòn bẩy */}
              <section className="mb-12" id="don-bay">
                <SectionHeading id="don-bay">
                  Bài Toán Đòn Bẩy: Cầm 600 Triệu Tiền Mặt Mua Được Gì An Toàn Nhất?
                </SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Đặt trường hợp bạn chưa có đủ 1,85 tỷ tiền mặt mà chỉ đang có sẵn khoảng <strong className="text-slate-800">550 – 600 triệu đồng</strong>:
                  </p>

                  <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 not-prose font-mono text-sm">
                    <p className="font-black text-amber-900 text-base mb-4 font-sans">📊 Bài Toán Sở Hữu The Link City Với Vốn 550 Triệu</p>
                    <div className="space-y-2 text-amber-800">
                      <div className="flex justify-between border-b border-amber-200 pb-2">
                        <span>Tổng giá trị lô đất 95m² (LK17A)</span>
                        <span className="font-bold">1.852.500.000 VNĐ</span>
                      </div>
                      <div className="flex justify-between border-b border-amber-200 pb-2">
                        <span>Vốn tự có ban đầu (30%)</span>
                        <span className="font-bold">555.000.000 VNĐ</span>
                      </div>
                      <div className="flex justify-between border-b border-amber-200 pb-2">
                        <span>Ngân hàng OCB / Vietcombank vay 70%</span>
                        <span className="font-bold">1.296.000.000 VNĐ</span>
                      </div>
                      <div className="flex justify-between border-b border-amber-200 pb-2">
                        <span>Thời hạn vay</span>
                        <span className="font-bold">20 năm</span>
                      </div>
                      <div className="flex justify-between border-b border-amber-200 pb-2">
                        <span>Tiền gốc trả hàng tháng</span>
                        <span className="font-bold">~ 5,4 triệu VNĐ</span>
                      </div>
                      <div className="flex justify-between border-b border-amber-200 pb-2">
                        <span>Tiền lãi tháng đầu (giảm dần)</span>
                        <span className="font-bold">~ 8,0 triệu VNĐ</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="font-bold text-amber-900">Tổng trả góp hàng tháng</span>
                        <span className="font-black text-amber-900 text-base">~ 12 – 13,4 triệu VNĐ</span>
                      </div>
                    </div>
                  </div>

                  <InfoBox type="warn">
                    <strong>👉 Với 550 triệu tiền mặt</strong>, bạn không thể mua được đất Long Thành hay chung cư Biên Hòa (vì tỷ lệ đòn bẩy quá cao hoặc không được bảo lãnh dự án). Nhưng tại The Link City, sự liên kết chặt chẽ giữa chủ đầu tư Kim Oanh và các ngân hàng lớn giúp bạn ngay lập tức đứng tên một <strong>bất động sản đô thị sổ hồng</strong>, biến khoản tích lũy 550 triệu thành một tài sản sinh lời hàng tỷ đồng sau vài năm.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/the-link-city/bang-gia">💰 Tra cứu giá cụ thể các mã lô LK17A</LinkBtn>
                    <LinkBtn href="/the-link-city/thanh-toan">🧮 Tự lên phương án vay phù hợp với thu nhập</LinkBtn>
                  </div>
                </div>

                <div className="mt-6">
                  <ArticleFigure
                    src={IMG_NEWS55["5"]}
                    alt="Sa bàn toàn cảnh dự án The Link City Dầu Giây 21ha do Kim Oanh Land phát triển"
                    caption="Sa bàn trực quan giúp nhà đầu tư nhìn thấy bức tranh sinh lời rõ ràng trong tương lai."
                    images={images}
                    index={4}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* Section 7: FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">Các Câu Hỏi Thường Gặp Của Nhà Đầu Tư Khi Cơ Cấu Vốn 2 Tỷ</SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details
                      key={name}
                      className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-amber-300 transition-colors"
                    >
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-amber-700 select-none">
                        <span className="leading-snug">{name}</span>
                        <svg
                          className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-400 group-open:rotate-180 transition-transform"
                          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                        >
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

              {/* Section 8: CTA */}
              <section className="mb-12" id="dang-ky">
                <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 p-8 text-white">
                  <h2 className="text-2xl font-black mb-3">
                    Đăng Ký Nhận Bảng Tính Suất Sinh Lời & Đặt Lịch Xem Thực Địa
                  </h2>
                  <p className="text-amber-100 text-sm leading-relaxed mb-6">
                    Đừng để dòng tiền 1,8 – 2 tỷ của bạn "ngủ quên" trong tài khoản! Hãy để đồng vốn sinh sôi nảy nở tại vùng trũng đầu tư sáng giá nhất Đông Nam Bộ năm 2026.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-6">
                    {[
                      { label: "Dự án", value: "The Link City Dầu Giây (KDC A1-C1 Đô thị Dầu Giây)" },
                      { label: "Website", value: "kimoanhdongnai.com.vn/the-link-city" },
                      { label: "Trụ sở", value: "268A Phan Trung, Phường Tam Hiệp, TP. Biên Hòa" },
                      { label: "Văn phòng dự án", value: "Ngã tư QL1A & QL20, xã Dầu Giây, Huyện Thống Nhất" },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-white/10 rounded-xl px-4 py-3">
                        <p className="text-amber-200 text-xs font-bold mb-0.5">{label}</p>
                        <p className="text-white text-sm leading-relaxed">{value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="tel:0937587438"
                      className="inline-flex items-center gap-2 bg-white text-amber-700 font-black text-sm px-6 py-3 rounded-xl hover:bg-amber-50 transition-all shadow-lg"
                    >
                      📞 Gọi tư vấn ngay
                    </a>
                    <a
                      href="https://zalo.me/0937587438"
                      className="inline-flex items-center gap-2 bg-amber-700 text-white font-black text-sm px-6 py-3 rounded-xl hover:bg-amber-800 transition-all"
                    >
                      💬 Nhắn Zalo nhận bảng giá
                    </a>
                  </div>
                  <p className="text-amber-200 text-xs mt-4 italic">
                    Bản quyền bài viết thuộc về Kim Oanh Đồng Nai — Mọi thông tin sao chép vui lòng trích dẫn nguồn liên kết chính thức: kimoanhdongnai.com.vn/the-link-city
                  </p>
                </div>
              </section>

            </article>

            {/* ── Sidebar ───────────────────────────────────── */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-6">

                {/* Quick summary */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-black text-amber-900 text-sm mb-3 uppercase tracking-wider">📊 Kết luận nhanh</p>
                  <div className="space-y-2">
                    {[
                      { kenh: "Chung cư Biên Hòa", diem: "6.5/10", color: "text-slate-600" },
                      { kenh: "Đất Long Thành", diem: "7/10", color: "text-slate-600" },
                      { kenh: "The Link City", diem: "9.5/10", color: "text-amber-700 font-black" },
                    ].map(({ kenh, diem, color }) => (
                      <div key={kenh} className="flex justify-between items-center text-sm border-b border-amber-100 pb-2 last:border-0">
                        <span className="text-slate-700">{kenh}</span>
                        <span className={color}>{diem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA sidebar */}
                <div className="rounded-2xl bg-slate-900 p-5 text-white">
                  <p className="font-black text-base mb-2">Xem dự án The Link City</p>
                  <p className="text-slate-400 text-xs mb-4 leading-relaxed">Bảng giá, sơ đồ phân lô và chính sách thanh toán 2026.</p>
                  <a
                    href="/the-link-city"
                    className="block text-center bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm py-2.5 px-4 rounded-xl transition-colors"
                  >
                    Xem dự án →
                  </a>
                </div>

                {/* Related links */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Bài viết liên quan</p>
                  <ul className="space-y-2">
                    {[
                      { href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026", label: "Bảng giá & bài toán vay ngân hàng 2026" },
                      { href: "/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026", label: "Hồ sơ pháp lý The Link City" },
                      { href: "/tin-tuc/tiem-nang-bat-dong-san-thong-nhat-nga-tu-dau-giay-2026", label: "Tiềm năng BĐS ngã tư Dầu Giây 2026" },
                      { href: "/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city", label: "Đón sóng đô thị hóa Dầu Giây 2026–2030" },
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
          title="Tìm hiểu thêm về The Link City Dầu Giây"
          items={[
            {
              href: "/the-link-city",
              title: "Tổng quan dự án The Link City Dầu Giây",
              description: "Khu đô thị 21ha tại ngã tư Dầu Giây với đầy đủ tiện ích, sổ hồng sẵn và hạ tầng hoàn thiện 100%.",
              tag: "Dự án",
            },
            {
              href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",
              title: "Bảng giá & Bài toán vay ngân hàng 2026",
              description: "Chi tiết bảng giá từng lô đất và các phương án vay ngân hàng OCB, Vietcombank tại The Link City.",
              tag: "Tài chính",
            },
            {
              href: "/tin-tuc/tiem-nang-bat-dong-san-thong-nhat-nga-tu-dau-giay-2026",
              title: "Tiềm năng BĐS huyện Thống Nhất – Ngã tư Dầu Giây 2026",
              description: "Phân tích toàn diện tiềm năng tăng trưởng bất động sản tại vị trí chiến lược ngã tư Dầu Giây.",
              tag: "Phân tích",
            },
          ]}
        />

      </div>

      <CorpFooter />
    </>
  );
}
