"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS12 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat`;
const PUBLISHED     = "19/08/2026";
const PUBLISHED_ISO = "2026-08-19";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hạ tầng giao thông Nhơn Trạch mới nhất 2026: Những thay đổi tác động đến bất động sản",
  description: "Cập nhật hạ tầng giao thông Nhơn Trạch mới nhất năm 2026. Phân tích các tuyến đường quan trọng, sân bay Long Thành, Vành đai 3 và tác động đến thị trường bất động sản.",
  image: [IMG_NEWS12["1"], IMG_NEWS12["2"], IMG_NEWS12["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "hạ tầng Nhơn Trạch, hạ tầng giao thông Nhơn Trạch, giao thông Nhơn Trạch 2026, đường Vành đai 3, sân bay Long Thành, bất động sản Nhơn Trạch, Mega City 2",
  about: { "@type": "Place", name: "Nhơn Trạch, Đồng Nai", address: { "@type": "PostalAddress", addressLocality: "Nhơn Trạch", addressRegion: "Đồng Nai", addressCountry: "VN" } },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Hạ tầng Nhơn Trạch có đang phát triển không?",
      acceptedAnswer: { "@type": "Answer", text: "Có. Nhiều dự án giao thông quan trọng đang được triển khai tại khu vực này, bao gồm sân bay Long Thành, đường Vành đai 3, cao tốc Bến Lức - Long Thành và các tuyến kết nối nội tỉnh." } },
    { "@type": "Question", name: "Sân bay Long Thành có ảnh hưởng đến bất động sản Nhơn Trạch không?",
      acceptedAnswer: { "@type": "Answer", text: "Có. Sân bay Long Thành là một trong những yếu tố hạ tầng quan trọng được kỳ vọng tác động tích cực đến thị trường bất động sản Nhơn Trạch trong dài hạn thông qua việc thu hút dân cư, chuyên gia và phát triển các ngành dịch vụ liên quan." } },
    { "@type": "Question", name: "Đường Vành đai 3 có đi qua Nhơn Trạch không?",
      acceptedAnswer: { "@type": "Answer", text: "Đường Vành đai 3 TP.HCM đi qua địa phận Đồng Nai và kết nối với khu vực Nhơn Trạch, giúp tăng khả năng kết nối giữa Nhơn Trạch và TP. Hồ Chí Minh cùng các tỉnh thành lân cận." } },
    { "@type": "Question", name: "Có nên đầu tư bất động sản Nhơn Trạch trong năm 2026 không?",
      acceptedAnswer: { "@type": "Answer", text: "Sự phát triển hạ tầng tạo ra nhiều cơ hội dài hạn cho thị trường bất động sản Nhơn Trạch. Tuy nhiên, nhà đầu tư nên đánh giá kỹ vị trí cụ thể, pháp lý từng sản phẩm và khả năng tài chính cá nhân trước khi quyết định." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Hạ tầng giao thông Nhơn Trạch 2026", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS12["1"], alt: "Hạ tầng giao thông tại huyện Nhơn Trạch Đồng Nai năm 2026",   caption: "Hạ tầng giao thông khu vực Nhơn Trạch, Đồng Nai năm 2026" },
  { src: IMG_NEWS12["2"], alt: "Dự án sân bay quốc tế Long Thành tại tỉnh Đồng Nai",           caption: "Dự án sân bay quốc tế Long Thành, tỉnh Đồng Nai" },
  { src: IMG_NEWS12["3"], alt: "Tuyến đường Vành đai 3 kết nối khu vực Nhơn Trạch với TP.HCM", caption: "Tuyến Vành đai 3 kết nối Nhơn Trạch với TP. Hồ Chí Minh" },
  { src: IMG_NEWS12["4"], alt: "Phối cảnh dự án Mega City 2 tại trung tâm Nhơn Trạch Đồng Nai", caption: "Phối cảnh dự án Mega City 2 tại trung tâm Nhơn Trạch" },
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

export default function HaTangGiaoThongNhonTrachPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}
      <CorpHeader solid />
      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a><span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a><span>/</span>
              <span className="text-slate-600 font-medium">Hạ tầng Nhơn Trạch 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Hạ tầng</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 9 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Hạ tầng giao thông Nhơn Trạch mới nhất 2026: Những thay đổi tác động đến bất động sản
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Cập nhật hạ tầng giao thông Nhơn Trạch mới nhất năm 2026. Phân tích các tuyến đường
              quan trọng, sân bay Long Thành, Vành đai 3 và tác động đến thị trường bất động sản.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh hạ tầng Nhơn Trạch"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS12["1"]} alt="Hạ tầng giao thông tại huyện Nhơn Trạch Đồng Nai năm 2026" className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">Hạ tầng giao thông khu vực Nhơn Trạch, tỉnh Đồng Nai năm 2026</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#tong-quan",    "1. Tổng quan về hạ tầng giao thông Nhơn Trạch"],
                    ["#san-bay",      "2. Sân bay Long Thành — động lực phát triển trọng điểm"],
                    ["#vanh-dai-3",   "3. Đường Vành đai 3 kết nối TP. Hồ Chí Minh"],
                    ["#cao-toc",      "4. Cao tốc Bến Lức - Long Thành"],
                    ["#mega-city-2",  "5. Mega City 2 hưởng lợi từ hạ tầng như thế nào?"],
                    ["#co-nen",       "6. Có nên đầu tư bất động sản Nhơn Trạch 2026?"],
                    ["#faq",          "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Nhơn Trạch đang trở thành một trong những khu vực phát triển nhanh nhất của tỉnh
                Đồng Nai. Trong những năm gần đây, nhiều dự án hạ tầng giao thông quan trọng đã và
                đang được triển khai, tạo động lực mạnh mẽ cho sự phát triển kinh tế và thị trường
                bất động sản khu vực.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Sự thay đổi của hệ thống giao thông không chỉ giúp rút ngắn thời gian di chuyển mà
                còn góp phần gia tăng giá trị bất động sản, thu hút dân cư và thúc đẩy quá trình
                đô thị hóa diễn ra nhanh hơn.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin trong bài tổng hợp từ nguồn công khai, mang tính
                tham khảo. Tiến độ thực tế của các dự án hạ tầng phụ thuộc quyết định của cơ quan
                có thẩm quyền. Luôn xác nhận thông tin trước khi ra quyết định đầu tư.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">Tổng quan về hạ tầng giao thông Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Huyện Nhơn Trạch hiện đang nằm trong hành lang phát triển hạ tầng trọng điểm
                    của vùng kinh tế phía Nam. Điều đặc biệt là nhiều dự án lớn đang triển khai
                    đồng thời — một lợi thế hiếm có so với các khu vực khác.
                  </p>
                  <BulletList items={[
                    "Sân bay quốc tế Long Thành: dự án hàng không trọng điểm quốc gia, cách Nhơn Trạch ~18 km",
                    "Đường Vành đai 3 TP.HCM: tuyến vành đai quan trọng đang thi công đoạn qua Đồng Nai",
                    "Cao tốc Bến Lức – Long Thành: kết nối vùng kinh tế phía Nam đang hoàn thiện",
                    "Cầu Cát Lái (dự kiến): rút ngắn kết nối với TP.HCM còn 15–20 phút",
                    "Cao tốc TP.HCM – Long Thành – Dầu Giây: đang khai thác, kết nối huyết mạch toàn vùng",
                    "Cao tốc Biên Hòa – Vũng Tàu: kết nối cảng Cái Mép - Thị Vải",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hệ thống hạ tầng đa tầng này đang từng bước định hình lại bộ mặt đô thị và
                    tạo ra những thay đổi đáng kể trong cách thị trường bất động sản Nhơn Trạch
                    được nhìn nhận và định giá.
                  </p>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS12["2"]} alt="Dự án sân bay quốc tế Long Thành tại tỉnh Đồng Nai"
                caption="Dự án sân bay quốc tế Long Thành — công trình hàng không trọng điểm tại Đồng Nai"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="san-bay">Sân bay Long Thành — động lực phát triển trọng điểm</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sân bay Long Thành là một trong những dự án hạ tầng trọng điểm của cả nước, tọa
                    lạc tại huyện Long Thành, cách trung tâm Nhơn Trạch khoảng 15–20 km. Giai đoạn
                    1 với công suất 25 triệu hành khách/năm đang trong quá trình thi công tích cực.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sau khi đi vào hoạt động, sân bay dự kiến sẽ thúc đẩy mạnh mẽ:
                  </p>
                  <BulletList items={[
                    "Hoạt động logistics hàng không: kho vận, dịch vụ vận tải, hàng hóa xuất nhập khẩu",
                    "Giao thương quốc tế: kết nối doanh nghiệp khu công nghiệp với thị trường toàn cầu",
                    "Phát triển công nghiệp hỗ trợ: các ngành phụ trợ hàng không và dịch vụ",
                    "Tăng nhu cầu nhà ở: phi hành đoàn, nhân viên hàng không, chuyên gia quốc tế",
                    "Thu hút lao động chất lượng cao: hàng nghìn việc làm trực tiếp và gián tiếp",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhờ vị trí nằm trong hành lang gần sân bay và kết nối trực tiếp qua đường 25C,
                    Nhơn Trạch được đánh giá là khu vực hưởng lợi quan trọng từ sự phát triển này.
                  </p>
                  <InfoBox>
                    Đọc thêm phân tích chuyên sâu:{" "}
                    <a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" className="font-bold text-primary-700 underline">
                      Sân bay Long Thành ảnh hưởng đến BĐS Nhơn Trạch như thế nào? →
                    </a>
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS12["3"]} alt="Tuyến đường Vành đai 3 kết nối khu vực Nhơn Trạch với TP Hồ Chí Minh"
                caption="Tuyến Vành đai 3 TP.HCM — trục giao thông kết nối quan trọng đang thi công"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="vanh-dai-3">Đường Vành đai 3 giúp kết nối Nhơn Trạch với TP. Hồ Chí Minh</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đường Vành đai 3 TP.HCM là một trong những dự án giao thông quan trọng nhất
                    khu vực phía Nam, đi qua các tỉnh TP.HCM, Bình Dương, Đồng Nai và Long An.
                    Đoạn qua Đồng Nai hiện đang trong quá trình triển khai thi công tích cực.
                  </p>

                  <H3>Những tác động khi tuyến đường hoàn thành</H3>
                  <BulletList items={[
                    "Giảm áp lực giao thông trên các trục đường hiện hữu, đặc biệt các tuyến vào TP.HCM",
                    "Kết nối nhanh hơn giữa Nhơn Trạch và Quận 2, TP.Thủ Đức, trung tâm TP.HCM",
                    "Tăng khả năng lưu thông hàng hóa giữa các khu công nghiệp và cảng biển",
                    "Thúc đẩy sự phát triển của các khu đô thị vệ tinh dọc hành lang vành đai",
                    "Nâng cao giá trị bất động sản các khu vực tiếp cận tuyến đường",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi Vành đai 3 và cầu Cát Lái hoàn thành đồng thời, khả năng kết nối từ
                    Nhơn Trạch đến các trung tâm kinh tế lớn sẽ được cải thiện đáng kể —
                    đây là yếu tố dài hạn quan trọng hỗ trợ thị trường bất động sản khu vực.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="cao-toc">Cao tốc Bến Lức - Long Thành và cơ hội đầu tư mới</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cao tốc Bến Lức - Long Thành được kỳ vọng trở thành tuyến giao thông huyết mạch
                    kết nối nhiều tỉnh thành phía Nam theo trục Đông - Tây, từ Long An qua TP.HCM
                    đến Long Thành, Đồng Nai. Đây là một trong những tuyến cao tốc có vai trò
                    quan trọng trong mạng lưới giao thông vùng.
                  </p>
                  <BulletList items={[
                    "Rút ngắn thời gian di chuyển giữa các tỉnh Long An, TP.HCM và Đồng Nai",
                    "Kết nối các khu công nghiệp lớn dọc hành lang phía Nam",
                    "Thúc đẩy hoạt động thương mại và logistics liên tỉnh",
                    "Tăng tính thanh khoản của thị trường bất động sản các khu vực dọc tuyến",
                    "Mở ra cơ hội phát triển khu đô thị và dịch vụ tại các nút giao quan trọng",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sự phát triển đồng bộ của hệ thống cao tốc đang mở ra nhiều cơ hội mới cho
                    các nhà đầu tư tại Nhơn Trạch, đặc biệt đối với những khu vực có kết nối
                    thuận tiện với hệ thống đường cao tốc này.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/cao-toc-bien-hoa-vung-tau">Cao tốc Biên Hòa - Vũng Tàu →</LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat">Quy hoạch Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS12["4"]} alt="Phối cảnh dự án Mega City 2 tại trung tâm Nhơn Trạch Đồng Nai"
                caption="Phối cảnh dự án Mega City 2 — khu đô thị hưởng lợi trực tiếp từ hạ tầng vùng"
                images={images} index={3} onOpen={openLightbox} />

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Mega City 2 hưởng lợi như thế nào từ hạ tầng giao thông?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một trong những dự án đang nhận được nhiều sự quan tâm tại Nhơn Trạch trong
                    bối cảnh hạ tầng phát triển là{" "}
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2</a>.
                    Dự án sở hữu nhiều lợi thế kép từ hệ thống hạ tầng vùng:
                  </p>
                  <BulletList items={[
                    "Vị trí trực tiếp trên đường 25C — trục kết nối huyết mạch đến sân bay Long Thành (~18 km)",
                    "Gần nút giao cao tốc TP.HCM – Long Thành, tiếp cận hệ thống cao tốc toàn vùng",
                    "Hưởng lợi từ Vành đai 3 khi hoàn thành — tăng khả năng kết nối đa chiều",
                    "Quy hoạch chi tiết 1/500 đã phê duyệt: cơ sở pháp lý vững chắc",
                    "QĐ 1772/QĐ-UBND chấp thuận 2.421 lô phân lô bán nền: pháp lý rõ ràng",
                    "Hạ tầng nội khu đang hoàn thiện đồng bộ với hạ tầng vùng",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Những yếu tố này giúp Mega City 2 trở thành một trong những dự án được nhiều
                    khách hàng và nhà đầu tư quan tâm, đặc biệt với những ai muốn đón đầu xu hướng
                    phát triển hạ tầng dài hạn tại Nhơn Trạch.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Tổng quan Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí & Kết nối vùng →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý dự án →</LinkBtn>
                    <LinkBtn href="/mega-city-2/tien-ich">Tiện ích nội khu →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="co-nen">Có nên đầu tư bất động sản Nhơn Trạch trong năm 2026?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không có dự án nào phù hợp với tất cả mọi người. Tuy nhiên, sự phát triển
                    đồng bộ của hạ tầng đang tạo ra nền tảng vĩ mô tích cực cho thị trường bất
                    động sản Nhơn Trạch trong dài hạn.
                  </p>
                  <H3>Yếu tố hỗ trợ tích cực</H3>
                  <BulletList items={[
                    "Nhiều dự án hạ tầng lớn đang triển khai đồng thời — hiếm thấy tại một khu vực",
                    "Định hướng quy hoạch rõ ràng: đô thị vệ tinh TP.HCM đến năm 2030",
                    "Khu công nghiệp phát triển mạnh, tạo nhu cầu nhà ở ổn định và bền vững",
                    "Mức giá đất nền còn thấp hơn nhiều so với TP.HCM cùng tiện ích",
                  ]} />
                  <H3>Những điều cần cân nhắc trước khi đầu tư</H3>
                  <BulletList items={[
                    "Vị trí cụ thể: không phải khu vực nào tại Nhơn Trạch cũng hưởng lợi đồng đều",
                    "Pháp lý: sổ hồng riêng hay đang xử lý — ảnh hưởng lớn đến thanh khoản",
                    "Hạ tầng nội khu: thực địa để xem đường, điện, nước đã vào chưa",
                    "Khả năng tài chính: phù hợp với đầu tư dài hạn 3–5 năm, không nên vay quá mức",
                    "Mục tiêu: ở thực, cho thuê hay đầu tư chờ tăng giá — mỗi mục tiêu cần sản phẩm khác nhau",
                  ]} />
                  <InfoBox>
                    Xem thêm hướng dẫn thực tế:{" "}
                    <a href="/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach" className="font-bold text-primary-700 underline">
                      Kinh nghiệm mua đất nền Nhơn Trạch từ A-Z →
                    </a>
                  </InfoBox>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về hạ tầng giao thông Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-3">
                  {[
                    { q: "Hạ tầng Nhơn Trạch có đang phát triển không?", a: "Có. Nhiều dự án giao thông quan trọng đang được triển khai tại khu vực này, bao gồm sân bay Long Thành, đường Vành đai 3, cao tốc Bến Lức - Long Thành và các tuyến kết nối nội tỉnh Đồng Nai." },
                    { q: "Sân bay Long Thành có ảnh hưởng đến bất động sản Nhơn Trạch không?", a: "Có. Sân bay Long Thành là yếu tố hạ tầng quan trọng được kỳ vọng tác động tích cực đến thị trường bất động sản Nhơn Trạch trong dài hạn thông qua thu hút dân cư, chuyên gia và phát triển dịch vụ liên quan." },
                    { q: "Đường Vành đai 3 có đi qua Nhơn Trạch không?", a: "Đường Vành đai 3 TP.HCM đi qua địa phận Đồng Nai, kết nối với khu vực Nhơn Trạch và giúp tăng khả năng kết nối giữa Nhơn Trạch với TP.HCM cùng các tỉnh thành lân cận." },
                    { q: "Có nên đầu tư bất động sản Nhơn Trạch trong năm 2026 không?", a: "Sự phát triển hạ tầng tạo ra nhiều cơ hội dài hạn cho thị trường bất động sản Nhơn Trạch. Tuy nhiên, nhà đầu tư nên đánh giá kỹ vị trí, pháp lý từng sản phẩm và khả năng tài chính cá nhân trước khi quyết định." },
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

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">Thông tin trong bài được tổng hợp từ nguồn công khai và mang tính tham khảo. Tiến độ các dự án hạ tầng có thể thay đổi theo quyết định của cơ quan có thẩm quyền. Trước khi đầu tư, cần xác nhận thông tin pháp lý và thực trạng hạ tầng tại cơ quan nhà nước.</p>
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
                      { label: "Sân bay Long Thành & BĐS Nhơn Trạch", href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" },
                      { label: "Cao tốc Biên Hòa - Vũng Tàu", href: "/tin-tuc/cao-toc-bien-hoa-vung-tau" },
                      { label: "Quy hoạch Nhơn Trạch mới nhất", href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat" },
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

        <section className="bg-primary-50 border-t border-primary-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Tìm hiểu thêm về Mega City 2</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">Dự án khu đô thị hưởng lợi trực tiếp từ hệ thống hạ tầng vùng đang phát triển tại Nhơn Trạch, Đồng Nai.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">Khám phá dự án →</a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">Gọi 0937.587.438</a>
            </div>
          </div>
        </section>

        <RelatedContent title="Bài viết liên quan" items={[
          { href: "/mega-city-2",                                           title: "Mega City 2 Nhơn Trạch – Tổng quan dự án",            description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá dự án.", tag: "Dự án" },
          { href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach", title: "Sân bay Long Thành & BĐS Nhơn Trạch",                 description: "Tác động của sân bay Long Thành đến thị trường bất động sản.", tag: "Hạ tầng" },
          { href: "/tin-tuc/cao-toc-bien-hoa-vung-tau",                     title: "Cao tốc Biên Hòa - Vũng Tàu & BĐS Nhơn Trạch",       description: "Phân tích tác động của cao tốc Biên Hòa - Vũng Tàu.", tag: "Hạ tầng" },
          { href: "/tin-tuc/gia-dat-nhon-trach-2026",                       title: "Giá đất Nhơn Trạch 2026 mới nhất",                    description: "Bảng giá, thị trường và các khu vực tiềm năng tại Nhơn Trạch.", tag: "Thị trường" },
          { href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat",                 title: "Quy hoạch Nhơn Trạch mới nhất 2026",                  description: "Cập nhật quy hoạch phát triển đô thị Nhơn Trạch.", tag: "Quy hoạch" },
          { href: "/mega-city-2/vi-tri",                                    title: "Vị trí Mega City 2 & Kết nối vùng",                   description: "Phân tích vị trí chiến lược trên đường 25C, kết nối sân bay.", tag: "Vị trí" },
        ]} />
      </div>
      <CorpFooter />
    </>
  );
}
