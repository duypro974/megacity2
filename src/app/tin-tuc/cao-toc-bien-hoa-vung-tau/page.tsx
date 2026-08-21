"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS18 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/cao-toc-bien-hoa-vung-tau`;
const PUBLISHED     = "20/08/2026";
const PUBLISHED_ISO = "2026-08-20";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cao tốc Biên Hòa - Vũng Tàu 2026: Tiến độ và tác động đến bất động sản Nhơn Trạch",
  description: "Cập nhật cao tốc Biên Hòa - Vũng Tàu năm 2026, hướng tuyến, tiến độ, khả năng kết nối sân bay Long Thành và tác động đến bất động sản Nhơn Trạch.",
  image: [IMG_NEWS18["1"], IMG_NEWS18["2"], IMG_NEWS18["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "cao tốc biên hòa vũng tàu, tiến độ cao tốc biên hòa vũng tàu, cao tốc biên hòa vũng tàu đồng nai, hạ tầng nhơn trạch, bất động sản nhơn trạch, mega city 2 nhơn trạch",
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
      "@type": "Question", name: "Cao tốc Biên Hòa - Vũng Tàu đi qua đâu?",
      acceptedAnswer: { "@type": "Answer", text: "Tuyến cao tốc kết nối khu vực Biên Hòa của Đồng Nai với Bà Rịa - Vũng Tàu và là một phần trong mạng lưới giao thông liên vùng Đông Nam Bộ." },
    },
    {
      "@type": "Question", name: "Cao tốc Biên Hòa - Vũng Tàu có đi qua Nhơn Trạch không?",
      acceptedAnswer: { "@type": "Answer", text: "Tuyến cao tốc không đi trực tiếp xuyên toàn bộ Nhơn Trạch. Tác động đối với Nhơn Trạch cần được xem xét thông qua mạng lưới kết nối với Long Thành, Biên Hòa và các tuyến giao thông liên vùng khác." },
    },
    {
      "@type": "Question", name: "Cao tốc Biên Hòa - Vũng Tàu có kết nối sân bay Long Thành không?",
      acceptedAnswer: { "@type": "Answer", text: "Tuyến cao tốc nằm trong mạng lưới giao thông khu vực Đồng Nai, trong đó sân bay Long Thành là một đầu mối hạ tầng quan trọng. Khả năng kết nối thực tế phụ thuộc vào các tuyến đường và nút giao liên quan." },
    },
    {
      "@type": "Question", name: "Cao tốc Biên Hòa - Vũng Tàu có tác động đến bất động sản Nhơn Trạch không?",
      acceptedAnswer: { "@type": "Answer", text: "Tuyến cao tốc có thể góp phần cải thiện kết nối giao thông trong vùng. Tuy nhiên, tác động đến giá bất động sản còn phụ thuộc vào vị trí, pháp lý, quy hoạch, nhu cầu và nhiều yếu tố thị trường khác." },
    },
    {
      "@type": "Question", name: "Có nên mua bất động sản chỉ vì thông tin cao tốc?",
      acceptedAnswer: { "@type": "Answer", text: "Không nên. Hạ tầng chỉ là một trong nhiều yếu tố cần xem xét. Người mua nên kiểm tra pháp lý, quy hoạch, vị trí, giá bán và khả năng tài chính trước khi quyết định." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Cao tốc Biên Hòa - Vũng Tàu 2026", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS18["1"], alt: "Cao tốc Biên Hòa Vũng Tàu kết nối khu vực Đồng Nai",             caption: "Cao tốc Biên Hòa - Vũng Tàu là tuyến giao thông liên vùng quan trọng Đông Nam Bộ" },
  { src: IMG_NEWS18["2"], alt: "Bản đồ hướng tuyến cao tốc Biên Hòa Vũng Tàu qua Đồng Nai",      caption: "Hướng tuyến cao tốc Biên Hòa - Vũng Tàu trong mạng lưới giao thông khu vực" },
  { src: IMG_NEWS18["3"], alt: "Cao tốc Biên Hòa Vũng Tàu kết nối sân bay Long Thành",            caption: "Cao tốc Biên Hòa - Vũng Tàu trong mạng lưới kết nối khu vực sân bay Long Thành" },
  { src: IMG_NEWS18["4"], alt: "Tiến độ cao tốc Biên Hòa Vũng Tàu cập nhật năm 2026",             caption: "Hình ảnh thi công các hạng mục thuộc cao tốc Biên Hòa - Vũng Tàu" },
  { src: IMG_NEWS18["5"], alt: "Hạ tầng giao thông Nhơn Trạch kết nối với khu vực Đồng Nai",      caption: "Hệ thống hạ tầng giao thông đang góp phần thay đổi khả năng kết nối của Nhơn Trạch" },
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

export default function CaoTocBienHoaVungTauPage() {
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
              <span className="text-slate-600 font-medium">Cao tốc Biên Hòa - Vũng Tàu 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Hạ tầng</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 10 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Cao tốc Biên Hòa - Vũng Tàu 2026: Tiến độ và tác động đến bất động sản Nhơn Trạch
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Cập nhật cao tốc Biên Hòa - Vũng Tàu năm 2026, hướng tuyến, tiến độ, khả năng
              kết nối sân bay Long Thành và tác động đến bất động sản Nhơn Trạch.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh cao tốc Biên Hòa - Vũng Tàu"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS18["1"]} alt="Cao tốc Biên Hòa Vũng Tàu kết nối khu vực Đồng Nai"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Cao tốc Biên Hòa - Vũng Tàu là một trong những tuyến giao thông quan trọng của khu vực Đông Nam Bộ
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
                    ["#la-gi",       "1. Cao tốc Biên Hòa - Vũng Tàu là gì?"],
                    ["#vai-tro",     "2. Vai trò của tuyến cao tốc"],
                    ["#huong-tuyen", "3. Hướng tuyến đi qua đâu?"],
                    ["#san-bay",     "4. Kết nối với sân bay Long Thành"],
                    ["#tien-do",     "5. Tiến độ mới nhất năm 2026"],
                    ["#nhon-trach",  "6. Tác động đến Nhơn Trạch"],
                    ["#bds",         "7. Hạ tầng có tác động đến BĐS không?"],
                    ["#mega-city-2", "8. Mega City 2 và hệ thống hạ tầng"],
                    ["#faq",         "9. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Cao tốc Biên Hòa - Vũng Tàu là một trong những dự án giao thông quan trọng tại
                khu vực Đông Nam Bộ, được triển khai nhằm tăng khả năng kết nối giữa Đồng Nai
                và Bà Rịa - Vũng Tàu.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Tuyến cao tốc có ý nghĩa quan trọng đối với mạng lưới giao thông khu vực khi
                kết nối các trung tâm kinh tế, khu công nghiệp, cảng biển và hệ thống giao
                thông liên vùng.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Đối với Đồng Nai, tuyến cao tốc đặc biệt đáng chú ý bởi khu vực này đang đồng
                thời phát triển nhiều dự án hạ tầng lớn như{" "}
                <a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" className="text-primary-700 font-semibold hover:underline">sân bay Long Thành</a>,{" "}
                <a href="/tin-tuc/vanh-dai-3" className="text-primary-700 font-semibold hover:underline">Vành đai 3 TP.HCM</a> và các
                tuyến đường kết nối liên vùng khác.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin tiến độ tổng hợp từ nguồn công khai và mang
                tính tham khảo. Tiến độ thực tế phụ thuộc quyết định của cơ quan có thẩm quyền.
                Phân tích tác động BĐS không phải cam kết tăng giá.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="la-gi">Cao tốc Biên Hòa - Vũng Tàu là gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cao tốc Biên Hòa - Vũng Tàu là tuyến đường cao tốc kết nối Biên Hòa (Đồng Nai)
                    với Bà Rịa - Vũng Tàu, là một phần trong mạng lưới cao tốc quốc gia khu vực
                    Đông Nam Bộ. Tuyến đường được triển khai theo dự án thành phần trên địa bàn
                    hai tỉnh Đồng Nai và Bà Rịa - Vũng Tàu.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      ["Điểm đầu",   "Biên Hòa, Đồng Nai"],
                      ["Điểm cuối",  "Bà Rịa - Vũng Tàu"],
                      ["Qua 2 tỉnh", "Đồng Nai, BR-VT"],
                      ["Loại đường", "Cao tốc liên vùng"],
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
                <SectionHeading id="vai-tro">Cao tốc Biên Hòa - Vũng Tàu có vai trò như thế nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một trong những vấn đề lớn của hệ thống giao thông khu vực Đông Nam Bộ là
                    nhu cầu kết nối ngày càng tăng giữa các trung tâm đô thị, khu công nghiệp
                    và cảng biển. Cao tốc Biên Hòa - Vũng Tàu được triển khai nhằm bổ sung
                    năng lực giao thông cho hành lang kết nối này.
                  </p>
                  <BulletList items={[
                    "Tăng khả năng kết nối giữa Đồng Nai và Bà Rịa - Vũng Tàu",
                    "Hỗ trợ vận chuyển hàng hóa và hoạt động logistics khu vực",
                    "Cải thiện khả năng tiếp cận các khu vực cảng biển phía Đông Nam",
                    "Giảm áp lực cho các tuyến đường hiện hữu đang quá tải",
                    "Tạo thêm động lực phát triển kinh tế khu vực Đông Nam Bộ",
                    "Hình thành mạng lưới giao thông liên kết đa hướng cùng các cao tốc khác",
                  ]} />
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="huong-tuyen">Hướng tuyến cao tốc Biên Hòa - Vũng Tàu</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cao tốc Biên Hòa - Vũng Tàu được triển khai theo hướng kết nối khu vực Biên
                    Hòa, Đồng Nai với Bà Rịa - Vũng Tàu. Tại Đồng Nai, tuyến đường có vai trò
                    kết nối với mạng lưới giao thông hiện hữu và các dự án hạ tầng đang triển
                    khai, trong đó có khu vực Long Thành và sân bay Long Thành.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cùng với{" "}
                    <a href="/tin-tuc/cao-toc-ben-luc-long-thanh" className="text-primary-700 font-semibold hover:underline">cao tốc Bến Lức - Long Thành</a>,
                    Vành đai 3 và hệ thống đường kết nối sân bay Long Thành, cao tốc Biên Hòa -
                    Vũng Tàu góp phần tạo ra nhiều hướng di chuyển khác nhau cho khu vực.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/vanh-dai-3">Vành đai 3 TP.HCM →</LinkBtn>
                    <LinkBtn href="/tin-tuc/cao-toc-ben-luc-long-thanh">Cao tốc Bến Lức - Long Thành →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS18["2"]} alt="Bản đồ hướng tuyến cao tốc Biên Hòa Vũng Tàu qua Đồng Nai"
                caption="Hướng tuyến cao tốc Biên Hòa - Vũng Tàu trong mạng lưới giao thông khu vực Đông Nam Bộ"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="san-bay">Cao tốc Biên Hòa - Vũng Tàu kết nối với sân bay Long Thành như thế nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sân bay Long Thành là một trong những dự án hạ tầng có vai trò quan trọng đối
                    với Đồng Nai và khu vực phía Nam. Việc phát triển đồng thời sân bay và hệ
                    thống đường cao tốc tạo ra nhu cầu lớn về các tuyến giao thông kết nối.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi kết hợp với các tuyến đường khác, người dân và doanh nghiệp có thể có
                    thêm lựa chọn di chuyển giữa nhiều khu vực:
                  </p>
                  <BulletList items={[
                    "Biên Hòa — trung tâm công nghiệp và đô thị lớn nhất Đồng Nai",
                    "Long Thành — khu vực sân bay quốc tế đang được xây dựng",
                    "Sân bay Long Thành — cửa ngõ hàng không quốc tế trọng điểm quốc gia",
                    "Nhơn Trạch — khu đô thị và công nghiệp đang phát triển",
                    "Bà Rịa - Vũng Tàu — trung tâm kinh tế cảng biển duyên hải",
                    "Các khu công nghiệp và khu vực cảng biển phía Đông Nam Bộ",
                  ]} />
                  <InfoBox>
                    <a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" className="font-bold text-primary-700 underline">
                      Sân bay Long Thành ảnh hưởng đến BĐS Nhơn Trạch như thế nào? →
                    </a>
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS18["3"]} alt="Cao tốc Biên Hòa Vũng Tàu kết nối sân bay Long Thành"
                caption="Cao tốc Biên Hòa - Vũng Tàu trong mạng lưới kết nối khu vực sân bay Long Thành"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="tien-do">Tiến độ cao tốc Biên Hòa - Vũng Tàu năm 2026</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tiến độ cao tốc Biên Hòa - Vũng Tàu là một trong những nội dung được nhiều
                    người quan tâm khi tìm kiếm thông tin về hạ tầng Đồng Nai. Dự án được triển
                    khai theo các dự án thành phần trên địa bàn Đồng Nai và Bà Rịa - Vũng Tàu.
                  </p>
                  <H3>Các hạng mục đang triển khai</H3>
                  <BulletList items={[
                    "Giải phóng mặt bằng: thu hồi đất và đền bù trong hành lang tuyến",
                    "Thi công nền đường: san lấp và gia cố nền đất phục vụ xây dựng",
                    "Xây dựng cầu: các công trình cầu qua sông và kênh rạch dọc tuyến",
                    "Xây dựng nút giao: điểm kết nối với các tuyến đường hiện hữu",
                    "Hệ thống thoát nước và an toàn giao thông",
                    "Hoàn thiện mặt đường và hệ thống biển báo",
                  ]} />
                  <InfoBox>
                    Do tiến độ thực tế có thể thay đổi theo từng gói thầu và điều kiện thi công,
                    người đọc nên kiểm tra thông tin cập nhật từ{" "}
                    <strong>UBND tỉnh Đồng Nai, UBND tỉnh Bà Rịa - Vũng Tàu</strong> và{" "}
                    <strong>Bộ Giao thông Vận tải</strong> trước khi sử dụng cho mục đích đầu tư.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS18["4"]} alt="Tiến độ cao tốc Biên Hòa Vũng Tàu cập nhật năm 2026"
                caption="Hình ảnh thi công các hạng mục thuộc cao tốc Biên Hòa - Vũng Tàu"
                images={images} index={3} onOpen={openLightbox} />

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="nhon-trach">Cao tốc Biên Hòa - Vũng Tàu tác động như thế nào đến Nhơn Trạch?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mặc dù cao tốc Biên Hòa - Vũng Tàu không đi trực tiếp xuyên toàn bộ Nhơn
                    Trạch, sự phát triển của tuyến đường vẫn cần được nhìn nhận trong tổng thể
                    mạng lưới giao thông của Đồng Nai.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch nằm gần Long Thành, TP.HCM và nhiều tuyến giao thông quan trọng.
                    Nhơn Trạch có lợi thế khi nằm trong vùng giao thoa của nhiều dự án hạ tầng:
                  </p>
                  <BulletList items={[
                    <><a href="/tin-tuc/vanh-dai-3" className="text-primary-700 font-semibold hover:underline">Vành đai 3 TP.HCM</a> — hoàn thiện mạng lưới vành đai liên vùng</>,
                    <><a href="/tin-tuc/cao-toc-ben-luc-long-thanh" className="text-primary-700 font-semibold hover:underline">Cao tốc Bến Lức - Long Thành</a> — kết nối phía Tây TP.HCM với Đông Nam Bộ</>,
                    "Cao tốc Biên Hòa - Vũng Tàu — kết nối Biên Hòa với khu vực cảng biển phía Đông",
                    <><a href="/tin-tuc/duong-25c" className="text-primary-700 font-semibold hover:underline">Đường 25C</a> — trục huyết mạch chạy dọc huyện Nhơn Trạch hướng Long Thành</>,
                    <><a href="/tin-tuc/cau-cat-lai" className="text-primary-700 font-semibold hover:underline">Cầu Cát Lái</a> — kết nối Nhơn Trạch trực tiếp với TP.Thủ Đức</>,
                    <><a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" className="text-primary-700 font-semibold hover:underline">Sân bay Long Thành</a> — cửa ngõ hàng không quốc tế trọng điểm</>,
                  ]} />
                </div>
              </section>

              {/* Section 7 */}
              <section className="mb-12">
                <SectionHeading id="bds">Hạ tầng giao thông có tác động đến bất động sản Nhơn Trạch không?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hạ tầng giao thông là một trong những yếu tố thường được xem xét khi đánh
                    giá tiềm năng phát triển của một thị trường bất động sản.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đối với Nhơn Trạch, yếu tố đáng chú ý không nằm ở một tuyến đường riêng lẻ
                    mà là sự kết hợp của nhiều dự án hạ tầng. Khi nhiều tuyến giao thông cùng
                    phát triển, khu vực có thể hình thành mạng lưới kết nối đa hướng.
                  </p>
                  <InfoBox type="warn">
                    <strong>Lưu ý quan trọng:</strong> Hạ tầng phát triển không đồng nghĩa với
                    việc giá bất động sản chắc chắn tăng. Giá trị thực tế còn phụ thuộc vào
                    vị trí, pháp lý, quy hoạch, nhu cầu ở thực, nguồn cung và nhiều yếu tố khác.
                  </InfoBox>
                  <H3>5 yếu tố cần đánh giá khi mua BĐS Nhơn Trạch</H3>
                  <BulletList items={[
                    "Vị trí: thời gian di chuyển thực tế đến các tuyến đường và nút giao chính",
                    "Pháp lý: kiểm tra hồ sơ pháp lý và tình trạng sản phẩm trước khi giao dịch",
                    "Quy hoạch: tìm hiểu quy hoạch sử dụng đất và quy hoạch giao thông trong khu vực",
                    "Giá bán: so sánh với các sản phẩm tương tự xung quanh để đánh giá hợp lý",
                    "Khả năng tài chính: không dùng đòn bẩy vượt khả năng chỉ vì kỳ vọng tăng giá",
                  ]} />
                </div>
              </section>

              {/* Section 8 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Mega City 2 và hệ thống hạ tầng Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2</a>{" "}
                    nằm tại Nhơn Trạch, trong khu vực đang được đầu tư nhiều dự án hạ tầng giao
                    thông. Cao tốc Biên Hòa - Vũng Tàu là một phần trong bức tranh hạ tầng rộng
                    hơn của Đồng Nai.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi nhìn các dự án trong cùng một hệ thống, có thể thấy Đồng Nai đang hình
                    thành mạng lưới giao thông đa hướng thay vì phụ thuộc vào một trục duy nhất.
                    Đây là yếu tố quan trọng khi đánh giá khả năng kết nối dài hạn của khu vực.
                  </p>
                  <H3>Mối liên hệ giữa các tuyến giao thông</H3>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm my-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-600 text-white">
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Tuyến đường</th>
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Vai trò với Nhơn Trạch</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Vành đai 3 TP.HCM",            "Tăng kết nối liên vùng quanh TP.HCM"],
                          ["Cao tốc Bến Lức - Long Thành",  "Kết nối phía Tây TP.HCM với Đông Nam Bộ"],
                          ["Cao tốc Biên Hòa - Vũng Tàu",  "Kết nối Biên Hòa với khu vực cảng biển"],
                          ["Đường 25C",                    "Trục giao thông nội vùng Nhơn Trạch – Long Thành"],
                          ["Cầu Cát Lái",                  "Kết nối trực tiếp với TP.Thủ Đức"],
                          ["Sân bay Long Thành",           "Tạo động lực phát triển kinh tế khu vực"],
                        ].map(([tuyen, vai_tro], i) => (
                          <tr key={tuyen} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-5 py-3.5 font-semibold text-slate-700">{tuyen}</td>
                            <td className="px-5 py-3.5 text-slate-600">{vai_tro}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Tổng quan Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí →</LinkBtn>
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS18["5"]} alt="Hạ tầng giao thông Nhơn Trạch kết nối với khu vực Đồng Nai"
                caption="Hệ thống hạ tầng giao thông đang góp phần thay đổi khả năng kết nối của Nhơn Trạch"
                images={images} index={4} onOpen={openLightbox} />

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về cao tốc Biên Hòa - Vũng Tàu</SectionHeading>
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
                <SectionHeading>Tìm hiểu thêm về hạ tầng Nhơn Trạch</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/mega-city-2",                                               label: "Mega City 2 Nhơn Trạch" },
                    { href: "/mega-city-2/vi-tri",                                         label: "Vị trí Mega City 2" },
                    { href: "/mega-city-2/bang-gia",                                       label: "Bảng giá Mega City 2" },
                    { href: "/tin-tuc/duong-25c",                                          label: "Đường 25C Nhơn Trạch" },
                    { href: "/tin-tuc/cau-cat-lai",                                        label: "Cầu Cát Lái" },
                    { href: "/tin-tuc/vanh-dai-3",                                         label: "Vành đai 3 TP.HCM" },
                    { href: "/tin-tuc/cao-toc-ben-luc-long-thanh",                         label: "Cao tốc Bến Lức - Long Thành" },
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
                      { label: "Cao tốc Bến Lức - Long Thành 2026",   href: "/tin-tuc/cao-toc-ben-luc-long-thanh" },
                      { label: "Vành đai 3 TP.HCM 2026",              href: "/tin-tuc/vanh-dai-3" },
                      { label: "Sân bay Long Thành & BĐS Nhơn Trạch", href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" },
                      { label: "Giá đất Nhơn Trạch 2026",             href: "/tin-tuc/gia-dat-nhon-trach-2026" },
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
              hưởng lợi từ hệ thống hạ tầng giao thông đa hướng khu vực Đông Nam Bộ.
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
              href: "/tin-tuc/cao-toc-ben-luc-long-thanh",
              title: "Cao tốc Bến Lức - Long Thành 2026: Tiến độ mới nhất",
              description: "Cập nhật tiến độ và tác động của cao tốc Bến Lức - Long Thành đến Nhơn Trạch.",
              tag: "Hạ tầng",
            },
            {
              href: "/tin-tuc/vanh-dai-3",
              title: "Vành đai 3 TP.HCM 2026: Tiến độ mới nhất",
              description: "Phân tích tuyến Vành đai 3 và tác động đến bất động sản khu vực Nhơn Trạch.",
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
