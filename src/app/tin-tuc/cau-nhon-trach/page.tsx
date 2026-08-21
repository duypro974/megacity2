"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS19 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/cau-nhon-trach`;
const PUBLISHED     = "21/08/2026";
const PUBLISHED_ISO = "2026-08-21";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cầu Nhơn Trạch 2026: Tiến độ, kết nối giao thông và tác động đến bất động sản",
  description: "Cập nhật cầu Nhơn Trạch 2026: vị trí, quy mô, kết nối Vành đai 3, cao tốc TP.HCM – Long Thành – Dầu Giây và tác động đến bất động sản Nhơn Trạch.",
  image: [IMG_NEWS19["1"], IMG_NEWS19["2"], IMG_NEWS19["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "cầu nhơn trạch, cầu nhơn trạch vành đai 3, cầu nhơn trạch đồng nai, tiến độ cầu nhơn trạch, cầu nhơn trạch thông xe, bất động sản nhơn trạch, mega city 2 nhơn trạch",
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
      "@type": "Question", name: "Cầu Nhơn Trạch đã thông xe chưa?",
      acceptedAnswer: { "@type": "Answer", text: "Có. Cầu Nhơn Trạch được khánh thành ngày 19/8/2025 và bắt đầu khai thác từ 7h ngày 20/8/2025." },
    },
    {
      "@type": "Question", name: "Cầu Nhơn Trạch dài bao nhiêu?",
      acceptedAnswer: { "@type": "Answer", text: "Cầu có chiều dài khoảng 2,6 km, rộng khoảng 20,5–26 m, gồm 4 làn ô tô và 2 làn hỗn hợp. Đây là một trong những hạng mục lớn nhất trên tuyến Vành đai 3 TP.HCM." },
    },
    {
      "@type": "Question", name: "Cầu Nhơn Trạch nối những khu vực nào?",
      acceptedAnswer: { "@type": "Answer", text: "Cầu vượt sông Đồng Nai, kết nối khu vực Nhơn Trạch, Đồng Nai với TP.HCM thông qua Dự án thành phần 1A của Vành đai 3. Phía Đồng Nai kết nối với đường tỉnh 25B, phía TP.HCM kết nối với cao tốc TP.HCM – Long Thành – Dầu Giây." },
    },
    {
      "@type": "Question", name: "Cầu Nhơn Trạch có kết nối cao tốc TP.HCM – Long Thành – Dầu Giây không?",
      acceptedAnswer: { "@type": "Answer", text: "Có. Dự án thành phần 1A kết nối từ khu vực đường tỉnh 25B ở Đồng Nai đến cao tốc TP.HCM – Long Thành – Dầu Giây ở phía TP.HCM." },
    },
    {
      "@type": "Question", name: "Cầu Nhơn Trạch có ảnh hưởng đến bất động sản Nhơn Trạch không?",
      acceptedAnswer: { "@type": "Answer", text: "Cầu giúp cải thiện khả năng kết nối giao thông, qua đó có thể hỗ trợ sự quan tâm đối với các khu vực có vị trí thuận lợi. Tuy nhiên, giá bất động sản còn phụ thuộc vào pháp lý, quy hoạch, cung cầu, vị trí và nhiều yếu tố khác." },
    },
    {
      "@type": "Question", name: "Cầu Nhơn Trạch có tác động đến Mega City 2 không?",
      acceptedAnswer: { "@type": "Answer", text: "Mega City 2 nằm tại Nhơn Trạch nên hệ thống hạ tầng giao thông khu vực là một trong những yếu tố có thể tham khảo. Người mua nên xem xét đồng thời cầu Nhơn Trạch, Vành đai 3, đường 25C, cao tốc và các tuyến giao thông khác." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Cầu Nhơn Trạch 2026", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS19["1"], alt: "Cầu Nhơn Trạch trên tuyến Vành đai 3 kết nối Đồng Nai và TP.HCM",                   caption: "Cầu Nhơn Trạch – hạng mục quan trọng thuộc Dự án thành phần 1A của Vành đai 3 TP.HCM" },
  { src: IMG_NEWS19["2"], alt: "Vị trí cầu Nhơn Trạch trên tuyến Vành đai 3 kết nối Đồng Nai và TP.HCM",            caption: "Cầu Nhơn Trạch tạo kết nối giữa khu vực Nhơn Trạch, Đồng Nai với hệ thống giao thông phía TP.HCM" },
  { src: IMG_NEWS19["3"], alt: "Toàn cảnh cầu Nhơn Trạch bắc qua sông Đồng Nai",                                    caption: "Toàn cảnh cầu Nhơn Trạch bắc qua sông Đồng Nai nhìn từ trên cao" },
  { src: IMG_NEWS19["4"], alt: "Sơ đồ kết nối cầu Nhơn Trạch với Vành đai 3 và cao tốc TP.HCM Long Thành Dầu Giây", caption: "Hệ thống kết nối cầu Nhơn Trạch với các tuyến giao thông liên vùng" },
  { src: IMG_NEWS19["5"], alt: "Cầu Nhơn Trạch chính thức đưa vào khai thác kết nối Đồng Nai và TP.HCM",            caption: "Cầu Nhơn Trạch khai thác từ 7h ngày 20/8/2025" },
  { src: IMG_NEWS19["6"], alt: "Cầu Nhơn Trạch và hệ thống giao thông kết nối khu vực Nhơn Trạch Đồng Nai",        caption: "Cầu Nhơn Trạch trong tổng thể mạng lưới hạ tầng đang hình thành tại Nhơn Trạch" },
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

export default function CauNhonTrachPage() {
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
              <span className="text-slate-600 font-medium">Cầu Nhơn Trạch 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Đã khai thác</span>
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Hạ tầng</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 10 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Cầu Nhơn Trạch 2026: Tiến độ, kết nối giao thông và tác động đến bất động sản
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Cập nhật cầu Nhơn Trạch 2026: vị trí, quy mô, kết nối Vành đai 3, cao tốc
              TP.HCM – Long Thành – Dầu Giây và tác động đến bất động sản Nhơn Trạch.
            </p>
          </div>
          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh cầu Nhơn Trạch"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS19["1"]} alt="Cầu Nhơn Trạch trên tuyến Vành đai 3 kết nối Đồng Nai và TP.HCM"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Cầu Nhơn Trạch là hạng mục quan trọng thuộc Dự án thành phần 1A của Vành đai 3 TP.HCM, kết nối Đồng Nai với TP.HCM qua sông Đồng Nai
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
                    ["#la-gi",       "1. Cầu Nhơn Trạch là gì?"],
                    ["#vi-tri",      "2. Vị trí cầu Nhơn Trạch ở đâu?"],
                    ["#vanh-dai-3",  "3. Cầu Nhơn Trạch thuộc tuyến Vành đai 3 như thế nào?"],
                    ["#thong-xe",    "4. Cầu Nhơn Trạch đã thông xe chưa?"],
                    ["#ket-noi",     "5. Kết nối với những tuyến đường nào?"],
                    ["#giao-thong",  "6. Tác động đến giao thông khu vực"],
                    ["#bds",         "7. Tác động đến bất động sản Nhơn Trạch"],
                    ["#mega-city-2", "8. Tác động đến Mega City 2"],
                    ["#faq",         "9. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Cầu Nhơn Trạch là một trong những công trình giao thông quan trọng nhất trên
                tuyến{" "}
                <a href="/tin-tuc/vanh-dai-3" className="text-primary-700 font-semibold hover:underline">Vành đai 3 TP.HCM</a>,
                tạo thêm kết nối trực tiếp giữa khu vực Nhơn Trạch, tỉnh Đồng Nai và TP.HCM.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Sau khi được khánh thành ngày 19/8/2025 và đưa vào khai thác từ 7h ngày
                20/8/2025, cầu Nhơn Trạch mở thêm một hướng lưu thông mới giữa Đồng Nai và
                TP.HCM, đồng thời kết nối với cao tốc TP.HCM – Long Thành – Dầu Giây.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Việc đưa công trình vào khai thác không chỉ có ý nghĩa về giao thông mà còn
                góp phần thay đổi khả năng tiếp cận của Nhơn Trạch với các trung tâm kinh tế,
                khu công nghiệp và hệ thống hạ tầng lớn của vùng Đông Nam Bộ.
              </p>

              {/* Thông tin nhanh */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-10">
                <div className="bg-primary-600 px-5 py-3.5">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Thông tin nhanh về cầu Nhơn Trạch</p>
                </div>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-slate-100">
                    {[
                      ["Tuyến",             "Vành đai 3 TP.HCM"],
                      ["Dự án thành phần",  "1A Tân Vạn – Nhơn Trạch"],
                      ["Chiều dài cầu",     "Khoảng 2,6 km"],
                      ["Chiều rộng",        "Khoảng 20,5–26 m (4 làn ô tô + 2 làn hỗn hợp)"],
                      ["Sông vượt qua",     "Sông Đồng Nai"],
                      ["Tĩnh không",        "Khoảng 30,5 m"],
                      ["Kết nối",           "Đồng Nai – TP.HCM (cao tốc TP.HCM – Long Thành – Dầu Giây)"],
                      ["Khánh thành",       "19/8/2025"],
                      ["Khai thác",         "Từ 7h ngày 20/8/2025"],
                    ].map(([label, val], i) => (
                      <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                        <td className="px-5 py-3 font-semibold text-slate-700 w-44">{label}</td>
                        <td className="px-5 py-3 text-slate-600">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Cầu Nhơn Trạch và đoạn dự án thành phần 1A đã được
                khai thác từ tháng 8/2025. Toàn bộ tuyến Vành đai 3 TP.HCM gồm nhiều đoạn
                thành phần với tiến độ khác nhau — không nên hiểu cầu thông xe đồng nghĩa
                toàn tuyến Vành đai 3 đã hoàn thành.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="la-gi">Cầu Nhơn Trạch là gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cầu Nhơn Trạch thuộc Dự án thành phần 1A, đoạn Tân Vạn – Nhơn Trạch của
                    tuyến Vành đai 3 TP.HCM. Dự án thành phần 1A có chiều dài tuyến chính
                    khoảng 8,14 km, kết nối từ đường tỉnh 25B tại Đồng Nai đến cao tốc
                    TP.HCM – Long Thành – Dầu Giây ở phía TP.HCM.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong đó, cầu Nhơn Trạch là hạng mục nổi bật nhất khi vượt qua sông Đồng
                    Nai với chiều dài khoảng 2,6 km, tạo tuyến kết nối mới giữa Đồng Nai và
                    TP.HCM.
                  </p>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS19["2"]} alt="Vị trí cầu Nhơn Trạch trên tuyến Vành đai 3 kết nối Đồng Nai và TP.HCM"
                caption="Cầu Nhơn Trạch tạo kết nối giữa khu vực Nhơn Trạch, Đồng Nai với hệ thống giao thông phía TP.HCM"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="vi-tri">Vị trí cầu Nhơn Trạch ở đâu?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cầu Nhơn Trạch bắc qua sông Đồng Nai, tạo kết nối giữa khu vực Nhơn Trạch
                    của Đồng Nai với khu vực TP.HCM. Ở phía Đồng Nai, tuyến kết nối với đường
                    tỉnh 25B và hệ thống giao thông của Nhơn Trạch. Ở phía TP.HCM, dự án kết
                    nối với cao tốc TP.HCM – Long Thành – Dầu Giây.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trước khi cầu được đưa vào khai thác, các phương án di chuyển giữa Nhơn
                    Trạch và TP.HCM phụ thuộc nhiều vào các tuyến hiện hữu, trong đó có hướng
                    qua phà Cát Lái và cao tốc TP.HCM – Long Thành – Dầu Giây. Việc xuất hiện
                    thêm tuyến kết nối qua cầu Nhơn Trạch giúp mạng lưới giao thông khu vực
                    có thêm lựa chọn và tăng khả năng phân bổ dòng phương tiện.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/duong-25c">Đường 25C Nhơn Trạch →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí Mega City 2 →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="vanh-dai-3">Cầu Nhơn Trạch thuộc tuyến Vành đai 3 như thế nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    <a href="/tin-tuc/vanh-dai-3" className="text-primary-700 font-semibold hover:underline">Vành đai 3 TP.HCM</a> là
                    tuyến giao thông liên vùng đi qua TP.HCM, Đồng Nai, Bình Dương và Long An,
                    với tổng chiều dài hơn 76 km, được triển khai thành nhiều dự án thành phần.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đoạn Tân Vạn – Nhơn Trạch (Dự án thành phần 1A) có vai trò quan trọng trong
                    việc kết nối phía Đông TP.HCM với Đồng Nai. Cầu Nhơn Trạch chính là mắt
                    xích then chốt của đoạn tuyến này khi vượt qua sông Đồng Nai.
                  </p>
                  <InfoBox>
                    Xem thêm phân tích tổng thể tuyến:{" "}
                    <a href="/tin-tuc/vanh-dai-3" className="font-bold text-primary-700 underline">
                      Vành đai 3 TP.HCM 2026: Tiến độ và tác động đến BĐS Nhơn Trạch →
                    </a>
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS19["3"]} alt="Toàn cảnh cầu Nhơn Trạch bắc qua sông Đồng Nai"
                caption="Toàn cảnh cầu Nhơn Trạch bắc qua sông Đồng Nai nhìn từ trên cao"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="thong-xe">Cầu Nhơn Trạch đã thông xe chưa?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    <strong className="text-emerald-700">Có.</strong> Cầu Nhơn Trạch đã được
                    khánh thành ngày <strong>19/8/2025</strong> và chính thức khai thác từ{" "}
                    <strong>7h ngày 20/8/2025</strong>. Đây là một trong những cột mốc quan
                    trọng của tuyến Vành đai 3 TP.HCM.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Việc khai thác đoạn tuyến này giúp tạo thêm kết nối giữa Đồng Nai với
                    TP.HCM và liên thông với cao tốc TP.HCM – Long Thành – Dầu Giây.
                  </p>
                  <InfoBox type="warn">
                    <strong>Lưu ý phân biệt:</strong> Cầu Nhơn Trạch và đoạn dự án thành phần
                    1A đã khai thác, nhưng toàn bộ tuyến Vành đai 3 TP.HCM gồm nhiều đoạn
                    thành phần với tiến độ khác nhau. Chính phủ từng đặt mục tiêu hoàn thành
                    toàn bộ dự án vào năm 2026.
                  </InfoBox>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="ket-noi">Cầu Nhơn Trạch kết nối với những tuyến đường nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một trong những giá trị lớn nhất của cầu Nhơn Trạch nằm ở khả năng kết nối
                    với nhiều tuyến giao thông quan trọng:
                  </p>
                  <H3>Cao tốc TP.HCM – Long Thành – Dầu Giây</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là tuyến cao tốc quan trọng kết nối TP.HCM với khu vực Long Thành và
                    các tỉnh Đông Nam Bộ. Dự án thành phần 1A kết nối với cao tốc này ở phía
                    TP.HCM, giúp người dân Nhơn Trạch có thêm lựa chọn di chuyển nhanh.
                  </p>
                  <H3>Đường tỉnh 25B – kết nối nội vùng Nhơn Trạch</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ở phía Nhơn Trạch, tuyến dự án kết nối với đường tỉnh 25B — một trong
                    những trục giao thông quan trọng của địa phương. Kết hợp với{" "}
                    <a href="/tin-tuc/duong-25c" className="text-primary-700 font-semibold hover:underline">đường 25C</a>{" "}
                    và các tuyến nội vùng, mạng lưới giao thông Nhơn Trạch ngày càng hoàn thiện.
                  </p>
                  <H3>Vành đai 3 TP.HCM và mạng lưới liên vùng</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cầu Nhơn Trạch là một phần của tuyến Vành đai 3, qua đó tăng khả năng kết
                    nối giữa Nhơn Trạch với TP.HCM, Bình Dương và Long An trong tổng thể mạng
                    lưới giao thông liên vùng.
                  </p>
                  <BulletList items={[
                    <><a href="/tin-tuc/cao-toc-ben-luc-long-thanh" className="text-primary-700 font-semibold hover:underline">Cao tốc Bến Lức - Long Thành</a> — kết nối phía Tây TP.HCM với Đông Nam Bộ</>,
                    <><a href="/tin-tuc/cao-toc-bien-hoa-vung-tau" className="text-primary-700 font-semibold hover:underline">Cao tốc Biên Hòa - Vũng Tàu</a> — mở rộng kết nối đến khu vực cảng biển</>,
                    <><a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" className="text-primary-700 font-semibold hover:underline">Sân bay Long Thành</a> — cửa ngõ hàng không quốc tế trọng điểm</>,
                  ]} />
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS19["4"]} alt="Sơ đồ kết nối cầu Nhơn Trạch với Vành đai 3 và cao tốc TP.HCM Long Thành Dầu Giây"
                caption="Hệ thống kết nối cầu Nhơn Trạch với các tuyến giao thông liên vùng"
                images={images} index={3} onOpen={openLightbox} />

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="giao-thong">Cầu Nhơn Trạch tác động như thế nào đến giao thông khu vực?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tác động đầu tiên là tạo thêm một hướng kết nối giữa Đồng Nai và TP.HCM.
                    Việc đưa Dự án thành phần 1A vào khai thác được kỳ vọng rút ngắn hành trình
                    từ Đồng Nai đến TP.HCM, hỗ trợ vận chuyển hàng hóa, tăng cường trao đổi
                    thương mại và góp phần phân luồng giao thông.
                  </p>
                  <BulletList items={[
                    "Rút ngắn và đa dạng hóa hướng di chuyển giữa Nhơn Trạch và TP.HCM",
                    "Tăng khả năng tiếp cận cao tốc TP.HCM – Long Thành – Dầu Giây từ phía Nhơn Trạch",
                    "Hỗ trợ kết nối khu công nghiệp và khu đô thị trong khu vực",
                    "Tạo điều kiện thuận lợi hơn cho người dân làm việc tại TP.HCM nhưng sống tại Đồng Nai",
                    "Cải thiện khả năng vận chuyển hàng hóa giữa các khu công nghiệp",
                  ]} />
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS19["5"]} alt="Cầu Nhơn Trạch chính thức đưa vào khai thác kết nối Đồng Nai và TP.HCM"
                caption="Cầu Nhơn Trạch khai thác từ 7h ngày 20/8/2025"
                images={images} index={4} onOpen={openLightbox} />

              {/* Section 7 */}
              <section className="mb-12">
                <SectionHeading id="bds">Cầu Nhơn Trạch ảnh hưởng thế nào đến bất động sản Nhơn Trạch?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hạ tầng giao thông thường là một trong những yếu tố được quan tâm khi đánh
                    giá triển vọng của thị trường bất động sản. Cần phân biệt rõ giữa tác động
                    về mặt hạ tầng và mức tăng giá bất động sản thực tế.
                  </p>
                  <H3>Tác động tích cực về mặt kết nối</H3>
                  <BulletList items={[
                    "Rút ngắn và đa dạng hóa hướng di chuyển giữa Nhơn Trạch và TP.HCM",
                    "Tăng tính thuận tiện cho người dân làm việc tại TP.HCM nhưng sinh sống tại Đồng Nai",
                    "Hỗ trợ kết nối khu công nghiệp và khu đô thị, tạo nhu cầu nhà ở thực",
                    "Gia tăng sự quan tâm của thị trường đối với các khu vực có hạ tầng hoàn thiện",
                    "Tạo điều kiện thuận lợi hơn cho hoạt động vận chuyển hàng hóa và logistics",
                  ]} />
                  <InfoBox type="warn">
                    <strong>Lưu ý:</strong> Không nên kết luận rằng cầu Nhơn Trạch chắc chắn
                    khiến giá đất tăng. Giá bất động sản còn phụ thuộc vào pháp lý, quy hoạch,
                    nguồn cung, nhu cầu thực tế, chất lượng dự án và diễn biến thị trường.
                  </InfoBox>
                  <H3>5 yếu tố cần đánh giá trước khi mua BĐS Nhơn Trạch</H3>
                  <BulletList items={[
                    "Vị trí thực tế: khoảng cách đến các tuyến đường chính và thời gian di chuyển thực tế",
                    "Pháp lý: kiểm tra tình trạng hồ sơ pháp lý của dự án hoặc sản phẩm",
                    "Quy hoạch: xem xét quy hoạch sử dụng đất và định hướng hạ tầng khu vực",
                    "Khả năng kết nối: không chỉ nhìn khoảng cách trên bản đồ mà cần đánh giá tuyến đường thực tế",
                    "Giá và thanh khoản: so sánh giá với khu vực lân cận và nhu cầu ở thực, cho thuê",
                  ]} />
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/gia-dat-nhon-trach-2026">Giá đất Nhơn Trạch 2026 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá Mega City 2 →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Cầu Nhơn Trạch có tác động đến Mega City 2 không?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2</a>{" "}
                    nằm trong khu vực Nhơn Trạch, nên những thay đổi về hệ thống hạ tầng giao
                    thông của toàn khu vực là yếu tố cần theo dõi khi đánh giá khả năng kết
                    nối của dự án.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Người mua nên xem xét tổng thể nhiều tuyến giao thông thay vì chỉ nhìn vào
                    một công trình. Bản đồ kết nối đáng chú ý:
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm text-slate-700">
                    <div className="flex flex-col items-start gap-1 font-mono text-[13px]">
                      <span className="font-bold text-primary-700">Cầu Nhơn Trạch</span>
                      <span className="text-slate-400 pl-4">↓ Vành đai 3 TP.HCM</span>
                      <span className="text-slate-400 pl-4">↓ Cao tốc TP.HCM – Long Thành – Dầu Giây</span>
                      <span className="text-slate-400 pl-4">↓ Đường 25C</span>
                      <span className="text-slate-400 pl-4">↓ Sân bay Long Thành</span>
                      <span className="font-bold text-primary-700 pl-4">↓ Mega City 2</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là cách tiếp cận phù hợp hơn khi đánh giá vị trí và khả năng kết nối
                    của một dự án bất động sản tại Nhơn Trạch. Bạn có thể xem thêm thông tin
                    chi tiết tại{" "}
                    <a href="/mega-city-2/vi-tri" className="text-primary-700 font-semibold hover:underline">Vị trí Mega City 2</a>{" "}
                    và{" "}
                    <a href="/mega-city-2/quy-hoach-nhan-trach" className="text-primary-700 font-semibold hover:underline">Quy hoạch Nhơn Trạch</a>.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Tổng quan Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí dự án →</LinkBtn>
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS19["6"]} alt="Cầu Nhơn Trạch và hệ thống giao thông kết nối khu vực Nhơn Trạch Đồng Nai"
                caption="Cầu Nhơn Trạch trong tổng thể mạng lưới hạ tầng đang hình thành tại Nhơn Trạch"
                images={images} index={5} onOpen={openLightbox} />

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về cầu Nhơn Trạch</SectionHeading>
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
                <SectionHeading>Xem thêm về hạ tầng Nhơn Trạch</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/mega-city-2/vi-tri",                                         label: "Vị trí Mega City 2" },
                    { href: "/mega-city-2/quy-hoach-nhan-trach",                           label: "Quy hoạch Nhơn Trạch 2026" },
                    { href: "/tin-tuc/duong-25c",                                          label: "Đường 25C Nhơn Trạch" },
                    { href: "/tin-tuc/vanh-dai-3",                                         label: "Vành đai 3 TP.HCM" },
                    { href: "/tin-tuc/cao-toc-ben-luc-long-thanh",                         label: "Cao tốc Bến Lức - Long Thành" },
                    { href: "/tin-tuc/cao-toc-bien-hoa-vung-tau",                          label: "Cao tốc Biên Hòa - Vũng Tàu" },
                    { href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach",      label: "Sân bay Long Thành và BĐS Nhơn Trạch" },
                    { href: "/mega-city-2/bang-gia",                                       label: "Bảng giá Mega City 2" },
                    { href: "/mega-city-2/phap-ly",                                        label: "Pháp lý Mega City 2" },
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
                  Trước khi đầu tư, cần xác nhận thông tin pháp lý, quy hoạch và tiến độ hạ
                  tầng thực tế từ cơ quan có thẩm quyền.
                </p>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="font-bold text-emerald-800 text-sm">Đã khai thác</p>
                  </div>
                  <p className="text-emerald-700 text-xs leading-relaxed">
                    Cầu Nhơn Trạch khánh thành <strong>19/8/2025</strong>, khai thác từ{" "}
                    <strong>7h ngày 20/8/2025</strong>.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu Mega City 2</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/mega-city-2",                    label: "Tổng quan dự án" },
                      { href: "/mega-city-2/vi-tri",              label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",             label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",             label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia",            label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",            label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/mat-bang",            label: "Mặt bằng sản phẩm" },
                      { href: "/mega-city-2/quy-hoach-nhan-trach",label: "Quy hoạch Nhơn Trạch" },
                      { href: "/mega-city-2/faq",                 label: "FAQ dự án" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-primary-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white">
                        <span>{l.label}</span><span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Hạ tầng liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Vành đai 3 TP.HCM 2026",              href: "/tin-tuc/vanh-dai-3" },
                      { label: "Đường 25C Nhơn Trạch",                 href: "/tin-tuc/duong-25c" },
                      { label: "Sân bay Long Thành & BĐS Nhơn Trạch",  href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" },
                      { label: "Cao tốc Bến Lức - Long Thành",         href: "/tin-tuc/cao-toc-ben-luc-long-thanh" },
                      { label: "Cao tốc Biên Hòa - Vũng Tàu",         href: "/tin-tuc/cao-toc-bien-hoa-vung-tau" },
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
            <h2 className="text-2xl font-black text-slate-900 mb-3">Đang tìm hiểu bất động sản Nhơn Trạch?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Xem thông tin dự án, vị trí, pháp lý, bảng giá và hạ tầng khu vực trước khi
              đưa ra quyết định đầu tư tại Nhơn Trạch.
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
            {
              href: "/mega-city-2",
              title: "Mega City 2 Nhơn Trạch – Tổng quan dự án",
              description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá dự án Mega City 2.",
              tag: "Dự án",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
