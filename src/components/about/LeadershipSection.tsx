import Container from "@/components/ui/Container";
import { VERIFIED_LEADERS } from "@/data/leadership";

// ─────────────────────────────────────────────────────────────
// LeadershipSection — Đội ngũ lãnh đạo
//
// Ảnh 8 (level 1) & ảnh 9 (level 2) là brochure landscape 2048×1451
// → dùng aspect-ratio 16/9 hoặc 3/2, object-fit: contain trên nền
//   sáng để không crop mất nội dung
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
            <p className="text-slate-400 text-sm font-medium">Thông tin đang được cập nhật.</p>
          </div>
        </Container>
      </section>
    );
  }

  const level1 = VERIFIED_LEADERS.filter((l) => l.level === 1);
  const level2 = VERIFIED_LEADERS.filter((l) => l.level === 2);

  return (
    <section id="lanh-dao" className="py-28 bg-white overflow-hidden" data-reveal>
      <Container size="xl">
        {/* ── Header ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-amber-500" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
              ĐỘI NGŨ LÃNH ĐẠO
            </p>
          </div>
          <h2 className="font-black text-slate-900 text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight mb-3">
            Những người dẫn dắt Kim Oanh Group
          </h2>
          <p className="text-slate-500 text-base max-w-xl leading-relaxed">
            Đội ngũ lãnh đạo với định hướng phát triển bất động sản chuyên nghiệp,
            uy tín và bền vững tại Đồng Nai.
          </p>
        </div>

        {/* ── Level 1: Hội đồng quản trị ── */}
        {level1.length > 0 && (
          <div className="mb-6">
            {/* Tier label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-slate-100" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 px-4">
                Lãnh đạo cấp cao
              </span>
              <div className="h-px flex-1 bg-slate-100" />
            </div>

            <div className="grid grid-cols-1 gap-5">
              {level1.map((leader) => (
                <div
                  key={leader.id}
                  className="rounded-[24px] overflow-hidden border border-slate-200
                             bg-white shadow-sm hover:shadow-lg hover:border-amber-200
                             transition-all duration-300"
                >
                  {/* ── Full-width image — full bleed, no crop ── */}
                  <div className="w-full overflow-hidden bg-[#f8f6f2]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-auto block"
                      style={{ maxHeight: "70vh", objectFit: "contain", objectPosition: "center top" }}
                      loading="lazy"
                    />
                  </div>

                  {/* Info strip */}
                  <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center
                                  justify-between gap-4 border-t border-slate-100">
                    <div>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                       bg-amber-500 text-white px-3 py-1 rounded-full mb-2">
                        {leader.positionEn ?? leader.position}
                      </span>
                      <h3 className="font-black text-slate-900 text-xl leading-tight">
                        {leader.name}
                      </h3>
                      <p className="text-amber-600 text-sm font-semibold mt-0.5">
                        {leader.position}
                      </p>
                    </div>
                    {leader.bio && (
                      <p className="text-slate-500 text-sm leading-relaxed sm:max-w-sm">
                        {leader.bio}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Connector */}
        {level1.length > 0 && level2.length > 0 && (
          <div className="flex justify-center my-4">
            <div className="flex flex-col items-center">
              <div className="w-px h-6 bg-slate-200" />
              <div className="w-2 h-2 rounded-full bg-slate-300" />
              <div className="w-px h-6 bg-slate-200" />
            </div>
          </div>
        )}

        {/* ── Level 2: Ban Giám đốc ── */}
        {level2.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-slate-100" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 px-4">
                Ban Giám đốc
              </span>
              <div className="h-px flex-1 bg-slate-100" />
            </div>

            <div className="grid grid-cols-1 gap-5">
              {level2.map((leader) => (
                <div
                  key={leader.id}
                  className="rounded-[20px] overflow-hidden border border-slate-200
                             bg-white shadow-sm hover:shadow-lg hover:border-amber-200
                             transition-all duration-300"
                >
                  {/* Image — full width, no crop */}
                  <div className="w-full overflow-hidden bg-[#f8f6f2]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-auto block"
                      style={{ maxHeight: "70vh", objectFit: "contain", objectPosition: "center top" }}
                      loading="lazy"
                    />
                  </div>

                  {/* Info strip */}
                  <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center
                                  justify-between gap-4 border-t border-slate-100">
                    <div>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                       bg-slate-700 text-white px-3 py-1 rounded-full mb-2">
                        {leader.positionEn ?? leader.position}
                      </span>
                      <h3 className="font-black text-slate-900 text-xl leading-tight">
                        {leader.name}
                      </h3>
                      <p className="text-amber-600 text-sm font-semibold mt-0.5">
                        {leader.position}
                      </p>
                    </div>
                    {leader.bio && (
                      <p className="text-slate-500 text-sm leading-relaxed sm:max-w-sm">
                        {leader.bio}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-100 p-4">
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-500">Lưu ý: </span>
            Thông tin về đội ngũ lãnh đạo mang tính tham khảo, tổng hợp từ nguồn công khai.
            Để có thông tin chính thức, vui lòng liên hệ hoặc truy cập website chính thức của Kim Oanh Group.
          </p>
        </div>
      </Container>
    </section>
  );
}
