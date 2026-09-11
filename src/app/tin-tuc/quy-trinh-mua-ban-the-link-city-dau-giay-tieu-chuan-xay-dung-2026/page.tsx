"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS46 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026`;
const PUBLISHED     = "11/09/2026";
const PUBLISHED_ISO = "2026-09-11";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hướng Dẫn Quy Trình Mua Bán The Link City Dầu Giây & Tiêu Chuẩn Xây Dựng Mẫu Nhà T3-2b Mới Nhất 2026",
  description:
    "Hướng dẫn từ A-Z quy trình mua bán, thủ tục công chứng sang tên sổ hồng The Link City Dầu Giây và chi tiết bản vẽ tiêu chuẩn xây dựng mẫu nhà phố liên kế T3-2b.",
  image: [IMG_NEWS46["1"], IMG_NEWS46["3"], IMG_NEWS46["4"]],
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
    "quy trình mua bán The Link City, mẫu nhà T3-2b The Link City, thủ tục sang tên sổ hồng The Link City, xây dựng The Link City Dầu Giây",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Sau khi xây nhà xong, thủ tục hoàn công đổi sổ diễn ra như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sau khi hoàn thiện xây dựng theo đúng bản vẽ cấp phép, chủ nhà nộp hồ sơ nghiệm thu hoàn công tại Phòng Kinh tế & Hạ tầng huyện Thống Nhất. Cơ quan đăng ký đất đai sẽ cập nhật tài sản gắn liền với đất (ngôi nhà 3 tầng) lên trang bìa của Sổ hồng.",
      },
    },
    {
      "@type": "Question",
      name: "Tôi có thể tự thuê nhà thầu ngoài xây dựng được không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Được. Khách hàng hoàn toàn có quyền tự lựa chọn đội thầu xây dựng bên ngoài hoặc đăng ký dịch vụ xây dựng trọn gói của chủ đầu tư Kim Oanh. Đơn vị thi công chỉ cần đăng ký tạm trú cho công nhân và cam kết thi công đúng mẫu bản vẽ được duyệt.",
      },
    },
    {
      "@type": "Question",
      name: "Dự án có điện nước đầy đủ để bắt đầu xây nhà chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đã sẵn sàng 100%. Hệ thống cấp nước sạch của Công ty Cấp nước Đồng Nai và nguồn điện hạ thế của Điện lực Thống Nhất đã đấu nối sẵn đến từng hố ga trước mỗi lô đất, chỉ cần gắn đồng hồ là sử dụng ngay.",
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
      name: "Quy trình mua bán The Link City & tiêu chuẩn xây dựng",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS46["1"],
    alt: "Khách hàng làm thủ tục ký hợp đồng giao dịch đất nền The Link City Dầu Giây",
    caption: "Khách hàng được hướng dẫn chi tiết từng bước thủ tục pháp lý minh bạch tại văn phòng Kim Oanh",
  },
  {
    src: IMG_NEWS46["2"],
    alt: "Bàn giao mốc ranh giới thực địa đất nền dự án The Link City Dầu Giây",
    caption: "Hệ thống cột mốc phân lô rõ ràng, hạ tầng kỹ thuật sẵn sàng bàn giao cho cư dân",
  },
  {
    src: IMG_NEWS46["3"],
    alt: "Bản vẽ phối cảnh kiến trúc mẫu nhà phố liên kế T3 2b dự án The Link City Dầu Giây",
    caption: "Mẫu nhà T3-2b thiết kế 1 trệt 2 lầu hiện đại, đảm bảo tính thẩm mỹ đồng bộ cho toàn khu đô thị",
  },
  {
    src: IMG_NEWS46["4"],
    alt: "Hình ảnh thực tế dãy nhà phố hoàn thiện chỉn chu tại The Link City Dầu Giây",
    caption: "Quy chuẩn xây dựng đồng bộ tạo nên một khu đô thị văn minh, nâng tầm giá trị sống",
  },
  {
    src: IMG_NEWS46["5"],
    alt: "Không gian sống trong lành và an ninh tại khu đô thị The Link City Dầu Giây",
    caption: "Không gian sống lý tưởng để an cư lập nghiệp và nuôi dưỡng con trẻ",
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
const STEPS = [
  {
    n: "01",
    title: "Khóa lô & Đặt cọc giữ chỗ",
    tag: "Ngay hôm nay",
    tagColor: "amber",
    body: "Chọn lô đất ưng ý (ví dụ: lô 95m² tại block LK17A, LK17B) và đặt cọc giữ chỗ 50.000.000 VNĐ/nền vào tài khoản định danh chính thức của đơn vị phát triển Kim Oanh Land.",
  },
  {
    n: "02",
    title: "Ký Hợp đồng nguyên tắc (HĐNT)",
    tag: "Trong 7–10 ngày",
    tagColor: "blue",
    body: "Trong vòng 7 – 10 ngày kể từ ngày cọc, khách hàng ký HĐNT chính thức và thanh toán đủ đợt 1 (tối thiểu 20% – 30% giá trị hợp đồng, tương đương khoảng 550 triệu đồng).",
  },
  {
    n: "03",
    title: "Thanh toán theo tiến độ / Giải ngân vay",
    tag: "Linh hoạt",
    tagColor: "slate",
    body: "Khách hàng thanh toán định kỳ theo các đợt thỏa thuận hoặc phía ngân hàng đối tác (OCB, Vietcombank) giải ngân 70% còn lại theo thông báo chấp thuận tín dụng.",
  },
  {
    n: "04",
    title: "Nhận bàn giao mốc giới nền đất",
    tag: "Thực địa",
    tagColor: "emerald",
    body: "Đại diện chủ đầu tư, kỹ sư trắc địa cùng khách hàng xuống thực địa kiểm tra mốc ranh giới, tim đường, hệ thống cấp thoát nước và đấu nối điện nước trước cửa lô đất.",
  },
  {
    n: "05",
    title: "Công chứng chuyển nhượng & Nhận sổ hồng",
    tag: "15–30 ngày làm việc",
    tagColor: "amber",
    body: "Hai bên ký Hợp đồng chuyển nhượng QSDĐ tại Văn phòng Công chứng nhà nước huyện Thống Nhất. Sau khi nộp hồ sơ tại Chi nhánh VPĐK Đất đai, sổ hồng đứng tên khách hàng được bàn giao trong vòng 15 – 30 ngày làm việc.",
  },
];

const SPECS_T3_2B = [
  ["Kích thước lô đất tiêu chuẩn",      "5,0m (mặt tiền) × 19,0m (chiều sâu) = 95,0 m²"],
  ["Diện tích xây dựng tầng trệt",      "5,0m × 14,0m = 70,0 m²"],
  ["Tổng diện tích sàn xây dựng",       "Khoảng 210,5 m² (gồm 3 tầng sinh hoạt)"],
  ["Quy mô tầng cao",                   "1 trệt + 2 lầu (3 tầng)"],
  ["Chiều cao tầng trệt",               "3,80 m (không gian thoáng cho phòng khách/kinh doanh)"],
  ["Chiều cao Lầu 1 & Lầu 2",          "3,40 m / tầng"],
  ["Tổng chiều cao công trình",         "11,60 m (từ cao độ vỉa hè đến đỉnh mái)"],
  ["Độ vươn ban công lầu 1 & 2",        "0,90 m – 1,20 m (đồng bộ chỉ giới toàn tuyến)"],
];

const FLOOR_PLANS = [
  {
    floor: "Tầng trệt",
    height: "Cao 3,8m",
    rooms: [
      "Sân trước để xe hơi rộng rãi (3m)",
      "Phòng khách liên thông bếp & phòng ăn hiện đại",
      "1 nhà vệ sinh chung",
      "Giếng trời đón gió và sân sau lấy sáng (2m)",
    ],
  },
  {
    floor: "Lầu 1",
    height: "Cao 3,4m",
    rooms: [
      "2 phòng ngủ rộng rãi khép kín",
      "Master Bedroom có ban công mặt tiền và WC riêng biệt",
    ],
  },
  {
    floor: "Lầu 2",
    height: "Cao 3,4m",
    rooms: [
      "1 phòng ngủ phụ",
      "1 phòng thờ trang nghiêm hướng mặt tiền",
      "Khu vực giặt phơi và sân thượng thư giãn",
    ],
  },
];

const COST_ITEMS = [
  {
    item: "Xây dựng phần thô & Nhân công hoàn thiện",
    unit: "3.600.000 – 3.800.000 VNĐ/m² sàn",
    total: "~760.000.000 – 800.000.000 VNĐ",
  },
  {
    item: "Vật tư hoàn thiện (Gạch, sơn, cửa, thiết bị vệ sinh)",
    unit: "2.000.000 – 2.400.000 VNĐ/m² sàn",
    total: "~420.000.000 – 500.000.000 VNĐ",
  },
  {
    item: "Cổng rào, sân trước lót gạch, sân sau",
    unit: "Trọn gói",
    total: "~50.000.000 – 70.000.000 VNĐ",
  },
];

const GOLDEN_RULES = [
  {
    n: "01",
    title: "Kiểm tra tài khoản chuyển tiền cọc",
    body: "Mọi khoản tiền đặt cọc và thanh toán phải được chuyển trực tiếp vào tài khoản ngân hàng chính thức của Công ty TNHH Đầu tư Phú Việt Tín hoặc Tập đoàn Kim Oanh (Kim Oanh Land) theo đúng nội dung quy định. Tuyệt đối không chuyển tiền vào tài khoản cá nhân của môi giới.",
  },
  {
    n: "02",
    title: "Kiểm tra chính xác mã lô và diện tích",
    body: "Đối chiếu mã sản phẩm trên hợp đồng (ví dụ: DG3.LK17A-42) với bản đồ phân lô tỷ lệ 1/500 và phụ lục diện tích được đóng dấu giáp lai.",
  },
  {
    n: "03",
    title: "Hiểu rõ quyền lợi chiết khấu và quà tặng",
    body: "Đảm bảo các chính sách ưu đãi (chiết khấu thanh toán sớm, quà tặng mở bán...) được ghi rõ bằng văn bản trong phụ lục hợp đồng để tránh tranh chấp về sau.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function QuyTrinhMuaBanPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Quy trình mua bán The Link City & tiêu chuẩn xây dựng</span>
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
              Hướng Dẫn Quy Trình Mua Bán The Link City Dầu Giây & Tiêu Chuẩn Xây Dựng Mẫu Nhà T3-2b Mới Nhất 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Hướng dẫn từ A-Z quy trình 5 bước mua bán chuẩn pháp lý, thủ tục công chứng sang
              tên sổ hồng và chi tiết bảng thông số kỹ thuật mẫu nhà phố{" "}
              <strong className="text-slate-700">T3-2b</strong> (1 trệt 2 lầu) tại dự án{" "}
              <a href="/the-link-city" className="text-amber-600 font-semibold hover:underline">
                The Link City
              </a>{" "}
              Dầu Giây.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh thủ tục ký hợp đồng The Link City"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS46["1"]}
                alt="Khách hàng làm thủ tục ký hợp đồng giao dịch đất nền The Link City Dầu Giây"
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
              Khách hàng được hướng dẫn chi tiết từng bước thủ tục pháp lý minh bạch tại văn phòng Kim Oanh
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
                    ["#chuan-bi",   "1. Cần chuẩn bị những gì?"],
                    ["#5-buoc",     "2. Quy trình 5 bước mua bán & công chứng"],
                    ["#t3-2b",      "3. Tiêu chuẩn kiến trúc mẫu nhà T3-2b"],
                    ["#quy-dinh",   "4. Khoảng lùi, tầng cao & thời hạn XD"],
                    ["#du-toan",    "5. Dự toán chi phí xây dựng hoàn thiện"],
                    ["#luu-y",      "6. 3 Lưu ý vàng khi ký hợp đồng"],
                    ["#faq",        "7. Câu hỏi thường gặp"],
                    ["#tai-lieu",   "8. Tải bản vẽ & Đăng ký tư vấn"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* ── Section 1: Chuẩn bị ── */}
              <section className="mb-12" id="chuan-bi">
                <SectionHeading id="chuan-bi">
                  1. Mua Đất Nền The Link City Dầu Giây: Cần Chuẩn Bị Những Gì?
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Việc giao dịch bất động sản tại một dự án quy hoạch chuẩn đô thị như{" "}
                    <strong className="text-slate-800">The Link City</strong> (Khu dân cư A1-C1
                    Đô thị Dầu Giây) đòi hỏi người mua nắm vững các bước thủ tục pháp lý để đảm
                    bảo an toàn tuyệt đối cho dòng tiền.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khác với các khu đất dân tự phát, The Link City là dự án đã hoàn thành nghĩa
                    vụ tài chính với nhà nước và được phê duyệt quy hoạch chi tiết 1/500, do đó
                    mọi quy trình từ đặt cọc, thanh toán đến ký hợp đồng công chứng đều được
                    chuẩn hóa theo quy định của Luật Kinh doanh Bất động sản và Luật Đất đai
                    mới nhất.
                  </p>

                  <p className="text-slate-700 font-bold text-sm">Hồ sơ cần chuẩn bị trước khi giao dịch:</p>
                  <div className="space-y-3">
                    {[
                      {
                        label: "Khách hàng cá nhân độc thân",
                        icon: "👤",
                        docs: ["Căn cước công dân (CCCD) gắn chip còn hạn sử dụng", "Giấy xác nhận tình trạng hôn nhân do UBND xã/phường nơi cư trú cấp"],
                      },
                      {
                        label: "Khách hàng đã kết hôn",
                        icon: "👫",
                        docs: ["CCCD gắn chip của cả hai vợ chồng", "Giấy chứng nhận đăng ký kết hôn (nếu đứng tên chung)"],
                      },
                      {
                        label: "Khách hàng có nhu cầu vay vốn ngân hàng",
                        icon: "🏦",
                        docs: ["Hợp đồng lao động, sao kê bảng lương 6 tháng gần nhất", "Giấy phép kinh doanh, hợp đồng cho thuê tài sản (nếu có)"],
                      },
                    ].map((g) => (
                      <div key={g.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="font-black text-slate-800 text-sm mb-2">{g.icon} {g.label}</p>
                        <ul className="space-y-1.5">
                          {g.docs.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                              <span className="text-amber-400 flex-shrink-0 mt-0.5">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Section 2: 5 bước ── */}
              <section className="mb-12" id="5-buoc">
                <SectionHeading id="5-buoc">
                  2. Quy Trình 5 Bước Mua Bán & Công Chứng Sang Tên Sổ Hồng Chuẩn Pháp Lý
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Để sở hữu một sản phẩm tại The Link City, khách hàng sẽ trải qua quy trình
                    5 bước bài bản và an toàn:
                  </p>

                  {/* Steps overview box */}
                  <div className="rounded-2xl border border-amber-300 bg-amber-50 overflow-hidden">
                    <div className="bg-amber-500 text-white px-5 py-3 text-center">
                      <p className="font-black text-sm uppercase tracking-wide">
                        Quy Trình 5 Bước Giao Dịch Chuẩn Tại The Link City
                      </p>
                    </div>
                    <div className="divide-y divide-amber-200">
                      {STEPS.map((s, i) => (
                        <div key={s.n} className="flex items-center gap-3 px-5 py-3">
                          <span className="font-black text-amber-500 text-sm w-5 shrink-0">{i + 1}</span>
                          <span className="text-amber-800 text-sm font-medium">{s.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Steps detail */}
                  <div className="space-y-4">
                    {STEPS.map((s) => {
                      const tagColors: Record<string, string> = {
                        amber:   "bg-amber-100 text-amber-700",
                        blue:    "bg-blue-100 text-blue-700",
                        slate:   "bg-slate-100 text-slate-600",
                        emerald: "bg-emerald-100 text-emerald-700",
                      };
                      return (
                        <div key={s.n} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                          <span className="text-3xl font-black text-amber-200 leading-none w-10 shrink-0">{s.n}</span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-black text-slate-800 text-sm">{s.title}</p>
                              <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${tagColors[s.tagColor]}`}>
                                {s.tag}
                              </span>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS46["2"]}
                    alt="Bàn giao mốc ranh giới thực địa đất nền dự án The Link City Dầu Giây"
                    caption="Hệ thống cột mốc phân lô rõ ràng, hạ tầng kỹ thuật sẵn sàng bàn giao cho cư dân"
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/phap-ly">
                      📑 Xem hồ sơ pháp lý & văn bản chỉ đạo cấp sổ →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 3: T3-2b ── */}
              <section className="mb-12" id="t3-2b">
                <SectionHeading id="t3-2b">
                  3. Giải Mã Tiêu Chuẩn Kiến Trúc: Chi Tiết Bản Vẽ Mẫu Nhà Phố T3-2b
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một trong những ưu điểm vượt trội của The Link City là tính đồng bộ về mặt
                    kiến trúc. Dự án cung cấp các mẫu thiết kế nhà phố hiện đại, tối ưu công
                    năng và đảm bảo thẩm mỹ đô thị. Mẫu thiết kế chủ đạo cho các lô đất nền
                    liên kế tiêu chuẩn (95m² – 100m²) là{" "}
                    <strong className="text-slate-800">Mẫu nhà T3-2b</strong> (1 trệt 2 lầu).
                  </p>

                  {/* Specs table */}
                  <div>
                    <p className="font-bold text-slate-800 text-sm mb-3">Bảng Thông Số Kỹ Thuật Bản Vẽ Mẫu Nhà T3-2b:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[420px]">
                        <thead>
                          <tr className="bg-slate-700 text-white">
                            <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-56">Hạng mục thiết kế</th>
                            <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Thông số kỹ thuật</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {SPECS_T3_2B.map(([label, value], i) => (
                            <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                              <td className="px-4 py-3 font-semibold text-slate-700 text-sm align-top">{label}</td>
                              <td className="px-4 py-3 text-slate-600 text-sm">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Floor plan */}
                  <div>
                    <p className="font-bold text-slate-800 text-sm mb-3">Bố Trí Công Năng Sinh Hoạt Tối Ưu:</p>
                    <div className="space-y-3">
                      {FLOOR_PLANS.map((f) => (
                        <div key={f.floor} className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-black text-amber-800 text-sm">{f.floor}</span>
                            <span className="text-xs text-amber-600 font-semibold">({f.height})</span>
                          </div>
                          <ul className="space-y-1.5">
                            {f.rooms.map((r) => (
                              <li key={r} className="flex items-start gap-2 text-amber-700 text-sm leading-relaxed">
                                <span className="flex-shrink-0 mt-0.5">•</span>
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS46["3"]}
                    alt="Bản vẽ phối cảnh kiến trúc mẫu nhà phố liên kế T3 2b dự án The Link City Dầu Giây"
                    caption="Mẫu nhà T3-2b thiết kế 1 trệt 2 lầu hiện đại, đảm bảo tính thẩm mỹ đồng bộ cho toàn khu đô thị"
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/mat-bang">
                      📐 Xem trọn bộ mặt bằng kiến trúc & mặt cắt các phân khu →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 4: Quy định xây dựng ── */}
              <section className="mb-12" id="quy-dinh">
                <SectionHeading id="quy-dinh">
                  4. Quy Định Về Khoảng Lùi, Tầng Cao & Thời Hạn Xây Dựng Tại Dự Án
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khách hàng mua đất nền The Link City thường có 2 câu hỏi lớn về việc xây
                    dựng:
                  </p>

                  <InfoBox type="success">
                    <strong>Câu hỏi 1: Mua đất nền xong có bị bắt buộc phải xây nhà ngay không?</strong><br />
                    <span className="mt-2 block">
                      <strong>HOÀN TOÀN KHÔNG BỊ ÉP XÂY NGAY.</strong> Khách hàng nhận sổ hồng riêng đứng tên cá nhân và có toàn quyền quyết định thời điểm xây dựng nhà ở tùy theo kế hoạch tài chính của gia đình. Đây là ưu điểm cực lớn giúp nhà đầu tư yên tâm tích lũy tài sản dài hạn mà không lo phát sinh chi phí xây dựng gấp gáp.
                    </span>
                  </InfoBox>

                  <div>
                    <p className="text-slate-600 text-[17px] leading-[1.85] mb-4">
                      <strong className="text-slate-800">Câu hỏi 2:</strong> Khi tiến hành xây dựng, để đảm bảo khu đô thị luôn sạch đẹp, thông thoáng và giữ giá trị lâu dài, việc xây dựng chỉ cần tuân thủ đúng khoảng lùi chỉ giới đã được duyệt trong quy hoạch 1/500:
                    </p>

                    <div className="space-y-3">
                      {[
                        {
                          label: "Khoảng lùi trước",
                          value: "Tối thiểu 3,0 mét",
                          desc: "Dùng làm khoảng sân vườn, chỗ đậu ô tô và tạo sự thông thoáng cho mặt tiền",
                          required: true,
                        },
                        {
                          label: "Khoảng lùi sau",
                          value: "Tối thiểu 2,0 mét",
                          desc: "Dùng làm sân sau, giếng trời lấy sáng, thông gió tự nhiên và lối thoát hiểm PCCC",
                          required: true,
                        },
                        {
                          label: "Màu sắc & Ban công",
                          value: "Theo catalogue quy chuẩn",
                          desc: "Gam màu trang nhã, hiện đại: trắng, ghi, xám nhạt, ốp gỗ composite theo catalogue của ban quản lý dự án",
                          required: false,
                        },
                      ].map((item) => (
                        <div key={item.label} className={`flex items-start gap-4 rounded-2xl border p-5 ${item.required ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-slate-50"}`}>
                          <div className={`rounded-full px-2.5 py-1 text-xs font-black shrink-0 mt-0.5 ${item.required ? "bg-blue-600 text-white" : "bg-slate-300 text-slate-700"}`}>
                            {item.required ? "BẮT BUỘC" : "KHUYẾN NGHỊ"}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`font-black text-sm ${item.required ? "text-blue-800" : "text-slate-800"}`}>{item.label}</span>
                              <span className={`text-sm font-bold ${item.required ? "text-blue-700" : "text-slate-600"}`}>— {item.value}</span>
                            </div>
                            <p className={`text-sm leading-relaxed ${item.required ? "text-blue-600" : "text-slate-600"}`}>{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS46["4"]}
                    alt="Hình ảnh thực tế dãy nhà phố hoàn thiện chỉn chu tại The Link City Dầu Giây"
                    caption="Quy chuẩn xây dựng đồng bộ tạo nên một khu đô thị văn minh, nâng tầm giá trị sống"
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 5: Dự toán chi phí ── */}
              <section className="mb-12" id="du-toan">
                <SectionHeading id="du-toan">
                  5. Dự Toán Chi Phí Xây Dựng Hoàn Thiện Một Căn Nhà Phố Tại The Link City
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bảng dự toán chi phí xây dựng thực tế theo đơn giá thị trường xây dựng tại
                    Đồng Nai năm 2026, áp dụng cho{" "}
                    <strong className="text-slate-800">Mẫu nhà T3-2b</strong> có tổng diện tích
                    sàn ~210m²:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[480px]">
                      <thead>
                        <tr className="bg-amber-500 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Hạng mục thi công</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Đơn giá tham khảo</th>
                          <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wide">Thành tiền ước tính</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {COST_ITEMS.map((row, i) => (
                          <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-amber-50/30"}>
                            <td className="px-4 py-3 text-slate-700 text-sm align-top">{row.item}</td>
                            <td className="px-4 py-3 text-slate-500 text-sm align-top">{row.unit}</td>
                            <td className="px-4 py-3 text-right text-amber-700 font-semibold text-sm">{row.total}</td>
                          </tr>
                        ))}
                        <tr className="bg-amber-50 border-t-2 border-amber-300">
                          <td colSpan={2} className="px-4 py-3 font-black text-slate-800 text-sm">
                            TỔNG CHI PHÍ HOÀN THIỆN ĐỂ Ở <span className="text-xs font-normal text-slate-500">(chưa bao gồm nội thất rời)</span>
                          </td>
                          <td className="px-4 py-3 text-right font-black text-amber-700">~1,23 – 1,37 TỶ VNĐ</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-400 italic mt-2">
                      * Đơn giá xây dựng mang tính tham khảo, thực tế phụ thuộc thiết kế chi tiết và đội thi công.
                    </p>
                  </div>

                  {/* Total package highlight */}
                  <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
                    <p className="font-black text-amber-800 text-base mb-4">
                      👉 Tổng giá trị sở hữu một căn nhà phố 3 tầng hiện đại tại The Link City:
                    </p>
                    <div className="space-y-2">
                      {[
                        ["Tiền đất nền sổ đỏ 95m²", "~1,85 tỷ VNĐ"],
                        ["Tiền xây nhà 1 trệt 2 lầu khang trang", "~1,25 tỷ VNĐ"],
                      ].map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between gap-3 bg-white/70 rounded-xl px-4 py-2.5">
                          <span className="text-amber-700 text-sm">{label}</span>
                          <span className="text-amber-800 font-bold text-sm">{value}</span>
                        </div>
                      ))}
                      <div className="flex items-center justify-between gap-3 bg-amber-500 text-white rounded-xl px-4 py-3 mt-2">
                        <span className="font-black text-sm">TỔNG GÓI TRỌN VẸN</span>
                        <span className="font-black text-lg">~3,1 TỶ ĐỒNG</span>
                      </div>
                    </div>
                    <p className="text-amber-700 text-sm leading-relaxed mt-4">
                      Với mức giá này, tại TP.HCM bạn chỉ mua được một căn chung cư 2 phòng ngủ
                      cũ, trong khi tại The Link City bạn sở hữu trọn vẹn{" "}
                      <strong>nhà phố 3 tầng mặt đất có sổ hồng riêng vĩnh viễn</strong> ngay
                      cửa ngõ cao tốc!
                    </p>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS46["5"]}
                    alt="Không gian sống trong lành và an ninh tại khu đô thị The Link City Dầu Giây"
                    caption="Không gian sống lý tưởng để an cư lập nghiệp và nuôi dưỡng con trẻ"
                    images={images}
                    index={4}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/bang-gia">
                      🧮 Tự tính lịch trả góp ngân hàng mua đất + xây nhà →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 6: 3 lưu ý vàng ── */}
              <section className="mb-12" id="luu-y">
                <SectionHeading id="luu-y">
                  6. 3 Lưu Ý "Vàng" Giúp Bảo Vệ Quyền Lợi Người Mua Khi Ký Hợp Đồng
                </SectionHeading>
                <div className="pt-5 space-y-4">
                  {GOLDEN_RULES.map((r) => (
                    <div key={r.n} className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                      <span className="text-3xl font-black text-amber-300 leading-none w-10 shrink-0">{r.n}</span>
                      <div>
                        <p className="font-black text-amber-800 text-sm mb-1">{r.title}</p>
                        <p className="text-amber-700 text-sm leading-relaxed">{r.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── FAQ ── */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">
                  7. Các Câu Hỏi Thường Gặp Về Xây Dựng & Cấp Sổ
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

              {/* ── Section 8: Tải tài liệu ── */}
              <section className="mb-12" id="tai-lieu">
                <SectionHeading id="tai-lieu">
                  8. Tải Trọn Bộ Bản Vẽ Kỹ Thuật CAD & Đăng Ký Tư Vấn Thủ Tục
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Để chuẩn bị chu đáo nhất cho kế hoạch xây dựng an cư hoặc đầu tư tại The
                    Link City, Quý khách hàng vui lòng liên hệ để nhận:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: "📐", title: "File bản vẽ T3-2b", desc: "PDF & CAD mẫu nhà phố liên kế tiêu chuẩn" },
                      { icon: "📋", title: "Mẫu hợp đồng", desc: "Mẫu HĐMB và hồ sơ pháp lý công chứng mới nhất" },
                      { icon: "🏦", title: "Tư vấn vay miễn phí", desc: "Chuyên viên tín dụng hỗ trợ hồ sơ vay ngân hàng" },
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
                      LIÊN HỆ BỘ PHẬN TƯ VẤN PHÁP LÝ & QUY HOẠCH
                    </p>
                    <div className="space-y-2 text-sm text-amber-700">
                      <p><strong>Dự án:</strong> The Link City Dầu Giây (KDC A1-C1 Đô thị Dầu Giây)</p>
                      <p>
                        <strong>Website:</strong>{" "}
                        <a href="https://kimoanhdongnai.com.vn/the-link-city" className="underline hover:text-amber-900">
                          kimoanhdongnai.com.vn/the-link-city
                        </a>
                      </p>
                      <p><strong>Trụ sở:</strong> 268A Phan Trung, P. Tam Hiệp, TP. Biên Hòa, Đồng Nai</p>
                      <p><strong>Văn phòng thực địa:</strong> Ngã tư QL1A & QL20, xã Dầu Giây, H. Thống Nhất, Đồng Nai</p>
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
                    { href: "/the-link-city",                                                           label: "The Link City Dầu Giây — Tổng quan dự án" },
                    { href: "/the-link-city/mat-bang",                                                  label: "Mặt bằng phân lô The Link City" },
                    { href: "/the-link-city/phap-ly",                                                   label: "Pháp lý sổ hồng The Link City" },
                    { href: "/the-link-city/bang-gia",                                                  label: "Bảng giá The Link City mới nhất" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                                label: "Tổng quan The Link City Dầu Giây" },
                    { href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",    label: "Bài toán vay ngân hàng The Link City" },
                    { href: "/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026",     label: "So sánh The Link City vs đất thổ cư" },
                    { href: "/the-link-city/tien-ich",                                                  label: "Tiện ích nội khu The Link City" },
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
                    The Link City Dầu Giây không chỉ mang lại cơ hội sở hữu đất nền sổ đỏ với
                    giá hợp lý, mà còn cung cấp{" "}
                    <strong className="text-slate-800">hành trình giao dịch minh bạch từ A-Z</strong>{" "}
                    — từ quy trình 5 bước chuẩn pháp lý, tiêu chuẩn kiến trúc đồng bộ cho đến
                    dịch vụ hỗ trợ pháp lý và xây dựng toàn diện.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với gói trọn vẹn{" "}
                    <strong className="text-amber-600">~3,1 tỷ đồng</strong> cho một căn nhà phố
                    3 tầng hiện đại có sổ hồng riêng ngay cửa ngõ cao tốc Dầu Giây — đây là
                    mức giá khó tìm được ở bất kỳ đô thị lân cận nào trong năm 2026.
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài được tổng hợp từ các nguồn công khai và mang tính tham
                  khảo. Dự toán chi phí xây dựng là ước tính, không phải báo giá chính thức.
                  Cần đối chiếu thông tin chính thức trước khi đưa ra quyết định giao dịch.
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

                {/* Quick steps */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-bold text-amber-800 text-sm mb-3">5 bước mua bán nhanh</p>
                  <div className="space-y-2">
                    {["Đặt cọc giữ chỗ", "Ký HĐNT & Thanh toán đợt 1", "Thanh toán theo tiến độ", "Nhận bàn giao mốc giới", "Công chứng & Nhận sổ hồng"].map((step, i) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-black flex items-center justify-center shrink-0">{i + 1}</span>
                        <span className="text-amber-800 text-xs">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Tổng quan The Link City",          href: "/tin-tuc/tong-quan-the-link-city-dau-giay" },
                      { label: "Bài toán vay ngân hàng",           href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026" },
                      { label: "So sánh vs đất thổ cư",            href: "/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026" },
                      { label: "Mặt bằng phân lô The Link City",   href: "/the-link-city/mat-bang" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Nhận bản vẽ & tư vấn thủ tục</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Liên hệ nhận file CAD mẫu nhà T3-2b và tư vấn thủ tục pháp lý miễn phí.
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
              Sẵn sàng bắt đầu hành trình sở hữu nhà phố tại The Link City?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Liên hệ ngay để nhận file bản vẽ T3-2b, bảng giá đợt 1 và được tư vấn
              toàn bộ quy trình pháp lý hoàn toàn miễn phí.
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
              href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",
              title: "Bảng Giá The Link City & Bài Toán Vay Ngân Hàng 2026",
              description: "Chi tiết giá từng block, 4 phương thức thanh toán và bảng tính trả nợ.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026",
              title: "So Sánh The Link City vs Đất Thổ Cư Dầu Giây 2026",
              description: "6 tiêu chí trực diện và 5 ngòi nổ tăng giá giúp nhà đầu tư quyết định đúng.",
              tag: "Tin dự án",
            },
            {
              href: "/the-link-city",
              title: "The Link City Dầu Giây – Tổng Quan Dự Án",
              description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và sản phẩm The Link City.",
              tag: "The Link City",
            },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}
