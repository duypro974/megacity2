"use client";

import Link from "next/link";
import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import SubPageHeader from "@/components/SubPageHeader";
import RelatedContent from "@/components/RelatedContent";
import PageCTA from "@/components/PageCTA";
import ScrollAnimator from "@/components/ScrollAnimator";
import { useLightbox, type LightboxImage } from "@/components/ImageLightbox";
import { TLC_OG, TLC_CERTIFICATE, TLC_LEGAL_AS1 } from "@/lib/cloudinary";
import { SITE_CONFIG } from "@/data/siteConfig";
import {
  ShieldCheck, ArrowRight, AlertTriangle, Download,
  CheckCircle2, Clock, FileText, Landmark, Phone, MessageCircle,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// JSON-LD (client page — via <script> tag)
// ─────────────────────────────────────────────────────────────
const BASE_URL = "https://kimoanhdongnai.com.vn";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pháp lý The Link City Dầu Giây – Hồ sơ & Tiến trình Đầy đủ",
  description:
    "Toàn bộ hồ sơ pháp lý dự án The Link City: quyết định phê duyệt, quy hoạch 1/500, giao đất, nghĩa vụ tài chính, kết luận kiểm toán và công văn UBND tỉnh chỉ đạo cấp sổ 2026.",
  author: { "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL },
  publisher: {
    "@type": "Organization", name: "Kim Oanh Đồng Nai", url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/KOG_Web_RGB_01.svg` },
  },
  datePublished: "2025-12-23",
  dateModified: "2026-09-04",
  url: `${BASE_URL}/the-link-city/phap-ly`,
  image: [
    TLC_CERTIFICATE,
    TLC_LEGAL_AS1,
    TLC_OG,
  ],
  about: { "@type": "RealEstateListing", name: "The Link City", url: `${BASE_URL}/the-link-city` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "The Link City", item: `${BASE_URL}/the-link-city` },
    { "@type": "ListItem", position: 3, name: "Pháp lý", item: `${BASE_URL}/the-link-city/phap-ly` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Pháp lý dự án The Link City đã có sổ đỏ chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Link City đã có Giấy chứng nhận quyền sử dụng đất (Sổ hồng) từng nền cấp cho Chủ đầu tư Phú Việt Tín, hoàn thành 100% tiền sử dụng đất với Cục Thuế Đồng Nai và quy hoạch chi tiết 1/500 phê duyệt đầy đủ. Công văn số 2505/UBND-KTN ngày 13/02/2026 của UBND tỉnh Đồng Nai đã chỉ đạo Sở NN&MT đẩy nhanh tiến độ cấp sổ cho từng khách hàng.",
      },
    },
    {
      "@type": "Question",
      name: "Chủ đầu tư pháp lý của The Link City là ai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chủ đầu tư pháp lý là Công ty TNHH Đầu tư Phú Việt Tín (đại diện: Ông Đặng Phước Bình – TGĐ). Kim Oanh Land (thuộc Kim Oanh Group) là đơn vị tham gia phát triển và phân phối dự án.",
      },
    },
    {
      "@type": "Question",
      name: "Dự án The Link City đã qua kiểm toán nhà nước chưa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Đã xử lý xong. Văn bản kết luận số 261/KV XIII-TH ngày 05/12/2025 của Kiểm toán Nhà nước xác nhận dự án đã hoàn thành các nội dung kiến nghị về giá đất.",
      },
    },
    {
      "@type": "Question",
      name: "VietinBank có xác nhận pháp lý The Link City không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bà Nguyễn Thị Ngọc Trúc – Phó Giám đốc VietinBank chi nhánh Biên Hòa phát biểu tại sự kiện 23/12/2025: 'VietinBank chi nhánh Biên Hòa rất an tâm về pháp lý cũng như tiến độ triển khai dự án The Link City.'",
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// DATA — Timeline pháp lý
// ─────────────────────────────────────────────────────────────
const legalTimeline = [
  {
    year: "2011",
    icon: "📋",
    title: "Quyết định phê duyệt dự án",
    doc: "QĐ số 3317/QĐ-UBND",
    date: "12/12/2011",
    detail: "UBND tỉnh Đồng Nai phê duyệt dự án Khu dân cư A1-C1 Dầu Giây. Các quyết định điều chỉnh tiếp theo: QĐ 2633 (2014), QĐ 3259 (2018), QĐ 906 (2019), QĐ 237 (2024).",
    status: "done",
  },
  {
    year: "2020",
    icon: "🗺️",
    title: "Quy hoạch chi tiết 1/500",
    doc: "QĐ số 2022/QĐ-UBND",
    date: "16/06/2020",
    detail: "UBND tỉnh Đồng Nai phê duyệt quy hoạch chi tiết 1/500. Điều chỉnh cục bộ theo QĐ số 4448/QĐ-UBND ngày 26/10/2021.",
    status: "done",
  },
  {
    year: "2020",
    icon: "🏗️",
    title: "Giao đất",
    doc: "QĐ số 3963/QĐ-UBND",
    date: "26/10/2020",
    detail: "UBND tỉnh Đồng Nai ban hành quyết định giao đất cho Chủ đầu tư Phú Việt Tín triển khai dự án.",
    status: "done",
  },
  {
    year: "2022",
    icon: "💰",
    title: "Hoàn thành 100% nghĩa vụ tài chính",
    doc: "TB số 128/TB.CTDON & VB 7259/CTDON",
    date: "18/02/2022 & 20/05/2022",
    detail: "Cục Thuế tỉnh Đồng Nai xác nhận chủ đầu tư đã hoàn thành 100% nghĩa vụ nộp tiền sử dụng đất. Căn cứ: Thông báo số 128/TB.CTDON.QLHKDCNTK (18/02/2022) và Văn bản xác nhận số 7259/CTDON-QLHKDCNTK (20/05/2022).",
    status: "done",
  },
  {
    year: "2025",
    icon: "🔍",
    title: "Kết luận Kiểm toán Nhà nước",
    doc: "VB số 261/KV XIII-TH",
    date: "05/12/2025",
    detail: "Kiểm toán Nhà nước ban hành văn bản kết luận xác nhận dự án đã hoàn thành toàn bộ các nội dung kiến nghị về giá đất. Đây là bước then chốt để tiến hành cấp GCN cho từng nền.",
    status: "done",
  },
  {
    year: "2026",
    icon: "📨",
    title: "UBND tỉnh chỉ đạo cấp sổ",
    doc: "CV số 2505/UBND-KTN",
    date: "13/02/2026",
    detail: "UBND tỉnh Đồng Nai gửi Công văn số 2505/UBND-KTN đến Sở NN&MT, chỉ đạo đẩy nhanh tiến độ cấp Giấy chứng nhận quyền sử dụng đất từng nền cho dự án The Link City.",
    status: "current",
  },
];

// ─────────────────────────────────────────────────────────────
// Lightbox images
// ─────────────────────────────────────────────────────────────
const legalImages: LightboxImage[] = [
  {
    src: TLC_CERTIFICATE,
    alt: "Hình ảnh thực tế Giấy chứng nhận quyền sử dụng đất từng nền dự án The Link City Dầu Giây cấp năm 2026",
    caption: "Sổ hồng từng nền The Link City đã hoàn tất cấp cho Chủ đầu tư Phú Việt Tín",
  },
  {
    src: TLC_LEGAL_AS1,
    alt: "Công văn số 2505/UBND-KTN của UBND tỉnh Đồng Nai về việc cấp sổ dự án The Link City",
    caption: "Công văn số 2505/UBND-KTN – UBND tỉnh Đồng Nai chỉ đạo cấp sổ The Link City",
  },
];

const relatedItems = [
  { href: "/the-link-city", title: "Tổng quan The Link City", description: "Thông tin đầy đủ về dự án.", tag: "Tổng quan" },
  { href: "/the-link-city/tien-do", title: "Tiến độ The Link City", description: "Cập nhật tiến độ GĐ1 và GĐ2.", tag: "Tiến độ" },
  { href: "/the-link-city/mat-bang", title: "Mặt bằng The Link City", description: "Quy hoạch 2 giai đoạn, cơ cấu sản phẩm.", tag: "Mặt bằng" },
  { href: "/the-link-city/thanh-toan", title: "Chính sách bán hàng", description: "Tiến độ thanh toán & hỗ trợ VietinBank.", tag: "Thanh toán" },
  { href: "/the-link-city/faq", title: "Câu hỏi thường gặp", description: "Giải đáp câu hỏi về pháp lý và tiến độ.", tag: "FAQ" },
];

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function PhapLyPage() {
  const { openLightbox, LightboxPortal } = useLightbox(legalImages);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {LightboxPortal}
      <ScrollAnimator />
      <CorpHeader solid />

      <div className="pb-20 min-h-screen">
        <SubPageHeader
          tag="Pháp lý"
          title="Pháp lý The Link City Dầu Giây"
          subtitle="Toàn bộ hồ sơ pháp lý từ quyết định phê duyệt, giao đất, hoàn thành nghĩa vụ tài chính đến công văn UBND tỉnh chỉ đạo cấp sổ năm 2026."
          breadcrumbs={[
            { label: "The Link City", href: "/the-link-city" },
            { label: "Pháp lý" },
          ]}
          updatedAt="04/09/2026"
          backHref="/the-link-city"
          backLabel="Quay lại trang The Link City"
        />

        {/* ── HIGHLIGHT BANNER ── */}
        <section className="py-10 bg-primary-50 border-b border-primary-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl bg-primary-600 text-white p-6 md:p-8 anim-scale">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-primary-200 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-200 text-xs font-bold uppercase tracking-widest mb-1">Bảo chứng niềm tin</p>
                  <h2 className="text-xl md:text-2xl font-bold mb-3">Pháp lý đầy đủ — Sổ hồng đã cấp cho CĐT</h2>
                  <p className="text-primary-100 text-sm leading-relaxed mb-4">
                    The Link City đã hoàn thành toàn bộ nghĩa vụ tài chính với Nhà nước, vượt qua kiểm toán,
                    và <strong className="text-white">UBND tỉnh Đồng Nai đã ban hành Công văn 2505/UBND-KTN
                    ngày 13/02/2026</strong> chỉ đạo Sở NN&amp;MT cấp Giấy chứng nhận quyền sử dụng đất
                    từng nền cho khách hàng.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "✅ QH 1/500 đầy đủ",
                      "✅ 100% nghĩa vụ tài chính",
                      "✅ Kiểm toán Nhà nước thông qua",
                      "✅ UBND tỉnh chỉ đạo cấp sổ",
                    ].map((tag) => (
                      <span key={tag} className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full font-semibold">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE PHÁP LÝ ── */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-10 anim-up">
              <span className="section-label">Tiến trình pháp lý</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
                Hành trình pháp lý The Link City
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Các mốc pháp lý quan trọng từ 2011 đến nay, kèm số văn bản xác minh.
              </p>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-slate-200 hidden sm:block" />

              <div className="space-y-6">
                {legalTimeline.map((item, i) => (
                  <div key={i} className="relative flex gap-4 sm:gap-6 anim-up" style={{ animationDelay: `${i * 60}ms` }}>
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center text-lg shadow-sm border-2
                        ${item.status === "current"
                          ? "bg-amber-400 border-amber-300 shadow-amber-200"
                          : "bg-white border-slate-200"}`}>
                        {item.status === "done"
                          ? <CheckCircle2 className="w-5 h-5 text-green-500" />
                          : <Clock className="w-5 h-5 text-amber-600" />}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 rounded-2xl border p-5 mb-1
                      ${item.status === "current"
                        ? "bg-amber-50 border-amber-200"
                        : "bg-slate-50 border-slate-200"}`}>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <span className={`text-[10px] font-bold uppercase tracking-widest
                            ${item.status === "current" ? "text-amber-600" : "text-slate-400"}`}>
                            {item.year}
                            {item.status === "current" && " · ĐANG TRIỂN KHAI"}
                          </span>
                          <h3 className="font-bold text-slate-800 text-sm mt-0.5">{item.title}</h3>
                        </div>
                        <span className={`text-[9px] font-black px-2 py-1 rounded-full flex-shrink-0 whitespace-nowrap
                          ${item.status === "current" ? "bg-amber-200 text-amber-800" : "bg-green-100 text-green-700"}`}>
                          {item.status === "done" ? "HOÀN THÀNH" : "ĐANG TIẾN HÀNH"}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 mb-2.5">
                        <FileText className="w-3 h-3 text-slate-400 flex-shrink-0" />
                        <p className="text-xs font-bold text-slate-600">{item.doc}</p>
                        <span className="text-slate-300 mx-1">·</span>
                        <p className="text-xs text-slate-400">{item.date}</p>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-slate-50 border border-slate-200 px-5 py-4 anim-up">
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Nguồn: UBND tỉnh Đồng Nai · Cục Thuế tỉnh Đồng Nai · Kiểm toán Nhà nước · Kim Oanh Group.
                Cập nhật: 04/09/2026. Thông tin mang tính tham khảo — vui lòng yêu cầu chủ đầu tư cung cấp hồ sơ gốc trước khi giao dịch.
              </p>
            </div>
          </div>
        </section>

        {/* ── 2 ẢNH THỰC TẾ ── */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">Hình ảnh thực tế</span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mt-1">
                Chứng từ pháp lý thực tế
              </h2>
              <p className="mt-2 text-sm text-slate-500">Nhấn vào ảnh để phóng to xem chi tiết.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 anim-stagger">
              {/* Ảnh 1 — Sổ hồng */}
              <div
                className="rounded-2xl overflow-hidden border border-slate-200 bg-white cursor-zoom-in group hover:shadow-lg transition-shadow"
                onClick={() => openLightbox(0)}
                role="button"
                tabIndex={0}
                aria-label="Phóng to ảnh sổ hồng The Link City"
                onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
              >
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={TLC_CERTIFICATE}
                    alt="Hình ảnh thực tế Giấy chứng nhận quyền sử dụng đất từng nền dự án The Link City Dầu Giây cấp năm 2026"
                    className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-95"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    ✓ Đã cấp 2026
                  </div>
                </div>
                <div className="px-4 py-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-700">Sổ hồng The Link City</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Giấy CNQSDĐ từng nền — cấp cho CĐT Phú Việt Tín</p>
                  </div>
                  <span className="text-xs font-semibold text-primary-600 flex-shrink-0 ml-3">🔍 Phóng to</span>
                </div>
              </div>

              {/* Ảnh 2 — Công văn 2505 */}
              <div
                className="rounded-2xl overflow-hidden border border-slate-200 bg-white cursor-zoom-in group hover:shadow-lg transition-shadow"
                onClick={() => openLightbox(1)}
                role="button"
                tabIndex={0}
                aria-label="Phóng to công văn 2505 UBND tỉnh Đồng Nai"
                onKeyDown={(e) => e.key === "Enter" && openLightbox(1)}
              >
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={TLC_LEGAL_AS1}
                    alt="Công văn số 2505/UBND-KTN của UBND tỉnh Đồng Nai về việc cấp sổ dự án The Link City"
                    className="w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-95"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-blue-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    CV 2505 · 2026
                  </div>
                </div>
                <div className="px-4 py-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-700">Công văn 2505/UBND-KTN</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">UBND tỉnh Đồng Nai chỉ đạo cấp sổ · 13/02/2026</p>
                  </div>
                  <span className="text-xs font-semibold text-primary-600 flex-shrink-0 ml-3">🔍 Phóng to</span>
                </div>
              </div>
            </div>

            {/* Download CTA — Bộ hồ sơ pháp lý PDF */}
            <div className="mt-8 rounded-2xl border border-primary-200 bg-primary-50 p-5 anim-up">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Download className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Tải Trọn Bộ Hồ Sơ Pháp Lý Dự Án</p>
                    <p className="text-xs text-slate-500 mt-0.5">Công văn 2505/UBND-KTN · File PDF đầy đủ</p>
                  </div>
                </div>
                <a
                  href="/the%20link/2505_CV_CV_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white
                             font-bold text-sm px-5 py-3 rounded-xl transition-colors shadow-sm flex-shrink-0"
                >
                  <Download className="w-4 h-4" />
                  📥 Tải PDF Hồ Sơ Pháp Lý
                </a>
              </div>
              <p className="text-[11px] text-slate-400 mt-3">
                Hoặc liên hệ để nhận toàn bộ hồ sơ gốc bao gồm QĐ phê duyệt, QĐ giao đất, xác nhận Cục Thuế và kết luận Kiểm toán.
              </p>
            </div>
          </div>
        </section>

        {/* ── CÁC BÊN LIÊN QUAN ── */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-8 anim-up">
              <span className="section-label">Các bên liên quan</span>
              <h2 className="text-xl font-bold text-slate-800 mt-1">
                Thông tin pháp lý đã xác minh
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 anim-stagger">
              {[
                { icon: "🏛️", title: "Chủ đầu tư pháp lý",       content: "Công ty TNHH Đầu tư Phú Việt Tín",     detail: "Đại diện: Ông Đặng Phước Bình – Tổng Giám đốc",                                                source: "Báo Đồng Nai (23/12/2025)",                   highlight: true,  badge: "VERIFIED" },
                { icon: "🏢", title: "Đơn vị phát triển",          content: "Kim Oanh Land (Kim Oanh Group)",       detail: "Đại diện: Bà Đặng Thị Kim Oanh – Chủ tịch HĐQT",                                             source: "Báo Đồng Nai (23/12/2025)",                   highlight: false, badge: "VERIFIED" },
                { icon: "📋", title: "Pháp lý Giai đoạn 1",        content: "Sổ hồng đã cấp cho CĐT Phú Việt Tín", detail: "Hạ tầng kỹ thuật hoàn thiện, GCN từng nền đã được cấp",                                        source: "CV 2505/UBND-KTN · 13/02/2026",               highlight: true,  badge: "CONFIRMED" },
                { icon: "⏳", title: "Pháp lý Giai đoạn 2",        content: "Đang hoàn thiện điều kiện cấp GCN",   detail: "UBND tỉnh đã chỉ đạo Sở NN&MT đẩy nhanh tiến độ cấp sổ từng khách hàng",                        source: "CV 2505/UBND-KTN · 13/02/2026",               highlight: false, badge: "IN PROGRESS" },
                { icon: "🏦", title: "Ngân hàng đồng hành",         content: "VietinBank chi nhánh Biên Hòa",       detail: '"Rất an tâm về pháp lý cũng như tiến độ triển khai dự án The Link City"',                       source: "Bà Nguyễn Thị Ngọc Trúc – Phó GĐ (23/12/2025)", highlight: false, badge: "VERIFIED" },
                { icon: "🔍", title: "Kiểm toán Nhà nước",          content: "Đã xử lý xong toàn bộ kiến nghị",    detail: "VB 261/KV XIII-TH xác nhận hoàn thành kiến nghị về giá đất",                                      source: "Kiểm toán Nhà nước · 05/12/2025",             highlight: false, badge: "CLOSED" },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl p-5 border anim-card
                    ${item.highlight ? "bg-primary-50 border-primary-200" : "bg-slate-50 border-slate-200"}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.title}</p>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0 whitespace-nowrap
                          ${item.badge === "VERIFIED" || item.badge === "CONFIRMED" ? "bg-green-100 text-green-700"
                          : item.badge === "CLOSED" ? "bg-slate-100 text-slate-600"
                          : "bg-amber-100 text-amber-700"}`}>
                          {item.badge}
                        </span>
                      </div>
                      <p className={`font-bold text-sm mb-1 ${item.highlight ? "text-primary-800" : "text-slate-800"}`}>
                        {item.content}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed mb-1">{item.detail}</p>
                      <p className="text-[10px] text-slate-400">Nguồn: {item.source}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* VietinBank quote */}
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 anim-up">
              <div className="flex items-start gap-3">
                <Landmark className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-blue-800 mb-2">Xác nhận từ VietinBank chi nhánh Biên Hòa</p>
                  <blockquote className="text-sm text-blue-900 italic leading-relaxed">
                    &ldquo;VietinBank chi nhánh Biên Hòa rất an tâm về pháp lý cũng như tiến độ triển khai dự án The Link City.&rdquo;
                  </blockquote>
                  <p className="text-[11px] text-blue-600 mt-2">
                    — Bà Nguyễn Thị Ngọc Trúc, Phó Giám đốc VietinBank chi nhánh Biên Hòa · 23/12/2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <div className="mb-6 anim-up">
              <span className="section-label">FAQ</span>
              <h2 className="text-xl font-bold text-slate-800 mt-1">Câu hỏi về pháp lý The Link City</h2>
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

        {/* ── DISCLAIMER ── */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 anim-up">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-700 mb-1">Lưu ý quan trọng</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Thông tin pháp lý trên trang này được tổng hợp từ tài liệu và nguồn công bố chính thức.
                    Tình trạng GCN từng sản phẩm cụ thể cần được kiểm tra trực tiếp với chủ đầu tư hoặc
                    cơ quan nhà nước có thẩm quyền trước khi thực hiện giao dịch.
                    Website không cung cấp tư vấn pháp lý.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Nguồn: UBND tỉnh Đồng Nai · Cục Thuế Đồng Nai · Kiểm toán Nhà nước · Kim Oanh Group · Cập nhật: 04/09/2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageCTA
          title="Nhận hồ sơ pháp lý đầy đủ The Link City"
          subtitle="Liên hệ để được gửi trọn bộ tài liệu pháp lý gốc và tư vấn tình trạng từng sản phẩm cụ thể."
          primaryHref={`tel:${SITE_CONFIG.phone}`}
          primaryLabel={`Gọi ${SITE_CONFIG.phoneDisplay}`}
          secondaryHref={SITE_CONFIG.social.zalo}
          secondaryLabel="Nhận hồ sơ qua Zalo"
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
