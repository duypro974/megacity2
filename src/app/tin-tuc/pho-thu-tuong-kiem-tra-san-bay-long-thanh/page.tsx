"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS70 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/pho-thu-tuong-kiem-tra-san-bay-long-thanh`;
const PUBLISHED     = "04/10/2026";
const PUBLISHED_ISO = "2026-10-04";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Phó Thủ tướng Phạm Gia Túc Kiểm Tra Sân Bay Long Thành Ngày 4/10/2026",
  description: "Ngày 4/10/2026, Phó Thủ tướng Thường trực Phạm Gia Túc dẫn đầu đoàn công tác Chính phủ kiểm tra thực tế tiến độ thi công sân bay Long Thành và các tuyến giao thông kết nối.",
  image: [IMG_NEWS70["1"], IMG_NEWS70["2"], IMG_NEWS70["4"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "phó thủ tướng kiểm tra sân bay long thành, tiến độ sân bay long thành 2026, bất động sản nhơn trạch sân bay long thành",
  about: {
    "@type": "Place",
    name: "Sân bay Quốc tế Long Thành, Đồng Nai",
    address: { "@type": "PostalAddress", addressLocality: "Long Thành", addressRegion: "Đồng Nai", addressCountry: "VN" },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Hạ tầng & Thị trường", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 4, name: "Phó Thủ tướng kiểm tra sân bay Long Thành", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS70["1"], alt: "Đoàn công tác Chính phủ do Phó Thủ tướng Phạm Gia Túc kiểm tra sân bay Long Thành ngày 4 tháng 10 năm 2026",   caption: "Đoàn công tác Chính phủ do Phó Thủ tướng Thường trực Phạm Gia Túc kiểm tra tiến độ sân bay Long Thành ngày 4/10/2026." },
  { src: IMG_NEWS70["2"], alt: "Toàn cảnh công trường thi công sân bay quốc tế Long Thành Đồng Nai tháng 10 năm 2026",                          caption: "Toàn cảnh công trường sân bay Long Thành — tiến độ thi công đang được thúc đẩy mạnh để hoàn thành đúng kế hoạch." },
  { src: IMG_NEWS70["3"], alt: "Các tuyến giao thông kết nối sân bay Long Thành Vành đai 3 ĐT769 cao tốc Đồng Nai",                             caption: "Hệ thống giao thông kết nối sân bay Long Thành được kiểm tra đồng thời — bao gồm Vành đai 3, ĐT769 và các trục cao tốc." },
  { src: IMG_NEWS70["4"], alt: "Hạ tầng phối cảnh sân bay quốc tế Long Thành Đồng Nai đang xây dựng 2026",                                     caption: "Hạ tầng sân bay Long Thành đang dần hoàn thiện — cửa ngõ hàng không quốc tế tương lai của khu vực phía Nam." },
  { src: IMG_NEWS70["5"], alt: "Khu vực phụ cận sân bay Long Thành đang phát triển đô thị hóa Đồng Nai 2026",                                   caption: "Vùng kinh tế quanh sân bay Long Thành đang đón làn sóng đầu tư hạ tầng và bất động sản mạnh mẽ." },
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
function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const s = type === "warn"
    ? "bg-amber-50 border-amber-200 text-amber-800"
    : "bg-primary-50 border-primary-200 text-primary-800";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function NewsHighlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border-l-4 border-l-primary-500 border border-primary-100 bg-primary-50 px-6 py-5 my-6">
      <p className="text-[10px] font-black uppercase tracking-widest text-primary-500 mb-2">Tin tức mới nhất</p>
      <div className="text-slate-700 text-[16px] leading-relaxed">{children}</div>
    </div>
  );
}
function LinkBtn({ href, children, amber }: { href: string; children: React.ReactNode; amber?: boolean }) {
  const cls = amber
    ? "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100"
    : "bg-primary-50 border-primary-200 text-primary-700 hover:bg-primary-100";
  return (
    <a href={href} className={`inline-flex items-center gap-1.5 border font-semibold text-sm px-4 py-2 rounded-xl transition-all ${cls}`}>
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export default function PhoThuTuongKiemTraPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}

      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero ── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">Sân bay Long Thành</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-slate-700 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Hạ tầng</span>
              <span className="inline-block bg-red-100 text-red-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">🔴 Tin mới</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 5 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Phó Thủ tướng Phạm Gia Túc Kiểm Tra Sân Bay Long Thành: Tiến Độ Và Ý Nghĩa Với BĐS Nhơn Trạch – Dầu Giây
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Ngày 4/10/2026, Phó Thủ tướng Thường trực Chính phủ Phạm Gia Túc dẫn đầu đoàn
              công tác kiểm tra thực tế tiến độ thi công sân bay Long Thành và các tuyến giao
              thông kết nối — tín hiệu mạnh về quyết tâm đưa dự án về đích đúng hạn.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh đoàn công tác kiểm tra sân bay"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS70["1"]}
                alt="Đoàn công tác Chính phủ do Phó Thủ tướng Phạm Gia Túc kiểm tra sân bay Long Thành ngày 4 tháng 10 năm 2026"
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
              Đoàn công tác Chính phủ do Phó Thủ tướng Thường trực Phạm Gia Túc kiểm tra tiến độ sân bay Long Thành, ngày 4/10/2026.
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
                    ["#su-kien",     "1. Diễn biến chuyến kiểm tra ngày 4/10/2026"],
                    ["#tien-do",     "2. Tiến độ thi công sân bay Long Thành hiện tại"],
                    ["#giao-thong",  "3. Các tuyến giao thông kết nối được kiểm tra"],
                    ["#y-nghia",     "4. Ý nghĩa tín hiệu chính trị với BĐS khu vực"],
                    ["#nhon-trach",  "5. Tác động đến Nhơn Trạch và Mega City 2"],
                    ["#dau-giay",    "6. Tác động đến Dầu Giây và The Link City"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Section 1 — Sự kiện */}
              <section className="mb-12">
                <SectionHeading id="su-kien">Diễn biến chuyến kiểm tra ngày 4/10/2026</SectionHeading>
                <div className="pt-5 space-y-5">

                  <NewsHighlight>
                    <p className="font-black text-slate-800 mb-2">
                      ✈️ Phó Thủ tướng Thường trực Chính phủ Phạm Gia Túc kiểm tra Dự án Sân bay Long Thành và các tuyến giao thông kết nối
                    </p>
                    <p>
                      Ngày 4/10, đoàn công tác của Chính phủ do đồng chí <strong>Phạm Gia Túc</strong>,
                      Ủy viên Bộ Chính trị, Phó Thủ tướng Thường trực Chính phủ làm trưởng đoàn đã
                      kiểm tra thực tế tiến độ thi công Dự án Cảng hàng không quốc tế (sân bay) Long
                      Thành và các tuyến giao thông kết nối. Tiếp và tham gia đoàn công tác có Thành
                      ủy viên, Phó Chủ tịch UBND thành phố Đồng Nai Hồ Văn Hà.
                    </p>
                  </NewsHighlight>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là chuyến kiểm tra thực địa cấp Phó Thủ tướng — mức kiểm tra cao nhất
                    trong hệ thống hành chính — phản ánh mức độ ưu tiên và áp lực tiến độ mà
                    Chính phủ đặt ra cho dự án hàng không lớn nhất lịch sử Việt Nam.
                  </p>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Chuyến kiểm tra không chỉ dừng lại ở sân bay mà còn bao gồm <strong>các tuyến
                    giao thông kết nối</strong> — cho thấy Chính phủ đang nhìn nhận sân bay Long Thành
                    trong một tổng thể hạ tầng liên vùng, bao gồm đường bộ, đường cao tốc và các trục
                    kết nối với TP.HCM, Nhơn Trạch, Dầu Giây và các tỉnh thành lân cận.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      ["Ngày kiểm tra", "4/10/2026"],
                      ["Trưởng đoàn", "PTT Phạm Gia Túc"],
                      ["Cấp kiểm tra", "Phó Thủ tướng"],
                      ["Phạm vi", "Sân bay + Giao thông kết nối"],
                    ].map(([label, val]) => (
                      <div key={label} className="rounded-2xl bg-primary-50 border border-primary-100 p-4 text-center">
                        <p className="text-sm font-black text-primary-700 mb-1 leading-tight">{val}</p>
                        <p className="text-[11px] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS70["2"]}
                alt="Toàn cảnh công trường thi công sân bay quốc tế Long Thành Đồng Nai tháng 10 năm 2026"
                caption="Toàn cảnh công trường sân bay Long Thành — tiến độ đang được thúc đẩy mạnh để hoàn thành đúng kế hoạch."
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 2 — Tiến độ */}
              <section className="mb-12">
                <SectionHeading id="tien-do">Tiến độ thi công sân bay Long Thành hiện tại</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sân bay quốc tế Long Thành là dự án trọng điểm quốc gia với tổng vốn đầu tư
                    giai đoạn 1 lên đến hơn 109.000 tỷ đồng. Giai đoạn 1 được thiết kế để phục
                    vụ 25 triệu hành khách/năm — giảm tải cho sân bay Tân Sơn Nhất và mở ra cửa
                    ngõ hàng không mới cho toàn vùng Đông Nam Bộ.
                  </p>

                  <H3>Các hạng mục chính trong tiến độ thi công</H3>
                  <BulletList items={[
                    <><strong>Nhà ga hành khách T1:</strong> Đang ở giai đoạn hoàn thiện kết cấu và lắp đặt hệ thống kỹ thuật — một trong những nhà ga có thiết kế hiện đại nhất Đông Nam Á với diện tích sàn hơn 373.000m².</>,
                    <><strong>Đường cất hạ cánh (runway):</strong> Hạng mục nền móng và mặt đường đang được thi công theo tiến độ cam kết. Giai đoạn 1 có 2 đường băng, công suất thiết kế đủ đáp ứng 25 triệu khách/năm.</>,
                    <><strong>Hệ thống đường lăn và sân đỗ máy bay:</strong> Thi công đồng thời với đường cất hạ cánh, đảm bảo đồng bộ khi khai thác.</>,
                    <><strong>Các công trình phụ trợ:</strong> Trạm điện, hệ thống cấp thoát nước, hệ thống an ninh hàng không và các hạ tầng kỹ thuật đang triển khai song song.</>,
                    <><strong>Kết nối đường bộ:</strong> Các tuyến đường tiếp cận sân bay được thi công đồng thời, đảm bảo lưu thông từ ngày đầu khai thác.</>,
                  ]} />

                  <InfoBox>
                    Chuyến kiểm tra của Phó Thủ tướng ngày 4/10/2026 phát đi thông điệp rõ ràng:
                    Chính phủ theo dõi sát tiến độ và quyết tâm đưa sân bay Long Thành vào khai
                    thác đúng kế hoạch.
                  </InfoBox>
                </div>
              </section>

              {/* Section 3 — Giao thông kết nối */}
              <section className="mb-12">
                <SectionHeading id="giao-thong">Các tuyến giao thông kết nối được kiểm tra</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Điểm đáng chú ý trong chuyến kiểm tra là đoàn công tác kiểm tra cả
                    <strong> các tuyến giao thông kết nối</strong> — không chỉ sân bay. Đây cho
                    thấy tư duy quy hoạch toàn diện: sân bay chỉ phát huy hết tiềm năng khi hạ
                    tầng giao thông kết nối được hoàn thiện đồng bộ.
                  </p>

                  <H3>Các tuyến giao thông quan trọng trong hệ sinh thái sân bay Long Thành</H3>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Đường tỉnh ĐT769",
                        desc: "Tuyến kết nối trực tiếp từ ngã tư Dầu Giây (QL1A) đến sân bay Long Thành. Khi hoàn thiện, đây là trục kết nối Dầu Giây – sân bay ngắn nhất, khoảng 30–35km.",
                        tag: "Kết nối Dầu Giây",
                        color: "border-amber-200 bg-amber-50",
                      },
                      {
                        name: "Vành đai 3 TP.HCM",
                        desc: "Đi qua Nhơn Trạch và kết nối với hành lang sân bay Long Thành. Khi hoàn thành, tạo trục lưu thông từ Nhơn Trạch đến sân bay mà không cần qua nút thắt TP.HCM.",
                        tag: "Kết nối Nhơn Trạch",
                        color: "border-primary-200 bg-primary-50",
                      },
                      {
                        name: "Cao tốc TP.HCM – Long Thành – Dầu Giây (VEC E4)",
                        desc: "Tuyến cao tốc hiện hữu nối TP.HCM với Long Thành và Dầu Giây. Lưu lượng sẽ tăng đột biến khi sân bay hoạt động — đặt ra yêu cầu mở rộng hoặc bổ sung làn.",
                        tag: "Trục chính",
                        color: "border-slate-200 bg-slate-50",
                      },
                      {
                        name: "Đường cao tốc Biên Hòa – Vũng Tàu",
                        desc: "Tuyến đang triển khai, kết nối khu vực phía Nam với sân bay Long Thành qua trục QL51 nâng cấp — mở thêm hướng tiếp cận từ Vũng Tàu và các tỉnh ven biển.",
                        tag: "Đang triển khai",
                        color: "border-slate-200 bg-slate-50",
                      },
                    ].map((t) => (
                      <div key={t.name} className={`rounded-2xl border-2 p-4 ${t.color}`}>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <p className="font-black text-slate-800 text-sm">{t.name}</p>
                          <span className="text-[10px] font-black bg-white/80 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full">{t.tag}</span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS70["3"]}
                alt="Các tuyến giao thông kết nối sân bay Long Thành Vành đai 3 ĐT769 cao tốc Đồng Nai"
                caption="Hệ thống giao thông kết nối sân bay Long Thành — Vành đai 3, ĐT769 và cao tốc VEC E4 tạo mạng lưới kết nối đa hướng."
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 4 — Ý nghĩa */}
              <section className="mb-12">
                <SectionHeading id="y-nghia">Ý nghĩa tín hiệu chính trị với BĐS khu vực</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong thị trường bất động sản, không phải chỉ có con số tiến độ mới quan trọng
                    — mà còn là <strong>tín hiệu chính trị</strong>: Chính phủ có thực sự quyết tâm
                    và quan tâm đến một dự án không? Chuyến kiểm tra ngày 4/10 của Phó Thủ tướng
                    gửi đi 3 tín hiệu rõ ràng:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        n: "01",
                        title: "Dự án được theo dõi ở cấp cao nhất",
                        desc: "Phó Thủ tướng Thường trực — không phải Bộ trưởng hay cấp thứ trưởng — trực tiếp kiểm tra thực địa. Đây là mức độ quan tâm cao nhất mà một dự án hạ tầng có thể nhận được.",
                      },
                      {
                        n: "02",
                        title: "Tiến độ đang được thúc đẩy nghiêm túc",
                        desc: "Kiểm tra thực địa đi kèm với yêu cầu báo cáo tiến độ chi tiết từng hạng mục — đây là bước chuẩn bị trước khi đưa ra chỉ đạo tháo gỡ vướng mắc và đẩy nhanh thi công.",
                      },
                      {
                        n: "03",
                        title: "Cả hạ tầng kết nối, không chỉ sân bay",
                        desc: "Kiểm tra đồng thời các tuyến giao thông kết nối cho thấy sân bay Long Thành đang được triển khai trong tầm nhìn tổng thể — không phải một công trình đơn lẻ mà là hạt nhân của một vùng kinh tế mới.",
                      },
                    ].map((item) => (
                      <div key={item.n} className="flex gap-4 p-5 rounded-2xl border border-slate-200 hover:border-primary-200 transition-colors">
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-700 font-black text-sm flex items-center justify-center">{item.n}</span>
                        <div>
                          <p className="font-black text-slate-800 mb-1">{item.title}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS70["4"]}
                alt="Hạ tầng phối cảnh sân bay quốc tế Long Thành Đồng Nai đang xây dựng 2026"
                caption="Hạ tầng sân bay Long Thành đang dần hoàn thiện — cửa ngõ hàng không tương lai của Đông Nam Bộ."
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 5 — Nhơn Trạch */}
              <section className="mb-12">
                <SectionHeading id="nhon-trach">Tác động đến Nhơn Trạch và Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch (Đồng Nai) là địa phương gần sân bay Long Thành nhất trong số
                    các khu vực có dự án bất động sản lớn — khoảng <strong>15–18km</strong>.
                    Khi sân bay đi vào hoạt động, Nhơn Trạch đón làn sóng đầu tiên và mạnh
                    nhất từ hiệu ứng lan tỏa.
                  </p>

                  <H3>Vành đai 3 và cầu Nhơn Trạch — kết nối hai chiều</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong số các tuyến giao thông kết nối sân bay được kiểm tra, <strong>Vành đai
                    3</strong> đi qua Nhơn Trạch có ý nghĩa đặc biệt: tuyến này không chỉ kết nối
                    Nhơn Trạch với sân bay Long Thành mà còn với TP.HCM qua cầu Nhơn Trạch và
                    về phía Tây Nam qua cao tốc Bến Lức – Long Thành.
                  </p>
                  <BulletList items={[
                    <><strong>Nhơn Trạch → Sân bay Long Thành:</strong> ~15–18km, khoảng 15–20 phút qua Vành đai 3 khi hoàn chỉnh.</>,
                    <><strong>Nhơn Trạch → TP.HCM:</strong> Rút ngắn đáng kể qua cầu Nhơn Trạch và Vành đai 3 thay vì phải qua phà Cát Lái hoặc vòng qua Biên Hòa.</>,
                    <><strong>Mega City 2 tại Phú Hội:</strong> Nằm trong hành lang kết nối Nhơn Trạch – sân bay, hưởng lợi từ cả hai hướng: tiếp cận sân bay và tiếp cận TP.HCM.</>,
                  ]} />

                  <InfoBox type="warn">
                    <strong>Lưu ý khách quan:</strong> Tác động đến giá BĐS Nhơn Trạch phụ thuộc
                    vào tiến độ thực tế của cả sân bay lẫn Vành đai 3. Người mua nên đánh giá
                    trên cơ sở pháp lý và hạ tầng hiện tại — không nên kỳ vọng quá cao vào
                    tiến độ tương lai.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Tổng quan Mega City 2 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/cau-nhon-trach">Cầu Nhơn Trạch 2026 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/vanh-dai-3">Vành đai 3 tiến độ mới nhất →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 6 — Dầu Giây */}
              <section className="mb-12">
                <SectionHeading id="dau-giay">Tác động đến Dầu Giây và The Link City</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dầu Giây cách sân bay Long Thành khoảng <strong>30–35km</strong> theo đường
                    ĐT769 — xa hơn Nhơn Trạch nhưng có lợi thế riêng: vị trí <strong>ngã tư
                    của 3 tuyến cao tốc</strong> (TP.HCM–Long Thành–Dầu Giây, Biên Hòa–Vũng Tàu
                    và Dầu Giây–Liên Khương quy hoạch) tạo ra sức hút logistics độc lập với
                    sân bay.
                  </p>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với The Link City, sân bay Long Thành là <em>một trong nhiều yếu tố</em> —
                    không phải yếu tố duy nhất và cũng không phải quyết định nhất. Tuy nhiên,
                    chuyến kiểm tra của Phó Thủ tướng ngày 4/10 củng cố thêm niềm tin rằng
                    toàn bộ hệ sinh thái hạ tầng khu vực Đồng Nai đang được Chính phủ thúc đẩy
                    đồng bộ — điều này có lợi cho cả 2 khu vực Nhơn Trạch và Dầu Giây.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/the-link-city" amber>Tổng quan The Link City →</LinkBtn>
                    <LinkBtn href="/tin-tuc/san-bay-long-thanh-dau-giay-the-link-city" amber>The Link City cách sân bay bao xa? →</LinkBtn>
                    <LinkBtn href="/tin-tuc/dau-giay-len-thi-xa-2026-2030-the-link-city" amber>Dầu Giây lên thị xã 2026–2030 →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS70["5"]}
                alt="Khu vực phụ cận sân bay Long Thành đang phát triển đô thị hóa Đồng Nai 2026"
                caption="Vùng kinh tế quanh sân bay Long Thành đang đón làn sóng đầu tư hạ tầng và bất động sản mạnh mẽ."
                images={images} index={4} onOpen={openLightbox}
              />

              {/* Tìm hiểu thêm */}
              <section className="mb-12">
                <SectionHeading>Tìm hiểu thêm</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/mega-city-2",                                                             label: "Mega City 2 Nhơn Trạch — Tổng quan" },
                    { href: "/the-link-city",                                                           label: "The Link City Dầu Giây — Tổng quan" },
                    { href: "/tin-tuc/vanh-dai-3",                                                      label: "Vành đai 3 qua Đồng Nai — Tiến độ 9/2026" },
                    { href: "/tin-tuc/cau-nhon-trach",                                                  label: "Cầu Nhơn Trạch 2026 — Kết nối & BĐS" },
                    { href: "/tin-tuc/san-bay-long-thanh-dau-giay-the-link-city",                       label: "Sân bay Long Thành & The Link City" },
                    { href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach",                   label: "Sân bay Long Thành & BĐS Nhơn Trạch" },
                    { href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat",                          label: "Hạ tầng giao thông Nhơn Trạch mới nhất" },
                    { href: "/tin-tuc/dau-giay-len-thi-xa-2026-2030-the-link-city",                     label: "Dầu Giây lên thị xã 2026–2030" },
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
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Nguồn thông tin</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin sự kiện ngày 4/10/2026 được tổng hợp từ nguồn tin công khai.
                  Phân tích tác động BĐS mang tính tham khảo, không phải cam kết tăng giá.
                  Người mua cần tự thẩm định và tham khảo nhiều nguồn trước khi ra quyết định đầu tư.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                <div className="rounded-2xl border-2 border-primary-200 bg-primary-50 p-5">
                  <p className="font-black text-primary-800 text-sm mb-3 uppercase tracking-wider">Tóm tắt sự kiện</p>
                  <div className="space-y-2 text-sm text-primary-700">
                    {[
                      ["Ngày", "4/10/2026"],
                      ["Người kiểm tra", "PTT Phạm Gia Túc"],
                      ["Đi kèm", "Phó CT UBND TP. Đồng Nai"],
                      ["Phạm vi", "Sân bay + Giao thông"],
                      ["Ý nghĩa", "Thúc đẩy tiến độ GĐ1"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-2 border-b border-primary-200 pb-2 last:border-0 last:pb-0">
                        <span className="text-primary-500">{k}</span>
                        <span className="font-black text-right">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">2 dự án hưởng lợi</p>
                  <div className="space-y-3">
                    <a href="/mega-city-2" className="flex items-center gap-3 p-3 rounded-xl bg-white border border-primary-100 hover:border-primary-300 transition-colors">
                      <span className="w-8 h-8 rounded-full bg-primary-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-black">MC2</span>
                      <div>
                        <p className="font-bold text-slate-800 text-xs">Mega City 2</p>
                        <p className="text-[11px] text-slate-400">Nhơn Trạch · ~15km sân bay</p>
                      </div>
                    </a>
                    <a href="/the-link-city" className="flex items-center gap-3 p-3 rounded-xl bg-white border border-amber-100 hover:border-amber-300 transition-colors">
                      <span className="w-8 h-8 rounded-full bg-amber-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-black">TLC</span>
                      <div>
                        <p className="font-bold text-slate-800 text-xs">The Link City</p>
                        <p className="text-[11px] text-slate-400">Dầu Giây · ~30km sân bay</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn đầu tư</p>
                  <p className="text-primary-200 text-xs mb-4">Nhận thông tin pháp lý và bảng giá mới nhất từ 2 dự án.</p>
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
            <h2 className="text-2xl font-black text-slate-900 mb-3">Bạn đang quan tâm dự án nào?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Sân bay Long Thành đang được thúc đẩy mạnh mẽ — hai dự án Kim Oanh tại
              Nhơn Trạch và Dầu Giây đều nằm trong vùng hưởng lợi trực tiếp.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">
                Mega City 2 Nhơn Trạch →
              </a>
              <a href="/the-link-city" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">
                The Link City Dầu Giây →
              </a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-bold px-6 py-3.5 rounded-full transition-all text-sm">
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            {
              href: "/tin-tuc/vanh-dai-3",
              title: "Vành Đai 3 Qua Đồng Nai: Cập Nhật Tiến Độ Cuối Tháng 9/2026",
              description: "Đoạn hướng từ cầu Nhơn Trạch về TP.HCM đã khai thác tạm. Các hạng mục hoàn thiện cuối tháng 9.",
              tag: "Hạ tầng",
            },
            {
              href: "/tin-tuc/san-bay-long-thanh-dau-giay-the-link-city",
              title: "Sân Bay Long Thành & BĐS Dầu Giây: The Link City Cách Sân Bay Bao Xa?",
              description: "Khoảng cách 30–35km, 3 kênh tác động và so sánh Dầu Giây vs Long Thành nên mua đâu.",
              tag: "Hạ tầng",
            },
            {
              href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach",
              title: "Sân Bay Long Thành Ảnh Hưởng Đến BĐS Nhơn Trạch Như Thế Nào?",
              description: "Phân tích tác động của sân bay Long Thành đến thị trường bất động sản Nhơn Trạch.",
              tag: "Hạ tầng",
            },
            {
              href: "/tin-tuc/cau-nhon-trach",
              title: "Cầu Nhơn Trạch 2026: Kết Nối Giao Thông & Tác Động Bất Động Sản",
              description: "Cầu Nhơn Trạch đã khánh thành, khai thác từ 20/8/2025. Phân tích kết nối Vành đai 3.",
              tag: "Hạ tầng",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
