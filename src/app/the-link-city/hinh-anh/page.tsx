import type { Metadata } from "next";
import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import {
  TLC_OG, TLC_OVERVIEW, TLC_INFRA, TLC_AMENITIES,
  TLC_REAL, TLC_LOCATION, TLC_LAYOUT,
} from "@/lib/cloudinary";
import { ArrowRight, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Hình ảnh The Link City Dầu Giây – Ảnh thực tế dự án",
  description:
    "Hình ảnh thực tế dự án The Link City tại xã Dầu Giây, Đồng Nai: hạ tầng, đường nội khu, cảnh quan và tiện ích. Ảnh phối cảnh được ghi nhãn rõ ràng.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city/hinh-anh" },
  openGraph: {
    title: "Hình ảnh The Link City Dầu Giây – Ảnh thực tế dự án",
    description: "Gallery hình ảnh thực tế The Link City: hạ tầng GĐ1, đường nội khu, cảnh quan và tiện ích.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: TLC_OG, width: 1280, height: 720, alt: "Hình ảnh thực tế dự án The Link City Dầu Giây" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hình ảnh The Link City Dầu Giây",
    description: "Ảnh thực tế hạ tầng, đường nội khu, cảnh quan The Link City.",
    images: [TLC_OG],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hình ảnh The Link City Dầu Giây – Ảnh thực tế dự án",
  description: "Gallery hình ảnh thực tế và phối cảnh dự án The Link City tại xã Dầu Giây, tỉnh Đồng Nai.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2025-12-23",
  dateModified: "2025-12-23",
  url: "https://kimoanhdongnai.com.vn/the-link-city/hinh-anh",
  about: { "@type": "RealEstateListing", name: "The Link City", url: "https://kimoanhdongnai.com.vn/the-link-city" },
};

const galleryGroups = [
  {
    id: "toan-canh",
    title: "Toàn cảnh dự án",
    note: "[PENDING IMAGE VERIFICATION]",
    images: [
      { src: TLC_OVERVIEW["1"], alt: "Toàn cảnh dự án The Link City tại xã Dầu Giây, Đồng Nai", caption: "Toàn cảnh The Link City" },
      { src: TLC_OVERVIEW["2"], alt: "Cảnh quan khu đô thị The Link City Dầu Giây", caption: "Cảnh quan dự án" },
      { src: TLC_OVERVIEW["3"], alt: "Phối cảnh The Link City Dầu Giây Đồng Nai", caption: "Cảnh quan dự án" },
    ],
  },
  {
    id: "ha-tang",
    title: "Hạ tầng kỹ thuật",
    note: "[PENDING IMAGE VERIFICATION]",
    images: [
      { src: TLC_INFRA["1"], alt: "Hạ tầng kỹ thuật giai đoạn 1 The Link City Dầu Giây đã hoàn thiện", caption: "Hạ tầng GĐ1 hoàn thiện" },
      { src: TLC_INFRA["2"], alt: "Đường nội khu The Link City Dầu Giây Đồng Nai", caption: "Đường nội khu" },
      { src: TLC_INFRA["3"], alt: "Hệ thống hạ tầng kỹ thuật The Link City giai đoạn 2", caption: "Hạ tầng GĐ2" },
      { src: TLC_INFRA["4"], alt: "Trạm xử lý nước thải The Link City Dầu Giây", caption: "Trạm xử lý nước thải" },
    ],
  },
  {
    id: "thuc-te",
    title: "Hình ảnh thực tế",
    note: "[PENDING IMAGE VERIFICATION] — Ảnh thực tế do người quản trị cung cấp",
    images: [
      { src: TLC_REAL["1"], alt: "Hình ảnh thực tế The Link City Dầu Giây Đồng Nai", caption: "Thực tế tại dự án" },
      { src: TLC_REAL["2"], alt: "Hình ảnh thực tế đường nội khu The Link City", caption: "Đường nội khu thực tế" },
      { src: TLC_REAL["3"], alt: "Hình ảnh thực tế hạ tầng The Link City Dầu Giây", caption: "Hạ tầng thực tế" },
      { src: TLC_REAL["4"], alt: "Cảnh quan thực tế The Link City xã Dầu Giây", caption: "Cảnh quan thực tế" },
      { src: TLC_REAL["5"], alt: "Tiến độ xây dựng The Link City Dầu Giây — ảnh thực tế", caption: "Tiến độ thực tế" },
      { src: TLC_REAL["6"], alt: "Khu vực The Link City Dầu Giây", caption: "Toàn khu The Link City" },
    ],
  },
  {
    id: "tien-ich-anh",
    title: "Tiện ích",
    note: "[PENDING IMAGE VERIFICATION]",
    images: [
      { src: TLC_AMENITIES["1"], alt: "Tiện ích cảnh quan The Link City Dầu Giây", caption: "Tiện ích cảnh quan" },
      { src: TLC_AMENITIES["2"], alt: "Công viên và mảng xanh The Link City", caption: "Mảng xanh nội khu" },
      { src: TLC_AMENITIES["3"], alt: "Khu vui chơi và thể thao The Link City Dầu Giây", caption: "Khu vui chơi & thể thao" },
    ],
  },
  {
    id: "vi-tri-anh",
    title: "Vị trí & Bản đồ",
    note: "[PENDING IMAGE VERIFICATION]",
    images: [
      { src: TLC_LOCATION["1"], alt: "Bản đồ vị trí The Link City tại ngã tư Dầu Giây Đồng Nai", caption: "Vị trí trên bản đồ" },
      { src: TLC_LOCATION["2"], alt: "Khu vực xung quanh The Link City xã Dầu Giây", caption: "Khu vực Dầu Giây" },
    ],
  },
  {
    id: "mat-bang-anh",
    title: "Mặt bằng & Quy hoạch",
    note: "[PENDING IMAGE VERIFICATION]",
    images: [
      { src: TLC_LAYOUT["1"], alt: "Mặt bằng tổng thể dự án The Link City Dầu Giây", caption: "Mặt bằng tổng thể" },
      { src: TLC_LAYOUT["2"], alt: "Quy hoạch phân khu The Link City Dầu Giây Đồng Nai", caption: "Phân khu quy hoạch" },
    ],
  },
];

const relatedItems = [
  { href: "/the-link-city", title: "Tổng quan The Link City", description: "Thông tin đầy đủ về dự án.", tag: "Tổng quan" },
  { href: "/the-link-city/tien-do", title: "Tiến độ xây dựng", description: "GĐ1 hoàn thiện, GĐ2 ~55% (23/12/2025).", tag: "Tiến độ" },
  { href: "/the-link-city/mat-bang", title: "Mặt bằng The Link City", description: "Quy hoạch 2 giai đoạn.", tag: "Mặt bằng" },
  { href: "/the-link-city/tien-ich", title: "Tiện ích The Link City", description: "50 tiện ích theo công bố.", tag: "Tiện ích" },
  { href: "/the-link-city/phap-ly", title: "Pháp lý The Link City", description: "CĐT Phú Việt Tín, VietinBank đồng hành.", tag: "Pháp lý" },
];

export default function HinhAnhPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 min-h-screen">
        <SubPageHeader
          tag="Hình ảnh"
          title="Hình ảnh The Link City Dầu Giây"
          subtitle="Gallery hình ảnh dự án The Link City. Ảnh thực tế ghi nhận tại dự án. Ảnh phối cảnh được ghi nhãn rõ ràng."
          breadcrumbs={[
            { label: "The Link City", href: "/the-link-city" },
            { label: "Hình ảnh" },
          ]}
          updatedAt="23/12/2025"
          backHref="/the-link-city"
          backLabel="Quay lại trang The Link City"
        />

        <div className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-start gap-3">
              <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 leading-relaxed">
                <span className="font-bold">Về hình ảnh trên trang này:</span> Hình ảnh thực tế sẽ được thay thế
                khi người quản trị cung cấp và xác minh. Ảnh phối cảnh luôn được ghi nhãn rõ ràng.
              </p>
            </div>
          </div>
        </div>

        {galleryGroups.map((group) => (
          <section key={group.id} id={group.id} className="py-12 border-b border-slate-100 last:border-0">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex items-center justify-between mb-5 anim-up">
                <div>
                  <h2 className="text-lg font-bold text-slate-800">{group.title}</h2>
                  <p className="text-xs text-slate-400 mt-0.5">{group.note}</p>
                </div>
              </div>

              <div className={`grid gap-3 anim-stagger
                ${group.images.length === 2 ? "grid-cols-2" :
                  group.images.length === 3 ? "grid-cols-2 md:grid-cols-3" :
                  "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}`}>
                {group.images.map((img, i) => (
                  <div
                    key={i}
                    className={`relative rounded-2xl bg-slate-100 overflow-hidden group anim-img-wrap
                      ${group.images.length <= 3 && i === 0 && group.images.length === 3 ? "col-span-2 md:col-span-1 h-64" : "h-48"}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <p className="text-white text-xs font-semibold">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-10 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-base font-bold text-slate-700 mb-4 anim-up">Chuyển đến nhóm ảnh</h2>
            <div className="flex flex-wrap gap-2 anim-stagger">
              {galleryGroups.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="text-xs font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100
                             border border-primary-100 px-3 py-1.5 rounded-full transition-colors"
                >
                  {g.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        <PageCTA
          title="Muốn xem thực tế dự án?"
          subtitle="Liên hệ để đặt lịch tham quan thực tế The Link City tại xã Dầu Giây, Đồng Nai."
          primaryHref="tel:0937587438"
          primaryLabel="Đặt lịch tham quan"
          secondaryHref="https://zalo.me/0937587438"
          secondaryLabel="Nhắn Zalo"
        />

        <RelatedContent title="Tìm hiểu thêm về The Link City" items={relatedItems} />

        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/the-link-city" className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-semibold">
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            Quay lại trang tổng quan The Link City
          </Link>
        </div>
      </div>

      <CorpFooter />
    </>
  );
}
