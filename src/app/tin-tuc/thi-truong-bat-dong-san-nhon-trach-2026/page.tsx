"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import PageCTA from "@/components/PageCTA";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS28 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/thi-truong-bat-dong-san-nhon-trach-2026`;
const PUBLISHED     = "24/08/2026";
const PUBLISHED_ISO = "2026-08-24";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Thị trường bất động sản Nhơn Trạch 2026: Giá đất, hạ tầng và cơ hội đầu tư",
  description: "Thị trường bất động sản Nhơn Trạch 2026 có gì đáng chú ý? Cập nhật giá đất, quy hoạch, hạ tầng, sân bay Long Thành và những yếu tố cần xem xét trước khi đầu tư.",
  image: [IMG_NEWS28["1"], IMG_NEWS28["2"], IMG_NEWS28["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` } },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  about: { "@type": "Place", name: "Nhơn Trạch, Đồng Nai", address: { "@type": "PostalAddress", addressLocality: "Nhơn Trạch", addressRegion: "Đồng Nai", addressCountry: "VN" } },
  keywords: "thị trường bất động sản Nhơn Trạch 2026, giá đất Nhơn Trạch, đất nền Nhơn Trạch, đầu tư bất động sản Nhơn Trạch, hạ tầng Nhơn Trạch",
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Thị trường bất động sản Nhơn Trạch 2026 có tiềm năng không?", acceptedAnswer: { "@type": "Answer", text: "Nhơn Trạch có nhiều yếu tố đáng theo dõi như vị trí kết nối vùng, hệ thống giao thông đang phát triển, sân bay Long Thành và định hướng quy hoạch đô thị. Tuy nhiên, tiềm năng của từng bất động sản cần được đánh giá riêng dựa trên vị trí, pháp lý, quy hoạch, hạ tầng và giá mua." } },
    { "@type": "Question", name: "Giá đất Nhơn Trạch 2026 bao nhiêu?", acceptedAnswer: { "@type": "Answer", text: "Không có một mức giá chung cho toàn Nhơn Trạch. Giá phụ thuộc vào loại đất, vị trí, pháp lý, diện tích, đường giao thông, hạ tầng và tiện ích xung quanh. Người mua nên so sánh các bất động sản có đặc điểm tương đồng trước khi định giá." } },
    { "@type": "Question", name: "Đầu tư đất nền Nhơn Trạch cần quan tâm điều gì?", acceptedAnswer: { "@type": "Answer", text: "Ba nhóm yếu tố quan trọng nhất là pháp lý, quy hoạch và khả năng kết nối. Sau đó cần đánh giá thêm mức giá, dân cư, tiện ích và thanh khoản." } },
    { "@type": "Question", name: "Hạ tầng có ảnh hưởng đến giá bất động sản Nhơn Trạch không?", acceptedAnswer: { "@type": "Answer", text: "Hạ tầng có thể ảnh hưởng đến khả năng kết nối, thời gian di chuyển và mức độ thuận tiện của một khu vực. Tuy nhiên, mức tác động đến giá phụ thuộc vào từng vị trí và tiến độ thực tế của công trình." } },
    { "@type": "Question", name: "Sân bay Long Thành có tác động đến bất động sản Nhơn Trạch không?", acceptedAnswer: { "@type": "Answer", text: "Sân bay Long Thành là một yếu tố quan trọng trong bức tranh hạ tầng vùng. Tuy nhiên, cần đánh giá tuyến kết nối thực tế và khoảng cách di chuyển thay vì chỉ dựa trên thông tin 'gần sân bay'." } },
    { "@type": "Question", name: "Có nên mua đất Nhơn Trạch theo quy hoạch hạ tầng?", acceptedAnswer: { "@type": "Answer", text: "Có thể xem quy hoạch hạ tầng là một yếu tố tham khảo nhưng không nên là yếu tố duy nhất. Trước khi mua cần kiểm tra pháp lý, quy hoạch thửa đất, tiến độ công trình và khả năng sử dụng thực tế." } },
    { "@type": "Question", name: "Mega City 2 có nằm trong xu hướng phát triển bất động sản Nhơn Trạch không?", acceptedAnswer: { "@type": "Answer", text: "Mega City 2 là một dự án nằm trong thị trường bất động sản Nhơn Trạch. Để đánh giá cụ thể, người mua nên xem riêng vị trí, pháp lý, sản phẩm, bảng giá, tiến độ và khả năng sử dụng của dự án thay vì chỉ dựa vào xu hướng chung của toàn khu vực." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Thị trường bất động sản Nhơn Trạch 2026", item: PAGE_URL },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS28["1"], alt: "Thị trường bất động sản Nhơn Trạch 2026 nhìn từ trên cao", caption: "Toàn cảnh khu vực Nhơn Trạch và hệ thống hạ tầng giao thông đang từng bước hoàn thiện" },
  { src: IMG_NEWS28["2"], alt: "Bản đồ kết nối giao thông Nhơn Trạch với TP.HCM và sân bay Long Thành", caption: "Hệ thống giao thông kết nối Nhơn Trạch với TP.HCM, sân bay Long Thành và các tuyến cao tốc" },
  { src: IMG_NEWS28["3"], alt: "5 yếu tố tác động đến thị trường bất động sản Nhơn Trạch 2026", caption: "5 nhóm yếu tố chính cần xem xét khi đánh giá bất động sản Nhơn Trạch" },
  { src: IMG_NEWS28["4"], alt: "Hạ tầng giao thông Nhơn Trạch năm 2026", caption: "Các tuyến giao thông trọng điểm đang được triển khai tại khu vực Nhơn Trạch" },
  { src: IMG_NEWS28["5"], alt: "Các yếu tố ảnh hưởng đến giá đất Nhơn Trạch năm 2026", caption: "Giá đất Nhơn Trạch phụ thuộc vào nhiều yếu tố: vị trí, pháp lý, hạ tầng, quy hoạch, dân cư và tiện ích" },
  { src: IMG_NEWS28["6"], alt: "Checklist 7 bước cần kiểm tra trước khi mua đất Nhơn Trạch", caption: "7 nhóm thông tin quan trọng cần kiểm tra trước khi quyết định mua đất Nhơn Trạch" },
  { src: IMG_NEWS28["7"], alt: "Thị trường bất động sản Nhơn Trạch 2026 phân hóa giữa giá trị thực và kỳ vọng", caption: "Thị trường đang có xu hướng phân hóa: bất động sản có giá trị thực và bất động sản chỉ dựa vào kỳ vọng" },
];

// ─── Sub-components ────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400 scroll-mt-24">{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-black text-slate-800 mb-2 mt-6">{children}</h3>;
}
function BulletList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="space-y-2.5 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-700 text-[16px] leading-relaxed">
          <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-[9px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const s = type === "warn" ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-slate-50 border-slate-200 text-slate-700";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function WarnBox({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4 my-4"><p className="text-amber-800 text-sm leading-relaxed">{children}</p></div>;
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all">{children}</a>;
}

// ─── Data ──────────────────────────────────────────────────────────────────
const criteria7 = [
  { label: "Vị trí", q: "Có thuận tiện di chuyển không?" },
  { label: "Pháp lý", q: "Hồ sơ có rõ ràng không?" },
  { label: "Quy hoạch", q: "Có nằm trong khu vực cần lưu ý không?" },
  { label: "Hạ tầng", q: "Đường, điện, nước đã có chưa?" },
  { label: "Dân cư", q: "Khu vực đã có người ở chưa?" },
  { label: "Giá", q: "Có tương xứng với sản phẩm tương đồng không?" },
  { label: "Thanh khoản", q: "Nếu cần bán, ai sẽ mua?" },
];

const risks5 = [
  { title: "Mua theo tin đồn hạ tầng", desc: "Thông tin \"sắp có cầu\", \"sắp mở đường\", \"sắp lên đô thị\" cần được kiểm chứng bằng hồ sơ hoặc nguồn chính thống." },
  { title: "Nhầm giữa quy hoạch và dự án đã triển khai", desc: "Một tuyến đường xuất hiện trên bản đồ quy hoạch không đồng nghĩa tuyến đường đó sẽ được xây dựng ngay." },
  { title: "Đánh đồng toàn bộ Nhơn Trạch", desc: "Nhơn Trạch có nhiều khu vực với đặc điểm rất khác nhau. Một vị trí tốt không có nghĩa toàn bộ thị trường đều có cùng mức giá." },
  { title: "Bỏ qua thanh khoản", desc: "Một bất động sản có thể có giá trị trên giấy nhưng mất nhiều thời gian để tìm người mua nếu vị trí, pháp lý hoặc nhu cầu không phù hợp." },
  { title: "Đòn bẩy tài chính quá cao", desc: "Nếu khoản vay lớn, nhà đầu tư có thể chịu áp lực dòng tiền trong trường hợp thị trường đi ngang." },
];

const faqs = [
  { q: "Thị trường bất động sản Nhơn Trạch 2026 có tiềm năng không?", a: "Nhơn Trạch có nhiều yếu tố đáng theo dõi như vị trí kết nối vùng, hệ thống giao thông đang phát triển, sân bay Long Thành và định hướng quy hoạch đô thị. Tuy nhiên, tiềm năng của từng bất động sản cần được đánh giá riêng dựa trên vị trí, pháp lý, quy hoạch, hạ tầng và giá mua." },
  { q: "Giá đất Nhơn Trạch 2026 bao nhiêu?", a: "Không có một mức giá chung cho toàn Nhơn Trạch. Giá phụ thuộc vào loại đất, vị trí, pháp lý, diện tích, đường giao thông, hạ tầng và tiện ích xung quanh. Người mua nên so sánh các bất động sản có đặc điểm tương đồng trước khi định giá." },
  { q: "Đầu tư đất nền Nhơn Trạch cần quan tâm điều gì?", a: "Ba nhóm yếu tố quan trọng nhất là pháp lý, quy hoạch và khả năng kết nối. Sau đó cần đánh giá thêm mức giá, dân cư, tiện ích và thanh khoản." },
  { q: "Hạ tầng có ảnh hưởng đến giá bất động sản Nhơn Trạch không?", a: "Hạ tầng có thể ảnh hưởng đến khả năng kết nối, thời gian di chuyển và mức độ thuận tiện của một khu vực. Tuy nhiên, mức tác động đến giá phụ thuộc vào từng vị trí và tiến độ thực tế của công trình." },
  { q: "Sân bay Long Thành có tác động đến bất động sản Nhơn Trạch không?", a: "Sân bay Long Thành là một yếu tố quan trọng trong bức tranh hạ tầng vùng. Tuy nhiên, cần đánh giá tuyến kết nối thực tế và khoảng cách di chuyển thay vì chỉ dựa trên thông tin \"gần sân bay\"." },
  { q: "Có nên mua đất Nhơn Trạch theo quy hoạch hạ tầng?", a: "Có thể xem quy hoạch hạ tầng là một yếu tố tham khảo nhưng không nên là yếu tố duy nhất. Trước khi mua cần kiểm tra pháp lý, quy hoạch thửa đất, tiến độ công trình và khả năng sử dụng thực tế." },
  { q: "Mega City 2 có nằm trong xu hướng phát triển bất động sản Nhơn Trạch không?", a: "Mega City 2 là một dự án nằm trong thị trường bất động sản Nhơn Trạch. Để đánh giá cụ thể, người mua nên xem riêng vị trí, pháp lý, sản phẩm, bảng giá, tiến độ và khả năng sử dụng của dự án." },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function ThiTruongBDSNhonTrach2026Page() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}
      <ScrollAnimator />
      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* Hero */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span className="text-slate-300">/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium line-clamp-1">Thị trường BĐS Nhơn Trạch 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Thị trường</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 15 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Thị trường bất động sản Nhơn Trạch 2026: Giá đất, hạ tầng và cơ hội đầu tư
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Cập nhật toàn diện về thị trường bất động sản Nhơn Trạch năm 2026: giá đất, hạ
              tầng giao thông, quy hoạch, sân bay Long Thành và những yếu tố cần đánh giá
              trước khi mua.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh thị trường BĐS Nhơn Trạch 2026"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS28["1"]} alt="Thị trường bất động sản Nhơn Trạch 2026 nhìn từ trên cao" className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" /></svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Toàn cảnh khu vực Nhơn Trạch và hệ thống hạ tầng giao thông đang từng bước hoàn thiện
            </p>
          </div>
        </div>

        {/* Main */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-1.5 text-sm text-slate-600 columns-1 sm:columns-2 gap-x-8">
                  {[
                    ["#tong-quan",    "1. Tổng quan thị trường 2026"],
                    ["#vi-sao",       "2. Vì sao Nhơn Trạch được quan tâm?"],
                    ["#gia-dat",      "3. Giá đất Nhơn Trạch 2026"],
                    ["#dinh-gia",     "4. Không nên dùng giá chung để định giá lô đất"],
                    ["#ha-tang",      "5. Hạ tầng: yếu tố cần theo dõi nhất"],
                    ["#san-bay",      "6. Sân bay Long Thành và BĐS Nhơn Trạch"],
                    ["#quy-hoach",    "7. Quy hoạch Nhơn Trạch 2026"],
                    ["#can-kiem-tra", "8. Người mua cần kiểm tra những gì?"],
                    ["#nhom-khu-vuc", "9. Nhóm khu vực nào đáng theo dõi?"],
                    ["#mega-city-2",  "10. Mega City 2 trong bức tranh thị trường"],
                    ["#co-nen",       "11. Có nên đầu tư BĐS Nhơn Trạch 2026?"],
                    ["#rui-ro",       "12. Những rủi ro khi đầu tư đất Nhơn Trạch"],
                    ["#7-tieu-chi",   "13. 7 tiêu chí đánh giá BĐS Nhơn Trạch"],
                    ["#xu-huong",     "14. Xu hướng thị trường thời gian tới"],
                    ["#nguoi-o",      "15. Nhơn Trạch có chỉ dành cho nhà đầu tư?"],
                    ["#ket-luan",     "16. Kết luận"],
                    ["#faq",          "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Mở đầu */}
              <div className="space-y-5 mb-14">
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Thị trường bất động sản Nhơn Trạch năm 2026 đang bước vào giai đoạn có nhiều
                  thay đổi đáng chú ý khi câu chuyện phát triển của khu vực ngày càng gắn với
                  hạ tầng giao thông, quy hoạch đô thị, sân bay Long Thành và khả năng kết nối
                  với TP.HCM.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Khác với những giai đoạn thị trường chủ yếu được thúc đẩy bởi kỳ vọng quy
                  hoạch, nhà đầu tư hiện nay có xu hướng quan tâm nhiều hơn đến những yếu tố
                  có thể kiểm chứng như tiến độ hạ tầng, pháp lý, khả năng kết nối thực tế,
                  dân cư hiện hữu, tiện ích và mức giá.
                </p>
                <InfoBox>
                  Khi đánh giá bất động sản Nhơn Trạch năm 2026, không nên chỉ đặt câu hỏi
                  "giá có tăng hay không?", mà cần xem xét toàn bộ bức tranh gồm{" "}
                  <strong>vị trí – quy hoạch – hạ tầng – pháp lý – nhu cầu ở – thanh khoản – giá trị sử dụng thực tế</strong>.
                </InfoBox>
              </div>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">1. Tổng quan thị trường bất động sản Nhơn Trạch 2026</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch nằm trong khu vực có vị trí kết nối quan trọng giữa Đồng Nai,
                    TP.HCM, sân bay Long Thành và các tuyến giao thông liên vùng. Đến năm 2026,
                    điểm đáng chú ý là câu chuyện hạ tầng đang chuyển từ quy hoạch trên giấy
                    sang giai đoạn triển khai và khai thác từng phần.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một số tuyến giao thông liên quan trực tiếp đến Nhơn Trạch gồm:
                  </p>
                  <BulletList items={[
                    "Đường 25C và đường 25B",
                    "Vành đai 3 TP.HCM và cầu Nhơn Trạch",
                    "Cao tốc Bến Lức – Long Thành",
                    "Các tuyến kết nối với sân bay Long Thành",
                    "Các tuyến kết nối với TP.HCM và khu công nghiệp Đồng Nai",
                  ]} />
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="vi-sao">2. Vì sao Nhơn Trạch được quan tâm trong năm 2026?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">Có thể chia các yếu tố chính thành 5 nhóm:</p>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 my-6">
                    {["Vị trí kết nối vùng", "Hạ tầng đang thay đổi", "Sân bay Long Thành", "Quy hoạch đô thị", "Dân cư phát triển"].map((label, i) => (
                      <div key={label} className="rounded-xl border border-slate-200 p-4 text-center hover:border-amber-300 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm flex items-center justify-center mx-auto mb-2">{i + 1}</div>
                        <p className="text-xs font-bold text-slate-700 leading-snug">{label}</p>
                      </div>
                    ))}
                  </div>

                  <H3>2.1. Vị trí kết nối với TP.HCM</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một trong những lợi thế của Nhơn Trạch là nằm ở vị trí tiếp giáp khu vực
                    TP.HCM qua hệ thống sông và các tuyến giao thông liên vùng. Khi các tuyến
                    đường và cầu kết nối được hoàn thiện, bài toán khoảng cách địa lý có thể
                    được cải thiện đáng kể.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tuy nhiên, điều quan trọng hơn là đánh giá thời gian di chuyển thực tế, số
                    tuyến đường thay thế, tình trạng ùn tắc và khả năng kết nối trực tiếp của
                    từng khu đất với trục giao thông chính.
                  </p>

                  <H3>2.2. Hạ tầng giao thông đang thay đổi</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hạ tầng là một trong những chủ đề nổi bật nhất của Nhơn Trạch năm 2026.
                    Đường 25C và Vành đai 3 là những tuyến được quan tâm bởi vai trò kết nối
                    với sân bay Long Thành và TP.HCM.
                  </p>
                  <WarnBox>
                    Người mua bất động sản cần phân biệt:{" "}
                    <strong>"Có quy hoạch" ≠ "đang thi công" ≠ "đã hoàn thành" ≠ "đã khai thác ổn định".</strong>{" "}
                    Đây là nguyên tắc cần đặc biệt lưu ý khi đọc thông tin về hạ tầng.
                  </WarnBox>
                </div>
              </section>

              {/* Image 1 – bản đồ kết nối */}
              <ArticleFigure src={IMG_NEWS28["2"]} alt="Bản đồ kết nối giao thông Nhơn Trạch với TP.HCM và sân bay Long Thành"
                caption="Hệ thống giao thông kết nối Nhơn Trạch với TP.HCM, sân bay Long Thành và các tuyến cao tốc"
                images={images} index={1} onOpen={openLightbox} />

              {/* Image 2 – 5 yếu tố */}
              <ArticleFigure src={IMG_NEWS28["3"]} alt="5 yếu tố tác động đến thị trường bất động sản Nhơn Trạch 2026"
                caption="5 nhóm yếu tố chính cần xem xét khi đánh giá bất động sản Nhơn Trạch"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="gia-dat">3. Giá đất Nhơn Trạch 2026 đang ở mức nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Giá đất tại Nhơn Trạch không có một mức chung cho toàn khu vực. Giá có thể
                    khác nhau rất lớn tùy vị trí, loại đất, pháp lý, hạ tầng, dân cư xung
                    quanh và tiện ích hiện hữu.
                  </p>

                  {[
                    { title: "Đất nông nghiệp/đất vườn", desc: "Thường có giá thấp hơn đất ở nhưng đi kèm nhiều vấn đề cần kiểm tra về mục đích sử dụng, khả năng chuyển mục đích và quy hoạch." },
                    { title: "Đất ở/thổ cư", desc: "Giá cao hơn đất nông nghiệp và phụ thuộc mạnh vào vị trí, đường giao thông, pháp lý và dân cư hiện hữu." },
                    { title: "Đất nền dự án", desc: "Cần xem xét đồng thời pháp lý dự án, quy hoạch, hạ tầng, tiến độ, điều kiện chuyển nhượng và giấy chứng nhận." },
                    { title: "Nhà phố/khu đô thị", desc: "Ngoài giá đất còn phải tính đến giá trị xây dựng, thiết kế, tiện ích, vị trí trong dự án và khả năng khai thác sử dụng." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-slate-200 p-5 hover:border-amber-300 transition-colors">
                      <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="dinh-gia">4. Không nên dùng "giá Nhơn Trạch" để định giá một lô đất</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là một sai lầm khá phổ biến. Hai lô đất cùng diện tích 100 m² có thể có
                    giá trị rất khác nhau nếu một lô nằm trên đường lớn, có sổ riêng, gần dân
                    cư, trong dự án có hạ tầng hoàn chỉnh — trong khi lô kia nằm trong hẻm
                    nhỏ, đang vướng quy hoạch hoặc chưa có tiện ích.
                  </p>
                  <div className="rounded-2xl bg-amber-50 border border-amber-200 px-6 py-5">
                    <p className="text-amber-800 text-sm font-bold mb-2">Thay vì hỏi:</p>
                    <p className="text-amber-700 text-sm italic mb-4">"Giá đất Nhơn Trạch hiện nay bao nhiêu?"</p>
                    <p className="text-amber-800 text-sm font-bold mb-2">Nên đặt câu hỏi:</p>
                    <p className="text-amber-700 text-sm italic">"Lô đất cụ thể này đang được định giá dựa trên những yếu tố nào?"</p>
                  </div>
                </div>
              </section>

              {/* Section 5 – Hạ tầng */}
              <section className="mb-12">
                <SectionHeading id="ha-tang">5. Hạ tầng Nhơn Trạch 2026: Yếu tố cần theo dõi nhất</SectionHeading>
                <div className="pt-5 space-y-6">
                  {[
                    { title: "Đường 25C", desc: "Một trong những tuyến giao thông quan trọng đối với khả năng kết nối khu vực Nhơn Trạch với sân bay Long Thành và mạng lưới giao thông liên vùng.", href: "/tin-tuc/duong-25c", label: "Tiến độ đường 25C →" },
                    { title: "Vành đai 3 TP.HCM", desc: "Vành đai 3 có vai trò kết nối nhiều khu vực kinh tế lớn. Đối với Nhơn Trạch, cầu Nhơn Trạch tạo thêm hướng kết nối quan trọng giữa Đồng Nai và TP.HCM.", href: "/tin-tuc/vanh-dai-3", label: "Tiến độ Vành đai 3 →" },
                    { title: "Cầu Nhơn Trạch", desc: "Cầu Nhơn Trạch nằm trên tuyến Vành đai 3 và tạo kết nối quan trọng giữa khu vực Nhơn Trạch với phía TP.HCM, là một trong những yếu tố thay đổi cách tiếp cận khu vực bằng đường bộ.", href: "/tin-tuc/cau-nhon-trach", label: "Cầu Nhơn Trạch 2026 →" },
                    { title: "Cao tốc Bến Lức – Long Thành", desc: "Tuyến cao tốc khoảng 58 km đóng vai trò kết nối khu vực miền Tây với Đồng Nai và Bà Rịa – Vũng Tàu, đang được đẩy nhanh tiến độ.", href: "/tin-tuc/cao-toc-ben-luc-long-thanh", label: "Tiến độ cao tốc Bến Lức – Long Thành →" },
                    { title: "Cao tốc Biên Hòa – Vũng Tàu", desc: "Tuyến giao thông kết nối Đồng Nai với Bà Rịa – Vũng Tàu. Tác động đến Nhơn Trạch cần được đánh giá theo mạng lưới tổng thể.", href: "/tin-tuc/cao-toc-bien-hoa-vung-tau", label: "Tiến độ cao tốc Biên Hòa – Vũng Tàu →" },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-slate-200 p-5">
                      <p className="font-black text-slate-800 mb-2">{item.title}</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                      <LinkBtn href={item.href}>{item.label}</LinkBtn>
                    </div>
                  ))}
                </div>
              </section>

              {/* Image 3 – hạ tầng */}
              <ArticleFigure src={IMG_NEWS28["4"]} alt="Hạ tầng giao thông Nhơn Trạch năm 2026"
                caption="Các tuyến giao thông trọng điểm đang được triển khai tại khu vực Nhơn Trạch"
                images={images} index={3} onOpen={openLightbox} />

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="san-bay">6. Sân bay Long Thành và bất động sản Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sân bay Long Thành là một trong những yếu tố được nhà đầu tư quan tâm khi
                    đánh giá triển vọng khu vực. Tuy nhiên, không nên hiểu đơn giản rằng{" "}
                    <em>"gần sân bay = bất động sản chắc chắn tăng giá."</em>
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Giá trị thực tế còn phụ thuộc vào khoảng cách thực tế, tuyến đường kết nối,
                    thời gian di chuyển, quy hoạch khu vực, mật độ dân cư, tiện ích, khả năng
                    khai thác và nguồn cung bất động sản. Sân bay nên được xem là{" "}
                    <strong>một yếu tố trong tổng thể</strong>, không phải yếu tố duy nhất.
                  </p>
                  <LinkBtn href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach">
                    Sân bay Long Thành ảnh hưởng đến BĐS Nhơn Trạch như thế nào? →
                  </LinkBtn>
                </div>
              </section>

              {/* Section 7 */}
              <section className="mb-12">
                <SectionHeading id="quy-hoach">7. Quy hoạch Nhơn Trạch 2026 có ý nghĩa gì với bất động sản?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Quy hoạch là một trong những yếu tố cần kiểm tra trước khi mua đất. Năm
                    2026, khu vực Nhơn Trạch tiếp tục có các nội dung liên quan đến quy hoạch
                    phân khu và định hướng phát triển đô thị.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ví dụ, hồ sơ quy hoạch phân khu Nhơn Trạch 1 với quy mô hơn 1.660 ha được
                    định hướng phát triển khu đô thị dịch vụ – sinh thái. Địa phương cũng đã
                    công bố lấy ý kiến liên quan đến điều chỉnh cục bộ Quy hoạch chung đô thị
                    mới Nhơn Trạch giai đoạn 2035 và tầm nhìn đến năm 2050.
                  </p>
                  <InfoBox type="warn">
                    Khi mua đất tại Nhơn Trạch, người mua cần kiểm tra quy hoạch tại{" "}
                    <strong>đúng vị trí thửa đất</strong>, thay vì chỉ xem bản đồ quy hoạch
                    tổng thể của cả khu vực.
                  </InfoBox>
                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat">Quy hoạch Nhơn Trạch mới nhất →</LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-hoach-1-500-nhon-trach">Quy hoạch 1/500 Nhơn Trạch →</LinkBtn>
                    <LinkBtn href="/tin-tuc/cach-doc-ban-do-quy-hoach-nhon-trach">Cách đọc bản đồ quy hoạch →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section className="mb-12">
                <SectionHeading id="can-kiem-tra">8. Người mua đất Nhơn Trạch cần kiểm tra những gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">Trước khi xuống tiền, nên kiểm tra ít nhất 7 nhóm thông tin:</p>

                  {[
                    { no: "01", title: "Kiểm tra pháp lý", items: ["Giấy chứng nhận và chủ sử dụng đất", "Diện tích, mục đích và thời hạn sử dụng", "Tình trạng thế chấp, hạn chế quyền sử dụng"] },
                    { no: "02", title: "Kiểm tra quy hoạch", items: ["Tra cứu tại cơ quan có thẩm quyền", "Đối chiếu với hồ sơ liên quan đến thửa đất cụ thể"] },
                    { no: "03", title: "Kiểm tra đường giao thông", items: ["Đường hiện hữu và lộ giới", "Đường quy hoạch và khả năng tiếp cận", "Tình trạng ngập nước nếu có"] },
                    { no: "04", title: "Kiểm tra dân cư", items: ["Khu vực đã hình thành hay mới phát triển?", "Hạ tầng xã hội (dịch vụ, trường học) đã có chưa?"] },
                    { no: "05", title: "Kiểm tra tiện ích", items: ["Khoảng cách đến trường học, chợ, bệnh viện", "Khoảng cách đến khu công nghiệp và tuyến giao thông chính"] },
                    { no: "06", title: "Kiểm tra giá giao dịch", items: ["So sánh nhiều sản phẩm có đặc điểm tương đồng", "Không chỉ xem giá rao bán"] },
                    { no: "07", title: "Kiểm tra khả năng sử dụng", items: ["Nếu mua để ở: có thể sống ở đây ngay không?", "Nếu mua đầu tư: ai sẽ là người mua tiếp theo?"] },
                  ].map((item) => (
                    <div key={item.no} className="flex gap-4 rounded-2xl border border-slate-200 p-5 hover:border-amber-300 transition-colors">
                      <span className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 font-black text-sm flex items-center justify-center flex-shrink-0">{item.no}</span>
                      <div>
                        <p className="font-black text-slate-800 text-sm mb-2">{item.title}</p>
                        <ul className="space-y-1">
                          {item.items.map((it) => (
                            <li key={it} className="flex items-start gap-2 text-slate-500 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/cach-kiem-tra-phap-ly-dat-nen-nhon-trach">Cách kiểm tra pháp lý đất nền →</LinkBtn>
                    <LinkBtn href="/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi">Mua đất Nhơn Trạch cần lưu ý gì? →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Image 4 – yếu tố giá */}
              <ArticleFigure src={IMG_NEWS28["5"]} alt="Các yếu tố ảnh hưởng đến giá đất Nhơn Trạch năm 2026"
                caption="Giá đất Nhơn Trạch phụ thuộc vào nhiều yếu tố: vị trí, pháp lý, hạ tầng, quy hoạch, dân cư và tiện ích"
                images={images} index={4} onOpen={openLightbox} />

              {/* Section 9 */}
              <section className="mb-12">
                <SectionHeading id="nhom-khu-vuc">9. Nhóm khu vực nào đáng theo dõi?</SectionHeading>
                <div className="pt-5 space-y-5">
                  {[
                    { title: "Nhóm 1: Gần trục giao thông lớn", pros: "Dễ tiếp cận, kết nối tốt, thuận lợi thương mại", cons: "Cần kiểm tra tiếng ồn, mật độ giao thông, lộ giới và quy hoạch" },
                    { title: "Nhóm 2: Gần khu dân cư hiện hữu", pros: "Đã có dịch vụ, trường học, hạ tầng xã hội, phù hợp người mua ở thực", cons: "Giá có thể cao hơn khu vực mới phát triển" },
                    { title: "Nhóm 3: Gần hạ tầng đang phát triển", pros: "Tiềm năng dài hạn", cons: "Cần phân biệt hạ tầng đang thi công và đã khai thác. Không nên trả giá quá cao vì kỳ vọng" },
                    { title: "Nhóm 4: Khu vực có nhiều dự án đô thị", pros: "Nguồn cung nhà ở, thương mại và tiện ích phong phú", cons: "Cần đánh giá tiến độ, pháp lý, tỷ lệ lấp đầy và khả năng vận hành" },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-slate-200 overflow-hidden">
                      <div className="bg-slate-50 border-b border-slate-200 px-5 py-3">
                        <p className="font-black text-slate-800 text-sm">{item.title}</p>
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-slate-100 px-0">
                        <div className="p-4">
                          <p className="text-xs font-bold text-emerald-600 mb-1 uppercase">Ưu điểm</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.pros}</p>
                        </div>
                        <div className="p-4">
                          <p className="text-xs font-bold text-amber-600 mb-1 uppercase">Lưu ý</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.cons}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 10 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">10. Mega City 2 trong bức tranh thị trường Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 là một trong những dự án mà người tìm hiểu thị trường Nhơn Trạch
                    có thể quan tâm. Tuy nhiên, khi đặt Mega City 2 vào bức tranh thị trường
                    chung, nên đánh giá dự án dựa trên các tiêu chí: vị trí, quy mô, sản phẩm,
                    pháp lý, hạ tầng nội khu, kết nối giao thông, tiện ích, mức giá, khả năng ở
                    thực và khả năng thanh khoản.
                  </p>
                  <InfoBox>
                    Không nên chỉ đánh giá dự án dựa trên câu chuyện hạ tầng bên ngoài. Website
                    có các bài chuyên sâu riêng để người đọc có thể đánh giá từng khía cạnh.
                  </InfoBox>
                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/vi-tri-mega-city-2-o-dau">Vị trí Mega City 2 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/bang-gia-mega-city-2-moi-nhat">Bảng giá Mega City 2 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/phap-ly-mega-city-2">Pháp lý Mega City 2 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/tien-do-mega-city-2">Tiến độ Mega City 2 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach">Có nên đầu tư Mega City 2? →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Image 5 – checklist */}
              <ArticleFigure src={IMG_NEWS28["6"]} alt="Checklist 7 bước cần kiểm tra trước khi mua đất Nhơn Trạch"
                caption="7 nhóm thông tin quan trọng cần kiểm tra trước khi quyết định mua đất Nhơn Trạch"
                images={images} index={5} onOpen={openLightbox} />

              {/* Section 11 */}
              <section className="mb-12">
                <SectionHeading id="co-nen">11. Có nên đầu tư bất động sản Nhơn Trạch năm 2026?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không có một câu trả lời phù hợp cho tất cả nhà đầu tư.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                      <p className="font-black text-emerald-700 text-sm mb-3">Có thể phù hợp nếu bạn:</p>
                      <ul className="space-y-2">
                        {["Có tầm nhìn trung và dài hạn","Có nguồn vốn phù hợp","Ưu tiên bất động sản pháp lý rõ ràng","Có khả năng kiểm tra quy hoạch","Không sử dụng đòn bẩy quá cao","Đánh giá được thanh khoản sản phẩm"].map((it) => (
                          <li key={it} className="flex items-start gap-2 text-emerald-700 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" /><span>{it}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                      <p className="font-black text-amber-700 text-sm mb-3">Nên thận trọng nếu:</p>
                      <ul className="space-y-2">
                        {["Mua chỉ vì tin đồn","Mua theo tâm lý FOMO","Không kiểm tra quy hoạch và pháp lý","Vay quá nhiều","Chỉ kỳ vọng bán lại trong thời gian ngắn","Tin rằng một công trình hạ tầng sẽ khiến mọi khu đất xung quanh tăng giá"].map((it) => (
                          <li key={it} className="flex items-start gap-2 text-amber-700 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" /><span>{it}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 12 */}
              <section className="mb-12">
                <SectionHeading id="rui-ro">12. Những rủi ro khi đầu tư đất Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-4">
                  {risks5.map((r, i) => (
                    <div key={r.title} className="flex gap-4 rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                      <span className="w-7 h-7 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      <div>
                        <p className="font-bold text-amber-800 text-sm mb-1">{r.title}</p>
                        <p className="text-amber-700 text-sm leading-relaxed">{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 13 */}
              <section className="mb-12">
                <SectionHeading id="7-tieu-chi">13. 7 tiêu chí để đánh giá một bất động sản Nhơn Trạch</SectionHeading>
                <div className="pt-5">
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-amber-500 px-6 py-4">
                      <p className="text-white font-black text-sm uppercase tracking-wider">Bảng đánh giá nhanh</p>
                    </div>
                    <table className="w-full text-sm">
                      <thead><tr className="bg-slate-50 border-b border-slate-200"><th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider w-28">Tiêu chí</th><th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Câu hỏi cần trả lời</th></tr></thead>
                      <tbody className="divide-y divide-slate-100">
                        {criteria7.map((row, i) => (
                          <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-5 py-3.5 font-bold text-slate-700">{row.label}</td>
                            <td className="px-5 py-3.5 text-slate-600">{row.q}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-500 mt-3 italic">
                    Nếu một sản phẩm không thể trả lời rõ những câu hỏi trên, người mua nên
                    dành thêm thời gian kiểm tra trước khi quyết định.
                  </p>
                </div>
              </section>

              {/* Section 14 */}
              <section className="mb-12">
                <SectionHeading id="xu-huong">14. Xu hướng thị trường Nhơn Trạch trong thời gian tới</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một xu hướng đáng chú ý là thị trường có thể ngày càng phân hóa. Thay vì
                    tăng giá đồng loạt, giá trị bất động sản có khả năng phụ thuộc nhiều hơn
                    vào vị trí thực tế + pháp lý + hạ tầng + khả năng sử dụng + nhu cầu thực.
                  </p>
                  <div className="rounded-2xl bg-amber-50 border border-amber-200 px-6 py-5">
                    <p className="text-amber-800 font-bold text-sm mb-2">Nhà đầu tư nên chuyển tư duy:</p>
                    <p className="text-amber-700 text-sm italic mb-3">❌ "Mua đất ở đâu sẽ tăng giá?"</p>
                    <p className="text-amber-700 text-sm font-medium">→ ✅ "Bất động sản nào đang có giá trị sử dụng và khả năng kết nối tốt hơn so với mức giá hiện tại?"</p>
                  </div>
                </div>
              </section>

              {/* Image 6 – phân hóa */}
              <ArticleFigure src={IMG_NEWS28["7"]} alt="Thị trường bất động sản Nhơn Trạch 2026 phân hóa giữa giá trị thực và kỳ vọng"
                caption="Thị trường đang có xu hướng phân hóa: bất động sản có giá trị thực và bất động sản chỉ dựa vào kỳ vọng"
                images={images} index={6} onOpen={openLightbox} />

              {/* Section 15 */}
              <section className="mb-12">
                <SectionHeading id="nguoi-o">15. Nhơn Trạch có phải thị trường chỉ dành cho nhà đầu tư?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không. Sự phát triển của hạ tầng có thể tạo ra nhu cầu từ nhiều nhóm khác nhau.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { title: "Người mua ở thực", items: ["Trường học, bệnh viện, chợ", "Giao thông, môi trường sống", "Giá nhà phù hợp"] },
                      { title: "Người mua tích lũy tài sản", items: ["Pháp lý, giá trị dài hạn", "Vị trí, hạ tầng", "Khả năng giữ giá"] },
                      { title: "Nhà đầu tư", items: ["Thanh khoản, biên độ giá", "Nguồn cung, chu kỳ thị trường", "Khả năng khai thác"] },
                    ].map((g) => (
                      <div key={g.title} className="rounded-2xl border border-slate-200 p-5">
                        <p className="font-black text-slate-800 text-sm mb-3">{g.title}</p>
                        <ul className="space-y-1.5">
                          {g.items.map((it) => (
                            <li key={it} className="flex items-start gap-2 text-slate-500 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" /><span>{it}</span></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 16 – Kết luận */}
              <section id="ket-luan" className="mb-14">
                <SectionHeading>16. Kết luận: Thị trường bất động sản Nhơn Trạch 2026 cần nhìn như thế nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Thị trường bất động sản Nhơn Trạch năm 2026 đang được hỗ trợ bởi vị trí kết
                    nối vùng, quá trình phát triển hạ tầng giao thông, sân bay Long Thành và
                    định hướng phát triển đô thị. Tuy nhiên, những yếu tố này không đồng nghĩa
                    mọi bất động sản tại Nhơn Trạch đều có cùng tiềm năng.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Điểm quan trọng nhất đối với người mua là <strong>đánh giá từng sản phẩm
                    cụ thể</strong>. Đặc biệt, khi thị trường ngày càng có nhiều thông tin về
                    cầu, đường, sân bay và quy hoạch, người mua càng cần phân biệt giữa{" "}
                    <strong>thông tin đã được xác nhận</strong> và{" "}
                    <strong>kỳ vọng thị trường</strong>.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/gia-dat-nhon-trach-2026">Giá đất Nhơn Trạch 2026 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat">Hạ tầng Nhơn Trạch →</LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat">Quy hoạch Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <div id="faq" className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm scroll-mt-24">
                <div className="bg-slate-900 px-7 py-6">
                  <h2 className="text-white font-black text-xl tracking-tight">FAQ – Thị trường bất động sản Nhơn Trạch 2026</h2>
                </div>
                <div className="divide-y divide-slate-100">
                  {faqs.map(({ q, a }) => (
                    <div key={q} className="px-7 py-6 hover:bg-slate-50 transition-colors">
                      <p className="font-bold text-slate-800 text-base mb-2">{q}</p>
                      <p className="text-slate-500 text-[15px] leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28 space-y-6">

                {/* 7 tiêu chí */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-amber-500 px-6 py-4">
                    <p className="text-white font-black text-sm uppercase tracking-wider">7 tiêu chí đánh giá</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {criteria7.map((item) => (
                      <div key={item.label} className="flex items-center gap-3 px-5 py-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                        <p className="text-sm font-semibold text-slate-700">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links hạ tầng */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-wider">Hạ tầng & Dự án</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      { label: "Đường 25C",                   href: "/tin-tuc/duong-25c" },
                      { label: "Vành đai 3 TP.HCM",           href: "/tin-tuc/vanh-dai-3" },
                      { label: "Cầu Nhơn Trạch",              href: "/tin-tuc/cau-nhon-trach" },
                      { label: "Cao tốc Bến Lức – Long Thành",href: "/tin-tuc/cao-toc-ben-luc-long-thanh" },
                      { label: "Sân bay Long Thành",          href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" },
                      { label: "Quy hoạch Nhơn Trạch",        href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat" },
                      { label: "Mega City 2",                 href: "/mega-city-2" },
                    ].map((link) => (
                      <a key={link.href} href={link.href} className="flex items-center justify-between px-6 py-4 text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors group">
                        <span>{link.label}</span>
                        <span className="text-slate-300 group-hover:text-amber-500 transition-colors text-base">→</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>

        <PageCTA
          title="Tư vấn đầu tư bất động sản Nhơn Trạch"
          subtitle="Liên hệ để được hỗ trợ tư vấn sản phẩm, pháp lý và cơ hội đầu tư tại Mega City 2 Nhơn Trạch."
          variant="default"
        />

        <RelatedContent
          items={[
            { href: "/tin-tuc/gia-dat-nhon-trach-2026", title: "Giá đất Nhơn Trạch 2026", description: "Cập nhật bảng giá đất theo quy định mới và giá thực tế thị trường.", tag: "Giá đất" },
            { href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat", title: "Quy hoạch Nhơn Trạch mới nhất 2026", description: "Phân tích bản đồ quy hoạch và định hướng phát triển đô thị.", tag: "Quy hoạch" },
            { href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat", title: "Hạ tầng giao thông Nhơn Trạch 2026", description: "Cập nhật tiến độ các tuyến giao thông trọng điểm khu vực Nhơn Trạch.", tag: "Hạ tầng" },
            { href: "/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach", title: "Có nên đầu tư Mega City 2 năm 2026?", description: "Phân tích tiềm năng đầu tư dựa trên vị trí, pháp lý và bảng giá.", tag: "Phân tích" },
            { href: "/tin-tuc/cach-kiem-tra-phap-ly-dat-nen-nhon-trach", title: "Cách kiểm tra pháp lý đất nền Nhơn Trạch", description: "Hướng dẫn kiểm tra sổ đỏ, quy hoạch và hồ sơ trước khi giao dịch.", tag: "Pháp lý" },
            { href: "/mega-city-2", title: "Tổng quan Mega City 2 Nhơn Trạch", description: "Thông tin tổng hợp về dự án: quy mô, sản phẩm, pháp lý và bảng giá.", tag: "Dự án" },
          ]}
        />
      </div>

      <CorpFooter />
    </>
  );
}
