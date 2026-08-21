"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS20 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/quy-hoach-1-500-nhon-trach`;
const PUBLISHED     = "21/08/2026";
const PUBLISHED_ISO = "2026-08-21";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Quy hoạch 1/500 Nhơn Trạch: Cách đọc bản đồ và những điều người mua đất cần biết",
  description: "Quy hoạch 1/500 Nhơn Trạch là gì? Hướng dẫn cách đọc bản đồ quy hoạch chi tiết, phân biệt quy hoạch chung và 1/500, kiểm tra pháp lý trước khi mua đất.",
  image: [IMG_NEWS20["1"], IMG_NEWS20["2"], IMG_NEWS20["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "quy hoạch 1/500 nhơn trạch, bản đồ quy hoạch nhơn trạch, quy hoạch chi tiết nhơn trạch, kiểm tra quy hoạch nhơn trạch, pháp lý bất động sản nhơn trạch",
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
      "@type": "Question", name: "Quy hoạch 1/500 Nhơn Trạch là gì?",
      acceptedAnswer: { "@type": "Answer", text: "Quy hoạch 1/500 là quy hoạch chi tiết cho một khu vực cụ thể, thể hiện rõ hơn về ranh giới, chức năng sử dụng đất, giao thông, công trình công cộng và hệ thống hạ tầng kỹ thuật. 1 cm trên bản đồ tương ứng khoảng 5 m ngoài thực địa." },
    },
    {
      "@type": "Question", name: "Quy hoạch 1/500 có phải quy hoạch chung Nhơn Trạch không?",
      acceptedAnswer: { "@type": "Answer", text: "Không. Quy hoạch chung có phạm vi rộng hơn và mang tính định hướng tổng thể. Quy hoạch chi tiết 1/500 tập trung vào một khu vực hoặc dự án cụ thể, thể hiện chi tiết hơn về không gian, sử dụng đất và hạ tầng." },
    },
    {
      "@type": "Question", name: "Xem quy hoạch 1/500 có biết đất được xây nhà hay không?",
      acceptedAnswer: { "@type": "Answer", text: "Có thể cung cấp thông tin quan trọng về chức năng sử dụng đất và tổ chức không gian, nhưng để xác định khả năng xây dựng cụ thể cần tiếp tục kiểm tra hồ sơ pháp lý, mục đích sử dụng đất và các quy định liên quan." },
    },
    {
      "@type": "Question", name: "Quy hoạch 1/500 có làm giá đất tăng không?",
      acceptedAnswer: { "@type": "Answer", text: "Không thể khẳng định chắc chắn. Giá đất còn phụ thuộc vào vị trí, pháp lý, hạ tầng, nhu cầu thị trường, nguồn cung và nhiều yếu tố khác." },
    },
    {
      "@type": "Question", name: "Có nên mua đất chỉ vì thấy bản đồ quy hoạch 1/500?",
      acceptedAnswer: { "@type": "Answer", text: "Không nên. Người mua cần kiểm tra bản đồ chính thức, hồ sơ pháp lý, hiện trạng và thông tin mới nhất trước khi giao dịch. Quy hoạch chỉ là một trong nhiều yếu tố cần xem xét." },
    },
    {
      "@type": "Question", name: "Quy hoạch Nhơn Trạch có thể thay đổi không?",
      acceptedAnswer: { "@type": "Answer", text: "Có thể có điều chỉnh quy hoạch theo quy định và tình hình phát triển thực tế. Vì vậy, cần kiểm tra thông tin tại thời điểm giao dịch thay vì chỉ dựa vào dữ liệu cũ." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Quy hoạch 1/500 Nhơn Trạch", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS20["1"], alt: "Bản đồ quy hoạch chi tiết tỷ lệ 1/500 tại Nhơn Trạch",                        caption: "Bản đồ quy hoạch chi tiết tỷ lệ 1/500 thể hiện rõ các khu chức năng và hệ thống giao thông" },
  { src: IMG_NEWS20["2"], alt: "So sánh quy hoạch chung và quy hoạch chi tiết 1/500 Nhơn Trạch",              caption: "Quy hoạch chung có phạm vi rộng, trong khi quy hoạch chi tiết 1/500 tập trung vào từng khu vực cụ thể" },
  { src: IMG_NEWS20["3"], alt: "Hồ sơ quy hoạch chi tiết tỷ lệ 1/500 tại khu vực Nhơn Trạch",               caption: "Hồ sơ quy hoạch chi tiết tỷ lệ 1/500 cần được đối chiếu cùng chú giải và các tài liệu liên quan" },
  { src: IMG_NEWS20["4"], alt: "Bản đồ giao thông kết nối các khu vực tại Nhơn Trạch",                       caption: "Hệ thống giao thông kết nối các khu vực tại Nhơn Trạch Đồng Nai" },
  { src: IMG_NEWS20["5"], alt: "Hạ tầng giao thông thực tế tại Nhơn Trạch Đồng Nai",                         caption: "Hạ tầng giao thông thực tế tại Nhơn Trạch đang được đầu tư đồng bộ" },
  { src: IMG_NEWS20["6"], alt: "Mega City 2 Nhơn Trạch và kết nối quy hoạch khu vực",                        caption: "Mega City 2 Nhơn Trạch trong khu vực có quy hoạch và hạ tầng đang phát triển" },
];

function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-primary-400 scroll-mt-24">{children}</h2>;
}
function H3({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h3 id={id} className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-8 scroll-mt-24">{children}</h3>;
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
function StepCard({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-primary-200 transition-colors">
      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary-600 text-white font-black text-sm flex items-center justify-center">{num}</div>
      <div>
        <p className="font-bold text-slate-800 mb-1.5">{title}</p>
        <div className="text-slate-600 text-[15px] leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function QuyHoach1500NhonTrachPage() {
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
              <span className="text-slate-600 font-medium">Quy hoạch 1/500 Nhơn Trạch</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Quy hoạch</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 11 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Quy hoạch 1/500 Nhơn Trạch: Cách đọc bản đồ và những điều người mua đất cần biết
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Quy hoạch 1/500 Nhơn Trạch là gì? Hướng dẫn cách đọc bản đồ quy hoạch chi tiết,
              phân biệt quy hoạch chung và 1/500, kiểm tra pháp lý trước khi mua đất.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh bản đồ quy hoạch 1/500"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS20["1"]} alt="Quy hoạch 1/500 Nhơn Trạch 2026 và bản đồ quy hoạch chi tiết"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Thông tin quy hoạch là một trong những yếu tố cần kiểm tra trước khi đánh giá bất động sản tại Nhơn Trạch
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
                    ["#la-gi",          "1. Quy hoạch 1/500 là gì?"],
                    ["#khac-gi",        "2. Quy hoạch 1/500 khác gì quy hoạch chung?"],
                    ["#thong-tin",      "3. Thể hiện những thông tin gì?"],
                    ["#vi-sao",         "4. Vì sao nên kiểm tra quy hoạch 1/500?"],
                    ["#gia-bds",        "5. Có ảnh hưởng đến giá bất động sản không?"],
                    ["#thuc-te",        "6. Thông tin quy hoạch 1/500 tại Nhơn Trạch"],
                    ["#cach-kiem-tra",  "7. Cách kiểm tra quy hoạch trước khi mua đất"],
                    ["#mega-city-2",    "8. Quy hoạch 1/500 và Mega City 2"],
                    ["#sai-lam",        "9. Những sai lầm thường gặp"],
                    ["#faq",            "10. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Quy hoạch là một trong những yếu tố quan trọng cần kiểm tra trước khi mua đất
                tại Nhơn Trạch. Đặc biệt, với những khu vực đang phát triển mạnh về hạ tầng,
                đô thị và bất động sản, thông tin quy hoạch có thể ảnh hưởng trực tiếp đến
                khả năng sử dụng đất, xây dựng công trình và giá trị bất động sản.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Trong đó, quy hoạch chi tiết tỷ lệ 1/500 thường được người mua đất, nhà đầu
                tư và chủ đầu tư quan tâm vì đây là cấp quy hoạch thể hiện chi tiết hơn về
                không gian sử dụng đất, hệ thống giao thông, công trình công cộng, hạ tầng
                kỹ thuật và các khu chức năng trong phạm vi một khu vực hoặc dự án.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin quy hoạch có thể được điều chỉnh theo từng
                thời kỳ. Người mua nên kiểm tra hồ sơ và thông tin được cơ quan có thẩm quyền
                công bố trước khi đưa ra quyết định giao dịch.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="la-gi">Quy hoạch 1/500 là gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Quy hoạch chi tiết tỷ lệ 1/500 là loại quy hoạch thể hiện chi tiết cách
                    tổ chức không gian và sử dụng đất trong một khu vực cụ thể. <strong>1/500
                    nghĩa là 1 cm trên bản đồ tương ứng với khoảng 5 m ngoài thực địa.</strong>
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    So với các cấp quy hoạch có tỷ lệ nhỏ hơn, bản đồ 1/500 có mức độ chi tiết
                    cao hơn, giúp thể hiện rõ hơn nhiều lớp thông tin:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      "Ranh giới khu đất", "Các tuyến đường", "Lộ giới & mạng giao thông",
                      "Khu đất ở", "Đất công cộng", "Công viên, cây xanh",
                      "Trường học", "Công trình dịch vụ", "Hệ thống cấp điện",
                      "Hệ thống cấp nước", "Hệ thống thoát nước", "Các khu chức năng",
                    ].map((item) => (
                      <div key={item} className="rounded-xl bg-primary-50 border border-primary-100 px-3 py-2 text-sm text-primary-700 font-medium text-center">{item}</div>
                    ))}
                  </div>
                  <InfoBox>
                    Không phải mọi khu đất tại Nhơn Trạch đều có một bản đồ 1/500 duy nhất.
                    Quy hoạch 1/500 thường được lập cho từng khu vực, dự án hoặc khu đất cụ thể.
                    Khi kiểm tra, cần xác định chính xác khu đất đó thuộc đồ án quy hoạch nào.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS20["1"]} alt="Bản đồ quy hoạch chi tiết tỷ lệ 1/500 tại Nhơn Trạch"
                caption="Bản đồ quy hoạch chi tiết tỷ lệ 1/500 thể hiện rõ các khu chức năng và hệ thống giao thông"
                images={images} index={0} onOpen={openLightbox} />

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="khac-gi">Quy hoạch 1/500 khác gì quy hoạch chung Nhơn Trạch?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là điểm nhiều người mua đất dễ nhầm lẫn. Có thể hiểu đơn giản theo
                    hệ thống từ tổng quan đến chi tiết:
                  </p>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-600 text-white">
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Cấp quy hoạch</th>
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Phạm vi</th>
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Mục đích</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Quy hoạch chung", "Toàn đô thị / khu vực", "Định hướng phát triển tổng thể"],
                          ["Quy hoạch phân khu", "Từng khu vực trong đô thị", "Cụ thể hóa từng khu vực"],
                          ["Quy hoạch chi tiết 1/500", "Khu đất / dự án cụ thể", "Chi tiết về không gian, hạ tầng, chức năng"],
                        ].map(([cap, pham_vi, muc_dich], i) => (
                          <tr key={cap} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-5 py-3.5 font-semibold text-slate-700">{cap}</td>
                            <td className="px-5 py-3.5 text-slate-600">{pham_vi}</td>
                            <td className="px-5 py-3.5 text-slate-600">{muc_dich}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Quy hoạch chung đô thị mới Nhơn Trạch từng được Thủ tướng phê duyệt điều
                    chỉnh tại Quyết định 455/QĐ-TTg ngày 22/3/2016. Đến năm 2026, các cơ quan
                    địa phương vẫn có hoạt động liên quan đến điều chỉnh cục bộ quy hoạch chung,
                    nên thông tin cần được kiểm tra theo hồ sơ và thời điểm cụ thể.
                  </p>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS20["2"]} alt="So sánh quy hoạch chung và quy hoạch chi tiết 1/500 Nhơn Trạch"
                caption="Quy hoạch chung có phạm vi rộng, trong khi quy hoạch chi tiết 1/500 tập trung vào từng khu vực cụ thể"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="thong-tin">Quy hoạch 1/500 Nhơn Trạch thể hiện những thông tin gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi xem một bản đồ hoặc hồ sơ quy hoạch 1/500, người mua không nên chỉ
                    nhìn vào vị trí lô đất. Cần quan sát nhiều lớp thông tin khác nhau:
                  </p>
                  <H3>1. Ranh giới khu đất</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đầu tiên cần xác định ranh giới của khu vực được lập quy hoạch. Điều này
                    giúp người xem biết bản đồ đang áp dụng cho phạm vi nào và khu đất mình
                    quan tâm có nằm trong phạm vi đó hay không.
                  </p>
                  <H3>2. Hệ thống đường giao thông</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bản đồ 1/500 thể hiện mạng lưới đường nội bộ và các tuyến kết nối. Người
                    mua cần chú ý đến tuyến đường hiện hữu và quy hoạch, lộ giới, điểm kết
                    nối, các nút giao và khoảng cách từ bất động sản đến đường lớn.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tại Nhơn Trạch, thông tin này đặc biệt đáng quan tâm khi khu vực đang
                    được đầu tư và kết nối với nhiều công trình giao thông quan trọng như{" "}
                    <a href="/tin-tuc/duong-25c" className="text-primary-700 font-semibold hover:underline">đường 25C</a>,{" "}
                    <a href="/tin-tuc/cau-nhon-trach" className="text-primary-700 font-semibold hover:underline">cầu Nhơn Trạch</a>{" "}
                    và{" "}
                    <a href="/tin-tuc/vanh-dai-3" className="text-primary-700 font-semibold hover:underline">Vành đai 3 TP.HCM</a>.
                  </p>
                  <H3>3. Chức năng sử dụng đất</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là một trong những phần quan trọng nhất. Một khu đất trên bản đồ có
                    thể được xác định cho nhiều mục đích khác nhau:
                  </p>
                  <BulletList items={[
                    "Đất ở — phù hợp để xây dựng nhà ở",
                    "Đất thương mại dịch vụ — phục vụ hoạt động kinh doanh",
                    "Đất giáo dục, y tế — dành cho công trình công ích",
                    "Đất cây xanh, công viên — không gian công cộng",
                    "Đất giao thông — hành lang cho các tuyến đường",
                    "Các công trình hạ tầng kỹ thuật — điện, nước, thoát nước",
                  ]} />
                  <InfoBox type="warn">
                    Không nên chỉ nhìn vào màu sắc trên bản đồ rồi kết luận một khu đất chắc
                    chắn được xây nhà. Cần đối chiếu với chú giải bản đồ và hồ sơ pháp lý liên quan.
                  </InfoBox>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="vi-sao">Vì sao người mua đất Nhơn Trạch nên kiểm tra quy hoạch 1/500?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <H3>Tránh mua phải khu vực có chức năng sử dụng đất không phù hợp</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một vị trí nhìn rất đẹp trên thực địa chưa chắc đã phù hợp với mục đích
                    sử dụng mà người mua mong muốn. Nếu khu vực đó được quy hoạch cho giao
                    thông, cây xanh hoặc công trình công cộng thì cần đặc biệt thận trọng.
                  </p>
                  <H3>Biết được định hướng phát triển khu vực</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Quy hoạch có thể giúp người mua hình dung khu vực nào phát triển nhà ở,
                    tuyến đường nào được quy hoạch, công trình công cộng ở đâu và không gian
                    cây xanh được bố trí như thế nào.
                  </p>
                  <H3>Hạn chế rủi ro khi xuống tiền</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Kiểm tra quy hoạch không thể thay thế việc kiểm tra pháp lý, nhưng đây
                    là một bước quan trọng trong quá trình thẩm định. Người mua nên kiểm tra
                    đồng thời: <strong>Quy hoạch + pháp lý + hiện trạng + khả năng xây dựng
                    + hạ tầng thực tế.</strong>
                  </p>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS20["3"]} alt="Hồ sơ quy hoạch chi tiết tỷ lệ 1/500 tại khu vực Nhơn Trạch"
                caption="Hồ sơ quy hoạch chi tiết tỷ lệ 1/500 cần được đối chiếu cùng chú giải và các tài liệu liên quan"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="gia-bds">Quy hoạch 1/500 Nhơn Trạch có ảnh hưởng đến giá bất động sản không?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Quy hoạch và hạ tầng có thể tác động đến cách thị trường đánh giá một
                    khu vực. Tuy nhiên, không nên hiểu rằng cứ có quy hoạch 1/500 thì giá
                    đất chắc chắn tăng.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Giá bất động sản còn phụ thuộc vào nhiều yếu tố: vị trí, pháp lý, khả
                    năng sử dụng, hạ tầng giao thông, tiện ích, nguồn cung, nhu cầu thực tế,
                    tiến độ triển khai các dự án và mặt bằng giá khu vực.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đối với Nhơn Trạch, nhà đầu tư có thể kết hợp nghiên cứu quy hoạch với
                    các thông tin về hạ tầng như{" "}
                    <a href="/tin-tuc/duong-25c" className="text-primary-700 font-semibold hover:underline">đường 25C</a>,{" "}
                    <a href="/tin-tuc/cau-cat-lai" className="text-primary-700 font-semibold hover:underline">cầu Cát Lái</a>,{" "}
                    <a href="/tin-tuc/vanh-dai-3" className="text-primary-700 font-semibold hover:underline">Vành đai 3</a>{" "}
                    và{" "}
                    <a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" className="text-primary-700 font-semibold hover:underline">sân bay Long Thành</a>.
                  </p>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS20["4"]} alt="Bản đồ giao thông kết nối các khu vực tại Nhơn Trạch"
                caption="Hệ thống giao thông kết nối các khu vực tại Nhơn Trạch Đồng Nai"
                images={images} index={3} onOpen={openLightbox} />

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="thuc-te">Một số thông tin quy hoạch 1/500 tại khu vực Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Thông tin quy hoạch cần được xem theo từng khu vực cụ thể. Một ví dụ đáng
                    chú ý là đồ án quy hoạch chi tiết tỷ lệ 1/500 khu đất khoảng 102 ha tại
                    xã Phước An, được công bố công khai trong năm 2026.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bộ hồ sơ này bao gồm nhiều tài liệu liên quan như sơ đồ quy hoạch tổng
                    mặt bằng, tổ chức không gian kiến trúc cảnh quan, giao thông, cấp nước,
                    thoát nước và các hạng mục hạ tầng kỹ thuật.
                  </p>
                  <InfoBox>
                    Khi nghiên cứu quy hoạch 1/500, người xem không nên chỉ tìm một tấm ảnh
                    bản đồ mà nên xem cả bộ hồ sơ liên quan. Nguồn chính thức là các cơ quan
                    có thẩm quyền như UBND huyện Nhơn Trạch, Sở Xây dựng tỉnh Đồng Nai.
                  </InfoBox>
                </div>
              </section>

              {/* Section 7 */}
              <section className="mb-12">
                <SectionHeading id="cach-kiem-tra">Cách kiểm tra quy hoạch 1/500 Nhơn Trạch trước khi mua đất</SectionHeading>
                <div className="pt-5 space-y-4">
                  <StepCard num="1" title="Xác định chính xác vị trí bất động sản">
                    Cần có số thửa, số tờ bản đồ, địa chỉ, vị trí thực tế và diện tích. Không
                    nên chỉ kiểm tra dựa vào tên đường hoặc vị trí được môi giới gửi.
                  </StepCard>
                  <StepCard num="2" title="Xác định khu đất thuộc đồ án nào">
                    Sau khi có vị trí chính xác, xác định khu đất thuộc quy hoạch chung nào,
                    quy hoạch phân khu nào, quy hoạch chi tiết nào và có đồ án 1/500 hay không.
                  </StepCard>
                  <StepCard num="3" title="Đối chiếu bản đồ với hiện trạng">
                    Đối chiếu: bản đồ quy hoạch ↔ bản đồ địa chính ↔ vị trí thực tế. Điều
                    này giúp hạn chế trường hợp nhầm vị trí hoặc nhầm ranh giới.
                  </StepCard>
                  <StepCard num="4" title="Kiểm tra pháp lý">
                    Quy hoạch và pháp lý là hai vấn đề khác nhau. Người mua nên kiểm tra thêm
                    giấy chứng nhận, mục đích sử dụng đất, thời hạn sử dụng và tình trạng
                    thế chấp.
                  </StepCard>
                  <StepCard num="5" title="Kiểm tra thông tin mới nhất">
                    Quy hoạch có thể được điều chỉnh. Một bản đồ được chia sẻ trên mạng từ
                    nhiều năm trước không nên là căn cứ duy nhất để quyết định mua đất.
                  </StepCard>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS20["5"]} alt="Hạ tầng giao thông thực tế tại Nhơn Trạch Đồng Nai"
                caption="Hạ tầng giao thông thực tế tại Nhơn Trạch đang được đầu tư đồng bộ"
                images={images} index={4} onOpen={openLightbox} />

              {/* Section 8 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Quy hoạch 1/500 và Mega City 2 Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đối với người đang tìm hiểu{" "}
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2 Nhơn Trạch</a>,
                    thông tin quy hoạch nên được xem song song với hồ sơ pháp lý, mặt bằng,
                    vị trí và tiến độ dự án.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trên website Kim Oanh Đồng Nai, bạn có thể xem riêng từng nhóm thông tin
                    để có cái nhìn đầy đủ hơn:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      { href: "/mega-city-2",                    label: "Tổng quan dự án",    desc: "Quy mô và tổng quan" },
                      { href: "/mega-city-2/vi-tri",              label: "Vị trí",              desc: "Kết nối giao thông vùng" },
                      { href: "/mega-city-2/phap-ly",             label: "Pháp lý",             desc: "QĐ 1772/QĐ-UBND" },
                      { href: "/mega-city-2/quy-hoach-nhan-trach",label: "Quy hoạch",           desc: "Định hướng phát triển" },
                      { href: "/mega-city-2/tien-do",             label: "Tiến độ",             desc: "Tình hình thi công" },
                      { href: "/mega-city-2/bang-gia",            label: "Bảng giá",            desc: "Cập nhật mới nhất" },
                      { href: "/mega-city-2/hinh-anh",            label: "Hình ảnh thực tế",    desc: "Ảnh công trường" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50 transition-all">
                        <div>
                          <p className="text-sm font-bold text-primary-700">{l.label} →</p>
                          <p className="text-xs text-slate-500">{l.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS20["6"]} alt="Mega City 2 Nhơn Trạch và kết nối quy hoạch khu vực"
                caption="Mega City 2 Nhơn Trạch trong khu vực có quy hoạch và hạ tầng đang phát triển"
                images={images} index={5} onOpen={openLightbox} />

              {/* Section 9 */}
              <section className="mb-12">
                <SectionHeading id="sai-lam">Những sai lầm thường gặp khi xem quy hoạch Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-4">
                  <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                    <p className="font-bold text-amber-800 mb-1">Chỉ xem ảnh bản đồ được chia sẻ trên mạng</p>
                    <p className="text-amber-700 text-sm leading-relaxed">Ảnh bản đồ có thể bị cắt, thiếu chú thích hoặc không thể hiện đầy đủ thông tin.</p>
                  </div>
                  <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                    <p className="font-bold text-amber-800 mb-1">Nhầm quy hoạch chung với quy hoạch 1/500</p>
                    <p className="text-amber-700 text-sm leading-relaxed">Hai loại quy hoạch có phạm vi và mức độ chi tiết rất khác nhau.</p>
                  </div>
                  <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                    <p className="font-bold text-amber-800 mb-1">Nghĩ rằng quy hoạch là chắc chắn triển khai ngay</p>
                    <p className="text-amber-700 text-sm leading-relaxed">Việc triển khai thực tế còn phụ thuộc vào kế hoạch, nguồn lực, thủ tục và tiến độ từng dự án.</p>
                  </div>
                  <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                    <p className="font-bold text-amber-800 mb-1">Chỉ quan tâm đường lớn mà bỏ qua pháp lý</p>
                    <p className="text-amber-700 text-sm leading-relaxed">Một vị trí có hạ tầng tốt vẫn cần được kiểm tra đầy đủ về pháp lý và mục đích sử dụng đất.</p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về quy hoạch 1/500 Nhơn Trạch</SectionHeading>
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
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài được tổng hợp từ nguồn công khai và mang tính tham khảo.
                  Quy hoạch có thể được điều chỉnh theo từng thời kỳ. Cần xác nhận thông tin
                  chính thức từ cơ quan có thẩm quyền trước khi giao dịch bất động sản.
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
                      { href: "/mega-city-2",                    label: "Tổng quan dự án" },
                      { href: "/mega-city-2/vi-tri",              label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",             label: "Pháp lý dự án" },
                      { href: "/mega-city-2/quy-hoach-nhan-trach",label: "Quy hoạch Nhơn Trạch" },
                      { href: "/mega-city-2/tien-do",             label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia",            label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",            label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/mat-bang",            label: "Mặt bằng sản phẩm" },
                      { href: "/mega-city-2/hinh-anh",            label: "Hình ảnh thực tế" },
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
                      { label: "Quy hoạch Nhơn Trạch mới nhất",        href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat" },
                      { label: "Cầu Nhơn Trạch – Cập nhật mới",        href: "/tin-tuc/cau-nhon-trach" },
                      { label: "Đường 25C Nhơn Trạch 2026",            href: "/tin-tuc/duong-25c" },
                      { label: "Cầu Cát Lái – Cập nhật mới nhất",      href: "/tin-tuc/cau-cat-lai" },
                      { label: "Hạ tầng giao thông Nhơn Trạch 2026",   href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat" },
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
            <h2 className="text-2xl font-black text-slate-900 mb-3">Đang tìm hiểu Mega City 2 Nhơn Trạch?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Xem thông tin dự án được tổng hợp theo từng chuyên mục: vị trí, quy hoạch,
              pháp lý, tiến độ, bảng giá và hình ảnh thực tế.
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
              href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat",
              title: "Quy hoạch Nhơn Trạch mới nhất 2026",
              description: "Phân tích bản đồ quy hoạch, định hướng phát triển đô thị và tác động đến thị trường.",
              tag: "Quy hoạch",
            },
            {
              href: "/tin-tuc/cau-nhon-trach",
              title: "Cầu Nhơn Trạch 2026: Kết nối giao thông mới",
              description: "Cầu Nhơn Trạch đã khánh thành 19/8/2025, phân tích tác động đến BĐS Nhơn Trạch.",
              tag: "Hạ tầng",
            },
            {
              href: "/tin-tuc/gia-dat-nhon-trach-2026",
              title: "Giá đất Nhơn Trạch 2026",
              description: "Cập nhật giá đất thực tế và phân tích xu hướng thị trường bất động sản Nhơn Trạch.",
              tag: "Thị trường",
            },
            {
              href: "/mega-city-2/phap-ly",
              title: "Pháp lý Mega City 2 Nhơn Trạch",
              description: "Thông tin đầy đủ về quy hoạch 1/500, QĐ 1772 và hồ sơ pháp lý dự án.",
              tag: "Dự án",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
