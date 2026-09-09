"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS43 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/tong-quan-the-link-city-dau-giay`;
const PUBLISHED     = "09/09/2026";
const PUBLISHED_ISO = "2026-09-09";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Link City Dầu Giây – Tổng Quan Dự Án & Giá Bán Đợt 1 Năm 2026",
  description:
    "Tổng quan dự án The Link City (Khu dân cư A1-C1 Đô thị Dầu Giây): vị trí ngã tư QL1A & QL20, pháp lý sổ hồng từng nền, bảng giá đợt 1 từ 1,85 tỷ, tiến độ hạ tầng hoàn thiện 100% năm 2026.",
  image: [IMG_NEWS43["1"], IMG_NEWS43["2"], IMG_NEWS43["3"]],
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
    name: "Dầu Giây, Thống Nhất, Đồng Nai",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dầu Giây",
      addressRegion: "Đồng Nai",
      addressCountry: "VN",
    },
  },
  keywords:
    "The Link City Dầu Giây, Khu dân cư A1-C1 Đô thị Dầu Giây, đất nền The Link City, giá bán The Link City 2026, Kim Oanh Land, sổ hồng từng nền Dầu Giây",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dự án The Link City có phải là Khu dân cư A1-C1 Dầu Giây không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chính xác. The Link City là tên thương mại chính thức của dự án Khu dân cư A1-C1 Đô thị Dầu Giây. Dự án do Công ty TNHH Đầu tư Phú Việt Tín làm chủ đầu tư và Tập đoàn Địa ốc Kim Oanh (Kim Oanh Land) là đơn vị phát triển độc quyền.",
      },
    },
    {
      "@type": "Question",
      name: "Khi mua đất nền tại The Link City, khách hàng nhận hình thức sở hữu nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khách hàng sẽ được nhận Giấy chứng nhận quyền sử dụng đất (Sổ hồng) riêng cho từng nền, mục đích sử dụng là đất ở tại đô thị (ODT) với thời hạn sử dụng lâu dài.",
      },
    },
    {
      "@type": "Question",
      name: "Mua đất nền tại đây có bắt buộc phải xây nhà ngay không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khách hàng mua đất nền không bị áp lực buộc phải xây nhà ngay lập tức, rất thuận lợi cho việc tích lũy tài sản dài hạn. Khi có nhu cầu xây dựng, khách hàng chỉ cần tuân thủ mẫu thiết kế kiến trúc và khoảng lùi quy hoạch đã được phê duyệt.",
      },
    },
    {
      "@type": "Question",
      name: "Quy trình thanh toán và công chứng sang tên diễn ra như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khách hàng đặt cọc giữ chỗ → Ký hợp đồng nguyên tắc theo tiến độ → Thanh toán theo các đợt thỏa thuận → Nhận bàn giao nền đất và tiến hành thủ tục ký hợp đồng chuyển nhượng công chứng tại Văn phòng Công chứng nhà nước để sang tên sổ hồng.",
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
      name: "Tổng quan The Link City Dầu Giây",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS43["1"],
    alt: "Toàn cảnh sa bàn dự án The Link City Dầu Giây 21ha do Kim Oanh phát triển tại Đồng Nai",
    caption: "Phối cảnh sa bàn kiến trúc The Link City quy mô 21ha với 1.397 sản phẩm tọa lạc tại trung tâm đô thị Dầu Giây",
  },
  {
    src: IMG_NEWS43["2"],
    alt: "Sơ đồ kết nối giao thông vị trí dự án The Link City tại ngã tư Quốc lộ 1A và Quốc lộ 20 Đồng Nai",
    caption: "Tọa độ vàng tại ngã tư Dầu Giây giúp The Link City trở thành tâm điểm kết nối liên vùng",
  },
  {
    src: IMG_NEWS43["3"],
    alt: "Giấy chứng nhận quyền sử dụng đất sổ hồng thực tế dự án The Link City Dầu Giây cấp năm 2026",
    caption: "Sổ hồng từng nền sẵn sàng công chứng sang tên cho cư dân – bảo chứng pháp lý vững chắc nhất",
  },
  {
    src: IMG_NEWS43["4"],
    alt: "Sơ đồ mặt bằng phân lô tổng thể 1 phần 500 dự án The Link City Dầu Giây",
    caption: "Mặt bằng phân lô đồng bộ với hạ tầng giao thông kết nối thông suốt toàn khu đô thị",
  },
  {
    src: IMG_NEWS43["5"],
    alt: "Hình ảnh thực tế công viên cây xanh và tiện ích nội khu The Link City Dầu Giây",
    caption: "Không gian xanh mát cùng tiện ích thể thao ngoài trời hiện hữu tại The Link City",
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
    type === "warn"
      ? "bg-amber-50 border-amber-200 text-amber-800"
      : type === "success"
      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
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

// ─── Specs table data ──────────────────────────────────────────────────────
const SPECS = [
  ["Tên thương mại",                   "The Link City"],
  ["Tên quy hoạch",                    "Khu dân cư A1-C1 Đô thị Dầu Giây"],
  ["Chủ đầu tư",                       "Công ty TNHH Đầu tư Phú Việt Tín"],
  ["Đơn vị phát triển & phân phối",    "Kim Oanh Land (Kim Oanh Group)"],
  ["Vị trí",                           "Ngã tư Quốc lộ 1A & Quốc lộ 20, xã Dầu Giây, H. Thống Nhất, T. Đồng Nai"],
  ["Quy mô giai đoạn triển khai",      "Gần 21 ha (trong tổng thể quy hoạch 149 ha)"],
  ["Tổng số lượng sản phẩm",           "1.397 sản phẩm"],
  ["Loại hình phát triển",             "Đất nền liên kế, Shophouse, Biệt thự vườn"],
  ["Diện tích tiêu chuẩn",             "95m² – 100m² – 120m² – 150m² – 250m²"],
  ["Pháp lý",                          "Đã nghiệm thu hạ tầng, Sổ hồng từng nền, ký công chứng sang tên ngay"],
  ["Hình thức sở hữu",                 "Sổ hồng lâu dài (Đất ở tại đô thị – ODT)"],
];

// ─── Price table data ──────────────────────────────────────────────────────
const PRICES = [
  ["Lô tiêu chuẩn 95m² (Block LK17A – đường N20)", "Từ 1.852.500.000 VNĐ"],
  ["Lô 100m²",                                       "1,95 tỷ – 2,2 tỷ VNĐ/nền (tùy cung đường, hướng nhà)"],
  ["Lô góc 2 mặt tiền 120m² – 150m²",               "2,6 tỷ – 3,2 tỷ VNĐ/nền"],
  ["Shophouse hoàn thiện mặt ngoài",                 "4,2 tỷ – 6,4 tỷ VNĐ/căn"],
];

// ─── Market comparison data ────────────────────────────────────────────────
const MARKET_CMP = [
  {
    area: "The Link City Dầu Giây",
    legal: "Sổ hồng từng nền",
    infra: "Hoàn thiện 100%, đồng bộ 21ha",
    price: "19,5 – 23 triệu/m²",
    highlight: true,
  },
  {
    area: "Đất thổ cư phân lô ngã tư Dầu Giây",
    legal: "Sổ hồng riêng",
    infra: "Đường hẻm nhỏ 4-6m, không tiện ích",
    price: "22 – 28 triệu/m²",
    highlight: false,
  },
  {
    area: "Mega City 2 (Nhơn Trạch)",
    legal: "Hợp đồng / Chờ sổ",
    infra: "Đang hoàn thiện hạ tầng",
    price: "18 – 24 triệu/m²",
    highlight: false,
  },
  {
    area: "Khu đô thị Long Hưng / Aqua City",
    legal: "Hợp đồng mua bán",
    infra: "Hạ tầng cao cấp, chi phí duy trì cao",
    price: "45 – 70 triệu/m²",
    highlight: false,
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function TongQuanTheLinkCityPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Tổng quan The Link City Dầu Giây</span>
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
              <span className="text-xs text-slate-400">· 15 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              The Link City Dầu Giây – Tổng Quan Dự Án & Giá Bán Đợt 1 Năm 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích toàn diện dự án{" "}
              <a href="/the-link-city" className="text-amber-600 font-semibold hover:underline">
                The Link City
              </a>{" "}
              (Khu dân cư A1-C1 Đô thị Dầu Giây): vị trí "nút giao kim cương", pháp lý sổ hồng
              từng nền, bảng giá đợt 1 từ 1,85 tỷ và tiềm năng tăng giá 2026–2028.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh sa bàn The Link City Dầu Giây"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS43["1"]}
                alt="Toàn cảnh sa bàn dự án The Link City Dầu Giây 21ha do Kim Oanh phát triển tại Đồng Nai"
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
              Phối cảnh sa bàn kiến trúc The Link City quy mô 21ha với 1.397 sản phẩm tọa lạc tại trung tâm đô thị Dầu Giây
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
                    ["#tong-quan",     "1. Tổng quan dự án"],
                    ["#vi-tri",        "2. Vị trí & hạ tầng liên vùng"],
                    ["#phap-ly",       "3. Pháp lý sổ hồng"],
                    ["#mat-bang",      "4. Quy hoạch & sản phẩm"],
                    ["#bang-gia",      "5. Bảng giá đợt 1"],
                    ["#dong-tien",     "6. Bài toán dòng tiền vay ngân hàng"],
                    ["#tien-ich",      "7. Hệ sinh thái tiện ích"],
                    ["#tiem-nang",     "8. Tiến độ & tiềm năng tăng giá"],
                    ["#faq",           "9. Câu hỏi thường gặp"],
                    ["#lien-he",       "10. Liên hệ & tham quan"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* ── Section 1: Tổng quan ── */}
              <section className="mb-12" id="tong-quan">
                <SectionHeading id="tong-quan">
                  1. Tổng Quan Dự Án The Link City – Khu Dân Cư A1-C1 Dầu Giây
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Thị trường bất động sản phía Nam năm 2026 đang bước vào chu kỳ phục hồi và
                    thanh lọc mạnh mẽ. Những dự án sở hữu{" "}
                    <strong className="text-slate-800">"tam bảo"</strong>: vị trí cửa ngõ giao
                    thương – hạ tầng hoàn thiện – pháp lý sổ hồng sẵn sàng đang trở thành thỏi
                    nam châm hút trọn dòng vốn đầu tư an toàn.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nổi bật tại thị trường Đồng Nai,{" "}
                    <strong className="text-slate-800">The Link City</strong> (tên pháp lý quy
                    hoạch: Khu dân cư A1-C1 Đô thị Dầu Giây) do{" "}
                    <strong className="text-slate-800">Tập đoàn Kim Oanh (Kim Oanh Land)</strong>{" "}
                    phát triển, tọa lạc ngay trung tâm hành chính huyện Thống Nhất, đang là tâm
                    điểm chú ý nhờ mức giá mở bán đợt 1 chỉ từ{" "}
                    <strong className="text-amber-600">1,85 tỷ đồng/sản phẩm</strong>.
                  </p>

                  {/* Specs table */}
                  <div className="overflow-x-auto mt-6">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[480px]">
                      <thead>
                        <tr className="bg-slate-700 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-56">Tiêu chí</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Thông tin chi tiết</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {SPECS.map(([label, value], i) => (
                          <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700 text-sm">{label}</td>
                            <td className="px-4 py-3 text-slate-600 text-sm">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <LinkBtn href="/the-link-city">
                      🌐 Khám phá trang thông tin chính thức The Link City →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 2: Vị trí ── */}
              <section className="mb-12" id="vi-tri">
                <SectionHeading id="vi-tri">
                  2. Giải Mã Tọa Độ "Nút Giao Kim Cương" QL1A – QL20
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong đầu tư bất động sản, vị trí là yếu tố tiên quyết định hình giá trị
                    tài sản trong tương lai. The Link City sở hữu một vị thế độc tôn hiếm hoi
                    khi án ngữ ngay{" "}
                    <strong className="text-slate-800">nút giao ngã tư Quốc lộ 1A và Quốc lộ 20</strong>{" "}
                    — cửa ngõ kết nối toàn bộ khu vực Đông Nam Bộ với Tây Nguyên và Duyên hải
                    Miền Trung.
                  </p>

                  <p className="text-slate-700 font-bold text-base mt-2">
                    3 "Đòn Bẩy" Hạ Tầng Nghìn Tỷ Bao Quanh Dự Án:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: "🛣️",
                        title: "Cao tốc TP.HCM – Long Thành – Dầu Giây & Dầu Giây – Phan Thiết",
                        body: "Cư dân tại The Link City chỉ mất đúng 3 phút để tiếp cận nút giao cao tốc. Tuyến đường này rút ngắn thời gian di chuyển từ dự án về TP. Thủ Đức (TP.HCM) chỉ còn khoảng 45 phút, mở ra tiềm năng an cư cho lực lượng chuyên gia làm việc tại TP.HCM nhưng ưa chuộng không gian sống rộng thoáng vùng ven.",
                      },
                      {
                        icon: "🚧",
                        title: "Cao tốc Dầu Giây – Tân Phú – Bảo Lộc (Sắp khởi công)",
                        body: "Khi tuyến cao tốc huyết mạch này thành hình, toàn bộ lượng hàng hóa, nông sản và dòng khách du lịch nối TP.HCM lên Đà Lạt bắt buộc phải hội tụ qua \"phễu giao thông\" Dầu Giây.",
                      },
                      {
                        icon: "✈️",
                        title: "Cảng hàng không Quốc tế Long Thành",
                        body: "Cách dự án chỉ khoảng 20 phút di chuyển theo Quốc lộ 1A mở rộng và đường Vành đai. The Link City đón đầu lượng chuyên gia hàng không, logistics và chuỗi dịch vụ hậu cần sân bay về định cư.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <p className="font-black text-slate-800 text-sm mb-2">
                          {item.icon} {item.title}
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS43["2"]}
                    alt="Sơ đồ kết nối giao thông vị trí dự án The Link City tại ngã tư Quốc lộ 1A và Quốc lộ 20 Đồng Nai"
                    caption="Tọa độ vàng tại ngã tư Dầu Giây giúp The Link City trở thành tâm điểm kết nối liên vùng"
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/vi-tri">
                      📍 Xem chi tiết bản đồ phân tích giao thông →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 3: Pháp lý ── */}
              <section className="mb-12" id="phap-ly">
                <SectionHeading id="phap-ly">
                  3. Pháp Lý The Link City: Đã Có Sổ Đỏ Từng Nền Chưa?
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nỗi lo lớn nhất của khách hàng mua đất nền dự án chính là tình trạng "dự án
                    treo", chưa hoàn thiện tiền sử dụng đất hoặc chậm bàn giao sổ đỏ. Đối với
                    The Link City, hồ sơ pháp lý đã được kiện toàn minh bạch:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        icon: "✅",
                        title: "Nguồn gốc quy hoạch rõ ràng",
                        body: "Dự án là phân khu trọng điểm thuộc Khu dân cư A1-C1 Đô thị Dầu Giây, đã có Quyết định phê duyệt quy hoạch chi tiết xây dựng tỷ lệ 1/500 và quyết định giao đất chính thức từ UBND tỉnh Đồng Nai.",
                      },
                      {
                        icon: "✅",
                        title: "Đầy đủ nghĩa vụ tài chính",
                        body: "Chủ đầu tư Phú Việt Tín đã hoàn thành toàn bộ nghĩa vụ đóng tiền sử dụng đất và thuế nhà nước theo đúng kết luận thanh tra, kiểm toán.",
                      },
                      {
                        icon: "✅",
                        title: "Công văn chỉ đạo cấp sổ đỏ của UBND Tỉnh Đồng Nai",
                        body: "Căn cứ Văn bản số 2505/UBND-KTN ngày 13/02/2026 của UBND tỉnh Đồng Nai, Sở Tài nguyên và Môi trường tỉnh Đồng Nai đã tiến hành cấp Giấy chứng nhận quyền sử dụng đất (Sổ hồng) cho từng thửa đất.",
                      },
                      {
                        icon: "✅",
                        title: "An toàn giao dịch tuyệt đối",
                        body: "Khách hàng đặt mua các phân khu đã nghiệm thu sẽ được ký hợp đồng công chứng chuyển nhượng quyền sử dụng đất trực tiếp, đứng tên sổ đỏ cá nhân lâu dài.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                        <p className="font-black text-emerald-800 text-sm mb-1.5">
                          {item.icon} {item.title}
                        </p>
                        <p className="text-emerald-700 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS43["3"]}
                    alt="Giấy chứng nhận quyền sử dụng đất sổ hồng thực tế dự án The Link City Dầu Giây cấp năm 2026"
                    caption="Sổ hồng từng nền sẵn sàng công chứng sang tên cho cư dân – bảo chứng pháp lý vững chắc nhất"
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/phap-ly">
                      📑 Xem hình ảnh các quyết định pháp lý và công văn tỉnh Đồng Nai →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 4: Mặt bằng ── */}
              <section className="mb-12" id="mat-bang">
                <SectionHeading id="mat-bang">
                  4. Quy Hoạch Mặt Bằng & Tiêu Chuẩn Thiết Kế Sản Phẩm
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với tổng quy mô giai đoạn này gần{" "}
                    <strong className="text-slate-800">21 ha</strong>, The Link City được thiết
                    kế theo mô hình bàn cờ hiện đại, các trục đường nội khu thông thoáng có lộ
                    giới từ{" "}
                    <strong className="text-slate-800">13m đến 28m</strong>, vỉa hè lót đá rộng
                    3m–5m rợp bóng cây xanh.
                  </p>

                  <p className="text-slate-700 font-bold text-base">Các Dòng Sản Phẩm Chủ Đạo:</p>

                  <div className="space-y-4">
                    {[
                      {
                        tag: "Đất nền nhà phố liên kế",
                        sub: "LK17A, LK17B, LK18...",
                        items: [
                          "Diện tích tiêu chuẩn: 95m² (5×19m), 100m² (5×20m), 120m² (6×20m)",
                          "Phù hợp khách hàng mua an cư hoặc tích lũy tài sản tầm trung",
                          "Xây dựng tự do theo quy chuẩn kiến trúc hiện đại (1 trệt 2 lầu)",
                        ],
                        color: "amber",
                      },
                      {
                        tag: "Nhà phố thương mại (Shophouse)",
                        sub: "Mặt tiền đường đôi",
                        items: [
                          "Diện tích: 100m² – 140m²",
                          "Nằm trên các trục đường huyết mạch dẫn vào trung tâm thương mại",
                          "Tầng trệt kinh doanh quán cà phê, nhà thuốc, văn phòng; tầng trên để ở",
                        ],
                        color: "blue",
                      },
                      {
                        tag: "Biệt thự đơn lập & song lập",
                        sub: "Dành cho giới tinh hoa",
                        items: [
                          "Diện tích: Từ 200m² đến 350m²",
                          "Dành riêng cho chủ doanh nghiệp tại các KCN Thống Nhất, Long Khánh, Dầu Giây",
                          "Không gian sống biệt lập, sinh thái cao cấp",
                        ],
                        color: "slate",
                      },
                    ].map((p) => (
                      <div
                        key={p.tag}
                        className={`rounded-2xl border p-5 ${
                          p.color === "amber"
                            ? "border-amber-200 bg-amber-50"
                            : p.color === "blue"
                            ? "border-blue-200 bg-blue-50"
                            : "border-slate-200 bg-slate-50"
                        }`}
                      >
                        <p
                          className={`font-black text-sm mb-0.5 ${
                            p.color === "amber"
                              ? "text-amber-800"
                              : p.color === "blue"
                              ? "text-blue-800"
                              : "text-slate-800"
                          }`}
                        >
                          🏠 {p.tag}
                        </p>
                        <p
                          className={`text-xs mb-3 ${
                            p.color === "amber"
                              ? "text-amber-600"
                              : p.color === "blue"
                              ? "text-blue-600"
                              : "text-slate-500"
                          }`}
                        >
                          {p.sub}
                        </p>
                        <ul className="space-y-1.5">
                          {p.items.map((item, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-2 text-sm leading-relaxed ${
                                p.color === "amber"
                                  ? "text-amber-700"
                                  : p.color === "blue"
                                  ? "text-blue-700"
                                  : "text-slate-600"
                              }`}
                            >
                              <span className="flex-shrink-0 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS43["4"]}
                    alt="Sơ đồ mặt bằng phân lô tổng thể 1 phần 500 dự án The Link City Dầu Giây"
                    caption="Mặt bằng phân lô đồng bộ với hạ tầng giao thông kết nối thông suốt toàn khu đô thị"
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/mat-bang">
                      📐 Xem bản vẽ quy hoạch phân lô chi tiết →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 5: Bảng giá ── */}
              <section className="mb-12" id="bang-gia">
                <SectionHeading id="bang-gia">
                  5. Cập Nhật Bảng Giá Đợt 1 & Bảng So Sánh Thị Trường
                </SectionHeading>
                <div className="pt-5 space-y-6">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mức giá đợt 1 cực kỳ hợp lý so với giá trị thực tế của quỹ đất đô thị có
                    sổ đỏ là lý do khiến The Link City tạo nên cơn sốt thanh khoản ngay khi
                    vừa công bố.
                  </p>

                  {/* Price table */}
                  <div>
                    <p className="font-bold text-slate-800 text-sm mb-3">
                      Bảng Giá Niêm Yết Đợt 1 (Áp Dụng Năm 2026):
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[400px]">
                        <thead>
                          <tr className="bg-amber-500 text-white">
                            <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Loại sản phẩm</th>
                            <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Giá niêm yết</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {PRICES.map(([label, price], i) => (
                            <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-amber-50/40"}>
                              <td className="px-4 py-3 text-slate-700 text-sm">{label}</td>
                              <td className="px-4 py-3 text-amber-700 font-bold text-sm">{price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Market comparison */}
                  <div>
                    <p className="font-bold text-slate-800 text-sm mb-3">
                      Bảng So Sánh Giá Đất The Link City Với Mặt Bằng Chung Khu Vực:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[540px]">
                        <thead>
                          <tr className="bg-slate-700 text-white">
                            <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Khu vực / Dự án</th>
                            <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Pháp lý</th>
                            <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Hạ tầng</th>
                            <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Giá TB</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {MARKET_CMP.map((row, i) => (
                            <tr
                              key={row.area}
                              className={row.highlight ? "bg-amber-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                            >
                              <td className={`px-4 py-3 text-sm font-medium ${row.highlight ? "text-amber-800" : "text-slate-700"}`}>
                                {row.highlight && "⭐ "}{row.area}
                              </td>
                              <td className="px-4 py-3 text-slate-600 text-sm">{row.legal}</td>
                              <td className="px-4 py-3 text-slate-600 text-sm">{row.infra}</td>
                              <td className={`px-4 py-3 text-sm font-bold ${row.highlight ? "text-amber-700" : "text-slate-600"}`}>
                                {row.price}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/bang-gia">
                      📊 Tải bảng giá chi tiết từng mã lô và chính sách chiết khấu →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 6: Dòng tiền ── */}
              <section className="mb-12" id="dong-tien">
                <SectionHeading id="dong-tien">
                  6. Bài Toán Dòng Tiền Thực Chiến: Vay 70% Ngân Hàng Trả Góp Bao Nhiêu?
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Chủ đầu tư Kim Oanh Land đã liên kết với các ngân hàng lớn (OCB, Vietcombank…)
                    ban hành gói bảo lãnh vay mua ưu đãi:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { label: "Hạn mức tài trợ", value: "Lên đến 70%", sub: "giá trị hợp đồng" },
                      { label: "Thời hạn vay", value: "Tối đa 20 năm", sub: "240 tháng" },
                      { label: "Chính sách", value: "Ân hạn nợ gốc", sub: "ưu đãi lãi suất năm đầu" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
                        <p className="text-xs text-amber-600 font-semibold uppercase tracking-wide mb-1">{item.label}</p>
                        <p className="text-xl font-black text-amber-800">{item.value}</p>
                        <p className="text-xs text-amber-600 mt-0.5">{item.sub}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden mt-2">
                    <div className="bg-slate-700 text-white px-5 py-3">
                      <p className="font-bold text-sm">Ví Dụ Thực Tế: Mua Lô Đất Nền 1,85 Tỷ Đồng</p>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {[
                        ["Vốn tự có ban đầu (30%)", "555.000.000 VNĐ", "Chia thành nhiều đợt thanh toán nhẹ nhàng"],
                        ["Ngân hàng giải ngân (70%)", "~1.295.000.000 VNĐ", ""],
                        ["Tiền gốc trả/tháng (20 năm)", "~5,4 triệu VNĐ", "Chia đều 240 tháng"],
                        ["Tiền lãi trả/tháng", "7 – 9 triệu VNĐ", "Tính trên dư nợ giảm dần"],
                        ["Tổng thanh toán/tháng", "~12 – 14 triệu VNĐ", ""],
                      ].map(([label, val, note], i) => (
                        <div key={label} className={`flex items-center justify-between gap-4 px-5 py-3 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                          <span className="text-slate-600 text-sm">{label}</span>
                          <div className="text-right">
                            <span className="font-bold text-amber-700 text-sm">{val}</span>
                            {note && <p className="text-xs text-slate-400 mt-0.5">{note}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <InfoBox type="success">
                    👉 Với thu nhập của hai vợ chồng từ{" "}
                    <strong>25 – 30 triệu/tháng</strong>, việc sở hữu một bất động sản đô thị
                    có sổ hồng ngay ngã tư Dầu Giây là <strong>hoàn toàn trong tầm tay!</strong>
                  </InfoBox>

                  <ArticleFigure
                    src={IMG_NEWS43["5"]}
                    alt="Hình ảnh thực tế công viên cây xanh và tiện ích nội khu The Link City Dầu Giây"
                    caption="Không gian xanh mát cùng tiện ích thể thao ngoài trời hiện hữu tại The Link City"
                    images={images}
                    index={4}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/bang-gia">
                      🧮 Xem công cụ tính lịch thanh toán The Link City →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 7: Tiện ích ── */}
              <section className="mb-12" id="tien-ich">
                <SectionHeading id="tien-ich">
                  7. Hệ Sinh Thái Tiện Ích Nội Khu Đẳng Cấp Tại Trung Tâm Dầu Giây
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không đi theo lối mòn của các dự án phân lô bán nền thông thường "bỏ hoang"
                    sau khi bán, The Link City được định vị trở thành{" "}
                    <strong className="text-slate-800">
                      trung tâm vui chơi giải trí và dịch vụ thương mại mới
                    </strong>{" "}
                    của huyện Thống Nhất:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        icon: "🛍️",
                        title: "Trung tâm Thương mại dịch vụ 2,6 ha",
                        body: "Quy tụ các thương hiệu bán lẻ, siêu thị tiện lợi, rạp chiếu phim mini, khu ẩm thực đa vùng miền.",
                      },
                      {
                        icon: "⚽",
                        title: "Tổ hợp thể dục thể thao hiện đại",
                        body: "Sân bóng đá cỏ nhân tạo, chuỗi sân pickleball, sân bóng rổ và đường chạy bộ ven công viên.",
                      },
                      {
                        icon: "🌳",
                        title: "Mảng xanh công viên trung tâm",
                        body: "Hệ thống công viên cảnh quan đa tầng, khu vui chơi ngoài trời an toàn cho trẻ em và khu dưỡng sinh cho người cao tuổi.",
                      },
                      {
                        icon: "🏫",
                        title: "Hệ thống giáo dục nội khu",
                        body: "Quy hoạch quỹ đất xây dựng trường học các cấp, tạo môi trường học tập lý tưởng và an toàn cho thế hệ tương lai.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="font-black text-slate-800 text-sm mb-2">
                          {item.icon} {item.title}
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/tien-ich">
                      🎡 Xem phối cảnh và danh mục 50+ tiện ích nội khu →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 8: Tiến độ & tiềm năng ── */}
              <section className="mb-12" id="tiem-nang">
                <SectionHeading id="tiem-nang">
                  8. Tiến Độ Thực Tế & Đánh Giá Tiềm Năng Tăng Giá 2026 – 2028
                </SectionHeading>
                <div className="pt-5 space-y-6">

                  <div>
                    <p className="font-bold text-slate-800 text-base mb-3">
                      Cập Nhật Tiến Độ Thực Tế Hiện Trường (Năm 2026):
                    </p>
                    <div className="space-y-2.5">
                      {[
                        ["Hạ tầng kỹ thuật", "Hệ thống điện âm, cấp thoát nước sinh hoạt, xử lý nước thải và cáp viễn thông ngầm đã thi công hoàn chỉnh 100%."],
                        ["Hệ thống giao thông", "100% các trục đường đã được trải nhựa nóng asphalt phẳng mịn, lắp đặt biển báo giao thông và cột đèn chiếu sáng đô thị."],
                        ["Cây xanh vỉa hè", "Vỉa hè đã lát gạch chống trượt đồng bộ, cây xanh bóng mát đã bén rễ tươi tốt dọc các tuyến phố."],
                      ].map(([label, text]) => (
                        <div key={label} className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                          <span className="text-emerald-600 font-bold text-lg leading-none mt-0.5">✓</span>
                          <div>
                            <p className="font-bold text-emerald-800 text-sm">{label}</p>
                            <p className="text-emerald-700 text-sm leading-relaxed mt-0.5">{text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-bold text-slate-800 text-base mb-3">
                      3 Yếu Tố Thúc Đẩy Biên Độ Lợi Nhuận Cho Nhà Đầu Tư:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          n: "01",
                          title: "Lực đẩy hạ tầng vùng (Biên độ tăng 15% – 25%/năm)",
                          body: "Khi các phân đoạn cao tốc Dầu Giây – Tân Phú khởi công và sân bay Long Thành vận hành giai đoạn 1, Dầu Giây sẽ chứng kiến đợt tăng giá đất mạnh mẽ tương tự như Dĩ An hay Thuận An trước đây.",
                        },
                        {
                          n: "02",
                          title: "Sự hình thành cộng đồng cư dân",
                          body: "Với mức giá chỉ từ 1,85 tỷ, tính thanh khoản của dự án rất cao. Khi các hộ gia đình bắt đầu về xây nhà an cư và kinh doanh, giá trị thương mại của đất nền sẽ tăng trưởng đột phá.",
                        },
                        {
                          n: "03",
                          title: "Tính khan hiếm của quỹ đất đô thị có sổ",
                          body: "Luật Kinh doanh BĐS và Luật Đất đai mới siết chặt việc phân lô bán nền tại các đô thị. Những dự án đã hoàn thành pháp lý chuẩn chỉ như The Link City sẽ ngày càng trở nên đắt giá.",
                        },
                      ].map((item) => (
                        <div key={item.n} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                          <span className="text-3xl font-black text-amber-300 leading-none w-10 shrink-0">{item.n}</span>
                          <div>
                            <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/tien-do">
                      🏗️ Xem nhật ký cập nhật tiến độ công trường →
                    </LinkBtn>
                    <LinkBtn href="/the-link-city/hinh-anh">
                      📷 Xem kho ảnh thực tế dự án →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── FAQ ── */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">9. Bộ Câu Hỏi Thường Gặp (FAQ) Chuyên Sâu</SectionHeading>
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

              {/* ── Section 10: Liên hệ ── */}
              <section className="mb-12" id="lien-he">
                <SectionHeading id="lien-he">
                  10. Hướng Dẫn Tham Quan Thực Tế Sa Bàn & Đăng Ký Nhận Bảng Giá
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Để có cái nhìn trực quan và chính xác nhất trước khi quyết định đầu tư, kính
                    mời Quý khách hàng ghé thăm khu trưng bày sa bàn kiến trúc 21ha và tham gia
                    các chuyến xe đưa đón tham quan thực địa{" "}
                    <strong className="text-slate-800">hoàn toàn miễn phí</strong> vào các ngày
                    cuối tuần.
                  </p>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 space-y-3">
                    <p className="font-black text-amber-800 text-base">
                      LIÊN HỆ PHÒNG KINH DOANH DỰ ÁN THE LINK CITY
                    </p>
                    <div className="space-y-2 text-sm text-amber-700">
                      <p>
                        <strong>Đơn vị phân phối:</strong>{" "}
                        <a href="/" className="underline hover:text-amber-900">Kim Oanh Đồng Nai</a>
                      </p>
                      <p>
                        <strong>Website:</strong>{" "}
                        <a href="https://kimoanhdongnai.com.vn/the-link-city" className="underline hover:text-amber-900">
                          kimoanhdongnai.com.vn/the-link-city
                        </a>
                      </p>
                      <p>
                        <strong>Vị trí dự án:</strong> Ngã tư Quốc lộ 1A & Quốc lộ 20, xã Dầu Giây, H. Thống Nhất, T. Đồng Nai
                      </p>
                      <p>
                        <strong>Văn phòng giao dịch:</strong> 268A Phan Trung, Phường Tam Hiệp, TP. Biên Hòa, Tỉnh Đồng Nai
                      </p>
                    </div>
                  </div>

                  <InfoBox>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Bản quyền bài viết thuộc về Kim Oanh Đồng Nai — Mọi thông tin sao chép
                      vui lòng trích dẫn nguồn liên kết chính thức:{" "}
                      <a href="https://kimoanhdongnai.com.vn/the-link-city" className="text-amber-600 underline">
                        kimoanhdongnai.com.vn/the-link-city
                      </a>
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Tìm hiểu thêm */}
              <section className="mb-12">
                <SectionHeading>Các nội dung chuyên sâu về The Link City</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city",              label: "The Link City Dầu Giây — Tổng quan dự án" },
                    { href: "/the-link-city/vi-tri",       label: "Vị trí & Liên kết vùng The Link City" },
                    { href: "/the-link-city/mat-bang",     label: "Mặt bằng phân lô The Link City" },
                    { href: "/the-link-city/phap-ly",      label: "Pháp lý sổ hồng The Link City" },
                    { href: "/the-link-city/tien-do",      label: "Tiến độ thực tế The Link City" },
                    { href: "/the-link-city/bang-gia",     label: "Bảng giá The Link City mới nhất" },
                    { href: "/the-link-city/tien-ich",     label: "Tiện ích nội khu The Link City" },
                    { href: "/the-link-city/hinh-anh",     label: "Hình ảnh thực tế The Link City" },
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
                    The Link City Dầu Giây không đơn thuần là một dự án bất động sản — đây là
                    cơ hội sở hữu một lát cắt của đô thị tương lai ngay tại "phễu giao thông"
                    quan trọng nhất khu vực Đông Nam Bộ.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với bộ ba lợi thế khó tìm:{" "}
                    <strong className="text-slate-800">sổ hồng từng nền sẵn sàng</strong>,{" "}
                    <strong className="text-slate-800">hạ tầng hoàn thiện 100%</strong> và{" "}
                    <strong className="text-slate-800">mức giá đợt 1 chỉ từ 1,85 tỷ</strong>,
                    dự án đang thu hút mạnh mẽ cả nhóm khách hàng mua an cư lẫn nhà đầu tư
                    chiến lược dài hạn. Đây là thời điểm vàng để tiếp cận trước khi chu kỳ
                    tăng giá tiếp theo được kích hoạt bởi loạt hạ tầng nghìn tỷ sắp hoàn thành.
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài được tổng hợp từ các nguồn công khai và mang tính tham
                  khảo. Cần đối chiếu với thông tin chính thức trước khi đưa ra quyết định
                  giao dịch. Ban biên tập Kim Oanh Đồng Nai — Cập nhật: {PUBLISHED}
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
                      { href: "/the-link-city",              label: "Tổng quan dự án" },
                      { href: "/the-link-city/vi-tri",       label: "Vị trí & Liên kết vùng" },
                      { href: "/the-link-city/mat-bang",     label: "Mặt bằng tổng thể" },
                      { href: "/the-link-city/phap-ly",      label: "Pháp lý dự án" },
                      { href: "/the-link-city/tien-do",      label: "Tiến độ xây dựng" },
                      { href: "/the-link-city/bang-gia",     label: "Bảng giá mới nhất" },
                      { href: "/the-link-city/tien-ich",     label: "Tiện ích nội khu" },
                      { href: "/the-link-city/hinh-anh",     label: "Hình ảnh thực tế" },
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
                      { label: "Pháp lý sổ hồng The Link City",     href: "/the-link-city/phap-ly" },
                      { label: "Mặt bằng phân lô The Link City",     href: "/the-link-city/mat-bang" },
                      { label: "Bảng giá The Link City mới nhất",    href: "/the-link-city/bang-gia" },
                      { label: "Tiện ích nội khu The Link City",     href: "/the-link-city/tien-ich" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Nhận bảng giá & tư vấn</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Liên hệ ngay để nhận bảng giá đợt 1 và tư vấn chọn lô phù hợp nhất.
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
              Quan tâm đầu tư The Link City Dầu Giây?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Nhận bảng giá chi tiết từng mã lô, chính sách chiết khấu và đặt lịch tham quan
              thực địa hoàn toàn miễn phí ngay hôm nay.
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
              href: "/tin-tuc/so-sanh-mega-city-2-va-dat-tho-cu-dan-nhon-trach",
              title: "So Sánh Mega City 2 Và Đất Thổ Cư Dân Nhơn Trạch",
              description: "Phân tích 5 tiêu chí: hạ tầng, pháp lý, xây dựng, tiện ích và thanh khoản.",
              tag: "Tin dự án",
            },
            {
              href: "/the-link-city/phap-ly",
              title: "Pháp Lý The Link City: Sổ Hồng Từng Nền Đã Sẵn Sàng",
              description: "Toàn bộ hồ sơ pháp lý, quyết định phê duyệt và quy trình cấp sổ hồng.",
              tag: "The Link City",
            },
            {
              href: "/the-link-city/bang-gia",
              title: "Bảng Giá The Link City Dầu Giây Mới Nhất",
              description: "Giá từng mã lô, chính sách chiết khấu và so sánh thị trường chi tiết.",
              tag: "The Link City",
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
