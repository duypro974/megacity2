"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, SlidersHorizontal } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS, STATUS_LABEL, STATUS_COLOR, type ProjectPreview } from "@/data/projects";

// ─────────────────────────────────────────────────────────────
// DiscoverySection — Tìm hiểu dự án
// Filter architecture: khu vực / loại hình / trạng thái
// Chỉ hiển thị filter khi có đủ data đa dạng để filter.
// ─────────────────────────────────────────────────────────────

type FilterKey = "all" | string;

// Scope: các dự án được hỗ trợ bởi website này
const SCOPE_SLUGS = ["mega-city-2", "k-home-cityview"];
const SUPPORTED_PROJECTS = PROJECTS.filter((p) => SCOPE_SLUGS.includes(p.slug));

// Build filter options dynamically from data
const unique = <T,>(arr: T[]) => Array.from(new Set(arr));

const LOCATIONS = unique(SUPPORTED_PROJECTS.map((p) => p.location));
const TYPES = unique(SUPPORTED_PROJECTS.map((p) => p.type));
const STATUSES = unique(
  SUPPORTED_PROJECTS.filter((p) => p.status).map((p) => p.status as string)
);

// Only show filters if there's meaningful variety
const SHOW_LOCATION_FILTER = LOCATIONS.length > 1;
const SHOW_TYPE_FILTER = TYPES.length > 1;
const SHOW_STATUS_FILTER = STATUSES.length > 1;
const SHOW_ANY_FILTER = SHOW_LOCATION_FILTER || SHOW_TYPE_FILTER || SHOW_STATUS_FILTER;

function MiniCard({ project }: { project: ProjectPreview }) {
  const isExternal = project.href.startsWith("http");
  const content = (
    <div className="group flex gap-5 p-5 rounded-2xl bg-white border border-slate-200
                    hover:border-amber-200 hover:shadow-lg transition-all duration-300 items-start">
      {/* Thumbnail */}
      <div className="relative w-24 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {project.status && (
          <div className="absolute inset-x-0 bottom-0 px-1.5 py-1 bg-black/50 text-center">
            <span className="text-[8px] font-bold uppercase text-white/80 tracking-wide">
              {STATUS_LABEL[project.status]}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-1">
          {project.type}
        </p>
        <h4 className="font-black text-slate-900 text-base leading-tight mb-1.5 group-hover:text-amber-600 transition-colors">
          {project.name}
        </h4>
        <div className="flex items-center gap-1 text-slate-400 text-xs mb-3">
          <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
          <span className="truncate">{project.location}</span>
        </div>
        <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 group-hover:gap-2 transition-all">
          Chi tiết
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return <Link href={project.href}>{content}</Link>;
}

export default function DiscoverySection() {
  const [filterLocation, setFilterLocation] = useState<FilterKey>("all");
  const [filterType, setFilterType] = useState<FilterKey>("all");
  const [filterStatus, setFilterStatus] = useState<FilterKey>("all");

  const filtered = SUPPORTED_PROJECTS.filter((p) => {
    if (filterLocation !== "all" && p.location !== filterLocation) return false;
    if (filterType !== "all" && p.type !== filterType) return false;
    if (filterStatus !== "all" && p.status !== filterStatus) return false;
    return true;
  });

  return (
    <section id="tim-hieu" className="py-28 bg-white" data-reveal>
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="TÌM HIỂU DỰ ÁN"
            title={
              <>
                Khám phá
                <br />
                <span className="text-amber-500">theo nhu cầu của bạn</span>
              </>
            }
            subtitle="Tìm kiếm dự án phù hợp theo khu vực, loại hình hoặc trạng thái."
            className="mb-0"
          />

          {/* Filter icon indicator */}
          {SHOW_ANY_FILTER && (
            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold">
              <SlidersHorizontal className="w-4 h-4" />
              Bộ lọc
            </div>
          )}
        </div>

        {/* Filters — only shown when meaningful */}
        {SHOW_ANY_FILTER && (
          <div className="flex flex-wrap gap-3 mb-10">
            {SHOW_LOCATION_FILTER && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Khu vực:</span>
                {["all", ...LOCATIONS].map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setFilterLocation(loc)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all
                      ${filterLocation === loc
                        ? "bg-amber-500 border-amber-500 text-white"
                        : "border-slate-200 text-slate-500 hover:border-amber-300 hover:text-amber-600 bg-white"
                      }`}
                  >
                    {loc === "all" ? "Tất cả" : loc}
                  </button>
                ))}
              </div>
            )}

            {SHOW_STATUS_FILTER && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Trạng thái:</span>
                {["all", ...STATUSES].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all
                      ${filterStatus === status
                        ? "bg-amber-500 border-amber-500 text-white"
                        : "border-slate-200 text-slate-500 hover:border-amber-300 hover:text-amber-600 bg-white"
                      }`}
                  >
                    {status === "all" ? "Tất cả" : STATUS_LABEL[status as keyof typeof STATUS_LABEL] ?? status}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Project list */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((p) => (
              <MiniCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-slate-50 border border-dashed border-slate-200 py-20 text-center">
            <p className="text-slate-400 text-sm font-medium">
              Không tìm thấy dự án phù hợp với bộ lọc đã chọn.
            </p>
            <button
              onClick={() => {
                setFilterLocation("all");
                setFilterType("all");
                setFilterStatus("all");
              }}
              className="mt-4 text-xs text-amber-600 font-bold hover:underline"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
