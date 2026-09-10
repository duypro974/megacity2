"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { IMG_NEWS44 } from "@/lib/cloudinary";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const PAGE_URL      = `${BASE_URL}/tin-tuc/bang-gia-the-link-city-dau-giay-bai-toan-vay-ngan-hang-2026`;
const PUBLISHED     = "10/09/2026";
const PUBLISHED_ISO = "2026-09-10";

// ─── JSON-LD ───────────────────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bảng Giá The Link City Dầu Giây 2026 & Bài Toán Vay Mua Đất Nền Chỉ Từ 550 Triệu Vốn Tự Có",
  description:
    "Phân tích chi tiết bảng giá The Link City Dầu Giây đợt 1 năm 2026: Giá từng block LK17A từ 1,85 tỷ, 4 phương thức thanh toán và bài toán vay ngân hàng 70% lãi suất ưu đãi.",
  image: [IMG_NEWS44["1"], IMG_NEWS44["2"], IMG_NEWS44["4"]],
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
    "bảng giá The Link City Dầu Giây, thanh toán The Link City, vay mua The Link City, LK17A The Link City, KDC A1 C1 Dầu Giây bảng giá",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Bảng giá 1,852 tỷ cho lô 95m² đã bao gồm thuế VAT chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mức giá công bố trên hợp đồng đã bao gồm các loại thuế, phí theo quy định bán hàng của chủ đầu tư. Chi tiết các khoản cấu thành giá được thể hiện minh bạch trong phụ lục thanh toán.",
      },
    },
    {
      "@type": "Question",
      name: "Ngân hàng nào đứng ra tài trợ vốn vay cho The Link City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Các ngân hàng đối tác chiến lược lớn như OCB, Vietcombank trực tiếp thẩm định pháp lý dự án và phát hành chính sách tài trợ vốn vay cho khách hàng mua sản phẩm tại The Link City.",
      },
    },
    {
      "@type": "Question",
      name: "Người chưa có hộ khẩu Đồng Nai có được vay mua không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hoàn toàn được. Ngân hàng chỉ xét duyệt dựa trên hồ sơ chứng minh thu nhập thực tế (hợp đồng lao động, sao kê bảng lương, nguồn thu kinh doanh, cho thuê xe, bất động sản khác...) của khách hàng trên toàn quốc.",
      },
    },
    {
      "@type": "Question",
      name: "Tôi có thể chuyển nhượng lại hợp đồng trong khi đang vay ngân hàng không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có thể chuyển nhượng bình thường theo quy trình pháp lý. Người mua mới có thể tất toán khoản vay để rút sổ công chứng hoặc làm thủ tục chuyển tiếp khoản vay sang ngân hàng theo hướng dẫn của chủ đầu tư Kim Oanh.",
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
      name: "Bảng giá The Link City Dầu Giây 2026",
      item: PAGE_URL,
    },
  ],
};

// ─── Lightbox ──────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMG_NEWS44["1"],
    alt: "Bảng giá đất nền phân khu mở bán đợt 1 dự án The Link City Dầu Giây năm 2026",
    caption: "Bảng giá đợt 1 The Link City dao động từ 1,85 tỷ/nền với tiềm năng tăng trưởng vượt trội",
  },
  {
    src: IMG_NEWS44["2"],
    alt: "Sơ đồ phân lô chi tiết phân khu LK17A dự án The Link City Dầu Giây",
    caption: "Các lô LK17A mặt tiền đường N20 có diện tích chuẩn 95m² với tầm giá dễ tiếp cận nhất",
  },
  {
    src: IMG_NEWS44["3"],
    alt: "Tư vấn lịch thanh toán và chính sách chiết khấu mua đất nền The Link City Dầu Giây",
    caption: "Khách hàng được tư vấn phương án dòng tiền phù hợp nhất với điều kiện tài chính cá nhân",
  },
  {
    src: IMG_NEWS44["4"],
    alt: "Bảng tính dòng tiền trả góp vay ngân hàng mua đất nền The Link City Dầu Giây",
    caption: "Bài toán dòng tiền trả góp giảm dần giúp người mua dễ dàng làm chủ tài chính",
  },
  {
    src: IMG_NEWS44["5"],
    alt: "Hạ tầng thực tế hoàn thiện 100 phần trăm tại dự án The Link City Dầu Giây Đồng Nai",
    caption: "Hạ tầng dự án hoàn thành 100% giúp khách hàng yên tâm nhận nền xây dựng ngay",
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
    type === "warn"
      ? "bg-amber-50 border-amber-200 text-amber-800"
      : type === "success"
      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
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

// ─── Data ──────────────────────────────────────────────────────────────────
const PRODUCT_TYPES = [
  {
    no: "01",
    title: "Đất nền nhà phố liên kế",
    sub: "LK17A, LK17B, LK18...",
    color: "amber",
    rows: [
      ["Diện tích phổ biến", "95m² (5×19m) · 100m² (5×20m) · 120m² (6×20m)"],
      ["Vị trí", "Trục đường nội bộ lộ giới 13m – 17m (điển hình: đường N20)"],
      ["Giá niêm yết", "Từ 1,852 tỷ – 2,3 tỷ đồng/nền"],
      ["Phù hợp", "Dòng vốn vừa phải, an cư hoặc đón sóng tăng giá 1-2 năm"],
    ],
  },
  {
    no: "02",
    title: "Lô góc 2 mặt tiền & Trục đường lớn",
    sub: "Vị trí đắc địa nội khu",
    color: "blue",
    rows: [
      ["Diện tích", "120m² – 165m²"],
      ["Vị trí", "Góc giao trục đường nhánh & đường thương mại nội khu"],
      ["Giá bán", "Từ 2,6 tỷ – 3,4 tỷ đồng/nền"],
      ["Phù hợp", "Vừa ở vừa mở quán cà phê, tiệm thuốc, văn phòng"],
    ],
  },
  {
    no: "03",
    title: "Shophouse thương mại",
    sub: "Nhà phố mặt tiền đường đôi",
    color: "slate",
    rows: [
      ["Diện tích đất", "100m² – 140m² (xây 1 trệt 2 lầu đến 1 trệt 3 lầu)"],
      ["Vị trí", "Mặt tiền trục lớn kết nối trực tiếp QL1A & TTTM 2,6ha"],
      ["Giá bán", "Từ 3,8 tỷ – 6,4 tỷ đồng/căn (tùy vị trí, diện tích)"],
      ["Phù hợp", "Kinh doanh thương mại tầng trệt, định cư tầng trên"],
    ],
  },
];

const PAYMENT_METHODS = [
  {
    n: "01",
    title: "Thanh toán chuẩn theo tiến độ hạ tầng",
    tag: "Dòng tiền nhẹ nhàng",
    tagColor: "emerald",
    items: [
      "Đợt 1: Đặt cọc & ký Hợp đồng nguyên tắc — khoảng 20% – 30% giá trị",
      "Các đợt tiếp: Mỗi đợt 5% – 10%, cách nhau 30 – 45 ngày",
      "Đợt cuối: 5% còn lại khi nhận bàn giao Sổ hồng",
      "Ưu điểm: Không dồn vốn một lúc, dòng tiền giãn cách theo tiến độ",
    ],
  },
  {
    n: "02",
    title: "Thanh toán sớm 70% — Chiết khấu cao",
    tag: "Tối đa lợi nhuận",
    tagColor: "amber",
    items: [
      "Thanh toán nhanh từ 70% tổng giá trị trong vòng 30 ngày",
      "Được áp dụng chính sách chiết khấu trừ thẳng vào hợp đồng",
      "Ưa chuộng bởi nhà đầu tư tài chính mạnh",
    ],
  },
  {
    n: "03",
    title: "Thanh toán sớm 95% — Chiết khấu tối đa",
    tag: "Biên lợi nhuận cao nhất",
    tagColor: "amber",
    items: [
      "Thanh toán 95% giá trị trong thời gian ngắn",
      "Nhận mức chiết khấu lãi suất cao nhất trong bộ chính sách",
      "Phù hợp nhà đầu tư có nguồn tiền nhàn rỗi lớn cần tối ưu hóa ngay",
    ],
  },
  {
    n: "04",
    title: "Vay vốn ngân hàng 70% — Tối ưu đòn bẩy",
    tag: "Phổ biến nhất",
    tagColor: "blue",
    items: [
      "Vốn tự có chỉ 30% — khoảng 550 triệu cho lô 1,85 tỷ",
      "Ngân hàng đối tác giải ngân 70% ngay khi đủ điều kiện hồ sơ",
      "Ân hạn nợ gốc & ưu đãi lãi suất trong các năm đầu",
      "Thời hạn vay tối đa 20 năm — gốc + lãi giảm dần hàng tháng",
    ],
  },
];

const REPAYMENT_SCHEDULE = [
  { period: "Tháng đầu tiên",    principal: "5.416.000 VNĐ", interest: "~ 8.645.000 VNĐ", total: "~ 14.060.000 VNĐ" },
  { period: "Cuối năm thứ 1",   principal: "5.416.000 VNĐ", interest: "~ 8.240.000 VNĐ", total: "~ 13.650.000 VNĐ" },
  { period: "Cuối năm thứ 3",   principal: "5.416.000 VNĐ", interest: "~ 7.400.000 VNĐ", total: "~ 12.800.000 VNĐ" },
  { period: "Cuối năm thứ 5",   principal: "5.416.000 VNĐ", interest: "~ 6.500.000 VNĐ", total: "~ 11.900.000 VNĐ" },
  { period: "Năm thứ 10",       principal: "5.416.000 VNĐ", interest: "~ 4.300.000 VNĐ", total: "~ 9.700.000 VNĐ"  },
  { period: "Năm thứ 15",       principal: "5.416.000 VNĐ", interest: "~ 2.100.000 VNĐ", total: "~ 7.500.000 VNĐ"  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function BangGiaTheLinkCityPage() {
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
              <span className="text-slate-500 font-medium line-clamp-1">Bảng giá The Link City Dầu Giây 2026</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
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
              Bảng Giá The Link City Dầu Giây 2026 & Bài Toán Vay Mua Đất Nền Chỉ Từ 550 Triệu Vốn Tự Có
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Phân tích chi tiết giá từng phân khu, 4 phương thức thanh toán linh hoạt và bảng tính
              trả nợ giảm dần 20 năm — giúp bạn chủ động hoàn toàn bài toán tài chính khi mua đất nền
              tại{" "}
              <a href="/the-link-city" className="text-amber-600 font-semibold hover:underline">
                The Link City
              </a>{" "}
              Dầu Giây.
            </p>
          </div>

          {/* Hero image */}
          <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-100 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh bảng giá The Link City Dầu Giây"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG_NEWS44["1"]}
                alt="Bảng giá đất nền phân khu mở bán đợt 1 dự án The Link City Dầu Giây năm 2026"
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
              Bảng giá đợt 1 The Link City dao động từ 1,85 tỷ/nền với tiềm năng tăng trưởng vượt trội
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
                    ["#co-cau",      "1. Cơ cấu bảng giá đợt 1 — rẻ hay đắt?"],
                    ["#chi-tiet",    "2. Chi tiết giá từng phân khu"],
                    ["#thanh-toan",  "3. 4 phương thức thanh toán"],
                    ["#dong-tien",   "4. Bài toán vay ngân hàng 70%"],
                    ["#co-hoi",      "5. So sánh chi phí cơ hội"],
                    ["#don-bay",     "6. Kinh nghiệm đòn bẩy an toàn"],
                    ["#faq",         "7. Câu hỏi thường gặp"],
                    ["#lien-he",     "8. Tư vấn & nhận bảng tính"],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="hover:text-amber-600 transition-colors">{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* ── Section 1: Cơ cấu bảng giá ── */}
              <section className="mb-12" id="co-cau">
                <SectionHeading id="co-cau">
                  1. Cơ Cấu Bảng Giá The Link City Đợt 1 Năm 2026: Rẻ Hay Đắt?
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Khi tìm hiểu một dự án bất động sản đô thị quy mô lớn như{" "}
                    <strong className="text-slate-800">The Link City</strong> (Khu dân cư A1-C1
                    Đô thị Dầu Giây rộng 21ha), câu hỏi đầu tiên của mọi nhà đầu tư là:{" "}
                    <em>"Mức giá đợt 1 này có thực sự tốt so với thị trường và có tiềm năng sinh
                    lời không?"</em>
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Theo bảng giá niêm yết chính thức từ đơn vị phát triển{" "}
                    <strong className="text-slate-800">Kim Oanh Land</strong> đầu năm 2026, các
                    sản phẩm đất nền tại The Link City có mức giá khởi điểm từ{" "}
                    <strong className="text-amber-600">1.852.500.000 VNĐ/nền</strong> (cho diện
                    tích tiêu chuẩn 95m²). Quy đổi ra đơn giá mét vuông, mức giá dao động khoảng{" "}
                    <strong className="text-slate-800">19,5 – 22,5 triệu đồng/m²</strong>.
                  </p>

                  <p className="text-slate-700 font-bold text-sm">Mức giá này đã bao gồm:</p>
                  <div className="space-y-2.5">
                    {[
                      "Giá trị quyền sử dụng đất ở tại đô thị (sở hữu lâu dài)",
                      "100% chi phí đầu tư hạ tầng đồng bộ: đường nhựa asphalt, vỉa hè lót đá, điện âm, nước máy, viễn thông ngầm",
                      "Chi phí tiện ích công viên cảnh quan, cây xanh và các thủ tục pháp lý ra sổ đỏ",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                        <span className="text-emerald-600 font-bold text-lg leading-none mt-0.5">✓</span>
                        <p className="text-emerald-700 text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  <InfoBox type="warn">
                    <strong>📌 Nhận định chuyên gia:</strong> Nếu so sánh với đất thổ cư trong
                    các ngõ hẻm tại xã Dầu Giây hiện đang giao dịch tự do từ{" "}
                    <strong>20 – 25 triệu/m²</strong> (đường hẹp 4-5m, không có vỉa hè hay tiện
                    ích công viên), thì mức giá của The Link City là rất hấp dẫn và còn biên độ
                    tăng trưởng rất lớn khi toàn bộ đại đô thị 149ha đi vào hoàn thiện.
                  </InfoBox>
                </div>
              </section>

              {/* ── Section 2: Chi tiết phân khu ── */}
              <section className="mb-12" id="chi-tiet">
                <SectionHeading id="chi-tiet">
                  2. Chi Tiết Giá Bán Từng Phân Khu: Đất Nền Liên Kế, Lô Góc & Shophouse
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Dự án The Link City cung cấp tổng cộng{" "}
                    <strong className="text-slate-800">1.397 sản phẩm</strong> với cơ cấu diện
                    tích và tầm giá đa dạng, phù hợp cho cả nhu cầu tích lũy tài sản lẫn kinh
                    doanh thương mại:
                  </p>

                  <div className="space-y-5">
                    {PRODUCT_TYPES.map((p) => {
                      const border = p.color === "amber" ? "border-amber-200" : p.color === "blue" ? "border-blue-200" : "border-slate-200";
                      const bg     = p.color === "amber" ? "bg-amber-50"     : p.color === "blue" ? "bg-blue-50"     : "bg-slate-50";
                      const hd     = p.color === "amber" ? "text-amber-800"  : p.color === "blue" ? "text-blue-800"  : "text-slate-800";
                      const sub    = p.color === "amber" ? "text-amber-600"  : p.color === "blue" ? "text-blue-600"  : "text-slate-500";
                      const cell   = p.color === "amber" ? "text-amber-700"  : p.color === "blue" ? "text-blue-700"  : "text-slate-600";
                      return (
                        <div key={p.no} className={`rounded-2xl border ${border} ${bg} overflow-hidden`}>
                          <div className={`px-5 py-3 border-b ${border}`}>
                            <span className={`font-black text-base ${hd}`}>{p.no}. {p.title}</span>
                            <span className={`ml-2 text-xs ${sub}`}>{p.sub}</span>
                          </div>
                          <div className="divide-y divide-slate-100/80">
                            {p.rows.map(([label, value]) => (
                              <div key={label} className="flex items-start gap-3 px-5 py-2.5">
                                <span className="text-xs font-semibold text-slate-500 w-36 shrink-0 mt-0.5">{label}</span>
                                <span className={`text-sm ${cell}`}>{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/bang-gia">
                      💰 Tra cứu mã lô cụ thể (DG3.LK17A-42...) →
                    </LinkBtn>
                    <LinkBtn href="/the-link-city/mat-bang">
                      📐 Xem bản đồ vị trí từng lô →
                    </LinkBtn>
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS44["2"]}
                    alt="Sơ đồ phân lô chi tiết phân khu LK17A dự án The Link City Dầu Giây"
                    caption="Các lô LK17A mặt tiền đường N20 có diện tích chuẩn 95m² với tầm giá dễ tiếp cận nhất"
                    images={images}
                    index={1}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 3: 4 phương thức thanh toán ── */}
              <section className="mb-12" id="thanh-toan">
                <SectionHeading id="thanh-toan">
                  3. Phân Tích 4 Phương Thức Thanh Toán Từ Chủ Đầu Tư Kim Oanh
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhằm hỗ trợ tối đa bài toán dòng tiền cho khách hàng, Tập đoàn Kim Oanh
                    triển khai <strong className="text-slate-800">4 phương thức thanh toán</strong>{" "}
                    linh hoạt theo từng nhu cầu tài chính:
                  </p>

                  {/* Method highlight box */}
                  <div className="rounded-2xl border border-amber-300 bg-amber-50 overflow-hidden">
                    <div className="bg-amber-500 text-white px-5 py-3 text-center">
                      <p className="font-black text-sm tracking-wide uppercase">
                        4 Phương Thức Thanh Toán The Link City Năm 2026
                      </p>
                    </div>
                    <div className="divide-y divide-amber-200">
                      {[
                        "PTTT 01 — Chuẩn theo tiến độ (Chia thành nhiều đợt nhẹ nhàng)",
                        "PTTT 02 — Thanh toán sớm 70% (Nhận chiết khấu thanh toán nhanh)",
                        "PTTT 03 — Thanh toán sớm 95% (Nhận mức chiết khấu tối đa)",
                        "PTTT 04 — Vay vốn ngân hàng 70% (Vốn tự có 30%, ân hạn gốc & ưu đãi lãi)",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 px-5 py-3">
                          <span className="text-amber-600 font-black text-sm w-5 shrink-0">{i + 1}</span>
                          <span className="text-amber-800 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {PAYMENT_METHODS.map((m) => {
                      const tagColors: Record<string, string> = {
                        emerald: "bg-emerald-100 text-emerald-700",
                        amber:   "bg-amber-100 text-amber-700",
                        blue:    "bg-blue-100 text-blue-700",
                      };
                      return (
                        <div key={m.n} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl font-black text-amber-200 leading-none w-8 shrink-0">{m.n}</span>
                            <div>
                              <p className="font-black text-slate-800 text-sm">{m.title}</p>
                              <span className={`inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full mt-1 ${tagColors[m.tagColor]}`}>
                                {m.tag}
                              </span>
                            </div>
                          </div>
                          <ul className="space-y-1.5 ml-11">
                            {m.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                                <span className="text-amber-400 flex-shrink-0 mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS44["3"]}
                    alt="Tư vấn lịch thanh toán và chính sách chiết khấu mua đất nền The Link City Dầu Giây"
                    caption="Khách hàng được tư vấn phương án dòng tiền phù hợp nhất với điều kiện tài chính cá nhân"
                    images={images}
                    index={2}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── Section 4: Bài toán dòng tiền ── */}
              <section className="mb-12" id="dong-tien">
                <SectionHeading id="dong-tien">
                  4. Bài Toán Dòng Tiền Thực Chiến: Vay 70% Ngân Hàng Trả Góp Bao Nhiêu Mỗi Tháng?
                </SectionHeading>
                <div className="pt-5 space-y-6">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đây là phần được nhiều khách hàng quan tâm nhất. Hãy cùng bóc tách ví dụ
                    tính toán thực tế cho sản phẩm đất nền tiêu chuẩn tại The Link City:
                  </p>

                  {/* Loan params */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
                    <div className="bg-slate-700 text-white px-5 py-3">
                      <p className="font-bold text-sm">Thông Số Khoản Vay Giả Định</p>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {[
                        ["Sản phẩm",                   "Lô đất nền 95m² — Block LK17A"],
                        ["Tổng giá trị có VAT",        "1.852.500.000 VNĐ"],
                        ["Vốn tự có 30%",              "555.750.000 VNĐ (~550 triệu)"],
                        ["Số tiền vay ngân hàng 70%",  "1.296.750.000 VNĐ (~1,3 tỷ)"],
                        ["Thời hạn vay",               "20 năm (240 tháng)"],
                        ["Lãi suất ưu đãi năm đầu",   "~7,5% – 8,0%/năm (sau ưu đãi thả nổi)"],
                        ["Phương thức trả nợ",         "Gốc chia đều / Lãi tính trên dư nợ giảm dần"],
                      ].map(([label, value], i) => (
                        <div key={label} className={`flex items-center gap-4 px-5 py-3 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}>
                          <span className="text-slate-500 text-sm w-52 shrink-0">{label}</span>
                          <span className="font-semibold text-slate-800 text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Repayment schedule */}
                  <div>
                    <p className="font-bold text-slate-800 text-sm mb-3">
                      Bảng Dự Tính Lịch Trả Nợ Chi Tiết Theo Dư Nợ Giảm Dần:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-slate-200 rounded-2xl overflow-hidden min-w-[520px]">
                        <thead>
                          <tr className="bg-amber-500 text-white">
                            <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide">Giai đoạn</th>
                            <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wide">Tiền gốc/tháng</th>
                            <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wide">Tiền lãi/tháng</th>
                            <th className="text-right px-4 py-3 text-xs font-bold uppercase tracking-wide">Tổng/tháng</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {REPAYMENT_SCHEDULE.map((row, i) => (
                            <tr key={row.period} className={i === 0 ? "bg-amber-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                              <td className={`px-4 py-3 text-sm font-medium ${i === 0 ? "text-amber-800" : "text-slate-700"}`}>
                                {i === 0 && "🏁 "}{row.period}
                              </td>
                              <td className="px-4 py-3 text-right text-slate-600 text-sm">{row.principal}</td>
                              <td className="px-4 py-3 text-right text-slate-600 text-sm">{row.interest}</td>
                              <td className={`px-4 py-3 text-right text-sm font-bold ${i === 0 ? "text-amber-700" : "text-slate-700"}`}>
                                {row.total}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-slate-400 italic mt-2">
                      * Bảng tính mang tính tham khảo. Lãi suất thực tế phụ thuộc chính sách từng ngân hàng tại thời điểm giải ngân.
                    </p>
                  </div>

                  {/* Assessment */}
                  <div className="space-y-3">
                    <p className="font-bold text-slate-800 text-sm">Đánh giá mức độ an toàn tài chính:</p>
                    {[
                      { icon: "💡", text: "Gánh nặng chi trả ban đầu cao nhất: khoảng 13,5 – 14 triệu đồng/tháng và số tiền này sẽ giảm dần theo thời gian." },
                      { icon: "✅", text: "Nếu tổng thu nhập ổn định của gia đình (cả 2 vợ chồng) từ 28 – 35 triệu đồng/tháng, khoản vay này hoàn toàn an toàn (chiếm dưới 50% tổng thu nhập hàng tháng)." },
                      { icon: "📈", text: "Sau 2 – 3 năm, khi giá đất The Link City tăng trưởng theo hạ tầng cao tốc và sân bay Long Thành, nhà đầu tư có thể chuyển nhượng chốt lời hoặc tất toán sớm khoản vay với mức phí phạt tất toán trước hạn rất thấp (thường chỉ 1% – 2%)." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                        <span className="text-lg shrink-0 mt-0.5">{item.icon}</span>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS44["4"]}
                    alt="Bảng tính dòng tiền trả góp vay ngân hàng mua đất nền The Link City Dầu Giây"
                    caption="Bài toán dòng tiền trả góp giảm dần giúp người mua dễ dàng làm chủ tài chính"
                    images={images}
                    index={3}
                    onOpen={openLightbox}
                  />

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/bang-gia">
                      🧮 Dùng công cụ tính dòng tiền The Link City →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 5: Chi phí cơ hội ── */}
              <section className="mb-12" id="co-hoi">
                <SectionHeading id="co-hoi">
                  5. So Sánh Chi Phí Cơ Hội: Gửi Tiết Kiệm 1,85 Tỷ Hay Mua Đất The Link City?
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đặt bài toán nếu bạn đang có sẵn khoản tiền mặt khoảng{" "}
                    <strong className="text-slate-800">1,85 tỷ đồng</strong> trong năm 2026:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Kịch bản A */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="font-black text-slate-700 text-sm mb-3">
                        🏦 Kịch Bản A: Gửi Tiết Kiệm Ngân Hàng
                      </p>
                      <div className="space-y-2">
                        {[
                          ["Lãi suất tiền gửi", "~5,5% – 6,0%/năm"],
                          ["Lợi nhuận sau 3 năm", "~300 – 350 triệu đồng"],
                          ["Rủi ro", "Lạm phát làm giảm sức mua thực tế"],
                        ].map(([label, value]) => (
                          <div key={label} className="flex items-start justify-between gap-3">
                            <span className="text-slate-500 text-xs">{label}</span>
                            <span className="text-slate-700 text-xs font-semibold text-right">{value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-200">
                        <p className="text-slate-500 text-xs">Sau 3 năm: ~2,15 – 2,2 tỷ đồng</p>
                      </div>
                    </div>

                    {/* Kịch bản B */}
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                      <p className="font-black text-amber-800 text-sm mb-3">
                        🏙️ Kịch Bản B: Đầu Tư Đất Nền Sổ Đỏ The Link City
                      </p>
                      <div className="space-y-2">
                        {[
                          ["Tài sản thực", "Sổ hồng lâu dài, ngã tư QL1A – QL20"],
                          ["Tăng trưởng dự phóng", "15% – 25%/năm"],
                          ["Giá trị sau 3 năm", "2,7 tỷ – 3,2 tỷ đồng"],
                        ].map(([label, value]) => (
                          <div key={label} className="flex items-start justify-between gap-3">
                            <span className="text-amber-600 text-xs">{label}</span>
                            <span className="text-amber-800 text-xs font-bold text-right">{value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-amber-200">
                        <p className="text-amber-700 text-xs font-semibold">
                          3 xung lực tăng giá: Cao tốc + Sân bay LT + Cư dân lấp đầy
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border-l-4 border-amber-400 bg-amber-50 px-5 py-4">
                    <p className="text-amber-800 text-sm leading-relaxed">
                      Rõ ràng, việc bỏ tiền vào một bất động sản đã có{" "}
                      <strong>sổ hồng riêng từng nền</strong> và{" "}
                      <strong>hạ tầng hoàn thiện</strong> như The Link City mang lại sự an tâm
                      tuyệt đối về mặt giữ tiền và tỷ suất sinh lời vượt trội hơn hẳn so với
                      kênh gửi tiết kiệm.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <LinkBtn href="/the-link-city/phap-ly">
                      📑 Kiểm chứng hồ sơ pháp lý & quyết định giao đất →
                    </LinkBtn>
                  </div>
                </div>
              </section>

              {/* ── Section 6: Đòn bẩy an toàn ── */}
              <section className="mb-12" id="don-bay">
                <SectionHeading id="don-bay">
                  6. Kinh Nghiệm Dùng Đòn Bẩy Tài Chính An Toàn Khi Mua Đất Nền Dầu Giây
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Để đầu tư bất động sản không trở thành gánh nặng áp lực trả nợ, các chuyên
                    gia tài chính khuyến nghị{" "}
                    <strong className="text-slate-800">3 nguyên tắc "vàng"</strong> sau:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        n: "01",
                        title: "Không vay quá 50% nếu thu nhập bấp bênh",
                        body: "Dù ngân hàng hỗ trợ tối đa 70%, nhưng nếu công việc của bạn mang tính mùa vụ, tỷ lệ vay lý tưởng nhất là từ 30% – 50% giá trị tài sản.",
                      },
                      {
                        n: "02",
                        title: "Dự phòng quỹ trả nợ khẩn cấp 6 tháng",
                        body: "Luôn giữ lại một khoản tương đương 6 tháng tiền gốc + lãi trong tài khoản tiết kiệm để phòng trường hợp biến động về thu nhập.",
                      },
                      {
                        n: "03",
                        title: "Ưu tiên gói vay thời hạn dài nhất (20 năm)",
                        body: "Vay thời gian càng dài thì số tiền gốc chia ra mỗi tháng càng nhỏ, giúp bạn linh hoạt dòng tiền sinh hoạt. Khi có khoản thưởng hoặc tiền về đột xuất, bạn hoàn toàn có thể trả nợ trước hạn.",
                      },
                    ].map((item) => (
                      <div key={item.n} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <span className="text-3xl font-black text-amber-200 leading-none w-10 shrink-0">{item.n}</span>
                        <div>
                          <p className="font-black text-slate-800 text-sm mb-1">{item.title}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <ArticleFigure
                    src={IMG_NEWS44["5"]}
                    alt="Hạ tầng thực tế hoàn thiện 100 phần trăm tại dự án The Link City Dầu Giây Đồng Nai"
                    caption="Hạ tầng dự án hoàn thành 100% giúp khách hàng yên tâm nhận nền xây dựng ngay"
                    images={images}
                    index={4}
                    onOpen={openLightbox}
                  />
                </div>
              </section>

              {/* ── FAQ ── */}
              <section className="mb-12" id="faq">
                <SectionHeading id="faq">
                  7. Các Câu Hỏi Thường Gặp Về Giá Bán & Thủ Tục Vay Vốn
                </SectionHeading>
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

              {/* ── Section 8: Liên hệ ── */}
              <section className="mb-12" id="lien-he">
                <SectionHeading id="lien-he">
                  8. Tải Bảng Tính Excel Dòng Tiền & Đăng Ký Tư Vấn Phương Án Vay
                </SectionHeading>
                <div className="pt-5 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Để hỗ trợ Quý khách hàng lập kế hoạch tài chính chuẩn xác nhất cho từng mã
                    lô cụ thể, bộ phận tư vấn tài chính Kim Oanh Đồng Nai sẵn sàng cung cấp:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: "📊", title: "Bảng tính Excel", desc: "Dòng tiền chi tiết từng tháng cho mã lô bạn quan tâm" },
                      { icon: "💼", title: "Giỏ hàng đợt 1", desc: "Bảng báo giá niêm yết các block đẹp nhất còn hàng" },
                      { icon: "🏦", title: "Thẩm định vay miễn phí", desc: "Hỗ trợ hồ sơ vay ngân hàng trong vòng 24 giờ" },
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
                      LIÊN HỆ BỘ PHẬN TƯ VẤN TÀI CHÍNH DỰ ÁN
                    </p>
                    <div className="space-y-2 text-sm text-amber-700">
                      <p>
                        <strong>Website:</strong>{" "}
                        <a href="https://kimoanhdongnai.com.vn/the-link-city" className="underline hover:text-amber-900">
                          kimoanhdongnai.com.vn/the-link-city
                        </a>
                      </p>
                      <p>
                        <strong>Văn phòng giao dịch:</strong> 268A Phan Trung, Phường Tam Hiệp, TP. Biên Hòa, Tỉnh Đồng Nai
                      </p>
                    </div>
                  </div>

                  <InfoBox>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Bản quyền bài viết thuộc về Kim Oanh Đồng Nai — Mọi thông tin sao chép
                      vui lòng trích dẫn nguồn:{" "}
                      <a href="https://kimoanhdongnai.com.vn/the-link-city/bang-gia" className="text-amber-600 underline">
                        kimoanhdongnai.com.vn/the-link-city/bang-gia
                      </a>
                    </p>
                  </InfoBox>
                </div>
              </section>

              {/* Tìm hiểu thêm */}
              <section className="mb-12">
                <SectionHeading>Các nội dung liên quan về The Link City</SectionHeading>
                <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/the-link-city",                                               label: "The Link City Dầu Giây — Tổng quan dự án" },
                    { href: "/the-link-city/bang-gia",                                      label: "Bảng giá The Link City mới nhất" },
                    { href: "/the-link-city/mat-bang",                                      label: "Mặt bằng phân lô The Link City" },
                    { href: "/the-link-city/phap-ly",                                       label: "Pháp lý sổ hồng The Link City" },
                    { href: "/the-link-city/tien-do",                                       label: "Tiến độ thực tế The Link City" },
                    { href: "/the-link-city/tien-ich",                                      label: "Tiện ích nội khu The Link City" },
                    { href: "/tin-tuc/tong-quan-the-link-city-dau-giay",                    label: "Tổng quan The Link City Dầu Giây" },
                    { href: "/the-link-city/thanh-toan",                                    label: "Chính sách thanh toán The Link City" },
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
                    Với mức giá khởi điểm chỉ từ{" "}
                    <strong className="text-slate-800">1,85 tỷ đồng/nền</strong>, 4 phương thức
                    thanh toán linh hoạt và khả năng vay ngân hàng lên đến 70%, The Link City
                    Dầu Giây đang là một trong số ít dự án đất nền đô thị có sổ hồng tại Đồng
                    Nai thực sự nằm trong tầm tay của người mua thu nhập trung bình.
                  </p>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Quan trọng hơn, đây là khoản đầu tư vào một tài sản thực — có sổ hồng, có
                    hạ tầng hoàn thiện 100%, có vị trí đắc địa tại "phễu giao thông" Dầu Giây —
                    với tỷ suất sinh lời tiềm năng cao hơn nhiều lần so với kênh gửi tiết kiệm
                    truyền thống.
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 mb-10">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Tuyên bố miễn trách nhiệm</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thông tin trong bài được tổng hợp từ các nguồn công khai và mang tính tham
                  khảo. Bảng tính lãi suất là ví dụ minh họa, không phải cam kết của ngân hàng.
                  Cần đối chiếu thông tin chính thức trước khi đưa ra quyết định giao dịch.
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

                {/* Quick price summary */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-bold text-amber-800 text-sm mb-3">Giá tham khảo nhanh</p>
                  <div className="space-y-2">
                    {[
                      ["Liên kế 95m²", "từ 1,85 tỷ"],
                      ["Liên kế 100m²", "1,95 – 2,2 tỷ"],
                      ["Lô góc 120-150m²", "2,6 – 3,4 tỷ"],
                      ["Shophouse", "3,8 – 6,4 tỷ"],
                    ].map(([type, price]) => (
                      <div key={type} className="flex items-center justify-between gap-2">
                        <span className="text-amber-700 text-xs">{type}</span>
                        <span className="text-amber-900 text-xs font-bold">{price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-800 text-sm mb-3">Bài viết liên quan</p>
                  <div className="space-y-3">
                    {[
                      { label: "Tổng quan The Link City Dầu Giây",   href: "/tin-tuc/tong-quan-the-link-city-dau-giay" },
                      { label: "Pháp lý sổ hồng The Link City",       href: "/the-link-city/phap-ly" },
                      { label: "Mặt bằng phân lô The Link City",      href: "/the-link-city/mat-bang" },
                      { label: "Tiện ích nội khu The Link City",      href: "/the-link-city/tien-ich" },
                    ].map((l) => (
                      <a key={l.href} href={l.href} className="block text-sm text-slate-600 hover:text-amber-600 transition-colors">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-amber-500 text-white p-5">
                  <p className="font-bold text-sm mb-1">Nhận bảng giá & tư vấn vay</p>
                  <p className="text-amber-100 text-xs mb-4">
                    Nhận file Excel dòng tiền và tư vấn phương án vay phù hợp nhất.
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
              Bạn muốn nhận bảng giá chi tiết & bảng tính dòng tiền?
            </h2>
            <p className="text-slate-600 text-base mb-8 leading-relaxed">
              Liên hệ ngay để nhận file Excel dòng tiền, bảng giá từng mã lô và được hỗ trợ
              thẩm định hồ sơ vay ngân hàng miễn phí trong 24 giờ.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/the-link-city/bang-gia"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 text-sm"
              >
                Xem bảng giá The Link City →
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
              href: "/the-link-city/phap-ly",
              title: "Pháp Lý The Link City: Sổ Hồng Từng Nền Đã Sẵn Sàng",
              description: "Toàn bộ hồ sơ pháp lý, quyết định phê duyệt và quy trình cấp sổ hồng.",
              tag: "The Link City",
            },
            {
              href: "/tin-tuc/so-sanh-mega-city-2-va-dat-tho-cu-dan-nhon-trach",
              title: "So Sánh Mega City 2 Và Đất Thổ Cư Dân Nhơn Trạch",
              description: "Phân tích 5 tiêu chí: hạ tầng, pháp lý, xây dựng, tiện ích và thanh khoản.",
              tag: "Tin dự án",
            },
            {
              href: "/the-link-city",
              title: "The Link City Dầu Giây – Tổng Quan Dự Án",
              description: "Thông tin đầy đủ về quy mô, pháp lý, hạ tầng và sản phẩm The Link City.",
              tag: "The Link City",
            },
          ]}
        />
        <CorpFooter />
      </div>
    </>
  );
}
