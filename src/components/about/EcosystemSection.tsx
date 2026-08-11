import Container from "@/components/ui/Container";
import { ECOSYSTEM_UNITS } from "@/data/ecosystem";
import { Building2, Users, HardHat, Heart, ChevronRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// EcosystemSection — Hệ sinh thái Kim Oanh Group
// QUAN TRỌNG: Chỉ liệt kê đơn vị doanh nghiệp thành viên
// KHÔNG đưa tên dự án (K-Home, Mega City 2...) vào sơ đồ này
// ─────────────────────────────────────────────────────────────

const ICONS: Record<string, React.ReactNode> = {
  "ko-land":         <Building2 className="w-5 h-5" />,
  "ko-realty":       <Users className="w-5 h-5" />,
  "ko-construction": <HardHat className="w-5 h-5" />,
  "ko-foundation":   <Heart className="w-5 h-5" />,
};

export default function EcosystemSection() {
  const hub = ECOSYSTEM_UNITS.find((u) => u.isHub)!;
  const members = ECOSYSTEM_UNITS.filter((u) => !u.isHub);

  return (
    <section id="he-sinh-thai" className="py-28 bg-slate-50" data-reveal>
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block w-8 h-px bg-amber-500" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
              HỆ SINH THÁI KIM OANH
            </p>
          </div>
          <h2 className="font-black text-slate-900 text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight mb-4">
            Hệ sinh thái{" "}
            <span className="text-amber-500">Kim Oanh</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Kim Oanh Group xây dựng hệ sinh thái theo hướng đa dạng và chuyên môn hóa, kết nối
            các năng lực trong đầu tư, phát triển, xây dựng, kinh doanh – phân phối bất động sản
            và phát triển cộng đồng.
          </p>
        </div>

        {/* Ecosystem visual */}
        <div className="relative">
          {/* Hub — center */}
          <div className="flex justify-center mb-10">
            <div
              className="rounded-[20px] px-10 py-7 text-center max-w-xs w-full"
              style={{ background: "linear-gradient(135deg, #080f1e, #0f172a)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/KOG_Web_RGB_01.svg"
                alt="Kim Oanh Group"
                className="h-8 w-auto brightness-0 invert mx-auto mb-3"
              />
              <p className="text-white font-black text-base">{hub.name}</p>
              <p className="text-white/40 text-xs mt-1">{hub.role}</p>
            </div>
          </div>

          {/* Connection lines — desktop */}
          <div className="hidden lg:flex justify-center mb-0 relative h-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-amber-300/40" />
            {/* Horizontal spread line */}
            <div className="absolute top-10 left-[12%] right-[12%] h-px bg-amber-300/40" />
          </div>

          {/* Members grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-0 mt-0">
            {members.map((unit) => (
              <div
                key={unit.id}
                className="group rounded-[16px] bg-white border border-slate-200 p-6
                           hover:border-amber-200 hover:shadow-lg transition-all duration-300
                           relative overflow-hidden"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-amber-500/0
                                group-hover:bg-amber-500/60 transition-all rounded-full" />

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center
                                 justify-center text-amber-600 mb-4">
                  {ICONS[unit.id] ?? <Building2 className="w-5 h-5" />}
                </div>

                {/* Name */}
                <p className="font-black text-slate-900 text-sm leading-tight mb-1">
                  {unit.name}
                </p>

                {/* Role */}
                <p className="text-amber-600 text-[11px] font-bold uppercase tracking-wider mb-3">
                  {unit.role}
                </p>

                {/* Description */}
                <p className="text-slate-500 text-xs leading-relaxed">
                  {unit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 flex items-start gap-2 p-4 rounded-xl bg-amber-50/50 border border-amber-100">
            <ChevronRight className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-amber-700/70 text-xs leading-relaxed">
              Sơ đồ hệ sinh thái thể hiện các đơn vị doanh nghiệp thuộc Kim Oanh Group.
              Các tên dự án như K-Home, Mega City 2 là sản phẩm/dự án — không phải công ty thành viên.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
