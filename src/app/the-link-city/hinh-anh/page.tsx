"use client";

import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import {
  TLC_OG, TLC_OVERVIEW, TLC_AMENITIES,
  TLC_IMAGE, TLC_LOCATION, TLC_LAYOUT,
} from "@/lib/cloudinary";
import { useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { ArrowRight, ZoomIn } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Gallery groups — xóa "Hạ tầng kỹ thuật", giữ 5 nhóm còn lại
// ─────────────────────────────────────────────────────────────
type GalleryGroup = {
  id: string;
  title: string;
  note: string;
  contain?: boolean; // true → object-contain (ảnh collage/sơ đồ)
  images: LightboxImage[];
};

const galleryGroups: GalleryGroup[] = [
  {
    id: "toan-canh",
    title: "Toàn cảnh dự án",
    note: "Ảnh phối cảnh dự án The Link City",
    images: [
      { src: TLC_OVERVIEW["1"], alt: "Toàn cảnh dự án The Link City tại xã Dầu Giây, Đồng Nai",  caption: "Toàn cảnh The Link City" },
      { src: TLC_OVERVIEW["2"], alt: "Cảnh quan khu đô thị The Link City Dầu Giây",               caption: "Cảnh quan dự án" },
      { src: TLC_OVERVIEW["3"], alt: "Phối cảnh The Link City Dầu Giây Đồng Nai",                 caption: "Cảnh quan dự án" },
    ],
  },
  {
    id: "thuc-te",
    title: "Hình ảnh thực tế",
    note: "Ảnh thực tế tại dự án The Link City",
    images: [
      { src: TLC_IMAGE["1"], alt: "Hình ảnh thực tế The Link City Dầu Giây Đồng Nai",   caption: "Thực tế tại dự án" },
      { src: TLC_IMAGE["2"], alt: "Hình ảnh thực tế đường nội khu The Link City",        caption: "Đường nội khu thực tế" },
      { src: TLC_IMAGE["3"], alt: "Hình ảnh thực tế hạ tầng The Link City Dầu Giây",    caption: "Hạ tầng thực tế" },
      { src: TLC_IMAGE["4"], alt: "Cảnh quan thực tế The Link City xã Dầu Giây",        caption: "Cảnh quan thực tế" },
    ],
  },
  {
    id: "tien-ich-anh",
    title: "Tiện ích",
    note: "Ảnh phối cảnh tiện ích The Link City",
    images: [
      { src: TLC_AMENITIES["1"], alt: "Tiện ích cảnh quan The Link City Dầu Giây",          caption: "Tiện ích cảnh quan" },
      { src: TLC_AMENITIES["2"], alt: "Công viên và mảng xanh The Link City",               caption: "Mảng xanh nội khu" },
      { src: TLC_AMENITIES["3"], alt: "Khu vui chơi và thể thao The Link City Dầu Giây",   caption: "Khu vui chơi & thể thao" },
    ],
  },
  {
    id: "vi-tri-anh",
    title: "Vị trí & Bản đồ",
    note: "Bản đồ vị trí và kết nối vùng The Link City",
    images: [
      { src: TLC_LOCATION["1"], alt: "Bản đồ vị trí The Link City tại ngã tư Dầu Giây Đồng Nai", caption: "Vị trí trên bản đồ" },
      { src: TLC_LOCATION["2"], alt: "Khu vực xung quanh The Link City xã Dầu Giây",             caption: "Khu vực Dầu Giây" },
      { src: TLC_LOCATION["3"], alt: "Hạ tầng giao thông khu vực Dầu Giây",                      caption: "Kết nối giao thông" },
      { src: TLC_LOCATION["4"], alt: "Bản đồ kết nối vùng The Link City",                        caption: "Kết nối vùng" },
    ],
  },
  {
    id: "mat-bang-anh",
    title: "Mặt bằng & Quy hoạch",
    note: "Ảnh mặt bằng phân khu The Link City",
    contain: true, // ảnh phối cảnh nhà phố — không crop
    images: [
      { src: TLC_LAYOUT["1"], alt: "Mặt bằng tổng thể dự án The Link City Dầu Giây",       caption: "Mặt bằng tổng thể" },
      { src: TLC_LAYOUT["2"], alt: "Quy hoạch phân khu The Link City Dầu Giây Đồng Nai",  caption: "Phân khu quy hoạch" },
    ],
  },
];

// Flatten tất cả ảnh theo thứ tự để lightbox duyệt liên tục
const allImages: LightboxImage[] = galleryGroups.flatMap((g) => g.images);

// Tính offset đầu của mỗi group trong allImages
const groupOffsets = galleryGroups.reduce<number[]>((acc, g, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + galleryGroups[i - 1].images.length);
  return acc;
}, []);

const relatedItems = [
  { href: "/the-link-city",          title: "Tổng quan The Link City",    description: "Thông tin đầy đủ về dự án.",                  tag: "Tổng quan" },
  { href: "/the-link-city/tien-do",  title: "Tiến độ xây dựng",           description: "GĐ1 hoàn thiện, GĐ2 ~55% (23/12/2025).",     tag: "Tiến độ"  },
  { href: "/the-link-city/mat-bang", title: "Mặt bằng The Link City",     description: "Quy hoạch 2 giai đoạn.",                      tag: "Mặt bằng" },
  { href: "/the-link-city/tien-ich", title: "Tiện ích The Link City",     description: "50 tiện ích theo công bố.",                   tag: "Tiện ích" },
  { href: "/the-link-city/phap-ly",  title: "Pháp lý The Link City",     description: "CĐT Phú Việt Tín, VietinBank đồng hành.",     tag: "Pháp lý"  },
];

// ─────────────────────────────────────────────────────────────
// JSON-LD (inline vì "use client" không dùng được export metadata)
// ─────────────────────────────────────────────────────────────
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
  image: TLC_OG,
};

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function HinhAnhPage() {
  const lb = useLightbox(allImages);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {lb.LightboxPortal}

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 min-h-screen">
        <SubPageHeader
          tag="Hình ảnh"
          title="Hình ảnh The Link City Dầu Giây"
          subtitle="Gallery hình ảnh dự án The Link City. Click vào từng ảnh để xem phóng to."
          breadcrumbs={[
            { label: "The Link City", href: "/the-link-city" },
            { label: "Hình ảnh" },
          ]}
          updatedAt="23/12/2025"
          backHref="/the-link-city"
          backLabel="Quay lại trang The Link City"
        />

        {galleryGroups.map((group, gIdx) => {
          const offset = groupOffsets[gIdx];
          return (
            <section key={group.id} id={group.id} className="py-12 border-b border-slate-100 last:border-0">
              <div className="max-w-6xl mx-auto px-4">
                <div className="mb-5 anim-up">
                  <h2 className="text-lg font-bold text-slate-800">{group.title}</h2>
                  <p className="text-xs text-slate-400 mt-0.5">{group.note}</p>
                </div>

                <div className={`grid gap-3 anim-stagger
                  ${group.images.length === 2 ? "grid-cols-2" :
                    group.images.length === 3 ? "grid-cols-2 md:grid-cols-3" :
                    "grid-cols-2 md:grid-cols-4"}`}>
                  {group.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => lb.openLightbox(offset + i)}
                      className={`relative rounded-2xl bg-slate-100 overflow-hidden group anim-img-wrap
                        cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary-300 text-left
                        ${group.contain ? "" : "h-48"}`}
                      aria-label={`Phóng to: ${img.caption}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.alt}
                        className={`w-full transition-transform duration-500 group-hover:scale-[1.04]
                          ${group.contain
                            ? "h-auto object-contain"
                            : "h-full object-cover"}`}
                        loading="lazy"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors
                                      flex flex-col items-center justify-center gap-1">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity
                                         bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5
                                         text-xs font-semibold text-slate-700 shadow flex items-center gap-1">
                          <ZoomIn className="w-3 h-3" /> Phóng to
                        </span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity
                                         text-white text-[10px] font-medium drop-shadow">
                          {img.caption}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Quick nav */}
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
          <Link
            href="/the-link-city"
            className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 font-semibold"
          >
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            Quay lại trang tổng quan The Link City
          </Link>
        </div>
      </div>

      <CorpFooter />
    </>
  );
}
