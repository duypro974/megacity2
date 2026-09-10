"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS45 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026`;
const PUBLISHED     = "10/09/2026";
const PUBLISHED_ISO = "2026-09-10";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "So Sánh Đất Nền The Link City Dầu Giây Với Đất Thổ Cư Khu Vực: Có Đáng Xuống Tiền Đợt 1 Năm 2026?",
  description:
    "So sánh chi tiết đất nền The Link City Dầu Giây với đất thổ cư ven QL1A Thống Nhất: Phân tích pháp lý, hạ tầng, bài toán thanh khoản và 5 lý do nhà đầu tư xuống tiền đợt 1.",
  image: [IMG_NEWS45["1"], IMG_NEWS45["2"], IMG_NEWS45["4"]],
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
    "đất nền The Link City Dầu Giây, so sánh The Link City đất thổ cư, có nên mua The Link City, đất nền Dầu Giây Thống Nhất 2026",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Tại sao giá đất The Link City đợt 1 lại mềm hơn các khu đô thị lân cận như Nhơn Trạch hay Long Thành?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vì dự án đang được mở bán ở giai đoạn đầu tiên (F0 từ chủ đầu tư Kim Oanh). Mức giá này nhằm thu hút những nhà đầu tư tiên phong, tạo cộng đồng dân cư và tạo thanh khoản thị trường trước khi bước vào các đợt tăng giá kế tiếp.",
      },
    },
    {
      "@type": "Question",
      name: "Nếu tôi mua đầu tư thì chủ đầu tư có hỗ trợ ra hàng bán lại không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Đội ngũ kinh doanh của Kim Oanh Land với hơn 1.000 chuyên viên phân phối tại Đồng Nai và TP.HCM luôn sẵn sàng hỗ trợ khách hàng ký gửi và chuyển nhượng lại sản phẩm khi có nhu cầu chốt lời.",
      },
    },
    {
      "@type": "Question",
      name: "Đất ở đây có bị dính tranh chấp hay kiện tụng pháp lý gì không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoàn toàn không. Dự án Khu dân cư A1-C1 Đô thị Dầu Giây đã được Thanh tra Chính phủ và UBND tỉnh Đồng Nai kết luận rõ ràng, hoàn tất 100% nghĩa vụ thuế và được Sở Tài nguyên & Môi trường cấp sổ hồng riêng cho từng thửa đất.",
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
      name: "So sánh The Link City vs đất thổ cư Dầu Giây",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS45["1"],
    alt: "Khu đô thị The Link City Dầu Giây quy hoạch hạ tầng đồng bộ chuẩn 1 phần 500 tại Đồng Nai",
    caption: "The Link City sở hữu quy hoạch bài bản 1/500 – phân khúc an toàn và tiềm năng nhất theo luật mới",
  },
  {
    src: IMG_NEWS45["2"],
    alt: "Hạ tầng đường nội khu rộng rãi thông thoáng của dự án The Link City Dầu Giây",
    caption: "Hạ tầng hoàn chỉnh với lộ giới rộng từ 13m – 28m tạo sự khác biệt hoàn toàn với đất phân lô tự do",
  },
  {
    src: IMG_NEWS45["3"],
    alt: "Sa bàn trục đường thương mại kết nối Quốc lộ 1A của dự án The Link City Dầu Giây",
    caption: "Vị trí sát cạnh Quốc lộ 1A giúp các sản phẩm tại The Link City sở hữu giá trị thương mại lớn",
  },
  {
    src: IMG_NEWS45["4"],
    alt: "Bản đồ quy hoạch hạ tầng giao thông kết nối dự án The Link City Dầu Giây Đồng Nai",
    caption: "Hạ tầng giao thông liên vùng là bảo chứng tăng giá vững chắc nhất cho dự án",
  },
  {
    src: IMG_NEWS45["5"],
    alt: "Tiện ích sân bóng đá và cụm sân thể thao thực tế tại The Link City Dầu Giây",
    caption: "Tiện ích thể thao hiện hữu thu hút đông đảo cư dân, tạo sức sống thực cho khu đô thị",
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

// ─── Comparison table data ─────────────────────────────────────────────────
const COMPARISON = [
  {
    criteria: "Quy mô & Không gian",
    tlc: "Quần thể đô thị 21 ha (trong đại đô thị 149 ha), quy hoạch ô bàn cờ thông suốt",
    other: "Các mảnh đất nhỏ lẻ từ vài sào cắt ra, đường cụt, ngõ hẹp",
  },
  {
    criteria: "Hạ tầng kỹ thuật",
    tlc: "100% chuẩn đô thị: Đường nhựa 13m – 28m, điện âm, nước máy, viễn thông ngầm, vỉa hè lát gạch 3m – 5m",
    other: "Đường bê tông 4m – 6m, dây điện chằng chịt, không có hệ thống gom nước thải riêng",
  },
  {
    criteria: "Pháp lý & Cấp sổ",
    tlc: "Đã nghiệm thu hạ tầng, Sổ hồng từng nền sẵn sàng (QĐ 1/500 và Công văn 2505/UBND-KTN)",
    other: "Sổ hồng riêng nhưng rủi ro dính quy hoạch mở đường, hạn chế mật độ xây dựng",
  },
  {
    criteria: "Hệ thống tiện ích",
    tlc: "50+ tiện ích: TTTM 2,6ha, cụm sân bóng đá, sân pickleball, công viên cảnh quan, trường học",
    other: "Không có tiện ích nội khu, phụ thuộc hoàn toàn vào hạ tầng dân sinh cũ kỹ",
  },
  {
    criteria: "Hỗ trợ tài chính",
    tlc: "Ngân hàng lớn (OCB, Vietcombank) tài trợ vay 70%, ân hạn nợ gốc ưu đãi",
    other: "Định giá ngân hàng thấp, thủ tục vay phức tạp và lãi suất thả nổi cao",
  },
  {
    criteria: "Khả năng tăng giá",
    tlc: "Tăng kép: Theo hạ tầng khu vực + Theo tốc độ lấp đầy cư dân và tiện ích nội khu",
    other: "Chỉ tăng đơn thuần theo biến động giá đất chung, khó tạo đột biến",
  },
];

const CATALYSTS = [
  {
    n: "01",
    title: '"Nút giao ngã tư vàng" đón 3 trục cao tốc',
    body: "Cao tốc TP.HCM – Long Thành – Dầu Giây đã vận hành mãn tải. Tuyến Cao tốc Dầu Giây – Tân Phú – Bảo Lộc (Liên Khương) sắp triển khai sẽ biến Dầu Giây thành điểm trung chuyển hàng hóa và du lịch bắt buộc giữa TP.HCM và vùng Tây Nguyên.",
  },
  {
    n: "02",
    title: "Hiệu ứng lan tỏa từ Sân bay Quốc tế Long Thành",
    body: "Cách sân bay chỉ khoảng 20 phút di chuyển, Dầu Giây nằm trong bán kính vàng phát triển đô thị vệ tinh logistics, kho bãi và nhà ở chuyên gia.",
  },
  {
    n: "03",
    title: "Trung tâm thương mại 2,6ha nội khu khởi động",
    body: "Khi công trình TTTM quy mô 2,6ha tại The Link City khởi công xây dựng, giá trị bất động sản toàn khu vực sẽ đón nhận một đợt tăng giá cục bộ từ 20% – 30%.",
  },
  {
    n: "04",
    title: "Cụm khu công nghiệp Thống Nhất & Long Khánh mở rộng",
    body: "Sự phát triển mạnh mẽ của KCN Dầu Giây (330ha liền kề) và KCN Long Khánh thu hút hàng chục nghìn kỹ sư, chuyên gia về làm việc, tạo ra nhu cầu ở thực và thuê nhà rất lớn.",
  },
  {
    n: "05",
    title: "Hiệu ứng giá bán F0 đợt 1",
    body: "Khách hàng mua ở đợt 1 luôn được hưởng mức giá gốc ưu đãi nhất cùng chính sách chiết khấu tốt nhất từ Kim Oanh Group trước khi chủ đầu tư nâng giá ở các đợt mở bán tiếp theo.",
  },
];

const END_USERS = [
  {
    icon: "🏠",
    title: "Người dân địa phương mua ở thực",
    body: "Các gia đình buôn bán kinh doanh tại chợ Dầu Giây, ngã tư QL1A và các xã lân cận có nhu cầu tách hộ cho con cái ra riêng sống trong khu đô thị văn minh, có công viên và sân chơi thể thao.",
  },
  {
    icon: "👷",
    title: "Chuyên gia & cán bộ khu công nghiệp",
    body: "Đội ngũ quản lý, chuyên gia làm việc tại KCN Dầu Giây (330ha liền kề) và KCN Gia Kiệm đang tìm kiếm nơi an cư chất lượng cao.",
  },
  {
    icon: "💼",
    title: "Nhà đầu tư giữ tiền từ TP.HCM & Biên Hòa",
    body: "Với số vốn chỉ 1,85 tỷ (hoặc 550 triệu vốn ban đầu), sản phẩm này nằm đúng \"khẩu vị\" của các nhà đầu tư vừa và nhỏ tìm kênh trú ẩn tài sản an toàn chống lạm phát.",
  },
];

const STRATEGIES = [
  {
    tag: "Lướt sóng ngắn hạn",
    period: "6 – 12 tháng",
    color: "slate",
    desc: "Chốt lời khi chủ đầu tư công bố đợt mở bán tiếp theo.",
    upside: "Biên độ kỳ vọng 10% – 15%",
  },
  {
    tag: "Đầu tư trung hạn",
    period: "18 – 24 tháng",
    color: "amber",
    recommended: true,
    desc: "Chốt lời khi tuyến cao tốc Dầu Giây – Tân Phú khởi công và các tiện ích nội khu (TTTM, sân bóng, pickleball) đi vào hoạt động rầm rộ.",
    upside: "Biên độ kỳ vọng 25% – 40%",
  },
  {
    tag: "Đầu tư dài hạn",
    period: "3 – 5 năm",
    color: "emerald",
    desc: "Xây dựng nhà phố cho thuê kinh doanh dịch vụ hoặc đón trọn sóng đô thị hóa khi Dầu Giây phát triển lên đô thị loại IV.",
    upside: "Tích lũy tài sản & dòng tiền cho thuê",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function SoSanhTheLinkCityPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">So sánh The Link City vs đất thổ cư Dầu Giây</span>
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
              <span className="text-xs text-slate-400">· 13 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              So Sánh Đất Nền The Link City Dầu Giây Với Đất Thổ Cư Khu Vực: Có Đáng Xuống Tiền Đợt 1 Năm 2026?
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích 6 tiêu chí then chốt, 5 ngòi nổ tăng giá giai đoạn 2026–2028 và chiến
              lược chốt lời thực chiến — giúp nhà đầu tư đưa ra quyết định chính xác khi so sánh
              đất nền dự án{" "}
              <a href="/the-link-city" className="text-amber-600 font-semibold hover:underline">
                The Link City
              </a>{" "}
              với đất thổ cư phân lô tự do ven QL1A Dầu Giây.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh hạ tầng The Link City Dầu Giây"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS45["1"]}
                alt="Khu đô thị The Link City Dầu Giây quy hoạch hạ tầng đồng bộ chuẩn 1 phần 500 tại Đồng Nai"
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
              The Link City sở hữu quy hoạch bài bản 1/500 – phân khúc an toàn và tiềm năng nhất theo luật mới
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
                    ["#boi-canh",    "1. Bối cảnh thị trường 2026"],
                    ["#so-sanh",     "2. Bảng so sánh trực diện 6 tiêu chí"],
                    ["#vung-trung",  "3. Phân tích \"vùng trũng giá\" 1,85 tỷ"],
                    ["#ngoi-no",     "4. 5 ngòi nổ tăng giá 2026 – 2028"],
                    ["#thanh-khoan", "5. Đánh giá thanh khoản & chiến lược chốt lời"],
                    ["#rui-ro",      "6. Nhận diện rủi ro & phân bổ vốn"],
                    ["#faq",         "7. Câu hỏi thường gặp"],
                    ["#dang-ky",     "8. Đăng ký thực địa & nhận tài liệu"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* ── Section 1: Bối cảnh ── */}
              <section className="mb-12" id="boi-canh">
                <SectionHeading id="boi-canh">
                  1. Bối Cảnh Thị Trường Đất Nền Đồng Nai 2026 Sau Khi Luật Đất Đai Mới Có Hiệu Lực
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bước sang năm 2026, thị trường bất động sản Việt Nam đã chính thức vận hành
                    dưới khung pháp lý mới của{" "}
                    <strong className="text-slate-800">
                      Luật Đất đai, Luật Nhà ở và Luật Kinh doanh Bất động sản
                    </strong>{" "}
                    sửa đổi. Một trong những thay đổi mang tính bước ngoặt là việc siết chặt quy
                    định phân lô bán nền tại các đô thị loại đặc biệt, loại I, II và III.
                  </p>

                  <p className="text-slate-700 font-bold text-sm">Hệ quả trực tiếp tại tỉnh Đồng Nai:</p>
                  <div className="space-y-3">
                    {[
                      {
                        icon: "⚠️",
                        text: "Các khu đất dân tự phát phân lô, tách thửa manh mún trước đây gần như bị \"đóng băng\" pháp lý vì không đáp ứng được quy chuẩn về mật độ xây dựng, hệ thống cấp thoát nước, vỉa hè và hạ tầng phòng cháy chữa cháy.",
                      },
                      {
                        icon: "📊",
                        text: "Dòng tiền đầu tư thông minh đang rút mạnh khỏi phân khúc đất nền rủi ro để dồn về các dự án khu đô thị quy hoạch 1/500 đồng bộ, hạ tầng ngầm hoàn chỉnh và đã có sổ hồng sẵn sàng.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                        <span className="text-lg shrink-0 mt-0.5">{item.icon}</span>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <InfoBox type="success">
                    Trong bối cảnh đó,{" "}
                    <strong>The Link City Dầu Giây</strong> (Khu dân cư A1-C1 Đô thị Dầu Giây)
                    do Kim Oanh Land phát triển trở thành{" "}
                    <strong>"hàng hiếm" được săn đón</strong> nhờ thỏa mãn 100% các tiêu chí
                    khắt khe nhất của luật mới.
                  </InfoBox>
                </div>
              </section>

              {/* ── Section 2: Bảng so sánh ── */}
              <section className="mb-12" id="so-sanh">
                <SectionHeading id="so-sanh">
                  2. Bảng So Sánh Trực Diện: The Link City vs Đất Thổ Cư Phân Lô Tự Do
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhiều nhà đầu tư băn khoăn:{" "}
                    <em>"Cầm 1,8 – 2 tỷ, nên mua một mảnh đất dân thổ cư ven Quốc lộ 1A hay
                    mua đất nền quy hoạch The Link City?"</em>{" "}
                    Hãy cùng đặt 2 phương án lên bàn cân:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[560px]">
                      <thead>
                        <tr className="bg-slate-700 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-40">Tiêu chí</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">
                            ⭐ The Link City Dầu Giây
                          </th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">
                            Đất thổ cư phân lô tự do
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {COMPARISON.map((row, i) => (
                          <tr key={row.criteria} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700 text-sm align-top">{row.criteria}</td>
                            <td className="px-4 py-3 text-amber-700 text-sm align-top font-medium">{row.tlc}</td>
                            <td className="px-4 py-3 text-slate-500 text-sm align-top">{row.other}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="rounded-xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                    <p className="text-amber-800 text-sm leading-relaxed">
                      <strong>📌 Kết luận:</strong> Mua đất dân phân lô tự do có thể mang lại cảm
                      giác "được thương lượng trực tiếp", nhưng xét về tính an toàn pháp lý, môi
                      trường sống, diện mạo đô thị và biên độ tăng giá dài hạn,{" "}
                      <strong>The Link City vượt trội hơn hẳn.</strong>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/phap-ly">
                      📑 Xem hồ sơ pháp lý The Link City →
                    </LinkBtn>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS45["2"]}
                    alt="Hạ tầng đường nội khu rộng rãi thông thoáng của dự án The Link City Dầu Giây"
                    caption="Hạ tầng hoàn chỉnh với lộ giới rộng từ 13m – 28m tạo sự khác biệt hoàn toàn với đất phân lô tự do"
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 3: Vùng trũng giá ── */}
              <section className="mb-12" id="vung-trung">
                <SectionHeading id="vung-trung">
                  3. Phân Tích "Vùng Trũng Giá" 1,85 Tỷ Tại Trung Tâm Ngã Tư Dầu Giây
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một nguyên lý bất di bất dịch của dân đầu tư kỳ cựu là:{" "}
                    <strong className="text-slate-800">"Mua tại vùng trũng, bán ở đỉnh sóng".</strong>
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hiện tại, giá đất mặt tiền Quốc lộ 1A và Quốc lộ 20 đoạn qua trung tâm thị
                    trấn Dầu Giây đang được giao dịch trong khoảng{" "}
                    <strong className="text-slate-800">45 – 70 triệu đồng/m²</strong>. Trong khi
                    đó, các lô đất nền The Link City nằm ngay sau mặt tiền QL1A (kết nối trực
                    tiếp ra nút giao ngã tư) chỉ đang được mở bán đợt 1 với mức giá:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
                      <p className="text-xs text-amber-600 font-semibold uppercase tracking-wide mb-1">Lô 95m² LK17A</p>
                      <p className="text-2xl font-black text-amber-800">~19,5 triệu/m²</p>
                      <p className="text-xs text-amber-600 mt-1">Từ 1,852 tỷ/nền</p>
                    </div>
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
                      <p className="text-xs text-amber-600 font-semibold uppercase tracking-wide mb-1">Lô 100m² đường lớn</p>
                      <p className="text-2xl font-black text-amber-800">~21 – 23 triệu/m²</p>
                      <p className="text-xs text-amber-600 mt-1">Chênh lệch 2-3 lần vs mặt tiền QL</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mức chênh lệch hơn 2 đến 3 lần giữa đất mặt tiền kinh doanh hiện hữu và đất
                    nội khu đô thị 21ha liền kề cho thấy The Link City chính là{" "}
                    <strong className="text-amber-600">
                      "vùng trũng giá" hiếm hoi còn sót lại
                    </strong>{" "}
                    tại khu vực cửa ngõ giao thương Đông Nam Bộ. Khi các trục Shophouse thương
                    mại của dự án hoàn thành và kết nối thông suốt với Quốc lộ 1A, khoảng cách
                    về giá này sẽ nhanh chóng được thu hẹp.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/bang-gia">
                      💰 Tra cứu giá từng lô LK17A, LK17B →
                    </LinkBtn>
                    <LinkBtn href="/the-link-city/thanh-toan">
                      🧮 Xem phương án thanh toán từ 550 triệu vốn tự có →
                    </LinkBtn>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS45["3"]}
                    alt="Sa bàn trục đường thương mại kết nối Quốc lộ 1A của dự án The Link City Dầu Giây"
                    caption="Vị trí sát cạnh Quốc lộ 1A giúp các sản phẩm tại The Link City sở hữu giá trị thương mại lớn"
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 4: 5 ngòi nổ ── */}
              <section className="mb-12" id="ngoi-no">
                <SectionHeading id="ngoi-no">
                  4. 5 "Ngòi Nổ" Thúc Đẩy Tiềm Năng Tăng Giá Vượt Trội Giai Đoạn 2026 – 2028
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đầu tư vào The Link City thời điểm này là đón đầu 5 cột mốc hạ tầng và kinh
                    tế then chốt chuẩn bị bùng nổ:
                  </p>

                  {/* Highlight box */}
                  <div className="rounded-2xl border border-amber-300 bg-amber-50 overflow-hidden">
                    <div className="bg-amber-500 text-white px-5 py-3 text-center">
                      <p className="font-black text-sm tracking-wide uppercase">
                        5 Đòn Bẩy Tăng Giá Của The Link City Dầu Giây
                      </p>
                    </div>
                    <div className="divide-y divide-amber-200">
                      {[
                        "Trục giao thông hội tụ: Cao tốc Dầu Giây – Phan Thiết & Tân Phú",
                        "Cảng hàng không Quốc tế Long Thành cất cánh thương mại",
                        "Khởi công Khu TTTM dịch vụ nội khu 2,6 ha",
                        "Làn sóng dịch chuyển công nghiệp & Chuyên gia về Thống Nhất",
                        "Đô thị Dầu Giây nâng cấp diện mạo hành chính – dịch vụ",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 px-5 py-3">
                          <span className="font-black text-amber-500 text-sm w-5 shrink-0">{i + 1}</span>
                          <span className="text-amber-800 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {CATALYSTS.map((item) => (
                      <div key={item.n} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <span className="text-3xl font-black text-amber-200 leading-none w-10 shrink-0">{item.n}</span>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS45["4"]}
                    alt="Bản đồ quy hoạch hạ tầng giao thông kết nối dự án The Link City Dầu Giây Đồng Nai"
                    caption="Hạ tầng giao thông liên vùng là bảo chứng tăng giá vững chắc nhất cho dự án"
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/vi-tri">
                      📍 Khám phá bản đồ kết nối các tuyến cao tốc →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 5: Thanh khoản ── */}
              <section className="mb-12" id="thanh-khoan">
                <SectionHeading id="thanh-khoan">
                  5. Đánh Giá Tính Thanh Khoản: Mua Đợt 1 Bán Lại Cho Ai Và Khi Nào Nên Chốt Lời?
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Rất nhiều nhà đầu tư lo sợ mua xong không biết "ra hàng" (bán lại) cho ai.
                    Đối với The Link City, tính thanh khoản được đảm bảo nhờ{" "}
                    <strong className="text-slate-800">3 tệp khách hàng mua cuối (end-users)</strong>{" "}
                    rõ ràng:
                  </p>

                  <div className="space-y-3">
                    {END_USERS.map((u) => (
                      <div key={u.title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <span className="text-2xl shrink-0">{u.icon}</span>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-1">{u.title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{u.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-700 font-bold text-sm mt-4">Chiến Lược Chốt Lời Khuyến Nghị:</p>
                  <div className="space-y-3">
                    {STRATEGIES.map((s) => {
                      const border = s.color === "amber" ? "border-amber-300" : s.color === "emerald" ? "border-emerald-200" : "border-slate-200";
                      const bg     = s.color === "amber" ? "bg-amber-50"     : s.color === "emerald" ? "bg-emerald-50"     : "bg-slate-50";
                      const title  = s.color === "amber" ? "text-amber-800"  : s.color === "emerald" ? "text-emerald-800"  : "text-slate-800";
                      const sub    = s.color === "amber" ? "text-amber-600"  : s.color === "emerald" ? "text-emerald-600"  : "text-slate-500";
                      return (
                        <div key={s.tag} className={`rounded-2xl border ${border} ${bg} p-5`}>
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`font-black text-sm ${title}`}>{s.tag}</span>
                            <span className={`text-xs font-semibold ${sub}`}>({s.period})</span>
                            {s.recommended && (
                              <span className="text-[10px] font-black uppercase tracking-wide bg-amber-500 text-white px-2 py-0.5 rounded-full">
                                Khuyên dùng
                              </span>
                            )}
                          </div>
                          <p className={`text-sm leading-relaxed ${sub} mb-1`}>{s.desc}</p>
                          <p className={`text-sm font-bold ${title}`}>{s.upside}</p>
                        </div>
                      );
                    })}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS45["5"]}
                    alt="Tiện ích sân bóng đá và cụm sân thể thao thực tế tại The Link City Dầu Giây"
                    caption="Tiện ích thể thao hiện hữu thu hút đông đảo cư dân, tạo sức sống thực cho khu đô thị"
                    images={images}
                    index={4}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 6: Rủi ro & phân bổ vốn ── */}
              <section className="mb-12" id="rui-ro">
                <SectionHeading id="rui-ro">
                  6. Nhận Diện Rủi Ro & Lời Khuyên Phân Bổ Vốn Thực Chiến
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bất kỳ kênh đầu tư nào cũng tồn tại những yếu tố cần cân nhắc. Dưới đây là
                    góc nhìn thẳng thắn dành cho nhà đầu tư:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: "⏳",
                        title: "Thời gian lấp đầy cư dân",
                        body: "Là một khu đô thị quy mô lớn 21ha, việc lấp đầy nhà cửa cần một lộ trình từ 2 – 4 năm. Nhà đầu tư không nên kỳ vọng toàn bộ dự án sẽ sầm uất ngay sau vài tháng.",
                        type: "warn",
                      },
                      {
                        icon: "🏦",
                        title: "Lời khuyên đòn bẩy tài chính",
                        body: "Chỉ nên dùng vốn vay ngân hàng ở mức an toàn (tối đa 50% – 70% giá trị đất). Nếu sử dụng gói vay 70%, hãy đảm bảo bạn có nguồn thu nhập thặng dư từ 15 – 20 triệu/tháng để trả nợ gốc lãi mà không ảnh hưởng đến chất lượng cuộc sống.",
                        type: "warn",
                      },
                      {
                        icon: "🎯",
                        title: "Lựa chọn vị trí lô đất theo mục tiêu",
                        body: "Thanh khoản nhanh: Chọn lô tiêu chuẩn 95m² (LK17A) — tổng tiền vừa phải 1,85 tỷ, dễ tìm người mua lại nhất. Kinh doanh / cho thuê: Ưu tiên lô mặt tiền đường N20 hoặc lô góc gần cụm tiện ích thể thao.",
                        type: "info",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className={`flex items-start gap-4 rounded-2xl border p-5 ${
                          item.type === "warn"
                            ? "border-amber-200 bg-amber-50"
                            : "border-slate-200 bg-slate-50"
                        }`}
                      >
                        <span className="text-2xl shrink-0">{item.icon}</span>
                        <div>
                          <p className={`font-black text-sm mb-1 ${item.type === "warn" ? "text-amber-800" : "text-slate-800"}`}>
                            {item.title}
                          </p>
                          <p className={`text-sm leading-relaxed ${item.type === "warn" ? "text-amber-700" : "text-slate-600"}`}>
                            {item.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/mat-bang">
                      📐 Xem bản vẽ mặt bằng & phân tích các block đẹp →
                    </LinkBtn>
                    <LinkBtn href="/the-link-city/hinh-anh">
                      📷 Xem kho ảnh sa bàn & thực tế công trường →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── FAQ ── */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">
                  7. Các Câu Hỏi Thường Gặp Của Nhà Đầu Tư Trước Khi Xuống Cọc
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
                  8. Đăng Ký Nhận Báo Cáo Phân Tích Thị Trường & Đặt Lịch Thực Địa
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cơ hội sở hữu đất nền đô thị sổ hồng tại ngã tư Dầu Giây với giá gốc đợt 1
                    chỉ từ{" "}
                    <strong className="text-amber-600">1,85 tỷ đồng</strong> đang mở ra cho
                    những nhà đầu tư nhanh nhạy nhất. Để nhận trọn bộ tài liệu đầu tư:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: "📋", title: "Báo cáo quy hoạch", desc: "Phân tích hạ tầng huyện Thống Nhất đến 2030" },
                      { icon: "📊", title: "Bảng giá đẹp nhất", desc: "Báo giá niêm yết các lô đẹp LK17A, LK17B" },
                      { icon: "🚌", title: "Xe đưa đón thực địa", desc: "Tham quan sa bàn 21ha & công trường cuối tuần" },
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
                      LIÊN HỆ PHÒNG KINH DOANH CHỦ ĐẦU TƯ KIM OANH ĐỒNG NAI
                    </p>
                    <div className="space-y-2 text-sm text-amber-700">
                      <p><strong>Dự án:</strong> The Link City Dầu Giây (KDC A1-C1 Đô thị Dầu Giây)</p>
                      <p>
                        <strong>Website:</strong>{" "}
                        <a href="https://kimoanhdongnai.com.vn/the-link-city" className="underline hover:text-amber-900">
                          kimoanhdongnai.com.vn/the-link-city
                        </a>
                      </p>
                      <p><strong>Văn phòng Biên Hòa:</strong> 268A Phan Trung, P. Tam Hiệp, TP. Biên Hòa, Đồng Nai</p>
                      <p><strong>Văn phòng dự án:</strong> Ngã tư Quốc lộ 1A & Quốc lộ 20, xã Dầu Giây, H. Thống Nhất, Đồng Nai</p>
                    </div>
                  </div>

                  <InfoBox>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Bản quyền bài viết thuộc về Kim Oanh Đồng Nai — Mọi thông tin sao chép
                      vui lòng trích dẫn nguồn:{" "}
                      <a href="https://kimoanhdongnai.com.vn/the-link-city" className="text-amber-600 underline">
                        kimoanhdongnai.com.vn/the-link-city
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
                    { href: "/the-link-city/vi-tri",                                                    label: "Vị trí & Liên kết vùng The Link City" },
                    { href: "/the-link-city/phap-ly",                                                   label: "Pháp lý sổ hồng The Link City" },
                    { href: "/the-link-city/bang-gia",                                                  label: "Bảng giá The Link City mới nhất" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                                label: "Tổng quan The Link City Dầu Giây" },
                    { href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",    label: "Bài toán vay ngân hàng The Link City" },
                    { href: "/the-link-city/mat-bang",                                                  label: "Mặt bằng phân lô The Link City" },
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
                    Khi đặt lên bàn cân, The Link City Dầu Giây không chỉ thắng đất thổ cư phân
                    lô tự do ở một hay hai tiêu chí — mà thắng trên toàn diện: pháp lý minh
                    bạch, hạ tầng hoàn thiện 100%, tiện ích sống đẳng cấp, hỗ trợ tài chính
                    ngân hàng và 5 đòn bẩy tăng giá rõ ràng trong giai đoạn 2026–2028.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với mức giá khởi điểm chỉ{" "}
                    <strong className="text-amber-600">1,85 tỷ đồng/nền</strong> ở đợt 1 —
                    đây là thời điểm tốt nhất để bước vào một tài sản đô thị thực, có sổ hồng,
                    tại "nút giao kim cương" của Đông Nam Bộ.
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài được tổng hợp từ các nguồn công khai và mang tính tham
                  khảo. Dự báo tăng giá là kỳ vọng, không phải cam kết. Cần đối chiếu thông
                  tin chính thức trước khi đưa ra quyết định giao dịch.
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

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-bold text-amber-800 text-sm mb-3">Kết luận so sánh nhanh</p>
                  <div className="space-y-2">
                    {[
                      ["Pháp lý", "✅ Sổ hồng từng nền"],
                      ["Hạ tầng", "✅ Hoàn thiện 100%"],
                      ["Vay NH", "✅ Hỗ trợ 70%"],
                      ["Tiện ích", "✅ 50+ nội khu"],
                      ["Giá đợt 1", "✅ Từ 1,85 tỷ"],
                    ].map(([label, val]) => (
                      <div key={label} className="flex items-center justify-between gap-2">
                        <span className="text-amber-700 text-xs">{label}</span>
                        <span className="text-amber-900 text-xs font-bold">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Tổng quan The Link City",         href: "/tin-tuc/tong-quan-the-link-city-dau-giay" },
                      { label: "Bài toán vay ngân hàng",          href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026" },
                      { label: "Pháp lý sổ hồng The Link City",  href: "/the-link-city/phap-ly" },
                      { label: "Bảng giá The Link City",          href: "/the-link-city/bang-gia" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn đầu tư & thực địa</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Đặt lịch xe đưa đón tham quan thực địa The Link City miễn phí cuối tuần.
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
              Sẵn sàng tham quan thực địa The Link City Dầu Giây?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Đặt lịch xe đưa đón miễn phí hoặc liên hệ nhận ngay bảng giá đợt 1 và báo cáo
              phân tích thị trường huyện Thống Nhất 2026.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/the-link-city"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Xem thông tin The Link City →
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
              href: "/tin-tuc/so-sanh-mega-city-2-va-dat-tho-cu-dan-nhon-trach",
              title: "So Sánh Mega City 2 Và Đất Thổ Cư Dân Nhơn Trạch",
              description: "Phân tích 5 tiêu chí: hạ tầng, pháp lý, xây dựng, tiện ích và thanh khoản.",
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
