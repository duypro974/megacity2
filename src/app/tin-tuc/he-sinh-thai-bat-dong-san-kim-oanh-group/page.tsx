"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import PageCTA from "@/components/PageCTA";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS29 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/he-sinh-thai-bat-dong-san-kim-oanh-group`;
const PUBLISHED     = "24/08/2026";
const PUBLISHED_ISO = "2026-08-24";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Hệ sinh thái bất động sản Kim Oanh Group: Mô hình phát triển đồng bộ và những lĩnh vực nổi bật",
  description: "Tìm hiểu hệ sinh thái bất động sản Kim Oanh Group, các lĩnh vực hoạt động, vai trò của Kim Oanh Land, phát triển đô thị, nhà ở và những định hướng mới.",
  image: [IMG_NEWS29["1"], IMG_NEWS29["2"], IMG_NEWS29["3"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` } },
  datePublished: PUBLISHED_ISO, dateModified: PUBLISHED_ISO,
  url: PAGE_URL, mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  about: { "@type": "Organization", name: "Kim Oanh Group", url: BASE_URL },
  keywords: "hệ sinh thái bất động sản Kim Oanh Group, Kim Oanh Land, Kim Oanh Group Đồng Nai, K-Home nhà ở xã hội",
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức", item: `${BASE_URL}/tin-tuc` },
    { "@type": "ListItem", position: 3, name: "Hệ sinh thái bất động sản Kim Oanh Group", item: PAGE_URL },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org", "@type": "Organization",
  name: "Kim Oanh Group", url: BASE_URL,
  logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  sameAs: [BASE_URL],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: IMG_NEWS29["1"],  alt: "Hệ sinh thái bất động sản Kim Oanh Group với các lĩnh vực phát triển đô thị và nhà ở",        caption: "Hệ sinh thái Kim Oanh Group liên kết nhiều lĩnh vực trong chuỗi giá trị bất động sản" },
  { src: IMG_NEWS29["2"],  alt: "Sơ đồ hệ sinh thái Kim Oanh Group gồm phát triển bất động sản hạ tầng nhà ở kinh doanh và cộng đồng", caption: "Các thành phần chính trong hệ sinh thái bất động sản Kim Oanh Group" },
  { src: IMG_NEWS29["3"],  alt: "Kim Oanh Group phát triển các khu đô thị và sản phẩm bất động sản",                           caption: "Kim Oanh Group phát triển nhiều loại hình sản phẩm nhà ở và khu đô thị" },
  { src: IMG_NEWS29["4"],  alt: "Kim Oanh Land đơn vị đầu tư và phát triển bất động sản trong hệ sinh thái Kim Oanh",         caption: "Kim Oanh Land tập trung vào hoạt động đầu tư và phát triển quỹ đất" },
  { src: IMG_NEWS29["5"],  alt: "K-Home mô hình nhà ở xã hội thuộc hệ sinh thái Kim Oanh Group",                              caption: "K-Home là thương hiệu nhà ở xã hội hướng đến nhu cầu an cư với mức giá phù hợp" },
  { src: IMG_NEWS29["6"],  alt: "Mô hình đô thị tích hợp trong hệ sinh thái bất động sản Kim Oanh Group",                    caption: "Mô hình đô thị tích hợp kết nối nhà ở, thương mại, tiện ích và cộng đồng" },
  { src: IMG_NEWS29["7"],  alt: "Hệ sinh thái thương mại và dịch vụ tại các khu đô thị Kim Oanh Group",                       caption: "Kim Oanh Group mở rộng hệ sinh thái qua hợp tác thương mại và dịch vụ đô thị" },
  { src: IMG_NEWS29["8"],  alt: "Các phân khúc bất động sản nhà ở xã hội trung cấp và cao cấp của Kim Oanh Group",            caption: "Kim Oanh Group hướng đến ba phân khúc: nhà ở xã hội, trung cấp và cao cấp" },
  { src: IMG_NEWS29["9"],  alt: "Hoạt động bất động sản Kim Oanh Group tại Đồng Nai và khu vực Nhơn Trạch",                  caption: "Đồng Nai và Nhơn Trạch là thị trường trọng điểm trong chiến lược phát triển của Kim Oanh Group" },
  { src: IMG_NEWS29["10"], alt: "Chuỗi giá trị phát triển bất động sản trong hệ sinh thái Kim Oanh Group",                    caption: "Chuỗi giá trị từ quỹ đất đến cộng đồng cư dân trong hệ sinh thái Kim Oanh Group" },
];

// ─── Sub-components ────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400 scroll-mt-24">{children}</h2>;
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
  const s = type === "warn" ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-slate-50 border-slate-200 text-slate-700";
  return <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${s}`}>{children}</div>;
}
function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-4 py-2 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all">{children}</a>;
}

// ─── Data ──────────────────────────────────────────────────────────────────
const ecosystemBranches = [
  { icon: "🏗️", label: "Đầu tư & phát triển bất động sản" },
  { icon: "📊", label: "Kinh doanh & tiếp thị bất động sản" },
  { icon: "🏘️", label: "Xây dựng hạ tầng & nhà ở" },
  { icon: "🤝", label: "Phát triển cộng đồng" },
  { icon: "🛍️", label: "Thương mại – dịch vụ & tiện ích" },
];

const valueChain = [
  "Quỹ đất", "Quy hoạch", "Phát triển dự án", "Xây dựng",
  "Kinh doanh", "Bàn giao", "Vận hành", "Cộng đồng cư dân",
];

const checkItems7 = [
  { no: "01", title: "Vị trí", desc: "Dự án nằm ở đâu? Khả năng kết nối với các tuyến giao thông chính như thế nào?" },
  { no: "02", title: "Pháp lý", desc: "Tình trạng pháp lý của dự án và từng sản phẩm ra sao?" },
  { no: "03", title: "Quy hoạch", desc: "Quy hoạch khu vực trong ngắn hạn và dài hạn có những thay đổi nào?" },
  { no: "04", title: "Tiến độ", desc: "Dự án đang ở giai đoạn nào? Các hạng mục hạ tầng và tiện ích được triển khai ra sao?" },
  { no: "05", title: "Giá bán", desc: "Giá sản phẩm có phù hợp với mặt bằng khu vực và khả năng tài chính hay không?" },
  { no: "06", title: "Nhu cầu sử dụng", desc: "Sản phẩm phù hợp để ở, đầu tư dài hạn hay mục đích khác?" },
  { no: "07", title: "Hạ tầng xung quanh", desc: "Các tuyến đường, cầu, cao tốc, sân bay và tiện ích khu vực có tác động như thế nào?" },
];

const faqs = [
  { q: "Kim Oanh Group hoạt động trong những lĩnh vực nào?", a: "Kim Oanh Group phát triển hệ sinh thái xoay quanh các lĩnh vực như đầu tư và phát triển bất động sản, kinh doanh – tiếp thị bất động sản, xây dựng hạ tầng và nhà ở, phát triển cộng đồng cùng các hoạt động dịch vụ liên quan đến đô thị." },
  { q: "Kim Oanh Land có vai trò gì trong hệ sinh thái Kim Oanh Group?", a: "Kim Oanh Land được Kim Oanh Group giới thiệu là đơn vị tập trung vào hoạt động đầu tư và phát triển bất động sản, trong đó chú trọng phát triển quỹ đất và các dự án nhà ở." },
  { q: "K-Home có thuộc hệ sinh thái Kim Oanh không?", a: "K-Home là thương hiệu nhà ở xã hội được Kim Oanh Group giới thiệu trong chiến lược phát triển nhà ở, hướng đến nhóm khách hàng có nhu cầu an cư với sản phẩm phù hợp hơn về khả năng chi trả." },
  { q: "Kim Oanh Group có hoạt động tại Đồng Nai không?", a: "Có. Đồng Nai là một trong những địa bàn được Kim Oanh Group tập trung hoạt động và doanh nghiệp hiện có trụ sở tại Đồng Nai theo thông tin công bố trên website chính thức." },
  { q: "Hệ sinh thái Kim Oanh Group có liên quan đến Mega City 2 không?", a: "Nếu bạn đang nghiên cứu Mega City 2, nên xem thông tin dự án cụ thể trên các trang chuyên biệt về vị trí, pháp lý, tiến độ và giá thay vì chỉ dựa vào thông tin tổng quan về doanh nghiệp." },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function HeSinhThaiBDSKimOanhGroupPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {LightboxPortal}
      <ScrollAnimator />
      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* Hero */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span className="text-slate-300">/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium line-clamp-1">Hệ sinh thái Kim Oanh Group</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Thông tin Kim Oanh</span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 12 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Hệ sinh thái bất động sản Kim Oanh Group: Mô hình phát triển đồng bộ và những lĩnh vực nổi bật
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Tìm hiểu hệ sinh thái bất động sản Kim Oanh Group, các lĩnh vực hoạt động, vai trò
              của Kim Oanh Land, phát triển nhà ở xã hội K-Home và định hướng phát triển đô thị.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)} role="button" tabIndex={0}
              aria-label="Phóng to ảnh hệ sinh thái Kim Oanh Group"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG_NEWS29["1"]} alt="Hệ sinh thái bất động sản Kim Oanh Group với các lĩnh vực phát triển đô thị và nhà ở" className="w-full h-auto block" loading="eager" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" /></svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Hệ sinh thái Kim Oanh Group liên kết nhiều lĩnh vực trong chuỗi giá trị bất động sản
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
                <ol className="space-y-1.5 text-sm text-slate-600 columns-1 sm:columns-2 gap-x-8">
                  {[
                    ["#he-sinh-thai-la-gi",   "Hệ sinh thái Kim Oanh Group là gì?"],
                    ["#dinh-huong",           "Kim Oanh Group phát triển theo hướng nào?"],
                    ["#1-dau-tu",             "1. Đầu tư & phát triển bất động sản"],
                    ["#2-kim-oanh-land",      "2. Kim Oanh Land và hoạt động kinh doanh"],
                    ["#3-xay-dung",           "3. Xây dựng hạ tầng và nhà ở"],
                    ["#4-nha-o-xa-hoi",       "4. Nhà ở xã hội K-Home"],
                    ["#5-do-thi-tich-hop",    "5. Phát triển đô thị tích hợp"],
                    ["#6-thuong-mai",         "6. Hệ sinh thái thương mại – dịch vụ"],
                    ["#7-phan-khuc",          "7. Nhiều phân khúc khách hàng"],
                    ["#8-cong-dong",          "8. Phát triển cộng đồng"],
                    ["#so-sanh",             "So sánh mô hình hệ sinh thái"],
                    ["#dong-nai",             "Liên quan đến thị trường Đồng Nai"],
                    ["#dinh-huong-tuong-lai", "Định hướng phát triển tương lai"],
                    ["#nguoi-mua",            "Người mua cần hiểu gì?"],
                    ["#mega-city-2",          "Liên quan đến Mega City 2"],
                    ["#faq",                  "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}><a href={href} className="hover:text-amber-600 transition-colors">{label}</a></li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <div className="space-y-5 mb-14">
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Trong quá trình phát triển, Kim Oanh Group định hướng xây dựng một hệ sinh
                  thái bất động sản có tính liên kết giữa nhiều lĩnh vực thay vì chỉ tập trung
                  vào một khâu riêng lẻ của thị trường.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Theo thông tin giới thiệu chính thức, Kim Oanh Group xây dựng hệ sinh thái
                  với các tiêu chí đa dạng, chuyên môn hóa, tối ưu và hiệu quả, hướng đến việc
                  tạo ra lợi ích hài hòa cho khách hàng, đối tác, đội ngũ và cộng đồng.
                </p>
                <InfoBox>
                  Một khu đô thị muốn hình thành không chỉ dừng lại ở việc phát triển quỹ đất
                  và xây dựng sản phẩm. Đằng sau còn có quy hoạch, phát triển hạ tầng, xây dựng,
                  kinh doanh, tiếp thị, quản lý vận hành và các dịch vụ phục vụ cư dân — đây
                  cũng là lý do khái niệm hệ sinh thái bất động sản được sử dụng.
                </InfoBox>
                <LinkBtn href="/tin-tuc/lich-su-phat-trien-kim-oanh-group">
                  Lịch sử hình thành và phát triển của Kim Oanh Group →
                </LinkBtn>
              </div>

              {/* Section Định hướng */}
              <section id="dinh-huong" className="mb-12">
                <SectionHeading>Kim Oanh Group phát triển hệ sinh thái theo hướng nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo giới thiệu của Kim Oanh Group, hệ sinh thái được xây dựng nhằm tạo ra
                    chuỗi giá trị liên kết trong quá trình phát triển bất động sản. Các nhóm
                    hoạt động nổi bật gồm:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 my-6">
                    {ecosystemBranches.map((b) => (
                      <div key={b.label} className="rounded-xl border border-slate-200 p-4 text-center hover:border-amber-300 transition-colors">
                        <div className="text-2xl mb-2">{b.icon}</div>
                        <p className="text-xs font-bold text-slate-700 leading-snug">{b.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong các tài liệu giới thiệu, Kim Oanh Group nhấn mạnh việc chuẩn hóa hệ
                    sinh thái để tạo thành chuỗi giá trị bất động sản có tính liên kết, phân
                    biệt với cách tiếp cận chỉ tập trung vào một sản phẩm đơn lẻ.
                  </p>
                </div>
              </section>

              {/* Image 1 – sơ đồ */}
              <ArticleFigure src={IMG_NEWS29["2"]} alt="Sơ đồ hệ sinh thái Kim Oanh Group"
                caption="Các thành phần chính trong hệ sinh thái bất động sản Kim Oanh Group"
                images={images} index={1} onOpen={openLightbox} />

              {/* Section 1 */}
              <section id="1-dau-tu" className="mb-12">
                <SectionHeading>1. Đầu tư và phát triển bất động sản</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là một trong những lĩnh vực cốt lõi của hệ sinh thái Kim Oanh Group.
                    Theo website chính thức, Kim Oanh Group giới thiệu hệ thống dự án với nhiều
                    loại hình sản phẩm như nhà phố thương mại, nhà phố liên kế và căn hộ cao tầng.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong tài liệu giới thiệu doanh nghiệp, Kim Oanh Land được xác định là đơn
                    vị tập trung vào hoạt động đầu tư và phát triển bất động sản, trong đó chú
                    trọng phát triển quỹ đất tại các khu vực thị trường trọng điểm.
                  </p>
                  <H3>Vì sao hoạt động phát triển bất động sản là trung tâm của hệ sinh thái?</H3>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một khu đô thị muốn hình thành cần trải qua nhiều giai đoạn:
                  </p>
                  {/* Value chain */}
                  <div className="flex flex-wrap items-center gap-2 my-4">
                    {valueChain.map((step, i) => (
                      <React.Fragment key={step}>
                        <span className="bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-sm font-bold text-amber-800">{step}</span>
                        {i < valueChain.length - 1 && <span className="text-amber-400 font-bold">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Do đó, hoạt động phát triển bất động sản đóng vai trò kết nối nhiều mắt xích
                    khác nhau trong toàn bộ hệ sinh thái.
                  </p>
                </div>
              </section>

              {/* Image 2 – phát triển BĐS */}
              <ArticleFigure src={IMG_NEWS29["3"]} alt="Kim Oanh Group phát triển các khu đô thị và sản phẩm bất động sản"
                caption="Kim Oanh Group phát triển nhiều loại hình sản phẩm nhà ở và khu đô thị"
                images={images} index={2} onOpen={openLightbox} />

              {/* Section 2 */}
              <section id="2-kim-oanh-land" className="mb-12">
                <SectionHeading>2. Kim Oanh Land và hoạt động kinh doanh – tiếp thị bất động sản</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo tài liệu giới thiệu của Kim Oanh Group, hệ thống kinh doanh và tiếp
                    thị có vai trò đưa sản phẩm bất động sản đến khách hàng thông qua hệ thống
                    phân phối và đội ngũ chuyên viên.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Điều này có ý nghĩa quan trọng bởi một dự án bất động sản không chỉ cần
                    được phát triển về mặt quy hoạch và xây dựng mà còn phải có chiến lược tiếp
                    cận thị trường phù hợp. Kim Oanh Land là thương hiệu được Kim Oanh Group
                    giới thiệu với vai trò gắn với hoạt động đầu tư và phát triển bất động sản.
                  </p>
                </div>
              </section>

              {/* Image 3 – Kim Oanh Land */}
              <ArticleFigure src={IMG_NEWS29["4"]} alt="Kim Oanh Land đơn vị đầu tư và phát triển bất động sản"
                caption="Kim Oanh Land tập trung vào hoạt động đầu tư và phát triển quỹ đất"
                images={images} index={3} onOpen={openLightbox} />

              {/* Section 3 */}
              <section id="3-xay-dung" className="mb-12">
                <SectionHeading>3. Xây dựng hạ tầng và phát triển nhà ở</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một khu đô thị hoàn chỉnh không thể chỉ có đất và nhà ở. Hạ tầng kỹ thuật,
                    đường giao thông, cảnh quan, công trình tiện ích và các hạng mục phục vụ cư
                    dân là những thành phần quan trọng quyết định chất lượng của một khu đô thị.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong mô hình hệ sinh thái được Kim Oanh Group giới thiệu, hoạt động xây
                    dựng hạ tầng và nhà ở là một mắt xích quan trọng. Việc kết nối các hoạt
                    động này giúp quá trình phát triển dự án có sự liên kết tốt hơn giữa ý
                    tưởng quy hoạch, sản phẩm nhà ở và hạ tầng thực tế.
                  </p>
                </div>
              </section>

              {/* Section 4 – K-Home */}
              <section id="4-nha-o-xa-hoi" className="mb-12">
                <SectionHeading>4. Phát triển nhà ở xã hội – thương hiệu K-Home</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một hướng phát triển đáng chú ý trong hệ sinh thái Kim Oanh Group là phân
                    khúc nhà ở xã hội. Thương hiệu <strong>K-Home</strong> được Kim Oanh Group
                    giới thiệu là dòng sản phẩm nhà ở hướng đến nhu cầu an cư với mức giá phù
                    hợp hơn cho người lao động và các nhóm khách hàng có nhu cầu ở thực.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo thông tin được Kim Oanh Group công bố trong năm 2026, Kim Oanh Land đã
                    phát triển 14 dự án nhà ở xã hội với quy mô khoảng 25.000 sản phẩm; doanh
                    nghiệp cũng đặt mục tiêu triển khai thêm nhiều dự án trong giai đoạn tiếp theo.
                  </p>
                  <InfoBox>
                    Nhà ở xã hội không chỉ là một phân khúc sản phẩm mà còn liên quan trực tiếp
                    đến nhu cầu an cư của người lao động — đây là một trong những điểm nổi bật
                    trong chiến lược phát triển của Kim Oanh Group.
                  </InfoBox>
                </div>
              </section>

              {/* Image 4 – K-Home */}
              <ArticleFigure src={IMG_NEWS29["5"]} alt="K-Home mô hình nhà ở xã hội thuộc hệ sinh thái Kim Oanh Group"
                caption="K-Home là thương hiệu nhà ở xã hội hướng đến nhu cầu an cư với mức giá phù hợp"
                images={images} index={4} onOpen={openLightbox} />

              {/* Section 5 */}
              <section id="5-do-thi-tich-hop" className="mb-12">
                <SectionHeading>5. Phát triển các khu đô thị theo mô hình tích hợp</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Xu hướng phát triển bất động sản hiện nay không chỉ tập trung vào việc xây
                    dựng nhà ở. Một khu đô thị hiện đại cần có sự kết hợp giữa:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["Nhà ở", "Không gian thương mại", "Tiện ích", "Cảnh quan", "Giáo dục", "Chăm sóc sức khỏe", "Sinh hoạt cộng đồng", "Giao thông nội khu", "Dịch vụ cư dân"].map((item) => (
                      <div key={item} className="flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-3 border border-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Kim Oanh Group cho biết định hướng phát triển các dự án theo mô hình đô thị
                    tích hợp, trong đó cư dân có thể đáp ứng nhiều nhu cầu trong cùng một hệ
                    sinh thái.
                  </p>
                </div>
              </section>

              {/* Image 5 – đô thị tích hợp */}
              <ArticleFigure src={IMG_NEWS29["6"]} alt="Mô hình đô thị tích hợp trong hệ sinh thái bất động sản Kim Oanh Group"
                caption="Mô hình đô thị tích hợp kết nối nhà ở, thương mại, tiện ích và cộng đồng"
                images={images} index={5} onOpen={openLightbox} />

              {/* Section 6 */}
              <section id="6-thuong-mai" className="mb-12">
                <SectionHeading>6. Hệ sinh thái thương mại – dịch vụ</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một khu đô thị muốn hoạt động hiệu quả trong dài hạn cần có các dịch vụ
                    phục vụ nhu cầu hàng ngày của cư dân. Trong năm 2026, Kim Oanh Group công bố
                    hợp tác chiến lược với Central Retail Việt Nam nhằm phát triển hệ sinh thái
                    thương mại – dịch vụ tại các khu đô thị.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trước đó, Kim Oanh Group cũng công bố hợp tác với LG Electronics Việt Nam và
                    Công ty TNHH Công nghệ Sao Việt để hướng đến nâng cao chất lượng sản phẩm và
                    hoàn thiện hệ sinh thái tiện ích tại các dự án.
                  </p>
                  <InfoBox>
                    Những hoạt động hợp tác này cho thấy hệ sinh thái bất động sản đang được mở
                    rộng theo hướng không chỉ cung cấp sản phẩm nhà ở mà còn quan tâm đến các
                    dịch vụ và tiện ích phục vụ cuộc sống.
                  </InfoBox>
                </div>
              </section>

              {/* Image 6 – thương mại */}
              <ArticleFigure src={IMG_NEWS29["7"]} alt="Hệ sinh thái thương mại và dịch vụ tại các khu đô thị Kim Oanh Group"
                caption="Kim Oanh Group mở rộng hệ sinh thái qua hợp tác thương mại và dịch vụ đô thị"
                images={images} index={6} onOpen={openLightbox} />

              {/* Section 7 */}
              <section id="7-phan-khuc" className="mb-12">
                <SectionHeading>7. Hệ sinh thái hướng đến nhiều phân khúc khách hàng</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo thông tin doanh nghiệp công bố trong năm 2026, Kim Oanh Group tập trung
                    vào ba phân khúc trọng điểm:
                  </p>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="divide-y divide-slate-100">
                      {[
                        { label: "Nhà ở xã hội", desc: "Người mua nhà lần đầu, người lao động, nhóm khách hàng có nhu cầu an cư với sản phẩm phù hợp khả năng chi trả.", icon: "🏠" },
                        { label: "Bất động sản trung cấp", desc: "Khách hàng đã có tích lũy tài chính, muốn nâng cấp chỗ ở hoặc đầu tư dài hạn tại khu vực đang phát triển.", icon: "🏘️" },
                        { label: "Bất động sản cao cấp", desc: "Nhóm khách hàng có khả năng tài chính cao, quan tâm đến chất lượng không gian sống và giá trị tài sản.", icon: "🏛️" },
                      ].map((item) => (
                        <div key={item.label} className="flex gap-4 px-6 py-5 hover:bg-amber-50/30 transition-colors">
                          <span className="text-2xl flex-shrink-0">{item.icon}</span>
                          <div>
                            <p className="font-black text-slate-800 text-sm mb-1">{item.label}</p>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Image 7 – phân khúc */}
              <ArticleFigure src={IMG_NEWS29["8"]} alt="Các phân khúc bất động sản của Kim Oanh Group"
                caption="Kim Oanh Group hướng đến ba phân khúc: nhà ở xã hội, trung cấp và cao cấp"
                images={images} index={7} onOpen={openLightbox} />

              {/* Section 8 */}
              <section id="8-cong-dong" className="mb-12">
                <SectionHeading>8. Phát triển cộng đồng là một phần của hệ sinh thái</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bên cạnh hoạt động kinh doanh, Kim Oanh Group cũng giới thiệu phát triển
                    cộng đồng là một thành phần trong hệ sinh thái. Theo trang giới thiệu doanh
                    nghiệp, triết lý phát triển gắn với việc tạo lập các giá trị sẻ chia và
                    hướng đến lợi ích hài hòa giữa khách hàng, đối tác, đội ngũ, cộng đồng và
                    xã hội.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Điều này tạo nên một góc nhìn rộng hơn về khái niệm hệ sinh thái: bất động
                    sản không chỉ tạo ra công trình mà còn góp phần hình thành cộng đồng cư dân
                    và các giá trị xã hội xung quanh dự án.
                  </p>
                </div>
              </section>

              {/* So sánh mô hình */}
              <section id="so-sanh" className="mb-12">
                <SectionHeading>So sánh mô hình hệ sinh thái với mô hình thông thường</SectionHeading>
                <div className="pt-5">
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-amber-500 text-white">
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Mô hình thông thường</th>
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Mô hình hệ sinh thái</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Tập trung vào một số sản phẩm", "Nhiều nhóm sản phẩm"],
                          ["Phát triển dự án", "Phát triển dự án + hạ tầng + tiện ích"],
                          ["Bán sản phẩm", "Xây dựng chuỗi giá trị"],
                          ["Tập trung giao dịch", "Quan tâm đến vòng đời đô thị"],
                          ["Phân khúc riêng lẻ", "Nhiều phân khúc khách hàng"],
                          ["Ít liên kết dịch vụ", "Kết nối nhiều lĩnh vực"],
                        ].map(([a, b], i) => (
                          <tr key={a} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-5 py-3.5 text-slate-500">{a}</td>
                            <td className="px-5 py-3.5 text-slate-700 font-medium">{b}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <InfoBox type="warn">
                    Hệ sinh thái không đồng nghĩa với việc tất cả các công đoạn đều do một pháp
                    nhân duy nhất thực hiện. Trong thực tế, các dự án lớn thường có sự tham gia
                    của nhiều đơn vị, đối tác và nhà cung cấp chuyên môn khác nhau.
                  </InfoBox>
                </div>
              </section>

              {/* Section Đồng Nai */}
              <section id="dong-nai" className="mb-12">
                <SectionHeading>Hệ sinh thái Kim Oanh Group liên quan gì đến thị trường Đồng Nai?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đồng Nai là một trong những thị trường được Kim Oanh Group tập trung phát
                    triển. Đặc biệt, sự phát triển của hạ tầng khu vực như sân bay Long Thành,
                    các tuyến cao tốc, đường vành đai và hệ thống giao thông kết nối vùng đang
                    tạo ra nhiều thay đổi đối với thị trường bất động sản Đồng Nai và Nhơn Trạch.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tuy nhiên, người mua vẫn nên đánh giá từng dự án cụ thể dựa trên vị trí,
                    pháp lý, quy hoạch, tiến độ, hạ tầng và khả năng đáp ứng nhu cầu thực tế
                    thay vì chỉ dựa vào thương hiệu doanh nghiệp.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/thi-truong-bat-dong-san-nhon-trach-2026">Thị trường BĐS Nhơn Trạch 2026 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat">Hạ tầng Nhơn Trạch →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Image 8 – Đồng Nai */}
              <ArticleFigure src={IMG_NEWS29["9"]} alt="Hoạt động bất động sản Kim Oanh Group tại Đồng Nai và khu vực Nhơn Trạch"
                caption="Đồng Nai và Nhơn Trạch là thị trường trọng điểm trong chiến lược phát triển của Kim Oanh Group"
                images={images} index={8} onOpen={openLightbox} />

              {/* Section định hướng tương lai */}
              <section id="dinh-huong-tuong-lai" className="mb-12">
                <SectionHeading>Kim Oanh Group và định hướng phát triển đô thị trong thời gian tới</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo những thông tin doanh nghiệp công bố trong năm 2026, Kim Oanh Group
                    đang tiếp tục mở rộng hệ sinh thái thông qua các hoạt động hợp tác trong
                    lĩnh vực tiện ích, thương mại – dịch vụ và phát triển đô thị.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Kim Oanh Group cũng đang nhấn mạnh các yếu tố như phát triển xanh, chất
                    lượng sống và mô hình đô thị tích hợp trong chiến lược phát triển. Điều này
                    cho thấy xu hướng phát triển bất động sản đang dần chuyển từ{" "}
                    <em>"bán sản phẩm nhà ở"</em> sang{" "}
                    <em>"phát triển không gian sống và cộng đồng đô thị"</em>.
                  </p>
                </div>
              </section>

              {/* Section người mua */}
              <section id="nguoi-mua" className="mb-12">
                <SectionHeading>Người mua cần hiểu gì khi tìm hiểu Kim Oanh Group?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nếu bạn đang tìm hiểu một dự án thuộc hệ sinh thái Kim Oanh Group, không
                    nên chỉ xem thông tin về thương hiệu. Thay vào đó, nên kiểm tra riêng từng
                    yếu tố:
                  </p>
                  <div className="space-y-4">
                    {checkItems7.map((item) => (
                      <div key={item.no} className="flex gap-4 rounded-2xl border border-slate-200 p-5 hover:border-amber-300 transition-colors">
                        <span className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 font-black text-sm flex items-center justify-center flex-shrink-0">{item.no}</span>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                          <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section Mega City 2 */}
              <section id="mega-city-2" className="mb-12">
                <SectionHeading>Hệ sinh thái Kim Oanh Group và Mega City 2 Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 là một trong những chủ đề mà người tìm kiếm bất động sản tại
                    Nhơn Trạch có thể quan tâm khi nghiên cứu các dự án liên quan đến Kim Oanh.
                    Nếu đang tìm hiểu dự án này, người đọc có thể xem thêm các nội dung chuyên
                    sâu:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/bang-gia-mega-city-2-moi-nhat">Bảng giá Mega City 2 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/vi-tri-mega-city-2-o-dau">Vị trí Mega City 2 ở đâu? →</LinkBtn>
                    <LinkBtn href="/tin-tuc/phap-ly-mega-city-2">Pháp lý Mega City 2 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/tien-do-mega-city-2">Tiến độ Mega City 2 →</LinkBtn>
                    <LinkBtn href="/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach">Có nên đầu tư Mega City 2? →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* Image 9 – chuỗi giá trị */}
              <ArticleFigure src={IMG_NEWS29["10"]} alt="Chuỗi giá trị phát triển bất động sản trong hệ sinh thái Kim Oanh Group"
                caption="Chuỗi giá trị từ quỹ đất đến cộng đồng cư dân trong hệ sinh thái Kim Oanh Group"
                images={images} index={9} onOpen={openLightbox} />

              {/* FAQ */}
              <div id="faq" className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm scroll-mt-24 mb-14">
                <div className="bg-slate-900 px-7 py-6">
                  <h2 className="text-white font-black text-xl tracking-tight">FAQ – Hệ sinh thái Kim Oanh Group</h2>
                </div>
                <div className="divide-y divide-slate-100">
                  {faqs.map(({ q, a }) => (
                    <div key={q} className="px-7 py-6 hover:bg-slate-50 transition-colors">
                      <p className="font-bold text-slate-800 text-base mb-2">{q}</p>
                      <p className="text-slate-500 text-[15px] leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kết luận */}
              <div className="rounded-2xl bg-amber-50 border border-amber-200 px-7 py-7">
                <h2 className="text-xl font-black text-slate-900 mb-4">Kết luận</h2>
                <p className="text-slate-700 text-[16px] leading-[1.85] mb-4">
                  Hệ sinh thái bất động sản Kim Oanh Group được xây dựng theo định hướng liên
                  kết nhiều lĩnh vực trong chuỗi giá trị bất động sản, từ đầu tư và phát triển
                  dự án, kinh doanh – tiếp thị, xây dựng hạ tầng và nhà ở đến phát triển cộng
                  đồng và các dịch vụ hỗ trợ đời sống đô thị.
                </p>
                <p className="text-slate-700 text-[16px] leading-[1.85] mb-4">
                  Đối với người đang tìm hiểu bất động sản tại Đồng Nai và Nhơn Trạch, quyết
                  định mua hoặc đầu tư vẫn nên dựa trên thông tin cụ thể của từng dự án, đặc
                  biệt là pháp lý, quy hoạch, vị trí, tiến độ, giá bán và nhu cầu sử dụng thực
                  tế.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <LinkBtn href="/mega-city-2">Xem thông tin Mega City 2 →</LinkBtn>
                  <LinkBtn href="/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach">Có nên đầu tư Mega City 2? →</LinkBtn>
                </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28 space-y-6">

                {/* Ecosystem quick */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-amber-500 px-6 py-4">
                    <p className="text-white font-black text-sm uppercase tracking-wider">Hệ sinh thái Kim Oanh</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {ecosystemBranches.map((b) => (
                      <div key={b.label} className="flex items-center gap-3 px-5 py-3.5">
                        <span className="text-base flex-shrink-0">{b.icon}</span>
                        <p className="text-sm font-semibold text-slate-700 leading-snug">{b.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-wider">Bài liên quan</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      { label: "Lịch sử Kim Oanh Group",   href: "/tin-tuc/lich-su-phat-trien-kim-oanh-group" },
                      { label: "Mega City 2 Nhơn Trạch",   href: "/mega-city-2" },
                      { label: "Bảng giá Mega City 2",     href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat" },
                      { label: "Pháp lý Mega City 2",      href: "/tin-tuc/phap-ly-mega-city-2" },
                      { label: "Tiến độ Mega City 2",      href: "/tin-tuc/tien-do-mega-city-2" },
                      { label: "Có nên đầu tư Mega City 2?", href: "/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach" },
                      { label: "Thị trường BĐS Nhơn Trạch", href: "/tin-tuc/thi-truong-bat-dong-san-nhon-trach-2026" },
                    ].map((link) => (
                      <a key={link.href} href={link.href} className="flex items-center justify-between px-6 py-4 text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors group">
                        <span>{link.label}</span>
                        <span className="text-slate-300 group-hover:text-amber-500 transition-colors text-base">→</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>

        <PageCTA
          title="Tìm hiểu dự án Mega City 2 Nhơn Trạch"
          subtitle="Liên hệ để được tư vấn về sản phẩm, pháp lý, bảng giá và cơ hội đầu tư tại Mega City 2 Nhơn Trạch."
          variant="default"
        />

        <RelatedContent
          items={[
            { href: "/tin-tuc/lich-su-phat-trien-kim-oanh-group", title: "Lịch sử hình thành Kim Oanh Group", description: "Hành trình phát triển của Kim Oanh Group từ những ngày đầu thành lập.", tag: "Kim Oanh" },
            { href: "/mega-city-2", title: "Tổng quan Mega City 2 Nhơn Trạch", description: "Thông tin tổng hợp về dự án: quy mô, sản phẩm, pháp lý và bảng giá.", tag: "Dự án" },
            { href: "/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach", title: "Có nên đầu tư Mega City 2 năm 2026?", description: "Phân tích tiềm năng đầu tư dựa trên vị trí, pháp lý và bảng giá.", tag: "Phân tích" },
            { href: "/tin-tuc/thi-truong-bat-dong-san-nhon-trach-2026", title: "Thị trường BĐS Nhơn Trạch 2026", description: "Cập nhật giá đất, quy hoạch, hạ tầng và tiềm năng đầu tư Nhơn Trạch.", tag: "Thị trường" },
            { href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat", title: "Bảng giá Mega City 2 mới nhất", description: "Giá tham khảo từng loại sản phẩm và những yếu tố ảnh hưởng đến giá.", tag: "Bảng giá" },
            { href: "/tin-tuc/phap-ly-mega-city-2", title: "Pháp lý Mega City 2 Nhơn Trạch", description: "Cập nhật thông tin quy hoạch, quyết định phê duyệt và hồ sơ dự án.", tag: "Pháp lý" },
          ]}
        />
      </div>

      <CorpFooter />
    </>
  );
}

// Need React import for Fragment
import React from "react";
