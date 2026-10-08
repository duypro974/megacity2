"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS73 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/ha-tang-ky-thuat-the-link-city-dau-giay`;
const PUBLISHED     = "08/10/2026";
const PUBLISHED_ISO = "2026-10-08";

// ─────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hạ Tầng Kỹ Thuật The Link City Dầu Giây: Đường Nhựa, Điện Âm, Nước Máy & Thoát Nước Đã Hoàn Thiện 100%",
  description: "Hạ tầng kỹ thuật The Link City Dầu Giây hoàn thiện 100%: đường nội khu nhựa phẳng, điện âm đô thị, nước máy đến từng lô và hệ thống thoát nước đồng bộ — tiêu chuẩn khu đô thị chính thức, không phải đất tự phát.",
  image: [IMG_NEWS73["1"], IMG_NEWS73["2"], IMG_NEWS73["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "hạ tầng the link city, the link city hạ tầng hoàn thiện, đường nội khu the link city, hạ tầng kỹ thuật dầu giây, điện âm nước máy the link city",
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
      name: "Hạ tầng kỹ thuật The Link City Dầu Giây đã hoàn thiện chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Tính đến thời điểm bàn giao, hạ tầng kỹ thuật The Link City đã hoàn thiện 100% gồm: đường nội khu trải nhựa hoàn chỉnh, hệ thống điện âm theo tiêu chuẩn đô thị, nước máy đấu nối đến từng lô và hệ thống thoát nước ngầm đồng bộ. Đây là cam kết được ghi rõ trong hợp đồng.",
      },
    },
    {
      "@type": "Question",
      name: "Đường nội khu The Link City rộng bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đường nội khu chính tại The Link City Dầu Giây có mặt cắt từ 7,5m đến 20m tùy tuyến, trong đó bao gồm phần lòng đường nhựa, vỉa hè lát gạch và dải cây xanh hai bên. Thiết kế theo tiêu chuẩn đô thị loại IV–V, đảm bảo lưu thông hai chiều thuận tiện.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City có điện âm không? Có bị cột điện che khuất mặt tiền không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City triển khai hệ thống điện ngầm (điện âm) toàn bộ nội khu — không có cột điện nổi dọc đường. Tủ điện kỹ thuật và đèn đường LED được lắp đặt theo tiêu chuẩn đô thị, đảm bảo thẩm mỹ và an toàn. Đây là điểm khác biệt lớn so với đất thổ cư tự phát.",
      },
    },
    {
      "@type": "Question",
      name: "Nước máy tại The Link City đã có sẵn chưa hay phải chờ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hệ thống cấp nước sạch tại The Link City đã được đấu nối đến từng lô, có đồng hồ nước riêng cho từng ô đất. Nguồn nước từ mạng lưới cấp nước huyện Thống Nhất do đơn vị cấp nước Nhà nước quản lý, đảm bảo ổn định và liên tục.",
      },
    },
    {
      "@type": "Question",
      name: "Hạ tầng The Link City khác gì so với đất thổ cư tự phát?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đất thổ cư tự phát thường không có hạ tầng đồng bộ: đường đất hoặc đường bê-tông mỏng, điện kéo nổi qua cột tạm, không có nước máy hoặc phải đào giếng, thoát nước tự chảy. The Link City là khu đô thị được quy hoạch chính thức — toàn bộ hạ tầng kỹ thuật ngầm được đầu tư bài bản trước khi bàn giao, người mua không cần tốn thêm chi phí hoàn thiện hạ tầng.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Hạ tầng kỹ thuật The Link City", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS73["1"], alt: "Đường nội khu The Link City Dầu Giây nhựa phẳng vỉa hè cây xanh đèn đường",      caption: "Đường nội khu The Link City trải nhựa phẳng hoàn chỉnh, vỉa hè lát gạch và cây xanh hai bên — hạ tầng đô thị đồng bộ." },
  { src: IMG_NEWS73["2"], alt: "Hệ thống cống thoát nước hố ga nội khu The Link City Dầu Giây",                   caption: "Hệ thống cống thoát nước ngầm và hố ga được lắp đặt đồng bộ dọc các tuyến đường nội khu." },
  { src: IMG_NEWS73["3"], alt: "Tủ điện kỹ thuật điện âm đèn đường LED The Link City Dầu Giây",                   caption: "Điện âm toàn bộ nội khu — tủ điện kỹ thuật và đèn đường LED tiêu chuẩn đô thị, không cột điện nổi." },
  { src: IMG_NEWS73["4"], alt: "Đồng hồ nước trạm cấp nước từng lô The Link City Dầu Giây",                       caption: "Đồng hồ nước riêng từng lô, đấu nối trực tiếp vào mạng lưới cấp nước sạch huyện Thống Nhất." },
  { src: IMG_NEWS73["5"], alt: "Toàn cảnh đường nội khu The Link City Dầu Giây hạ tầng hoàn thiện",              caption: "Toàn cảnh hạ tầng nội khu The Link City — hình ảnh thực tế tại dự án, không phải phối cảnh." },
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
function CompareRow({ label, tlc, dat }: { label: string; tlc: string; dat: string }) {
  return (
    <tr className="border-b border-slate-100 last:border-0">
      <td className="py-3 px-4 text-sm font-semibold text-slate-700">{label}</td>
      <td className="py-3 px-4 text-sm text-green-700 font-bold">{tlc}</td>
      <td className="py-3 px-4 text-sm text-red-500">{dat}</td>
    </tr>
  );
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export default function HaTangKyThuatTLCPage() {
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
              <span className="text-slate-600 font-medium">Hạ tầng kỹ thuật</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">The Link City</span>
              <span className="inline-block bg-green-100 text-green-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Hạ tầng</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 7 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Hạ Tầng Kỹ Thuật The Link City Dầu Giây: Đường Nhựa, Điện Âm, Nước Máy & Thoát Nước Đã Hoàn Thiện 100%
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Lợi thế cạnh tranh số 1 của The Link City so với đất thổ cư tự phát: toàn bộ hạ tầng
              kỹ thuật đã hoàn thiện đồng bộ trước khi bàn giao — người mua không phải tự lo đường,
              điện, nước hay hệ thống thoát nước.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh đường nội khu The Link City"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS73["1"]}
                alt="Đường nội khu The Link City Dầu Giây nhựa phẳng vỉa hè cây xanh đèn đường"
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
              Đường nội khu The Link City Dầu Giây — trải nhựa hoàn chỉnh, vỉa hè lát gạch, cây xanh hai bên và đèn đường LED.
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
                    ["#tong-quan",   "1. Tổng quan hạ tầng kỹ thuật The Link City"],
                    ["#duong",       "2. Đường nội khu — nhựa phẳng, vỉa hè, cây xanh"],
                    ["#dien",        "3. Điện âm — tiêu chuẩn đô thị, không cột điện nổi"],
                    ["#nuoc",        "4. Nước máy — đấu nối đến từng lô"],
                    ["#thoat-nuoc",  "5. Thoát nước — hệ thống ngầm đồng bộ"],
                    ["#so-sanh",     "6. So sánh với đất thổ cư tự phát"],
                    ["#faq",         "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Khi so sánh The Link City Dầu Giây với đất thổ cư tự phát cùng khu vực, câu hỏi
                thực tế nhất mà người mua đặt ra thường là: <em>"Hạ tầng đã có chưa? Hay mua về
                còn phải tự lo điện, nước, đường?"</em>
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Bài viết này trả lời trực tiếp — với hình ảnh thực tế, thông số kỹ thuật cụ thể
                và so sánh có hệ thống với các loại đất khác cùng phân khúc.
              </p>

              {/* Section 1 — Tổng quan */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">Tổng quan hạ tầng kỹ thuật The Link City</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    The Link City là khu đô thị được quy hoạch theo tiêu chuẩn đô thị loại IV–V,
                    được phê duyệt quy hoạch 1/500 và cấp phép đầu tư chính thức bởi UBND tỉnh
                    Đồng Nai. Điều này có nghĩa là chủ đầu tư Kim Oanh Group có nghĩa vụ pháp lý
                    hoàn thiện toàn bộ hạ tầng kỹ thuật trước khi bàn giao nền đất cho khách hàng.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tính đến thời điểm mở bán và bàn giao, 4 hạng mục hạ tầng cốt lõi đã được
                    hoàn thiện 100%:
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <StatCard value="100%" label="Đường nội khu nhựa phẳng" />
                    <StatCard value="100%" label="Hệ thống điện âm" />
                    <StatCard value="100%" label="Nước máy đến từng lô" />
                    <StatCard value="100%" label="Cống thoát nước ngầm" />
                  </div>

                  <InfoBox>
                    <strong>Lưu ý quan trọng:</strong> Đây không phải hạ tầng "đang làm" hay "sẽ
                    có". Khi bạn ký hợp đồng mua nền tại The Link City, hạ tầng kỹ thuật đã
                    hiện hữu thực tế — bạn có thể đến tham quan và kiểm chứng trực tiếp tại
                    công trường.
                  </InfoBox>
                </div>
              </section>

              {/* Section 2 — Đường */}
              <section className="mb-12">
                <SectionHeading id="duong">Đường nội khu — nhựa phẳng, vỉa hè, cây xanh</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hệ thống đường nội khu là hạ tầng dễ quan sát nhất và cũng là yếu tố tạo ra
                    giá trị lớn nhất cho từng lô nền. Tại The Link City, toàn bộ mạng lưới đường
                    nội khu được trải nhựa đồng bộ theo tiêu chuẩn quy hoạch đô thị được phê duyệt.
                  </p>

                  <H3>Thông số đường nội khu</H3>
                  <BulletList items={[
                    <><strong>Đường trục chính:</strong> Mặt cắt 20m — bao gồm 2 làn xe cơ giới (7m), dải phân cách (2m), vỉa hè hai bên và dải cây xanh.</>,
                    <><strong>Đường nhánh thứ cấp:</strong> Mặt cắt 13,5m – 15m — đủ lưu thông hai chiều thoải mái, không cần tránh nhau.</>,
                    <><strong>Đường nội bộ:</strong> Mặt cắt 7,5m – 10,5m — phù hợp lưu thông ô tô, xe máy trong khu dân cư.</>,
                    "Vỉa hè lát gạch block đồng bộ theo thiết kế — không phải đổ bê-tông tạm.",
                    "Cây xanh đường phố trồng đúng khoảng cách theo quy hoạch — đảm bảo bóng mát và thẩm mỹ sau 3–5 năm.",
                    "Đèn đường LED được lắp đặt đồng bộ theo tiêu chuẩn chiếu sáng đô thị — đảm bảo an toàn ban đêm.",
                  ]} />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS73["1"]}
                alt="Đường nội khu The Link City Dầu Giây nhựa phẳng vỉa hè cây xanh đèn đường"
                caption="Đường nội khu The Link City trải nhựa phẳng hoàn chỉnh, vỉa hè lát gạch và hàng cây xanh hai bên."
                images={images} index={0} onOpen={openLightbox}
              />

              {/* Section 3 — Điện */}
              <section className="mb-12">
                <SectionHeading id="dien">Điện âm — tiêu chuẩn đô thị, không cột điện nổi</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một trong những điểm khác biệt rõ nhất khi đứng trong khuôn viên The Link City
                    so với khu dân cư tự phát xung quanh: <strong>không có cột điện nổi nào dọc
                    đường nội khu</strong>. Toàn bộ hệ thống điện được triển khai ngầm dưới lòng đất
                    (điện âm) theo tiêu chuẩn khu đô thị.
                  </p>

                  <H3>Hệ thống điện nội khu gồm những gì</H3>
                  <BulletList items={[
                    "Đường dây điện trung thế và hạ thế được chôn ngầm toàn bộ — không có dây điện giăng trên đường.",
                    "Trạm biến áp khu vực được bố trí trong tủ hợp bộ kỹ thuật, giải phóng không gian mặt tiền.",
                    "Tủ điện phân phối được lắp đặt tại vị trí kỹ thuật theo quy hoạch, đảm bảo cấp điện đến từng lô.",
                    "Đèn đường LED tiêu chuẩn đô thị — điều khiển tự động theo giờ, tuổi thọ cao, tiết kiệm điện.",
                    "Hệ thống tiếp đất và chống sét theo tiêu chuẩn an toàn điện quốc gia.",
                  ]} />

                  <InfoBox>
                    So sánh thực tế: Một lô đất thổ cư tự phát thường phải chi <strong>30–80 triệu đồng</strong>{" "}
                    để kéo điện từ trục chính, xin đấu nối và lắp đặt hệ thống điện nhánh. Tại
                    The Link City, chi phí này được bao gồm trong giá nền — không phát sinh sau khi mua.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS73["3"]}
                alt="Tủ điện kỹ thuật điện âm đèn đường LED The Link City Dầu Giây"
                caption="Hệ thống điện âm và tủ điện kỹ thuật đô thị — không có cột điện nổi dọc đường nội khu The Link City."
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 4 — Nước */}
              <section className="mb-12">
                <SectionHeading id="nuoc">Nước máy — đấu nối đến từng lô</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cấp nước sạch là yếu tố thiết yếu mà nhiều khu đất tự phát vùng ven không thể
                    đảm bảo — người dân phải khoan giếng hoặc chờ đường ống kéo đến, đôi khi mất
                    nhiều năm. Tại The Link City, hệ thống cấp nước đã hoàn thiện và đấu nối trực
                    tiếp đến từng lô đất.
                  </p>

                  <H3>Chi tiết hệ thống cấp nước</H3>
                  <BulletList items={[
                    "Nguồn nước từ mạng lưới cấp nước sạch huyện Thống Nhất — do Công ty Cấp nước Đồng Nai quản lý và vận hành.",
                    "Đường ống cấp nước chính chôn ngầm dọc các tuyến đường nội khu theo quy hoạch.",
                    "Đồng hồ nước riêng lắp đặt tại từng lô — theo dõi và thanh toán tiền nước độc lập như nhà phố đô thị.",
                    "Áp lực nước đảm bảo cấp lên đến tầng 3–4 mà không cần bơm tăng áp trong hầu hết trường hợp.",
                    "Hệ thống đường ống và van xả được thiết kế để duy tu, bảo trì dễ dàng về lâu dài.",
                  ]} />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS73["4"]}
                alt="Đồng hồ nước trạm cấp nước từng lô The Link City Dầu Giây"
                caption="Đồng hồ nước riêng từng lô tại The Link City — đấu nối trực tiếp vào mạng cấp nước sạch huyện Thống Nhất."
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 5 — Thoát nước */}
              <section className="mb-12">
                <SectionHeading id="thoat-nuoc">Thoát nước — hệ thống ngầm đồng bộ</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ngập úng sau mưa là vấn đề phổ biến ở nhiều khu dân cư vùng ven không có quy
                    hoạch thoát nước bài bản. Tại The Link City, hệ thống thoát nước được thiết kế
                    và thi công đồng bộ với toàn bộ hạ tầng nội khu ngay từ đầu.
                  </p>

                  <H3>Cấu trúc hệ thống thoát nước</H3>
                  <BulletList items={[
                    "Cống thoát nước mưa chôn ngầm dọc toàn bộ các tuyến đường nội khu — hộ ga thu nước được bố trí đúng khoảng cách thiết kế.",
                    "Mương thoát nước có nắp đậy dọc vỉa hè — thu nước bề mặt và dẫn về cống chính hiệu quả.",
                    "Hướng thoát nước được thiết kế theo cao độ địa hình tự nhiên và điểm xả ra hệ thống thoát nước đô thị huyện.",
                    "Không có hiện tượng tích nước cục bộ trong khu — đường nội khu không bị ngập sau mưa lớn.",
                    "Hệ thống thoát nước thải sinh hoạt tách biệt với thoát nước mưa — đảm bảo vệ sinh môi trường.",
                  ]} />
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS73["2"]}
                alt="Hệ thống cống thoát nước hố ga nội khu The Link City Dầu Giây"
                caption="Hệ thống cống thoát nước ngầm và hố ga thu nước — lắp đặt đồng bộ dọc đường nội khu The Link City."
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 6 — So sánh */}
              <section className="mb-12">
                <SectionHeading id="so-sanh">So sánh với đất thổ cư tự phát cùng khu vực</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Người mua thường so sánh The Link City với đất thổ cư dân tự phân lô gần đó
                    vì giá danh nghĩa đôi khi thấp hơn. Nhưng khi tính đủ chi phí hoàn thiện hạ
                    tầng sau khi mua, khoảng cách giá thực tế thường thu hẹp đáng kể — thậm chí
                    đảo ngược.
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="py-3 px-4 text-left font-bold text-slate-700">Tiêu chí</th>
                          <th className="py-3 px-4 text-left font-bold text-amber-700">The Link City</th>
                          <th className="py-3 px-4 text-left font-bold text-slate-500">Đất thổ cư tự phát</th>
                        </tr>
                      </thead>
                      <tbody>
                        <CompareRow label="Đường nội khu" tlc="Nhựa phẳng, vỉa hè, cây xanh" dat="Đường đất hoặc bê-tông mỏng tạm" />
                        <CompareRow label="Hệ thống điện" tlc="Điện âm ngầm, không cột điện nổi" dat="Dây điện nổi qua cột tạm, kéo ngoại vi" />
                        <CompareRow label="Cấp nước" tlc="Nước máy đến từng lô, có đồng hồ" dat="Khoan giếng hoặc chờ đấu nối" />
                        <CompareRow label="Thoát nước" tlc="Cống ngầm đồng bộ, không ngập" dat="Thoát nước tự chảy, dễ ngập úng" />
                        <CompareRow label="Chi phí hoàn thiện HT" tlc="0 đồng — đã bao gồm trong giá" dat="30–200 triệu đồng tùy vị trí" />
                        <CompareRow label="Pháp lý hạ tầng" tlc="Được cấp phép, nghiệm thu chính thức" dat="Không có hồ sơ kỹ thuật" />
                      </tbody>
                    </table>
                  </div>

                  <InfoBox>
                    Chi phí hoàn thiện hạ tầng cho một lô đất tự phát vùng ven thường dao động
                    <strong> 80–200 triệu đồng</strong> (kéo điện, khoan giếng/đấu nước, làm đường
                    bê-tông hẻm, chi phí không tên khác) — khoản này không xuất hiện khi mua nền
                    tại The Link City.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS73["5"]}
                alt="Toàn cảnh đường nội khu The Link City Dầu Giây hạ tầng hoàn thiện"
                caption="Toàn cảnh hạ tầng nội khu The Link City Dầu Giây — hình ảnh thực tế tại dự án."
                images={images} index={4} onOpen={openLightbox}
              />

              {/* Kết luận */}
              <section className="mb-12">
                <SectionHeading>Tổng kết: Hạ tầng hoàn thiện tạo ra giá trị thực</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hạ tầng kỹ thuật hoàn thiện không chỉ mang lại tiện nghi sống — nó còn là
                    yếu tố bảo vệ giá trị bất động sản theo thời gian. Một lô nền có đường nhựa,
                    điện âm, nước máy và thoát nước đầy đủ luôn có thanh khoản tốt hơn và giữ
                    giá bền hơn so với đất chưa có hạ tầng.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    The Link City Dầu Giây là một trong số ít dự án đất nền tầm giá 1,85–3,8 tỷ
                    đồng tại miền Nam đáp ứng đầy đủ 4 tiêu chí hạ tầng cốt lõi này ngay từ khi
                    bàn giao — không phải cam kết tương lai, mà là thực tế có thể kiểm chứng ngay.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/the-link-city">Xem dự án The Link City →</LinkBtn>
                    <LinkBtn href="/the-link-city/bang-gia">Bảng giá 2026 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/tien-do-the-link-city-dau-giay">Tiến độ xây dựng →</LinkBtn>
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
                    { href: "/the-link-city",                                                           label: "Tổng quan dự án The Link City" },
                    { href: "/the-link-city/phap-ly",                                                   label: "Pháp lý dự án" },
                    { href: "/tin-tuc/tien-do-the-link-city-dau-giay",                                  label: "Tiến độ xây dựng thực tế" },
                    { href: "/the-link-city/bang-gia",                                                   label: "Bảng giá The Link City 2026" },
                    { href: "/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026",               label: "Hệ sinh thái 50+ tiện ích nội khu" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                                label: "Tổng quan & giá bán đợt 1" },
                    { href: "/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026",      label: "So sánh TLC vs đất thổ cư" },
                    { href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",                    label: "Nhật ký thực địa The Link City" },
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
                  Thông tin hạ tầng kỹ thuật tổng hợp từ tài liệu dự án và khảo sát thực địa. Thông số
                  kỹ thuật cụ thể (mặt cắt đường, áp lực nước...) có thể thay đổi theo từng phân khu
                  và điều chỉnh thiết kế. Người mua nên yêu cầu tư vấn viên cung cấp hồ sơ kỹ thuật
                  cụ thể trước khi ký hợp đồng.
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
                      { href: "/the-link-city",            label: "Tổng quan dự án" },
                      { href: "/the-link-city/vi-tri",     label: "Vị trí & Kết nối" },
                      { href: "/the-link-city/phap-ly",    label: "Pháp lý dự án" },
                      { href: "/the-link-city/tien-ich",   label: "Tiện ích nội khu" },
                      { href: "/the-link-city/bang-gia",   label: "Bảng giá 2026" },
                      { href: "/the-link-city/mat-bang",   label: "Mặt bằng phân lô" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 transition-colors py-1">
                        <span className="text-amber-400">›</span> {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-bold text-amber-800 text-sm mb-2">Tư vấn trực tiếp</p>
                  <p className="text-xs text-amber-700 mb-4 leading-relaxed">
                    Muốn xem thực địa hạ tầng The Link City? Đội ngũ Kim Oanh hỗ trợ đưa đón tham quan miễn phí.
                  </p>
                  <a href="/the-link-city#lien-he"
                    className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-4 py-3 rounded-xl transition-colors">
                    Đăng ký tham quan →
                  </a>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { href: "/tin-tuc/tien-do-the-link-city-dau-giay",                           label: "Tiến độ xây dựng thực tế" },
                      { href: "/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026", label: "Hồ sơ pháp lý CV 2505" },
                      { href: "/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026", label: "So sánh TLC vs đất thổ cư" },
                      { href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",             label: "Nhật ký thực địa" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-start gap-2 text-xs text-slate-600 hover:text-amber-600 transition-colors leading-snug">
                        <span className="text-amber-400 mt-0.5 flex-shrink-0">→</span>
                        <span>{l.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>

      <RelatedContent
        title="Bài viết liên quan"
        items={[
          {
            href: "/tin-tuc/tien-do-the-link-city-dau-giay",
            title: "Tiến Độ Xây Dựng The Link City Dầu Giây",
            description: "Cập nhật tiến độ thi công thực tế tại The Link City — hình ảnh hiện trường mới nhất.",
            tag: "Tiến độ",
          },
          {
            href: "/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026",
            title: "So Sánh The Link City vs Đất Thổ Cư Tự Phát Dầu Giây 2026",
            description: "Phân tích 7 tiêu chí: pháp lý, hạ tầng, giá thực sự và khả năng tăng giá — ai thắng?",
            tag: "Phân tích",
          },
          {
            href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",
            title: "Nhật Ký Thực Địa The Link City Dầu Giây 2026",
            description: "Ký sự một ngày tận mục sở thị: đường nhựa phẳng mịn, sổ hồng cầm tay, công viên đồi cỏ xanh mướt.",
            tag: "Thực địa",
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
    </>
  );
}
