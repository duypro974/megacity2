import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { VERIFIED_PARTNERS } from "@/data/partners";

// ─────────────────────────────────────────────────────────────
// PartnersSection — hiển thị đối tác đã xác minh.
// Khi chưa có data: show trạng thái "đang cập nhật" —
// KHÔNG hiển thị tên đối tác chưa được xác minh.
// ─────────────────────────────────────────────────────────────

export default function PartnersSection() {
  const hasPartners = VERIFIED_PARTNERS.length > 0;

  return (
    <section id="doi-tac" className="py-24 bg-slate-900 text-white" data-reveal>
      <Container>
        <SectionHeading
          eyebrow="Đối tác"
          title={
            <>
              Đồng hành cùng
              <br />
              <span className="text-amber-400">những giá trị bền vững</span>
            </>
          }
          subtitle="Kim Oanh Group hợp tác với các tổ chức và đơn vị để phát triển dự án chất lượng, bảo đảm quyền lợi cho cư dân."
          light
        />

        {hasPartners ? (
          /* Render khi có data đã xác minh */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" data-reveal-stagger>
            {VERIFIED_PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                {partner.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-auto object-contain brightness-0 invert opacity-80"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-sm font-bold text-white">{partner.name}</span>
                )}
                <p className="text-xs text-slate-400 text-center">{partner.relationship}</p>
              </div>
            ))}
          </div>
        ) : (
          /* Placeholder — chờ data được xác minh, không render tên giả */
          <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-6 h-6 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            <p className="text-white/80 font-semibold mb-2">Thông tin đối tác đang được cập nhật</p>
            <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
              Danh sách đối tác chính thức sẽ được công bố sau khi được xác minh đầy đủ.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
