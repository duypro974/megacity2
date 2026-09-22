"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS57 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/lo-dat-mega-city-2-mat-tien-bao-nhieu`;
const PUBLISHED     = "20/09/2026";
const PUBLISHED_ISO = "2026-09-20";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lô đất Mega City 2 mặt tiền bao nhiêu? Hướng dẫn cách kiểm tra kích thước thực tế",
  description:
    "Tìm hiểu chính xác lô đất Mega City 2 mặt tiền bao nhiêu mét: kích thước chuẩn 5m, 6m, 10m, 15m và hướng dẫn chi tiết cách kiểm tra cọc mốc, ranh giới thực địa.",
  image: [IMG_NEWS57["1"], IMG_NEWS57["2"], IMG_NEWS57["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO,
  dateModified:  PUBLISHED_ISO,
  url: PAGE_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "lô đất Mega City 2 mặt tiền bao nhiêu, kích thước đất nền Mega City 2, cọc mốc Mega City 2, đất nền Mega City 2 Nhơn Trạch",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Lô đất nhà phố liên kế tại Mega City 2 có mặt tiền rộng bao nhiêu mét?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Các lô đất nhà phố liên kế điển hình tại Mega City 2 có mặt tiền rộng chuẩn 5,0m, chiều sâu phổ biến là 18m, 19m hoặc 20m (tổng diện tích từ 90m² đến 100m²).",
      },
    },
    {
      "@type": "Question",
      name: "Lô đất shophouse mặt tiền đường lớn Mega City 2 rộng bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Các lô đất shophouse thương mại mặt tiền các trục đại lộ 24m–32m thường có chiều rộng mặt tiền từ 5,0m đến 6,0m, chiều sâu từ 20m đến 25m, rất thuận tiện mở cửa hàng kinh doanh hoặc văn phòng công ty.",
      },
    },
    {
      "@type": "Question",
      name: "Nếu cọc mốc thửa đất bị gãy hoặc mất thì phải làm sao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chủ đất cần liên hệ với Ban quản lý dự án Kim Oanh để yêu cầu đội ngũ kỹ sư trắc địa dùng máy toàn đạc điện tử xác định lại tọa độ GPS gốc và tiến hành cắm lại cọc mốc chuẩn theo hồ sơ kỹ thuật thửa đất.",
      },
    },
    {
      "@type": "Question",
      name: "Mặt tiền 5m tại Mega City 2 có đủ chỗ cho ô tô 7 chỗ vào nhà không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoàn toàn thoải mái. Với mặt tiền rộng 5m và vỉa hè trước nhà rộng 3m–5m, gia chủ có thể thiết kế cửa chính rộng từ 3,2m–4m, đủ góc cua cho các dòng xe SUV 7 chỗ vào thẳng gara trong nhà an toàn và thuận tiện.",
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
    { "@type": "ListItem", position: 3, name: "Lô đất Mega City 2 mặt tiền bao nhiêu?", item: PAGE_URL },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS57["1"],
    alt: "Lô đất Mega City 2 mặt tiền 5m vuông vức đường nội khu hạ tầng hoàn thiện",
    caption: "Lô đất nền với đường đo kích thước: mặt tiền 5,0m và chiều dài 20,0m tại Mega City 2 Nhơn Trạch.",
  },
  {
    src: IMG_NEWS57["2"],
    alt: "So sánh kích thước mặt tiền 5m, 6m và 10m tại dự án Mega City 2",
    caption: "So sánh trực quan 3 loại mặt tiền: 5m (nhà phố), 6m (shophouse) và 10m (biệt thự song lập).",
  },
  {
    src: IMG_NEWS57["3"],
    alt: "Cọc mốc bê tông cốt thép định vị ranh giới thửa đất tại Mega City 2",
    caption: "Cọc mốc bê tông định vị ranh giới với dấu chữ thập đỏ tại đỉnh cọc — chuẩn trắc địa Mega City 2.",
  },
  {
    src: IMG_NEWS57["4"],
    alt: "Kỹ sư kiểm tra đo đạc kích thước thực tế lô đất tại Mega City 2 Nhơn Trạch",
    caption: "Kỹ sư trắc địa sử dụng máy đo laser kiểm tra kích thước mặt tiền thực địa tại Mega City 2.",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400 scroll-mt-24">
      {children}
    </h2>
  );
}

function SubHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="text-xl font-black text-slate-800 mb-3 mt-8 scroll-mt-24">
      {children}
    </h3>
  );
}

function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 transition-all">
      {children}
    </a>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────
const MAT_TIEN_TABLE = [
  { loai: "Nhà phố liên kế nhỏ",     mt: "5,0m", sau: "18,0m / 19,0m", dt: "90m²–95m²",    duong: "Đường nội bộ 13m" },
  { loai: "Nhà phố liên kế chuẩn",   mt: "5,0m", sau: "20,0m",         dt: "100m²",         duong: "Đường nội bộ 13m–17,5m" },
  { loai: "Shophouse thương mại",     mt: "5m–6m", sau: "20,0m–25,0m",  dt: "110m²–150m²",  duong: "Trục đường lớn 24m–32m" },
  { loai: "Biệt thự song lập",        mt: "10,0m", sau: "20,0m–25,0m",  dt: "200m²–250m²",  duong: "Đường 13m–20,5m" },
  { loai: "Biệt thự đơn lập",         mt: "15,0m", sau: "20,0m",         dt: "300m²",         duong: "Đường ven công viên 13m–24m" },
  { loai: "Lô góc 2 mặt tiền",        mt: "Linh hoạt", sau: "Cạnh vát theo góc cua", dt: "130m²–350m²+", duong: "Giao lộ các trục đường chính" },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function LoDatMatTienPage() {
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

        {/* ── Hero ──────────────────────────────────────────── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span className="text-slate-300">/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium line-clamp-1">Lô đất Mega City 2 mặt tiền bao nhiêu?</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Tin dự án</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 9 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-4xl">
              Lô đất Mega City 2 mặt tiền bao nhiêu? Hướng dẫn cách kiểm tra kích thước thực tế
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Tổng hợp kích thước mặt tiền chuẩn từng loại sản phẩm tại{" "}
              <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">Mega City 2 Nhơn Trạch</a>
              {" "}— từ 5m, 6m đến 10m, 15m — kèm quy trình 4 bước kiểm tra cọc mốc ranh giới thực địa chính xác nhất.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button" tabIndex={0}
              aria-label="Phóng to ảnh lô đất Mega City 2 mặt tiền"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS57["1"]}
                alt="Lô đất Mega City 2 mặt tiền 5m vuông vức đường nội khu hạ tầng hoàn thiện"
                className="w-full h-auto block"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Lô đất nền với đường đo kích thước: mặt tiền 5,0m và chiều dài 20,0m tại Mega City 2 Nhơn Trạch.
            </p>
          </div>
        </div>

        {/* ── Main layout ───────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-1.5 text-sm text-slate-600 columns-1 sm:columns-2 gap-x-8">
                  {[
                    ["#ly-do",    "Vì sao cần biết chính xác mặt tiền?"],
                    ["#tong-hop", "1. Mặt tiền từng loại sản phẩm"],
                    ["#dac-diem", "2. Đặc điểm theo từng loại mặt tiền"],
                    ["#quy-trinh","3. Quy trình 4 bước kiểm tra thực tế"],
                    ["#sai-lech", "4. Xử lý sai lệch kích thước"],
                    ["#faq",      "Câu hỏi thường gặp"],
                    ["#ket-luan", "Kết luận"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <section className="mb-12" id="ly-do">
                <SectionHeading id="ly-do">Vì sao cần biết chính xác chiều rộng mặt tiền lô đất tại Mega City 2?</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Trong bất động sản, đặc biệt là phân khúc đất nền dự án quy hoạch đô thị 1/500 như{" "}
                    <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">Mega City 2 Nhơn Trạch</a>
                    , chiều rộng mặt tiền của thửa đất là một trong những thông số hình học quan trọng nhất. Việc nắm rõ mặt tiền mang lại 3 lợi ích then chốt:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
                    {[
                      { icon: "🏠", title: "Tối ưu hóa kiến trúc", desc: "Mặt tiền 5m, 6m hay 10m quyết định cách bố trí cửa chính, gara ô tô, cầu thang và độ thông thoáng của ngôi nhà." },
                      { icon: "💰", title: "Định giá & thanh khoản", desc: "Lô đất mặt tiền rộng từ 6m+ hoặc lô góc thường có giá trị thương mại cao hơn, dễ khai thác kinh doanh." },
                      { icon: "🔒", title: "An toàn pháp lý", desc: "Phát hiện sớm sai lệch cọc mốc ranh giới, tránh tranh chấp với các lô đất kề bên trước khi khởi công." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 1: Tổng hợp */}
              <section className="mb-12" id="tong-hop">
                <SectionHeading id="tong-hop">1. Lô đất Mega City 2 mặt tiền bao nhiêu mét? (Tổng hợp theo từng loại sản phẩm)</SectionHeading>
                <div className="pt-5 space-y-6 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Theo đồ án quy hoạch chi tiết 1/500 đã được phê duyệt, chiều rộng mặt tiền tại Mega City 2 được phân chia theo <strong className="text-slate-800">5 nhóm sản phẩm chuyên biệt:</strong>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 not-prose">
                    {[
                      { mt: "5m",     label: "Nhà phố liên kế", color: "amber",  icon: "🏠" },
                      { mt: "6m",     label: "Shophouse thương mại", color: "blue", icon: "🏪" },
                      { mt: "10m",    label: "Biệt thự song lập", color: "green", icon: "🌿" },
                      { mt: "15m",    label: "Biệt thự đơn lập", color: "purple", icon: "🏡" },
                      { mt: "7m–12m", label: "Lô góc 2 mặt tiền", color: "rose",  icon: "⭐" },
                    ].map((item) => (
                      <div key={item.mt} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex items-center gap-3">
                        <div className="text-2xl flex-shrink-0">{item.icon}</div>
                        <div>
                          <p className="font-black text-amber-700 text-lg leading-none">{item.mt}</p>
                          <p className="text-slate-600 text-xs mt-0.5">{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bảng kích thước */}
                  <div className="overflow-x-auto not-prose">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[600px]">
                      <thead>
                        <tr className="bg-slate-800 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Loại sản phẩm</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Mặt tiền</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Chiều sâu</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Diện tích</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Lộ giới đường</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {MAT_TIEN_TABLE.map((row, i) => (
                          <tr key={row.loai} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700 text-xs">{row.loai}</td>
                            <td className="px-4 py-3 text-amber-700 font-bold text-sm">{row.mt}</td>
                            <td className="px-4 py-3 text-slate-600 text-xs font-mono">{row.sau}</td>
                            <td className="px-4 py-3 text-slate-600 text-xs">{row.dt}</td>
                            <td className="px-4 py-3 text-slate-500 text-xs">{row.duong}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/tin-tuc/dien-tich-dat-nen-mega-city-2">
                      📐 Mega City 2 có những diện tích nền nào? Hướng dẫn chọn diện tích theo nhu cầu →
                    </LinkBtn>
                  </div>
                </div>

                <div className="mt-6">
                  <ArticleFigure
                    src={IMG_NEWS57["2"]}
                    alt="So sánh kích thước mặt tiền 5m, 6m và 10m tại dự án Mega City 2"
                    caption="So sánh trực quan 3 loại mặt tiền: 5m (nhà phố), 6m (shophouse) và 10m (biệt thự song lập)."
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* Section 2: Đặc điểm */}
              <section className="mb-12" id="dac-diem">
                <SectionHeading id="dac-diem">2. Đặc điểm không gian kiến trúc theo từng loại mặt tiền</SectionHeading>

                <SubHeading id="mt-5m">2.1. Nhóm đất nền mặt tiền 5,0m (Mặt tiền tiêu chuẩn)</SubHeading>
                <div className="space-y-3 text-slate-600 text-[16px] leading-[1.85]">
                  <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5 space-y-2 not-prose">
                    {[
                      { label: "Đặc điểm", text: "Chiều rộng 5m là \"tỷ lệ vàng\" cho kiến trúc nhà phố đô thị hiện đại tại Việt Nam." },
                      { label: "Bố trí công năng", text: "Đủ diện tích để thiết kế cửa cuốn/cửa kính lớn, mở lối đi riêng và làm ram dốc dẫn ô tô 4–7 chỗ vào thẳng gara trong nhà." },
                      { label: "Khoảng lùi", text: "Kết hợp quy cách xây dựng Mega City 2, lùi sân trước 2,5m–3m tạo khoảng đệm cân đối, đủ trồng cây cảnh và đỗ xe máy." },
                    ].map(({ label, text }) => (
                      <div key={label} className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold text-sm flex-shrink-0 w-36">{label}</span>
                        <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/tin-tuc/quy-cach-xay-dung-mega-city-2">
                      📏 Quy cách xây dựng tại dự án Mega City 2 Nhơn Trạch →
                    </LinkBtn>
                  </div>
                </div>

                <SubHeading id="mt-6m">2.2. Nhóm đất nền mặt tiền 6,0m (Mặt tiền thương mại)</SubHeading>
                <div className="space-y-3 text-slate-600 text-[16px] leading-[1.85]">
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 space-y-2 not-prose">
                    {[
                      { label: "Vị trí", text: "Trên các trục đại lộ cảnh quan chính lộ giới 24m–32m (trục kết nối ra đường Nguyễn Hữu Cảnh và đại lộ 25C)." },
                      { label: "Bố trí công năng", text: "Mặt tiền 6m tạo không gian trưng bày cực rộng cho tầng trệt kinh doanh. Có thể chia 2 làn: 1 cửa kính cho khách vào cửa hàng và 1 lối đi riêng dẫn lên tầng gia đình." },
                    ].map(({ label, text }) => (
                      <div key={label} className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold text-sm flex-shrink-0 w-36">{label}</span>
                        <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/tin-tuc/shophouse-mega-city-2-khai-thac-kinh-doanh">
                      🏪 Shophouse Mega City 2: Khả năng khai thác kinh doanh dọc các trục đường lớn →
                    </LinkBtn>
                  </div>
                </div>

                <SubHeading id="mt-10-15m">2.3. Nhóm đất nền mặt tiền 10,0m – 15,0m (Mặt tiền biệt thự sinh thái)</SubHeading>
                <div className="space-y-3 text-slate-600 text-[16px] leading-[1.85]">
                  <div className="rounded-2xl border border-green-100 bg-green-50/50 p-5 space-y-2 not-prose">
                    {[
                      { label: "Vị trí", text: "Bố trí tại các phân khu yên tĩnh bao quanh cụm công viên hồ cảnh quan 2,1ha." },
                      { label: "Bố trí công năng", text: "Mặt tiền 10m–15m cho phép thiết kế biệt thự có khoảng lùi hông mỗi bên 1,5m–2m, đón gió mát và ánh sáng từ 3–4 hướng, bố trí được hồ cá Koi, vườn hoa và chòi nghỉ ngoài trời." },
                    ].map(({ label, text }) => (
                      <div key={label} className="flex items-start gap-3">
                        <span className="text-green-700 font-bold text-sm flex-shrink-0 w-36">{label}</span>
                        <p className="text-slate-700 text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/tin-tuc/dat-nen-nha-vuon-biet-thu-mega-city-2">
                      🌿 Đất nền nhà vườn & biệt thự Mega City 2: Đặc điểm và tiềm năng khai thác →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 3: Quy trình kiểm tra */}
              <section className="mb-12" id="quy-trinh">
                <SectionHeading id="quy-trinh">3. Hướng dẫn quy trình 4 bước kiểm tra kích thước thực tế tại Mega City 2</SectionHeading>
                <div className="pt-5 space-y-6">

                  {/* 4 bước */}
                  {[
                    {
                      step: "01",
                      title: "Chuẩn bị bản vẽ trích lục và hồ sơ kỹ thuật",
                      items: [
                        "Mang theo bản vẽ sơ đồ phân lô tỷ lệ 1/500 có dấu mộc chủ đầu tư hoặc hồ sơ kỹ thuật thửa đất đính kèm hợp đồng mua bán.",
                        "Xác định rõ mã block (ví dụ: LK12, LK15, BT02), số ô đất và hướng tiếp giáp của các lô đất liền kề trái, phải, phía sau.",
                      ],
                      imgIdx: -1,
                    },
                    {
                      step: "02",
                      title: "Tìm và kiểm tra 4 cọc mốc bê tông ranh giới",
                      items: [
                        "Tại Mega City 2, mỗi thửa đất được đơn vị trắc địa cắm 4 cọc mốc bê tông cốt thép định vị tại 4 góc ranh đất.",
                        "Cọc mốc chuẩn có dấu chữ thập (+) hoặc chấm đỏ ở đỉnh để xác định tim mốc chính xác.",
                        "Kiểm tra xem cọc mốc có bị nghiêng lệch, xê dịch hoặc bị đất đá che lấp trong quá trình thi công hạ tầng hay không.",
                      ],
                      imgIdx: 2,
                    },
                    {
                      step: "03",
                      title: "Thực hiện đo đạc chiều rộng và chiều dài",
                      items: [
                        "Đo mặt tiền phía trước: Kéo thước từ tâm cọc mốc góc trái đến cọc mốc góc phải tiếp giáp vỉa hè. Kết quả phải đạt đúng số mét trong hợp đồng (ví dụ: đủ 5,0m đối với lô liên kế hoặc 6,0m đối với lô thương mại).",
                        "Đo mặt đáy phía sau: Đảm bảo mặt sau bằng đúng mặt trước (đất vuông vức, không bị tóp hậu).",
                        "Đo chiều sâu 2 cạnh bên: Xác nhận chiều dài đúng theo hợp đồng (ví dụ: đủ 20,0m).",
                      ],
                      imgIdx: 3,
                    },
                    {
                      step: "04",
                      title: "Kiểm tra độ vuông góc và hạ tầng ngầm trước đất",
                      items: [
                        "Dùng phương pháp tam giác vuông Pythagore (3m–4m–5m) để kiểm tra góc thửa đất có bị méo hay không.",
                        "Quan sát vị trí nắp hố ga thoát nước và tủ điện hạ thế Pillar trên vỉa hè trước lô đất, đảm bảo các công trình kỹ thuật này nằm đúng ranh giới phân chia giữa hai nhà.",
                      ],
                      imgIdx: -1,
                    },
                  ].map(({ step, title, items, imgIdx }) => (
                    <div key={step} className="space-y-3">
                      <div className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500 text-white font-black text-sm flex items-center justify-center">{step}</div>
                        <div className="space-y-2">
                          <p className="font-black text-slate-800 text-base">{title}</p>
                          <ul className="space-y-1.5">
                            {items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                                <span className="text-amber-400 flex-shrink-0 mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {imgIdx >= 0 && (
                        <ArticleFigure
                          src={IMG_NEWS57[String(imgIdx + 1)]}
                          alt={LIGHTBOX_IMAGES[imgIdx].alt}
                          caption={LIGHTBOX_IMAGES[imgIdx].caption}
                          images={images}
                          index={imgIdx}
                          onOpen={openLightbox}
                        />
                      )}
                    </div>
                  ))}

                  <div className="flex flex-wrap gap-3 not-prose pt-2">
                    <LinkBtn href="/tin-tuc/checklist-nhan-nen-mega-city-2">
                      ✅ Checklist nhận nền và kiểm tra hiện trạng trước khi xây nhà tại Mega City 2 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 4: Sai lệch */}
              <section className="mb-12" id="sai-lech">
                <SectionHeading id="sai-lech">4. Những trường hợp sai lệch kích thước thường gặp và cách xử lý</SectionHeading>
                <div className="pt-5 overflow-x-auto">
                  <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[560px]">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Tình huống</th>
                        <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Nguyên nhân</th>
                        <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Hướng xử lý</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { tinh: "Cọc mốc bị mất hoặc gãy dập", ng: "Xe ủi, xe chở vật tư va quẹt làm gãy cọc mốc", xu: "Yêu cầu Ban quản lý dự án cho đội trắc địa bắn lại tọa độ định vị cọc mới" },
                        { tinh: "Kích thước đo thiếu vài centimet", ng: "Kéo thước dây bị chùng hoặc cọc mốc bị nghiêng", xu: "Dùng máy đo khoảng cách laser chuyên dụng và đo lại từ tim cọc mốc" },
                        { tinh: "Nhà bên cạnh xây lấn sang ranh đất", ng: "Đơn vị thi công nhà kế bên không đo tim mốc chuẩn", xu: "Báo ngay BQL dự án và lập biên bản hiện trạng trước khi tiến hành xây dựng" },
                      ].map((row, i) => (
                        <tr key={row.tinh} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                          <td className="px-4 py-3 font-semibold text-slate-700 text-xs">{row.tinh}</td>
                          <td className="px-4 py-3 text-slate-600 text-xs">{row.ng}</td>
                          <td className="px-4 py-3 text-amber-700 text-xs">{row.xu}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex flex-wrap gap-3 not-prose mt-4">
                    <LinkBtn href="/tin-tuc/thu-tuc-chuyen-nhuong-mega-city-2">
                      📋 Thủ tục sang tên & chuyển nhượng đất nền Mega City 2 mới nhất →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">Câu hỏi thường gặp về mặt tiền lô đất Mega City 2</SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details key={name} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-amber-300 transition-colors">
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-amber-700 select-none">
                        <span className="leading-snug">{name}</span>
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-5 text-slate-600 text-[15px] leading-relaxed border-t border-slate-100 pt-4">
                        {acceptedAnswer.text}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Kết luận + CTA */}
              <section className="mb-12" id="ket-luan">
                <SectionHeading id="ket-luan">Kết luận</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Câu trả lời cho câu hỏi <strong className="text-slate-800">lô đất Mega City 2 mặt tiền bao nhiêu</strong> rất đa dạng — phổ biến nhất là mặt tiền <strong className="text-slate-800">5,0m</strong> cho nhà phố liên kế chuẩn, <strong className="text-slate-800">6,0m</strong> cho shophouse thương mại và từ <strong className="text-slate-800">10,0m đến 15,0m</strong> cho biệt thự sinh thái. Việc chủ động kiểm tra cọc mốc ranh giới theo quy trình 4 bước sẽ giúp chủ sở hữu hoàn toàn an tâm về tính chuẩn xác của tài sản, tạo nền tảng vững chắc cho công tác thiết kế và khởi công xây dựng.
                  </p>

                  <div className="rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-7 text-white not-prose">
                    <p className="font-black text-lg mb-2">Cần hỗ trợ kiểm tra thực địa cọc mốc tại Mega City 2?</p>
                    <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                      Nếu bạn muốn đặt lịch hỗ trợ nhân viên kỹ thuật đo đạc cọc mốc hoặc cần trích lục bản vẽ kỹ thuật phân lô tại Mega City 2 Nhơn Trạch:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
                        🏙️ Xem thông tin Mega City 2 →
                      </a>
                      <a href="tel:0937587438" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
                        📞 Gọi tư vấn ngay
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-3">
                      {[
                        { href: "/mega-city-2/bang-gia", label: "Bảng giá mới nhất" },
                        { href: "/mega-city-2/phap-ly", label: "Pháp lý dự án" },
                        { href: "/tin-tuc/tien-do-mega-city-2", label: "Tiến độ mới nhất" },
                      ].map(({ href, label }) => (
                        <a key={href} href={href} className="text-slate-400 hover:text-white text-xs transition-colors">
                          → {label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

            </article>

            {/* ── Sidebar ───────────────────────────────────── */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-6">

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-black text-amber-900 text-sm mb-3 uppercase tracking-wider">📐 Tóm tắt mặt tiền</p>
                  <div className="space-y-2">
                    {[
                      { label: "Nhà phố liên kế", val: "5,0m" },
                      { label: "Shophouse thương mại", val: "5m – 6m" },
                      { label: "Biệt thự song lập", val: "10,0m" },
                      { label: "Biệt thự đơn lập", val: "15,0m" },
                      { label: "Lô góc 2 mặt tiền", val: "7m – 12m/cạnh" },
                    ].map(({ label, val }) => (
                      <div key={label} className="flex justify-between items-center text-sm border-b border-amber-100 pb-2 last:border-0">
                        <span className="text-slate-700 text-xs">{label}</span>
                        <span className="text-amber-700 font-black">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-900 p-5 text-white">
                  <p className="font-black text-base mb-2">Xem dự án Mega City 2</p>
                  <p className="text-slate-400 text-xs mb-4 leading-relaxed">Bảng giá, sơ đồ phân lô và tiến độ mới nhất 2026.</p>
                  <a href="/mega-city-2" className="block text-center bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm py-2.5 px-4 rounded-xl transition-colors">
                    Xem dự án →
                  </a>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Bài viết liên quan</p>
                  <ul className="space-y-2">
                    {[
                      { href: "/tin-tuc/dien-tich-dat-nen-mega-city-2", label: "Diện tích nền Mega City 2: Các loại & cách chọn" },
                      { href: "/tin-tuc/checklist-nhan-nen-mega-city-2", label: "Checklist nhận nền Mega City 2" },
                      { href: "/tin-tuc/chi-phi-xay-nha-mega-city-2", label: "Chi phí xây nhà tại Mega City 2" },
                      { href: "/mega-city-2/bang-gia", label: "Bảng giá Mega City 2 mới nhất" },
                      { href: "/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach", label: "Mặt bằng phân lô Mega City 2" },
                    ].map(({ href, label }) => (
                      <li key={href}>
                        <a href={href} className="text-sm text-slate-600 hover:text-amber-600 transition-colors leading-snug block">
                          → {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </aside>

          </div>
        </div>

        <RelatedContent
          title="Tìm hiểu thêm về Mega City 2 Nhơn Trạch"
          items={[
            {
              href: "/mega-city-2",
              title: "Tổng quan dự án Mega City 2 Nhơn Trạch",
              description: "Khu đô thị 84ha, 3.160 sản phẩm đất nền với hạ tầng đồng bộ, công viên 2,1ha và đường nội khu rộng đến 32m.",
              tag: "Dự án",
            },
            {
              href: "/tin-tuc/dien-tich-dat-nen-mega-city-2",
              title: "Mega City 2 có những diện tích nền nào?",
              description: "Tổng hợp 4 nhóm diện tích nền: 90m², 100m², 120m²–150m² và 200m²–300m² kèm hướng dẫn chọn theo nhu cầu.",
              tag: "Diện tích",
            },
            {
              href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2",
              title: "Hạ tầng kỹ thuật Mega City 2: Điện âm, nước máy và thoát nước",
              description: "Chi tiết hệ thống hạ tầng kỹ thuật ngầm đã hoàn thiện 100% tại dự án Mega City 2 Nhơn Trạch.",
              tag: "Hạ tầng",
            },
          ]}
        />

      </div>
      <CorpFooter />
    </>
  );
}
