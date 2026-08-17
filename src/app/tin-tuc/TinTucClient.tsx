"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Types & constants
// ─────────────────────────────────────────────────────────────
type Category = "tat-ca" | "tin-du-an" | "tien-do" | "thi-truong" | "kim-oanh";

const CATEGORY_LABELS: Record<Category, string> = {
  "tat-ca":    "Tất cả",
  "tin-du-an": "Tin dự án",
  "tien-do":   "Tiến độ",
  "thi-truong":"Thị trường",
  "kim-oanh":  "Thông tin Kim Oanh",
};

const BADGE_COLORS: Record<string, string> = {
  "tin-du-an":  "bg-blue-100 text-blue-700",
  "tien-do":    "bg-emerald-100 text-emerald-700",
  "thi-truong": "bg-amber-100 text-amber-700",
  "kim-oanh":   "bg-purple-100 text-purple-700",
};

// ─────────────────────────────────────────────────────────────
// News data — thêm bài mới append vào đây
// ─────────────────────────────────────────────────────────────
const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_800,c_limit";

interface NewsItem {
  slug:     string;
  title:    string;
  date:     string;
  category: Exclude<Category, "tat-ca">;
  excerpt:  string;
  image:    string;
  href:     string;
}

const ALL_NEWS: NewsItem[] = [
  {
    slug:     "tien-do-mega-city-2",
    title:    "Tiến độ Mega City 2 Nhơn Trạch mới nhất năm 2026",
    date:     "16/08/2026",
    category: "tien-do",
    excerpt:
      "Cập nhật hình ảnh và tình hình thi công thực tế tháng 08/2026: đường nội khu, hạ tầng kỹ thuật và khu nhà xây sẵn tại Mega City 2.",
    image: `${CDN}/megacity2/news5/1`,
    href:  "/tin-tuc/tien-do-mega-city-2",
  },
  {
    slug:     "phap-ly-mega-city-2",
    title:    "Pháp lý Mega City 2 Nhơn Trạch có gì? Cập nhật mới nhất 2026",
    date:     "15/08/2026",
    category: "tin-du-an",
    excerpt:
      "Cập nhật thông tin quy hoạch, quyết định phê duyệt 1772/QĐ-UBND, hồ sơ dự án và những điều nhà đầu tư cần kiểm tra trước khi mua.",
    image: `${CDN}/megacity2/news4/1`,
    href:  "/tin-tuc/phap-ly-mega-city-2",
  },
  {
    slug:     "vi-tri-mega-city-2-o-dau",
    title:    "Vị trí Mega City 2 ở đâu? Phân tích kết nối giao thông và tiềm năng khu vực Nhơn Trạch",
    date:     "14/08/2026",
    category: "tin-du-an",
    excerpt:
      "Khám phá vị trí Mega City 2 Nhơn Trạch, khả năng kết nối với TP.HCM, sân bay Long Thành và các tuyến giao thông trọng điểm của khu vực.",
    image: `${CDN}/megacity2/news3/1`,
    href:  "/tin-tuc/vi-tri-mega-city-2-o-dau",
  },
  {
    slug:     "bang-gia-mega-city-2-moi-nhat",
    title:    "Bảng giá Mega City 2 Nhơn Trạch mới nhất năm 2026",
    date:     "13/08/2026",
    category: "tin-du-an",
    excerpt:
      "Cập nhật giá tham khảo từng loại sản phẩm, các yếu tố ảnh hưởng và lưu ý quan trọng trước khi đầu tư Mega City 2.",
    image: `${CDN}/megacity2/news2/1`,
    href:  "/tin-tuc/bang-gia-mega-city-2-moi-nhat",
  },
  {
    slug:     "co-nen-dau-tu-mega-city-2-nhon-trach",
    title:    "Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026? Phân tích chi tiết",
    date:     "13/08/2026",
    category: "thi-truong",
    excerpt:
      "Đánh giá tiềm năng đầu tư Mega City 2 dựa trên vị trí, pháp lý, hạ tầng và bảng giá cập nhật 2026.",
    image: `${CDN}/megacity2/news1/1`,
    href:  "/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach",
  },
  {
    slug:     "gia-dat-nhon-trach-2026",
    title:    "Giá đất Nhơn Trạch 2026: Thị trường đang diễn biến như thế nào?",
    date:     "16/08/2026",
    category: "thi-truong",
    excerpt:
      "Cập nhật bảng giá đất Nhơn Trạch theo quy định mới, giá thực tế thị trường, các khu vực tiềm năng và phân tích dự án Mega City 2.",
    image: `${CDN}/megacity2/news6/1`,
    href:  "/tin-tuc/gia-dat-nhon-trach-2026",
  },
  {
    slug:     "quy-hoach-nhon-trach-moi-nhat",
    title:    "Quy hoạch Nhơn Trạch mới nhất 2026: Những thay đổi quan trọng cần biết",
    date:     "16/08/2026",
    category: "thi-truong",
    excerpt:
      "Phân tích bản đồ quy hoạch, định hướng phát triển đô thị, hạ tầng giao thông và tác động đến thị trường bất động sản Nhơn Trạch 2026.",
    image: `${CDN}/megacity2/news7/1`,
    href:  "/tin-tuc/quy-hoach-nhon-trach-moi-nhat",
  },
  {
    slug:     "san-bay-long-thanh-va-bat-dong-san-nhon-trach",
    title:    "Sân bay Long Thành ảnh hưởng như thế nào đến bất động sản Nhơn Trạch?",
    date:     "17/08/2026",
    category: "thi-truong",
    excerpt:
      "Sân bay Long Thành đang tạo ra những tác động đáng kể đến thị trường bất động sản Nhơn Trạch. Tìm hiểu khoảng cách, tiềm năng và những khu vực được hưởng lợi.",
    image: `${CDN}/megacity2/news8/1`,
    href:  "/tin-tuc/san-bay-long-thanh-va-bat-dong-san-nhon-trach",
  },
];

// ─────────────────────────────────────────────────────────────
// Card
// ─────────────────────────────────────────────────────────────
function NewsCard({ item }: { item: NewsItem }) {
  const badge = BADGE_COLORS[item.category] ?? "bg-slate-100 text-slate-600";
  return (
    <Link
      href={item.href}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white
                 border border-slate-200 hover:border-amber-300
                 hover:shadow-lg transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-[1.04]
                     transition-transform duration-500"
          loading="lazy"
        />
        <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase
                          tracking-wider px-2.5 py-1 rounded-full ${badge}`}>
          {CATEGORY_LABELS[item.category]}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
          <Calendar className="w-3 h-3 flex-shrink-0" />
          {item.date}
        </div>
        <h2 className="font-bold text-slate-900 text-sm leading-snug mb-2
                       group-hover:text-amber-600 transition-colors line-clamp-2">
          {item.title}
        </h2>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4 flex-1">
          {item.excerpt}
        </p>
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600
                        group-hover:gap-2 transition-all">
          Đọc bài viết
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────
// Main client component
// ─────────────────────────────────────────────────────────────
export default function TinTucClient() {
  const [active, setActive] = useState<Category>("tat-ca");

  const filtered = active === "tat-ca"
    ? ALL_NEWS
    : ALL_NEWS.filter((n) => n.category === active);

  // Đếm số bài theo từng category
  const count = (cat: Category) =>
    cat === "tat-ca"
      ? ALL_NEWS.length
      : ALL_NEWS.filter((n) => n.category === cat).length;

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ── Page header ── */}
      <div className="bg-white border-b border-slate-100 pt-28 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-amber-600 transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-slate-600 font-medium">Tin tức</span>
          </nav>

          <p className="text-amber-500 text-[11px] font-black uppercase tracking-widest mb-1.5">
            Kim Oanh Đồng Nai · Tin tức &amp; Thị trường
          </p>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
            Cập nhật mới nhất về dự án
          </h1>

          {/* ── Filter tabs — row 1: category ── */}
          <div className="flex items-center gap-1 flex-wrap border-b border-slate-200 pb-0 -mb-px">
            {(Object.keys(CATEGORY_LABELS) as Category[]).map((cat) => {
              const n = count(cat);
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative px-4 py-2.5 text-xs font-bold transition-colors whitespace-nowrap
                    border-b-2 -mb-px
                    ${isActive
                      ? "border-amber-500 text-amber-600"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                    }`}
                >
                  {CATEGORY_LABELS[cat]}
                  {n > 0 && (
                    <span className={`ml-1.5 text-[10px] font-black px-1.5 py-0.5 rounded-full
                      ${isActive ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-500"}`}>
                      {n}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white
                          py-20 px-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200
                            flex items-center justify-center mx-auto mb-4">
              <Newspaper className="w-6 h-6 text-slate-300" />
            </div>
            <p className="font-bold text-slate-400 text-sm mb-1">
              Chưa có bài viết trong mục này.
            </p>
            <p className="text-slate-400 text-xs max-w-xs mx-auto">
              Nội dung sẽ được cập nhật sớm.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        )}
      </div>

    </main>
  );
}
