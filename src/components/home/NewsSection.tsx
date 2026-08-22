"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Calendar, ArrowRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// NewsSection — Tin tức & cập nhật trang chủ
// Mỗi category chọn 1 bài mới nhất, hiển thị 4 card
// Nút "Xem tất cả" link đến /tin-tuc
// ─────────────────────────────────────────────────────────────

const CDN = "https://res.cloudinary.com/dqy4lfmcf/image/upload/f_auto,q_auto:good,w_800,c_limit";

const BADGE_COLORS: Record<string, string> = {
  "tin-du-an":  "bg-blue-500/90 text-white",
  "tien-do":    "bg-emerald-500/90 text-white",
  "thi-truong": "bg-amber-500/90 text-white",
  "kim-oanh":   "bg-purple-500/90 text-white",
};

const CATEGORY_LABELS: Record<string, string> = {
  "tin-du-an":  "Tin dự án",
  "tien-do":    "Tiến độ",
  "thi-truong": "Thị trường",
  "kim-oanh":   "Thông tin Kim Oanh",
};

interface NewsItem {
  title:    string;
  date:     string;
  category: string;
  excerpt:  string;
  image:    string;
  href:     string;
}

// 1 bài đại diện cho mỗi category — chọn bài mới nhất
const NEWS: NewsItem[] = [
  {
    title:    "5 Lý Do Nên Đầu Tư Mega City 2 Nhơn Trạch Trong Năm 2026",
    date:     "18/08/2026",
    category: "tin-du-an",
    excerpt:  "Phân tích vị trí chiến lược, hạ tầng vùng, quy hoạch đồng bộ, giá hợp lý và tiềm năng dài hạn của dự án Mega City 2.",
    image: `${CDN}/megacity2/news11/1`,
    href:  "/tin-tuc/5-ly-do-nen-dau-tu-mega-city-2",
  },
  {
    title:    "Tiến độ Mega City 2 Nhơn Trạch mới nhất năm 2026",
    date:     "16/08/2026",
    category: "tien-do",
    excerpt:  "Cập nhật hình ảnh và tình hình thi công thực tế tháng 08/2026: đường nội khu, hạ tầng kỹ thuật và khu nhà xây sẵn tại Mega City 2.",
    image: `${CDN}/megacity2/news5/1`,
    href:  "/tin-tuc/tien-do-mega-city-2",
  },
  {
    title:    "Hạ tầng giao thông Nhơn Trạch mới nhất 2026: Những thay đổi tác động đến bất động sản",
    date:     "19/08/2026",
    category: "thi-truong",
    excerpt:  "Cập nhật hạ tầng giao thông Nhơn Trạch: sân bay Long Thành, Vành đai 3, cao tốc Bến Lức - Long Thành và tác động đến thị trường bất động sản.",
    image: `${CDN}/megacity2/news12/1`,
    href:  "/tin-tuc/ha-tang-giao-thong-nhon-trach-moi-nhat",
  },
  {
    title:    "Lịch sử hình thành và phát triển của Kim Oanh Group",
    date:     "19/08/2026",
    category: "kim-oanh",
    excerpt:  "Khám phá hành trình phát triển của Kim Oanh Group từ những ngày đầu thành lập đến khi trở thành thương hiệu bất động sản nổi bật tại Việt Nam.",
    image: `${CDN}/megacity2/news13/1`,
    href:  "/tin-tuc/lich-su-phat-trien-kim-oanh-group",
  },
];

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a href={item.href}
      className="group block rounded-[20px] overflow-hidden bg-white border border-slate-200
                 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
          loading="lazy"
          decoding="async"
          width={400}
          height={250} />
        <div className="absolute top-4 left-4">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${BADGE_COLORS[item.category] ?? "bg-white/90 text-amber-700"}`}>
            {CATEGORY_LABELS[item.category] ?? item.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
          <Calendar className="w-3.5 h-3.5" />{item.date}
        </div>
        <h3 className="font-black text-slate-900 text-base leading-snug mb-2
                       group-hover:text-amber-600 transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{item.excerpt}</p>
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600
                        group-hover:gap-2 transition-all">
          Đọc tiếp
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </a>
  );
}

export default function NewsSection() {
  return (
    <section id="tin-tuc" className="py-28 bg-white" data-reveal>
      <Container>
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
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
          <a href="/tin-tuc"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-600
                       border border-amber-200 bg-amber-50 px-5 py-2.5 rounded-full
                       hover:bg-amber-100 hover:border-amber-300 transition-all whitespace-nowrap self-start sm:self-auto">
            Xem tất cả
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS.map((item) => (
            <NewsCard key={item.href} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
