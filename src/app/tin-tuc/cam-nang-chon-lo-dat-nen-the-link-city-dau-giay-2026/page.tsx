"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS50 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/cam-nang-chon-lo-dat-nen-the-link-city-dau-giay-2026`;
const PUBLISHED     = "14/09/2026";
const PUBLISHED_ISO = "2026-09-14";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cẩm Nang Chọn Lô Đất Nền The Link City Dầu Giây 2026: Phân Tích Chi Tiết Block LK17A, LK17B & Hướng Đẹp Nhất",
  description:
    "Phân tích chi tiết các block đất nền The Link City Dầu Giây: So sánh LK17A, LK17B, ưu nhược điểm từng trục đường N20, D1, hướng phong thủy và chiến lược chọn lô đẹp nhất.",
  image: [IMG_NEWS50["1"], IMG_NEWS50["2"], IMG_NEWS50["4"]],
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
    "đất nền The Link City Dầu Giây, LK17A The Link City, LK17B The Link City, chọn lô The Link City, mặt bằng The Link City",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Tôi chọn lô đất có bị dính hố ga hoặc tủ điện trước cửa không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trong bản vẽ quy hoạch 1/500 chi tiết của The Link City, vị trí các hố ga thu nước và tủ điện hạ thế đều được kỹ sư bố trí khéo léo tại ranh giới giữa hai nhà, tuyệt đối không nằm chắn chính giữa cửa ra vào hay phong thủy tim nhà của khách hàng.",
      },
    },
    {
      "@type": "Question",
      name: "Nếu tôi đặt cọc giữ chỗ nhưng muốn đổi sang lô khác có được không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Được. Trong thời gian giữ chỗ ưu tiên trước khi ký Hợp đồng nguyên tắc chính thức, khách hàng hoàn toàn có quyền chuyển đổi sang mã lô khác trong cùng giỏ hàng nếu lô đó còn trống, mà không bị mất bất kỳ khoản phí nào.",
      },
    },
    {
      "@type": "Question",
      name: "Sổ hồng của từng block LK17A, LK17B đứng tên ai khi mua?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khách hàng sau khi hoàn tất thủ tục thanh toán và ký hợp đồng chuyển nhượng công chứng tại Văn phòng Công chứng nhà nước sẽ được cấp Sổ hồng riêng đứng tên cá nhân của khách hàng với thời hạn sử dụng đất ở lâu dài vĩnh viễn.",
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
      name: "Cẩm nang chọn lô The Link City Dầu Giây 2026",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS50["1"],
    alt: "Bản vẽ sơ đồ quy hoạch phân lô 1 phần 500 các block LK17A LK17B dự án The Link City Dầu Giây",
    caption: "Sơ đồ phân lô quy hoạch 1/500 minh bạch từng ranh giới, lộ giới đường và mã số nền đất",
  },
  {
    src: IMG_NEWS50["2"],
    alt: "Phối cảnh 3D dãy nhà phố liên kế block LK17A đường N20 dự án The Link City Dầu Giây",
    caption: "Phối cảnh dãy nhà phố liên kế LK17A thiết kế 1 trệt 2 lầu đồng bộ, hiện đại dọc trục đường N20",
  },
  {
    src: IMG_NEWS50["3"],
    alt: "Cảnh quan công viên cây xanh và đồi cỏ thực tế liền kề block LK17B The Link City Dầu Giây",
    caption: "Không gian xanh hiện hữu ngay trước thềm nhà mang lại giá trị sống nghỉ dưỡng mỗi ngày",
  },
  {
    src: IMG_NEWS50["4"],
    alt: "Phối cảnh 3D căn góc 2 mặt tiền hiện đại kết hợp kinh doanh cafe tại The Link City Dầu Giây",
    caption: "Căn góc 2 mặt tiền với thiết kế mở tối đa, lý tưởng cho mô hình cafe sân vườn và văn phòng",
  },
  {
    src: IMG_NEWS50["5"],
    alt: "Hạ tầng thực tế đường nhựa vỉa hè cây xanh hoàn thiện tại khu đô thị The Link City Dầu Giây",
    caption: "Hạ tầng đường nội khu trải nhựa hoàn chỉnh 100%, sẵn sàng bàn giao nền xây dựng ngay",
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
const ZONES = [
  {
    n: "01",
    icon: "🏪",
    title: "Phân vùng Thương mại – Dịch vụ cửa ngõ",
    body: "Nằm sát Quốc lộ 1A và trục đường đôi dẫn vào TTTM 2,6ha. Tập trung các dãy Shophouse và đất nền kinh doanh lưu lượng cao nhất.",
    color: "amber",
  },
  {
    n: "02",
    icon: "🏙️",
    title: "Phân vùng Lõi trung tâm (LK17A, LK17B...)",
    body: "Dọc theo các trục đường nội khu thông suốt như đường N20, liền kề cụm tiện ích thể thao. Thanh khoản cao nhất, giá dễ tiếp cận nhất.",
    color: "blue",
  },
  {
    n: "03",
    icon: "🌿",
    title: "Phân vùng Sinh thái ven công viên",
    body: "Nằm sâu vào bên trong, bao bọc bởi mảng xanh và quỹ đất trường học liên cấp. Yên tĩnh tuyệt đối, lý tưởng cho gia đình an cư.",
    color: "emerald",
  },
];

const LK17A_ADVANTAGES = [
  {
    title: "Kích Thước Vàng (5m × 19m = 95,0m²)",
    items: [
      "Chiều ngang 5,0m: Tiêu chuẩn hoàn hảo để thiết kế gara ô tô 7 chỗ, phòng khách rộng rãi và giếng trời thoáng đãng",
      "Chiều dài 19,0m: Sân trước 3m đậu xe hơi + sân sau 2m giặt phơi + thân nhà 14m xây 3 tầng sinh hoạt theo mẫu T3-2b",
    ],
  },
  {
    title: "Mặt Tiền Tuyến Đường N20 Thông Suốt",
    items: [
      "Lộ giới rộng rãi, vỉa hè lát đá 3m – 4m mỗi bên, kết nối trực tiếp ra công viên và cụm sân thể thao",
      "Lưu lượng ổn định: đủ để kinh doanh tiệm tạp hóa, spa, quán ăn gia đình mà không quá ồn như quốc lộ",
    ],
  },
  {
    title: "Mức Giá Dễ Tiếp Cận Nhất: 1,852 Tỷ Đồng",
    items: [
      "Tổng giá 1.852.500.000 VNĐ (đã gồm thuế phí) — mức giá \"vừa miếng\" cho nhà đầu tư vừa và nhỏ",
      "Kết hợp vay 70% ngân hàng: vốn tự có thực tế ban đầu chỉ cần ~550 triệu đồng",
    ],
  },
];

const LK17B_ADVANTAGES = [
  { icon: "🌿", text: "Nằm cách trục quốc lộ một khoảng đệm cây xanh dày đặc — tách biệt hoàn toàn khỏi tiếng còi xe và khói bụi" },
  { icon: "⚽", text: "Chỉ vài bước chân đến sân bóng đá, sân pickleball và công viên đồi cỏ để tập thể dục mỗi sáng" },
  { icon: "👨‍👩‍👧", text: "Cộng đồng dân trí cao: thu hút bác sĩ, kỹ sư, quản lý cấp cao tại KCN Dầu Giây định cư lâu dài" },
];

const COMPARISON_TABLE = [
  { criteria: "Tổng mức vốn đầu tư",   std: "1,85 tỷ – 2,2 tỷ VNĐ (Vừa vặn)",         corner: "2,8 tỷ – 3,8 tỷ VNĐ (Cần vốn dày hơn)" },
  { criteria: "Mặt tiền & Tầm nhìn",    std: "Mặt tiền 5m, thoáng trước và sau nhà",    corner: "2 mặt tiền, tầm nhìn panorama 180°" },
  { criteria: "Khả năng kinh doanh",    std: "Phù hợp văn phòng nhỏ, ở hoặc kinh doanh online", corner: "Cực tốt: cafe sân vườn, nhà thuốc, siêu thị mini" },
  { criteria: "Tính thanh khoản",       std: "Cực nhanh — tổng tiền nhỏ, đại đa số mua được", corner: "Lâu hơn nhưng chốt lời rất cao khi đúng khách" },
  { criteria: "Biên độ tăng giá",       std: "Đều đặn 15% – 20%/năm theo hạ tầng",       corner: "Đột phá nhờ tính khan hiếm (2–4 lô/block)" },
];

const CAPITAL_STRATEGIES = [
  {
    range: "Vốn tự có 500tr – 700tr",
    strategy: "Chọn lô tiêu chuẩn 95m² (Block LK17A)",
    detail: "Đòn bẩy vay 70%, trả góp 12–14tr/tháng, thanh khoản cực nhanh",
    color: "blue",
  },
  {
    range: "Vốn tự có 1,5 tỷ – 2,2 tỷ",
    strategy: "Mua trả thẳng hoặc thanh toán sớm 95%",
    detail: "Nhận chiết khấu khủng trừ thẳng vào giá hợp đồng — lợi nhuận ngay khi vào tiền",
    color: "amber",
  },
  {
    range: "Vốn tự có từ 3 tỷ trở lên",
    strategy: "\"Săn\" lô góc 2 mặt tiền hoặc Shophouse trục đường đôi",
    detail: "Khai thác dòng tiền cho thuê 15 – 30 triệu/tháng, tài sản \"độc bản\" giữ càng lâu càng có giá",
    color: "emerald",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function CamNangChonLoPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Cẩm nang chọn lô The Link City Dầu Giây 2026</span>
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
              <span className="text-xs text-slate-400">· 14 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Cẩm Nang Chọn Lô Đất Nền The Link City Dầu Giây 2026: Phân Tích Chi Tiết Từng Block LK17A, LK17B & Hướng Đẹp Nhất
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Hướng dẫn chuyên sâu giúp bạn phân tích đúng vị trí lô đất phù hợp tại{" "}
              <a href="/the-link-city" className="text-amber-600 font-semibold hover:underline">
                The Link City
              </a>{" "}
              Dầu Giây: từ ưu thế từng block, so sánh lô thường vs lô góc, tư vấn hướng phong
              thủy đến chiến lược phân bổ vốn thực chiến.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to sơ đồ phân lô The Link City"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS50["1"]}
                alt="Bản vẽ sơ đồ quy hoạch phân lô 1 phần 500 các block LK17A LK17B dự án The Link City Dầu Giây"
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
              Sơ đồ phân lô quy hoạch 1/500 minh bạch từng ranh giới, lộ giới đường và mã số nền đất
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
                    ["#tong-the",      "1. Bức tranh tổng thể 21ha"],
                    ["#lk17a",         "2. Block LK17A — Top Seller đường N20"],
                    ["#lk17b",         "3. Block LK17B — An cư ven công viên"],
                    ["#so-sanh",       "4. Lô 95m² vs Lô góc 2 mặt tiền"],
                    ["#phong-thuy",    "5. Hướng nhà & Phong thủy"],
                    ["#chien-luoc",    "6. Chiến lược chọn lô theo dòng vốn"],
                    ["#faq",           "7. Câu hỏi thường gặp"],
                    ["#dang-ky",       "8. Tải sơ đồ & Đặt lịch chọn lô"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* ── Section 1: Tổng thể ── */}
              <section className="mb-12" id="tong-the">
                <SectionHeading id="tong-the">
                  1. Bức Tranh Tổng Thể Mặt Bằng 21Ha: Đâu Là Các Phân Khu Trọng Điểm?
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi cầm trên tay sơ đồ phân lô tổng thể tỷ lệ 1/500 của dự án The Link City
                    với{" "}
                    <strong className="text-slate-800">1.397 sản phẩm</strong>, không ít khách
                    hàng bị "hoa mắt". Tuy nhiên, nếu nắm vững cấu trúc giao thông và bố cục
                    không gian, bạn sẽ dễ dàng nhận diện được các "tọa độ vàng" phù hợp nhất.
                  </p>

                  <p className="text-slate-700 font-bold text-sm">
                    Toàn bộ giai đoạn 21ha được chia thành 3 phân vùng chức năng rõ rệt:
                  </p>

                  <div className="space-y-3">
                    {ZONES.map((z) => {
                      const border = z.color === "amber" ? "border-amber-200 bg-amber-50" : z.color === "blue" ? "border-blue-200 bg-blue-50" : "border-emerald-200 bg-emerald-50";
                      const title  = z.color === "amber" ? "text-amber-800" : z.color === "blue" ? "text-blue-800" : "text-emerald-800";
                      const body   = z.color === "amber" ? "text-amber-700" : z.color === "blue" ? "text-blue-700" : "text-emerald-700";
                      return (
                        <div key={z.n} className={`flex items-start gap-4 rounded-2xl border ${border} p-5`}>
                          <div className="flex flex-col items-center gap-1 shrink-0 w-10">
                            <span className="text-2xl font-black text-slate-200 leading-none">{z.n}</span>
                            <span className="text-xl">{z.icon}</span>
                          </div>
                          <div>
                            <p className={`font-black text-sm mb-1 ${title}`}>{z.title}</p>
                            <p className={`text-sm leading-relaxed ${body}`}>{z.body}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/mat-bang">
                      📐 Xem bản vẽ quy hoạch 1/500 chi tiết từng phân khu →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 2: LK17A ── */}
              <section className="mb-12" id="lk17a">
                <SectionHeading id="lk17a">
                  2. Mổ Xẻ Chi Tiết Block LK17A (Trục Đường N20): Vì Sao Đây Là "Top Seller"?
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong giỏ hàng đợt 1 mở bán năm 2026, Block LK17A được đánh giá là "ngôi
                    sao sáng" với tốc độ giữ chỗ nhanh nhất toàn dự án. Các mã lô từ{" "}
                    <strong className="text-slate-800">DG3.LK17A-42</strong> đến{" "}
                    <strong className="text-slate-800">DG3.LK17A-47</strong> sở hữu 3 ưu thế
                    vượt trội:
                  </p>

                  <div className="space-y-4">
                    {LK17A_ADVANTAGES.map((adv, i) => (
                      <div key={adv.title} className="rounded-2xl border border-amber-200 bg-amber-50 overflow-hidden">
                        <div className="bg-amber-500 text-white px-5 py-3 flex items-center gap-2">
                          <span className="font-black text-amber-200 text-lg">0{i + 1}</span>
                          <p className="font-black text-sm">{adv.title}</p>
                        </div>
                        <ul className="divide-y divide-amber-100">
                          {adv.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 px-5 py-3">
                              <span className="text-amber-500 font-bold shrink-0 mt-0.5">•</span>
                              <span className="text-amber-700 text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS50["2"]}
                    alt="Phối cảnh 3D dãy nhà phố liên kế block LK17A đường N20 dự án The Link City Dầu Giây"
                    caption="Phối cảnh dãy nhà phố liên kế LK17A thiết kế 1 trệt 2 lầu đồng bộ, hiện đại dọc trục đường N20"
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/bang-gia">
                      💰 Tra cứu giá cụ thể mã lô LK17A-42, 43, 44, 45 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 3: LK17B ── */}
              <section className="mb-12" id="lk17b">
                <SectionHeading id="lk17b">
                  3. Phân Tích Block LK17B & Các Phân Khu Ven Công Viên: Lựa Chọn Vàng Để An Cư
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu LK17A thiên về tính năng động và giao thương, thì Block LK17B và các dãy
                    liền kề công viên lại là <strong className="text-slate-800">"chốn đi về"</strong>{" "}
                    bình yên lý tưởng cho những khách hàng mua để ở thực:
                  </p>

                  <div className="space-y-3">
                    {LK17B_ADVANTAGES.map((item) => (
                      <div key={item.text} className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                        <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                        <p className="text-emerald-700 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS50["3"]}
                    alt="Cảnh quan công viên cây xanh và đồi cỏ thực tế liền kề block LK17B The Link City Dầu Giây"
                    caption="Không gian xanh hiện hữu ngay trước thềm nhà mang lại giá trị sống nghỉ dưỡng mỗi ngày"
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 4: So sánh lô thường vs lô góc ── */}
              <section className="mb-12" id="so-sanh">
                <SectionHeading id="so-sanh">
                  4. So Sánh: Nên Chọn Lô Tiêu Chuẩn 95m² Hay Lô Góc 2 Mặt Tiền 130m² – 160m²?
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Việc lựa chọn giữa lô thường và lô góc phụ thuộc hoàn toàn vào{" "}
                    <strong className="text-slate-800">khẩu vị rủi ro và chiến lược dòng tiền</strong>{" "}
                    của từng nhà đầu tư:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[480px]">
                      <thead>
                        <tr className="bg-slate-700 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-36">Tiêu chí</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Lô Tiêu Chuẩn (95m²)</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Lô Góc 2 Mặt Tiền</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {COMPARISON_TABLE.map((row, i) => (
                          <tr key={row.criteria} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700 text-sm align-top">{row.criteria}</td>
                            <td className="px-4 py-3 text-blue-700 text-sm align-top">{row.std}</td>
                            <td className="px-4 py-3 text-amber-700 font-medium text-sm align-top">{row.corner}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <InfoBox type="warn">
                    <p className="font-bold mb-2">📌 Lời khuyên:</p>
                    <ul className="space-y-2">
                      <li>• <strong>Vốn nhàn rỗi 500tr – 800tr (kết hợp vay ngân hàng):</strong> Chọn Lô tiêu chuẩn 95m² (LK17A) — an toàn tài chính, dễ bán lại khi cần tiền gấp.</li>
                      <li>• <strong>Có sẵn tiền mặt từ 2,5 tỷ – 3,5 tỷ và muốn tạo dòng tiền cho thuê 15 – 25 triệu/tháng:</strong> Săn ngay Lô góc 2 mặt tiền — tài sản "độc bản", giữ càng lâu càng có giá trị.</li>
                    </ul>
                  </InfoBox>

                  <ArticleFigure
                    src={IMG_NEWS50["4"]}
                    alt="Phối cảnh 3D căn góc 2 mặt tiền hiện đại kết hợp kinh doanh cafe tại The Link City Dầu Giây"
                    caption="Căn góc 2 mặt tiền với thiết kế mở tối đa, lý tưởng cho mô hình cafe sân vườn và văn phòng"
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 5: Phong thủy ── */}
              <section className="mb-12" id="phong-thuy">
                <SectionHeading id="phong-thuy">
                  5. Tư Vấn Hướng Nhà & Phong Thủy: Đông Tứ Mệnh vs Tây Tứ Mệnh
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong văn hóa Á Đông, hướng đất không chỉ quyết định phong thủy tài lộc mà
                    còn ảnh hưởng trực tiếp đến{" "}
                    <strong className="text-slate-800">vi khí hậu</strong> của ngôi nhà:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Hướng Đông – Đông Nam – Nam",
                        subtitle: "Đông Tứ Trạch",
                        icon: "🌅",
                        color: "blue",
                        climate: "Đón trọn luồng gió mát tự nhiên từ hướng biển Đông. Buổi chiều không bị nắng gắt chiếu trực diện, luôn mát mẻ và tiết kiệm điện máy lạnh.",
                        fengshui: "Vượng khí cho gia chủ thuộc Đông Tứ Mệnh (hợp mệnh Mộc, Hỏa, Thủy) — ấm êm, hòa thuận gia đạo và sức khỏe dồi dào.",
                      },
                      {
                        title: "Hướng Tây – Tây Bắc – Bắc",
                        subtitle: "Tây Tứ Trạch",
                        icon: "🌇",
                        color: "amber",
                        climate: "Đón nắng chiều, thích hợp phơi đồ và diệt khuẩn tự nhiên. Với khoảng lùi trước 3m và ban công vươn 1,2m của mẫu T3-2b, chỉ cần trồng thêm lộc vừng hoặc lam gỗ composite là mát rượi.",
                        fengshui: "Hợp với gia chủ thuộc Tây Tứ Mệnh (hợp mệnh Kim, Thổ). Hướng Tây mang năng lượng Kim — biểu trưng tiền tài, sự nghiệp vững vàng và quyết đoán trong kinh doanh.",
                      },
                    ].map((h) => {
                      const border = h.color === "blue" ? "border-blue-200" : "border-amber-200";
                      const bg     = h.color === "blue" ? "bg-blue-50"     : "bg-amber-50";
                      const hd     = h.color === "blue" ? "text-blue-800"  : "text-amber-800";
                      const sub    = h.color === "blue" ? "text-blue-600"  : "text-amber-600";
                      const body   = h.color === "blue" ? "text-blue-700"  : "text-amber-700";
                      return (
                        <div key={h.title} className={`rounded-2xl border ${border} ${bg} p-5`}>
                          <p className="text-2xl mb-2">{h.icon}</p>
                          <p className={`font-black text-sm ${hd}`}>{h.title}</p>
                          <p className={`text-xs font-semibold mb-3 ${sub}`}>({h.subtitle})</p>
                          <p className={`text-xs font-bold mb-1 ${hd}`}>Vi khí hậu:</p>
                          <p className={`text-sm leading-relaxed mb-3 ${body}`}>{h.climate}</p>
                          <p className={`text-xs font-bold mb-1 ${hd}`}>Phong thủy:</p>
                          <p className={`text-sm leading-relaxed ${body}`}>{h.fengshui}</p>
                        </div>
                      );
                    })}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS50["5"]}
                    alt="Hạ tầng thực tế đường nhựa vỉa hè cây xanh hoàn thiện tại khu đô thị The Link City Dầu Giây"
                    caption="Hạ tầng đường nội khu trải nhựa hoàn chỉnh 100%, sẵn sàng bàn giao nền xây dựng ngay"
                    images={images}
                    index={4}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/phap-ly">
                      📑 Xem quy định khoảng lùi xây dựng và cấp phép →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 6: Chiến lược vốn ── */}
              <section className="mb-12" id="chien-luoc">
                <SectionHeading id="chien-luoc">
                  6. Chiến Lược Chọn Lô Đất Sinh Lời Cao Nhất Theo Từng Mức Vốn Đầu Tư
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Để tối ưu hóa hiệu quả đầu tư, hãy áp dụng chiến lược phân bổ vốn thực
                    chiến sau:
                  </p>

                  {/* Strategy overview box */}
                  <div className="rounded-2xl border border-amber-300 bg-amber-50 overflow-hidden">
                    <div className="bg-amber-500 text-white px-5 py-3 text-center">
                      <p className="font-black text-sm uppercase tracking-wide">
                        Chiến Lược Chọn Lô The Link City Theo Dòng Vốn
                      </p>
                    </div>
                    <div className="divide-y divide-amber-200">
                      {CAPITAL_STRATEGIES.map((s, i) => (
                        <div key={s.range} className="flex items-center gap-3 px-5 py-3">
                          <span className="font-black text-amber-500 text-sm w-5 shrink-0">{i + 1}</span>
                          <div>
                            <span className="text-amber-800 text-sm font-bold">{s.range}: </span>
                            <span className="text-amber-700 text-sm">{s.strategy}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {CAPITAL_STRATEGIES.map((s) => {
                      const colors: Record<string, string> = {
                        blue:    "border-blue-200 bg-blue-50",
                        amber:   "border-amber-200 bg-amber-50",
                        emerald: "border-emerald-200 bg-emerald-50",
                      };
                      const hd: Record<string, string> = {
                        blue: "text-blue-800", amber: "text-amber-800", emerald: "text-emerald-800",
                      };
                      const bd: Record<string, string> = {
                        blue: "text-blue-600", amber: "text-amber-600", emerald: "text-emerald-600",
                      };
                      return (
                        <div key={s.range} className={`rounded-2xl border ${colors[s.color]} p-5`}>
                          <p className={`font-black text-sm mb-1 ${hd[s.color]}`}>{s.range}</p>
                          <p className={`font-semibold text-sm mb-1 ${hd[s.color]}`}>→ {s.strategy}</p>
                          <p className={`text-sm leading-relaxed ${bd[s.color]}`}>{s.detail}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/thanh-toan">
                      🧮 Trải nghiệm ứng dụng tính toán số tiền trả góp →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── FAQ ── */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">
                  7. Các Câu Hỏi Thường Gặp Khi Chọn Mua Vị Trí Lô Đất
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

              {/* ── Section 8: Đăng ký ── */}
              <section className="mb-12" id="dang-ky">
                <SectionHeading id="dang-ky">
                  8. Tải Sơ Đồ Phân Lô Độ Nét Cao & Đặt Lịch Chọn Lô Đẹp Cùng Kim Oanh
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Các vị trí lô đẹp tại Block LK17A và các lô góc đợt 1 thường có tốc độ
                    "bay hàng" rất nhanh. Để không bỏ lỡ cơ hội sở hữu nền đất ưng ý nhất,
                    liên hệ ngay để nhận:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: "🗺️", title: "Sơ đồ phân lô PDF", desc: "Bản vẽ 1/500 độ nét cao thể hiện chi tiết LK17A, LK17B và các lô góc" },
                      { icon: "📊", title: "Giỏ hàng cập nhật", desc: "Danh sách mã lô còn trống đợt 1 kèm giá niêm yết mới nhất" },
                      { icon: "👨‍💼", title: "Tư vấn chọn lô", desc: "Chuyên viên phân tích vị trí tối ưu theo mục tiêu và dòng vốn của bạn" },
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
                      LIÊN HỆ BỘ PHẬN TƯ VẤN QUY HOẠCH & CHỌN LÔ
                    </p>
                    <div className="space-y-2 text-sm text-amber-700">
                      <p><strong>Dự án:</strong> The Link City Dầu Giây (KDC A1-C1 Đô thị Dầu Giây)</p>
                      <p>
                        <strong>Website:</strong>{" "}
                        <a href="https://kimoanhdongnai.com.vn/the-link-city" className="underline hover:text-amber-900">
                          kimoanhdongnai.com.vn/the-link-city
                        </a>
                      </p>
                      <p><strong>Trụ sở giao dịch:</strong> 268A Phan Trung, P. Tam Hiệp, TP. Biên Hòa, Đồng Nai</p>
                      <p><strong>Văn phòng dự án:</strong> Ngã tư QL1A & QL20, xã Dầu Giây, H. Thống Nhất, Đồng Nai</p>
                    </div>
                  </div>

                  <InfoBox>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Bản quyền bài viết thuộc về Kim Oanh Đồng Nai — Mọi thông tin sao chép
                      vui lòng trích dẫn nguồn:{" "}
                      <a href="https://kimoanhdongnai.com.vn/the-link-city/mat-bang" className="text-amber-600 underline">
                        kimoanhdongnai.com.vn/the-link-city/mat-bang
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
                    { href: "/the-link-city",                                                              label: "The Link City Dầu Giây — Tổng quan dự án" },
                    { href: "/the-link-city/mat-bang",                                                     label: "Mặt bằng phân lô The Link City" },
                    { href: "/the-link-city/bang-gia",                                                     label: "Bảng giá The Link City mới nhất" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                                   label: "Tổng quan The Link City Dầu Giây" },
                    { href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",       label: "Bài toán vay ngân hàng The Link City" },
                    { href: "/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026", label: "Quy trình mua bán & tiêu chuẩn xây dựng" },
                    { href: "/tin-tuc/shophouse-the-link-city-dau-giay-tiem-nang-kinh-doanh-2026",        label: "Shophouse The Link City 2026" },
                    { href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",                      label: "Nhật ký thực địa The Link City" },
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
                    Không có một lô đất "tốt nhất cho tất cả mọi người" — chỉ có lô đất{" "}
                    <strong className="text-slate-800">phù hợp nhất với từng người</strong> về
                    mục tiêu, ngân sách và tầm nhìn đầu tư. Hy vọng cẩm nang này giúp bạn khoanh
                    vùng được đúng sản phẩm tại The Link City Dầu Giây trước khi bước vào bàn
                    đàm phán.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một điều chắc chắn: dù bạn chọn lô tiêu chuẩn 95m² tại LK17A, lô ven công
                    viên LK17B hay lô góc 2 mặt tiền độc bản — khi mua ở{" "}
                    <strong className="text-amber-600">giá đợt 1 năm 2026</strong>, bạn đang
                    nắm giữ một trong những suất đầu tư rẻ nhất còn lại tại tọa độ vàng ngã tư
                    Dầu Giây.
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài mang tính tham khảo. Phân tích phong thủy là quan niệm
                  văn hóa, không phải căn cứ pháp lý. Dự báo tăng giá là kỳ vọng, không phải
                  cam kết. Cần đối chiếu thông tin chính thức trước khi giao dịch.
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

                {/* Quick guide */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-bold text-amber-800 text-sm mb-3">Chọn nhanh theo nhu cầu</p>
                  <div className="space-y-2">
                    {[
                      ["💰 Dòng vốn nhỏ (500tr+)", "→ LK17A 95m² từ 1,85 tỷ"],
                      ["🏡 Mua ở thực / An cư",    "→ LK17B ven công viên"],
                      ["📈 Đầu tư dài hạn",         "→ Lô góc 2 mặt tiền"],
                      ["🏪 Khai thác cho thuê",      "→ Shophouse trục đường đôi"],
                    ].map(([label, val]) => (
                      <div key={label}>
                        <p className="text-amber-700 text-xs">{label}</p>
                        <p className="text-amber-900 text-xs font-bold">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Tổng quan The Link City",     href: "/tin-tuc/tong-quan-the-link-city-dau-giay" },
                      { label: "Nhật ký thực địa",            href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026" },
                      { label: "Quy trình mua bán & XD",      href: "/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026" },
                      { label: "Bảng giá & Vay ngân hàng",   href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn chọn lô đẹp</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Nhận sơ đồ phân lô PDF và tư vấn vị trí tối ưu theo ngân sách của bạn.
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
              Sẵn sàng chọn lô đất ưng ý nhất tại The Link City?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Liên hệ ngay để nhận sơ đồ phân lô PDF độ nét cao, giỏ hàng cập nhật và tư vấn
              vị trí tối ưu theo mục tiêu đầu tư của bạn — hoàn toàn miễn phí.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/the-link-city/mat-bang"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Xem mặt bằng The Link City →
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
              href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",
              title: "Nhật Ký Thực Địa The Link City Dầu Giây 2026",
              description: "Ký sự chân thực: 45 phút từ TP.HCM, sổ hồng trên tay và bài toán 550 triệu.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026",
              title: "Quy Trình Mua Bán & Tiêu Chuẩn Xây Dựng T3-2b",
              description: "5 bước mua bán chuẩn pháp lý và bảng thông số kỹ thuật mẫu nhà phố.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",
              title: "Bảng Giá The Link City & Bài Toán Vay Ngân Hàng 2026",
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
