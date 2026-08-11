import Container from "@/components/ui/Container";

// ─────────────────────────────────────────────────────────────
// AboutNewsSection — Tin tức nổi bật
// Không tự tạo news. Nếu chưa có data → empty state.
// ─────────────────────────────────────────────────────────────

// TODO: Import VERIFIED_NEWS khi có hệ thống tin tức
const VERIFIED_NEWS: unknown[] = [];

export default function AboutNewsSection() {
  if (VERIFIED_NEWS.length === 0) return null; // Skip section khi không có data

  return (
    <section id="tin-tuc-noi-bat" className="py-28 bg-slate-50" data-reveal>
      <Container>
        <div className="flex items-center gap-3 mb-14">
          <span className="inline-block w-8 h-px bg-amber-500" />
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
            TIN TỨC NỔI BẬT
          </p>
        </div>
        {/* News grid — uncomment khi có data */}
      </Container>
    </section>
  );
}
