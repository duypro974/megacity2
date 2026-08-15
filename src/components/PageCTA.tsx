import { Phone, MessageCircle } from "lucide-react";

interface PageCTAProps {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  variant?: "default" | "dark" | "amber";
}

/**
 * Reusable CTA block — dùng ở cuối mỗi sub-page
 * Enhanced with rich animations and visual polish
 */
export default function PageCTA({
  title = "Tư vấn miễn phí về Mega City 2",
  subtitle = "Liên hệ ngay để nhận thông tin bảng giá, pháp lý và hỗ trợ chọn vị trí phù hợp.",
  primaryHref = "tel:0937587438",
  primaryLabel = "Gọi 0937.587.438",
  secondaryHref = "https://zalo.me/0937587438",
  secondaryLabel = "Nhắn Zalo",
  variant = "default",
}: PageCTAProps) {
  const isDark = variant === "dark";
  const isAmber = variant === "amber";

  return (
    <section
      className="relative overflow-hidden py-16"
      style={
        isDark
          ? { background: "linear-gradient(135deg,#0f172a 0%,#14532d 60%,#0f172a 100%)" }
          : isAmber
          ? { background: "linear-gradient(135deg,#f59e0b 0%,#d97706 100%)" }
          : {
              background:
                "linear-gradient(135deg, #f0fdf4 0%, #ffffff 40%, #fefce8 100%)",
            }
      }
    >
      {/* Animated blob backgrounds */}
      {(isDark || isAmber) && (
        <>
          <div
            className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <div
            className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 70%)",
              filter: "blur(25px)",
            }}
          />
          {/* Animated shimmer overlay */}
          <div className="absolute inset-0 anim-btn-shimmer opacity-20 pointer-events-none" />
        </>
      )}
      {!isDark && !isAmber && (
        <>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(22,179,100,0.06) 0%, transparent 70%)",
            }}
          />
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #16a34a 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Floating accent circles */}
          <span className="absolute top-4 right-12 w-20 h-20 rounded-full border border-primary-200/30 anim-dot-1 pointer-events-none" />
          <span className="absolute bottom-4 left-16 w-12 h-12 rounded-full bg-primary-100/20 anim-dot-2 pointer-events-none" />
        </>
      )}

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4 anim-up">
          <span className={`w-10 h-px ${isDark || isAmber ? "bg-white/35" : "bg-primary-200"}`} />
          <span className={`text-[10px] font-bold uppercase tracking-[0.22em] ${isDark || isAmber ? "text-white/55" : "text-primary-500"}`}>
            Kim Oanh Đồng Nai
          </span>
          <span className={`w-10 h-px ${isDark || isAmber ? "bg-white/35" : "bg-primary-200"}`} />
        </div>

        <h2
          className={`text-xl md:text-2xl font-bold mb-3 anim-up anim-delay-100
            ${isDark || isAmber ? "text-white" : "text-slate-800"}`}
        >
          {title}
        </h2>
        <p
          className={`text-sm mb-8 leading-relaxed max-w-xl mx-auto anim-up anim-delay-200
            ${isDark ? "text-white/70" : isAmber ? "text-white/85" : "text-slate-500"}`}
        >
          {subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 anim-up anim-delay-300">
          <a
            href={primaryHref}
            className="relative flex items-center gap-2 bg-amber-500 hover:bg-amber-400
                       text-white px-8 py-3.5 rounded-full font-bold text-sm
                       shadow-lg shadow-amber-500/30 transition-all duration-200
                       hover:scale-105 hover:-translate-y-0.5 anim-glow-pulse overflow-hidden"
          >
            {/* shimmer sweep */}
            <span className="absolute inset-0 anim-btn-shimmer opacity-30 pointer-events-none rounded-full" />
            <Phone className="w-4 h-4 relative z-10" />
            <span className="relative z-10">{primaryLabel}</span>
          </a>
          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#06C755] hover:bg-[#05b34d]
                       text-white px-8 py-3.5 rounded-full font-bold text-sm
                       shadow-lg shadow-green-500/25 transition-all duration-200
                       hover:scale-105 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            {secondaryLabel}
          </a>
        </div>

        <p
          className={`text-xs mt-5 anim-up anim-delay-400
            ${isDark ? "text-white/35" : "text-slate-400"}`}
        >
          Hỗ trợ 8:00 – 21:00, Thứ 2 – Chủ nhật · Tư vấn miễn phí
        </p>
      </div>
    </section>
  );
}
