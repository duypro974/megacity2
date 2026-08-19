"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS14 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/duong-25c`;
const PUBLISHED     = "19/08/2026";
const PUBLISHED_ISO = "2026-08-19";

// ─────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Đường 25C Nhơn Trạch: Tiến độ mới nhất năm 2026 và tác động đến Mega City 2",
  description: "Cập nhật tiến độ đường 25C Nhơn Trạch mới nhất năm 2026. Phân tích khả năng kết nối đến sân bay Long Thành và tác động của hạ tầng đến dự án Mega City 2.",
  image: [IMG_NEWS14["1"], IMG_NEWS14["2"], IMG_NEWS14["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "đường 25c nhơn trạch, đường 25c đồng nai, tiến độ đường 25c, đường 25c sân bay long thành, hạ tầng nhơn trạch, mega city 2",
  about: { "@type": "Place", name: "Nhơn Trạch, Đồng Nai", address: { "@type": "PostalAddress", addressLocality: "Nhơn Trạch", addressRegion: "Đồng Nai", addressCountry: "VN" } },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question", name: "Đường 25C nằm ở đâu?",
      acceptedAnswer: { "@type": "Answer", text: "Đường 25C là tuyến đường quan trọng tại huyện Nhơn Trạch, tỉnh Đồng Nai. Tuyến đường đi qua trung tâm hành chính huyện, kết nối các khu công nghiệp, khu đô thị mới và hướng đến sân bay Long Thành." },
    },
    {
      "@type": "Question", name: "Đường 25C có kết nối với sân bay Long Thành không?",
      acceptedAnswer: { "@type": "Answer", text: "Có. Đường 25C là một trong những trục giao thông quan trọng giúp kết nối Nhơn Trạch với khu vực Long Thành, nơi sân bay quốc tế đang được xây dựng. Khoảng cách khoảng 15–18 km, ước tính 20–25 phút di chuyển." },
    },
    {
      "@type": "Question", name: "Đường 25C có ảnh hưởng đến giá bất động sản không?",
      acceptedAnswer: { "@type": "Answer", text: "Hạ tầng giao thông là một trong những yếu tố quan trọng tác động đến giá trị bất động sản. Khu vực nằm gần đường 25C có lợi thế kết nối, khả năng thương mại và tiềm năng phát triển tốt hơn trong dài hạn." },
    },
    {
      "@type": "Question", name: "Mega City 2 có được hưởng lợi từ đường 25C không?",
      acceptedAnswer: { "@type": "Answer", text: "Có. Mega City 2 tọa lạc trực tiếp trên đường 25C tại xã Phú Hội, Nhơn Trạch. Vị trí này mang lại kết nối trực tiếp đến sân bay Long Thành (~18 km), TP.HCM qua phà Cát Lái và hệ thống cao tốc vùng." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Đường 25C Nhơn Trạch 2026", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS14["1"], alt: "Toàn cảnh tuyến đường 25C kết nối trung tâm Nhơn Trạch với sân bay Long Thành", caption: "Toàn cảnh tuyến đường 25C Nhơn Trạch" },
  { src: IMG_NEWS14["2"], alt: "Bản đồ quy hoạch tuyến đường 25C tại huyện Nhơn Trạch, tỉnh Đồng Nai",          caption: "Bản đồ quy hoạch tuyến đường 25C Nhơn Trạch" },
  { src: IMG_NEWS14["3"], alt: "Hình ảnh thực tế tiến độ thi công tuyến đường 25C tại Nhơn Trạch năm 2026",      caption: "Tiến độ thi công đường 25C Nhơn Trạch 2026" },
  { src: IMG_NEWS14["4"], alt: "Dự án Mega City 2 được hưởng lợi từ hệ thống hạ tầng giao thông tại Nhơn Trạch", caption: "Mega City 2 hưởng lợi từ đường 25C Nhơn Trạch" },
];

function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-primary-400 scroll-mt-24">{children}</h2>;
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
  const s = type === "warn" ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-primary-50 border-primary-200 text-primary-800";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">{children}</a>;
}

export default function Duong25CPage() {
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
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a><span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a><span>/</span>
              <span className="text-slate-600 font-medium">Đường 25C Nhơn Trạch 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Hạ tầng</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 9 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Đường 25C Nhơn Trạch: Tiến độ mới nhất năm 2026 và tác động đến Mega City 2
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Cập nhật tiến độ đường 25C Nhơn Trạch mới nhất năm 2026. Phân tích khả năng kết
              nối đến sân bay Long Thành và tác động của hạ tầng đến dự án Mega City 2.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh đường 25C"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS14["1"]} alt="Toàn cảnh tuyến đường 25C kết nối trung tâm Nhơn Trạch với sân bay Long Thành"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Toàn cảnh tuyến đường 25C kết nối trung tâm Nhơn Trạch với sân bay Long Thành
            </p>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#la-gi",       "1. Đường 25C Nhơn Trạch là gì?"],
                    ["#vi-tri",      "2. Vị trí và các khu vực kết nối"],
                    ["#tien-do",     "3. Tiến độ mới nhất năm 2026"],
                    ["#san-bay",     "4. Kết nối với sân bay Long Thành"],
                    ["#gia-bds",     "5. Ảnh hưởng đến giá bất động sản"],
                    ["#mega-city-2", "6. Mega City 2 hưởng lợi như thế nào?"],
                    ["#faq",         "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Việc phát triển hạ tầng giao thông đang trở thành động lực quan trọng thúc đẩy
                thị trường bất động sản tại Nhơn Trạch, Đồng Nai. Trong đó, đường 25C được xem
                là một trong những tuyến giao thông chiến lược, đóng vai trò kết nối giữa trung
                tâm hành chính Nhơn Trạch với sân bay Long Thành và nhiều khu vực trọng điểm.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Theo quy hoạch, tuyến đường này góp phần hoàn thiện mạng lưới giao thông của
                khu vực, tạo điều kiện thuận lợi cho việc di chuyển giữa Nhơn Trạch và TP. Hồ
                Chí Minh, đồng thời kết nối các khu công nghiệp và đô thị mới trong vùng.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin về tiến độ đường 25C tổng hợp từ nguồn công
                khai, mang tính tham khảo. Tiến độ thực tế phụ thuộc quyết định của cơ quan
                có thẩm quyền. Phân tích tác động BĐS không phải cam kết tăng giá.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="la-gi">Đường 25C Nhơn Trạch là gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đường 25C là tuyến đường trục quan trọng trong quy hoạch phát triển hạ tầng
                    của huyện Nhơn Trạch, tỉnh Đồng Nai. Tuyến đường này đóng vai trò là xương
                    sống giao thông nội vùng, kết nối trung tâm Nhơn Trạch với Long Thành và
                    hệ thống giao thông đối ngoại.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sự phát triển của đường 25C không chỉ cải thiện khả năng di chuyển của cư
                    dân mà còn tạo ra cơ hội phát triển kinh tế, thu hút đầu tư và thúc đẩy
                    quá trình đô thị hóa dọc hành lang tuyến đường.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      ["Vị trí",          "Nhơn Trạch, Đồng Nai"],
                      ["Kết nối sân bay",  "~18 km"],
                      ["Đến TP.HCM",       "Qua phà Cát Lái"],
                      ["Loại đường",       "Trục liên vùng"],
                    ].map(([label, val]) => (
                      <div key={label} className="rounded-2xl bg-primary-50 border border-primary-100 p-4 text-center">
                        <p className="text-sm font-black text-primary-700 mb-1">{val}</p>
                        <p className="text-[11px] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS14["2"]} alt="Bản đồ quy hoạch tuyến đường 25C tại huyện Nhơn Trạch, tỉnh Đồng Nai"
                caption="Bản đồ quy hoạch tuyến đường 25C tại huyện Nhơn Trạch, tỉnh Đồng Nai"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="vi-tri">Vị trí và các khu vực kết nối</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đường 25C đi qua nhiều khu vực chiến lược tại Nhơn Trạch, tạo thành trục
                    kết nối quan trọng trong mạng lưới giao thông vùng:
                  </p>
                  <BulletList items={[
                    "Trung tâm hành chính huyện Nhơn Trạch: thuận tiện tiếp cận cơ quan nhà nước và dịch vụ công",
                    "Hệ thống khu công nghiệp Nhơn Trạch 1–6: phục vụ hàng chục nghìn lao động và chuyên gia",
                    "Các khu đô thị mới đang phát triển: trong đó có dự án Mega City 2 tọa lạc trực tiếp trên đường",
                    "Sân bay quốc tế Long Thành: cách khoảng 15–18 km, kết nối trực tiếp qua đường 25C",
                    "Hệ thống cao tốc TP.HCM – Long Thành – Dầu Giây: điểm kết nối với mạng cao tốc toàn vùng",
                    "TP. Hồ Chí Minh: qua phà Cát Lái và tuyến đường ven sông đến Quận 2, TP.Thủ Đức",
                  ]} />
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Mega City 2 Nhơn Trạch →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí dự án →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="tien-do">Tiến độ đường 25C mới nhất năm 2026</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tiến độ xây dựng và nâng cấp đường 25C đang được nhiều nhà đầu tư và cư
                    dân Nhơn Trạch quan tâm theo dõi. Việc triển khai các hạng mục hạ tầng
                    không chỉ cải thiện khả năng kết nối mà còn tạo động lực phát triển cho
                    toàn khu vực.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhà đầu tư nên thường xuyên cập nhật thông tin từ các cơ quan chức năng
                    để theo dõi những thay đổi mới nhất liên quan đến quy hoạch và tiến độ
                    thi công. Thông tin chính thức được công bố bởi UBND huyện Nhơn Trạch và
                    Sở Giao thông Vận tải tỉnh Đồng Nai.
                  </p>
                  <InfoBox>
                    Xem thêm phân tích tổng thể hạ tầng khu vực:{" "}
                    <a href="/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat" className="font-bold text-primary-700 underline">
                      Hạ tầng giao thông Nhơn Trạch mới nhất 2026 →
                    </a>
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS14["3"]} alt="Hình ảnh thực tế tiến độ thi công tuyến đường 25C tại Nhơn Trạch năm 2026"
                caption="Hình ảnh thực tế tiến độ thi công tuyến đường 25C tại Nhơn Trạch năm 2026"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="san-bay">Đường 25C kết nối với sân bay Long Thành như thế nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sân bay Long Thành được xem là một trong những dự án hạ tầng trọng điểm
                    của khu vực phía Nam. Nhờ vị trí thuận lợi, đường 25C là trục giao thông
                    quan trọng nhất giúp kết nối Nhơn Trạch với khu vực sân bay Long Thành.
                  </p>
                  <H3>Thông số kết nối</H3>
                  <BulletList items={[
                    "Khoảng cách từ trung tâm Nhơn Trạch đến sân bay: ~15–18 km theo đường 25C",
                    "Thời gian di chuyển ước tính: 20–25 phút trong điều kiện giao thông bình thường",
                    "Khi cao tốc vùng hoàn thiện, thời gian di chuyển sẽ tiếp tục rút ngắn",
                    "Tuyến đường bổ sung: cao tốc TP.HCM – Long Thành – Dầu Giây tăng khả năng kết nối vùng",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sự phát triển đồng bộ giữa hệ thống giao thông và sân bay được kỳ vọng
                    tạo ra nhiều cơ hội phát triển cho thị trường bất động sản, thu hút dân
                    cư và doanh nghiệp đến định cư và hoạt động tại Nhơn Trạch.
                  </p>
                  <InfoBox>
                    <a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" className="font-bold text-primary-700 underline">
                      Sân bay Long Thành ảnh hưởng đến BĐS Nhơn Trạch như thế nào? →
                    </a>
                  </InfoBox>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="gia-bds">Đường 25C ảnh hưởng đến giá bất động sản như thế nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong thị trường bất động sản, hạ tầng giao thông luôn là yếu tố tác động
                    trực tiếp đến giá trị. Những khu vực nằm gần tuyến đường lớn như đường 25C
                    thường có khả năng tăng giá tốt hơn nhờ:
                  </p>
                  <BulletList items={[
                    "Khả năng kết nối thuận tiện: rút ngắn thời gian di chuyển đến TP.HCM, sân bay và trung tâm kinh tế",
                    "Hạ tầng đồng bộ: đường lớn kéo theo đầu tư điện, nước, viễn thông và dịch vụ đô thị",
                    "Tốc độ đô thị hóa cao: khu vực dọc trục đường lớn phát triển nhanh hơn nhờ dân cư tập trung",
                    "Thu hút dân cư và doanh nghiệp: hạ tầng tốt là yếu tố hàng đầu khi chọn nơi định cư và kinh doanh",
                    "Tiềm năng thương mại: mặt tiền đường lớn có giá trị kinh doanh và cho thuê cao hơn đất sâu",
                  ]} />
                  <InfoBox type="warn">
                    <strong>Lưu ý:</strong> Tác động của hạ tầng đến giá BĐS là yếu tố dài hạn
                    và không đồng đều. Giá trị còn phụ thuộc vào pháp lý, quy hoạch và vị trí
                    cụ thể từng lô. Nhà đầu tư cần đánh giá tổng thể trước khi quyết định.
                  </InfoBox>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Mega City 2 hưởng lợi như thế nào từ đường 25C?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong số các dự án tại Nhơn Trạch,{" "}
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2</a>{" "}
                    nằm trong khu vực được hưởng lợi trực tiếp từ sự phát triển của đường 25C.
                    Dự án tọa lạc ngay trên tuyến đường này tại xã Phú Hội, huyện Nhơn Trạch.
                  </p>
                  <H3>Những lợi thế cụ thể</H3>
                  <BulletList items={[
                    "Vị trí mặt tiền đường 25C: kết nối trực tiếp không cần qua đường nội bộ",
                    "Tiếp cận nhanh sân bay Long Thành: ~18 km, khoảng 20–25 phút di chuyển",
                    "Kết nối TP.HCM: qua phà Cát Lái và tuyến đường ven sông đến Quận 2, TP.Thủ Đức",
                    "Tiếp cận hệ thống cao tốc vùng: TP.HCM – Long Thành – Dầu Giây gần khu vực",
                    "Tiềm năng thương mại: mặt tiền đường lớn thuận lợi cho kinh doanh dịch vụ",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ngoài lợi thế vị trí, Mega City 2 còn có nền tảng pháp lý rõ ràng với
                    quy hoạch 1/500 đã phê duyệt và QĐ 1772/QĐ-UBND chấp thuận 2.421 lô phân
                    lô bán nền — yếu tố quan trọng phân biệt với nhiều bất động sản khác.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Tổng quan Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý →</LinkBtn>
                    <LinkBtn href="/mega-city-2/tien-ich">Tiện ích →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS14["4"]} alt="Dự án Mega City 2 được hưởng lợi từ hệ thống hạ tầng giao thông tại Nhơn Trạch"
                caption="Dự án Mega City 2 tọa lạc trực tiếp trên đường 25C Nhơn Trạch"
                images={images} index={3} onOpen={openLightbox} />

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về đường 25C Nhơn Trạch</SectionHeading>
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

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">Thông tin trong bài được tổng hợp từ nguồn công khai và mang tính tham khảo. Tiến độ các dự án hạ tầng có thể thay đổi theo quyết định của cơ quan có thẩm quyền. Trước khi đầu tư, cần xác nhận thông tin pháp lý cụ thể.</p>
              </div>

            </article>

            {/* Sidebar */}
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
                      <a key={l.href} href={l.href} className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-primary-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white">
                        <span>{l.label}</span><span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Hạ tầng giao thông Nhơn Trạch 2026", href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat" },
                      { label: "Sân bay Long Thành & BĐS Nhơn Trạch", href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" },
                      { label: "Giá đất Nhơn Trạch 2026", href: "/tin-tuc/gia-dat-nhon-trach-2026" },
                      { label: "Quy hoạch Nhơn Trạch mới nhất", href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">→ {l.label}</a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn miễn phí</p>
                  <p className="text-primary-200 text-xs mb-4">Nhận thông tin pháp lý và bảng giá Mega City 2.</p>
                  <a href="tel:0937587438" className="block text-center bg-white text-primary-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-colors">0937.587.438</a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-primary-50 border-t border-primary-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Bạn muốn tìm hiểu thêm về Mega City 2?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">Xem thêm thông tin về vị trí, pháp lý và bảng giá dự án Mega City 2 trên đường 25C Nhơn Trạch.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">Xem dự án →</a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">Gọi 0937.587.438</a>
            </div>
          </div>
        </section>

        <RelatedContent title="Bài viết liên quan" items={[
          { href: "/mega-city-2",                                           title: "Mega City 2 Nhơn Trạch – Tổng quan dự án",            description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá.", tag: "Dự án" },
          { href: "/mega-city-2/vi-tri",                                    title: "Vị trí Mega City 2 & Kết nối vùng",                   description: "Phân tích vị trí chiến lược trên đường 25C, kết nối sân bay.", tag: "Vị trí" },
          { href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat",        title: "Hạ tầng giao thông Nhơn Trạch 2026",                  description: "Cập nhật sân bay Long Thành, Vành đai 3 và cao tốc Bến Lức.", tag: "Hạ tầng" },
          { href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach", title: "Sân bay Long Thành & BĐS Nhơn Trạch",                 description: "Tác động của sân bay Long Thành đến thị trường bất động sản.", tag: "Hạ tầng" },
          { href: "/tin-tuc/gia-dat-nhon-trach-2026",                       title: "Giá đất Nhơn Trạch 2026 mới nhất",                    description: "Bảng giá và các khu vực tiềm năng tại Nhơn Trạch.", tag: "Thị trường" },
          { href: "/mega-city-2/phap-ly",                                   title: "Pháp lý Mega City 2 – QĐ 1772/QĐ-UBND",               description: "Chi tiết pháp lý và điều kiện giao dịch.", tag: "Pháp lý" },
        ]} />
      </div>
      <CorpFooter />
    </>
  );
}
