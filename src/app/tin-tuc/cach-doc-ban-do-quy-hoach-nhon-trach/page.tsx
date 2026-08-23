"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import PageCTA from "@/components/PageCTA";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS27 } from "@/lib/cloudinary";

// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────
const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/cach-doc-ban-do-quy-hoach-nhon-trach`;
const PUBLISHED     = "23/08/2026";
const PUBLISHED_ISO = "2026-08-23";

// ─────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cách đọc bản đồ quy hoạch Nhơn Trạch: Hướng dẫn cho người mua đất",
  description:
    "Hướng dẫn cách đọc bản đồ quy hoạch Nhơn Trạch: ký hiệu đất, màu sắc, số thửa, đường giao thông, quy hoạch sử dụng đất và cách đối chiếu vị trí trước khi mua.",
  image: [IMG_NEWS27["1"], IMG_NEWS27["2"], IMG_NEWS27["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  about: {
    "@type": "Place", name: "Nhơn Trạch, Đồng Nai",
    address: { "@type": "PostalAddress", addressLocality: "Nhơn Trạch", addressRegion: "Đồng Nai", addressCountry: "VN" },
  },
  keywords: "cách đọc bản đồ quy hoạch Nhơn Trạch, bản đồ quy hoạch đất, ký hiệu quy hoạch, tra cứu quy hoạch Nhơn Trạch",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question", name: "Làm sao xem bản đồ quy hoạch Nhơn Trạch?",
      acceptedAnswer: { "@type": "Answer", text: "Trước tiên cần xác định vị trí và số tờ, số thửa của khu đất. Sau đó đối chiếu với bản đồ quy hoạch phù hợp, đọc chú giải, ký hiệu và kiểm tra thời điểm của hồ sơ." },
    },
    {
      "@type": "Question", name: "Nhìn màu trên bản đồ có biết đất ở không?",
      acceptedAnswer: { "@type": "Answer", text: "Không nên kết luận chỉ dựa vào màu. Cần xem chú giải của chính bản đồ đó và đối chiếu với hồ sơ đất đai liên quan." },
    },
    {
      "@type": "Question", name: "Đường trên bản đồ quy hoạch có phải đường sắp xây không?",
      acceptedAnswer: { "@type": "Answer", text: "Không nhất thiết. Một tuyến đường có thể mới nằm trong định hướng hoặc đồ án quy hoạch. Cần kiểm tra tình trạng triển khai và hồ sơ liên quan." },
    },
    {
      "@type": "Question", name: "Quy hoạch 1/500 có phải là sổ đỏ không?",
      acceptedAnswer: { "@type": "Answer", text: "Không. Quy hoạch chi tiết tỷ lệ 1/500 là một loại hồ sơ quy hoạch, không thay thế Giấy chứng nhận quyền sử dụng đất." },
    },
    {
      "@type": "Question", name: "Google Maps có xem được quy hoạch không?",
      acceptedAnswer: { "@type": "Answer", text: "Google Maps hữu ích để xem vị trí và hiện trạng nhưng không nên được sử dụng thay thế cho bản đồ và hồ sơ quy hoạch chính thức." },
    },
    {
      "@type": "Question", name: "Quy hoạch Nhơn Trạch có thay đổi không?",
      acceptedAnswer: { "@type": "Answer", text: "Các đồ án quy hoạch có thể được điều chỉnh theo quy định. Vì vậy cần kiểm tra thời điểm và phiên bản hồ sơ trước khi sử dụng thông tin để quyết định mua đất." },
    },
    {
      "@type": "Question", name: "Có nên mua đất chỉ vì nằm gần đường quy hoạch?",
      acceptedAnswer: { "@type": "Answer", text: "Không nên. Quy hoạch giao thông chỉ là một yếu tố. Người mua cần đánh giá đồng thời pháp lý, giá, vị trí, nhu cầu thực tế và khả năng thanh khoản." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Cách đọc bản đồ quy hoạch Nhơn Trạch", item: PAGE_URL },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization",
  name: "Kim Oanh Đồng Nai", url: BASE_URL,
  logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
};

// ─────────────────────────────────────────────────────────────
// Lightbox
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS27["1"], alt: "Cách đọc bản đồ quy hoạch Nhơn Trạch cho người mua đất", caption: "Hướng dẫn các bước cơ bản để đọc và đối chiếu bản đồ quy hoạch Nhơn Trạch" },
  { src: IMG_NEWS27["2"], alt: "Phân biệt bản đồ địa chính và bản đồ quy hoạch Nhơn Trạch", caption: "Bản đồ địa chính xác định thửa đất, bản đồ quy hoạch thể hiện định hướng sử dụng không gian" },
  { src: IMG_NEWS27["3"], alt: "Cách đọc ký hiệu và màu sắc trên bản đồ quy hoạch Nhơn Trạch", caption: "Luôn đọc chú giải trước khi kết luận về chức năng đất trên bản đồ quy hoạch" },
  { src: IMG_NEWS27["4"], alt: "Quy trình tra cứu bản đồ quy hoạch Nhơn Trạch cho người mua đất", caption: "5 bước cơ bản để đối chiếu vị trí thửa đất với thông tin quy hoạch" },
  { src: IMG_NEWS27["5"], alt: "Checklist cách đọc bản đồ quy hoạch Nhơn Trạch trước khi mua đất", caption: "Checklist giúp người mua kiểm tra các thông tin quan trọng trên bản đồ quy hoạch" },
];

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400 scroll-mt-24">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base md:text-lg font-black text-slate-800 mb-2 mt-6">{children}</h3>;
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
  return (
    <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4 my-4">
      <p className="text-amber-800 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all">
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const errors7 = [
  { no: "01", title: "Chỉ nhìn màu", desc: "Màu sắc phải được đọc cùng chú giải của chính bản đồ đó." },
  { no: "02", title: "Không xác định số thửa", desc: "Nhìn một khu vực rộng rồi kết luận về một nền đất cụ thể là rất rủi ro." },
  { no: "03", title: "Nhầm quy hoạch với hiện trạng", desc: "Đường trên bản đồ không đồng nghĩa với đường đã hoàn thành." },
  { no: "04", title: "Chỉ xem Google Maps", desc: "Google Maps chỉ nên được dùng để tham khảo vị trí và hiện trạng, không thay thế hồ sơ quy hoạch." },
  { no: "05", title: "Dùng bản đồ cũ", desc: "Quy hoạch có thể thay đổi hoặc được điều chỉnh. Cần kiểm tra thời điểm của hồ sơ." },
  { no: "06", title: "Chỉ nghe môi giới", desc: "Thông tin môi giới cung cấp nên được kiểm chứng bằng hồ sơ chính thức." },
  { no: "07", title: "Nghĩ quy hoạch = tăng giá", desc: "Quy hoạch hạ tầng có thể tạo ra cơ hội, nhưng không phải mọi khu vực có quy hoạch đều tăng giá cùng mức và cùng thời điểm." },
];

const steps7 = [
  { step: "Bước 1", title: "Xác định đất", desc: "Địa chỉ → số tờ → số thửa" },
  { step: "Bước 2", title: "Xác định hiện trạng", desc: "Đất gì → diện tích bao nhiêu → đường vào thế nào" },
  { step: "Bước 3", title: "Mở bản đồ quy hoạch", desc: "Xác định khu vực → đọc chú giải → đọc ký hiệu" },
  { step: "Bước 4", title: "Đối chiếu", desc: "Thửa đất → chức năng quy hoạch → giao thông → công trình xung quanh" },
  { step: "Bước 5", title: "Kiểm tra nguồn", desc: "Hồ sơ → thời điểm → cơ quan công bố" },
  { step: "Bước 6", title: "Kiểm tra pháp lý", desc: "Sổ → thế chấp → tranh chấp → điều kiện giao dịch" },
  { step: "Bước 7", title: "Sau cùng mới đánh giá đầu tư", desc: "Vị trí → hạ tầng → giá → thanh khoản → nhu cầu thực tế" },
];

const checklistItems = [
  "Xác định số tờ bản đồ",
  "Xác định số thửa",
  "Đọc chú giải",
  "Xác định chức năng đất",
  "Kiểm tra đường quy hoạch",
  "Kiểm tra ranh giới",
  "Kiểm tra thời điểm hồ sơ",
  "Đối chiếu nguồn chính thức",
];

const faqs = [
  { q: "Làm sao xem bản đồ quy hoạch Nhơn Trạch?", a: "Trước tiên cần xác định vị trí và số tờ, số thửa của khu đất. Sau đó đối chiếu với bản đồ quy hoạch phù hợp, đọc chú giải, ký hiệu và kiểm tra thời điểm của hồ sơ." },
  { q: "Nhìn màu trên bản đồ có biết đất ở không?", a: "Không nên kết luận chỉ dựa vào màu. Cần xem chú giải của chính bản đồ đó và đối chiếu với hồ sơ đất đai liên quan." },
  { q: "Đường trên bản đồ quy hoạch có phải đường sắp xây không?", a: "Không nhất thiết. Một tuyến đường có thể mới nằm trong định hướng hoặc đồ án quy hoạch. Cần kiểm tra tình trạng triển khai và hồ sơ liên quan." },
  { q: "Quy hoạch 1/500 có phải là sổ đỏ không?", a: "Không. Quy hoạch chi tiết tỷ lệ 1/500 là một loại hồ sơ quy hoạch, không thay thế Giấy chứng nhận quyền sử dụng đất." },
  { q: "Google Maps có xem được quy hoạch không?", a: "Google Maps hữu ích để xem vị trí và hiện trạng nhưng không nên được sử dụng thay thế cho bản đồ và hồ sơ quy hoạch chính thức." },
  { q: "Quy hoạch Nhơn Trạch có thay đổi không?", a: "Các đồ án quy hoạch có thể được điều chỉnh theo quy định. Vì vậy cần kiểm tra thời điểm và phiên bản hồ sơ trước khi sử dụng thông tin để quyết định mua đất." },
  { q: "Có nên mua đất chỉ vì nằm gần đường quy hoạch?", a: "Không nên. Quy hoạch giao thông chỉ là một yếu tố. Người mua cần đánh giá đồng thời pháp lý, giá, vị trí, nhu cầu thực tế và khả năng thanh khoản." },
];

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export default function CachDocBanDoQuyHoachNhonTrachPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {LightboxPortal}
      <ScrollAnimator />
      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero ── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span className="text-slate-300">/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium line-clamp-1">Cách đọc bản đồ quy hoạch Nhơn Trạch</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Thị trường</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 13 phút đọc</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Cách đọc bản đồ quy hoạch Nhơn Trạch: Hướng dẫn cho người mua đất
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Hướng dẫn đọc ký hiệu, màu sắc, số tờ, số thửa và cách đối chiếu vị trí thửa
              đất với bản đồ quy hoạch trước khi mua đất nền Nhơn Trạch.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh bản đồ quy hoạch Nhơn Trạch"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS27["1"]} alt="Cách đọc bản đồ quy hoạch Nhơn Trạch cho người mua đất"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Hướng dẫn các bước cơ bản để đọc và đối chiếu bản đồ quy hoạch Nhơn Trạch
            </p>
          </div>
        </div>

        {/* ── Main ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-1.5 text-sm text-slate-600 columns-1 sm:columns-2 gap-x-8">
                  {[
                    ["#ban-do-la-gi",   "1. Bản đồ quy hoạch là gì?"],
                    ["#phan-biet",      "2. Phân biệt bản đồ địa chính và quy hoạch"],
                    ["#xac-dinh-vi-tri","3. Xác định chính xác vị trí thửa đất"],
                    ["#so-thua",        "4. Hiểu số tờ và số thửa"],
                    ["#mau-sac",        "5. Hiểu màu sắc trên bản đồ"],
                    ["#ky-hieu",        "6. Cách đọc ký hiệu"],
                    ["#duong-giao-thong","7. Nhận biết đường giao thông quy hoạch"],
                    ["#bi-anh-huong",   "8. Kiểm tra đất bị ảnh hưởng bởi đường quy hoạch"],
                    ["#ty-le",          "9. Hiểu tỷ lệ bản đồ"],
                    ["#qh-500",         "10. Quy hoạch 1/500 có ý nghĩa gì?"],
                    ["#dat-o",          "11. Cách đọc thông tin đất ở"],
                    ["#cay-xanh",       "12. Cây xanh và công trình công cộng"],
                    ["#ranh-gioi",      "13. Cách đọc ranh giới quy hoạch"],
                    ["#google-maps",    "14. Google Maps có xem được quy hoạch không?"],
                    ["#nguon-chinh-thuc","15. Kiểm tra từ nguồn chính thức"],
                    ["#7-loi",          "16. 7 lỗi thường gặp"],
                    ["#7-buoc",         "17. Công thức 7 bước khi mua đất"],
                    ["#thay-doi",       "18. Quy hoạch có thể thay đổi không?"],
                    ["#gia-dat",        "19. Bản đồ quy hoạch quyết định giá đất không?"],
                    ["#mega-city-2",    "20. Nếu đang quan tâm Mega City 2"],
                    ["#faq",            "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <div className="space-y-5 mb-14">
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Đối với người lần đầu mua đất, bản đồ quy hoạch thường có rất nhiều màu sắc,
                  ký hiệu, đường nét và thông tin chuyên môn nên khá khó hiểu.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Một trong những sai lầm phổ biến là chỉ nhìn vào màu của một khu vực rồi
                  kết luận <em>"Đất này là đất ở"</em> hoặc{" "}
                  <em>"Khu này chắc chắn sẽ tăng giá vì có đường quy hoạch."</em>
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Thực tế, để hiểu một bản đồ quy hoạch cần xem đồng thời nhiều thông tin: vị
                  trí, số tờ, số thửa, ký hiệu sử dụng đất, mạng lưới giao thông, phạm vi quy
                  hoạch và thời điểm của hồ sơ.
                </p>
                <InfoBox>
                  Đồng Nai hiện công khai dữ liệu quy hoạch – kế hoạch sử dụng đất trên các hệ
                  thống thông tin của tỉnh. Khi kiểm tra một thửa đất cụ thể, nên ưu tiên đối
                  chiếu với nguồn chính thức thay vì chỉ sử dụng bản đồ do môi giới cung cấp.
                </InfoBox>
              </div>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="ban-do-la-gi">1. Bản đồ quy hoạch Nhơn Trạch là gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hiểu đơn giản, bản đồ quy hoạch là công cụ thể hiện cách sử dụng không gian
                    đất đai trong một khu vực theo một đồ án hoặc kế hoạch cụ thể. Trên bản đồ
                    có thể thể hiện:
                  </p>
                  <BulletList items={[
                    "Khu vực đất ở, đất thương mại dịch vụ",
                    "Đất công cộng, đất cây xanh",
                    "Đất giao thông, đất giáo dục, đất y tế",
                    "Đất công nghiệp, mặt nước",
                    "Hệ thống giao thông hiện hữu và quy hoạch",
                    "Ranh giới các khu vực, hành lang bảo vệ công trình",
                  ]} />
                  <InfoBox type="warn">
                    Mỗi loại bản đồ hoặc đồ án quy hoạch có mục đích và tỷ lệ khác nhau. Không
                    nên lấy một bản đồ tổng quan để kết luận chính xác tình trạng pháp lý của
                    một thửa đất cụ thể.
                  </InfoBox>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="phan-biet">2. Phân biệt bản đồ quy hoạch và bản đồ địa chính</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là hai loại thông tin rất dễ bị nhầm.
                  </p>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden">
                    <div className="grid grid-cols-2 divide-x divide-slate-200">
                      <div className="p-5">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Bản đồ địa chính</p>
                        <BulletList items={["Số tờ, số thửa","Ranh giới thửa đất","Diện tích","Hình dạng thửa đất"]} />
                        <p className="text-xs text-slate-500 mt-2 italic">→ Giúp xác định thửa đất nằm ở đâu</p>
                      </div>
                      <div className="p-5 bg-amber-50">
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-3">Bản đồ quy hoạch</p>
                        <BulletList items={["Chức năng sử dụng đất","Khu chức năng","Giao thông","Công trình công cộng","Không gian đô thị"]} />
                        <p className="text-xs text-amber-700 mt-2 italic">→ Giúp hiểu khu vực được định hướng sử dụng như thế nào</p>
                      </div>
                    </div>
                  </div>
                  <InfoBox>
                    <strong>Nguyên tắc quan trọng:</strong> Xác định thửa đất trước → đối chiếu bản đồ quy hoạch sau.
                    Không nên nhìn bản đồ quy hoạch mà chưa xác định chính xác số tờ, số thửa.
                  </InfoBox>
                </div>
              </section>

              {/* Image 1 */}
              <ArticleFigure
                src={IMG_NEWS27["2"]}
                alt="Phân biệt bản đồ địa chính và bản đồ quy hoạch Nhơn Trạch"
                caption="Bản đồ địa chính xác định thửa đất, bản đồ quy hoạch thể hiện định hướng sử dụng không gian"
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="xac-dinh-vi-tri">3. Bước đầu tiên: xác định chính xác vị trí thửa đất</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trước khi mở bản đồ quy hoạch, hãy lấy các thông tin:
                  </p>
                  <BulletList items={[
                    "Số tờ bản đồ và số thửa",
                    "Diện tích và địa chỉ",
                    "Tên đường, xã/phường",
                    "Các mốc ranh giới xung quanh",
                  ]} />
                  <WarnBox>
                    Nếu người bán chỉ gửi một vị trí Google Maps thì chưa đủ. Bạn cần xác định
                    vị trí đó tương ứng với thửa đất nào trên hồ sơ địa chính.
                  </WarnBox>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="so-thua">4. Hiểu số tờ và số thửa</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ví dụ một thửa đất có tờ bản đồ số 25, thửa đất số 168. Hai thông tin này
                    giúp xác định chính xác vị trí trên hồ sơ địa chính.
                  </p>
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-5">
                    <p className="text-sm font-bold text-slate-700 mb-3">Khi đối chiếu quy hoạch</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Hãy cố gắng xác định đúng <strong>thửa 168 thuộc tờ 25</strong> thay vì
                      chỉ nhìn vào khu vực xung quanh.
                    </p>
                  </div>
                  <InfoBox type="warn">
                    Hai nền đất nằm cách nhau vài chục mét có thể có thông tin quy hoạch khác
                    nhau nếu chúng nằm ở hai vị trí hoặc ranh quy hoạch khác nhau.
                  </InfoBox>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="mau-sac">5. Hiểu màu sắc trên bản đồ quy hoạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một bản đồ quy hoạch thường sử dụng nhiều màu để phân biệt các nhóm chức
                    năng sử dụng đất. Tuy nhiên, không nên mặc định rằng một màu cụ thể luôn có
                    cùng ý nghĩa trên mọi bản đồ.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mỗi bản đồ cần xem phần <strong>chú giải (Legend)</strong> để biết chính xác
                    màu và ký hiệu đó đại diện cho chức năng nào.
                  </p>
                  <div className="rounded-2xl border-2 border-amber-400 bg-amber-50 px-6 py-5 text-center">
                    <p className="text-amber-800 font-black text-lg">Đừng đoán màu → Hãy đọc chú giải</p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {["Đất ở", "Giao thông", "Cây xanh", "Công trình công cộng", "Thương mại dịch vụ", "Giáo dục", "Y tế"].map((label) => (
                      <span key={label} className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700">{label}</span>
                    ))}
                  </div>
                  <p className="text-slate-500 text-sm italic">Cách thể hiện màu sắc có thể thay đổi tùy loại bản đồ và đồ án.</p>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="ky-hieu">6. Cách đọc ký hiệu trên bản đồ</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ngoài màu sắc, bản đồ còn có rất nhiều ký hiệu: đường giao thông, ranh giới
                    quy hoạch, công trình công cộng, khu cây xanh, mặt nước, các tuyến đường quy
                    hoạch.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một đường nét trên bản đồ không nhất thiết là đường giao thông hiện hữu — nó
                    có thể là <strong>đường quy hoạch trong đồ án</strong>. Vì vậy cần phân biệt:
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-slate-200 p-4 text-center">
                      <p className="font-black text-slate-700">Hiện trạng</p>
                      <p className="text-sm text-slate-500 mt-1">Đã tồn tại thực tế</p>
                    </div>
                    <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-center">
                      <p className="font-black text-amber-700">Quy hoạch</p>
                      <p className="text-sm text-amber-600 mt-1">Định hướng trong đồ án</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Image 2 */}
              <ArticleFigure
                src={IMG_NEWS27["3"]}
                alt="Cách đọc ký hiệu và màu sắc trên bản đồ quy hoạch Nhơn Trạch"
                caption="Luôn đọc chú giải trước khi kết luận về chức năng đất trên bản đồ quy hoạch"
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 7 */}
              <section className="mb-12">
                <SectionHeading id="duong-giao-thong">7. Cách nhận biết đường giao thông quy hoạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trên bản đồ có thể xuất hiện các tuyến đường: đang tồn tại, đang triển khai,
                    dự kiến, quy hoạch mở rộng, đường nội bộ, tuyến giao thông cấp khu vực và
                    tuyến giao thông lớn.
                  </p>
                  <WarnBox>
                    Không nên chỉ nhìn thấy một tuyến đường trên bản đồ rồi kết luận{" "}
                    <em>"Đường này sắp làm."</em> Cần kiểm tra: đó là tuyến gì, thuộc đồ án nào,
                    đã triển khai hay mới ở mức quy hoạch, và có thông tin cập nhật mới hơn không.
                  </WarnBox>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/duong-25c">Tiến độ đường 25C →</LinkBtn>
                    <LinkBtn href="/tin-tuc/cau-nhon-trach">Cầu Nhơn Trạch →</LinkBtn>
                    <LinkBtn href="/tin-tuc/vanh-dai-3">Vành đai 3 →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section className="mb-12">
                <SectionHeading id="bi-anh-huong">8. Cách kiểm tra đất có bị ảnh hưởng bởi đường quy hoạch không</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hãy thực hiện theo trình tự:
                  </p>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    {[
                      { step: "1", text: "Xác định ranh giới thửa đất" },
                      { step: "2", text: "Xác định tuyến đường trên bản đồ" },
                      { step: "3", text: "Đối chiếu hai lớp thông tin" },
                      { step: "4", text: "Xem phần đất bị ảnh hưởng nếu có" },
                      { step: "5", text: "Kiểm tra lại bằng hồ sơ hoặc nguồn thông tin chính thức" },
                    ].map((s, i) => (
                      <div key={s.step} className={`flex items-center gap-4 px-6 py-4 ${i < 4 ? "border-b border-slate-100" : ""}`}>
                        <span className="w-8 h-8 rounded-full bg-amber-500 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                          {s.step}
                        </span>
                        <p className="text-sm text-slate-700 font-medium">{s.text}</p>
                      </div>
                    ))}
                  </div>
                  <WarnBox>
                    Không nên chỉ nhìn bản đồ trên màn hình điện thoại rồi tự đoán diện tích
                    bị ảnh hưởng.
                  </WarnBox>
                </div>
              </section>

              {/* Section 9 */}
              <section className="mb-12">
                <SectionHeading id="ty-le">9. Hiểu tỷ lệ bản đồ</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tỷ lệ bản đồ là thông tin quan trọng cần chú ý: 1/5.000, 1/2.000, 1/500
                    phục vụ cho các mức độ thể hiện khác nhau.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="font-black text-slate-700 text-sm mb-1">Tỷ lệ nhỏ hơn (1/5.000)</p>
                      <p className="text-sm text-slate-500">Nhìn được phạm vi rộng hơn</p>
                    </div>
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                      <p className="font-black text-amber-700 text-sm mb-1">Tỷ lệ lớn hơn (1/500)</p>
                      <p className="text-sm text-amber-600">Thể hiện chi tiết hơn</p>
                    </div>
                  </div>
                  <InfoBox>
                    Tỷ lệ lớn hơn không đồng nghĩa bản đồ đó có "pháp lý cao hơn". Bạn vẫn phải
                    xác định bản đồ thuộc đồ án nào, được phê duyệt ở đâu và thời điểm nào.
                  </InfoBox>
                </div>
              </section>

              {/* Section 10 */}
              <section className="mb-12">
                <SectionHeading id="qh-500">10. Quy hoạch 1/500 có ý nghĩa gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Quy hoạch chi tiết tỷ lệ 1/500 thường thể hiện không gian ở mức chi tiết
                    hơn: ranh giới các lô đất, đường giao thông, công trình công cộng, cây xanh,
                    chức năng từng khu đất, hạ tầng kỹ thuật.
                  </p>
                  <WarnBox>
                    Không nên chỉ nghe câu <em>"Dự án có quy hoạch 1/500"</em> mà nên yêu cầu
                    xác định đồ án nào, phạm vi nào và sản phẩm mình quan tâm nằm ở đâu trong
                    đồ án đó.
                  </WarnBox>
                  <LinkBtn href="/tin-tuc/quy-hoach-1-500-nhon-trach">Đọc thêm: Quy hoạch 1/500 Nhơn Trạch →</LinkBtn>
                </div>
              </section>

              {/* Image 3 */}
              <ArticleFigure
                src={IMG_NEWS27["4"]}
                alt="Quy trình tra cứu bản đồ quy hoạch Nhơn Trạch cho người mua đất"
                caption="5 bước cơ bản để đối chiếu vị trí thửa đất với thông tin quy hoạch"
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 11 */}
              <section className="mb-12">
                <SectionHeading id="dat-o">11. Cách đọc thông tin về đất ở</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu bản đồ thể hiện khu vực đất ở, người mua vẫn cần kiểm tra kỹ. Không nên
                    hiểu rằng <em>"Có màu đất ở trên bản đồ = thửa đất chắc chắn được xây nhà ngay."</em>
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">Cần đối chiếu thêm:</p>
                  <BulletList items={[
                    "Giấy chứng nhận và mục đích sử dụng đất hiện tại",
                    "Quy hoạch liên quan và quy định xây dựng",
                    "Các điều kiện pháp lý khác",
                  ]} />
                  <LinkBtn href="/tin-tuc/cach-kiem-tra-phap-ly-dat-nen-nhon-trach">
                    Cách kiểm tra pháp lý đất nền Nhơn Trạch →
                  </LinkBtn>
                </div>
              </section>

              {/* Section 12 */}
              <section className="mb-12">
                <SectionHeading id="cay-xanh">12. Cách đọc thông tin quy hoạch cây xanh và công trình công cộng</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu một thửa đất nằm gần khu vực cây xanh, trường học, y tế hay công trình
                    công cộng, người mua không nên tự động kết luận rằng đây là tiện ích chắc
                    chắn sẽ xây. Cần kiểm tra:
                  </p>
                  <BulletList items={[
                    "Chức năng quy hoạch và đồ án quy hoạch",
                    "Tình trạng triển khai",
                    "Các quyết định hoặc hồ sơ liên quan",
                  ]} />
                  <InfoBox>
                    Quy hoạch và hiện trạng không phải lúc nào cũng giống nhau tại cùng một
                    thời điểm.
                  </InfoBox>
                </div>
              </section>

              {/* Section 13 */}
              <section className="mb-12">
                <SectionHeading id="ranh-gioi">13. Cách đọc ranh giới quy hoạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một bản đồ có thể có nhiều loại ranh giới: ranh thửa đất, ranh khu vực,
                    ranh dự án, ranh đồ án, ranh hành chính, chỉ giới đường, hành lang bảo vệ.
                  </p>
                  <WarnBox>
                    Người mới rất dễ nhầm các loại đường này. Hãy đọc phần chú giải và tên lớp
                    bản đồ trước khi đưa ra kết luận.
                  </WarnBox>
                </div>
              </section>

              {/* Section 14 */}
              <section className="mb-12">
                <SectionHeading id="google-maps">14. Có nên dùng Google Maps để xem quy hoạch không?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Google Maps rất hữu ích để xác định vị trí, xem đường hiện trạng và các khu
                    vực xung quanh. Nhưng Google Maps không phải là nguồn thay thế cho hồ sơ quy
                    hoạch chính thức.
                  </p>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="divide-y divide-slate-100">
                      {[
                        { tool: "Google Maps", use: "Xác định vị trí, xem hiện trạng", limit: "Không thay thế hồ sơ quy hoạch" },
                        { tool: "Bản đồ địa chính", use: "Xác định số tờ, số thửa, ranh giới", limit: "Không thể hiện định hướng quy hoạch" },
                        { tool: "Bản đồ/hồ sơ quy hoạch", use: "Kiểm tra chức năng, giao thông, công trình", limit: "Cần đọc chú giải, kiểm tra thời điểm hồ sơ" },
                      ].map((row) => (
                        <div key={row.tool} className="grid grid-cols-3 divide-x divide-slate-100">
                          <div className="px-4 py-3 font-semibold text-slate-700 text-sm">{row.tool}</div>
                          <div className="px-4 py-3 text-slate-600 text-sm">{row.use}</div>
                          <div className="px-4 py-3 text-amber-700 text-xs">{row.limit}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 15 */}
              <section className="mb-12">
                <SectionHeading id="nguon-chinh-thuc">15. Cách kiểm tra quy hoạch Nhơn Trạch từ nguồn chính thức</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi cần kiểm tra thông tin quy hoạch, nên ưu tiên các nguồn chính thức. Đồng
                    Nai có hệ thống công khai dữ liệu quy hoạch – kế hoạch sử dụng đất. Người
                    mua có thể sử dụng các nguồn này để tham khảo và đối chiếu.
                  </p>
                  <BulletList items={[
                    "Cổng thông tin điện tử tỉnh Đồng Nai",
                    "Cổng thông tin của cơ quan địa phương",
                    "Cơ quan quản lý đất đai và văn phòng đăng ký đất đai",
                    "Hồ sơ quy hoạch và đồ án điều chỉnh được công khai",
                  ]} />
                  <InfoBox type="warn">
                    Chú ý đến thời điểm của hồ sơ, bởi quy hoạch có thể được điều chỉnh. Một
                    hình ảnh bản đồ không rõ nguồn gốc hoặc không rõ thời điểm không đủ tin cậy
                    để kết luận tình trạng quy hoạch.
                  </InfoBox>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat">Quy hoạch Nhơn Trạch mới nhất →</LinkBtn>
                    <LinkBtn href="/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat">Hạ tầng Nhơn Trạch 2026 →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 16 – 7 lỗi */}
              <section className="mb-12">
                <SectionHeading id="7-loi">16. 7 lỗi thường gặp khi đọc bản đồ quy hoạch</SectionHeading>
                <div className="pt-5 space-y-4">
                  {errors7.map((e) => (
                    <div key={e.no} className="flex gap-4 rounded-2xl border border-slate-200 p-5 hover:border-amber-300 transition-colors">
                      <span className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 font-black text-sm flex items-center justify-center flex-shrink-0">
                        {e.no}
                      </span>
                      <div>
                        <p className="font-black text-slate-800 text-sm mb-1">{e.title}</p>
                        <p className="text-slate-500 text-sm leading-relaxed">{e.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 17 – 7 bước */}
              <section className="mb-12">
                <SectionHeading id="7-buoc">17. Công thức 7 bước khi đọc bản đồ và mua đất Nhơn Trạch</SectionHeading>
                <div className="pt-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85] mb-6">
                    Đây là cách tiếp cận an toàn hơn so với việc chỉ nhìn một bản đồ và quyết
                    định mua:
                  </p>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    {steps7.map((s, i) => (
                      <div key={s.step} className={`flex gap-4 px-6 py-4 hover:bg-amber-50/30 transition-colors ${i < steps7.length - 1 ? "border-b border-slate-100" : ""}`}>
                        <div className="flex-shrink-0 flex flex-col items-center">
                          <span className="w-8 h-8 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center">{i + 1}</span>
                          {i < steps7.length - 1 && <span className="w-0.5 h-full bg-amber-200 mt-1" />}
                        </div>
                        <div className="pb-2">
                          <p className="font-black text-slate-800 text-sm">{s.title}</p>
                          <p className="text-slate-500 text-xs mt-0.5">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Image 4 – checklist */}
              <ArticleFigure
                src={IMG_NEWS27["5"]}
                alt="Checklist cách đọc bản đồ quy hoạch Nhơn Trạch trước khi mua đất"
                caption="Checklist giúp người mua kiểm tra các thông tin quan trọng trên bản đồ quy hoạch"
                images={images} index={4} onOpen={openLightbox}
              />

              {/* Section 18 */}
              <section className="mb-12">
                <SectionHeading id="thay-doi">18. Bản đồ quy hoạch Nhơn Trạch có thể thay đổi không?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Có. Các đồ án quy hoạch và kế hoạch sử dụng đất có thể được điều chỉnh theo
                    quy định và tình hình phát triển thực tế. Vì vậy, khi đọc một bản đồ quy
                    hoạch, cần quan tâm đến:
                  </p>
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-5">
                    <p className="text-sm font-bold text-slate-700 mb-2">Thông tin cần xác định</p>
                    <div className="flex flex-wrap gap-2">
                      {["Tên đồ án", "Thời điểm", "Cơ quan phê duyệt/công bố", "Phạm vi áp dụng"].map((item) => (
                        <span key={item} className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700">{item}</span>
                      ))}
                    </div>
                  </div>
                  <InfoBox type="warn">
                    Đặc biệt với những khu vực đang phát triển nhanh như Nhơn Trạch, người mua
                    nên kiểm tra thông tin mới nhất trước khi đưa ra quyết định.
                  </InfoBox>
                </div>
              </section>

              {/* Section 19 */}
              <section className="mb-12">
                <SectionHeading id="gia-dat">19. Bản đồ quy hoạch có quyết định giá đất không?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không. Quy hoạch là một trong nhiều yếu tố có thể ảnh hưởng đến giá bất
                    động sản. Giá đất còn phụ thuộc vào:
                  </p>
                  <BulletList items={[
                    "Vị trí, hạ tầng, pháp lý",
                    "Khả năng kết nối, nhu cầu ở thực",
                    "Nguồn cung, thanh khoản",
                    "Môi trường sống, tiện ích",
                    "Thời điểm thị trường",
                  ]} />
                  <WarnBox>
                    Không nên dùng câu <em>"Đất có đường quy hoạch nên chắc chắn tăng giá"</em>{" "}
                    làm cơ sở duy nhất để đầu tư.
                  </WarnBox>
                </div>
              </section>

              {/* Section 20 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">20. Nếu đang quan tâm Mega City 2 thì đọc bản đồ thế nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu bạn đang tìm hiểu Mega City 2, có thể kết hợp thông tin từ các trang
                    chuyên đề trên website và đi theo hành trình:
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    {["Quy hoạch", "→", "Pháp lý", "→", "Vị trí", "→", "Dự án"].map((s, i) => (
                      <span key={i} className={s === "→" ? "text-amber-500 font-bold text-base" : "bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg font-bold text-amber-800"}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/mat-bang">Mặt bằng Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/tien-do">Tiến độ Mega City 2 →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Checklist */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-14">
                <div className="bg-amber-500 px-6 py-4">
                  <p className="text-white font-black text-sm uppercase tracking-wider">Checklist đọc bản đồ quy hoạch Nhơn Trạch</p>
                </div>
                <div className="divide-y divide-slate-100">
                  {checklistItems.map((item) => (
                    <div key={item} className="flex items-center gap-4 px-6 py-3.5 hover:bg-amber-50/40 transition-colors">
                      <span className="w-5 h-5 rounded border-2 border-amber-400 flex items-center justify-center flex-shrink-0">
                        <span className="w-2 h-2 rounded-sm bg-amber-400" />
                      </span>
                      <p className="text-sm font-medium text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div id="faq" className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm scroll-mt-24 mb-14">
                <div className="bg-slate-900 px-7 py-6">
                  <h2 className="text-white font-black text-xl tracking-tight">
                    FAQ – Cách đọc bản đồ quy hoạch Nhơn Trạch
                  </h2>
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

              {/* Kết luận */}
              <div className="rounded-2xl bg-amber-50 border border-amber-200 px-7 py-7">
                <h2 className="text-xl font-black text-slate-900 mb-4">Kết luận</h2>
                <p className="text-slate-700 text-[16px] leading-[1.85] mb-4">
                  Biết cách đọc bản đồ quy hoạch Nhơn Trạch sẽ giúp người mua hạn chế rất
                  nhiều rủi ro. Nguyên tắc quan trọng nhất là không nhìn màu để đoán, không nhìn
                  đường để kết luận, không nhìn Google Maps để xác định pháp lý.
                </p>
                <p className="text-slate-700 text-[16px] leading-[1.85] mb-4">
                  Thay vào đó, hãy thực hiện theo trình tự:
                </p>
                <div className="flex flex-wrap items-center gap-2 text-sm mb-5">
                  {["Xác định thửa", "→", "Đọc chú giải", "→", "Kiểm tra chức năng", "→", "Đối chiếu giao thông", "→", "Kiểm tra thời điểm hồ sơ", "→", "Xác minh nguồn chính thức", "→", "Kiểm tra pháp lý"].map((s, i) => (
                    <span key={i} className={s === "→" ? "text-amber-500 font-bold" : "bg-white border border-slate-200 px-2.5 py-1 rounded-lg font-medium text-slate-700 text-xs"}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  <LinkBtn href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat">Quy hoạch Nhơn Trạch mới nhất →</LinkBtn>
                  <LinkBtn href="/tin-tuc/cach-kiem-tra-phap-ly-dat-nen-nhon-trach">Kiểm tra pháp lý đất nền →</LinkBtn>
                </div>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28 space-y-6">

                {/* Checklist quick */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-amber-500 px-6 py-4">
                    <p className="text-white font-black text-sm uppercase tracking-wider">Checklist đọc bản đồ</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {checklistItems.map((item) => (
                      <div key={item} className="flex items-center gap-3 px-5 py-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                        <p className="text-sm font-semibold text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-wider">Bài liên quan</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      { label: "Quy hoạch Nhơn Trạch 2026",        href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat" },
                      { label: "Quy hoạch 1/500 Nhơn Trạch",       href: "/tin-tuc/quy-hoach-1-500-nhon-trach" },
                      { label: "Kiểm tra pháp lý đất nền",         href: "/tin-tuc/cach-kiem-tra-phap-ly-dat-nen-nhon-trach" },
                      { label: "Mua đất cần lưu ý gì",             href: "/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi" },
                      { label: "Kinh nghiệm mua đất",              href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach" },
                      { label: "Pháp lý Mega City 2",              href: "/mega-city-2/phap-ly" },
                    ].map((link) => (
                      <a key={link.href} href={link.href}
                        className="flex items-center justify-between px-6 py-4 text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors group">
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

        {/* CTA */}
        <PageCTA
          title="Tư vấn pháp lý và quy hoạch Mega City 2"
          subtitle="Liên hệ để được hỗ trợ kiểm tra quy hoạch, pháp lý và tư vấn sản phẩm phù hợp tại Mega City 2 Nhơn Trạch."
          variant="default"
        />

        {/* Related */}
        <RelatedContent
          items={[
            { href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat", title: "Quy hoạch Nhơn Trạch mới nhất 2026", description: "Phân tích bản đồ quy hoạch và định hướng phát triển đô thị Nhơn Trạch.", tag: "Quy hoạch" },
            { href: "/tin-tuc/quy-hoach-1-500-nhon-trach", title: "Quy hoạch 1/500 Nhơn Trạch", description: "Cách đọc bản đồ quy hoạch chi tiết và những điều người mua đất cần biết.", tag: "Quy hoạch" },
            { href: "/tin-tuc/cach-kiem-tra-phap-ly-dat-nen-nhon-trach", title: "Cách kiểm tra pháp lý đất nền Nhơn Trạch", description: "Hướng dẫn kiểm tra sổ đỏ, quy hoạch, thế chấp và hồ sơ trước khi giao dịch.", tag: "Pháp lý" },
            { href: "/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi", title: "Mua đất Nhơn Trạch cần lưu ý gì?", description: "10 điều quan trọng người mua đất Nhơn Trạch cần kiểm tra.", tag: "Lưu ý" },
            { href: "/mega-city-2/phap-ly", title: "Pháp lý Mega City 2", description: "Tình trạng pháp lý và điều kiện giao dịch tại Mega City 2 Nhơn Trạch.", tag: "Pháp lý" },
            { href: "/mega-city-2/vi-tri", title: "Vị trí Mega City 2", description: "Phân tích vị trí chiến lược và khả năng kết nối giao thông tại Nhơn Trạch.", tag: "Vị trí" },
          ]}
        />
      </div>

      <CorpFooter />
    </>
  );
}
