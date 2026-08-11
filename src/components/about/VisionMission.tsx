import Container from "@/components/ui/Container";
import { COMPANY_INFO } from "@/data/companyInfo";

// ─────────────────────────────────────────────────────────────
// VisionMission — Tầm nhìn & Sứ mệnh — editorial two-panel
// ─────────────────────────────────────────────────────────────

export default function VisionMission() {
  return (
    <section id="tam-nhin" className="py-28 bg-slate-50" data-reveal>
      <Container size="xl">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="inline-block w-8 h-px bg-amber-500" />
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
            TẦM NHÌN & SỨ MỆNH
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Tầm nhìn */}
          <div
            className="relative rounded-[24px] p-10 lg:p-14 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #080f1e 0%, #0f172a 100%)" }}
          >
            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,1) 50px, rgba(255,255,255,1) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,1) 50px, rgba(255,255,255,1) 51px)",
              }}
            />
            {/* Glow */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)" }}
            />

            <div className="relative z-10">
              <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
                TẦM NHÌN
              </p>
              <p className="font-black text-white text-[clamp(1.1rem,2vw,1.5rem)] leading-snug tracking-tight">
                {COMPANY_INFO.vision}
              </p>
            </div>
          </div>

          {/* Sứ mệnh */}
          <div
            className="relative rounded-[24px] p-10 lg:p-14 overflow-hidden border border-amber-200 bg-amber-50"
          >
            {/* Large decorative text */}
            <p
              className="absolute -bottom-6 -right-2 font-black text-[8rem] leading-none
                         text-amber-200/30 pointer-events-none select-none"
            >
              SM
            </p>

            <div className="relative z-10">
              <p className="text-amber-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
                SỨ MỆNH
              </p>
              <p
                className="font-black text-slate-900 text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #0f172a 0%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {COMPANY_INFO.mission}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
