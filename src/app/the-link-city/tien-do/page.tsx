import type { Metadata } from "next";
import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import { TLC_OG, TLC_PROGRESS } from "@/lib/cloudinary";
import { Clock, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tiến độ The Link City Dầu Giây – Cập nhật Xây dựng",
  description:
    "Tiến độ xây dựng The Link City Dầu Giây: GĐ1 hạ tầng hoàn thiện 100%, GĐ2 đang thi công khẩn trương. Cập nhật mới nhất tháng 10/2026.",
  alternates: { canonical: "https://kimoanhdongnai.com.vn/the-link-city/tien-do" },
  openGraph: {
    title: "Tiến độ The Link City Dầu Giây – Cập nhật Xây dựng",
    description: "GĐ1 hạ tầng hoàn thiện 100%. GĐ2 đang hoàn thiện đồng bộ theo GPXD mới nhất năm 2026.",
    type: "article",
    locale: "vi_VN",
    siteName: "Kim Oanh Đồng Nai",
    images: [{ url: TLC_OG, width: 1280, height: 720, alt: "Tiến độ xây dựng The Link City Dầu Giây" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiến độ The Link City Dầu Giây",
    description: "GĐ1 hoàn thiện hạ tầng 100%, GĐ2 đang hoàn thiện đồng bộ — dữ liệu cập nhật tháng 10/2026.",
    images: [TLC_OG],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tiến độ xây dựng The Link City Dầu Giây – Cập nhật theo nguồn công bố",
  description: "Cập nhật tiến độ xây dựng và hạ tầng thực tế dự án The Link City Dầu Giây mới nhất năm 2026.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai" },
  publisher: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: "https://kimoanhdongnai.com.vn" },
  datePublished: "2026-03-01",
  dateModified: "2026-09-08",
  url: "https://kimoanhdongnai.com.vn/the-link-city/tien-do",
  about: { "@type": "RealEstateListing", name: "The Link City", url: "https://kimoanhdongnai.com.vn/the-link-city" },
};

const timeline = [
  { date: "Giai đoạn 1", event: "Giai đoạn 1 (~53 ha) hoàn thiện hạ tầng kỹ thuật 100%, đưa vào sử dụng", status: "done", source: "Chủ đầu tư Phú Việt Tín" },
  { date: "Giai đoạn 1", event: "Sản phẩm GĐ1 được cấp Giấy chứng nhận quyền sử dụng đất từng nền", status: "done", source: "Chủ đầu tư Phú Việt Tín" },
  { date: "Giai đoạn 1", event: "Vỉa hè, cây xanh, chiếu sáng nội khu hoàn thiện đồng bộ", status: "done", source: "Báo Đồng Nai" },
  { date: "Giai đoạn 1", event: "Trung tâm thương mại 2,6 ha: cấp GCN đất, hoàn tất thủ tục pháp lý", status: "done", source: "Báo Đồng Nai" },
  { date: "Sự kiện", event: "Kim Oanh Land và Phú Việt Tín tổ chức lễ công bố kế hoạch phát triển, công bố GCN dự án", status: "done", source: "Báo Đồng Nai (baodongnai.com.vn)" },
  { date: "Năm 2026", event: "GĐ2 (~47 ha): hạ tầng kỹ thuật đạt trên 60% khối lượng theo GPXD", status: "inprogress", source: "Kim Oanh Group · Nhà thầu Tài Nguyên Xanh" },
  { date: "Năm 2026", event: "Trạm xử lý nước thải hoàn thành và đưa vào vận hành", status: "done", source: "Kim Oanh Land" },
  { date: "Năm 2026", event: "Bàn giao điện trung thế và chiếu sáng vào vận hành", status: "done", source: "Kim Oanh Land" },
  { date: "Năm 2026", event: "Triển khai hoàn thiện hệ thống cây xanh, vỉa hè", status: "inprogress", source: "Kim Oanh Land" },
  { date: "Năm 2026", event: "Chuẩn bị khởi công trung tâm thương mại 2,6 ha", status: "planned", source: "Ông Đặng Phước Bình – TGĐ Phú Việt Tín" },
  { date: "Năm 2026", event: "Hoàn thiện hạ tầng kỹ thuật Giai đoạn 2", status: "inprogress", source: "Nhà thầu Tài Nguyên Xanh" },
];

const statusConfig = {
  done: { label: "Đã thực hiện", badge: "bg-green-100 text-green-700 border-green-200" },
  inprogress: { label: "Đang triển khai", badge: "bg-amber-100 text-amber-700 border-amber-200" },
  planned: { label: "Dự kiến", badge: "bg-blue-100 text-blue-700 border-blue-200" },
};

const relatedItems = [
  { href: "/the-link-city", title: "Tổng quan The Link City", description: "Thông tin đầy đủ về dự án.", tag: "Tổng quan" },
  { href: "/the-link-city/phap-ly", title: "Pháp lý The Link City", description: "CĐT Phú Việt Tín, tình trạng GCN.", tag: "Pháp lý" },
  { href: "/the-link-city/hinh-anh", title: "Hình ảnh thực tế", description: "Ảnh hạ tầng và cảnh quan dự án.", tag: "Hình ảnh" },
  { href: "/the-link-city/mat-bang", title: "Mặt bằng The Link City", description: "Quy hoạch 2 giai đoạn, cơ cấu sản phẩm.", tag: "Mặt bằng" },
  { href: "/the-link-city/faq", title: "Câu hỏi thường gặp", description: "Giải đáp câu hỏi phổ biến về dự án.", tag: "FAQ" },
];

export default function TienDoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 min-h-screen">
        <SubPageHeader
          tag="Tiến độ"
          title="Tiến độ xây dựng The Link City"
          subtitle="Cập nhật tiến độ 2 giai đoạn dự án The Link City mới nhất tháng 10/2026."
          breadcrumbs={[
            { label: "The Link City", href: "/the-link-city" },
            { label: "Tiến độ" },
          ]}
          updatedAt="16/10/2026"
          backHref="/the-link-city"
          backLabel="Quay lại trang The Link City"
        />

        {/* Time-sensitive banner */}
        <div className="bg-blue-50 border-b border-blue-200">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-blue-800 leading-relaxed">
                <span className="font-bold">Lưu ý về thời điểm dữ liệu:</span>{" "}
                Toàn bộ thông tin tiến độ được tổng hợp từ nguồn chính thức và kiểm tra thực địa thực tế mới nhất tháng 10/2026.
                Quý khách hàng có thể liên hệ trực tiếp để nhận hình ảnh / video flycam mới nhất.
              </p>
            </div>
          </div>
        </div>

        {/* Snapshot tổng quan */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Tổng quan tiến độ hoàn thiện</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 anim-stagger">
              {/* GĐ1 */}
              <div className="rounded-2xl border border-green-200 overflow-hidden anim-card">
                <div className="px-5 py-4 bg-green-600 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">Giai đoạn 1 · ~53 ha</h3>
                    <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full">Hoàn thiện</span>
                  </div>
                </div>
                <div className="p-5 bg-white space-y-3">
                  {[
                    "Hạ tầng kỹ thuật: Hoàn thiện, đưa vào sử dụng",
                    "Vỉa hè: Hoàn thiện",
                    "GCN: Một số sản phẩm đã được cấp",
                    "Trạm XLNT: Khánh thành 25/12/2025 (kế hoạch)",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm">
                      <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <span className="text-white text-[8px] font-black">✓</span>
                      </div>
                      <span className="text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 bg-green-50 border-t border-green-100">
                  <p className="text-[11px] text-green-700">Nguồn: Kim Oanh Group · Đã hoàn thiện 100%</p>
                </div>
              </div>

              {/* GĐ2 */}
              <div className="rounded-2xl border border-amber-200 overflow-hidden anim-card">
                <div className="px-5 py-4 bg-amber-500 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">Giai đoạn 2 · ~47 ha</h3>
                    <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full">&gt;60%</span>
                  </div>
                </div>
                <div className="p-5 bg-white space-y-3">
                  {[
                    { text: "Hạ tầng kỹ thuật: đạt trên 60% theo GPXD", note: "Nhà thầu: Tài Nguyên Xanh đang thi công khẩn trương" },
                    { text: "Điện trung thế & chiếu sáng: đang nâng cấp", note: "Hạ tầng kỹ thuật đồng bộ" },
                    { text: "Hệ thống cây xanh & vỉa hè: đang hoàn thiện", note: "Triển khai liên tục năm 2026" },
                    { text: "TTMM 2,6 ha: pháp lý hoàn tất", note: "Chuẩn bị khởi công đồng bộ" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-2.5 text-sm">
                      <div className="w-4 h-4 rounded-full border-2 border-amber-400 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <span className="text-amber-600 text-[8px] font-black">~</span>
                      </div>
                      <div>
                        <p className="text-slate-700">{item.text}</p>
                        <p className="text-xs text-slate-400">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 bg-amber-50 border-t border-amber-100">
                  <p className="text-[11px] text-amber-700">Nguồn: Kim Oanh Group · Nhà thầu Tài Nguyên Xanh</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Timeline tiến độ chi tiết</h2>
              <p className="text-sm text-slate-500">
                Mỗi mục đều ghi rõ thời điểm và nguồn xác minh từ chủ đầu tư và nhà thầu.
              </p>
            </div>

            <div className="space-y-3 anim-stagger">
              {timeline.map((item, i) => {
                const sc = statusConfig[item.status as keyof typeof statusConfig];
                return (
                  <div key={i} className="flex gap-4 relative anim-card">
                    <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center z-10
                      ${item.status === "done" ? "bg-green-500" : item.status === "inprogress" ? "bg-amber-400" : "bg-white border-2 border-blue-300"}`}>
                      <span className={`text-[10px] font-black ${item.status === "done" ? "text-white" : item.status === "inprogress" ? "text-white" : "text-blue-500"}`}>
                        {item.status === "done" ? "✓" : item.status === "inprogress" ? "~" : "○"}
                      </span>
                    </div>
                    <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-4">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-xs font-bold text-slate-500">{item.date}</p>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border flex-shrink-0 ${sc.badge}`}>
                          {sc.label}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-slate-800 mb-1">{item.event}</p>
                      <p className="text-[10px] text-slate-400">Nguồn: {item.source}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ảnh tiến độ */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="anim-up mb-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Hình ảnh tiến độ thực tế</h2>
              <p className="text-sm text-slate-500">Hình ảnh ghi nhận tiến độ tại dự án.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 anim-stagger">
              {[
                { src: TLC_PROGRESS["1"], alt: "Tiến độ thi công hạ tầng The Link City Dầu Giây" },
                { src: TLC_PROGRESS["2"], alt: "Hạ tầng kỹ thuật The Link City Dầu Giây đang hoàn thiện" },
              ].map((img, i) => (
                <div key={i} className="relative rounded-2xl bg-slate-100 overflow-hidden anim-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} className="w-full h-auto object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning */}
        <section className="py-8 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-amber-800 mb-1">Dữ liệu tiến độ cập nhật liên tục</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    Thông tin tiến độ được theo dõi và cập nhật định kỳ. Hiện tại là tháng 10/2026.
                    Quý khách hàng có thể liên hệ trực tiếp để tham quan thực tế công trường.
                  </p>
                  <p className="text-[11px] text-amber-600 mt-2">Nguồn: Báo Đồng Nai · Kim Oanh Group · Cập nhật mới nhất: 16/10/2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageCTA
          title="Cập nhật tiến độ mới nhất The Link City"
          subtitle="Liên hệ để nhận thông tin tiến độ cập nhật nhất từ đơn vị phát triển Kim Oanh Land."
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
