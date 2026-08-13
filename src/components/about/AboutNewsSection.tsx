import Link from "next/link";
import { ArrowRight, MapPin, FileText, TrendingUp, Image as ImageIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import { IMG_REAL, IMG_LEGAL, IMG_REGIONAL, IMG_AMENITIES } from "@/lib/cloudinary";

// ─────────────────────────────────────────────────────────────
// AboutNewsSection — Nội dung nổi bật & Cập nhật mới nhất
//
// Mục tiêu:
// - Không chỉ là "tin tức" chung chung
// - Ưu tiên bài viết liên quan đến Mega City 2
// - Internal linking đến toàn bộ cụm Mega City 2
// - Hỗ trợ E-E-A-T: nội dung thực tế, có nguồn, có ảnh
// - Schema Article + ItemList
// ─────────────────────────────────────────────────────────────

interface ContentCard {
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
  imageAlt?: string;
  date: string;
  readTime?: string;
  featured?: boolean;
}

const MEGA_CITY_2_CONTENT: ContentCard[] = [
  {
    tag: "Pháp lý",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "QĐ 1772/QĐ-UBND: 2.421 lô Mega City 2 được chấp thuận phân lô bán nền",
    excerpt:
      "Ngày 30/05/2025, UBND tỉnh Đồng Nai ban hành Quyết định 1772/QĐ-UBND chấp thuận 2.421 lô thuộc dự án Mega City 2 đủ điều kiện chuyển nhượng quyền sử dụng đất theo hình thức phân lô bán nền. Đây là văn bản pháp lý quan trọng nhất của dự án.",
    href: "/mega-city-2/phap-ly",
    image: IMG_LEGAL["1"],
    imageAlt: "Quyết định 1772 UBND tỉnh Đồng Nai – Mega City 2 phân lô bán nền",
    date: "30/05/2025",
    readTime: "3 phút đọc",
    featured: true,
  },
  {
    tag: "Tiến độ",
    tagColor: "bg-sky-50 text-sky-700 border-sky-200",
    title: "Hạ tầng Mega City 2 đạt ~95%: Đường nhựa, điện, nước hoàn thiện",
    excerpt:
      "Theo thông tin công bố tháng 06/2025, tiến độ hạ tầng khu dân cư Mega City 2 đạt khoảng 95%. Đường nội khu 13–32 m đã trải nhựa, hệ thống điện âm và nước thủy cục hoàn thiện, cây xanh công viên trung tâm đã được trồng.",
    href: "/mega-city-2/tien-do",
    image: IMG_REAL["1"],
    imageAlt: "Hình ảnh thực tế hạ tầng đường nội khu Mega City 2 Nhơn Trạch",
    date: "06/2025",
    readTime: "4 phút đọc",
  },
  {
    tag: "Vị trí",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    title: "Vị trí Mega City 2 Nhơn Trạch: Cách TP.HCM 30–35 km, tiếp giáp đường 25C",
    excerpt:
      "Mega City 2 tọa lạc tại xã Nhơn Trạch, tỉnh Đồng Nai – nằm trong tam giác phát triển TP.HCM – Long Thành – Nhơn Trạch. Cách sân bay quốc tế Long Thành 15–20 km. Kết nối trực tiếp TP.HCM qua đường 25C và phà Cát Lái.",
    href: "/mega-city-2/vi-tri",
    image: IMG_REGIONAL["1"],
    imageAlt: "Vị trí Mega City 2 Nhơn Trạch – kết nối vùng Đông Nam Bộ",
    date: "08/2026",
    readTime: "5 phút đọc",
  },
  {
    tag: "Tiện ích",
    tagColor: "bg-purple-50 text-purple-700 border-purple-200",
    title: "Hệ thống tiện ích Mega City 2: Công viên trung tâm, trường học, thương mại",
    excerpt:
      "Khu dân cư Mega City 2 được quy hoạch đồng bộ với công viên trung tâm, dải thương mại dịch vụ dọc các trục đường chính, sân thể thao đa năng và hệ thống cây xanh nội khu.",
    href: "/mega-city-2/tien-ich",
    image: IMG_AMENITIES["1"],
    imageAlt: "Tiện ích nội khu Mega City 2 – công viên và cảnh quan",
    date: "08/2026",
    readTime: "4 phút đọc",
  },
];

// Danh sách toàn bộ trang SEO của cụm để hiển thị phần "Khám phá thêm"
const CLUSTER_LINKS = [
  { href: "/mega-city-2",              label: "Tổng quan",   icon: "🏘️",  note: "Pillar page" },
  { href: "/mega-city-2/bang-gia",     label: "Bảng giá",    icon: "💰",  note: "Từ 1,15 tỷ" },
  { href: "/mega-city-2/mat-bang",     label: "Mặt bằng",    icon: "📐",  note: "3.160 sản phẩm" },
  { href: "/mega-city-2/tien-ich",     label: "Tiện ích",    icon: "🌳",  note: "Nội khu & ngoại khu" },
  { href: "/mega-city-2/hinh-anh",     label: "Hình ảnh",    icon: "📷",  note: "Ảnh thực tế" },
  { href: "/mega-city-2/thanh-toan",   label: "Thanh toán",  icon: "🏦",  note: "Chính sách tài chính" },
  { href: "/mega-city-2/faq",          label: "FAQ",         icon: "❓",  note: "Giải đáp thắc mắc" },
  { href: "/mega-city-2/phap-ly",      label: "Pháp lý",     icon: "📋",  note: "QĐ 1772/2025" },
  { href: "/mega-city-2/vi-tri",       label: "Vị trí",      icon: "📍",  note: "Nhơn Trạch" },
  { href: "/mega-city-2/tien-do",      label: "Tiến độ",     icon: "🏗️", note: "~95%" },
] as const;

export default function AboutNewsSection() {
  const [featured, ...rest] = MEGA_CITY_2_CONTENT;

  return (
    <section id="tin-tuc-noi-bat" className="py-28 bg-slate-50" data-reveal>
      <Container size="xl">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-amber-500" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
                NỘI DUNG NỔI BẬT
              </p>
            </div>
            <h2 className="font-black text-slate-900 text-[clamp(1.5rem,3vw,2.2rem)] leading-tight">
              Cập nhật về Mega City 2
            </h2>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed max-w-lg">
              Thông tin pháp lý, tiến độ hạ tầng và phân tích dự án tại xã Nhơn Trạch, tỉnh Đồng Nai.
            </p>
          </div>
          <Link
            href="/mega-city-2"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-700
                       hover:text-amber-800 transition-colors flex-shrink-0"
          >
            Xem tất cả về Mega City 2
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── Featured card + 3 cards grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Featured — spans 2 columns */}
          {featured && (
            <Link
              href={featured.href}
              className="lg:col-span-2 group rounded-[20px] overflow-hidden bg-white border
                         border-slate-200 hover:border-amber-200 hover:shadow-xl
                         hover:shadow-amber-50 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              {featured.image && (
                <div className="relative overflow-hidden bg-slate-100" style={{ aspectRatio: "16/7" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.image}
                    alt={featured.imageAlt ?? featured.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-amber-500 text-white
                                     text-[10px] font-bold uppercase tracking-wider px-3 py-1.5
                                     rounded-full shadow-lg">
                      <TrendingUp className="w-3 h-3" />
                      Nổi bật
                    </span>
                  </div>
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-bold border px-2.5 py-1 rounded-full ${featured.tagColor}`}>
                    {featured.tag}
                  </span>
                  <span className="text-[10px] text-slate-400">{featured.date}</span>
                  {featured.readTime && (
                    <span className="text-[10px] text-slate-400">· {featured.readTime}</span>
                  )}
                </div>
                <h3 className="font-black text-slate-900 text-lg leading-snug mb-3
                               group-hover:text-amber-700 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-amber-600">
                  Đọc chi tiết
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          )}

          {/* 3 smaller cards */}
          <div className="flex flex-col gap-5">
            {rest.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-200
                           hover:border-amber-200 hover:shadow-md transition-all duration-200 flex"
              >
                {/* Thumbnail */}
                {item.image && (
                  <div
                    className="flex-shrink-0 overflow-hidden bg-slate-100"
                    style={{ width: "96px" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex-1 p-4 min-w-0">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className={`text-[9px] font-bold border px-2 py-0.5 rounded-full ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <span className="text-[9px] text-slate-400">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-xs leading-snug line-clamp-2
                                 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-amber-600">
                    Xem chi tiết
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Cluster navigation: tất cả trang Mega City 2 ── */}
        <div className="rounded-[20px] bg-white border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-slate-50">
            <MapPin className="w-4 h-4 text-amber-500" />
            <p className="text-sm font-bold text-slate-700">
              Khám phá toàn bộ thông tin Mega City 2 Nhơn Trạch
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x divide-y divide-slate-100">
            {CLUSTER_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col items-center gap-1.5 p-4 hover:bg-amber-50/60
                           transition-colors group text-center"
              >
                <span className="text-xl" aria-hidden="true">{link.icon}</span>
                <span className="text-xs font-bold text-slate-700 group-hover:text-amber-700 transition-colors">
                  {link.label}
                </span>
                <span className="text-[10px] text-slate-400 leading-snug">{link.note}</span>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-slate-500 leading-relaxed max-w-lg">
              Thông tin tổng hợp về dự án Mega City 2 Nhơn Trạch — pháp lý, bảng giá, hình ảnh thực tế
              và tiến độ hạ tầng.
            </p>
            <Link
              href="/mega-city-2"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400
                         text-white text-xs font-bold px-5 py-2.5 rounded-full
                         transition-all hover:-translate-y-px shadow-sm whitespace-nowrap"
            >
              Xem trang chủ dự án
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ── Phần hỗ trợ liên hệ ── */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: <FileText className="w-5 h-5 text-emerald-600" />,
              title: "Nhận hồ sơ pháp lý",
              desc: "QĐ 1772/QĐ-UBND và tài liệu dự án",
              href: "/mega-city-2/phap-ly",
              bg: "bg-emerald-50 border-emerald-200",
            },
            {
              icon: <TrendingUp className="w-5 h-5 text-amber-600" />,
              title: "Xem bảng giá cập nhật",
              desc: "Giá chuyển nhượng TH, T, V từ 1,15 tỷ",
              href: "/mega-city-2/bang-gia",
              bg: "bg-amber-50 border-amber-200",
            },
            {
              icon: <ImageIcon className="w-5 h-5 text-sky-600" />,
              title: "Hình ảnh thực tế dự án",
              desc: "Đường nội khu, nhà mẫu, hạ tầng",
              href: "/mega-city-2/hinh-anh",
              bg: "bg-sky-50 border-sky-200",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-2xl border p-4 flex items-start gap-3 hover:shadow-md
                          transition-all duration-200 group ${item.bg}`}
            >
              <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
              <div>
                <p className="text-sm font-bold text-slate-800 group-hover:text-amber-700 transition-colors mb-0.5">
                  {item.title}
                </p>
                <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
