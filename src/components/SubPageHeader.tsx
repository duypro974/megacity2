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
 * Includes breadcrumb, section tag, title, subtitle, back link
 */
export default function SubPageHeader({
  tag,
  title,
  subtitle,
  breadcrumbs,
  updatedAt,
}: SubPageHeaderProps) {
  return (
    <div className="bg-white border-b border-slate-100 pt-24 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back link */}
        <Link
          href="/mega-city-2"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400
                     hover:text-primary-600 transition-colors mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Quay lại trang dự án
        </Link>

        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbs} className="mb-5" />

        {/* Content */}
        {tag && (
          <span className="inline-block text-xs font-bold tracking-widest uppercase
                           text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3">
            {tag}
          </span>
        )}
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {updatedAt && (
          <p className="text-xs text-slate-400 mt-3">Cập nhật: {updatedAt}</p>
        )}
      </div>
    </div>
  );
}
