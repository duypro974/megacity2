"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS66 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/khu-cong-nghiep-dau-giay-the-link-city`;
const PUBLISHED     = "03/10/2026";
const PUBLISHED_ISO = "2026-10-03";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Khu Công Nghiệp Dầu Giây & Cơ Hội Đầu Tư The Link City 2026: Tại Sao 300.000 Lao Động Tạo Ra Sóng BĐS?",
  description: "Phân tích 8 khu công nghiệp quanh Dầu Giây – Thống Nhất, nhu cầu nhà ở 300.000 lao động và tại sao The Link City là lựa chọn an cư & đầu tư cho thuê lý tưởng nhất khu vực.",
  image: [IMG_NEWS66["1"], IMG_NEWS66["3"], IMG_NEWS66["4"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "khu công nghiệp dầu giây, khu công nghiệp thống nhất đồng nai, nhà ở gần khu công nghiệp dầu giây, the link city gần khu công nghiệp",
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
      name: "Khu vực Dầu Giây có những khu công nghiệp nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quanh khu vực Dầu Giây – Thống Nhất có các KCN lớn gồm: KCN Dầu Giây (330ha), KCN Bàu Xéo (499ha), KCN Xuân Lộc, KCN Long Khánh và một số cụm công nghiệp nhỏ. Tổng diện tích các KCN trong bán kính 20km vượt 2.000ha, thu hút hàng trăm doanh nghiệp trong và ngoài nước.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City cách các khu công nghiệp bao xa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City tọa lạc ngay ngã tư QL1A – QL20, trung tâm thị trấn Dầu Giây. KCN Dầu Giây 330ha cách dự án khoảng 2–5km. KCN Bàu Xéo cách khoảng 8–12km theo QL1A. Nhiều nhà máy và cụm công nghiệp nhỏ nằm trong bán kính 5km quanh dự án.",
      },
    },
    {
      "@type": "Question",
      name: "Đầu tư cho thuê nhà phố gần KCN Dầu Giây có hiệu quả không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhu cầu thuê nhà từ công nhân và kỹ sư tại các KCN Dầu Giây rất cao và ổn định. Nhà phố liên kế cho thuê nguyên căn dao động 8–15 triệu/tháng, cho thuê theo phòng 1,5–3 triệu/phòng. Rental yield ước tính 4–7%/năm tùy vị trí và cách khai thác. Đây là mức cạnh tranh so với nhiều khu vực khác tại Đồng Nai.",
      },
    },
    {
      "@type": "Question",
      name: "Tại sao công nhân và kỹ sư KCN Dầu Giây thích ở gần trung tâm thị trấn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trung tâm thị trấn Dầu Giây tập trung đầy đủ dịch vụ thiết yếu: chợ, siêu thị, nhà hàng, ngân hàng, trường học, bệnh viện. Công nhân và kỹ sư ưu tiên ở gần nơi có đủ tiện nghi sinh hoạt thay vì ở sâu trong các khu nhà trọ ven KCN. The Link City đáp ứng chính xác nhu cầu này với hạ tầng đồng bộ và vị trí trung tâm.",
      },
    },
    {
      "@type": "Question",
      name: "KCN Dầu Giây 330ha có những doanh nghiệp nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KCN Dầu Giây thu hút các doanh nghiệp trong lĩnh vực logistics, chế biến thực phẩm, sản xuất hàng tiêu dùng và công nghiệp nhẹ. Vị trí nằm ngay ngã tư QL1A – QL20, gần nút cao tốc TP.HCM–Long Thành–Dầu Giây, tạo lợi thế lớn cho hoạt động vận chuyển và phân phối hàng hóa.",
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
    { "@type": "ListItem", position: 4, name: "KCN Dầu Giây & The Link City", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS66["1"], alt: "Khu công nghiệp khu vực Dầu Giây Thống Nhất Đồng Nai nhà máy sản xuất",          caption: "Khu vực Dầu Giây – Thống Nhất tập trung nhiều KCN lớn, thu hút hàng trăm nghìn lao động." },
  { src: IMG_NEWS66["2"], alt: "Công nhân kỹ sư làm việc tại khu công nghiệp Dầu Giây Đồng Nai",                 caption: "Lực lượng lao động hùng hậu tại các KCN tạo ra nhu cầu nhà ở khổng lồ và ổn định." },
  { src: IMG_NEWS66["3"], alt: "Bản đồ sơ đồ các khu công nghiệp quanh Dầu Giây Thống Nhất Long Khánh Đồng Nai", caption: "Mạng lưới KCN dày đặc trong bán kính 20km quanh ngã tư Dầu Giây." },
  { src: IMG_NEWS66["4"], alt: "The Link City Dầu Giây khu đô thị gần khu công nghiệp Thống Nhất Đồng Nai",       caption: "The Link City — khu đô thị đủ tiện nghi, cách các KCN chỉ 2–12km theo QL1A." },
  { src: IMG_NEWS66["5"], alt: "Cao tốc logistics xe tải container khu vực Dầu Giây Đồng Nai",                    caption: "Hạ tầng logistics phát triển mạnh tại Dầu Giây nhờ vị trí ngã tư 3 tuyến cao tốc." },
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
function KCNCard({ name, area, distance, sector }: { name: string; area: string; distance: string; sector: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4 hover:border-amber-200 hover:bg-amber-50 transition-colors">
      <p className="font-black text-slate-800 text-sm mb-2">{name}</p>
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="text-center">
          <p className="font-black text-amber-600">{area}</p>
          <p className="text-slate-400">Diện tích</p>
        </div>
        <div className="text-center">
          <p className="font-black text-amber-600">{distance}</p>
          <p className="text-slate-400">Cách TLC</p>
        </div>
        <div className="text-center">
          <p className="font-black text-slate-600 leading-tight">{sector}</p>
          <p className="text-slate-400">Ngành chính</p>
        </div>
      </div>
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
export default function KCNDauGiayPage() {
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
              <span className="text-slate-600 font-medium">KCN Dầu Giây</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">The Link City</span>
              <span className="inline-block bg-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Thị trường</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 7 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Khu Công Nghiệp Dầu Giây & Cơ Hội Đầu Tư The Link City 2026: Tại Sao 300.000 Lao Động Tạo Ra Sóng BĐS?
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Dầu Giây đang trở thành trung tâm công nghiệp – logistics của Đồng Nai với hàng loạt
              KCN lớn hoạt động trong bán kính 20km. 300.000 lao động cần chỗ ở — và The Link City
              đang ở đúng vị trí để đón làn sóng đó.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh KCN Dầu Giây"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS66["1"]}
                alt="Khu công nghiệp khu vực Dầu Giây Thống Nhất Đồng Nai nhà máy sản xuất"
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
              Khu vực Dầu Giây – Thống Nhất tập trung nhiều KCN lớn, thu hút hàng trăm nghìn lao động.
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
                    ["#buc-tranh-kcn",  "1. Bức tranh toàn cảnh KCN quanh Dầu Giây"],
                    ["#nhu-cau",        "2. Nhu cầu nhà ở từ 300.000 lao động"],
                    ["#tai-sao-tlc",    "3. Tại sao The Link City là lựa chọn tối ưu?"],
                    ["#dau-tu-cho-thue","4. Phân tích cơ hội đầu tư cho thuê"],
                    ["#logistics",      "5. Hạ tầng logistics – động lực tăng giá dài hạn"],
                    ["#faq",           "6. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Khi nói về bất động sản Dầu Giây, nhiều người nghĩ đến vị trí cao tốc hay tiềm
                năng đô thị hóa — nhưng ít người để ý đến yếu tố căn bản hơn: <strong>nhu cầu
                nhà ở thực tế từ hàng trăm nghìn lao động</strong> đang làm việc tại các KCN
                xung quanh.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Đây không phải đầu cơ hay kỳ vọng tương lai — đây là nhu cầu đang tồn tại
                ngay hôm nay và sẽ còn tăng lên theo từng KCN mới đi vào hoạt động. Bài viết
                này phân tích cụ thể bức tranh KCN quanh Dầu Giây và lý do{" "}
                <a href="/the-link-city" className="text-amber-700 font-semibold hover:underline">The Link City</a>{" "}
                đang ở đúng vị trí để hưởng lợi.
              </p>

              {/* Section 1 — Bức tranh KCN */}
              <section className="mb-12">
                <SectionHeading id="buc-tranh-kcn">Bức tranh toàn cảnh KCN quanh Dầu Giây</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong bán kính 20km từ ngã tư Dầu Giây, có ít nhất 8 khu công nghiệp và cụm
                    công nghiệp đang hoạt động hoặc đang triển khai, với tổng diện tích vượt
                    2.500ha. Đây là mật độ KCN thuộc top cao nhất tỉnh Đồng Nai.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <KCNCard name="KCN Dầu Giây" area="330 ha" distance="~3–5 km" sector="Logistics, CB thực phẩm" />
                    <KCNCard name="KCN Bàu Xéo" area="499 ha" distance="~8–12 km" sector="Công nghiệp nhẹ, điện tử" />
                    <KCNCard name="KCN Xuân Lộc" area="~200 ha" distance="~15 km" sector="Chế biến nông sản" />
                    <KCNCard name="KCN Long Khánh" area="~150 ha" distance="~15 km" sector="Đa ngành" />
                    <KCNCard name="Cụm CN Thống Nhất" area="~80 ha" distance="~2–4 km" sector="SXKD vừa và nhỏ" />
                    <KCNCard name="KCN Định Quán (quy hoạch)" area="~300 ha" distance="~25 km" sector="Chế biến, logistics" />
                  </div>

                  <InfoBox>
                    Ngoài các KCN đã hoạt động, tỉnh Đồng Nai đang triển khai thêm nhiều KCN mới
                    trong giai đoạn 2025–2030 theo quy hoạch phát triển kinh tế – xã hội tỉnh.
                    Mỗi KCN mới đi vào hoạt động đồng nghĩa với thêm hàng chục nghìn lao động
                    cần chỗ ở trong khu vực.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS66["2"]}
                alt="Công nhân kỹ sư làm việc tại khu công nghiệp Dầu Giây Đồng Nai"
                caption="Hàng trăm nghìn công nhân và kỹ sư làm việc tại các KCN quanh Dầu Giây tạo ra nhu cầu nhà ở khổng lồ."
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 2 — Nhu cầu */}
              <section className="mb-12">
                <SectionHeading id="nhu-cau">Nhu cầu nhà ở từ 300.000 lao động</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tổng số lao động làm việc tại các KCN trong bán kính 20km quanh Dầu Giây
                    ước tính vượt 300.000 người. Trong đó, một phần lớn là lao động từ tỉnh
                    khác đến và kỹ sư, chuyên gia nước ngoài — những người cần thuê chỗ ở
                    ổn định, đủ tiện nghi, không muốn ở trong khu nhà trọ ven KCN.
                  </p>

                  <H3>Phân loại nhu cầu thuê nhà theo đối tượng</H3>
                  <div className="space-y-3">
                    {[
                      {
                        group: "Kỹ sư & quản lý cấp trung",
                        demand: "Thuê nguyên căn nhà phố 3–4 phòng ngủ",
                        budget: "8–15 triệu/tháng",
                        size: "~15–20% tổng lao động",
                        color: "border-amber-300 bg-amber-50",
                      },
                      {
                        group: "Chuyên gia nước ngoài",
                        demand: "Thuê căn hộ hoặc nhà phố cao cấp",
                        budget: "15–30 triệu/tháng",
                        size: "~3–5% tổng lao động",
                        color: "border-emerald-300 bg-emerald-50",
                      },
                      {
                        group: "Công nhân tay nghề cao",
                        demand: "Thuê phòng trong nhà phố, 1–2 người/phòng",
                        budget: "1,5–3 triệu/phòng/tháng",
                        size: "~40–50% tổng lao động",
                        color: "border-blue-200 bg-blue-50",
                      },
                      {
                        group: "Nhân viên văn phòng / dịch vụ",
                        demand: "Thuê phòng hoặc căn studio gần trung tâm",
                        budget: "2–4 triệu/tháng",
                        size: "~20–25% tổng lao động",
                        color: "border-slate-200 bg-slate-50",
                      },
                    ].map((g) => (
                      <div key={g.group} className={`rounded-2xl border-2 p-4 ${g.color}`}>
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <p className="font-black text-slate-800">{g.group}</p>
                          <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full">{g.size}</span>
                        </div>
                        <p className="text-sm text-slate-600 mb-1">{g.demand}</p>
                        <p className="text-sm font-black text-amber-700">{g.budget}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Điểm quan trọng: nhóm kỹ sư, quản lý và chuyên gia nước ngoài — chiếm
                    khoảng 20–25% lực lượng nhưng đóng góp phần lớn doanh thu cho thuê — đang
                    ngày càng tìm kiếm nhà phố trong các khu đô thị có đủ tiện nghi thay vì
                    các khu nhà trọ đơn giản.
                  </p>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS66["3"]}
                alt="Bản đồ sơ đồ các khu công nghiệp quanh Dầu Giây Thống Nhất Long Khánh Đồng Nai"
                caption="Mạng lưới KCN dày đặc trong bán kính 20km quanh ngã tư Dầu Giây — mỗi KCN là một nguồn cầu nhà ở ổn định."
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 3 — Tại sao TLC */}
              <section className="mb-12">
                <SectionHeading id="tai-sao-tlc">Tại sao The Link City là lựa chọn tối ưu?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong số các lựa chọn nhà ở quanh Dầu Giây, The Link City nổi bật ở 4 điểm
                    mà phần lớn khu nhà trọ hay nhà phố tự xây không có được:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        n: "01", title: "Vị trí trung tâm thị trấn — không phải ven đường KCN",
                        desc: "The Link City nằm ngay ngã tư QL1A – QL20, giữa trung tâm Dầu Giây, cách tất cả các KCN lớn 3–12km theo QL1A. Kỹ sư và gia đình họ muốn sống trong đô thị đầy đủ tiện nghi, không muốn ở khu nhà trọ ven nhà máy.",
                      },
                      {
                        n: "02", title: "Hạ tầng kỹ thuật hoàn thiện — khác hẳn nhà trọ tự phát",
                        desc: "Đường nhựa, điện âm, nước máy, vỉa hè, đèn đường và hệ thống thoát nước đồng bộ. Đây là tiêu chuẩn mà hầu hết khu nhà trọ quanh các KCN không có.",
                      },
                      {
                        n: "03", title: "Pháp lý sổ hồng riêng — an toàn cho cả chủ nhà lẫn người thuê",
                        desc: "Nhà phố liên kế có sổ hồng riêng từng nền. Người thuê được ký hợp đồng thuê nhà đúng nghĩa, không lo tình trạng pháp lý bất ổn thường gặp ở nhà trọ tự phát.",
                      },
                      {
                        n: "04", title: "Tiện ích nội khu và ngoại khu đồng bộ",
                        desc: "Công viên, khu thể thao, trung tâm thương mại và trường học ngay trong khu. Kỹ sư có gia đình — đặc biệt là chuyên gia nước ngoài — sẽ ưu tiên môi trường sống đầy đủ này.",
                      },
                    ].map((item) => (
                      <div key={item.n} className="flex gap-4 p-5 rounded-2xl border border-slate-200 hover:border-amber-200 transition-colors">
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-black text-sm flex items-center justify-center">{item.n}</span>
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
                src={IMG_NEWS66["4"]}
                alt="The Link City Dầu Giây khu đô thị gần khu công nghiệp Thống Nhất Đồng Nai"
                caption="The Link City — khu đô thị đủ tiện nghi ngay trung tâm Dầu Giây, cách các KCN lớn chỉ 3–12km."
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 4 — Đầu tư cho thuê */}
              <section className="mb-12">
                <SectionHeading id="dau-tu-cho-thue">Phân tích cơ hội đầu tư cho thuê</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với nền tảng cầu thuê ổn định từ các KCN, nhà phố tại The Link City phù hợp
                    với chiến lược đầu tư cho thuê dài hạn. Dưới đây là 3 mô hình khai thác
                    phổ biến và ước tính dòng tiền:
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    {[
                      {
                        model: "Cho thuê nguyên căn — kỹ sư / gia đình",
                        target: "Kỹ sư, quản lý KCN hoặc chuyên gia nước ngoài",
                        rent: "8–15 triệu/tháng",
                        yield: "~5–7%/năm",
                        pros: "Ổn định, ít hao mòn, dễ quản lý",
                        cons: "Phụ thuộc tìm được khách tốt",
                        tag: "bg-amber-100 text-amber-700",
                      },
                      {
                        model: "Cho thuê theo phòng — công nhân tay nghề cao",
                        target: "Nhóm 3–4 người thuê chung, mỗi người 1 phòng",
                        rent: "6–10 triệu/tháng tổng",
                        yield: "~4–6%/năm",
                        pros: "Lấp đầy nhanh, thu nhập đều đặn",
                        cons: "Quản lý phức tạp hơn, hao mòn nhiều hơn",
                        tag: "bg-blue-100 text-blue-700",
                      },
                      {
                        model: "Tầng trệt kinh doanh + các tầng trên cho thuê ở",
                        target: "Kết hợp dịch vụ (quán ăn, tiệm) + phòng trọ cấp cao",
                        rent: "12–20 triệu/tháng tổng",
                        yield: "~6–9%/năm",
                        pros: "Yield cao nhất, đa dạng hóa thu nhập",
                        cons: "Cần quản lý cả 2 mảng, vốn hoàn thiện cao hơn",
                        tag: "bg-emerald-100 text-emerald-700",
                      },
                    ].map((m) => (
                      <div key={m.model} className="rounded-2xl border border-slate-200 p-5">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <p className="font-black text-slate-800">{m.model}</p>
                          <span className={`text-xs font-black px-2 py-1 rounded-full ${m.tag}`}>{m.yield}</span>
                        </div>
                        <p className="text-sm text-slate-500 mb-2">Đối tượng: {m.target}</p>
                        <p className="text-lg font-black text-amber-600 mb-3">{m.rent}</p>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="bg-emerald-50 rounded-xl p-3">
                            <p className="font-bold text-emerald-700 mb-1">Ưu điểm</p>
                            <p className="text-emerald-600">{m.pros}</p>
                          </div>
                          <div className="bg-red-50 rounded-xl p-3">
                            <p className="font-bold text-red-600 mb-1">Lưu ý</p>
                            <p className="text-red-500">{m.cons}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <InfoBox type="warn">
                    Các mức giá cho thuê và yield trên là ước tính tham khảo, dựa trên dữ liệu
                    thị trường khu vực Dầu Giây – Thống Nhất. Thực tế phụ thuộc vào vị trí lô,
                    tình trạng hoàn thiện, thời điểm và nhu cầu thị trường tại thời điểm cho thuê.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/nha-pho-lien-ke-the-link-city-dau-giay-2026">Chi tiết nhà phố liên kế →</LinkBtn>
                    <LinkBtn href="/the-link-city/bang-gia">Bảng giá 2026 →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 5 — Logistics */}
              <section className="mb-12">
                <SectionHeading id="logistics">Hạ tầng logistics – động lực tăng giá dài hạn</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bên cạnh nhu cầu nhà ở từ lao động, khu vực Dầu Giây đang hình thành thành
                    một trung tâm logistics lớn của miền Nam — đây là động lực tăng giá bất
                    động sản bền vững hơn so với chỉ dựa vào đô thị hóa.
                  </p>
                  <BulletList items={[
                    <><strong>Ngã tư 3 cao tốc:</strong> TP.HCM–Long Thành–Dầu Giây, Biên Hòa–Vũng Tàu (đang triển khai) và Dầu Giây–Liên Khương (quy hoạch). Không nơi nào trong bán kính 50km có được lợi thế này.</>,
                    <><strong>Kho lạnh và logistics lớn:</strong> Hàng loạt trung tâm phân phối, kho bãi và nhà máy chế biến thực phẩm đang mở rộng tại khu vực Dầu Giây nhờ hạ tầng đường bộ xuất sắc.</>,
                    <><strong>KCN Dầu Giây 330ha:</strong> Đang trong giai đoạn lấp đầy — mỗi nhà máy mới đồng nghĩa hàng trăm công nhân mới cần chỗ ở.</>,
                    <><strong>Sân bay Long Thành:</strong> Khi hoàn thành, sẽ thúc đẩy mạnh hoạt động thương mại và logistics khu vực, kéo thêm doanh nghiệp và lao động đổ về phía Đông Đồng Nai.</>,
                  ]} />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS66["5"]}
                alt="Cao tốc logistics xe tải container khu vực Dầu Giây Đồng Nai"
                caption="Hạ tầng logistics phát triển mạnh tại Dầu Giây nhờ vị trí ngã tư 3 tuyến cao tốc — động lực tăng giá BĐS bền vững."
                images={images} index={4} onOpen={openLightbox}
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
                <SectionHeading>Tìm hiểu thêm về The Link City</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city",                                                        label: "Tổng quan dự án The Link City" },
                    { href: "/the-link-city/bang-gia",                                               label: "Bảng giá nhà phố 2026" },
                    { href: "/the-link-city/vi-tri",                                                 label: "Vị trí & kết nối giao thông" },
                    { href: "/tin-tuc/nha-pho-lien-ke-the-link-city-dau-giay-2026",                  label: "Chi tiết nhà phố liên kế" },
                    { href: "/tin-tuc/shophouse-the-link-city-dau-giay-tiem-nang-kinh-doanh-2026",   label: "Shophouse mặt tiền QL1A" },
                    { href: "/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026",               label: "Có nên mua The Link City không?" },
                    { href: "/tin-tuc/tien-ich-ngoai-khu-the-link-city-dau-giay",                    label: "Tiện ích ngoại khu trong 5km" },
                    { href: "/tin-tuc/tiem-nang-bat-dong-san-thong-nhat-nga-tu-dau-giay-2026",       label: "Tiềm năng BĐS ngã tư Dầu Giây" },
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
                  Số liệu lao động, diện tích KCN và giá cho thuê trong bài là ước tính tổng
                  hợp từ nguồn công khai. Thực tế có thể thay đổi. Phân tích đầu tư không phải
                  cam kết lợi nhuận. Người đầu tư cần tự thẩm định trước khi ra quyết định.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5">
                  <p className="font-black text-amber-800 text-sm mb-4 uppercase tracking-wider">KCN quanh Dầu Giây</p>
                  <div className="space-y-2 text-sm">
                    {[
                      ["KCN Dầu Giây", "330 ha", "~3–5 km"],
                      ["KCN Bàu Xéo", "499 ha", "~8–12 km"],
                      ["KCN Xuân Lộc", "~200 ha", "~15 km"],
                      ["Cụm CN Thống Nhất", "~80 ha", "~2–4 km"],
                    ].map(([name, area, dist]) => (
                      <div key={name} className="flex items-center justify-between gap-2 border-b border-amber-200 pb-2 last:border-0 last:pb-0">
                        <div>
                          <p className="font-bold text-slate-700">{name}</p>
                          <p className="text-xs text-slate-400">{area}</p>
                        </div>
                        <span className="text-xs font-black text-amber-600 whitespace-nowrap">{dist}</span>
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
                      { href: "/the-link-city/tien-do",   label: "Tiến độ xây dựng" },
                      { href: "/the-link-city/bang-gia",  label: "Bảng giá 2026" },
                      { href: "/the-link-city/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/the-link-city/mat-bang",  label: "Mặt bằng phân lô" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-amber-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white">
                        <span>{l.label}</span><span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn đầu tư cho thuê</p>
                  <p className="text-amber-100 text-xs mb-4">Phân tích dòng tiền và lựa chọn lô phù hợp cho mục tiêu cho thuê của bạn.</p>
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
            <h2 className="text-2xl font-black text-slate-900 mb-3">Muốn tận dụng nhu cầu thuê nhà từ các KCN?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              The Link City đang ở đúng vị trí, đúng thời điểm. Gọi để được tư vấn
              chiến lược đầu tư cho thuê phù hợp với ngân sách và mục tiêu của bạn.
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
              title: "Tiềm Năng BĐS Huyện Thống Nhất 2026: Tọa Độ Vàng Ngã Tư Dầu Giây",
              description: "Phân tích tiềm năng tăng giá BĐS Dầu Giây dựa trên hạ tầng, KCN và lộ trình lên thị xã.",
              tag: "Thị trường",
            },
            {
              href: "/tin-tuc/nha-pho-lien-ke-the-link-city-dau-giay-2026",
              title: "Nhà Phố Liên Kế The Link City: Diện Tích & Chi Phí Xây",
              description: "Chi tiết kích thước, công năng mẫu nhà T3-2b và bảng chi phí xây dựng thực tế.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/shophouse-the-link-city-dau-giay-tiem-nang-kinh-doanh-2026",
              title: "Shophouse The Link City: Tiềm Năng Kinh Doanh Mặt Tiền QL1A",
              description: "Phân tích rental yield shophouse mặt tiền QL1A và top 5 mô hình kinh doanh.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026",
              title: "Có Nên Mua The Link City Không? Phân Tích Thực Tế 2026",
              description: "Đánh giá trung thực ưu nhược điểm, bảng điểm 7.3/10 và đối tượng phù hợp.",
              tag: "Phân tích",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
