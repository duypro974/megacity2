"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { TLC_PROGRESS } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/tien-do-the-link-city-dau-giay`;
const PUBLISHED     = "25/09/2026";
const PUBLISHED_ISO = "2026-09-25";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type":    "NewsArticle",
  headline:   "Tiến độ The Link City Dầu Giây 09/2026: Hạ tầng hoàn thiện, chờ trạm XLNT để mở bán lại",
  description:
    "Cập nhật tiến độ The Link City Dầu Giây tháng 9/2026: toàn bộ hạ tầng kỹ thuật đã hoàn thiện. Dự án đang chờ trạm xử lý nước thải hoàn tất để chính thức mở bán trở lại.",
  image: [TLC_PROGRESS["1"], TLC_PROGRESS["2"]],
  author:    { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url:  BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished:    PUBLISHED_ISO,
  dateModified:     PUBLISHED_ISO,
  url:              PAGE_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "tiến độ The Link City Dầu Giây, The Link City mở bán lại, trạm xử lý nước thải The Link City, hạ tầng hoàn thiện The Link City",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Tiến độ The Link City Dầu Giây tháng 9/2026 như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tính đến tháng 9/2026, toàn bộ hạ tầng kỹ thuật The Link City Dầu Giây đã hoàn thiện. Dự án hiện đang chờ trạm xử lý nước thải hoàn tất thủ tục để chính thức mở bán trở lại.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City khi nào mở bán lại?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City sẽ mở bán trở lại sau khi trạm xử lý nước thải hoàn tất. Đây là điều kiện cuối cùng trước khi dự án chính thức triển khai bán hàng đợt tiếp theo. Liên hệ 0937.587.438 để nhận thông báo ngay khi có lịch mở bán.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City đã được cấp sổ hồng chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo thông tin công bố, một số sản phẩm The Link City đã được cấp Giấy chứng nhận quyền sử dụng đất (sổ hồng riêng từng nền). Tình trạng GCN từng lô cụ thể cần xác nhận trực tiếp với đơn vị phát triển.",
      },
    },
    {
      "@type": "Question",
      name: "Hạ tầng The Link City đã hoàn thiện những gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hạ tầng The Link City đã hoàn thiện bao gồm: đường nội khu, hệ thống điện ngầm, cấp thoát nước, vỉa hè và cây xanh. Phần còn lại duy nhất đang chờ là trạm xử lý nước thải.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức",   item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Tiến độ The Link City 09/2026", item: PAGE_URL },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src:     TLC_PROGRESS["1"],
    alt:     "Hạ tầng The Link City Dầu Giây đã hoàn thiện tháng 9/2026",
    caption: "Hạ tầng kỹ thuật The Link City Dầu Giây đã hoàn thiện — đường nội khu, điện nước, vỉa hè.",
  },
  {
    src:     TLC_PROGRESS["2"],
    alt:     "Đường nội khu The Link City Dầu Giây hoàn thiện",
    caption: "Đường nhựa và vỉa hè nội khu The Link City đã hoàn thiện theo quy hoạch.",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-primary-400 scroll-mt-24">
      {children}
    </h2>
  );
}

function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" | "success" }) {
  const s = type === "warn"    ? "bg-amber-50 border-amber-200 text-amber-800"
          : type === "success" ? "bg-green-50 border-green-200 text-green-800"
          : "bg-slate-50 border-slate-200 text-slate-700";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}

function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-bold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">
      {children}
    </a>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function TienDoTheLinkCityPage() {
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

        {/* ── Hero ── */}
        <div className="bg-gradient-to-b from-emerald-50 to-white border-b border-emerald-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a>
              <span className="text-slate-300">/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium">Tiến độ The Link City 09/2026</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Tiến độ
              </span>
              <span className="inline-block bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                The Link City
              </span>
              <span className="inline-block bg-red-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Mới nhất
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 4 phút đọc</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-4xl">
              Tiến Độ The Link City Dầu Giây Tháng 9/2026: Hạ Tầng Đã Hoàn Thiện — Chờ Trạm Xử Lý Nước Thải Để Mở Bán Lại
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Cập nhật mới nhất về tiến độ{" "}
              <a href="/the-link-city" className="text-primary-600 font-semibold hover:underline">
                The Link City Dầu Giây
              </a>
              {" "}tháng 9/2026: toàn bộ hạ tầng kỹ thuật đã hoàn thiện. Dự án đang chờ trạm xử lý nước thải
              hoàn tất để chính thức mở bán trở lại.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button" tabIndex={0}
              aria-label="Phóng to ảnh tiến độ The Link City"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={TLC_PROGRESS["1"]}
                alt="Hạ tầng The Link City Dầu Giây đã hoàn thiện tháng 9/2026"
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
              Hạ tầng kỹ thuật The Link City Dầu Giây đã hoàn thiện — đường nội khu, điện nước, vỉa hè. Ảnh tháng 9/2026.
            </p>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            <article className="flex-1 min-w-0">

              {/* Banner trạng thái nổi bật */}
              <div className="rounded-2xl bg-emerald-600 p-5 mb-10 flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">✅</div>
                <div>
                  <p className="text-white font-black text-base mb-1">Hạ tầng đã hoàn thiện toàn bộ</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Đường nội khu, điện ngầm, cấp thoát nước, vỉa hè và cây xanh — tất cả đã hoàn thiện.
                    Dự án hiện đang chờ <strong className="text-white">trạm xử lý nước thải</strong> hoàn tất
                    để chính thức mở bán trở lại.
                  </p>
                </div>
              </div>

              {/* TOC */}
              <nav aria-label="Mục lục" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-1.5 text-sm text-slate-600">
                  {[
                    ["#trang-thai",  "Trạng thái tiến độ hiện tại"],
                    ["#ha-tang",     "1. Hạ tầng đã hoàn thiện"],
                    ["#xlnt",        "2. Trạm xử lý nước thải — điều kiện cuối"],
                    ["#mo-ban",      "3. Khi nào mở bán lại?"],
                    ["#hinh-anh",   "4. Hình ảnh thực địa"],
                    ["#faq",        "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-primary-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Trạng thái */}
              <section className="mb-12" id="trang-thai">
                <SectionHeading id="trang-thai">Trạng thái tiến độ hiện tại — tháng 9/2026</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    <a href="/the-link-city" className="text-primary-600 font-semibold hover:underline">The Link City Dầu Giây</a>
                    {" "}đã bước vào giai đoạn hoàn thiện cuối cùng. Tính đến tháng 9/2026, toàn bộ
                    hạ tầng kỹ thuật của dự án đã được thi công xong. Điều duy nhất còn lại để dự án
                    mở bán trở lại là <strong className="text-slate-800">hoàn tất trạm xử lý nước thải</strong>.
                  </p>

                  {/* Bảng trạng thái */}
                  <div className="rounded-2xl border border-slate-200 overflow-hidden not-prose">
                    <div className="bg-slate-800 px-5 py-3">
                      <p className="text-white font-bold text-sm">Trạng thái từng hạng mục — 09/2026</p>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {[
                        { item: "Đường nội khu",              status: "done",    note: "Hoàn thiện" },
                        { item: "Hệ thống điện ngầm",         status: "done",    note: "Hoàn thiện" },
                        { item: "Hệ thống cấp nước",          status: "done",    note: "Hoàn thiện" },
                        { item: "Hệ thống thoát nước",        status: "done",    note: "Hoàn thiện" },
                        { item: "Vỉa hè & cây xanh",          status: "done",    note: "Hoàn thiện" },
                        { item: "GCN (sổ hồng) một số lô",   status: "done",    note: "Đã cấp" },
                        { item: "Trạm xử lý nước thải",       status: "waiting", note: "Đang chờ hoàn tất — điều kiện mở bán" },
                      ].map((r) => (
                        <div key={r.item} className="flex items-center justify-between gap-4 px-5 py-3">
                          <span className="text-sm font-semibold text-slate-700">{r.item}</span>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full
                              ${r.status === "done"    ? "bg-green-100 text-green-700"
                              : r.status === "waiting" ? "bg-amber-100 text-amber-700"
                              : "bg-slate-100 text-slate-500"}`}>
                              {r.note}
                            </span>
                            <span>{r.status === "done" ? "✅" : "⏳"}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Hạ tầng */}
              <section className="mb-12" id="ha-tang">
                <SectionHeading id="ha-tang">1. Hạ tầng đã hoàn thiện toàn bộ</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Toàn bộ hệ thống hạ tầng kỹ thuật của The Link City Dầu Giây đã được thi công
                    và hoàn thiện, bao gồm:
                  </p>

                  <div className="space-y-3 not-prose">
                    {[
                      { title: "Đường nội khu",        desc: "Đường nhựa nội khu theo quy hoạch đã hoàn thiện, kết nối thông suốt toàn dự án." },
                      { title: "Hệ thống điện ngầm",   desc: "Điện ngầm 100% theo tiêu chuẩn đô thị, đảm bảo mỹ quan và an toàn." },
                      { title: "Cấp thoát nước",       desc: "Hệ thống cấp nước và thoát nước riêng biệt, đồng bộ toàn khu." },
                      { title: "Vỉa hè & cây xanh",   desc: "Vỉa hè đã lát hoàn chỉnh, cây xanh nội khu đã trồng." },
                      { title: "GCN đã cấp",           desc: "Một số lô đã được cấp Giấy chứng nhận quyền sử dụng đất (sổ hồng riêng từng nền)." },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3 rounded-2xl border border-green-100 bg-green-50/50 p-4">
                        <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-[10px] font-black">✓</span>
                        </span>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="not-prose">
                    <ArticleFigure
                      src={TLC_PROGRESS["2"]}
                      alt="Đường nội khu và vỉa hè The Link City Dầu Giây đã hoàn thiện"
                      caption="Đường nhựa và vỉa hè nội khu The Link City đã hoàn thiện — hạ tầng sẵn sàng đón cư dân."
                      images={images}
                      index={1}
                      onOpen={openLightbox}
                    />
                  </div>
                </div>
              </section>

              {/* Trạm XLNT */}
              <section className="mb-12" id="xlnt">
                <SectionHeading id="xlnt">2. Trạm xử lý nước thải — điều kiện cuối trước khi mở bán</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Trạm xử lý nước thải là hạng mục <strong className="text-slate-800">duy nhất còn lại</strong>{" "}
                    trước khi The Link City chính thức mở bán trở lại. Đây là yêu cầu bắt buộc theo
                    quy định về bảo vệ môi trường đối với dự án khu dân cư.
                  </p>

                  <InfoBox type="warn">
                    <strong>⏳ Trạng thái hiện tại:</strong> Trạm xử lý nước thải đang trong quá trình
                    hoàn tất. Ngay khi hạng mục này được nghiệm thu, dự án sẽ đủ điều kiện mở bán
                    chính thức trở lại. Liên hệ để nhận thông báo ngay khi có lịch mở bán.
                  </InfoBox>

                  <p>
                    Về tổng thể, việc trạm XLNT là điều kiện cuối cùng cho thấy dự án đã hoàn thiện
                    gần như toàn bộ — đây là tín hiệu rất tích cực với người mua đang chờ đợi.
                  </p>

                  <div className="flex flex-wrap gap-3 not-prose">
                    <a
                      href="tel:0937587438"
                      className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-all"
                    >
                      📞 Đăng ký nhận thông báo mở bán
                    </a>
                  </div>
                </div>
              </section>

              {/* Khi nào mở bán */}
              <section className="mb-12" id="mo-ban">
                <SectionHeading id="mo-ban">3. Khi nào The Link City mở bán lại?</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Thời điểm mở bán phụ thuộc vào tiến độ hoàn tất và nghiệm thu trạm xử lý nước thải.
                    Với tốc độ hoàn thiện hiện tại, đây là những gì người mua cần biết:
                  </p>

                  <div className="space-y-4 not-prose">
                    {[
                      {
                        no: "01", color: "bg-emerald-600",
                        title: "Hạ tầng đã sẵn sàng 100%",
                        desc: "Toàn bộ đường, điện, nước, cây xanh đã hoàn thiện — chỉ thiếu nghiệm thu trạm XLNT. Người mua có thể tham quan thực địa ngay bây giờ.",
                      },
                      {
                        no: "02", color: "bg-amber-500",
                        title: "Trạm XLNT — hạng mục cuối",
                        desc: "Khi trạm xử lý nước thải được nghiệm thu, dự án đủ điều kiện pháp lý để mở bán. Đây là thủ tục cuối cùng theo quy định môi trường.",
                      },
                      {
                        no: "03", color: "bg-blue-600",
                        title: "Đăng ký trước để chọn vị trí đẹp",
                        desc: "Khách hàng quan tâm nên đăng ký trước để được ưu tiên chọn lô khi mở bán. Liên hệ 0937.587.438 để đặt lịch tham quan và giữ thông tin.",
                      },
                    ].map((item) => (
                      <div key={item.no} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                        <div className={`w-10 h-10 rounded-xl ${item.color} text-white font-black text-sm flex items-center justify-center flex-shrink-0`}>
                          {item.no}
                        </div>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <InfoBox type="success">
                    <strong>💡 Góc nhìn đầu tư:</strong> Thời điểm ngay trước khi mở bán chính thức
                    thường là mức giá tốt nhất. Sau khi mở bán và hạ tầng hoàn thiện 100%, giá thị trường
                    thường tăng đáng kể. Đây là cơ hội để vào đúng thời điểm.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/the-link-city/bang-gia">💰 Xem bảng giá The Link City 2026 →</LinkBtn>
                    <LinkBtn href="/the-link-city/phap-ly">📋 Pháp lý The Link City →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Hình ảnh */}
              <section className="mb-12" id="hinh-anh">
                <SectionHeading id="hinh-anh">4. Hình ảnh thực địa</SectionHeading>
                <div className="pt-5 space-y-4 text-slate-600 text-[17px] leading-[1.85]">
                  <p>Hình ảnh ghi nhận hạ tầng đã hoàn thiện tại The Link City Dầu Giây:</p>
                  <div className="not-prose">
                    <ArticleFigure
                      src={TLC_PROGRESS["1"]}
                      alt="Hạ tầng The Link City Dầu Giây đã hoàn thiện nhìn từ trên cao"
                      caption="Nhìn từ trên cao: hạ tầng kỹ thuật The Link City Dầu Giây đã hoàn thiện toàn bộ — đường nội khu, điện nước, cây xanh."
                      images={images}
                      index={0}
                      onOpen={openLightbox}
                    />
                  </div>
                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/the-link-city/hinh-anh">📸 Xem thêm hình ảnh thực tế The Link City →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">Câu hỏi thường gặp</SectionHeading>
                <div className="pt-5 space-y-3 not-prose">
                  {faqSchema.mainEntity.map((faq, i) => (
                    <details key={i} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden open:border-primary-200 open:shadow-sm transition-all">
                      <summary className="flex items-center justify-between gap-4 cursor-pointer px-5 py-4 font-semibold text-slate-800 text-sm list-none group-open:text-primary-700 select-none">
                        <span>{faq.name}</span>
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 group-open:bg-primary-100 flex items-center justify-center text-slate-400 group-open:text-primary-600 group-open:rotate-180 transition-all">▼</span>
                      </summary>
                      <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 bg-primary-50/30">
                        {faq.acceptedAnswer.text}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <div className="rounded-2xl bg-slate-900 p-6 text-white">
                <p className="font-black text-base mb-2">Muốn tham quan thực địa và đặt lịch chọn lô?</p>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Liên hệ ngay để đặt lịch xem thực tế hạ tầng hoàn thiện và đăng ký ưu tiên khi mở bán.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:0937587438" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all">
                    📞 Gọi ngay: 0937.587.438
                  </a>
                  <a href="/the-link-city" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all">
                    Xem tổng quan The Link City →
                  </a>
                </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="lg:w-72 flex-shrink-0 space-y-6">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sticky top-24">
                <p className="text-xs font-black text-emerald-700 uppercase tracking-widest mb-4">Trạng thái tiến độ</p>
                <div className="space-y-3">
                  {[
                    { label: "Hạ tầng kỹ thuật",   value: "Hoàn thiện ✅",        color: "text-green-600 font-black" },
                    { label: "Điện ngầm",           value: "Hoàn thiện ✅",        color: "text-green-600" },
                    { label: "Cấp thoát nước",      value: "Hoàn thiện ✅",        color: "text-green-600" },
                    { label: "Vỉa hè & cây xanh",  value: "Hoàn thiện ✅",        color: "text-green-600" },
                    { label: "GCN một số lô",       value: "Đã cấp ✅",            color: "text-green-600" },
                    { label: "Trạm XLNT",           value: "Đang chờ ⏳",          color: "text-amber-600 font-black" },
                    { label: "Mở bán lại",          value: "Sau khi XLNT xong",   color: "text-amber-600" },
                    { label: "Cập nhật lúc",        value: "09/2026",             color: "text-slate-500" },
                  ].map((r) => (
                    <div key={r.label} className="flex justify-between gap-2 text-xs border-b border-emerald-100 pb-2 last:border-0 last:pb-0">
                      <span className="text-emerald-700 font-semibold">{r.label}</span>
                      <span className={r.color}>{r.value}</span>
                    </div>
                  ))}
                </div>
                <a href="tel:0937587438" className="mt-4 flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors w-full">
                  📞 Đăng ký nhận thông báo
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Xem thêm</p>
                <div className="space-y-3">
                  {[
                    { href: "/the-link-city",          label: "Tổng quan The Link City" },
                    { href: "/the-link-city/phap-ly",  label: "Pháp lý dự án" },
                    { href: "/the-link-city/bang-gia", label: "Bảng giá 2026" },
                    { href: "/the-link-city/mat-bang", label: "Mặt bằng & sản phẩm" },
                    { href: "/the-link-city/tien-do",  label: "Trang tiến độ chi tiết" },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors font-medium">
                      <span className="text-primary-400">→</span> {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <RelatedContent
        items={[
          { href: "/the-link-city",         title: "Tổng quan The Link City Dầu Giây",          description: "Vị trí, pháp lý, sản phẩm và bảng giá từ 1,85 tỷ.",      tag: "Tổng quan" },
          { href: "/the-link-city/phap-ly", title: "Pháp lý The Link City",                     description: "Công văn 2505/UBND-KTN và tiến trình cấp GCN từng nền.",  tag: "Pháp lý"   },
          { href: "/the-link-city/bang-gia",title: "Bảng giá The Link City 2026",               description: "Block LK17A từ 1,85 tỷ, 4 phương thức thanh toán.",       tag: "Bảng giá"  },
          { href: "/the-link-city/tien-do", title: "Trang tiến độ chi tiết The Link City",      description: "Timeline đầy đủ và hình ảnh tiến độ thi công.",           tag: "Tiến độ"   },
          { href: "/tin-tuc/tong-quan-the-link-city-dau-giay", title: "Tổng quan The Link City — bài tin tức", description: "Phân tích toàn diện và giá bán đợt 1.", tag: "Tin dự án" },
          { href: "/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026", title: "Hồ sơ pháp lý — Công văn 2505", description: "Giải mã CV 2505 và tiến trình cấp sổ.", tag: "Pháp lý" },
        ]}
      />

      <CorpFooter />
    </>
  );
}
