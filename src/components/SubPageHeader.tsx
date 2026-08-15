import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Breadcrumb, { BreadcrumbItem } from "./Breadcrumb";

interface SubPageHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  updatedAt?: string;
}

/**
 * Shared header for all Mega City 2 sub-pages
 * Rich animated background + entrance animations
 */
export default function SubPageHeader({
  tag,
  title,
  subtitle,
  breadcrumbs,
  updatedAt,
}: SubPageHeaderProps) {
  return (
    <div className="relative bg-white border-b border-slate-100 pt-24 pb-14 overflow-hidden">

      {/* ── Layer 1: gradient mesh wash ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 80% 55% at 65% -10%, rgba(22,179,100,0.10) 0%, transparent 65%)",
            "radial-gradient(ellipse 50% 40% at 10% 90%, rgba(245,158,11,0.06) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      {/* ── Layer 2: subtle dot-grid texture ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #16a34a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Layer 3: large blurred accent circle top-right ── */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(22,179,100,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Layer 4: floating geometric rings ── */}
      <span className="absolute top-10 right-14 w-28 h-28 rounded-full border border-primary-200/35 anim-dot-1 pointer-events-none" />
      <span className="absolute top-20 right-36 w-12 h-12 rounded-full bg-primary-100/45 anim-dot-2 pointer-events-none" />
      <span className="absolute bottom-8 right-24 w-18 h-18 rounded-full border-2 border-amber-200/25 anim-dot-3 pointer-events-none" />
      <span className="absolute top-12 left-[55%] w-7 h-7 rounded-full bg-primary-200/35 anim-dot-4 pointer-events-none" />
      <span className="absolute bottom-12 left-[20%] w-5 h-5 rounded-full bg-amber-300/25 anim-dot-5 pointer-events-none" />
      <span className="absolute top-6 left-[30%] w-3 h-3 rounded-full bg-primary-300/40 anim-dot-6 pointer-events-none" />

      {/* ── Layer 5: orbit ring decoration top-right ── */}
      <div
        className="absolute -top-6 right-6 w-40 h-40 rounded-full border border-dashed border-primary-200/20 anim-orbit pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Back link */}
        <Link
          href="/mega-city-2"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400
                     hover:text-primary-600 transition-colors mb-4 group animate-fade-in"
          style={{ animationDelay: "0ms", animationDuration: "0.5s" }}
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
          Quay lại trang dự án
        </Link>

        {/* Breadcrumb */}
        <div
          className="animate-fade-in"
          style={{ animationDelay: "80ms", animationDuration: "0.5s" }}
        >
          <Breadcrumb items={breadcrumbs} className="mb-5" />
        </div>

        {/* Tag badge */}
        {tag && (
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase
                       text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3
                       anim-badge border border-primary-100 shadow-sm"
            style={{ animationDelay: "150ms" }}
          >
            {tag}
          </span>
        )}

        {/* Title */}
        <h1
          className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight mb-3
                     animate-fade-in-up"
          style={{ animationDelay: "200ms", animationDuration: "0.65s" }}
        >
          {title}
        </h1>

        {/* Underline accent — animated draw */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-primary-300 rounded-full anim-line-draw" />
          <div
            className="h-px w-8 bg-gradient-to-r from-primary-200 to-transparent rounded-full anim-line-draw"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed animate-fade-in"
            style={{ animationDelay: "350ms", animationDuration: "0.6s" }}
          >
            {subtitle}
          </p>
        )}

        {/* Updated at */}
        {updatedAt && (
          <div
            className="flex items-center gap-2 mt-4 animate-fade-in"
            style={{ animationDelay: "500ms", animationDuration: "0.5s" }}
          >
            <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200
                             text-xs text-slate-400 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Cập nhật: {updatedAt}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
