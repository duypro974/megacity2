"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS21 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/nen-mua-dat-nen-nhon-trach-hay-dau-tu-can-ho`;
const PUBLISHED     = "22/08/2026";
const PUBLISHED_ISO = "2026-08-22";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nên mua đất nền Nhơn Trạch hay đầu tư căn hộ? So sánh chi tiết cho người mới 2026",
  description: "Nên mua đất nền Nhơn Trạch hay đầu tư căn hộ? So sánh ưu nhược điểm, vốn, pháp lý, khả năng sử dụng, thanh khoản và tiềm năng từng loại hình.",
  image: [IMG_NEWS21["1"], IMG_NEWS21["2"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "đất nền nhơn trạch, đầu tư căn hộ nhơn trạch, bất động sản nhơn trạch 2026, mua đất nhơn trạch, kinh nghiệm đầu tư bất động sản nhơn trạch",
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
      "@type": "Question", name: "Nên mua đất nền Nhơn Trạch hay căn hộ?",
      acceptedAnswer: { "@type": "Answer", text: "Không có lựa chọn tốt nhất cho tất cả mọi người. Đất nền có thể phù hợp với người đầu tư dài hạn và quan tâm quyền sử dụng đất, trong khi căn hộ có thể phù hợp với người muốn ở hoặc khai thác cho thuê." },
    },
    {
      "@type": "Question", name: "Đất nền Nhơn Trạch có phù hợp đầu tư dài hạn không?",
      acceptedAnswer: { "@type": "Answer", text: "Có thể cân nhắc nếu tài sản có vị trí phù hợp, pháp lý rõ ràng, quy hoạch ổn định và mức giá hợp lý. Nhà đầu tư cần xác định rõ khả năng nắm giữ trước khi giao dịch." },
    },
    {
      "@type": "Question", name: "Căn hộ Nhơn Trạch có dễ cho thuê không?",
      acceptedAnswer: { "@type": "Answer", text: "Khả năng cho thuê phụ thuộc vào vị trí, dân cư, tiện ích, giá thuê và nguồn cung căn hộ. Không nên mặc định mọi căn hộ đều có khả năng cho thuê tốt." },
    },
    {
      "@type": "Question", name: "Mua đất nền cần kiểm tra những gì?",
      acceptedAnswer: { "@type": "Answer", text: "Nên kiểm tra giấy chứng nhận, mục đích sử dụng đất, quy hoạch, lộ giới, tình trạng thế chấp, tranh chấp và điều kiện chuyển nhượng. Không nên bỏ qua bước kiểm tra pháp lý." },
    },
    {
      "@type": "Question", name: "Hạ tầng Nhơn Trạch có ảnh hưởng đến giá bất động sản không?",
      acceptedAnswer: { "@type": "Answer", text: "Hạ tầng có thể ảnh hưởng đến khả năng kết nối và quá trình phát triển khu vực, nhưng không đảm bảo giá bất động sản tăng. Giá còn phụ thuộc vào nhiều yếu tố khác như pháp lý, quy hoạch, cung cầu." },
    },
    {
      "@type": "Question", name: "Mega City 2 có phù hợp với người mua để ở không?",
      acceptedAnswer: { "@type": "Answer", text: "Cần đánh giá dựa trên vị trí, khả năng kết nối, tiện ích, quy hoạch, pháp lý và nhu cầu sử dụng thực tế. Người mua nên tìm hiểu hồ sơ dự án và khảo sát khu vực trước khi quyết định." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Đất nền hay căn hộ Nhơn Trạch 2026", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS21["1"], alt: "Thị trường bất động sản Nhơn Trạch Đồng Nai năm 2026",             caption: "Nhơn Trạch đang được quan tâm trong bối cảnh hạ tầng và đô thị khu vực tiếp tục phát triển" },
  { src: IMG_NEWS21["2"], alt: "Đất nền Nhơn Trạch Đồng Nai có hạ tầng giao thông khu vực",        caption: "Khi mua đất nền, cần đánh giá đồng thời vị trí, pháp lý, quy hoạch và hạ tầng thực tế" },
  { src: IMG_NEWS21["3"], alt: "Mega City 2 Nhơn Trạch Đồng Nai và kết nối hạ tầng khu vực",       caption: "Mega City 2 được tìm hiểu trong bối cảnh hạ tầng và đô thị Nhơn Trạch tiếp tục phát triển" },
  { src: IMG_NEWS21["4"], alt: "So sánh đất nền và căn hộ tại Nhơn Trạch Đồng Nai năm 2026",      caption: "Đất nền và căn hộ có ưu điểm, hạn chế và mục tiêu sử dụng khác nhau" },
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

export default function DatNenHayCanHoPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}
      <CorpHeader solid />

      <div className="bg-white min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a><span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a><span>/</span>
              <span className="text-slate-600 font-medium">Đất nền hay căn hộ Nhơn Trạch 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Thị trường</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 13 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Nên mua đất nền Nhơn Trạch hay đầu tư căn hộ? So sánh chi tiết cho người mới
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              So sánh ưu nhược điểm, vốn, pháp lý, khả năng sử dụng, thanh khoản và tiềm
              năng của đất nền và căn hộ tại Nhơn Trạch để có cơ sở lựa chọn phù hợp.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh bất động sản Nhơn Trạch"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS21["1"]} alt="Nên mua đất nền Nhơn Trạch hay đầu tư căn hộ năm 2026"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Nhơn Trạch đang được quan tâm trong bối cảnh hạ tầng giao thông và không gian đô thị khu vực tiếp tục phát triển
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
                    ["#tong-quan",    "1. Tổng quan thị trường BĐS Nhơn Trạch"],
                    ["#dat-nen",      "2. Đất nền Nhơn Trạch là gì?"],
                    ["#can-ho",       "3. Đầu tư căn hộ Nhơn Trạch là gì?"],
                    ["#so-sanh",      "4. So sánh đất nền và căn hộ"],
                    ["#uu-dat-nen",   "5. Ưu điểm của đất nền"],
                    ["#nhuoc-dat-nen","6. Nhược điểm của đất nền"],
                    ["#uu-can-ho",    "7. Ưu điểm của căn hộ"],
                    ["#nhuoc-can-ho", "8. Nhược điểm của căn hộ"],
                    ["#nen-chon",     "9. Vậy nên chọn loại nào?"],
                    ["#tinh-hieu-qua","10. Cách tính hiệu quả đầu tư"],
                    ["#mega-city-2",  "11. Mega City 2 phù hợp với ai?"],
                    ["#7-cau-hoi",    "12. 7 câu hỏi trước khi quyết định"],
                    ["#sai-lam",      "13. Những sai lầm thường gặp"],
                    ["#faq",          "14. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Khi tìm hiểu thị trường bất động sản Nhơn Trạch, một trong những câu hỏi phổ
                biến là nên mua đất nền hay lựa chọn căn hộ để đầu tư. Hai loại hình này có
                đặc điểm hoàn toàn khác nhau về vốn, mục đích sử dụng, khả năng khai thác,
                chi phí sở hữu và chiến lược đầu tư.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Không có câu trả lời chung rằng đất nền hay căn hộ luôn tốt hơn. Người mua
                cần lựa chọn dựa trên mục tiêu, nguồn vốn, thời gian đầu tư và khả năng
                chấp nhận rủi ro.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Bài viết mang tính thông tin và so sánh tham khảo,
                không phải khuyến nghị đầu tư. Trước khi giao dịch, cần kiểm tra pháp lý,
                quy hoạch và thẩm định tài sản cụ thể.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">Tổng quan thị trường bất động sản Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch là khu vực nằm trong không gian phát triển kinh tế phía Đông
                    Nam Bộ và có mối liên hệ giao thông với TP.HCM, Long Thành và các khu vực
                    lân cận. Trong những năm gần đây, nhiều dự án hạ tầng được triển khai đã
                    khiến khả năng kết nối của khu vực trở thành chủ đề được thị trường quan tâm.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một số công trình đáng chú ý gồm:{" "}
                    <a href="/tin-tuc/vanh-dai-3" className="text-primary-700 font-semibold hover:underline">Vành đai 3 TP.HCM</a>,{" "}
                    <a href="/tin-tuc/cau-nhon-trach" className="text-primary-700 font-semibold hover:underline">cầu Nhơn Trạch</a>,{" "}
                    <a href="/tin-tuc/duong-25c" className="text-primary-700 font-semibold hover:underline">đường 25C</a>,{" "}
                    <a href="/tin-tuc/cao-toc-ben-luc-long-thanh" className="text-primary-700 font-semibold hover:underline">cao tốc Bến Lức – Long Thành</a>{" "}
                    và định hướng phát triển{" "}
                    <a href="/tin-tuc/cau-cat-lai" className="text-primary-700 font-semibold hover:underline">cầu Cát Lái</a>.
                  </p>
                  <InfoBox>
                    Hạ tầng chỉ là một yếu tố trong việc đánh giá bất động sản. Người mua vẫn
                    cần xem xét vị trí cụ thể, pháp lý, quy hoạch, giá, tiện ích và nhu cầu
                    sử dụng thực tế. Xem thêm:{" "}
                    <a href="/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat" className="font-bold text-primary-700 underline">
                      Hạ tầng giao thông Nhơn Trạch mới nhất 2026 →
                    </a>
                  </InfoBox>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="dat-nen">Đất nền Nhơn Trạch là gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đất nền là loại bất động sản mà người mua sở hữu quyền sử dụng đối với
                    một thửa đất theo hồ sơ pháp lý tương ứng. Tùy từng khu vực, đất nền có
                    thể được sử dụng cho mục đích ở, kinh doanh hoặc các mục đích khác theo
                    quy hoạch.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi mua đất nền tại Nhơn Trạch, cần xác định rõ những yếu tố sau:
                  </p>
                  <BulletList items={[
                    "Vị trí thửa đất và diện tích thực tế",
                    "Mục đích sử dụng đất và thời hạn sử dụng",
                    "Tình trạng pháp lý: giấy chứng nhận, thế chấp, tranh chấp",
                    "Quy hoạch và lộ giới",
                    "Khả năng xây dựng theo quy định",
                    "Hạ tầng giao thông thực tế xung quanh",
                  ]} />
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach">Kinh nghiệm mua đất nền Nhơn Trạch →</LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-hoach-1-500-nhon-trach">Quy hoạch 1/500 Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="can-ho">Đầu tư căn hộ Nhơn Trạch là gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Căn hộ là loại hình bất động sản gắn với công trình nhà ở nhiều tầng hoặc
                    khu phức hợp, trong đó người mua sở hữu phần diện tích căn hộ và các
                    quyền liên quan. Người mua có thể sử dụng để ở, cho thuê, chuyển nhượng
                    hoặc tích lũy tài sản.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hiệu quả đầu tư căn hộ phụ thuộc rất lớn vào vị trí dự án, mật độ dân cư,
                    nhu cầu thuê, giá thuê, phí quản lý và chất lượng vận hành.
                  </p>
                  <InfoBox type="warn">
                    Căn hộ không mặc nhiên là lựa chọn an toàn hơn đất nền. Mỗi loại hình có
                    rủi ro riêng cần được đánh giá theo tài sản cụ thể.
                  </InfoBox>
                </div>
              </section>

              {/* Section 4 – So sánh */}
              <section className="mb-12">
                <SectionHeading id="so-sanh">So sánh đất nền và căn hộ tại Nhơn Trạch</SectionHeading>
                <div className="pt-5">
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-600 text-white">
                          <th className="text-left px-4 py-3.5 text-xs font-bold uppercase tracking-wide w-36">Tiêu chí</th>
                          <th className="text-left px-4 py-3.5 text-xs font-bold uppercase tracking-wide">Đất nền</th>
                          <th className="text-left px-4 py-3.5 text-xs font-bold uppercase tracking-wide">Căn hộ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Quyền sở hữu",       "Quyền sử dụng đất và tài sản gắn liền", "Quyền sở hữu căn hộ và các quyền liên quan"],
                          ["Mục đích",           "Ở, xây dựng hoặc đầu tư tùy quy hoạch", "Ở hoặc khai thác theo quy định"],
                          ["Khả năng cho thuê",  "Phụ thuộc khả năng xây dựng và nhu cầu", "Có thể khai thác nếu có nhu cầu thuê"],
                          ["Chi phí quản lý",    "Thường thấp hơn sau khi mua", "Có phí quản lý và vận hành định kỳ"],
                          ["Thanh khoản",        "Phụ thuộc vị trí và thị trường đất", "Phụ thuộc dự án và nhu cầu căn hộ"],
                          ["Khả năng tăng giá",  "Có thể hưởng lợi từ quy hoạch và hạ tầng", "Phụ thuộc dự án và nhu cầu thị trường"],
                          ["Rủi ro chính",       "Quy hoạch, pháp lý, thanh khoản", "Pháp lý dự án, vận hành, phí, nguồn cung"],
                          ["Phù hợp",            "Người có tầm nhìn trung–dài hạn", "Người muốn ở hoặc khai thác cho thuê"],
                        ].map(([tieu_chi, dat_nen, can_ho], i) => (
                          <tr key={tieu_chi} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700">{tieu_chi}</td>
                            <td className="px-4 py-3 text-slate-600">{dat_nen}</td>
                            <td className="px-4 py-3 text-slate-600">{can_ho}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-500 mt-3 italic">
                    Bảng trên chỉ mang tính tham khảo. Hiệu quả thực tế phụ thuộc vào vị trí,
                    giá mua, pháp lý và tình hình thị trường tại thời điểm giao dịch.
                  </p>
                </div>
              </section>

              {/* Section 5 – Ưu đất nền */}
              <section className="mb-12">
                <SectionHeading id="uu-dat-nen">Ưu điểm của đất nền Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <H3>1. Chủ động hơn về việc sử dụng đất</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với đất ở có pháp lý rõ ràng và phù hợp quy hoạch, người sở hữu có thể
                    xây dựng nhà theo nhu cầu và quy định. Đây là điểm khác biệt so với căn
                    hộ, nơi việc sửa chữa, cải tạo phải tuân theo quy định của ban quản lý.
                  </p>
                  <H3>2. Có thể hưởng lợi từ sự phát triển hạ tầng</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch đang có nhiều dự án giao thông đáng chú ý. Tuy nhiên, không
                    nên hiểu rằng hạ tầng chắc chắn khiến giá đất tăng. Giá trị thực tế còn
                    phụ thuộc vào vị trí, pháp lý, nguồn cung, nhu cầu và mức giá mua ban đầu.
                  </p>
                  <H3>3. Phù hợp với chiến lược đầu tư trung và dài hạn</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đất nền thường phù hợp hơn với người không cần tạo dòng tiền ngay và có
                    khả năng nắm giữ tài sản trong thời gian dài với nguồn vốn nhàn rỗi.
                  </p>
                </div>
              </section>

              {/* Section 6 – Nhược đất nền */}
              <section className="mb-12">
                <SectionHeading id="nhuoc-dat-nen">Nhược điểm của đất nền</SectionHeading>
                <div className="pt-5 space-y-4">
                  <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                    <p className="font-bold text-amber-800 mb-1">Khó tạo dòng tiền ngay</p>
                    <p className="text-amber-700 text-sm leading-relaxed">Nếu chỉ mua đất và chưa xây dựng công trình, tài sản thường không tạo ra dòng tiền cho thuê như căn hộ.</p>
                  </div>
                  <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                    <p className="font-bold text-amber-800 mb-1">Phụ thuộc nhiều vào vị trí</p>
                    <p className="text-amber-700 text-sm leading-relaxed">Hai lô đất cùng khu vực nhưng khác đường, hướng tiếp cận hoặc quy hoạch có thể có mức giá và thanh khoản rất khác nhau.</p>
                  </div>
                  <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                    <p className="font-bold text-amber-800 mb-1">Rủi ro pháp lý và quy hoạch</p>
                    <p className="text-amber-700 text-sm leading-relaxed">Cần kiểm tra giấy chứng nhận, mục đích sử dụng, quy hoạch, lộ giới, tranh chấp, thế chấp và điều kiện chuyển nhượng trước khi giao dịch.</p>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS21["2"]} alt="Đất nền Nhơn Trạch Đồng Nai có hạ tầng giao thông khu vực"
                caption="Khi mua đất nền, cần đánh giá đồng thời vị trí, pháp lý, quy hoạch và hạ tầng thực tế"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 7 – Ưu căn hộ */}
              <section className="mb-12">
                <SectionHeading id="uu-can-ho">Ưu điểm của căn hộ</SectionHeading>
                <div className="pt-5 space-y-5">
                  <H3>1. Có thể sử dụng hoặc khai thác sớm hơn</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một dự án căn hộ đã hoàn thiện và có cư dân có thể tạo điều kiện thuận
                    lợi hơn cho nhu cầu ở hoặc cho thuê — đây là điểm hấp dẫn với người muốn
                    tạo dòng tiền từ tài sản sớm.
                  </p>
                  <H3>2. Có hệ thống tiện ích tập trung</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Các dự án căn hộ thường có tiện ích được quy hoạch tập trung như bãi đỗ xe,
                    khu sinh hoạt chung, không gian xanh, khu vui chơi và dịch vụ thương mại.
                    Tuy nhiên, tiện ích thực tế cần kiểm tra dựa trên hồ sơ và tình trạng vận hành.
                  </p>
                  <H3>3. Phù hợp với người muốn ở</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu mục tiêu chính là tìm nơi ở có sẵn hạ tầng và dịch vụ, căn hộ có thể
                    là lựa chọn phù hợp hơn đất nền chưa xây dựng.
                  </p>
                </div>
              </section>

              {/* Section 8 – Nhược căn hộ */}
              <section className="mb-12">
                <SectionHeading id="nhuoc-can-ho">Nhược điểm của căn hộ</SectionHeading>
                <div className="pt-5 space-y-4">
                  <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                    <p className="font-bold text-amber-800 mb-1">Có chi phí quản lý định kỳ</p>
                    <p className="text-amber-700 text-sm leading-relaxed">Chủ sở hữu căn hộ thường phải trả phí quản lý, bảo trì và các khoản liên quan đến vận hành theo quy định dự án.</p>
                  </div>
                  <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                    <p className="font-bold text-amber-800 mb-1">Giá trị phụ thuộc nhiều vào chất lượng dự án</p>
                    <p className="text-amber-700 text-sm leading-relaxed">Dự án có vị trí tốt, quản lý tốt và nhu cầu thuê cao có hiệu quả khác hoàn toàn so với dự án có tỷ lệ lấp đầy thấp.</p>
                  </div>
                  <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                    <p className="font-bold text-amber-800 mb-1">Nguồn cung có thể ảnh hưởng đến giá thuê</p>
                    <p className="text-amber-700 text-sm leading-relaxed">Nếu khu vực có quá nhiều căn hộ cùng khai thác cho thuê nhưng nhu cầu không tăng tương ứng, giá thuê và tỷ lệ lấp đầy có thể chịu áp lực.</p>
                  </div>
                </div>
              </section>

              {/* Section 9 – Nên chọn */}
              <section className="mb-12">
                <SectionHeading id="nen-chon">Vậy nên mua đất nền Nhơn Trạch hay đầu tư căn hộ?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <H3>Nếu bạn muốn đầu tư dài hạn</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đất nền có thể là lựa chọn đáng cân nhắc nếu có nguồn vốn phù hợp, không
                    cần dòng tiền ngay, có khả năng nắm giữ dài hạn, chọn được vị trí tốt với
                    pháp lý rõ ràng và quy hoạch phù hợp.
                  </p>
                  <H3>Nếu bạn muốn tạo dòng tiền cho thuê</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Căn hộ có thể phù hợp hơn nếu khu vực có nhu cầu thuê thực tế, có dân cư,
                    gần khu công nghiệp hoặc trung tâm dịch vụ, và chi phí quản lý không quá
                    cao so với giá thuê thu về.
                  </p>

                  {/* Bảng quyết định nhanh */}
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm mt-6">
                    <div className="bg-primary-600 px-5 py-3.5">
                      <p className="text-xs font-bold text-white uppercase tracking-wider">Bảng quyết định nhanh</p>
                    </div>
                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Muốn sở hữu đất",                  "Đất nền"],
                          ["Muốn xây nhà theo nhu cầu",        "Đất nền"],
                          ["Muốn khai thác cho thuê sớm",      "Căn hộ"],
                          ["Muốn ở ngay trong dự án hoàn thiện","Căn hộ"],
                          ["Tầm nhìn đầu tư dài hạn",          "Có thể cân nhắc đất nền"],
                          ["Muốn dòng tiền định kỳ",           "Có thể cân nhắc căn hộ"],
                          ["Không muốn quản lý cho thuê",      "Đất nền có thể đơn giản hơn"],
                          ["Muốn tiện ích tập trung",          "Căn hộ"],
                        ].map(([nhu_cau, lua_chon], i) => (
                          <tr key={nhu_cau} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-5 py-3 text-slate-700">{nhu_cau}</td>
                            <td className="px-5 py-3 font-semibold text-primary-700">{lua_chon}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-500 italic px-5 py-3 border-t border-slate-100 bg-slate-50">
                      Bảng không phải khuyến nghị đầu tư. Người mua cần đánh giá tài sản cụ thể trước khi giao dịch.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 10 – Tính hiệu quả */}
              <section className="mb-12">
                <SectionHeading id="tinh-hieu-qua">Cách tính hiệu quả đầu tư</SectionHeading>
                <div className="pt-5 space-y-5">
                  <H3>Tỷ suất lợi nhuận cho thuê (căn hộ)</H3>
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-5 font-mono text-sm">
                    <p className="font-bold text-slate-700 mb-2">Công thức:</p>
                    <p className="text-primary-700 font-black mb-4">Tỷ suất = (Thu nhập cho thuê/năm ÷ Giá mua) × 100%</p>
                    <p className="text-slate-600 text-[13px] mb-1"><span className="font-bold">Ví dụ minh họa:</span></p>
                    <p className="text-slate-600 text-[13px]">Căn hộ giá 2 tỷ, thuê 10 tr/tháng → 120 tr/năm → tỷ suất ~6%/năm</p>
                    <p className="text-slate-500 text-[12px] mt-3 italic">Cần trừ thêm: phí quản lý, bảo trì, thời gian trống, sửa chữa, thuế.</p>
                  </div>
                  <H3>Đánh giá đất nền (5 tiêu chí)</H3>
                  <BulletList items={[
                    "Giá mua hiện tại — so sánh với tài sản tương đồng xung quanh",
                    "Vị trí — đường vào, khả năng kết nối, khoảng cách đến tiện ích",
                    "Quy hoạch — kiểm tra mục đích sử dụng và các thông tin liên quan",
                    "Pháp lý — bắt buộc phải kiểm tra trước khi giao dịch",
                    "Thanh khoản — nghiên cứu giao dịch thực tế trong khu vực",
                  ]} />
                </div>
              </section>

              {/* Section 11 – Mega City 2 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Mega City 2 Nhơn Trạch phù hợp với người mua nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu đang tìm hiểu{" "}
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2</a>,
                    không nên chỉ đặt câu hỏi "Mega City 2 có tăng giá không?" mà nên hỏi:
                    "Mega City 2 có phù hợp với mục tiêu của mình không?"
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Mua để ở",
                        items: ["Vị trí & kết nối", "Tiện ích & môi trường sống", "Khả năng xây dựng", "Dịch vụ xung quanh"],
                        color: "border-blue-200 bg-blue-50",
                        titleColor: "text-blue-700",
                      },
                      {
                        title: "Đầu tư dài hạn",
                        items: ["Pháp lý & quy hoạch", "Hạ tầng khu vực", "Giá mua hợp lý", "Khả năng thanh khoản"],
                        color: "border-primary-200 bg-primary-50",
                        titleColor: "text-primary-700",
                      },
                      {
                        title: "Tích lũy tài sản",
                        items: ["Tính pháp lý rõ ràng", "Khả năng nắm giữ", "Mức vốn phù hợp", "Khả năng thanh khoản"],
                        color: "border-emerald-200 bg-emerald-50",
                        titleColor: "text-emerald-700",
                      },
                    ].map((card) => (
                      <div key={card.title} className={`rounded-2xl border p-4 ${card.color}`}>
                        <p className={`font-bold text-sm mb-3 ${card.titleColor}`}>{card.title}</p>
                        <ul className="space-y-1.5">
                          {card.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-[13px] text-slate-700">
                              <span className="text-primary-400 flex-shrink-0 mt-0.5">•</span>{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Tổng quan Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý →</LinkBtn>
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá →</LinkBtn>
                    <LinkBtn href="/mega-city-2/tien-do">Tiến độ →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS21["3"]} alt="Mega City 2 Nhơn Trạch Đồng Nai và kết nối hạ tầng khu vực"
                caption="Mega City 2 được tìm hiểu trong bối cảnh hạ tầng và đô thị Nhơn Trạch tiếp tục phát triển"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 12 – 7 câu hỏi */}
              <section className="mb-12">
                <SectionHeading id="7-cau-hoi">7 câu hỏi nên tự hỏi trước khi lựa chọn</SectionHeading>
                <div className="pt-5 space-y-3">
                  {[
                    ["Tôi mua để ở hay đầu tư?",               "Nếu mua để ở, ưu tiên khả năng sử dụng thực tế. Nếu đầu tư, cần phân tích lợi nhuận, thanh khoản và rủi ro."],
                    ["Tôi có cần dòng tiền hàng tháng không?", "Nếu cần dòng tiền, căn hộ có thể có lợi thế nếu khu vực có nhu cầu thuê thực tế."],
                    ["Tôi có thể giữ tài sản bao lâu?",         "Nếu chỉ có khả năng nắm giữ ngắn hạn, cần đặc biệt quan tâm đến thanh khoản."],
                    ["Tôi có bao nhiêu vốn tự có?",             "Không nên sử dụng đòn bẩy vượt quá khả năng trả nợ của bản thân."],
                    ["Pháp lý tài sản có rõ ràng không?",       "Đây là câu hỏi bắt buộc với cả đất nền và căn hộ — không được bỏ qua."],
                    ["Khu vực có dân cư thực tế không?",        "Hạ tầng đẹp nhưng thiếu dân cư có thể khiến việc khai thác tài sản gặp khó khăn."],
                    ["Nếu không tăng giá, tài sản có còn giá trị sử dụng không?", "Tài sản có vị trí tốt, pháp lý rõ ràng và khả năng sử dụng thực tế thường có nền tảng tốt hơn tài sản chỉ dựa vào kỳ vọng tăng giá."],
                  ].map(([q, a], i) => (
                    <details key={q} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary-200 transition-colors">
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-primary-700 select-none">
                        <span className="leading-snug"><span className="text-primary-500 mr-2">{i + 1}.</span>{q}</span>
                        <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-primary-600 transition-transform group-open:rotate-180 text-xs">▼</span>
                      </summary>
                      <div className="px-6 pb-5 border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-[16px] leading-relaxed">{a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 13 – Sai lầm */}
              <section className="mb-12">
                <SectionHeading id="sai-lam">Những sai lầm thường gặp khi mua bất động sản Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-4">
                  {[
                    ["Chỉ nhìn vào thông tin hạ tầng",       "Một tuyến đường mới không đồng nghĩa mọi bất động sản xung quanh đều tăng giá."],
                    ["Mua theo tin đồn",                      "Thông tin quy hoạch và tiến độ công trình cần kiểm chứng từ nguồn chính thức."],
                    ["Bỏ qua pháp lý",                       "Đây là sai lầm có thể gây hậu quả lớn nhất. Không giao dịch khi chưa kiểm tra pháp lý."],
                    ["Không tính tổng chi phí",              "Ngoài giá mua còn có thuế, phí công chứng, chi phí vay, xây dựng và quản lý."],
                    ["Dùng toàn bộ vốn để mua tài sản",      "Nên duy trì khoản dự phòng tài chính thay vì dồn toàn bộ nguồn tiền vào bất động sản."],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-2xl border-l-4 border-red-400 bg-red-50 px-5 py-4">
                      <p className="font-bold text-red-800 mb-1">{title}</p>
                      <p className="text-red-700 text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp</SectionHeading>
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

              <ArticleFigure src={IMG_NEWS21["4"]} alt="So sánh đất nền và căn hộ tại Nhơn Trạch Đồng Nai năm 2026"
                caption="Đất nền và căn hộ có những ưu điểm, hạn chế và mục tiêu sử dụng khác nhau; người mua nên lựa chọn dựa trên nhu cầu và khả năng tài chính"
                images={images} index={3} onOpen={openLightbox} />

              {/* Tìm hiểu thêm */}
              <section className="mb-12">
                <SectionHeading>Tìm hiểu thêm về bất động sản Nhơn Trạch</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/tin-tuc/gia-dat-nhon-trach-2026",                   label: "Giá đất Nhơn Trạch 2026" },
                    { href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat",             label: "Quy hoạch Nhơn Trạch mới nhất" },
                    { href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach",        label: "Kinh nghiệm mua đất nền Nhơn Trạch" },
                    { href: "/tin-tuc/quy-hoach-1-500-nhon-trach",                label: "Quy hoạch 1/500 Nhơn Trạch" },
                    { href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat",    label: "Hạ tầng giao thông Nhơn Trạch" },
                    { href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach", label: "Sân bay Long Thành & BĐS Nhơn Trạch" },
                    { href: "/mega-city-2",                                        label: "Mega City 2 Nhơn Trạch" },
                    { href: "/mega-city-2/vi-tri",                                 label: "Vị trí Mega City 2" },
                    { href: "/mega-city-2/phap-ly",                                label: "Pháp lý Mega City 2" },
                    { href: "/mega-city-2/bang-gia",                               label: "Bảng giá Mega City 2" },
                  ].map((l) => (
                    <a key={l.href} href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors px-4 py-3 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50">
                      <span className="text-primary-400 flex-shrink-0">→</span><span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </section>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài mang tính tham khảo. Không phải khuyến nghị đầu tư.
                  Trước khi giao dịch, cần kiểm tra pháp lý, quy hoạch và thẩm định tài sản
                  cụ thể từ cơ quan có thẩm quyền.
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
                      { label: "Kinh nghiệm mua đất nền Nhơn Trạch",   href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach" },
                      { label: "Giá đất Nhơn Trạch 2026",               href: "/tin-tuc/gia-dat-nhon-trach-2026" },
                      { label: "Quy hoạch 1/500 Nhơn Trạch",            href: "/tin-tuc/quy-hoach-1-500-nhon-trach" },
                      { label: "5 lý do nên đầu tư Mega City 2",        href: "/tin-tuc/5-ly-do-nen-dau-tu-mega-city-2" },
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
              Xem thông tin dự án được tổng hợp theo từng chuyên mục để có cơ sở
              đánh giá trước khi đưa ra quyết định.
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
            { href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach", title: "Kinh nghiệm mua đất nền Nhơn Trạch từ A–Z", description: "Tổng hợp kinh nghiệm kiểm tra pháp lý, quy hoạch và những sai lầm cần tránh.", tag: "Thị trường" },
            { href: "/tin-tuc/gia-dat-nhon-trach-2026",            title: "Giá đất Nhơn Trạch 2026: Thị trường đang diễn biến thế nào?", description: "Cập nhật giá đất thực tế và phân tích xu hướng thị trường Nhơn Trạch.", tag: "Thị trường" },
            { href: "/tin-tuc/quy-hoach-1-500-nhon-trach",         title: "Quy hoạch 1/500 Nhơn Trạch: Cách đọc bản đồ", description: "Hướng dẫn đọc bản đồ quy hoạch chi tiết và kiểm tra pháp lý trước khi mua.", tag: "Quy hoạch" },
            { href: "/mega-city-2",                                 title: "Mega City 2 Nhơn Trạch – Tổng quan dự án", description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá dự án Mega City 2.", tag: "Dự án" },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
