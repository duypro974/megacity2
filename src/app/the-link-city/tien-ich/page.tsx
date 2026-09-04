import type { Metadata } from "next";
import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import { TLC_OG, TLC_AMENITIES } from "@/lib/cloudinary";
import {
  GraduationCap, Store, Waves, Trees, Dumbbell,
  Calendar, Coffee, Bike, Home, Users, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tiện ích The Link City Dầu Giây – 50 Tiện ích Nội khu",
  description:
    "Hệ tiện ích The Link City Dầu Giây: 50 tiện ích theo công bố gồm trường liên cấp, trung tâm thương mại 2,6 ha, hồ bơi, công viên cảnh quan và tổ hợp thể thao.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city/tien-ich" },
  openGraph: {
    title: "Tiện ích The Link City Dầu Giây – 50 Tiện ích Nội khu",
    description: "50 tiện ích theo công bố: trường liên cấp, TTMM 2,6 ha, hồ bơi, công viên, thể thao, BBQ và quảng trường.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: TLC_OG, width: 1280, height: 720, alt: "Tiện ích nội khu The Link City Dầu Giây" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiện ích The Link City Dầu Giây",
    description: "50 tiện ích: TTMM 2,6 ha, trường liên cấp, hồ bơi, công viên, thể thao.",
    images: [TLC_OG],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tiện ích The Link City Dầu Giây – Hệ thống 50 tiện ích nội khu",
  description: "Thông tin về hệ tiện ích dự án The Link City: 50 tiện ích theo công bố, trung tâm thương mại 2,6 ha và trường liên cấp.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2025-12-23",
  dateModified: "2025-12-23",
  url: "https://kimoanhdongnai.com.vn/the-link-city/tien-ich",
  about: { "@type": "RealEstateListing", name: "The Link City", url: "https://kimoanhdongnai.com.vn/the-link-city" },
};

const amenitiesVerified = [
  { icon: GraduationCap, name: "Trường liên cấp", note: "Theo công bố", status: "planned" },
  { icon: Store, name: "Trung tâm thương mại 2,6 ha", note: "Đã cấp GCN đất, dự kiến XD 2026", status: "inprogress" },
  { icon: Waves, name: "Hồ bơi", note: "Theo công bố", status: "planned" },
  { icon: Trees, name: "Hệ thống công viên cảnh quan", note: "Kim Oanh Land đã đầu tư một phần", status: "partial" },
  { icon: Dumbbell, name: "Tổ hợp thể thao ngoài trời", note: "Kim Oanh Land đã đầu tư một phần", status: "partial" },
  { icon: Home, name: "Khu vui chơi trẻ em", note: "Kim Oanh Land đã đầu tư một phần", status: "partial" },
  { icon: Coffee, name: "Khu BBQ", note: "Theo công bố", status: "planned" },
  { icon: Calendar, name: "Quảng trường sự kiện", note: "Theo công bố", status: "planned" },
  { icon: Bike, name: "Đường dạo bộ", note: "Theo công bố", status: "planned" },
  { icon: Users, name: "Khu sinh hoạt cộng đồng", note: "Theo công bố", status: "planned" },
  { icon: Trees, name: "Hồ cảnh quan", note: "Kim Oanh Land đã đầu tư một phần", status: "partial" },
];

const statusConfig = {
  partial: { label: "Một phần hoàn thiện", color: "bg-green-100 text-green-700 border-green-200" },
  inprogress: { label: "Đang triển khai", color: "bg-amber-100 text-amber-700 border-amber-200" },
  planned: { label: "Theo công bố", color: "bg-blue-100 text-blue-700 border-blue-200" },
};

const relatedItems = [
  { href: "/the-link-city", title: "Tổng quan The Link City", description: "Thông tin đầy đủ về dự án.", tag: "Tổng quan" },
  { href: "/the-link-city/vi-tri", title: "Vị trí The Link City", description: "Ngã tư QL1A và QL20, xã Dầu Giây.", tag: "Vị trí" },
  { href: "/the-link-city/mat-bang", title: "Mặt bằng The Link City", description: "Cơ cấu sản phẩm 2 giai đoạn.", tag: "Mặt bằng" },
  { href: "/the-link-city/phap-ly", title: "Pháp lý The Link City", description: "CĐT Phú Việt Tín, tình trạng GCN.", tag: "Pháp lý" },
  { href: "/the-link-city/hinh-anh", title: "Hình ảnh thực tế", description: "Ảnh hạ tầng và cảnh quan tại dự án.", tag: "Hình ảnh" },
];

export default function TienIchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 min-h-screen">
        <SubPageHeader
          tag="Tiện ích"
          title="Hệ tiện ích The Link City Dầu Giây"
          subtitle="50 tiện ích theo công bố tại kimoanhgroup.vn và sự kiện 23/12/2025. Các hạng mục đang ở các giai đoạn hoàn thiện khác nhau."
          breadcrumbs={[
            { label: "The Link City", href: "/the-link-city" },
            { label: "Tiện ích" },
          ]}
          updatedAt="23/12/2025"
          backHref="/the-link-city"
          backLabel="Quay lại trang The Link City"
        />

        {/* Danh sách tiện ích */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Tổng quan hệ tiện ích</h2>
              <p className="text-sm text-slate-500">
                The Link City được quy hoạch 50 tiện ích theo thông tin công bố chính thức.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 anim-up">
              <span className="text-xs font-bold text-slate-500 mr-1 self-center">Trạng thái:</span>
              {Object.entries(statusConfig).map(([key, val]) => (
                <span key={key} className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${val.color}`}>
                  {val.label}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 anim-stagger">
              {amenitiesVerified.map((a) => {
                const sc = statusConfig[a.status as keyof typeof statusConfig];
                return (
                  <div key={a.name} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-4 anim-card">
                    <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <a.icon className="w-4 h-4 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-800 text-sm leading-snug">{a.name}</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border ${sc.color}`}>
                          {sc.label}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">{a.note}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Highlight TTMM 2,6 ha */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 overflow-hidden anim-up">
              <div className="px-5 py-3.5 bg-amber-600 text-white">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏬</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-200 mb-0.5">Tiện ích nổi bật</p>
                    <h3 className="font-bold text-lg">Trung tâm thương mại 2,6 ha</h3>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-amber-900 leading-relaxed mb-3">
                  Trung tâm thương mại quy mô 2,6 ha là điểm nhấn lớn nhất của hệ tiện ích The Link City.
                  Theo thông tin công bố ngày 23/12/2025:
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    { item: "Đã được cấp Giấy chứng nhận quyền sử dụng đất", done: true },
                    { item: "Hoàn tất thủ tục pháp lý điều chỉnh", done: true },
                    { item: "Dự kiến triển khai xây dựng trong năm 2026", done: false },
                  ].map((r) => (
                    <li key={r.item} className="flex items-start gap-2.5">
                      <span className={`w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center text-[8px] font-black
                        ${r.done ? "bg-green-500 text-white" : "bg-amber-300 text-amber-800"}`}>
                        {r.done ? "✓" : "~"}
                      </span>
                      <span className="text-amber-900">{r.item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-amber-700 mt-3">
                  Nguồn: Báo Đồng Nai (23/12/2025) · Ông Đặng Phước Bình – TGĐ Phú Việt Tín
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tiện ích nội khu vs khu vực */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Phân loại tiện ích</h2>
              <p className="text-sm text-slate-500">Tiện ích nội khu và tiện ích khu vực là hai nhóm khác nhau.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 anim-stagger">
              <div className="bg-white rounded-2xl border border-primary-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
                    <Home className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800">Tiện ích nội khu</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Các tiện ích được xây dựng và quản lý trong phạm vi dự án The Link City.
                  Theo thông tin công bố, dự án quy hoạch 50 tiện ích nội khu.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {["Trường liên cấp", "TTMM 2,6 ha", "Hồ bơi", "Công viên cảnh quan", "Tổ hợp thể thao", "Khu vui chơi trẻ em", "Quảng trường sự kiện"].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-slate-400 mt-3">Theo công bố tại kimoanhgroup.vn + sự kiện 23/12/2025</p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-600 text-sm">📍</span>
                  </div>
                  <h3 className="font-bold text-slate-800">Tiện ích khu vực</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Các tiện ích có sẵn trong khu vực Dầu Giây, Đồng Nai — không thuộc phạm vi dự án.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {[
                    "Trường học, bệnh viện khu vực Dầu Giây",
                    "Chợ và các khu buôn bán hiện hữu",
                    "Hệ thống ngân hàng, dịch vụ công",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-slate-400 mt-3">Tiện ích khu vực không thuộc hệ thống của dự án The Link City.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ảnh tiện ích */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Hình ảnh tiện ích</h2>
              <p className="text-sm text-slate-500">Hình ảnh thực tế sẽ được cập nhật khi có.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 anim-stagger">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`relative rounded-2xl bg-slate-100 overflow-hidden anim-img-wrap ${i === 1 ? "col-span-2 md:col-span-1 h-56" : "h-44"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={TLC_AMENITIES[String(i)]}
                    alt={`Tiện ích nội khu The Link City Dầu Giây — hạng mục ${i}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-4 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs text-slate-400">
              Nguồn: Kim Oanh Group (kimoanhgroup.vn) · Báo Đồng Nai (23/12/2025) · Cập nhật lần cuối: 23/12/2025
            </p>
          </div>
        </section>

        <PageCTA
          title="Tư vấn về tiện ích The Link City"
          subtitle="Liên hệ để được tư vấn chi tiết về các tiện ích và tiến độ hoàn thiện dự án."
          primaryHref="tel:0937587438"
          primaryLabel="Gọi 0937.587.438"
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
