"use client";

import { useState } from "react";
import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import { ONE_ERA_DATA } from "@/data/oneEraData";
import { SITE_CONFIG } from "@/data/siteConfig";
import { CreditCard, Calendar, Percent, Sparkles, CheckCircle2, Phone, Download, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Bảng Giá Nhà Phố & Shophouse One Era Bình Dương Đợt 1",
  image: "https://res.cloudinary.com/dqy4lfmcf/image/upload/v1792642548/oneera/products/one-era-shophouse-commercial-facade.webp",
  description:
    "Bảng giá gốc CĐT mở bán đợt 1 phân khu Central District One Era (357 căn thấp tầng). Tiến độ thanh toán giãn đến Q4/2028, ngân hàng hỗ trợ vay 70%, ân hạn nợ gốc.",
  brand: {
    "@type": "Brand",
    name: "Kinera - Kim Oanh Group & Nhật Bản",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "VND",
    lowPrice: "6800000000",
    highPrice: "18500000000",
    priceValidUntil: "2026-12-31",
    offerCount: "357",
    itemCondition: "https://schema.org/NewCondition",
    availability: "https://schema.org/InStock",
    url: "https://kimoanhdongnai.com.vn/one-era/bang-gia",
    seller: {
      "@type": "Organization",
      name: "Kim Oanh Đồng Nai",
      url: "https://kimoanhdongnai.com.vn",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "86",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Nguyễn Hoàng Nam",
      },
      datePublished: "2026-03-15",
      reviewBody: "Dự án liên danh 3 tập đoàn Nhật Bản chuẩn xanh Fitwel 3 sao, mặt tiền QL13, thanh toán giãn đến Q4/2028 rất hấp dẫn.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Giá bán nhà phố Townhouse và Shophouse One Era đợt 1 là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mức giá đợt 1 phân khu Central District được CĐT Kim Oanh Group và đối tác Nhật Bản áp dụng mức giá gốc giai đoạn đầu với nhiều chính sách chiết khấu ưu đãi cho khách hàng đặt chỗ sớm.",
      },
    },
    {
      "@type": "Question",
      name: "Tiến độ thanh toán dự án One Era kéo dài trong bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tiến độ thanh toán chuẩn được giãn dài theo tiến độ xây dựng đến thời điểm bàn giao nhà dự kiến vào Quý 4/2028 (khoảng 24 – 30 tháng), chia nhỏ thành nhiều đợt nhẹ nhàng.",
      },
    },
    {
      "@type": "Question",
      name: "Có ngân hàng nào hỗ trợ cho vay mua dự án One Era không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Các ngân hàng đối tác chiến lược hỗ trợ giải ngân lên đến 70% giá trị hợp đồng, thời gian vay tối đa 20 – 25 năm, cùng chính sách ân hạn nợ gốc và hỗ trợ lãi suất 0% trong giai đoạn xây dựng.",
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

export default function BangGiaOneEraPage() {
  const products = ONE_ERA_DATA.centralDistrict.products;

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      <CorpHeader />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Header Section */}
        <SubPageHeader
          tag="Bảng Giá & Chính Sách"
          title="BẢNG GIÁ ONE ERA BÌNH DƯƠNG ĐỢT 1 & TIẾN ĐỘ THANH TOÁN"
          subtitle="Cập nhật bảng giá gốc từ Chủ đầu tư Kim Oanh Group & 3 Tập đoàn Nhật Bản. Cơ hội sở hữu 357 căn thấp tầng Central District với tiến độ giãn dài đến Quý 4/2028."
          breadcrumbs={[
            { label: "One Era", href: "/one-era" },
            { label: "Bảng Giá" },
          ]}
          updatedAt="Tháng 10/2026"
          backHref="/one-era"
          backLabel="Quay lại siêu dự án One Era"
        />

        {/* Content Body */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          {/* Top 3 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto mb-4 font-bold">
                <Calendar className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Giãn Tiến Độ Đến Q4/2028</h2>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Thanh toán chia nhỏ thành nhiều đợt theo tiến độ xây dựng của Coteccons, giảm tối đa áp lực tài chính cho nhà đầu tư.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mx-auto mb-4 font-bold">
                <Percent className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Vay 70% & Hỗ Trợ Lãi 0%</h2>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Ngân hàng đối tác chiến lược giải ngân lên đến 70%, ân hạn nợ gốc và hỗ trợ lãi suất 0% trong suốt thời gian xây dựng.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-4 font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Chiết Khấu Đợt 1 Cực Khủng</h2>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Đặc quyền ưu tiên chọn lô góc, căn mặt tiền đại lộ đẹp nhất và gói quà tặng tri ân độc quyền từ Kim Oanh Group.
              </p>
            </div>
          </div>

          {/* Pricing Estimation by Products */}
          <div className="mb-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
              Bảng Giá Dự Kiến Từng Loại Hình Central District
            </h2>
            <p className="text-sm text-slate-500 mb-8 font-light">
              * Bảng giá có tính tham khảo theo tiến độ dự kiến, mức giá chính xác tùy thuộc vào vị trí mặt tiền, hướng và diện tích lô đất.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 uppercase">
                        {p.type === "townhouse" ? "Townhouse" : "Shophouse"}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-600">{p.floors}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-1">{p.name}</h3>
                    <p className="text-xs text-slate-500 italic mb-4">"{p.tagline}"</p>

                    <div className="space-y-2 p-3.5 rounded-2xl bg-slate-50 text-xs text-slate-600 mb-6 font-mono">
                      <div className="flex justify-between">
                        <span>Kích thước:</span>
                        <strong className="text-slate-900">{p.dimension}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Diện tích đất:</span>
                        <strong className="text-slate-900">{p.landArea}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Diện tích sàn XD:</span>
                        <strong className="text-slate-900">{p.builtArea}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 block font-semibold">Tình trạng:</span>
                      <span className="text-xs font-bold text-emerald-600">Đang nhận booking</span>
                    </div>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-amber-400 font-bold text-xs hover:bg-slate-800 transition-all flex items-center gap-1.5"
                    >
                      <span>Báo Giá Gốc</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
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
          title="Đăng Ký Nhận Bảng Giá Gốc & Chính Sách Ưu Đãi Đợt 1"
          subtitle="Liên hệ ngay chuyên viên kinh doanh CĐT để nhận file PDF bảng tính dòng tiền ngân hàng chi tiết qua Zalo trong 5 phút."
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
