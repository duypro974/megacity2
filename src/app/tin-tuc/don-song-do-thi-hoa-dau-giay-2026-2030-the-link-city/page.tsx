"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS51 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city`;
const PUBLISHED     = "15/09/2026";
const PUBLISHED_ISO = "2026-09-15";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Đón Sóng Đô Thị Hóa Dầu Giây 2026 – 2030: Cơ Hội \"Nhân Đôi Tài Sản\" Cùng The Link City",
  description:
    "Phân tích lộ trình Dầu Giây lên đô thị loại IV (Thị xã) giai đoạn 2026-2030: Bài học tăng giá từ Dĩ An, Long Khánh và cơ hội nhân đôi tài sản tại The Link City.",
  image: [IMG_NEWS51["1"], IMG_NEWS51["2"], IMG_NEWS51["4"]],
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
  keywords:
    "The Link City Dầu Giây, đô thị Dầu Giây, quy hoạch Dầu Giây 2030, Dầu Giây lên thị xã, đầu tư đất nền Dầu Giây",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Khi Dầu Giây lên thị xã thì đất tại The Link City có bị thay đổi quy hoạch không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Không bị thay đổi tiêu cực mà chỉ được nâng cấp giá trị. Dự án đã được phê duyệt quy hoạch chi tiết 1/500 chính thức và nằm trong đồ án quy hoạch tổng thể đô thị Dầu Giây. Khi lên thị xã, khu đô thị sẽ được thừa hưởng hệ thống tiện ích công cộng và hạ tầng dịch vụ cao cấp hơn.",
      },
    },
    {
      "@type": "Question",
      name: "Nếu tôi mua đầu tư thì thời điểm nào nên chốt lời?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà đầu tư lướt sóng có thể chốt lời sau 6–12 tháng khi chủ đầu tư nâng giá các đợt tiếp theo (12–18%). Nhà đầu tư dài hạn nên giữ 2–3 năm để đón sóng thông xe cao tốc và đề án thành lập thị xã (kỳ vọng 50–100%).",
      },
    },
    {
      "@type": "Question",
      name: "Quy trình ký gửi bán lại cho Kim Oanh như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khách hàng chỉ cần liên hệ phòng kinh doanh Kim Oanh Đồng Nai. Đội ngũ chuyên viên sẽ hỗ trợ định giá theo thị trường, tìm kiếm khách mua và làm trọn gói thủ tục sang tên công chứng.",
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
      name: "Đón sóng đô thị hóa Dầu Giây 2026–2030",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS51["1"],
    alt: "Phối cảnh quy hoạch phát triển đô thị Dầu Giây hiện đại giai đoạn 2026 đến 2030",
    caption: "Đô thị Dầu Giây đang trên lộ trình chuyển mình mạnh mẽ trở thành đô thị vệ tinh hiện đại phía Đông",
  },
  {
    src: IMG_NEWS51["2"],
    alt: "Sa bàn kiến trúc The Link City quy mô 21ha trong tổng thể khu đô thị Dầu Giây 149ha",
    caption: "The Link City quy mô 21ha đóng vai trò là phân khu hạt nhân sầm uất nhất của đô thị Dầu Giây",
  },
  {
    src: IMG_NEWS51["3"],
    alt: "Giấy chứng nhận quyền sử dụng đất sổ hồng trao tay dự án The Link City Dầu Giây",
    caption: "Sổ hồng riêng từng nền sở hữu lâu dài – Tấm khiên an toàn tuyệt đối cho dòng vốn đầu tư",
  },
  {
    src: IMG_NEWS51["4"],
    alt: "Phối cảnh tuyến phố đi bộ thương mại sầm uất rực rỡ ánh đèn tại The Link City Dầu Giây",
    caption: "Diện mạo một đô thị thị xã hiện đại và phồn hoa trong tương lai gần",
  },
  {
    src: IMG_NEWS51["5"],
    alt: "Hình ảnh thực tế nhà phố xây dựng hoàn thiện khang trang tại The Link City Dầu Giây",
    caption: "Những ngôi nhà khang trang đầu tiên đã hiện hữu, mở đầu cho làn sóng lấp đầy cư dân",
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

function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" | "success" }) {
  const s =
    type === "warn"    ? "bg-amber-50 border-amber-200 text-amber-800"
    : type === "success" ? "bg-emerald-50 border-emerald-200 text-emerald-800"
    : "bg-slate-50 border-slate-200 text-slate-700";
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
      className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all"
    >
      {children}
    </a>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────
const COMPARISON_DATA = [
  { 
    place: "Dĩ An (Bình Dương)", 
    period: "Từ Thị xã lên TP (2018–2020)", 
    before: "18 – 25 triệu/m²", 
    after: "45 – 70 triệu/m²", 
    growth: "Tăng 250% – 300%",
    color: "emerald"
  },
  { 
    place: "Long Khánh (Đồng Nai)", 
    period: "Từ Thị xã lên TP (2017–2019)", 
    before: "12 – 18 triệu/m²", 
    after: "30 – 45 triệu/m²", 
    growth: "Tăng 200% – 250%",
    color: "blue"
  },
  { 
    place: "Bến Cát (Bình Dương)", 
    period: "Từ Thị xã lên TP (2021–2024)", 
    before: "14 – 20 triệu/m²", 
    after: "32 – 50 triệu/m²", 
    growth: "Tăng 200% – 250%",
    color: "amber"
  },
  { 
    place: "The Link City (Dầu Giây)", 
    period: "Hiện tại (2026) → Lên Thị xã (2028–2030)", 
    before: "19,5 – 22,5 triệu/m²", 
    after: "Dự phóng: 40 – 55 triệu/m²", 
    growth: "Kỳ vọng: Nhân đôi tài sản",
    color: "red"
  },
];

const MILESTONES = [
  {
    n: "01",
    icon: "✈️",
    title: "Cảng HKQT Long Thành cất cánh thương mại",
    body: "Cách sân bay chỉ 20 phút, toàn bộ hệ sinh thái phụ trợ văn phòng logistics và nơi ở cho chuyên gia hàng không sẽ tràn về Dầu Giây tìm quỹ đất đô thị giá mềm.",
    color: "blue",
  },
  {
    n: "02",
    icon: "🛣️",
    title: "Khởi công Cao tốc Dầu Giây – Tân Phú",
    body: "Mỗi khi tuyến cao tốc khởi công, giá đất tại điểm đầu (nút giao Dầu Giây) luôn tăng tối thiểu 20–30% nhờ hiệu ứng truyền thông và đổ bộ của các nhà thầu xây dựng.",
    color: "amber",
  },
  {
    n: "03",
    icon: "🏪",
    title: "Hoàn thành TTTM 2,6ha & Đón cư dân về xây nhà",
    body: "Khi các dãy nhà phố đầu tiên sáng đèn kinh doanh và trung tâm thương mại mở cửa, giá trị sử dụng thực tế của đất nền sẽ đẩy giá bán thứ cấp tăng vọt.",
    color: "emerald",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function DonSongDoThiHoaPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Đón sóng đô thị hóa Dầu Giây 2026–2030</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Phân tích thị trường
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 12 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Đón Sóng Đô Thị Hóa Dầu Giây 2026 – 2030: Cơ Hội "Nhân Đôi Tài Sản" Cùng The Link City
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Lộ trình Dầu Giây lên đô thị loại IV, bài học từ Dĩ An tăng 300% và Long Khánh 250%.{" "}
              <a href="/the-link-city" className="text-amber-600 font-semibold hover:underline">
                The Link City
              </a>{" "}
              Dầu Giây: Cơ hội cuối cùng mua ở vùng đệm an toàn 1,85 tỷ trước sóng tăng giá.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to phối cảnh đô thị Dầu Giây"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS51["1"]}
                alt="Phối cảnh quy hoạch phát triển đô thị Dầu Giây hiện đại giai đoạn 2026 đến 2030"
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
              Đô thị Dầu Giây đang trên lộ trình chuyển mình mạnh mẽ trở thành đô thị vệ tinh hiện đại phía Đông
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
                    ["#quy-luat",     "1. Quy luật 'Mua huyện, bán thị xã'"],
                    ["#lo-trinh",     "2. Lộ trình Dầu Giây lên đô thị IV"],
                    ["#the-link-city", "3. The Link City — Trái tim thị xã"],
                    ["#bai-hoc",      "4. Bài học Dĩ An, Long Khánh"],
                    ["#cot-moc",      "5. 3 Cột mốc vàng 24 tháng tới"],
                    ["#chien-luoc",   "6. Chiến lược đi trước dòng tiền"],
                    ["#faq",          "7. Câu hỏi về quy hoạch & thoái vốn"],
                    ["#dang-ky",      "8. Tải báo cáo & Đăng ký tư vấn"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* ── Section 1: Quy luật ── */}
              <section className="mb-12" id="quy-luat">
                <SectionHeading id="quy-luat">
                  1. Quy Luật Bất Biến Của Bất Động Sản: "Mua Khi Là Huyện, Bán Khi Lên Thị Xã"
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong lịch sử hơn 30 năm phát triển của thị trường bất động sản Việt Nam, có
                    một quy luật làm giàu kinh điển đã giúp hàng nghìn nhà đầu tư{" "}
                    <strong className="text-slate-800">nhân 3, nhân 5 tài sản</strong>: Đó là
                    đón đầu chu kỳ nâng cấp đơn vị hành chính (từ Huyện lên Thị xã, hoặc từ Thị
                    xã lên Thành phố).
                  </p>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                    <p className="font-bold text-amber-800 text-sm mb-3">🤔 Vì sao lại có quy luật này?</p>
                    <ul className="space-y-2 text-amber-700 text-sm">
                      <li>• <strong>Dòng vốn ngân sách nhà nước</strong> sẽ đổ dồn hàng chục nghìn tỷ đồng để nâng cấp hạ tầng: mở rộng quốc lộ, trải nhựa đường liên xã, xây dựng bệnh viện đa khoa, TTTM, trường học.</li>
                      <li>• <strong>Hạ tầng thay đổi</strong> kéo theo các tập đoàn lớn đổ về mở nhà máy, KCN, trung tâm logistics; lượng dân số cơ học tăng vọt.</li>
                      <li>• <strong>Mặt bằng giá đất</strong> bắt buộc phải thiết lập một "mặt bằng giá mới" phù hợp với chuẩn đô thị.</li>
                    </ul>
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hiện tại, <strong className="text-amber-600">Dầu Giây</strong> (huyện Thống
                    Nhất, tỉnh Đồng Nai) đang đứng chính xác tại{" "}
                    <strong className="text-slate-800">"chân sóng"</strong> của chu kỳ chuyển
                    mình vĩ đại này, và The Link City chính là tâm điểm đón trọn lực đẩy đô thị
                    hóa đó.
                  </p>
                </div>
              </section>
              {/* ── Section 2: Lộ trình ── */}
              <section className="mb-12" id="lo-trinh">
                <SectionHeading id="lo-trinh">
                  2. Lộ Trình Phát Triển Dầu Giây Lên Đô Thị Loại IV Giai Đoạn 2026 – 2030
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo Đồ án Quy hoạch xây dựng vùng tỉnh Đồng Nai và Quy hoạch chung đô thị
                    Dầu Giây đã được UBND tỉnh phê duyệt:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        icon: "🎯",
                        title: "Mục tiêu quy hoạch",
                        body: "Xây dựng đô thị Dầu Giây trở thành trung tâm kinh tế, dịch vụ thương mại, logistics và đầu mối giao thông trọng điểm của vùng kinh tế phía Đông tỉnh Đồng Nai.",
                      },
                      {
                        icon: "📅",
                        title: "Mốc thời gian",
                        body: "Phấn đấu đạt tiêu chuẩn Đô thị loại IV và nâng cấp lên Thị xã Dầu Giây trong giai đoạn 2026 – 2030.",
                      },
                      {
                        icon: "🗺️",
                        title: "Quy mô không gian",
                        body: "Toàn bộ khu đô thị Dầu Giây rộng khoảng 149 ha, đóng vai trò \"hạt nhân\" kết nối các đô thị vệ tinh lân cận gồm Trảng Bom, Long Khánh và Định Quán.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                        <span className="text-2xl shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-black text-blue-800 text-sm mb-1">{item.title}</p>
                          <p className="text-blue-700 text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với lợi thế nằm ngay giao lộ{" "}
                    <strong className="text-slate-800">Quốc lộ 1A và Quốc lộ 20</strong> —
                    điểm khởi đầu của tuyến Cao tốc Dầu Giây – Phan Thiết và Cao tốc Dầu Giây –
                    Liên Khương, Dầu Giây hội tụ đầy đủ các tiêu chuẩn khắt khe để bứt phá lên
                    thị xã.
                  </p>

                  <ArticleFigure
                    src={IMG_NEWS51["2"]}
                    alt="Sa bàn kiến trúc The Link City quy mô 21ha trong tổng thể khu đô thị Dầu Giây 149ha"
                    caption="The Link City quy mô 21ha đóng vai trò là phân khu hạt nhân sầm uất nhất của đô thị Dầu Giây"
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/vi-tri">
                      📍 Xem chi tiết bản đồ kết nối hạ tầng giao thông liên vùng →
                    </LinkBtn>
                  </div>
                </div>
              </section>
              {/* ── Section 3: The Link City ── */}
              <section className="mb-12" id="the-link-city">
                <SectionHeading id="the-link-city">
                  3. The Link City: Trái Tim Hành Chính – Thương Mại Của Thị Xã Tương Lai
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong một thị xã mới hình thành, khu vực nào được quy hoạch bài bản nhất, có
                    trung tâm thương mại lớn nhất và hạ tầng đồng bộ nhất sẽ trở thành{" "}
                    <strong className="text-slate-800">"Trung tâm thương mại sầm uất nhất"</strong>{" "}
                    của thị xã đó.
                  </p>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tại Dầu Giây, vị trí đó không đâu khác ngoài{" "}
                    <strong className="text-amber-600">The Link City</strong>:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        icon: "🏢",
                        title: "Sở hữu quỹ đất công trình biểu tượng",
                        body: "Trung tâm thương mại 2,6ha nằm ngay lõi dự án sẽ là nơi tập trung các dịch vụ ngân hàng, giải trí, nhà hàng ẩm thực cao cấp phục vụ toàn bộ người dân thị xã.",
                      },
                      {
                        icon: "🌟",
                        title: "Chuẩn mực sống tiên phong",
                        body: "Khu đô thị đầu tiên tại Thống Nhất được đầu tư hạ tầng ngầm 100% (điện âm, viễn thông ngầm, thoát nước riêng biệt) cùng hệ thống công viên cây xanh và cụm sân thể thao pickleball đạt chuẩn.",
                      },
                      {
                        icon: "📜",
                        title: "Pháp lý sổ hồng vĩnh viễn",
                        body: "Toàn bộ đất nền tại dự án là đất ở đô thị (ODT) sở hữu lâu dài, được nhà nước công nhận quyền sử dụng đất từng nền minh bạch.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                        <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                        <div>
                          <p className="text-emerald-800 font-bold text-sm mb-1">{item.title}</p>
                          <p className="text-emerald-700 text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS51["3"]}
                    alt="Giấy chứng nhận quyền sử dụng đất sổ hồng trao tay dự án The Link City Dầu Giây"
                    caption="Sổ hồng riêng từng nền sở hữu lâu dài – Tấm khiên an toàn tuyệt đối cho dòng vốn đầu tư"
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/phap-ly">
                      📑 Xem hồ sơ pháp lý, quy hoạch 1/500 và công văn chỉ đạo cấp sổ →
                    </LinkBtn>
                  </div>
                </div>
              </section>
              {/* ── Section 4: Bài học lịch sử ── */}
              <section className="mb-12" id="bai-hoc">
                <SectionHeading id="bai-hoc">
                  4. Bài Học Lịch Sử: Biên Độ Tăng Giá Đất Thần Tốc Tại Dĩ An & Long Khánh
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Để hình dung mức độ tăng giá của The Link City khi Dầu Giây lên thị xã, hãy
                    nhìn lại những bài học thực tế đã diễn ra tại khu vực phía Nam:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[680px]">
                      <thead>
                        <tr className="bg-slate-700 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Địa phương</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Giai đoạn chuyển mình</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Giá trước nâng cấp</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Giá sau 2–3 năm</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Tỷ lệ tăng</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {COMPARISON_DATA.map((row, i) => {
                          const bgColor = 
                            row.color === "emerald" ? "bg-emerald-50" :
                            row.color === "blue" ? "bg-blue-50" :
                            row.color === "amber" ? "bg-amber-50" :
                            "bg-red-50";
                          const textColor = 
                            row.color === "emerald" ? "text-emerald-700" :
                            row.color === "blue" ? "text-blue-700" :
                            row.color === "amber" ? "text-amber-700" :
                            "text-red-700";
                          
                          return (
                            <tr key={row.place} className={i % 2 === 0 ? "bg-white" : bgColor}>
                              <td className={`px-4 py-3 font-semibold text-sm align-top ${textColor}`}>{row.place}</td>
                              <td className="px-4 py-3 text-slate-600 text-xs align-top">{row.period}</td>
                              <td className="px-4 py-3 text-slate-600 text-sm align-top">{row.before}</td>
                              <td className="px-4 py-3 text-slate-600 text-sm align-top">{row.after}</td>
                              <td className={`px-4 py-3 font-bold text-sm align-top ${textColor}`}>{row.growth}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <InfoBox type="success">
                    <strong>Con số không biết nói dối!</strong> Những ai mua đất tại Dĩ An năm
                    2017 hay Long Khánh năm 2017 với mức giá dưới 20 triệu/m² đều đã sở hữu
                    những khối tài sản khổng lồ sau một chu kỳ đô thị hóa.
                  </InfoBox>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hôm nay, <strong className="text-amber-600">Dầu Giây năm 2026</strong> đang
                    ở đúng vị trí của Dĩ An và Long Khánh của 7 năm trước, mở ra{" "}
                    <strong className="text-slate-800">cánh cửa vàng</strong> cho những nhà đầu
                    tư có tầm nhìn xa.
                  </p>

                  <ArticleFigure
                    src={IMG_NEWS51["4"]}
                    alt="Phối cảnh tuyến phố đi bộ thương mại sầm uất rực rỡ ánh đèn tại The Link City Dầu Giây"
                    caption="Diện mạo một đô thị thị xã hiện đại và phồn hoa trong tương lai gần"
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />
                </div>
              </section>
              {/* ── Section 5: 3 Cột mốc vàng ── */}
              <section className="mb-12" id="cot-moc">
                <SectionHeading id="cot-moc">
                  5. 3 Cột Mốc Vàng Kích Hoạt Làn Sóng Tăng Giá Trong 24 Tháng Tới
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đầu tư vào The Link City thời điểm này không phải là{" "}
                    <em>"ngồi chờ đợi may rủi"</em>, mà là đón đầu{" "}
                    <strong className="text-slate-800">3 cột mốc thời gian rõ ràng</strong> đã
                    được chính phủ và tỉnh Đồng Nai ấn định:
                  </p>

                  <div className="space-y-4">
                    {MILESTONES.map((m) => {
                      const colors: Record<string, string> = {
                        blue:    "border-blue-200 bg-blue-50",
                        amber:   "border-amber-200 bg-amber-50",
                        emerald: "border-emerald-200 bg-emerald-50",
                      };
                      const hd: Record<string, string> = {
                        blue: "text-blue-800", amber: "text-amber-800", emerald: "text-emerald-800",
                      };
                      const bd: Record<string, string> = {
                        blue: "text-blue-700", amber: "text-amber-700", emerald: "text-emerald-700",
                      };
                      return (
                        <div key={m.n} className={`rounded-2xl border ${colors[m.color]} p-6 flex items-start gap-4`}>
                          <div className="flex flex-col items-center gap-1 shrink-0">
                            <span className="text-slate-400 font-black text-xs">{m.n}</span>
                            <span className="text-2xl">{m.icon}</span>
                          </div>
                          <div>
                            <p className={`font-black text-sm mb-2 ${hd[m.color]}`}>Cột mốc {m.n}: {m.title}</p>
                            <p className={`text-sm leading-relaxed ${bd[m.color]}`}>{m.body}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS51["5"]}
                    alt="Hình ảnh thực tế nhà phố xây dựng hoàn thiện khang trang tại The Link City Dầu Giây"
                    caption="Những ngôi nhà khang trang đầu tiên đã hiện hữu, mở đầu cho làn sóng lấp đầy cư dân"
                    images={images}
                    index={4}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/tien-do">
                      🏗️ Xem nhật ký thi công thực tế và video flycam mới nhất →
                    </LinkBtn>
                  </div>
                </div>
              </section>
              {/* ── Section 6: Chiến lược ── */}
              <section className="mb-12" id="chien-luoc">
                <SectionHeading id="chien-luoc">
                  6. Chiến Lược Đi Trước Dòng Tiền: Tại Sao Mua Ở Giá 1,85 Tỷ Là Vùng Đệm An Toàn Nhất?
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tại sao các chuyên gia tài chính luôn khuyên mua ở giai đoạn mở bán đợt 1 với
                    mức giá <strong className="text-amber-600">1,852 tỷ/nền</strong> (Block LK17A)?
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: "🛡️",
                        title: "Vùng đệm an toàn về giá",
                        body: "Với đơn giá khoảng 19,5 triệu/m², mức giá này gần như đã chạm \"đáy\" chi phí đầu tư (gồm tiền sử dụng đất, chi phí hạ tầng ngầm, công viên, chi phí pháp lý). Ngay cả khi thị trường có biến động nhẹ, giá đất tại đây cũng không thể giảm thêm vì giá trị thực tế đã vượt xa giá bán.",
                        color: "emerald",
                      },
                      {
                        icon: "💰",
                        title: "Bài toán đòn bẩy chỉ từ 550 triệu",
                        body: "Số vốn ban đầu bỏ ra quá nhỏ (30%), được ngân hàng OCB/Vietcombank bảo lãnh cho vay 70% với thời hạn 20 năm. Tiền trả góp mỗi tháng chỉ tương đương thu nhập của một người làm công ăn lương bình thường, hoàn toàn không gây áp lực tài chính.",
                        color: "blue",
                      },
                      {
                        icon: "📈",
                        title: "Tỷ suất sinh lời vượt trội",
                        body: "Nếu mua đất ở giai đoạn thị xã đã định hình (giá 40–50 triệu/m²), bạn cần bỏ ra từ 4–5 tỷ đồng và biên độ tăng giá chỉ còn khoảng 10–15%/năm. Nhưng nếu mua ngay hôm nay với giá 1,85 tỷ, tiềm năng tăng lên 3 tỷ–3,5 tỷ đồng sau 2–3 năm là hoàn toàn khả thi.",
                        color: "amber",
                      },
                    ].map((item) => {
                      const colors: Record<string, string> = {
                        emerald: "border-emerald-200 bg-emerald-50",
                        blue:    "border-blue-200 bg-blue-50",
                        amber:   "border-amber-200 bg-amber-50",
                      };
                      const hd: Record<string, string> = {
                        emerald: "text-emerald-800", blue: "text-blue-800", amber: "text-amber-800",
                      };
                      const bd: Record<string, string> = {
                        emerald: "text-emerald-700", blue: "text-blue-700", amber: "text-amber-700",
                      };
                      return (
                        <div key={item.title} className={`rounded-2xl border ${colors[item.color]} p-5 flex items-start gap-3`}>
                          <span className="text-2xl shrink-0">{item.icon}</span>
                          <div>
                            <p className={`font-black text-sm mb-1 ${hd[item.color]}`}>{item.title}</p>
                            <p className={`text-sm leading-relaxed ${bd[item.color]}`}>{item.body}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/bang-gia">
                      💰 Xem bảng giá niêm yết giỏ hàng gốc đợt 1 →
                    </LinkBtn>
                    <LinkBtn href="/the-link-city/thanh-toan">
                      🧮 Tự tính toán lịch trả nợ vay ngân hàng từng tháng →
                    </LinkBtn>
                  </div>
                </div>
              </section>
              {/* ── FAQ ── */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">
                  7. Các Câu Hỏi Thường Gặp Về Quy Hoạch & Thoái Vốn
                </SectionHeading>
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

              {/* ── Section 8: Đăng ký ── */}
              <section className="mb-12" id="dang-ky">
                <SectionHeading id="dang-ky">
                  8. Tải Báo Cáo Quy Hoạch Huyện Thống Nhất & Đăng Ký Tư Vấn Đầu Tư
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cơ hội đón đầu chân sóng đô thị hóa Dầu Giây với suất đầu tư chỉ từ{" "}
                    <strong className="text-amber-600">550 triệu đồng vốn tự có</strong> đang
                    mở ra cho những nhà đầu tư nhanh nhạy nhất.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: "📊", title: "Báo cáo quy hoạch", desc: "Tài liệu chi tiết về lộ trình phát triển Dầu Giây lên thị xã" },
                      { icon: "💼", title: "Tư vấn đầu tư", desc: "Phân tích portfolio và chiến lược phù hợp với từng profile" },
                      { icon: "🏆", title: "Ưu đãi đợt 1", desc: "Báo giá và chính sách thanh toán đặc biệt cho khách VIP" },
                    ].map((item) => (
                      <div key={item.icon} className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
                        <p className="text-2xl mb-2">{item.icon}</p>
                        <p className="font-black text-amber-800 text-sm mb-1">{item.title}</p>
                        <p className="text-amber-600 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 space-y-3">
                    <p className="font-black text-amber-800 text-base">
                      LIÊN HỆ PHÒNG KINH DOANH KIM OANH ĐỒNG NAI
                    </p>
                    <div className="space-y-2 text-sm text-amber-700">
                      <p><strong>Dự án:</strong> The Link City Dầu Giây (KDC A1-C1 Đô thị Dầu Giây)</p>
                      <p>
                        <strong>Website:</strong>{" "}
                        <a href="https://kimoanhdongnai.com.vn/the-link-city" className="underline hover:text-amber-900">
                          kimoanhdongnai.com.vn/the-link-city
                        </a>
                      </p>
                      <p><strong>Văn phòng giao dịch:</strong> 268A Phan Trung, P. Tam Hiệp, TP. Biên Hòa, Đồng Nai</p>
                      <p><strong>Văn phòng dự án:</strong> Ngã tư QL1A & QL20, xã Dầu Giây, H. Thống Nhất, Đồng Nai</p>
                    </div>
                  </div>

                  <InfoBox>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Bản quyền bài viết thuộc về Kim Oanh Đồng Nai — Mọi thông tin sao chép
                      vui lòng trích dẫn nguồn:{" "}
                      <a href="https://kimoanhdongnai.com.vn/the-link-city" className="text-amber-600 underline">
                        kimoanhdongnai.com.vn/the-link-city
                      </a>
                    </p>
                  </InfoBox>
                </div>
              </section>
              {/* Tìm hiểu thêm */}
              <section className="mb-12">
                <SectionHeading>Các nội dung liên quan về The Link City</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city",                                                              label: "The Link City Dầu Giây — Tổng quan dự án" },
                    { href: "/the-link-city/vi-tri",                                                       label: "Vị trí & Liên kết vùng The Link City" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                                   label: "Tổng quan The Link City Dầu Giây" },
                    { href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",       label: "Bảng giá & Bài toán vay ngân hàng" },
                    { href: "/tin-tuc/cam-nang-chon-lo-dat-nen-the-link-city-dau-giay-2026",              label: "Cẩm nang chọn lô đất nền" },
                    { href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",                      label: "Nhật ký thực địa The Link City" },
                    { href: "/tin-tuc/shophouse-the-link-city-dau-giay-tiem-nang-kinh-doanh-2026",        label: "Shophouse The Link City 2026" },
                    { href: "/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026",                 label: "Hệ sinh thái 50+ tiện ích" },
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
                    Lịch sử bất động sản Việt Nam đã chứng minh: Những cơ hội{" "}
                    <strong className="text-slate-800">"nhân đôi, nhân ba tài sản"</strong> luôn
                    xuất hiện tại các thời điểm chuyển giao đơn vị hành chính. Dĩ An, Long Khánh,
                    Bến Cát đã qua, giờ đây đến lượt{" "}
                    <strong className="text-amber-600">Dầu Giây</strong>.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    The Link City không chỉ là một dự án bất động sản — đó là{" "}
                    <strong className="text-slate-800">tấm vé tàu tốc hành</strong> đưa bạn đến
                    vùng đất hứa của làn sóng đô thị hóa Dầu Giây 2026–2030. Cơ hội chỉ đến một
                    lần và không chờ đợi ai.
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài mang tính phân tích và tham khảo. Dự báo tăng giá dựa trên
                  xu hướng lịch sử và quy hoạch được công bố, không phải cam kết. Nhà đầu tư cần
                  nghiên cứu kỹ và tự chịu trách nhiệm với quyết định của mình.
                  Ban biên tập Kim Oanh Đồng Nai — Cập nhật: {PUBLISHED}
                </p>
              </div>

            </article>
            {/* ── Sidebar ──────────────────────────────────── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

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
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-amber-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white"
                      >
                        <span>{l.label}</span>
                        <span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-bold text-amber-800 text-sm mb-3">Timeline đô thị hóa</p>
                  <div className="space-y-2">
                    {[
                      ["2026", "Mở bán đợt 1 — Giá 1,85 tỷ"],
                      ["2027", "Sân bay Long Thành cất cánh"],
                      ["2028", "Khởi công cao tốc Dầu Giây–Tân Phú"],
                      ["2030", "Dầu Giây lên thị xã"],
                      ["2032", "Dự phóng giá: 3–3,5 tỷ/nền"],
                    ].map(([year, event]) => (
                      <div key={year}>
                        <p className="text-amber-700 text-xs font-bold">{year}</p>
                        <p className="text-amber-900 text-xs">{event}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Tổng quan The Link City",     href: "/tin-tuc/tong-quan-the-link-city-dau-giay" },
                      { label: "Cẩm nang chọn lô đất nền",    href: "/tin-tuc/cam-nang-chon-lo-dat-nen-the-link-city-dau-giay-2026" },
                      { label: "Nhật ký thực địa",            href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026" },
                      { label: "Bảng giá & Vay ngân hàng",   href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-red-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Cơ hội cuối cùng</p>
                  <p className="text-red-100 text-xs mb-4">
                    Mua ở giá đợt 1 (1,85 tỷ) trước khi Dầu Giây lên thị xã và giá tăng 200–300%.
                  </p>
                  <a
                    href="tel:0937587438"
                    className="block text-center bg-white text-red-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-red-50 transition-colors"
                  >
                    0937.587.438
                  </a>
                </div>

              </div>
            </aside>

          </div>
        </div>
        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="bg-gradient-to-r from-red-500 to-amber-500 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl font-black mb-3">
              Đón đầu sóng đô thị hóa Dầu Giây cùng The Link City
            </h2>
            <p className="text-red-100 text-base mb-8 leading-relaxed">
              Cơ hội cuối cùng sở hữu đất nền đô thị giá 1,85 tỷ trước khi Dầu Giây lên thị xã.
              Lịch sử Dĩ An, Long Khánh đã chứng minh: Ai mua trước, ai hưởng lợi nhất.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/the-link-city"
                className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Tìm hiểu The Link City →
              </a>
              <a
                href="tel:0937587438"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-7 py-3.5 rounded-full transition-all text-sm"
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
              href: "/tin-tuc/cam-nang-chon-lo-dat-nen-the-link-city-dau-giay-2026",
              title: "Cẩm Nang Chọn Lô Đất Nền The Link City 2026",
              description: "Phân tích Block LK17A, LK17B, so sánh lô góc và chiến lược chọn vị trí đẹp nhất.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",
              title: "Nhật Ký Thực Địa The Link City Dầu Giây 2026",
              description: "Ký sự chân thực: 45 phút từ TP.HCM, sổ hồng trên tay và bài toán 550 triệu.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",
              title: "Bảng Giá The Link City & Bài Toán Vay Ngân Hàng 2026",
              description: "Chi tiết giá từng block, 4 phương thức thanh toán và bảng tính trả nợ.",
              tag: "Tin dự án",
            },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}