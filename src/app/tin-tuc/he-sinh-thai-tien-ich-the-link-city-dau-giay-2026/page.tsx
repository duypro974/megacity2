"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS47 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026`;
const PUBLISHED     = "11/09/2026";
const PUBLISHED_ISO = "2026-09-11";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hệ Sinh Thái 50+ Tiện Ích The Link City Dầu Giây: Chuẩn Mực Sống \"All-In-One\" Giữa Trung Tâm Đô Thị Mới",
  description:
    "Khám phá trọn bộ 50+ tiện ích đẳng cấp tại The Link City Dầu Giây: Trung tâm thương mại 2,6ha, cụm sân thể thao pickleball, công viên đa thế hệ và trường liên cấp.",
  image: [IMG_NEWS47["1"], IMG_NEWS47["3"], IMG_NEWS47["4"]],
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
    "tiện ích The Link City, trung tâm thương mại The Link City, sân pickleball The Link City, công viên The Link City Dầu Giây",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cư dân sinh sống tại The Link City có phải đóng phí quản lý cao không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mức phí quản lý vận hành khu đô thị được chủ đầu tư Kim Oanh áp dụng ở mức rất hợp lý (dự kiến chỉ từ 3.000 – 5.000 VNĐ/m² đất/tháng), dùng để chi trả cho các dịch vụ: dọn dẹp vệ sinh đường phố, chăm sóc cảnh quan cây xanh, duy tu công viên và bảo vệ an ninh 24/7.",
      },
    },
    {
      "@type": "Question",
      name: "Các tiện ích thể thao (sân bóng, pickleball) đã đi vào hoạt động chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đã hoàn thiện và đưa vào hoạt động phục vụ cư dân. Khách hàng khi đến tham quan sa bàn có thể trực tiếp trải nghiệm và kiểm tra thực tế hệ tiện ích hiện hữu tại công trường dự án.",
      },
    },
    {
      "@type": "Question",
      name: "Người ngoài khu đô thị có được vào sử dụng trung tâm thương mại và tiện ích không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khu trung tâm thương mại 2,6ha và các tuyến shophouse mở cửa tự do phục vụ toàn bộ cư dân khu vực Dầu Giây và du khách qua đường. Tuy nhiên, các công viên nội bộ và tiện ích riêng sẽ có đội ngũ an ninh giám sát để đảm bảo không gian riêng tư và an toàn cho cư dân The Link City.",
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
      name: "Hệ sinh thái tiện ích The Link City Dầu Giây",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS47["1"],
    alt: "Phối cảnh đại lộ thương mại sầm uất và cổng chào khu đô thị The Link City Dầu Giây",
    caption: "Phối cảnh đại lộ thương mại sầm uất với các dãy shophouse rực rỡ ánh đèn tại The Link City",
  },
  {
    src: IMG_NEWS47["2"],
    alt: "Phối cảnh 3D khu trung tâm thương mại dịch vụ quy mô 2,6 ha tại The Link City Dầu Giây",
    caption: "Khu phức hợp thương mại 2,6ha – Tâm điểm mua sắm, giải trí sôi động nhất khu vực",
  },
  {
    src: IMG_NEWS47["3"],
    alt: "Cụm sân thể thao pickleball và sân bóng đá mini hiện đại tại The Link City Dầu Giây",
    caption: "Cụm sân pickleball rực rỡ ánh đèn phục vụ đời sống thể thao năng động của cư dân",
  },
  {
    src: IMG_NEWS47["4"],
    alt: "Công viên cây xanh và khu vui chơi trẻ em ngoài trời tại khu đô thị The Link City Dầu Giây",
    caption: "Công viên trung tâm xanh mát – Không gian vui chơi tuổi thơ lý tưởng cho con trẻ",
  },
  {
    src: IMG_NEWS47["5"],
    alt: "Phối cảnh trường mầm non tiêu chuẩn quốc tế nội khu The Link City Dầu Giây",
    caption: "Hạ tầng giáo dục hoàn chỉnh ngay trong khuôn viên giúp cha mẹ hoàn toàn an tâm",
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
    : type === "success" ? "bg-emerald-50 border-emerald-200 text-emerald-800"
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

// ─── Data ──────────────────────────────────────────────────────────────────
const MALL_FEATURES = [
  {
    icon: "🛒",
    title: "Chuỗi siêu thị tiện ích & Bách hóa hiện đại",
    body: "Cung cấp thực phẩm tươi sống, hàng tiêu dùng nhập khẩu chất lượng cao, phục vụ nhu cầu mua sắm hằng ngày của cư dân mà không cần đi xa.",
  },
  {
    icon: "☕",
    title: "Tuyến phố ẩm thực & Cafe ngoài trời (F&B)",
    body: "Nơi quy tụ các thương hiệu trà sữa, cafe và nhà hàng ẩm thực đa dạng, là điểm hẹn lý tưởng để gặp gỡ đối tác, tụ họp gia đình vào mỗi dịp cuối tuần.",
  },
  {
    icon: "🎮",
    title: "Khu vui chơi giải trí trong nhà",
    body: "Khu game thực tế ảo, rạp chiếu phim mini và khu vận động giáo dục liên hoàn dành riêng cho trẻ em.",
  },
];

const SPORTS_ITEMS = [
  {
    n: "01",
    title: "Cụm Sân Pickleball Thời Thượng",
    items: [
      "Mặt sân chuyên dụng đạt chuẩn quốc tế, sơn phủ giảm chấn chống trơn trượt tối đa",
      "Dàn đèn LED cao áp chống chói, phục vụ tập luyện sau giờ làm việc",
      "Không gian giao lưu kết nối lý tưởng của cộng đồng cư dân trẻ, năng động",
    ],
  },
  {
    n: "02",
    title: "Sân Bóng Đá Mini Cỏ Nhân Tạo",
    items: [
      "Cỏ nhân tạo cao cấp, lưới chắn an toàn và khu khán đài nhỏ ngoài trời",
      "Nơi diễn ra các giải giao hữu giữa cơ quan, doanh nghiệp và thanh thiếu niên Dầu Giây",
    ],
  },
  {
    n: "03",
    title: "Đường Chạy Bộ Xanh & Gym Ngoài Trời",
    items: [
      "Tuyến đường dạo bộ uốn lượn dưới tán cây râm mát",
      "Thiết bị tập thể dục ngoài trời: máy đi bộ, xoay eo, xà đơn xà kép",
      "Khu dưỡng sinh phù hợp cho người cao tuổi tập mỗi sáng sớm",
    ],
  },
];

const PARK_FEATURES = [
  {
    icon: "🌿",
    title: "Mật độ mảng xanh vượt trội",
    body: "Hơn 40% diện tích dự án dành riêng cho cây xanh, mặt nước và hạ tầng công cộng.",
  },
  {
    icon: "🌳",
    title: "Công viên cảnh quan đa tầng",
    body: "Tầng cây bóng mát cổ thụ (bàng Đài Loan, lộc vừng, kèn hồng) kết hợp cỏ xanh và thảm hoa nhiều màu sắc, giúp giảm bức xạ nhiệt từ 2 – 3°C so với bên ngoài.",
  },
  {
    icon: "🎡",
    title: "Khu vui chơi trẻ em Kid Zone",
    body: "Cầu trượt, xích đu, bập bênh trên nền sàn cao su chống va đập — không gian an toàn tuyệt đối cho trẻ.",
  },
  {
    icon: "🌅",
    title: "Quảng trường ánh sáng & Đồi cỏ dã ngoại",
    body: "Nơi cả gia đình cùng nhau trải thảm picnic, ngắm hoàng hôn và trò chuyện thư thái mỗi chiều tà.",
  },
];

const EXTERNAL_LINKS = [
  { time: "2 phút", desc: "Trung tâm Hành chính huyện Thống Nhất, Công an huyện, Tòa án và Bưu điện Dầu Giây" },
  { time: "3 phút", desc: "Chợ đầu mối Nông sản Dầu Giây – trung tâm giao thương nông sản sầm uất hàng đầu miền Nam" },
  { time: "5 phút", desc: "Bệnh viện Đa khoa Dầu Giây, Trường Đại học Lạc Hồng (Cơ sở Dầu Giây), Trường THPT Thống Nhất A" },
  { time: "5 phút", desc: "Kết nối trực tiếp KCN Dầu Giây (330ha) – nơi tập trung hàng chục nghìn lao động và kỹ sư" },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function HeSinhThaiTienIchPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Hệ sinh thái tiện ích The Link City Dầu Giây</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
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
              Hệ Sinh Thái 50+ Tiện Ích The Link City Dầu Giây: Chuẩn Mực Sống "All-In-One" Giữa Trung Tâm Đô Thị Mới
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Khám phá trọn bộ 50+ tiện ích đẳng cấp tại dự án{" "}
              <a href="/the-link-city" className="text-amber-600 font-semibold hover:underline">
                The Link City
              </a>{" "}
              Dầu Giây: Trung tâm thương mại 2,6ha, cụm sân pickleball & bóng đá đêm, công viên
              đa thế hệ, trường học nội khu và liên kết ngoại khu chỉ 5 phút.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh đại lộ thương mại The Link City"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS47["1"]}
                alt="Phối cảnh đại lộ thương mại sầm uất và cổng chào khu đô thị The Link City Dầu Giây"
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
              Phối cảnh đại lộ thương mại sầm uất với các dãy shophouse rực rỡ ánh đèn tại The Link City
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
                    ["#xu-huong",    "1. Xu hướng sống All-In-One"],
                    ["#tttm",        "2. TTTM biểu tượng 2,6ha"],
                    ["#the-thao",    "3. Tổ hợp thể thao đa năng"],
                    ["#cong-vien",   "4. Công viên & Quảng trường"],
                    ["#giao-duc",    "5. Giáo dục & Y tế nội khu"],
                    ["#ngoai-khu",   "6. Liên kết ngoại khu 5 phút"],
                    ["#tang-gia",    "7. Tiện ích thực tế & tăng giá"],
                    ["#faq",         "8. Câu hỏi thường gặp"],
                    ["#tham-quan",   "9. Đăng ký tham quan thực tế"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* ── Section 1: Xu hướng All-In-One ── */}
              <section className="mb-12" id="xu-huong">
                <SectionHeading id="xu-huong">
                  1. Xu Hướng Sống "All-In-One" Đang Dịch Chuyển Mạnh Mẽ Về Đồng Nai
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong nhiều năm qua, mua đất tại các huyện vùng ven Đồng Nai thường chỉ gắn
                    với những mảnh đất phân lô ven đường làng: thiếu vỉa hè, không có công viên,
                    trẻ em không có chỗ vui chơi và người lớn phải chạy xe hàng cây số mới tìm
                    được quán cà phê hay sân tập thể thao.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bước sang năm 2026, thế hệ cư dân trẻ, gia đình trí thức và đội ngũ chuyên
                    gia tại các KCN Đồng Nai đang đặt ra tiêu chuẩn sống hoàn toàn mới: Họ không
                    chỉ mua một mét vuông đất để ở, họ mua cả một{" "}
                    <strong className="text-slate-800">"Môi trường sống"</strong> văn minh, an
                    ninh và đầy đủ tiện nghi ngay trước thềm nhà.
                  </p>

                  <InfoBox type="success">
                    Đón đầu xu thế đó,{" "}
                    <strong>The Link City</strong> (KDC A1-C1 Đô thị Dầu Giây) quy mô gần 21 ha
                    do Kim Oanh Land phát triển được quy hoạch theo mô hình{" "}
                    <strong>Đô thị tích hợp "All-In-One"</strong> với hơn{" "}
                    <strong>50 hạng mục tiện ích dịch vụ</strong>, kiến tạo không gian sống đẳng
                    cấp chưa từng có tại trung tâm ngã tư Dầu Giây.
                  </InfoBox>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { num: "50+", label: "Hạng mục tiện ích" },
                      { num: "2,6ha", label: "Trung tâm thương mại" },
                      { num: "40%+", label: "Mảng xanh & công cộng" },
                      { num: "21ha", label: "Tổng quy mô đô thị" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center">
                        <p className="text-2xl font-black text-amber-800">{s.num}</p>
                        <p className="text-xs text-amber-600 mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Section 2: TTTM 2,6ha ── */}
              <section className="mb-12" id="tttm">
                <SectionHeading id="tttm">
                  2. Đại Công Trình Biểu Tượng: Trung Tâm Thương Mại Dịch Vụ 2,6 Ha
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trái tim sôi động nhất của toàn khu đô thị chính là{" "}
                    <strong className="text-slate-800">
                      Khu phức hợp Trung tâm Thương mại – Dịch vụ (TTTM) quy mô 2,6 ha
                    </strong>{" "}
                    — công trình thương mại dịch vụ lớn bậc nhất huyện Thống Nhất, giải quyết
                    triệt để sự thiếu hụt các không gian mua sắm giải trí cao cấp tại khu vực
                    ngã tư Dầu Giây.
                  </p>

                  <div className="space-y-3">
                    {MALL_FEATURES.map((f) => (
                      <div key={f.title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <span className="text-2xl shrink-0">{f.icon}</span>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-1">{f.title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{f.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <InfoBox type="warn">
                    Sự hiện diện của TTTM 2,6ha không chỉ phục vụ cư dân nội khu mà còn thu hút
                    hàng chục nghìn lượt khách vãng lai di chuyển qua trục giao lộ huyết mạch
                    QL1A – QL20 ghé thăm, tạo{" "}
                    <strong>đòn bẩy kinh doanh cực lớn</strong> cho các căn Shophouse thương mại
                    liền kề.
                  </InfoBox>

                  <ArticleFigure
                    src={IMG_NEWS47["2"]}
                    alt="Phối cảnh 3D khu trung tâm thương mại dịch vụ quy mô 2,6 ha tại The Link City Dầu Giây"
                    caption="Khu phức hợp thương mại 2,6ha – Tâm điểm mua sắm, giải trí sôi động nhất khu vực"
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/mat-bang">
                      🏬 Xem bản đồ quy hoạch vị trí TTTM 2,6ha →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 3: Thể thao ── */}
              <section className="mb-12" id="the-thao">
                <SectionHeading id="the-thao">
                  3. Tổ Hợp Thể Thao Đa Năng: Cụm Sân Pickleball & Bóng Đá Tiêu Chuẩn
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sức khỏe và năng lượng tích cực là giá trị cốt lõi mà chủ đầu tư Kim Oanh
                    muốn mang lại cho cộng đồng cư dân The Link City. Tổ hợp thể thao liên hoàn
                    đón đầu các xu hướng thịnh hành nhất:
                  </p>

                  <div className="space-y-4">
                    {SPORTS_ITEMS.map((s) => (
                      <div key={s.n} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <span className="text-3xl font-black text-amber-200 leading-none w-10 shrink-0">{s.n}</span>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-2">{s.title}</p>
                          <ul className="space-y-1.5">
                            {s.items.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                                <span className="text-amber-400 flex-shrink-0 mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS47["3"]}
                    alt="Cụm sân thể thao pickleball và sân bóng đá mini hiện đại tại The Link City Dầu Giây"
                    caption="Cụm sân pickleball rực rỡ ánh đèn phục vụ đời sống thể thao năng động của cư dân"
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/hinh-anh">
                      ⚽ Xem hình ảnh thực tế sân thể thao đã vận hành →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 4: Công viên ── */}
              <section className="mb-12" id="cong-vien">
                <SectionHeading id="cong-vien">
                  4. Lá Phổi Xanh 21Ha: Công Viên Trung Tâm & Quảng Trường Đa Thế Hệ
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Giữa nhịp sống công nghiệp hối hả và tiếng còi xe của các trục quốc lộ, The
                    Link City tạo nên một <strong className="text-slate-800">"ốc đảo xanh"</strong>{" "}
                    yên bình và thanh khiết cho mỗi gia đình khi trở về nhà:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PARK_FEATURES.map((f) => (
                      <div key={f.title} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                        <p className="font-black text-emerald-800 text-sm mb-2">{f.icon} {f.title}</p>
                        <p className="text-emerald-700 text-sm leading-relaxed">{f.body}</p>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS47["4"]}
                    alt="Công viên cây xanh và khu vui chơi trẻ em ngoài trời tại khu đô thị The Link City Dầu Giây"
                    caption="Công viên trung tâm xanh mát – Không gian vui chơi tuổi thơ lý tưởng cho con trẻ"
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 5: Giáo dục & Y tế ── */}
              <section className="mb-12" id="giao-duc">
                <SectionHeading id="giao-duc">
                  5. Môi Trường Giáo Dục & Y Tế: Ươm Mầm Tương Lai Con Trẻ
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một khu đô thị chỉ thực sự bền vững khi nó nuôi dưỡng tốt thế hệ tương lai.
                    Tại The Link City, hệ thống hạ tầng an sinh xã hội được quy hoạch đồng bộ
                    ngay trong nội khu:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        icon: "🏫",
                        title: "Quỹ đất trường học liên cấp",
                        body: "Dự án dành riêng quỹ đất rộng lớn để xây dựng trường mầm non và tiểu học đạt chuẩn quốc gia. Trẻ em có thể tự đi bộ đến trường trên những cung đường nội khu an toàn, có gờ giảm tốc và camera giám sát 24/7.",
                      },
                      {
                        icon: "🏥",
                        title: "Phòng khám đa khoa & Nhà thuốc tiêu chuẩn",
                        body: "Hệ thống chăm sóc y tế ban đầu túc trực ngay tại các dãy phố thương mại, đảm bảo sức khỏe cho người lớn tuổi và trẻ nhỏ trong mọi tình huống.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <span className="text-2xl shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS47["5"]}
                    alt="Phối cảnh trường mầm non tiêu chuẩn quốc tế nội khu The Link City Dầu Giây"
                    caption="Hạ tầng giáo dục hoàn chỉnh ngay trong khuôn viên giúp cha mẹ hoàn toàn an tâm"
                    images={images}
                    index={4}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/phap-ly">
                      📑 Kiểm tra hạng mục quy hoạch xã hội được phê duyệt →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 6: Liên kết ngoại khu ── */}
              <section className="mb-12" id="ngoai-khu">
                <SectionHeading id="ngoai-khu">
                  6. Liên Kết Ngoại Khu "1 Chạm": 5 Phút Tiếp Cận Toàn Bộ Tiện Ích Thị Trấn
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bên cạnh 50+ tiện ích hiện đại ngay trước cửa nhà, cư dân The Link City còn
                    thừa hưởng trọn vẹn hạ tầng hành chính – dân sinh hiện hữu của đô thị Dầu
                    Giây trong bán kính chỉ{" "}
                    <strong className="text-slate-800">1 – 2 km</strong>:
                  </p>

                  <div className="space-y-3">
                    {EXTERNAL_LINKS.map((l) => (
                      <div key={l.time} className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
                        <div className="shrink-0 bg-amber-500 text-white rounded-full px-3 py-1 text-xs font-black whitespace-nowrap">
                          {l.time}
                        </div>
                        <p className="text-amber-800 text-sm leading-relaxed">{l.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/vi-tri">
                      📍 Khám phá bản đồ cự ly di chuyển chi tiết →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 7: Tiện ích & tăng giá ── */}
              <section className="mb-12" id="tang-gia">
                <SectionHeading id="tang-gia">
                  7. Tại Sao Dự Án Có Tiện Ích Thực Tế Luôn Tăng Giá Gấp 2 – 3 Lần Đất Phân Lô?
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Lịch sử thị trường bất động sản vùng ven (tại Bình Dương, Đồng Nai) đã chứng
                    minh một quy luật rõ ràng:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="font-black text-slate-700 text-sm mb-2">❌ Đất phân lô tự do</p>
                      <ul className="space-y-1.5">
                        {[
                          "Không có tiện ích, người mua chỉ để đầu cơ chờ bán lại",
                          "Đất vắng người ở, qua nhiều năm vẫn là bãi đất trống hoang tàn",
                          "Tốc độ tăng giá chậm, rất khó thanh khoản khi thị trường trầm lắng",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                            <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                      <p className="font-black text-amber-800 text-sm mb-2">✅ Đất khu đô thị All-In-One</p>
                      <ul className="space-y-1.5">
                        {[
                          "Khi công viên, sân bóng, quán cà phê và trường học mọc lên, người dân kéo về ở thật",
                          "Phát sinh dòng tiền cho thuê, kinh doanh và giá trị BĐS tăng trưởng cấp số nhân",
                          "Tăng từ 100% – 300% sau 3 – 5 năm (đã chứng minh tại Dĩ An, Thuận An, Biên Hòa)",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-amber-700 text-sm leading-relaxed">
                            <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <InfoBox type="warn">
                    Với mức giá khởi điểm chỉ từ{" "}
                    <strong>1,85 tỷ/nền</strong> (tương đương 19,5 – 22 triệu/m²) cho một đô thị
                    21ha đầy đủ tiện ích như The Link City, đây chính là{" "}
                    <strong>"món hời" hiếm có</strong> cho những nhà đầu tư nhìn xa trông rộng.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/bang-gia">
                      💰 Xem bảng giá chi tiết các lô mở bán đợt 1 →
                    </LinkBtn>
                    <LinkBtn href="/the-link-city/thanh-toan">
                      🧮 Xem phương án thanh toán và vay ngân hàng 70% →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── FAQ ── */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">
                  8. Bộ Câu Hỏi Thường Gặp Về Tiện Ích & Phí Quản Lý Dự Án
                </SectionHeading>
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

              {/* ── Section 9: Tham quan ── */}
              <section className="mb-12" id="tham-quan">
                <SectionHeading id="tham-quan">
                  9. Đăng Ký Tham Quan Thực Tế Sa Bàn Tiện Ích The Link City
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trăm nghe không bằng một thấy! Hãy tận mắt chiêm ngưỡng sa bàn kiến trúc
                    21ha chi tiết từng phân khu và dạo bước trên những cung đường rợp bóng cây
                    thực tế tại The Link City Dầu Giây.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: "🏙️", title: "Sa bàn 21ha", desc: "Chi tiết từng phân khu, trục đường và hạng mục tiện ích" },
                      { icon: "🌳", title: "Tham quan thực địa", desc: "Dạo bước trực tiếp trên các tuyến đường nhựa đã hoàn thiện" },
                      { icon: "🚌", title: "Xe đưa đón miễn phí", desc: "Xe đưa đón khứ hồi phục vụ mọi ngày cuối tuần" },
                    ].map((item) => (
                      <div key={item.icon} className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
                        <p className="text-2xl mb-2">{item.icon}</p>
                        <p className="font-black text-amber-800 text-sm mb-1">{item.title}</p>
                        <p className="text-amber-600 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 space-y-3">
                    <p className="font-black text-amber-800 text-base">
                      LIÊN HỆ ĐẶT LỊCH XE ĐƯA ĐÓN THỰC ĐỊA MIỄN PHÍ
                    </p>
                    <div className="space-y-2 text-sm text-amber-700">
                      <p><strong>Dự án:</strong> The Link City Dầu Giây (KDC A1-C1 Đô thị Dầu Giây)</p>
                      <p>
                        <strong>Website:</strong>{" "}
                        <a href="https://kimoanhdongnai.com.vn/the-link-city" className="underline hover:text-amber-900">
                          kimoanhdongnai.com.vn/the-link-city
                        </a>
                      </p>
                      <p><strong>Trụ sở chính:</strong> 268A Phan Trung, P. Tam Hiệp, TP. Biên Hòa, Đồng Nai</p>
                      <p><strong>Văn phòng dự án:</strong> Ngã tư QL1A & QL20, xã Dầu Giây, H. Thống Nhất, Đồng Nai</p>
                    </div>
                  </div>

                  <InfoBox>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Bản quyền bài viết thuộc về Kim Oanh Đồng Nai — Mọi thông tin sao chép
                      vui lòng trích dẫn nguồn:{" "}
                      <a href="https://kimoanhdongnai.com.vn/the-link-city/tien-ich" className="text-amber-600 underline">
                        kimoanhdongnai.com.vn/the-link-city/tien-ich
                      </a>
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Tìm hiểu thêm */}
              <section className="mb-12">
                <SectionHeading>Các nội dung liên quan về The Link City</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city",                                                            label: "The Link City Dầu Giây — Tổng quan dự án" },
                    { href: "/the-link-city/tien-ich",                                                   label: "Tiện ích nội khu The Link City" },
                    { href: "/the-link-city/vi-tri",                                                     label: "Vị trí & Liên kết vùng" },
                    { href: "/the-link-city/bang-gia",                                                   label: "Bảng giá The Link City mới nhất" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                                 label: "Tổng quan The Link City Dầu Giây" },
                    { href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",     label: "Bài toán vay ngân hàng The Link City" },
                    { href: "/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026",      label: "So sánh The Link City vs đất thổ cư" },
                    { href: "/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026", label: "Quy trình mua bán & tiêu chuẩn xây dựng" },
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
                    The Link City Dầu Giây không chỉ là một dự án bất động sản — đây là một{" "}
                    <strong className="text-slate-800">hệ sinh thái sống hoàn chỉnh</strong> với
                    hơn 50 hạng mục tiện ích được quy hoạch đồng bộ, từ trung tâm thương mại
                    2,6ha, cụm sân thể thao pickleball đẳng cấp, công viên đa thế hệ xanh mát
                    đến trường học và phòng khám nội khu.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi tiện ích thực sự hình thành và cư dân bắt đầu về an cư, The Link City
                    sẽ là điểm tham chiếu mới cho toàn thị trường bất động sản tỉnh Đồng Nai —
                    và những ai đầu tư sớm nhất sẽ là những người thắng lớn nhất.
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài được tổng hợp từ các nguồn công khai và mang tính tham
                  khảo. Các hình ảnh phối cảnh mang tính minh họa. Cần đối chiếu thông tin
                  chính thức trước khi đưa ra quyết định giao dịch.
                  Ban biên tập Kim Oanh Đồng Nai — Cập nhật: {PUBLISHED}
                </p>
              </div>

            </article>

            {/* ── Sidebar ──────────────────────────────────── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

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
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-amber-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white"
                      >
                        <span>{l.label}</span>
                        <span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Key amenities summary */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-bold text-amber-800 text-sm mb-3">Tiện ích nổi bật</p>
                  <div className="space-y-2">
                    {[
                      "🏬 TTTM 2,6ha",
                      "⚽ Sân bóng đá cỏ nhân tạo",
                      "🏸 Cụm sân pickleball",
                      "🌳 Công viên đa thế hệ",
                      "🏫 Trường học liên cấp",
                      "🏥 Phòng khám & Nhà thuốc",
                      "🏃 Đường chạy bộ & Gym ngoài trời",
                    ].map((item) => (
                      <p key={item} className="text-amber-700 text-xs">{item}</p>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Tổng quan The Link City",       href: "/tin-tuc/tong-quan-the-link-city-dau-giay" },
                      { label: "Bài toán vay ngân hàng",        href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026" },
                      { label: "So sánh vs đất thổ cư",         href: "/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026" },
                      { label: "Quy trình mua bán & XD",        href: "/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Đặt lịch tham quan miễn phí</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Xe đưa đón khứ hồi tham quan sa bàn 21ha và tiện ích thực tế cuối tuần.
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
              Muốn trải nghiệm trực tiếp 50+ tiện ích The Link City?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Đặt lịch tham quan thực địa miễn phí — xe đưa đón khứ hồi từ TP.HCM và Biên Hòa
              mỗi cuối tuần. Tận mắt chiêm ngưỡng sa bàn 21ha và những cung đường nội khu đã
              hoàn thiện.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/the-link-city/tien-ich"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Xem tiện ích The Link City →
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
              href: "/tin-tuc/tong-quan-the-link-city-dau-giay",
              title: "Tổng Quan Dự Án The Link City Dầu Giây 2026",
              description: "Thông số kỹ thuật, vị trí, pháp lý và tiềm năng đầu tư toàn diện.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026",
              title: "So Sánh The Link City vs Đất Thổ Cư Dầu Giây 2026",
              description: "6 tiêu chí trực diện và 5 ngòi nổ tăng giá giúp nhà đầu tư quyết định đúng.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",
              title: "Bảng Giá The Link City & Bài Toán Vay Ngân Hàng 2026",
              description: "Chi tiết giá từng block, 4 phương thức thanh toán và bảng tính trả nợ.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026",
              title: "Quy Trình Mua Bán The Link City & Tiêu Chuẩn Xây Dựng T3-2b",
              description: "5 bước mua bán chuẩn pháp lý và bảng thông số kỹ thuật mẫu nhà phố.",
              tag: "Tin dự án",
            },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}
