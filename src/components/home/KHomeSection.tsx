import Container from "@/components/ui/Container";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SITE_CONFIG } from "@/data/siteConfig";

const KHOME_PROJECTS = PROJECTS.filter((p) => p.category === "k-home");

export default function KHomeSection() {
  return (
    <section id="k-home" className="py-24 bg-white" data-reveal>
      <Container>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">
              <span className="inline-block w-6 h-0.5 rounded-full bg-amber-500" />
              Chuỗi dự án K-Home
            </p>
            <h2 className="font-black text-slate-900 text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight">
              K-Home
              <br />
              <span className="text-amber-500">Những dự án nhà ở cùng định hướng</span>
            </h2>
            <p className="mt-3 text-slate-500 text-base leading-relaxed max-w-xl">
              Các dự án nhà ở xã hội mang tên K-Home của Kim Oanh Group, phục vụ người
              có thu nhập trung bình tại tỉnh Đồng Nai và khu vực Đông Nam Bộ.
            </p>
          </div>
          <a
            href={SITE_CONFIG.kHomeSite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-amber-500/40 text-amber-600
                       hover:bg-amber-50 px-6 py-3 rounded-full text-sm font-bold
                       transition-all hover:border-amber-500 flex-shrink-0 self-start lg:self-auto"
          >
            Khám phá K-Home <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Project mini-cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {KHOME_PROJECTS.map((p) => (
            <a
              key={p.slug}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-slate-200
                         hover:border-amber-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={`${p.name} – ${p.location}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Status badge */}
                {p.status && (
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 text-slate-700">
                      {p.status === "dang-boc-tham" ? "Đang bốc thăm"
                        : p.status === "da-cong-bo" ? "Đã công bố"
                        : p.status === "dang-mo-ban" ? "Đang mở bán"
                        : p.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-1">
                  {p.type}
                </p>
                <h3 className="font-black text-slate-900 text-base leading-tight mb-1
                               group-hover:text-amber-600 transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-500 mb-3">{p.location}</p>
                {p.scale && (
                  <p className="text-xs text-slate-400">{p.scale}</p>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-xs text-slate-400 text-center mt-6">
          Thông tin chi tiết và đăng ký mua nhà tại{" "}
          <a
            href={SITE_CONFIG.kHomeSite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 font-semibold hover:underline"
          >
            k-homedongnai.com.vn
          </a>
        </p>
      </Container>
    </section>
  );
}
