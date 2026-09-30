"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS62 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/tien-ich-ngoai-khu-the-link-city-dau-giay`;
const PUBLISHED     = "30/09/2026";
const PUBLISHED_ISO = "2026-09-30";

// ─────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tiện Ích Ngoại Khu The Link City Dầu Giây: Bệnh Viện, Trường Học, Chợ & Kết Nối Giao Thông",
  description: "Khám phá hệ thống tiện ích ngoại khu trong bán kính 5km quanh The Link City Dầu Giây: bệnh viện đa khoa, trường học liên cấp, chợ sầm uất và cao tốc kết nối TP.HCM chỉ 45 phút.",
  image: [IMG_NEWS62["1"], IMG_NEWS62["2"], IMG_NEWS62["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "tiện ích ngoại khu the link city, bệnh viện gần the link city dầu giây, trường học gần dầu giây, chợ dầu giây, sống tại the link city dầu giây",
  about: {
    "@type": "Place",
    name: "The Link City, Dầu Giây, Đồng Nai",
    address: { "@type": "PostalAddress", addressLocality: "Dầu Giây", addressRegion: "Đồng Nai", addressCountry: "VN" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "The Link City Dầu Giây gần bệnh viện nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trong bán kính 5km quanh The Link City có Bệnh viện Đa khoa huyện Thống Nhất, cùng nhiều phòng khám đa khoa và nha khoa dọc QL1A. Khu vực cũng dễ dàng tiếp cận các bệnh viện lớn tại Biên Hòa trong khoảng 30 phút di chuyển.",
      },
    },
    {
      "@type": "Question",
      name: "Gần The Link City có trường học nào không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khu vực Dầu Giây và Thống Nhất có đầy đủ trường từ mầm non, tiểu học đến THCS và THPT. Ngoài ra, nội khu The Link City quy hoạch quỹ đất dành cho trường học liên cấp, phục vụ nhu cầu giáo dục ngay trong dự án.",
      },
    },
    {
      "@type": "Question",
      name: "Đi chợ và mua sắm tại The Link City Dầu Giây như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chợ Dầu Giây họp hàng ngày ngay trung tâm thị trấn, cách dự án khoảng 1–2km. Dọc QL1A cũng có nhiều cửa hàng tạp hóa, siêu thị mini và chuỗi bán lẻ phục vụ nhu cầu hàng ngày.",
      },
    },
    {
      "@type": "Question",
      name: "Từ The Link City đi TP.HCM mất bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Từ The Link City Dầu Giây vào trung tâm TP.HCM khoảng 45–55 phút theo cao tốc TP.HCM–Long Thành–Dầu Giây. Đây là một trong những lợi thế kết nối lớn nhất của dự án so với các khu đô thị vùng ven khác.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Tiện ích ngoại khu The Link City", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS62["1"], alt: "Toàn cảnh khu vực The Link City Dầu Giây và hạ tầng ngã tư QL1A Thống Nhất",   caption: "The Link City nằm ngay ngã tư chiến lược QL1A – QL20, trung tâm kết nối của Dầu Giây." },
  { src: IMG_NEWS62["2"], alt: "Bệnh viện đa khoa gần The Link City Dầu Giây huyện Thống Nhất Đồng Nai",        caption: "Bệnh viện Đa khoa huyện Thống Nhất phục vụ chăm sóc sức khỏe cho cư dân khu vực." },
  { src: IMG_NEWS62["3"], alt: "Trường học liên cấp gần The Link City Dầu Giây Thống Nhất Đồng Nai",            caption: "Hệ thống trường học từ mầm non đến THPT phủ khắp khu vực Dầu Giây và Thống Nhất." },
  { src: IMG_NEWS62["4"], alt: "Chợ Dầu Giây sầm uất khu vực ngã tư QL1A Thống Nhất Đồng Nai",                 caption: "Chợ Dầu Giây họp hàng ngày, đáp ứng đầy đủ nhu cầu mua sắm thực phẩm và hàng hóa." },
  { src: IMG_NEWS62["5"], alt: "Cao tốc QL1A kết nối The Link City Dầu Giây với TP Hồ Chí Minh Biên Hòa",      caption: "Cao tốc TP.HCM–Long Thành–Dầu Giây rút ngắn thời gian di chuyển xuống còn 45 phút." },
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
function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const s = type === "warn"
    ? "bg-amber-50 border-amber-200 text-amber-800"
    : "bg-amber-50 border-amber-200 text-amber-800";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-amber-50 border border-amber-100 p-4 text-center">
      <p className="text-sm font-black text-amber-700 mb-1">{value}</p>
      <p className="text-[11px] text-slate-500">{label}</p>
    </div>
  );
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
export default function TienIchNgoaiKhuTLCPage() {
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
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span>/</span>
              <a href="/the-link-city" className="hover:text-amber-600 transition-colors">The Link City</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">Tiện ích ngoại khu</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">The Link City</span>
              <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Tin dự án</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 6 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Tiện Ích Ngoại Khu The Link City Dầu Giây: Bệnh Viện, Trường Học, Chợ & Kết Nối Giao Thông
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Sống tại The Link City không chỉ có hệ sinh thái 50+ tiện ích nội khu — xung quanh
              bán kính 5km còn là mạng lưới bệnh viện, trường học, chợ và hạ tầng giao thông
              hoàn chỉnh phục vụ cuộc sống hàng ngày.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh The Link City Dầu Giây"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS62["1"]}
                alt="Toàn cảnh khu vực The Link City Dầu Giây và hạ tầng ngã tư QL1A Thống Nhất"
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
              The Link City tọa lạc ngay ngã tư chiến lược QL1A – QL20, trung tâm kết nối của Dầu Giây.
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
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#tong-quan",   "1. Tổng quan vị trí và tiện ích ngoại khu"],
                    ["#y-te",        "2. Y tế – Bệnh viện & phòng khám"],
                    ["#giao-duc",    "3. Giáo dục – Trường học các cấp"],
                    ["#mua-sam",     "4. Mua sắm – Chợ, siêu thị & dịch vụ"],
                    ["#giao-thong",  "5. Giao thông – Kết nối liên vùng"],
                    ["#faq",         "6. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Khi chọn mua bất động sản để ở thực, tiện ích ngoại khu đôi khi quan trọng hơn
                cả tiện ích nội khu. Bệnh viện gần hay xa, trường học có chất lượng không, đi chợ
                mua thực phẩm có tiện không — đây là những câu hỏi thực tế mà bất kỳ gia đình nào
                cũng đặt ra trước khi quyết định an cư.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                The Link City Dầu Giây nằm ngay ngã tư QL1A và QL20 — vị trí trung tâm của huyện
                Thống Nhất, nơi hội tụ dày đặc dịch vụ thiết yếu của cả vùng. Bài viết này tổng
                hợp cụ thể những gì có trong bán kính 5km xung quanh dự án.
              </p>

              {/* Section 1 — Tổng quan */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">Tổng quan vị trí và tiện ích ngoại khu</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    The Link City tọa lạc tại ngã tư QL1A – QL20, thuộc thị trấn Dầu Giây, huyện
                    Thống Nhất, tỉnh Đồng Nai. Đây là một trong những nút giao thông huyết mạch
                    của miền Nam — nơi 3 tuyến cao tốc giao nhau và là cửa ngõ kết nối TP.HCM,
                    Biên Hòa, Vũng Tàu, Đà Lạt.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Vị trí trung tâm thị trấn đồng nghĩa với mật độ dịch vụ cao — không cần đi
                    xa để có đủ tiện ích thiết yếu phục vụ cuộc sống hàng ngày.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <StatCard value="~1–2 km" label="Đến chợ Dầu Giây" />
                    <StatCard value="~3–5 km" label="Đến bệnh viện huyện" />
                    <StatCard value="~800 m – 3 km" label="Đến trường học" />
                    <StatCard value="45 phút" label="Vào trung tâm TP.HCM" />
                  </div>

                  <InfoBox>
                    Ngoài tiện ích ngoại khu, The Link City còn tự phát triển hệ sinh thái nội khu
                    gồm 50+ tiện ích, trung tâm thương mại 2,6ha, công viên đồi cỏ và trường học
                    liên cấp ngay trong dự án.{" "}
                    <a href="/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026" className="font-bold text-amber-700 underline">
                      Xem chi tiết tiện ích nội khu →
                    </a>
                  </InfoBox>
                </div>
              </section>

              {/* Section 2 — Y tế */}
              <section className="mb-12">
                <SectionHeading id="y-te">Y tế – Bệnh viện & phòng khám</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhu cầu y tế là ưu tiên hàng đầu của các gia đình, đặc biệt những nhà có con
                    nhỏ hoặc người cao tuổi. Khu vực Dầu Giây – Thống Nhất có hệ thống y tế khá
                    hoàn thiện so với mặt bằng vùng ven.
                  </p>

                  <H3>Cơ sở y tế gần The Link City</H3>
                  <BulletList items={[
                    "Bệnh viện Đa khoa huyện Thống Nhất — bệnh viện tuyến huyện với đầy đủ khoa phòng, cách dự án khoảng 3–5km.",
                    "Trung tâm Y tế huyện Thống Nhất — hệ thống phòng khám và tiêm chủng công lập phục vụ người dân toàn huyện.",
                    "Phòng khám đa khoa tư nhân dọc QL1A — nhiều phòng khám tư tiện lợi cho các vấn đề sức khỏe thông thường, cách dự án dưới 2km.",
                    "Nha khoa, nhãn khoa, phòng khám chuyên khoa — tập trung tại khu trung tâm thị trấn Dầu Giây.",
                    "Bệnh viện Đa khoa Đồng Nai và bệnh viện lớn tại Biên Hòa — tiếp cận trong khoảng 30 phút theo cao tốc cho các ca cần chuyển viện.",
                  ]} />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS62["2"]}
                alt="Bệnh viện đa khoa gần The Link City Dầu Giây huyện Thống Nhất Đồng Nai"
                caption="Bệnh viện Đa khoa huyện Thống Nhất phục vụ chăm sóc sức khỏe cho cư dân khu vực Dầu Giây."
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 3 — Giáo dục */}
              <section className="mb-12">
                <SectionHeading id="giao-duc">Giáo dục – Trường học các cấp</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với gia đình có con nhỏ, khoảng cách đến trường là yếu tố then chốt. Khu vực
                    Dầu Giây – Thống Nhất có đủ trường học từ mầm non đến THPT, phân bổ đều quanh
                    khu dân cư.
                  </p>

                  <H3>Hệ thống giáo dục xung quanh dự án</H3>
                  <BulletList items={[
                    "Trường Mầm non và Mẫu giáo — nhiều cơ sở công lập và tư thục trong bán kính dưới 1km, phù hợp cho trẻ từ 2–5 tuổi.",
                    "Trường Tiểu học khu vực Dầu Giây — trường công lập đạt chuẩn quốc gia, cách dự án khoảng 800m–2km.",
                    "Trường THCS Dầu Giây — phục vụ học sinh cấp 2 trong vùng, cơ sở vật chất được đầu tư nâng cấp.",
                    "Trường THPT Thống Nhất A, THPT Thống Nhất B — hai trường cấp 3 chất lượng của huyện, cách khoảng 2–4km.",
                    "Trung tâm dạy nghề và giáo dục thường xuyên huyện Thống Nhất — phục vụ học nghề và bổ túc văn hóa.",
                  ]} />

                  <InfoBox>
                    Ngoài trường học ngoại khu, <strong>The Link City quy hoạch quỹ đất dành riêng
                    cho trường học liên cấp ngay trong nội khu</strong> — đây là lợi thế dài hạn
                    cho các gia đình chọn định cư tại đây.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS62["3"]}
                alt="Trường học liên cấp gần The Link City Dầu Giây Thống Nhất Đồng Nai"
                caption="Hệ thống trường học từ mầm non đến THPT phủ khắp khu vực Dầu Giây và Thống Nhất."
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 4 — Mua sắm */}
              <section className="mb-12">
                <SectionHeading id="mua-sam">Mua sắm – Chợ, siêu thị & dịch vụ</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đời sống thường ngày không thể thiếu chợ, siêu thị và các dịch vụ ăn uống,
                    giải trí. Khu vực ngã tư Dầu Giây nổi tiếng sầm uất, có lịch sử buôn bán lâu
                    đời nhờ lợi thế giao thương từ nhiều tỉnh thành đổ về.
                  </p>

                  <H3>Điểm mua sắm và dịch vụ quanh The Link City</H3>
                  <BulletList items={[
                    "Chợ Dầu Giây — chợ truyền thống họp hàng ngày, cách dự án khoảng 1–2km. Đây là chợ lớn nhất khu vực với đầy đủ thực phẩm tươi sống, hàng hóa thiết yếu.",
                    "Chuỗi siêu thị mini và cửa hàng tiện lợi — phân bổ dọc QL1A, phục vụ nhu cầu mua sắm nhanh 24/7.",
                    "Nhà hàng, quán ăn đặc sản — Dầu Giây nổi tiếng với ẩm thực đa dạng từ các tỉnh miền Đông, Tây Nguyên và TP.HCM hội tụ.",
                    "Dịch vụ ngân hàng — các chi nhánh Vietcombank, Agribank, BIDV, VietinBank đều hiện diện tại trung tâm thị trấn.",
                    "Bưu điện, hành chính công — UBND huyện Thống Nhất và các dịch vụ hành chính công trong bán kính 3km.",
                  ]} />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS62["4"]}
                alt="Chợ Dầu Giây sầm uất khu vực ngã tư QL1A Thống Nhất Đồng Nai"
                caption="Chợ Dầu Giây họp hàng ngày, đáp ứng đầy đủ nhu cầu mua sắm thực phẩm và hàng hóa cho cư dân."
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 5 — Giao thông */}
              <section className="mb-12">
                <SectionHeading id="giao-thong">Giao thông – Kết nối liên vùng</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là lợi thế lớn nhất và khó sao chép nhất của The Link City. Ngã tư Dầu
                    Giây là điểm giao thoa của 3 tuyến cao tốc lớn nhất miền Nam — tạo ra khả
                    năng kết nối vượt trội so với hầu hết các khu đô thị vùng ven khác.
                  </p>

                  <H3>Các tuyến đường kết nối từ The Link City</H3>
                  <BulletList items={[
                    <><strong>Cao tốc TP.HCM – Long Thành – Dầu Giây (VEC E4):</strong> Kết nối trực tiếp về TP.HCM trong 45–55 phút, đến sân bay Tân Sơn Nhất khoảng 60 phút.</>,
                    <><strong>Cao tốc Biên Hòa – Vũng Tàu (đang triển khai):</strong> Khi hoàn thành sẽ rút ngắn thời gian đến Vũng Tàu xuống còn 60–70 phút từ Dầu Giây.</>,
                    <><strong>Quốc lộ 1A (QL1A):</strong> Tuyến huyết mạch Bắc–Nam đi qua ngay trước dự án, kết nối Biên Hòa (25km) và Long Khánh (15km).</>,
                    <><strong>Quốc lộ 20 (QL20):</strong> Trục đường lên Đà Lạt, Di Linh — mở hướng nghỉ dưỡng và khai thác bất động sản vùng cao.</>,
                    <><strong>Cao tốc Dầu Giây – Liên Khương (quy hoạch):</strong> Khi hình thành sẽ càng củng cố vị thế trung tâm logistics của khu vực.</>,
                  ]} />

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                    {[
                      ["TP.HCM", "~45 phút"],
                      ["Biên Hòa", "~25 phút"],
                      ["Vũng Tàu", "~90 phút"],
                      ["Đà Lạt", "~2.5 giờ"],
                      ["Sân bay Long Thành", "~30 phút"],
                      ["Long Khánh", "~15 phút"],
                    ].map(([dest, time]) => (
                      <div key={dest} className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">{dest}</span>
                        <span className="text-sm font-black text-amber-600">{time}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <LinkBtn href="/tin-tuc/tong-quan-the-link-city-dau-giay">Tổng quan The Link City →</LinkBtn>
                    <LinkBtn href="/the-link-city/vi-tri">Vị trí dự án →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS62["5"]}
                alt="Cao tốc QL1A kết nối The Link City Dầu Giây với TP Hồ Chí Minh và Biên Hòa"
                caption="Cao tốc TP.HCM–Long Thành–Dầu Giây rút ngắn thời gian di chuyển xuống còn 45 phút vào trung tâm TP.HCM."
                images={images} index={4} onOpen={openLightbox}
              />

              {/* Kết luận */}
              <section className="mb-12">
                <SectionHeading>Tổng kết: Sống tại The Link City có đủ tiện ích không?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Câu trả lời là có — và điều này hiếm gặp ở một dự án tầm giá 1,85–3,8 tỷ đồng.
                    Phần lớn khu đô thị vùng ven ở phân khúc tương đương thường thiếu bệnh viện
                    gần, trường học chất lượng hoặc chợ tiện lợi.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    The Link City hưởng lợi từ vị trí trung tâm thị trấn Dầu Giây — nơi đã có sẵn
                    hạ tầng dịch vụ đô thị hình thành tự nhiên qua nhiều thập kỷ. Kết hợp với hệ
                    sinh thái tiện ích nội khu đang xây dựng, đây là điểm đến phù hợp cho cả người
                    mua để ở lẫn nhà đầu tư.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/the-link-city">Xem dự án The Link City →</LinkBtn>
                    <LinkBtn href="/the-link-city/bang-gia">Bảng giá 2026 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026">Tiện ích nội khu →</LinkBtn>
                  </div>
                </div>
              </section>

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
                    { href: "/the-link-city",                                                         label: "Tổng quan dự án The Link City" },
                    { href: "/the-link-city/tien-ich",                                                label: "Tiện ích nội khu The Link City" },
                    { href: "/the-link-city/vi-tri",                                                  label: "Vị trí & kết nối giao thông" },
                    { href: "/the-link-city/bang-gia",                                                label: "Bảng giá The Link City 2026" },
                    { href: "/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026",             label: "Hệ sinh thái 50+ tiện ích" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                              label: "Tổng quan & giá bán đợt 1" },
                    { href: "/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026",      label: "Giải pháp an cư gia đình trẻ" },
                    { href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",                  label: "Nhật ký thực địa The Link City" },
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
                  Thông tin về tiện ích ngoại khu mang tính tham khảo, tổng hợp từ nguồn công khai.
                  Khoảng cách và thời gian di chuyển là ước tính, có thể thay đổi theo thực tế.
                  Trước khi quyết định mua bất động sản, người mua nên tự khảo sát thực địa.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
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
                      { href: "/the-link-city/hinh-anh",  label: "Hình ảnh thực tế" },
                      { href: "/the-link-city/faq",       label: "FAQ dự án" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-amber-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white">
                        <span>{l.label}</span><span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Hệ sinh thái 50+ tiện ích nội khu",          href: "/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026" },
                      { label: "Nhật ký thực địa The Link City 2026",         href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026" },
                      { label: "Giải pháp an cư gia đình trẻ",               href: "/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026" },
                      { label: "Tổng quan The Link City Dầu Giây",           href: "/tin-tuc/tong-quan-the-link-city-dau-giay" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">→ {l.label}</a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn miễn phí</p>
                  <p className="text-amber-100 text-xs mb-4">Nhận thông tin pháp lý và bảng giá The Link City.</p>
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
            <h2 className="text-2xl font-black text-slate-900 mb-3">Khám phá thêm về The Link City Dầu Giây</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Vị trí ngã tư chiến lược, pháp lý sổ hồng từng nền, hạ tầng hoàn thiện 100% và
              giá từ 1,85 tỷ — The Link City là lựa chọn đáng cân nhắc cho cả ở thực lẫn đầu tư.
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
              href: "/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026",
              title: "Hệ Sinh Thái 50+ Tiện Ích The Link City Dầu Giây",
              description: "Trung tâm thương mại 2,6ha, pickleball, công viên đa thế hệ và trường học liên cấp ngay trong nội khu.",
              tag: "Tiện ích",
            },
            {
              href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",
              title: "Nhật Ký Thực Địa The Link City Dầu Giây 2026",
              description: "Ký sự một ngày tận mục sở thị: đường nhựa phẳng mịn, sổ hồng cầm tay, công viên đồi cỏ xanh mướt.",
              tag: "Thực địa",
            },
            {
              href: "/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026",
              title: "Giải Pháp An Cư Gia Đình Trẻ: Chỉ Từ 12 Triệu/Tháng",
              description: "Vốn tự có 550 triệu, trả góp 12 triệu/tháng sở hữu nhà phố 3 tầng sổ hồng riêng tại The Link City.",
              tag: "Tài chính",
            },
            {
              href: "/tin-tuc/tong-quan-the-link-city-dau-giay",
              title: "The Link City Dầu Giây – Tổng Quan & Giá Bán Đợt 1",
              description: "Tổng quan toàn diện dự án: vị trí, pháp lý sổ hồng, bảng giá từ 1,85 tỷ và tiềm năng tăng giá.",
              tag: "Dự án",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
