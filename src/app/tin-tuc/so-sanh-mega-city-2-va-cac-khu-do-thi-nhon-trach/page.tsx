"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS24 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/so-sanh-mega-city-2-va-cac-khu-do-thi-nhon-trach`;
const PUBLISHED     = "23/08/2026";
const PUBLISHED_ISO = "2026-08-23";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "So sánh Mega City 2 và các khu đô thị Nhơn Trạch: Nên chọn dự án nào?",
  description: "So sánh Mega City 2 với các khu đô thị nổi bật tại Nhơn Trạch về vị trí, quy mô, loại hình, hạ tầng, tiện ích và nhu cầu đầu tư.",
  image: [IMG_NEWS24["1"], IMG_NEWS24["2"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords: "so sánh mega city 2, mega city 2 aqua city, mega city 2 izumi city, khu đô thị nhơn trạch 2026, bất động sản nhơn trạch",
  about: { "@type": "Place", name: "Nhơn Trạch, Đồng Nai", address: { "@type": "PostalAddress", addressLocality: "Nhơn Trạch", addressRegion: "Đồng Nai", addressCountry: "VN" } },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Mega City 2 có lớn hơn Aqua City không?",
      acceptedAnswer: { "@type": "Answer", text: "Không. Theo thông tin công bố, Mega City 2 khoảng 84 ha trong khi Aqua City khoảng 1.000 ha. Đây là hai dự án có quy mô rất khác nhau." } },
    { "@type": "Question", name: "Mega City 2 và Aqua City khác nhau như thế nào?",
      acceptedAnswer: { "@type": "Answer", text: "Mega City 2 có quy mô khoảng 84 ha và tập trung vào nhóm sản phẩm thấp tầng tại Nhơn Trạch. Aqua City có quy mô khoảng 1.000 ha và được Novaland định hướng theo mô hình đại đô thị sinh thái ven sông." } },
    { "@type": "Question", name: "Mega City 2 và Izumi City có giống nhau không?",
      acceptedAnswer: { "@type": "Answer", text: "Không hoàn toàn. Izumi City có điểm nhấn về quy hoạch đô thị ven sông với các trục gắn với sông Đồng Nai và sông Bến Gỗ, trong khi Mega City 2 tập trung vào khu đô thị thấp tầng tại Nhơn Trạch." } },
    { "@type": "Question", name: "Nên mua Mega City 2 hay Aqua City?",
      acceptedAnswer: { "@type": "Answer", text: "Không thể đưa ra một lựa chọn chung. Người mua cần so sánh mục tiêu sử dụng, ngân sách, loại sản phẩm, pháp lý, vị trí và tiến độ của sản phẩm cụ thể." } },
    { "@type": "Question", name: "Có nên so sánh giá Mega City 2 với các khu đô thị khác?",
      acceptedAnswer: { "@type": "Answer", text: "Có, nhưng phải so sánh các sản phẩm tương đồng về loại hình, diện tích, vị trí, pháp lý và tình trạng hoàn thiện. Không nên lấy giá thấp nhất của dự án này so với giá trung bình của dự án khác." } },
    { "@type": "Question", name: "Nên mua đất nền Nhơn Trạch ở dự án nào?",
      acceptedAnswer: { "@type": "Answer", text: "Không nên lựa chọn chỉ dựa vào tên dự án. Hãy so sánh từng sản phẩm cụ thể theo pháp lý, quy hoạch, vị trí, hạ tầng, giá và thanh khoản." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "So sánh Mega City 2 và các khu đô thị Nhơn Trạch", item: PAGE_URL },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS24["1"], alt: "Tổng quan khu đô thị Mega City 2 Nhơn Trạch",                                              caption: "Mega City 2 là khu đô thị quy mô khoảng 84 ha tại Nhơn Trạch, Đồng Nai" },
  { src: IMG_NEWS24["2"], alt: "So sánh vị trí các khu đô thị Mega City 2 Aqua City Izumi City và SwanBay",                caption: "So sánh vị trí và định hướng phát triển của một số khu đô thị được quan tâm tại Đồng Nai" },
  { src: IMG_NEWS24["3"], alt: "So sánh giá bất động sản các khu đô thị tại Nhơn Trạch năm 2026",                         caption: "Khi so sánh giá bất động sản, nên đặt các sản phẩm có đặc điểm tương đồng" },
  { src: IMG_NEWS24["4"], alt: "7 tiêu chí so sánh các khu đô thị tại Nhơn Trạch",                                        caption: "Vị trí, pháp lý, quy hoạch, hạ tầng, tiện ích, giá và thanh khoản là tiêu chí quan trọng" },
  { src: IMG_NEWS24["5"], alt: "Hạ tầng giao thông Nhơn Trạch kết nối các khu đô thị",                                    caption: "Hạ tầng giao thông là yếu tố quan trọng khi so sánh các dự án bất động sản Nhơn Trạch" },
  { src: IMG_NEWS24["6"], alt: "Các khu đô thị nổi bật tại Nhơn Trạch Đồng Nai năm 2026",                                 caption: "Nhơn Trạch đang hình thành nhiều khu đô thị với định hướng phát triển và nhóm sản phẩm khác nhau" },
];

function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-primary-400 scroll-mt-24">{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-6">{children}</h3>;
}
function BulletList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="space-y-2.5 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-700 text-[16px] leading-relaxed">
          <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0 mt-[9px]" /><span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
function InfoBox({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const s = type === "warn" ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-primary-50 border-primary-200 text-primary-800";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary-100 transition-all">{children}</a>;
}
function ProjectCard({ name, size, highlight, tag, color }: { name: string; size: string; highlight: string; tag: string; color: string }) {
  return (
    <div className={`rounded-2xl border p-4 ${color}`}>
      <div className="flex items-start justify-between gap-2 mb-2">
        <p className="font-black text-slate-800 text-sm">{name}</p>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/70 text-slate-600">{tag}</span>
      </div>
      <p className="text-xs text-slate-500 mb-1">{size}</p>
      <p className="text-sm text-slate-700 leading-relaxed">{highlight}</p>
    </div>
  );
}

export default function SoSanhMegaCity2Page() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}
      <CorpHeader solid />
      <div className="bg-white min-h-screen">

        {/* Hero */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a><span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a><span>/</span>
              <span className="text-slate-600 font-medium">So sánh Mega City 2 và các khu đô thị Nhơn Trạch</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Thị trường</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">{PUBLISHED}</time>
              <span className="text-xs text-slate-400">· 13 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              So sánh Mega City 2 và các khu đô thị Nhơn Trạch: Nên chọn dự án nào?
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              So sánh Mega City 2 với Aqua City, Izumi City và SwanBay theo vị trí, quy mô,
              sản phẩm, hạ tầng, tiện ích và nhu cầu — để người mua có thêm cơ sở lựa chọn.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh so sánh khu đô thị Nhơn Trạch"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS24["1"]} alt="So sánh Mega City 2 và các khu đô thị Nhơn Trạch"
                className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Mega City 2 là khu đô thị quy mô khoảng 84 ha tại Nhơn Trạch, Đồng Nai
            </p>
          </div>
        </div>

        {/* Main */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#tong-quan",    "Tổng quan các khu đô thị"],
                    ["#mega-city-2",  "Mega City 2 Nhơn Trạch"],
                    ["#aqua-city",    "Aqua City khác Mega City 2 như thế nào?"],
                    ["#izumi-city",   "Izumi City khác Mega City 2 ở điểm nào?"],
                    ["#swanbay",      "SwanBay có gì khác Mega City 2?"],
                    ["#bang-so-sanh", "Bảng so sánh tổng hợp"],
                    ["#vi-tri",       "So sánh vị trí"],
                    ["#quy-mo",       "So sánh quy mô"],
                    ["#san-pham",     "So sánh loại hình sản phẩm"],
                    ["#tien-ich",     "So sánh tiện ích"],
                    ["#ha-tang",      "So sánh hạ tầng kết nối"],
                    ["#phap-ly",      "So sánh pháp lý"],
                    ["#gia",          "So sánh giá"],
                    ["#phu-hop",      "Dự án phù hợp với ai?"],
                    ["#7-tieu-chi",   "7 tiêu chí khi so sánh dự án"],
                    ["#sai-lam",      "Sai lầm thường gặp"],
                    ["#faq",          "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-primary-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Nhơn Trạch đang được nhiều người quan tâm khi tìm hiểu bất động sản khu vực
                phía Đông Nam Đồng Nai. Trong thị trường này, người mua có thể bắt gặp nhiều
                loại hình dự án khác nhau về quy mô, định hướng và nhóm sản phẩm.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Câu hỏi không nên chỉ là <em>"Dự án nào tốt nhất?"</em> mà nên là{" "}
                <em>"Dự án nào phù hợp nhất với mục tiêu, ngân sách và nhu cầu của mình?"</em>
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin về các dự án trong bài được tổng hợp từ nguồn
                công khai và mang tính tham khảo. Quy mô, sản phẩm và tình trạng triển khai có
                thể thay đổi. Người mua nên kiểm tra thông tin chính thức từ chủ đầu tư trước
                khi giao dịch.
              </InfoBox>

              {/* Tổng quan 4 dự án */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">Tổng quan các khu đô thị được so sánh</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ProjectCard name="Mega City 2" size="~84 ha · Nhơn Trạch, Đồng Nai"
                    highlight="Khu đô thị thấp tầng với nhà phố liền kề, nhà vườn và biệt thự. Gắn với các tuyến đường 25C, 319, Tôn Đức Thắng."
                    tag="Kim Oanh Group" color="border-primary-200 bg-primary-50" />
                  <ProjectCard name="Aqua City" size="~1.000 ha · Đồng Nai"
                    highlight="Đại đô thị sinh thái ven sông của Novaland với ~32 km đường sông tự nhiên và ~70% diện tích dành cho mảng xanh."
                    tag="Novaland" color="border-blue-200 bg-blue-50" />
                  <ProjectCard name="Izumi City" size="Quy mô đô thị lớn · Đồng Nai"
                    highlight="Đô thị ven sông của Nam Long với ~1,1 km mặt tiền sông Đồng Nai và trục sinh thái dọc sông Bến Gỗ."
                    tag="Nam Long" color="border-emerald-200 bg-emerald-50" />
                  <ProjectCard name="SwanBay" size="Nhiều phân khu · Nhơn Trạch, Đồng Nai"
                    highlight="Định hướng đô thị sinh thái. Cần xem xét cụ thể từng phân khu, loại sản phẩm và tình trạng thực tế."
                    tag="SwanBay" color="border-amber-200 bg-amber-50" />
                </div>
              </section>

              {/* Mega City 2 */}
              <section className="mb-12">
                <SectionHeading id="mega-city-2">Tổng quan Mega City 2 Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2</a>{" "}
                    là khu đô thị được quy hoạch tại Nhơn Trạch, Đồng Nai. Theo thông tin Kim Oanh
                    Group công bố, dự án có quy mô khoảng 84 ha, nằm giữa các tuyến đường 25C,
                    319, Tôn Đức Thắng và Nguyễn Hữu Cảnh.
                  </p>
                  <BulletList items={[
                    "Vị trí tại Nhơn Trạch, gắn với các tuyến giao thông quan trọng",
                    "Quy mô khoảng 84 ha theo thông tin Kim Oanh Group công bố",
                    "Nhóm sản phẩm thấp tầng: nhà phố liền kề, nhà vườn liên kế và biệt thự",
                    "Hệ thống tiện ích và hạ tầng nội khu theo quy hoạch",
                    "Phù hợp nghiên cứu theo hướng đất nền, nhà phố và bất động sản thấp tầng",
                  ]} />
                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/mega-city-2">Tổng quan Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/vi-tri">Vị trí dự án →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Aqua City */}
              <section className="mb-12">
                <SectionHeading id="aqua-city">Aqua City có gì khác Mega City 2?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Aqua City là đại đô thị sinh thái của Novaland tại Đồng Nai. Theo thông tin
                    Novaland công bố, Aqua City có quy mô khoảng 1.000 ha với ~32 km đường sông
                    tự nhiên bao quanh và khoảng 70% diện tích dành cho mảng xanh, hạ tầng và
                    tiện ích nội khu.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là điểm khác biệt lớn nhất: Aqua City có quy mô gấp hơn 10 lần Mega City 2
                    và được định hướng theo mô hình đại đô thị sinh thái — trong khi Mega City 2
                    tập trung vào khu đô thị thấp tầng tại Nhơn Trạch.
                  </p>
                  <BulletList items={[
                    "Quy mô ~1.000 ha — gấp nhiều lần Mega City 2",
                    "Không gian ven sông với ~32 km đường sông tự nhiên",
                    "Định hướng đô thị sinh thái với ~70% mảng xanh và tiện ích",
                    "Có nhiều phân khu, nhà phố và biệt thự theo từng giai đoạn",
                    "Novaland cho biết đến 12/2025 đã bàn giao hơn 1.000 căn",
                  ]} />
                </div>
              </section>

              {/* Izumi City */}
              <section className="mb-12">
                <SectionHeading id="izumi-city">Izumi City khác Mega City 2 ở điểm nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Izumi City là dự án của Nam Long tại Đồng Nai với điểm nhấn về đô thị ven sông.
                    Theo thông tin Nam Long công bố, Izumi City có ~1,1 km mặt tiền sông Đồng Nai
                    và trục sinh thái dọc sông Bến Gỗ — tạo định hướng không gian khác biệt so với
                    mô hình khu đô thị thấp tầng của Mega City 2.
                  </p>
                  <InfoBox type="warn">
                    Không nên lấy giá của một sản phẩm Izumi City so sánh trực tiếp với giá Mega
                    City 2 nếu hai sản phẩm khác nhau về diện tích, loại hình, vị trí và pháp lý.
                  </InfoBox>
                </div>
              </section>

              {/* SwanBay */}
              <section className="mb-12">
                <SectionHeading id="swanbay">SwanBay có gì khác Mega City 2?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    SwanBay là một cái tên thường xuất hiện khi tìm hiểu bất động sản khu vực
                    Nhơn Trạch với định hướng không gian đô thị sinh thái. Khi so sánh với Mega
                    City 2, cần đặt hai dự án trong cùng nhóm tiêu chí: vị trí, loại hình sản
                    phẩm, mức độ hoàn thiện, hạ tầng và khả năng thanh khoản.
                  </p>
                  <InfoBox>
                    Đối với các dự án có nhiều phân khu, không nên sử dụng thông tin của toàn bộ
                    đại dự án để áp dụng cho từng sản phẩm cụ thể.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS24["2"]} alt="So sánh vị trí các khu đô thị Mega City 2 Aqua City Izumi City và SwanBay"
                caption="So sánh vị trí và định hướng phát triển của một số khu đô thị được quan tâm tại Đồng Nai"
                images={images} index={1} onOpen={openLightbox} />

              {/* Bảng so sánh */}
              <section className="mb-12">
                <SectionHeading id="bang-so-sanh">Bảng so sánh tổng hợp</SectionHeading>
                <div className="pt-5 overflow-x-auto">
                  <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[600px]">
                    <thead>
                      <tr className="bg-primary-600 text-white">
                        <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-32">Tiêu chí</th>
                        <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Mega City 2</th>
                        <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Aqua City</th>
                        <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Izumi City</th>
                        <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">SwanBay</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        ["Khu vực",       "Nhơn Trạch, ĐN",         "Đồng Nai",              "Đồng Nai",              "Nhơn Trạch, ĐN"],
                        ["Định hướng",    "Khu đô thị thấp tầng",   "Đại đô thị sinh thái",  "Đô thị ven sông",       "Đô thị sinh thái"],
                        ["Quy mô",        "~84 ha",                  "~1.000 ha",             "Quy mô đô thị lớn",     "Xem từng phân khu"],
                        ["Sản phẩm",      "Nhà phố, biệt thự",       "Nhà phố, biệt thự...",  "Nhiều loại hình",       "Nhiều loại hình"],
                        ["Điểm nhấn",     "Kết nối đường 25C",       "Sông nước, quy mô lớn", "Ven sông Đồng Nai",     "Không gian sinh thái"],
                        ["Cần kiểm tra", "Pháp lý, vị trí, giá",   "Pháp lý, phân khu",     "Pháp lý, phân khu",     "Pháp lý, phân khu"],
                      ].map(([tieu_chi, mc2, aqua, izumi, swan], i) => (
                        <tr key={tieu_chi} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                          <td className="px-4 py-3 font-semibold text-slate-700">{tieu_chi}</td>
                          <td className="px-4 py-3 text-primary-700 font-medium">{mc2}</td>
                          <td className="px-4 py-3 text-slate-600">{aqua}</td>
                          <td className="px-4 py-3 text-slate-600">{izumi}</td>
                          <td className="px-4 py-3 text-slate-600">{swan}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-xs text-slate-500 italic mt-2">
                    Bảng trên mang tính định hướng. Quy mô và sản phẩm có thể thay đổi theo
                    từng phân khu hoặc thời điểm. Cần kiểm tra thông tin chính thức trước giao dịch.
                  </p>
                </div>
              </section>

              {/* So sánh vị trí */}
              <section className="mb-10">
                <SectionHeading id="vi-tri">So sánh vị trí</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 nằm giữa các tuyến 25C, 319, Tôn Đức Thắng và Nguyễn Hữu Cảnh —
                    tạo lợi thế về khả năng tiếp cận các trục giao thông Nhơn Trạch. Aqua City
                    gắn với hệ thống sông và trục Hương Lộ 2. Izumi City có lợi thế về không gian
                    ven sông Đồng Nai và sông Bến Gỗ.
                  </p>
                  <InfoBox>
                    Thay vì hỏi "Dự án nào có vị trí tốt hơn?", hãy hỏi: <em>"Vị trí đó có
                    phù hợp với mục đích sử dụng của mình không?"</em>
                  </InfoBox>
                </div>
              </section>

              {/* So sánh quy mô */}
              <section className="mb-10">
                <SectionHeading id="quy-mo">So sánh quy mô dự án</SectionHeading>
                <div className="pt-5 space-y-4">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sự khác biệt về quy mô dẫn đến cách phát triển đô thị cũng khác nhau:
                  </p>
                  <div className="space-y-3">
                    {[
                      { name: "Mega City 2 (~84 ha)",    desc: "Tập trung vào khu đô thị thấp tầng với quy mô vừa phải, dễ kiểm soát tổng thể dự án." },
                      { name: "Aqua City (~1.000 ha)",   desc: "Đại đô thị với nhiều phân khu, hệ thống tiện ích quy mô lớn và nhiều giai đoạn phát triển." },
                      { name: "Izumi City",              desc: "Đô thị gắn với sông nước và các trục chức năng được Nam Long quy hoạch theo định hướng đô thị sinh thái." },
                      { name: "SwanBay",                 desc: "Định hướng sinh thái, cần xem xét cụ thể từng phân khu và mức độ hoàn thiện thực tế." },
                    ].map((item) => (
                      <div key={item.name} className="flex gap-3 px-5 py-4 rounded-xl border border-slate-200 bg-white">
                        <span className="text-primary-500 font-black flex-shrink-0">•</span>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{item.name}</p>
                          <p className="text-slate-600 text-[14px] leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* So sánh sản phẩm */}
              <section className="mb-10">
                <SectionHeading id="san-pham">So sánh loại hình sản phẩm</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là tiêu chí rất quan trọng. Không nên so sánh đất nền với biệt thự, hay
                    nhà phố với căn hộ như thể chúng là cùng một loại tài sản.
                  </p>
                  <BulletList items={[
                    "Mega City 2: nhà phố liền kề, nhà vườn liên kế và biệt thự theo quy hoạch",
                    "Aqua City: nhiều loại hình theo từng phân khu (nhà phố, biệt thự...)",
                    "Izumi City: nhiều loại hình sản phẩm theo quy hoạch và từng giai đoạn",
                    "SwanBay: cần xem cụ thể từng phân khu và loại sản phẩm",
                  ]} />
                  <InfoBox type="warn">
                    Khi so sánh giá, chỉ so sánh các sản phẩm cùng loại hình, diện tích tương
                    đương, pháp lý và điều kiện thanh toán tương đồng.
                  </InfoBox>
                </div>
              </section>

              {/* So sánh tiện ích */}
              <section className="mb-10">
                <SectionHeading id="tien-ich">So sánh không gian sống và tiện ích</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu mua để ở, tiện ích và môi trường sống có thể quan trọng không kém vị trí:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { name: "Mega City 2", tien_ich: "Hạ tầng nội khu, công viên, không gian cây xanh và khu chức năng theo quy hoạch" },
                      { name: "Aqua City",   tien_ich: "Mô hình đô thị sinh thái, hệ thống sông nước và không gian xanh quy mô lớn (Novaland)" },
                      { name: "Izumi City",  tien_ich: "Không gian ven sông và các trục chức năng gắn với sông Đồng Nai, sông Bến Gỗ (Nam Long)" },
                      { name: "SwanBay",     tien_ich: "Nên đánh giá trực tiếp tiện ích và mức độ vận hành thực tế của từng khu vực" },
                    ].map((item) => (
                      <div key={item.name} className="rounded-xl border border-slate-200 bg-white p-4">
                        <p className="font-bold text-primary-700 text-sm mb-1.5">{item.name}</p>
                        <p className="text-slate-600 text-[13px] leading-relaxed">{item.tien_ich}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS24["3"]} alt="Hạ tầng giao thông Nhơn Trạch kết nối các khu đô thị"
                caption="Hạ tầng giao thông là yếu tố quan trọng khi so sánh các dự án bất động sản Nhơn Trạch"
                images={images} index={4} onOpen={openLightbox} />

              {/* So sánh hạ tầng */}
              <section className="mb-10">
                <SectionHeading id="ha-tang">So sánh về hạ tầng kết nối</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Các công trình giao thông thường được nhắc đến khi đánh giá khu vực Nhơn Trạch:
                  </p>
                  <BulletList items={[
                    <><a href="/tin-tuc/cau-nhon-trach" className="text-primary-700 font-semibold hover:underline">Cầu Nhơn Trạch</a> — đã khai thác từ 20/8/2025</>,
                    <><a href="/tin-tuc/duong-25c" className="text-primary-700 font-semibold hover:underline">Đường 25C</a> — trục giao thông huyết mạch Nhơn Trạch</>,
                    <><a href="/tin-tuc/vanh-dai-3" className="text-primary-700 font-semibold hover:underline">Vành đai 3 TP.HCM</a> — đang triển khai</>,
                    <><a href="/tin-tuc/cao-toc-ben-luc-long-thanh" className="text-primary-700 font-semibold hover:underline">Cao tốc Bến Lức – Long Thành</a> — mục tiêu quý III/2026</>,
                    <><a href="/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach" className="text-primary-700 font-semibold hover:underline">Sân bay Long Thành</a> — dự án trọng điểm quốc gia</>,
                  ]} />
                  <InfoBox type="warn">
                    Cần phân biệt hạ tầng đã hoàn thành, đang triển khai và mới ở mức định hướng.
                    Không nên biến dự án hạ tầng tương lai thành cam kết tăng giá bất động sản.
                  </InfoBox>
                </div>
              </section>

              {/* Pháp lý */}
              <section className="mb-10">
                <SectionHeading id="phap-ly">So sánh về pháp lý</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một dự án có vị trí đẹp hoặc quy mô lớn chưa chắc phù hợp nếu sản phẩm đang
                    xem xét chưa đáp ứng nhu cầu pháp lý. Khi so sánh, cần kiểm tra: chủ đầu tư,
                    quy hoạch, quyết định liên quan, điều kiện chuyển nhượng và hợp đồng.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý Mega City 2 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-hoach-1-500-nhon-trach">Quy hoạch 1/500 Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* So sánh giá */}
              <section className="mb-10">
                <SectionHeading id="gia">So sánh giá Mega City 2 với các dự án khác</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Giá là tiêu chí được quan tâm nhiều nhất nhưng cũng dễ so sánh sai nhất. Không
                    nên lấy giá thấp nhất của Mega City 2 so với giá trung bình của Aqua City rồi
                    kết luận dự án nào "rẻ hơn".
                  </p>
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-5">
                    <p className="font-bold text-slate-700 text-sm mb-3">Cách so sánh giá hợp lý:</p>
                    <BulletList items={["Cùng loại hình sản phẩm","Diện tích tương đương","Vị trí tương đương","Tình trạng pháp lý tương đương","Mức độ hoàn thiện tương đương","Điều kiện thanh toán tương đương"]} />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá Mega City 2 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/gia-dat-nhon-trach-2026">Giá đất Nhơn Trạch 2026 →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS24["3"]} alt="So sánh giá bất động sản các khu đô thị tại Nhơn Trạch năm 2026"
                caption="Khi so sánh giá bất động sản, nên đặt các sản phẩm có đặc điểm tương đồng lên cùng một mặt bằng"
                images={images} index={2} onOpen={openLightbox} />

              {/* Phù hợp với ai */}
              <section className="mb-12">
                <SectionHeading id="phu-hop">Dự án nào phù hợp với nhóm nhu cầu nào?</SectionHeading>
                <div className="pt-5 space-y-4">
                  {[
                    { project: "Mega City 2",  match: "Quan tâm đất nền / nhà phố thấp tầng tại Nhơn Trạch, đầu tư trung dài hạn, vị trí kết nối giao thông khu vực." },
                    { project: "Aqua City",    match: "Ưu tiên đại đô thị sinh thái quy mô lớn, không gian sông nước, hệ thống tiện ích nội khu quy mô." },
                    { project: "Izumi City",   match: "Ưu tiên đô thị ven sông, không gian xanh và các trục đô thị gắn với cảnh quan tự nhiên." },
                    { project: "SwanBay",      match: "Quan tâm đô thị sinh thái Nhơn Trạch — nên xem xét theo từng phân khu và loại sản phẩm cụ thể." },
                  ].map((item) => (
                    <div key={item.project} className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-primary-200 transition-colors">
                      <div className="flex-shrink-0 w-28 font-black text-primary-700 text-sm">{item.project}</div>
                      <p className="text-slate-600 text-[15px] leading-relaxed">{item.match}</p>
                    </div>
                  ))}
                  <InfoBox type="warn">
                    Không có một dự án phù hợp với tất cả. Việc phù hợp hay không vẫn phụ thuộc
                    vào tài chính, mục tiêu và sản phẩm cụ thể.
                  </InfoBox>
                </div>
              </section>

              {/* 7 tiêu chí */}
              <section className="mb-12">
                <SectionHeading id="7-tieu-chi">7 tiêu chí khi so sánh các khu đô thị Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-3">
                  {[
                    ["Vị trí",       "Dự án có thuận tiện với nơi ở, nơi làm việc và các tuyến giao thông cần dùng không?"],
                    ["Pháp lý",      "Sản phẩm cụ thể đang xem có hồ sơ pháp lý như thế nào?"],
                    ["Quy hoạch",    "Quy hoạch có phù hợp với mục đích mua và định hướng phát triển không?"],
                    ["Hạ tầng",      "Hạ tầng đã hoàn thiện đến đâu? Phân biệt hiện hữu và định hướng tương lai."],
                    ["Tiện ích",     "Có đáp ứng nhu cầu ở thực tế không? Cần khảo sát trực tiếp."],
                    ["Giá",          "Giá có phù hợp với ngân sách và mặt bằng sản phẩm tương đồng không?"],
                    ["Thanh khoản",  "Nếu cần bán lại, sản phẩm có thể tiếp cận nhóm khách hàng nào?"],
                  ].map(([tieu_chi, mo_ta], i) => (
                    <div key={tieu_chi} className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="w-7 h-7 rounded-lg bg-primary-600 text-white font-black text-xs flex items-center justify-center flex-shrink-0">{i + 1}</div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{tieu_chi}</p>
                        <p className="text-slate-600 text-[14px] leading-relaxed mt-0.5">{mo_ta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <ArticleFigure src={IMG_NEWS24["4"]} alt="7 tiêu chí so sánh các khu đô thị tại Nhơn Trạch"
                caption="Vị trí, pháp lý, quy hoạch, hạ tầng, tiện ích, giá và thanh khoản là những tiêu chí quan trọng khi so sánh dự án"
                images={images} index={3} onOpen={openLightbox} />

              {/* Sai lầm */}
              <section className="mb-12">
                <SectionHeading id="sai-lam">Những sai lầm khi so sánh Mega City 2 với dự án khác</SectionHeading>
                <div className="pt-5 space-y-3">
                  {[
                    ["Chỉ nhìn vào giá",                        "Giá thấp không đồng nghĩa với giá trị tốt hơn."],
                    ["So sánh khác loại sản phẩm",              "Đất nền, nhà phố, biệt thự cần đánh giá trên tiêu chí khác nhau."],
                    ["So sánh toàn dự án với một sản phẩm",     "Đại đô thị gồm nhiều phân khu với mức giá và tình trạng khác nhau."],
                    ["Chỉ nhìn vào phối cảnh",                  "Phối cảnh thể hiện định hướng, không thay thế khảo sát hiện trạng."],
                    ["Chỉ nhìn vào hạ tầng tương lai",          "Hạ tầng cần phân loại: hiện hữu, đang triển khai và định hướng."],
                    ["Bỏ qua pháp lý",                          "Cần kiểm tra trước khi quan tâm đến khả năng tăng giá."],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                      <p className="font-bold text-amber-800 mb-1">{title}</p>
                      <p className="text-amber-700 text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp</SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details key={name} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary-200 transition-colors">
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

              {/* Tìm hiểu thêm */}
              <section className="mb-12">
                <SectionHeading>Tìm hiểu thêm về Mega City 2 và thị trường Nhơn Trạch</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/mega-city-2",                                   label: "Mega City 2 Nhơn Trạch" },
                    { href: "/mega-city-2/vi-tri",                             label: "Vị trí Mega City 2" },
                    { href: "/mega-city-2/phap-ly",                            label: "Pháp lý Mega City 2" },
                    { href: "/mega-city-2/bang-gia",                           label: "Bảng giá Mega City 2" },
                    { href: "/mega-city-2/tien-do",                            label: "Tiến độ Mega City 2" },
                    { href: "/mega-city-2/tien-ich",                           label: "Tiện ích Mega City 2" },
                    { href: "/tin-tuc/gia-dat-nhon-trach-2026",                label: "Giá đất Nhơn Trạch 2026" },
                    { href: "/tin-tuc/quy-hoach-nhon-trach-moi-nhat",         label: "Quy hoạch Nhơn Trạch 2026" },
                    { href: "/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi",       label: "Mua đất Nhơn Trạch cần lưu ý gì?" },
                    { href: "/tin-tuc/quy-trinh-mua-dat-nen-nhon-trach",      label: "Quy trình mua đất nền Nhơn Trạch" },
                    { href: "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat",label: "Hạ tầng giao thông Nhơn Trạch" },
                  ].map((l) => (
                    <a key={l.href} href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600 transition-colors px-4 py-3 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50">
                      <span className="text-primary-400 flex-shrink-0">→</span><span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </section>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin về các dự án trong bài được tổng hợp từ nguồn công khai và mang tính
                  tham khảo. Quy mô, sản phẩm và tình trạng triển khai có thể thay đổi theo từng
                  phân khu hoặc thời điểm. Cần kiểm tra thông tin chính thức từ chủ đầu tư trước
                  khi giao dịch.
                </p>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-800 text-sm mb-4">Tìm hiểu Mega City 2</p>
                  <div className="space-y-2.5">
                    {[
                      { href: "/mega-city-2",          label: "Tổng quan dự án" },
                      { href: "/mega-city-2/vi-tri",    label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",   label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia",  label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/mat-bang",  label: "Mặt bằng sản phẩm" },
                      { href: "/mega-city-2/hinh-anh",  label: "Hình ảnh thực tế" },
                    ].map((l) => (
                      <a key={l.href} href={l.href}
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-primary-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white">
                        <span>{l.label}</span><span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Giá đất Nhơn Trạch 2026",          href: "/tin-tuc/gia-dat-nhon-trach-2026" },
                      { label: "Mua đất cần lưu ý gì?",            href: "/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi" },
                      { label: "Quy trình mua đất nền",             href: "/tin-tuc/quy-trinh-mua-dat-nen-nhon-trach" },
                      { label: "5 lý do đầu tư Mega City 2",        href: "/tin-tuc/5-ly-do-nen-dau-tu-mega-city-2" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">→ {l.label}</a>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn miễn phí</p>
                  <p className="text-primary-200 text-xs mb-4">Nhận thông tin pháp lý và bảng giá Mega City 2.</p>
                  <a href="tel:0937587438" className="block text-center bg-white text-primary-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-colors">0937.587.438</a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-primary-50 border-t border-primary-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">Đang tìm hiểu Mega City 2 Nhơn Trạch?</h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Xem thông tin dự án theo từng chuyên mục để có đầy đủ cơ sở so sánh và quyết định.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/mega-city-2" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm">Xem dự án →</a>
              <a href="tel:0937587438" className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm">Gọi 0937.587.438</a>
            </div>
          </div>
        </section>

        <RelatedContent title="Bài viết liên quan" items={[
          { href: "/tin-tuc/5-ly-do-nen-dau-tu-mega-city-2",        title: "5 Lý Do Nên Đầu Tư Mega City 2 Nhơn Trạch",      description: "Phân tích 5 lý do vị trí, hạ tầng, pháp lý và tiềm năng của Mega City 2.", tag: "Dự án" },
          { href: "/tin-tuc/gia-dat-nhon-trach-2026",                title: "Giá Đất Nhơn Trạch 2026: Thị Trường Diễn Biến Thế Nào?", description: "Cập nhật giá đất thực tế và phân tích xu hướng thị trường.", tag: "Thị trường" },
          { href: "/tin-tuc/mua-dat-nhon-trach-can-luu-y-gi",       title: "Mua Đất Nhơn Trạch Cần Lưu Ý Gì? 10 Điều Cần Biết", description: "10 yếu tố pháp lý, quy hoạch, vị trí cần kiểm tra trước khi mua.", tag: "Thị trường" },
          { href: "/mega-city-2",                                    title: "Mega City 2 Nhơn Trạch – Tổng Quan Dự Án",        description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và bảng giá.", tag: "Dự án" },
        ]} />
        <CorpFooter />
      </div>
    </>
  );
}
