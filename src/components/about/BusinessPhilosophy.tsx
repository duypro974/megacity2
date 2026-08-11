import Container from "@/components/ui/Container";
import { BUSINESS_PHILOSOPHY } from "@/data/companyInfo";

// ─────────────────────────────────────────────────────────────
// BusinessPhilosophy — Triết lý kinh doanh: Uy tín · Nhân văn · Bền vững
// ─────────────────────────────────────────────────────────────

export default function BusinessPhilosophy() {
  return (
    <section id="triet-ly" className="py-28 bg-white" data-reveal>
      <Container size="xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-8 h-px bg-amber-500" />
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
            TRIẾT LÝ KINH DOANH
          </p>
        </div>

        {/* Large heading */}
        <h2 className="font-black text-slate-900 text-[clamp(2rem,5vw,4rem)]
                       leading-none tracking-tight mb-20">
          {BUSINESS_PHILOSOPHY.heading.split(" – ").map((word, i, arr) => (
            <span key={word}>
              <span className={i === 1 ? "text-amber-500" : ""}>{word}</span>
              {i < arr.length - 1 && (
                <span className="text-slate-200 mx-3">–</span>
              )}
            </span>
          ))}
        </h2>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {BUSINESS_PHILOSOPHY.pillars.map((pillar, i) => (
            <div key={pillar.id} className="relative" data-reveal>
              {/* Number */}
              <p className="font-black text-[4.5rem] leading-none text-slate-100
                             tracking-tighter select-none mb-4">
                0{i + 1}
              </p>

              {/* Title */}
              <h3 className="font-black text-slate-900 text-xl tracking-wider uppercase mb-4">
                {pillar.title}
              </h3>

              {/* Quote */}
              <p className="text-amber-600 text-sm font-bold italic leading-snug mb-4 border-l-2 border-amber-300 pl-4">
                &ldquo;{pillar.quote}&rdquo;
              </p>

              {/* Desc */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {pillar.desc}
              </p>

              {/* Divider */}
              {i < BUSINESS_PHILOSOPHY.pillars.length - 1 && (
                <div className="hidden md:block absolute top-1/4 -right-4 lg:-right-6 w-px h-1/2 bg-slate-100" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
