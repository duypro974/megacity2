"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS16 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/vanh-dai-3`;
const PUBLISHED     = "19/08/2026";
const PUBLISHED_ISO = "2026-08-19";

// ─────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vành đai 3 TP.HCM 2026: Tiến độ mới nhất và tác động đến bất động sản Nhơn Trạch",
  description: "Cập nhật tiến độ Vành đai 3 TP.HCM mới nhất năm 2026. Phân tích vị trí, quy hoạch, khả năng kết nối với Nhơn Trạch và tác động đến thị trường bất động sản.",
  image: [IMG_NEWS16["1"], IMG_NEWS16["2"], IMG_NEWS16["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "vành đai 3 TP.HCM, vành đai 3 nhơn trạch, tiến độ vành đai 3, quy hoạch vành đai 3, bất động sản nhơn trạch, hạ tầng giao thông đồng nai, mega city 2 nhơn trạch",
  about: {
    "@type": "Place",
    name: "Nhơn Trạch, Đồng Nai",
    address: { "@type": "PostalAddress", addressLocality: "Nhơn Trạch", addressRegion: "Đồng Nai", addressCountry: "VN" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vành đai 3 đi qua những tỉnh nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuyến đường đi qua TP. Hồ Chí Minh, Đồng Nai, Bình Dương và Long An. Đây là tuyến vành đai liên vùng quan trọng nhất khu vực phía Nam, kết nối bốn tỉnh thành trong một mạng lưới giao thông khép kín.",
      },
    },
    {
      "@type": "Question",
      name: "Vành đai 3 có đi qua Nhơn Trạch không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Theo quy hoạch, Vành đai 3 đi qua huyện Nhơn Trạch tỉnh Đồng Nai. Đây là một trong những địa phương được hưởng lợi trực tiếp từ dự án, với các xã như Long Tân, Phước An, Vĩnh Thanh, Phú Hội và trung tâm huyện nằm trong hành lang ảnh hưởng.",
      },
    },
    {
      "@type": "Question",
      name: "Vành đai 3 có ảnh hưởng đến giá bất động sản không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Hạ tầng giao thông là một trong những yếu tố tác động trực tiếp đến giá trị bất động sản. Tuyến đường giúp tăng khả năng kết nối, thúc đẩy đô thị hóa và thu hút dân cư – doanh nghiệp, từ đó tạo áp lực cầu lên thị trường nhà đất khu vực lân cận.",
      },
    },
    {
      "@type": "Question",
      name: "Có nên đầu tư bất động sản Nhơn Trạch trong năm 2026 không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà đầu tư nên nghiên cứu kỹ về vị trí, quy hoạch, pháp lý, hạ tầng và khả năng tài chính trước khi đưa ra quyết định. Nhơn Trạch có nhiều yếu tố hạ tầng hỗ trợ dài hạn, nhưng mỗi lô đất cần được đánh giá riêng dựa trên pháp lý cụ thể và mục tiêu đầu tư.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Vành đai 3 TP.HCM 2026", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS16["1"], alt: "Toàn cảnh tuyến đường Vành đai 3 TP Hồ Chí Minh kết nối khu vực Đồng Nai",         caption: "Toàn cảnh tuyến đường Vành đai 3 TP.HCM kết nối khu vực Đồng Nai" },
  { src: IMG_NEWS16["2"], alt: "Bản đồ quy hoạch tuyến đường Vành đai 3 đi qua huyện Nhơn Trạch tỉnh Đồng Nai",   caption: "Bản đồ quy hoạch Vành đai 3 đi qua huyện Nhơn Trạch" },
  { src: IMG_NEWS16["3"], alt: "Tiến độ thi công dự án Vành đai 3 TP Hồ Chí Minh cập nhật năm 2026",              caption: "Tiến độ thi công Vành đai 3 TP.HCM cập nhật năm 2026" },
  { src: IMG_NEWS16["4"], alt: "Tuyến đường Vành đai 3 kết nối với sân bay quốc tế Long Thành",                   caption: "Vành đai 3 kết nối với sân bay quốc tế Long Thành" },
  { src: IMG_NEWS16["5"], alt: "Dự án Mega City 2 hưởng lợi từ hệ thống hạ tầng giao thông tại huyện Nhơn Trạch", caption: "Dự án Mega City 2 hưởng lợi từ hệ thống hạ tầng giao thông Nhơn Trạch" },
];

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-primary-400 scroll-mt-24">
      {children}
    </h2>
  );
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-8">{children}</h3>;
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
function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const s = type === "warn"
    ? "bg-amber-50 border-amber-200 text-amber-800"
    : "bg-primary-50 border-primary-200 text-primary-800";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function VanhDai3Page() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}

      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero header ── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">Vành đai 3 TP.HCM 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Hạ tầng</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 9 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Vành đai 3 TP.HCM 2026: Tiến độ mới nhất và tác động đến bất động sản Nhơn Trạch
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Cập nhật tiến độ Vành đai 3 TP.HCM mới nhất năm 2026. Phân tích vị trí, quy hoạch,
              khả năng kết nối với Nhơn Trạch và tác động đến thị trường bất động sản.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh Vành đai 3 TP.HCM"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS16["1"]}
                alt="Toàn cảnh tuyến đường Vành đai 3 TP Hồ Chí Minh kết nối khu vực Đồng Nai"
                className="w-full h-auto block"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Toàn cảnh tuyến đường Vành đai 3 TP Hồ Chí Minh kết nối khu vực Đồng Nai
            </p>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Article ── */}
            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#la-gi",       "1. Vành đai 3 TP.HCM là gì?"],
                    ["#vi-tri",      "2. Vị trí tuyến Vành đai 3 qua Nhơn Trạch"],
                    ["#tien-do",     "3. Tiến độ thi công mới nhất năm 2026"],
                    ["#san-bay",     "4. Kết nối với sân bay Long Thành"],
                    ["#gia-bds",     "5. Ảnh hưởng đến bất động sản Nhơn Trạch"],
                    ["#mega-city-2", "6. Mega City 2 hưởng lợi như thế nào?"],
                    ["#faq",         "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Vành đai 3 TP.HCM là một trong những dự án giao thông quan trọng nhất của khu vực
                phía Nam, với vai trò kết nối TP. Hồ Chí Minh với Đồng Nai, Bình Dương và Long An,
                tạo nên một mạng lưới giao thông liên vùng hoàn chỉnh.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Trong những năm gần đây, Nhơn Trạch trở thành một trong những địa phương được hưởng
                lợi trực tiếp từ quá trình phát triển hạ tầng. Sự xuất hiện của Vành đai 3 được xem
                là yếu tố quan trọng góp phần thay đổi diện mạo của khu vực này.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Vậy Vành đai 3 đi qua những đâu tại Nhơn Trạch? Tiến độ hiện tại như thế nào?
                Và tác động đến thị trường bất động sản ra sao? Bài viết dưới đây sẽ phân tích
                chi tiết từng khía cạnh.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin về tiến độ Vành đai 3 được tổng hợp từ nguồn
                công khai, mang tính tham khảo. Tiến độ thực tế phụ thuộc quyết định của cơ quan
                có thẩm quyền. Phân tích tác động BĐS không phải cam kết tăng giá.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="la-gi">Vành đai 3 TP.HCM là gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Vành đai 3 là tuyến đường vành đai được quy hoạch nhằm kết nối TP. Hồ Chí Minh
                    với các tỉnh Đồng Nai, Bình Dương và Long An, tạo thành một vòng đai giao thông
                    liên vùng hoàn chỉnh bao quanh khu vực đô thị lớn nhất phía Nam.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dự án không chỉ giúp giảm áp lực giao thông tại khu vực trung tâm mà còn tạo
                    động lực phát triển kinh tế, công nghiệp và bất động sản cho toàn vùng. Việc
                    đầu tư đồng bộ vào hệ thống giao thông được kỳ vọng sẽ thúc đẩy quá trình đô
                    thị hóa và tạo điều kiện thuận lợi cho phát triển các khu đô thị mới.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      ["Tổng chiều dài",  "~76 km"],
                      ["Qua 4 tỉnh",      "TP.HCM, Đồng Nai, Bình Dương, Long An"],
                      ["Loại đường",      "Vành đai liên vùng"],
                      ["Quy mô",          "Đường cao tốc đô thị"],
                    ].map(([label, val]) => (
                      <div key={label} className="rounded-2xl bg-primary-50 border border-primary-100 p-4 text-center">
                        <p className="text-sm font-black text-primary-700 mb-1">{val}</p>
                        <p className="text-[11px] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="vi-tri">Vị trí của tuyến Vành đai 3 qua Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo quy hoạch, Vành đai 3 sẽ đi qua nhiều địa phương quan trọng. Đối với tỉnh
                    Đồng Nai, tuyến đường đi qua huyện Nhơn Trạch — tạo ra sự kết nối trực tiếp
                    với TP. Hồ Chí Minh và nâng cao vị thế chiến lược của khu vực này trong mạng
                    lưới giao thông liên vùng.
                  </p>
                  <H3>Các tỉnh thành tuyến đường đi qua</H3>
                  <BulletList items={[
                    "TP. Hồ Chí Minh: đi qua nhiều quận huyện phía đông và tây thành phố",
                    "Đồng Nai: đi qua huyện Nhơn Trạch — khu vực đang phát triển mạnh về đô thị và công nghiệp",
                    "Bình Dương: kết nối với các khu công nghiệp và đô thị trọng điểm phía bắc",
                    "Long An: mở rộng kết nối vùng Tây Nam Bộ và các tỉnh miền Tây",
                  ]} />
                  <H3>Các khu vực tại Nhơn Trạch được hưởng lợi trực tiếp</H3>
                  <BulletList items={[
                    "Long Tân: xã nằm trong hành lang quy hoạch của tuyến đường",
                    "Phước An: khu vực tiếp giáp với các tuyến giao thông quan trọng",
                    "Vĩnh Thanh: vị trí kết nối giữa Nhơn Trạch và TP.HCM",
                    "Phú Hội: nơi tọa lạc của nhiều dự án đô thị quy mô, trong đó có Mega City 2",
                    "Trung tâm huyện Nhơn Trạch: hành chính và dịch vụ của toàn huyện",
                  ]} />
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Mega City 2 Nhơn Trạch →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí dự án →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS16["2"]}
                alt="Bản đồ quy hoạch tuyến đường Vành đai 3 đi qua huyện Nhơn Trạch tỉnh Đồng Nai"
                caption="Bản đồ quy hoạch tuyến đường Vành đai 3 đi qua huyện Nhơn Trạch, tỉnh Đồng Nai"
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="tien-do">Tiến độ thi công Vành đai 3 mới nhất năm 2026</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tiến độ xây dựng Vành đai 3 đang được đẩy nhanh nhằm hoàn thiện hệ thống giao
                    thông liên vùng. Đây là một trong những dự án hạ tầng được các nhà đầu tư đặc
                    biệt quan tâm vì có thể tác động trực tiếp đến thị trường bất động sản tại
                    Đồng Nai.
                  </p>
                  <H3>Các hạng mục đang triển khai</H3>
                  <BulletList items={[
                    "Giải phóng mặt bằng: công tác thu hồi đất và đền bù cho người dân trong hành lang dự án",
                    "Thi công nền đường: san lấp, gia cố nền đất phục vụ xây dựng mặt đường",
                    "Xây dựng cầu: các công trình cầu qua sông, kênh rạch dọc tuyến",
                    "Hoàn thiện hệ thống thoát nước: đảm bảo thoát lũ và vệ sinh môi trường ven đường",
                    "Xây dựng các nút giao thông: điểm kết nối với các tuyến đường hiện hữu",
                  ]} />
                  <InfoBox>
                    Nhà đầu tư nên thường xuyên cập nhật thông tin chính thức từ{" "}
                    <strong>UBND tỉnh Đồng Nai</strong> và{" "}
                    <strong>Ban Quản lý dự án đầu tư xây dựng các công trình giao thông</strong>{" "}
                    để theo dõi tiến độ thực tế của dự án.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS16["3"]}
                alt="Tiến độ thi công dự án Vành đai 3 TP Hồ Chí Minh cập nhật năm 2026"
                caption="Tiến độ thi công dự án Vành đai 3 TP.HCM cập nhật năm 2026"
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="san-bay">Vành đai 3 kết nối với sân bay Long Thành như thế nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sân bay Long Thành được xem là một trong những dự án trọng điểm quốc gia. Khi
                    kết hợp với Vành đai 3, hệ thống giao thông tại khu vực phía Nam sẽ được cải
                    thiện đáng kể — đặc biệt đối với Nhơn Trạch, nơi nằm ở trung tâm của cả hai
                    tuyến hạ tầng chiến lược này.
                  </p>
                  <H3>Những lợi ích nổi bật từ sự kết hợp hai dự án</H3>
                  <BulletList items={[
                    "Rút ngắn thời gian di chuyển: kết nối nhanh hơn giữa Nhơn Trạch, TP.HCM và sân bay Long Thành",
                    "Tăng khả năng kết nối liên vùng: mở ra hướng phát triển cho Đồng Nai, Bình Dương, Long An",
                    "Thúc đẩy hoạt động logistics: trung chuyển hàng hóa thuận tiện hơn nhờ tuyến vành đai",
                    "Thu hút doanh nghiệp: môi trường hạ tầng hoàn thiện là yếu tố cốt lõi khi doanh nghiệp chọn địa điểm",
                    "Hỗ trợ phát triển công nghiệp: mở rộng không gian sản xuất ra ngoài vùng lõi TP.HCM",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sự kết hợp giữa Vành đai 3 và sân bay Long Thành được đánh giá là một trong
                    những động lực quan trọng nhất thúc đẩy sự phát triển của Nhơn Trạch trong
                    giai đoạn 2025–2030 và những năm tiếp theo.
                  </p>
                  <InfoBox>
                    <a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" className="font-bold text-primary-700 underline">
                      Sân bay Long Thành ảnh hưởng đến BĐS Nhơn Trạch như thế nào? →
                    </a>
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS16["4"]}
                alt="Tuyến đường Vành đai 3 kết nối với sân bay quốc tế Long Thành"
                caption="Tuyến đường Vành đai 3 kết nối với sân bay quốc tế Long Thành"
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="gia-bds">Vành đai 3 ảnh hưởng như thế nào đến bất động sản Nhơn Trạch?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong lĩnh vực bất động sản, hạ tầng luôn là yếu tố có tác động rất lớn đến
                    giá trị của một dự án. Khi một tuyến đường lớn được hình thành, nhiều yếu tố
                    trong khu vực sẽ thay đổi theo:
                  </p>
                  <BulletList items={[
                    "Khả năng kết nối: đi lại thuận tiện hơn giúp thu hút cư dân và doanh nghiệp",
                    "Tốc độ đô thị hóa: khu vực dọc hành lang tuyến đường phát triển nhanh hơn",
                    "Giá trị bất động sản: áp lực cầu gia tăng kéo theo xu hướng tăng giá dài hạn",
                    "Nhu cầu nhà ở: dân số tăng do lao động và chuyên gia đổ về khu vực",
                    "Hoạt động thương mại: mặt đường lớn kích hoạt nhu cầu kinh doanh, dịch vụ",
                  ]} />

                  <H3>Các dự án hạ tầng đang tác động đến Nhơn Trạch</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong những năm gần đây, Nhơn Trạch liên tục nhận được sự quan tâm của các nhà
                    đầu tư nhờ hàng loạt dự án hạ tầng lớn đồng thời triển khai:
                  </p>
                  <BulletList items={[
                    <><a href="/tin-tuc/cau-cat-lai" className="text-primary-700 font-semibold hover:underline">Cầu Cát Lái</a> — cầu vượt sông Đồng Nai kết nối Nhơn Trạch với TP.Thủ Đức trực tiếp</>,
                    <><a href="/tin-tuc/duong-25c" className="text-primary-700 font-semibold hover:underline">Đường 25C</a> — trục giao thông huyết mạch chạy dọc huyện Nhơn Trạch hướng Long Thành</>,
                    "Cao tốc Bến Lức – Long Thành — tuyến cao tốc đông-tây kết nối hai đầu vùng phía Nam",
                    "Cao tốc Biên Hòa – Vũng Tàu — mở ra hành lang kinh tế duyên hải Đông Nam Bộ",
                    <><a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" className="text-primary-700 font-semibold hover:underline">Sân bay Long Thành</a> — cửa ngõ hàng không quốc tế trọng điểm quốc gia</>,
                    "Vành đai 3 TP.HCM — hoàn thiện mạng lưới vành đai liên vùng toàn diện nhất",
                  ]} />
                  <InfoBox type="warn">
                    <strong>Lưu ý:</strong> Tác động của hạ tầng đến giá BĐS là yếu tố dài hạn và
                    không đồng đều giữa các khu vực. Giá trị còn phụ thuộc vào pháp lý, quy hoạch
                    và vị trí cụ thể từng lô. Nhà đầu tư cần đánh giá tổng thể trước khi quyết định.
                  </InfoBox>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/gia-dat-nhon-trach-2026">Giá đất Nhơn Trạch 2026 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat">Quy hoạch Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Mega City 2 hưởng lợi như thế nào từ Vành đai 3?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong số các dự án đang thu hút sự quan tâm tại Nhơn Trạch,{" "}
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2</a>{" "}
                    được đánh giá là một trong những dự án có nhiều lợi thế từ sự phát triển của hệ
                    thống giao thông, trong đó có Vành đai 3.
                  </p>
                  <H3>Những lợi thế cụ thể của Mega City 2</H3>
                  <BulletList items={[
                    "Kết nối thuận tiện với TP. Hồ Chí Minh qua cầu Cát Lái và đường 25C",
                    "Tiếp cận nhanh với sân bay Long Thành trong khoảng 20–25 phút di chuyển",
                    "Hưởng lợi từ hệ thống hạ tầng đồng bộ: đường nhựa, điện, nước hoàn chỉnh",
                    "Tiềm năng phát triển dài hạn khi vành đai liên vùng đi vào hoạt động",
                    "Khả năng gia tăng giá trị trong tương lai theo xu hướng đô thị hóa khu vực",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ngoài lợi thế vị trí, Mega City 2 còn được nhiều nhà đầu tư quan tâm nhờ nền
                    tảng pháp lý rõ ràng với quy hoạch 1/500 đã được phê duyệt và Quyết định
                    1772/QĐ-UBND chấp thuận 2.421 lô phân lô bán nền tại xã Phú Hội, Nhơn Trạch.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Tổng quan Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý →</LinkBtn>
                    <LinkBtn href="/mega-city-2/tien-ich">Tiện ích →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS16["5"]}
                alt="Dự án Mega City 2 hưởng lợi từ hệ thống hạ tầng giao thông tại huyện Nhơn Trạch"
                caption="Dự án Mega City 2 hưởng lợi từ hệ thống hạ tầng giao thông tại huyện Nhơn Trạch"
                images={images} index={4} onOpen={openLightbox}
              />

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về Vành đai 3 TP.HCM</SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details key={name} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary-200 transition-colors">
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

              {/* Tìm hiểu thêm */}
              <section className="mb-12">
                <SectionHeading>Tìm hiểu thêm</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/mega-city-2",                                                      label: "Mega City 2 Nhơn Trạch" },
                    { href: "/mega-city-2/bang-gia",                                              label: "Bảng giá Mega City 2" },
                    { href: "/mega-city-2/vi-tri",                                                label: "Vị trí Mega City 2" },
                    { href: "/mega-city-2/phap-ly",                                               label: "Pháp lý Mega City 2" },
                    { href: "/mega-city-2/tien-ich",                                              label: "Tiện ích Mega City 2" },
                    { href: "/tin-tuc/duong-25c",                                                 label: "Đường 25C Nhơn Trạch" },
                    { href: "/tin-tuc/cau-cat-lai",                                               label: "Cầu Cát Lái" },
                    { href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach",             label: "Sân bay Long Thành và BĐS Nhơn Trạch" },
                  ].map((l) => (
                    <a key={l.href} href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors px-4 py-3 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50">
                      <span className="text-primary-400 flex-shrink-0">→</span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </section>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài được tổng hợp từ nguồn công khai và mang tính tham khảo.
                  Tiến độ các dự án hạ tầng có thể thay đổi theo quyết định của cơ quan có thẩm
                  quyền. Trước khi đầu tư, cần xác nhận thông tin pháp lý cụ thể từng sản phẩm.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu Mega City 2</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/mega-city-2",          label: "Tổng quan dự án" },
                      { href: "/mega-city-2/vi-tri",    label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",   label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia",  label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/mat-bang",  label: "Mặt bằng sản phẩm" },
                      { href: "/mega-city-2/hinh-anh",  label: "Hình ảnh thực tế" },
                      { href: "/mega-city-2/faq",       label: "FAQ dự án" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-primary-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white">
                        <span>{l.label}</span><span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Đường 25C Nhơn Trạch 2026",              href: "/tin-tuc/duong-25c" },
                      { label: "Cầu Cát Lái – Cập nhật mới nhất",        href: "/tin-tuc/cau-cat-lai" },
                      { label: "Sân bay Long Thành & BĐS Nhơn Trạch",    href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" },
                      { label: "Giá đất Nhơn Trạch 2026",                href: "/tin-tuc/gia-dat-nhon-trach-2026" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">→ {l.label}</a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn miễn phí</p>
                  <p className="text-primary-200 text-xs mb-4">Nhận thông tin pháp lý và bảng giá Mega City 2.</p>
                  <a href="tel:0937587438" className="block text-center bg-white text-primary-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-colors">
                    0937.587.438
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-primary-50 border-t border-primary-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Bạn muốn tìm hiểu thêm về Mega City 2?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Xem thêm thông tin về vị trí, pháp lý và bảng giá dự án Mega City 2 tại Nhơn Trạch —
              hưởng lợi trực tiếp từ Vành đai 3, cầu Cát Lái và sân bay Long Thành.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">
                Xem dự án →
              </a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            {
              href: "/mega-city-2",
              title: "Mega City 2 Nhơn Trạch – Tổng quan dự án",
              description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá dự án Mega City 2.",
              tag: "Dự án",
            },
            {
              href: "/tin-tuc/duong-25c",
              title: "Đường 25C Nhơn Trạch: Tiến độ mới nhất năm 2026",
              description: "Phân tích tuyến đường 25C và tác động đến bất động sản khu vực Nhơn Trạch.",
              tag: "Hạ tầng",
            },
            {
              href: "/tin-tuc/cau-cat-lai",
              title: "Cầu Cát Lái – Cập nhật tiến độ mới nhất 2026",
              description: "Thông tin mới nhất về dự án cầu Cát Lái kết nối Nhơn Trạch với TP.HCM.",
              tag: "Hạ tầng",
            },
            {
              href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach",
              title: "Sân bay Long Thành ảnh hưởng đến BĐS Nhơn Trạch",
              description: "Tác động của sân bay Long Thành đến thị trường bất động sản Nhơn Trạch.",
              tag: "Thị trường",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
