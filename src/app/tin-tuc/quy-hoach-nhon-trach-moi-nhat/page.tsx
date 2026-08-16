"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS7 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/quy-hoach-nhon-trach-moi-nhat`;
const PUBLISHED     = "16/08/2026";
const PUBLISHED_ISO = "2026-08-16";

// ─────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Quy hoạch Nhơn Trạch mới nhất 2026: Những thay đổi quan trọng cần biết",
  description: "Cập nhật quy hoạch Nhơn Trạch mới nhất năm 2026. Phân tích bản đồ quy hoạch, hạ tầng giao thông, định hướng phát triển và tác động đến thị trường bất động sản.",
  image: [IMG_NEWS7["1"], IMG_NEWS7["2"], IMG_NEWS7["3"]],
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
  keywords: "quy hoạch Nhơn Trạch mới nhất, bản đồ quy hoạch Nhơn Trạch 2026, quy hoạch Đồng Nai, quy hoạch sử dụng đất Nhơn Trạch, Mega City 2",
  about: {
    "@type": "Place",
    name: "Nhơn Trạch, Đồng Nai",
    address: { "@type": "PostalAddress", addressLocality: "Nhơn Trạch", addressRegion: "Đồng Nai", addressCountry: "VN" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Làm thế nào để kiểm tra quy hoạch Nhơn Trạch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà đầu tư có thể kiểm tra quy hoạch Nhơn Trạch tại UBND huyện Nhơn Trạch, Sở Xây dựng tỉnh Đồng Nai, Sở Tài nguyên và Môi trường tỉnh Đồng Nai, hoặc tham khảo cổng thông tin điện tử chính thức của UBND tỉnh Đồng Nai. Nên xác nhận trực tiếp tại cơ quan có thẩm quyền thay vì chỉ dựa vào thông tin trên mạng.",
      },
    },
    {
      "@type": "Question",
      name: "Quy hoạch có ảnh hưởng đến giá đất Nhơn Trạch không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Quy hoạch là một trong những yếu tố quan trọng nhất tác động đến giá trị bất động sản. Khu vực nằm trong vùng quy hoạch đô thị, có hạ tầng giao thông kết nối tốt thường có giá đất cao hơn và thanh khoản tốt hơn so với khu vực đất tự phát hoặc nằm ngoài quy hoạch.",
      },
    },
    {
      "@type": "Question",
      name: "Có nên đầu tư đất chỉ dựa vào thông tin quy hoạch không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Không. Quy hoạch chỉ là một trong nhiều yếu tố cần đánh giá. Nhà đầu tư cần kết hợp kiểm tra pháp lý cụ thể từng lô, xác nhận hạ tầng thực tế, đánh giá thanh khoản khu vực và khả năng tài chính cá nhân trước khi ra quyết định.",
      },
    },
    {
      "@type": "Question",
      name: "Quy hoạch Nhơn Trạch 2026 có gì mới?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhơn Trạch được định hướng phát triển thành đô thị vệ tinh của TP.HCM theo quy hoạch tỉnh Đồng Nai đến 2030. Các dự án hạ tầng lớn đang triển khai gồm sân bay Long Thành, đường Vành đai 3, cầu Cát Lái và các tuyến kết nối vùng, tác động trực tiếp đến quy hoạch và phát triển khu vực.",
      },
    },
    {
      "@type": "Question",
      name: "Quy hoạch 1/500 là gì và tại sao quan trọng với người mua đất?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quy hoạch chi tiết 1/500 là bản đồ quy hoạch tỷ lệ lớn, xác định cụ thể vị trí từng lô đất, chỉ giới xây dựng, mật độ, chiều cao công trình và hệ thống hạ tầng kỹ thuật. Đây là căn cứ pháp lý quan trọng để cấp phép xây dựng và giao dịch đất nền. Một dự án có quy hoạch 1/500 được phê duyệt là dấu hiệu pháp lý tốt.",
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
    { "@type": "ListItem", position: 3, name: "Quy hoạch Nhơn Trạch mới nhất 2026", item: PAGE_URL },
  ],
};

// ─────────────────────────────────────────────────────────────
// Lightbox images
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS7["1"], alt: "Bản đồ quy hoạch Nhơn Trạch năm 2026",             caption: "Bản đồ quy hoạch Nhơn Trạch năm 2026" },
  { src: IMG_NEWS7["2"], alt: "Quy hoạch sử dụng đất tại Nhơn Trạch Đồng Nai",   caption: "Quy hoạch sử dụng đất tại Nhơn Trạch, Đồng Nai" },
  { src: IMG_NEWS7["3"], alt: "Hạ tầng giao thông tại Nhơn Trạch",               caption: "Hạ tầng giao thông khu vực Nhơn Trạch" },
  { src: IMG_NEWS7["4"], alt: "Bản đồ quy hoạch đô thị Nhơn Trạch",              caption: "Bản đồ quy hoạch đô thị Nhơn Trạch" },
  { src: IMG_NEWS7["5"], alt: "Toàn cảnh huyện Nhơn Trạch Đồng Nai",             caption: "Toàn cảnh huyện Nhơn Trạch, Đồng Nai" },
  { src: IMG_NEWS7["6"], alt: "Khu đô thị mới tại Nhơn Trạch",                   caption: "Khu đô thị mới phát triển tại Nhơn Trạch" },
  { src: IMG_NEWS7["7"], alt: "Quy hoạch phát triển hạ tầng Đồng Nai",            caption: "Quy hoạch phát triển hạ tầng Đồng Nai 2026" },
];

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-primary-400 scroll-mt-24">
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
          <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0 mt-[9px]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const s = type === "warn"
    ? "bg-amber-50 border-amber-200 text-amber-800"
    : "bg-primary-50 border-primary-200 text-primary-800";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200
               text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function QuyHoachNhonTrachPage() {
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
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">Quy hoạch Nhơn Trạch 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Quy hoạch</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 13 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Quy hoạch Nhơn Trạch mới nhất 2026: Những thay đổi quan trọng cần biết
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Tổng hợp thông tin quy hoạch Nhơn Trạch năm 2026: định hướng phát triển đô thị,
              bản đồ quy hoạch sử dụng đất, hạ tầng giao thông và tác động đến thị trường
              bất động sản khu vực Đồng Nai.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to bản đồ quy hoạch Nhơn Trạch"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS7["1"]} alt="Bản đồ quy hoạch Nhơn Trạch năm 2026"
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
              Bản đồ quy hoạch khu vực Nhơn Trạch, tỉnh Đồng Nai năm 2026
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
                    ["#tong-quan",     "1. Tổng quan quy hoạch Nhơn Trạch 2026"],
                    ["#ban-do",        "2. Bản đồ quy hoạch Nhơn Trạch gồm những gì?"],
                    ["#ha-tang",       "3. Hạ tầng giao thông tác động đến Nhơn Trạch"],
                    ["#anh-huong-gia", "4. Quy hoạch ảnh hưởng thế nào đến giá đất?"],
                    ["#kiem-tra",      "5. Những lưu ý khi kiểm tra quy hoạch"],
                    ["#mega-city-2",   "6. Mega City 2 và quy hoạch tại Nhơn Trạch"],
                    ["#faq",           "7. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Nhơn Trạch là một trong những khu vực đang trải qua quá trình chuyển đổi đô thị
                nhanh nhất tại vùng kinh tế trọng điểm phía Nam. Từ một huyện nông thôn với
                nhiều khu công nghiệp, Nhơn Trạch đang dần định hình thành đô thị vệ tinh
                hiện đại theo định hướng quy hoạch tỉnh Đồng Nai đến năm 2030, tầm nhìn 2050.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Hiểu đúng quy hoạch là yêu cầu tối thiểu trước khi đưa ra bất kỳ quyết định
                đầu tư nào tại đây. Bài viết này tổng hợp thông tin về định hướng quy hoạch,
                các dự án hạ tầng đang triển khai và những điều nhà đầu tư cần kiểm tra
                khi tìm hiểu đất Nhơn Trạch năm 2026.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin quy hoạch trong bài tổng hợp từ nguồn công khai,
                mang tính tham khảo. Quy hoạch có thể được điều chỉnh theo quyết định của
                cơ quan có thẩm quyền. Luôn xác nhận tại cơ quan nhà nước trước khi giao dịch.
              </InfoBox>

              {/* Section 1 */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">Tổng quan quy hoạch Nhơn Trạch 2026</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo quy hoạch tỉnh Đồng Nai được phê duyệt, huyện Nhơn Trạch được định
                    hướng trở thành đô thị vệ tinh của TP.HCM với trọng tâm phát triển là:
                  </p>
                  <BulletList items={[
                    "Đô thị hóa: nâng cấp huyện Nhơn Trạch lên đơn vị hành chính đô thị trong lộ trình phát triển tỉnh Đồng Nai",
                    "Công nghiệp – dịch vụ: mở rộng và phát triển các khu công nghiệp, cảng logistics trong bối cảnh sân bay Long Thành đi vào hoạt động",
                    "Nhà ở đô thị: phát triển các khu dân cư quy hoạch đồng bộ đáp ứng nhu cầu nhà ở cho người lao động và chuyên gia",
                    "Hạ tầng giao thông: hoàn thiện mạng lưới đường kết nối nội – ngoại vùng, bao gồm đường 25C, cầu Cát Lái và vành đai 3",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Định hướng này tạo ra cơ sở để nhiều dự án khu dân cư và đô thị mới được
                    triển khai tại Nhơn Trạch trong giai đoạn 2020–2026 và tiếp tục trong
                    những năm tới.
                  </p>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS7["2"]} alt="Quy hoạch sử dụng đất tại Nhơn Trạch Đồng Nai"
                caption="Quy hoạch sử dụng đất tại Nhơn Trạch, Đồng Nai – phân khu chức năng"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 2 */}
              <section className="mb-12">
                <SectionHeading id="ban-do">Bản đồ quy hoạch Nhơn Trạch gồm những nội dung gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi tiếp cận bản đồ quy hoạch Nhơn Trạch, nhà đầu tư cần đọc và hiểu
                    được các lớp thông tin chính sau:
                  </p>

                  <H3>1. Quy hoạch sử dụng đất</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là nền tảng quan trọng nhất — xác định từng thửa đất được phép sử dụng
                    vào mục đích gì. Các loại đất chính trong quy hoạch Nhơn Trạch:
                  </p>
                  <BulletList items={[
                    "Đất ở đô thị và đất ở nông thôn: dành cho xây dựng nhà ở, phân theo quy hoạch khu dân cư",
                    "Đất thương mại – dịch vụ: dành cho các công trình kinh doanh, văn phòng, trung tâm thương mại",
                    "Đất công nghiệp: các khu công nghiệp Nhơn Trạch 1–6 và các khu mở rộng theo quy hoạch",
                    "Đất cây xanh và công viên: hành lang xanh, mảng cây xanh đô thị trong quy hoạch",
                    "Đất giao thông: các tuyến đường hiện hữu và quy hoạch, lộ giới, hành lang an toàn",
                    "Đất công cộng: trường học, y tế, hành chính, cơ sở hạ tầng xã hội",
                  ]} />

                  <H3>2. Quy hoạch giao thông</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mạng lưới giao thông là yếu tố quyết định giá trị bất động sản. Cần xác
                    định rõ:
                  </p>
                  <BulletList items={[
                    "Đường hiện hữu và lộ giới được quy hoạch mở rộng — ảnh hưởng trực tiếp đến đất mặt tiền",
                    "Các tuyến đường quy hoạch mới chưa thi công — khu vực liên quan có thể bị thu hồi hoặc tăng giá mạnh",
                    "Đường 25C, Quốc lộ 51, đường liên cảng — các trục kết nối quan trọng",
                    "Các nút giao, cầu và đường cao tốc đang triển khai trong khu vực",
                  ]} />

                  <H3>3. Quy hoạch khu dân cư và đô thị mới</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch có nhiều khu dân cư quy hoạch đã và đang triển khai. Khi đánh
                    giá một dự án, cần phân biệt:
                  </p>
                  <BulletList items={[
                    "Khu dân cư hiện hữu: đã có cư dân sinh sống, hạ tầng đồng bộ và tiện ích hoàn thiện",
                    "Khu dân cư đang triển khai: đang xây dựng hạ tầng, cần kiểm tra tiến độ thực tế",
                    "Khu dân cư quy hoạch tương lai: mới có trên giấy, chưa có hạ tầng — rủi ro cao hơn",
                    "Mật độ xây dựng và hệ số sử dụng đất: xác định tầng cao tối đa và diện tích sàn được phép xây",
                  ]} />
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS7["3"]} alt="Hạ tầng giao thông tại Nhơn Trạch"
                caption="Hệ thống hạ tầng giao thông đang được đầu tư mạnh tại Nhơn Trạch"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 3 */}
              <section className="mb-12">
                <SectionHeading id="ha-tang">Những công trình hạ tầng tác động trực tiếp đến Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-8">

                  <H3>1. Sân bay quốc tế Long Thành</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sân bay quốc tế Long Thành là dự án hạ tầng hàng không lớn nhất Việt Nam,
                    tọa lạc tại huyện Long Thành, Đồng Nai — cách khu vực trung tâm Nhơn Trạch
                    khoảng 15–20 km. Giai đoạn 1 có công suất 25 triệu hành khách/năm.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi đi vào hoạt động, sân bay này dự kiến tạo ra nhu cầu nhà ở và dịch vụ
                    lớn từ lực lượng lao động hàng không, chuyên gia quốc tế và các ngành công
                    nghiệp phụ trợ. Nhơn Trạch nằm trong hành lang hưởng lợi trực tiếp.
                  </p>
                  <InfoBox>
                    Tiến độ sân bay phụ thuộc quyết định của Chính phủ và Ban Quản lý dự án.
                    Đây là yếu tố dài hạn, không phải cam kết tăng giá ngắn hạn.{" "}
                    <a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach"
                      className="font-bold text-primary-700 underline">
                      Đọc thêm: Sân bay Long Thành & BĐS Nhơn Trạch →
                    </a>
                  </InfoBox>

                  <H3>2. Đường Vành đai 3 TP.HCM</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đường Vành đai 3 TP.HCM đi qua địa phận Đồng Nai, kết nối vùng kinh tế
                    trọng điểm phía Nam gồm TP.HCM, Bình Dương, Đồng Nai và Long An. Dự án này:
                  </p>
                  <BulletList items={[
                    "Rút ngắn đáng kể khoảng cách và thời gian di chuyển liên vùng",
                    "Kết nối Nhơn Trạch với các khu công nghiệp và trung tâm đô thị lân cận",
                    "Tạo động lực phát triển công nghiệp, logistics và nhà ở khu vực",
                    "Là trục đường huyết mạch trong quy hoạch vùng Đông Nam Bộ",
                  ]} />

                  <H3>3. Cầu Cát Lái (kết nối Nhơn Trạch – TP.HCM)</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cầu Cát Lái bắc qua sông Đồng Nai, nối Nhơn Trạch với TP.HCM (khu vực
                    Quận 2 – TP. Thủ Đức). Đây là dự án được nhà đầu tư bất động sản quan
                    tâm nhất vì tác động trực tiếp đến khả năng kết nối với TP.HCM.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hiện tại, người dân và nhà đầu tư sử dụng phà Cát Lái để di chuyển,
                    mất khoảng 25–35 phút. Khi cầu hoàn thành, thời gian rút ngắn còn
                    15–20 phút, tác động mạnh đến nhu cầu ở thực và đầu tư.
                  </p>

                  <H3>4. Cao tốc Bến Lức – Long Thành</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tuyến cao tốc này khi hoàn thiện sẽ kết nối vùng kinh tế trọng điểm
                    phía Nam, rút ngắn hành trình giữa Long An, TP.HCM và Đồng Nai. Nhơn
                    Trạch nằm trong hành lang được hưởng lợi từ tuyến đường này.
                  </p>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS7["4"]} alt="Bản đồ quy hoạch đô thị Nhơn Trạch"
                caption="Bản đồ quy hoạch phân khu đô thị Nhơn Trạch"
                images={images} index={3} onOpen={openLightbox} />

              {/* Section 4 */}
              <section className="mb-12">
                <SectionHeading id="anh-huong-gia">Quy hoạch ảnh hưởng như thế nào đến giá đất Nhơn Trạch?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Quy hoạch là một trong những yếu tố có ảnh hưởng lớn nhất và lâu dài nhất
                    đến giá trị bất động sản. Mối quan hệ này thể hiện rõ qua nhiều khía cạnh:
                  </p>

                  <H3>Quy hoạch tạo ra lợi thế về hạ tầng</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khu vực nằm trong vùng quy hoạch đô thị có hệ thống đường, điện, nước,
                    thoát nước được đầu tư đồng bộ. Điều này giảm chi phí đầu tư hạ tầng
                    cho từng hộ gia đình và tăng khả năng sinh sống, kinh doanh.
                  </p>

                  <H3>Quy hoạch xác định mục đích sử dụng đất</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đất được quy hoạch ở đô thị có giá cao hơn nhiều so với đất nông nghiệp
                    cùng diện tích. Khi một khu vực chuyển từ đất nông nghiệp sang đất ở theo
                    quy hoạch, giá đất có thể tăng đột biến — nhưng đây cũng là rủi ro nếu
                    quy hoạch bị thay đổi hoặc thu hồi.
                  </p>

                  <H3>Quy hoạch tác động đến kỳ vọng thị trường</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tin tức về dự án hạ tầng lớn (sân bay, cầu, đường cao tốc) thường tạo ra
                    làn sóng đầu cơ và đẩy giá đất lên trước khi dự án hoàn thành. Đây là
                    con dao hai lưỡi:
                  </p>
                  <BulletList items={[
                    "Nếu dự án triển khai đúng tiến độ: người mua sớm hưởng lợi",
                    "Nếu dự án trì hoãn hoặc thay đổi: giá đất có thể giảm và thanh khoản khó",
                    "Đầu cơ theo tin đồn thường rủi ro cao — cần xác minh thông tin chính thức",
                  ]} />

                  <InfoBox>
                    Muốn đọc thêm về mối quan hệ giữa giá đất và các yếu tố thị trường, xem:{" "}
                    <a href="/tin-tuc/gia-dat-nhon-trach-2026" className="font-bold text-primary-700 underline">
                      Giá đất Nhơn Trạch 2026: Thị trường đang diễn biến như thế nào? →
                    </a>
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS7["5"]} alt="Toàn cảnh huyện Nhơn Trạch Đồng Nai"
                caption="Toàn cảnh huyện Nhơn Trạch, Đồng Nai đang chuyển mình thành đô thị"
                images={images} index={4} onOpen={openLightbox} />

              {/* Section 5 */}
              <section className="mb-12">
                <SectionHeading id="kiem-tra">Những lưu ý khi kiểm tra quy hoạch trước khi mua đất</SectionHeading>
                <div className="pt-5 space-y-8">

                  <H3>1. Kiểm tra quy hoạch tại cơ quan có thẩm quyền</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Thông tin quy hoạch chính thức cần được xác nhận trực tiếp từ:
                  </p>
                  <BulletList items={[
                    "UBND huyện Nhơn Trạch – bộ phận một cửa, phòng Quản lý đô thị",
                    "Sở Xây dựng tỉnh Đồng Nai – tra cứu quy hoạch chi tiết 1/500",
                    "Sở Tài nguyên và Môi trường tỉnh Đồng Nai – kiểm tra quy hoạch sử dụng đất",
                    "Cổng thông tin điện tử chính thức của UBND tỉnh Đồng Nai",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không nên chỉ dựa vào thông tin từ người bán, môi giới hoặc các trang
                    thông tin không chính thức. Sai lầm trong việc xác minh quy hoạch có
                    thể dẫn đến mua phải đất quy hoạch đường, công viên hoặc không có khả
                    năng xây dựng.
                  </p>

                  <H3>2. Hiểu đúng về quy hoạch 1/500 và ý nghĩa pháp lý</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Quy hoạch chi tiết tỷ lệ 1/500 là bản đồ quy hoạch ở mức độ chi tiết
                    nhất, xác định cụ thể:
                  </p>
                  <BulletList items={[
                    "Ranh giới từng lô đất, diện tích và kích thước cụ thể",
                    "Chỉ giới đường đỏ và chỉ giới xây dựng",
                    "Mật độ xây dựng tối đa, chiều cao tối đa cho phép",
                    "Mục đích sử dụng đất từng ô đất",
                    "Các công trình hạ tầng kỹ thuật đi kèm",
                  ]} />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một dự án đất nền có quy hoạch 1/500 được phê duyệt là điều kiện cần
                    thiết để cấp phép xây dựng và thực hiện phân lô bán nền theo quy định
                    của Luật Kinh doanh bất động sản 2023.
                  </p>

                  <H3>3. Không mua đất chỉ dựa vào tin đồn quy hoạch</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhơn Trạch là khu vực thường xuất hiện tin đồn về quy hoạch và dự án
                    hạ tầng mới. Một số tình trạng phổ biến nhà đầu tư cần đề phòng:
                  </p>
                  <BulletList items={[
                    "Thổi giá đất theo tin đồn về cầu, đường hoặc khu công nghiệp mới chưa được phê duyệt",
                    "Bán đất nền không có quy hoạch 1/500, chưa đủ điều kiện phân lô bán nền",
                    "Mua bán theo tâm lý đám đông khi có thông tin sốt đất",
                    "Đất nông nghiệp được giới thiệu sẽ được chuyển đổi mục đích — chưa có căn cứ pháp lý",
                  ]} />

                  <H3>4. Kiểm tra pháp lý đầy đủ trước khi giao dịch</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ngoài quy hoạch, nhà đầu tư cần kiểm tra toàn diện:
                  </p>
                  <BulletList items={[
                    "Quyết định phê duyệt chủ trương đầu tư và quyết định phân lô bán nền",
                    "Giấy chứng nhận quyền sử dụng đất (sổ hồng): đã cấp hay chưa, có điều kiện không",
                    "Hạ tầng thực tế: xem trực tiếp, không chỉ qua ảnh hoặc phối cảnh",
                    "Nghĩa vụ tài chính: chủ đầu tư đã hoàn thành tiền sử dụng đất chưa",
                    "Hợp đồng: đọc kỹ các điều khoản về thời hạn giao đất, điều kiện xây dựng",
                  ]} />
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS7["6"]} alt="Khu đô thị mới tại Nhơn Trạch"
                caption="Khu đô thị mới đang hình thành tại Nhơn Trạch theo định hướng quy hoạch"
                images={images} index={5} onOpen={openLightbox} />

              {/* Section 6 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Mega City 2 và quy hoạch tại Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong bức tranh quy hoạch Nhơn Trạch, dự án{" "}
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">
                      Mega City 2
                    </a>{" "}
                    nổi bật như một trong những khu dân cư có nền tảng quy hoạch và
                    pháp lý được công bố rõ ràng nhất khu vực.
                  </p>

                  <H3>Quy hoạch 1/500 đã được phê duyệt</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khu dân cư Mega City 2 (quy mô ~83,94 ha tại xã Nhơn Trạch) đã được
                    cơ quan có thẩm quyền tỉnh Đồng Nai phê duyệt quy hoạch chi tiết 1/500,
                    xác định cụ thể vị trí, diện tích và chỉ giới xây dựng từng lô đất.
                    Đây là căn cứ để UBND tỉnh Đồng Nai ban hành Quyết định 1772/QĐ-UBND
                    ngày 30/5/2025 chấp thuận 2.421 lô đủ điều kiện phân lô bán nền.
                  </p>

                  <H3>Vị trí trong quy hoạch giao thông</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 nằm trực tiếp trên đường 25C — trục kết nối huyết mạch
                    giữa TP.HCM và Long Thành. Vị trí này nằm trong vùng thụ hưởng trực tiếp
                    từ các dự án hạ tầng lớn đang triển khai: sân bay Long Thành (~18 km),
                    cầu Cát Lái (khi hoàn thành) và đường Vành đai 3.
                  </p>

                  <H3>Những điểm cần xác nhận trước khi giao dịch</H3>
                  <BulletList items={[
                    "Tình trạng pháp lý cụ thể của từng lô — xem chi tiết tại trang pháp lý dự án",
                    "Điều kiện xây dựng theo QĐ 1772 (một số lô cần hoàn thành nhà trước 31/12/2029)",
                    "Hiện trạng hạ tầng thực tế — nên tham quan trực tiếp trước khi quyết định",
                    "Giá chuyển nhượng thực tế tại thời điểm giao dịch (giá thị trường thay đổi theo thời gian)",
                  ]} />

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/mega-city-2">Tổng quan Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý dự án →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí & Kết nối vùng →</LinkBtn>
                    <LinkBtn href="/mega-city-2/tien-do">Tiến độ xây dựng →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS7["7"]} alt="Quy hoạch phát triển hạ tầng Đồng Nai"
                caption="Quy hoạch phát triển hạ tầng và kết nối vùng tỉnh Đồng Nai 2026"
                images={images} index={6} onOpen={openLightbox} />

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về quy hoạch Nhơn Trạch 2026</SectionHeading>
                <div className="pt-5 space-y-3">
                  {[
                    {
                      q: "Làm thế nào để kiểm tra quy hoạch Nhơn Trạch?",
                      a: "Nhà đầu tư nên kiểm tra trực tiếp tại UBND huyện Nhơn Trạch, Sở Xây dựng hoặc Sở Tài nguyên và Môi trường tỉnh Đồng Nai. Cổng thông tin điện tử chính thức của UBND tỉnh Đồng Nai cũng cung cấp nhiều văn bản quy hoạch. Không nên chỉ dựa vào thông tin từ người bán hoặc trang không chính thức.",
                    },
                    {
                      q: "Quy hoạch có ảnh hưởng đến giá đất Nhơn Trạch không?",
                      a: "Có. Quy hoạch là một trong những yếu tố quan trọng nhất tác động đến giá trị bất động sản. Khu vực quy hoạch đô thị có hạ tầng đồng bộ thường có giá cao hơn và thanh khoản tốt hơn đất tự phát hoặc ngoài quy hoạch.",
                    },
                    {
                      q: "Có nên đầu tư đất chỉ dựa vào thông tin quy hoạch không?",
                      a: "Không. Quy hoạch chỉ là một yếu tố. Cần kết hợp kiểm tra pháp lý cụ thể từng lô, xác nhận hạ tầng thực tế, đánh giá thanh khoản và cân nhắc khả năng tài chính. Quy hoạch có thể bị điều chỉnh theo quyết định của cơ quan có thẩm quyền.",
                    },
                    {
                      q: "Quy hoạch Nhơn Trạch 2026 có gì mới?",
                      a: "Nhơn Trạch được định hướng phát triển thành đô thị vệ tinh của TP.HCM theo quy hoạch tỉnh Đồng Nai đến 2030. Các công trình hạ tầng lớn đang triển khai gồm sân bay Long Thành, đường Vành đai 3, cầu Cát Lái và các tuyến kết nối vùng.",
                    },
                    {
                      q: "Quy hoạch 1/500 là gì và tại sao quan trọng với người mua đất?",
                      a: "Quy hoạch chi tiết 1/500 xác định cụ thể ranh giới từng lô đất, chỉ giới xây dựng, mật độ và chiều cao tối đa. Đây là căn cứ pháp lý để cấp phép xây dựng và thực hiện phân lô bán nền. Dự án có quy hoạch 1/500 được phê duyệt là dấu hiệu pháp lý quan trọng.",
                    },
                  ].map(({ q, a }) => (
                    <details key={q} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary-200 transition-colors">
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-primary-700 select-none">
                        <span className="leading-snug">{q}</span>
                        <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-primary-600 transition-transform group-open:rotate-180 text-xs">▼</span>
                      </summary>
                      <div className="px-6 pb-5 border-t border-slate-100 pt-4">
                        <p className="text-slate-600 text-[16px] leading-relaxed">{a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin quy hoạch trong bài viết được tổng hợp từ nguồn công khai và mang tính tham khảo.
                  Quy hoạch có thể được điều chỉnh theo quyết định của cơ quan có thẩm quyền.
                  Trước khi ra quyết định đầu tư, cần xác nhận thông tin trực tiếp với cơ quan nhà nước.
                </p>
              </div>

            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu Mega City 2</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/mega-city-2",                    label: "Tổng quan dự án" },
                      { href: "/mega-city-2/vi-tri",             label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",            label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",            label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia",           label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",           label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/mat-bang",           label: "Mặt bằng sản phẩm" },
                      { href: "/mega-city-2/hinh-anh",           label: "Hình ảnh thực tế" },
                      { href: "/mega-city-2/faq",                label: "FAQ dự án" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600
                                   hover:text-primary-600 hover:translate-x-1 transition-all px-3 py-2
                                   rounded-xl hover:bg-white">
                        <span>{l.label}</span>
                        <span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    <a href="/tin-tuc/gia-dat-nhon-trach-2026"
                      className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                      → Giá đất Nhơn Trạch 2026
                    </a>
                    <a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach"
                      className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                      → Sân bay Long Thành & BĐS Nhơn Trạch
                    </a>
                  </div>
                </div>
                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn miễn phí</p>
                  <p className="text-primary-200 text-xs mb-4">Nhận thông tin pháp lý và bảng giá Mega City 2.</p>
                  <a href="tel:0937587438"
                    className="block text-center bg-white text-primary-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-colors">
                    0937.587.438
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-primary-50 border-t border-primary-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Tìm hiểu thêm về Mega City 2</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Xem thông tin về vị trí, pháp lý, quy hoạch và bảng giá dự án Mega City 2
              tại xã Nhơn Trạch, tỉnh Đồng Nai.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700
                           text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">
                Khám phá dự án →
              </a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600
                           text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">
                Gọi 0937.587.438
              </a>
            </div>
          </div>
        </section>

        <RelatedContent
          title="Bài viết liên quan"
          items={[
            { href: "/mega-city-2",                                          title: "Mega City 2 Nhơn Trạch – Tổng quan dự án",          description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá dự án.", tag: "Dự án" },
            { href: "/mega-city-2/vi-tri",                                   title: "Vị trí Mega City 2 & Kết nối vùng",                 description: "Phân tích vị trí chiến lược tại Nhơn Trạch: đường 25C, sân bay Long Thành.", tag: "Vị trí" },
            { href: "/mega-city-2/phap-ly",                                  title: "Pháp lý Mega City 2 – QĐ 1772/QĐ-UBND",             description: "Chi tiết pháp lý và điều kiện giao dịch tại Mega City 2.", tag: "Pháp lý" },
            { href: "/tin-tuc/gia-dat-nhon-trach-2026",                      title: "Giá đất Nhơn Trạch 2026 mới nhất",                  description: "Bảng giá, thị trường và phân tích các khu vực tiềm năng.", tag: "Thị trường" },
            { href: "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach", title: "Sân bay Long Thành & BĐS Nhơn Trạch",              description: "Phân tích tác động sân bay quốc tế Long Thành đến thị trường đất.", tag: "Sân bay" },
            { href: "/mega-city-2/tien-do",                                  title: "Tiến độ xây dựng Mega City 2",                      description: "Cập nhật tiến độ hạ tầng và hình ảnh thực tế dự án.", tag: "Tiến độ" },
          ]}
        />
      </div>

      <CorpFooter />
    </>
  );
}
