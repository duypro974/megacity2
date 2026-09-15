"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS53 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/ho-so-phap-ly-the-link-city-dau-giay-cong-van-2505-ubnd-2026`;
const PUBLISHED     = "17/09/2026";
const PUBLISHED_ISO = "2026-09-17";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Hồ Sơ Pháp Lý The Link City Dầu Giây 2026: Giải Mã Công Văn 2505/UBND-KTN & Tiến Trình Cấp Sổ Đỏ Từng Nền",
  description:
    "Báo cáo thẩm định pháp lý The Link City Dầu Giây 2026: Giải mã công văn 2505/UBND-KTN của UBND tỉnh Đồng Nai, nghĩa vụ tài chính và tiến trình cấp sổ hồng từng nền.",
  image: [IMG_NEWS53["1"], IMG_NEWS53["3"], IMG_NEWS53["5"]],
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
  keywords:
    "Pháp lý The Link City, Sổ đỏ The Link City Dầu Giây, Công văn 2505 UBND KTN, Chủ đầu tư Phú Việt Tín, KDC A1 C1 Dầu Giây pháp lý",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Tôi có được kiểm tra bản gốc sổ hồng trước khi ký hợp đồng không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoàn toàn được. Khách hàng khi đến văn phòng Kim Oanh Đồng Nai có quyền yêu cầu chuyên viên pháp lý xuất trình bản sao y công chứng hoặc bản gốc Giấy chứng nhận quyền sử dụng đất của thửa đất dự kiến giao dịch để kiểm tra số tờ, số thửa và ranh giới.",
      },
    },
    {
      "@type": "Question",
      name: "Mua đất tại The Link City có bị quy hoạch treo hay tranh chấp giải tỏa không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tuyệt đối không. Toàn bộ 21ha của dự án đã có quyết định giao đất chính thức từ UBND tỉnh Đồng Nai và hoàn thành 100% nghĩa vụ tiền sử dụng đất, nằm trong quy hoạch đô thị Dầu Giây đến năm 2030, không thuộc diện quy hoạch treo hay thu hồi.",
      },
    },
    {
      "@type": "Question",
      name: "Nếu mua bằng hình thức vay ngân hàng thì sổ hồng giữ ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khi ngân hàng giải ngân 70%, bản chính Giấy chứng nhận quyền sử dụng đất sẽ được ngân hàng lưu giữ tại kho an toàn để bảo đảm khoản vay. Khách hàng giữ bản sao y có chứng nhận để thực hiện các quyền xây dựng và sinh hoạt bình thường. Khi tất toán khoản vay, ngân hàng bàn giao lại bản gốc sổ hồng cho chủ sở hữu.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Tin tức",   item: `${BASE_URL}/tin-tuc` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hồ sơ pháp lý The Link City Dầu Giây 2026",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS53["1"],
    alt: "Báo cáo thẩm định hồ sơ pháp lý minh bạch dự án The Link City Dầu Giây Đồng Nai",
    caption: "Tính minh bạch pháp lý là yếu tố cốt lõi bảo chứng sự an toàn bền vững cho nhà đầu tư.",
  },
  {
    src: IMG_NEWS53["2"],
    alt: "Hạ tầng kỹ thuật hoàn thiện 100 phần trăm đã được nghiệm thu tại The Link City Dầu Giây",
    caption: "Hạ tầng kỹ thuật đồng bộ được nghiệm thu là điều kiện tiên quyết để cơ quan nhà nước cấp sổ hồng.",
  },
  {
    src: IMG_NEWS53["3"],
    alt: "Giấy chứng nhận quyền sử dụng đất thực tế của dự án The Link City Dầu Giây cấp năm 2026",
    caption: "Những cuốn sổ hồng thực tế được cấp phát minh bạch cho từng thửa đất – Bảo chứng vàng cho nhà đầu tư.",
  },
  {
    src: IMG_NEWS53["4"],
    alt: "Sa bàn kiến trúc thể hiện quy hoạch chi tiết 1 phần 500 dự án The Link City Dầu Giây",
    caption: "Quy hoạch 1/500 được thể hiện trực quan trên sa bàn thực tế tại văn phòng dự án.",
  },
  {
    src: IMG_NEWS53["5"],
    alt: "Nhà phố xây dựng hoàn thiện thực tế tại dự án The Link City Dầu Giây Đồng Nai",
    caption: "Nhà phố hiện hữu khang trang khẳng định năng lực triển khai thực tế của Kim Oanh Land.",
  },
];

// ─── Sub-components (pattern bài 42) ──────────────────────────────────────
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
  return <h3 className="text-lg md:text-xl font-black text-slate-800 mb-3 mt-6">{children}</h3>;
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

function InfoBox({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warn" | "success";
}) {
  const s =
    type === "warn"
      ? "bg-amber-50 border-amber-200 text-amber-800"
      : type === "success"
      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
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

// ─── Page ──────────────────────────────────────────────────────────────────
export default function PhapLyPage() {
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
              <a href="/" className="hover:text-primary-600 transition-colors">Trang chủ</a>
              <span className="text-slate-300">/</span>
              <a href="/tin-tuc" className="hover:text-primary-600 transition-colors">Tin tức</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium line-clamp-1">Hồ sơ pháp lý The Link City Dầu Giây 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Pháp lý
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
              Hồ Sơ Pháp Lý The Link City Dầu Giây 2026: Giải Mã Công Văn 2505/UBND-KTN & Tiến Trình Cấp Sổ Đỏ Từng Nền
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Báo cáo thẩm định đầy đủ pháp lý{" "}
              <a href="/the-link-city" className="text-primary-700 font-semibold hover:underline">
                The Link City Dầu Giây
              </a>
              : Giải mã công văn 2505/UBND-KTN của UBND tỉnh Đồng Nai, hoàn thành 100% nghĩa vụ tài chính và quy trình cấp sổ hồng riêng từng nền theo Luật mới.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh pháp lý The Link City"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS53["1"]}
                alt="Báo cáo thẩm định hồ sơ pháp lý minh bạch dự án The Link City Dầu Giây Đồng Nai"
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
              Tính minh bạch pháp lý là yếu tố cốt lõi bảo chứng sự an toàn bền vững cho nhà đầu tư
            </p>
          </div>
        </div>

        {/* ── Main ──────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Article ───────────────────────────────────── */}
            <article className="flex-1 min-w-0">

              {/* TOC */}
              <nav aria-label="Mục lục bài viết" className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 mb-12">
                <p className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Nội dung bài viết</p>
                <ol className="space-y-1.5 text-sm text-slate-600 columns-1 sm:columns-2 gap-x-8">
                  {[
                    ["#boi-canh",    "1. Bối cảnh lịch sử pháp lý KDC A1-C1"],
                    ["#ket-luan",    "2. Kết luận thanh tra & 100% nghĩa vụ tài chính"],
                    ["#cv-2505",     "3. Giải mã Văn bản 2505/UBND-KTN"],
                    ["#quy-hoach",   "4. Quy hoạch 1/500 & Nghiệm thu hạ tầng"],
                    ["#quy-trinh",   "5. Quy trình công chứng & Nhận sổ hồng"],
                    ["#kim-oanh",    "6. Vai trò bảo chứng của Kim Oanh Land"],
                    ["#faq",         "7. Câu hỏi pháp lý cốt lõi (FAQ)"],
                    ["#tai-lieu",    "8. Tải tài liệu pháp lý PDF & Đăng ký thẩm định"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-primary-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* ── Section 1 ── */}
              <section className="mb-12" id="boi-canh">
                <SectionHeading id="boi-canh">
                  1. Bối Cảnh Lịch Sử: Vì Sao Hồ Sơ Pháp Lý KDC A1-C1 Dầu Giây Từng Gây Chú Ý?
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trên thị trường bất động sản Đồng Nai, The Link City (tên pháp lý:{" "}
                    <strong className="text-slate-800">Khu dân cư A1-C1 Đô thị Dầu Giây</strong>)
                    là một trong những dự án sở hữu quỹ đất quy mô lớn và vị trí đắc địa nhất
                    tại trung tâm huyện Thống Nhất.
                  </p>

                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trong giai đoạn trước đây, nhiều khách hàng khi tìm kiếm thông tin thường bắt
                    gặp một số bài phản ánh về tiến độ cấp sổ đỏ hoặc các đợt thanh tra liên quan
                    đến nội bộ Công ty TNHH Đầu tư Phú Việt Tín (Chủ đầu tư ban đầu), khiến không
                    ít nhà đầu tư mới có tâm lý e ngại:
                  </p>

                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                    <p className="font-black text-amber-800 text-base mb-3">
                      ❓ "Liệu pháp lý The Link City hiện tại đã thực sự sạch sẽ và an toàn để xuống tiền chưa?"
                    </p>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      Để trả lời câu hỏi này một cách khách quan nhất, chúng ta không nghe
                      những lời đồn thổi trên mạng, mà căn cứ vào các{" "}
                      <strong>văn bản pháp lý chính thức có hiệu lực</strong> của UBND Tỉnh
                      Đồng Nai và các cơ quan quản lý nhà nước năm 2026.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Section 2 ── */}
              <section className="mb-12" id="ket-luan">
                <SectionHeading id="ket-luan">
                  2. Kết Luận Thanh Tra & Hoàn Thành 100% Nghĩa Vụ Tài Chính Với Nhà Nước
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nguyên nhân gốc rễ của việc chậm cấp sổ đỏ tại nhiều dự án vùng ven thường
                    xuất phát từ 2 vướng mắc: Chưa hoàn thành giải phóng mặt bằng hoặc chưa nộp
                    đủ tiền sử dụng đất. Đối với The Link City, mọi nút thắt đã được{" "}
                    <strong className="text-slate-800">tháo gỡ triệt để</strong>:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        icon: "✅",
                        title: "Giải phóng mặt bằng 100%",
                        body: "Toàn bộ quỹ đất đã hoàn thành công tác bồi thường, giải phóng mặt bằng và được UBND tỉnh Đồng Nai ban hành quyết định giao đất chính thức.",
                        color: "border-emerald-200 bg-emerald-50",
                        hd: "text-emerald-800",
                        bd: "text-emerald-700",
                      },
                      {
                        icon: "✅",
                        title: "Nộp đủ tiền sử dụng đất & Nghĩa vụ thuế",
                        body: "Chủ đầu tư Công ty TNHH Đầu tư Phú Việt Tín đã thực hiện đầy đủ các kết luận kiểm toán, thanh tra, hoàn thành 100% nghĩa vụ nộp tiền sử dụng đất và các loại thuế phí theo quy định.",
                        color: "border-emerald-200 bg-emerald-50",
                        hd: "text-emerald-800",
                        bd: "text-emerald-700",
                      },
                      {
                        icon: "✅",
                        title: "Không có tranh chấp & Đủ điều kiện cấp sổ",
                        body: "Dự án không bị kê biên tài sản, không nằm trong danh sách các dự án vi phạm trật tự xây dựng và đủ điều kiện pháp lý để tiếp tục hoàn thiện thủ tục cấp Giấy chứng nhận quyền sử dụng đất.",
                        color: "border-emerald-200 bg-emerald-50",
                        hd: "text-emerald-800",
                        bd: "text-emerald-700",
                      },
                    ].map((item) => (
                      <div key={item.title} className={`rounded-2xl border ${item.color} p-5 flex items-start gap-3`}>
                        <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                        <div>
                          <p className={`font-black text-sm mb-1 ${item.hd}`}>{item.title}</p>
                          <p className={`text-sm leading-relaxed ${item.bd}`}>{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS53["2"]}
                    alt="Hạ tầng kỹ thuật hoàn thiện 100 phần trăm đã được nghiệm thu tại The Link City Dầu Giây"
                    caption="Hạ tầng kỹ thuật đồng bộ được nghiệm thu là điều kiện tiên quyết để cơ quan nhà nước cấp sổ hồng."
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 3 ── */}
              <section className="mb-12" id="cv-2505">
                <SectionHeading id="cv-2505">
                  3. Giải Mã Văn Bản 2505/UBND-KTN: "Bật Đèn Xanh" Cấp Sổ Đỏ Từng Nền
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bước ngoặt pháp lý quan trọng nhất khẳng định tính hợp pháp và an toàn của
                    The Link City chính là{" "}
                    <strong className="text-slate-800">
                      Văn bản số 2505/UBND-KTN ngày 13/02/2026
                    </strong>{" "}
                    của UBND tỉnh Đồng Nai:
                  </p>

                  <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                    <div className="bg-slate-700 text-white px-6 py-3">
                      <p className="font-black text-sm tracking-wide">
                        📋 NỘI DUNG CỐT LÕI VĂN BẢN 2505/UBND-KTN
                      </p>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {[
                        {
                          label: "Số hiệu",
                          value: "2505/UBND-KTN",
                        },
                        {
                          label: "Ngày ban hành",
                          value: "13/02/2026",
                        },
                        {
                          label: "Cơ quan ban hành",
                          value: "UBND tỉnh Đồng Nai — Chủ tịch UBND ký",
                        },
                        {
                          label: "Căn cứ đề xuất",
                          value: "Văn bản số 04/2026/PVT của Công ty TNHH Đầu tư Phú Việt Tín về việc tháo gỡ khó khăn và đẩy nhanh tiến độ cấp GCNQSDĐ tại KDC A1-C1 Đô thị Dầu Giây",
                        },
                        {
                          label: "Chỉ đạo chính thức",
                          value: "Giao Sở Tài nguyên và Môi trường tỉnh Đồng Nai chủ trì, phối hợp cùng các Sở, ban ngành và UBND huyện Thống Nhất rà soát, hướng dẫn chủ đầu tư hoàn tất thủ tục cấp GCNQSDĐ cho từng thửa đất đủ điều kiện theo quy định pháp luật",
                        },
                      ].map((row) => (
                        <div key={row.label} className="flex gap-0 text-sm">
                          <div className="w-36 shrink-0 px-6 py-4 font-bold text-slate-700 bg-slate-50 border-r border-slate-100">
                            {row.label}
                          </div>
                          <div className="flex-1 px-6 py-4 text-slate-600 leading-relaxed">
                            {row.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <InfoBox type="success">
                    <strong>Ý nghĩa đối với nhà đầu tư:</strong> Đây là "tấm vé thông hành
                    cao nhất" từ cơ quan quản lý nhà nước cấp tỉnh, khẳng định quyền lợi hợp
                    pháp của người mua đất tại The Link City được pháp luật bảo vệ tuyệt đối.
                  </InfoBox>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/phap-ly">
                      📑 Xem hình ảnh trích lục công văn và các văn bản đính kèm →
                    </LinkBtn>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS53["3"]}
                    alt="Giấy chứng nhận quyền sử dụng đất thực tế của dự án The Link City Dầu Giây cấp năm 2026"
                    caption="Những cuốn sổ hồng thực tế được cấp phát minh bạch cho từng thửa đất – Bảo chứng vàng cho nhà đầu tư."
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 4 ── */}
              <section className="mb-12" id="quy-hoach">
                <SectionHeading id="quy-hoach">
                  4. Quy Hoạch 1/500 & Biên Bản Nghiệm Thu Hạ Tầng Kỹ Thuật Thực Tế
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo quy định của Luật Kinh doanh Bất động sản mới, một dự án đất nền chỉ
                    được phép chuyển nhượng khi đáp ứng đủ{" "}
                    <strong className="text-slate-800">2 điều kiện bắt buộc</strong>: Có Quyết
                    định phê duyệt quy hoạch chi tiết 1/500 và hạ tầng kỹ thuật phải được cơ
                    quan nhà nước nghiệm thu hoàn thành.
                  </p>

                  <InfoBox type="success">
                    The Link City đáp ứng <strong>trọn vẹn cả 2 tiêu chuẩn</strong> này.
                  </InfoBox>

                  <H3>Quyết định phê duyệt quy hoạch 1/500</H3>
                  <BulletList
                    items={[
                      "Phân chia ranh giới rõ ràng từng lô đất liên kế (95m², 100m²), lô shophouse và biệt thự",
                      "Quy định cụ thể chỉ giới xây dựng: khoảng lùi trước 3m, lùi sau 2m",
                      "Xác định chiều cao tầng tối đa và cốt nền xây dựng theo quy chuẩn đô thị",
                    ]}
                  />

                  <H3>Nghiệm thu đấu nối kỹ thuật</H3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        icon: "🛣️",
                        label: "Giao thông",
                        desc: "Kết nối trực tiếp với Quốc lộ 1A và Quốc lộ 20 tại ngã tư Dầu Giây",
                      },
                      {
                        icon: "💧",
                        label: "Cấp nước",
                        desc: "Do Công ty Cổ phần Cấp nước Đồng Nai cấp nguồn, đấu nối đến từng lô",
                      },
                      {
                        icon: "⚡",
                        label: "Điện sinh hoạt",
                        desc: "Điện lực Thống Nhất quản lý, hệ thống điện ngầm 100% toàn dự án",
                      },
                      {
                        icon: "🌿",
                        label: "Thoát nước & Môi trường",
                        desc: "Hệ thống nước thải và nước mưa tách rời hoàn toàn, bảo vệ sinh thái",
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <span className="text-xl shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-bold text-slate-800 text-sm mb-1">{item.label}</p>
                          <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/mat-bang">
                      📐 Xem chi tiết bản vẽ quy hoạch 1/500 và mặt cắt từng phân khu →
                    </LinkBtn>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS53["4"]}
                    alt="Sa bàn kiến trúc thể hiện quy hoạch chi tiết 1 phần 500 dự án The Link City Dầu Giây"
                    caption="Quy hoạch 1/500 được thể hiện trực quan trên sa bàn thực tế tại văn phòng dự án."
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 5 ── */}
              <section className="mb-12" id="quy-trinh">
                <SectionHeading id="quy-trinh">
                  5. Quy Trình Công Chứng Chuyển Nhượng & Nhận Sổ Hồng Riêng
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi mua đất nền tại The Link City, khách hàng hoàn toàn yên tâm về tính
                    pháp lý nhờ quy trình giao dịch{" "}
                    <strong className="text-slate-800">chuẩn chỉnh qua các cơ quan công quyền</strong>:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        step: "01",
                        icon: "📝",
                        title: "Ký Hợp đồng chuyển nhượng tại Văn phòng Công chứng",
                        body: "Hai bên ký kết văn bản chuyển nhượng quyền sử dụng đất trực tiếp tại Văn phòng Công chứng nhà nước tại huyện Thống Nhất. Công chứng viên kiểm tra tính pháp lý của thửa đất, mã số lô và ngăn chặn mọi nguy cơ bán trùng lặp.",
                        color: "border-blue-200 bg-blue-50",
                        hd: "text-blue-800",
                        bd: "text-blue-700",
                      },
                      {
                        step: "02",
                        icon: "🏛️",
                        title: "Đăng ký biến động quyền sử dụng đất",
                        body: "Hồ sơ sau công chứng được nộp tại Chi nhánh Văn phòng Đăng ký Đất đai huyện Thống Nhất để thực hiện thủ tục sang tên chính thức.",
                        color: "border-primary-200 bg-primary-50",
                        hd: "text-primary-800",
                        bd: "text-primary-700",
                      },
                      {
                        step: "03",
                        icon: "📜",
                        title: "Nhận Sổ hồng đứng tên cá nhân",
                        body: "Sau khi hoàn thành nghĩa vụ thuế trước bạ, khách hàng nhận bàn giao Giấy chứng nhận quyền sử dụng đất với tên cá nhân chính chủ, thời hạn sử dụng đất ở Lâu dài (ODT).",
                        color: "border-emerald-200 bg-emerald-50",
                        hd: "text-emerald-800",
                        bd: "text-emerald-700",
                      },
                    ].map((item) => (
                      <div key={item.step} className={`rounded-2xl border ${item.color} p-5 flex items-start gap-4`}>
                        <div className="flex flex-col items-center gap-1 shrink-0">
                          <span className="text-xs font-black text-slate-400">BƯỚC</span>
                          <span className={`text-2xl font-black ${item.hd}`}>{item.step}</span>
                          <span className="text-xl">{item.icon}</span>
                        </div>
                        <div>
                          <p className={`font-black text-sm mb-2 ${item.hd}`}>{item.title}</p>
                          <p className={`text-sm leading-relaxed ${item.bd}`}>{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Section 6 ── */}
              <section className="mb-12" id="kim-oanh">
                <SectionHeading id="kim-oanh">
                  6. Vai Trò Bảo Chứng Thương Hiệu Của Tập Đoàn Địa Ốc Kim Oanh
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Bên cạnh pháp lý của chủ đầu tư Phú Việt Tín, sự đồng hành của{" "}
                    <strong className="text-slate-800">Tập đoàn Kim Oanh (Kim Oanh Land)</strong>{" "}
                    trong vai trò đơn vị phát triển độc quyền là bảo chứng vững chắc nhất cho
                    sự thành công của dự án:
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        icon: "🏆",
                        title: "Hơn 15 năm uy tín trên thị trường BĐS phía Nam",
                        body: "Kim Oanh Group đã phát triển và bàn giao thành công hàng chục nghìn sản phẩm đất nền, nhà phố tại Bình Dương, Đồng Nai và TP.HCM.",
                      },
                      {
                        icon: "💪",
                        title: "Năng lực tài chính vững mạnh",
                        body: "Kim Oanh Land trực tiếp rót nguồn lực tài chính để hoàn thiện hạ tầng, xây dựng cụm tiện ích sân bóng đá, sân pickleball, công viên cây xanh và giải quyết dứt điểm các thủ tục pháp lý cấp sổ cho khách hàng.",
                      },
                      {
                        icon: "🏦",
                        title: "Liên kết các định chế tài chính lớn",
                        body: "Việc các ngân hàng hàng đầu như OCB, Vietcombank đứng ra thẩm định pháp lý và cấp hạn mức cho vay 70% là minh chứng rõ nhất cho thấy hồ sơ pháp lý của The Link City hoàn toàn \"sạch bóng\" và đủ điều kiện thế chấp.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-primary-200 hover:bg-primary-50/30 transition-colors">
                        <span className="text-2xl shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/bang-gia">
                      💰 Xem bảng giá niêm yết chính thức các block LK17A, LK17B →
                    </LinkBtn>
                    <LinkBtn href="/the-link-city/thanh-toan">
                      🧮 Tính toán lịch trả góp vay ngân hàng →
                    </LinkBtn>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS53["5"]}
                    alt="Nhà phố xây dựng hoàn thiện thực tế tại dự án The Link City Dầu Giây Đồng Nai"
                    caption="Nhà phố hiện hữu khang trang khẳng định năng lực triển khai thực tế của Kim Oanh Land."
                    images={images}
                    index={4}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 7: FAQ ── */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">
                  7. Các Câu Hỏi Pháp Lý Cốt Lõi Nhà Đầu Tư Cần Kiểm Tra Trước Khi Xuống Tiền
                </SectionHeading>
                <div className="pt-5 space-y-3">
                  {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
                    <details
                      key={name}
                      className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-primary-300 transition-colors"
                    >
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

              {/* ── Section 8 ── */}
              <section className="mb-12" id="tai-lieu">
                <SectionHeading id="tai-lieu">
                  8. Tải Trọn Bộ Hồ Sơ Pháp Lý PDF & Đăng Ký Thẩm Định Trực Tiếp
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đừng để những thông tin cũ trên internet làm lỡ mất cơ hội sở hữu bất động
                    sản đô thị sổ hồng tại nút giao ngã tư Dầu Giây với giá gốc đợt 1 chỉ từ{" "}
                    <strong className="text-primary-700">1,85 tỷ đồng</strong>.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: "📄", title: "Công văn 2505/UBND-KTN", desc: "Bản scan chính thức văn bản chỉ đạo cấp sổ của UBND tỉnh Đồng Nai" },
                      { icon: "📋", title: "Quy hoạch 1/500", desc: "Bản vẽ phân lô chi tiết, chỉ giới xây dựng và mặt cắt từng phân khu" },
                      { icon: "📜", title: "Mẫu Sổ hồng thực tế", desc: "Hình ảnh Giấy chứng nhận QSDĐ đã cấp, xác nhận tính hợp pháp" },
                    ].map((item) => (
                      <div key={item.icon} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center">
                        <p className="text-2xl mb-2">{item.icon}</p>
                        <p className="font-black text-emerald-800 text-sm mb-1">{item.title}</p>
                        <p className="text-emerald-600 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-primary-200 bg-primary-50 p-6 space-y-3">
                    <p className="font-black text-primary-800 text-base">
                      LIÊN HỆ BỘ PHẬN THẨM ĐỊNH PHÁP LÝ KIM OANH ĐỒNG NAI
                    </p>
                    <div className="space-y-2 text-sm text-primary-700">
                      <p><strong>Dự án:</strong> The Link City Dầu Giây (KDC A1-C1 Đô thị Dầu Giây)</p>
                      <p>
                        <strong>Website:</strong>{" "}
                        <a href="https://kimoanhdongnai.com.vn/the-link-city/phap-ly" className="underline hover:text-primary-900">
                          kimoanhdongnai.com.vn/the-link-city/phap-ly
                        </a>
                      </p>
                      <p><strong>Văn phòng giao dịch:</strong> 268A Phan Trung, P. Tam Hiệp, TP. Biên Hòa, Đồng Nai</p>
                      <p><strong>Văn phòng dự án:</strong> Ngã tư QL1A & QL20, xã Dầu Giây, H. Thống Nhất, Đồng Nai</p>
                      <p>
                        <strong>Hotline:</strong>{" "}
                        <a href="tel:0937587438" className="font-black text-primary-900 hover:underline">0937.587.438</a>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Bản quyền bài viết thuộc về Kim Oanh Đồng Nai — Mọi thông tin sao chép
                      vui lòng trích dẫn nguồn:{" "}
                      <a href="https://kimoanhdongnai.com.vn/the-link-city/phap-ly" className="text-primary-600 underline">
                        kimoanhdongnai.com.vn/the-link-city/phap-ly
                      </a>
                      . Cập nhật: {PUBLISHED}
                    </p>
                  </div>
                </div>
              </section>

              {/* Bài viết liên quan nội tuyến */}
              <section className="mb-12">
                <SectionHeading>Các nội dung liên quan về The Link City</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city",                                                                  label: "The Link City Dầu Giây — Tổng quan dự án" },
                    { href: "/the-link-city/phap-ly",                                                          label: "Pháp lý The Link City — Hồ sơ chính thức" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                                       label: "Tổng quan The Link City Dầu Giây" },
                    { href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",            label: "Bảng giá & Bài toán vay ngân hàng 2026" },
                    { href: "/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026",               label: "Giải pháp an cư gia đình trẻ 2026" },
                    { href: "/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city",                   label: "Đón sóng đô thị hóa Dầu Giây 2026–2030" },
                    { href: "/tin-tuc/nhat-ky-thuc-dia-the-link-city-dau-giay-2026",                          label: "Nhật ký thực địa The Link City 2026" },
                    { href: "/tin-tuc/cam-nang-chon-lo-dat-nen-the-link-city-dau-giay-2026",                   label: "Cẩm nang chọn lô đất nền The Link City" },
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
                  Thông tin pháp lý trong bài được tổng hợp từ các văn bản chính thức có hiệu
                  lực và mang tính tham khảo. Nhà đầu tư nên trực tiếp kiểm tra hồ sơ gốc tại
                  cơ quan nhà nước có thẩm quyền trước khi thực hiện giao dịch. Ban biên tập
                  Kim Oanh Đồng Nai — Cập nhật: {PUBLISHED}
                </p>
              </div>

            </article>

            {/* ── Sidebar ──────────────────────────────────── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 space-y-6">

                {/* Checklist pháp lý */}
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="font-bold text-emerald-800 text-sm mb-4">✅ Checklist pháp lý đã đạt</p>
                  <div className="space-y-2.5">
                    {[
                      "Quyết định giao đất UBND tỉnh",
                      "Hoàn thành 100% tiền sử dụng đất",
                      "Quy hoạch 1/500 được phê duyệt",
                      "Hạ tầng kỹ thuật đã nghiệm thu",
                      "CV 2505/UBND-KTN chỉ đạo cấp sổ",
                      "Ngân hàng OCB, VCB bảo lãnh",
                      "Sổ hồng ODT sở hữu lâu dài",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-emerald-700">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nav nhanh */}
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
                        className="flex items-center justify-between gap-2 text-sm text-slate-600 hover:text-primary-600 hover:translate-x-1 transition-all px-3 py-2 rounded-xl hover:bg-white"
                      >
                        <span>{l.label}</span>
                        <span className="text-slate-300">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bài viết liên quan */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Tổng quan The Link City",       href: "/tin-tuc/tong-quan-the-link-city-dau-giay" },
                      { label: "An cư gia đình trẻ 2026",       href: "/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026" },
                      { label: "Bảng giá & Vay ngân hàng",     href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026" },
                      { label: "Đón sóng đô thị hóa 2026–2030", href: "/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-primary-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-primary-600 text-white p-5">
                  <p className="font-bold text-sm mb-1">Nhận bộ tài liệu pháp lý PDF</p>
                  <p className="text-primary-100 text-xs mb-4">
                    Công văn 2505, quy hoạch 1/500 và mẫu sổ hồng — Gửi ngay qua Zalo/Email.
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

        {/* ── CTA Banner ────────────────────────────────────── */}
        <section className="bg-gradient-to-r from-slate-800 to-primary-700 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl font-black mb-3">
              Pháp lý minh bạch — An tâm xuống tiền tại The Link City
            </h2>
            <p className="text-slate-300 text-base mb-8 leading-relaxed">
              Công văn 2505/UBND-KTN đã bật đèn xanh. Sổ hồng riêng từng nền sở hữu lâu dài.
              Ngân hàng OCB, Vietcombank bảo lãnh 70%. Giá gốc đợt 1 chỉ từ 1,85 tỷ.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/the-link-city/phap-ly"
                className="inline-flex items-center gap-2 bg-white text-slate-800 hover:bg-slate-100 font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Xem hồ sơ pháp lý →
              </a>
              <a
                href="tel:0937587438"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-7 py-3.5 rounded-full transition-all text-sm"
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
              href: "/tin-tuc/giai-phap-an-cu-gia-dinh-tre-the-link-city-dau-giay-2026",
              title: "Giải Pháp An Cư Gia Đình Trẻ 2026 — Từ 12 Triệu/Tháng",
              description: "Vốn 550 triệu, trả góp 12 triệu/tháng sở hữu nhà phố 3 tầng sổ hồng riêng.",
              tag: "Tin dự án",
            },
            {
              href: "/tin-tuc/don-song-do-thi-hoa-dau-giay-2026-2030-the-link-city",
              title: "Đón Sóng Đô Thị Hóa Dầu Giây 2026–2030",
              description: "Bài học Dĩ An tăng 300%, Long Khánh 250% — Cơ hội nhân đôi tài sản.",
              tag: "Phân tích thị trường",
            },
            {
              href: "/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026",
              title: "Bảng Giá The Link City & Bài Toán Vay Ngân Hàng 2026",
              description: "Chi tiết giá từng block, 4 phương thức thanh toán và bảng tính trả nợ.",
              tag: "Tin dự án",
            },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}
