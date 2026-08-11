import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { VERIFIED_LEADERS } from "@/data/leadership";
import { VERIFIED_MILESTONES } from "@/data/milestones";

export default function LeadershipSection() {
  const hasLeaders = VERIFIED_LEADERS.length > 0;
  const hasMilestones = VERIFIED_MILESTONES.length > 0;

  // Nếu không có gì để render, ẩn section
  if (!hasLeaders && !hasMilestones) return null;

  return (
    <section id="lanh-dao" className="py-24 bg-white" data-reveal>
      <Container>
        <SectionHeading
          eyebrow="Hành trình phát triển"
          title={
            <>
              Những dấu mốc
              <br />
              <span className="text-amber-500">quan trọng</span>
            </>
          }
          subtitle="Các sự kiện và quyết định pháp lý đã được xác minh trong hành trình phát triển của Kim Oanh Group."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Leadership column */}
          <div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">
              Ban lãnh đạo
            </h3>

            {hasLeaders ? (
              <div className="space-y-4">
                {VERIFIED_LEADERS.map((leader) => (
                  <div
                    key={leader.id}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    {leader.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-16 h-16 rounded-2xl object-cover flex-shrink-0"
                      />
                    ) : (
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #f59e0b, #b45309)" }}
                      >
                        {leader.initials}
                      </div>
                    )}
                    <div>
                      <h4 className="font-black text-slate-900 text-base">{leader.name}</h4>
                      <p className="text-amber-600 text-sm font-semibold mt-0.5">{leader.position}</p>
                      {leader.bio && (
                        <p className="text-slate-500 text-sm mt-3 leading-relaxed">{leader.bio}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Placeholder — chờ data được xác minh */
              <div className="rounded-2xl bg-slate-50 border border-dashed border-slate-200 p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-slate-200 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-sm text-slate-500">
                  Thông tin đội ngũ lãnh đạo sẽ được cập nhật.
                </p>
              </div>
            )}
          </div>

          {/* Timeline column */}
          {hasMilestones && (
            <div>
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">
                Dấu mốc đã xác minh
              </h3>
              <div className="relative pl-8">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-amber-200" />
                <div className="space-y-7">
                  {VERIFIED_MILESTONES.map((m, i) => (
                    <div key={`${m.year}-${i}`} className="relative">
                      <div
                        className="absolute -left-8 top-0.5 w-5 h-5 rounded-full border-2 border-amber-500 flex items-center justify-center bg-white"
                      />
                      <p className="text-xs font-bold text-amber-600 mb-0.5">{m.year}</p>
                      <p className="text-sm font-semibold text-slate-800 leading-snug">{m.event}</p>
                      {m.detail && (
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{m.detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
