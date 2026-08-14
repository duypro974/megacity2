"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Calendar, Tag, ArrowRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// NewsSection — Tin tức & cập nhật
// QUY TẮC: Không tự tạo tin tức, số liệu, tiến độ, pháp lý,
// giá bán, đối tác, giải thưởng giả.
// Khi chưa có data → hiển thị empty state đẹp.
// ─────────────────────────────────────────────────────────────

export type NewsCategory = "tat-ca" | "tin-du-an" | "tien-do" | "thi-truong" | "kim-oanh";

const CATEGORY_LABELS: Record<NewsCategory, string> = {
  "tat-ca": "Tất cả",
  "tin-du-an": "Tin dự án",
  "tien-do": "Tiến độ",
  "thi-truong": "Thị trường",
  "kim-oanh": "Thông tin Kim Oanh",
};

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: Exclude<NewsCategory, "tat-ca">;
  excerpt: string;
  image: string;
  href: string;
  verified: boolean;
  source: string;
}

const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_800,c_limit";

const BADGE_COLORS: Record<string, string> = {
  "tin-du-an":  "bg-blue-500/90 text-white",
  "tien-do":    "bg-emerald-500/90 text-white",
  "thi-truong": "bg-amber-500/90 text-white",
  "kim-oanh":   "bg-purple-500/90 text-white",
};

const NEWS: NewsItem[] = [
  {
    slug: "bang-gia-mega-city-2-moi-nhat",
    title: "Bảng giá Mega City 2 Nhơn Trạch mới nhất năm 2026",
    date: "13/08/2026",
    category: "tin-du-an",
    excerpt:
      "Cập nhật giá tham khảo từng loại sản phẩm, các yếu tố ảnh hưởng và lưu ý quan trọng trước khi đầu tư Mega City 2.",
    image: `${CDN}/megacity2/news2/1`,
    href: "/tin-tuc/bang-gia-mega-city-2-moi-nhat",
    verified: true,
    source: "kimoanhdongnai.com.vn",
  },
  {
    slug: "co-nen-dau-tu-mega-city-2-nhon-trach",
    title: "Có nên đầu tư Mega City 2 Nhơn Trạch năm 2026? Phân tích chi tiết",
    date: "13/08/2026",
    category: "thi-truong",
    excerpt:
      "Đánh giá tiềm năng đầu tư Mega City 2 dựa trên vị trí, pháp lý, hạ tầng và bảng giá cập nhật 2026.",
    image: `${CDN}/megacity2/news1/1`,
    href: "/tin-tuc/co-nen-dau-tu-mega-city-2-nhon-trach",
    verified: true,
    source: "kimoanhdongnai.com.vn",
  },
];

const VERIFIED_NEWS = NEWS.filter((n) => n.verified);

// ── News Card ────────────────────────────────────────────────
function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.href}
      className="group block rounded-[20px] overflow-hidden bg-white border border-slate-200
                 hover:border-amber-200 hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
          loading="lazy"
        />
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${BADGE_COLORS[item.category] ?? "bg-white/90 text-amber-700"}`}>
            {CATEGORY_LABELS[item.category] ?? item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {item.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5" />
            {CATEGORY_LABELS[item.category]}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-black text-slate-900 text-base leading-snug mb-2
                       group-hover:text-amber-600 transition-colors line-clamp-2">
          {item.title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {item.excerpt}
        </p>

        {/* Read more */}
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600
                        group-hover:gap-2 transition-all">
          Đọc tiếp
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </a>
  );
}

// ── Empty State ──────────────────────────────────────────────
function EmptyState() {
  return (
    <div className="rounded-[20px] border border-dashed border-slate-200 bg-slate-50 py-24 px-8 text-center">
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto mb-5 shadow-sm">
        <svg
          className="w-6 h-6 text-slate-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
          />
        </svg>
      </div>

      <p className="font-bold text-slate-400 text-sm mb-1">
        Thông tin đang được cập nhật.
      </p>
      <p className="text-slate-400 text-xs leading-relaxed max-w-xs mx-auto">
        Tin tức và cập nhật sẽ được đăng khi có nguồn dữ liệu xác thực.
      </p>
    </div>
  );
}

// ── Main Section ─────────────────────────────────────────────
export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("tat-ca");

  const filtered =
    activeCategory === "tat-ca"
      ? VERIFIED_NEWS
      : VERIFIED_NEWS.filter((n) => n.category === activeCategory);

  return (
    <section id="tin-tuc" className="py-28 bg-white" data-reveal>
      <Container>
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="TIN TỨC & CẬP NHẬT"
            title={
              <>
                Thông tin
                <br />
                <span className="text-amber-500">mới nhất</span>
              </>
            }
            className="mb-0"
          />

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {(Object.keys(CATEGORY_LABELS) as NewsCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all
                  ${activeCategory === cat
                    ? "bg-amber-500 border-amber-500 text-white shadow-sm shadow-amber-500/20"
                    : "border-slate-200 text-slate-500 hover:border-amber-300 hover:text-amber-600 bg-white"
                  }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </Container>
    </section>
  );
}
