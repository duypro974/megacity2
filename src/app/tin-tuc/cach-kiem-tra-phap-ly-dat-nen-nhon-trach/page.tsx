"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import PageCTA from "@/components/PageCTA";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS26 } from "@/lib/cloudinary";

// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────
const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/cach-kiem-tra-phap-ly-dat-nen-nhon-trach`;
const PUBLISHED     = "23/08/2026";
const PUBLISHED_ISO = "2026-08-23";

// ─────────────────────────────────────────────────────────────
// JSON-LD Schemas
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cách kiểm tra pháp lý đất nền Nhơn Trạch trước khi mua",
  description:
    "Hướng dẫn cách kiểm tra pháp lý đất nền Nhơn Trạch: sổ đỏ, quy hoạch, mục đích sử dụng đất, thế chấp, tranh chấp và hồ sơ cần kiểm tra trước khi giao dịch.",
  image: [IMG_NEWS26["1"], IMG_NEWS26["2"], IMG_NEWS26["3"]],
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
  about: {
    "@type": "Place",
    name: "Nhơn Trạch, Đồng Nai",
    address: { "@type": "PostalAddress", addressLocality: "Nhơn Trạch", addressRegion: "Đồng Nai", addressCountry: "VN" },
  },
  keywords:
    "cách kiểm tra pháp lý đất nền Nhơn Trạch, kiểm tra sổ đỏ, kiểm tra quy hoạch đất, mua đất Nhơn Trạch cần kiểm tra gì",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mua đất Nhơn Trạch cần kiểm tra sổ đỏ gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nên kiểm tra tên người sử dụng đất, số tờ, số thửa, diện tích, mục đích sử dụng, thời hạn sử dụng và các thông tin đăng ký biến động hoặc hạn chế quyền nếu có.",
      },
    },
    {
      "@type": "Question",
      name: "Làm sao biết đất Nhơn Trạch có dính quy hoạch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có thể bắt đầu bằng việc tra cứu dữ liệu quy hoạch được cơ quan nhà nước công khai, sau đó đối chiếu chính xác số tờ, số thửa và vị trí của nền đất. Đồng Nai hiện có dữ liệu mở về quy hoạch sử dụng đất, trong đó có Nhơn Trạch.",
      },
    },
    {
      "@type": "Question",
      name: "Có sổ đỏ thì có thể mua ngay không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Không nên. Có Giấy chứng nhận là một yếu tố quan trọng nhưng người mua vẫn cần kiểm tra quy hoạch, thế chấp, tranh chấp, kê biên, mục đích sử dụng đất và các điều kiện liên quan đến giao dịch.",
      },
    },
    {
      "@type": "Question",
      name: "Mua đất dự án cần kiểm tra gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ngoài hồ sơ của nền đất, cần kiểm tra hồ sơ pháp lý của dự án, quy hoạch, hạ tầng, điều kiện giao dịch và hợp đồng.",
      },
    },
    {
      "@type": "Question",
      name: "Có nên đặt cọc trước khi kiểm tra pháp lý không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Không nên vội đặt cọc khi chưa kiểm tra những thông tin pháp lý cơ bản. Nếu cần đặt cọc để giữ giao dịch, nội dung thỏa thuận phải quy định rõ điều kiện và trách nhiệm của các bên.",
      },
    },
    {
      "@type": "Question",
      name: "Ai nên kiểm tra pháp lý khi mua đất?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Người mua có thể tự kiểm tra những thông tin cơ bản, nhưng với giao dịch giá trị lớn hoặc hồ sơ phức tạp, nên nhờ luật sư hoặc chuyên gia có chuyên môn kiểm tra.",
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
    { "@type": "ListItem", position: 3, name: "Cách kiểm tra pháp lý đất nền Nhơn Trạch", item: PAGE_URL },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kim Oanh Đồng Nai",
  url: BASE_URL,
  logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
};

// ─────────────────────────────────────────────────────────────
// Lightbox images
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS26["1"], alt: "Cách kiểm tra pháp lý đất nền Nhơn Trạch trước khi mua", caption: "Các bước kiểm tra pháp lý cơ bản trước khi mua đất nền tại Nhơn Trạch" },
  { src: IMG_NEWS26["2"], alt: "Cách kiểm tra quy hoạch đất nền tại Nhơn Trạch trước khi mua", caption: "Người mua nên đối chiếu số tờ, số thửa và vị trí thực tế khi kiểm tra quy hoạch đất" },
  { src: IMG_NEWS26["3"], alt: "Các hồ sơ cần kiểm tra khi mua đất nền tại Nhơn Trạch", caption: "Một số nhóm hồ sơ người mua nên kiểm tra trước khi quyết định giao dịch đất nền" },
  { src: IMG_NEWS26["4"], alt: "Nguồn tra cứu quy hoạch và thông tin đất đai tại Nhơn Trạch", caption: "Nên ưu tiên nguồn thông tin chính thức khi kiểm tra quy hoạch và pháp lý đất đai" },
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
  const s = type === "warn"
    ? "bg-amber-50 border-amber-200 text-amber-800"
    : "bg-slate-50 border-slate-200 text-slate-700";
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
const checklistItems = [
  "Kiểm tra Giấy chứng nhận",
  "Đối chiếu tên người sử dụng đất",
  "Kiểm tra số tờ, số thửa",
  "Kiểm tra diện tích",
  "Kiểm tra mục đích sử dụng đất",
  "Kiểm tra quy hoạch",
  "Kiểm tra kế hoạch sử dụng đất liên quan",
  "Kiểm tra thế chấp",
  "Kiểm tra tranh chấp",
  "Kiểm tra kê biên",
  "Kiểm tra ranh giới thực tế",
  "Kiểm tra đường vào",
  "Kiểm tra hồ sơ dự án nếu là đất thuộc dự án",
  "Kiểm tra điều kiện giao dịch",
  "Kiểm tra hợp đồng đặt cọc",
  "Kiểm tra phương thức thanh toán",
  "Kiểm tra người nhận tiền",
  "Đọc kỹ toàn bộ hồ sơ trước khi ký",
];

const cautionSigns = [
  { title: "Giá thấp bất thường", desc: "Nếu giá thấp hơn đáng kể so với các sản phẩm tương tự trong khu vực, cần tìm hiểu nguyên nhân trước khi tiếp tục." },
  { title: "Ép đặt cọc nhanh", desc: "\"Hôm nay không cọc là mất nền\" không nên là lý do để bỏ qua bước kiểm tra pháp lý." },
  { title: "Không cho xem bản chính giấy tờ", desc: "Đây là dấu hiệu cần đặc biệt thận trọng. Yêu cầu xem bản gốc Giấy chứng nhận là quyền của người mua." },
  { title: "Chỉ cung cấp ảnh chụp giấy tờ", desc: "Ảnh chụp qua Zalo, Messenger không thay thế cho việc kiểm tra hồ sơ chính thức." },
  { title: "Hứa hẹn quy hoạch trong tương lai", desc: "\"Sắp lên thổ cư\", \"Sắp có đường đi qua\" — những thông tin này cần được kiểm chứng bằng hồ sơ chính thức." },
  { title: "Cam kết lợi nhuận", desc: "Không nên xem cam kết tăng giá là căn cứ thay thế cho việc kiểm tra pháp lý." },
];

const questions10 = [
  "Ai là người đứng tên trên Giấy chứng nhận?",
  "Đất hiện tại là loại đất gì?",
  "Đất có đang thế chấp không?",
  "Đất có tranh chấp không?",
  "Đất có nằm trong quy hoạch hoặc kế hoạch sử dụng đất không?",
  "Đường vào đất thuộc quyền sử dụng của ai?",
  "Diện tích thực tế có đúng với giấy chứng nhận không?",
  "Có giấy tờ nào khác liên quan đến thửa đất không?",
  "Nếu là đất dự án, hồ sơ pháp lý của dự án gồm những gì?",
  "Khi nào có thể ký hợp đồng chuyển nhượng?",
];

const faqs = [
  {
    q: "Mua đất Nhơn Trạch cần kiểm tra sổ đỏ gì?",
    a: "Nên kiểm tra tên người sử dụng đất, số tờ, số thửa, diện tích, mục đích sử dụng, thời hạn sử dụng và các thông tin đăng ký biến động hoặc hạn chế quyền nếu có.",
  },
  {
    q: "Làm sao biết đất Nhơn Trạch có dính quy hoạch?",
    a: "Có thể bắt đầu bằng việc tra cứu dữ liệu quy hoạch được cơ quan nhà nước công khai, sau đó đối chiếu chính xác số tờ, số thửa và vị trí của nền đất. Đồng Nai hiện có dữ liệu mở về quy hoạch sử dụng đất, trong đó có Nhơn Trạch.",
  },
  {
    q: "Có sổ đỏ thì có thể mua ngay không?",
    a: "Không nên. Có Giấy chứng nhận là một yếu tố quan trọng nhưng người mua vẫn cần kiểm tra quy hoạch, thế chấp, tranh chấp, kê biên, mục đích sử dụng đất và các điều kiện liên quan đến giao dịch.",
  },
  {
    q: "Mua đất dự án cần kiểm tra gì?",
    a: "Ngoài hồ sơ của nền đất, cần kiểm tra hồ sơ pháp lý của dự án, quy hoạch, hạ tầng, điều kiện giao dịch và hợp đồng.",
  },
  {
    q: "Có nên đặt cọc trước khi kiểm tra pháp lý không?",
    a: "Không nên vội đặt cọc khi chưa kiểm tra những thông tin pháp lý cơ bản. Nếu cần đặt cọc để giữ giao dịch, nội dung thỏa thuận phải quy định rõ điều kiện và trách nhiệm của các bên.",
  },
  {
    q: "Ai nên kiểm tra pháp lý khi mua đất?",
    a: "Người mua có thể tự kiểm tra những thông tin cơ bản, nhưng với giao dịch giá trị lớn hoặc hồ sơ phức tạp, nên nhờ luật sư hoặc chuyên gia có chuyên môn kiểm tra.",
  },
];

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function KiemTraPhapLyDatNenNhonTrachPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Cách kiểm tra pháp lý đất nền Nhơn Trạch</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Thị trường
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 14 phút đọc</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Cách kiểm tra pháp lý đất nền Nhơn Trạch trước khi mua
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Hướng dẫn kiểm tra sổ đỏ, quy hoạch, mục đích sử dụng đất, thế chấp, tranh chấp
              và những hồ sơ cần xem trước khi giao dịch đất nền tại Nhơn Trạch.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh kiểm tra pháp lý đất nền Nhơn Trạch"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS26["1"]} alt="Cách kiểm tra pháp lý đất nền Nhơn Trạch trước khi mua"
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
              Các bước kiểm tra pháp lý cơ bản trước khi mua đất nền tại Nhơn Trạch
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
                <ol className="space-y-1.5 text-sm text-slate-600">
                  {[
                    ["#gcn",          "1. Kiểm tra Giấy chứng nhận quyền sử dụng đất"],
                    ["#so-thua",      "2. Kiểm tra số thửa và số tờ bản đồ"],
                    ["#muc-dich",     "3. Kiểm tra mục đích sử dụng đất"],
                    ["#quy-hoach",    "4. Kiểm tra đất có nằm trong quy hoạch hay không"],
                    ["#the-chap",     "5. Kiểm tra tình trạng thế chấp"],
                    ["#tranh-chap",   "6. Kiểm tra tranh chấp và kê biên"],
                    ["#ranh-gioi",    "7. Kiểm tra ranh giới và diện tích thực tế"],
                    ["#duong-vao",    "8. Kiểm tra đường vào đất"],
                    ["#du-an",        "9. Kiểm tra đất trong dự án"],
                    ["#nguoi-ban",    "10. Kiểm tra thông tin người bán"],
                    ["#hop-dong",     "11. Kiểm tra hợp đồng và tiền đặt cọc"],
                    ["#checklist",    "12. Checklist kiểm tra pháp lý"],
                    ["#tu-kiem-tra",  "13. Có nên tự kiểm tra không?"],
                    ["#10-cau-hoi",   "14. Câu hỏi nên hỏi người bán"],
                    ["#dau-hieu",     "15. Dấu hiệu nên cẩn trọng"],
                    ["#tra-cuu",      "16. Tra cứu quy hoạch ở đâu?"],
                    ["#mega-city-2",  "17. Nếu mua đất nền Mega City 2"],
                    ["#faq",          "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <div className="space-y-5 mb-14">
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Mua đất nền là quyết định tài chính lớn. Ngoài việc quan tâm đến giá bán, vị
                  trí và tiềm năng khu vực, người mua cần kiểm tra kỹ tình trạng pháp lý của
                  thửa đất trước khi đặt cọc hoặc ký hợp đồng.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Tại Nhơn Trạch, việc kiểm tra pháp lý càng quan trọng bởi khu vực đang có
                  nhiều thay đổi về quy hoạch, hạ tầng giao thông và phát triển đô thị. Các cơ
                  quan nhà nước tại Đồng Nai hiện công khai nhiều thông tin liên quan đến quy
                  hoạch và đất đai, tạo điều kiện để người mua có thể chủ động tra cứu.
                </p>
                <InfoBox>
                  Trước khi mua một nền đất tại Nhơn Trạch, người mua nên kiểm tra tối thiểu:
                  Giấy chứng nhận, chủ thể sử dụng đất, mục đích sử dụng, quy hoạch, thế chấp,
                  tranh chấp, ranh giới và điều kiện chuyển nhượng.
                </InfoBox>
              </div>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="gcn">1. Kiểm tra Giấy chứng nhận quyền sử dụng đất</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là bước đầu tiên khi kiểm tra pháp lý một nền đất. Người mua cần yêu
                    cầu bên bán cung cấp <strong>bản chính</strong> Giấy chứng nhận để kiểm tra
                    thông tin — không nên chỉ xem ảnh chụp qua Zalo hay Facebook.
                  </p>
                  <H3>Những thông tin cần đối chiếu trên Giấy chứng nhận</H3>
                  <BulletList items={[
                    "Tên người sử dụng đất",
                    "Số thửa và số tờ bản đồ",
                    "Diện tích",
                    "Mục đích sử dụng đất",
                    "Thời hạn sử dụng đất",
                    "Nguồn gốc sử dụng đất",
                    "Các hạn chế về quyền sử dụng đất nếu có",
                    "Thông tin đăng ký biến động",
                  ]} />
                  <InfoBox type="warn">
                    Tên người giao dịch phải phù hợp với người có quyền sử dụng đất, hoặc
                    người giao dịch phải có căn cứ pháp lý hợp lệ để đại diện. Một nền đất có
                    Giấy chứng nhận không đồng nghĩa với việc có thể bỏ qua tất cả các bước
                    kiểm tra khác.
                  </InfoBox>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="so-thua">2. Kiểm tra số thửa và số tờ bản đồ</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Số thửa và số tờ bản đồ là những thông tin rất quan trọng khi tra cứu đất.
                    Hai thông tin này giúp xác định vị trí pháp lý của thửa đất trên hồ sơ địa
                    chính. Khi kiểm tra, người mua nên đối chiếu:
                  </p>
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-5">
                    <p className="text-sm font-bold text-slate-700 mb-3">Quy trình đối chiếu</p>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                      {["Số tờ + Số thửa trên sổ", "→", "Bản đồ địa chính", "→", "Vị trí thực tế"].map((s, i) => (
                        <span key={i} className={s === "→" ? "text-amber-500 font-bold" : "bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-medium"}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <WarnBox>
                    Nếu thông tin trên giấy tờ và vị trí thực tế không khớp, cần làm rõ trước khi
                    tiếp tục giao dịch. Đây cũng là lý do không nên chỉ xem vị trí được đánh dấu
                    trên Google Maps hoặc bản đồ do môi giới cung cấp.
                  </WarnBox>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="muc-dich">3. Kiểm tra mục đích sử dụng đất</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là một trong những bước dễ bị bỏ qua. Không phải đất nào cũng có thể
                    xây nhà ở. Trên Giấy chứng nhận có thể thể hiện nhiều loại mục đích khác
                    nhau như:
                  </p>
                  <BulletList items={[
                    "Đất ở",
                    "Đất trồng cây lâu năm",
                    "Đất trồng cây hàng năm",
                    "Đất thương mại, dịch vụ",
                    "Các loại đất khác theo hồ sơ địa chính",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu người mua có nhu cầu xây nhà để ở, cần đặc biệt chú ý đến mục đích
                    sử dụng đất và khả năng thực hiện các thủ tục liên quan.
                  </p>
                  <WarnBox>
                    Không nên nghe theo những lời quảng cáo như <em>"Đất này sau này chắc chắn lên
                    thổ cư"</em> hay <em>"Đang là đất cây nhưng sắp được chuyển thành đất ở"</em>.
                    Những thông tin như vậy cần được kiểm chứng bằng hồ sơ chính thức từ cơ quan
                    có thẩm quyền.
                  </WarnBox>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="quy-hoach">4. Kiểm tra đất có nằm trong quy hoạch hay không</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là bước cực kỳ quan trọng khi mua đất nền Nhơn Trạch. Nhơn Trạch là
                    khu vực đang phát triển mạnh về đô thị và hạ tầng, vì vậy người mua cần
                    kiểm tra quy hoạch tại <strong>đúng vị trí thửa đất</strong>, thay vì chỉ
                    xem quy hoạch tổng thể của cả khu vực.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đồng Nai đang công khai dữ liệu quy hoạch – kế hoạch sử dụng đất. Cổng dữ
                    liệu mở của tỉnh hiện có mục bản đồ quy hoạch sử dụng đất đến năm 2030 của
                    Nhơn Trạch. Trong năm 2026, các cơ quan địa phương tiếp tục công khai hồ sơ
                    điều chỉnh quy hoạch chung đô thị mới Nhơn Trạch giai đoạn 2035 và tầm nhìn
                    đến năm 2050.
                  </p>
                  <H3>Người mua cần xác định cụ thể</H3>
                  <BulletList items={[
                    "Thửa đất có nằm trong khu vực quy hoạch nào?",
                    "Mục đích sử dụng đất hiện tại là gì?",
                    "Quy hoạch tương lai có thay đổi mục đích sử dụng không?",
                    "Có nằm trong hành lang giao thông không?",
                    "Có nằm trong khu vực dự kiến thực hiện công trình công cộng không?",
                    "Có bị ảnh hưởng bởi đường giao thông quy hoạch không?",
                  ]} />
                  <InfoBox type="warn">
                    Quy hoạch có thể được điều chỉnh theo thời gian. Thông tin tra cứu tại một
                    thời điểm không nên được hiểu là bảo đảm tuyệt đối cho toàn bộ tương lai
                    của thửa đất.
                  </InfoBox>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat">Quy hoạch Nhơn Trạch mới nhất →</LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-hoach-1-500-nhon-trach">Quy hoạch 1/500 Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Image 1 */}
              <ArticleFigure
                src={IMG_NEWS26["2"]}
                alt="Cách kiểm tra quy hoạch đất nền tại Nhơn Trạch trước khi mua"
                caption="Người mua nên đối chiếu số tờ, số thửa và vị trí thực tế khi kiểm tra quy hoạch đất"
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="the-chap">5. Kiểm tra tình trạng thế chấp</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một thửa đất có thể đang được sử dụng làm tài sản bảo đảm cho khoản vay.
                    Vì vậy, ngoài việc xem Giấy chứng nhận, người mua nên kiểm tra tình trạng
                    đăng ký biện pháp bảo đảm trước khi giao dịch.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu tài sản đang thế chấp, cần xác định rõ:
                  </p>
                  <BulletList items={[
                    "Khoản vay đã được tất toán chưa?",
                    "Ngân hàng đang giữ giấy tờ gì?",
                    "Quy trình giải chấp như thế nào?",
                    "Thời điểm nào có thể thực hiện giao dịch?",
                    "Ai chịu trách nhiệm hoàn tất thủ tục giải chấp?",
                  ]} />
                  <WarnBox>
                    Không nên chuyển một khoản tiền lớn chỉ dựa trên lời hứa:{" "}
                    <em>"Đặt cọc trước rồi anh/chị sẽ đi giải chấp."</em>
                  </WarnBox>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="tranh-chap">6. Kiểm tra tranh chấp và kê biên</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đất đang có tranh chấp hoặc bị áp dụng biện pháp kê biên có thể ảnh hưởng
                    nghiêm trọng đến khả năng giao dịch. Người mua nên tìm hiểu:
                  </p>
                  <BulletList items={[
                    "Có tranh chấp quyền sử dụng đất không?",
                    "Có tranh chấp ranh giới không?",
                    "Có tranh chấp thừa kế không?",
                    "Có tranh chấp với hàng xóm không?",
                    "Có bị kê biên để thi hành án không?",
                  ]} />
                  <WarnBox>
                    Không nên nghĩ rằng <em>"Tranh chấp nhỏ thôi, mua rồi giải quyết sau."</em>{" "}
                    Với bất động sản, một vấn đề pháp lý chưa được giải quyết có thể kéo dài và
                    ảnh hưởng trực tiếp đến quyền sử dụng đất.
                  </WarnBox>
                </div>
              </section>

              {/* Section 7 */}
              <section className="mb-12">
                <SectionHeading id="ranh-gioi">7. Kiểm tra ranh giới và diện tích thực tế</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Diện tích trên Giấy chứng nhận cần được đối chiếu với hiện trạng thực tế.
                    Người mua nên kiểm tra:
                  </p>
                  <BulletList items={[
                    "Chiều ngang, chiều dài và các cạnh thửa đất",
                    "Mốc ranh giới",
                    "Đường tiếp giáp",
                    "Công trình hoặc tài sản trên đất",
                    "Phần đất đang sử dụng thực tế",
                  ]} />
                  <InfoBox>
                    Đặc biệt với những nền đất nằm trong khu dân cư lâu năm hoặc khu vực có
                    nhiều thửa liền kề, việc xác định ranh giới thực tế càng quan trọng. Nếu
                    cần thiết, có thể thực hiện đo đạc để xác định chính xác.
                  </InfoBox>
                </div>
              </section>

              {/* Section 8 */}
              <section className="mb-12">
                <SectionHeading id="duong-vao">8. Kiểm tra đường vào đất có hợp pháp hay không</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một nền đất có giá rẻ nhưng đường vào không rõ ràng có thể tạo ra vấn đề
                    lớn về sau. Người mua cần xác định:
                  </p>
                  <BulletList items={[
                    "Đường vào có nằm trong quyền sử dụng của thửa đất hay không?",
                    "Có quyền sử dụng lối đi qua đất của người khác hay không?",
                    "Chiều rộng đường thực tế",
                    "Khả năng tiếp cận ô tô nếu có nhu cầu",
                    "Tình trạng sử dụng thực tế so với bản đồ",
                  ]} />
                  <WarnBox>
                    Đừng chỉ nhìn thấy một con đường trên thực địa rồi mặc định đó là đường
                    giao thông công cộng.
                  </WarnBox>
                </div>
              </section>

              {/* Section 9 */}
              <section className="mb-12">
                <SectionHeading id="du-an">9. Kiểm tra đất trong dự án có đủ điều kiện giao dịch hay không</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu mua đất nền thuộc một dự án khu đô thị hoặc khu dân cư, việc kiểm tra
                    pháp lý sẽ khác với mua một thửa đất riêng lẻ. Người mua nên yêu cầu thông
                    tin liên quan đến:
                  </p>
                  <BulletList items={[
                    "Quy hoạch dự án và quyết định/chấp thuận đầu tư",
                    "Quy hoạch chi tiết và hồ sơ đất đai",
                    "Hạ tầng kỹ thuật",
                    "Điều kiện chuyển nhượng theo từng sản phẩm",
                    "Hồ sơ pháp lý của nền đất cụ thể",
                    "Hợp đồng và chủ thể ký kết",
                  ]} />
                  <InfoBox type="warn">
                    <strong>Lưu ý:</strong> Không nên chỉ nghe câu{" "}
                    <em>"Dự án đã có quy hoạch 1/500."</em> Quy hoạch 1/500 chỉ là một phần
                    trong hệ thống hồ sơ cần kiểm tra. Người mua vẫn cần xem xét tình trạng
                    pháp lý của chính sản phẩm mình định mua và điều kiện giao dịch tại thời
                    điểm thực hiện.
                  </InfoBox>
                </div>
              </section>

              {/* Image 2 */}
              <ArticleFigure
                src={IMG_NEWS26["3"]}
                alt="Các hồ sơ cần kiểm tra khi mua đất nền tại Nhơn Trạch"
                caption="Một số nhóm hồ sơ người mua nên kiểm tra trước khi quyết định giao dịch đất nền"
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 10 */}
              <section className="mb-12">
                <SectionHeading id="nguoi-ban">10. Kiểm tra thông tin người bán</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một bước đơn giản nhưng rất quan trọng: <strong>Ai đang bán đất cho bạn?</strong>
                  </p>
                  <BulletList items={[
                    "Nếu người đứng tên trực tiếp bán: đối chiếu thông tin với giấy tờ tùy thân",
                    "Nếu người khác đại diện: kiểm tra căn cứ đại diện và phạm vi quyền giao dịch",
                  ]} />
                  <WarnBox>
                    Không nên chuyển tiền cho một người chỉ vì họ tự giới thiệu là chủ đất,
                    người được ủy quyền, nhân viên môi giới hay đại diện chủ đầu tư. Hãy kiểm
                    tra tư cách của người ký kết và người nhận tiền.
                  </WarnBox>
                </div>
              </section>

              {/* Section 11 */}
              <section className="mb-12">
                <SectionHeading id="hop-dong">11. Kiểm tra hợp đồng và tiền đặt cọc</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hợp đồng hoặc thỏa thuận đặt cọc nên thể hiện rõ:
                  </p>
                  <BulletList items={[
                    "Thông tin các bên và thông tin thửa đất",
                    "Giá chuyển nhượng và số tiền đặt cọc",
                    "Thời hạn thực hiện giao dịch",
                    "Phương thức thanh toán",
                    "Điều kiện ký hợp đồng chuyển nhượng",
                    "Trách nhiệm của mỗi bên",
                    "Xử lý tiền cọc nếu giao dịch không thực hiện được",
                    "Các khoản thuế, phí và chi phí liên quan",
                  ]} />
                  <InfoBox>
                    Không nên ký giấy đặt cọc quá sơ sài. Nếu giao dịch có giá trị lớn hoặc
                    hồ sơ phức tạp, nên nhờ luật sư hoặc người có chuyên môn pháp lý kiểm tra
                    trước khi ký.
                  </InfoBox>
                </div>
              </section>

              {/* Section 12 – Checklist */}
              <section className="mb-12">
                <SectionHeading id="checklist">12. Checklist kiểm tra pháp lý đất nền Nhơn Trạch</SectionHeading>
                <div className="pt-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85] mb-6">
                    Trước khi xuống tiền, bạn có thể sử dụng checklist sau:
                  </p>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-amber-500 px-6 py-4">
                      <p className="text-white font-black text-sm uppercase tracking-wider">Checklist pháp lý trước khi mua đất Nhơn Trạch</p>
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
                </div>
              </section>

              {/* Image 3 */}
              <ArticleFigure
                src={IMG_NEWS26["4"]}
                alt="Checklist kiểm tra pháp lý đất nền Nhơn Trạch trước khi mua"
                caption="Checklist các bước cơ bản cần kiểm tra trước khi mua đất nền tại Nhơn Trạch"
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 13 */}
              <section className="mb-12">
                <SectionHeading id="tu-kiem-tra">13. Có nên tự kiểm tra pháp lý đất nền không?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Người mua hoàn toàn có thể tự kiểm tra những thông tin cơ bản như số thửa,
                    số tờ, diện tích, mục đích sử dụng, vị trí và quy hoạch công khai. Tuy nhiên,
                    với giao dịch có giá trị lớn, hồ sơ phức tạp hoặc có dấu hiệu bất thường,
                    việc nhờ chuyên gia pháp lý kiểm tra là lựa chọn an toàn hơn.
                  </p>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden">
                    <div className="grid grid-cols-2 divide-x divide-slate-200">
                      <div className="p-5">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Xem sổ</p>
                        <p className="text-sm text-slate-600 leading-relaxed">Chỉ là một bước trong quá trình kiểm tra pháp lý.</p>
                      </div>
                      <div className="p-5 bg-amber-50">
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-3">Kiểm tra pháp lý</p>
                        <p className="text-sm text-slate-700 leading-relaxed">Xem xét tổng thể nhiều yếu tố: quyền sử dụng đất, quy hoạch, thế chấp, tranh chấp, điều kiện giao dịch...</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hai việc này hoàn toàn không giống nhau.
                  </p>
                </div>
              </section>

              {/* Section 14 */}
              <section className="mb-12">
                <SectionHeading id="10-cau-hoi">14. Những câu hỏi nên hỏi người bán trước khi đặt cọc</SectionHeading>
                <div className="pt-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85] mb-6">
                    Nếu người bán không thể cung cấp thông tin rõ ràng hoặc liên tục né tránh
                    câu hỏi về pháp lý, người mua nên thận trọng.
                  </p>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="divide-y divide-slate-100">
                      {questions10.map((q, i) => (
                        <div key={q} className="flex items-start gap-4 px-6 py-4 hover:bg-slate-50 transition-colors">
                          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <p className="text-sm text-slate-700 leading-relaxed pt-0.5">{q}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 15 */}
              <section className="mb-12">
                <SectionHeading id="dau-hieu">15. Những dấu hiệu nên cẩn trọng khi mua đất Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-4">
                  {cautionSigns.map((s) => (
                    <div key={s.title} className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                      <p className="font-bold text-amber-800 text-sm mb-1">{s.title}</p>
                      <p className="text-amber-700 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 16 */}
              <section className="mb-12">
                <SectionHeading id="tra-cuu">16. Tra cứu thông tin quy hoạch Nhơn Trạch ở đâu?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Người mua nên ưu tiên các nguồn thông tin chính thức của cơ quan nhà nước.
                    Cổng dữ liệu mở của tỉnh Đồng Nai hiện cung cấp dữ liệu về quy hoạch và
                    kế hoạch sử dụng đất, trong đó có dữ liệu quy hoạch sử dụng đất đến năm
                    2030 của Nhơn Trạch.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Người mua nên ưu tiên thông tin từ:
                  </p>
                  <BulletList items={[
                    "Cổng thông tin điện tử tỉnh Đồng Nai",
                    "Cổng thông tin của cơ quan địa phương",
                    "Cơ quan quản lý đất đai",
                    "Văn phòng đăng ký đất đai",
                    "Các hồ sơ pháp lý chính thức của dự án",
                  ]} />
                  <WarnBox>
                    Không nên sử dụng một bài đăng Facebook hoặc lời tư vấn môi giới làm nguồn
                    duy nhất để kết luận pháp lý.
                  </WarnBox>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/quy-hoach-nhon-trach-moi-nhat">Quy hoạch Nhơn Trạch mới nhất →</LinkBtn>
                    <LinkBtn href="/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat">Hạ tầng Nhơn Trạch 2026 →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 17 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">17. Nếu mua đất nền Mega City 2 thì cần kiểm tra gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu người mua đang quan tâm Mega City 2, nguyên tắc kiểm tra pháp lý vẫn
                    tương tự. Không nên chỉ hỏi <em>"Dự án có pháp lý không?"</em> mà nên
                    chuyển thành:{" "}
                    <strong>"Sản phẩm cụ thể tôi định mua có hồ sơ và điều kiện giao dịch như thế nào?"</strong>
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/mat-bang">Mặt bằng Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí Mega City 2 →</LinkBtn>
                  </div>
                  <InfoBox>
                    Các thông tin trên website chỉ nên được xem là nguồn tham khảo. Trước khi
                    giao dịch, cần kiểm tra hồ sơ của sản phẩm cụ thể tại thời điểm mua.
                  </InfoBox>
                </div>
              </section>

              {/* FAQ */}
              <div id="faq" className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm scroll-mt-24 mb-14">
                <div className="bg-slate-900 px-7 py-6">
                  <h2 className="text-white font-black text-xl tracking-tight">
                    FAQ – Cách kiểm tra pháp lý đất nền Nhơn Trạch
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
                  Kiểm tra pháp lý là một trong những bước quan trọng nhất trước khi mua đất
                  nền Nhơn Trạch. Một nền đất có vị trí đẹp, giá hấp dẫn hoặc nằm gần các
                  tuyến hạ tầng lớn vẫn cần được kiểm tra kỹ theo trình tự:
                </p>
                <div className="flex flex-wrap items-center gap-2 text-sm mb-5">
                  {["Sổ đỏ", "→", "Chủ sử dụng", "→", "Mục đích", "→", "Quy hoạch", "→", "Thế chấp", "→", "Tranh chấp", "→", "Ranh giới", "→", "Điều kiện giao dịch"].map((s, i) => (
                    <span key={i} className={s === "→" ? "text-amber-500 font-bold text-base" : "bg-white border border-slate-200 px-2.5 py-1 rounded-lg font-medium text-slate-700"}>
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-slate-700 text-[16px] leading-[1.85]">
                  Nếu đang chuẩn bị mua đất, hãy dành thời gian kiểm tra pháp lý trước khi
                  đặt cọc, không phải sau khi đã chuyển tiền.
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                  <LinkBtn href="/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach">Kinh nghiệm mua đất Nhơn Trạch →</LinkBtn>
                  <LinkBtn href="/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi">10 điều cần lưu ý →</LinkBtn>
                </div>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28 space-y-6">

                {/* Checklist quick */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-amber-500 px-6 py-4">
                    <p className="text-white font-black text-sm uppercase tracking-wider">Checklist pháp lý</p>
                  </div>
                  <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                    {["Giấy chứng nhận","Chủ sử dụng đất","Số tờ, số thửa","Mục đích sử dụng","Quy hoạch","Thế chấp","Tranh chấp","Ranh giới","Đường vào","Hợp đồng"].map((item) => (
                      <div key={item} className="flex items-center gap-3 px-5 py-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                        <p className="text-sm font-semibold text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-5 pb-4 pt-2">
                    <p className="text-xs text-slate-400 italic">* Kiểm tra đầy đủ trước khi đặt cọc</p>
                  </div>
                </div>

                {/* Links dự án */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-wider">Thông tin dự án</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      { label: "Tổng quan Mega City 2", href: "/mega-city-2" },
                      { label: "Pháp lý dự án",         href: "/mega-city-2/phap-ly" },
                      { label: "Vị trí & kết nối",      href: "/mega-city-2/vi-tri" },
                      { label: "Mặt bằng",              href: "/mega-city-2/mat-bang" },
                      { label: "Bảng giá",              href: "/mega-city-2/bang-gia" },
                      { label: "FAQ",                   href: "/mega-city-2/faq" },
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
          title="Tư vấn pháp lý Mega City 2 miễn phí"
          subtitle="Liên hệ để được hỗ trợ kiểm tra hồ sơ, tư vấn pháp lý và chọn sản phẩm phù hợp tại Mega City 2 Nhơn Trạch."
          variant="default"
        />

        {/* Related */}
        <RelatedContent
          items={[
            { href: "/tin-tuc/kinh-nghiem-mua-dat-nen-nhon-trach", title: "Kinh nghiệm mua đất nền Nhơn Trạch từ A–Z", description: "Những điều cần biết trước khi mua đất nền tại Nhơn Trạch.", tag: "Kinh nghiệm" },
            { href: "/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi", title: "Mua đất Nhơn Trạch cần lưu ý gì?", description: "10 điều quan trọng người mua đất Nhơn Trạch cần kiểm tra.", tag: "Lưu ý" },
            { href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat", title: "Quy hoạch Nhơn Trạch mới nhất 2026", description: "Phân tích bản đồ quy hoạch và định hướng phát triển đô thị.", tag: "Quy hoạch" },
            { href: "/mega-city-2/phap-ly", title: "Pháp lý Mega City 2", description: "Tình trạng pháp lý và điều kiện giao dịch tại Mega City 2.", tag: "Pháp lý" },
            { href: "/tin-tuc/quy-trinh-mua-dat-nen-nhon-trach", title: "Quy trình mua đất nền Nhơn Trạch 8 bước", description: "Hướng dẫn quy trình từ kiểm tra pháp lý đến sang tên.", tag: "Quy trình" },
            { href: "/mega-city-2", title: "Tổng quan Mega City 2 Nhơn Trạch", description: "Thông tin tổng hợp về dự án: quy mô, sản phẩm và pháp lý.", tag: "Tổng quan" },
          ]}
        />
      </div>

      <CorpFooter />
    </>
  );
}
