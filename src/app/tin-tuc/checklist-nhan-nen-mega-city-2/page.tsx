"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";

// ─────────────────────────────────────────────────────────────
// Cloudinary CDN helpers
// ─────────────────────────────────────────────────────────────
const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good";
const img = (path: string, w = 1280) => `${CDN},w_${w},c_limit/${path}`;

const NEWS31 = {
  "1": img("megacity2/news31/1"),
  "2": img("megacity2/news31/2"),
  "3": img("megacity2/news31/3"),
};

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/checklist-nhan-nen-mega-city-2`;
const PUBLISHED     = "26/08/2026";
const PUBLISHED_ISO = "2026-08-26";

// ─────────────────────────────────────────────────────────────
// JSON-LD Schemas
// ─────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Checklist Nhận Nền & Kiểm Tra Hiện Trạng Trước Khi Xây Nhà Tại Mega City 2 Nhơn Trạch 2026",
  description:
    "Checklist chi tiết 12 bước kiểm tra khi nhận nền đất Mega City 2 Nhơn Trạch: pháp lý, hạ tầng kỹ thuật, chỉ giới xây dựng, địa chất, tiện ích và những lưu ý quan trọng trước khi khởi công xây nhà.",
  image: [NEWS31["1"], NEWS31["2"], NEWS31["3"]],
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
    "checklist nhận nền Mega City 2, kiểm tra hiện trạng đất nền trước khi xây, nhận nền Mega City 2 Nhơn Trạch, lưu ý khi xây nhà đất nền",
  about: {
    "@type": "Place",
    name: "Mega City 2, Nhơn Trạch, Đồng Nai",
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
      name: "Khi nhận nền tại Mega City 2 cần kiểm tra những gì trước tiên?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ưu tiên kiểm tra 3 việc đầu tiên: (1) đối chiếu sổ đỏ với hợp đồng và bản vẽ phân lô, (2) xác định ranh giới 4 góc thửa đất bằng mốc cọc thực tế, (3) đối chiếu vị trí với bản đồ quy hoạch 1/500 để xác nhận chỉ giới xây dựng.",
      },
    },
    {
      "@type": "Question",
      name: "Hạ tầng nội khu Mega City 2 đã hoàn thiện chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hạ tầng nội khu Mega City 2 đã hoàn thiện phần lớn bao gồm đường nhựa nội khu, điện, cấp nước và thoát nước. Tuy nhiên, chủ nền vẫn cần kiểm tra thực tế tại lô đất cụ thể trước khi nhận bàn giao.",
      },
    },
    {
      "@type": "Question",
      name: "Có cần thuê đơn vị khảo sát địa chất khi xây nhà tại Mega City 2 không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khuyến nghị nên khảo sát địa chất nếu xây nhà 2–3 tầng hoặc có tầng hầm. Chi phí thường vài triệu đến hơn mười triệu đồng — nhỏ so với tổng chi phí xây dựng nhưng giúp tránh phát sinh lớn về móng.",
      },
    },
    {
      "@type": "Question",
      name: "Biên bản nhận nền gồm những nội dung gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biên bản bàn giao hiện trạng nên ghi rõ: tình trạng hạ tầng thực tế, ranh giới mốc giới 4 góc, diện tích đo đạc thực tế, các hạng mục còn tồn tại (nếu có) và chữ ký của cả hai bên cùng người chứng kiến.",
      },
    },
    {
      "@type": "Question",
      name: "Sau khi nhận nền xong, bước tiếp theo là gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sau khi nhận nền và lập biên bản bàn giao: (1) thuê đơn vị thiết kế kiến trúc + kết cấu, (2) xin giấy phép xây dựng tại UBND huyện Nhơn Trạch, (3) chọn nhà thầu và ký hợp đồng thi công, (4) khởi công sau khi có giấy phép.",
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
      name: "Checklist nhận nền Mega City 2 2026",
      item: PAGE_URL,
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// Lightbox images
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: NEWS31["1"],
    alt: "Kiểm tra sổ đỏ và bản đồ phân lô khi nhận nền đất Mega City 2 Nhơn Trạch",
    caption: "Đối chiếu sổ đỏ và bản đồ phân lô là bước đầu tiên khi nhận nền tại Mega City 2",
  },
  {
    src: NEWS31["2"],
    alt: "Hạ tầng đường nội khu điện nước hoàn thiện tại dự án Mega City 2 Nhơn Trạch 2026",
    caption: "Hệ thống đường nội khu và hạ tầng kỹ thuật đã hoàn thiện tại Mega City 2",
  },
  {
    src: NEWS31["3"],
    alt: "Kiểm tra mốc giới và hiện trạng nền đất trước khi xây nhà tại Mega City 2",
    caption: "Kiểm tra mốc ranh giới và đo đạc thực tế trước khi lập biên bản bàn giao",
  },
];

// ─────────────────────────────────────────────────────────────
// Reusable sub-components
// ─────────────────────────────────────────────────────────────
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

function CheckList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="space-y-3 pl-0 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-700 text-[16px] leading-relaxed">
          <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function BulletList({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="space-y-2.5 pl-0 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-700 text-[16px] leading-relaxed">
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
  const styles =
    type === "warn"
      ? "bg-amber-50 border-amber-200 text-amber-800"
      : "bg-primary-50 border-primary-200 text-primary-800";
  return (
    <div className={`rounded-2xl border px-6 py-5 my-6 text-sm leading-relaxed ${styles}`}>
      {children}
    </div>
  );
}

function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200
                 text-primary-700 font-semibold text-sm px-4 py-2 rounded-xl
                 hover:bg-primary-100 transition-all"
    >
      {children}
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────
export default function ChecklistNhanNenMegaCity2Page() {
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

        {/* ── Hero header ── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav
              aria-label="breadcrumb"
              className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5"
            >
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a>
              <span>/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a>
              <span>/</span>
              <span className="text-slate-600 font-medium">Checklist nhận nền Mega City 2</span>
            </nav>

            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Tin dự án
              </span>
              <time dateTime={PUBLISHED_ISO} className="text-xs text-slate-400">
                {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 8 phút đọc</span>
            </div>

            {/* H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Checklist Nhận Nền &amp; Kiểm Tra Hiện Trạng Trước Khi Xây Nhà Tại Mega City 2 Nhơn Trạch
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Sau khi sở hữu nền đất tại Mega City 2, bước nhận nền và kiểm tra hiện trạng
              là cực kỳ quan trọng để tránh phát sinh chi phí, tranh chấp hoặc vi phạm quy
              hoạch. In checklist này và mang theo khi đi nhận nền.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh checklist nhận nền Mega City 2"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={NEWS31["1"]}
                alt="Kiểm tra sổ đỏ và bản đồ phân lô khi nhận nền đất Mega City 2 Nhơn Trạch"
                className="w-full h-auto block"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg
                    className="w-5 h-5 text-slate-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Đối chiếu sổ đỏ và bản đồ phân lô — bước đầu tiên khi nhận nền tại Mega City 2
            </p>
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Article ── */}
            <article className="flex-1 min-w-0 prose-none">

              {/* TOC */}
              <nav
                aria-label="Mục lục bài viết"
                className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12"
              >
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">
                  Nội dung bài viết
                </p>
                <ol className="space-y-2 text-sm text-slate-600">
                  {[
                    ["#phap-ly",       "1. Kiểm tra pháp lý nền đất"],
                    ["#quy-hoach",     "2. Đối chiếu vị trí với bản đồ quy hoạch 1/500"],
                    ["#ha-tang",       "3. Kiểm tra hạ tầng kỹ thuật nội khu"],
                    ["#moc-gioi",      "4. Kiểm tra ranh giới và mốc giới thửa đất"],
                    ["#dia-chat",      "5. Đánh giá địa chất và nền móng"],
                    ["#tien-ich",      "6. Kiểm tra tiện ích xung quanh"],
                    ["#khac",          "7. Các hạng mục khác cần lưu ý"],
                    ["#bien-ban",      "8. Lập biên bản nhận nền"],
                    ["#checklist",     "9. Tóm tắt checklist nhanh"],
                    ["#loi-khuyen",    "10. Lời khuyên thực tế"],
                    ["#faq",           "11. Câu hỏi thường gặp"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-primary-600 transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Intro */}
              <p className="text-slate-600 text-[17px] leading-[1.85] mb-5">
                Bài viết tổng hợp checklist thực tế dựa trên quy định chung về đất nền dự án
                tại Đồng Nai và đặc thù của Mega City 2 — hạ tầng nội khu đã hoàn thiện
                phần lớn, quy hoạch 1/500 đã phê duyệt.
              </p>
              <InfoBox type="warn">
                <strong>Lưu ý:</strong> In checklist này và mang theo khi đi nhận nền. Chụp
                ảnh/video toàn bộ hiện trạng để lưu hồ sơ. Nếu phát hiện bất thường, yêu
                cầu bên bán khắc phục trước khi ký biên bản bàn giao chính thức.
              </InfoBox>

              {/* Section 1 — Pháp lý */}
              <section className="mb-12">
                <SectionHeading id="phap-ly">1. Kiểm tra pháp lý nền đất</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là bước quan trọng nhất. Sai sót về pháp lý có thể gây ra tranh chấp,
                    khó bán lại hoặc không thể xin giấy phép xây dựng sau này.
                  </p>
                  <CheckList
                    items={[
                      "Đối chiếu Sổ đỏ / Giấy chứng nhận quyền sử dụng đất với hợp đồng mua bán và bản vẽ phân lô",
                      "Kiểm tra tên chủ sở hữu, diện tích, số tờ, số thửa, mục đích sử dụng đất (đất ở đô thị)",
                      "Xác nhận đất không bị thế chấp, kê biên, tranh chấp",
                      "Yêu cầu bên bán / chủ đầu tư cung cấp bản sao công chứng nếu cần",
                    ]}
                  />
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/phap-ly-mega-city-2">
                      Pháp lý Mega City 2 →
                    </LinkBtn>
                    <LinkBtn href="/tin-tuc/cach-kiem-tra-phap-ly-dat-nen-nhon-trach">
                      Cách kiểm tra pháp lý đất nền →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 2 — Quy hoạch */}
              <section className="mb-12">
                <SectionHeading id="quy-hoach">
                  2. Đối chiếu vị trí thực tế với bản đồ quy hoạch 1/500
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <CheckList
                    items={[
                      "Mang theo bản vẽ quy hoạch chi tiết 1/500 của dự án",
                      "Xác định chính xác vị trí lô đất trên thực địa (dùng GPS hoặc mốc ranh giới)",
                      "Kiểm tra chỉ giới đường đỏ, chỉ giới xây dựng, khoảng lùi công trình",
                      "Xác nhận mật độ xây dựng và chiều cao tối đa được phép (thường ≤ 80–85% tùy loại nhà phố / biệt thự)",
                    ]}
                  />
                  <InfoBox type="info">
                    Chỉ giới xây dựng xác định ranh giới được phép xây công trình — quan
                    trọng để thiết kế đúng khoảng lùi và tránh vi phạm quy hoạch phải tháo
                    dỡ sau này.
                  </InfoBox>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/cach-doc-ban-do-quy-hoach-nhon-trach">
                      Cách đọc bản đồ quy hoạch Nhơn Trạch →
                    </LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-hoach-1-500-nhon-trach">
                      Quy hoạch 1/500 Nhơn Trạch →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* Image 2 */}
              <ArticleFigure
                src={NEWS31["2"]}
                alt="Hạ tầng đường nội khu điện nước hoàn thiện tại dự án Mega City 2 Nhơn Trạch 2026"
                caption="Hệ thống đường nội khu và hạ tầng kỹ thuật đã hoàn thiện tại Mega City 2"
                images={images}
                index={1}
                onOpen={openLightbox}
              />

              {/* Section 3 — Hạ tầng */}
              <section className="mb-12">
                <SectionHeading id="ha-tang">3. Kiểm tra hạ tầng kỹ thuật nội khu</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Tại Mega City 2, hạ tầng đã được đầu tư khá hoàn thiện. Tuy nhiên cần
                    kiểm tra cụ thể tại lô đất của mình:
                  </p>
                  <CheckList
                    items={[
                      "Đường nội khu trước lô đất đã trải nhựa chưa? Độ rộng thực tế có đúng quy hoạch (13–32 m)?",
                      "Hệ thống điện âm, cột điện, tủ điện đã sẵn sàng đấu nối chưa?",
                      "Nước máy thủy cục đã có đến từng nền chưa? Áp lực nước thế nào?",
                      "Hệ thống thoát nước mưa và nước thải có hoạt động tốt không (đặc biệt quan sát sau mưa)?",
                      "Vỉa hè, cây xanh, hệ thống chiếu sáng công cộng đã hoàn thiện chưa?",
                    ]}
                  />
                  <div className="rounded-2xl border-l-4 border-primary-400 bg-primary-50 px-5 py-4">
                    <p className="font-bold text-primary-800 mb-1">Mẹo kiểm tra thoát nước</p>
                    <p className="text-primary-700 text-sm leading-relaxed">
                      Nên đi kiểm tra vào ngày mưa hoặc sau cơn mưa lớn để quan sát thực tế
                      hệ thống thoát nước hoạt động như thế nào, tránh tình trạng ngập úng
                      nền đất sau khi xây nhà.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/tien-do-mega-city-2">
                      Tiến độ hạ tầng Mega City 2 →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* Section 4 — Mốc giới */}
              <section className="mb-12">
                <SectionHeading id="moc-gioi">
                  4. Kiểm tra ranh giới và mốc giới thửa đất
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <CheckList
                    items={[
                      "Yêu cầu bên bán hoặc đơn vị quản lý dự án xác định 4 góc thửa đất bằng mốc bê tông hoặc cọc",
                      "Đo đạc lại diện tích thực tế, so sánh với sổ đỏ",
                      "Kiểm tra xem có lấn chiếm hoặc chồng lấn với lô bên cạnh không",
                    ]}
                  />
                  <InfoBox type="warn">
                    Nếu diện tích thực tế chênh lệch so với sổ đỏ quá 1%, yêu cầu bên bán
                    giải thích và điều chỉnh trước khi ký biên bản bàn giao.
                  </InfoBox>
                </div>
              </section>

              {/* Section 5 — Địa chất */}
              <section className="mb-12">
                <SectionHeading id="dia-chat">5. Đánh giá địa chất và nền móng</SectionHeading>
                <div className="pt-5 space-y-5">
                  <CheckList
                    items={[
                      "Quan sát địa hình: đất có bị lún, ngập nước cục bộ không?",
                      "Nếu có điều kiện, thuê đơn vị khoan khảo sát địa chất (chi phí khoảng vài triệu đến hơn mười triệu)",
                      "Đặc biệt quan trọng nếu xây nhà 2–3 tầng hoặc có tầng hầm",
                    ]}
                  />
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary-600 text-white">
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                            Loại công trình
                          </th>
                          <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-wide">
                            Mức độ cần khảo sát
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          ["Nhà 1 tầng", "Nên quan sát địa hình, khoan nếu nghi ngờ nền yếu"],
                          ["Nhà 2–3 tầng", "Khuyến nghị khảo sát địa chất chuyên nghiệp"],
                          ["Nhà có tầng hầm", "Bắt buộc khảo sát địa chất và tính toán kết cấu"],
                        ].map(([loai, muc_do], i) => (
                          <tr key={loai} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                            <td className="px-5 py-3.5 font-semibold text-slate-700">{loai}</td>
                            <td className="px-5 py-3.5 text-slate-600">{muc_do}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Image 3 */}
              <ArticleFigure
                src={NEWS31["3"]}
                alt="Kiểm tra mốc giới và hiện trạng nền đất trước khi xây nhà tại Mega City 2"
                caption="Kiểm tra mốc ranh giới và đo đạc thực tế trước khi lập biên bản bàn giao"
                images={images}
                index={2}
                onOpen={openLightbox}
              />

              {/* Section 6 — Tiện ích */}
              <section className="mb-12">
                <SectionHeading id="tien-ich">
                  6. Kiểm tra tiện ích xung quanh và khoảng cách
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <CheckList
                    items={[
                      "Khoảng cách đến trường học, bệnh viện đa khoa Nhơn Trạch, siêu thị, chợ",
                      "Vị trí so với công viên nội khu, khu thương mại, trung tâm hành chính",
                      "Hướng nhà, hướng nắng, hướng gió (ảnh hưởng đến thiết kế và chi phí điều hòa)",
                    ]}
                  />
                </div>
              </section>

              {/* Section 7 — Khác */}
              <section className="mb-12">
                <SectionHeading id="khac">7. Các hạng mục khác cần lưu ý</SectionHeading>
                <div className="pt-5 space-y-5">
                  <BulletList
                    items={[
                      "Hệ thống PCCC, cấp nước chữa cháy (nếu xây nhà phố thương mại)",
                      "Quy định về tường rào, cổng, màu sắc mặt tiền (nếu dự án có quy chế quản lý kiến trúc)",
                      "Tình trạng vệ sinh môi trường, thu gom rác thải hiện tại",
                      "Khả năng tiếp cận xe tải vật liệu xây dựng vào tận nền",
                    ]}
                  />
                </div>
              </section>

              {/* Section 8 — Biên bản */}
              <section className="mb-12">
                <SectionHeading id="bien-ban">8. Biên bản nhận nền</SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi nhận nền chính thức, nên lập{" "}
                    <strong>Biên bản bàn giao hiện trạng</strong> có chữ ký của:
                  </p>
                  <BulletList
                    items={[
                      "Bên bán / chủ đầu tư hoặc đơn vị quản lý",
                      "Bên mua (chủ nền)",
                      "Người chứng kiến (nếu có)",
                    ]}
                  />
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Biên bản cần ghi rõ: tình trạng hạ tầng thực tế, ranh giới mốc giới,
                    diện tích đo đạc, các hạng mục còn tồn tại cần khắc phục (nếu có) và
                    thời hạn bên bán hoàn thiện.
                  </p>
                  <InfoBox type="warn">
                    Không ký biên bản nếu chưa kiểm tra đầy đủ hoặc còn tồn tại chưa được
                    giải quyết. Biên bản có giá trị pháp lý quan trọng khi phát sinh tranh
                    chấp sau này.
                  </InfoBox>
                </div>
              </section>

              {/* Section 9 — Checklist nhanh */}
              <section className="mb-12" id="checklist">
                <SectionHeading>9. Tóm tắt Checklist nhanh (in mang theo)</SectionHeading>
                <div className="pt-5">
                  <div className="rounded-2xl border-2 border-primary-200 bg-primary-50 overflow-hidden">
                    <div className="bg-primary-600 px-6 py-4">
                      <p className="text-white font-black text-sm uppercase tracking-wide">
                        ✅ Checklist nhận nền Mega City 2 — Tháng 8/2026
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-primary-200">
                      <ul className="px-6 py-5 space-y-3">
                        {[
                          "Sổ đỏ + đối chiếu thông tin",
                          "Bản đồ quy hoạch 1/500 + chỉ giới xây dựng",
                          "Đường, điện, nước, thoát nước",
                          "Mốc ranh giới 4 góc",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-primary-800 text-sm font-medium">
                            <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-primary-600 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul className="px-6 py-5 space-y-3">
                        {[
                          "Diện tích thực tế",
                          "Địa chất / nền móng",
                          "Tiện ích xung quanh",
                          "Biên bản bàn giao hiện trạng",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-primary-800 text-sm font-medium">
                            <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-primary-600 flex items-center justify-center">
                              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10 — Lời khuyên */}
              <section className="mb-12" id="loi-khuyen">
                <SectionHeading>10. Lời khuyên thực tế</SectionHeading>
                <div className="pt-5 space-y-4">
                  {[
                    {
                      icon: "🌧️",
                      title: "Đi kiểm tra vào ngày mưa",
                      desc: "Quan sát hệ thống thoát nước hoạt động thực tế — đây là cách tốt nhất để phát hiện điểm ngập úng trước khi xây.",
                    },
                    {
                      icon: "📸",
                      title: "Chụp ảnh và quay video toàn bộ",
                      desc: "Ghi lại hiện trạng từng góc độ, tình trạng hạ tầng, mốc giới. Lưu trữ kỹ để đối chiếu sau này nếu có tranh chấp.",
                    },
                    {
                      icon: "⚠️",
                      title: "Yêu cầu khắc phục trước khi ký",
                      desc: "Nếu phát hiện bất thường (hạ tầng chưa hoàn thiện, mốc giới sai, diện tích lệch…), yêu cầu bên bán xử lý trước khi nhận bàn giao chính thức.",
                    },
                    {
                      icon: "📋",
                      title: "Xin giấy phép xây dựng sau khi nhận nền",
                      desc: "Sau khi nhận nền ổn thỏa mới tiến hành xin giấy phép xây dựng tại UBND huyện Nhơn Trạch và ký hợp đồng nhà thầu.",
                    },
                  ].map(({ icon, title, desc }) => (
                    <div
                      key={title}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <span className="text-2xl flex-shrink-0">{icon}</span>
                      <div>
                        <p className="font-bold text-slate-800 mb-1">{title}</p>
                        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-wrap gap-3 pt-2">
                    <LinkBtn href="/tin-tuc/chi-phi-xay-nha-mega-city-2">
                      Chi phí xây nhà thực tế tại Mega City 2 →
                    </LinkBtn>
                    <LinkBtn href="/tin-tuc/quy-trinh-mua-dat-nen-nhon-trach">
                      Quy trình mua đất nền Nhơn Trạch →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-12" id="faq">
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-slate-900 px-7 py-6">
                    <h2 className="text-white font-black text-xl tracking-tight">
                      Câu hỏi thường gặp
                    </h2>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      {
                        q: "Khi nhận nền tại Mega City 2 cần kiểm tra những gì trước tiên?",
                        a: "Ưu tiên 3 việc: (1) đối chiếu sổ đỏ với hợp đồng và bản vẽ phân lô, (2) xác định ranh giới 4 góc thửa đất bằng mốc cọc thực tế, (3) đối chiếu vị trí với bản đồ quy hoạch 1/500 để xác nhận chỉ giới xây dựng.",
                      },
                      {
                        q: "Hạ tầng nội khu Mega City 2 đã hoàn thiện chưa?",
                        a: "Hạ tầng nội khu Mega City 2 đã hoàn thiện phần lớn: đường nhựa, điện, cấp nước, thoát nước. Tuy nhiên chủ nền vẫn cần kiểm tra thực tế tại lô cụ thể trước khi nhận bàn giao.",
                      },
                      {
                        q: "Có cần thuê khảo sát địa chất khi xây nhà tại Mega City 2 không?",
                        a: "Khuyến nghị nên khảo sát nếu xây 2–3 tầng hoặc có tầng hầm. Chi phí vài triệu đến hơn mười triệu — nhỏ so với tổng chi phí xây dựng nhưng tránh được phát sinh lớn về móng.",
                      },
                      {
                        q: "Biên bản nhận nền gồm những nội dung gì?",
                        a: "Ghi rõ: tình trạng hạ tầng thực tế, ranh giới mốc giới 4 góc, diện tích đo đạc, các hạng mục tồn tại (nếu có) và thời hạn khắc phục. Cần chữ ký của cả hai bên và người chứng kiến.",
                      },
                      {
                        q: "Sau khi nhận nền xong, bước tiếp theo là gì?",
                        a: "Thuê đơn vị thiết kế kiến trúc + kết cấu → xin giấy phép xây dựng tại UBND huyện Nhơn Trạch → chọn nhà thầu và ký hợp đồng → khởi công sau khi có giấy phép.",
                      },
                    ].map(({ q, a }) => (
                      <div key={q} className="px-7 py-6 hover:bg-slate-50 transition-colors">
                        <p className="font-bold text-slate-800 text-base mb-2">{q}</p>
                        <p className="text-slate-500 text-[15px] leading-relaxed">{a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-8 text-white text-center">
                <p className="font-black text-xl mb-2">
                  Sắp nhận nền hoặc chuẩn bị xây nhà tại Mega City 2?
                </p>
                <p className="text-primary-100 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
                  Liên hệ để được hỗ trợ kiểm tra thông tin quy hoạch, kết nối đơn vị khảo
                  sát địa chất và tư vấn quy trình xây dựng phù hợp.
                </p>
                <a
                  href="tel:0937587438"
                  className="inline-flex items-center gap-2 bg-white text-primary-700 font-black
                             px-8 py-3.5 rounded-xl hover:bg-primary-50 transition-all shadow-lg"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Hotline / Zalo: 0937.587.438
                </a>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28 space-y-6">

                {/* Quick contact */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-black text-slate-900 mb-1">Tư vấn nhận nền & xây nhà</p>
                  <p className="text-slate-500 text-xs mb-4 leading-relaxed">
                    Hỗ trợ kiểm tra quy hoạch, kết nối đơn vị khảo sát và tư vấn xây dựng.
                  </p>
                  <a
                    href="tel:0937587438"
                    className="flex items-center justify-center gap-2 w-full bg-primary-600
                               text-white font-bold py-3 rounded-xl hover:bg-primary-700 transition-all text-sm"
                  >
                    Gọi 0937.587.438
                  </a>
                  <a
                    href="https://zalo.me/0937587438"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full mt-2 bg-slate-100
                               text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-200 transition-all text-sm"
                  >
                    Nhắn Zalo
                  </a>
                </div>

                {/* Related articles */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-black text-slate-900 mb-4 text-sm uppercase tracking-wide">
                    Bài viết liên quan
                  </p>
                  <ul className="space-y-3">
                    {[
                      { href: "/tin-tuc/chi-phi-xay-nha-mega-city-2",              label: "Chi phí xây nhà Mega City 2 2026" },
                      { href: "/tin-tuc/phap-ly-mega-city-2",                      label: "Pháp lý Mega City 2 mới nhất" },
                      { href: "/tin-tuc/tien-do-mega-city-2",                      label: "Tiến độ Mega City 2 tháng 8/2026" },
                      { href: "/tin-tuc/cach-kiem-tra-phap-ly-dat-nen-nhon-trach", label: "Cách kiểm tra pháp lý đất nền" },
                      { href: "/tin-tuc/quy-trinh-mua-dat-nen-nhon-trach",         label: "Quy trình mua đất nền Nhơn Trạch" },
                    ].map(({ href, label }) => (
                      <li key={href}>
                        <a
                          href={href}
                          className="text-sm text-primary-700 hover:text-primary-900 font-medium
                                     hover:underline transition-colors leading-snug block"
                        >
                          {label} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </div>

      <RelatedContent
        items={[
          {
            href: "/tin-tuc/chi-phi-xay-nha-mega-city-2",
            title: "Chi phí xây nhà thực tế tại Mega City 2 2026",
            description: "Đơn giá xây thô 3,5–3,9 triệu/m², trọn gói 5–8,5 triệu/m² và ước tính chi phí nền 100–150m².",
            tag: "Tin dự án",
          },
          {
            href: "/tin-tuc/phap-ly-mega-city-2",
            title: "Pháp lý Mega City 2 có gì?",
            description: "Cập nhật quy hoạch, quyết định 1772/QĐ-UBND và hồ sơ pháp lý dự án mới nhất 2026.",
            tag: "Pháp lý",
          },
          {
            href: "/tin-tuc/tien-do-mega-city-2",
            title: "Tiến độ Mega City 2 tháng 8/2026",
            description: "Cập nhật hình ảnh thi công thực tế: đường nội khu, hạ tầng kỹ thuật và khu nhà xây sẵn.",
            tag: "Tiến độ",
          },
          {
            href: "/tin-tuc/cach-kiem-tra-phap-ly-dat-nen-nhon-trach",
            title: "Cách kiểm tra pháp lý đất nền Nhơn Trạch",
            description: "Hướng dẫn kiểm tra sổ đỏ, quy hoạch, thế chấp, tranh chấp trước khi giao dịch.",
            tag: "Thị trường",
          },
          {
            href: "/tin-tuc/quy-trinh-mua-dat-nen-nhon-trach",
            title: "Quy trình mua đất nền Nhơn Trạch từ A–Z",
            description: "8 bước từ kiểm tra pháp lý, quy hoạch, đặt cọc đến công chứng và sang tên.",
            tag: "Thị trường",
          },
          {
            href: "/mega-city-2",
            title: "Tổng quan dự án Mega City 2",
            description: "Vị trí, mặt bằng, tiện ích, pháp lý và bảng giá dự án Mega City 2 Nhơn Trạch.",
            tag: "Dự án",
          },
        ]}
      />
      <CorpFooter />
    </>
  );
}
