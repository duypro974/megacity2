"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS52 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026`;
const PUBLISHED     = "16/09/2026";
const PUBLISHED_ISO = "2026-09-16";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Giải Pháp An Cư Cho Gia Đình Trẻ 2026: Sở Hữu Nhà Phố The Link City Dầu Giây Chỉ Từ 12 Triệu/Tháng",
  description:
    "Bài toán an cư cho vợ chồng trẻ và chuyên gia KCN tại The Link City Dầu Giây: Vốn tự có 550 triệu, trả góp 12 triệu/tháng sở hữu nhà phố 3 tầng sổ hồng riêng.",
  image: [IMG_NEWS52["1"], IMG_NEWS52["2"], IMG_NEWS52["5"]],
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
  keywords:
    "The Link City Dầu Giây, Mua nhà The Link City, Nhà phố The Link City, An cư The Link City, Đất nền sổ hồng Dầu Giây, KDC A1 C1 Dầu Giây",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Nếu tôi mua đất đợt này nhưng 2–3 năm nữa mới xây nhà thì có bị phạt không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoàn toàn không. Dự án The Link City cấp sổ hồng riêng sở hữu lâu dài cho từng nền và không áp đặt thời hạn bắt buộc phải xây dựng ngay. Gia đình bạn có thể mua đất tích lũy trước, khi nào thu xếp đủ tài chính xây nhà thì tiến hành thi công.",
      },
    },
    {
      "@type": "Question",
      name: "Thu nhập của hai vợ chồng bao nhiêu một tháng thì nên vay mua The Link City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Với mức trả góp khoảng 12–14 triệu đồng/tháng (và giảm dần đều qua các năm), mức thu nhập tổng an toàn của hai vợ chồng là từ 25–30 triệu đồng/tháng. Khoản trả góp chỉ chiếm khoảng 40% thu nhập, đảm bảo gia đình vẫn có đủ ngân sách chi tiêu sinh hoạt, học hành cho con cái.",
      },
    },
    {
      "@type": "Question",
      name: "Con tôi đi học ở khu vực Dầu Giây có thuận tiện không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rất thuận tiện. Ngoài quỹ đất trường học quy hoạch ngay trong nội khu dự án, trong bán kính 1–2 km xung quanh có đầy đủ trường mầm non Dầu Giây, Trường Tiểu học Trần Bình Trọng, Trường THCS Thống Nhất, Trường THPT Thống Nhất A và Cơ sở Dầu Giây của Trường Đại học Lạc Hồng.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức",   item: `${BASE_URL}/tin-tuc` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Giải pháp an cư gia đình trẻ The Link City 2026",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS52["1"],
    alt: "Gia đình trẻ hạnh phúc sinh sống tại khu đô thị hiện đại The Link City Dầu Giây",
    caption: "The Link City hiện thực hóa giấc mơ an cư vững chắc cho thế hệ trẻ tại Đồng Nai.",
  },
  {
    src: IMG_NEWS52["2"],
    alt: "Công viên đồi cỏ xanh ngút mắt hiện hữu tại dự án The Link City Dầu Giây",
    caption: "Không gian xanh mát hiện hữu – Môi trường lý tưởng để nuôi dưỡng tuổi thơ con trẻ.",
  },
  {
    src: IMG_NEWS52["3"],
    alt: "Giấy chứng nhận quyền sử dụng đất sổ hồng trao tay dự án The Link City Dầu Giây",
    caption: "Sổ hồng riêng trao tay – Quyền sở hữu vĩnh viễn, tích lũy tài sản trọn đời cho con cái.",
  },
  {
    src: IMG_NEWS52["4"],
    alt: "Gia đình ba thế hệ tản bộ hạnh phúc trong công viên rợp bóng cây xanh The Link City Dầu Giây",
    caption: "Không gian xanh đa thế hệ – Nơi gắn kết yêu thương của cả gia đình.",
  },
  {
    src: IMG_NEWS52["5"],
    alt: "Hình ảnh thực tế mẫu nhà phố hiện đại đã xây dựng hoàn thiện tại The Link City Dầu Giây",
    caption: "Mẫu nhà phố xây dựng thực tế khang trang, kiên cố tại khu đô thị The Link City.",
  },
];

// ─── Sub-components (khớp pattern bài 42) ──────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-primary-400 scroll-mt-24"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-6">{children}</h3>;
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

function InfoBox({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warn" | "success";
}) {
  const s =
    type === "warn"
      ? "bg-amber-50 border-amber-200 text-amber-800"
      : type === "success"
      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
      : "bg-primary-50 border-primary-200 text-primary-800";
  return (
    <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>
      {children}
    </div>
  );
}

function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all"
    >
      {children}
    </a>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function GiaiPhapAnCuPage() {
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
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a>
              <span className="text-slate-300">/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium line-clamp-1">Giải pháp an cư gia đình trẻ The Link City 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Tin dự án
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 10 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Giải Pháp An Cư Cho Gia Đình Trẻ 2026: Sở Hữu Nhà Phố The Link City Dầu Giây Chỉ Từ 12 Triệu/Tháng
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Bài toán an cư cho vợ chồng trẻ và chuyên gia KCN tại{" "}
              <a href="/the-link-city" className="text-primary-700 font-semibold hover:underline">
                The Link City Dầu Giây
              </a>
              : Vốn tự có 550 triệu, trả góp 12 triệu/tháng sở hữu nhà phố 3 tầng sổ hồng riêng vĩnh viễn.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh gia đình trẻ tại The Link City"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS52["1"]}
                alt="Gia đình trẻ hạnh phúc sinh sống tại khu đô thị hiện đại The Link City Dầu Giây"
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
              The Link City hiện thực hóa giấc mơ an cư vững chắc cho thế hệ trẻ tại Đồng Nai
            </p>
          </div>
        </div>

        {/* ── Main ──────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Article ───────────────────────────────────── */}
            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-1.5 text-sm text-slate-600 columns-1 sm:columns-2 gap-x-8">
                  {[
                    ["#nghich-ly",   "1. Nghịch lý an cư của gia đình trẻ 2026"],
                    ["#loi-giai",    "2. The Link City: Lời giải hoàn hảo"],
                    ["#bai-toan",    "3. Bài toán chi trả: 550 triệu, 12 triệu/tháng"],
                    ["#3-the-he",    "4. Không gian sống lý tưởng cho 3 thế hệ"],
                    ["#di-lam",      "5. 5–15 phút kết nối các KCN lớn"],
                    ["#thiet-ke",    "6. Thiết kế nhà phố T3-2b"],
                    ["#faq",         "7. Câu hỏi thường gặp (FAQ)"],
                    ["#dang-ky",     "8. Đăng ký tư vấn & xem nhà mẫu"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-primary-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* ── Section 1 ── */}
              <section className="mb-12" id="nghich-ly">
                <SectionHeading id="nghich-ly">
                  1. Nghịch Lý An Cư Của Gia Đình Trẻ Năm 2026: Chung Cư Tăng Giá, Đất Hẻm Bấp Bênh
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bước sang năm 2026, những cặp vợ chồng trẻ trong độ tuổi 28–40 có mức thu
                    nhập tích lũy từ{" "}
                    <strong className="text-slate-800">25–35 triệu đồng/tháng</strong> đang đối
                    mặt với một "bài toán hóc búa" về nơi an cư:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        icon: "🏢",
                        title: "Chung cư tại TP.HCM & Biên Hòa lập đỉnh giá mới",
                        body: "Căn hộ 2 phòng ngủ vùng ven hiện đã chạm ngưỡng 2,8 tỷ – 3,5 tỷ đồng. Mua chung cư đồng nghĩa với việc gánh khoản nợ lớn nhưng chỉ sở hữu không gian trên không, sau 50 năm giá trị tài sản hao mòn và phải trả thêm hàng triệu đồng phí dịch vụ mỗi tháng.",
                        color: "border-red-200 bg-red-50 text-red-800",
                        bd: "text-red-700",
                      },
                      {
                        icon: "🏚️",
                        title: "Đất thổ cư trong ngõ hẻm nhiều rủi ro",
                        body: "Với số tiền tích lũy từ 1–1,5 tỷ đồng, mua đất dân trong các hẻm nhỏ tại Đồng Nai thì đường hẹp, ngập nước, dây điện chằng chịt, không có vỉa hè cho con trẻ đạp xe và nơm nớp lo dính quy hoạch giải tỏa mở đường.",
                        color: "border-amber-200 bg-amber-50 text-amber-800",
                        bd: "text-amber-700",
                      },
                    ].map((item) => (
                      <div key={item.title} className={`rounded-2xl border ${item.color} p-5 flex items-start gap-3`}>
                        <span className="text-2xl shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-black text-sm mb-1">{item.title}</p>
                          <p className={`text-sm leading-relaxed ${item.bd}`}>{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Chính nghịch lý này đã thôi thúc làn sóng dịch chuyển về{" "}
                    <strong className="text-primary-700">
                      The Link City (Khu dân cư A1-C1 Đô thị Dầu Giây)
                    </strong>{" "}
                    — nơi mở ra cơ hội sở hữu nhà phố 3 tầng mặt đất có sổ hồng riêng vĩnh
                    viễn với tổng chi phí chỉ bằng một căn hộ chung cư giá rẻ.
                  </p>
                </div>
              </section>

              {/* ── Section 2 ── */}
              <section className="mb-12" id="loi-giai">
                <SectionHeading id="loi-giai">
                  2. The Link City: Lời Giải Hoàn Hảo Cho Bài Toán "Tích Lũy Tài Sản – An Cư Lạc Nghiệp"
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tọa lạc ngay trung tâm thị trấn Dầu Giây, The Link City không đơn thuần là
                    một dự án phân lô, mà là một{" "}
                    <strong className="text-slate-800">quần thể đô thị văn minh rộng 21 ha</strong>{" "}
                    được quy hoạch trọn vẹn mọi nhu cầu sống:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      {
                        icon: "📜",
                        title: "Sở hữu tài sản thực bền vững",
                        desc: "Đất ở đô thị (ODT) có Sổ hồng riêng từng nền — ký công chứng sang tên và sở hữu vĩnh viễn cho con cháu đời sau.",
                        color: "border-emerald-200 bg-emerald-50",
                        hd: "text-emerald-800",
                        bd: "text-emerald-700",
                      },
                      {
                        icon: "🏗️",
                        title: "Hạ tầng ngầm hóa chuẩn đô thị",
                        desc: "100% đường nhựa rộng 13–28m, điện âm, nước máy, vỉa hè lót đá 3–5m rợp bóng cây xanh mát, môi trường sống sạch sẽ và an toàn.",
                        color: "border-blue-200 bg-blue-50",
                        hd: "text-blue-800",
                        bd: "text-blue-700",
                      },
                      {
                        icon: "🎡",
                        title: "Hệ sinh thái tiện ích trước ngưỡng cửa",
                        desc: "Con bạn được tự do chạy nhảy tại công viên đồi cỏ, Kid Zone, sân bóng mini và sân pickleball hiện đại ngay trong nội khu.",
                        color: "border-primary-200 bg-primary-50",
                        hd: "text-primary-800",
                        bd: "text-primary-700",
                      },
                    ].map((item) => (
                      <div key={item.title} className={`rounded-2xl border ${item.color} p-5`}>
                        <span className="text-2xl mb-3 block">{item.icon}</span>
                        <p className={`font-black text-sm mb-1 ${item.hd}`}>{item.title}</p>
                        <p className={`text-xs leading-relaxed ${item.bd}`}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/vi-tri">
                      📍 Xem chi tiết tọa độ vàng kết nối khu dân cư →
                    </LinkBtn>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS52["2"]}
                    alt="Công viên đồi cỏ xanh ngút mắt hiện hữu tại dự án The Link City Dầu Giây"
                    caption="Không gian xanh mát hiện hữu – Môi trường lý tưởng để nuôi dưỡng tuổi thơ con trẻ."
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 3 ── */}
              <section className="mb-12" id="bai-toan">
                <SectionHeading id="bai-toan">
                  3. Phân Tích Bài Toán Chi Trả: Vốn Tự Có 550 Triệu, Trả Góp 12 Triệu/Tháng
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhiều người nghĩ rằng để mua được đất nền đô thị chuẩn chỉnh cần phải có sẵn
                    bạc tỷ. Nhưng tại The Link City, nhờ chính sách bảo lãnh tín dụng từ ngân
                    hàng đối tác (OCB, Vietcombank), bài toán tài chính trở nên dễ thở hơn bao
                    giờ hết:
                  </p>

                  <H3>Kế hoạch tài chính lô đất nền 95m² (Giá 1,852 tỷ đồng)</H3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: "💵", label: "Vốn tự có (30%)", value: "555 triệu VNĐ", note: "Thanh toán giãn cách nhiều đợt", color: "bg-emerald-50 border-emerald-200" },
                      { icon: "🏦", label: "Ngân hàng hỗ trợ (70%)", value: "~1,296 tỷ VNĐ", note: "Vay tối đa 20 năm", color: "bg-blue-50 border-blue-200" },
                      { icon: "🎁", label: "Ân hạn gốc & ưu đãi lãi", value: "Giai đoạn đầu", note: "Giảm áp lực tài chính", color: "bg-primary-50 border-primary-200" },
                    ].map((item) => (
                      <div key={item.label} className={`rounded-2xl border ${item.color} p-5 text-center`}>
                        <span className="text-2xl block mb-2">{item.icon}</span>
                        <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                        <p className="font-black text-slate-800 text-base mb-1">{item.value}</p>
                        <p className="text-xs text-slate-500 italic">{item.note}</p>
                      </div>
                    ))}
                  </div>

                  <H3>Lịch chi trả hàng tháng chi tiết</H3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[520px]">
                      <thead>
                        <tr className="bg-slate-700 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Khoản mục chi trả</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Số tiền ước tính/tháng</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Ghi chú dòng tiền</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="bg-white">
                          <td className="px-4 py-3 text-slate-700">Tiền gốc chia đều 240 tháng</td>
                          <td className="px-4 py-3 font-semibold text-slate-800">5.400.000 VNĐ</td>
                          <td className="px-4 py-3 text-slate-500 text-xs">Cố định trong suốt thời gian vay</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="px-4 py-3 text-slate-700">Tiền lãi tính trên dư nợ giảm dần</td>
                          <td className="px-4 py-3 font-semibold text-slate-800">6.500.000 – 8.500.000 VNĐ</td>
                          <td className="px-4 py-3 text-slate-500 text-xs">Giảm dần đều qua từng năm</td>
                        </tr>
                        <tr className="bg-primary-50">
                          <td className="px-4 py-3 font-black text-primary-800">TỔNG CỘNG MỖI THÁNG</td>
                          <td className="px-4 py-3 font-black text-primary-700">~12.000.000 – 13.900.000 VNĐ</td>
                          <td className="px-4 py-3 text-primary-600 text-xs font-semibold">Sau 5 năm chỉ còn ~10 tr/tháng</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <H3>So sánh thực tế: Thuê nhà vs Trả góp mua The Link City</H3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                      <p className="font-black text-red-800 text-sm mb-3">❌ Tiếp tục đi thuê nhà</p>
                      <ul className="space-y-2 text-red-700 text-sm">
                        <li>• Mất 6–10 triệu/tháng tiền thuê vĩnh viễn</li>
                        <li>• Sau 10 năm vẫn không có tài sản gì</li>
                        <li>• Giá thuê tăng theo thị trường hàng năm</li>
                        <li>• Không có không gian riêng tư cho gia đình</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                      <p className="font-black text-emerald-800 text-sm mb-3">✅ Trả góp mua The Link City</p>
                      <ul className="space-y-2 text-emerald-700 text-sm">
                        <li>• Trả 12–14 triệu/tháng tích lũy vào tài sản</li>
                        <li>• Sau vài năm sở hữu lô đất nhiều tỷ đồng</li>
                        <li>• Giá trị bất động sản tăng theo đô thị hóa</li>
                        <li>• Không gian 3 tầng riêng tư cho cả gia đình</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/thanh-toan">
                      🧮 Tự tính toán lịch trả nợ vay ngân hàng từng tháng →
                    </LinkBtn>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS52["3"]}
                    alt="Giấy chứng nhận quyền sử dụng đất sổ hồng trao tay dự án The Link City Dầu Giây"
                    caption="Sổ hồng riêng trao tay – Quyền sở hữu vĩnh viễn, tích lũy tài sản trọn đời cho con cái."
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 4 ── */}
              <section className="mb-12" id="3-the-he">
                <SectionHeading id="3-the-he">
                  4. Không Gian Sống Lý Tưởng Cho 3 Thế Hệ: Gắn Kết Nhưng Độc Lập
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một ngôi nhà hoàn hảo không chỉ cần rộng, mà cần phải đáp ứng được nhu cầu
                    sống của tất cả thành viên trong gia đình:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: "👧",
                        title: "Đối với Con Trẻ",
                        body: "Hệ sinh thái mảng xanh và cụm sân chơi ngoài trời giúp trẻ rời xa màn hình điện thoại, thỏa thích vận động, đá bóng, chạy nhảy trên đồi cỏ an toàn tuyệt đối không có xe cộ lưu thông tốc độ cao.",
                        color: "border-pink-200 bg-pink-50",
                        hd: "text-pink-800",
                        bd: "text-pink-700",
                      },
                      {
                        icon: "💼",
                        title: "Đối với Cha Mẹ (Người trẻ làm việc)",
                        body: "Sau ngày dài áp lực nơi công sở hay nhà máy, bạn có thể tái tạo năng lượng bằng việc chơi một trận pickleball cùng hàng xóm, chạy bộ dưới tán cây rợp mát hoặc ghé khu thương mại mua sắm thực phẩm tươi ngon.",
                        color: "border-blue-200 bg-blue-50",
                        hd: "text-blue-800",
                        bd: "text-blue-700",
                      },
                      {
                        icon: "🧓",
                        title: "Đối với Ông Bà (Người lớn tuổi)",
                        body: "Không gian yên bình, trong lành với nhiều cây xanh rợp bóng, không khói bụi là nơi lý tưởng để ông bà đi dạo dưỡng sinh, tập cờ và tận hưởng tuổi già thanh thản bên con cháu.",
                        color: "border-emerald-200 bg-emerald-50",
                        hd: "text-emerald-800",
                        bd: "text-emerald-700",
                      },
                    ].map((item) => (
                      <div key={item.title} className={`rounded-2xl border ${item.color} p-5 flex items-start gap-4`}>
                        <span className="text-3xl shrink-0">{item.icon}</span>
                        <div>
                          <p className={`font-black text-sm mb-2 ${item.hd}`}>{item.title}</p>
                          <p className={`text-sm leading-relaxed ${item.bd}`}>{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/tien-ich">
                      🎡 Khám phá danh mục 50+ tiện ích nội khu đẳng cấp →
                    </LinkBtn>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS52["4"]}
                    alt="Gia đình ba thế hệ tản bộ hạnh phúc trong công viên rợp bóng cây xanh The Link City Dầu Giây"
                    caption="Không gian xanh đa thế hệ – Nơi gắn kết yêu thương của cả gia đình."
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 5 ── */}
              <section className="mb-12" id="di-lam">
                <SectionHeading id="di-lam">
                  5. Khoảng Cách Đi Làm Mỗi Ngày: 5 – 15 Phút Kết Nối Trọn Vẹn Các KCN Lớn
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đối với lực lượng kỹ sư, chuyên gia và cán bộ công nhân viên, cự ly di
                    chuyển từ nhà đến nơi làm việc là yếu tố sống còn quyết định chất lượng
                    cuộc sống. The Link City sở hữu vị trí tâm điểm kết nối các cụm công nghiệp
                    lớn nhất Đồng Nai:
                  </p>

                  <div className="space-y-3">
                    {[
                      { time: "5 phút",  dist: "2,5 km", dest: "KCN Dầu Giây (330 ha)",           note: "Nơi quy tụ hàng trăm DN FDI công nghệ cao và chế biến xuất khẩu", color: "bg-emerald-100 text-emerald-800" },
                      { time: "10 phút", dist: "~5 km",  dest: "KCN Gia Kiệm & cụm CN Thống Nhất", note: "Cụm công nghiệp vật liệu xây dựng, cơ khí, chế biến nông sản",      color: "bg-blue-100 text-blue-800" },
                      { time: "15 phút", dist: "~10 km", dest: "KCN Long Khánh & KCN Suối Tre",    note: "Kết nối theo trục Quốc lộ 1A thông thoáng",                          color: "bg-primary-100 text-primary-800" },
                      { time: "20 phút", dist: "~18 km", dest: "Cảng HKQT Long Thành",             note: "Trung tâm việc làm của hàng vạn nhân sự hàng không tương lai",      color: "bg-amber-100 text-amber-800" },
                    ].map((row) => (
                      <div key={row.dest} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 hover:border-primary-200 transition-colors">
                        <div className={`shrink-0 rounded-xl px-3 py-2 text-center min-w-[70px] font-black text-sm ${row.color}`}>
                          {row.time}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-slate-800 text-sm">{row.dest}</p>
                          <p className="text-slate-500 text-xs mt-0.5">{row.note}</p>
                        </div>
                        <div className="shrink-0 text-xs text-slate-400 font-medium">{row.dist}</div>
                      </div>
                    ))}
                  </div>

                  <InfoBox type="success">
                    Thay vì dậy từ 5h sáng chịu cảnh kẹt xe ngột ngạt từ TP.HCM về Đồng Nai,
                    việc sở hữu một ngôi nhà tại The Link City giúp bạn thảnh thơi thưởng thức
                    bữa sáng cùng gia đình và chỉ mất{" "}
                    <strong>10 phút lái xe</strong> là đã có mặt tại nơi làm việc.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/vi-tri">
                      📐 Xem chi tiết quy hoạch liên kết vùng các KCN →
                    </LinkBtn>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS52["5"]}
                    alt="Hình ảnh thực tế mẫu nhà phố hiện đại đã xây dựng hoàn thiện tại The Link City Dầu Giây"
                    caption="Mẫu nhà phố xây dựng thực tế khang trang, kiên cố tại khu đô thị The Link City."
                    images={images}
                    index={4}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 6 ── */}
              <section className="mb-12" id="thiet-ke">
                <SectionHeading id="thiet-ke">
                  6. Thiết Kế Mẫu Nhà T3-2b: Tối Ưu Công Năng Cho Gia Đình 4 – 6 Thành Viên
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi tích lũy đủ tài chính để tiến hành xây dựng, chủ nhà có thể áp dụng ngay
                    Bản vẽ thiết kế chuẩn{" "}
                    <strong className="text-slate-800">Mẫu nhà T3-2b (1 trệt 2 lầu)</strong>{" "}
                    đã được phê duyệt trong quy hoạch 1/500 của dự án:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        floor: "Tầng Trệt",
                        height: "Chiều cao 3,8m",
                        items: [
                          "Khoảng sân trước 3m rộng rãi để ô tô 7 chỗ và xe máy",
                          "Phòng khách liên thông phòng ăn và bếp ấm cúng",
                          "Phía sau là khoảng lùi 2m giếng trời thông gió lấy sáng tự nhiên",
                        ],
                        color: "border-amber-200 bg-amber-50",
                        hd: "text-amber-800",
                      },
                      {
                        floor: "Lầu 1",
                        height: "Chiều cao 3,4m",
                        items: [
                          "2 phòng ngủ rộng rãi",
                          "Phòng ngủ Master cho bố mẹ với ban công hướng gió và WC khép kín",
                        ],
                        color: "border-blue-200 bg-blue-50",
                        hd: "text-blue-800",
                      },
                      {
                        floor: "Lầu 2",
                        height: "Chiều cao 3,4m",
                        items: [
                          "1 phòng ngủ cho con cái",
                          "1 phòng thờ trang nghiêm hoặc phòng đọc sách",
                          "Khu vực giặt phơi và ban công ngắm nhìn công viên",
                        ],
                        color: "border-emerald-200 bg-emerald-50",
                        hd: "text-emerald-800",
                      },
                    ].map((item) => (
                      <div key={item.floor} className={`rounded-2xl border ${item.color} p-5`}>
                        <div className="flex items-baseline gap-3 mb-3">
                          <p className={`font-black text-base ${item.hd}`}>{item.floor}</p>
                          <span className="text-xs text-slate-500 italic">{item.height}</span>
                        </div>
                        <BulletList items={item.items} />
                      </div>
                    ))}
                  </div>

                  <InfoBox type="success">
                    <strong>Tổng mức đầu tư chỉ hơn 3 tỷ đồng</strong> cho một ngôi nhà phố 3
                    tầng hoàn chỉnh: Chi phí xây dựng hoàn thiện ~1,2–1,3 tỷ + Giá đất 1,85 tỷ
                    = Sở hữu trọn vẹn nhà phố diện tích sàn hơn 210m² — Một con số không tưởng
                    đối với bất kỳ đô thị vệ tinh nào quanh TP.HCM!
                  </InfoBox>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/thiet-ke">
                      📑 Xem trọn bộ bản vẽ kỹ thuật CAD mẫu nhà T3-2b →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 7: FAQ ── */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">
                  7. Các Câu Hỏi Thường Gặp Của Gia Đình Trẻ Trước Khi Mua Nhà
                </SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details
                      key={name}
                      className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary-300 transition-colors"
                    >
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

              {/* ── Section 8: CTA ── */}
              <section className="mb-12" id="dang-ky">
                <SectionHeading id="dang-ky">
                  8. Đăng Ký Nhận Bảng Dự Toán Chi Phí An Cư & Đặt Lịch Xem Nhà Mẫu Thực Tế
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đừng để tiền nhàn rỗi hao mòn theo lạm phát! Hãy biến những đồng vốn tích
                    lũy thành tổ ấm vững bền và tài sản gia tăng giá trị trọn đời cho gia đình
                    bạn tại The Link City Dầu Giây.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: "📊", title: "Bảng dự toán chi phí", desc: "Chi tiết vốn tự có, lịch vay và tiến độ thanh toán theo từng phương thức" },
                      { icon: "🏠", title: "Đặt lịch xem nhà mẫu", desc: "Trực tiếp tham quan căn nhà phố đã hoàn thiện tại dự án và sa bàn kiến trúc 21ha" },
                      { icon: "📋", title: "Tư vấn pháp lý miễn phí", desc: "Hỗ trợ kiểm tra hồ sơ sổ hồng, quy hoạch 1/500 và thủ tục vay ngân hàng" },
                    ].map((item) => (
                      <div key={item.icon} className="rounded-2xl border border-primary-200 bg-primary-50 p-5 text-center">
                        <p className="text-2xl mb-2">{item.icon}</p>
                        <p className="font-black text-primary-800 text-sm mb-1">{item.title}</p>
                        <p className="text-primary-600 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-primary-200 bg-primary-50 p-6 space-y-3">
                    <p className="font-black text-primary-800 text-base">
                      LIÊN HỆ BỘ PHẬN TƯ VẤN AN CƯ KIM OANH ĐỒNG NAI
                    </p>
                    <div className="space-y-2 text-sm text-primary-700">
                      <p><strong>Dự án:</strong> The Link City Dầu Giây (KDC A1-C1 Đô thị Dầu Giây)</p>
                      <p>
                        <strong>Website:</strong>{" "}
                        <a href="https://kimoanhdongnai.com.vn/the-link-city" className="underline hover:text-primary-900">
                          kimoanhdongnai.com.vn/the-link-city
                        </a>
                      </p>
                      <p><strong>Văn phòng giao dịch:</strong> 268A Phan Trung, P. Tam Hiệp, TP. Biên Hòa, Đồng Nai</p>
                      <p><strong>Văn phòng dự án:</strong> Ngã tư QL1A & QL20, xã Dầu Giây, H. Thống Nhất, Đồng Nai</p>
                      <p><strong>Hotline:</strong>{" "}
                        <a href="tel:0937587438" className="font-black text-primary-900 hover:underline">0937.587.438</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Bản quyền bài viết thuộc về Kim Oanh Đồng Nai — Mọi thông tin sao chép
                      vui lòng trích dẫn nguồn:{" "}
                      <a href="https://kimoanhdongnai.com.vn/the-link-city" className="text-primary-600 underline">
                        kimoanhdongnai.com.vn/the-link-city
                      </a>
                      . Cập nhật: {PUBLISHED}
                    </p>
                  </div>
                </div>
              </section>

              {/* Bài viết liên quan nội tuyến */}
              <section className="mb-12">
                <SectionHeading>Các nội dung liên quan về The Link City</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city",                                                                 label: "The Link City Dầu Giây — Tổng quan dự án" },
                    { href: "/the-link-city/vi-tri",                                                          label: "Vị trí & Liên kết vùng The Link City" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                                      label: "Tổng quan The Link City Dầu Giây" },
                    { href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",           label: "Bảng giá & Bài toán vay ngân hàng 2026" },
                    { href: "/tin-tuc/cam-nang-chon-lo-dat-nen-the-link-city-dau-giay-2026",                  label: "Cẩm nang chọn lô đất nền The Link City" },
                    { href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",                         label: "Nhật ký thực địa The Link City 2026" },
                    { href: "/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city",                  label: "Đón sóng đô thị hóa Dầu Giây 2026–2030" },
                    { href: "/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026",                     label: "Hệ sinh thái 50+ tiện ích The Link City" },
                  ].map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors px-4 py-3 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50"
                    >
                      <span className="text-primary-400 flex-shrink-0">→</span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài mang tính tham khảo. Dự báo tài chính dựa trên thông số
                  lãi suất tại thời điểm xuất bản, có thể thay đổi theo chính sách ngân hàng.
                  Nhà đầu tư và người mua cần tự thẩm định và chịu trách nhiệm với quyết định
                  của mình. Ban biên tập Kim Oanh Đồng Nai — Cập nhật: {PUBLISHED}
                </p>
              </div>

            </article>

            {/* ── Sidebar ──────────────────────────────────── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                {/* Nav nhanh */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu The Link City</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/the-link-city",           label: "Tổng quan dự án" },
                      { href: "/the-link-city/vi-tri",    label: "Vị trí & Liên kết vùng" },
                      { href: "/the-link-city/mat-bang",  label: "Mặt bằng tổng thể" },
                      { href: "/the-link-city/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/the-link-city/tien-do",   label: "Tiến độ xây dựng" },
                      { href: "/the-link-city/bang-gia",  label: "Bảng giá mới nhất" },
                      { href: "/the-link-city/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/the-link-city/hinh-anh",  label: "Hình ảnh thực tế" },
                    ].map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-primary-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white"
                      >
                        <span>{l.label}</span>
                        <span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bài toán tài chính nhanh */}
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="font-bold text-emerald-800 text-sm mb-3">💰 Bài toán an cư nhanh</p>
                  <div className="space-y-2 text-xs text-emerald-700">
                    {[
                      ["Giá đất (95m²)",      "1,852 tỷ đồng"],
                      ["Vốn tự có (30%)",     "~555 triệu"],
                      ["Vay ngân hàng (70%)", "~1,296 tỷ"],
                      ["Trả góp/tháng",       "~12–14 triệu"],
                      ["Thời hạn vay",        "20 năm"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between">
                        <span>{k}</span>
                        <span className="font-bold text-emerald-900">{v}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/the-link-city/thanh-toan"
                    className="mt-4 block text-center bg-emerald-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors"
                  >
                    Tính toán chi tiết →
                  </a>
                </div>

                {/* Bài viết liên quan sidebar */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Tổng quan The Link City",      href: "/tin-tuc/tong-quan-the-link-city-dau-giay" },
                      { label: "Cẩm nang chọn lô đất nền",     href: "/tin-tuc/cam-nang-chon-lo-dat-nen-the-link-city-dau-giay-2026" },
                      { label: "Bảng giá & Vay ngân hàng",    href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026" },
                      { label: "Đón sóng đô thị hóa 2026–2030", href: "/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA đỏ */}
                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Đặt lịch xem nhà mẫu</p>
                  <p className="text-primary-100 text-xs mb-4">
                    Tham quan căn nhà phố đã hoàn thiện và sa bàn kiến trúc 21ha tại dự án.
                  </p>
                  <a
                    href="tel:0937587438"
                    className="block text-center bg-white text-primary-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-colors"
                  >
                    0937.587.438
                  </a>
                </div>

              </div>
            </aside>

          </div>
        </div>

        {/* ── CTA Banner ────────────────────────────────────── */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-500 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl font-black mb-3">
              Hiện thực hóa giấc mơ an cư ngay hôm nay
            </h2>
            <p className="text-primary-100 text-base mb-8 leading-relaxed">
              Chỉ với 550 triệu vốn tự có và 12 triệu/tháng trả góp — Sở hữu nhà phố 3 tầng
              sổ hồng riêng tại The Link City Dầu Giây trước khi giá tăng theo đô thị hóa.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/the-link-city"
                className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Tìm hiểu The Link City →
              </a>
              <a
                href="tel:0937587438"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold px-7 py-3.5 rounded-full transition-all text-sm"
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
              href: "/tin-tuc/tong-quan-the-link-city-dau-giay",
              title: "Tổng Quan Dự Án The Link City Dầu Giây 2026",
              description: "Thông số kỹ thuật, vị trí, pháp lý và tiềm năng đầu tư toàn diện.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",
              title: "Bảng Giá The Link City & Bài Toán Vay Ngân Hàng 2026",
              description: "Chi tiết giá từng block, 4 phương thức thanh toán và bảng tính trả nợ.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city",
              title: "Đón Sóng Đô Thị Hóa Dầu Giây 2026–2030",
              description: "Bài học Dĩ An tăng 300%, Long Khánh 250% — Cơ hội nhân đôi tài sản tại The Link City.",
              tag: "Phân tích thị trường",
            },
            {
              href: "/tin-tuc/cam-nang-chon-lo-dat-nen-the-link-city-dau-giay-2026",
              title: "Cẩm Nang Chọn Lô Đất Nền The Link City 2026",
              description: "Phân tích Block LK17A, LK17B và chiến lược chọn vị trí đẹp nhất.",
              tag: "Tin dự án",
            },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}
