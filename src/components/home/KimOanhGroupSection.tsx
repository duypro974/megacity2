import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// KimOanhGroupSection — Hệ sinh thái bất động sản Kim Oanh
//
// Mục đích:
//   1. Giới thiệu Kim Oanh Group (không tự nhận là KOG)
//   2. Trình bày hệ sinh thái 4 đơn vị thành viên
//   3. Dẫn dắt đến section dự án phía dưới
//
// Brand positioning:
//   KIM OANH ĐỒNG NAI → giới thiệu → KIM OANH GROUP → hệ sinh thái
//   Không đồng nhất hai khái niệm.
// ─────────────────────────────────────────────────────────────

// ── Data — 4 đơn vị thành viên ──────────────────────────────
// Thêm/sửa đơn vị tại đây mà không cần chạm vào layout
const MEMBERS = [
  {
    id: "ko-land",
    number: "01",
    name: "KIM OANH LAND",
    desc: "Đơn vị tập trung vào hoạt động đầu tư và phát triển bất động sản, nghiên cứu quỹ đất và hình thành các dự án hướng đến giá trị sống bền vững.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    id: "ko-realty",
    number: "02",
    name: "KIM OANH REALTY",
    desc: "Đơn vị chuyên về tư vấn, tiếp thị và phân phối bất động sản, kết nối sản phẩm với khách hàng thông qua đội ngũ chuyên môn và hệ thống phân phối.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    id: "ko-construction",
    number: "03",
    name: "KIM OANH CONSTRUCTION",
    desc: "Đơn vị hoạt động trong lĩnh vực xây dựng và phát triển hạ tầng, góp phần hoàn thiện các công trình và không gian đô thị.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    id: "ko-foundation",
    number: "04",
    name: "KIM OANH FOUNDATION",
    desc: "Quỹ hướng đến các hoạt động cộng đồng, xã hội và những giá trị phát triển bền vững, góp phần lan tỏa tinh thần sẻ chia.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
] as const;

// ── Image placeholder component ──────────────────────────────
function EcosystemImage() {
  return (
    <div className="relative h-full">
      {/* Main image wrapper */}
      <div
        className="relative w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900"
        style={{ aspectRatio: "4/5", minHeight: "480px" }}
      >
        {/* Placeholder pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,1) 30px, rgba(255,255,255,1) 31px)",
          }}
        />
        {/* Placeholder label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
          <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-white/20 flex items-center justify-center">
            <svg className="w-7 h-7 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <p className="text-white/20 text-xs font-medium text-center leading-snug">
            Ảnh toàn cảnh đô thị
            <br />
            <span className="text-white/10">(placeholder)</span>
          </p>
        </div>

        {/* Badge — top right */}
        <div
          className="absolute top-5 right-5 rounded-[18px] px-5 py-4 text-center shadow-xl"
          style={{ background: "linear-gradient(135deg, #f59e0b 0%, #ea8c00 100%)" }}
        >
          <p className="text-white font-black text-sm leading-tight tracking-wider uppercase">
            KIM OANH
          </p>
          <p className="text-white/80 font-bold text-[11px] leading-tight tracking-widest uppercase mt-0.5">
            GROUP
          </p>
        </div>

        {/* Subtle overlay gradient */}
        <div
          className="absolute inset-0 rounded-[24px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(8,15,30,0.65) 100%)",
          }}
        />

        {/* Floating caption card — bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div
            className="rounded-[18px] p-5"
            style={{
              background: "rgba(8,15,30,0.92)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Accent line */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-5 h-0.5 bg-amber-500 rounded-full" />
              <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                HỆ SINH THÁI BẤT ĐỘNG SẢN
              </p>
            </div>
            <p className="text-white font-black text-base tracking-wide mb-2">
              KIM OANH GROUP
            </p>
            <p className="text-white/40 text-[11px] font-medium tracking-wider">
              Đầu tư&nbsp;•&nbsp;Phát triển&nbsp;•&nbsp;Xây dựng&nbsp;•&nbsp;Phân phối&nbsp;•&nbsp;Cộng đồng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Section ─────────────────────────────────────────────
export default function KimOanhGroupSection() {
  return (
    <section
      id="kim-oanh-group"
      className="py-24 lg:py-32 bg-white"
      data-reveal
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* ══ LEFT — Content ══════════════════════════════ */}
          <div className="flex flex-col">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <span className="inline-block w-7 h-0.5 bg-amber-500 rounded-full flex-shrink-0" />
              <p className="text-amber-600 text-[11px] font-bold tracking-[0.22em] uppercase">
                KIM OANH GROUP
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-black leading-[1.1] tracking-tight mb-7">
              <span
                className="block text-[clamp(2.2rem,4.5vw,3.6rem)]"
                style={{ color: "#0a1628" }}
              >
                Hệ sinh thái
              </span>
              <span
                className="block text-[clamp(2.2rem,4.5vw,3.6rem)]"
                style={{ color: "#f59e0b" }}
              >
                bất động sản Kim Oanh
              </span>
            </h2>

            {/* Introduction */}
            <p
              className="text-[17px] leading-[1.75] mb-10 max-w-[580px]"
              style={{ color: "#52627A" }}
            >
              Theo đuổi định hướng phát triển bền vững, Kim Oanh Group xây dựng
              hệ sinh thái bất động sản với các đơn vị chuyên môn trong đầu tư,
              phát triển, xây dựng, tư vấn – phân phối và các hoạt động hướng
              đến cộng đồng.
            </p>

            {/* ── 4 Member cards — 2×2 grid ─────────────── */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
              data-reveal-stagger
            >
              {MEMBERS.map((m) => (
                <div
                  key={m.id}
                  className="group relative rounded-[20px] bg-white p-7 cursor-default
                             border border-[#E5EAF0]
                             hover:border-amber-400/70 hover:shadow-lg hover:-translate-y-1
                             transition-all duration-300"
                >
                  {/* Top accent line on hover */}
                  <div
                    className="absolute top-0 left-7 right-7 h-0.5 rounded-full bg-amber-500
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5
                               bg-slate-50 text-slate-400
                               group-hover:bg-amber-50 group-hover:text-amber-600
                               transition-colors duration-300"
                  >
                    {m.icon}
                  </div>

                  {/* Number + Name */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-[10px] font-bold text-slate-300 tracking-widest">
                      {m.number}
                    </span>
                    <h3
                      className="font-black text-[13px] tracking-wider uppercase leading-tight"
                      style={{ color: "#0a1628" }}
                    >
                      {m.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] leading-relaxed mb-5" style={{ color: "#6B7A8D" }}>
                    {m.desc}
                  </p>

                  {/* CTA */}
                  <span
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold
                               text-slate-400 group-hover:text-amber-600 transition-colors duration-300"
                  >
                    Tìm hiểu thêm
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </div>
              ))}
            </div>

            {/* ── CTAs ──────────────────────────────────── */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              {/* Primary */}
              <Link
                href="/#du-an"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400
                           text-white text-[13px] font-bold px-6 py-3 rounded-full
                           shadow-md shadow-amber-500/20 hover:shadow-amber-500/30
                           transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Khám phá các dự án
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* Secondary */}
              <Link
                href="/ve-chung-toi"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold
                           text-slate-500 hover:text-amber-600 transition-colors duration-300 py-3 group"
              >
                Tìm hiểu về Kim Oanh Group
                <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
              </Link>
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] text-slate-400 mt-8 leading-relaxed">
              Thông tin mang tính tham khảo. Website{" "}
              <span className="font-semibold">Kim Oanh Đồng Nai</span>{" "}
              không đại diện cho Kim Oanh Group.
            </p>
          </div>

          {/* ══ RIGHT — Image ════════════════════════════════ */}
          <div className="lg:sticky lg:top-28">
            <EcosystemImage />
          </div>
        </div>
      </div>
    </section>
  );
}
