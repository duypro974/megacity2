"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS49 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026`;
const PUBLISHED     = "13/09/2026";
const PUBLISHED_ISO = "2026-09-13";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nhật Ký Thực Địa The Link City Dầu Giây 2026: Một Ngày Tận Mục Sở Thị \"Mỏ Vàng\" Cửa Ngõ Cao Tốc",
  description:
    "Ký sự thực tế một ngày trải nghiệm The Link City Dầu Giây: 45 phút chạy xe từ TP.HCM, ngắm sa bàn 21ha, cầm trên tay sổ hồng từng nền và giải mã tiềm năng 1,85 tỷ.",
  image: [IMG_NEWS49["1"], IMG_NEWS49["2"], IMG_NEWS49["4"]],
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
    "The Link City Dầu Giây, thực tế The Link City, sổ hồng The Link City, KDC A1 C1 Dầu Giây, nhật ký thực địa The Link City",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Từ TP.HCM đến The Link City Dầu Giây mất bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chỉ khoảng 45 phút di chuyển thẳng trên tuyến Cao tốc TP.HCM – Long Thành – Dầu Giây không kẹt xe. Từ TP. Thủ Đức lên xe tới nút giao ngã tư Quốc lộ 1A và Quốc lộ 20 đúng 45 phút.",
      },
    },
    {
      "@type": "Question",
      name: "Hạ tầng thực tế tại The Link City đã hoàn thiện chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đã hoàn thiện 100%. Toàn bộ trục đường nội khu trải nhựa asphalt phẳng mịn, điện âm 100%, vỉa hè lót gạch, cây xanh đã bén rễ. Cụm sân bóng đá và pickleball đã có đèn chiếu sáng và đang hoạt động.",
      },
    },
    {
      "@type": "Question",
      name: "Sổ hồng The Link City có thật không? Cầm trên tay được không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoàn toàn thật. Giấy chứng nhận quyền sử dụng đất (Sổ hồng) đã được Sở Tài nguyên & Môi trường tỉnh Đồng Nai cấp chính thức theo chỉ đạo của UBND tỉnh. Khách hàng có thể cầm tận tay tại văn phòng dự án và ngay khi ký hợp đồng công chứng.",
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
      name: "Nhật ký thực địa The Link City Dầu Giây 2026",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS49["1"],
    alt: "Hình ảnh thực tế căn nhà phố biệt thự hiện hữu tại ngã tư đường dự án The Link City Dầu Giây",
    caption: "Căn nhà phố khang trang đã hiện hữu tại góc đường nội khu The Link City – Minh chứng sức sống thực của dự án",
  },
  {
    src: IMG_NEWS49["2"],
    alt: "Sa bàn kiến trúc toàn cảnh dự án The Link City Dầu Giây quy mô 21ha do Kim Oanh phát triển",
    caption: "Toàn cảnh sa bàn kiến trúc 21ha mô phỏng không gian sống đồng bộ và đại lộ thương mại sầm uất",
  },
  {
    src: IMG_NEWS49["3"],
    alt: "Tập sổ hồng Giấy chứng nhận quyền sử dụng đất thực tế của dự án The Link City Dầu Giây",
    caption: "Sổ hồng riêng từng nền sẵn sàng công chứng sang tên – Tấm thẻ bảo hiểm giá trị nhất cho nhà đầu tư",
  },
  {
    src: IMG_NEWS49["4"],
    alt: "Cảnh quan thực tế công viên cây xanh và đồi cỏ tại khu đô thị The Link City Dầu Giây",
    caption: "Không gian công viên đồi cỏ xanh ngút mắt hiện hữu mang lại môi trường sống trong lành cho cư dân",
  },
  {
    src: IMG_NEWS49["5"],
    alt: "Sơ đồ phân lô mặt bằng chi tiết các lô đất nền LK17A dự án The Link City Dầu Giây",
    caption: "Sơ đồ phân lô rõ ràng với diện tích chuẩn 95m² – Suất đầu tư vừa vặn nhất cho dòng tiền cá nhân",
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

// ─── Blockquote-style quote ────────────────────────────────────────────────
function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-amber-400 bg-amber-50 px-6 py-4 my-2 rounded-r-2xl italic text-amber-800 text-[17px] leading-relaxed">
      {children}
    </blockquote>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function NhatKyThucDiaPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Nhật ký thực địa The Link City Dầu Giây 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Trải nghiệm thực tế
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
              Nhật Ký Thực Địa The Link City Dầu Giây 2026: Một Ngày Tận Mục Sở Thị "Mỏ Vàng" Cửa Ngõ Cao Tốc
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Ký sự chân thực về chuyến tham quan thực địa{" "}
              <a href="/the-link-city" className="text-amber-600 font-semibold hover:underline">
                The Link City
              </a>{" "}
              Dầu Giây: 45 phút từ TP.HCM, đường nhựa phẳng mịn, sổ hồng cầm trên tay, công
              viên đồi cỏ xanh mướt và bài toán 550 triệu vốn tự có giải mã tại chỗ.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh nhà phố hiện hữu The Link City"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS49["1"]}
                alt="Hình ảnh thực tế căn nhà phố biệt thự hiện hữu tại ngã tư đường dự án The Link City Dầu Giây"
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
              Căn nhà phố khang trang đã hiện hữu tại góc đường nội khu The Link City – Minh chứng sức sống thực của dự án
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
                    ["#khoi-hanh",    "1. Khởi hành: 45 phút từ TP.HCM"],
                    ["#an-tuong",     "2. Cú hích thị giác đầu tiên"],
                    ["#sa-ban",       "3. Mục sở thị sa bàn 21ha"],
                    ["#so-hong",      "4. Tấm sổ hồng trên tay"],
                    ["#cong-vien",    "5. Dạo bước công viên & sân thể thao"],
                    ["#bai-toan",     "6. Bài toán 550 triệu vốn ban đầu"],
                    ["#loi-ket",      "7. Lời kết"],
                    ["#dang-ky",      "8. Đăng ký xe trải nghiệm cuối tuần"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* ── Section 1: Khởi hành ── */}
              <section className="mb-12" id="khoi-hanh">
                <SectionHeading id="khoi-hanh">
                  1. Khởi Hành: 45 Phút Thảnh Thơi Từ TP.HCM Về Nút Giao Dầu Giây
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Sáng thứ Bảy, xuất phát từ trung tâm TP. Thủ Đức (TP.HCM), tôi cùng một
                    người bạn là nhà đầu tư bất động sản lâu năm bấm đồng hồ đo hành trình về
                    The Link City (Khu dân cư A1-C1 Đô thị Dầu Giây).
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trái ngược với cảnh kẹt xe ùn ứ về hướng Tây hay Nam Sài Gòn, lộ trình về
                    Dầu Giây thẳng tắp trên tuyến{" "}
                    <strong className="text-slate-800">
                      Cao tốc TP.HCM – Long Thành – Dầu Giây
                    </strong>. Đúng{" "}
                    <strong className="text-amber-600">45 phút</strong> sau, xe chúng tôi đã
                    nhẹ nhàng lăn bánh xuống nút giao ngã tư Quốc lộ 1A và Quốc lộ 20.
                  </p>

                  <Quote>
                    Đập vào mắt tôi là sự sôi động đến nghẹt thở của giao lộ này: Dòng xe chở
                    hàng hóa liên tỉnh tấp nập, những chuyến xe chở khách du lịch nối đuôi nhau
                    lên Đà Lạt, những hàng quán cà phê và trạm dừng chân nhộn nhịp. Một vị trí
                    ngã tư cửa ngõ đúng nghĩa – nơi mọi dòng chảy kinh tế, logistics và du lịch
                    của toàn vùng Đông Nam Bộ buộc phải chảy qua.
                  </Quote>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/vi-tri">
                      📍 Xem chi tiết bản đồ kết nối các trục cao tốc →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 2: Ấn tượng đầu tiên ── */}
              <section className="mb-12" id="an-tuong">
                <SectionHeading id="an-tuong">
                  2. Cú Hích Thị Giác Đầu Tiên: Diện Mạo Một Đại Đô Thị 21Ha Đã Hoàn Thiện Hạ Tầng
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Rẽ phải từ Quốc lộ 1A chỉ vài trăm mét, toàn bộ khung cảnh ồn ào của tuyến
                    quốc lộ dường như nhường chỗ cho sự thoáng đãng, chỉn chu của một khu đô
                    thị quy hoạch bài bản.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tôi từng đi xem không ít dự án đất nền ở vùng ven Đồng Nai hay Bình Dương.
                    Đa phần khi đến nơi chỉ là bãi đất trống rợp cỏ lau, vài cọc bê tông cắm
                    tạm bợ. Nhưng bước chân vào The Link City, cảm giác đầu tiên là{" "}
                    <strong className="text-slate-800">sự ngỡ ngàng</strong>:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        icon: "🛣️",
                        text: "Toàn bộ các trục đường nội khu (như trục đường đôi N20) đã được trải nhựa asphalt phẳng mịn, vạch sơn kẻ đường rõ ràng, lề đường rộng thênh thang.",
                      },
                      {
                        icon: "⚡",
                        text: "Hệ thống điện âm 100%: Không hề có cảnh dây điện chằng chịt. Các trụ đèn chiếu sáng cao áp, tủ điện kỹ thuật và hố ga thoát nước được đặt ngầm ngăn nắp.",
                      },
                      {
                        icon: "🌳",
                        text: "Vỉa hè đã được lót gạch chống trượt sạch bóng, hàng cây xanh bóng mát đã bén rễ đâm chồi xanh mướt.",
                      },
                      {
                        icon: "🏠",
                        text: "Ngay góc ngã tư đường nội khu, một căn nhà phố 3 tầng khang trang với kiến trúc hiện đại đã mọc lên sừng sững – minh chứng cho một đô thị đang dần hiện hữu chứ không còn là phối cảnh xa vời.",
                      },
                    ].map((item) => (
                      <div key={item.icon} className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                        <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                        <p className="text-emerald-700 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Section 3: Sa bàn ── */}
              <section className="mb-12" id="sa-ban">
                <SectionHeading id="sa-ban">
                  3. Mục Sở Thị Sa Bàn Kiến Trúc 21Ha: Nhìn Thấy Tương Lai Của Dòng Tiền
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bước vào sảnh đón tiếp khách hàng của Kim Oanh tại dự án, tâm điểm thu hút
                    mọi ánh nhìn là khối{" "}
                    <strong className="text-slate-800">sa bàn kiến trúc 21ha</strong> được chế
                    tác vô cùng tỉ mỉ và tinh xảo.
                  </p>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đứng trước sa bàn, nhìn từ trên cao góc 45 độ, bức tranh quy hoạch của The
                    Link City hiện lên rõ nét và đầy thuyết phục:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        label: "Dải Shophouse mặt tiền đường đôi",
                        body: "Đón trọn luồng khách từ Quốc lộ 1A đổ vào — nơi sau này sẽ là chuỗi cà phê thương hiệu, phòng giao dịch ngân hàng và nhà thuốc.",
                      },
                      {
                        label: "Đại công trình Trung tâm thương mại 2,6ha",
                        body: "Nằm ở vị trí trung tâm với khối kiến trúc uốn lượn hiện đại, tương lai sẽ là điểm tụ mua sắm giải trí số 1 của cả huyện Thống Nhất.",
                      },
                      {
                        label: "Các dãy đất nền liên kế (LK17A, LK17B...)",
                        body: "Được quy hoạch theo ô bàn cờ thông suốt, chỉ cách công viên cây xanh vài bước chân — lý tưởng cho những gia đình muốn xây tổ ấm bình yên.",
                      },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <p className="font-black text-slate-800 text-sm mb-1">🏙️ {item.label}</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>

                  <Quote>
                    "Một dự án có quy hoạch lõi thương mại và tiện ích bài bản thế này, khi dân
                    cư về ở khoảng 30 – 40%, giá đất chắc chắn sẽ không còn ở mức 19 – 22
                    triệu/m² như bây giờ." — Nhà đầu tư bất động sản 15 năm kinh nghiệm
                  </Quote>

                  <ArticleFigure
                    src={IMG_NEWS49["2"]}
                    alt="Sa bàn kiến trúc toàn cảnh dự án The Link City Dầu Giây quy mô 21ha do Kim Oanh phát triển"
                    caption="Toàn cảnh sa bàn kiến trúc 21ha mô phỏng không gian sống đồng bộ và đại lộ thương mại sầm uất"
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/mat-bang">
                      📐 Xem chi tiết sơ đồ phân lô từng block →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 4: Sổ hồng ── */}
              <section className="mb-12" id="so-hong">
                <SectionHeading id="so-hong">
                  4. Tấm Sổ Hồng Trên Tay – Khoảnh Khắc Đập Tan Mọi Hoài Nghi Pháp Lý
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Giữa thời buổi thị trường bất động sản còn nhiều xáo trộn, câu hỏi lớn nhất
                    của bất kỳ ai đi mua đất vẫn là:{" "}
                    <em>"Liệu dự án có ra được sổ đỏ không? Bao giờ mới có sổ?"</em>
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Câu trả lời tại The Link City không nằm ở những lời hứa hẹn hoa mỹ, mà nằm
                    ngay trên bàn tư vấn: Tập{" "}
                    <strong className="text-slate-800">
                      Giấy chứng nhận quyền sử dụng đất (Sổ hồng)
                    </strong>{" "}
                    mới toanh đã được cấp chính thức.
                  </p>

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 overflow-hidden">
                    <div className="bg-emerald-600 text-white px-5 py-3">
                      <p className="font-black text-sm">Cầm cuốn sổ hồng trên tay, lật giở từng trang:</p>
                    </div>
                    <div className="divide-y divide-emerald-100">
                      {[
                        ["Mục đích sử dụng", "Đất ở tại đô thị (ODT)"],
                        ["Thời hạn sử dụng", "Lâu dài (vĩnh viễn)"],
                        ["Cơ quan cấp", "Sở Tài nguyên & Môi trường tỉnh Đồng Nai theo Công văn số 2505/UBND-KTN của UBND tỉnh Đồng Nai"],
                      ].map(([label, value]) => (
                        <div key={label} className="flex items-start gap-3 px-5 py-3">
                          <span className="text-emerald-600 font-bold text-xs w-36 shrink-0 mt-0.5">{label}</span>
                          <span className="text-emerald-800 text-sm leading-relaxed">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <InfoBox type="success">
                    Ở The Link City, bạn không mua một <strong>"kỳ vọng trên giấy"</strong>.
                    Bạn đang mua một tài sản thật, có chủ quyền pháp lý hoàn chỉnh 100%, có thể{" "}
                    <strong>công chứng sang tên và nhận đất xây dựng ngay lập tức</strong>.
                  </InfoBox>

                  <ArticleFigure
                    src={IMG_NEWS49["3"]}
                    alt="Tập sổ hồng Giấy chứng nhận quyền sử dụng đất thực tế của dự án The Link City Dầu Giây"
                    caption="Sổ hồng riêng từng nền sẵn sàng công chứng sang tên – Tấm thẻ bảo hiểm giá trị nhất cho nhà đầu tư"
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/phap-ly">
                      📑 Xem quyết định phê duyệt 1/500 và biên bản nghiệm thu hạ tầng →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 5: Công viên & thể thao ── */}
              <section className="mb-12" id="cong-vien">
                <SectionHeading id="cong-vien">
                  5. Dạo Bước Giữa Mảng Xanh Công Viên & Cụm Sân Thể Thao Hiện Hữu
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Rời bàn tư vấn, chúng tôi tản bộ ra khu vực công viên trung tâm của dự án.
                    Gió chiều thổi lồng lộng từ phía mảng xanh tự nhiên mang lại cảm giác thư
                    thái đến lạ kỳ.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        icon: "🌿",
                        title: "Đồi cỏ xanh mướt & Tượng ngựa biểu tượng",
                        body: "Thảm cỏ tự nhiên được chăm sóc tỉ mỉ, xanh ngút mắt. Bên cạnh là những bức tượng ngựa dũng mãnh đặt giữa khuôn viên – biểu tượng cho sự hanh thông, mã đáo thành công.",
                      },
                      {
                        icon: "⚽",
                        title: "Cụm sân bóng đá & sân pickleball đã hoạt động",
                        body: "Hệ thống mặt sân chuyên dụng đạt chuẩn, đã có đèn chiếu sáng ban đêm. Vào mỗi buổi chiều, tiếng cười nói của các bạn trẻ và người dân địa phương đến đá bóng, tập thể thao rộn rã cả một góc phố.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <span className="text-2xl shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Quote>
                    Đó chính là "Hơi thở của cuộc sống" – thứ mà không một bản vẽ 3D nào có
                    thể thay thế được. Một khu đô thị chỉ thực sự có giá trị khi nó có con
                    người về sinh hoạt và tận hưởng mỗi ngày.
                  </Quote>

                  <ArticleFigure
                    src={IMG_NEWS49["4"]}
                    alt="Cảnh quan thực tế công viên cây xanh và đồi cỏ tại khu đô thị The Link City Dầu Giây"
                    caption="Không gian công viên đồi cỏ xanh ngút mắt hiện hữu mang lại môi trường sống trong lành cho cư dân"
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 6: Bài toán tài chính ── */}
              <section className="mb-12" id="bai-toan">
                <SectionHeading id="bai-toan">
                  6. Bài Toán 550 Triệu Vốn Ban Đầu: Cơ Hội Cho Những Người Biết "Đi Trước Một Bước"
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Ngồi nhâm nhi tách trà nóng dưới tán cây ven đường N20, chúng tôi bắt đầu
                    mở bảng tính tài chính. Một lô đất nền 95m² tại đây có tổng giá trị khoảng{" "}
                    <strong className="text-amber-600">1,852 tỷ đồng</strong>:
                  </p>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50 overflow-hidden">
                    <div className="bg-amber-500 text-white px-5 py-3">
                      <p className="font-black text-sm">Bài toán đòn bẩy 70% ngân hàng</p>
                    </div>
                    <div className="divide-y divide-amber-100">
                      {[
                        ["Vốn tự có (30%)", "~555 triệu đồng", "Chỉ cần bỏ ra ban đầu"],
                        ["Ngân hàng giải ngân (70%)", "~1,3 tỷ đồng", "OCB / Vietcombank"],
                        ["Tiền gốc + lãi/tháng", "~12 – 14 triệu đồng", "Giảm dần theo dư nợ"],
                      ].map(([label, val, sub]) => (
                        <div key={label} className="flex items-center justify-between gap-4 px-5 py-3">
                          <div>
                            <p className="text-amber-700 text-sm font-semibold">{label}</p>
                            <p className="text-amber-500 text-xs">{sub}</p>
                          </div>
                          <span className="font-black text-amber-800 text-sm whitespace-nowrap">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-700 font-bold text-sm">
                    Hãy thử đặt câu hỏi: Với 550 triệu đồng, bạn mua được gì?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="font-black text-slate-700 text-sm mb-2">❌ Tại TP.HCM</p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        550 triệu thậm chí không đủ mua một suất gửi xe tầng hầm chung cư.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                      <p className="font-black text-amber-800 text-sm mb-2">✅ Tại The Link City</p>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        550 triệu giúp bạn đứng tên sở hữu ngay một nền đất đô thị có sổ hồng
                        riêng tọa lạc tại nút giao ngã tư chiến lược kết nối 3 tuyến cao tốc
                        lớn nhất miền Nam.
                      </p>
                    </div>
                  </div>

                  <InfoBox type="warn">
                    Khi cao tốc Dầu Giây – Tân Phú khởi công và sân bay Long Thành cất cánh
                    trong 1 – 2 năm tới, biên độ tăng giá lên{" "}
                    <strong>2,5 tỷ – 3 tỷ đồng</strong> là hoàn toàn nằm trong tầm tay. Những
                    người dám nắm bắt cơ hội ở giai đoạn mở bán đợt 1 luôn là những người gặt
                    hái quả ngọt lớn nhất.
                  </InfoBox>

                  <ArticleFigure
                    src={IMG_NEWS49["5"]}
                    alt="Sơ đồ phân lô mặt bằng chi tiết các lô đất nền LK17A dự án The Link City Dầu Giây"
                    caption="Sơ đồ phân lô rõ ràng với diện tích chuẩn 95m² – Suất đầu tư vừa vặn nhất cho dòng tiền cá nhân"
                    images={images}
                    index={4}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/bang-gia">
                      💰 Tra cứu danh sách lô LK17A giá 1,85 tỷ →
                    </LinkBtn>
                    <LinkBtn href="/the-link-city/thanh-toan">
                      🧮 Tự lên phương án vay phù hợp →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 7: Lời kết ── */}
              <section className="mb-12" id="loi-ket">
                <SectionHeading id="loi-ket">
                  7. Lời Kết: Bất Động Sản Giá Trị Thực Luôn Có Tiếng Nói Riêng
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Chiều buông xuống ngã tư Dầu Giây, nhìn dòng xe cộ hối hả trên Quốc lộ 1A
                    và những ánh đèn đường đầu tiên bật sáng trong khu đô thị The Link City, tôi
                    hiểu vì sao dự án này lại tạo nên sức hút mạnh mẽ đến vậy giữa lúc thị
                    trường đang thanh lọc.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không cần những lời quảng cáo hào nhoáng, The Link City chinh phục nhà đầu
                    tư bằng những giá trị{" "}
                    <strong className="text-slate-800">sờ được, thấy được và kiểm chứng được</strong>:
                  </p>

                  <div className="space-y-2.5">
                    {[
                      "Một vị trí không thể đắc địa hơn tại ngã tư kết nối liên vùng",
                      "Một hạ tầng kỹ thuật đã hoàn thành chỉn chu 100%",
                      "Những cuốn sổ hồng sẵn sàng trao tay công chứng",
                      "Và một mức giá mở bán đợt 1 còn nguyên vẹn \"vùng trũng\" để sinh lời",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                        <span className="text-emerald-600 font-bold text-lg leading-none mt-0.5">✓</span>
                        <p className="text-emerald-700 text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  <Quote>
                    Nếu bạn đang tìm kiếm một bến đỗ an toàn để giữ tiền chống lạm phát, hoặc
                    một mảnh đất để xây dựng tổ ấm cho tương lai, hãy một lần tự mình lái xe về
                    Dầu Giây để trải nghiệm. Chắc chắn bạn sẽ tìm thấy câu trả lời cho riêng
                    mình!
                  </Quote>
                </div>
              </section>

              {/* ── Section 8: Đăng ký ── */}
              <section className="mb-12" id="dang-ky">
                <SectionHeading id="dang-ky">
                  8. Đăng Ký Trải Nghiệm Thực Tế Cuối Tuần Cùng Kim Oanh Đồng Nai
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Kim Oanh Land tổ chức các chuyến xe đưa đón Quý khách hàng tham quan thực
                    tế sa bàn 21ha và công trường dự án The Link City{" "}
                    <strong className="text-amber-600">hoàn toàn miễn phí</strong> vào mỗi thứ
                    Bảy và Chủ Nhật hàng tuần.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: "🚌", title: "Xe đưa đón miễn phí", desc: "Thứ Bảy & Chủ Nhật hàng tuần từ Biên Hòa & TP.HCM" },
                      { icon: "🏙️", title: "Tham quan sa bàn 21ha", desc: "Chuyên viên tư vấn đồng hành, giải đáp mọi câu hỏi" },
                      { icon: "📊", title: "Nhận bảng giá đợt 1", desc: "Giỏ hàng LK17A còn lại và chính sách chiết khấu" },
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
                      LIÊN HỆ ĐĂNG KÝ VÉ XE & NHẬN BẢNG GIÁ ĐỢT 1
                    </p>
                    <div className="space-y-2 text-sm text-amber-700">
                      <p><strong>Dự án:</strong> The Link City Dầu Giây (KDC A1-C1 Đô thị Dầu Giây)</p>
                      <p>
                        <strong>Website:</strong>{" "}
                        <a href="https://kimoanhdongnai.com.vn/the-link-city" className="underline hover:text-amber-900">
                          kimoanhdongnai.com.vn/the-link-city
                        </a>
                      </p>
                      <p><strong>Địa chỉ dự án:</strong> Ngã tư QL1A & QL20, xã Dầu Giây, H. Thống Nhất, T. Đồng Nai</p>
                      <p><strong>Văn phòng đón tiếp:</strong> 268A Phan Trung, P. Tam Hiệp, TP. Biên Hòa, T. Đồng Nai</p>
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

              {/* FAQ */}
              <section className="mb-12">
                <SectionHeading>Câu hỏi thường gặp</SectionHeading>
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
                <SectionHeading>Các nội dung liên quan về The Link City</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city",                                                              label: "The Link City Dầu Giây — Tổng quan dự án" },
                    { href: "/the-link-city/bang-gia",                                                     label: "Bảng giá The Link City mới nhất" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                                   label: "Tổng quan The Link City Dầu Giây" },
                    { href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",       label: "Bài toán vay ngân hàng The Link City" },
                    { href: "/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026",                 label: "Hệ sinh thái 50+ tiện ích The Link City" },
                    { href: "/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026",        label: "So sánh The Link City vs đất thổ cư" },
                    { href: "/tin-tuc/shophouse-the-link-city-dau-giay-tiem-nang-kinh-doanh-2026",        label: "Shophouse The Link City 2026" },
                    { href: "/the-link-city/phap-ly",                                                      label: "Pháp lý sổ hồng The Link City" },
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

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Bài viết là ký sự thực địa mang tính cảm nhận cá nhân và tham khảo. Dự báo
                  tăng giá là kỳ vọng, không phải cam kết. Cần đối chiếu thông tin chính thức
                  trước khi đưa ra quyết định giao dịch.
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

                {/* Trip snapshot */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-bold text-amber-800 text-sm mb-3">Snapshot chuyến đi</p>
                  <div className="space-y-2">
                    {[
                      ["⏱️ Thời gian từ TP.HCM", "45 phút cao tốc"],
                      ["🛣️ Hạ tầng thực tế", "Hoàn thiện 100%"],
                      ["📗 Sổ hồng", "Cầm tay, cấp chính thức"],
                      ["🌿 Công viên đồi cỏ", "Hiện hữu, cỏ xanh mướt"],
                      ["⚽ Sân bóng & pickleball", "Đã hoạt động + đèn đêm"],
                      ["💰 Vốn tự có tối thiểu", "~550 triệu (30%)"],
                    ].map(([label, val]) => (
                      <div key={label} className="flex items-start justify-between gap-2">
                        <span className="text-amber-700 text-xs">{label}</span>
                        <span className="text-amber-900 text-xs font-bold text-right">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Tổng quan The Link City",    href: "/tin-tuc/tong-quan-the-link-city-dau-giay" },
                      { label: "50+ Tiện ích The Link City", href: "/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026" },
                      { label: "Shophouse The Link City",    href: "/tin-tuc/shophouse-the-link-city-dau-giay-tiem-nang-kinh-doanh-2026" },
                      { label: "Bảng giá & Vay ngân hàng",  href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Đăng ký xe thực địa</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Tham quan miễn phí mỗi cuối tuần — sa bàn 21ha và công trường thực tế.
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
              Một lần tự mình về Dầu Giây trải nghiệm nhé!
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Đăng ký xe đưa đón miễn phí — chúng tôi đón bạn từ Biên Hòa hoặc TP.HCM, tham
              quan sa bàn 21ha, dạo bước thực địa và nhận bảng giá đợt 1 ngay trên xe về.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/the-link-city"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Xem thông tin The Link City →
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
              href: "/tin-tuc/tong-quan-the-link-city-dau-giay",
              title: "Tổng Quan Dự Án The Link City Dầu Giây 2026",
              description: "Thông số kỹ thuật, vị trí, pháp lý và tiềm năng đầu tư toàn diện.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/he-sinh-thai-tien-ich-the-link-city-dau-giay-2026",
              title: "Hệ Sinh Thái 50+ Tiện Ích The Link City Dầu Giây",
              description: "TTTM 2,6ha, pickleball, công viên đa thế hệ và trường học nội khu.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/shophouse-the-link-city-dau-giay-tiem-nang-kinh-doanh-2026",
              title: "Shophouse The Link City: Rental Yield 7,8–9,2%/Năm",
              description: "Phân tích tiềm năng đầu tư shophouse mặt tiền QL1A và top 5 mô hình kinh doanh.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/so-sanh-dat-nen-the-link-city-dau-giay-voi-dat-tho-cu-2026",
              title: "So Sánh The Link City vs Đất Thổ Cư Dầu Giây 2026",
              description: "6 tiêu chí trực diện và 5 ngòi nổ tăng giá giúp nhà đầu tư quyết định đúng.",
              tag: "Tin dự án",
            },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}
