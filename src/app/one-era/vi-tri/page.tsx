"use client";

import Link from "next/link";
import Image from "next/image";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import { IMG_ONE_ERA } from "@/lib/cloudinary";
import { ONE_ERA_DATA } from "@/data/oneEraData";
import { SITE_CONFIG } from "@/data/siteConfig";
import { MapPin, Navigation, Train, Clock, CheckCircle2, ArrowRight, ShieldCheck, Compass, ZoomIn } from "lucide-react";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vị Trí One Era Bình Dương – Tọa Độ Tam Giao Huyết Mạch & 2 Tuyến Metro",
  description:
    "Phân tích chuyên sâu vị trí đắc địa đại đô thị 50ha One Era tại phường Thuận Giao, TP. Thuận An, Bình Dương. Kết nối Vành Đai 3, Quốc Lộ 13 và 2 ga Metro.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-03-01",
  dateModified: "2026-10-22",
  url: "https://kimoanhdongnai.com.vn/one-era/vi-tri",
  about: { "@type": "RealEstateListing", name: "One Era Bình Dương", url: "https://kimoanhdongnai.com.vn/one-era" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dự án One Era Bình Dương chính xác nằm ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One Era tọa lạc tại mặt tiền Quốc lộ 13 (Đại lộ Bình Dương) và đường Nguyễn Thị Minh Khai, phường Thuận Giao, thành phố Thuận An, tỉnh Bình Dương. Dự án nằm kề cận ranh giới TP. Thủ Đức (TP.HCM).",
      },
    },
    {
      "@type": "Question",
      name: "Kết nối giao thông từ One Era về trung tâm TP.HCM mất bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hiện tại cư dân chỉ mất khoảng 20 – 25 phút di chuyển về Quận 1 và sân bay Tân Sơn Nhất qua Quốc lộ 13. Trong tương lai, khi 2 tuyến Metro Line 1B và Line 2B vận hành, thời gian di chuyển về trung tâm chỉ còn khoảng 15 – 20 phút không khói bụi kẹt xe.",
      },
    },
    {
      "@type": "Question",
      name: "Yếu tố phong thủy vị trí của One Era có gì nổi bật?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One Era sở hữu thế đất phong thủy 'Tụ Thủy Sinh Tài' độc tôn với dòng kênh sinh thái Suối Cát uốn lượn ôm trọn chiều dài dự án, kết hợp quần thể đại công viên sinh thái 42ha kề cận mang lại luồng sinh khí mát mẻ quanh năm.",
      },
    },
  ],
};

const relatedItems = [
  {
    href: "/one-era",
    title: "Tổng quan siêu dự án One Era (50ha – Chuẩn Quốc Tế)",
    description: "Toàn bộ thông tin chủ đầu tư Kim Oanh Group và 3 tập đoàn Nhật Bản, phân khu Central District.",
    tag: "Trang Chính",
  },
  {
    href: "/one-era/mat-bang",
    title: "Mặt bằng & Sơ đồ phân lô Central District",
    description: "Bóc tách chi tiết 357 căn nhà phố và shophouse, kích thước lô đất và lộ giới đường 13m – 25m.",
    tag: "Mặt Bằng",
  },
  {
    href: "/one-era/bang-gia",
    title: "Bảng giá One Era đợt 1 & Chính sách ưu đãi",
    description: "Cập nhật bảng giá gốc CĐT, chính sách thanh toán giãn tiến độ đến Quý 4/2028 và hỗ trợ vay 0%.",
    tag: "Bảng Giá",
  },
  {
    href: "/one-era/tien-ich",
    title: "Hệ sinh thái tiện ích quốc tế All-In-One",
    description: "Đại siêu thị AEON Mall, Cầu Kén Vàng, trường quốc tế VAS Saigon và hồ bơi phong cách resort.",
    tag: "Tiện Ích",
  },
  {
    href: "/one-era/phap-ly",
    title: "Hồ sơ pháp lý 1/500 & Bảo chứng quốc tế",
    description: "Minh bạch pháp lý quy hoạch 1/500, vốn liên doanh quốc tế và tổng thầu xây dựng Coteccons.",
    tag: "Pháp Lý",
  },
];

export default function ViTriOneEraPage() {
  const loc = ONE_ERA_DATA.locationConnectivity;

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      <CorpHeader />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Header Section */}
        <SubPageHeader
          tag="Vị Trí & Kết Nối Giao Thông"
          title="TỌA ĐỘ VÀNG TAM GIAO & 2 TUYẾN METRO TƯƠNG LAI"
          subtitle="One Era Bình Dương sở hữu vị trí giao thương chiến lược tại trung tâm TP. Thuận An, ngã ba sông Suối Cát và kết nối trực tiếp mạng lưới cao tốc – Metro liên vùng Đông Nam Bộ."
          breadcrumbs={[
            { label: "One Era", href: "/one-era" },
            { label: "Vị Trí" },
          ]}
          updatedAt="Tháng 10/2026"
          backHref="/one-era"
          backLabel="Quay lại siêu dự án One Era"
        />

        {/* Content Body */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          {/* Main Visual Section */}
          <div className="mb-14">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group aspect-[16/10] w-full">
              <Image
                src={IMG_ONE_ERA.masterPlan.tamGiao}
                alt="Bản đồ vị trí kết nối tam giao siêu dự án One Era Bình Dương"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1200px) 100vw, 1100px"
                priority
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 text-amber-400 text-xs font-mono font-bold px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>Mặt tiền QL13 & Nguyễn Thị Minh Khai, Thuận An</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 text-center mt-3 italic">
              * Bản đồ liên kết giao thông chiến lược 3 trục đối ngoại & 2 tuyến Metro bao quanh khu đô thị One Era
            </p>
          </div>

          {/* Interactive Google Maps Embed Section */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  Định Vị Vệ Tinh Trực Tuyến
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-red-500" />
                  <span>Vị Trí Dự Án One Era Trên Google Maps</span>
                </h2>
              </div>
              <a
                href="https://www.google.com/maps/place/Khu+%C4%90%C3%B4+Th%E1%BB%8B+One+Era+-+Thu%E1%BA%ADn+Giao+-+Kim+Oanh+Land/@10.9662955,106.6924031,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs uppercase tracking-wider transition-all shadow-md self-start sm:self-auto"
              >
                <span>Chỉ đường trên Google Maps</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <iframe
                title="Google Maps vị trí Khu Đô Thị One Era - Thuận Giao - Kim Oanh Land"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4212.77345651816!2d106.6924031!3d10.9662955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d13926b79495%3A0x8c1ff23b6ecd0d8d!2zS2h1IMSQw7QgVGjhu4sgT25lIEVyYSAtIFRodeG6rW4gR2lhbyAtIEtpbSBPYW5oIExhbmQ!5e1!3m2!1svi!2s!4v1792924547836!5m2!1svi!2s"
                width="100%"
                height="450"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

          {/* 3 Pillars of Connectivity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Road Networks */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                  <Navigation className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">3 Tuyến Đường Bộ Huyết Mạch</h2>
              </div>
              <ul className="space-y-4 text-sm text-slate-600">
                {loc.highways.map((h) => (
                  <li key={h.name} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block font-semibold">{h.name}</strong>
                      <span className="text-xs leading-relaxed text-slate-600">{h.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metro Networks */}
            <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                  <Train className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">2 Tuyến Metro Tương Lai</h2>
              </div>
              <ul className="space-y-4 text-sm text-slate-600 mb-6">
                {loc.metroLines.map((m) => (
                  <li key={m.line} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-blue-100 shadow-2xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 flex-shrink-0 mt-1.5" />
                    <div>
                      <strong className="text-blue-900 block font-semibold">{m.line}</strong>
                      <span className="text-xs leading-relaxed text-slate-600">{m.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-2xl bg-blue-100/70 text-blue-900 text-xs leading-relaxed">
                <strong>Đặc quyền cư dân:</strong> Cầu bộ hành Kén Vàng kết nối trực tiếp từ phân khu Central District và tháp đôi Kinera Tower sang nhà ga Metro trên cao.
              </div>
            </div>
          </div>

          {/* Travel Commute Grid */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white mb-16">
            <h2 className="text-xl sm:text-2xl font-extrabold text-center mb-8 flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              <span>Thời Gian Di Chuyển Đến Các Trung Tâm Trọng Điểm</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {loc.times.map((t) => (
                <div key={t.minutes} className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center">
                  <div className="text-3xl font-extrabold text-amber-400 font-mono mb-1">
                    {t.minutes} <span className="text-xs font-sans font-bold text-white">{t.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {t.dest}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* In-depth Analysis Section for SEO */}
          <article className="prose prose-slate max-w-none mb-16">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Đánh Giá Tiềm Năng Tăng Trưởng Từ Tọa Độ One Era Bình Dương
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Thành phố Thuận An hiện là đô thị cửa ngõ có tốc độ phát triển công nghiệp và dịch vụ năng động bậc nhất tỉnh Bình Dương. Nằm tiếp giáp trực tiếp với thành phố Thủ Đức (TP.HCM), Thuận An đang hưởng lợi lớn nhất từ đề án mở rộng Đại lộ Bình Dương (Quốc lộ 13) lên 8 làn xe và trục Vành Đai 3 chuẩn bị thông xe toàn tuyến.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Với quỹ đất đại đô thị hiếm hoi rộng tới gần 50 Hécta ngay tại lõi đô thị trung tâm, One Era không chỉ đáp ứng nhu cầu an cư cao cấp cho hơn 50.000 chuyên gia, kỹ sư quốc tế tại các khu công nghiệp VSIP 1, Việt Hương mà còn là kênh tích sản sinh lời vượt trội nhờ quy hoạch hạ tầng đường sắt đô thị Metro kề cận.
            </p>
          </article>
        </div>

        {/* Topic Cluster Cross Links */}
        <RelatedContent
          title="Khám phá các chủ đề chuyên sâu về One Era Bình Dương"
          items={relatedItems}
        />

        {/* Lead Conversion CTA */}
        <PageCTA
          title="Nhận Bản Đồ Quy Hoạch & Bảng Giá Chi Tiết One Era"
          subtitle="Liên hệ ngay để nhận trọn bộ tài liệu vị trí, sơ đồ phân lô 1/500 và danh sách các căn suất ngoại giao đợt 1."
          primaryHref={`tel:${SITE_CONFIG.phone}`}
          primaryLabel={`Gọi ${SITE_CONFIG.phoneDisplay}`}
          secondaryHref={SITE_CONFIG.social.zalo}
          secondaryLabel="Nhắn Zalo"
          variant="dark"
        />
      </main>

      <CorpFooter />
    </div>
  );
}
