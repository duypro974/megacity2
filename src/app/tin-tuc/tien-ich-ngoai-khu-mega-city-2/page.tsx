"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS39 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/tien-ich-ngoai-khu-mega-city-2`;
const PUBLISHED     = "30/08/2026";
const PUBLISHED_ISO = "2026-08-30";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tiện ích ngoại khu xung quanh Mega City 2 Nhơn Trạch: Bệnh viện, trường học, chợ và hành chính",
  description:
    "Tìm hiểu hệ thống tiện ích ngoại khu quanh Mega City 2 Nhơn Trạch: trường học các cấp, bệnh viện đa khoa, chợ, siêu thị và trung tâm hành chính huyện trong bán kính 1–5 km.",
  image: [IMG_NEWS39["1"], IMG_NEWS39["2"], IMG_NEWS39["3"]],
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
    "tiện ích quanh Mega City 2, tiện ích ngoại khu Mega City 2, trường học gần Mega City 2, bệnh viện gần Mega City 2, chợ gần Mega City 2, trung tâm hành chính Nhơn Trạch",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Từ Mega City 2 đến Bệnh viện Đa khoa Nhơn Trạch mất bao xa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bệnh viện Đa khoa Nhơn Trạch nằm cách dự án Mega City 2 chỉ khoảng 2 km theo trục đường Tôn Đức Thắng, thời gian di chuyển bằng xe máy hoặc ô tô khoảng 4–5 phút.",
      },
    },
    {
      "@type": "Question",
      name: "Con em cư dân Mega City 2 học trường công lập ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Học sinh có thể theo học đúng tuyến tại các trường công lập xã Phú Hội (Mầm non, Tiểu học, THCS Phú Hội) chỉ cách dự án 800m–1,5km, hoặc THPT Nguyễn Bỉnh Khiêm cách khoảng 2,5 km.",
      },
    },
    {
      "@type": "Question",
      name: "Xung quanh dự án Mega City 2 có chợ hoặc siêu thị không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Chợ dân sinh Phú Hội nằm cách dự án chỉ 1,2 km. Bên cạnh đó có hệ thống siêu thị Bách Hóa Xanh, WinMart+ và các cửa hàng tiện ích phân bổ dày đặc dọc các trục đường chính.",
      },
    },
    {
      "@type": "Question",
      name: "UBND huyện Nhơn Trạch cách Mega City 2 bao xa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UBND huyện Nhơn Trạch cách dự án Mega City 2 khoảng 2 km theo trục đường Nguyễn Hữu Cảnh / Tôn Đức Thắng, rất thuận tiện cho các thủ tục hành chính như xin phép xây dựng, đăng ký hộ khẩu hay công chứng.",
      },
    },
    {
      "@type": "Question",
      name: "Sân golf gần Mega City 2 nhất là ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sân golf Đại Phước (Taekwang Jeongsan Country Club) là sân golf gần nhất, cách dự án Mega City 2 khoảng 10 km, tọa lạc trên cù lao sinh thái ven sông Đồng Nai.",
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
      name: "Tiện ích ngoại khu Mega City 2",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS39["1"],
    alt: "Bản đồ bán kính tiện ích ngoại khu trường học bệnh viện chợ quanh Mega City 2",
    caption: "Hệ thống tiện ích dày đặc trong bán kính 1–5 km quanh dự án Mega City 2 Nhơn Trạch",
  },
  {
    src: IMG_NEWS39["2"],
    alt: "Trung tâm Y tế Bệnh viện Đa khoa huyện Nhơn Trạch liền kề dự án Mega City 2",
    caption: "Bệnh viện Đa khoa Nhơn Trạch cách Mega City 2 chỉ ~2km, cấp cứu 24/7",
  },
  {
    src: IMG_NEWS39["3"],
    alt: "Trường THPT Nguyễn Bỉnh Khiêm trường chuẩn quốc gia gần dự án Mega City 2",
    caption: "THPT Nguyễn Bỉnh Khiêm — trường trọng điểm huyện, cách Mega City 2 khoảng 2,5 km",
  },
  {
    src: IMG_NEWS39["4"],
    alt: "Khu trung tâm hành chính huyện Nhơn Trạch cách Mega City 2 chỉ 2km",
    caption: "Trung tâm hành chính huyện Nhơn Trạch với UBND, bưu điện và quảng trường cây xanh",
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
function DistCard({ icon, name, dist, time, note }: { icon: string; name: string; dist: string; time: string; note: string }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-amber-300 transition-colors">
      <div className="text-2xl flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <p className="font-semibold text-slate-800 text-sm">{name}</p>
        <p className="text-slate-500 text-xs">{note}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="font-black text-amber-600 text-sm">{dist}</p>
        <p className="text-slate-400 text-[11px]">{time}</p>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function TienIchNgoaiKhuMegaCity2Page() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Tiện ích ngoại khu Mega City 2</span>
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
              Tiện ích ngoại khu xung quanh Mega City 2 Nhơn Trạch: Bệnh viện, trường học, chợ và hành chính
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Tổng hợp hệ thống tiện ích dân sinh trong bán kính 1–5 km quanh{" "}
              <a href="/mega-city-2" className="text-amber-600 font-semibold hover:underline">
                Mega City 2 Nhơn Trạch
              </a>
              : trường học các cấp, bệnh viện đa khoa, chợ dân sinh, siêu thị, cơ quan hành
              chính và điểm giải trí.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to bản đồ tiện ích quanh Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS39["1"]}
                alt="Bản đồ bán kính tiện ích ngoại khu trường học bệnh viện chợ quanh Mega City 2"
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
              Hệ thống tiện ích dày đặc trong bán kính 1–5 km quanh dự án Mega City 2 Nhơn Trạch
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
                    ["#vi-sao",       "Vì sao tiện ích ngoại khu quan trọng?"],
                    ["#truong-hoc",   "1. Hệ thống trường học các cấp"],
                    ["#y-te",         "2. Hệ thống y tế và sức khỏe"],
                    ["#cho-sieu-thi", "3. Chợ, siêu thị và mua sắm"],
                    ["#hanh-chinh",   "4. Trung tâm hành chính công"],
                    ["#giai-tri",     "5. Thể thao, giải trí, sinh thái"],
                    ["#bang-tong-hop","Bảng tổng hợp bán kính tiện ích"],
                    ["#faq",          "Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Vì sao */}
              <section className="mb-12" id="vi-sao">
                <SectionHeading>Vì sao tiện ích ngoại khu quyết định giá trị an cư tại Mega City 2?</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đối với người mua có nhu cầu an cư thực tế hoặc đầu tư dài hạn, sự sẵn có
                    của mạng lưới tiện ích dân sinh ngoại khu là tiêu chí đánh giá quan trọng
                    hàng đầu. Dự án Mega City 2 tọa lạc ngay vùng lõi trung tâm hành chính –
                    dịch vụ của huyện Nhơn Trạch — thừa hưởng hạ tầng an sinh xã hội đã hình
                    thành và phát triển sầm uất.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: "👨‍👩‍👧", title: "Tiện nghi sinh hoạt",  desc: "Đảm bảo việc học tập của con cái, khám chữa bệnh và mua sắm hàng ngày diễn ra nhanh chóng, thuận tiện" },
                      { icon: "📈", title: "Tính thanh khoản",     desc: "Bất động sản liền kề trung tâm dịch vụ - hành chính luôn có tỷ lệ lấp đầy cư dân cao và thanh khoản tốt" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-amber-300 transition-colors">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <InfoBox>
                    <strong>Lưu ý:</strong> Khoảng cách và thời gian di chuyển trong bài mang
                    tính tham khảo. Các cơ sở được liệt kê dựa trên thông tin công khai và
                    cần được xác minh trực tiếp tại thời điểm khảo sát.
                  </InfoBox>
                </div>
              </section>

              {/* 1. Trường học */}
              <section className="mb-12">
                <SectionHeading id="truong-hoc">1. Hệ thống trường học các cấp xung quanh Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Hạ tầng giáo dục quanh dự án đáp ứng đầy đủ lộ trình học tập từ bậc mầm
                    non đến trung học phổ thông và giáo dục nghề nghiệp:
                  </p>

                  <div className="space-y-2">
                    <DistCard
                      icon="🏫"
                      name="Mầm non & Tiểu học Phú Hội"
                      dist="~800m – 1,2 km"
                      time="2–3 phút"
                      note="Đúng tuyến xã Phú Hội, thuận tiện đưa đón hàng ngày"
                    />
                    <DistCard
                      icon="📚"
                      name="THCS Phú Hội, THCS Hiệp Phước"
                      dist="~1,5 – 2 km"
                      time="3–5 phút"
                      note="Trường công lập đúng tuyến khu vực"
                    />
                    <DistCard
                      icon="🎓"
                      name="THPT Nguyễn Bỉnh Khiêm (Chuẩn quốc gia)"
                      dist="~2,5 – 3 km"
                      time="5–7 phút"
                      note="Trường trọng điểm huyện, theo trục đường Tôn Đức Thắng"
                    />
                    <DistCard
                      icon="🎓"
                      name="THPT Nhơn Trạch"
                      dist="~2,5 – 3 km"
                      time="5–7 phút"
                      note="Trường công lập bậc THPT thứ hai trên địa bàn"
                    />
                    <DistCard
                      icon="🔧"
                      name="Trường Trung cấp Kinh tế Kỹ thuật Đồng Nai"
                      dist="~4 – 5 km"
                      time="8–10 phút"
                      note="Cơ sở đào tạo nghề kỹ thuật công nghiệp lớn của vùng"
                    />
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS39["3"]}
                alt="Trường THPT Nguyễn Bỉnh Khiêm trường chuẩn quốc gia gần dự án Mega City 2"
                caption="THPT Nguyễn Bỉnh Khiêm — trường trọng điểm huyện, cách Mega City 2 khoảng 2,5 km"
                images={images}
                index={2}
                onOpen={openLightbox}
              />

              {/* 2. Y tế */}
              <section className="mb-12">
                <SectionHeading id="y-te">2. Hệ thống y tế và chăm sóc sức khỏe</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Cư dân Mega City 2 yên tâm về dịch vụ y tế nhờ hệ thống bệnh viện, trạm
                    y tế và phòng khám chất lượng bao quanh:
                  </p>

                  <div className="space-y-3">
                    <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-2xl">🏥</span>
                        <div>
                          <p className="font-black text-red-800 text-sm">Trung tâm Y tế huyện Nhơn Trạch (Bệnh viện Đa khoa)</p>
                          <p className="text-red-600 text-xs font-bold">~2 km · ~4 phút di chuyển</p>
                        </div>
                      </div>
                      <BulletList
                        items={[
                          "Quy mô hàng trăm giường bệnh, đầy đủ các khoa khám chữa bệnh nội - ngoại trú",
                          "Cấp cứu 24/7, trang thiết bị chẩn đoán hình ảnh hiện đại",
                          "Cách dự án khoảng 2 km theo trục đường Tôn Đức Thắng",
                        ]}
                      />
                    </div>

                    <div className="space-y-2">
                      <DistCard
                        icon="💉"
                        name="Trạm Y tế xã Phú Hội"
                        dist="~1 km"
                        time="2 phút"
                        note="Tiêm chủng, khám sức khỏe ban đầu, chăm sóc y tế gia đình"
                      />
                      <DistCard
                        icon="🏪"
                        name="Chuỗi Nhà thuốc Long Châu, An Khang, Pharmacity"
                        dist="~1 – 2 km"
                        time="2–4 phút"
                        note="Phân bổ dày đặc dọc trục đường Tôn Đức Thắng và Hùng Vương"
                      />
                      <DistCard
                        icon="🩺"
                        name="Phòng khám đa khoa tư nhân"
                        dist="~1,5 – 2 km"
                        time="3–4 phút"
                        note="Phòng khám Ái Nghĩa, An Phúc Khang và các phòng khám chuyên khoa"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/vi-tri-mega-city-2-o-dau">
                      Vị trí Mega City 2 ở đâu? →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS39["2"]}
                alt="Trung tâm Y tế Bệnh viện Đa khoa huyện Nhơn Trạch liền kề dự án Mega City 2"
                caption="Bệnh viện Đa khoa Nhơn Trạch cách Mega City 2 chỉ ~2km, cấp cứu 24/7"
                images={images}
                index={1}
                onOpen={openLightbox}
              />

              {/* 3. Chợ siêu thị */}
              <section className="mb-12">
                <SectionHeading id="cho-sieu-thi">3. Mua sắm, thương mại và chợ truyền thống</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhu cầu mua sắm của cư dân được đáp ứng linh hoạt từ chợ dân sinh đến
                    chuỗi siêu thị và cửa hàng tiện lợi hiện đại:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                      <p className="font-black text-emerald-800 text-sm mb-3">🛒 Chợ truyền thống</p>
                      <div className="space-y-2">
                        <div>
                          <p className="font-semibold text-slate-700 text-sm">Chợ Phú Hội</p>
                          <p className="text-slate-500 text-xs">~1,2 km · Thực phẩm tươi sống, nông sản, giá bình dân</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-700 text-sm">Chợ Hiệp Phước</p>
                          <p className="text-slate-500 text-xs">~3,5 km · Chợ đầu mối cửa ngõ công nghiệp</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                      <p className="font-black text-blue-800 text-sm mb-3">🏪 Siêu thị & Cửa hàng tiện ích</p>
                      <div className="space-y-2">
                        <div>
                          <p className="font-semibold text-slate-700 text-sm">Bách Hóa Xanh & WinMart+</p>
                          <p className="text-slate-500 text-xs">Nhiều chi nhánh trên đường Nguyễn Hữu Cảnh và Lý Thái Tổ</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-700 text-sm">Điện máy Xanh, Thế Giới Di Động</p>
                          <p className="text-slate-500 text-xs">~2 km tại ngã ba trung tâm huyện</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Hành chính */}
              <section className="mb-12">
                <SectionHeading id="hanh-chinh">4. Trung tâm hành chính công huyện Nhơn Trạch</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 nằm liền kề quần thể cơ quan hành chính đầu não huyện Nhơn
                    Trạch — thuận lợi tối đa khi cần thực hiện thủ tục công chứng, hộ tịch,
                    cấp phép xây dựng hoặc đăng ký kinh doanh:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[480px]">
                      <thead>
                        <tr className="bg-amber-500 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Cơ quan hành chính</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-28">Cách MC2</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Tuyến đường</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["UBND xã Phú Hội",                     "~1 km",   "Đường Nguyễn Hữu Cảnh"],
                          ["UBND huyện Nhơn Trạch",                "~2 km",   "Đường Nguyễn Hữu Cảnh / Tôn Đức Thắng"],
                          ["Công an huyện Nhơn Trạch",             "~2,2 km", "Trục đường Tôn Đức Thắng"],
                          ["Bộ phận Một cửa (cấp phép XD...)",     "~2 km",   "Khu trung tâm hành chính huyện"],
                          ["Chi nhánh Văn phòng ĐKĐD",             "~2,5 km", "Đường Tôn Đức Thắng"],
                          ["Bưu điện huyện & Kho bạc Nhà nước",   "~2 km",   "Trục trung tâm huyện"],
                        ].map(([name, dist, road], i) => (
                          <tr key={name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-semibold text-slate-700 text-sm">{name}</td>
                            <td className="px-4 py-3 text-amber-700 font-bold text-sm">{dist}</td>
                            <td className="px-4 py-3 text-slate-600 text-xs">{road}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/thu-tuc-chuyen-nhuong-mega-city-2">
                      Thủ tục sang tên & chuyển nhượng Mega City 2 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              <ArticleFigure
                src={IMG_NEWS39["4"]}
                alt="Khu trung tâm hành chính huyện Nhơn Trạch cách Mega City 2 chỉ 2km"
                caption="Trung tâm hành chính huyện Nhơn Trạch với UBND, bưu điện và quảng trường cây xanh"
                images={images}
                index={3}
                onOpen={openLightbox}
              />

              {/* 5. Giải trí */}
              <section className="mb-12">
                <SectionHeading id="giai-tri">5. Tiện ích thể thao, giải trí và không gian sinh thái</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bên cạnh các tiện ích thiết yếu, khu vực phụ cận Mega City 2 còn có các
                    điểm vui chơi và giải trí sinh thái:
                  </p>

                  <div className="space-y-2">
                    <DistCard
                      icon="⛳"
                      name="Sân Golf Đại Phước (Taekwang Jeongsan CC)"
                      dist="~10 km"
                      time="~15 phút"
                      note="Sân golf 18 lỗ tiêu chuẩn quốc tế trên cù lao sinh thái ven sông Đồng Nai"
                    />
                    <DistCard
                      icon="🛥️"
                      name="SwanBay & King Bay — Nhà hàng ven sông, du thuyền"
                      dist="~8 – 10 km"
                      time="~12 phút"
                      note="Chuỗi nhà hàng ẩm thực ven sông, bến du thuyền và công viên cảnh quan"
                    />
                    <DistCard
                      icon="🏟️"
                      name="Trung tâm Văn hóa Thể thao huyện Nhơn Trạch"
                      dist="~2,5 km"
                      time="~5 phút"
                      note="Sân vận động, nhà thi đấu đa năng, sân tennis và bể bơi công cộng"
                    />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/tin-tuc/ha-tang-ky-thuat-mega-city-2">
                      Hạ tầng kỹ thuật Mega City 2: Điện âm, nước máy và thoát nước →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* Bảng tổng hợp */}
              <section className="mb-12" id="bang-tong-hop">
                <SectionHeading>Bảng tổng hợp bán kính tiện ích ngoại khu quanh Mega City 2</SectionHeading>
                <div className="pt-5 space-y-5">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[520px]">
                      <thead>
                        <tr className="bg-amber-500 text-white">
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-32">Bán kính</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Tiện ích tiêu biểu</th>
                          <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide w-24">Di chuyển</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["1 – 1,5 km",   "Chợ Phú Hội, Trạm Y tế, Mầm non & Tiểu học Phú Hội, UBND xã",    "2–3 phút"],
                          ["2 – 3 km",     "Bệnh viện Đa khoa, UBND huyện, THPT Nguyễn Bỉnh Khiêm, Siêu thị", "4–6 phút"],
                          ["3,5 – 5 km",   "Cụm KCN Nhơn Trạch 1, 2, 3, Chợ Hiệp Phước, Trường trung cấp",   "7–10 phút"],
                          ["10 – 15 km",   "Sân bay Long Thành, Sân Golf Đại Phước, Cầu Nhơn Trạch",          "15–20 phút"],
                        ].map(([bk, tien_ich, time], i) => (
                          <tr key={bk} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-4 py-3 font-bold text-amber-700">{bk}</td>
                            <td className="px-4 py-3 text-slate-600 text-xs leading-relaxed">{tien_ich}</td>
                            <td className="px-4 py-3 text-slate-500 text-xs">{time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-slate-500 italic mt-2">
                      Khoảng cách và thời gian mang tính tham khảo. Thực tế phụ thuộc vào
                      điều kiện giao thông và tuyến đường cụ thể.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <SectionHeading>Câu hỏi thường gặp về tiện ích quanh Mega City 2</SectionHeading>
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
                    { href: "/tin-tuc/duong-di-tu-tphcm-den-mega-city-2",                       label: "Đường đi từ TP.HCM đến Mega City 2" },
                    { href: "/tin-tuc/ket-noi-mega-city-2-va-cac-khu-cong-nghiep-nhon-trach",   label: "Kết nối Mega City 2 và KCN Nhơn Trạch" },
                    { href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",                           label: "Bảng giá Mega City 2 mới nhất" },
                    { href: "/tin-tuc/vi-tri-mega-city-2-o-dau",                                label: "Vị trí Mega City 2 ở đâu?" },
                    { href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2",                            label: "Hạ tầng kỹ thuật Mega City 2" },
                    { href: "/tin-tuc/mega-city-2-co-phu-hop-de-o",                             label: "Mega City 2 có phù hợp để ở không?" },
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
                    Hệ thống tiện ích quanh Mega City 2 được đánh giá là đầy đủ và đồng bộ hàng
                    đầu tại huyện Nhơn Trạch. Sự hiện diện của trường học các cấp, bệnh viện đa
                    khoa, chợ truyền thống và các cơ quan công quyền trong bán kính 1–3 km là
                    nền tảng vững chắc đảm bảo cuộc sống tiện nghi, an toàn cho cư dân khi về
                    đây xây nhà định cư lâu dài.
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
                      { href: "/mega-city-2/vi-tri",    label: "Vị trí & Liên kết vùng" },
                      { href: "/mega-city-2/mat-bang",  label: "Mặt bằng tổng thể" },
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
                      { label: "Mega City 2 có phù hợp để ở?",        href: "/tin-tuc/mega-city-2-co-phu-hop-de-o" },
                      { label: "Kết nối Mega City 2 và KCN",           href: "/tin-tuc/ket-noi-mega-city-2-va-cac-khu-cong-nghiep-nhon-trach" },
                      { label: "Đường đi từ TP.HCM đến Mega City 2",  href: "/tin-tuc/duong-di-tu-tphcm-den-mega-city-2" },
                      { label: "Bảng giá Mega City 2 mới nhất",        href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Tư vấn an cư</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Nhận tư vấn và đặt lịch tham quan thực tế Mega City 2.
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
              Bạn muốn tìm hiểu môi trường sống tại Mega City 2?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Liên hệ để đặt lịch tham quan thực tế và nhận thông tin bảng giá mới nhất.
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
              href: "/tin-tuc/mega-city-2-co-phu-hop-de-o",
              title: "Mega City 2 Có Phù Hợp Để Ở Không?",
              description: "Phân tích các yếu tố cuộc sống thực tế tại Mega City 2 Nhơn Trạch.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/ket-noi-mega-city-2-va-cac-khu-cong-nghiep-nhon-trach",
              title: "Kết Nối Mega City 2 Và Các KCN Nhơn Trạch",
              description: "Khoảng cách đến 9 KCN và tiềm năng khai thác cho thuê.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/duong-di-tu-tphcm-den-mega-city-2",
              title: "Khoảng Cách Từ Mega City 2 Đến Trung Tâm TP.HCM",
              description: "3 hướng đường đi từ TP.HCM đến Mega City 2 Nhơn Trạch.",
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
