import Container from "@/components/ui/Container";
import { VERIFIED_LEADERS } from "@/data/leadership";

// ─────────────────────────────────────────────────────────────
// LeadershipSection — Đội ngũ lãnh đạo
// Chỉ render khi có VERIFIED_LEADERS
// ─────────────────────────────────────────────────────────────

export default function LeadershipSection() {
  if (VERIFIED_LEADERS.length === 0) {
    return (
      <section id="lanh-dao" className="py-28 bg-white" data-reveal>
        <Container>
          <div className="flex items-center gap-3 mb-10">
            <span className="inline-block w-8 h-px bg-amber-500" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
              ĐỘI NGŨ LÃNH ĐẠO
            </p>
          </div>
          <div className="rounded-[20px] bg-slate-50 border border-dashed border-slate-200 py-20 text-center">
            <div className="w-14 h-14 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </div>
            <p className="text-slate-400 text-sm font-medium">Thông tin đang được cập nhật.</p>
            <p className="text-slate-400 text-xs mt-1">
              Đội ngũ lãnh đạo sẽ được giới thiệu khi có dữ liệu chính thức.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="lanh-dao" className="py-28 bg-white" data-reveal>
      <Container>
        <div className="flex items-center gap-3 mb-14">
          <span className="inline-block w-8 h-px bg-amber-500" />
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
            ĐỘI NGŨ LÃNH ĐẠO
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_LEADERS.map((leader) => (
            <div
              key={leader.id}
              className="group rounded-[20px] bg-slate-50 border border-slate-200 overflow-hidden
                         hover:border-amber-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                {leader.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top
                               group-hover:scale-[1.03] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl font-black text-slate-400">
                      {leader.initials}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-amber-600 text-[11px] font-bold uppercase tracking-widest mb-1.5">
                  {leader.position}
                </p>
                <h3 className="font-black text-slate-900 text-lg mb-3">{leader.name}</h3>
                {leader.bio && (
                  <p className="text-slate-500 text-sm leading-relaxed">{leader.bio}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
