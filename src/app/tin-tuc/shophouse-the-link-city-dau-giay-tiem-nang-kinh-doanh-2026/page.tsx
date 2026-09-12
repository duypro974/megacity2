"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS48 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/shophouse-the-link-city-dau-giay-tiem-nang-kinh-doanh-2026`;
const PUBLISHED     = "12/09/2026";
const PUBLISHED_ISO = "2026-09-12";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shophouse The Link City Dầu Giây 2026: Vị Thế Mặt Tiền Giao Thương & Bài Toán Khai Thác Dòng Tiền Cho Thuê",
  description:
    "Phân tích tiềm năng đầu tư Shophouse The Link City Dầu Giây: Mặt tiền trục đường lớn QL1A, thiết kế 2 mặt thoáng tối ưu kinh doanh và bài toán lợi nhuận cho thuê 2026.",
  image: [IMG_NEWS48["1"], IMG_NEWS48["3"], IMG_NEWS48["4"]],
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
    "shophouse The Link City, nhà phố thương mại The Link City, mặt bằng kinh doanh Dầu Giây, rental yield shophouse Đồng Nai",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Shophouse The Link City có thời hạn sở hữu bao nhiêu năm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Toàn bộ sản phẩm Shophouse tại The Link City được cấp Giấy chứng nhận quyền sử dụng đất và quyền sở hữu nhà ở lâu dài (Sổ hồng vĩnh viễn), không phải loại hình thương mại 50 năm như shophouse khối đế chung cư.",
      },
    },
    {
      "@type": "Question",
      name: "Tôi có thể vừa ở vừa cho thuê tầng trệt được không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoàn toàn được. Bản vẽ thiết kế đã tính toán sẵn hệ thống kỹ thuật và cầu thang riêng biệt để gia chủ có thể khóa riêng tầng trệt cho thuê kinh doanh, trong khi vẫn sinh hoạt độc lập và an ninh tại lầu 1 và lầu 2.",
      },
    },
    {
      "@type": "Question",
      name: "Chủ đầu tư Kim Oanh có hỗ trợ tìm kiếm khách thuê cho chủ nhà không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Tập đoàn Kim Oanh có bộ phận quản trị thương mại hỗ trợ kết nối các đối tác F&B, chuỗi siêu thị tiện ích và các thương hiệu bán lẻ lớn đến thuê lại mặt bằng của các gia chủ có nhu cầu ủy thác cho thuê.",
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
      name: "Shophouse The Link City Dầu Giây 2026",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS48["1"],
    alt: "Phối cảnh tuyến phố shophouse thương mại sầm uất rực rỡ ánh đèn tại The Link City Dầu Giây",
    caption: "Tuyến phố shophouse sầm uất rực rỡ ánh đèn – Tâm điểm thương mại và giải trí mới tại Dầu Giây",
  },
  {
    src: IMG_NEWS48["2"],
    alt: "Thiết kế nội thất quán cafe và showroom kinh doanh hiện đại tại tầng trệt shophouse The Link City",
    caption: "Không gian tầng trệt rộng thoáng với trần cao 3,8m, lý tưởng cho mọi loại hình kinh doanh",
  },
  {
    src: IMG_NEWS48["3"],
    alt: "Phối cảnh 3D căn góc shophouse 2 mặt tiền đắc địa tại dự án The Link City Dầu Giây",
    caption: "Các căn góc 2 mặt tiền sở hữu tầm nhìn panorama đắt giá và khả năng nhận diện thương hiệu tuyệt vời",
  },
  {
    src: IMG_NEWS48["4"],
    alt: "Hoạt động kinh doanh buôn bán sầm uất tại dãy phố thương mại The Link City Dầu Giây",
    caption: "Không khí giao thương sôi động đón đầu hàng triệu lượt khách qua ngã tư Dầu Giây mỗi năm",
  },
  {
    src: IMG_NEWS48["5"],
    alt: "Không gian sống tiện nghi hiện đại tại các tầng trên của shophouse The Link City Dầu Giây",
    caption: "Không gian sống yên tĩnh, sang trọng trên các tầng cao tách biệt hoàn toàn với phố thị bên dưới",
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
const PRICE_ROWS = [
  {
    type: "Đất nền thương mại trục N20",
    land: "95m² – 100m²",
    floor: "Xây dựng tự do theo mẫu",
    price: "1,85 tỷ – 2,25 tỷ VNĐ",
    highlight: false,
  },
  {
    type: "Shophouse mặt tiền đường đôi",
    land: "100m² – 120m²",
    floor: "~220m² – 260m² sàn",
    price: "3,85 tỷ – 4,60 tỷ VNĐ",
    highlight: true,
  },
  {
    type: "Shophouse Căn góc 2 mặt tiền",
    land: "130m² – 165m²",
    floor: "~280m² – 340m² sàn",
    price: "5,20 tỷ – 6,41 tỷ VNĐ",
    highlight: true,
  },
];

const BUSINESS_MODELS = [
  {
    n: "01",
    icon: "☕",
    title: "Chuỗi F&B & Trà sữa thương hiệu",
    body: "Khu vực Dầu Giây hiện đang rất thiếu những quán cà phê thương hiệu lớn (Highlands, The Coffee House, Phúc Long) để thanh niên, cán bộ huyện và du khách dừng chân nghỉ ngơi trên hành trình xuyên tỉnh.",
  },
  {
    n: "02",
    icon: "🏦",
    title: "Phòng giao dịch Ngân hàng & Tài chính",
    body: "Với sự bùng nổ của KCN Dầu Giây và sân bay Long Thành, nhu cầu mở rộng chi nhánh ngân hàng, văn phòng công chứng và công ty bảo hiểm tại đây là cực lớn.",
  },
  {
    n: "03",
    icon: "🏥",
    title: "Y tế, Phòng khám & Chuỗi Nhà thuốc",
    body: "Dân số đô thị tăng nhanh kéo theo nhu cầu khám chữa bệnh chất lượng cao, nhà thuốc tây tiêu chuẩn GPP (Long Châu, An Khang...) — thị trường ngách sinh lợi rất cao.",
  },
  {
    n: "04",
    icon: "🏨",
    title: "Khách sạn Mini / Căn hộ dịch vụ Chuyên gia",
    body: "Cho thuê lưu trú ngắn hạn phục vụ du khách TP.HCM – Đà Lạt hoặc chuyên gia nước ngoài tại các KCN lân cận. Giá thuê từ 6 – 10 triệu/phòng/tháng, tỷ suất lấp đầy cao.",
  },
  {
    n: "05",
    icon: "🏗️",
    title: "Showroom Ô tô, Nội thất & Vật liệu xây dựng",
    body: "Nhu cầu xây dựng nhà ở của cư dân trong đô thị 149ha sẽ bùng nổ trong 3 năm tới, tạo cơ hội vàng cho các nhà cung ứng vật liệu hoàn thiện và showroom nội thất cao cấp.",
  },
];

const COMPARISON_ROWS = [
  {
    criteria: "Mặt bằng giá đợt 1",
    tlc: "3,8 tỷ – 4,6 tỷ VNĐ (Rất mềm)",
    mc2: "3,5 tỷ – 4,5 tỷ VNĐ",
    other: "9 tỷ – 15 tỷ VNĐ (Khá cao)",
  },
  {
    criteria: "Lưu lượng giao thông",
    tlc: "Cực lớn (Ngã tư QL1A – QL20 kết nối liên tỉnh)",
    mc2: "Trung bình (Chủ yếu nội khu Nhơn Trạch)",
    other: "Trung bình (Đón khách nghỉ dưỡng)",
  },
  {
    criteria: "Pháp lý",
    tlc: "Sổ hồng sẵn sàng công chứng",
    mc2: "Đang hoàn thiện pháp lý",
    other: "Hợp đồng mua bán / Chờ sổ",
  },
  {
    criteria: "Khả năng khai thác ngay",
    tlc: "Ngay lập tức (Hạ tầng 100%, có dân cư)",
    mc2: "Chờ dân cư về lấp đầy",
    other: "Đang hoàn thiện tiện ích",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function ShophouseTheLinkCityPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Shophouse The Link City Dầu Giây 2026</span>
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
              Shophouse The Link City Dầu Giây 2026: Vị Thế Mặt Tiền Giao Thương & Bài Toán Khai Thác Dòng Tiền Cho Thuê
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích toàn diện tiềm năng đầu tư nhà phố thương mại (shophouse) tại{" "}
              <a href="/the-link-city" className="text-amber-600 font-semibold hover:underline">
                The Link City
              </a>{" "}
              Dầu Giây: vị thế mặt tiền QL1A, thiết kế dual-key tối ưu kinh doanh, giá từ
              3,85 tỷ và rental yield lên đến 9,2%/năm.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh phố shophouse The Link City về đêm"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS48["1"]}
                alt="Phối cảnh tuyến phố shophouse thương mại sầm uất rực rỡ ánh đèn tại The Link City Dầu Giây"
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
              Tuyến phố shophouse sầm uất rực rỡ ánh đèn – Tâm điểm thương mại và giải trí mới tại Dầu Giây
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
                    ["#suc-hut",      "1. Sức hút Shophouse cửa ngõ"],
                    ["#thiet-ke",     "2. Thiết kế tối ưu Dual-Key"],
                    ["#bang-gia",     "3. Bảng giá Shophouse đợt 1"],
                    ["#mo-hinh",      "4. Top 5 mô hình kinh doanh"],
                    ["#tai-chinh",    "5. Bài toán Rental Yield & Lãi vốn"],
                    ["#so-sanh",      "6. So sánh với khu đô thị lân cận"],
                    ["#faq",          "7. Câu hỏi thường gặp"],
                    ["#dang-ky",      "8. Đăng ký mặt bằng căn góc"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* ── Section 1: Sức hút ── */}
              <section className="mb-12" id="suc-hut">
                <SectionHeading id="suc-hut">
                  1. Sức Hút Của Shophouse Cửa Ngõ: Khi Ngã Tư Dầu Giây Trở Thành "Tọa Độ Vàng" Kinh Doanh
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong phân khúc bất động sản cao cấp, Nhà phố thương mại (Shophouse) luôn
                    được ví như{" "}
                    <strong className="text-slate-800">"gà đẻ trứng vàng"</strong> nhờ khả năng
                    sinh lời kép: vừa tạo ra dòng tiền cho thuê ổn định hàng tháng, vừa sở hữu
                    biên độ tăng giá đất vượt bậc theo thời gian. Tuy nhiên, giá trị của một
                    căn Shophouse phụ thuộc{" "}
                    <strong className="text-slate-800">90% vào lưu lượng giao thông</strong> và
                    mật độ dân cư qua lại.
                  </p>

                  <p className="text-slate-700 font-bold text-sm">
                    The Link City Dầu Giây sở hữu 3 lợi thế vị thế hiếm có:
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        icon: "🔀",
                        title: 'Tọa độ "Phễu giao thông"',
                        body: "Tọa lạc ngay ngã tư Quốc lộ 1A và Quốc lộ 20, dự án là điểm dừng chân bắt buộc của hàng triệu lượt phương tiện lưu thông từ TP.HCM đi Đà Lạt, Phan Thiết và các tỉnh miền Trung.",
                      },
                      {
                        icon: "🏙️",
                        title: "Lực đẩy từ đại đô thị 149ha",
                        body: "Khi quy hoạch toàn khu đô thị Dầu Giây hoàn thành, nơi đây sẽ quy tụ hơn 30.000 cư dân sinh sống, tạo nên một cộng đồng tiêu dùng nội tại khổng lồ ngay trước cửa nhà.",
                      },
                      {
                        icon: "🏭",
                        title: "Liền kề KCN Dầu Giây & KCN Thống Nhất",
                        body: "Đón đầu nhu cầu dịch vụ cao cấp từ hàng nghìn chuyên gia, kỹ sư nước ngoài và chủ doanh nghiệp đang thiếu các địa điểm tiếp khách, ăn uống sang trọng.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                        <span className="text-2xl shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-black text-amber-800 text-sm mb-1">{item.title}</p>
                          <p className="text-amber-700 text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/vi-tri">
                      📍 Khám phá chi tiết tọa độ ngã tư thương mại →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 2: Thiết kế ── */}
              <section className="mb-12" id="thiet-ke">
                <SectionHeading id="thiet-ke">
                  2. Thiết Kế Shophouse The Link City: Tối Ưu Công Năng "Nhân Đôi Lợi Nhuận"
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khác biệt với những căn nhà phố thông thường, các căn Shophouse tại The
                    Link City được thiết kế theo triết lý{" "}
                    <strong className="text-slate-800">
                      "Đa công năng – Tách biệt không gian" (Dual-key / Mixed-use)
                    </strong>:
                  </p>

                  {/* Ground floor */}
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 overflow-hidden">
                    <div className="bg-amber-500 text-white px-5 py-3">
                      <p className="font-black text-sm">Tầng Trệt: Tối Đa Hóa Mặt Tiền Kinh Doanh</p>
                    </div>
                    <div className="divide-y divide-amber-100">
                      {[
                        ["Chiều cao tầng trệt", "3,8m — cảm giác thông thoáng, sang trọng, dễ lắp biển hiệu lớn và trang trí nhận diện thương hiệu"],
                        ["Mặt tiền rộng", "5m – 7m toàn bộ vách kính cường lực tràn viền, đón ánh sáng tự nhiên và thu hút tầm nhìn người đi đường"],
                        ["Vỉa hè thương mại", "Rộng 5m – 8m — đủ không gian đậu xe máy, ô tô cho khách mà không lo lấn chiếm lòng đường"],
                      ].map(([label, desc]) => (
                        <div key={label} className="flex items-start gap-3 px-5 py-3">
                          <span className="text-amber-600 font-bold text-xs w-36 shrink-0 mt-0.5">{label}</span>
                          <span className="text-amber-800 text-sm leading-relaxed">{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upper floors */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
                    <div className="bg-slate-700 text-white px-5 py-3">
                      <p className="font-black text-sm">Các Tầng Trên: Không Gian Sống Riêng Tư Chuẩn Nghỉ Dưỡng</p>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {[
                        ["Lối đi riêng biệt", "Cầu thang và lối tiếp cận độc lập — kinh doanh tầng trệt không ảnh hưởng sinh hoạt tầng trên"],
                        ["Lầu 1 & Lầu 2", "3 – 4 phòng ngủ Master khép kín, phòng khách gia đình và ban công đón gió mát từ công viên nội khu"],
                      ].map(([label, desc]) => (
                        <div key={label} className="flex items-start gap-3 px-5 py-3">
                          <span className="text-slate-500 font-bold text-xs w-36 shrink-0 mt-0.5">{label}</span>
                          <span className="text-slate-600 text-sm leading-relaxed">{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS48["2"]}
                    alt="Thiết kế nội thất quán cafe và showroom kinh doanh hiện đại tại tầng trệt shophouse The Link City"
                    caption="Không gian tầng trệt rộng thoáng với trần cao 3,8m, lý tưởng cho mọi loại hình kinh doanh"
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/mat-bang">
                      📐 Xem bản vẽ mặt bằng và mặt cắt kỹ thuật shophouse →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 3: Bảng giá ── */}
              <section className="mb-12" id="bang-gia">
                <SectionHeading id="bang-gia">
                  3. Cập Nhật Bảng Giá Shophouse Đợt 1 Năm 2026 Từ Kim Oanh Land
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong đợt mở bán đầu năm 2026, các sản phẩm Shophouse và đất nền mặt tiền
                    thương mại tại The Link City có mức giá cực kỳ cạnh tranh so với tiềm năng
                    doanh thu:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[540px]">
                      <thead>
                        <tr className="bg-amber-500 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Dòng sản phẩm</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Diện tích đất</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Diện tích sàn</th>
                          <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wide">Giá đợt 1</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {PRICE_ROWS.map((row, i) => (
                          <tr key={row.type} className={row.highlight ? "bg-amber-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className={`px-4 py-3 text-sm font-medium ${row.highlight ? "text-amber-800" : "text-slate-700"}`}>
                              {row.highlight && "⭐ "}{row.type}
                            </td>
                            <td className="px-4 py-3 text-slate-600 text-sm">{row.land}</td>
                            <td className="px-4 py-3 text-slate-600 text-sm">{row.floor}</td>
                            <td className={`px-4 py-3 text-right text-sm font-bold ${row.highlight ? "text-amber-700" : "text-slate-700"}`}>
                              {row.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-slate-700 font-bold text-sm">Chính sách đòn bẩy tài chính hỗ trợ:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        label: "Vốn tự có ban đầu",
                        value: "Chỉ 30%",
                        desc: "Từ 1,1 tỷ – 1,8 tỷ cho một căn Shophouse hoàn thiện mặt ngoài",
                        color: "amber",
                      },
                      {
                        label: "Hỗ trợ ngân hàng",
                        value: "70% giá trị",
                        desc: "OCB / Vietcombank giải ngân, ân hạn nợ gốc và ưu đãi lãi suất năm đầu",
                        color: "blue",
                      },
                    ].map((item) => (
                      <div key={item.label} className={`rounded-2xl border p-5 ${item.color === "amber" ? "border-amber-200 bg-amber-50" : "border-blue-200 bg-blue-50"}`}>
                        <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${item.color === "amber" ? "text-amber-600" : "text-blue-600"}`}>{item.label}</p>
                        <p className={`text-2xl font-black mb-1 ${item.color === "amber" ? "text-amber-800" : "text-blue-800"}`}>{item.value}</p>
                        <p className={`text-xs leading-relaxed ${item.color === "amber" ? "text-amber-700" : "text-blue-700"}`}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS48["3"]}
                    alt="Phối cảnh 3D căn góc shophouse 2 mặt tiền đắc địa tại dự án The Link City Dầu Giây"
                    caption="Các căn góc 2 mặt tiền sở hữu tầm nhìn panorama đắt giá và khả năng nhận diện thương hiệu tuyệt vời"
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/bang-gia">
                      💰 Tra cứu giỏ hàng Shophouse còn lại đợt này →
                    </LinkBtn>
                    <LinkBtn href="/the-link-city/thanh-toan">
                      🧮 Tính dòng tiền trả góp khi mua shophouse →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 4: Mô hình kinh doanh ── */}
              <section className="mb-12" id="mo-hinh">
                <SectionHeading id="mo-hinh">
                  4. Top 5 Mô Hình Kinh Doanh "Hái Ra Tiền" Tại The Link City
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sở hữu vị trí trung tâm hành chính và giao lộ ngã tư Dầu Giây, chủ sở hữu
                    Shophouse The Link City có thể tự vận hành kinh doanh hoặc cho thuê với 5
                    mô hình siêu lợi nhuận:
                  </p>

                  <div className="space-y-4">
                    {BUSINESS_MODELS.map((m) => (
                      <div key={m.n} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="flex flex-col items-center gap-1 shrink-0 w-10">
                          <span className="text-2xl font-black text-amber-200 leading-none">{m.n}</span>
                          <span className="text-xl">{m.icon}</span>
                        </div>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-1">{m.title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{m.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS48["4"]}
                    alt="Hoạt động kinh doanh buôn bán sầm uất tại dãy phố thương mại The Link City Dầu Giây"
                    caption="Không khí giao thương sôi động đón đầu hàng triệu lượt khách qua ngã tư Dầu Giây mỗi năm"
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 5: Bài toán tài chính ── */}
              <section className="mb-12" id="tai-chinh">
                <SectionHeading id="tai-chinh">
                  5. Bài Toán Tài Chính: Tỷ Suất Sinh Lời Từ Cho Thuê (Rental Yield) & Lãi Vốn
                </SectionHeading>
                <div className="pt-5 space-y-6">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Phân tích bài toán đầu tư thực tế cho một căn Shophouse trị giá{" "}
                    <strong className="text-slate-800">4,2 tỷ đồng</strong> tại The Link City
                    trong chu kỳ 3 năm (2026 – 2029):
                  </p>

                  {/* Rental yield */}
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 overflow-hidden">
                    <div className="bg-emerald-600 text-white px-5 py-3">
                      <p className="font-black text-sm">① Dòng Tiền Thu Nhập Từ Cho Thuê (Rental Yield)</p>
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-white rounded-xl border border-emerald-200 p-4 text-center">
                          <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wide mb-1">Cho thuê tầng trệt</p>
                          <p className="text-xl font-black text-emerald-800">15 – 20 triệu/tháng</p>
                        </div>
                        <div className="bg-white rounded-xl border border-emerald-200 p-4 text-center">
                          <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wide mb-1">Cho thuê nguyên căn</p>
                          <p className="text-xl font-black text-emerald-800">28 – 35 triệu/tháng</p>
                        </div>
                      </div>
                      <div className="rounded-xl border-l-4 border-emerald-500 bg-white px-4 py-3">
                        <p className="text-emerald-800 text-sm font-bold">
                          👉 Tỷ suất sinh lời từ dòng tiền:{" "}
                          <span className="text-xl font-black">7,8% – 9,2%/năm</span>
                        </p>
                        <p className="text-emerald-600 text-xs mt-1">
                          Cao gấp 1,5 lần so với tỷ suất cho thuê căn hộ tại TP.HCM (~4% – 5%/năm)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Capital gain */}
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 overflow-hidden">
                    <div className="bg-amber-500 text-white px-5 py-3">
                      <p className="font-black text-sm">② Tiềm Năng Tăng Trưởng Lãi Vốn (Capital Gain) sau 3 năm</p>
                    </div>
                    <div className="p-5 space-y-3">
                      {[
                        ["Mức tăng giá trị tài sản dự phóng", "Tối thiểu 15% – 20%/năm"],
                        ["Giá trị căn shophouse sau 3 năm", "6,2 tỷ – 7,0 tỷ đồng"],
                        ["Thặng dư vốn kỳ vọng", "2,0 tỷ – 2,8 tỷ đồng"],
                      ].map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between gap-4 bg-white rounded-xl border border-amber-100 px-4 py-3">
                          <span className="text-amber-700 text-sm">{label}</span>
                          <span className="text-amber-800 font-bold text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <InfoBox type="success">
                    <strong>👉 TỔNG LỢI NHUẬN KỲ VỌNG:</strong> Vừa có dòng tiền thụ động
                    đều đặn hàng tháng để trả lãi vay ngân hàng, vừa sở hữu mức thặng dư vốn
                    lên đến <strong>hàng tỷ đồng</strong> khi tài sản tăng giá trị sau 3 năm.
                  </InfoBox>

                  <ArticleFigure
                    src={IMG_NEWS48["5"]}
                    alt="Không gian sống tiện nghi hiện đại tại các tầng trên của shophouse The Link City Dầu Giây"
                    caption="Không gian sống yên tĩnh, sang trọng trên các tầng cao tách biệt hoàn toàn với phố thị bên dưới"
                    images={images}
                    index={4}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/phap-ly">
                      📑 Xem hồ sơ pháp lý sổ hồng và giấy phép xây dựng →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 6: So sánh ── */}
              <section className="mb-12" id="so-sanh">
                <SectionHeading id="so-sanh">
                  6. So Sánh Shophouse The Link City Với Các Khu Đô Thị Lân Cận
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[520px]">
                      <thead>
                        <tr className="bg-slate-700 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-36">Tiêu chí</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">⭐ The Link City</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Mega City 2</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Long Hưng / Aqua</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {COMPARISON_ROWS.map((row, i) => (
                          <tr key={row.criteria} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700 text-sm align-top">{row.criteria}</td>
                            <td className="px-4 py-3 text-amber-700 text-sm font-medium align-top">{row.tlc}</td>
                            <td className="px-4 py-3 text-slate-500 text-sm align-top">{row.mc2}</td>
                            <td className="px-4 py-3 text-slate-500 text-sm align-top">{row.other}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <InfoBox type="warn">
                    Shophouse The Link City sở hữu mức giá khởi điểm{" "}
                    <strong>chỉ bằng 1/3 so với các khu đô thị ven sông tại Biên Hòa</strong>,
                    nhưng lại sở hữu lưu lượng giao thông thương mại vượt trội hơn hẳn nhờ
                    nằm ngay mặt tiền quốc lộ huyết mạch.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/hinh-anh">
                      📷 Xem kho ảnh sa bàn và thực địa công trường →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── FAQ ── */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">
                  7. Các Câu Hỏi Thường Gặp Về Quyền Sở Hữu & Hoàn Công Shophouse
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
                  8. Đăng Ký Nhận Mặt Bằng Căn Góc & Đặt Lịch Tư Vấn Phương Án Kinh Doanh
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Số lượng Shophouse mặt tiền đường lớn tại The Link City mở bán đợt 1 là
                    rất giới hạn (chỉ chiếm khoảng{" "}
                    <strong className="text-amber-600">15% tổng giỏ hàng</strong>). Đây là thời
                    điểm vàng để sở hữu những vị trí đắc địa nhất trước khi bảng giá tăng theo
                    tiến độ xây dựng.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: "🏬", title: "Mặt bằng căn góc", desc: "Sơ đồ vị trí các căn góc 2 mặt tiền còn lại đợt 1" },
                      { icon: "📊", title: "Bảng tính dòng tiền", desc: "File Excel dòng tiền cho thuê và hoàn vốn theo kịch bản" },
                      { icon: "💼", title: "Tư vấn kinh doanh", desc: "Phân tích phương án khai thác phù hợp nhất với vị trí lô" },
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
                      LIÊN HỆ PHÒNG KINH DOANH SHOPHOUSE KIM OANH ĐỒNG NAI
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
                      <a href="https://kimoanhdongnai.com.vn/the-link-city/bang-gia" className="text-amber-600 underline">
                        kimoanhdongnai.com.vn/the-link-city/bang-gia
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
                    { href: "/the-link-city/bang-gia",                                                     label: "Bảng giá The Link City mới nhất" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                                   label: "Tổng quan The Link City Dầu Giây" },
                    { href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",       label: "Bài toán vay ngân hàng The Link City" },
                    { href: "/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026",                 label: "Hệ sinh thái 50+ tiện ích The Link City" },
                    { href: "/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026",        label: "So sánh The Link City vs đất thổ cư" },
                    { href: "/the-link-city/mat-bang",                                                     label: "Mặt bằng phân lô The Link City" },
                    { href: "/the-link-city/phap-ly",                                                      label: "Pháp lý sổ hồng The Link City" },
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
                    Shophouse The Link City Dầu Giây là sản phẩm đầu tư hiếm hoi hội tụ đủ 3
                    yếu tố then chốt:{" "}
                    <strong className="text-slate-800">vị thế giao thương đắc địa</strong> ngay
                    ngã tư huyết mạch QL1A – QL20,{" "}
                    <strong className="text-slate-800">pháp lý sổ hồng vĩnh viễn</strong> và{" "}
                    <strong className="text-slate-800">
                      giá đợt 1 cực kỳ cạnh tranh từ 3,85 tỷ
                    </strong>.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với rental yield dự kiến đạt 7,8% – 9,2%/năm và tiềm năng lãi vốn 15–20%/năm
                    trong giai đoạn 2026–2029, đây là kênh đầu tư sinh lời kép thực sự dành cho
                    nhà đầu tư có tầm nhìn dài hạn tại thị trường Đồng Nai.
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài được tổng hợp từ các nguồn công khai và mang tính tham
                  khảo. Dự báo rental yield và lãi vốn là kỳ vọng, không phải cam kết. Cần
                  đối chiếu thông tin chính thức trước khi đưa ra quyết định giao dịch.
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

                {/* Rental yield quick stats */}
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="font-bold text-emerald-800 text-sm mb-3">Hiệu suất đầu tư</p>
                  <div className="space-y-2">
                    {[
                      ["Rental Yield", "7,8% – 9,2%/năm"],
                      ["Lãi vốn dự phóng", "15% – 20%/năm"],
                      ["Giá từ", "3,85 tỷ VNĐ"],
                      ["Vốn tự có", "Chỉ 30%"],
                    ].map(([label, val]) => (
                      <div key={label} className="flex items-center justify-between gap-2">
                        <span className="text-emerald-700 text-xs">{label}</span>
                        <span className="text-emerald-900 text-xs font-bold">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Tổng quan The Link City",       href: "/tin-tuc/tong-quan-the-link-city-dau-giay" },
                      { label: "Bảng giá & Vay ngân hàng",      href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026" },
                      { label: "50+ Tiện ích The Link City",    href: "/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026" },
                      { label: "Quy trình mua bán",             href: "/tin-tuc/quy-trinh-mua-ban-the-link-city-dau-giay-tieu-chuan-xay-dung-2026" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Nhận mặt bằng căn góc</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Tư vấn vị trí shophouse đắc địa nhất và phương án khai thác dòng tiền.
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
              Sẵn sàng sở hữu Shophouse sinh lời kép tại The Link City?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Liên hệ ngay để nhận sơ đồ mặt bằng căn góc còn lại, bảng tính dòng tiền cho
              thuê và tư vấn phương án kinh doanh miễn phí.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/the-link-city/bang-gia"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Xem bảng giá Shophouse →
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
              href: "/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026",
              title: "Hệ Sinh Thái 50+ Tiện Ích The Link City Dầu Giây",
              description: "TTTM 2,6ha, pickleball, công viên đa thế hệ và trường học nội khu.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026",
              title: "So Sánh The Link City vs Đất Thổ Cư Dầu Giây 2026",
              description: "6 tiêu chí trực diện và 5 ngòi nổ tăng giá giúp nhà đầu tư quyết định đúng.",
              tag: "Tin dự án",
            },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}
