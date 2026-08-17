"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS8 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach`;
const PUBLISHED     = "17/08/2026";
const PUBLISHED_ISO = "2026-08-17";

// ─────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sân bay Long Thành ảnh hưởng như thế nào đến bất động sản Nhơn Trạch?",
  description: "Sân bay Long Thành đang tạo ra những tác động đáng kể đến thị trường bất động sản Nhơn Trạch. Cùng tìm hiểu khoảng cách, tiềm năng phát triển và những khu vực được hưởng lợi từ dự án hạ tầng trọng điểm này.",
  image: [IMG_NEWS8["1"], IMG_NEWS8["2"], IMG_NEWS8["3"]],
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
  keywords: "sân bay Long Thành và bất động sản Nhơn Trạch, sân bay Long Thành ảnh hưởng đến Nhơn Trạch, bất động sản Nhơn Trạch, khoảng cách từ Nhơn Trạch đến sân bay Long Thành, giá đất Nhơn Trạch, tiềm năng đầu tư Nhơn Trạch",
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
      name: "Sân bay Long Thành có ảnh hưởng đến bất động sản Nhơn Trạch không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Hạ tầng giao thông lớn như sân bay quốc tế thường tác động trực tiếp đến sự phát triển của thị trường bất động sản khu vực lân cận, tạo ra nhu cầu nhà ở, dịch vụ và thương mại đi kèm. Tuy nhiên, mức độ ảnh hưởng phụ thuộc vào vị trí cụ thể và tiến độ triển khai thực tế.",
      },
    },
    {
      "@type": "Question",
      name: "Khoảng cách từ Nhơn Trạch đến sân bay Long Thành là bao xa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khoảng cách tùy theo từng khu vực tại Nhơn Trạch và tuyến đường di chuyển, ước tính 15–25 km. Các tuyến cao tốc và đường kết nối đang được hoàn thiện giúp rút ngắn thời gian di chuyển thực tế.",
      },
    },
    {
      "@type": "Question",
      name: "Giá đất Nhơn Trạch có tăng nhờ sân bay Long Thành không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giá bất động sản phụ thuộc vào nhiều yếu tố như vị trí, pháp lý, quy hoạch và nhu cầu thị trường. Sân bay Long Thành là yếu tố hạ tầng quan trọng có thể tác động tích cực trong dài hạn, nhưng không phải đảm bảo tăng giá đối với mọi khu vực.",
      },
    },
    {
      "@type": "Question",
      name: "Có nên đầu tư bất động sản Nhơn Trạch vào thời điểm hiện tại không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà đầu tư nên đánh giá kỹ tình hình thị trường, quy hoạch, pháp lý và khả năng tài chính trước khi đưa ra quyết định. Nhơn Trạch có nhiều yếu tố hỗ trợ dài hạn, nhưng mỗi quyết định cần dựa trên mục tiêu và khả năng cá nhân.",
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
    { "@type": "ListItem", position: 3, name: "Sân bay Long Thành và bất động sản Nhơn Trạch", item: PAGE_URL },
  ],
};

// ─────────────────────────────────────────────────────────────
// Lightbox images
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS8["1"], alt: "Phối cảnh sân bay quốc tế Long Thành tại Đồng Nai",             caption: "Phối cảnh sân bay quốc tế Long Thành tại Đồng Nai" },
  { src: IMG_NEWS8["2"], alt: "Bản đồ kết nối giữa Nhơn Trạch và sân bay Long Thành",          caption: "Kết nối giao thông giữa Nhơn Trạch và sân bay Long Thành" },
  { src: IMG_NEWS8["3"], alt: "Hệ thống giao thông kết nối từ Nhơn Trạch đến sân bay Long Thành", caption: "Hệ thống giao thông kết nối khu vực" },
  { src: IMG_NEWS8["4"], alt: "Toàn cảnh dự án Mega City 2 Nhơn Trạch",                        caption: "Toàn cảnh dự án Mega City 2 Nhơn Trạch" },
  { src: IMG_NEWS8["5"], alt: "Hệ thống tiện ích tại dự án Mega City 2 Đồng Nai",              caption: "Hệ thống tiện ích tại dự án Mega City 2" },
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
    <a href={href} className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200
               text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function SanBayLongThanhVaBDSNhonTrachPage() {
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
              <span className="text-slate-600 font-medium">Sân bay Long Thành và BĐS Nhơn Trạch</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Thị trường</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 10 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Sân bay Long Thành ảnh hưởng như thế nào đến bất động sản Nhơn Trạch?
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Sân bay Long Thành đang tạo ra những tác động đáng kể đến thị trường bất động
              sản Nhơn Trạch. Cùng tìm hiểu khoảng cách, tiềm năng phát triển và những khu
              vực được hưởng lợi từ dự án hạ tầng trọng điểm này.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh sân bay Long Thành"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS8["1"]} alt="Phối cảnh sân bay quốc tế Long Thành tại Đồng Nai"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Phối cảnh sân bay quốc tế Long Thành tại huyện Long Thành, tỉnh Đồng Nai
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
                    ["#tong-quan",     "1. Tổng quan về sân bay Long Thành"],
                    ["#khoang-cach",   "2. Khoảng cách từ Nhơn Trạch đến sân bay Long Thành"],
                    ["#anh-huong-gia", "3. Sân bay Long Thành ảnh hưởng đến giá đất Nhơn Trạch"],
                    ["#khu-vuc",       "4. Những khu vực tại Nhơn Trạch được hưởng lợi"],
                    ["#tiem-nang",     "5. Tiềm năng đầu tư bất động sản Nhơn Trạch"],
                    ["#mega-city-2",   "6. Mega City 2 và lợi thế từ sân bay Long Thành"],
                    ["#faq",           "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Sân bay Long Thành được xem là một trong những dự án hạ tầng trọng điểm của khu vực
                phía Nam. Không chỉ tạo động lực phát triển cho ngành giao thông, dự án này còn tác
                động trực tiếp đến thị trường bất động sản tại nhiều địa phương lân cận, đặc biệt là
                Nhơn Trạch.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Trong những năm gần đây, Nhơn Trạch liên tục thu hút sự quan tâm của nhiều nhà đầu
                tư nhờ vị trí chiến lược, hệ thống giao thông đang được hoàn thiện và khả năng kết
                nối ngày càng thuận tiện với TP. Hồ Chí Minh và các tỉnh lân cận.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Vậy sân bay Long Thành ảnh hưởng như thế nào đến bất động sản Nhơn Trạch? Đây có
                phải là thời điểm phù hợp để đầu tư hay không? Hãy cùng tìm hiểu chi tiết.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin trong bài được tổng hợp từ nguồn công khai và mang
                tính tham khảo. Giá trị bất động sản thực tế phụ thuộc vào nhiều yếu tố. Trước khi
                ra quyết định đầu tư, cần xác nhận pháp lý và thông tin cụ thể từng sản phẩm.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">Tổng quan về sân bay Long Thành</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sân bay Long Thành được quy hoạch tại huyện Long Thành, tỉnh Đồng Nai và được
                    định hướng trở thành một trong những trung tâm hàng không lớn nhất của Việt Nam,
                    đóng vai trò cửa ngõ hàng không quốc tế quan trọng cho toàn vùng kinh tế phía Nam.
                  </p>

                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm my-6">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-600 text-white">
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide w-44">Thông tin</th>
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Chi tiết</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Tên dự án",         "Sân bay quốc tế Long Thành"],
                          ["Vị trí",            "Huyện Long Thành, Đồng Nai"],
                          ["Quy mô",            "Khoảng 5.000 ha"],
                          ["Công suất dự kiến", "100 triệu hành khách/năm (đầy đủ các giai đoạn)"],
                          ["Vai trò",           "Trung tâm hàng không quốc tế"],
                          ["Khu vực hưởng lợi", "Long Thành, Nhơn Trạch, Biên Hòa và TP. Hồ Chí Minh"],
                        ].map(([label, value], i) => (
                          <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-5 py-3.5 font-semibold text-slate-700">{label}</td>
                            <td className="px-5 py-3.5 text-slate-600">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Việc phát triển sân bay không chỉ tạo ra sự thay đổi về giao thông mà còn thúc
                    đẩy sự phát triển của nhiều ngành kinh tế như thương mại, dịch vụ, logistics
                    và bất động sản. Kinh nghiệm từ nhiều quốc gia cho thấy khu vực lân cận các
                    sân bay quốc tế lớn thường trải qua làn sóng phát triển đô thị mạnh mẽ trong
                    vòng 5–10 năm sau khi sân bay đi vào hoạt động chính thức.
                  </p>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS8["2"]} alt="Bản đồ kết nối giữa Nhơn Trạch và sân bay Long Thành"
                caption="Bản đồ kết nối giao thông giữa Nhơn Trạch và sân bay Long Thành"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="khoang-cach">Khoảng cách từ Nhơn Trạch đến sân bay Long Thành</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch sở hữu vị trí khá thuận lợi khi nằm gần sân bay Long Thành, với
                    khoảng cách ước tính 15–25 km tùy từng khu vực trong huyện. Nhờ hệ thống hạ
                    tầng đang được đầu tư mạnh, việc di chuyển giữa hai khu vực ngày càng thuận
                    tiện và rút ngắn thời gian đáng kể.
                  </p>

                  <H3>Các tuyến giao thông kết nối chính</H3>
                  <BulletList items={[
                    "Cao tốc TP. Hồ Chí Minh – Long Thành – Dầu Giây: trục xương sống kết nối toàn vùng",
                    "Vành đai 3 TP. Hồ Chí Minh: tuyến vành đai quan trọng đang triển khai",
                    "Cao tốc Bến Lức – Long Thành: mở rộng khả năng kết nối phía Tây",
                    "Cao tốc Biên Hòa – Vũng Tàu: kết nối vùng kinh tế Đông Nam Bộ",
                    "Đường 25C và các tuyến nội tỉnh Đồng Nai: trục kết nối huyết mạch nội vùng",
                  ]} />

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Chính lợi thế về khoảng cách và hệ thống kết nối đang được hoàn thiện đã giúp
                    Nhơn Trạch trở thành một trong những khu vực nhận được nhiều sự quan tâm của
                    các nhà đầu tư bất động sản trong thời gian gần đây.
                  </p>

                  <InfoBox>
                    Xem thêm vị trí cụ thể dự án Mega City 2 và khoảng cách đến sân bay Long Thành:{" "}
                    <a href="/mega-city-2/vi-tri" className="font-bold text-primary-700 underline">
                      Vị trí Mega City 2 Nhơn Trạch →
                    </a>
                  </InfoBox>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Mega City 2 Nhơn Trạch →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí dự án →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS8["3"]} alt="Hệ thống giao thông kết nối từ Nhơn Trạch đến sân bay Long Thành"
                caption="Hệ thống giao thông kết nối khu vực Nhơn Trạch – Long Thành"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="anh-huong-gia">Sân bay Long Thành ảnh hưởng đến giá đất Nhơn Trạch như thế nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong lĩnh vực bất động sản, hạ tầng luôn là yếu tố có tác động rất lớn đến
                    giá trị tài sản. Sự xuất hiện của sân bay Long Thành có thể tạo ra nhiều thay
                    đổi đối với thị trường bất động sản Nhơn Trạch thông qua các cơ chế sau:
                  </p>

                  <H3>1. Tăng khả năng kết nối</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khả năng kết nối tốt hơn giúp rút ngắn thời gian di chuyển giữa Nhơn Trạch
                    với TP. Hồ Chí Minh và các tỉnh lân cận. Khoảng cách di chuyển thực tế đến
                    trung tâm công ăn việc làm và dịch vụ là yếu tố cốt lõi tạo nên giá trị
                    của bất động sản — đặc biệt với nhu cầu ở thực.
                  </p>

                  <H3>2. Thu hút dân cư và chuyên gia</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một sân bay quốc tế quy mô lớn kéo theo sự phát triển đồng bộ của nhiều
                    ngành xung quanh, làm gia tăng nhu cầu nhà ở trong khu vực:
                  </p>
                  <BulletList items={[
                    "Dịch vụ hàng không và logistics",
                    "Thương mại, bán lẻ và dịch vụ ăn uống phục vụ hành khách",
                    "Khu công nghiệp và kho vận liên quan đến vận tải hàng không",
                    "Nhu cầu nhà ở của cán bộ, nhân viên và chuyên gia khu vực",
                    "Dịch vụ lưu trú, khách sạn phục vụ khách quá cảnh",
                  ]} />

                  <H3>3. Gia tăng giá trị bất động sản trong dài hạn</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Những khu vực có hạ tầng phát triển thường nhận được nhiều sự quan tâm hơn
                    từ thị trường. Tuy nhiên, giá trị bất động sản còn phụ thuộc vào nhiều yếu
                    tố khác ngoài hạ tầng:
                  </p>
                  <BulletList items={[
                    "Quy hoạch và định hướng phát triển của địa phương",
                    "Tính pháp lý rõ ràng của từng lô, từng dự án",
                    "Vị trí cụ thể trong khu vực — không phải đất nào cũng hưởng lợi như nhau",
                    "Hệ thống tiện ích trong bán kính sử dụng hàng ngày",
                    "Tiến độ triển khai thực tế của các dự án hạ tầng",
                  ]} />

                  <InfoBox type="warn">
                    <strong>Lưu ý quan trọng:</strong> Sân bay Long Thành là tín hiệu dài hạn.
                    Giá trị bất động sản thực tế không đồng đều giữa các khu vực và phụ thuộc
                    vào nhiều yếu tố. Nhà đầu tư cần đánh giá kỹ pháp lý và vị trí cụ thể
                    trước khi quyết định, không nên đầu cơ theo tin đồn hạ tầng.
                  </InfoBox>

                  <InfoBox>
                    Đọc thêm phân tích giá đất khu vực:{" "}
                    <a href="/tin-tuc/gia-dat-nhon-trach-2026" className="font-bold text-primary-700 underline">
                      Giá đất Nhơn Trạch 2026: Thị trường đang diễn biến như thế nào? →
                    </a>
                  </InfoBox>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="khu-vuc">Những khu vực tại Nhơn Trạch được hưởng lợi từ sân bay Long Thành</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không phải tất cả khu vực đều nhận được tác động giống nhau. Mức độ hưởng lợi
                    phụ thuộc vào vị trí, khả năng kết nối và chất lượng quy hoạch của từng khu
                    vực cụ thể. Một số tiêu chí xác định khu vực có nhiều lợi thế:
                  </p>
                  <BulletList items={[
                    "Nằm gần các tuyến giao thông lớn kết nối trực tiếp đến sân bay (đường 25C, cao tốc TP.HCM – Long Thành)",
                    "Được quy hoạch bài bản với quy hoạch chi tiết 1/500 đã phê duyệt",
                    "Có hạ tầng nội khu hoàn thiện: đường nhựa, điện, nước, cây xanh đồng bộ",
                    "Pháp lý rõ ràng với sổ hồng từng lô hoặc đủ điều kiện giao dịch",
                    "Có hệ thống tiện ích đi kèm trong quy hoạch: trường học, y tế, thương mại",
                  ]} />

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đặc biệt, các khu vực dọc đường 25C — trục kết nối trực tiếp từ Nhơn Trạch
                    đến Long Thành và sân bay — thường được đánh giá cao hơn về khả năng kết nối
                    và tiềm năng phát triển thương mại.
                  </p>

                  <H3>Tiêu chí đánh giá khi lựa chọn bất động sản</H3>
                  <BulletList items={[
                    "Khoảng cách thực tế đến sân bay và thời gian di chuyển theo tuyến đường hiện có",
                    "Loại đường tiếp cận: đường nhựa đủ rộng hay đường đất, đường nội bộ",
                    "Hướng quy hoạch: đất ở hay còn là đất nông nghiệp chưa chuyển đổi",
                    "Tiện ích xung quanh trong bán kính 3–5 km: trường, chợ, bệnh viện",
                    "Mật độ dân cư thực tế: khu vực đã có người ở hay còn thưa thớt",
                  ]} />

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2/tien-ich">Tiện ích Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý dự án →</LinkBtn>
                    <LinkBtn href="/mega-city-2/tien-do">Tiến độ xây dựng →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS8["4"]} alt="Toàn cảnh dự án Mega City 2 Nhơn Trạch"
                caption="Toàn cảnh dự án Mega City 2 Nhơn Trạch — nằm trên đường 25C kết nối sân bay Long Thành"
                images={images} index={3} onOpen={openLightbox} />

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="tiem-nang">Tiềm năng đầu tư bất động sản Nhơn Trạch trong tương lai</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch đang trở thành một trong những thị trường bất động sản được nhiều
                    nhà đầu tư quan tâm nhờ sự hội tụ của nhiều yếu tố hỗ trợ dài hạn:
                  </p>
                  <BulletList items={[
                    "Hạ tầng giao thông phát triển đồng bộ với nhiều tuyến cao tốc đang triển khai",
                    "Vị trí tiếp giáp trực tiếp TP. Hồ Chí Minh qua sông Đồng Nai",
                    "Sân bay Long Thành là dự án hạ tầng trọng điểm quốc gia đang thi công",
                    "Sự phát triển mạnh của 6 khu công nghiệp Nhơn Trạch với hàng chục nghìn lao động",
                    "Quy hoạch đô thị ngày càng hoàn thiện với nhiều dự án khu dân cư quy mô",
                    "Mức giá còn thấp hơn nhiều so với các khu vực tương đương tại TP.HCM",
                  ]} />

                  <H3>Những yếu tố cần cân nhắc trước khi đầu tư</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dù tiềm năng dài hạn của Nhơn Trạch là rõ ràng, nhà đầu tư vẫn cần cân nhắc
                    kỹ trước khi đưa ra quyết định:
                  </p>
                  <BulletList items={[
                    "Khả năng tài chính và kế hoạch dòng tiền dài hạn — bất động sản thường cần nắm giữ 3–5 năm",
                    "Mục tiêu đầu tư: ở thực, cho thuê hay đầu tư dài hạn chờ tăng giá",
                    "Pháp lý dự án: sổ hồng riêng hay đang xử lý, điều kiện xây dựng",
                    "Quy hoạch khu vực cụ thể của lô đất — không phải đất nào cũng được xây dựng",
                    "Tính thanh khoản thực tế của thị trường trong khu vực",
                    "Tiến độ hoàn thiện hạ tầng và tiện ích xung quanh trong 2–3 năm tới",
                  ]} />

                  <InfoBox type="warn">
                    <strong>Khuyến nghị:</strong> Nhà đầu tư nên đánh giá kỹ tình hình thị trường
                    thực tế, xác nhận pháp lý từng sản phẩm và tham khảo nhiều nguồn thông tin
                    trước khi đưa ra quyết định. Tránh đầu cơ theo làn sóng tin tức hạ tầng mà
                    chưa xác nhận tiến độ thực tế.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/gia-dat-nhon-trach-2026">Giá đất Nhơn Trạch 2026 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat">Quy hoạch Nhơn Trạch mới nhất →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS8["5"]} alt="Hệ thống tiện ích tại dự án Mega City 2 Đồng Nai"
                caption="Hệ thống tiện ích đồng bộ tại dự án Mega City 2, Nhơn Trạch"
                images={images} index={4} onOpen={openLightbox} />

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Mega City 2 và lợi thế từ sân bay Long Thành</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong bức tranh bất động sản Nhơn Trạch, dự án{" "}
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2</a>{" "}
                    nổi bật như một trong những khu dân cư có nền tảng quy hoạch và pháp lý được
                    công bố rõ ràng nhất khu vực, đồng thời sở hữu vị trí có lợi thế kết nối
                    trực tiếp với sân bay Long Thành.
                  </p>

                  <H3>Vị trí ngay trên đường 25C</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 tọa lạc trực tiếp trên đường 25C — trục giao thông huyết mạch
                    kết nối Nhơn Trạch với Long Thành và khu vực sân bay. Vị trí này mang lại:
                  </p>
                  <BulletList items={[
                    "Kết nối trực tiếp đến sân bay Long Thành (~18 km) qua đường 25C",
                    "Kết nối TP. Hồ Chí Minh qua phà Cát Lái (và cầu Cát Lái khi hoàn thành)",
                    "Tiếp cận cao tốc TP.HCM – Long Thành – Dầu Giây và Vành đai 3 đang xây dựng",
                    "Mặt tiền đường lớn có giá trị thương mại và dịch vụ",
                  ]} />

                  <H3>Quy hoạch và pháp lý đã rõ ràng</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dự án Mega City 2 (~83,94 ha, xã Nhơn Trạch) đã có quy hoạch chi tiết
                    1/500 được phê duyệt và UBND tỉnh Đồng Nai ban hành Quyết định 1772/QĐ-UBND
                    chấp thuận 2.421 lô đủ điều kiện phân lô bán nền — đây là căn cứ pháp lý
                    quan trọng mà nhiều khu đất tại Nhơn Trạch chưa có được.
                  </p>

                  <H3>Những điểm cần xác nhận trước khi giao dịch</H3>
                  <BulletList items={[
                    "Tình trạng pháp lý cụ thể của từng lô — xem chi tiết tại trang pháp lý dự án",
                    "Điều kiện xây dựng theo QĐ 1772 (một số lô cần hoàn thành nhà trước 31/12/2029)",
                    "Hiện trạng hạ tầng thực tế — nên tham quan trực tiếp trước khi quyết định",
                    "Giá chuyển nhượng thực tế tại thời điểm giao dịch (giá thị trường thay đổi theo thời gian)",
                  ]} />

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Tổng quan Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý dự án →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí & Kết nối vùng →</LinkBtn>
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về sân bay Long Thành và bất động sản Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-3">
                  {[
                    {
                      q: "Sân bay Long Thành có ảnh hưởng đến bất động sản Nhơn Trạch không?",
                      a: "Có. Hạ tầng giao thông lớn như sân bay quốc tế thường tác động trực tiếp đến sự phát triển của thị trường bất động sản khu vực lân cận. Tuy nhiên, mức độ ảnh hưởng phụ thuộc vào vị trí cụ thể, tiến độ triển khai và nhiều yếu tố thị trường khác.",
                    },
                    {
                      q: "Khoảng cách từ Nhơn Trạch đến sân bay Long Thành là bao xa?",
                      a: "Khoảng cách tùy theo từng khu vực tại Nhơn Trạch và tuyến đường di chuyển, ước tính 15–25 km. Các tuyến cao tốc và đường kết nối đang được hoàn thiện giúp rút ngắn thời gian di chuyển thực tế xuống còn 20–30 phút.",
                    },
                    {
                      q: "Giá đất Nhơn Trạch có tăng nhờ sân bay Long Thành không?",
                      a: "Giá bất động sản phụ thuộc vào nhiều yếu tố như vị trí, pháp lý, quy hoạch và nhu cầu thị trường. Sân bay Long Thành là yếu tố hạ tầng quan trọng có thể tác động tích cực trong dài hạn, nhưng không đảm bảo tăng giá đồng đều cho mọi khu vực.",
                    },
                    {
                      q: "Có nên đầu tư bất động sản Nhơn Trạch vào thời điểm hiện tại không?",
                      a: "Nhà đầu tư nên đánh giá kỹ tình hình thị trường, quy hoạch, pháp lý và khả năng tài chính trước khi đưa ra quyết định. Nhơn Trạch có nhiều yếu tố hỗ trợ dài hạn, nhưng mỗi quyết định cần dựa trên mục tiêu và điều kiện cá nhân.",
                    },
                    {
                      q: "Mega City 2 có lợi thế gì từ sân bay Long Thành?",
                      a: "Mega City 2 nằm trên đường 25C — trục kết nối trực tiếp đến Long Thành (~18 km) và sân bay. Dự án có quy hoạch 1/500 và QĐ 1772/QĐ-UBND chấp thuận phân lô bán nền. Đây là lợi thế về vị trí và pháp lý so với nhiều bất động sản khác trong khu vực.",
                    },
                  ].map(({ q, a }) => (
                    <details key={q} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary-200 transition-colors">
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-primary-700 select-none">
                        <span className="leading-snug">{q}</span>
                        <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-primary-600 transition-transform group-open:rotate-180 text-xs">▼</span>
                      </summary>
                      <div className="px-6 pb-5 border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-[16px] leading-relaxed">{a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài viết được tổng hợp từ nguồn công khai và mang tính tham khảo.
                  Giá trị bất động sản có thể thay đổi theo thời gian và điều kiện thị trường.
                  Trước khi ra quyết định đầu tư, cần xác nhận pháp lý và thông tin cụ thể tại
                  cơ quan nhà nước có thẩm quyền.
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
                      { href: "/mega-city-2",              label: "Tổng quan dự án" },
                      { href: "/mega-city-2/vi-tri",        label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",       label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",       label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia",      label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",      label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/mat-bang",      label: "Mặt bằng sản phẩm" },
                      { href: "/mega-city-2/hinh-anh",      label: "Hình ảnh thực tế" },
                      { href: "/mega-city-2/faq",           label: "FAQ dự án" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600
                                   hover:text-primary-600 hover:translate-x-1 transition-all px-3 py-2
                                   rounded-xl hover:bg-white">
                        <span>{l.label}</span>
                        <span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    <a href="/tin-tuc/gia-dat-nhon-trach-2026"
                      className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                      → Giá đất Nhơn Trạch 2026
                    </a>
                    <a href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat"
                      className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                      → Quy hoạch Nhơn Trạch mới nhất
                    </a>
                    <a href="/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach"
                      className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                      → Có nên đầu tư Mega City 2?
                    </a>
                  </div>
                </div>
                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn miễn phí</p>
                  <p className="text-primary-200 text-xs mb-4">Nhận thông tin pháp lý và bảng giá Mega City 2.</p>
                  <a href="tel:0937587438"
                    className="block text-center bg-white text-primary-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-colors">
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
            <h2 className="text-2xl font-black text-slate-900 mb-3">Tìm hiểu thêm về Mega City 2</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Xem thông tin về vị trí, pháp lý, quy hoạch và bảng giá dự án Mega City 2
              tại xã Nhơn Trạch, tỉnh Đồng Nai — nằm trên trục đường 25C kết nối sân bay Long Thành.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700
                           text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">
                Khám phá dự án →
              </a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600
                           text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            { href: "/mega-city-2",                           title: "Mega City 2 Nhơn Trạch – Tổng quan dự án",           description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá dự án.", tag: "Dự án" },
            { href: "/mega-city-2/vi-tri",                    title: "Vị trí Mega City 2 & Kết nối vùng",                  description: "Phân tích vị trí chiến lược tại Nhơn Trạch: đường 25C, sân bay Long Thành.", tag: "Vị trí" },
            { href: "/tin-tuc/gia-dat-nhon-trach-2026",       title: "Giá đất Nhơn Trạch 2026 mới nhất",                   description: "Bảng giá, thị trường và phân tích các khu vực tiềm năng tại Nhơn Trạch.", tag: "Thị trường" },
            { href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat", title: "Quy hoạch Nhơn Trạch mới nhất 2026",                 description: "Cập nhật quy hoạch phát triển đô thị và tác động đến BĐS Nhơn Trạch.", tag: "Quy hoạch" },
            { href: "/mega-city-2/phap-ly",                   title: "Pháp lý Mega City 2 – QĐ 1772/QĐ-UBND",              description: "Chi tiết pháp lý và điều kiện giao dịch tại Mega City 2.", tag: "Pháp lý" },
            { href: "/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach", title: "Có nên đầu tư Mega City 2 Nhơn Trạch?",      description: "Phân tích tiềm năng đầu tư Mega City 2 dựa trên vị trí, pháp lý và hạ tầng.", tag: "Phân tích" },
          ]}
        />
      </div>

      <CorpFooter />
    </>
  );
}
