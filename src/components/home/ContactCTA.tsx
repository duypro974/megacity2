"use client";

import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// ContactCTA — Dark full-width CTA strip
// Định vị: Bạn đang quan tâm dự án nào?
// ─────────────────────────────────────────────────────────────

export default function ContactCTA() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #080f1e 0%, #0f172a 50%, #141a2e 100%)" }}
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

      {/* Glow */}
      <div
        className="absolute -top-40 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
      />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="inline-block w-8 h-px bg-amber-400/60" />
            <p className="text-amber-400 text-[11px] font-bold tracking-[0.2em] uppercase">
              KIM OANH ĐỒNG NAI
            </p>
            <span className="inline-block w-8 h-px bg-amber-400/60" />
          </div>

          <h2 className="font-black text-white text-[clamp(1.8rem,4vw,3rem)] leading-tight tracking-tight mb-5">
            Bạn đang quan tâm
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              dự án nào?
            </span>
          </h2>

          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Để lại thông tin, đội ngũ tư vấn sẽ hỗ trợ bạn tìm hiểu thông tin phù hợp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#du-an"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("du-an")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 border border-white/20 text-white/85
                         hover:bg-white/10 hover:border-white/40
                         px-8 py-4 rounded-full text-sm font-semibold transition-all"
            >
              Xem dự án
            </a>
            <a
              href="#lien-he"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("lien-he")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400
                         text-white px-8 py-4 rounded-full text-sm font-bold
                         shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5 group"
            >
              GỬI YÊU CẦU TƯ VẤN
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
