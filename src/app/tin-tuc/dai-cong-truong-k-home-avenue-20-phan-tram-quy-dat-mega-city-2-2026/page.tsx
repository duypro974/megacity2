"use client";

import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import RelatedContent from "@/components/RelatedContent";
import ScrollAnimator from "@/components/ScrollAnimator";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import MegaCity2LatestProgressShowcase from "@/components/megacity2/MegaCity2LatestProgressShowcase";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Building2,
  HardHat,
  TrendingUp,
  FileText,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const BASE_URL      = "https://kimoanhdongnai.com.vn";
const SLUG          = "dai-cong-truong-k-home-avenue-20-phan-tram-quy-dat-mega-city-2-2026";
const PAGE_URL      = `${BASE_URL}/tin-tuc/${SLUG}`;
const PUBLISHED     = "23/11/2026";
const PUBLISHED_ISO = "2026-11-23";

// ─── Cloudinary CDN Assets ──────────────────────────────────────────────────
const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_1440,c_limit";

const IMAGES = {
  hero:     `${CDN}/megacity2/progress-2026/toan-canh-k-home-avenue-mega-city-2-20-phan-tram-quy-dat.jpg`,
  cauThap:  `${CDN}/megacity2/progress-2026/cau-thap-handong-noxh-k-home-avenue.jpg`,
  congChao: `${CDN}/megacity2/progress-2026/cong-chao-kim-oanh-group-mega-city-2.jpg`,
  matBang:  `${CDN}/megacity2/progress-2026/thuc-dia-mat-bang-mega-city-2-nhon-trach.jpg`,
  hangRao:  `${CDN}/megacity2/progress-2026/hang-rao-du-an-k-home-avenue-nhon-trach.jpg`,
};

// ─── JSON-LD Structured Data ────────────────────────────────────────────────
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline:
    "Đại Công Trường K-Home Avenue Rầm Rộ Thi Công Trên 20% Quỹ Đất Mega City 2: Thực Địa & Đòn Bẩy Đất Nền 23/11/2026",
  description:
    "Ghi nhận thực tế ngày 23/11/2026 tại Mega City 2 Nhơn Trạch: Tổng thầu Handong E&C vận hành 2 cẩu tháp thi công NOXH K-Home Avenue trên 20% quỹ đất dự án (QĐ 2979). Hạ tầng đất nền hoàn thiện, đòn bẩy kích hoạt thanh khoản đô thị.",
  image: [IMAGES.hero, IMAGES.cauThap, IMAGES.congChao, IMAGES.matBang],
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
    "tiến độ mega city 2, k-home avenue mega city 2, 20% quỹ đất mega city 2, nhà ở xã hội k-home avenue, handong e&c mega city 2, pháp lý quyết định 2979, đất nền mega city 2 nhơn trạch",
  about: {
    "@type": "RealEstateListing",
    name: "Mega City 2 Nhơn Trạch",
    url: `${BASE_URL}/mega-city-2`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Khu Nhà ở xã hội K-Home Avenue có quan hệ gì với dự án Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "K-Home Avenue là phân khu nhà ở xã hội được trích từ 20% quỹ đất ở của dự án Mega City 2 (khoảng gần 9 ha) theo đúng phê duyệt tại Quyết định giao đất số 2979/QĐ-UBND của UBND tỉnh Đồng Nai. Dự án do Kim Oanh Group đầu tư phát triển nhằm hiện thực hóa cam kết an cư xã hội.",
      },
    },
    {
      "@type": "Question",
      name: "Tiến độ thi công thực tế K-Home Avenue và đất nền Mega City 2 hiện tại (23/11/2026) ra sao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ghi nhận ngày 23/11/2026, tổng thầu Handong E&C đang vận hành 2 cẩu tháp lớn, thi công cốt thép và cốp pha đổ sàn các tầng nổi phân khu K-Home Avenue. Song song đó, hạ tầng đất nền Mega City 2 (đường nhựa nội khu, vỉa hè lát gạch, hệ thống thoát nước mưa và cây xanh) đã hoàn thành cơ bản ~95%.",
      },
    },
    {
      "@type": "Question",
      name: "Việc xây dựng NOXH K-Home Avenue tác động thế nào đến giá trị đất nền Mega City 2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khi hơn 1.000 căn hộ K-Home Avenue bàn giao sẽ đón hàng ngàn cư dân về sinh sống, kích hoạt ngay hệ thống shophouse, thương mại dịch vụ sầm uất. Đất nền xung quanh từ một khu đô thị chờ đón dân sẽ trở thành trung tâm giao thương sầm uất, đẩy biên độ tăng giá và tính thanh khoản lên cao đột biến.",
      },
    },
    {
      "@type": "Question",
      name: "Tình hình pháp lý và lộ trình cấp sổ hồng của Mega City 2 hiện nay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án đã có quyết định giao đất số 2979/QĐ-UBND của UBND tỉnh Đồng Nai, quy hoạch 1/500 phê duyệt hoàn chỉnh. Việc triển khai thi công rầm rộ khu NOXH và hoàn thiện hạ tầng kỹ thuật là điều kiện tiên quyết để nghiệm thu toàn khu, tiến tới hoàn tất thủ tục cấp sổ hồng riêng từng nền cho khách hàng.",
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
    { "@type": "ListItem", position: 3, name: "Đại công trường K-Home Avenue trên 20% quỹ đất Mega City 2", item: PAGE_URL },
  ],
};

// ─── Lightbox Images ────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  {
    src: IMAGES.hero,
    alt: "Đại công trường NOXH K-Home Avenue trên 20% quỹ đất dự án Mega City 2",
    caption: "Toàn cảnh công trường NOXH K-Home Avenue vươn cao với 2 cẩu tháp Handong E&C hoạt động liên tục.",
  },
  {
    src: IMAGES.cauThap,
    alt: "Tổng thầu Handong E&C và Kim Oanh thi công kết cấu tầng nổi K-Home Avenue",
    caption: "Cận cảnh 2 cẩu tháp và lưới bao che an toàn, công nhân thi công cốt thép các tầng nổi.",
  },
  {
    src: IMAGES.congChao,
    alt: "Biểu tượng Kim Oanh Group và quảng trường cảnh quan tại Mega City 2",
    caption: "Cổng chào biểu tượng Kim Oanh Group tại Mega City 2, hàng dừa cảnh quan và quảng trường lát đá sạch đẹp.",
  },
  {
    src: IMAGES.matBang,
    alt: "Mặt bằng đất nền Mega City 2 kết nối trực tiếp công trường NOXH K-Home Avenue",
    caption: "Hạ tầng đường nội khu trải nhựa, vỉa hè lát gạch và các lô đất nền vuông vắn liền kề khối căn hộ NOXH.",
  },
  {
    src: IMAGES.hangRao,
    alt: "Hàng rào nhận diện thương hiệu K-Home Avenue mặt tiền đường nội khu Mega City 2",
    caption: "Hàng rào nhận diện chính thức K-Home Avenue mở lối an cư dọc theo tuyến đường nội bộ rộng rãi.",
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mt-10 mb-4 pb-3 border-b-2 border-emerald-500 scroll-mt-24"
    >
      {children}
    </h2>
  );
}

function StatCard({ num, label, sub }: { num: string; label: string; sub: string }) {
  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-center shadow-xs">
      <div className="text-2xl sm:text-3xl font-black text-emerald-600 mb-1 tracking-tight">{num}</div>
      <div className="text-xs sm:text-sm font-bold text-slate-800 mb-0.5">{label}</div>
      <div className="text-[11px] text-slate-500 leading-tight">{sub}</div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function KHomeAvenueMegaCity2ProgressNewsPage() {
  const { openLightbox, LightboxPortal } = useLightbox(LIGHTBOX_IMAGES);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {LightboxPortal}
      <ScrollAnimator />
      <CorpHeader solid />

      <main className="bg-white min-h-screen pt-20">
        {/* Breadcrumb & Hero Header */}
        <div className="bg-gradient-to-b from-emerald-50/60 via-slate-50/30 to-white border-b border-slate-100 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-4 flex-wrap">
              <Link href="/" className="hover:text-emerald-700 transition-colors">Trang chủ</Link>
              <span>/</span>
              <Link href="/tin-tuc" className="hover:text-emerald-700 transition-colors">Tin tức</Link>
              <span>/</span>
              <Link href="/mega-city-2" className="hover:text-emerald-700 transition-colors">Mega City 2</Link>
              <span>/</span>
              <span className="text-slate-700 font-medium line-clamp-1">K-Home Avenue 20% quỹ đất</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span className="inline-flex items-center gap-1 bg-red-600 text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                <Sparkles className="w-3 h-3" /> Tin nóng thực địa
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full">
                Tiến độ 23/11/2026
              </span>
              <span className="bg-blue-100 text-blue-800 text-[11px] font-bold px-2.5 py-1 rounded-full">
                Pháp lý QĐ 2979
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
              Đại Công Trường K-Home Avenue Rầm Rộ Thi Công Trên 20% Quỹ Đất Mega City 2: Thực Địa &amp; Đòn Bẩy Đất Nền Mới Nhất 23/11/2026
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-2">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" /> Ngày cập nhật: <strong>{PUBLISHED}</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> 6 phút đọc
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> Phú Hội, Nhơn Trạch, Đồng Nai
              </span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <StatCard num="20%" label="Quỹ đất trích lập" sub="Theo QĐ 2979 UBND tỉnh" />
            <StatCard num="2 Cẩu" label="Cẩu tháp Handong" sub="Vận hành liên tục 24/7" />
            <StatCard num="1.000+" label="Căn hộ NOXH" sub="Quy mô dân số sầm uất" />
            <StatCard num="~95%" label="Hạ tầng đất nền" sub="Đường nhựa, điện âm sẵn sàng" />
          </div>

          {/* Sapo Lead */}
          <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-600 rounded-r-2xl mb-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-slate-900 mb-2">
              Sáng nay, ngày {PUBLISHED}, thị trường bất động sản Nhơn Trạch ghi nhận nhịp độ thi công sôi động chưa từng có tại dự án{" "}
              <Link href="/mega-city-2" className="text-emerald-700 underline font-bold hover:text-emerald-800">
                Khu đô thị Mega City 2
              </Link>.
            </p>
            <p>
              Điểm nhấn chấn động giới đầu tư chính là <strong>đại công trường Nhà ở xã hội (NOXH) K-Home Avenue</strong> — phân khu được trích lập từ <strong>20% quỹ đất nhà ở</strong> của Mega City 2 theo đúng{" "}
              <Link href="/tin-tuc/quyet-dinh-2979-giao-dat-mega-city-2" className="text-emerald-700 font-bold hover:underline">
                Quyết định giao đất số 2979/QĐ-UBND
              </Link>{" "}
              của UBND tỉnh Đồng Nai. Hai cẩu tháp khổng lồ của tổng thầu quốc tế <strong>Handong E&amp;C</strong> đang ngày đêm vươn cao đổ sàn các tầng nổi, tạo lực đẩy cực lớn giúp giá trị các lô đất nền xung quanh gia tăng phi mã.
            </p>
          </div>

          {/* Figure 1: Hero construction image */}
          <div className="mb-10">
            <ArticleFigure
              src={IMAGES.hero}
              alt="Toàn cảnh công trường K-Home Avenue trên 20% quỹ đất Mega City 2"
              caption="Thực địa ngày 23/11/2026: Hai cẩu tháp lớn của tổng thầu Handong E&C đang thi công kết cấu sàn tầng nổi phân khu NOXH K-Home Avenue (20% quỹ đất Mega City 2)."
              index={0}
              onOpen={openLightbox}
            />
          </div>

          {/* SECTION 1 */}
          <section className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-[15px] sm:text-base mb-10">
            <SectionHeading id="nguon-goc-phap-ly">
              1. Căn Cứ Pháp Lý 20% Quỹ Đất: Khẳng Định Vị Thế Dự Án Mẫu Mực
            </SectionHeading>

            <p>
              Tại Khoản 2 Điều 2 của <strong>Quyết định 2979/QĐ-UBND</strong> do UBND tỉnh Đồng Nai ban hành, trong tổng cơ cấu sử dụng đất ở ~449.695 m² của dự án Mega City 2 Phú Hội, chủ đầu tư Công ty TNHH Khu đô thị Phú Hội (thành viên Kim Oanh Group) đã được chấp thuận cơ cấu dành riêng <strong>89.948,8 m² đất ở xã hội</strong> (chiếm đúng tỷ lệ <strong>20,00% quỹ đất ở</strong>).
            </p>

            <div className="my-5 p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Tuân thủ Luật Đất đai &amp; Nhà ở:</strong> Khác với nhiều dự án tìm cách hoãn hoặc né tránh nghĩa vụ 20% nhà ở xã hội, Kim Oanh Group chủ động bố trí quỹ đất đẹp nhất, trực diện trục đường lớn để kiến tạo khu phức hợp an cư kiểu mẫu.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Bảo chứng thi công thực:</strong> Việc công trường khởi công rầm rộ với 2 cần cẩu tháp hiện hữu xóa tan mọi tin đồn nghi vấn, khẳng định 100% dự án đã hoàn thành quy hoạch chi tiết 1/500 và được phép triển khai xây dựng thực tế.
                </span>
              </div>
            </div>

            <p>
              Đây chính là mấu chốt quan trọng nhất giúp đẩy nhanh tiến trình thẩm định nghĩa vụ tài chính và hoàn tất hồ sơ cấp đổi sổ hồng riêng từng nền cho cư dân như phân tích trong bài viết{" "}
              <Link href="/tin-tuc/mega-city-2-khi-nao-ra-so-tien-do-phap-ly-2026" className="text-emerald-700 font-bold hover:underline">
                Mega City 2 khi nào ra sổ – Tiến độ pháp lý 2026
              </Link>.
            </p>
          </section>

          {/* SECTION 2: VIDEO & SHOWCASE INTERACTIVE */}
          <section className="mb-12">
            <SectionHeading id="thuc-dia-video">
              2. Xem Trực Tiếp Video Thực Địa Đất Nền &amp; Công Trường 23/11/2026
            </SectionHeading>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Mời quý độc giả và các nhà đầu tư theo dõi video quay thực tế từ flycam và camera hiện trường vào sáng nay ngày {PUBLISHED}, bao gồm góc quay hiện trạng hạ tầng đất nền nội khu và đại công trường K-Home Avenue:
            </p>

            {/* Embedded interactive showcase */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <MegaCity2LatestProgressShowcase />
            </div>
          </section>

          {/* SECTION 3: TỔNG THẦU HANDONG E&C */}
          <section className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-[15px] sm:text-base mb-10">
            <SectionHeading id="tong-thau-handong">
              3. Đối Tác Quốc Tế Handong E&amp;C: Bảo Chứng Tốc Độ &amp; Chất Lượng
            </SectionHeading>

            <p>
              Để hiện thực hóa khu căn hộ NOXH chuẩn Singapore K-Home Avenue, Kim Oanh Group đã lựa chọn bắt tay cùng <strong>Handong E&amp;C</strong> — tổng thầu xây dựng danh tiếng đến từ Hàn Quốc với hơn 15 năm kinh nghiệm triển khai các dự án cao tầng chuẩn quốc tế.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
              <ArticleFigure
                src={IMAGES.cauThap}
                alt="Cận cảnh 2 cẩu tháp tổng thầu Handong E&C"
                caption="Cận cảnh hệ cẩu tháp và lưới bao che đạt chuẩn an toàn lao động quốc tế của Handong E&C."
                index={1}
                onOpen={openLightbox}
              />
              <ArticleFigure
                src={IMAGES.hangRao}
                alt="Nhận diện thương hiệu K-Home Avenue"
                caption="Hàng rào nhận diện thương hiệu K-Home Avenue mở lối an cư văn minh hiện đại."
                index={4}
                onOpen={openLightbox}
              />
            </div>

            <p>
              Tại công trường sáng nay, toàn bộ hệ giàn giáo, cốp pha trượt định hình và kết cấu thép sàn tầng 1 &amp; tầng 2 đang được tổ chức thi công liên tục 3 ca. Dự kiến khi hoàn thành, dự án sẽ cung ứng cho thị trường Nhơn Trạch hơn 1.000 căn hộ chất lượng cao, tích hợp công viên, hồ bơi và trường mầm non nội khu.
            </p>
          </section>

          {/* SECTION 4: THỰC ĐỊA ĐẤT NỀN VÀ ĐÒN BẨY GIÁ TRỊ */}
          <section className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-[15px] sm:text-base mb-10">
            <SectionHeading id="don-bay-dat-nen">
              4. Cú Hích Vô Tiền Khoáng Hậu Cho Đất Nền Mega City 2
            </SectionHeading>

            <p>
              Đối với các nhà đầu tư đang nắm giữ hoặc tìm mua{" "}
              <Link href="/mega-city-2/bang-gia" className="text-emerald-700 font-bold hover:underline">
                đất nền Mega City 2
              </Link>, sự xuất hiện của K-Home Avenue chính là "chìa khóa vàng" tháo gỡ điểm nghẽn lớn nhất của các khu đô thị vệ tinh: <strong>mật độ dân cư về ở thực</strong>.
            </p>

            <div className="space-y-4 my-6 not-prose">
              <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl flex items-start gap-3.5">
                <Building2 className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    Hơn 3.000 – 4.000 Cư Dân Kéo Về Sinh Sống Ngay Trong Lòng Dự Án
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    1.000 căn hộ khi bàn giao sẽ thu hút ngay lập tức hàng nghìn chuyên gia, kỹ sư và gia đình trẻ làm việc tại 9 KCN Nhơn Trạch và sân bay Long Thành. Dân về ở thật đồng nghĩa với việc các dịch vụ ăn uống, siêu thị, cafe, y tế bùng nổ.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-blue-50/70 border border-blue-200/80 rounded-2xl flex items-start gap-3.5">
                <TrendingUp className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    Giá Trị Đất Nền Xung Quanh Tăng Tốc Nhờ Hiệu Ứng "Vết Dầu Loang"
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Đất nền nhà phố kề cận chung cư NOXH sẽ lập tức trở thành các tuyến phố thương mại sầm uất. Các lô đất mặt tiền đường số 10, đường 24m và trục chính Mega City 2 sẽ có thanh khoản vượt trội và giá thuê/mặt bằng tăng trưởng theo cấp số nhân.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex items-start gap-3.5">
                <HardHat className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    Hạ Tầng Nội Khu ~95% Sẵn Sàng Đón Cư Dân Xây Dựng
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Đường thảm nhựa phẳng phiu rộng 13m – 32m, vỉa hè lát gạch, hệ thống điện ngầm và đèn chiếu sáng đã hiện hữu. Nhà đầu tư có thể an tâm kiểm tra mốc ranh và lên kế hoạch xây dựng nhà phố, nhà vườn ngay khi có nhu cầu.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 not-prose">
              <ArticleFigure
                src={IMAGES.matBang}
                alt="Mặt bằng thực tế đất nền Mega City 2 Nhơn Trạch"
                caption="Hiện trạng mặt bằng các dãy đất nền Mega City 2 sạch đẹp, cây xanh vỉa hè phủ bóng, kết nối liền mạch tới đại công trường NOXH."
                index={3}
                onOpen={openLightbox}
              />
            </div>
          </section>

          {/* CROSS-LINK THE LINK CITY CALLOUT */}
          <div className="my-10 p-6 sm:p-8 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/50 rounded-3xl border-2 border-amber-300 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <span className="p-2 bg-amber-500 text-white rounded-xl shadow-xs">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-800">
                  Gợi ý đầu tư an tâm tuyệt đối
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Muốn Sở Hữu Đất Nền Đã Có Sẵn Sổ Đỏ Công Chứng Ngay?
                </h3>
              </div>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Nếu bạn muốn dòng vốn thanh khoản tức thì và nắm chắc trong tay cuốn <strong>sổ hồng thổ cư 100%</strong>: Hãy xem ngay dự án{" "}
              <Link href="/the-link-city" className="text-amber-800 font-bold hover:underline">
                The Link City Dầu Giây
              </Link>{" "}
              (ngay nút giao QL1A - QL20). Đất nền trung tâm hành chính, hạ tầng hoàn thiện 100%, giá chỉ từ <strong>1,85 tỷ/nền</strong>, công chứng sang tên ngay trong tuần!
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/the-link-city/bang-gia"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors shadow-sm"
              >
                Xem Bảng Giá The Link City
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/the-link-city/phap-ly"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors border border-slate-200"
              >
                Xem Sổ Hồng Thực Tế
              </Link>
            </div>
          </div>

          {/* FAQ SECTION */}
          <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              Giải Đáp Thắc Mắc Về K-Home Avenue &amp; Mega City 2
            </h3>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 sm:p-5 border border-slate-100 shadow-xs">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                    {idx + 1}. {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick cluster links navigation */}
          <div className="border-t border-slate-200 pt-8 mb-10">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Khám phá trọn bộ thông tin Mega City 2:
            </h4>
            <div className="flex flex-wrap gap-2.5 text-xs font-medium">
              {[
                { href: "/mega-city-2", label: "Tổng quan dự án" },
                { href: "/mega-city-2/bang-gia", label: "Bảng giá chuyển nhượng" },
                { href: "/mega-city-2/mat-bang", label: "Mặt bằng 1/500" },
                { href: "/mega-city-2/phap-ly", label: "Hồ sơ pháp lý QĐ 2979" },
                { href: "/mega-city-2/tien-do", label: "Nhật ký tiến độ" },
                { href: "/mega-city-2/hinh-anh", label: "Thư viện hình ảnh" },
                { href: "/mega-city-2/vi-tri", label: "Vị trí & Đường 25C" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 rounded-lg transition-colors border border-slate-200/60"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>

          {/* RELATED CONTENT */}
          <RelatedContent
            title="Bài viết phân tích chuyên sâu cùng chủ đề"
            items={[
              {
                href: "/tin-tuc/quyet-dinh-2979-giao-dat-mega-city-2",
                title: "Chi tiết Quyết định 2979/QĐ-UBND giao đất Mega City 2",
                description: "Nội dung văn bản phê duyệt 20% quỹ đất NOXH và chấp thuận đất ở toàn dự án.",
                tag: "Pháp lý",
              },
              {
                href: "/tin-tuc/mega-city-2-khi-nao-ra-so-tien-do-phap-ly-2026",
                title: "Mega City 2 khi nào ra sổ hồng? Lộ trình cấp sổ 2026",
                description: "Quy trình thẩm định giá đất, hoàn thành nghĩa vụ tài chính và tách sổ từng nền.",
                tag: "Cấp sổ",
              },
              {
                href: "/tin-tuc/5-ly-do-nen-dau-tu-mega-city-2",
                title: "5 lý do nên đầu tư đất nền Mega City 2 đón sóng 2026",
                description: "Đón đầu Cầu Nhơn Trạch, Vành đai 3 và Sân bay Quốc tế Long Thành.",
                tag: "Đầu tư",
              },
              {
                href: "/tin-tuc/ha-tang-ky-thuat-mega-city-2",
                title: "Hạ tầng kỹ thuật Mega City 2: Điện âm & Thoát nước chuẩn",
                description: "Quy chuẩn thiết kế hạ tầng ngầm hóa và cốt nền chống ngập tại xã Phú Hội.",
                tag: "Hạ tầng",
              },
              {
                href: "/the-link-city",
                title: "The Link City Dầu Giây – Sổ hồng sẵn, công chứng ngay",
                description: "Đất nền trung tâm Dầu Giây chỉ từ 1,85 tỷ/nền, hạ tầng hoàn thiện 100%.",
                tag: "Dự án mới",
              },
              {
                href: "/one-era",
                title: "One Era Kinera Bình Dương – Siêu đô thị 1 tỷ USD",
                description: "Hợp tác cùng Top Fortune Global 500 Longfor Group mở bán đợt 1.",
                tag: "Siêu dự án",
              },
            ]}
          />
        </article>
      </main>

      <CorpFooter />
    </>
  );
}
