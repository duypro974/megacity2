"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS42 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/so-sanh-mega-city-2-va-dat-tho-cu-dan-nhon-trach`;
const PUBLISHED     = "02/09/2026";
const PUBLISHED_ISO = "2026-09-02";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "So sánh suất đầu tư Mega City 2 với đất thổ cư dân tự phân lô tại Nhơn Trạch",
  description:
    "So sánh chi tiết đất nền dự án Mega City 2 Nhơn Trạch và đất thổ cư dân tự phân lô: phân tích 5 tiêu chí hạ tầng, pháp lý, tiện ích, thanh khoản và an toàn vốn.",
  image: [IMG_NEWS42["1"], IMG_NEWS42["2"], IMG_NEWS42["3"]],
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
    "so sánh Mega City 2 đất thổ cư Nhơn Trạch, nên mua Mega City 2 hay đất dân, so sánh đất nền Mega City 2, đất phân lô Nhơn Trạch, kinh nghiệm mua đất Nhơn Trạch",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mua đất nền Mega City 2 có an toàn hơn đất dân tự phân lô không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Về mặt quy hoạch, Mega City 2 an toàn hơn đáng kể. Dự án được phê duyệt 1/500 với 100% đất ở đô thị, không có rủi ro bị dính quy hoạch công viên, mở đường hay tranh chấp lối đi chung như đất dân tự phân lô.",
      },
    },
    {
      "@type": "Question",
      name: "Xây nhà tại Mega City 2 có được xây nhà cấp 4 không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Không. Dự án quy định xây dựng theo quy chuẩn đồng bộ tối thiểu từ 1 trệt 2 lầu đến 1 trệt 3 lầu để đảm bảo mỹ quan đô thị khang trang cho toàn khu dân cư.",
      },
    },
    {
      "@type": "Question",
      name: "Đất nền Mega City 2 có hạ tầng điện âm và nước máy sẵn chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đã hoàn thiện đồng bộ. Hệ thống cáp điện, tủ điện phân phối (Pillar), họng chờ cấp nước máy Dowaco và cống thoát nước mưa - nước thải riêng biệt đã được thi công ngầm dưới vỉa hè theo đồ án 1/500.",
      },
    },
    {
      "@type": "Question",
      name: "Đất thổ cư Nhơn Trạch rẻ hơn Mega City 2 có nên mua không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giá thấp hơn đi kèm rủi ro cao hơn. Người mua cần kiểm tra kỹ pháp lý (mục đích sử dụng đất, quy hoạch lộ giới), đường đi lối lại, hạ tầng điện nước và tính thanh khoản thực tế trước khi quyết định. Không nên so sánh thuần túy theo giá/m² mà bỏ qua các yếu tố này.",
      },
    },
    {
      "@type": "Question",
      name: "Khi nào nên chọn mua đất thổ cư thay vì Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Phù hợp khi ngân sách hạn chế, chỉ muốn xây nhà cấp 4 ở tạm, kinh doanh ngành nghề truyền thống gắn với khu dân cư cũ và chấp nhận đường hẻm nhỏ. Không phù hợp nếu ưu tiên an toàn pháp lý, môi trường sống chất lượng cao và tính thanh khoản tốt.",
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
      name: "So sánh Mega City 2 và đất thổ cư Nhơn Trạch",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS42["1"],
    alt: "So sánh suất đầu tư đất nền dự án Mega City 2 và đất thổ cư dân phân lô Nhơn Trạch",
    caption: "Khu đô thị Mega City 2 điện âm, đường nhựa rộng (trái) so với hẻm nhỏ dây điện nổi đất dân (phải)",
  },
  {
    src: IMG_NEWS42["2"],
    alt: "Infographic so sánh 5 tiêu chí giữa đất nền Mega City 2 và đất dân tự phân lô",
    caption: "5 tiêu chí then chốt: hạ tầng, pháp lý, xây dựng, tiện ích và thanh khoản",
  },
  {
    src: IMG_NEWS42["3"],
    alt: "Không gian sống xanh chuẩn sinh thái tại công viên trung tâm dự án Mega City 2",
    caption: "Công viên trung tâm 2,1 ha — tiện ích không gian xanh chỉ có tại khu đô thị quy hoạch đồng bộ",
  },
  {
    src: IMG_NEWS42["4"],
    alt: "Sơ đồ hướng dẫn lựa chọn đầu tư đất nền Mega City 2 hay đất thổ cư Nhơn Trạch",
    caption: "Sơ đồ lựa chọn theo nhu cầu: tài chính, mục đích sử dụng và tầm nhìn đầu tư",
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

// ─── So sánh data ──────────────────────────────────────────────────────────
const CRITERIA = [
  {
    id: "ha-tang",
    n: 1,
    title: "So sánh Tiêu chí 1: Hạ tầng kỹ thuật và cảnh quan môi trường",
    mc2: {
      items: [
        "Điện âm 100%, cáp quang ngầm hoàn toàn",
        "Thoát nước kép: tách rời nước mưa và nước thải sinh hoạt",
        "Đường giao thông lộ giới 13–32m trải nhựa thảm bê tông",
        "Công viên trung tâm 2,1 ha, vỉa hè lát gạch, cây xanh đồng bộ",
      ],
    },
    dat_dan: {
      items: [
        "Dây điện nổi chằng chịt, đấu nối tạm bợ",
        "Rãnh hở chung hoặc xả trực tiếp ra mương rãnh",
        "Hẻm bê tông/nhựa nhỏ 3–6m, khó tránh ô tô",
        "Không có vỉa hè, không có công viên cây xanh chung",
      ],
    },
    note: "Lòng đường Mega City 2 rộng 7–16m đảm bảo xe cấp cứu và xe PCCC tiếp cận được mọi vị trí. Đất dân thường chỉ chừa lối đi tối thiểu 3–5m.",
    link: { href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2", label: "Hạ tầng kỹ thuật Mega City 2: Điện âm, nước máy và thoát nước →" },
  },
  {
    id: "phap-ly",
    n: 2,
    title: "So sánh Tiêu chí 2: Pháp lý quy hoạch và rủi ro tranh chấp",
    mc2: {
      items: [
        "Phê duyệt đồ án 1/500, 100% diện tích đất ở đô thị lâu dài",
        "Không lo rủi ro dính quy hoạch công viên, mở đường giao thông bất ngờ",
        "Ranh giới cắm mốc cụ thể, không tranh chấp hàng xóm",
      ],
    },
    dat_dan: {
      items: [
        "Nhiều thửa có thổ cư một phần, phần còn lại là CLN nằm trong chỉ giới giải tỏa",
        "Nguy cơ tranh chấp ranh giới hoặc lối đi chung bị hàng xóm chặn",
        "Cần đọc kỹ bản đồ quy hoạch 1/2000 và 1/500 trước khi mua",
      ],
    },
    note: "Người mua đất dân cần kiểm tra tình trạng quy hoạch từng thửa tại Phòng TN&MT huyện Nhơn Trạch trước khi đặt cọc.",
    link: { href: "/tin-tuc/phap-ly-mega-city-2", label: "Pháp lý dự án Mega City 2 Nhơn Trạch →" },
  },
  {
    id: "xay-dung",
    n: 3,
    title: "So sánh Tiêu chí 3: Quy cách xây dựng và chi phí hoàn thiện nhà",
    mc2: {
      items: [
        "Bắt buộc xây theo quy chuẩn đồng bộ: 1 trệt 2–3 lầu, khoảng lùi chuẩn",
        "Chi phí xây dựng hoàn thiện tham khảo: 1,2–1,8 tỷ đồng/căn",
        "Mỹ quan đô thị đồng nhất, khang trang, tăng giá trị cộng đồng",
      ],
    },
    dat_dan: {
      items: [
        "Xây dựng tự do (nhà cấp 4, nhà 1 trệt 1 lầu...)",
        "Có thể chỉ cần 400–600 triệu xây nhà cấp 4 ở tạm",
        "Nhà cao tầng xen lẫn nhà tôn tạm bợ — mỹ quan lộn xộn",
      ],
    },
    note: "Đất dân có lợi thế linh hoạt chi phí ban đầu. Mega City 2 phù hợp nếu ưu tiên không gian sống đẳng cấp và tăng giá trị tài sản lâu dài.",
    link: { href: "/tin-tuc/chi-phi-xay-nha-mega-city-2", label: "Chi phí xây nhà thực tế tại Mega City 2 →" },
  },
  {
    id: "tien-ich",
    n: 4,
    title: "So sánh Tiêu chí 4: Hệ sinh thái tiện ích và chất lượng sống",
    mc2: {
      items: [
        "Công viên cây xanh 2,1 ha, hồ cảnh quan, lối dạo bộ, khu thể thao ngoài trời",
        "Shophouse nội khu: F&B, siêu thị, nhà thuốc ngay trong dự án",
        "Bán kính 2km: trường học các cấp, bệnh viện đa khoa huyện, UBND",
      ],
    },
    dat_dan: {
      items: [
        "Hoàn toàn phụ thuộc tiện ích tự phát bên ngoài",
        "Không có không gian công viên tập thể dục an toàn",
        "Môi trường dễ bị ảnh hưởng bởi tiếng ồn và chăn nuôi lân cận",
      ],
    },
    note: "Với gia đình có trẻ nhỏ và người cao tuổi, không gian sống an toàn và có tiện ích xanh là yếu tố không thể thay thế bằng giá rẻ.",
    link: { href: "/tin-tuc/tien-ich-ngoai-khu-mega-city-2", label: "Tiện ích ngoại khu xung quanh Mega City 2 →" },
  },
  {
    id: "thanh-khoan",
    n: 5,
    title: "So sánh Tiêu chí 5: Tính thanh khoản và khả năng tăng trưởng giá trị",
    mc2: {
      items: [
        "Định giá dễ dàng nhờ thông số phân lô rõ ràng trên mặt bằng 1/500",
        "Thị trường thứ cấp hoạt động nhộn nhịp, thủ tục chuyển nhượng minh bạch",
        "Hưởng lợi từ trục 25C, Vành đai 3 và Sân bay Long Thành khi hoàn thành",
      ],
    },
    dat_dan: {
      items: [
        "Thanh khoản phụ thuộc cảm tính người mua (hướng đất, chiều rộng hẻm, hình dáng thửa)",
        "Khi thị trường trầm lắng, đất hẻm sâu rất khó tìm khách mua lại",
        "Khó ước tính giá trị do không có tiêu chí định giá chuẩn",
      ],
    },
    note: "Cả hai loại đều có tiềm năng tăng giá nếu vị trí tốt. Tuy nhiên mức độ rủi ro và khả năng dự đoán của đất dự án cao hơn đáng kể so với đất dân.",
    link: { href: "/tin-tuc/thu-tuc-chuyen-nhuong-mega-city-2", label: "Thủ tục chuyển nhượng Mega City 2 →" },
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function SoSanhMegaCity2DatThoCuPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">So sánh Mega City 2 và đất thổ cư Nhơn Trạch</span>
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
              <span className="text-xs text-slate-400">· 13 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              So sánh suất đầu tư Mega City 2 với đất thổ cư dân tự phân lô tại Nhơn Trạch
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích khách quan 5 tiêu chí then chốt giữa đất dự án{" "}
              <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">
                Mega City 2
              </a>{" "}
              và đất thổ cư dân tự phân lô tại Nhơn Trạch — giúp người mua đưa ra quyết định
              phù hợp nhất với mục tiêu tài chính và nhu cầu sử dụng thực tế.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh so sánh Mega City 2 và đất thổ cư"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS42["1"]}
                alt="So sánh suất đầu tư đất nền dự án Mega City 2 và đất thổ cư dân phân lô Nhơn Trạch"
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
              Khu đô thị điện âm đường rộng (trái) so với hẻm nhỏ dây điện nổi đất dân tự phân lô (phải)
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
                    ["#bai-toan",      "Bài toán lựa chọn"],
                    ["#ha-tang",       "1. Hạ tầng kỹ thuật"],
                    ["#phap-ly",       "2. Pháp lý quy hoạch"],
                    ["#xay-dung",      "3. Quy cách xây dựng"],
                    ["#tien-ich",      "4. Tiện ích và chất lượng sống"],
                    ["#thanh-khoan",   "5. Thanh khoản và tăng giá"],
                    ["#bang-tong-ket", "Bảng tổng kết so sánh"],
                    ["#khuyen-chon",   "Nên chọn loại hình nào?"],
                    ["#faq",           "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <section className="mb-12" id="bai-toan">
                <SectionHeading>Bài toán lựa chọn: Đất dự án quy hoạch 1/500 hay đất thổ cư tự do?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi tìm hiểu thị trường bất động sản huyện Nhơn Trạch, người mua thường
                    đứng trước hai lựa chọn phổ biến:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                      <p className="font-black text-amber-800 text-sm mb-2">🏙️ Đất nền dự án quy hoạch 1/500</p>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        Điển hình: Mega City 2 Nhơn Trạch — Khu dân cư Phú Hội quy mô 84 ha do Kim Oanh Group phát triển với hơn 3.160 sản phẩm.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="font-black text-slate-700 text-sm mb-2">🏠 Đất thổ cư dân tự phân lô</p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Các thửa đất cá nhân tự tách thửa phân lô rải rác trong khu dân cư hiện hữu hoặc hẻm nhỏ tại các xã Phú Hội, Phú Thạnh, Phước Thiền, Vĩnh Thanh...
                      </p>
                    </div>
                  </div>
                  <InfoBox>
                    <strong>Lưu ý:</strong> Bài viết này phân tích theo tiêu chí chung và
                    mang tính tham khảo. Đặc điểm cụ thể của từng lô đất (dù là đất dự án
                    hay đất dân) cần được kiểm tra trực tiếp trước khi giao dịch.
                  </InfoBox>
                </div>
              </section>

              {/* 5 tiêu chí so sánh */}
              {CRITERIA.map((criterion, idx) => (
                <section key={criterion.id} className="mb-12" id={criterion.id}>
                  <SectionHeading>{criterion.title}</SectionHeading>
                  <div className="pt-5 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                        <p className="font-black text-amber-800 text-sm mb-3">✅ Dự án Mega City 2</p>
                        <ul className="space-y-1.5">
                          {criterion.mc2.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-amber-700 text-sm leading-relaxed">
                              <span className="flex-shrink-0 mt-0.5">•</span><span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <p className="font-black text-slate-600 text-sm mb-3">⚠️ Đất thổ cư dân tự phân lô</p>
                        <ul className="space-y-1.5">
                          {criterion.dat_dan.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                              <span className="flex-shrink-0 mt-0.5">•</span><span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="rounded-xl border-l-4 border-blue-400 bg-blue-50 px-5 py-3">
                      <p className="text-blue-800 text-sm leading-relaxed">
                        <strong>Đánh giá:</strong> {criterion.note}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <LinkBtn href={criterion.link.href}>{criterion.link.label}</LinkBtn>
                    </div>
                  </div>

                  {/* Insert figures at specific positions */}
                  {idx === 0 && (
                    <div className="mt-6">
                      <ArticleFigure
                        src={IMG_NEWS42["2"]}
                        alt="Infographic so sánh 5 tiêu chí giữa đất nền Mega City 2 và đất dân tự phân lô"
                        caption="5 tiêu chí then chốt: hạ tầng, pháp lý, xây dựng, tiện ích và thanh khoản"
                        images={images}
                        index={1}
                        onOpen={openLightbox}
                      />
                    </div>
                  )}
                  {idx === 3 && (
                    <div className="mt-6">
                      <ArticleFigure
                        src={IMG_NEWS42["3"]}
                        alt="Không gian sống xanh chuẩn sinh thái tại công viên trung tâm dự án Mega City 2"
                        caption="Công viên trung tâm 2,1 ha — tiện ích không gian xanh chỉ có tại khu đô thị quy hoạch đồng bộ"
                        images={images}
                        index={2}
                        onOpen={openLightbox}
                      />
                    </div>
                  )}
                </section>
              ))}

              {/* Bảng tổng kết */}
              <section className="mb-12" id="bang-tong-ket">
                <SectionHeading>Bảng tổng kết so sánh chi tiết: Mega City 2 vs Đất thổ cư dân</SectionHeading>
                <div className="pt-5 space-y-5">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[520px]">
                      <thead>
                        <tr className="bg-slate-700 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-36">Tiêu chí</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Mega City 2 (QH 1/500)</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Đất thổ cư dân tự phân lô</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Quy mô",           "84 ha, 3.160 sản phẩm đồng bộ",     "Nhỏ lẻ từ vài trăm đến vài nghìn m²"],
                          ["Pháp lý",           "Phê duyệt 1/500, đất ở đô thị 100%","Sổ riêng / Quy hoạch hỗn hợp"],
                          ["Điện nước",         "Điện ngầm 100%, nước máy Dowaco",   "Dây điện nổi, đấu nối tự túc"],
                          ["Đường trước nhà",   "13–32m trải nhựa, có vỉa hè",       "Hẻm 3–6m bê tông, không vỉa hè"],
                          ["Không gian xanh",   "Công viên 2,1 ha & cây xanh",       "Không có"],
                          ["Quy cách XD",       "Đồng bộ 1 trệt 2–3 lầu",           "Tự do (được nhà cấp 4)"],
                          ["Tiềm năng cho thuê","Cao (chuyên gia, F&B, văn phòng)",  "Trung bình (công nhân bình dân)"],
                          ["An toàn vốn",       "Rất cao, thanh khoản minh bạch",    "Phụ thuộc vị trí và lối đi"],
                        ].map(([tc, mc2, dat], i) => (
                          <tr key={tc} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700">{tc}</td>
                            <td className="px-4 py-3 text-amber-700 font-medium text-sm">{mc2}</td>
                            <td className="px-4 py-3 text-slate-500 text-sm">{dat}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-500 italic mt-2">
                      Bảng mang tính định hướng tổng quát. Đặc điểm cụ thể của từng lô cần
                      kiểm tra trực tiếp.
                    </p>
                  </div>
                </div>
              </section>

              {/* Lời khuyên */}
              <section className="mb-12" id="khuyen-chon">
                <SectionHeading>Lời khuyên: Bạn nên chọn loại hình nào?</SectionHeading>
                <div className="pt-5 space-y-4">
                  <div className="rounded-2xl border border-slate-300 bg-slate-50 p-6">
                    <p className="font-black text-slate-700 text-sm mb-3">
                      🏠 Nên chọn <span className="text-slate-800">ĐẤT DÂN TỰ PHÂN LÔ</span> khi:
                    </p>
                    <ul className="space-y-1.5">
                      {[
                        "Tổng ngân sách eo hẹp, chỉ đủ mua đất và xây nhà cấp 4 ở tạm",
                        "Muốn kinh doanh truyền thống gắn khu dân cư cũ (tạp hóa, sửa xe, cơ khí...)",
                        "Chấp nhận đường hẻm nhỏ và hệ thống dây điện nổi",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                          <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span><span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
                    <p className="font-black text-amber-800 text-sm mb-3">
                      🏙️ Nên chọn <span className="text-amber-900">ĐẤT NỀN DỰ ÁN MEGA CITY 2</span> khi:
                    </p>
                    <ul className="space-y-1.5">
                      {[
                        "Hướng đến môi trường sống chất lượng cao, an toàn, có công viên xanh cho con cái",
                        "Tìm kênh tích lũy tài sản an toàn, pháp lý 1/500 chuẩn mực, không sợ dính quy hoạch",
                        "Muốn khai thác dòng tiền: cho chuyên gia thuê hoặc mở shophouse thương mại",
                        "Đón đầu chu kỳ tăng trưởng hạ tầng liên vùng Nhơn Trạch – TP.HCM",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-amber-800 text-sm leading-relaxed">
                          <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span><span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS42["4"]}
                alt="Sơ đồ hướng dẫn lựa chọn đầu tư đất nền Mega City 2 hay đất thổ cư Nhơn Trạch"
                caption="Sơ đồ lựa chọn theo nhu cầu: tài chính, mục đích sử dụng và tầm nhìn đầu tư"
                images={images}
                index={3}
                onOpen={openLightbox}
              />

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp</SectionHeading>
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
                    { href: "/mega-city-2",                                                     label: "Mega City 2 Nhơn Trạch — Tổng quan dự án" },
                    { href: "/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach",                 label: "Mặt bằng phân lô Mega City 2" },
                    { href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",                           label: "Bảng giá Mega City 2 mới nhất" },
                    { href: "/tin-tuc/thu-tuc-chuyen-nhuong-mega-city-2",                       label: "Thủ tục chuyển nhượng Mega City 2" },
                    { href: "/tin-tuc/ket-noi-mega-city-2-va-cac-khu-cong-nghiep-nhon-trach",   label: "Kết nối Mega City 2 và KCN Nhơn Trạch" },
                    { href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2",                            label: "Hạ tầng kỹ thuật Mega City 2" },
                    { href: "/tin-tuc/phap-ly-mega-city-2",                                    label: "Pháp lý dự án Mega City 2" },
                    { href: "/tin-tuc/tien-ich-ngoai-khu-mega-city-2",                          label: "Tiện ích ngoại khu Mega City 2" },
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
                    Cả đất nền Mega City 2 và đất thổ cư tự phân lô đều có vị trí nhất định
                    trong thị trường Nhơn Trạch, phù hợp với những nhu cầu và tài chính khác
                    nhau. Không có lựa chọn nào là tuyệt đối đúng cho mọi người.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Xét về tầm nhìn dài hạn, giá trị an cư văn minh và đảm bảo an toàn pháp
                    lý hạ tầng, Mega City 2 thể hiện ưu thế vượt trội nhờ quy hoạch đồng bộ
                    84 ha, điện âm hiện đại và không gian sinh thái bền vững. Người mua cần
                    đối chiếu rõ mục tiêu, ngân sách và rủi ro chấp nhận được trước khi quyết
                    định.
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
                      { label: "Pháp lý dự án Mega City 2",        href: "/tin-tuc/phap-ly-mega-city-2" },
                      { label: "Hạ tầng kỹ thuật Mega City 2",     href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2" },
                      { label: "Mặt bằng phân lô Mega City 2",     href: "/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach" },
                      { label: "Bảng giá Mega City 2 mới nhất",    href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn đối chiếu</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Nhận tư vấn so sánh phương án đầu tư tối ưu tại Nhơn Trạch.
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
              Bạn cần tư vấn đối chiếu phương án đầu tư tối ưu tại Nhơn Trạch?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Tham khảo bảng giá chi tiết, pháp lý và tiến độ thực tế của Mega City 2.
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
              href: "/tin-tuc/shophouse-mega-city-2-khai-thac-kinh-doanh",
              title: "Shophouse Mega City 2: Khả Năng Khai Thác Kinh Doanh",
              description: "4 nhóm ngành nghề tiềm năng và bảng tài chính tham khảo.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/phap-ly-mega-city-2",
              title: "Pháp Lý Dự Án Mega City 2 Nhơn Trạch Có Gì?",
              description: "Quyết định phê duyệt, hồ sơ pháp lý và những điều cần kiểm tra.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2",
              title: "Hạ Tầng Kỹ Thuật Mega City 2: Điện Âm, Nước Máy & Thoát Nước",
              description: "Chi tiết điện âm 100%, cấp nước và thoát nước 2 tuyến riêng biệt.",
              tag: "Tin dự án",
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
