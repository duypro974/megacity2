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
import { IMG_ONE_ERA } from "@/lib/cloudinary";
import { ShieldCheck, FileCheck, Building2, Award, CheckCircle2, Lock } from "lucide-react";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pháp Lý One Era Bình Dương – Minh Bạch Quy Hoạch 1/500 & Bảo Chứng Chuẩn Quốc Tế",
  description:
    "Hồ sơ pháp lý đầy đủ và minh bạch của đại đô thị One Era Bình Dương. Quy hoạch 1/500, vốn liên doanh Kinera và sự đồng hành của Coteccons.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-03-01",
  dateModified: "2026-10-22",
  url: "https://kimoanhdongnai.com.vn/one-era/phap-ly",
  about: { "@type": "RealEstateListing", name: "One Era Bình Dương", url: "https://kimoanhdongnai.com.vn/one-era" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dự án One Era đã có quy hoạch chi tiết 1/500 chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án One Era (tên pháp lý trước đây là Khu đô thị Một Thế Giới - The One World) đã hoàn tất phê duyệt đồ án quy hoạch chi tiết xây dựng tỷ lệ 1/500 theo đúng quy định pháp luật của UBND tỉnh Bình Dương.",
      },
    },
    {
      "@type": "Question",
      name: "Tỷ lệ góp vốn và cơ cấu liên danh tại dự án One Era như thế nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dự án được phát triển bởi pháp nhân Kinera với cơ cấu vốn liên doanh minh bạch: Tập đoàn Kim Oanh nắm giữ 51% cổ phần chi phối, và 49% còn lại do 3 tập đoàn hàng đầu Nhật Bản (Sumitomo Forestry, Kumagai Gumi và NTT Urban Development) cùng nắm giữ.",
      },
    },
    {
      "@type": "Question",
      name: "Đơn vị tổng thầu xây dựng của One Era là ai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tổng thầu thi công xây dựng chính thức của One Era là Công ty Cổ phần Xây dựng Coteccons – tổng thầu xây dựng hàng đầu Việt Nam, bảo chứng chất lượng và tiến độ bàn giao đúng cam kết vào Quý 4/2028.",
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
    href: "/one-era/tien-ich",
    title: "Hệ sinh thái tiện ích quốc tế All-In-One",
    description: "Đại siêu thị AEON Mall, Cầu Kén Vàng, trường quốc tế VAS Saigon và hồ bơi phong cách resort.",
    tag: "Tiện Ích",
  },
];

export default function PhapLyOneEraPage() {
  const p = ONE_ERA_DATA.project;
  const d = ONE_ERA_DATA.developers;

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
          tag="Pháp Lý & Năng Lực CĐT"
          title="HỒ SƠ PHÁP LÝ & BẢO CHỨNG LIÊN DANH NHẬT BẢN"
          subtitle="Minh bạch pháp lý quy hoạch 1/500, quỹ đất sạch gần 50 Hécta và năng lực liên danh giữa Kim Oanh Group (51%) cùng 3 tập đoàn hơn 300 năm lịch sử từ Nhật Bản."
          breadcrumbs={[
            { label: "One Era", href: "/one-era" },
            { label: "Pháp Lý" },
          ]}
          updatedAt="Tháng 10/2026"
          backHref="/one-era"
          backLabel="Quay lại siêu dự án One Era"
        />

        {/* Content Body */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          {/* 3 Pillars of Legal Safety */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-4 font-bold">
                <FileCheck className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Quy Hoạch Chi Tiết 1/500</h2>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Đồ án quy hoạch chi tiết xây dựng tỷ lệ 1/500 đã được UBND tỉnh phê duyệt, đảm bảo an toàn tuyệt đối cho người mua nhà.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto mb-4 font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Vốn Quốc Tế Hơn Chuẩn Quốc Tế</h2>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                49% vốn cổ phần được nắm giữ bởi 3 tập đoàn Sumitomo Forestry, Kumagai Gumi và NTT Urban Development trực thuộc NTT Group.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mx-auto mb-4 font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Tổng Thầu Xây Dựng Coteccons</h2>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Tổng thầu thi công số 1 Việt Nam trực tiếp đảm nhận phần xây dựng, cam kết chất lượng kết cấu và tiến độ bàn giao chuẩn xác.
              </p>
            </div>
          </div>

          {/* Legal Fact Table */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 mb-16 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
              Thông Tin Pháp Lý & Năng Lực Dự Án
            </h2>

            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <dt className="text-slate-500 font-medium">Tên thương mại:</dt>
                <dd className="font-bold text-slate-900">{p.name}</dd>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <dt className="text-slate-500 font-medium">Tên pháp lý:</dt>
                <dd className="font-bold text-slate-900">{p.formerName}</dd>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <dt className="text-slate-500 font-medium">Chủ đầu tư:</dt>
                <dd className="font-bold text-slate-900">{d.investor}</dd>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <dt className="text-slate-500 font-medium">Nhà phát triển:</dt>
                <dd className="font-bold text-amber-600">{d.developerName}</dd>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <dt className="text-slate-500 font-medium">Cơ cấu vốn:</dt>
                <dd className="font-semibold text-slate-900">Kim Oanh (51%) – Nhật Bản (49%)</dd>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <dt className="text-slate-500 font-medium">Tổng thầu:</dt>
                <dd className="font-bold text-slate-900">Coteccons</dd>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <dt className="text-slate-500 font-medium">Quy mô quỹ đất:</dt>
                <dd className="font-bold text-amber-600">{p.scale}</dd>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-200/60">
                <dt className="text-slate-500 font-medium">Tiến độ bàn giao:</dt>
                <dd className="font-bold text-emerald-600">{p.handoverDate}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Topic Cluster Cross Links */}
        <RelatedContent
          title="Khám phá các chủ đề chuyên sâu về One Era Bình Dương"
          items={relatedItems}
        />

        {/* Lead Conversion CTA */}
        <PageCTA
          title="Nhận Trọn Bộ Hồ Sơ Pháp Lý 1/500 One Era"
          subtitle="Liên hệ ngay chuyên viên để nhận file văn bản pháp lý chính thức và bản đồ quy hoạch chi tiết 1/500 qua Zalo."
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
