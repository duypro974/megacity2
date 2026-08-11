"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS, STATUS_LABEL, STATUS_COLOR, type ProjectPreview } from "@/data/projects";

// ─────────────────────────────────────────────────────────────
// ProjectsSection — Dự án đang được quan tâm
// Scope: Mega City 2, K-Home CityView, K-Home Avenue, K-Home Midtown
// ─────────────────────────────────────────────────────────────

// Scope được hỗ trợ bởi website này — thứ tự hiển thị
const SCOPE_SLUGS = [
  "mega-city-2",
  "k-home-cityview",
  "k-home-avenue",
  "k-home-midtown",
];
const SCOPED_PROJECTS = PROJECTS.filter((p) => SCOPE_SLUGS.includes(p.slug))
  .sort((a, b) => SCOPE_SLUGS.indexOf(a.slug) - SCOPE_SLUGS.indexOf(b.slug));

// ── Project Card ──────────────────────────────────────────────
function ProjectCard({ project }: { project: ProjectPreview }) {
  const isExternal = project.href.startsWith("http");

  const cardContent = (
    <div className="group relative rounded-[20px] overflow-hidden border border-slate-200 bg-white
                    hover:border-amber-200 hover:shadow-2xl hover:shadow-slate-200/60
                    transition-all duration-500 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.name} – ${project.location}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Status badge */}
        {project.status && (
          <div className="absolute top-4 left-4">
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm
                          ${STATUS_COLOR[project.status]}`}
            >
              {STATUS_LABEL[project.status]}
            </span>
          </div>
        )}

        {/* Location over image */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/90">
          <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          <span className="text-xs font-semibold">{project.location}</span>
        </div>

        {/* Arrow indicator */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm
                        flex items-center justify-center border border-white/20
                        group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300">
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Type label */}
        <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-2">
          {project.type}
        </p>

        {/* Name */}
        <h3 className="font-black text-slate-900 text-xl leading-tight tracking-tight mb-3
                       group-hover:text-amber-600 transition-colors duration-300">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Scale metadata — chỉ hiển thị khi có data */}
        {project.scale && (
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3.5 py-2 mb-5 self-start">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quy mô</span>
            <span className="text-[10px] font-black text-slate-700">{project.scale}</span>
          </div>
        )}

        {/* CTA */}
        <div className="pt-4 border-t border-slate-100">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-600
                           group-hover:text-amber-500 transition-colors">
            Tìm hiểu dự án
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }
  return <Link href={project.href}>{cardContent}</Link>;
}

// ── Main Section ───────────────────────────────────────────────
export default function ProjectsSection() {
  return (
    <section id="du-an" className="py-28 bg-slate-50" data-reveal>
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="DỰ ÁN ĐANG ĐƯỢC QUAN TÂM"
            title={
              <>
                Dự án Kim Oanh
                <br />
                <span className="text-amber-500">tại Đồng Nai</span>
              </>
            }
            subtitle="Khám phá thông tin các dự án Kim Oanh đang được website hỗ trợ tại Đồng Nai."
            className="mb-0"
          />
          <a
            href="#tim-hieu"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("tim-hieu")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500
                       hover:text-amber-600 transition-colors flex-shrink-0 group"
          >
            Tìm hiểu thêm
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Project grid — responsive, extendable */}
        {SCOPED_PROJECTS.length > 0 ? (
          <div
            className={`grid gap-6 ${
              SCOPED_PROJECTS.length === 1
                ? "grid-cols-1 max-w-xl"
                : SCOPED_PROJECTS.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {SCOPED_PROJECTS.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-400 text-sm">Thông tin đang được cập nhật.</p>
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-xs text-slate-400 mt-6">
          * Thông tin mang tính tham khảo. Liên hệ để nhận thông tin chính xác và cập nhật nhất.
        </p>
      </Container>
    </section>
  );
}
