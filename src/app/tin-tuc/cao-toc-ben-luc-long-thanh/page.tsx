"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS17 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/cao-toc-ben-luc-long-thanh`;
const PUBLISHED     = "20/08/2026";
const PUBLISHED_ISO = "2026-08-20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cao tốc Bến Lức - Long Thành 2026: Tiến độ và tác động đến bất động sản Nhơn Trạch",
  description: "Cập nhật tiến độ cao tốc Bến Lức - Long Thành năm 2026, khả năng kết nối Nhơn Trạch với TP.HCM, Long Thành và các khu vực kinh tế phía Nam.",
  image: [IMG_NEWS17["1"], IMG_NEWS17["2"], IMG_NEWS17["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "cao tốc bến lức long thành, tiến độ cao tốc bến lức long thành, cao tốc bến lức long thành nhơn trạch, hạ tầng nhơn trạch, bất động sản nhơn trạch, mega city 2 nhơn trạch",
  about: {
    "@type": "Place", name: "Nhơn Trạch, Đồng Nai",
    address: { "@type": "PostalAddress", addressLocality: "Nhơn Trạch", addressRegion: "Đồng Nai", addressCountry: "VN" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question", name: "Cao tốc Bến Lức - Long Thành dài bao nhiêu km?",
      acceptedAnswer: { "@type": "Answer", text: "Tuyến cao tốc có chiều dài khoảng 58 km, đi qua địa bàn Long An, TP.HCM và Đồng Nai, kết nối khu vực phía Tây TP.HCM với phía Đông Nam Bộ." },
    },
    {
      "@type": "Question", name: "Cao tốc Bến Lức - Long Thành đi qua những địa phương nào?",
      acceptedAnswer: { "@type": "Answer", text: "Tuyến đường đi qua Long An, TP.HCM và Đồng Nai. Tại Đồng Nai, tuyến đi qua khu vực Long Thành và Nhơn Trạch." },
    },
    {
      "@type": "Question", name: "Cao tốc Bến Lức - Long Thành có đi qua Nhơn Trạch không?",
      acceptedAnswer: { "@type": "Answer", text: "Có. Tuyến cao tốc đi qua khu vực Nhơn Trạch và Long Thành của Đồng Nai, tạo thêm một hành lang giao thông kết nối quan trọng cho khu vực." },
    },
    {
      "@type": "Question", name: "Khi nào cao tốc Bến Lức - Long Thành hoàn thành?",
      acceptedAnswer: { "@type": "Answer", text: "Theo kế hoạch được công bố trong năm 2026, dự án hướng tới hoàn thành trong quý III/2026. Gói thầu cuối liên quan đến cầu Phước Khánh dự kiến hoàn thành vào tháng 7/2026. Tiến độ thực tế phụ thuộc vào quyết định của cơ quan có thẩm quyền." },
    },
    {
      "@type": "Question", name: "Cao tốc Bến Lức - Long Thành có ảnh hưởng đến bất động sản Nhơn Trạch không?",
      acceptedAnswer: { "@type": "Answer", text: "Tuyến cao tốc có thể cải thiện khả năng kết nối của Nhơn Trạch. Tuy nhiên, tác động đến giá bất động sản còn phụ thuộc vào nhiều yếu tố như vị trí, pháp lý, quy hoạch, nguồn cung và nhu cầu thị trường." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Cao tốc Bến Lức - Long Thành 2026", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS17["1"], alt: "Cao tốc Bến Lức Long Thành kết nối khu vực Nhơn Trạch Đồng Nai",         caption: "Cao tốc Bến Lức - Long Thành kết nối khu vực Nhơn Trạch Đồng Nai" },
  { src: IMG_NEWS17["2"], alt: "Bản đồ tuyến cao tốc Bến Lức Long Thành qua TP.HCM và Đồng Nai",         caption: "Bản đồ tuyến cao tốc Bến Lức - Long Thành qua TP.HCM và Đồng Nai" },
  { src: IMG_NEWS17["3"], alt: "Tiến độ thi công cao tốc Bến Lức Long Thành cập nhật năm 2026",           caption: "Tiến độ thi công cao tốc Bến Lức - Long Thành cập nhật năm 2026" },
  { src: IMG_NEWS17["4"], alt: "Cao tốc Bến Lức Long Thành kết nối Nhơn Trạch với sân bay Long Thành",   caption: "Cao tốc Bến Lức - Long Thành kết nối Nhơn Trạch với sân bay Long Thành" },
  { src: IMG_NEWS17["5"], alt: "Mega City 2 Nhơn Trạch trong khu vực phát triển hạ tầng giao thông",     caption: "Dự án Mega City 2 Nhơn Trạch trong khu vực phát triển hạ tầng đồng bộ" },
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

export default function CaoTocBenLucLongThanhPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}
      <CorpHeader solid />

      <div className="bg-white min-h-screen">
        {/* Hero header */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a><span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a><span>/</span>
              <span className="text-slate-600 font-medium">Cao tốc Bến Lức - Long Thành 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Hạ tầng</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 10 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Cao tốc Bến Lức - Long Thành 2026: Tiến độ và tác động đến bất động sản Nhơn Trạch
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Cập nhật tiến độ cao tốc Bến Lức - Long Thành năm 2026, khả năng kết nối Nhơn Trạch
              với TP.HCM, Long Thành và các khu vực kinh tế phía Nam.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh cao tốc Bến Lức - Long Thành"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS17["1"]} alt="Cao tốc Bến Lức Long Thành kết nối khu vực Nhơn Trạch Đồng Nai"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Cao tốc Bến Lức - Long Thành là một trong những tuyến giao thông liên vùng quan trọng tại khu vực phía Nam
            </p>
          </div>
        </div>

        {/* Main layout */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#la-gi",       "1. Cao tốc Bến Lức - Long Thành là gì?"],
                    ["#di-qua",      "2. Tuyến cao tốc đi qua những đâu?"],
                    ["#ket-noi",     "3. Kết nối Nhơn Trạch như thế nào?"],
                    ["#tien-do",     "4. Tiến độ mới nhất năm 2026"],
                    ["#phuoc-khanh", "5. Cầu Phước Khánh có vai trò gì?"],
                    ["#san-bay",     "6. Kết nối với sân bay Long Thành"],
                    ["#bds",         "7. Tác động đến bất động sản Nhơn Trạch"],
                    ["#mega-city-2", "8. Mega City 2 có hưởng lợi không?"],
                    ["#faq",         "9. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Cao tốc Bến Lức - Long Thành là một trong những tuyến giao thông quan trọng kết
                nối khu vực phía Tây và phía Đông Nam Bộ, đi qua địa bàn TP.HCM, Long An và
                Đồng Nai.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Đối với Nhơn Trạch, tuyến cao tốc có ý nghĩa đặc biệt khi tạo thêm một hướng
                kết nối với mạng lưới giao thông liên vùng, đồng thời hỗ trợ kết nối khu vực
                với Long Thành, sân bay Long Thành và các trung tâm kinh tế lớn.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Trong bối cảnh hàng loạt dự án hạ tầng đang được triển khai tại Đồng Nai, cao
                tốc Bến Lức - Long Thành được kỳ vọng sẽ góp phần nâng cao khả năng kết nối
                của Nhơn Trạch và tạo thêm động lực cho quá trình phát triển đô thị.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin tiến độ tổng hợp từ nguồn công khai và mang
                tính tham khảo. Tiến độ thực tế phụ thuộc quyết định của cơ quan có thẩm quyền.
                Phân tích tác động BĐS không phải cam kết tăng giá.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="la-gi">Cao tốc Bến Lức - Long Thành là gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cao tốc Bến Lức - Long Thành là tuyến đường cao tốc có vai trò kết nối khu vực
                    phía Tây của TP.HCM với khu vực phía Đông Nam Bộ. Tuyến đường có chiều dài
                    khoảng 58 km và đi qua địa bàn TP.HCM, Long An và Đồng Nai.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một trong những điểm đáng chú ý của tuyến cao tốc là khả năng kết nối với
                    nhiều tuyến giao thông quan trọng trong khu vực, từ đó hình thành mạng lưới
                    giao thông liên vùng thuận lợi hơn cho cả hành khách lẫn hàng hóa.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      ["Chiều dài",   "~58 km"],
                      ["Qua 3 tỉnh",  "Long An, TP.HCM, Đồng Nai"],
                      ["Loại đường",  "Cao tốc liên vùng"],
                      ["Mục tiêu",    "Quý III/2026"],
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
                <SectionHeading id="di-qua">Tuyến cao tốc Bến Lức - Long Thành đi qua những đâu?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cao tốc Bến Lức - Long Thành tạo thành trục kết nối giữa khu vực phía Tây
                    TP.HCM với khu vực phía Đông Nam Bộ. Tuyến đường đi qua:
                  </p>
                  <BulletList items={[
                    "Long An: điểm đầu tuyến tại Bến Lức, kết nối với miền Tây Nam Bộ",
                    "TP. Hồ Chí Minh: đi qua khu vực phía Nam và Đông Nam thành phố",
                    "Đồng Nai: đi qua khu vực Long Thành và Nhơn Trạch — điểm cuối tuyến",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tại Đồng Nai, tuyến cao tốc đi qua khu vực Long Thành và Nhơn Trạch, tạo
                    thêm một hành lang giao thông quan trọng bên cạnh các tuyến đường hiện hữu
                    và những dự án hạ tầng đang được triển khai đồng thời trong khu vực.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí Mega City 2 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/vanh-dai-3">Vành đai 3 TP.HCM →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS17["2"]} alt="Bản đồ tuyến cao tốc Bến Lức Long Thành qua TP.HCM và Đồng Nai"
                caption="Bản đồ tuyến cao tốc Bến Lức - Long Thành qua TP.HCM và Đồng Nai"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="ket-noi">Cao tốc Bến Lức - Long Thành kết nối Nhơn Trạch như thế nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch nằm ở vị trí đặc biệt trong mạng lưới giao thông phía Đông Nam
                    TP.HCM — vừa gần TP.HCM, vừa gần Long Thành và sân bay Long Thành. Khi cao
                    tốc Bến Lức - Long Thành hoàn thiện toàn tuyến, khả năng kết nối của Nhơn
                    Trạch với các khu vực phía Tây TP.HCM và Long An sẽ được cải thiện đáng kể.
                  </p>
                  <H3>Lợi ích kết nối nổi bật</H3>
                  <BulletList items={[
                    "Hành khách di chuyển thuận tiện hơn giữa Nhơn Trạch và các tỉnh miền Tây",
                    "Vận chuyển hàng hóa và logistics được hỗ trợ nhờ hành lang giao thông mới",
                    "Kết hợp với Vành đai 3, đường 25C và cao tốc TP.HCM – Long Thành – Dầu Giây tạo mạng lưới đa hướng",
                    "Rút ngắn thời gian tiếp cận sân bay Long Thành từ các khu vực phía Tây",
                    "Mở rộng không gian phát triển đô thị và công nghiệp của Nhơn Trạch",
                  ]} />
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="tien-do">Tiến độ cao tốc Bến Lức - Long Thành mới nhất năm 2026</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo thông tin VEC được công bố vào tháng 3/2026, dự án đã cơ bản hoàn thành
                    khối lượng thi công xây lắp. Cụ thể:
                  </p>
                  <BulletList items={[
                    "17/19 gói thầu đã đạt 100% khối lượng xây lắp",
                    "55/58 km đã hoàn thành thi công",
                    "Khoảng 30 km đã được đưa vào khai thác và thu phí từ tháng 8/2025",
                    "Gói thầu cuối liên quan đến cầu Phước Khánh dự kiến hoàn thành tháng 7/2026",
                    "Mục tiêu thông xe toàn tuyến trong quý III/2026",
                  ]} />
                  <InfoBox>
                    Nhà đầu tư nên theo dõi thông tin chính thức từ <strong>VEC (Tổng công ty Đầu
                    tư phát triển đường cao tốc Việt Nam)</strong> và cơ quan quản lý để cập nhật
                    tiến độ thực tế mới nhất.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS17["3"]} alt="Tiến độ thi công cao tốc Bến Lức Long Thành cập nhật năm 2026"
                caption="Tiến độ các hạng mục còn lại của cao tốc Bến Lức - Long Thành trong năm 2026"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="phuoc-khanh">Cầu Phước Khánh có vai trò gì trong dự án?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cầu Phước Khánh là một trong những hạng mục quan trọng và là điểm mấu chốt
                    ảnh hưởng đến khả năng thông xe toàn tuyến cao tốc Bến Lức - Long Thành.
                  </p>
                  <BulletList items={[
                    "Đây là công trình cầu lớn bắc qua sông trong hành trình tuyến cao tốc",
                    "Gói thầu xây lắp cuối cùng liên quan đến cầu Phước Khánh dự kiến hoàn thành tháng 7/2026",
                    "Khi hoàn thiện, cầu Phước Khánh giúp kết nối liên tục toàn bộ 58 km tuyến cao tốc",
                    "Đây là điều kiện để đưa toàn tuyến vào khai thác chính thức trong quý III/2026",
                  ]} />
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="san-bay">Cao tốc Bến Lức - Long Thành kết nối với sân bay Long Thành như thế nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sân bay Long Thành đang trở thành một trong những trung tâm hạ tầng quan trọng
                    của Đồng Nai. Trong năm 2026, Chính phủ tiếp tục yêu cầu đẩy nhanh tiến độ
                    các tuyến giao thông kết nối sân bay, trong đó có cao tốc Bến Lức - Long Thành.
                  </p>
                  <H3>Những lợi ích nổi bật</H3>
                  <BulletList items={[
                    "Di chuyển hành khách: kết nối nhanh từ miền Tây và các tỉnh phía Tây vào sân bay Long Thành",
                    "Vận chuyển hàng hóa: hành lang logistics kết nối cảng biển, khu công nghiệp và sân bay",
                    "Phát triển thương mại và dịch vụ: khu vực quanh nút giao sẽ thu hút đầu tư",
                    "Thúc đẩy đô thị hóa: giao thông đa hướng tạo điều kiện mở rộng không gian đô thị Nhơn Trạch",
                  ]} />
                  <InfoBox>
                    <a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" className="font-bold text-primary-700 underline">
                      Sân bay Long Thành ảnh hưởng đến BĐS Nhơn Trạch như thế nào? →
                    </a>
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS17["4"]} alt="Cao tốc Bến Lức Long Thành kết nối Nhơn Trạch với sân bay Long Thành"
                caption="Cao tốc Bến Lức - Long Thành kết nối Nhơn Trạch với sân bay quốc tế Long Thành"
                images={images} index={3} onOpen={openLightbox} />

              {/* Section 7 */}
              <section className="mb-12">
                <SectionHeading id="bds">Cao tốc Bến Lức - Long Thành tác động như thế nào đến bất động sản Nhơn Trạch?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hạ tầng giao thông là một trong những yếu tố thường được người mua nhà và nhà
                    đầu tư quan tâm khi đánh giá một khu vực. Đối với Nhơn Trạch, tác động của
                    tuyến cao tốc có thể được nhìn nhận ở một số khía cạnh:
                  </p>
                  <H3>1. Tăng khả năng kết nối</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cao tốc giúp Nhơn Trạch có thêm một hướng kết nối với TP.HCM và các khu vực
                    phía Tây, bổ sung cho các tuyến đường hiện hữu như cầu Cát Lái, đường 25C
                    và cao tốc TP.HCM - Long Thành - Dầu Giây.
                  </p>
                  <H3>2. Hỗ trợ phát triển logistics</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch nằm gần hệ thống cảng, khu công nghiệp và sân bay Long Thành. Việc
                    cải thiện giao thông có thể hỗ trợ hoạt động vận chuyển hàng hóa và logistics,
                    từ đó tạo nhu cầu về nhà ở và dịch vụ trong khu vực.
                  </p>
                  <H3>3. Thúc đẩy đô thị hóa</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi giao thông thuận lợi hơn, khả năng tiếp cận các khu vực đô thị và khu dân
                    cư được cải thiện, thu hút thêm dân cư và doanh nghiệp đến sinh sống và đầu tư.
                  </p>
                  <InfoBox type="warn">
                    <strong>Lưu ý:</strong> Hạ tầng không đồng nghĩa với việc giá bất động sản
                    chắc chắn tăng. Giá trị thực tế còn phụ thuộc vào vị trí, pháp lý, quy hoạch,
                    nhu cầu ở thực, nguồn cung và nhiều yếu tố khác.
                  </InfoBox>
                  <H3>Những khu vực tại Nhơn Trạch đáng chú ý</H3>
                  <BulletList items={[
                    "Long Tân — nằm trong hành lang kết nối của nhiều tuyến giao thông quan trọng",
                    "Phước An — khu vực tiếp giáp với các tuyến đường trọng điểm",
                    "Vĩnh Thanh — vị trí kết nối giữa Nhơn Trạch và TP.HCM",
                    "Phú Hội — nơi tọa lạc của nhiều dự án đô thị quy mô, trong đó có Mega City 2",
                    "Trung tâm huyện Nhơn Trạch — hành chính và dịch vụ của toàn huyện",
                  ]} />
                </div>
              </section>

              {/* Section 8 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Mega City 2 có hưởng lợi từ cao tốc Bến Lức - Long Thành không?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2</a>{" "}
                    nằm tại Nhơn Trạch trong khu vực đang được đầu tư nhiều dự án hạ tầng giao
                    thông. Việc cao tốc Bến Lức - Long Thành hoàn thiện sẽ bổ sung thêm một hướng
                    kết nối cho toàn khu vực.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bên cạnh cao tốc này, Nhơn Trạch còn đang được hưởng lợi từ nhiều công trình
                    giao thông khác đang đồng thời triển khai:
                  </p>
                  <BulletList items={[
                    <><a href="/tin-tuc/vanh-dai-3" className="text-primary-700 font-semibold hover:underline">Vành đai 3 TP.HCM</a> — hoàn thiện mạng lưới vành đai liên vùng toàn diện</>,
                    <><a href="/tin-tuc/duong-25c" className="text-primary-700 font-semibold hover:underline">Đường 25C</a> — trục giao thông huyết mạch chạy dọc huyện Nhơn Trạch</>,
                    <><a href="/tin-tuc/cau-cat-lai" className="text-primary-700 font-semibold hover:underline">Cầu Cát Lái</a> — kết nối trực tiếp Nhơn Trạch với TP.Thủ Đức</>,
                    <><a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" className="text-primary-700 font-semibold hover:underline">Sân bay Long Thành</a> — cửa ngõ hàng không quốc tế trọng điểm quốc gia</>,
                    "Cao tốc TP.HCM - Long Thành - Dầu Giây — trục xương sống kết nối toàn vùng",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sự kết hợp của nhiều dự án hạ tầng tạo nên một mạng lưới giao thông đa hướng
                    cho Nhơn Trạch. Đối với người quan tâm Mega City 2, việc theo dõi tiến độ hạ
                    tầng là một trong những yếu tố nên được xem xét cùng với vị trí, pháp lý,
                    quy hoạch và giá bán.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Tổng quan Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí →</LinkBtn>
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS17["5"]} alt="Mega City 2 Nhơn Trạch trong khu vực phát triển hạ tầng giao thông"
                caption="Dự án Mega City 2 Nhơn Trạch trong khu vực phát triển hạ tầng đồng bộ"
                images={images} index={4} onOpen={openLightbox} />

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về cao tốc Bến Lức - Long Thành</SectionHeading>
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
                    { href: "/mega-city-2",                                               label: "Mega City 2 Nhơn Trạch" },
                    { href: "/mega-city-2/vi-tri",                                         label: "Vị trí Mega City 2" },
                    { href: "/mega-city-2/bang-gia",                                       label: "Bảng giá Mega City 2" },
                    { href: "/mega-city-2/phap-ly",                                        label: "Pháp lý Mega City 2" },
                    { href: "/tin-tuc/duong-25c",                                          label: "Đường 25C Nhơn Trạch" },
                    { href: "/tin-tuc/cau-cat-lai",                                        label: "Cầu Cát Lái" },
                    { href: "/tin-tuc/vanh-dai-3",                                         label: "Vành đai 3 TP.HCM" },
                    { href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach",      label: "Sân bay Long Thành và BĐS Nhơn Trạch" },
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
                      { label: "Vành đai 3 TP.HCM 2026",              href: "/tin-tuc/vanh-dai-3" },
                      { label: "Đường 25C Nhơn Trạch 2026",            href: "/tin-tuc/duong-25c" },
                      { label: "Cầu Cát Lái – Cập nhật mới nhất",      href: "/tin-tuc/cau-cat-lai" },
                      { label: "Sân bay Long Thành & BĐS Nhơn Trạch",  href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" },
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
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Xem thêm thông tin về vị trí, pháp lý và bảng giá dự án Mega City 2 tại Nhơn Trạch —
              hưởng lợi từ hệ thống hạ tầng giao thông đồng bộ nhất khu vực phía Nam.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">Xem dự án →</a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">Gọi 0937.587.438</a>
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
              href: "/tin-tuc/vanh-dai-3",
              title: "Vành đai 3 TP.HCM 2026: Tiến độ mới nhất",
              description: "Phân tích tuyến Vành đai 3 và tác động đến bất động sản khu vực Nhơn Trạch.",
              tag: "Hạ tầng",
            },
            {
              href: "/tin-tuc/duong-25c",
              title: "Đường 25C Nhơn Trạch: Tiến độ mới nhất năm 2026",
              description: "Phân tích tuyến đường 25C và tác động đến bất động sản khu vực Nhơn Trạch.",
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
