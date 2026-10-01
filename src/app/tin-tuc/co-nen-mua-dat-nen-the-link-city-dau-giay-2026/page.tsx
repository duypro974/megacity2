"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS64 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/co-nen-mua-dat-nen-the-link-city-dau-giay-2026`;
const PUBLISHED     = "01/10/2026";
const PUBLISHED_ISO = "2026-10-01";

// ─────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Có Nên Mua Đất Nền The Link City Dầu Giây Không? Phân Tích Thực Tế 2026",
  description: "Đánh giá trung thực The Link City Dầu Giây 2026: ưu điểm pháp lý sổ hồng, hạ tầng hoàn thiện, vị trí cao tốc và nhược điểm cần biết trước khi quyết định xuống tiền.",
  image: [IMG_NEWS64["1"], IMG_NEWS64["2"], IMG_NEWS64["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "có nên mua the link city không, the link city dầu giây có đáng mua không, review the link city 2026, đánh giá the link city dầu giây",
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
      name: "The Link City Dầu Giây có pháp lý không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. The Link City (Khu dân cư A1-C1 Đô thị Dầu Giây) đã được cấp sổ hồng riêng từng nền cho chủ đầu tư Kim Oanh. Dự án có quy hoạch 1/500 được phê duyệt, hoàn thành 100% nghĩa vụ tài chính và đang trong quá trình cấp sổ cho từng khách hàng sau khi ký hợp đồng chuyển nhượng.",
      },
    },
    {
      "@type": "Question",
      name: "Hạ tầng The Link City đã hoàn thiện chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hạ tầng kỹ thuật của The Link City đã hoàn thiện 100%: đường nhựa nội khu, vỉa hè, đèn đường, điện âm, cấp nước và hệ thống thoát nước. Hiện tại dự án đang chờ trạm xử lý nước thải hoàn tất để chính thức mở bán trở lại.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City Dầu Giây giá bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giá đất nền The Link City đợt 1 từ khoảng 1,85 tỷ đồng/nền cho các lô tiêu chuẩn block LK17A. Shophouse mặt tiền QL1A từ 3,85 tỷ trở lên. Chính sách thanh toán linh hoạt với vốn tự có từ 550 triệu, phần còn lại vay ngân hàng.",
      },
    },
    {
      "@type": "Question",
      name: "Nhược điểm của The Link City Dầu Giây là gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Một số điểm cần cân nhắc: dự án nằm cách trung tâm TP.HCM khoảng 65-70km nên không phù hợp người cần di chuyển hàng ngày vào nội thành; trạm xử lý nước thải chưa hoàn tất nên chưa mở bán chính thức; khu vực Dầu Giây vẫn đang trong giai đoạn đô thị hóa nên tiện ích cao cấp chưa đầy đủ như nội đô.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City phù hợp với ai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City phù hợp với: nhà đầu tư trung hạn 3-5 năm tận dụng sóng đô thị hóa Dầu Giây; gia đình muốn an cư với ngân sách 1,8-2,5 tỷ và chấp nhận xa trung tâm; người làm việc tại khu vực Biên Hòa, Long Khánh, Bình Dương hoặc làm việc từ xa. Không phù hợp với người cần ở ngay hoặc phụ thuộc vào tiện ích đô thị cao cấp.",
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
    { "@type": "ListItem", position: 4, name: "Có nên mua The Link City không?", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS64["1"], alt: "Toàn cảnh khu dự án The Link City Dầu Giây Kim Oanh Thống Nhất Đồng Nai",        caption: "Toàn cảnh The Link City — khu đô thị 21ha tại ngã tư QL1A – QL20, Dầu Giây." },
  { src: IMG_NEWS64["2"], alt: "Đường nội khu nhựa phẳng hoàn thiện 100% tại The Link City Dầu Giây",            caption: "Hạ tầng đường nội khu hoàn thiện 100% — nhựa phẳng, vỉa hè, đèn đường, cây xanh đầy đủ." },
  { src: IMG_NEWS64["3"], alt: "Sổ hồng giấy chứng nhận quyền sử dụng đất thực tế The Link City Dầu Giây",      caption: "Sổ hồng từng nền đã được cấp thực tế — pháp lý minh bạch, khách hàng cầm sổ ngay khi ký HĐ." },
  { src: IMG_NEWS64["4"], alt: "Nhà phố liên kế biệt thự đã hoàn thiện trong khu The Link City Dầu Giây",        caption: "Nhà phố liên kế đã xây xong và có người ở — minh chứng dự án đang hoạt động thực tế." },
  { src: IMG_NEWS64["5"], alt: "Công viên cảnh quan cây xanh nội khu The Link City Dầu Giây Thống Nhất",          caption: "Công viên đồi cỏ và cảnh quan xanh nội khu — điểm nhấn chất lượng sống của The Link City." },
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
function ProConItem({ type, children }: { type: "pro" | "con"; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[16px] leading-relaxed">
      <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black mt-0.5 ${type === "pro" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"}`}>
        {type === "pro" ? "✓" : "✗"}
      </span>
      <span className="text-slate-700">{children}</span>
    </li>
  );
}
function ScoreBar({ label, score, max = 10 }: { label: string; score: number; max?: number }) {
  const pct = (score / max) * 100;
  const color = score >= 8 ? "bg-emerald-500" : score >= 6 ? "bg-amber-500" : "bg-red-400";
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-semibold text-slate-700">{label}</span>
        <span className="text-sm font-black text-slate-800">{score}/{max}</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all ${color}`} style={{ width: `${pct}%` }} />
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
export default function CoNenMuaTLCPage() {
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
              <span className="text-slate-600 font-medium">Có nên mua không?</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">The Link City</span>
              <span className="inline-block bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Phân tích đầu tư</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 7 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Có Nên Mua Đất Nền The Link City Dầu Giây Không? Phân Tích Thực Tế 2026
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Đánh giá trung thực dựa trên thực địa và dữ liệu thực tế: pháp lý, hạ tầng, vị trí,
              giá, tiềm năng tăng giá — và cả những điểm chưa hoàn hảo cần biết trước khi xuống tiền.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh The Link City"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS64["1"]} alt="Toàn cảnh khu dự án The Link City Dầu Giây Kim Oanh Thống Nhất Đồng Nai"
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
              Toàn cảnh The Link City — khu đô thị 21ha tại ngã tư QL1A – QL20, trung tâm Dầu Giây.
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
                    ["#ket-luan-nhanh", "1. Kết luận nhanh: nên hay không?"],
                    ["#uu-diem",        "2. Ưu điểm nổi bật"],
                    ["#nhuoc-diem",     "3. Nhược điểm cần biết"],
                    ["#danh-gia",       "4. Bảng điểm đánh giá tổng thể"],
                    ["#phu-hop",        "5. Dự án này phù hợp với ai?"],
                    ["#truoc-khi-mua",  "6. Những việc cần làm trước khi quyết định"],
                    ["#faq",           "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Câu hỏi &ldquo;Có nên mua The Link City Dầu Giây không?&rdquo; xuất hiện rất nhiều
                trên các diễn đàn bất động sản. Đây là dấu hiệu tốt — người hỏi đang tìm kiếm
                thông tin thực tế, không chỉ nghe từ phía bán hàng.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Bài viết này phân tích dựa trên thông tin thực tế về dự án, không phải quảng cáo.
                Mục tiêu là giúp bạn có đủ thông tin để tự quyết định — bao gồm cả những điểm
                chưa hoàn hảo mà không phải tài liệu bán hàng nào cũng đề cập.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Bài viết này do Kim Oanh Đồng Nai tổng hợp — đơn vị phân
                phối dự án. Chúng tôi cố gắng trình bày khách quan, nhưng bạn nên kết hợp tham
                khảo nhiều nguồn và tự khảo sát thực địa trước khi quyết định.
              </InfoBox>

              {/* Section 1 — Kết luận nhanh */}
              <section className="mb-12">
                <SectionHeading id="ket-luan-nhanh">Kết luận nhanh: nên hay không?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-200 p-5">
                      <p className="font-black text-emerald-800 text-sm mb-3 uppercase tracking-wider">Nên mua nếu bạn</p>
                      <ul className="space-y-2 text-sm text-emerald-700">
                        {["Đầu tư trung hạn 3–5 năm", "Ngân sách 1,8–3,5 tỷ", "Chấp nhận xa trung tâm TP.HCM", "Làm việc gần khu vực Biên Hòa / Dầu Giây", "Ưu tiên pháp lý sổ hồng rõ ràng"].map(i => (
                          <li key={i} className="flex items-center gap-2"><span className="text-emerald-500">✓</span>{i}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-red-50 border-2 border-red-200 p-5">
                      <p className="font-black text-red-700 text-sm mb-3 uppercase tracking-wider">Không phù hợp nếu bạn</p>
                      <ul className="space-y-2 text-sm text-red-700">
                        {["Cần ở ngay hoặc ngắn hạn", "Di chuyển hàng ngày vào Q.1/Q.3", "Cần tiện ích cao cấp như nội đô", "Vốn dưới 550 triệu tự có", "Không chịu được rủi ro thanh khoản"].map(i => (
                          <li key={i} className="flex items-center gap-2"><span className="text-red-400">✗</span>{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 — Ưu điểm */}
              <section className="mb-12">
                <SectionHeading id="uu-diem">Ưu điểm nổi bật</SectionHeading>
                <div className="pt-5 space-y-5">
                  <ul className="space-y-4">
                    <ProConItem type="pro">
                      <><strong>Pháp lý sổ hồng từng nền — hiếm ở phân khúc này.</strong> Đây là điểm
                      mạnh nhất. Chủ đầu tư Kim Oanh đã được cấp sổ hồng từng nền, khách hàng ký
                      hợp đồng chuyển nhượng và được sang tên sổ trực tiếp — không qua hợp đồng
                      góp vốn hay đặt cọc mua bán mơ hồ.</>
                    </ProConItem>
                    <ProConItem type="pro">
                      <><strong>Hạ tầng hoàn thiện 100%.</strong> Không giống nhiều dự án vùng ven
                      bán đất &ldquo;trên giấy&rdquo;, The Link City đã có đường nhựa nội khu, vỉa hè,
                      đèn đường, điện âm, cấp nước sạch đầy đủ. Có thể đi thực địa và nhìn thấy
                      hạ tầng thực tế ngay hôm nay.</>
                    </ProConItem>
                    <ProConItem type="pro">
                      <><strong>Vị trí ngã tư cao tốc — khó tìm được ở giá tương đương.</strong> Nằm
                      ngay nút giao QL1A – QL20, cách nút thoát cao tốc VEC E4 chỉ 1–2km. Đây là
                      vị trí chiến lược mà nhiều khu đô thị vùng ven khác không có được.</>
                    </ProConItem>
                    <ProConItem type="pro">
                      <><strong>Giá hợp lý so với hạ tầng và pháp lý đi kèm.</strong> Ở mức 1,85–2,5
                      tỷ/nền với sổ hồng, hạ tầng xong và vị trí cao tốc — đây là mức giá cạnh
                      tranh so với mặt bằng chung các dự án tương đương tại Đồng Nai và TP.HCM
                      vùng ven.</>
                    </ProConItem>
                    <ProConItem type="pro">
                      <><strong>Dầu Giây đang trong chu kỳ đô thị hóa mạnh.</strong> Lộ trình lên
                      thị xã 2026–2030, thêm 2 tuyến cao tốc đang triển khai và KCN Dầu Giây
                      330ha đang phát triển tạo nền tảng cho sự tăng giá dài hạn.</>
                    </ProConItem>
                  </ul>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS64["2"]}
                alt="Đường nội khu nhựa phẳng hoàn thiện 100% tại The Link City Dầu Giây"
                caption="Hạ tầng đường nội khu hoàn thiện 100% — nhựa phẳng, vỉa hè, đèn đường, cây xanh đầy đủ."
                images={images} index={1} onOpen={openLightbox}
              />

              {/* Section 3 — Nhược điểm */}
              <section className="mb-12">
                <SectionHeading id="nhuoc-diem">Nhược điểm cần biết</SectionHeading>
                <div className="pt-5 space-y-5">
                  <ul className="space-y-4">
                    <ProConItem type="con">
                      <><strong>Cách trung tâm TP.HCM 65–70km — không phù hợp di chuyển hàng ngày.</strong>{" "}
                      Dù cao tốc rút ngắn còn 45–55 phút, nhưng nếu bạn làm việc ở Q.1, Q.3
                      hoặc các quận nội thành và phải đi lại hàng ngày thì đây là thách thức
                      thực tế về thời gian và chi phí nhiên liệu.</>
                    </ProConItem>
                    <ProConItem type="con">
                      <><strong>Trạm xử lý nước thải chưa hoàn tất — chưa mở bán chính thức.</strong>{" "}
                      Tính đến tháng 9/2026, dự án đang chờ trạm xử lý nước thải hoàn tất để
                      chính thức mở bán trở lại. Đây là điều kiện pháp lý bắt buộc, không thể
                      bỏ qua — người mua cần theo dõi thông báo chính thức trước khi giao dịch.</>
                    </ProConItem>
                    <ProConItem type="con">
                      <><strong>Thanh khoản thứ cấp chưa cao như nội đô.</strong> Thị trường bất
                      động sản Dầu Giây đang phát triển nhưng chưa sôi động như TP.HCM hay
                      Biên Hòa. Nếu cần bán gấp trong 1–2 năm đầu, có thể khó tìm người mua
                      ở giá tốt.</>
                    </ProConItem>
                    <ProConItem type="con">
                      <><strong>Tiện ích cao cấp khu vực còn hạn chế.</strong> Trung tâm thương mại
                      lớn, bệnh viện quốc tế, trường quốc tế hay các tiện ích đô thị cao cấp
                      chưa có ở Dầu Giây. Phải di chuyển về Biên Hòa hoặc TP.HCM cho các nhu
                      cầu này.</>
                    </ProConItem>
                    <ProConItem type="con">
                      <><strong>Tiến độ hoàn thiện tiện ích nội khu phụ thuộc vào tốc độ lấp đầy.</strong>{" "}
                      Trung tâm thương mại 2,6ha, trường học và các tiện ích nội khu sẽ hình
                      thành đồng bộ hơn khi tỷ lệ lấp đầy dân số tăng lên — điều này cần thời
                      gian vài năm.</>
                    </ProConItem>
                  </ul>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS64["3"]}
                alt="Sổ hồng giấy chứng nhận quyền sử dụng đất thực tế The Link City Dầu Giây"
                caption="Sổ hồng từng nền đã được cấp thực tế — pháp lý minh bạch là điểm mạnh nhất của dự án."
                images={images} index={2} onOpen={openLightbox}
              />

              {/* Section 4 — Bảng điểm */}
              <section className="mb-12">
                <SectionHeading id="danh-gia">Bảng điểm đánh giá tổng thể</SectionHeading>
                <div className="pt-5">
                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <ScoreBar label="Pháp lý & Minh bạch" score={9} />
                    <ScoreBar label="Hạ tầng kỹ thuật" score={9} />
                    <ScoreBar label="Vị trí & Kết nối" score={8} />
                    <ScoreBar label="Giá trị / Mức giá" score={8} />
                    <ScoreBar label="Tiềm năng tăng giá" score={7} />
                    <ScoreBar label="Tiện ích ngoại khu hiện tại" score={6} />
                    <ScoreBar label="Thanh khoản thứ cấp" score={6} />
                    <ScoreBar label="Phù hợp ở thực ngay" score={5} />
                    <div className="mt-5 pt-5 border-t border-slate-100 flex items-center justify-between">
                      <span className="font-black text-slate-800">Tổng điểm</span>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-black text-amber-600">7.3</span>
                        <span className="text-slate-400 text-sm">/ 10</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      Điểm số mang tính tham khảo, dựa trên đánh giá tổng hợp các tiêu chí.
                      Trọng số từng tiêu chí thay đổi theo mục tiêu của từng người mua.
                    </p>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS64["4"]}
                alt="Nhà phố liên kế biệt thự đã hoàn thiện trong khu The Link City Dầu Giây"
                caption="Nhà phố liên kế đã hoàn thiện và có cư dân sinh sống — minh chứng dự án đang vận hành thực tế."
                images={images} index={3} onOpen={openLightbox}
              />

              {/* Section 5 — Phù hợp với ai */}
              <section className="mb-12">
                <SectionHeading id="phu-hop">Dự án này phù hợp với ai?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <H3>Phù hợp nhất</H3>
                  <div className="space-y-3">
                    {[
                      {
                        icon: "💰",
                        title: "Nhà đầu tư trung hạn 3–5 năm",
                        desc: "Mua ở giá hiện tại, giữ đến khi Dầu Giây lên thị xã và cao tốc Biên Hòa–Vũng Tàu thông xe — kỳ vọng tăng giá 30–50% trong giai đoạn này là có cơ sở."
                      },
                      {
                        icon: "🏠",
                        title: "Gia đình trẻ ngân sách 1,8–2,5 tỷ",
                        desc: "Sở hữu nhà phố 3 tầng sổ hồng riêng với vốn tự có 550 triệu, trả góp 12–15 triệu/tháng — khó tìm được phương án tương đương tại TP.HCM hay Biên Hòa."
                      },
                      {
                        icon: "🏭",
                        title: "Người làm việc khu vực Biên Hòa / Dầu Giây",
                        desc: "Khoảng cách hợp lý, di chuyển 25–40 phút, tiết kiệm đáng kể so với thuê nhà tại Biên Hòa trong nhiều năm."
                      },
                      {
                        icon: "💻",
                        title: "Người làm việc từ xa (remote worker)",
                        desc: "Không bị ràng buộc vị trí hàng ngày, hưởng lợi từ môi trường sống thoáng đãng, không khí tốt hơn nội đô và chi phí sinh hoạt thấp hơn."
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4 p-4 rounded-2xl border border-slate-200 hover:border-amber-200 hover:bg-amber-50 transition-colors">
                        <span className="text-2xl flex-shrink-0">{item.icon}</span>
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
                src={IMG_NEWS64["5"]}
                alt="Công viên cảnh quan cây xanh nội khu The Link City Dầu Giây Thống Nhất"
                caption="Công viên đồi cỏ và cảnh quan xanh nội khu — chất lượng sống vượt trội so với phân khúc giá."
                images={images} index={4} onOpen={openLightbox}
              />

              {/* Section 6 — Trước khi mua */}
              <section className="mb-12">
                <SectionHeading id="truoc-khi-mua">Những việc cần làm trước khi quyết định</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dù đánh giá có tích cực đến đâu, bất kỳ quyết định mua bất động sản nào cũng
                    cần trải qua quy trình thẩm định cá nhân. Dưới đây là checklist 5 bước tối thiểu:
                  </p>
                  <div className="space-y-3">
                    {[
                      { step: "01", title: "Đến thực địa ít nhất 1 lần", desc: "Đi thực tế vào ngày thường để thấy tình trạng thực của hạ tầng, môi trường xung quanh và khoảng cách di chuyển thực tế từ nơi bạn đang ở." },
                      { step: "02", title: "Đọc hợp đồng kỹ — đặc biệt điều khoản sổ hồng", desc: "Xác nhận thời hạn cam kết cấp sổ, điều kiện phát sinh, phí phạt vi phạm và quy trình thanh toán từng đợt." },
                      { step: "03", title: "Kiểm tra tình trạng trạm xử lý nước thải", desc: "Hỏi trực tiếp tiến độ hoàn tất và thời điểm mở bán chính thức — đây là điều kiện pháp lý bắt buộc để giao dịch hợp lệ." },
                      { step: "04", title: "Tính toán dòng tiền thực tế", desc: "Vốn tự có, khoản vay, lãi suất, kỳ hạn, khả năng trả hàng tháng và tình huống lãi suất tăng. Không nên dồn quá 40% thu nhập hàng tháng cho khoản vay." },
                      { step: "05", title: "Tham khảo ít nhất 2–3 nguồn độc lập", desc: "Ngoài tài liệu từ chủ đầu tư, tìm đọc review từ người đã mua, forum bất động sản và báo cáo thị trường độc lập để có cái nhìn đa chiều." },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4 p-5 rounded-2xl border border-slate-200">
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-black text-sm flex items-center justify-center">{item.step}</span>
                        <div>
                          <p className="font-black text-slate-800 mb-1">{item.title}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <LinkBtn href="/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026">Xem hồ sơ pháp lý đầy đủ →</LinkBtn>
                    <LinkBtn href="/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026">Nhật ký thực địa →</LinkBtn>
                    <LinkBtn href="/the-link-city/bang-gia">Bảng giá 2026 →</LinkBtn>
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
                <SectionHeading>Tìm hiểu thêm</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city",                                                        label: "Tổng quan dự án The Link City" },
                    { href: "/the-link-city/phap-ly",                                                label: "Pháp lý — sổ hồng từng nền" },
                    { href: "/the-link-city/bang-gia",                                               label: "Bảng giá The Link City 2026" },
                    { href: "/the-link-city/tien-do",                                                label: "Tiến độ xây dựng mới nhất" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                             label: "Tổng quan & giá bán đợt 1" },
                    { href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",                 label: "Nhật ký thực địa The Link City" },
                    { href: "/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026", label: "Hồ sơ pháp lý & Công văn 2505" },
                    { href: "/tin-tuc/duong-di-tu-tphcm-den-the-link-city-dau-giay",                 label: "Đường đi từ TP.HCM đến dự án" },
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
                  Bài viết mang tính thông tin tham khảo, không phải tư vấn đầu tư tài chính.
                  Quyết định mua bán bất động sản cần dựa trên đánh giá cá nhân, thẩm định
                  pháp lý độc lập và khả năng tài chính thực tế của từng người.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                {/* Score card */}
                <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5">
                  <p className="font-black text-amber-800 text-sm mb-4 uppercase tracking-wider">Đánh giá tổng thể</p>
                  <div className="text-center mb-4">
                    <span className="text-5xl font-black text-amber-600">7.3</span>
                    <span className="text-amber-400 text-lg">/10</span>
                    <p className="text-xs text-amber-700 mt-1">Tốt — Phù hợp đầu tư trung hạn</p>
                  </div>
                  <div className="space-y-1.5 text-xs text-amber-800">
                    {[["Pháp lý", "9/10"],["Hạ tầng", "9/10"],["Vị trí", "8/10"],["Giá trị", "8/10"],["Tiện ích khu vực", "6/10"]].map(([k,v]) => (
                      <div key={k} className="flex justify-between">
                        <span>{k}</span><span className="font-black">{v}</span>
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
                  <p className="font-bold text-sm mb-1">Tư vấn trực tiếp</p>
                  <p className="text-amber-100 text-xs mb-4">Đặt câu hỏi cụ thể — đội ngũ sẽ tư vấn trung thực theo nhu cầu của bạn.</p>
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
            <h2 className="text-2xl font-black text-slate-900 mb-3">Sẵn sàng tìm hiểu thực tế hơn?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Đến thực địa một lần — đó là cách tốt nhất để tự đánh giá. Gọi để đặt lịch
              tham quan, không áp lực mua ngay.
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
              href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",
              title: "Nhật Ký Thực Địa The Link City Dầu Giây 2026",
              description: "Ký sự một ngày khảo sát thực địa: đường nhựa phẳng, sổ hồng cầm tay, công viên đồi cỏ xanh.",
              tag: "Thực địa",
            },
            {
              href: "/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026",
              title: "Hồ Sơ Pháp Lý The Link City: Giải Mã Công Văn 2505",
              description: "Giải mã công văn 2505/UBND-KTN và tiến trình cấp sổ hồng từng nền tại The Link City.",
              tag: "Pháp lý",
            },
            {
              href: "/tin-tuc/duong-di-tu-tphcm-den-the-link-city-dau-giay",
              title: "Đường Đi Từ TP.HCM Đến The Link City: 3 Lộ Trình",
              description: "Khoảng cách, thời gian thực tế và 3 lộ trình phù hợp với từng điểm xuất phát.",
              tag: "Di chuyển",
            },
            {
              href: "/tin-tuc/tien-ich-ngoai-khu-the-link-city-dau-giay",
              title: "Tiện Ích Ngoại Khu The Link City: Bệnh Viện, Trường Học & Chợ",
              description: "Hệ thống tiện ích thiết yếu trong bán kính 5km quanh dự án.",
              tag: "Tiện ích",
            },
          ]}
        />

        <CorpFooter />
      </div>
    </>
  );
}
