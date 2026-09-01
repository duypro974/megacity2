"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS40 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/dat-nen-nha-vuon-biet-thu-mega-city-2`;
const PUBLISHED     = "30/08/2026";
const PUBLISHED_ISO = "2026-08-30";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Đất nền nhà vườn và biệt thự Mega City 2 Nhơn Trạch: Đặc điểm và tiềm năng khai thác",
  description:
    "Phân tích chi tiết đất nền nhà vườn và biệt thự Mega City 2 Nhơn Trạch: diện tích 200–350m², quy hoạch, kiến trúc, 3 mô hình khai thác và so sánh với đất vườn tự phát.",
  image: [IMG_NEWS40["1"], IMG_NEWS40["2"], IMG_NEWS40["3"]],
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
    "biệt thự Mega City 2, đất nhà vườn Mega City 2, biệt thự vườn Nhơn Trạch, đất nền biệt thự Mega City 2, nhà vườn Mega City 2, đất nền diện tích lớn Mega City 2",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Diện tích các lô đất nền biệt thự tại Mega City 2 là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Các lô đất nền biệt thự và nhà vườn tại dự án có diện tích đa dạng từ 200m² (10×20m), 250m² (10×25m) đến trên 300–350m² (15×20m). Người mua cần kiểm tra tài liệu phân lô chính thức để xác nhận diện tích cụ thể.",
      },
    },
    {
      "@type": "Question",
      name: "Xây dựng biệt thự tại Mega City 2 được phép xây tối đa mấy tầng?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo quy chế quản lý kiến trúc của đồ án 1/500, biệt thự được phép xây dựng từ 2 đến 3 tầng (1 trệt 1 lầu hoặc 1 trệt 2 lầu), tổng chiều cao công trình tối đa khoảng 12–13,5m. Cần xác nhận với Ban quản lý dự án.",
      },
    },
    {
      "@type": "Question",
      name: "Đất nền biệt thự Mega City 2 có thể làm nhà vườn nghỉ dưỡng cuối tuần không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rất phù hợp. Với diện tích sân vườn rộng 70–150m², hạ tầng điện âm, nước máy và công viên 2,1ha hoàn chỉnh, đây là không gian lý tưởng để phát triển mô hình second-home nghỉ dưỡng cuối tuần.",
      },
    },
    {
      "@type": "Question",
      name: "Mật độ xây dựng cho lô biệt thự 300m² tại Mega City 2 là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theo QCVN 01:2021/BXD, lô đất 300m² trở lên áp dụng mật độ xây dựng tối đa khoảng 50–55%, tức diện tích phần đất còn lại dành cho sân vườn khoảng 130m² trở lên.",
      },
    },
    {
      "@type": "Question",
      name: "Biệt thự Mega City 2 có thể cho chuyên gia KCN thuê không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoàn toàn phù hợp. Chuyên gia cấp cao tại KCN Nhơn Trạch thường có nhu cầu thuê biệt thự có sân vườn, gara ô tô riêng và không gian yên tĩnh. Đây là phân khúc cho thuê ổn định với mức giá tham khảo từ 15–25 triệu đồng/tháng.",
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
      name: "Biệt thự & nhà vườn Mega City 2",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS40["1"],
    alt: "Phối cảnh biệt thự vườn hiện đại diện tích lớn tại khu đô thị Mega City 2 Nhơn Trạch",
    caption: "Biệt thự vườn sinh thái tại Mega City 2 — không gian nghỉ dưỡng ven đô chất lượng cao",
  },
  {
    src: IMG_NEWS40["2"],
    alt: "Sơ đồ phân lô chi tiết các block đất nền biệt thự và nhà vườn Mega City 2",
    caption: "Các block biệt thự và nhà vườn được bố trí ôm trọn công viên trung tâm 2,1 ha",
  },
  {
    src: IMG_NEWS40["3"],
    alt: "Không gian sân vườn sinh thái thư giãn tại biệt thự Mega City 2 Nhơn Trạch",
    caption: "Sân vườn rộng rãi với tiểu cảnh, hồ cá và không gian ngoài trời — đặc quyền của đất biệt thự",
  },
  {
    src: IMG_NEWS40["4"],
    alt: "Bảng so sánh ưu điểm đất nền biệt thự Mega City 2 với đất vườn tự phát",
    caption: "Biệt thự Mega City 2 vượt trội về hạ tầng, pháp lý và môi trường sống so với đất vườn tự phát",
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

// ─── Nhóm diện tích data ───────────────────────────────────────────────────
const AREA_GROUPS = [
  {
    label: "200–250 m²",
    sizes: "10×20m · 10×25m",
    density: "~60–65%",
    garden: "70–90 m² sân vườn",
    type: "Biệt thự song lập hiện đại",
    color: "border-blue-200 bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    label: "300–350 m²",
    sizes: "15×20m · 15×24m",
    density: "~50–55%",
    garden: "130m²+ sân vườn",
    type: "Biệt thự đơn lập 4 mặt thoáng",
    color: "border-amber-200 bg-amber-50",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    label: "220–380 m² (lô góc)",
    sizes: "2 mặt tiền đặc biệt",
    density: "~55–60%",
    garden: "Tầm nhìn khoáng đạt 2 chiều",
    type: "Lô góc 2 mặt vỉa hè rộng rãi",
    color: "border-emerald-200 bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function DatNenNhaVuonBietThuPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Biệt thự & nhà vườn Mega City 2</span>
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
              <span className="text-xs text-slate-400">· 12 phút đọc</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Đất nền nhà vườn và biệt thự Mega City 2 Nhơn Trạch: Đặc điểm và tiềm năng khai thác
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích chi tiết dòng sản phẩm đất nền diện tích lớn tại{" "}
              <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">
                Mega City 2 Nhơn Trạch
              </a>
              : từ cơ cấu diện tích 200–350m², quy hoạch và kiến trúc đến 3 mô hình khai
              thác thực tế và so sánh với đất vườn tự phát bên ngoài.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh biệt thự vườn Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS40["1"]}
                alt="Phối cảnh biệt thự vườn hiện đại diện tích lớn tại khu đô thị Mega City 2 Nhơn Trạch"
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
              Biệt thự vườn sinh thái tại Mega City 2 — không gian nghỉ dưỡng ven đô chất lượng cao
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
                    ["#tong-quan",   "Tổng quan phân khúc biệt thự & nhà vườn"],
                    ["#co-cau",      "1. Cơ cấu diện tích và quy hoạch"],
                    ["#vi-tri",      "2. Vị trí phân bổ trong khu đô thị"],
                    ["#kien-truc",   "3. Tiêu chuẩn kiến trúc xây dựng"],
                    ["#khai-thac",   "4. Tiềm năng khai thác thực tế"],
                    ["#so-sanh",     "So sánh với đất vườn tự phát"],
                    ["#faq",         "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <section className="mb-12" id="tong-quan">
                <SectionHeading>Phân khúc biệt thự và nhà vườn tại Mega City 2 Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bên cạnh các dòng sản phẩm nhà phố liên kế diện tích 90–100m², phân khúc
                    đất nền diện tích lớn dành cho biệt thự và nhà vườn sinh thái (200–350m²)
                    luôn thu hút nhóm khách hàng có tiềm lực tài chính vững vàng và ưu tiên
                    không gian sống rộng rãi.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { icon: "🌿", title: "Không gian sinh thái",     desc: "Diện tích đất rộng cho phép bố trí sân vườn, tiểu cảnh, hồ cá Koi và hồ bơi gia đình" },
                      { icon: "🏡", title: "Second-home ven đô",        desc: "Hơn 30 phút từ TP.HCM qua cầu Nhơn Trạch — ngôi nhà thứ hai lý tưởng nghỉ cuối tuần" },
                      { icon: "💎", title: "Giá trị tích sản",          desc: "Quỹ biệt thự trong khu đô thị điện âm thường khan hiếm, giữ giá tốt theo thời gian" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 text-center hover:border-amber-300 transition-colors">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <InfoBox>
                    <strong>Lưu ý:</strong> Thông tin diện tích và quy hoạch trong bài dựa
                    trên đồ án 1/500 và quy chuẩn xây dựng phổ biến. Người mua cần xác nhận
                    tài liệu phân lô chính thức và chỉ tiêu xây dựng cụ thể tại lô đất quan
                    tâm với chủ đầu tư hoặc Ban quản lý dự án.
                  </InfoBox>
                </div>
              </section>

              {/* 1. Cơ cấu diện tích */}
              <section className="mb-12">
                <SectionHeading id="co-cau">1. Cơ cấu diện tích và thông số quy hoạch đất biệt thự Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trên bản đồ quy hoạch 1/500, các block đất biệt thự và nhà vườn được bố trí
                    tại những vị trí đẹp nhất của dự án — tiếp giáp trục đường lớn và công viên
                    cây xanh trung tâm. Có 3 nhóm diện tích điển hình:
                  </p>

                  <div className="space-y-4">
                    {AREA_GROUPS.map((group) => (
                      <div key={group.label} className={`rounded-2xl border p-5 ${group.color}`}>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <p className="font-black text-slate-800 text-sm">{group.label}</p>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${group.badge}`}>
                            {group.type}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                          <div>
                            <p className="text-slate-500 mb-0.5">Kích thước</p>
                            <p className="font-bold text-slate-700 font-mono">{group.sizes}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 mb-0.5">Mật độ XD tối đa</p>
                            <p className="font-bold text-amber-700">{group.density}</p>
                          </div>
                          <div>
                            <p className="text-slate-500 mb-0.5">Sân vườn</p>
                            <p className="font-bold text-emerald-700">{group.garden}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach">
                      Bản đồ mặt bằng phân lô Mega City 2: Chi tiết từng phân khu →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS40["2"]}
                alt="Sơ đồ phân lô chi tiết các block đất nền biệt thự và nhà vườn Mega City 2"
                caption="Các block biệt thự và nhà vườn được bố trí ôm trọn công viên trung tâm 2,1 ha"
                images={images}
                index={1}
                onOpen={openLightbox}
              />

              {/* 2. Vị trí */}
              <section className="mb-12">
                <SectionHeading id="vi-tri">2. Vị trí phân bổ các phân khu nhà vườn trong khu đô thị 84 ha</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khác với các dãy nhà phố thương mại nằm sát trục đường vận tải, các block
                    biệt thự và nhà vườn được quy hoạch tại các vị trí yên tĩnh và thoáng đãng:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        icon: "🌳",
                        title: "Phân khu ôm trọn công viên trung tâm 2,1 ha",
                        desc: "Cư dân bước chân ra khỏi cửa là tiếp cận ngay hồ điều hòa, đường chạy bộ và khu vui chơi trẻ em",
                      },
                      {
                        icon: "🌿",
                        title: "Tiếp giáp dải cây xanh cách ly",
                        desc: "Được bao bọc bởi công viên phân tán, tạo lớp màng lọc không khí và giảm tiếng ồn đô thị tối đa",
                      },
                      {
                        icon: "🛣️",
                        title: "Mặt tiền đường lộ giới thông thoáng",
                        desc: "Nằm trên tuyến đường nội bộ 13–24m với lòng đường trải nhựa phẳng và vỉa hè rợp bóng cây xanh",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-300 transition-colors">
                        <span className="text-xl flex-shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-bold text-slate-800 text-sm mb-0.5">{item.title}</p>
                          <p className="text-slate-600 text-[14px] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 3. Kiến trúc */}
              <section className="mb-12">
                <SectionHeading id="kien-truc">3. Tiêu chuẩn kiến trúc và quy cách xây dựng biệt thự Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Để đảm bảo vẻ đẹp sang trọng và đồng bộ cho toàn phân khu, việc thiết kế
                    xây dựng biệt thự tuân thủ quy chế quản lý kiến trúc của đồ án 1/500:
                  </p>

                  <H3>Tầng cao và chiều cao công trình</H3>
                  <BulletList
                    items={[
                      "Tầng cao cho phép: 2–3 tầng (1 trệt 1 lầu hoặc 1 trệt 2 lầu mái dốc/mái bằng hiện đại)",
                      "Chiều cao công trình: Tối đa 12–13,5m, đảm bảo tầm nhìn thoáng và không che chắn không gian liền kề",
                    ]}
                  />

                  <H3>Quy chuẩn khoảng lùi an toàn</H3>
                  <div className="space-y-2">
                    {[
                      { label: "Khoảng lùi trước",  value: "Tối thiểu 3,0m",      note: "Sân đỗ xe và cổng rào thoáng đãng" },
                      { label: "Khoảng lùi sau",     value: "Tối thiểu 2,0m",      note: "Đảm bảo thông gió và giếng trời tự nhiên" },
                      { label: "Khoảng lùi bên hông",value: "Tối thiểu 1,5–2,0m", note: "Biệt thự đơn lập — tạo hành lang sân vườn bên hông" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-4 p-3 rounded-xl border border-slate-200 bg-white">
                        <div className="w-28 flex-shrink-0 font-semibold text-slate-700 text-xs">{item.label}</div>
                        <div className="font-black text-amber-600 text-sm w-28 flex-shrink-0">{item.value}</div>
                        <div className="text-slate-500 text-xs">{item.note}</div>
                      </div>
                    ))}
                  </div>

                  <H3>Hạ tầng kỹ thuật</H3>
                  <BulletList
                    items={[
                      "Đấu nối trực tiếp vào hệ thống điện âm Mega City 2 (ngầm hóa 100%)",
                      "Mạng lưới cấp thoát nước độc lập theo tiêu chuẩn QCVN",
                      "Tất cả hạ tầng kỹ thuật ngầm đã được chôn sẵn dưới vỉa hè trước lô đất",
                    ]}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/quy-cach-xay-dung-mega-city-2">
                      Tiêu chuẩn và quy cách xây dựng tại Mega City 2 →
                    </LinkBtn>
                    <LinkBtn href="/tin-tuc/ha-tang-ky-thuat-mega-city-2">
                      Hạ tầng kỹ thuật Mega City 2 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS40["3"]}
                alt="Không gian sân vườn sinh thái thư giãn tại biệt thự Mega City 2 Nhơn Trạch"
                caption="Sân vườn rộng rãi với tiểu cảnh và không gian ngoài trời — đặc quyền của đất biệt thự"
                images={images}
                index={2}
                onOpen={openLightbox}
              />

              {/* 4. Tiềm năng khai thác */}
              <section className="mb-12">
                <SectionHeading id="khai-thac">4. Tiềm năng khai thác thực tế của biệt thự và nhà vườn Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sở hữu khuôn viên rộng cùng vị trí liền kề TP.HCM, dòng sản phẩm này mở
                    ra 3 phương án khai thác đa dạng:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: "🏡",
                        n: 1,
                        title: "Không gian nghỉ dưỡng ven đô (Second-home cuối tuần)",
                        color: "border-emerald-200 bg-emerald-50",
                        details: [
                          "Hơn 30 phút từ TP.HCM khi các trục giao thông đối ngoại hoàn thành",
                          "Không gian tổ chức tiệc BBQ ngoài trời, tận hưởng yên tĩnh và không khí trong lành",
                          "Sân vườn rộng cho phép thiết kế hồ bơi gia đình, khu vui chơi trẻ em riêng",
                        ],
                      },
                      {
                        icon: "👔",
                        n: 2,
                        title: "Cho thuê dài hạn phục vụ chuyên gia cấp cao tại KCN",
                        color: "border-blue-200 bg-blue-50",
                        details: [
                          "Chuyên gia nước ngoài (CEO, Giám đốc nhà máy, Kỹ sư trưởng) KCN Nhơn Trạch có ngân sách thuê nhà dồi dào",
                          "Mức giá tham khảo: 15–25 triệu đồng/tháng — phân khúc cho thuê ổn định nhất",
                          "Ưu tiên căn biệt thự có sân vườn, gara ô tô riêng và không gian yên tĩnh",
                        ],
                      },
                      {
                        icon: "☕",
                        n: 3,
                        title: "Mô hình nhà vườn kết hợp kinh doanh ẩm thực / Cafe sân vườn",
                        color: "border-amber-200 bg-amber-50",
                        details: [
                          "Áp dụng cho lô góc 2 mặt tiền diện tích lớn trên trục đường 24–32m",
                          "Mô hình quán cafe sân vườn sinh thái, nhà hàng ẩm thực gia đình hoặc co-working space sáng tạo",
                          "Phù hợp xu hướng tiêu dùng của lao động công nghiệp và gia đình trẻ khu vực",
                        ],
                      },
                    ].map((item) => (
                      <div key={item.n} className={`rounded-2xl border p-5 ${item.color}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xl">{item.icon}</span>
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center flex-shrink-0">
                              {item.n}
                            </span>
                            <p className="font-black text-slate-800 text-sm">{item.title}</p>
                          </div>
                        </div>
                        <ul className="space-y-1.5">
                          {item.details.map((d, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                              <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <InfoBox type="warn">
                    Các mức giá cho thuê được đề cập là ước tính tham khảo. Giá thực tế phụ
                    thuộc vào chất lượng hoàn thiện nội thất, vị trí lô đất, tình hình thị
                    trường tại từng thời điểm và đặc điểm cụ thể của sản phẩm.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/ket-noi-mega-city-2-va-cac-khu-cong-nghiep-nhon-trach">
                      Kết nối Mega City 2 và các KCN Nhơn Trạch →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* So sánh */}
              <section className="mb-12">
                <SectionHeading id="so-sanh">So sánh đất nền biệt thự Mega City 2 với đất nhà vườn tự phát bên ngoài</SectionHeading>
                <div className="pt-5 space-y-5">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[520px]">
                      <thead>
                        <tr className="bg-slate-700 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-32">Tiêu chí</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Biệt thự Mega City 2 (QH 1/500)</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Đất nhà vườn tự phát</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Hạ tầng KT",   "Điện âm 100%, nước máy, thoát nước riêng",   "Điện nổi cột tạm, nước giếng khoan"],
                          ["Đường GT",     "Đường nhựa 13–24m, 2 ô tô tránh nhau",        "Đường đất hoặc bê tông 3–5m"],
                          ["Pháp lý",      "Đất ở đô thị 100%, quy hoạch 1/500",          "Thường dính đất CLN hoặc nông nghiệp"],
                          ["Môi trường",   "An ninh, công viên 2,1ha, điện âm",           "Nhà dân tự do, không tiện ích chung"],
                          ["Thanh khoản",  "Dễ chuyển nhượng — hạ tầng chuẩn",           "Khó bán lại do diện tích lớn hoặc đường hẹp"],
                        ].map(([tc, mc2, tud], i) => (
                          <tr key={tc} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700">{tc}</td>
                            <td className="px-4 py-3 text-amber-700 font-medium text-sm">{mc2}</td>
                            <td className="px-4 py-3 text-slate-500 text-sm">{tud}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-500 italic mt-2">
                      Bảng mang tính định hướng tổng quát. Đặc điểm thực tế cần kiểm tra theo
                      từng lô đất cụ thể.
                    </p>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS40["4"]}
                alt="Bảng so sánh ưu điểm đất nền biệt thự Mega City 2 với đất vườn tự phát"
                caption="Biệt thự Mega City 2 vượt trội về hạ tầng, pháp lý và môi trường sống"
                images={images}
                index={3}
                onOpen={openLightbox}
              />

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về biệt thự và nhà vườn Mega City 2</SectionHeading>
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
                    { href: "/mega-city-2",                                                     label: "Mega City 2 Nhơn Trạch — Tổng quan dự án" },
                    { href: "/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach",                 label: "Mặt bằng phân lô Mega City 2" },
                    { href: "/tin-tuc/mega-city-2-co-nhung-loai-san-pham-nao",                  label: "Các loại sản phẩm Mega City 2" },
                    { href: "/tin-tuc/quy-cach-xay-dung-mega-city-2",                           label: "Quy cách xây dựng Mega City 2" },
                    { href: "/tin-tuc/tien-ich-ngoai-khu-mega-city-2",                          label: "Tiện ích ngoại khu Mega City 2" },
                    { href: "/tin-tuc/ket-noi-mega-city-2-va-cac-khu-cong-nghiep-nhon-trach",   label: "Kết nối Mega City 2 và KCN" },
                    { href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",                           label: "Bảng giá Mega City 2 mới nhất" },
                    { href: "/tin-tuc/thu-tuc-chuyen-nhuong-mega-city-2",                       label: "Thủ tục chuyển nhượng Mega City 2" },
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
                    Dòng sản phẩm biệt thự và nhà vườn Mega City 2 Nhơn Trạch sở hữu lợi thế
                    về diện tích rộng rãi (200–350m²), không gian sinh thái trong lành cùng hạ
                    tầng kỹ thuật ngầm hóa đồng bộ. Đây là lựa chọn phù hợp cho gia đình tìm
                    kiếm không gian an cư nghỉ dưỡng ven đô chất lượng cao, đồng thời là kênh
                    tích lũy tài sản với tiềm năng bền vững theo sự hoàn thiện của hạ tầng vùng
                    Nhơn Trạch.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tuy nhiên, hiệu quả khai thác thực tế phụ thuộc vào vị trí lô đất cụ thể,
                    chất lượng thiết kế xây dựng và diễn biến thị trường tại từng thời điểm.
                    Người mua nên cân nhắc kỹ và tham khảo thông tin pháp lý, bảng giá chính
                    thức trước khi quyết định.
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
                      { label: "Các loại sản phẩm Mega City 2",   href: "/tin-tuc/mega-city-2-co-nhung-loai-san-pham-nao" },
                      { label: "Mặt bằng phân lô Mega City 2",    href: "/tin-tuc/mat-bang-phan-lo-mega-city-2-nhon-trach" },
                      { label: "Quy cách xây dựng Mega City 2",   href: "/tin-tuc/quy-cach-xay-dung-mega-city-2" },
                      { label: "Bảng giá Mega City 2 mới nhất",   href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn biệt thự & nhà vườn</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Nhận danh sách lô góc 2 mặt tiền và bảng giá biệt thự Mega City 2.
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
              Bạn muốn tìm hiểu lô biệt thự & nhà vườn đẹp nhất Mega City 2?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Liên hệ để nhận danh sách lô góc 2 mặt tiền, bảng giá chuyển nhượng và hỗ trợ
              khảo sát thực địa.
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
              href: "/tin-tuc/mega-city-2-co-nhung-loai-san-pham-nao",
              title: "Mega City 2 Có Những Loại Sản Phẩm Nào?",
              description: "Phân tích đặc điểm nhà phố, nhà vườn và biệt thự tại Mega City 2.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/quy-cach-xay-dung-mega-city-2",
              title: "Quy Cách Xây Dựng Mega City 2: Tầng Cao, Khoảng Lùi & Mẫu Nhà",
              description: "Tầng cao, mật độ xây dựng và quy trình xin phép tại Mega City 2.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/ket-noi-mega-city-2-va-cac-khu-cong-nghiep-nhon-trach",
              title: "Kết Nối Mega City 2 Và Các KCN Nhơn Trạch",
              description: "Tiềm năng cho thuê chuyên gia KCN và các mô hình khai thác.",
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
