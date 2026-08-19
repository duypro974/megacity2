"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS15 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/cau-cat-lai`;
const PUBLISHED     = "19/08/2026";
const PUBLISHED_ISO = "2026-08-19";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cầu Cát Lái 2026: Tiến độ mới nhất và tác động đến bất động sản Nhơn Trạch",
  description: "Cập nhật tiến độ cầu Cát Lái mới nhất năm 2026. Phân tích khả năng kết nối giữa TP. Hồ Chí Minh và Nhơn Trạch cũng như tác động đến thị trường bất động sản.",
  image: [IMG_NEWS15["1"], IMG_NEWS15["2"], IMG_NEWS15["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "cầu Cát Lái, cầu Cát Lái Nhơn Trạch, tiến độ cầu Cát Lái 2026, quy hoạch cầu Cát Lái, bất động sản Nhơn Trạch, Mega City 2",
  about: { "@type": "Place", name: "Nhơn Trạch, Đồng Nai", address: { "@type": "PostalAddress", addressLocality: "Nhơn Trạch", addressRegion: "Đồng Nai", addressCountry: "VN" } },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question", name: "Cầu Cát Lái nằm ở đâu?",
      acceptedAnswer: { "@type": "Answer", text: "Cầu Cát Lái được quy hoạch để kết nối khu vực TP. Thủ Đức (TP. Hồ Chí Minh) với huyện Nhơn Trạch, tỉnh Đồng Nai — thay thế cho tuyến phà Cát Lái hiện hữu." },
    },
    {
      "@type": "Question", name: "Cầu Cát Lái có thay thế phà Cát Lái không?",
      acceptedAnswer: { "@type": "Answer", text: "Dự án cầu Cát Lái được kỳ vọng sẽ thay thế và cải thiện đáng kể khả năng kết nối so với phà Cát Lái hiện tại, rút ngắn thời gian di chuyển từ 25–35 phút xuống còn 10–15 phút." },
    },
    {
      "@type": "Question", name: "Cầu Cát Lái có ảnh hưởng đến bất động sản Nhơn Trạch không?",
      acceptedAnswer: { "@type": "Answer", text: "Có. Khi cầu Cát Lái hoàn thành, Nhơn Trạch sẽ kết nối trực tiếp với TP.HCM chỉ trong 10–15 phút, tạo ra nhu cầu nhà ở ở thực từ người làm việc tại TP.HCM. Đây là yếu tố hạ tầng quan trọng hỗ trợ giá trị BĐS dài hạn." },
    },
    {
      "@type": "Question", name: "Mega City 2 có được hưởng lợi từ cầu Cát Lái không?",
      acceptedAnswer: { "@type": "Answer", text: "Có. Mega City 2 tọa lạc tại Nhơn Trạch, cách bến phà Cát Lái khoảng vài km. Khi cầu hoàn thành, cư dân Mega City 2 có thể đến TP.Thủ Đức, Quận 2 TP.HCM chỉ trong 10–15 phút thay vì 25–35 phút như hiện tại." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Cầu Cát Lái 2026", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS15["1"], alt: "Phối cảnh dự án cầu Cát Lái kết nối TP Hồ Chí Minh và huyện Nhơn Trạch tỉnh Đồng Nai", caption: "Phối cảnh dự án cầu Cát Lái" },
  { src: IMG_NEWS15["2"], alt: "Bản đồ vị trí cầu Cát Lái kết nối TP Thủ Đức với huyện Nhơn Trạch",                    caption: "Vị trí cầu Cát Lái kết nối TP.HCM và Nhơn Trạch" },
  { src: IMG_NEWS15["3"], alt: "Thị trường bất động sản Nhơn Trạch hưởng lợi từ sự phát triển của hạ tầng giao thông",  caption: "BĐS Nhơn Trạch hưởng lợi từ hạ tầng giao thông" },
  { src: IMG_NEWS15["4"], alt: "Phối cảnh dự án Mega City 2 tại huyện Nhơn Trạch tỉnh Đồng Nai",                        caption: "Phối cảnh dự án Mega City 2 Nhơn Trạch" },
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

export default function CauCatLaiPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}
      <CorpHeader solid />

      <div className="bg-white min-h-screen">
        {/* ── Hero ── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a><span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a><span>/</span>
              <span className="text-slate-600 font-medium">Cầu Cát Lái 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Hạ tầng</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 9 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Cầu Cát Lái 2026: Tiến độ mới nhất và tác động đến bất động sản Nhơn Trạch
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Cập nhật tiến độ cầu Cát Lái mới nhất năm 2026. Phân tích khả năng kết nối giữa
              TP. Hồ Chí Minh và Nhơn Trạch cũng như tác động đến thị trường bất động sản.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh cầu Cát Lái"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS15["1"]} alt="Phối cảnh dự án cầu Cát Lái kết nối TP Hồ Chí Minh và huyện Nhơn Trạch tỉnh Đồng Nai"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Phối cảnh dự án cầu Cát Lái kết nối TP. Hồ Chí Minh và huyện Nhơn Trạch, tỉnh Đồng Nai
            </p>
          </div>
        </div>

        {/* ── Main ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#la-gi",       "1. Cầu Cát Lái là gì?"],
                    ["#vi-tri",      "2. Vị trí của cầu Cát Lái"],
                    ["#tien-do",     "3. Tiến độ mới nhất năm 2026"],
                    ["#anh-huong",   "4. Ảnh hưởng đến bất động sản Nhơn Trạch"],
                    ["#mega-city-2", "5. Mega City 2 hưởng lợi như thế nào?"],
                    ["#co-nen",      "6. Có nên đầu tư BĐS Nhơn Trạch 2026?"],
                    ["#faq",         "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Cầu Cát Lái là một trong những dự án hạ tầng nhận được nhiều sự quan tâm trong
                những năm gần đây. Dự án được kỳ vọng tạo ra bước đột phá về giao thông giữa
                TP. Hồ Chí Minh và huyện Nhơn Trạch, tỉnh Đồng Nai.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Không chỉ giúp rút ngắn thời gian di chuyển, dự án còn mở ra nhiều cơ hội phát
                triển cho các khu đô thị, khu công nghiệp và dự án nhà ở tại Nhơn Trạch — đặc
                biệt với những người làm việc tại TP.HCM nhưng muốn sinh sống ở khu vực có chi
                phí thấp hơn với không gian thoáng đãng hơn.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin về tiến độ cầu Cát Lái tổng hợp từ nguồn công
                khai, mang tính tham khảo. Tiến độ thực tế phụ thuộc quyết định của cơ quan có
                thẩm quyền. Phân tích tác động BĐS không phải cam kết tăng giá.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="la-gi">Cầu Cát Lái là gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hiện nay, việc di chuyển từ TP. Hồ Chí Minh sang Nhơn Trạch chủ yếu thông
                    qua phà Cát Lái. Tuy nhiên, sự phát triển nhanh chóng của dân số và nhu cầu
                    giao thương ngày càng tăng đã khiến việc xây dựng một cây cầu thay thế trở
                    thành nhu cầu cần thiết và cấp bách.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cầu Cát Lái được đề xuất nhằm giải quyết triệt để điểm nghẽn giao thông này,
                    với những mục tiêu chính:
                  </p>
                  <BulletList items={[
                    "Giảm áp lực cho hệ thống phà Cát Lái hiện đang quá tải vào giờ cao điểm",
                    "Kết nối trực tiếp TP. Thủ Đức (TP.HCM) với huyện Nhơn Trạch (Đồng Nai)",
                    "Hỗ trợ phát triển kinh tế hai địa phương và toàn vùng kinh tế phía Nam",
                    "Thúc đẩy quá trình đô thị hóa Nhơn Trạch theo định hướng đô thị vệ tinh TP.HCM",
                    "Tăng khả năng kết nối liên vùng trong mạng lưới giao thông Đông Nam Bộ",
                  ]} />

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      ["Loại công trình", "Cầu vượt sông"],
                      ["Kết nối",         "TP.HCM ↔ Nhơn Trạch"],
                      ["Thay thế",        "Phà Cát Lái"],
                      ["Thời gian DK",    "10–15 phút"],
                    ].map(([label, val]) => (
                      <div key={label} className="rounded-2xl bg-primary-50 border border-primary-100 p-4 text-center">
                        <p className="text-sm font-black text-primary-700 mb-1">{val}</p>
                        <p className="text-[11px] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS15["2"]} alt="Bản đồ vị trí cầu Cát Lái kết nối TP Thủ Đức với huyện Nhơn Trạch"
                caption="Bản đồ vị trí cầu Cát Lái kết nối TP. Thủ Đức với huyện Nhơn Trạch"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="vi-tri">Vị trí của cầu Cát Lái</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cầu Cát Lái được quy hoạch để kết nối khu vực TP. Thủ Đức (TP. Hồ Chí Minh)
                    với huyện Nhơn Trạch (Đồng Nai) qua sông Đồng Nai. Đây là vị trí chiến lược
                    vì nhiều lý do:
                  </p>
                  <BulletList items={[
                    "Gần trung tâm TP. Hồ Chí Minh: TP.Thủ Đức là một trong những trung tâm kinh tế, công nghệ lớn nhất",
                    "Gần các khu công nghiệp: hàng nghìn lao động di chuyển qua đây mỗi ngày",
                    "Kết nối với nhiều tuyến giao thông quan trọng: cao tốc TP.HCM – Long Thành, đường 25C",
                    "Tạo điều kiện phát triển đô thị mới: Nhơn Trạch trở thành đô thị vệ tinh thực sự của TP.HCM",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hiện tại phà Cát Lái mất khoảng 25–35 phút. Khi cầu hoàn thành, thời gian
                    di chuyển rút xuống còn 10–15 phút — thay đổi đáng kể đến quyết định sinh
                    sống và làm việc của hàng chục nghìn người.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí Mega City 2 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat">Hạ tầng Nhơn Trạch 2026 →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="tien-do">Tiến độ cầu Cát Lái mới nhất năm 2026</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tiến độ của cầu Cát Lái luôn là chủ đề được nhiều nhà đầu tư quan tâm bởi
                    đây không chỉ là dự án giao thông đơn thuần mà còn là yếu tố có khả năng
                    tác động trực tiếp đến thị trường bất động sản.
                  </p>
                  <H3>Những thông tin nhà đầu tư cần theo dõi</H3>
                  <BulletList items={[
                    "Quy hoạch: dự án nằm trong quy hoạch giao thông vùng và đã được đề xuất từ lâu",
                    "Công tác chuẩn bị: khảo sát, thiết kế kỹ thuật và phương án đầu tư",
                    "Phương án đầu tư: xây dựng bằng vốn ngân sách hay hình thức PPP (đối tác công tư)",
                    "Thời gian triển khai: phụ thuộc vào phê duyệt và bố trí vốn của cơ quan có thẩm quyền",
                    "Giải phóng mặt bằng: một trong những yếu tố quyết định tiến độ thực tế",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhà đầu tư nên thường xuyên cập nhật thông tin từ UBND TP.HCM, UBND tỉnh
                    Đồng Nai và Bộ Giao thông Vận tải để theo dõi những thay đổi mới nhất.
                    Không nên đưa ra quyết định đầu tư chỉ dựa trên kỳ vọng tiến độ hạ tầng.
                  </p>
                  <InfoBox type="warn">
                    <strong>Quan trọng:</strong> Kinh nghiệm từ nhiều dự án hạ tầng cho thấy
                    thời gian triển khai thực tế thường dài hơn dự kiến ban đầu. Nhà đầu tư
                    cần có kế hoạch tài chính dài hạn và không phụ thuộc hoàn toàn vào tiến
                    độ một dự án hạ tầng cụ thể.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS15["3"]} alt="Thị trường bất động sản Nhơn Trạch hưởng lợi từ sự phát triển của hạ tầng giao thông"
                caption="Thị trường bất động sản Nhơn Trạch đang hưởng lợi từ hạ tầng giao thông"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="anh-huong">Cầu Cát Lái ảnh hưởng như thế nào đến bất động sản Nhơn Trạch?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong lĩnh vực bất động sản, hạ tầng giao thông luôn là yếu tố quan trọng
                    quyết định giá trị khu vực. Khi cầu Cát Lái hoàn thành, các tác động có thể
                    diễn ra theo hai giai đoạn:
                  </p>

                  <H3>Trước khi cầu hoàn thành: Tác động kỳ vọng</H3>
                  <BulletList items={[
                    "Tăng sự quan tâm của nhà đầu tư khi tin tức tiến độ được công bố",
                    "Hình thành kỳ vọng tăng giá dài hạn trong tâm lý thị trường",
                    "Xuất hiện nguy cơ đầu cơ và thổi giá trong giai đoạn tin tức sốt nóng",
                  ]} />

                  <H3>Sau khi cầu hoàn thành: Tác động thực tế</H3>
                  <BulletList items={[
                    "Gia tăng nhu cầu nhà ở ở thực từ người làm việc tại TP.HCM",
                    "Thu hút dân cư và chuyên gia đến sinh sống tại Nhơn Trạch nhờ kết nối tốt hơn",
                    "Thu hút doanh nghiệp mở rộng hoạt động, tăng việc làm khu vực",
                    "Thúc đẩy quá trình đô thị hóa và phát triển thương mại dịch vụ bền vững hơn",
                    "Tăng giá trị bất động sản — đặc biệt các khu vực gần bến cầu và đường kết nối",
                  ]} />

                  <InfoBox>
                    Đọc thêm về hệ thống hạ tầng vùng:{" "}
                    <a href="/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat" className="font-bold text-primary-700 underline">
                      Hạ tầng giao thông Nhơn Trạch mới nhất 2026 →
                    </a>
                  </InfoBox>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Mega City 2 hưởng lợi như thế nào từ cầu Cát Lái?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2</a>{" "}
                    là một trong những dự án tại Nhơn Trạch có vị trí được đánh giá là hưởng lợi
                    trực tiếp khi cầu Cát Lái hoàn thành:
                  </p>
                  <BulletList items={[
                    "Khoảng cách đến bến phà Cát Lái: chỉ vài km, rất thuận tiện tiếp cận cầu khi hoàn thành",
                    "Kết nối TP.Thủ Đức và TP.HCM: giảm từ 25–35 phút xuống còn 10–15 phút",
                    "Phù hợp với nhu cầu ở thực: người làm tại TP.HCM có thể sinh sống tại Nhơn Trạch dễ dàng hơn",
                    "Kết hợp với đường 25C: hệ thống kết nối đa chiều — cả phía TP.HCM lẫn sân bay Long Thành",
                    "Pháp lý rõ ràng: QĐ 1772/QĐ-UBND chấp thuận 2.421 lô phân lô bán nền",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tuy nhiên, giá trị thực tế của dự án không chỉ đến từ cầu Cát Lái mà còn
                    từ tổng thể hạ tầng vùng, pháp lý minh bạch và chất lượng quy hoạch nội khu.
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

              <ArticleFigure src={IMG_NEWS15["4"]} alt="Phối cảnh dự án Mega City 2 tại huyện Nhơn Trạch tỉnh Đồng Nai"
                caption="Phối cảnh dự án Mega City 2 Nhơn Trạch"
                images={images} index={3} onOpen={openLightbox} />

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="co-nen">Có nên đầu tư bất động sản Nhơn Trạch trong năm 2026?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không có dự án nào phù hợp với tất cả mọi người. Tuy nhiên, hạ tầng đang là
                    một trong những yếu tố quan trọng tạo nên sức hút của thị trường bất động
                    sản Nhơn Trạch — với nhiều dự án lớn đang triển khai đồng thời.
                  </p>
                  <H3>Yếu tố hỗ trợ dài hạn</H3>
                  <BulletList items={[
                    "Cầu Cát Lái: khi hoàn thành sẽ thay đổi căn bản khả năng kết nối với TP.HCM",
                    "Sân bay Long Thành (~18 km): dự án hàng không quốc gia đang thi công tích cực",
                    "Đường 25C và hệ thống cao tốc vùng: đã và đang được nâng cấp đồng bộ",
                    "Quy hoạch đô thị vệ tinh: Nhơn Trạch được định hướng phát triển theo quy hoạch tỉnh đến 2030",
                  ]} />
                  <H3>Những điều cần đánh giá trước khi đầu tư</H3>
                  <BulletList items={[
                    "Vị trí cụ thể: không phải khu vực nào tại Nhơn Trạch cũng hưởng lợi đồng đều",
                    "Pháp lý: sổ hồng riêng hay đang xử lý — ảnh hưởng quyết định đến thanh khoản",
                    "Thực địa: xem trực tiếp hạ tầng đường, điện, nước và khu vực xung quanh",
                    "Khả năng tài chính: phù hợp với đầu tư dài hạn 3–5 năm",
                    "Không đầu cơ theo kỳ vọng hạ tầng chưa xác định tiến độ",
                  ]} />
                  <InfoBox>
                    Tham khảo hướng dẫn thực tế:{" "}
                    <a href="/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach" className="font-bold text-primary-700 underline">
                      Kinh nghiệm mua đất nền Nhơn Trạch từ A-Z →
                    </a>
                  </InfoBox>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về cầu Cát Lái</SectionHeading>
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
                <p className="text-xs text-slate-500 leading-relaxed">Thông tin trong bài được tổng hợp từ nguồn công khai và mang tính tham khảo. Tiến độ các dự án hạ tầng có thể thay đổi theo quyết định của cơ quan có thẩm quyền. Trước khi đầu tư, cần xác nhận thông tin pháp lý tại cơ quan nhà nước.</p>
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
                      { label: "Đường 25C Nhơn Trạch 2026", href: "/tin-tuc/duong-25c" },
                      { label: "Hạ tầng giao thông Nhơn Trạch", href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat" },
                      { label: "Sân bay Long Thành & BĐS Nhơn Trạch", href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" },
                      { label: "Giá đất Nhơn Trạch 2026", href: "/tin-tuc/gia-dat-nhon-trach-2026" },
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
            <h2 className="text-2xl font-black text-slate-900 mb-3">Tìm hiểu thêm về Mega City 2</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">Dự án khu đô thị tại Nhơn Trạch hưởng lợi từ cầu Cát Lái, đường 25C và sân bay Long Thành.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">Xem dự án →</a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">Gọi 0937.587.438</a>
            </div>
          </div>
        </section>

        <RelatedContent title="Bài viết liên quan" items={[
          { href: "/mega-city-2",                                           title: "Mega City 2 Nhơn Trạch – Tổng quan dự án",            description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá.", tag: "Dự án" },
          { href: "/tin-tuc/duong-25c",                                     title: "Đường 25C Nhơn Trạch: Tiến độ 2026",                  description: "Tuyến đường kết nối trực tiếp Nhơn Trạch với sân bay Long Thành.", tag: "Hạ tầng" },
          { href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat",        title: "Hạ tầng giao thông Nhơn Trạch 2026",                  description: "Sân bay Long Thành, Vành đai 3, cao tốc Bến Lức và các tuyến đường.", tag: "Hạ tầng" },
          { href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach", title: "Sân bay Long Thành & BĐS Nhơn Trạch",                 description: "Tác động của sân bay quốc tế Long Thành đến bất động sản.", tag: "Hạ tầng" },
          { href: "/tin-tuc/gia-dat-nhon-trach-2026",                       title: "Giá đất Nhơn Trạch 2026 mới nhất",                    description: "Bảng giá và các khu vực tiềm năng tại Nhơn Trạch.", tag: "Thị trường" },
          { href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach",            title: "Kinh nghiệm mua đất nền Nhơn Trạch",                  description: "Pháp lý, quy hoạch và những lưu ý quan trọng trước khi đầu tư.", tag: "Kinh nghiệm" },
        ]} />
      </div>
      <CorpFooter />
    </>
  );
}
