import Link from "next/link";
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
  const bgMap = {
    default: "bg-white border border-slate-200",
    dark: "bg-slate-900 text-white",
    amber: "bg-amber-500 text-white",
  };
  const titleColor = variant === "default" ? "text-slate-800" : "text-white";
  const subColor = variant === "default" ? "text-slate-500" : "text-white/80";

  return (
    <section className={`py-14 ${bgMap[variant]}`}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className={`text-xl md:text-2xl font-bold mb-3 ${titleColor}`}>{title}</h2>
        <p className={`text-sm mb-8 leading-relaxed ${subColor}`}>{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={primaryHref}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600
                       text-white px-8 py-3.5 rounded-full font-bold text-sm
                       shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#06C755] hover:bg-[#05b34d]
                       text-white px-8 py-3.5 rounded-full font-bold text-sm
                       shadow-lg shadow-green-500/20 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            {secondaryLabel}
          </a>
        </div>
        <p className="text-xs text-slate-400 mt-5">
          Hỗ trợ 8:00 – 21:00, Thứ 2 – Chủ nhật · Tư vấn miễn phí
        </p>
      </div>
    </section>
  );
}
