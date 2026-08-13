import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface RelatedItem {
  href: string;
  title: string;
  description: string;
  tag?: string;
}

interface RelatedContentProps {
  title?: string;
  items: RelatedItem[];
}

/**
 * Related content section — internal linking cho Topic Cluster
 * Giúp tăng internal link equity và giữ user trên site
 */
export default function RelatedContent({
  title = "Tìm hiểu thêm về Mega City 2",
  items,
}: RelatedContentProps) {
  return (
    <section className="py-14 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-lg font-bold text-slate-800 mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl bg-white border border-slate-200 p-5
                         hover:border-primary-200 hover:shadow-md transition-all duration-200"
            >
              {item.tag && (
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest
                                 text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full mb-3">
                  {item.tag}
                </span>
              )}
              <h3 className="font-semibold text-slate-800 text-sm leading-snug mb-1.5
                             group-hover:text-primary-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                {item.description}
              </p>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary-600">
                Xem chi tiết
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
