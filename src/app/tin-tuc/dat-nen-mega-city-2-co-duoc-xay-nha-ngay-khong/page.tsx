"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS58 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/dat-nen-mega-city-2-co-duoc-xay-nha-ngay-khong`;
const PUBLISHED     = "20/09/2026";
const PUBLISHED_ISO = "2026-09-20";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Đất nền Mega City 2 có được xây nhà ngay không? Lộ trình quy hoạch và thời điểm khởi công thực tế",
  description:
    "Giải đáp thắc mắc đất nền Mega City 2 có được xây nhà ngay không: cập nhật tiến độ điều chỉnh quy hoạch chung Nhơn Trạch, lộ trình cấp sổ và thời điểm khởi công dự kiến.",
  image: [IMG_NEWS58["1"], IMG_NEWS58["2"], IMG_NEWS58["3"]],
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
  keywords: "đất nền Mega City 2 có được xây nhà ngay không, thời điểm xây nhà Mega City 2, tiến độ ra sổ Mega City 2, quy hoạch Nhơn Trạch",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hiện nay đất nền Mega City 2 đã được phép xây nhà tự do chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chưa. Dự án hiện đang trong giai đoạn chờ đồng bộ đồ án điều chỉnh quy hoạch chung của huyện Nhơn Trạch để hoàn tất thủ tục cấp sổ hồng riêng từng nền, sau đó mới chính thức tiếp nhận cấp phép xây dựng.",
      },
    },
    {
      "@type": "Question",
      name: "Dự kiến khi nào Mega City 2 được chính thức cấp phép xây dựng?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo tiến độ rà soát quy hoạch của địa phương và kế hoạch từ chủ đầu tư, dự kiến vào khoảng tháng 3 năm sau, khi các thủ tục quy hoạch hoàn tất và quy trình bàn giao sổ hồng được kích hoạt, cư dân sẽ đủ điều kiện nộp hồ sơ xin cấp phép khởi công xây dựng.",
      },
    },
    {
      "@type": "Question",
      name: "Tôi có thể thuê thiết kế nhà phố trước thời điểm ra sổ không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rất nên làm. Bạn hoàn toàn có thể thuê kiến trúc sư lên trước bản vẽ thiết kế 1 trệt 2 lầu theo đúng quy chuẩn 1/500 và dự toán kinh phí ngay từ bây giờ để sẵn sàng khởi công ngay khi có thông báo cấp phép.",
      },
    },
    {
      "@type": "Question",
      name: "Xây nhà tại Mega City 2 có bắt buộc phải xây đúng mẫu không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mặt ngoài công trình (chiều cao tầng, khoảng lùi sân trước 2,5m–3m, khoảng lùi sau 1m–2m và độ vươn ban công) bắt buộc phải tuân thủ đúng quy chuẩn kiến trúc của dự án, riêng phần công năng bố trí phòng ốc bên trong gia chủ được tự do thiết kế theo nhu cầu sinh hoạt của gia đình.",
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
    { "@type": "ListItem", position: 3, name: "Đất nền Mega City 2 có được xây nhà ngay không?", item: PAGE_URL },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS58["1"],
    alt: "Đất nền dự án Mega City 2 Nhơn Trạch và lộ trình cho phép xây nhà thực tế",
    caption: "Dãy nhà phố hoàn thiện bên cạnh các lô đất nền đô thị vuông vắn tại Mega City 2 — hạ tầng đã sẵn sàng, chờ thủ tục pháp lý hoàn tất.",
  },
  {
    src: IMG_NEWS58["2"],
    alt: "Sơ đồ lộ trình hoàn thiện quy hoạch ra sổ và cấp phép xây dựng Mega City 2",
    caption: "Timeline 3 giai đoạn: Hoàn tất quy hoạch → Ra sổ hồng (dự kiến tháng 3 năm sau) → Khởi công xây dựng đồng loạt.",
  },
  {
    src: IMG_NEWS58["3"],
    alt: "Bản vẽ thiết kế mẫu nhà phố 1 trệt 2 lầu chuẩn bị xây dựng tại Mega City 2",
    caption: "Mẫu nhà phố 5×20m (1 trệt 2 lầu) theo đúng quy chuẩn kiến trúc 1/500 của Mega City 2.",
  },
  {
    src: IMG_NEWS58["4"],
    alt: "Giao dịch chuyển nhượng hợp đồng mua bán đất nền an toàn tại Mega City 2",
    caption: "Giao dịch ký kết hợp đồng chuyển nhượng đất nền tại văn phòng công chứng — minh bạch, an toàn pháp lý.",
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

function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" | "success" }) {
  const s = type === "warn"    ? "bg-amber-50 border-amber-200 text-amber-800"
          : type === "success" ? "bg-green-50 border-green-200 text-green-800"
          : "bg-slate-50 border-slate-200 text-slate-700";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}

function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 transition-all">
      {children}
    </a>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function DatNenXayNhaNgayPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Đất nền Mega City 2 có được xây nhà ngay không?</span>
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
              Đất nền Mega City 2 có được xây nhà ngay không? Lộ trình quy hoạch và thời điểm khởi công thực tế
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Cập nhật tiến độ điều chỉnh quy hoạch chung Nhơn Trạch, lộ trình ra{" "}
              <a href="/tin-tuc/phap-ly-mega-city-2" className="text-amber-600 font-semibold hover:underline">sổ hồng</a>
              {" "}từng nền và thời điểm dự kiến được cấp phép khởi công xây dựng tại{" "}
              <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">Mega City 2 Nhơn Trạch</a>.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button" tabIndex={0}
              aria-label="Phóng to ảnh đất nền Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS58["1"]}
                alt="Đất nền dự án Mega City 2 Nhơn Trạch và lộ trình cho phép xây nhà thực tế"
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
              Dãy nhà phố hoàn thiện bên cạnh các lô đất nền đô thị tại Mega City 2 — hạ tầng đã sẵn sàng, chờ thủ tục pháp lý hoàn tất.
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
                    ["#nhu-cau",    "Nhu cầu xây dựng thực tế"],
                    ["#hien-tai",   "1. Có được xây nhà ngay không?"],
                    ["#vi-sao",     "2. Vì sao phải đợi quy hoạch?"],
                    ["#lo-trinh",   "3. Lộ trình dự kiến khởi công"],
                    ["#chuan-bi",   "4. Chuẩn bị trước thời điểm xây"],
                    ["#loi-khuyen", "5. Lời khuyên cho người mua đất"],
                    ["#faq",        "Câu hỏi thường gặp"],
                    ["#ket-luan",   "Kết luận"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <section className="mb-12" id="nhu-cau">
                <SectionHeading id="nhu-cau">Nhu cầu xây dựng an cư thực tế tại Mega City 2 Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>
                    Khu đô thị{" "}
                    <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">Mega City 2 Nhơn Trạch</a>
                    {" "}(Khu dân cư xã Phú Hội quy mô 84 ha do Kim Oanh Group phát triển) từ lâu đã hoàn thiện phần lớn mạng lưới hạ tầng kỹ thuật với hệ thống điện âm 100%, nước máy Dowaco và các trục đường nội khu trải nhựa khang trang từ 13m đến 32m.
                  </p>
                  <p>
                    Chính vì hạ tầng đã chỉn chu, rất nhiều khách hàng có chung câu hỏi: <strong className="text-slate-800">Đất nền Mega City 2 có được xây nhà ngay không? Khi nào chính thức được cấp phép khởi công xây dựng?</strong>
                  </p>
                  <InfoBox>
                    Để trả lời chính xác, người mua cần nhìn nhận mối quan hệ giữa tiến độ pháp lý của dự án và công tác rà soát, đồng bộ đồ án điều chỉnh quy hoạch chung đô thị mới Nhơn Trạch đang được các cơ quan chức năng tỉnh Đồng Nai khẩn trương hoàn thiện.
                  </InfoBox>
                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/tin-tuc/ha-tang-ky-thuat-mega-city-2">
                      🏗️ Hạ tầng kỹ thuật Mega City 2: Điện âm, nước máy và thoát nước →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 1 */}
              <section className="mb-12" id="hien-tai">
                <SectionHeading id="hien-tai">1. Đất nền Mega City 2 có được xây nhà ngay thời điểm này không?</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <InfoBox type="warn">
                    <strong>Câu trả lời thẳng thắn:</strong> Chưa nên khởi công xây dựng ồ ạt ngay lập tức mà cần chờ hoàn tất thủ tục pháp lý đồng bộ.
                  </InfoBox>
                  <p>
                    Mặc dù hạ tầng kỹ thuật trong lòng dự án đã hoàn thiện và các cọc mốc thửa đất đã được bàn giao, việc khởi công xây dựng nhà ở riêng lẻ vẫn cần đáp ứng đầy đủ điều kiện về cấp phép xây dựng hoặc hoàn thành cấp Giấy chứng nhận quyền sử dụng đất (sổ hồng từng nền).
                  </p>

                  {/* Tiến độ 3 dòng */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3 not-prose shadow-sm">
                    <p className="font-black text-slate-800 text-sm uppercase tracking-wider mb-4">📊 Tiến độ thực tế dự án Mega City 2</p>
                    {[
                      { icon: "✅", label: "Hạ tầng kỹ thuật (điện ngầm, nước máy, đường sá)", status: "ĐÃ HOÀN THIỆN", color: "text-green-600" },
                      { icon: "✅", label: "Bàn giao cọc mốc thực địa từng thửa đất",          status: "ĐÃ TRIỂN KHAI", color: "text-green-600" },
                      { icon: "⏳", label: "Thủ tục xin phép xây dựng & Cấp sổ hồng riêng",   status: "ĐANG CHỜ ĐỒNG BỘ QUY HOẠCH", color: "text-amber-600 font-black" },
                    ].map(({ icon, label, status, color }) => (
                      <div key={label} className="flex items-center gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                        <span className="text-lg flex-shrink-0">{icon}</span>
                        <p className="text-slate-700 text-sm flex-1">{label}</p>
                        <span className={`text-xs font-bold flex-shrink-0 ${color}`}>{status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-12" id="vi-sao">
                <SectionHeading id="vi-sao">2. Vì sao phải đợi điều chỉnh quy hoạch Nhơn Trạch mới ra sổ và xây dựng?</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>Lý do cốt lõi xuất phát từ bối cảnh quy hoạch tổng thể của toàn huyện Nhơn Trạch:</p>

                  <div className="space-y-4 not-prose">
                    <div className="flex gap-4 rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-sm flex items-center justify-center">1</div>
                      <div>
                        <p className="font-black text-slate-800 text-sm mb-2">Đồng bộ đồ án Điều chỉnh Quy hoạch chung đô thị mới Nhơn Trạch</p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Huyện Nhơn Trạch đang rà soát, điều chỉnh và cập nhật quy hoạch chung đến năm 2035, tầm nhìn đến năm 2050 để khớp nối với chuỗi đại công trình hạ tầng quốc gia — đặc biệt là đại lộ 25C, Vành đai 3 TP.HCM và Cảng hàng không quốc tế Long Thành. Mọi dự án đô thị trên địa bàn, bao gồm cả Mega City 2, đều phải chuẩn hóa chỉ giới giao thông, cao độ và ranh giới hành chính cho ăn khớp 100% với bản đồ quy hoạch chung.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 rounded-2xl border border-amber-100 bg-amber-50/50 p-5">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500 text-white font-black text-sm flex items-center justify-center">2</div>
                      <div>
                        <p className="font-black text-slate-800 text-sm mb-2">Hoàn tất thủ tục nghiệm thu hạ tầng và cấp sổ hồng</p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Sau khi quy hoạch chung được phê duyệt điều chỉnh chính thức, các sở ban ngành tỉnh Đồng Nai tiến hành nghiệm thu kỹ thuật cuối cùng để chủ đầu tư hoàn tất nghĩa vụ tài chính đất đai (nếu có). Ngay sau đó, dự án sẽ được cấp <strong>sổ hồng riêng cho từng lô đất</strong>, người dân đủ điều kiện pháp lý để xin cấp phép xây dựng và hoàn công nhà ở hợp pháp.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/tin-tuc/phap-ly-mega-city-2">📋 Pháp lý dự án Mega City 2 Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-12" id="lo-trinh">
                <SectionHeading id="lo-trinh">3. Lộ trình và thời điểm dự kiến được cấp phép xây nhà tại Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">

                  {/* Timeline */}
                  <div className="relative not-prose">
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-amber-200 hidden sm:block" />
                    <div className="space-y-4">
                      {[
                        { phase: "Giai đoạn 1", time: "Cuối năm hiện tại", desc: "Hoàn tất đồng bộ đồ án điều chỉnh quy hoạch chung Nhơn Trạch & Hồ sơ pháp lý dự án.", color: "bg-slate-600" },
                        { phase: "Giai đoạn 2", time: "Dự kiến khoảng tháng 3 năm sau", desc: "Đủ điều kiện ra sổ hồng từng nền & Chính thức tiếp nhận hồ sơ xin cấp phép xây dựng.", color: "bg-amber-500" },
                        { phase: "Giai đoạn 3", time: "Từ Quý 2 năm sau trở đi", desc: "Cư dân tiến hành khởi công xây dựng nhà ở đồng loạt, hình thành khu dân cư sầm uất.", color: "bg-green-600" },
                      ].map(({ phase, time, desc, color }) => (
                        <div key={phase} className="flex gap-4 sm:pl-10 relative">
                          <div className={`absolute left-0 top-3 w-10 h-10 rounded-xl ${color} text-white font-black text-xs flex items-center justify-center flex-shrink-0 hidden sm:flex`}>→</div>
                          <div className="rounded-2xl border border-slate-200 bg-white p-5 flex-1 shadow-sm">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{phase}</p>
                            <p className={`font-black text-sm mb-2 ${color === "bg-amber-500" ? "text-amber-700" : color === "bg-green-600" ? "text-green-700" : "text-slate-700"}`}>{time}</p>
                            <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <InfoBox type="success">
                    <strong>⭐ Mốc thời gian then chốt:</strong> Khoảng <strong>tháng 3 năm sau</strong>, khi các thủ tục điều chỉnh quy hoạch huyện Nhơn Trạch hoàn tất và quy trình cấp sổ hồng riêng cho từng nền đất bắt đầu được kích hoạt — đây là thời điểm Mega City 2 bước vào chu kỳ xây dựng thực tế.
                  </InfoBox>
                </div>

                <div className="mt-6">
                  <ArticleFigure
                    src={IMG_NEWS58["2"]}
                    alt="Sơ đồ lộ trình hoàn thiện quy hoạch ra sổ và cấp phép xây dựng Mega City 2"
                    caption="Timeline 3 giai đoạn: Hoàn tất quy hoạch → Ra sổ hồng (dự kiến tháng 3 năm sau) → Khởi công xây dựng đồng loạt."
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />
                </div>

                <div className="flex flex-wrap gap-3 not-prose mt-4">
                  <LinkBtn href="/tin-tuc/tien-do-mega-city-2">📊 Tiến độ Mega City 2 Nhơn Trạch mới nhất →</LinkBtn>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-12" id="chuan-bi">
                <SectionHeading id="chuan-bi">4. Những điều gia chủ cần chuẩn bị từ nay đến thời điểm được xây nhà</SectionHeading>
                <div className="pt-5 space-y-5 text-slate-600 text-[17px] leading-[1.85]">
                  <p>Khoảng thời gian chờ đợi không hề lãng phí — đây là <strong className="text-slate-800">giai đoạn vàng</strong> để chuẩn bị chu đáo về thiết kế và tài chính:</p>

                  <div className="space-y-4 not-prose">
                    {[
                      {
                        n: "01", color: "bg-amber-500",
                        title: "Tìm hiểu mẫu thiết kế và quy chuẩn kiến trúc 1/500",
                        items: [
                          "Nghiên cứu kỹ quy cách xây dựng Mega City 2 về tầng cao (1 trệt 2 lầu hoặc 1 trệt 3 lầu), khoảng lùi sân trước 2,5m–3m và khoảng lùi sân sau 1m–2m.",
                          "Thuê kiến trúc sư lên trước bản vẽ mặt bằng bố trí công năng phù hợp kích thước mặt tiền thửa đất của mình.",
                        ],
                        link: { href: "/tin-tuc/quy-cach-xay-dung-mega-city-2", label: "Quy cách xây dựng tại dự án Mega City 2 Nhơn Trạch →" },
                      },
                      {
                        n: "02", color: "bg-blue-600",
                        title: "Dự trù và tối ưu hóa ngân sách xây dựng",
                        items: [
                          "Lập bảng dự toán chi tiết: chi phí ép cọc, xây thô và hoàn thiện nội thất.",
                          "Chuẩn bị sẵn nguồn vốn xây dựng từ 1,2 tỷ–1,8 tỷ đồng để không bị động dòng tiền khi bước vào giai đoạn thi công.",
                        ],
                        link: { href: "/tin-tuc/chi-phi-xay-nha-mega-city-2", label: "Chi phí xây nhà thực tế tại Mega City 2 Nhơn Trạch →" },
                      },
                      {
                        n: "03", color: "bg-green-600",
                        title: "Khảo sát thực địa và kiểm tra cọc mốc ranh đất",
                        items: [
                          "Ra thực địa kiểm tra lại 4 cọc mốc bê tông ranh giới lô đất để đảm bảo không bị sai lệch ranh giới với các thửa đất liền kề.",
                        ],
                        link: { href: "/tin-tuc/lo-dat-mega-city-2-mat-tien-bao-nhieu", label: "Hướng dẫn kiểm tra cọc mốc kích thước thực địa Mega City 2 →" },
                      },
                      {
                        n: "04", color: "bg-purple-600",
                        title: "Tìm hiểu thủ tục đấu nối hạ tầng điện nước",
                        items: [
                          "Chuẩn bị sẵn hồ sơ đăng ký cấp điện công tơ và nước máy sinh hoạt, sẵn sàng nguồn năng lượng ngay khi đặt móng công trình.",
                        ],
                        link: null,
                      },
                    ].map(({ n, color, title, items, link }) => (
                      <div key={n} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${color} text-white font-black text-sm flex items-center justify-center`}>{n}</div>
                        <div className="space-y-2 flex-1">
                          <p className="font-black text-slate-800 text-sm">{title}</p>
                          <ul className="space-y-1">
                            {items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                                <span className="text-slate-300 flex-shrink-0 mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          {link && (
                            <div className="pt-1">
                              <LinkBtn href={link.href}>{link.label}</LinkBtn>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <ArticleFigure
                    src={IMG_NEWS58["3"]}
                    alt="Bản vẽ thiết kế mẫu nhà phố 1 trệt 2 lầu chuẩn bị xây dựng tại Mega City 2"
                    caption="Mẫu nhà phố 5×20m (1 trệt 2 lầu) theo đúng quy chuẩn kiến trúc 1/500 của Mega City 2."
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-12" id="loi-khuyen">
                <SectionHeading id="loi-khuyen">5. Lời khuyên cho người mua đất Mega City 2 trong giai đoạn này</SectionHeading>
                <div className="pt-5 space-y-4 text-slate-600 text-[17px] leading-[1.85]">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
                    {[
                      {
                        icon: "📈",
                        title: "Cơ hội gom đất trước chu kỳ ra sổ",
                        desc: "Thực tế thị trường: thời điểm trước khi dự án ra sổ hồng thường là mặt bằng giá còn hợp lý nhất. Khi ra sổ vào đầu năm sau, giá trị đất thường tăng 15%–30% nhờ pháp lý hoàn thiện.",
                        color: "border-amber-200 bg-amber-50",
                        textColor: "text-amber-800",
                      },
                      {
                        icon: "🔒",
                        title: "Chọn lô đất pháp lý chuẩn chỉnh",
                        desc: "Ưu tiên các thửa đất đã đóng đủ tiền theo hợp đồng, thực hiện thủ tục chuyển nhượng có công chứng và văn bản xác nhận sang tên chính thức từ Kim Oanh Group.",
                        color: "border-blue-100 bg-blue-50",
                        textColor: "text-blue-800",
                      },
                      {
                        icon: "📅",
                        title: "Kế hoạch tài chính rõ ràng",
                        desc: "Nếu định đầu năm sau (sau Tết Nguyên Đán) mới khởi công, đây chính là thời điểm hoàn hảo để chọn mua được những vị trí đất đẹp nhất với giá tốt nhất.",
                        color: "border-green-100 bg-green-50",
                        textColor: "text-green-800",
                      },
                    ].map(({ icon, title, desc, color, textColor }) => (
                      <div key={title} className={`rounded-2xl border p-5 ${color}`}>
                        <div className="text-2xl mb-2">{icon}</div>
                        <p className={`font-black text-sm mb-2 ${textColor}`}>{title}</p>
                        <p className="text-slate-600 text-xs leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 not-prose">
                    <LinkBtn href="/tin-tuc/thu-tuc-chuyen-nhuong-mega-city-2">
                      📋 Thủ tục sang tên & chuyển nhượng đất nền Mega City 2 mới nhất →
                    </LinkBtn>
                    <LinkBtn href="/tin-tuc/bang-gia-mega-city-2-moi-nhat">
                      💰 Bảng giá Mega City 2 Nhơn Trạch mới nhất →
                    </LinkBtn>
                  </div>
                </div>

                <div className="mt-6">
                  <ArticleFigure
                    src={IMG_NEWS58["4"]}
                    alt="Giao dịch chuyển nhượng hợp đồng mua bán đất nền an toàn tại Mega City 2"
                    caption="Giao dịch ký kết hợp đồng chuyển nhượng đất nền tại văn phòng công chứng — minh bạch, an toàn pháp lý."
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">Câu hỏi thường gặp</SectionHeading>
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
                    Giải đáp cho câu hỏi <strong className="text-slate-800">đất nền Mega City 2 có được xây nhà ngay không</strong>: gia chủ cần kiên nhẫn chờ đến khoảng <strong className="text-slate-800">tháng 3 năm sau</strong> — thời điểm huyện Nhơn Trạch hoàn tất đồng bộ quy hoạch chung và dự án bước vào giai đoạn bàn giao sổ hồng chính thức. Việc xây dựng đúng thời điểm khi pháp lý hoàn thiện 100% sẽ đảm bảo quyền lợi tối đa cho ngôi nhà của bạn, từ cấp phép xây dựng an toàn đến thuận lợi trong khâu hoàn công tài sản trên đất sau này.
                  </p>

                  <div className="rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-7 text-white not-prose">
                    <p className="font-black text-lg mb-2">Cần cập nhật thông báo mới nhất về tiến độ ra sổ Mega City 2?</p>
                    <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                      Nếu bạn đang sở hữu đất nền hoặc muốn nắm bắt cơ hội gom mua đất giá tốt trước chu kỳ cấp sổ hồng, hãy xem chi tiết:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
                        🏙️ Xem thông tin Mega City 2 →
                      </a>
                      <a href="tel:0937587438" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
                        📞 Gọi tư vấn ngay
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-3">
                      {[
                        { href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat", label: "Bảng giá mới nhất" },
                        { href: "/tin-tuc/phap-ly-mega-city-2", label: "Pháp lý dự án" },
                        { href: "/tin-tuc/tien-do-mega-city-2", label: "Tiến độ mới nhất" },
                      ].map(({ href, label }) => (
                        <a key={href} href={href} className="text-slate-400 hover:text-white text-xs transition-colors">→ {label}</a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

            </article>

            {/* ── Sidebar ───────────────────────────────────── */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-6">

                {/* Status card */}
                <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
                  <p className="font-black text-amber-900 text-sm mb-3">⏰ Trạng thái hiện tại</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                      <span className="text-slate-700">Hạ tầng kỹ thuật: Hoàn thiện</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                      <span className="text-slate-700">Bàn giao cọc mốc: Đã triển khai</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 animate-pulse" />
                      <span className="text-amber-700 font-semibold">Cấp sổ hồng: Chờ quy hoạch</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-slate-300 flex-shrink-0" />
                      <span className="text-slate-500">Cấp phép xây dựng: Dự kiến T3/năm sau</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-slate-900 p-5 text-white">
                  <p className="font-black text-base mb-2">Xem dự án Mega City 2</p>
                  <p className="text-slate-400 text-xs mb-4 leading-relaxed">Bảng giá, sơ đồ phân lô và tiến độ mới nhất 2026.</p>
                  <a href="/mega-city-2" className="block text-center bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm py-2.5 px-4 rounded-xl transition-colors">
                    Xem dự án →
                  </a>
                </div>

                {/* Related links */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Bài viết liên quan</p>
                  <ul className="space-y-2">
                    {[
                      { href: "/tin-tuc/tien-do-mega-city-2", label: "Tiến độ Mega City 2 mới nhất" },
                      { href: "/tin-tuc/phap-ly-mega-city-2", label: "Pháp lý dự án Mega City 2" },
                      { href: "/tin-tuc/checklist-nhan-nen-mega-city-2", label: "Checklist nhận nền Mega City 2" },
                      { href: "/tin-tuc/chi-phi-xay-nha-mega-city-2", label: "Chi phí xây nhà tại Mega City 2" },
                      { href: "/tin-tuc/quy-cach-xay-dung-mega-city-2", label: "Quy cách xây dựng Mega City 2" },
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
              href: "/tin-tuc/phap-ly-mega-city-2",
              title: "Pháp lý dự án Mega City 2 Nhơn Trạch",
              description: "Cập nhật đầy đủ hồ sơ pháp lý, quyết định phê duyệt và tiến trình cấp sổ hồng tại dự án Mega City 2.",
              tag: "Pháp lý",
            },
            {
              href: "/tin-tuc/dien-tich-dat-nen-mega-city-2",
              title: "Mega City 2 có những diện tích nền nào?",
              description: "Tổng hợp 4 nhóm diện tích nền: 90m², 100m², 120m²–150m² và 200m²–300m² kèm hướng dẫn chọn theo nhu cầu.",
              tag: "Diện tích",
            },
          ]}
        />

      </div>
      <CorpFooter />
    </>
  );
}
