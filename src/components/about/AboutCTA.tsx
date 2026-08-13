import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE_CONFIG } from "@/data/siteConfig";

// ─────────────────────────────────────────────────────────────
// AboutCTA — CTA cuối trang /ve-chung-toi
// ─────────────────────────────────────────────────────────────

export default function AboutCTA() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #080f1e 0%, #0f172a 60%, #141a2e 100%)" }}
      data-reveal
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,1) 60px, rgba(255,255,255,1) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,1) 60px, rgba(255,255,255,1) 61px)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-6 h-px bg-amber-400/60" />
              <p className="text-amber-400 text-[11px] font-bold tracking-[0.2em] uppercase">
                KIM OANH ĐỒNG NAI
              </p>
            </div>
            <h2 className="font-black text-white text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight mb-5">
              Tìm hiểu thêm về
              <br />
              <span className="text-amber-400">
                các dự án tại Đồng Nai
              </span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Khám phá thông tin các dự án Kim Oanh đang được hỗ trợ tại Đồng Nai
              hoặc liên hệ để được tư vấn trực tiếp.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
            <Link
              href="/#du-an"
              className="inline-flex items-center justify-center gap-2
                         bg-amber-500 hover:bg-amber-400 text-white
                         px-8 py-4 rounded-full text-sm font-bold
                         shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5 group"
            >
              Xem dự án
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2
                         border border-white/20 text-white/85
                         hover:bg-white/10 hover:border-white/40
                         px-8 py-4 rounded-full text-sm font-semibold transition-all"
            >
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
