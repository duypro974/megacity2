import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyInfo";

// ─────────────────────────────────────────────────────────────
// AboutHero — Full-width premium hero cho trang /ve-chung-toi
// ─────────────────────────────────────────────────────────────

export default function AboutHero() {
  const [line1, line2] = COMPANY_INFO.heroHeading.split("\n");

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
      {/* Image placeholder — thay bằng ảnh corporate chính thức */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        {/* Placeholder pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,1) 40px, rgba(255,255,255,1) 41px)",
          }}
        />
        {/* Placeholder label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-white/20 flex items-center justify-center mx-auto mb-3">
              <svg className="w-7 h-7 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <p className="text-white/20 text-xs font-medium">Hero image placeholder</p>
          </div>
        </div>
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
