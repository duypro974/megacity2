"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS61 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/vanh-dai-3`;
const PUBLISHED     = "28/09/2026";
const PUBLISHED_ISO = "2026-09-28";

// ─────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vành đai 3 qua Đồng Nai đã thông xe chưa? Cập nhật cuối tháng 9/2026",
  description: "Cập nhật tiến độ Vành đai 3 qua Đồng Nai cuối tháng 9/2026: đoạn nào đã khai thác tạm, hạng mục nào đang hoàn thiện và tác động đến kết nối Nhơn Trạch – TP.HCM – Long Thành.",
  image: [IMG_NEWS61["1"], IMG_NEWS61["2"], IMG_NEWS61["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "vành đai 3 đồng nai, vành đai 3 thông xe, tiến độ vành đai 3, vành đai 3 nhơn trạch, cầu nhơn trạch, hạ tầng giao thông nhơn trạch, mega city 2 nhơn trạch",
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
      name: "Vành đai 3 qua Đồng Nai đã thông xe chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tính đến cuối tháng 9/2026, chưa có cơ sở để khẳng định toàn bộ đoạn Vành đai 3 qua Đồng Nai đã thông xe đồng bộ, chính thức. Đoạn hướng từ cầu Nhơn Trạch về TP.HCM đã được khai thác tạm; các hạng mục còn lại đang tiếp tục hoàn thiện với mục tiêu hoàn thành xây lắp vào cuối tháng 9/2026.",
      },
    },
    {
      "@type": "Question",
      name: "Đoạn Vành đai 3 qua Đồng Nai dài bao nhiêu km?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đoạn tuyến thuộc Dự án thành phần 3 có chiều dài khoảng 11,26 km, khởi công ngày 18/06/2023, với tổng mức đầu tư khoảng 2.584 tỷ đồng. Tuyến bắt đầu từ vị trí kết nối cao tốc Bến Lức – Long Thành và kết thúc tại khu vực mố B cầu Nhơn Trạch.",
      },
    },
    {
      "@type": "Question",
      name: "Vành đai 3 đoạn Đồng Nai ảnh hưởng thế nào đến Nhơn Trạch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khi được khai thác đồng bộ, tuyến bổ sung hướng kết nối từ Nhơn Trạch về TP.HCM qua cầu Nhơn Trạch, tăng liên kết với cao tốc Bến Lức – Long Thành và hỗ trợ kết nối hướng sân bay Long Thành. Tuy nhiên, tác động thực tế còn phụ thuộc vào việc hoàn thiện các nhánh kết nối và tổ chức lưu thông.",
      },
    },
    {
      "@type": "Question",
      name: "Người dân có đi được trên Vành đai 3 đoạn Đồng Nai chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đoạn hướng từ cầu Nhơn Trạch về TP.HCM đã được khai thác tạm. Tuy nhiên, toàn tuyến chưa khai thác đồng bộ. Trước khi di chuyển, người dân cần kiểm tra biển báo, thông báo tổ chức giao thông của cơ quan chức năng và ứng dụng bản đồ có cập nhật tình trạng đường.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Vành đai 3 qua Đồng Nai 2026", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS61["1"], alt: "Toàn cảnh thi công đường Vành đai 3 đoạn qua Đồng Nai tháng 9 năm 2026",         caption: "Vành đai 3 đoạn qua Đồng Nai đang được hoàn thiện các hạng mục đường, nút giao và kết nối liên vùng." },
  { src: IMG_NEWS61["2"], alt: "Nút giao Vành đai 3 với đường ĐT 25B và ĐT 25C tại Đồng Nai",                    caption: "Khu vực nút giao là một trong các hạng mục then chốt để kết nối Vành đai 3 với mạng lưới đường bộ khu vực." },
  { src: IMG_NEWS61["3"], alt: "Cầu Nhơn Trạch thuộc dự án đường Vành đai 3 kết nối Đồng Nai với Thành phố Hồ Chí Minh", caption: "Cầu Nhơn Trạch là một mắt xích quan trọng trong kết nối Đồng Nai – TP.HCM trên hành lang Vành đai 3." },
  { src: IMG_NEWS61["4"], alt: "Sơ đồ vị trí cầu Nhơn Trạch trên tuyến Vành đai 3 khu vực Thành phố Hồ Chí Minh và Đồng Nai", caption: "Sơ đồ minh họa vị trí kết nối của cầu Nhơn Trạch trong mạng lưới Vành đai 3." },
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
function NumberedList({ items }: { items: { title: string; body: React.ReactNode }[] }) {
  return (
    <div className="space-y-6 mb-4">
      {items.map((item, i) => (
        <div key={i} className="flex gap-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white font-black text-sm flex items-center justify-center mt-0.5">{i + 1}</span>
          <div>
            <p className="font-black text-slate-800 mb-1">{item.title}</p>
            <div className="text-slate-600 text-[16px] leading-relaxed">{item.body}</div>
          </div>
        </div>
      ))}
    </div>
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
    <a href={href} className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function VanhDai3Page() {
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
              <span className="text-slate-600 font-medium">Vành đai 3 qua Đồng Nai 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Hạ tầng</span>
              <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                Cập nhật
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">Cập nhật: {PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 7 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Vành đai 3 qua Đồng Nai đã thông xe chưa? Cập nhật cuối tháng 9/2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Cập nhật tiến độ Vành đai 3 qua Đồng Nai cuối tháng 9/2026: đoạn nào đã khai thác tạm,
              hạng mục nào đang hoàn thiện và tác động đến kết nối Nhơn Trạch – TP.HCM – Long Thành.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh Vành đai 3 qua Đồng Nai"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS61["1"]}
                alt="Toàn cảnh thi công đường Vành đai 3 đoạn qua Đồng Nai tháng 9 năm 2026"
                className="w-full h-auto block"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Vành đai 3 đoạn qua Đồng Nai đang được hoàn thiện các hạng mục đường, nút giao và kết nối liên vùng.
            </p>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Article ── */}
            <article className="flex-1 min-w-0">

              {/* Update notice */}
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 mb-8">
                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                <div>
                  <p className="text-sm font-bold text-amber-800">Bài viết được cập nhật ngày 28/09/2026</p>
                  <p className="text-xs text-amber-700 mt-0.5 leading-relaxed">
                    Nội dung được làm mới theo thông tin công khai mới nhất về tiến độ Dự án thành phần 3
                    Vành đai 3 qua Đồng Nai. Các số liệu và trạng thái thi công phản ánh tình hình cuối
                    tháng 9/2026.
                  </p>
                </div>
              </div>

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#tra-loi-nhanh",  "1. Trả lời nhanh: Đã thông xe toàn tuyến chưa?"],
                    ["#quy-mo",         "2. Quy mô đoạn Vành đai 3 qua Đồng Nai"],
                    ["#tien-do",        "3. Tiến độ cuối tháng 9/2026"],
                    ["#nhon-trach",     "4. Điều gì thay đổi với Nhơn Trạch?"],
                    ["#luu-y",          "5. Người dân cần lưu ý gì khi đi tuyến này?"],
                    ["#mega-city-2",    "6. Vành đai 3 và việc di chuyển đến Mega City 2"],
                    ["#faq",            "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Sapo / Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Vành đai 3 đoạn qua Đồng Nai đang ở giai đoạn hoàn thiện cuối cùng. Tính theo thông
                tin công khai được cập nhật gần nhất, chưa nên hiểu là toàn bộ đoạn tuyến đã chính
                thức khai thác đồng bộ. Tuy nhiên, một phần tuyến theo hướng từ cầu Nhơn Trạch về
                TP.HCM đã được đưa vào khai thác tạm; các hạng mục còn lại như đường dẫn, nút giao,
                cầu vượt, biển báo, sơn kẻ đường và kết nối với cao tốc Bến Lức – Long Thành vẫn
                đang được đẩy nhanh để hoàn thành xây lắp vào cuối tháng 9/2026.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Với người dân Nhơn Trạch, khách di chuyển giữa Đồng Nai – TP.HCM và người quan tâm
                bất động sản khu vực, đây là một mốc hạ tầng quan trọng. Tuyến đường khi hoàn thiện
                và tổ chức khai thác đồng bộ sẽ bổ sung hướng kết nối giữa Nhơn Trạch, TP.HCM,
                Long Thành và cao tốc Bến Lức – Long Thành.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> &ldquo;Hoàn thành xây lắp&rdquo;, &ldquo;khai thác tạm&rdquo; và
                &ldquo;chính thức tổ chức lưu thông toàn tuyến&rdquo; là ba trạng thái khác nhau. Người
                đi đường cần theo dõi biển báo, thông báo tổ chức giao thông và hướng dẫn của cơ
                quan chức năng tại thời điểm di chuyển.
              </InfoBox>

              {/* Section 1 — Trả lời nhanh */}
              <section className="mb-12">
                <SectionHeading id="tra-loi-nhanh">Trả lời nhanh: Đã thông xe toàn tuyến chưa?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Câu trả lời ngắn là: chưa có cơ sở để khẳng định toàn bộ đoạn Vành đai 3 qua
                    Đồng Nai đã thông xe đồng bộ, chính thức tại thời điểm cuối tháng 9/2026.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo thông tin ngày 19/09/2026, Dự án thành phần 3 của Vành đai 3 qua Đồng Nai
                    đang trong giai đoạn nước rút. Đoạn đường hướng từ cầu Nhơn Trạch về TP.HCM
                    đã được khai thác tạm, trong khi nhiều hạng mục trên tuyến vẫn tiếp tục được
                    thi công, hoàn thiện và tổ chức kết nối.
                  </p>
                  <InfoBox type="warn">
                    Nếu cần di chuyển thực tế, người dùng không nên mặc định có thể đi xuyên suốt
                    toàn bộ tuyến. Hãy kiểm tra chỉ dẫn giao thông thực địa, ứng dụng bản đồ có
                    cập nhật tình trạng đường và thông báo của cơ quan quản lý trước khi xuất phát.
                  </InfoBox>
                </div>
              </section>

              {/* Section 2 — Quy mô */}
              <section className="mb-12">
                <SectionHeading id="quy-mo">Quy mô đoạn Vành đai 3 qua Đồng Nai</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đoạn tuyến thuộc Dự án thành phần 3 có chiều dài khoảng 11,26 km, khởi công
                    ngày 18/06/2023, với tổng mức đầu tư khoảng 2.584 tỷ đồng. Tuyến bắt đầu từ
                    vị trí kết nối{" "}
                    <a href="/tin-tuc/cao-toc-ben-luc-long-thanh" className="text-primary-700 font-semibold hover:underline">cao tốc Bến Lức – Long Thành</a>{" "}
                    và kết thúc tại khu vực mố B{" "}
                    <a href="/tin-tuc/cau-nhon-trach" className="text-primary-700 font-semibold hover:underline">cầu Nhơn Trạch</a>.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là một mắt xích quan trọng vì không chỉ tạo thêm trục lưu thông cho khu
                    vực Nhơn Trạch mà còn liên kết với các hạ tầng giao thông liên vùng đang được
                    đầu tư mạnh trong khu vực phía Nam.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      ["Chiều dài",       "~11,26 km"],
                      ["Khởi công",       "18/06/2023"],
                      ["Tổng mức đầu tư", "~2.584 tỷ đồng"],
                      ["Dự án",           "Thành phần 3"],
                    ].map(([label, val]) => (
                      <div key={label} className="rounded-2xl bg-primary-50 border border-primary-100 p-4 text-center">
                        <p className="text-sm font-black text-primary-700 mb-1">{val}</p>
                        <p className="text-[11px] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>

                  <H3>Các vị trí đáng chú ý trên đoạn tuyến</H3>
                  <BulletList items={[
                    "Khu vực kết nối với cao tốc Bến Lức – Long Thành tại xã Phước An.",
                    "Nút giao với đường ĐT.25B.",
                    "Khu vực cầu vượt ĐT.25C.",
                    "Đoạn kết nối cầu Nhơn Trạch theo hướng về TP.HCM.",
                    "Hệ thống đường song hành, đường dẫn, hạng mục chiếu sáng, biển báo và tổ chức giao thông đi kèm.",
                  ]} />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS61["4"]}
                alt="Sơ đồ vị trí cầu Nhơn Trạch trên tuyến Vành đai 3 khu vực Thành phố Hồ Chí Minh và Đồng Nai"
                caption="Sơ đồ minh họa vị trí kết nối của cầu Nhơn Trạch trong mạng lưới Vành đai 3."
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 3 — Tiến độ */}
              <section className="mb-12">
                <SectionHeading id="tien-do">Tiến độ cuối tháng 9/2026</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo cập nhật giữa tháng 9/2026, khối lượng thực hiện các gói thầu xây lắp của
                    dự án đạt khoảng 80% giá trị hợp đồng tính đến cuối tháng 8/2026. Trên đoạn
                    tuyến chính từ đầu dự án đến nút giao ĐT.25B, nhiều hạng mục đã cơ bản hoàn
                    thành; hệ thống chiếu sáng, biển báo giao thông và sơn kẻ vạch đang được triển
                    khai.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tại cầu vượt ĐT.25C và các vị trí đường dẫn, đơn vị thi công tiếp tục xử lý
                    những phần việc còn lại. Riêng khu vực giao với cao tốc Bến Lức – Long Thành,
                    công tác hoàn thiện đường dẫn và nhánh kết nối có ý nghĩa quan trọng để hình
                    thành khả năng lưu thông đồng bộ giữa các tuyến.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Thành phố Đồng Nai đã yêu cầu các đơn vị thi công tăng cường nhân lực, thiết
                    bị và triển khai theo phương án 3 ca, 4 kíp nhằm hướng đến mục tiêu hoàn thành
                    xây lắp vào cuối tháng 9/2026.
                  </p>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS61["2"]}
                alt="Nút giao Vành đai 3 với đường ĐT 25B và ĐT 25C tại Đồng Nai"
                caption="Khu vực nút giao là một trong các hạng mục then chốt để kết nối Vành đai 3 với mạng lưới đường bộ khu vực."
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 4 — Điều gì thay đổi với Nhơn Trạch */}
              <section className="mb-12">
                <SectionHeading id="nhon-trach">Điều gì thay đổi với Nhơn Trạch?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi Vành đai 3 và các tuyến kết nối được khai thác đồng bộ, khu vực{" "}
                    <a href="/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat" className="text-primary-700 font-semibold hover:underline">Nhơn Trạch</a>{" "}
                    có thêm một hướng đi liên vùng thay vì phụ thuộc nhiều vào các trục đường hiện hữu.
                  </p>

                  <NumberedList items={[
                    {
                      title: "Thêm phương án kết nối với TP.HCM",
                      body: (
                        <>
                          <p className="mb-3">
                            <a href="/tin-tuc/cau-nhon-trach" className="text-primary-700 font-semibold hover:underline">Cầu Nhơn Trạch</a> và Vành đai 3 tạo thêm hành lang kết nối từ Đồng Nai về TP.HCM.
                            Việc đoạn hướng về TP.HCM đã được khai thác tạm là tín hiệu cho thấy chức năng
                            liên kết của công trình đang từng bước hình thành.
                          </p>
                          <p>
                            Tuy nhiên, trải nghiệm di chuyển thực tế còn phụ thuộc vào tình trạng hoàn thiện
                            các nhánh kết nối, tổ chức luồng tuyến, mật độ phương tiện và việc khai thác đồng
                            bộ với các hạ tầng liên quan.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: "Tăng liên kết với cao tốc Bến Lức – Long Thành",
                      body: (
                        <>
                          <p className="mb-3">
                            Điểm đầu đoạn Vành đai 3 qua Đồng Nai kết nối{" "}
                            <a href="/tin-tuc/cao-toc-ben-luc-long-thanh" className="text-primary-700 font-semibold hover:underline">cao tốc Bến Lức – Long Thành</a>.
                            Cùng thời điểm cuối tháng 9, cầu Phước Khánh trên cao tốc Bến Lức – Long Thành
                            đang được thử tải, cho thấy các công việc để hoàn thiện mạng lưới kết nối liên vùng
                            vẫn tiếp tục được triển khai.
                          </p>
                          <p>
                            Khi các đoạn và nút giao được hoàn thiện đúng kế hoạch, người dân và doanh nghiệp
                            sẽ có thêm lựa chọn lưu thông giữa khu vực phía Tây Nam TP.HCM, Nhơn Trạch và Long Thành.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: "Hỗ trợ kết nối về hướng sân bay Long Thành",
                      body: (
                        <p>
                          Vành đai 3 được đặt trong tổng thể các dự án giao thông phục vụ kết nối đến sân bay
                          Long Thành. Tuyến không phải là đường đi thẳng duy nhất đến sân bay, nhưng đóng vai
                          trò bổ sung năng lực kết nối giữa Nhơn Trạch, cao tốc Bến Lức – Long Thành và các
                          trục hướng về Long Thành. Người mua nhà hoặc đầu tư bất động sản cần nhìn đây là
                          yếu tố cải thiện khả năng kết nối dài hạn, không nên diễn giải thành cam kết chắc
                          chắn về thời gian di chuyển hoặc mức tăng giá của bất kỳ dự án nào.
                        </p>
                      ),
                    },
                  ]} />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS61["3"]}
                alt="Cầu Nhơn Trạch thuộc dự án đường Vành đai 3 kết nối Đồng Nai với Thành phố Hồ Chí Minh"
                caption="Cầu Nhơn Trạch là một mắt xích quan trọng trong kết nối Đồng Nai – TP.HCM trên hành lang Vành đai 3."
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 5 — Lưu ý */}
              <section className="mb-12">
                <SectionHeading id="luu-y">Người dân cần lưu ý gì khi đi tuyến này?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trước khi di chuyển, nên lưu ý các điểm sau:
                  </p>
                  <BulletList items={[
                    "Không mặc định toàn bộ đoạn tuyến đã mở cho mọi loại phương tiện.",
                    "Kiểm tra thông báo tổ chức giao thông mới nhất từ cơ quan chức năng.",
                    "Quan sát biển báo, chỉ dẫn phân luồng và rào chắn tại công trường.",
                    "Dự phòng thời gian di chuyển vì khu vực vẫn có thể thi công, hoàn thiện hoặc điều chỉnh tổ chức giao thông.",
                    "Không sử dụng thông tin tiến độ hạ tầng như căn cứ duy nhất để quyết định mua bán bất động sản.",
                  ]} />
                </div>
              </section>

              {/* Section 6 — Mega City 2 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Vành đai 3 và việc di chuyển đến Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với khách hàng quan tâm khu vực Nhơn Trạch và{" "}
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2</a>,
                    Vành đai 3 là một phần trong bức tranh hạ tầng rộng hơn, cùng với{" "}
                    <a href="/tin-tuc/duong-25c" className="text-primary-700 font-semibold hover:underline">đường 25C</a>,{" "}
                    <a href="/tin-tuc/cau-nhon-trach" className="text-primary-700 font-semibold hover:underline">cầu Nhơn Trạch</a> và{" "}
                    <a href="/tin-tuc/cao-toc-ben-luc-long-thanh" className="text-primary-700 font-semibold hover:underline">cao tốc Bến Lức – Long Thành</a>.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Điều cần quan tâm không chỉ là tuyến đường đã hoàn thành bao nhiêu phần trăm,
                    mà là:
                  </p>
                  <BulletList items={[
                    "Tuyến nào đã cho phép lưu thông thực tế.",
                    "Nút giao nào đã hoàn thiện và khai thác ổn định.",
                    "Lộ trình nào phù hợp với điểm xuất phát cụ thể tại TP.HCM.",
                    "Thời gian di chuyển thực tế theo từng khung giờ.",
                    "Tình trạng tổ chức giao thông tại thời điểm đi khảo sát dự án.",
                  ]} />
                  <InfoBox>
                    Bạn có thể xem thêm bài hướng dẫn{" "}
                    <a href="/tin-tuc/duong-di-tu-tphcm-den-mega-city-2" className="font-bold text-primary-700 underline">
                      Đường đi Mega City 2 từ TP.HCM: khoảng cách và lộ trình
                    </a>{" "}
                    và{" "}
                    <a href="/tin-tuc/vi-tri-mega-city-2-o-dau" className="font-bold text-primary-700 underline">
                      Mega City 2 ở đâu? Cách TP.HCM bao xa và đi bằng đường nào?
                    </a>{" "}
                    để lựa chọn hướng di chuyển phù hợp.
                  </InfoBox>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/duong-di-tu-tphcm-den-mega-city-2">Đường đi từ TP.HCM →</LinkBtn>
                    <LinkBtn href="/tin-tuc/vi-tri-mega-city-2-o-dau">Vị trí Mega City 2 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat">Hạ tầng Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Kết luận */}
              <section className="mb-12">
                <SectionHeading>Kết luận</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cuối tháng 9/2026, Vành đai 3 đoạn qua Đồng Nai đã bước vào giai đoạn hoàn
                    thiện quan trọng, trong đó có đoạn hướng từ cầu Nhơn Trạch về TP.HCM được khai
                    thác tạm. Tuy nhiên, toàn bộ dự án vẫn đang tiếp tục hoàn thiện các hạng mục
                    và kết nối để hướng đến mục tiêu hoàn thành xây lắp vào cuối tháng.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Do đó, thông điệp chính xác nhất là: tuyến đang rất gần mốc hoàn thiện, nhưng
                    người dân cần kiểm tra thông báo tổ chức giao thông thực tế trước khi coi đây
                    là một hành lang đã thông xe đồng bộ toàn tuyến.
                  </p>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
                    <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Nguồn thông tin</p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Thông tin trong bài được tổng hợp từ nguồn báo chí và cơ quan địa phương công
                      khai tại thời điểm cập nhật. Tiến độ, phương án phân luồng và thời điểm khai
                      thác có thể thay đổi theo thông báo của cơ quan có thẩm quyền.
                    </p>
                  </div>
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

              {/* Tìm hiểu thêm */}
              <section className="mb-12">
                <SectionHeading>Tìm hiểu thêm</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/tin-tuc/duong-di-tu-tphcm-den-mega-city-2",    label: "Đường đi từ TP.HCM đến Mega City 2" },
                    { href: "/tin-tuc/vi-tri-mega-city-2-o-dau",              label: "Mega City 2 ở đâu? Cách TP.HCM bao xa?" },
                    { href: "/tin-tuc/cau-nhon-trach",                        label: "Cầu Nhơn Trạch – Cập nhật mới nhất" },
                    { href: "/tin-tuc/cao-toc-ben-luc-long-thanh",            label: "Cao tốc Bến Lức – Long Thành 2026" },
                    { href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat", label: "Hạ tầng giao thông Nhơn Trạch mới nhất" },
                    { href: "/mega-city-2",                                   label: "Tổng quan Mega City 2 Nhơn Trạch" },
                  ].map((l) => (
                    <a key={l.href} href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors px-4 py-3 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50">
                      <span className="text-primary-400 flex-shrink-0">→</span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </section>

            </article>

            {/* ── Sidebar ── */}
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
                      { label: "Cầu Nhơn Trạch – Cập nhật 2026",              href: "/tin-tuc/cau-nhon-trach" },
                      { label: "Cao tốc Bến Lức – Long Thành 2026",           href: "/tin-tuc/cao-toc-ben-luc-long-thanh" },
                      { label: "Hạ tầng giao thông Nhơn Trạch mới nhất",      href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat" },
                      { label: "Đường đi từ TP.HCM đến Mega City 2",          href: "/tin-tuc/duong-di-tu-tphcm-den-mega-city-2" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">→ {l.label}</a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn miễn phí</p>
                  <p className="text-primary-200 text-xs mb-4">Nhận thông tin pháp lý và bảng giá Mega City 2.</p>
                  <a href="tel:0937587438" className="block text-center bg-white text-primary-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-colors">
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
            <h2 className="text-2xl font-black text-slate-900 mb-3">Bạn muốn tìm hiểu thêm về Mega City 2?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Xem thêm thông tin về vị trí, pháp lý và bảng giá dự án Mega City 2 tại Nhơn Trạch —
              hưởng lợi trực tiếp từ Vành đai 3, cầu Nhơn Trạch và cao tốc Bến Lức – Long Thành.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">
                Xem dự án →
              </a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            {
              href: "/tin-tuc/duong-di-tu-tphcm-den-mega-city-2",
              title: "Đường đi từ TP.HCM đến Mega City 2: khoảng cách và lộ trình",
              description: "Hướng dẫn các lộ trình di chuyển từ TP.HCM đến Mega City 2 Nhơn Trạch theo nhiều tuyến đường.",
              tag: "Hạ tầng",
            },
            {
              href: "/tin-tuc/cau-nhon-trach",
              title: "Cầu Nhơn Trạch – Cập nhật tiến độ và tác động kết nối 2026",
              description: "Thông tin mới nhất về cầu Nhơn Trạch trên tuyến Vành đai 3 kết nối Đồng Nai với TP.HCM.",
              tag: "Hạ tầng",
            },
            {
              href: "/tin-tuc/cao-toc-ben-luc-long-thanh",
              title: "Cao tốc Bến Lức – Long Thành 2026: Tiến độ mới nhất",
              description: "Cập nhật tiến độ cao tốc Bến Lức – Long Thành và kết nối với Vành đai 3 tại Nhơn Trạch.",
              tag: "Hạ tầng",
            },
            {
              href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat",
              title: "Hạ tầng giao thông Nhơn Trạch mới nhất 2026",
              description: "Tổng hợp các dự án hạ tầng giao thông đang triển khai tại Nhơn Trạch năm 2026.",
              tag: "Hạ tầng",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
