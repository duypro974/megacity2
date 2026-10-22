"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Layers, CreditCard, Sparkles, ShieldCheck, ChevronRight } from "lucide-react";

const CLUSTER_PAGES = [
  {
    href: "/one-era/vi-tri",
    tag: "Tọa Độ Chiến Lược",
    title: "Vị Trí One Era & Tam Giao Tuyến Metro",
    description: "Phân tích vị trí mặt tiền QL13, kết nối ngã ba sông Suối Cát, Vành Đai 3 và 2 tuyến Metro Line 1B & 2B.",
    icon: MapPin,
    accent: "#35a3ce",
  },
  {
    href: "/one-era/mat-bang",
    tag: "Quy Hoạch Chi Tiết",
    title: "Mặt Bằng 50ha & Sơ Đồ Phân Lô Central District",
    description: "Bóc tách từng block căn Townhouse 5x16m, 6x18m và Shophouse 6x23m góc 2 mặt tiền, lộ giới đường 13m – 25m.",
    icon: Layers,
    accent: "#dfb552",
  },
  {
    href: "/one-era/bang-gia",
    tag: "Chính Sách Bán Hàng",
    title: "Bảng Giá Gốc Đợt 1 & Ưu Đãi Thanh Toán Q4/2028",
    description: "Cập nhật bảng giá gốc CĐT, chính sách thanh toán giãn tiến độ đến năm 2028 và gói hỗ trợ vay 70% lãi suất 0%.",
    icon: CreditCard,
    accent: "#dfb552",
  },
  {
    href: "/one-era/tien-ich",
    tag: "Hệ Sinh Thái Tiện Ích",
    title: "Tiện Ích Quốc Tế: AEON Mall & Fitwel 3 Sao",
    description: "Đại siêu thị AEON Mall Nhật Bản, Cầu Kén Vàng, trường liên cấp VAS Saigon và đại công viên sinh thái 42ha.",
    icon: Sparkles,
    accent: "#dd668c",
  },
  {
    href: "/one-era/phap-ly",
    tag: "Bảo Chứng Quốc Tế",
    title: "Pháp Lý Quy Hoạch 1/500 & Tổng Thầu Coteccons",
    description: "Minh bạch pháp lý 1/500, liên doanh chiến lược Kim Oanh Group (51%) cùng 3 tập đoàn hàng đầu Nhật Bản (49%).",
    icon: ShieldCheck,
    accent: "#58aeb4",
  },
];

export default function OneEraTopicClusterSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#06080e] text-[#f5f2eb] relative overflow-hidden border-b border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#dfb552]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4">
            <span>Topic Cluster • Chuyên Trang Khảo Sát</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 text-white uppercase font-sans">
            CHUYÊN MỤC THÔNG TIN <span className="bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] bg-clip-text text-transparent">DỰ ÁN ONE ERA</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-light">
            Khám phá các chuyên trang thông tin chi tiết từng hạng mục để có góc nhìn toàn diện nhất trước khi quyết định đầu tư.
          </p>
        </div>

        {/* Cluster Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CLUSTER_PAGES.map((page) => {
            const IconComp = page.icon;
            return (
              <Link
                key={page.href}
                href={page.href}
                className="p-6 rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] hover:border-[#dfb552]/40 hover:shadow-[0_15px_35px_rgba(223,181,82,0.12)] transition-all duration-300 group flex flex-col justify-between backdrop-blur-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                      style={{
                        backgroundColor: `${page.accent}15`,
                        color: page.accent,
                        borderColor: `${page.accent}40`,
                      }}
                    >
                      {page.tag}
                    </span>
                    <IconComp className="w-4 h-4 text-slate-500 group-hover:text-[#dfb552] transition-colors" />
                  </div>

                  <h3 className="text-base font-extrabold text-white mb-2 group-hover:text-[#dfb552] transition-colors leading-snug">
                    {page.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
                    {page.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-[#dfb552] group-hover:translate-x-1 transition-transform">
                  <span>Khám phá chuyên trang</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
