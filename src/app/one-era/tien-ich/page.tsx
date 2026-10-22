"use client";

import Image from "next/image";
import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import { ONE_ERA_DATA } from "@/data/oneEraData";
import { SITE_CONFIG } from "@/data/siteConfig";
import { ShoppingBag, GraduationCap, HeartPulse, Trees, Sparkles, CheckCircle2, Waves, Building } from "lucide-react";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tiện Ích One Era Bình Dương – Chuẩn Mực Sống Quốc Tế All-In-One",
  description:
    "Hệ sinh thái tiện ích đẳng cấp quốc tế tại khu đô thị One Era Bình Dương: AEON Mall, Cầu Kén Vàng, Trường Quốc Tế VAS Saigon, phòng khám AI và công viên sinh thái 42ha.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-03-01",
  dateModified: "2026-10-22",
  url: "https://kimoanhdongnai.com.vn/one-era/tien-ich",
  about: { "@type": "RealEstateListing", name: "One Era Bình Dương", url: "https://kimoanhdongnai.com.vn/one-era" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Đại siêu thị AEON Mall tại One Era có quy mô thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trung tâm thương mại AEON Mall tại One Era được xây dựng theo chuẩn đại siêu thị thế hệ mới của Nhật Bản, tích hợp hàng trăm thương hiệu ẩm thực, thời trang, rạp chiếu phim và khu vui chơi giải trí cao cấp, kết nối thông suốt với khu căn hộ qua Cầu Kén Vàng trên cao.",
      },
    },
    {
      "@type": "Question",
      name: "Trường học quốc tế trong nội khu One Era gồm những cấp học nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án quy hoạch hệ thống trường liên cấp quốc tế VAS Saigon từ mầm non đến THPT chuẩn Cambridge, kết hợp hệ thống mầm non KindUp chuẩn phương pháp giáo dục sớm của Nhật Bản ngay tại thềm nhà.",
      },
    },
    {
      "@type": "Question",
      name: "Tiêu chuẩn Fitwel 3 sao của Hoa Kỳ tại One Era có ý nghĩa gì?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fitwel 3 sao là cấp chứng nhận cao nhất của Trung tâm Thiết kế Hoạt động Hoa Kỳ (Center for Active Design), bảo chứng rằng không gian sống tại One Era tối ưu hóa cho sức khỏe hô hấp, ánh sáng tự nhiên, thảm thực vật đa tầng và khuyến khích lối sống đi bộ, vận động lành mạnh.",
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
    href: "/one-era/vi-tri",
    title: "Vị trí & Tam giao hạ tầng liên vùng",
    description: "Tọa độ ngã ba Suối Cát, kết nối Vành Đai 3, Quốc Lộ 13 và 2 tuyến Metro Line 1B & 2B.",
    tag: "Vị Trí",
  },
  {
    href: "/one-era/mat-bang",
    title: "Mặt bằng 50ha & Sơ đồ phân lô Central District",
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
    href: "/one-era/phap-ly",
    title: "Hồ sơ pháp lý 1/500 & Bảo chứng quốc tế",
    description: "Minh bạch pháp lý quy hoạch 1/500, vốn liên doanh quốc tế và tổng thầu xây dựng Coteccons.",
    tag: "Pháp Lý",
  },
];

export default function TienIchOneEraPage() {
  const amenities = ONE_ERA_DATA.amenities;

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
          tag="Hệ Sinh Thái All-In-One"
          title="HỆ THỐNG TIỆN ÍCH QUỐC TẾ TẠI ONE ERA BÌNH DƯƠNG"
          subtitle="Kiến tạo chuẩn sống nghỉ dưỡng thượng lưu đa thế hệ với đại siêu thị AEON Mall, Cầu Kén Vàng ánh sáng, trường quốc tế VAS Saigon và chứng nhận xanh Fitwel 3 sao Hoa Kỳ."
          breadcrumbs={[
            { label: "One Era", href: "/one-era" },
            { label: "Tiện Ích" },
          ]}
          updatedAt="Tháng 10/2026"
          backHref="/one-era"
          backLabel="Quay lại siêu dự án One Era"
        />

        {/* Content Body */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {amenities.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {item.stats && (
                    <div className="absolute top-4 left-4 bg-slate-950/90 text-amber-400 text-xs font-mono font-bold px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
                      {item.stats}
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-amber-600 italic font-medium mb-3">"{item.tagline}"</p>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fitwel 3-Star Highlight Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white mb-16 shadow-xl relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                Chuẩn Mực Sức Khỏe Hoa Kỳ
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
                Chứng Nhận Fitwel Community Site 3 Sao Đầu Tiên Tại Bình Dương
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                One Era là dự án hiếm hoi đạt chứng nhận Fitwel 3 sao cao nhất từ Trung tâm Thiết kế Hoạt động Hoa Kỳ (Center for Active Design). Mọi con đường dạo bộ, công viên bỏ túi và mặt nước kênh Suối Cát đều được thiết kế khéo léo để thúc đẩy sức khỏe thể chất và nuôi dưỡng tinh thần cho mọi thành viên trong gia đình.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-200">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <span className="text-emerald-400 block font-bold mb-1">Fitwel 3-Star (USA)</span>
                  Chuẩn sống vì sức khỏe cộng đồng cao nhất
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <span className="text-amber-400 block font-bold mb-1">EDGE International</span>
                  Tiết kiệm &gt; 20% điện nước và năng lượng
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <span className="text-blue-400 block font-bold mb-1">AI Smart City 24/7</span>
                  An ninh đa tầng và điều phối thông minh
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Topic Cluster Cross Links */}
        <RelatedContent
          title="Khám phá các chủ đề chuyên sâu về One Era Bình Dương"
          items={relatedItems}
        />

        {/* Lead Conversion CTA */}
        <PageCTA
          title="Trải Nghiệm Thực Tế Hệ Tiện Ích One Era"
          subtitle="Đăng ký nhận vé mời tham quan Sa bàn 3D và Sales Gallery chính thức của Chủ đầu tư Kim Oanh Group."
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
