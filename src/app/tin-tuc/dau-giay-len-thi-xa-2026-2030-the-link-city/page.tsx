"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS68 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/dau-giay-len-thi-xa-2026-2030-the-link-city`;
const PUBLISHED     = "05/10/2026";
const PUBLISHED_ISO = "2026-10-05";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dầu Giây Lên Thị Xã 2026–2030: Lộ Trình, Tiêu Chí & Tác Động Đến Giá Đất The Link City",
  description: "Phân tích lộ trình Dầu Giây lên thị xã 2026–2030: tiêu chí đô thị loại IV, bài học tăng giá từ Dĩ An & Long Khánh và tác động trực tiếp đến giá trị bất động sản The Link City.",
  image: [IMG_NEWS68["1"], IMG_NEWS68["3"], IMG_NEWS68["4"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "dầu giây lên thị xã, đô thị hóa dầu giây 2026, thị xã dầu giây quy hoạch, the link city dầu giây tăng giá",
  about: {
    "@type": "Place",
    name: "Dầu Giây, Thống Nhất, Đồng Nai",
    address: { "@type": "PostalAddress", addressLocality: "Dầu Giây", addressRegion: "Đồng Nai", addressCountry: "VN" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dầu Giây lên thị xã vào năm nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo lộ trình quy hoạch, Dầu Giây (thuộc huyện Thống Nhất) được định hướng lên đô thị loại IV trong giai đoạn 2025–2030. Mốc cụ thể phụ thuộc vào tiến độ hoàn thành các tiêu chí về dân số, hạ tầng, kinh tế và diện tích theo quy định của Bộ Xây dựng.",
      },
    },
    {
      "@type": "Question",
      name: "Tiêu chí để Dầu Giây lên đô thị loại IV là gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đô thị loại IV cần đáp ứng: dân số tối thiểu 50.000 người (nội thành); tỷ lệ lao động phi nông nghiệp ≥ 65%; mật độ dân số nội thành ≥ 2.000 người/km²; hạ tầng kỹ thuật đô thị (đường, điện, nước, thoát nước) đạt chuẩn; và tỷ lệ đất xây dựng đô thị đạt yêu cầu.",
      },
    },
    {
      "@type": "Question",
      name: "Khi Dầu Giây lên thị xã, giá đất tăng bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dựa trên bài học từ Dĩ An (Bình Dương) và Long Khánh (Đồng Nai), giá đất khu vực trung tâm tăng 150–300% trong vòng 3–5 năm quanh mốc lên đô thị. Tuy nhiên, tăng giá không đồng đều — đất có vị trí tốt, pháp lý rõ ràng và hạ tầng đồng bộ tăng mạnh hơn đất nằm xa trung tâm hoặc pháp lý chưa hoàn chỉnh.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City có hưởng lợi từ việc Dầu Giây lên thị xã không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. The Link City tọa lạc ngay ngã tư trung tâm Dầu Giây — vị trí sẽ là trung tâm đô thị khi thị xã hình thành. Dự án có đủ 3 yếu tố để hưởng lợi tối đa: vị trí trung tâm, pháp lý sổ hồng sẵn và hạ tầng hoàn thiện 100%. Đây là điều kiện mà phần lớn đất thổ cư tự phát trong khu vực không có.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "The Link City", item: `${BASE_URL}/the-link-city` },
    { "@type": "ListItem", position: 4, name: "Dầu Giây lên thị xã 2026–2030", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS68["1"], alt: "Quy hoạch đô thị bản đồ Dầu Giây huyện Thống Nhất Đồng Nai tương lai",            caption: "Định hướng phát triển không gian đô thị Dầu Giây – Thống Nhất theo quy hoạch 2025–2030." },
  { src: IMG_NEWS68["2"], alt: "Hạ tầng đường sá công trình đang xây dựng tại Dầu Giây Thống Nhất 2026",          caption: "Hạ tầng giao thông Dầu Giây đang được đầu tư mạnh — một trong các tiêu chí đô thị hóa." },
  { src: IMG_NEWS68["3"], alt: "Khu đô thị hiện đại Dĩ An Long Khánh sau khi lên đô thị loại IV Đồng Nai",        caption: "Dĩ An và Long Khánh là bài học thực tế về tăng giá BĐS khi một huyện lên đô thị." },
  { src: IMG_NEWS68["4"], alt: "The Link City Dầu Giây trong bối cảnh đô thị hóa ngã tư QL1A QL20",               caption: "The Link City — đón đầu chu kỳ đô thị hóa tại ngã tư chiến lược Dầu Giây." },
  { src: IMG_NEWS68["5"], alt: "Biểu đồ dữ liệu tăng giá đất bất động sản Dầu Giây Thống Nhất Đồng Nai 2026",    caption: "Dữ liệu thị trường cho thấy xu hướng tăng giá rõ ràng tại khu vực ngã tư Dầu Giây." },
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
  return <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-8">{children}</h3>;
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
function MilestoneCard({ year, title, items, active }: { year: string; title: string; items: string[]; active?: boolean }) {
  return (
    <div className={`rounded-2xl border-2 p-5 ${active ? "border-amber-400 bg-amber-50" : "border-slate-200 bg-white"}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className={`text-xs font-black px-3 py-1 rounded-full ${active ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-600"}`}>{year}</span>
        <p className="font-black text-slate-800 text-sm">{title}</p>
      </div>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-sm text-slate-600 flex items-start gap-2">
            <span className={`flex-shrink-0 mt-0.5 ${active ? "text-amber-500" : "text-slate-300"}`}>→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const s = type === "warn" ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-amber-50 border-amber-200 text-amber-800";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 transition-all">
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export default function DauGiayLenThiXaPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}

      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero ── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span>/</span>
              <a href="/the-link-city" className="hover:text-amber-600 transition-colors">The Link City</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">Dầu Giây lên thị xã</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">The Link City</span>
              <span className="inline-block bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Thị trường</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 8 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Dầu Giây Lên Thị Xã 2026–2030: Lộ Trình, Tiêu Chí & Tác Động Đến Giá Đất The Link City
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Dầu Giây được định hướng lên đô thị loại IV trong giai đoạn 2025–2030. Phân tích
              lộ trình cụ thể, 5 tiêu chí cần đạt, bài học từ Dĩ An và Long Khánh — và tại sao{" "}
              <a href="/the-link-city" className="text-amber-700 font-semibold hover:underline">The Link City</a>{" "}
              đang ở đúng vị trí để hưởng lợi tối đa.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh quy hoạch Dầu Giây"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS68["1"]}
                alt="Quy hoạch đô thị bản đồ Dầu Giây huyện Thống Nhất Đồng Nai tương lai"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Định hướng phát triển không gian đô thị Dầu Giây – Thống Nhất theo quy hoạch 2025–2030.
            </p>
          </div>
        </div>

        {/* ── Main ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#hien-trang",  "1. Hiện trạng đô thị Dầu Giây – Thống Nhất 2026"],
                    ["#tieu-chi",    "2. Tiêu chí đô thị loại IV cần đạt"],
                    ["#lo-trinh",    "3. Lộ trình và mốc thời gian dự kiến"],
                    ["#bai-hoc",     "4. Bài học từ Dĩ An và Long Khánh"],
                    ["#tac-dong",    "5. Tác động đến giá đất khu vực Dầu Giây"],
                    ["#the-link-city","6. The Link City hưởng lợi như thế nào?"],
                    ["#faq",         "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Khi một huyện lên thị xã hoặc thành phố, có 2 thứ thay đổi ngay lập tức: ngân
                sách đầu tư công đổ vào nhiều hơn và giá bất động sản tăng vọt. Đây không phải
                dự báo — đây là điều đã xảy ra tại Dĩ An (Bình Dương) và Long Khánh (Đồng Nai).
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Dầu Giây đang đi đúng lộ trình đó. Bài viết này phân tích cụ thể: Dầu Giây
                đang ở đâu trong lộ trình lên thị xã, cần đạt những tiêu chí gì, và điều đó
                có ý nghĩa gì với người đang cân nhắc mua đất tại đây.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin về lộ trình đô thị hóa dựa trên quy hoạch
                công khai và định hướng của tỉnh Đồng Nai. Mốc thời gian cụ thể phụ thuộc
                quyết định hành chính và tiến độ hoàn thành các tiêu chí. Không nên dùng
                thông tin này như cam kết về thời điểm tăng giá.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="hien-trang">Hiện trạng đô thị Dầu Giây – Thống Nhất 2026</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dầu Giây là thị trấn trung tâm của huyện Thống Nhất, tỉnh Đồng Nai.
                    Hiện tại Dầu Giây đang ở cấp đô thị loại V — cấp thấp nhất trong hệ
                    thống phân cấp đô thị Việt Nam. Mục tiêu là nâng lên đô thị loại IV
                    (tương đương thị xã) trong giai đoạn 2025–2030.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      ["Cấp đô thị hiện tại", "Loại V"],
                      ["Mục tiêu 2030", "Loại IV (Thị xã)"],
                      ["Dân số huyện", "~320.000 người"],
                      ["Diện tích huyện", "~493 km²"],
                    ].map(([label, val]) => (
                      <div key={label} className="rounded-2xl bg-amber-50 border border-amber-100 p-4 text-center">
                        <p className="text-sm font-black text-amber-700 mb-1">{val}</p>
                        <p className="text-[11px] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong giai đoạn 2022–2026, huyện Thống Nhất đã đẩy mạnh đầu tư hạ tầng
                    đô thị: mở rộng đường, nâng cấp hệ thống điện chiếu sáng, cải tạo chợ
                    Dầu Giây và phát triển các khu dân cư mới. Đây đều là những chỉ số tích
                    lũy cho mục tiêu lên đô thị.
                  </p>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS68["2"]}
                alt="Hạ tầng đường sá công trình đang xây dựng tại Dầu Giây Thống Nhất 2026"
                caption="Đầu tư hạ tầng giao thông đang được đẩy mạnh tại Dầu Giây — tiêu chí quan trọng để lên đô thị loại IV."
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="tieu-chi">Tiêu chí đô thị loại IV cần đạt</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo Nghị quyết 1210/2016/UBTVQH13 (sửa đổi, bổ sung) về phân loại đô thị,
                    đô thị loại IV cần đáp ứng đồng thời các tiêu chí sau:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        stt: "01", title: "Dân số đô thị",
                        req: "Tối thiểu 50.000 người (nội thị)",
                        status: "Đang tiến đến — dân số thị trấn Dầu Giây và vùng nội thị đang tăng nhanh theo các KCN phát triển",
                        ok: true,
                      },
                      {
                        stt: "02", title: "Lao động phi nông nghiệp",
                        req: "≥ 65% lao động trong nội thị",
                        status: "Thuận lợi — Dầu Giây có nhiều KCN, lao động công nghiệp – dịch vụ chiếm tỷ trọng ngày càng lớn",
                        ok: true,
                      },
                      {
                        stt: "03", title: "Mật độ dân số",
                        req: "≥ 2.000 người/km² (nội thị)",
                        status: "Cần tiếp tục phát triển các khu đô thị mới — The Link City và các dự án tương tự đóng góp trực tiếp vào tiêu chí này",
                        ok: false,
                      },
                      {
                        stt: "04", title: "Hạ tầng kỹ thuật đô thị",
                        req: "Đường, điện, nước, thoát nước đạt chuẩn đô thị",
                        status: "Đang được đầu tư mạnh — cao tốc, mở rộng QL1A, hệ thống cấp thoát nước đô thị",
                        ok: true,
                      },
                      {
                        stt: "05", title: "Hạ tầng xã hội",
                        req: "Trường học, y tế, văn hóa đạt chuẩn đô thị",
                        status: "Trường học, bệnh viện huyện đã nâng cấp; cần thêm các công trình văn hóa, thể thao cấp đô thị",
                        ok: false,
                      },
                    ].map((c) => (
                      <div key={c.stt} className={`rounded-2xl border-l-4 border p-5 ${c.ok ? "border-l-emerald-400 border-emerald-100 bg-emerald-50/50" : "border-l-amber-400 border-amber-100 bg-amber-50/50"}`}>
                        <div className="flex items-start gap-3">
                          <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${c.ok ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{c.stt}</span>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <p className="font-black text-slate-800 text-sm">{c.title}</p>
                              <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${c.ok ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                                {c.ok ? "Đang đạt" : "Đang tiến đến"}
                              </span>
                            </div>
                            <p className="text-xs font-bold text-slate-500 mb-1">Yêu cầu: {c.req}</p>
                            <p className="text-sm text-slate-600 leading-relaxed">{c.status}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="lo-trinh">Lộ trình và mốc thời gian dự kiến</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dựa trên Nghị quyết Đại hội Đảng bộ tỉnh Đồng Nai và định hướng quy hoạch
                    tỉnh giai đoạn 2021–2030, lộ trình đô thị hóa Dầu Giây có thể chia thành
                    3 giai đoạn:
                  </p>

                  <div className="space-y-4">
                    <MilestoneCard
                      year="2022–2025"
                      title="Hoàn thiện hạ tầng kỹ thuật"
                      items={[
                        "Nâng cấp QL1A đoạn qua Dầu Giây, mở rộng đường đô thị",
                        "Đầu tư KCN Dầu Giây 330ha, thu hút lao động và dân cư",
                        "Phát triển khu dân cư mới: The Link City và các dự án tương tự",
                        "Hoàn thiện hạ tầng điện, nước, thoát nước theo tiêu chuẩn đô thị",
                      ]}
                    />
                    <MilestoneCard
                      year="2025–2027"
                      title="Tích lũy tiêu chí — giai đoạn then chốt"
                      active
                      items={[
                        "Đạt các tiêu chí về dân số nội thị và mật độ dân số",
                        "Hoàn thiện hồ sơ trình cơ quan có thẩm quyền xét công nhận",
                        "Đầu tư các công trình hạ tầng xã hội còn thiếu (văn hóa, thể thao)",
                        "Mở rộng ranh giới nội thị theo quy hoạch chung đô thị",
                      ]}
                    />
                    <MilestoneCard
                      year="2027–2030"
                      title="Công nhận & chuyển đổi hành chính"
                      items={[
                        "Trình Ủy ban Thường vụ Quốc hội công nhận đô thị loại IV",
                        "Thành lập thị xã Dầu Giây hoặc nâng cấp đơn vị hành chính tương đương",
                        "Điều chỉnh cơ chế ngân sách, đầu tư công theo cấp đô thị mới",
                        "Hưởng các chính sách ưu đãi đầu tư dành cho đô thị loại IV",
                      ]}
                    />
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="bai-hoc">Bài học từ Dĩ An và Long Khánh</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Việt Nam có nhiều tiền lệ về tăng giá bất động sản khi một huyện lên đô thị.
                    Hai trường hợp gần và tương đồng nhất với Dầu Giây là <strong>Dĩ An (Bình Dương)</strong>{" "}
                    và <strong>Long Khánh (Đồng Nai)</strong>.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        name: "Dĩ An, Bình Dương",
                        year: "Lên thành phố 2020",
                        before: "8–12 triệu/m²",
                        after: "25–40 triệu/m²",
                        pct: "+200–300%",
                        time: "3–5 năm",
                        note: "KCN dày đặc, gần TP.HCM, hạ tầng cao tốc — điểm tương đồng cao với Dầu Giây",
                        color: "border-emerald-200 bg-emerald-50",
                      },
                      {
                        name: "Long Khánh, Đồng Nai",
                        year: "Lên thành phố 2020",
                        before: "5–8 triệu/m²",
                        after: "15–22 triệu/m²",
                        pct: "+180–250%",
                        time: "3–5 năm",
                        note: "Cùng tỉnh Đồng Nai, cùng trục QL1A — cách Dầu Giây chỉ 15km",
                        color: "border-blue-200 bg-blue-50",
                      },
                    ].map((c) => (
                      <div key={c.name} className={`rounded-2xl border-2 p-5 ${c.color}`}>
                        <p className="font-black text-slate-800 mb-1">{c.name}</p>
                        <p className="text-xs text-slate-500 mb-3">{c.year} · {c.note}</p>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <p className="text-xs text-slate-400 mb-0.5">Trước</p>
                            <p className="text-sm font-black text-slate-700">{c.before}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 mb-0.5">Sau</p>
                            <p className="text-sm font-black text-slate-700">{c.after}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 mb-0.5">Tăng</p>
                            <p className="text-sm font-black text-emerald-700">{c.pct}</p>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2 text-center">Trong {c.time}</p>
                      </div>
                    ))}
                  </div>

                  <InfoBox type="warn">
                    <strong>Lưu ý quan trọng:</strong> Số liệu tăng giá trên là tổng hợp từ
                    nhiều nguồn thị trường, không phải con số chính thức. Tăng giá không đồng
                    đều — đất trung tâm, pháp lý rõ, hạ tầng tốt tăng mạnh nhất. Đất ven,
                    pháp lý chưa hoàn chỉnh có thể tăng ít hơn hoặc không tăng.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS68["3"]}
                alt="Khu đô thị hiện đại Dĩ An Long Khánh sau khi lên đô thị loại IV Đồng Nai"
                caption="Long Khánh và Dĩ An — bài học thực tế về tốc độ đô thị hóa và tăng giá BĐS khi huyện lên thành phố."
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="tac-dong">Tác động đến giá đất khu vực Dầu Giây</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không phải toàn bộ đất trong khu vực đều tăng giá như nhau. Kinh nghiệm
                    từ Dĩ An và Long Khánh cho thấy 3 nhóm đất có mức tăng khác nhau rõ rệt:
                  </p>

                  <H3>Nhóm 1 — Tăng mạnh nhất (150–300%)</H3>
                  <BulletList items={[
                    "Đất tại trung tâm thị trấn, mặt tiền các trục đường chính (QL1A, QL20)",
                    "Đất trong dự án có pháp lý sổ hồng hoàn chỉnh, hạ tầng đồng bộ",
                    "Đất tại ngã tư, nút giao thông quan trọng",
                    "Shophouse và nhà phố thương mại mặt tiền",
                  ]} />

                  <H3>Nhóm 2 — Tăng trung bình (80–150%)</H3>
                  <BulletList items={[
                    "Đất dân cư nội thị có sổ hồng, cách trung tâm 1–3km",
                    "Đất trong dự án khu vực vệ tinh, hạ tầng tương đối",
                    "Đất biệt thự ngoại ô trong bán kính 5km",
                  ]} />

                  <H3>Nhóm 3 — Tăng ít hoặc chậm (30–80%)</H3>
                  <BulletList items={[
                    "Đất ruộng, đất vườn chưa chuyển đổi mục đích",
                    "Đất ven đường hẻm, xa trục chính",
                    "Đất pháp lý chưa hoàn chỉnh, chưa có sổ hồng",
                    "Đất nằm ngoài vùng quy hoạch đô thị",
                  ]} />

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Điểm mấu chốt: tăng giá mạnh chỉ diễn ra với đất <strong>đã sạch pháp lý,
                    có hạ tầng và nằm đúng vị trí đô thị hóa</strong>. Đây chính là lý do tại
                    sao cùng một khu vực, đất trong dự án bài bản như The Link City tăng khác
                    hoàn toàn so với đất thổ cư tự phát quanh đó.
                  </p>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS68["5"]}
                alt="Biểu đồ dữ liệu tăng giá đất bất động sản Dầu Giây Thống Nhất Đồng Nai 2026"
                caption="Dữ liệu thị trường cho thấy xu hướng tăng giá bền vững tại khu vực ngã tư Dầu Giây."
                images={images} index={4} onOpen={openLightbox}
              />

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="the-link-city">The Link City hưởng lợi như thế nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong bức tranh đô thị hóa Dầu Giây, The Link City đang ở đúng
                    &ldquo;nhóm 1&rdquo; — nhóm được hưởng lợi nhiều nhất. Lý do:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: "📍",
                        title: "Vị trí ngã tư trung tâm — không thể tốt hơn",
                        desc: "The Link City tọa lạc ngay ngã tư QL1A – QL20, trung tâm thị trấn Dầu Giây. Khi Dầu Giây lên thị xã, đây sẽ là vị trí trung tâm đô thị — tương đương vị trí các shophouse mặt tiền QL1 tại Long Khánh hay Dĩ An trước khi lên đô thị.",
                      },
                      {
                        icon: "📜",
                        title: "Pháp lý sổ hồng — điều kiện bắt buộc để hưởng lợi tối đa",
                        desc: "Đất trong The Link City có sổ hồng riêng từng nền, đất ở đô thị (ODT) sở hữu lâu dài. Khi thị trường sôi động, đây là yếu tố then chốt để thanh khoản tốt và giá tăng đúng với tiềm năng.",
                      },
                      {
                        icon: "🏗️",
                        title: "Hạ tầng hoàn thiện 100% — sẵn sàng cho làn sóng dân cư",
                        desc: "Đường nhựa nội khu, điện âm, nước máy, vỉa hè, đèn đường đã xong. Khi dân số đổ về theo đô thị hóa, The Link City sẵn sàng đón dân cư ngay — trong khi nhiều khu đất khác vẫn còn trống hoặc chưa có hạ tầng.",
                      },
                      {
                        icon: "🏙️",
                        title: "Đóng góp vào tiêu chí đô thị hóa — cộng hưởng hai chiều",
                        desc: "The Link City với 1.397 sản phẩm và hàng nghìn cư dân góp trực tiếp vào tiêu chí dân số nội thị và mật độ dân số — giúp Dầu Giây đạt tiêu chí đô thị nhanh hơn, từ đó đẩy nhanh vòng tăng giá.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4 p-5 rounded-2xl border border-slate-200 hover:border-amber-200 transition-colors">
                        <span className="text-2xl flex-shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-black text-slate-800 mb-1">{item.title}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/the-link-city">Tổng quan The Link City →</LinkBtn>
                    <LinkBtn href="/the-link-city/bang-gia">Bảng giá 2026 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026">Có nên mua không? →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS68["4"]}
                alt="The Link City Dầu Giây trong bối cảnh đô thị hóa ngã tư QL1A QL20"
                caption="The Link City đang ở đúng vị trí để đón đầu chu kỳ đô thị hóa mạnh nhất của Dầu Giây."
                images={images} index={3} onOpen={openLightbox}
              />

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp</SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details key={name} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-amber-200 transition-colors">
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-amber-700 select-none">
                        <span className="leading-snug">{name}</span>
                        <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-amber-600 transition-transform group-open:rotate-180 text-xs">▼</span>
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
                    { href: "/the-link-city",                                                          label: "Tổng quan The Link City Dầu Giây" },
                    { href: "/the-link-city/vi-tri",                                                   label: "Vị trí ngã tư QL1A – QL20" },
                    { href: "/the-link-city/bang-gia",                                                 label: "Bảng giá 2026" },
                    { href: "/tin-tuc/tiem-nang-bat-dong-san-thong-nhat-nga-tu-dau-giay-2026",         label: "Tiềm năng BĐS ngã tư Dầu Giây" },
                    { href: "/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city",           label: "Đón sóng đô thị hóa Dầu Giây" },
                    { href: "/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026",                 label: "Có nên mua The Link City không?" },
                    { href: "/tin-tuc/khu-cong-nghiep-dau-giay-the-link-city",                        label: "KCN Dầu Giây & cơ hội đầu tư" },
                    { href: "/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026",   label: "Pháp lý The Link City đầy đủ" },
                  ].map((l) => (
                    <a key={l.href} href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 transition-colors px-4 py-3 rounded-xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50">
                      <span className="text-amber-400 flex-shrink-0">→</span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </section>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin về lộ trình đô thị hóa và số liệu tăng giá tham khảo là tổng hợp
                  từ nguồn công khai. Mốc thời gian lên thị xã phụ thuộc quyết định hành chính.
                  Tăng giá bất động sản không được đảm bảo và phụ thuộc nhiều yếu tố thị trường.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5">
                  <p className="font-black text-amber-800 text-sm mb-4 uppercase tracking-wider">Lộ trình tóm tắt</p>
                  <div className="space-y-3">
                    {[
                      { year: "2022–2025", label: "Hoàn thiện hạ tầng", done: true },
                      { year: "2025–2027", label: "Tích lũy tiêu chí", active: true },
                      { year: "2027–2030", label: "Công nhận thị xã", done: false },
                    ].map((s) => (
                      <div key={s.year} className="flex items-center gap-3">
                        <span className={`w-3 h-3 rounded-full flex-shrink-0 ${s.active ? "bg-amber-500 ring-2 ring-amber-300" : s.done ? "bg-emerald-500" : "bg-slate-200"}`} />
                        <div>
                          <p className="text-xs font-black text-slate-700">{s.year}</p>
                          <p className="text-xs text-slate-500">{s.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu The Link City</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/the-link-city",           label: "Tổng quan dự án" },
                      { href: "/the-link-city/vi-tri",    label: "Vị trí & Kết nối" },
                      { href: "/the-link-city/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/the-link-city/bang-gia",  label: "Bảng giá 2026" },
                      { href: "/the-link-city/mat-bang",  label: "Mặt bằng phân lô" },
                      { href: "/the-link-city/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/the-link-city/hinh-anh",  label: "Hình ảnh thực tế" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-amber-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white">
                        <span>{l.label}</span><span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn đầu tư</p>
                  <p className="text-amber-100 text-xs mb-4">Nhận bảng giá và phân tích đầu tư dài hạn tại The Link City.</p>
                  <a href="tel:0937587438" className="block text-center bg-white text-amber-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-amber-50 transition-colors">
                    0937.587.438
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-amber-50 border-t border-amber-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Mua trước khi Dầu Giây lên thị xã?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Lịch sử cho thấy cơ hội mua tốt nhất là <em>trước</em> khi đô thị hóa hoàn tất —
              không phải sau. The Link City hiện đang ở giai đoạn đó.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/the-link-city" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">
                Xem dự án →
              </a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            {
              href: "/tin-tuc/tiem-nang-bat-dong-san-thong-nhat-nga-tu-dau-giay-2026",
              title: "Tiềm Năng BĐS Huyện Thống Nhất: Tọa Độ Vàng Ngã Tư Dầu Giây",
              description: "Phân tích tổng thể tiềm năng tăng giá BĐS khu vực Thống Nhất – Dầu Giây 2026.",
              tag: "Thị trường",
            },
            {
              href: "/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city",
              title: "Đón Sóng Đô Thị Hóa Dầu Giây 2026–2030",
              description: "Bài học Dĩ An 300%, Long Khánh 250% và cơ hội nhân đôi tài sản tại The Link City.",
              tag: "Thị trường",
            },
            {
              href: "/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026",
              title: "Có Nên Mua The Link City Không? Phân Tích Thực Tế 2026",
              description: "Đánh giá trung thực ưu nhược điểm và bảng điểm tổng thể 7.3/10.",
              tag: "Phân tích",
            },
            {
              href: "/tin-tuc/khu-cong-nghiep-dau-giay-the-link-city",
              title: "KCN Dầu Giây & Nhu Cầu Nhà Ở 300.000 Lao Động",
              description: "Mối liên hệ giữa phát triển KCN, đô thị hóa và cơ hội đầu tư The Link City.",
              tag: "Thị trường",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
