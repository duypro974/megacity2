"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { IMG_HOMEPAGE } from "@/lib/cloudinary";
import { useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────
// Section dots — các section chính trên homepage
// ─────────────────────────────────────────────────────────────
const SECTIONS = [
  { id: "du-an",        label: "Dự Án" },
  { id: "linh-vuc",     label: "Lĩnh Vực" },
  { id: "gia-tri",      label: "Giá Trị" },
  { id: "tin-tuc",      label: "Tin Tức" },
  { id: "lien-he",      label: "Liên Hệ" },
];

// ─────────────────────────────────────────────────────────────
// SectionBar — thanh dot navigation cố định bên trái
// ─────────────────────────────────────────────────────────────
function SectionBar() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center">
      {/* Card nền — luôn nổi bật trên mọi background */}
      <div className="flex flex-col items-center gap-0 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl px-3 py-4 shadow-xl">

        {/* Label nhóm trên */}
        <p className="text-[8px] font-black tracking-[0.2em] uppercase text-white/30 mb-3 rotate-0">
          MỤC LỤC
        </p>

        {/* Dots */}
        <div className="flex flex-col items-center gap-4">
          {SECTIONS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                aria-label={`Đến phần ${label}`}
                className="group relative flex items-center gap-0"
              >
                {/* Dot */}
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-3 h-3 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]"
                      : "w-2 h-2 bg-white/30 group-hover:bg-amber-300/70 group-hover:scale-110"
                  }`}
                />
                {/* Label tooltip — hiện ra bên phải khi hover */}
                <span
                  className={`absolute left-5 whitespace-nowrap text-[10px] font-bold tracking-widest uppercase
                    px-2.5 py-1 rounded-lg pointer-events-none transition-all duration-200
                    bg-slate-900/90 border border-white/10 shadow-lg
                    ${isActive
                      ? "opacity-100 text-amber-400 translate-x-0"
                      : "opacity-0 group-hover:opacity-100 text-white/80 translate-x-1 group-hover:translate-x-0"
                    }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// HomeHero — KIM OANH ĐỒNG NAI
// ─────────────────────────────────────────────────────────────
export default function HomeHero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Section dot bar — fixed bên trái màn hình */}
      <SectionBar />

      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG_HOMEPAGE["1"]}
          alt="Dự án bất động sản Kim Oanh tại Đồng Nai"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          width={1920}
          height={1080}
        />

        {/* Warm golden overlay — sáng, ấm như ảnh mẫu */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(115deg, rgba(20,12,5,0.62) 0%, rgba(30,18,5,0.38) 50%, rgba(40,25,5,0.15) 100%),
              linear-gradient(to top, rgba(15,10,3,0.70) 0%, rgba(20,13,4,0.25) 40%, transparent 70%)
            `,
          }}
        />

        {/* Warm amber glow — góc dưới phải tạo hiệu ứng ánh vàng như ảnh mẫu */}
        <div
          className="absolute bottom-0 right-0 w-[70%] h-[60%] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at bottom right, rgba(251,146,60,0.18) 0%, rgba(245,158,11,0.08) 40%, transparent 70%)",
          }}
        />
        {/* Ambient warm glow center-right */}
        <div
          className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 65%)" }}
        />

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-white">
          <div className="max-w-5xl mx-auto">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <span className="inline-block w-10 h-px bg-amber-400 flex-shrink-0" />
              <p className="text-amber-400 text-[11px] font-bold tracking-[0.18em] uppercase">
                THÔNG TIN BẤT ĐỘNG SẢN KIM OANH
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-black tracking-tight mb-7 overflow-visible">
              <span
                className="block text-white leading-[1.05]"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
              >
                KIM OANH
              </span>
              <span
                className="block font-black leading-[1.05] mt-1 text-amber-400"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
              >
                ĐỒNG NAI
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-white/70 text-sm md:text-base font-medium tracking-widest uppercase mb-5">
              Thông tin dự án&nbsp;•&nbsp;Tiến độ&nbsp;•&nbsp;Sản phẩm&nbsp;•&nbsp;Tư vấn
            </p>

            {/* Description — LCP element: tăng opacity để đủ contrast WCAG AA và render sớm hơn */}
            <p className="text-white/90 text-base md:text-lg max-w-xl mb-12 leading-relaxed font-light">
              Kênh thông tin tổng hợp các dự án bất động sản Kim Oanh đang được giới
              thiệu tại Đồng Nai, giúp khách hàng thuận tiện tìm hiểu thông tin dự án
              và kết nối tư vấn.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <button
                onClick={() => scrollTo("du-an")}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400
                           text-slate-900 px-8 py-4 rounded-full text-sm font-bold
                           shadow-lg shadow-amber-500/30 transition-all hover:-translate-y-0.5 group"
              >
                KHÁM PHÁ DỰ ÁN
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("lien-he")}
                className="inline-flex items-center justify-center gap-2 border border-white/30
                           text-white/90 hover:bg-white/10 hover:border-white/50
                           px-8 py-4 rounded-full text-sm font-semibold transition-all"
              >
                LIÊN HỆ TƯ VẤN
              </button>
            </div>

            {/* Information bar */}
            <div className="flex flex-wrap gap-x-8 gap-y-5 pt-7 border-t border-white/15">
              {[
                { label: "KHU VỰC", value: "ĐỒNG NAI" },
                { label: "DỰ ÁN",   value: "ĐANG HỖ TRỢ" },
                { label: "THÔNG TIN", value: "CẬP NHẬT" },
                { label: "TƯ VẤN",  value: "KẾT NỐI" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <p className="text-[10px] text-white/40 font-bold tracking-[0.18em] uppercase">
                    {item.label}
                  </p>
                  <p className="text-sm font-black text-white tracking-wider">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo("du-an")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1
                     text-white/30 hover:text-white/60 transition-colors animate-bounce"
          aria-label="Cuộn xuống"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </section>
    </>
  );
}
