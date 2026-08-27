"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS32 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/mega-city-2-co-nhung-loai-san-pham-nao`;
const DATE_DISPLAY  = "27/08/2026";
const DATE_ISO      = "2026-08-27";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mega City 2 Có Những Loại Sản Phẩm Nào? Đất Nền, Nhà Phố, Nhà Vườn",
  description:
    "Tìm hiểu các loại sản phẩm Mega City 2 Nhơn Trạch, đặc điểm đất nền, nhà phố, nhà vườn và những yếu tố cần xem xét trước khi lựa chọn.",
  image: [IMG_NEWS32["1"], IMG_NEWS32["2"]],
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: "Kim Oanh Đồng Nai",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  dateModified: DATE_ISO,
  url: PAGE_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  keywords:
    "mega city 2 có những loại sản phẩm nào, đất nền mega city 2, nhà phố mega city 2, nhà vườn mega city 2, biệt thự mega city 2, sản phẩm mega city 2 nhơn trạch",
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
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mega City 2 có những loại sản phẩm nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo thông tin Kim Oanh Group công bố, Mega City 2 có các nhóm sản phẩm thấp tầng gồm nhà phố liền kề, nhà vườn liên kế và biệt thự. Người mua nên kiểm tra thông tin chính thức để xác nhận loại sản phẩm và tình trạng hiện tại.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có đất nền không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mega City 2 là khu đô thị với sản phẩm thấp tầng theo quy hoạch. Người mua cần liên hệ trực tiếp và xem tài liệu chính thức để xác nhận loại hình cụ thể đang mở bán, bao gồm đất nền hay sản phẩm đã có nhà.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có nhà phố không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Nhà phố liền kề là một trong những loại sản phẩm được Kim Oanh Group giới thiệu tại Mega City 2. Tuy nhiên, số lượng, vị trí và tình trạng mở bán cần kiểm tra tại từng thời điểm.",
      },
    },
    {
      "@type": "Question",
      name: "Mega City 2 có nhà vườn không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Nhà vườn liên kế là loại sản phẩm được đề cập trong danh mục sản phẩm Mega City 2. Đặc điểm về diện tích, thiết kế và vị trí cụ thể cần xem trong mặt bằng dự án.",
      },
    },
    {
      "@type": "Question",
      name: "Loại sản phẩm nào phù hợp để ở tại Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nhà phố liền kề phù hợp với gia đình cần không gian ở riêng tư tại đô thị. Nhà vườn phù hợp với người ưu tiên không gian rộng và môi trường xanh. Cả hai đều phụ thuộc vào vị trí, ngân sách và nhu cầu cụ thể của từng gia đình.",
      },
    },
    {
      "@type": "Question",
      name: "Có thể xem mặt bằng Mega City 2 ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có thể xem mặt bằng tổng thể và vị trí từng nhóm sản phẩm tại trang mặt bằng Mega City 2 trên website kimoanhdongnai.com.vn hoặc liên hệ trực tiếp để được tư vấn cụ thể.",
      },
    },
    {
      "@type": "Question",
      name: "Giá từng loại sản phẩm Mega City 2 được xác định như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giá phụ thuộc vào loại hình sản phẩm, vị trí trong dự án, diện tích, hướng và thời điểm giao dịch. Để có thông tin cập nhật nhất, hãy xem bảng giá Mega City 2 mới nhất trên website hoặc liên hệ trực tiếp.",
      },
    },
    {
      "@type": "Question",
      name: "Nên chọn loại sản phẩm nào tại Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Không có câu trả lời chung cho mọi người. Việc lựa chọn phụ thuộc vào mục tiêu (để ở hay đầu tư), ngân sách, nhu cầu diện tích và định hướng dài hạn. Cần đối chiếu với mặt bằng và tham khảo bảng giá trước khi quyết định.",
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
      name: "Mega City 2 Có Những Loại Sản Phẩm Nào?",
      item: PAGE_URL,
    },
  ],
};

const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS32["1"],
    alt: "Phối cảnh tổng thể khu đô thị Mega City 2 Nhơn Trạch",
    caption: "Mega City 2 là khu đô thị quy mô khoảng 84 ha tại Nhơn Trạch, Đồng Nai",
  },
  {
    src: IMG_NEWS32["2"],
    alt: "Các loại sản phẩm thấp tầng tại Mega City 2 Nhơn Trạch",
    caption: "Mega City 2 cung cấp các sản phẩm thấp tầng gồm nhà phố, nhà vườn và biệt thự",
  },
  {
    src: IMG_NEWS32["3"],
    alt: "Nhà phố liền kề tại dự án Mega City 2 Nhơn Trạch",
    caption: "Nhà phố liền kề tại Mega City 2 hướng đến nhu cầu ở và sinh hoạt trong đô thị",
  },
  {
    src: IMG_NEWS32["4"],
    alt: "Nhà vườn liên kế tại Mega City 2 Nhơn Trạch",
    caption: "Nhà vườn liên kế mang lại không gian xanh rộng hơn so với nhà phố tiêu chuẩn",
  },
  {
    src: IMG_NEWS32["5"],
    alt: "Mặt bằng tổng thể dự án Mega City 2 Nhơn Trạch",
    caption: "Mặt bằng dự án cho thấy vị trí phân bổ các nhóm sản phẩm tại Mega City 2",
  },
  {
    src: IMG_NEWS32["6"],
    alt: "Hạ tầng và không gian nội khu Mega City 2 Nhơn Trạch",
    caption: "Hệ thống hạ tầng nội khu và cảnh quan là yếu tố quan trọng khi lựa chọn sản phẩm",
  },
  {
    src: IMG_NEWS32["7"],
    alt: "Khu vực Nhơn Trạch nơi tọa lạc dự án Mega City 2",
    caption: "Nhơn Trạch đang phát triển hạ tầng, tạo nền tảng cho các dự án đô thị trong khu vực",
  },
];

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
  return (
    <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-6">{children}</h3>
  );
}
function BulletList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="space-y-2.5 mb-4">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-slate-700 text-[16px] leading-relaxed"
        >
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
  type?: "info" | "warn";
}) {
  const s =
    type === "warn"
      ? "bg-amber-50 border-amber-200 text-amber-800"
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

export default function MegaCity2SanPhamPage() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {LightboxPortal}
      <CorpHeader solid />
      <div className="bg-white min-h-screen">

        {/* ── Hero ──────────────────────────────────────────── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">Mega City 2 Có Những Loại Sản Phẩm Nào?</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Sản phẩm
              </span>
              <time dateTime={DATE_ISO} className="text-xs text-slate-400">
                {DATE_DISPLAY}
              </time>
              <span className="text-xs text-slate-400">· 12 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Mega City 2 Có Những Loại Sản Phẩm Nào?
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích đặc điểm đất nền, nhà phố liền kề, nhà vườn liên kế và biệt thự
              tại <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">Mega City 2 Nhơn Trạch</a> —
              cùng những yếu tố cần xem xét trước khi lựa chọn.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh tổng quan Mega City 2 Nhơn Trạch"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS32["1"]}
                alt="Phối cảnh tổng thể khu đô thị Mega City 2 Nhơn Trạch"
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
              Mega City 2 là khu đô thị quy mô khoảng 84 ha tại Nhơn Trạch, Đồng Nai
            </p>
          </div>
        </div>

        {/* ── Main Content ──────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#tong-quan",      "Mega City 2 có những loại sản phẩm nào?"],
                    ["#dat-nen",        "Đất nền Mega City 2 có đặc điểm gì?"],
                    ["#nha-pho",        "Nhà phố Mega City 2 phù hợp với nhu cầu nào?"],
                    ["#nha-vuon",       "Nhà vườn và biệt thự Mega City 2 có gì khác?"],
                    ["#so-sanh",        "So sánh các loại sản phẩm"],
                    ["#lua-chon",       "Nên lựa chọn sản phẩm nào?"],
                    ["#mat-bang",       "Mặt bằng giúp xác định vị trí sản phẩm"],
                    ["#checklist",      "Cần kiểm tra gì trước khi lựa chọn?"],
                    ["#faq",            "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-primary-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Khi tìm hiểu về một dự án bất động sản, câu hỏi đầu tiên thường gặp là:{" "}
                <em>"Dự án này có những loại sản phẩm nào?"</em> Với{" "}
                <a href="/mega-city-2" className="text-primary-700 font-semibold hover:underline">
                  Mega City 2 Nhơn Trạch
                </a>
                , đây cũng là câu hỏi cần được làm rõ trước khi đi vào chi tiết về giá hay
                mặt bằng.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Mỗi loại sản phẩm có đặc điểm riêng về diện tích, công năng và đối tượng phù
                hợp. Hiểu được sự khác nhau giữa các loại hình giúp người mua xác định rõ hơn
                nhu cầu của mình trước khi tìm hiểu sâu hơn.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> Thông tin trong bài được tổng hợp từ nguồn công khai
                của Kim Oanh Group và mang tính tham khảo. Các loại sản phẩm, số lượng và
                tình trạng mở bán cần được kiểm tra trực tiếp tại từng thời điểm.
              </InfoBox>

              {/* H2: Tổng quan sản phẩm */}
              <section className="mb-12">
                <SectionHeading id="tong-quan">Mega City 2 có những loại sản phẩm nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo thông tin Kim Oanh Group công bố, Mega City 2 tập trung vào nhóm{" "}
                    <strong>sản phẩm thấp tầng</strong>, bao gồm ba loại hình chính:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {[
                      {
                        icon: "🏘️",
                        name: "Nhà phố liền kề",
                        desc: "Sản phẩm nhà ở gắn liền nhau, phù hợp với nhu cầu ở trong đô thị",
                        color: "border-primary-200 bg-primary-50",
                      },
                      {
                        icon: "🏡",
                        name: "Nhà vườn liên kế",
                        desc: "Không gian có diện tích mở rộng hơn, tích hợp sân vườn riêng",
                        color: "border-emerald-200 bg-emerald-50",
                      },
                      {
                        icon: "🏛️",
                        name: "Biệt thự",
                        desc: "Loại hình cao cấp, diện tích lớn hơn, không gian riêng tư cao",
                        color: "border-amber-200 bg-amber-50",
                      },
                    ].map((item) => (
                      <div key={item.name} className={`rounded-2xl border p-5 ${item.color}`}>
                        <div className="text-3xl mb-3">{item.icon}</div>
                        <p className="font-black text-slate-800 text-sm mb-2">{item.name}</p>
                        <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ba nhóm sản phẩm này đều thuộc phân khúc thấp tầng — không có căn hộ chung
                    cư trong quy hoạch Mega City 2. Đây là định hướng phù hợp với xu hướng phát
                    triển khu đô thị thấp tầng tại Nhơn Trạch, nơi quỹ đất còn rộng và nhu cầu
                    nhà ở đất riêng đang tăng dần.
                  </p>

                  <InfoBox>
                    Cả ba loại hình đều nằm trong quy hoạch khu đô thị, nghĩa là có hạ tầng
                    chung, đường nội khu, tiện ích và quy chuẩn xây dựng theo quy hoạch được
                    duyệt — khác với đất phân lô thông thường.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS32["2"]}
                alt="Các loại sản phẩm thấp tầng tại Mega City 2 Nhơn Trạch"
                caption="Mega City 2 tập trung vào nhóm sản phẩm thấp tầng: nhà phố, nhà vườn và biệt thự"
                images={images}
                index={1}
                onOpen={openLightbox}
              />

              {/* H2: Đất nền */}
              <section className="mb-12">
                <SectionHeading id="dat-nen">Đất nền Mega City 2 có đặc điểm gì?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi nhắc đến sản phẩm tại Mega City 2, nhiều người thường hỏi về "đất nền".
                    Về bản chất, các sản phẩm thấp tầng trong khu đô thị có nền đất riêng — người
                    mua sở hữu phần đất theo từng lô cụ thể. Tuy nhiên, cần phân biệt giữa{" "}
                    <strong>đất nền trong khu đô thị</strong> với <strong>đất phân lô</strong>{" "}
                    hoặc đất nền thuần túy bên ngoài dự án.
                  </p>

                  <H3>Sản phẩm có nền đất trong khu đô thị là gì?</H3>
                  <BulletList
                    items={[
                      "Mỗi sản phẩm có diện tích đất theo từng lô trong quy hoạch được duyệt",
                      "Người mua sở hữu phần đất theo hợp đồng và được cấp giấy chứng nhận",
                      "Xây dựng theo quy chuẩn và quy hoạch chi tiết của dự án",
                      "Được hưởng hạ tầng kỹ thuật chung: đường, điện, nước, thoát nước",
                      "Khác với đất phân lô tự do — không bị ràng buộc hạ tầng và quy hoạch nội khu",
                    ]}
                  />

                  <H3>Đối tượng phù hợp</H3>
                  <BulletList
                    items={[
                      "Người muốn sở hữu nhà đất riêng trong khu đô thị có quy hoạch rõ ràng",
                      "Người ưu tiên pháp lý minh bạch và hạ tầng đồng bộ",
                      "Người có kế hoạch tự xây dựng theo nhu cầu riêng (với sản phẩm đất chưa có nhà)",
                    ]}
                  />

                  <H3>Những yếu tố cần kiểm tra</H3>
                  <BulletList
                    items={[
                      "Tình trạng pháp lý của từng lô: đã có sổ hay chưa, loại sổ (sổ đỏ, hợp đồng...)",
                      "Vị trí lô trong mặt bằng: trục đường, hướng, gần tiện ích nào",
                      "Quy định xây dựng: mật độ, chiều cao, lộ giới",
                      "Tình trạng hạ tầng nội khu tại thời điểm nhận bàn giao",
                    ]}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý dự án Mega City 2 →</LinkBtn>
                  </div>
                </div>
              </section>

              {/* H2: Nhà phố */}
              <section className="mb-12">
                <SectionHeading id="nha-pho">Nhà phố Mega City 2 phù hợp với nhu cầu nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhà phố liền kề là loại sản phẩm phổ biến nhất trong các khu đô thị thấp tầng.
                    Tại Mega City 2, nhà phố liền kề được thiết kế theo dạng hàng liên tiếp,
                    mỗi căn có phần đất và công trình xây dựng riêng biệt.
                  </p>

                  <H3>Đặc điểm nhà phố liền kề</H3>
                  <BulletList
                    items={[
                      "Thiết kế theo dạng liền kề — các căn nối nhau theo hàng dọc trục đường",
                      "Mỗi căn có lối ra vào riêng từ đường nội khu",
                      "Không gian theo chiều đứng: thường từ 3 đến 5 tầng tùy quy định xây dựng",
                      "Có sân trước hoặc sân sau tùy từng lô và vị trí",
                      "Mặt tiền tiếp giáp đường nội khu hoặc đường chính trong dự án",
                    ]}
                  />

                  <H3>Phù hợp với nhu cầu nào?</H3>
                  <div className="space-y-3">
                    {[
                      {
                        label: "Ở lâu dài",
                        desc: "Phù hợp với gia đình cần không gian sống riêng tư, tách biệt với nhà hàng xóm, có sân riêng và lối vào độc lập.",
                      },
                      {
                        label: "Khai thác kinh doanh tầng 1",
                        desc: "Nhà phố mặt tiền đường nội khu có thể phục vụ nhu cầu kết hợp ở và kinh doanh nhỏ, tùy theo quy định của khu vực.",
                      },
                      {
                        label: "Cho thuê dài hạn",
                        desc: "Với hạ tầng đồng bộ và vị trí trong đô thị có quy hoạch, nhà phố có thể được xem xét cho mục đích cho thuê — tuy nhiên cần đánh giá cụ thể theo khu vực và thời điểm.",
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white">
                        <div className="flex-shrink-0 font-black text-primary-700 text-sm w-32">{item.label}</div>
                        <p className="text-slate-600 text-[15px] leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <InfoBox type="warn">
                    Giá nhà phố phụ thuộc vào vị trí lô, chiều rộng mặt tiền, hướng và thời
                    điểm giao dịch. Không nên so sánh trực tiếp hai căn nhà phố khác vị trí mà
                    không xem xét các yếu tố này.{" "}
                    <a href="/mega-city-2/bang-gia" className="font-semibold underline">
                      Xem Bảng giá Mega City 2
                    </a>{" "}
                    để có thông tin cập nhật nhất.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS32["3"]}
                alt="Nhà phố liền kề tại dự án Mega City 2 Nhơn Trạch"
                caption="Nhà phố liền kề là loại sản phẩm hướng đến nhu cầu ở và sinh hoạt trong khu đô thị"
                images={images}
                index={2}
                onOpen={openLightbox}
              />

              {/* H2: Nhà vườn / Biệt thự */}
              <section className="mb-12">
                <SectionHeading id="nha-vuon">Nhà vườn và biệt thự Mega City 2 có gì khác?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bên cạnh nhà phố liền kề, Mega City 2 còn có hai loại sản phẩm cao hơn về
                    diện tích và mức độ riêng tư: <strong>nhà vườn liên kế</strong> và{" "}
                    <strong>biệt thự</strong>. Hai loại này phù hợp với nhóm người mua ưu tiên
                    không gian sống rộng hơn và môi trường xanh.
                  </p>

                  <H3>Nhà vườn liên kế</H3>
                  <BulletList
                    items={[
                      "Diện tích đất thường lớn hơn nhà phố liền kề",
                      "Có không gian sân vườn riêng — khoảng xanh được tích hợp trong lô đất",
                      "Thiết kế theo dạng liên kế — vẫn nối nhau theo hàng nhưng có khoảng lùi sân rộng hơn",
                      "Phù hợp với gia đình ưu tiên môi trường sinh sống thoáng, gần thiên nhiên",
                      "Công năng linh hoạt hơn: có thể bố trí không gian ngoài trời, vườn cây, chỗ đỗ xe",
                    ]}
                  />

                  <H3>Biệt thự</H3>
                  <BulletList
                    items={[
                      "Diện tích đất lớn nhất trong ba loại hình sản phẩm Mega City 2",
                      "Mức độ riêng tư cao — có khoảng lùi xung quanh, không gắn liền hoàn toàn với căn bên cạnh",
                      "Thiết kế kiến trúc thường được đầu tư hơn về hình thức và vật liệu",
                      "Phù hợp với gia đình cần không gian rộng và yêu cầu cao về chất lượng sống",
                    ]}
                  />

                  <H3>Sự khác biệt giữa nhà vườn và biệt thự</H3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[400px]">
                      <thead>
                        <tr className="bg-primary-600 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Tiêu chí</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Nhà vườn liên kế</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Biệt thự</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Diện tích đất",    "Lớn hơn nhà phố",          "Lớn nhất"],
                          ["Kết nối",          "Liên kế — có khoảng lùi",  "Riêng lẻ hoặc song lập"],
                          ["Không gian xanh",  "Sân vườn riêng",           "Khuôn viên riêng rộng hơn"],
                          ["Mức độ riêng tư",  "Cao hơn nhà phố",          "Cao nhất"],
                          ["Phù hợp",          "Gia đình cần không gian xanh", "Gia đình cần không gian tối đa"],
                        ].map(([tc, nv, bt], i) => (
                          <tr key={tc} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700">{tc}</td>
                            <td className="px-4 py-3 text-slate-600">{nv}</td>
                            <td className="px-4 py-3 text-slate-600">{bt}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-500 italic mt-2">
                      Diện tích cụ thể của từng loại sản phẩm cần kiểm tra trực tiếp trong{" "}
                      <a href="/mega-city-2/mat-bang" className="text-primary-600 underline">
                        mặt bằng Mega City 2
                      </a>{" "}
                      và tài liệu chính thức.
                    </p>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS32["4"]}
                alt="Nhà vườn liên kế tại Mega City 2 Nhơn Trạch"
                caption="Nhà vườn liên kế mang lại không gian xanh rộng hơn so với nhà phố tiêu chuẩn"
                images={images}
                index={3}
                onOpen={openLightbox}
              />

              {/* H2: Bảng so sánh */}
              <section className="mb-12">
                <SectionHeading id="so-sanh">So sánh các loại sản phẩm Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ba loại hình sản phẩm tại Mega City 2 đáp ứng các nhóm nhu cầu khác nhau.
                    Bảng dưới đây tóm tắt những điểm phân biệt cơ bản để người mua dễ đối chiếu:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[600px]">
                      <thead>
                        <tr className="bg-primary-600 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-32">Loại sản phẩm</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Đặc điểm</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Phù hợp với</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Yếu tố cần xem xét</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          [
                            "Nhà phố liền kề",
                            "Liền kề, mặt tiền đường, nhiều tầng",
                            "Ở, kinh doanh kết hợp, cho thuê",
                            "Vị trí lô, mặt tiền, chiều rộng",
                          ],
                          [
                            "Nhà vườn liên kế",
                            "Diện tích lớn hơn, có sân vườn riêng",
                            "Gia đình cần không gian xanh",
                            "Diện tích sân, hướng, khoảng lùi",
                          ],
                          [
                            "Biệt thự",
                            "Diện tích lớn nhất, riêng tư cao",
                            "Gia đình cần không gian rộng tối đa",
                            "Vị trí, lộ giới, thiết kế cảnh quan",
                          ],
                        ].map(([sp, dt, phuhop, yeutocf], i) => (
                          <tr key={sp} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-primary-700">{sp}</td>
                            <td className="px-4 py-3 text-slate-600">{dt}</td>
                            <td className="px-4 py-3 text-slate-600">{phuhop}</td>
                            <td className="px-4 py-3 text-slate-600">{yeutocf}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-500 italic mt-2">
                      Bảng mang tính định hướng. Không bao gồm giá và diện tích do cần kiểm tra
                      thông tin chính thức theo từng thời điểm.
                    </p>
                  </div>
                </div>
              </section>

              {/* H2: Nên chọn loại nào */}
              <section className="mb-12">
                <SectionHeading id="lua-chon">Nên lựa chọn sản phẩm Mega City 2 nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không có loại sản phẩm nào "tốt nhất" cho mọi người. Câu trả lời phụ thuộc
                    vào nhu cầu sử dụng thực tế và điều kiện cụ thể của từng người mua.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        icon: "🏠",
                        who: "Người mua để ở",
                        content:
                          "Nhà phố liền kề là lựa chọn thực tế nhất cho gia đình muốn ổn định cuộc sống trong đô thị. Nếu có trẻ nhỏ hoặc ưu tiên không gian ngoài trời, nhà vườn là phương án đáng xem xét.",
                      },
                      {
                        icon: "🔨",
                        who: "Người muốn tự xây dựng",
                        content:
                          "Cần xác định rõ loại sản phẩm đang xem là đất thô (chưa có công trình) hay đã có nhà. Trường hợp đất chưa có nhà sẽ cần xem xét thêm quy định xây dựng trong dự án.",
                      },
                      {
                        icon: "💰",
                        who: "Người ưu tiên ngân sách",
                        content:
                          "Nhà phố liền kề thường có giá thấp hơn nhà vườn và biệt thự do diện tích nhỏ hơn. Tuy nhiên giá phụ thuộc nhiều vào vị trí lô — hai căn cùng loại có thể khác giá đáng kể nếu vị trí khác nhau.",
                      },
                      {
                        icon: "🌳",
                        who: "Người quan tâm không gian rộng",
                        content:
                          "Nhà vườn liên kế hoặc biệt thự phù hợp hơn nếu ưu tiên khoảng xanh và không gian sinh hoạt ngoài trời. Cần so sánh diện tích khuôn viên thực tế trong mặt bằng.",
                      },
                      {
                        icon: "📈",
                        who: "Người muốn tìm hiểu khả năng đầu tư dài hạn",
                        content:
                          "Cả ba loại sản phẩm đều có thể xem xét theo góc độ đầu tư. Cần đánh giá dựa trên pháp lý, vị trí cụ thể, tiến độ hạ tầng và khả năng thanh khoản theo thị trường tại từng thời điểm — không nên dựa vào kỳ vọng chung.",
                      },
                    ].map((item) => (
                      <div key={item.who} className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-primary-200 transition-colors">
                        <div className="text-2xl flex-shrink-0">{item.icon}</div>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-1">{item.who}</p>
                          <p className="text-slate-600 text-[15px] leading-relaxed">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <InfoBox type="warn">
                    Đây là thông tin định hướng, không phải lời khuyên đầu tư. Mọi quyết định
                    giao dịch cần dựa trên kiểm tra trực tiếp, tư vấn pháp lý và đánh giá tài
                    chính cá nhân.
                  </InfoBox>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS32["5"]}
                alt="Mặt bằng tổng thể dự án Mega City 2 Nhơn Trạch"
                caption="Mặt bằng dự án cho thấy vị trí phân bổ các nhóm sản phẩm tại Mega City 2"
                images={images}
                index={4}
                onOpen={openLightbox}
              />

              {/* H2: Mặt bằng */}
              <section className="mb-12">
                <SectionHeading id="mat-bang">Mặt bằng Mega City 2 giúp xác định vị trí sản phẩm như thế nào?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sau khi hiểu được đặc điểm của từng loại sản phẩm, bước tiếp theo là xác định
                    các sản phẩm đó nằm ở đâu trong dự án. Đây là lúc{" "}
                    <a href="/mega-city-2/mat-bang" className="text-primary-700 font-semibold hover:underline">
                      mặt bằng Mega City 2
                    </a>{" "}
                    trở nên hữu ích.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mặt bằng tổng thể cho thấy cách các nhóm sản phẩm được phân bổ trong khu đô
                    thị, bao gồm vị trí nhà phố, nhà vườn, biệt thự, hệ thống đường nội khu,
                    khu tiện ích và cây xanh. Khi đối chiếu mặt bằng với danh sách sản phẩm,
                    người mua có thể:
                  </p>
                  <BulletList
                    items={[
                      "Xác định lô sản phẩm cụ thể: vị trí, hướng, tiếp giáp đường hay không",
                      "So sánh khoảng cách từ lô đến tiện ích, trường học, lối ra vào dự án",
                      "Kiểm tra quy hoạch xung quanh lô đất mình quan tâm",
                      "Hiểu rõ ranh giới từng phân khu và loại sản phẩm trong từng khu",
                    ]}
                  />
                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/mega-city-2/mat-bang">Xem mặt bằng Mega City 2 →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS32["6"]}
                alt="Hạ tầng và không gian nội khu Mega City 2 Nhơn Trạch"
                caption="Hệ thống hạ tầng nội khu và cảnh quan là yếu tố quan trọng khi lựa chọn sản phẩm"
                images={images}
                index={5}
                onOpen={openLightbox}
              />

              {/* H2: Checklist */}
              <section className="mb-12">
                <SectionHeading id="checklist">Cần kiểm tra gì trước khi lựa chọn sản phẩm?</SectionHeading>
                <div className="pt-5 space-y-3">
                  <p className="text-slate-600 text-[17px] leading-[1.85] mb-6">
                    Trước khi quyết định loại sản phẩm và sản phẩm cụ thể tại Mega City 2, có
                    9 yếu tố cần đưa vào checklist:
                  </p>
                  {[
                    ["Vị trí lô",            "Xác định rõ lô nằm ở đâu trong mặt bằng, tiếp giáp đường nào, hướng ra vào"],
                    ["Diện tích",            "Diện tích đất và diện tích sàn xây dựng của từng lô — cần xem trong tài liệu chính thức"],
                    ["Pháp lý",              "Sản phẩm đang có tình trạng pháp lý gì? Đã có sổ, đang làm sổ hay theo hợp đồng mua bán?"],
                    ["Quy hoạch",            "Khu vực lô đất nằm trong phân khu quy hoạch gì, có hạn chế xây dựng đặc biệt không?"],
                    ["Hạ tầng",              "Hạ tầng nội khu đã được đầu tư đến đâu? Đường, điện, nước đã hoàn thiện chưa?"],
                    ["Giá và so sánh",       "So sánh giá với sản phẩm cùng loại, cùng vị trí tương đương để có cơ sở đánh giá"],
                    ["Chính sách thanh toán","Tiến độ thanh toán, hỗ trợ vay vốn, các điều kiện hợp đồng hiện tại"],
                    ["Khả năng xây dựng",    "Nếu sản phẩm chưa có nhà: quy định mật độ xây dựng, chiều cao, khoảng lùi"],
                    ["Nhu cầu sử dụng",      "Xác định rõ mục đích: để ở, cho thuê hay đầu tư dài hạn — để chọn loại sản phẩm phù hợp"],
                  ].map(([title, desc], i) => (
                    <div key={title} className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="w-7 h-7 rounded-lg bg-primary-600 text-white font-black text-xs flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{title}</p>
                        <p className="text-slate-600 text-[14px] leading-relaxed mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-wrap gap-3 pt-4">
                    <LinkBtn href="/mega-city-2/phap-ly">Pháp lý Mega City 2 →</LinkBtn>
                    <LinkBtn href="/mega-city-2/bang-gia">Bảng giá mới nhất →</LinkBtn>
                    <LinkBtn href="/mega-city-2/mat-bang">Mặt bằng tổng thể →</LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS32["7"]}
                alt="Khu vực Nhơn Trạch nơi tọa lạc dự án Mega City 2"
                caption="Nhơn Trạch đang phát triển hạ tầng, tạo nền tảng cho các dự án đô thị trong khu vực"
                images={images}
                index={6}
                onOpen={openLightbox}
              />

              {/* H2: FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về sản phẩm Mega City 2</SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details
                      key={name}
                      className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary-200 transition-colors"
                    >
                      <summary className="flex items-start justify-between gap-4 cursor-pointer px-6 py-4 font-bold text-slate-800 text-base list-none group-open:text-primary-700 select-none">
                        <span className="leading-snug">{name}</span>
                        <span className="flex-shrink-0 mt-0.5 text-slate-400 group-open:text-primary-600 transition-transform group-open:rotate-180 text-xs">
                          ▼
                        </span>
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
                <SectionHeading>Tìm hiểu thêm về Mega City 2</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/mega-city-2",                                    label: "Mega City 2 Nhơn Trạch" },
                    { href: "/mega-city-2/bang-gia",                           label: "Bảng giá Mega City 2" },
                    { href: "/mega-city-2/mat-bang",                           label: "Mặt bằng Mega City 2" },
                    { href: "/mega-city-2/phap-ly",                            label: "Pháp lý Mega City 2" },
                    { href: "/tin-tuc/checklist-nhan-nen-mega-city-2",         label: "Checklist nhận nền Mega City 2" },
                    { href: "/tin-tuc/chi-phi-xay-nha-mega-city-2",            label: "Chi phí xây nhà Mega City 2" },
                    { href: "/tin-tuc/tien-do-mega-city-2",                    label: "Tiến độ Mega City 2" },
                    { href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",          label: "Bảng giá Mega City 2 mới nhất" },
                    { href: "/tin-tuc/vi-tri-mega-city-2-o-dau",               label: "Vị trí Mega City 2 ở đâu?" },
                    { href: "/tin-tuc/mega-city-2-co-phu-hop-de-o",            label: "Mega City 2 có phù hợp để ở?" },
                    { href: "/tin-tuc/phap-ly-mega-city-2",                    label: "Pháp lý dự án Mega City 2" },
                    { href: "/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach",   label: "Có nên đầu tư Mega City 2?" },
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
                  Thông tin trong bài được tổng hợp từ các nguồn công khai và cần được đối chiếu
                  với thông tin chính thức mới nhất trước khi đưa ra quyết định giao dịch. Ban
                  biên tập Kim Oanh Đồng Nai — Cập nhật: {DATE_DISPLAY}
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
                      { href: "/mega-city-2/vi-tri",    label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/phap-ly",   label: "Pháp lý dự án" },
                      { href: "/mega-city-2/tien-do",   label: "Tiến độ xây dựng" },
                      { href: "/mega-city-2/bang-gia",  label: "Bảng giá mới nhất" },
                      { href: "/mega-city-2/tien-ich",  label: "Tiện ích nội khu" },
                      { href: "/mega-city-2/mat-bang",  label: "Mặt bằng sản phẩm" },
                      { href: "/mega-city-2/hinh-anh",  label: "Hình ảnh thực tế" },
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

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Checklist nhận nền Mega City 2",  href: "/tin-tuc/checklist-nhan-nen-mega-city-2" },
                      { label: "Chi phí xây nhà Mega City 2",     href: "/tin-tuc/chi-phi-xay-nha-mega-city-2" },
                      { label: "Mega City 2 có phù hợp để ở?",   href: "/tin-tuc/mega-city-2-co-phu-hop-de-o" },
                      { label: "5 lý do đầu tư Mega City 2",      href: "/tin-tuc/5-ly-do-nen-dau-tu-mega-city-2" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn miễn phí</p>
                  <p className="text-primary-200 text-xs mb-4">
                    Nhận thông tin pháp lý, mặt bằng và bảng giá Mega City 2.
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

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="bg-primary-50 border-t border-primary-100 py-14">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">
              Đang tìm hiểu sản phẩm Mega City 2?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Xem mặt bằng và bảng giá để có đủ cơ sở lựa chọn loại sản phẩm phù hợp với nhu cầu.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/mega-city-2"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Xem dự án →
              </a>
              <a
                href="tel:0937587438"
                className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-bold px-7 py-3.5 rounded-full transition-all text-sm"
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
              href: "/tin-tuc/checklist-nhan-nen-mega-city-2",
              title: "Checklist Nhận Nền Mega City 2: 10 Điều Cần Kiểm Tra",
              description: "Danh sách kiểm tra chi tiết khi nhận bàn giao nền tại Mega City 2.",
              tag: "Dự án",
            },
            {
              href: "/tin-tuc/chi-phi-xay-nha-mega-city-2",
              title: "Chi Phí Xây Nhà Mega City 2: Những Gì Cần Lưu Ý",
              description: "Tổng hợp các khoản chi phí cần chuẩn bị khi xây nhà trong dự án.",
              tag: "Dự án",
            },
            {
              href: "/tin-tuc/mega-city-2-co-phu-hop-de-o",
              title: "Mega City 2 Có Phù Hợp Để Ở Không?",
              description: "Đánh giá các yếu tố cuộc sống thực tế tại Mega City 2 Nhơn Trạch.",
              tag: "Dự án",
            },
            {
              href: "/mega-city-2",
              title: "Mega City 2 Nhơn Trạch – Tổng Quan Dự Án",
              description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và sản phẩm.",
              tag: "Dự án",
            },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}
