import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";
import { IMG_ABOUT } from "@/lib/cloudinary";

// ─────────────────────────────────────────────────────────────
// AboutHero — Full-width premium hero cho trang /ve-chung-toi
// Ảnh 1: 2560×1688 landscape — background hero
// ─────────────────────────────────────────────────────────────

export default function AboutHero() {
  const [line1, line2] = COMPANY_INFO.heroHeading.split("\n");

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
      {/* ── Background image ── */}
      <div className="absolute inset-0 bg-slate-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG_ABOUT["1"]}
          alt="Kim Oanh Group – Về chúng tôi"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(8,15,30,0.97) 0%, rgba(8,15,30,0.65) 50%, rgba(8,15,30,0.35) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-16 pt-40">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/40 text-xs font-medium mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Về chúng tôi</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-px bg-amber-400" />
            <p className="text-amber-400 text-[11px] font-bold tracking-[0.2em] uppercase">
              VỀ KIM OANH
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-black leading-none tracking-tight text-white mb-6">
            <span className="block text-[clamp(2rem,5vw,4rem)]">{line1}</span>
            <span
              className="block text-[clamp(2rem,5vw,4rem)]"
              style={{
                background: "linear-gradient(90deg, #f59e0b 0%, #fbbf24 60%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {line2}
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl font-light">
            {COMPANY_INFO.heroDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
