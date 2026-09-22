"use client";

import CorpHeader from "@/components/layout/CorpHeader";
import CorpFooter from "@/components/layout/CorpFooter";
import PageCTA from "@/components/PageCTA";
import RelatedContent from "@/components/RelatedContent";
import { ArticleFigure, useLightbox, type LightboxImage } from "@/components/ImageLightbox";

// ─────────────────────────────────────────────────────────────
// Cloudinary CDN helpers
// ─────────────────────────────────────────────────────────────
const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good";
const img = (path: string, w = 1280) => `${CDN},w_${w},c_limit/${path}`;

const NEWS1 = {
  "1": img("megacity2/news1/1"),
  "2": img("megacity2/news1/2"),
  "3": img("megacity2/news1/3"),
  "4": img("megacity2/news1/4"),
  "5": img("megacity2/news1/5"),
};

const PUBLISHED = "13/08/2026";
const PUBLISHED_ISO = "2026-08-13";

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const priceRows = [
  { type: "Nhà phố TH", price: "1,15 – 1,8 tỷ" },
  { type: "Nhà phố T",  price: "1,3 – 2,2 tỷ" },
  { type: "Biệt thự V", price: "Từ 2,1 tỷ" },
];

// ── Investor-angle data ──────────────────────────────────────
const rentalRows = [
  { type: "Nhà phố T (đường lớn)", monthly: "6–12 triệu/tháng", annual: "72–144 triệu/năm", yield: "~4–7%*" },
  { type: "Nhà phố T (nội khu)", monthly: "3–6 triệu/tháng", annual: "36–72 triệu/năm", yield: "~3–5%*" },
  { type: "Nhà phố TH (liền kề)", monthly: "3–5 triệu/tháng", annual: "36–60 triệu/năm", yield: "~3–4%*" },
];

const liquidityFactors = [
  { icon: "✅", label: "Pháp lý rõ ràng", desc: "QĐ 1772/QĐ-UBND chấp thuận 2.421 lô phân lô bán nền. 110 GCN đã cấp — dễ dàng giao dịch ngân hàng và công chứng." },
  { icon: "✅", label: "Hạ tầng hoàn thiện ~95%", desc: "Đường nhựa, điện, nước đã có — người mua có thể tham quan thực tế trước khi xuống tiền, giảm tâm lý ngại ngần." },
  { icon: "✅", label: "Nhu cầu thuê từ KCN", desc: "6 khu công nghiệp Nhơn Trạch (KCN 1–6) trong bán kính 5–10 km tạo nguồn khách thuê ổn định từ kỹ sư, chuyên gia." },
  { icon: "⚠️", label: "Thị trường đang phục hồi", desc: "Nhơn Trạch trải qua giai đoạn trầm lắng 2022–2024. Thanh khoản đang cải thiện nhưng chưa ở mức đỉnh — phù hợp nắm giữ trung-dài hạn hơn lướt sóng ngắn." },
  { icon: "⚠️", label: "Phụ thuộc tiến độ hạ tầng vùng", desc: "Giá trị dài hạn liên quan mật thiết đến cầu Nhơn Trạch và sân bay Long Thành — hai công trình đang triển khai, chưa hoàn thành." },
];

const priceGrowthContext = [
  { year: "2019–2021", note: "Giá đất Nhơn Trạch tăng mạnh theo sóng hạ tầng, một số khu vực tăng 2–3× so với 2019." },
  { year: "2022–2024", note: "Thị trường điều chỉnh, thanh khoản giảm, giá một số phân khu giảm 15–25% so với đỉnh 2022." },
  { year: "2025–nay", note: "Pháp lý được cải thiện (QĐ 1772 tháng 5/2025), hạ tầng hoàn thiện — tín hiệu phục hồi rõ hơn." },
];

const investProfiles = [
  {
    profile: "Đầu tư dài hạn (3–5 năm+)",
    suitability: "Cao",
    reason: "Hưởng lợi từ cầu Nhơn Trạch, sân bay Long Thành hoàn thành. Đất thổ cư có sổ hồng hưởng giá trị tăng trưởng dài hạn.",
  },
  {
    profile: "Đầu tư cho thuê",
    suitability: "Trung bình",
    reason: "Lợi suất cho thuê thô ước 3–7%/năm tùy vị trí. Cần xây nhà hoặc thuê nhà xây sẵn — phát sinh chi phí ban đầu.",
  },
  {
    profile: "Lướt sóng ngắn hạn (< 1 năm)",
    suitability: "Thấp",
    reason: "Thị trường Nhơn Trạch chưa đủ thanh khoản để lướt sóng nhanh. Chi phí giao dịch (thuế + phí) ~2–3% làm bào mòn biên lợi nhuận.",
  },
  {
    profile: "Mua đất chờ hạ tầng",
    suitability: "Trung bình",
    reason: "Phụ thuộc vào tiến độ cầu Nhơn Trạch và sân bay. Rủi ro nếu hạ tầng chậm so với kỳ vọng.",
  },
];

const overviewRows = [
  { label: "Tên dự án",        value: "Mega City 2" },
  { label: "Vị trí",           value: "Nhơn Trạch – Đồng Nai" },
  { label: "Loại hình",        value: "Đất nền, nhà phố, biệt thự" },
  { label: "Quy mô",           value: "Hơn 2.400 sản phẩm" },
  { label: "Hình thức sở hữu", value: "Theo quy định hiện hành" },
];

const faqs = [
  {
    q: "Mega City 2 nằm ở đâu?",
    a: "Dự án nằm tại huyện Nhơn Trạch, tỉnh Đồng Nai.",
  },
  {
    q: "Giá đất Mega City 2 hiện nay là bao nhiêu?",
    a: "Mức giá tham khảo dao động từ khoảng 1,15 tỷ đồng tùy theo loại sản phẩm và vị trí. Liên hệ để nhận báo giá cụ thể.",
  },
  {
    q: "Mega City 2 có phù hợp để đầu tư dài hạn không?",
    a: "Điều này phụ thuộc vào mục tiêu đầu tư, khả năng tài chính và chiến lược của từng nhà đầu tư.",
  },
  {
    q: "Pháp lý của Mega City 2 như thế nào?",
    a: "Nhà đầu tư nên kiểm tra trực tiếp các tài liệu pháp lý mới nhất trước khi giao dịch.",
  },
  {
    q: "Có thể xem bảng giá ở đâu?",
    a: null, // rendered separately with link
  },
];

// ─────────────────────────────────────────────────────────────
// Lightbox images list
// ─────────────────────────────────────────────────────────────
const LIGHTBOX_IMAGES: LightboxImage[] = [
  { src: NEWS1["1"], alt: "Toàn cảnh dự án Mega City 2 Nhơn Trạch",     caption: "Toàn cảnh dự án Mega City 2 Nhơn Trạch" },
  { src: NEWS1["2"], alt: "Vị trí dự án Mega City 2 tại Nhơn Trạch",    caption: "Vị trí dự án Mega City 2 tại Nhơn Trạch" },
  { src: NEWS1["3"], alt: "Hạ tầng giao thông kết nối Mega City 2",      caption: "Hạ tầng giao thông kết nối Mega City 2" },
  { src: NEWS1["4"], alt: "Hình ảnh thực tế dự án Mega City 2",          caption: "Hình ảnh thực tế dự án Mega City 2" },
  { src: NEWS1["5"], alt: "Quy hoạch khu dân cư Mega City 2",            caption: "Quy hoạch khu dân cư Mega City 2" },
];

// ─────────────────────────────────────────────────────────────
// Client Component
// ─────────────────────────────────────────────────────────────
export default function CoNenDauTuClient() {
  const { openLightbox, LightboxPortal, images } = useLightbox(LIGHTBOX_IMAGES);
  return (
    <>
      <CorpHeader solid />

      <div className="bg-white min-h-screen">

        {/* ── Hero header ───────────────────────────────────── */}
        <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 pt-24 pb-0">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400 pt-6 mb-5">
              <a href="/" className="hover:text-amber-600 transition-colors">Trang chủ</a>
              <span className="text-slate-300">/</span>
              <a href="/tin-tuc" className="hover:text-amber-600 transition-colors">Tin tức</a>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium line-clamp-1">Có nên đầu tư Mega City 2?</span>
            </nav>

            {/* Category + meta */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Phân tích đầu tư
              </span>
              <time
                dateTime={PUBLISHED_ISO}
                className="text-xs text-slate-400 flex items-center gap-1"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Đăng ngày {PUBLISHED}
              </time>
              <span className="text-xs text-slate-400">· 8 phút đọc</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 max-w-3xl">
              Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026?
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-8">
              Đánh giá toàn diện tiềm năng đầu tư dựa trên vị trí chiến lược, tình trạng pháp lý,
              hạ tầng giao thông và bảng giá thị trường năm 2026.
            </p>
          </div>

          {/* Hero image — full width, clickable lightbox */}
          <div className="max-w-5xl mx-auto px-0 sm:px-6 lg:px-8">
            <div
              className="sm:rounded-t-2xl overflow-hidden border-t border-x border-slate-200 bg-slate-50 relative group cursor-zoom-in"
              onClick={() => openLightbox(0)}
              role="button"
              tabIndex={0}
              aria-label="Phóng to ảnh toàn cảnh"
              onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={NEWS1["1"]}
                alt="Toàn cảnh dự án Mega City 2 Nhơn Trạch"
                className="w-full h-auto block"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic text-center py-2.5 border-x border-slate-200 bg-slate-50 px-4">
              Toàn cảnh dự án Mega City 2 Nhơn Trạch
            </p>
          </div>
        </div>

        {/* ── Main content layout ───────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Article column ── */}
            <article className="flex-1 min-w-0">

              {/* ── Intro ── */}
              <div className="space-y-5 mb-14">
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Trong bối cảnh thị trường bất động sản Đồng Nai đang dần phục hồi, Nhơn Trạch
                  tiếp tục là một trong những khu vực thu hút sự quan tâm của nhiều nhà đầu tư.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Sự phát triển của hệ thống hạ tầng giao thông — đặc biệt là sân bay quốc tế
                  Long Thành, cao tốc Biên Hòa – Vũng Tàu và các tuyến đường kết nối với TP.HCM
                  — đã tạo ra nhiều cơ hội cho thị trường bất động sản khu vực này.
                </p>
                <p className="text-slate-600 text-[17px] leading-[1.85]">
                  Trong số những dự án đang nhận được nhiều sự quan tâm, Mega City 2 là một cái
                  tên nổi bật nhờ quy mô lớn, vị trí thuận lợi và định hướng phát triển lâu dài.
                  Vậy có nên đầu tư Mega City 2 trong năm 2026 hay không?
                </p>
              </div>

              {/* ── Section: Tổng quan ── */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Tổng quan về Mega City 2 Nhơn Trạch
                </h2>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 là khu dân cư được quy hoạch tại huyện Nhơn Trạch, tỉnh Đồng Nai.
                    Dự án được phát triển theo mô hình khu đô thị với nhiều loại hình sản phẩm:
                  </p>
                  <ul className="space-y-3 pl-0">
                    {["Đất nền", "Nhà phố", "Nhà phố thương mại", "Biệt thự", "Nhà xây sẵn"].map((item) => (
                      <li key={item} className="flex items-center gap-3.5 text-slate-700 text-base font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Overview table */}
              <div className="mb-8 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-48">Thông tin</th>
                      <th className="text-left px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Chi tiết</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {overviewRows.map((row) => (
                      <tr key={row.label} className="hover:bg-amber-50/40 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-700">{row.label}</td>
                        <td className="px-6 py-4 text-slate-600">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Links — dạng button nổi bật */}
              <div className="flex flex-wrap gap-3 mb-14">
                <a href="/mega-city-2"
                  className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all">
                  Tổng quan Mega City 2 →
                </a>
                <a href="/mega-city-2/bang-gia"
                  className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all">
                  Bảng giá →
                </a>
              </div>

              {/* Image 2 — Vị trí */}
              <ArticleFigure
                src={NEWS1["2"]}
                alt="Vị trí dự án Mega City 2 tại Nhơn Trạch"
                caption="Vị trí dự án Mega City 2 tại Nhơn Trạch"
                images={images} index={1} onOpen={openLightbox}
              />

              {/* ── Section: Vị trí ── */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Vị trí là yếu tố quan trọng nhất
                </h2>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Một trong những lý do khiến nhiều nhà đầu tư quan tâm đến Mega City 2 chính là
                    vị trí. Dự án nằm trong khu vực đang được hưởng lợi từ hàng loạt công trình hạ
                    tầng lớn:
                  </p>
                  <ul className="space-y-3 pl-0">
                    {[
                      "Sân bay Long Thành",
                      "Cao tốc Biên Hòa – Vũng Tàu",
                      "Vành đai 3 TP.HCM",
                      "Hệ thống cảng biển khu vực Đồng Nai",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3.5 text-slate-700 text-base font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Nhờ lợi thế này, khả năng kết nối giữa Nhơn Trạch với TP.HCM ngày càng được
                    cải thiện, có thể tạo ra tiềm năng tăng giá trong trung và dài hạn.
                  </p>
                  <a href="/mega-city-2/vi-tri"
                    className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all">
                    Xem chi tiết vị trí &amp; kết nối vùng →
                  </a>
                </div>
              </section>

              {/* Image 3 — Hạ tầng */}
              <ArticleFigure
                src={NEWS1["3"]}
                alt="Hạ tầng giao thông kết nối Mega City 2"
                caption="Hạ tầng giao thông kết nối Mega City 2"
                images={images} index={2} onOpen={openLightbox}
              />

              {/* ── Section: Pháp lý ── */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Pháp lý của Mega City 2 có phải là lợi thế?
                </h2>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Pháp lý luôn là yếu tố được quan tâm hàng đầu khi đầu tư bất động sản. Nhà
                    đầu tư nên kiểm tra:
                  </p>
                  <ul className="space-y-3 pl-0">
                    {[
                      "Quy hoạch",
                      "Hồ sơ pháp lý",
                      "Thông tin phân lô",
                      "Tình trạng chuyển nhượng",
                      "Giấy tờ liên quan",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3.5 text-slate-700 text-base font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Trước khi quyết định đầu tư, bạn nên tham khảo trực tiếp các tài liệu pháp lý
                    mới nhất từ đơn vị phân phối hoặc chủ đầu tư.
                  </p>
                  <a href="/mega-city-2/phap-ly"
                    className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-800 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-amber-100 hover:border-amber-400 transition-all">
                    Xem thêm: Pháp lý Mega City 2 →
                  </a>
                </div>
              </section>

              {/* ── Section: Bảng giá ── */}
              <section className="mb-6">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Bảng giá Mega City 2 năm 2026
                </h2>
                <div className="pt-6">
                  <p className="text-slate-600 text-[17px] leading-[1.85] mb-6">
                    Theo dữ liệu thị trường được cập nhật trong năm 2026, mức giá tham khảo của
                    một số sản phẩm như sau:
                  </p>
                </div>
              </section>

              {/* Price table */}
              <div className="mb-5 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-amber-500 text-white">
                      <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Loại sản phẩm</th>
                      <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider">Giá tham khảo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {priceRows.map((row, i) => (
                      <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                        <td className="px-6 py-4 font-semibold text-slate-700">{row.type}</td>
                        <td className="px-6 py-4 font-black text-amber-600 text-base">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Disclaimer */}
              <div className="mb-5 rounded-xl bg-amber-50 border border-amber-200 px-6 py-5 text-sm text-amber-800 flex gap-4">
                <span className="text-xl leading-tight mt-0.5">⚠️</span>
                <div>
                  <p className="font-bold mb-1">Lưu ý</p>
                  <p className="leading-relaxed">
                    Đây chỉ là mức giá tham khảo. Giá thực tế có thể thay đổi tùy theo vị trí,
                    diện tích, hướng và thời điểm giao dịch.
                  </p>
                </div>
              </div>

              <div className="mb-14">
                <a href="/mega-city-2/bang-gia"
                  className="inline-flex items-center gap-2 bg-amber-500 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-amber-600 transition-all shadow-md shadow-amber-500/20">
                  Xem bảng giá chi tiết →
                </a>
              </div>

              {/* Image 4 — Thực tế */}
              <ArticleFigure
                src={NEWS1["4"]}
                alt="Hình ảnh thực tế dự án Mega City 2"
                caption="Hình ảnh thực tế dự án Mega City 2"
                images={images} index={3} onOpen={openLightbox}
              />

              {/* ── Section: Tiềm năng cho thuê ── */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Tiềm năng cho thuê và lợi suất ước tính
                </h2>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Với 6 khu công nghiệp Nhơn Trạch trong bán kính 5–10 km, nhu cầu thuê nhà từ kỹ sư, quản lý và chuyên gia nước ngoài là yếu tố hỗ trợ dòng tiền cho nhà đầu tư. Bảng dưới đây là ước tính tham khảo theo thị trường 2026:
                  </p>
                  <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-slate-900 px-6 py-4">
                      <p className="text-white font-black text-sm uppercase tracking-wider">Ước tính lợi suất cho thuê (tham khảo)</p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase">Loại sản phẩm</th>
                            <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase">Thuê/tháng</th>
                            <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase">Doanh thu/năm</th>
                            <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase">Lợi suất thô*</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {rentalRows.map((row, i) => (
                            <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                              <td className="px-5 py-4 font-semibold text-slate-700 text-sm">{row.type}</td>
                              <td className="px-5 py-4 text-slate-600 text-sm">{row.monthly}</td>
                              <td className="px-5 py-4 text-slate-600 text-sm">{row.annual}</td>
                              <td className="px-5 py-4 font-black text-amber-600">{row.yield}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="rounded-xl bg-amber-50 border border-amber-200 px-6 py-4 text-xs text-amber-800 flex gap-3">
                    <span className="text-base leading-tight mt-0.5 shrink-0">⚠️</span>
                    <p>* Lợi suất thô = doanh thu cho thuê / giá vốn mua đất (chưa tính chi phí xây nhà, quản lý, trống phòng và thuế). Lợi suất thực tế thường thấp hơn. Số liệu mang tính tham khảo, không phải cam kết lợi nhuận.</p>
                  </div>
                </div>
              </section>

              {/* ── Section: Thanh khoản ── */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Đánh giá thanh khoản – điểm mạnh và điểm cần lưu ý
                </h2>
                <div className="pt-6 space-y-4">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Thanh khoản là khả năng mua lại hoặc bán ra tài sản khi cần. Với Mega City 2, có cả yếu tố hỗ trợ lẫn cản trở thanh khoản:
                  </p>
                  <div className="grid gap-3">
                    {liquidityFactors.map((f) => (
                      <div key={f.label} className={`rounded-xl border p-4 flex items-start gap-3 ${f.icon === "✅" ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50"}`}>
                        <span className="text-lg shrink-0">{f.icon}</span>
                        <div>
                          <p className={`font-bold text-sm mb-1 ${f.icon === "✅" ? "text-emerald-800" : "text-amber-800"}`}>{f.label}</p>
                          <p className={`text-xs leading-relaxed ${f.icon === "✅" ? "text-emerald-700" : "text-amber-700"}`}>{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ── Section: Bối cảnh giá & Hồ sơ nhà đầu tư ── */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Bối cảnh thị trường và profile nhà đầu tư phù hợp
                </h2>
                <div className="pt-6 space-y-7">
                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">Diễn biến giá đất Nhơn Trạch</h3>
                    <div className="space-y-3">
                      {priceGrowthContext.map((item) => (
                        <div key={item.year} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4">
                          <div className="w-28 shrink-0 rounded-lg bg-slate-800 text-white text-xs font-black px-3 py-2 text-center leading-tight">{item.year}</div>
                          <p className="text-slate-600 text-sm leading-relaxed">{item.note}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-400 mt-3 italic">* Số liệu tổng hợp từ nguồn thị trường, mang tính tham khảo.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-800 mb-3">Mega City 2 phù hợp với hồ sơ đầu tư nào?</h3>
                    <div className="rounded-2xl border border-slate-200 overflow-hidden">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase">Hồ sơ đầu tư</th>
                            <th className="text-center px-4 py-3 text-xs font-bold text-slate-500 uppercase">Phù hợp</th>
                            <th className="text-left px-5 py-3 text-xs font-bold text-slate-500 uppercase">Lý do</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {investProfiles.map((row, i) => (
                            <tr key={row.profile} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                              <td className="px-5 py-4 font-semibold text-slate-700 text-xs">{row.profile}</td>
                              <td className="px-4 py-4 text-center">
                                <span className={`inline-block text-xs font-black px-2.5 py-1 rounded-full ${
                                  row.suitability === "Cao" ? "bg-emerald-100 text-emerald-700" :
                                  row.suitability === "Thấp" ? "bg-red-100 text-red-700" :
                                  "bg-amber-100 text-amber-700"
                                }`}>{row.suitability}</span>
                              </td>
                              <td className="px-5 py-4 text-slate-500 text-xs leading-relaxed">{row.reason}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Cross-link: An cư ── */}
              <div className="mb-14 rounded-2xl border-2 border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">📖 Bài viết liên quan</p>
                <p className="font-bold text-slate-800 text-base mb-2">Bạn đang muốn mua để ở thay vì đầu tư?</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Góc nhìn về an cư tại Mega City 2 có nhiều điểm khác với góc nhìn đầu tư — từ tiêu chí trường học, tiện ích dân sinh, thời gian đi làm đến môi trường sống thực tế.
                </p>
                <a href="/tin-tuc/mega-city-2-co-phu-hop-de-o"
                  className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-700 font-bold text-sm px-5 py-2.5 rounded-xl hover:border-amber-400 hover:text-amber-700 transition-all">
                  Mega City 2 có phù hợp để ở không? →
                </a>
              </div>

              {/* ── Section: Rủi ro ── */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Những rủi ro cần cân nhắc
                </h2>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Không có bất kỳ khoản đầu tư nào hoàn toàn không có rủi ro. Trước khi quyết
                    định đầu tư, bạn nên cân nhắc:
                  </p>
                  <ul className="space-y-3 pl-0">
                    {[
                      "Khả năng tài chính của bản thân",
                      "Mục tiêu đầu tư ngắn, trung hay dài hạn",
                      "Tính thanh khoản của sản phẩm",
                      "Biến động thị trường bất động sản khu vực",
                      "Thời gian nắm giữ dự kiến",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3.5 text-slate-700 text-base font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Đầu tư bất động sản nên được xem là chiến lược dài hạn thay vì tìm kiếm lợi
                    nhuận trong thời gian ngắn.
                  </p>
                </div>
              </section>

              {/* Image 5 — Quy hoạch */}
              <ArticleFigure
                src={NEWS1["5"]}
                alt="Quy hoạch khu dân cư Mega City 2"
                caption="Quy hoạch khu dân cư Mega City 2"
                images={images} index={4} onOpen={openLightbox}
              />

              {/* ── Section: Kết luận ── */}
              <section className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2 pb-4 border-b-2 border-amber-400">
                  Kết luận
                </h2>
                <div className="pt-6 space-y-5">
                  <p className="text-slate-600 text-[17px] leading-[1.85]">
                    Mega City 2 là một dự án đáng để nghiên cứu nếu bạn đang quan tâm đến thị
                    trường bất động sản Nhơn Trạch. Tuy nhiên, trước khi đưa ra quyết định, bạn nên:
                  </p>
                  <ul className="space-y-3 pl-0">
                    {[
                      "Kiểm tra pháp lý đầy đủ",
                      "Cập nhật bảng giá mới nhất",
                      "Theo dõi tiến độ thi công thực tế",
                      "Tham khảo thông tin từ nhiều nguồn",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3.5 text-slate-700 text-base font-medium">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* FAQ */}
              <div className="mt-4 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-900 px-7 py-6">
                  <h2 className="text-white font-black text-xl tracking-tight">Câu hỏi thường gặp</h2>
                </div>
                <div className="divide-y divide-slate-100">
                  {faqs.map(({ q, a }) => (
                    <div key={q} className="px-7 py-6 hover:bg-slate-50 transition-colors">
                      <p className="font-bold text-slate-800 text-base mb-2">{q}</p>
                      {a ? (
                        <p className="text-slate-500 text-[15px] leading-relaxed">{a}</p>
                      ) : (
                        <p className="text-slate-500 text-[15px] leading-relaxed">
                          Bạn có thể tham khảo tại{" "}
                          <a href="/mega-city-2/bang-gia" className="text-amber-700 font-semibold underline underline-offset-2 hover:text-amber-800">
                            /mega-city-2/bang-gia
                          </a>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-28 space-y-6">

                {/* Quick info card */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-amber-500 px-6 py-4">
                    <p className="text-white font-black text-sm uppercase tracking-wider">Thông tin nhanh</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {overviewRows.map((row) => (
                      <div key={row.label} className="px-6 py-4">
                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">{row.label}</p>
                        <p className="text-sm font-bold text-slate-800">{row.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-wider">Xem thêm</p>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {[
                      { label: "Tổng quan dự án", href: "/mega-city-2" },
                      { label: "Bảng giá 2026", href: "/mega-city-2/bang-gia" },
                      { label: "Vị trí & kết nối", href: "/mega-city-2/vi-tri" },
                      { label: "Pháp lý dự án", href: "/mega-city-2/phap-ly" },
                      { label: "Tiện ích nội khu", href: "/mega-city-2/tien-ich" },
                    ].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between px-6 py-4 text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors group"
                      >
                        <span>{link.label}</span>
                        <span className="text-slate-300 group-hover:text-amber-500 transition-colors text-base">→</span>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>

        {/* Page CTA */}
        <PageCTA
          title="Tư vấn đầu tư Mega City 2 Nhơn Trạch"
          subtitle="Liên hệ để được hỗ trợ chọn vị trí, cập nhật pháp lý và nhận bảng giá mới nhất."
          variant="default"
        />

        {/* Related content */}
        <RelatedContent
          items={[
            {
              href: "/tin-tuc/mega-city-2-co-phu-hop-de-o",
              title: "Mega City 2 có phù hợp để ở không?",
              description: "Phân tích góc an cư: tiện ích dân sinh, trường học, thời gian đi làm và môi trường sống.",
              tag: "An cư",
            },
            {
              href: "/mega-city-2",
              title: "Tổng quan Mega City 2 Nhơn Trạch",
              description: "Thông tin tổng hợp về dự án: quy mô, chủ đầu tư và pháp lý.",
              tag: "Tổng quan",
            },
            {
              href: "/mega-city-2/bang-gia",
              title: "Bảng giá Mega City 2 2026",
              description: "Giá tham khảo TH, T, V theo vị trí và diện tích.",
              tag: "Bảng giá",
            },
            {
              href: "/mega-city-2/vi-tri",
              title: "Vị trí & Kết nối vùng",
              description: "Phân tích vị trí chiến lược tại Nhơn Trạch.",
              tag: "Vị trí",
            },
            {
              href: "/mega-city-2/phap-ly",
              title: "Pháp lý – QĐ 1772",
              description: "Tình trạng pháp lý và điều kiện giao dịch.",
              tag: "Pháp lý",
            },
            {
              href: "/mega-city-2/faq",
              title: "FAQ – Câu hỏi thường gặp",
              description: "Giải đáp các câu hỏi về giá, pháp lý và tiến độ.",
              tag: "FAQ",
            },
          ]}
        />
      </div>

      <CorpFooter />
      {LightboxPortal}
    </>
  );
}
