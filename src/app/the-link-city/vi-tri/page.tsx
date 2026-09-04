"use client";

import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import { TLC_LOCATION } from "@/lib/cloudinary";
import { useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { MapPin, Navigation, ArrowRight, ZoomIn } from "lucide-react";
const mapsImages: LightboxImage[] = [
  { src: TLC_LOCATION["1"], alt: "Bản đồ vị trí The Link City tại ngã tư Dầu Giây, Đồng Nai", caption: "Vị trí The Link City – ngã tư QL1A & QL20" },
  { src: TLC_LOCATION["2"], alt: "Khu vực trung tâm hành chính xã Dầu Giây, Đồng Nai", caption: "Khu vực Dầu Giây nhìn từ trên cao" },
  { src: TLC_LOCATION["3"], alt: "Hạ tầng giao thông khu vực Dầu Giây, Đồng Nai", caption: "Kết nối giao thông khu vực" },
  { src: TLC_LOCATION["4"], alt: "Bản đồ kết nối vùng The Link City Dầu Giây", caption: "Kết nối vùng The Link City" },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vị trí The Link City Dầu Giây – Kết nối giao thông khu vực",
  description:
    "Thông tin về vị trí dự án The Link City tại ngã tư Quốc lộ 1A và Quốc lộ 20, xã Dầu Giây, tỉnh Đồng Nai.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2025-12-23",
  dateModified: "2025-12-23",
  url: "https://kimoanhdongnai.com.vn/the-link-city/vi-tri",
  about: { "@type": "RealEstateListing", name: "The Link City", url: "https://kimoanhdongnai.com.vn/the-link-city" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "The Link City ở đâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City tọa lạc tại xã Dầu Giây, tỉnh Đồng Nai, ngay tại ngã tư Quốc lộ 1A và Quốc lộ 20, trung tâm hành chính xã Dầu Giây.",
      },
    },
    {
      "@type": "Question",
      name: "The Link City nằm trên trục đường nào?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City tọa lạc tại giao điểm của Quốc lộ 1A (trục Bắc–Nam) và Quốc lộ 20 (kết nối Dầu Giây–Đà Lạt). Ngoài ra khu vực Dầu Giây còn kết nối với cao tốc TP.HCM–Long Thành–Dầu Giây.",
      },
    },
    {
      "@type": "Question",
      name: "Dầu Giây thuộc huyện nào của Đồng Nai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dầu Giây là xã thuộc huyện Thống Nhất, tỉnh Đồng Nai. Khu vực này là điểm giao thoa giao thông quan trọng của vùng Đông Nam Bộ.",
      },
    },
  ],
};

const relatedItems = [
  {
    href: "/the-link-city",
    title: "Tổng quan The Link City Dầu Giây",
    description: "Thông tin tổng hợp về dự án: chủ đầu tư, quy mô, sản phẩm và tiến độ.",
    tag: "Tổng quan",
  },
  {
    href: "/the-link-city/mat-bang",
    title: "Mặt bằng The Link City",
    description: "Quy hoạch 2 giai đoạn, cơ cấu sản phẩm shophouse, nhà phố liên kế và biệt thự.",
    tag: "Mặt bằng",
  },
  {
    href: "/the-link-city/phap-ly",
    title: "Pháp lý The Link City",
    description: "Tình trạng pháp lý theo giai đoạn, chủ đầu tư Phú Việt Tín và VietinBank đồng hành.",
    tag: "Pháp lý",
  },
  {
    href: "/the-link-city/tien-do",
    title: "Tiến độ xây dựng",
    description: "Cập nhật tiến độ GĐ1 và GĐ2 theo thông tin công bố ngày 23/12/2025.",
    tag: "Tiến độ",
  },
  {
    href: "/the-link-city/tien-ich",
    title: "Tiện ích The Link City",
    description: "50 tiện ích theo công bố, trung tâm thương mại 2,6 ha và trường liên cấp.",
    tag: "Tiện ích",
  },
];

export default function ViTriPage() {
  const mapsLb = useLightbox(mapsImages);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {mapsLb.LightboxPortal}

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 min-h-screen">
        <SubPageHeader
          tag="Vị trí"
          title="Vị trí The Link City Dầu Giây"
          subtitle="Tọa lạc tại ngã tư Quốc lộ 1A và Quốc lộ 20, trung tâm hành chính xã Dầu Giây, tỉnh Đồng Nai."
          breadcrumbs={[
            { label: "The Link City", href: "/the-link-city" },
            { label: "Vị trí" },
          ]}
          updatedAt="23/12/2025"
          backHref="/the-link-city"
          backLabel="Quay lại trang The Link City"
        />

        {/* Địa chỉ chính xác */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Địa chỉ dự án</h2>
              <p className="text-sm text-slate-500">
                Thông tin vị trí được xác minh từ Báo Đồng Nai và Kim Oanh Group.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 anim-stagger">
              {[
                {
                  icon: MapPin,
                  label: "Địa chỉ hành chính",
                  value: "Xã Dầu Giây, tỉnh Đồng Nai",
                  note: "Nguồn: Báo Đồng Nai 23/12/2025",
                },
                {
                  icon: Navigation,
                  label: "Vị trí giao thông",
                  value: "Ngã tư Quốc lộ 1A và Quốc lộ 20",
                  note: "Nguồn: Kim Oanh Group + Báo Đồng Nai",
                },
                {
                  icon: MapPin,
                  label: "Khu vực",
                  value: "Trung tâm hành chính xã Dầu Giây",
                  note: "Nguồn: Báo Đồng Nai 23/12/2025",
                },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 anim-card hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="font-bold text-slate-800 text-sm leading-snug mb-1">{item.value}</p>
                  <p className="text-[10px] text-slate-400">{item.note}</p>
                </div>
              ))}
            </div>

            {/* Ảnh vị trí + mô tả */}
            <div className="rounded-2xl bg-slate-100 overflow-hidden mb-8 anim-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div
                  className="relative h-64 md:h-auto cursor-zoom-in group"
                  onClick={() => mapsLb.openLightbox(0)}
                  role="button" tabIndex={0}
                  aria-label="Phóng to bản đồ vị trí"
                  onKeyDown={(e) => e.key === "Enter" && mapsLb.openLightbox(0)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={TLC_LOCATION["1"]}
                    alt="Bản đồ vị trí The Link City tại ngã tư Dầu Giây, Đồng Nai"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-semibold text-slate-700 shadow flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" /> Phóng to
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 bg-white flex flex-col justify-center">
                  <h3 className="font-bold text-slate-800 text-base mb-4">Vị trí chiến lược tại Dầu Giây</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Dầu Giây là điểm giao thoa của nhiều tuyến hạ tầng giao thông huyết mạch khu vực Đông Nam Bộ.
                    The Link City tọa lạc ngay tại trung tâm hành chính xã Dầu Giây — vị trí tiếp cận thuận tiện
                    nhiều tuyến đường quan trọng.
                  </p>
                  <p className="text-xs text-slate-400">
                    Nguồn: Kim Oanh Group · Báo Đồng Nai (23/12/2025)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kết nối giao thông */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Kết nối giao thông khu vực</h2>
              <p className="text-sm text-slate-500">
                Các tuyến đường công khai kết nối khu vực Dầu Giây.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 anim-stagger">
              {[
                {
                  name: "Quốc lộ 1A",
                  desc: "Trục huyết mạch Bắc–Nam Việt Nam, kết nối trực tiếp vào dự án từ hướng TP.HCM và các tỉnh phía Bắc.",
                  type: "Quốc lộ",
                  color: "blue",
                },
                {
                  name: "Quốc lộ 20",
                  desc: "Kết nối Dầu Giây với Đà Lạt (Lâm Đồng) và khu vực Tây Nguyên. Tuyến du lịch và logistics quan trọng.",
                  type: "Quốc lộ",
                  color: "green",
                },
                {
                  name: "Cao tốc TP.HCM – Long Thành – Dầu Giây",
                  desc: "Cao tốc kết nối TP.HCM với khu vực Dầu Giây, giảm thiểu thời gian di chuyển so với đường quốc lộ.",
                  type: "Cao tốc",
                  color: "amber",
                },
              ].map((road) => (
                <div key={road.name} className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-shadow anim-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full
                      ${road.color === "blue" ? "bg-blue-100 text-blue-700"
                        : road.color === "green" ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"}`}>
                      {road.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm mb-2">{road.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{road.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 anim-up">
              <p className="text-xs text-amber-800 leading-relaxed">
                <span className="font-bold">Lưu ý:</span> Thông tin đường giao thông trên là các tuyến đường công khai trong khu vực.
                Khoảng cách cụ thể, thời gian di chuyển đến các điểm khác chưa có nguồn xác minh chính thức nên không được đăng tải.
                Vui lòng liên hệ để được tư vấn cụ thể.
              </p>
            </div>
          </div>
        </section>

        {/* Ảnh khu vực */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Hình ảnh vị trí & kết nối vùng</h2>
              <p className="text-sm text-slate-500">Click vào ảnh để xem phóng to.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 anim-stagger">
              {mapsImages.map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl bg-slate-100 overflow-hidden h-44 cursor-zoom-in group anim-img-wrap"
                  onClick={() => mapsLb.openLightbox(i)}
                  role="button" tabIndex={0}
                  aria-label={`Phóng to: ${img.caption}`}
                  onKeyDown={(e) => e.key === "Enter" && mapsLb.openLightbox(i)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-semibold text-slate-700 shadow flex items-center gap-1">
                      <ZoomIn className="w-3 h-3" /> Phóng to
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <div className="anim-up mb-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Câu hỏi về vị trí The Link City</h2>
            </div>
            <div className="space-y-3 anim-stagger-slow">
              {faqSchema.mainEntity.map((faq, i) => (
                <details key={i} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden anim-card">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer px-5 py-4
                                       font-semibold text-slate-800 text-sm list-none group-open:text-primary-700 select-none">
                    <span>{faq.name}</span>
                    <span className="flex-shrink-0 w-5 h-5 text-slate-400 group-open:text-primary-600
                                     transition-transform duration-300 group-open:rotate-180">▼</span>
                  </summary>
                  <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs text-slate-400">
              Nguồn: Kim Oanh Land · Báo Đồng Nai (23/12/2025) · Cập nhật lần cuối: 23/12/2025
            </p>
          </div>
        </section>

        <PageCTA
          title="Tìm hiểu thêm về The Link City"
          subtitle="Liên hệ để nhận thông tin chi tiết về vị trí, bảng giá và pháp lý dự án."
          primaryHref="tel:0937587438"
          primaryLabel="Gọi 0937.587.438"
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
