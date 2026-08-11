import Container from "@/components/ui/Container";
import { VERIFIED_AWARDS } from "@/data/awards";

// ─────────────────────────────────────────────────────────────
// AwardsSection — Giải thưởng & Dấu ấn
// Không tự tạo giải thưởng. Nếu chưa có dữ liệu → empty state.
// ─────────────────────────────────────────────────────────────

export default function AwardsSection() {
  return (
    <section id="giai-thuong" className="py-28 bg-white" data-reveal>
      <Container>
        <div className="flex items-center gap-3 mb-14">
          <span className="inline-block w-8 h-px bg-amber-500" />
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
            NHỮNG DẤU ẤN ĐƯỢC GHI NHẬN
          </p>
        </div>

        {VERIFIED_AWARDS.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {VERIFIED_AWARDS.map((award) => (
              <div
                key={award.id}
                className="group rounded-[20px] bg-slate-50 border border-slate-200
                           p-6 text-center hover:border-amber-200 hover:shadow-md
                           transition-all duration-300"
              >
                {award.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={award.image}
                    alt={award.name}
                    className="h-16 w-auto object-contain mx-auto mb-4"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-xl bg-slate-200 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                      />
                    </svg>
                  </div>
                )}
                <p className="font-bold text-slate-900 text-sm leading-tight mb-1">{award.name}</p>
                <p className="text-slate-400 text-xs">{award.organization}</p>
                <p className="text-amber-600 text-xs font-bold mt-1">{award.year}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[20px] bg-slate-50 border border-dashed border-slate-200 py-20 text-center">
            <div className="w-14 h-14 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                />
              </svg>
            </div>
            <p className="text-slate-400 text-sm font-medium">Thông tin đang được cập nhật.</p>
            <p className="text-slate-400 text-xs mt-1">
              Giải thưởng sẽ được công bố khi có dữ liệu xác thực.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
