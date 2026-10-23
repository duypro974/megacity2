"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import { IMG_ONE_ERA } from "@/lib/cloudinary";
import { ONE_ERA_DATA } from "@/data/oneEraData";
import { SITE_CONFIG } from "@/data/siteConfig";
import { Layers, ZoomIn, Download, CheckCircle, MapPin, ArrowRight, Home, ShoppingBag, X } from "lucide-react";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mặt Bằng One Era Bình Dương – Sơ Đồ Quy Hoạch 50ha & Phân Lô Central District",
  description:
    "Bản vẽ phân lô chi tiết phân khu Central District siêu dự án One Era (Thuận An, Bình Dương). Cơ cấu 357 căn nhà phố townhouse và shophouse thương mại.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-03-01",
  dateModified: "2026-10-22",
  url: "https://kimoanhdongnai.com.vn/one-era/mat-bang",
  about: { "@type": "RealEstateListing", name: "One Era Bình Dương", url: "https://kimoanhdongnai.com.vn/one-era" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quy mô phân khu mở bán đợt 1 Central District là bao nhiêu căn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Phân khu Central District mở bán đợt 1 gồm tổng cộng 357 căn thấp tầng giới hạn, trong đó có 208 căn nhà phố liền kề (Townhouse) và 149 căn nhà phố thương mại (Shophouse).",
      },
    },
    {
      "@type": "Question",
      name: "Kích thước các lô nhà phố Townhouse và Shophouse tại One Era là bao nhiêu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Townhouse có 2 loại kích thước điển hình: 5x16m (diện tích sàn 169.8 m², xây 3 tầng) và 6x18m (diện tích sàn 302.4 m², xây 4 tầng ven kênh Suối Cát). Shophouse có các kích thước 5x18m, 6x18m và 6x23m căn góc 2 mặt tiền (xây 4 tầng).",
      },
    },
    {
      "@type": "Question",
      name: "Lộ giới các tuyến đường nội khu Central District rộng bao nhiêu mét?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trục Đại lộ One Era rộng 25m, đường CKV-TG11 rộng 22m, đường KV-D29 rộng 20m, đường KV-N1 rộng 19m, đường S1 rộng 18m, và các tuyến đường nội bộ khu nhà phố GP1–GP3, V1–V6 rộng 13m.",
      },
    },
  ],
};

const relatedItems = [
  {
    href: "/one-era",
    title: "Tổng quan dự án One Era (50ha – Chuẩn Quốc Tế)",
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

export default function MatBangOneEraPage() {
  const [activeTab, setActiveTab] = useState<"back" | "front">("back");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const products = ONE_ERA_DATA.centralDistrict.products;

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
          tag="Quy Hoạch & Mặt Bằng"
          title="MẶT BẰNG 50HA & SƠ ĐỒ PHÂN LÔ CENTRAL DISTRICT"
          subtitle="Quy hoạch đồng bộ đại đô thị sinh thái 50 Hécta với mật độ xây dựng chuẩn quốc tế. Khám phá chi tiết sơ đồ phân lô 357 căn thấp tầng đợt 1 kèm thông số mặt cắt đường."
          breadcrumbs={[
            { label: "One Era", href: "/one-era" },
            { label: "Mặt Bằng" },
          ]}
          updatedAt="Tháng 10/2026"
          backHref="/one-era"
          backLabel="Quay lại siêu dự án One Era"
        />

        {/* Content Body */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          {/* Master 50ha Overview */}
          <div className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  Quy Mô ~50 Hécta
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Mặt Bằng Tổng Thể Toàn Dự Án ONE ERA
                </h2>
              </div>
              <button
                onClick={() => setModalImage("/images/one-era/one-era-top-view-night-masterplan.webp")}
                className="px-4 py-2 rounded-xl bg-slate-900 text-amber-400 font-bold text-xs flex items-center gap-2 hover:bg-slate-800 transition-all self-start sm:self-auto"
              >
                <ZoomIn className="w-4 h-4" />
                <span>Xem Bản Vẽ Toàn Cảnh (10K)</span>
              </button>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group aspect-[16/10] w-full">
              <Image
                src="/images/one-era/one-era-top-view-night-masterplan.webp"
                alt="Mặt bằng tổng thể 3D siêu dự án One Era 50ha"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1200px) 100vw, 1100px"
              />
            </div>
            <p className="text-xs text-slate-500 text-center mt-3 italic">
              * Phối cảnh 3D đại đô thị One Era với 4 phân khu chức năng, tháp đôi Kinera và TTTM AEON Mall
            </p>
          </div>

          {/* Central District Detailed Leaflet Plan */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  Mở Bán Đợt 1 • 357 Căn Thấp Tầng
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Sơ Đồ Phân Lô Chi Tiết Phân Khu Central District
                </h2>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                <button
                  onClick={() => setActiveTab("back")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === "back"
                      ? "bg-amber-500 text-slate-950 shadow"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Sơ Đồ Phân Lô Từng Căn
                </button>
                <button
                  onClick={() => setActiveTab("front")}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === "front"
                      ? "bg-amber-500 text-slate-950 shadow"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Tổng Thể & Thông Số
                </button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[16/11] sm:aspect-[16/10] w-full group">
              <Image
                src={
                  activeTab === "back"
                    ? IMG_ONE_ERA.leaflets.back
                    : IMG_ONE_ERA.leaflets.front
                }
                alt="Sơ đồ phân lô chi tiết phân khu Central District One Era"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1100px"
              />

              <button
                onClick={() =>
                  setModalImage(
                    activeTab === "back" ? IMG_ONE_ERA.leaflets.back : IMG_ONE_ERA.leaflets.front
                  )
                }
                className="absolute top-4 right-4 bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white p-3 rounded-full backdrop-blur-md transition-all shadow-lg"
                aria-label="Phóng to sơ đồ phân lô"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>

            {/* Road Specs Bar */}
            <div className="mt-4 p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="text-slate-700">
                <strong className="text-slate-900">Thông số lộ giới đường nội bộ:</strong> Đại lộ One Era (25m), Đường CKV-TG11 (22m), KV-D29 (20m), KV-N1 (19m), S1 (18m), đường nội bộ GP1–GP3 & V1–V6 (13m).
              </div>
              <a
                href="/docs/one-era/leaflet-central-street-mat-sau.pdf"
                download
                className="inline-flex items-center gap-1.5 text-amber-700 font-bold hover:underline"
              >
                <Download className="w-4 h-4" />
                <span>Tải File PDF Gốc (83MB)</span>
              </a>
            </div>
          </div>

          {/* Product Specifications Table */}
          <div className="mb-16">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
              Bảng Cơ Cấu Sản Phẩm Phân Khu Central District
            </h2>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-900 text-white font-mono uppercase text-xs">
                  <tr>
                    <th className="py-4 px-6">Loại Sản Phẩm</th>
                    <th className="py-4 px-6">Kích Thước</th>
                    <th className="py-4 px-6">Số Tầng</th>
                    <th className="py-4 px-6">DT Đất</th>
                    <th className="py-4 px-6">DT Sàn XD</th>
                    <th className="py-4 px-6">Vị Trí / Đặc Điểm</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                        {p.type === "townhouse" ? <Home className="w-4 h-4 text-emerald-600" /> : <ShoppingBag className="w-4 h-4 text-amber-600" />}
                        <span>{p.name}</span>
                      </td>
                      <td className="py-4 px-6 font-mono font-semibold text-slate-700">{p.dimension}</td>
                      <td className="py-4 px-6 text-slate-600">{p.floors}</td>
                      <td className="py-4 px-6 font-bold text-amber-600 font-mono">{p.landArea}</td>
                      <td className="py-4 px-6 font-bold text-slate-900 font-mono">{p.builtArea}</td>
                      <td className="py-4 px-6 text-xs text-slate-500 font-light">{p.tagline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Lightbox */}
        {modalImage && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setModalImage(null)}
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
              aria-label="Đóng ảnh"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <Image src={modalImage} alt="Mặt bằng phóng to One Era" fill className="object-contain" />
            </div>
          </div>
        )}

        {/* Topic Cluster Cross Links */}
        <RelatedContent
          title="Khám phá các chủ đề chuyên sâu về One Era Bình Dương"
          items={relatedItems}
        />

        {/* Lead Conversion CTA */}
        <PageCTA
          title="Nhận Mặt Bằng Phân Lô & Chọn Vị Trí Căn Đẹp"
          subtitle="Chuyên viên Kim Oanh Group hỗ trợ kiểm tra giỏ hàng đợt 1, gửi bảng bóc tách chi tiết từng lô căn qua Zalo trong 5 phút."
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
