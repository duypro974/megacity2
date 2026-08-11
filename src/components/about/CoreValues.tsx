import Container from "@/components/ui/Container";
import { CORE_VALUES } from "@/data/companyInfo";

// ─────────────────────────────────────────────────────────────
// CoreValues — 4 giá trị cốt lõi, editorial panels
// ─────────────────────────────────────────────────────────────

const PANEL_STYLES = [
  { bg: "bg-slate-900", num: "text-slate-700", title: "text-white", desc: "text-white/50" },
  { bg: "bg-amber-50 border border-amber-100", num: "text-amber-200", title: "text-slate-900", desc: "text-slate-500" },
  { bg: "bg-white border border-slate-200", num: "text-slate-100", title: "text-slate-900", desc: "text-slate-500" },
  { bg: "bg-amber-500", num: "text-amber-400/40", title: "text-white", desc: "text-white/70" },
];

export default function CoreValues() {
  return (
    <section id="gia-tri" className="py-28 bg-slate-50" data-reveal>
      <Container size="xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-16">
          <span className="inline-block w-8 h-px bg-amber-500" />
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
            GIÁ TRỊ CỐT LÕI
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CORE_VALUES.map((v, i) => {
            const style = PANEL_STYLES[i] ?? PANEL_STYLES[0];
            return (
              <div
                key={v.id}
                className={`relative rounded-[24px] p-10 overflow-hidden ${style.bg}`}
                data-reveal
              >
                {/* Large number — decorative */}
                <p
                  className={`absolute -top-4 -right-2 font-black text-[8rem]
                               leading-none tracking-tighter select-none ${style.num}`}
                >
                  {v.number}
                </p>

                <div className="relative z-10">
                  <h3 className={`font-black text-xl lg:text-2xl tracking-wider uppercase mb-4 ${style.title}`}>
                    {v.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${style.desc}`}>
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
