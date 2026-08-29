"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS36 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/thu-tuc-chuyen-nhuong-mega-city-2`;
const PUBLISHED     = "29/08/2026";
const PUBLISHED_ISO = "2026-08-29";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Thủ tục sang tên hợp đồng và chuyển nhượng đất nền Mega City 2 mới nhất",
  description:
    "Hướng dẫn chi tiết quy trình thủ tục sang tên hợp đồng chuyển nhượng đất nền Mega City 2 Nhơn Trạch: hồ sơ pháp lý, thuế phí và các bước thực hiện an toàn.",
  image: [IMG_NEWS36["1"], IMG_NEWS36["2"], IMG_NEWS36["3"]],
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
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nhơn Trạch",
      addressRegion: "Đồng Nai",
      addressCountry: "VN",
    },
  },
  keywords:
    "thủ tục chuyển nhượng Mega City 2, sang tên hợp đồng Mega City 2, chuyển nhượng đất nền Mega City 2, phí chuyển nhượng Mega City 2, mua bán đất Mega City 2",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mua bán đất nền Mega City 2 có sang tên hợp đồng chính thức được không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Các giao dịch chuyển nhượng đất nền Mega City 2 được thực hiện công chứng hợp pháp tại Văn phòng Công chứng và được chủ đầu tư Kim Oanh Group xác nhận sang tên chính thức trên hệ thống quản lý.",
      },
    },
    {
      "@type": "Question",
      name: "Thuế thu nhập cá nhân khi chuyển nhượng đất nền Mega City 2 là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mức thuế thu nhập cá nhân theo quy định là 2% tính trên tổng giá trị giao dịch thể hiện trong văn bản chuyển nhượng công chứng. Người nộp do hai bên thỏa thuận trong hợp đồng đặt cọc.",
      },
    },
    {
      "@type": "Question",
      name: "Thời gian hoàn tất thủ tục sang tên tại Kim Oanh Group mất bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sau khi nộp đầy đủ hồ sơ công chứng và biên lai đóng thuế hợp lệ, thời gian xử lý và cấp Văn bản xác nhận chuyển nhượng thường mất từ 7 đến 15 ngày làm việc.",
      },
    },
    {
      "@type": "Question",
      name: "Chưa nhận bàn giao nền đất có được làm thủ tục chuyển nhượng không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khách hàng vẫn được quyền làm thủ tục chuyển nhượng hợp đồng nếu đã đóng đủ tiền theo tiến độ và không có tranh chấp hoặc vi phạm nghĩa vụ tài chính với chủ đầu tư. Cần xác nhận trực tiếp với Kim Oanh Group.",
      },
    },
    {
      "@type": "Question",
      name: "Có thể mua bán đất nền Mega City 2 bằng giấy viết tay không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Không nên. Mọi giao dịch bắt buộc phải có chứng thực của Văn phòng Công chứng và văn bản xác nhận từ Kim Oanh Group. Giao dịch bằng giấy viết tay không có giá trị pháp lý và tiềm ẩn rủi ro tranh chấp.",
      },
    },
    {
      "@type": "Question",
      name: "Cần kiểm tra những gì trước khi mua lại đất nền Mega City 2 thứ cấp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cần kiểm tra: tình trạng đóng tiền theo hợp đồng gốc, tình trạng thế chấp hoặc tranh chấp, cọc mốc ranh giới thực địa, và xác nhận thông tin từ Kim Oanh Group trước khi đặt cọc.",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Thủ tục chuyển nhượng Mega City 2",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS36["1"],
    alt: "Thủ tục sang tên hợp đồng chuyển nhượng đất nền dự án Mega City 2 Nhơn Trạch",
    caption: "Giao dịch chuyển nhượng đất nền Mega City 2 được thực hiện qua công chứng và xác nhận chủ đầu tư",
  },
  {
    src: IMG_NEWS36["2"],
    alt: "Sơ đồ 4 bước quy trình sang tên chuyển nhượng hợp đồng Mega City 2",
    caption: "4 bước thủ tục chuyển nhượng: đặt cọc → công chứng → nộp thuế → xác nhận Kim Oanh Group",
  },
  {
    src: IMG_NEWS36["3"],
    alt: "Danh mục hồ sơ giấy tờ cần thiết khi làm thủ tục sang tên đất nền Mega City 2",
    caption: "Bộ hồ sơ chuyển nhượng cần chuẩn bị đầy đủ để quy trình diễn ra nhanh chóng",
  },
  {
    src: IMG_NEWS36["4"],
    alt: "Văn phòng tiếp nhận hồ sơ xác nhận chuyển nhượng của Kim Oanh Group",
    caption: "Bộ phận Dịch vụ Khách hàng Kim Oanh Group tiếp nhận và xử lý hồ sơ sang tên",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400 scroll-mt-24"
    >
      {children}
    </h2>
  );
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-black text-slate-800 mb-2 mt-6">{children}</h3>;
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
  const s =
    type === "warn"
      ? "bg-amber-50 border-amber-200 text-amber-800"
      : "bg-slate-50 border-slate-200 text-slate-700";
  return (
    <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>
      {children}
    </div>
  );
}
function WarnBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border-l-4 border-red-400 bg-red-50 px-5 py-4 my-3">
      <p className="text-red-800 text-sm leading-relaxed">{children}</p>
    </div>
  );
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all"
    >
      {children}
    </a>
  );
}
function StepCard({ n, title, desc, children }: { n: number; title: string; desc?: string; children?: React.ReactNode }) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-amber-300 transition-colors">
      <div className="w-9 h-9 rounded-xl bg-amber-500 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-sm">
        {n}
      </div>
      <div className="flex-1">
        <p className="font-bold text-slate-800 mb-1">{title}</p>
        {desc && <p className="text-slate-600 text-[14px] leading-relaxed">{desc}</p>}
        {children}
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function ThuTucChuyenNhuongMegaCity2Page() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Thủ tục chuyển nhượng Mega City 2</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Tin dự án
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 11 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Thủ tục sang tên hợp đồng và chuyển nhượng đất nền Mega City 2 mới nhất
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Hướng dẫn quy trình 4 bước thủ tục chuyển nhượng đất nền{" "}
              <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">
                Mega City 2 Nhơn Trạch
              </a>
              : điều kiện pháp lý, bộ hồ sơ cần chuẩn bị, các khoản thuế phí và kinh nghiệm
              giao dịch an toàn trên thị trường thứ cấp.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh thủ tục chuyển nhượng Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS36["1"]}
                alt="Thủ tục sang tên hợp đồng chuyển nhượng đất nền dự án Mega City 2 Nhơn Trạch"
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
              Giao dịch chuyển nhượng đất nền Mega City 2 được thực hiện qua công chứng và xác nhận chủ đầu tư
            </p>
          </div>
        </div>

        {/* ── Main ──────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-1.5 text-sm text-slate-600 columns-1 sm:columns-2 gap-x-8">
                  {[
                    ["#vi-sao",      "Vì sao cần nắm rõ thủ tục?"],
                    ["#dieu-kien",   "1. Điều kiện pháp lý chuyển nhượng"],
                    ["#quy-trinh",   "2. Quy trình 4 bước sang tên"],
                    ["#ho-so",       "3. Hồ sơ cần chuẩn bị"],
                    ["#thue-phi",    "4. Thuế, phí và lệ phí"],
                    ["#rui-ro",      "5. Kinh nghiệm phòng tránh rủi ro"],
                    ["#faq",         "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <section className="mb-12" id="vi-sao">
                <SectionHeading>Vì sao cần nắm rõ thủ tục chuyển nhượng đất nền Mega City 2?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Thị trường giao dịch thứ cấp (mua bán lại) tại dự án Mega City 2 Nhơn Trạch
                    luôn nhận được sự quan tâm từ người mua ở thực lẫn nhà đầu tư. Tuy nhiên,
                    tùy thuộc vào tình trạng hồ sơ pháp lý của từng thửa đất, quy trình thực
                    hiện sẽ có những bước khác nhau.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { icon: "🔒", title: "Bảo đảm an toàn pháp lý",    desc: "Tránh rủi ro tranh chấp hợp đồng hoặc chuyển nhượng qua nhiều trung gian không rõ ràng" },
                      { icon: "💰", title: "Tiết kiệm chi phí",            desc: "Chuẩn bị đủ hồ sơ từ đầu, dự trù chính xác thuế TNCN, phí công chứng và lệ phí hành chính" },
                      { icon: "✅", title: "Xác minh hiện trạng sản phẩm", desc: "Đảm bảo thửa đất không vướng thế chấp hoặc vi phạm nghĩa vụ tài chính với chủ đầu tư" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 text-center hover:border-amber-300 transition-colors">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <InfoBox>
                    <strong>Lưu ý:</strong> Thông tin trong bài phản ánh quy trình phổ biến và
                    mang tính tham khảo. Điều kiện và thủ tục cụ thể cần xác nhận trực tiếp với
                    Kim Oanh Group và cơ quan nhà nước có thẩm quyền tại từng thời điểm giao
                    dịch.
                  </InfoBox>
                </div>
              </section>

              {/* 1. Điều kiện */}
              <section className="mb-12">
                <SectionHeading id="dieu-kien">1. Điều kiện pháp lý để chuyển nhượng đất nền Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trước khi đặt cọc và làm thủ tục chuyển nhượng, cả hai bên cần đối chiếu
                    các điều kiện pháp lý cần thiết:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                      <p className="font-black text-red-800 text-sm mb-3">Bên chuyển nhượng (Bên bán)</p>
                      <BulletList
                        items={[
                          "Là chủ sở hữu hợp pháp đứng tên trên Hợp đồng với chủ đầu tư hoặc có văn bản chuyển nhượng hợp pháp trước đó",
                          "Đã hoàn thành đầy đủ các đợt thanh toán theo đúng tiến độ trong hợp đồng",
                          "Đất nền không trong diện bị kê biên, tranh chấp dân sự hoặc đang thế chấp chưa được giải chấp",
                        ]}
                      />
                    </div>
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                      <p className="font-black text-blue-800 text-sm mb-3">Bên nhận chuyển nhượng (Bên mua)</p>
                      <BulletList
                        items={[
                          "Đầy đủ năng lực hành vi dân sự theo quy định của pháp luật Việt Nam",
                          "Chuẩn bị đầy đủ giấy tờ tùy thân: CCCD gắn chip, giấy xác nhận tình trạng hôn nhân",
                          "Có phương án tài chính rõ ràng cho toàn bộ giá trị giao dịch",
                        ]}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/phap-ly-mega-city-2">
                      Pháp lý dự án Mega City 2 Nhơn Trạch →
                    </LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">
                      Trang pháp lý Mega City 2 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* 2. Quy trình */}
              <section className="mb-12">
                <SectionHeading id="quy-trinh">2. Quy trình 4 bước sang tên chuyển nhượng Mega City 2 thực tế</SectionHeading>
                <div className="pt-5 space-y-4">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Quy trình chuyển nhượng hợp đồng mua bán đất nền tại Mega City 2 được thực
                    hiện theo 4 bước chuẩn chỉnh:
                  </p>

                  <StepCard
                    n={1}
                    title="Thỏa thuận đặt cọc và xác minh thông tin tại Kim Oanh Group"
                  >
                    <div className="mt-2 space-y-1.5 text-[14px] text-slate-600 leading-relaxed">
                      <p>• Hai bên thống nhất giá bán, phương thức thanh toán, thời hạn công chứng và phân định bên chịu thuế phí</p>
                      <p>• Liên hệ Bộ phận Dịch vụ Khách hàng Kim Oanh Group để kiểm tra tình trạng nợ đọng tài chính và tính hợp lệ của bộ hồ sơ gốc</p>
                      <p>• Ký hợp đồng đặt cọc có công chứng hoặc xác nhận tại văn phòng môi giới uy tín</p>
                    </div>
                  </StepCard>

                  <StepCard
                    n={2}
                    title="Ký hợp đồng chuyển nhượng tại Văn phòng Công chứng"
                  >
                    <div className="mt-2 space-y-1.5 text-[14px] text-slate-600 leading-relaxed">
                      <p>• Hai bên có mặt tại Văn phòng Công chứng trên địa bàn tỉnh Đồng Nai (hoặc nơi có thẩm quyền hợp lệ)</p>
                      <p>• Ký và điểm chỉ vào Văn bản chuyển nhượng hợp đồng</p>
                      <p>• Công chứng viên kiểm tra giấy tờ gốc và lập văn bản công chứng nhiều bản có giá trị pháp lý tương đương</p>
                    </div>
                  </StepCard>

                  <StepCard
                    n={3}
                    title="Kê khai và nộp nghĩa vụ tài chính tại Chi cục Thuế"
                  >
                    <div className="mt-2 space-y-1.5 text-[14px] text-slate-600 leading-relaxed">
                      <p>• Nộp hồ sơ kê khai thuế tại Chi cục Thuế khu vực Nhơn Trạch</p>
                      <p>• Nhận thông báo thuế và tiến hành nộp tiền thuế vào Kho bạc Nhà nước hoặc qua ứng dụng ngân hàng số</p>
                      <p>• Nhận biên lai xác nhận nộp thuế để làm thủ tục bước tiếp theo</p>
                    </div>
                  </StepCard>

                  <StepCard
                    n={4}
                    title="Nộp hồ sơ hoàn tất sang tên tại Văn phòng Kim Oanh Group"
                  >
                    <div className="mt-2 space-y-1.5 text-[14px] text-slate-600 leading-relaxed">
                      <p>• Nộp toàn bộ hồ sơ đã công chứng kèm biên lai nộp thuế về Văn phòng chủ đầu tư</p>
                      <p>• Kim Oanh Group kiểm tra tính hợp lệ và phát hành Văn bản xác nhận chuyển nhượng</p>
                      <p>• Chính thức cập nhật thông tin chủ sở hữu mới trên hệ thống quản lý dự án</p>
                      <p className="text-amber-700 font-semibold">⏱ Thời gian xử lý: 7–15 ngày làm việc</p>
                    </div>
                  </StepCard>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS36["2"]}
                alt="Sơ đồ 4 bước quy trình sang tên chuyển nhượng hợp đồng Mega City 2"
                caption="4 bước thủ tục chuyển nhượng: đặt cọc → công chứng → nộp thuế → xác nhận Kim Oanh Group"
                images={images}
                index={1}
                onOpen={openLightbox}
              />

              {/* 3. Hồ sơ */}
              <section className="mb-12">
                <SectionHeading id="ho-so">3. Các loại giấy tờ cần chuẩn bị trong bộ hồ sơ chuyển nhượng</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Để buổi ký kết diễn ra nhanh chóng, hai bên cần chuẩn bị sẵn sàng các tài
                    liệu sau:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[500px]">
                      <thead>
                        <tr className="bg-amber-500 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-36">Danh mục</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Bên bán</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Bên mua</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          [
                            "Giấy tờ cá nhân",
                            "CCCD gắn chip (cả vợ và chồng nếu đã kết hôn) + Giấy đăng ký kết hôn hoặc Giấy xác nhận độc thân",
                            "CCCD gắn chip của người đứng tên mua",
                          ],
                          [
                            "Giấy tờ tài sản",
                            "Bản gốc Hợp đồng dự án Mega City 2, toàn bộ phiếu thu tiền các đợt đã đóng",
                            "Phương án thanh toán / Xác nhận tài khoản ngân hàng",
                          ],
                          [
                            "Văn bản liên quan",
                            "Biên bản bàn giao nền (nếu đã nhận), văn bản chuyển nhượng các lần trước (nếu có)",
                            "Đơn đề nghị xác nhận thông tin (theo mẫu chủ đầu tư)",
                          ],
                        ].map(([dm, ban, mua], i) => (
                          <tr key={dm} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700">{dm}</td>
                            <td className="px-4 py-3 text-slate-600 text-xs leading-relaxed">{ban}</td>
                            <td className="px-4 py-3 text-slate-600 text-xs leading-relaxed">{mua}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <InfoBox type="warn">
                    Nếu chủ sở hữu đang thế chấp tài sản tại ngân hàng, cần thực hiện thủ tục
                    giải chấp và có văn bản xác nhận của tổ chức tín dụng <strong>trước khi</strong>{" "}
                    tiến hành công chứng chuyển nhượng.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS36["3"]}
                alt="Danh mục hồ sơ giấy tờ cần thiết khi làm thủ tục sang tên đất nền Mega City 2"
                caption="Bộ hồ sơ chuyển nhượng cần chuẩn bị đầy đủ để quy trình diễn ra nhanh chóng"
                images={images}
                index={2}
                onOpen={openLightbox}
              />

              {/* 4. Thuế phí */}
              <section className="mb-12">
                <SectionHeading id="thue-phi">4. Các khoản thuế, phí và lệ phí khi chuyển nhượng</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi thực hiện giao dịch sang tên chuyển nhượng đất nền Mega City 2, các
                    khoản nghĩa vụ tài chính phát sinh gồm:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        color: "border-red-200 bg-red-50",
                        badge: "bg-red-100 text-red-700",
                        label: "Thuế thu nhập cá nhân (TNCN)",
                        rate: "2% giá trị giao dịch",
                        note: "Theo luật định là Bên bán chịu, nhưng có thể thỏa thuận Bên mua đóng thay tùy đàm phán giá ròng",
                      },
                      {
                        color: "border-amber-200 bg-amber-50",
                        badge: "bg-amber-100 text-amber-700",
                        label: "Phí công chứng và thù lao công chứng",
                        rate: "Theo biểu phí Nhà nước",
                        note: "Dao động từ vài trăm nghìn đến vài triệu đồng tùy giá trị tài sản, do cả hai bên thỏa thuận chịu",
                      },
                      {
                        color: "border-blue-200 bg-blue-50",
                        badge: "bg-blue-100 text-blue-700",
                        label: "Phí hành chính xác nhận sang tên tại Chủ đầu tư",
                        rate: "Theo biểu phí Kim Oanh Group",
                        note: "Lệ phí xử lý hồ sơ và cấp văn bản xác nhận theo biểu phí niêm yết tại thời điểm giao dịch",
                      },
                    ].map((item) => (
                      <div key={item.label} className={`rounded-2xl border p-5 ${item.color}`}>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <p className="font-black text-slate-800 text-sm">{item.label}</p>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badge}`}>{item.rate}</span>
                        </div>
                        <p className="text-slate-600 text-[13px] leading-relaxed">{item.note}</p>
                      </div>
                    ))}
                  </div>

                  <InfoBox>
                    Nên thỏa thuận rõ ràng bằng văn bản trước khi đặt cọc về việc bên nào chịu
                    từng khoản chi phí trên để tránh tranh chấp sau khi ký hợp đồng.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/bang-gia-mega-city-2-moi-nhat">
                      Bảng giá Mega City 2 Nhơn Trạch mới nhất →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* 5. Rủi ro */}
              <section className="mb-12">
                <SectionHeading id="rui-ro">5. Kinh nghiệm phòng tránh rủi ro khi mua lại đất nền Mega City 2</SectionHeading>
                <div className="pt-5 space-y-4">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đối với người mua lại đất nền Mega City 2 trên thị trường thứ cấp, 4 nguyên
                    tắc an toàn sau đây giúp bảo vệ quyền lợi của bạn:
                  </p>

                  <WarnBox>
                    <strong>⚠️ Tuyệt đối không mua bán bằng giấy viết tay:</strong> Mọi giao
                    dịch bắt buộc phải có chứng thực của Văn phòng Công chứng và văn bản xác
                    nhận hợp lệ từ Kim Oanh Group. Giao dịch bằng giấy tay không có giá trị
                    pháp lý và tiềm ẩn rủi ro tranh chấp rất cao.
                  </WarnBox>
                  <WarnBox>
                    <strong>⚠️ Kiểm tra kỹ tình trạng đóng tiền:</strong> Yêu cầu người bán
                    cung cấp đầy đủ phiếu thu, ủy nhiệm chi khớp với các đợt thanh toán trên
                    hợp đồng gốc để tránh phát sinh nợ quá hạn hoặc tiền phạt chậm nộp chuyển
                    sang người mua mới.
                  </WarnBox>
                  <WarnBox>
                    <strong>⚠️ Khảo sát thực địa đúng mã lô, số block:</strong> Cùng người
                    bán hoặc nhân viên tư vấn đến tận nơi kiểm tra cọc mốc ranh giới lô đất
                    thực tế trước khi đặt cọc số tiền lớn. Đối chiếu mã lô trên hợp đồng gốc
                    với biển số lô thực địa và bản đồ phân lô chính thức.
                  </WarnBox>
                  <WarnBox>
                    <strong>⚠️ Giữ lại một phần tiền thanh toán:</strong> Nên giữ lại khoảng
                    5–10% và chỉ thanh toán nốt sau khi nhận được Văn bản xác nhận sang tên
                    chính thức từ Kim Oanh Group — đây là bằng chứng pháp lý quan trọng nhất
                    xác nhận quyền sở hữu của bạn.
                  </WarnBox>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/checklist-nhan-nen-mega-city-2">
                      Checklist nhận nền và kiểm tra hiện trạng trước khi xây nhà →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS36["4"]}
                alt="Văn phòng tiếp nhận hồ sơ xác nhận chuyển nhượng của Kim Oanh Group"
                caption="Bộ phận Dịch vụ Khách hàng Kim Oanh Group tiếp nhận và xử lý hồ sơ sang tên"
                images={images}
                index={3}
                onOpen={openLightbox}
              />

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về thủ tục chuyển nhượng Mega City 2</SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details
                      key={name}
                      className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-amber-300 transition-colors"
                    >
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
                <SectionHeading>Các nội dung chuyên sâu liên quan đến Mega City 2</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/mega-city-2",                                    label: "Mega City 2 Nhơn Trạch — Tổng quan dự án" },
                    { href: "/tin-tuc/phap-ly-mega-city-2",                    label: "Pháp lý dự án Mega City 2" },
                    { href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",          label: "Bảng giá Mega City 2 mới nhất" },
                    { href: "/tin-tuc/tien-do-mega-city-2",                    label: "Tiến độ Mega City 2 mới nhất" },
                    { href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2",           label: "Hạ tầng kỹ thuật Mega City 2" },
                    { href: "/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach",label: "Mặt bằng phân lô Mega City 2" },
                    { href: "/tin-tuc/quy-cach-xay-dung-mega-city-2",          label: "Quy cách xây dựng Mega City 2" },
                    { href: "/tin-tuc/checklist-nhan-nen-mega-city-2",         label: "Checklist nhận nền Mega City 2" },
                  ].map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 transition-colors px-4 py-3 rounded-xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50"
                    >
                      <span className="text-amber-400 flex-shrink-0">→</span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </section>

              {/* Kết luận */}
              <section className="mb-12">
                <SectionHeading>Kết luận</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Quy trình thủ tục chuyển nhượng Mega City 2 được thực hiện minh bạch qua các
                    bước công chứng hợp pháp và xác nhận trực tiếp từ chủ đầu tư Kim Oanh Group.
                    Nắm vững trình tự 4 bước từ kiểm tra pháp lý, công chứng, hoàn thành nghĩa
                    vụ thuế đến xác nhận sang tên sẽ giúp người mua thực hiện giao dịch an toàn
                    và bảo đảm trọn vẹn quyền lợi sở hữu.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu có bất kỳ điểm chưa rõ về thủ tục hoặc tình trạng pháp lý của lô đất
                    cụ thể, hãy liên hệ trực tiếp Bộ phận Dịch vụ Khách hàng của Kim Oanh Group
                    để được hỗ trợ hướng dẫn chi tiết nhất.
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài được tổng hợp từ các nguồn công khai và cần được đối chiếu
                  với thông tin chính thức mới nhất trước khi đưa ra quyết định giao dịch. Ban
                  biên tập Kim Oanh Đồng Nai — Cập nhật: {PUBLISHED}
                </p>
              </div>

            </article>

            {/* ── Sidebar ──────────────────────────────────── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu Mega City 2</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/mega-city-2",          label: "Tổng quan dự án" },
                      { href: "/mega-city-2/mat-bang",  label: "Mặt bằng tổng thể" },
                      { href: "/mega-city-2/vi-tri",    label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",   label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia",  label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/hinh-anh",  label: "Hình ảnh thực tế" },
                    ].map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-amber-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white"
                      >
                        <span>{l.label}</span>
                        <span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Pháp lý dự án Mega City 2",       href: "/tin-tuc/phap-ly-mega-city-2" },
                      { label: "Checklist nhận nền Mega City 2",   href: "/tin-tuc/checklist-nhan-nen-mega-city-2" },
                      { label: "Bảng giá Mega City 2 mới nhất",    href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat" },
                      { label: "Quy cách xây dựng Mega City 2",    href: "/tin-tuc/quy-cach-xay-dung-mega-city-2" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Hỗ trợ thủ tục</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Nhận tư vấn pháp lý và hỗ trợ thủ tục chuyển nhượng Mega City 2.
                  </p>
                  <a
                    href="tel:0937587438"
                    className="block text-center bg-white text-amber-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-amber-50 transition-colors"
                  >
                    0937.587.438
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="bg-amber-50 border-t border-amber-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">
              Bạn cần hỗ trợ kiểm tra pháp lý và thủ tục sang tên Mega City 2?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Liên hệ để được hỗ trợ kiểm tra hồ sơ, tư vấn thủ tục và xác nhận pháp lý dự án.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/mega-city-2"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Xem thông tin Mega City 2 →
              </a>
              <a
                href="tel:0937587438"
                className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm"
              >
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            {
              href: "/tin-tuc/phap-ly-mega-city-2",
              title: "Pháp Lý Dự Án Mega City 2 Nhơn Trạch Có Gì?",
              description: "Cập nhật quyết định phê duyệt, hồ sơ dự án và những điều cần kiểm tra.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/checklist-nhan-nen-mega-city-2",
              title: "Checklist Nhận Nền & Kiểm Tra Hiện Trạng Tại Mega City 2",
              description: "12 bước kiểm tra chi tiết khi nhận bàn giao nền đất.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/quy-cach-xay-dung-mega-city-2",
              title: "Quy Cách Xây Dựng Mega City 2: Tầng Cao, Khoảng Lùi & Mẫu Nhà",
              description: "Tầng cao, mật độ và quy trình xin phép xây dựng tại Mega City 2.",
              tag: "Tin dự án",
            },
            {
              href: "/mega-city-2",
              title: "Mega City 2 Nhơn Trạch – Tổng Quan Dự Án",
              description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và sản phẩm.",
              tag: "Tin dự án",
            },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}
