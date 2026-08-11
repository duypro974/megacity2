import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ProjectPreview,
  STATUS_LABEL,
  STATUS_COLOR,
} from "@/data/projects";

interface ProjectCardProps {
  project: ProjectPreview;
  className?: string;
  variant?: "default" | "compact";
  /** Corporate context: ẩn giá — default true trên homepage */
  hidePrice?: boolean;
}

export default function ProjectCard({
  project,
  className,
  variant = "default",
  hidePrice = true,
}: ProjectCardProps) {
  const isExternal = project.href.startsWith("http");

  const CardWrapper = ({
    children,
    className: wrapClass,
  }: {
    children: React.ReactNode;
    className?: string;
  }) =>
    isExternal ? (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={wrapClass}
      >
        {children}
      </a>
    ) : (
      <Link href={project.href} className={wrapClass}>
        {children}
      </Link>
    );

  return (
    <CardWrapper
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200",
        "transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.name} – ${project.location}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Status badge */}
        {project.status && (
          <div className="absolute top-3 left-3">
            <span
              className={cn(
                "text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full",
                STATUS_COLOR[project.status]
              )}
            >
              {STATUS_LABEL[project.status]}
            </span>
          </div>
        )}

        {/* Category badge */}
        {project.brandFamily && (
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 text-slate-700">
              {project.brandFamily}
            </span>
          </div>
        )}

        {/* Price tag — ẩn trên corporate context */}
        {project.priceFrom && !hidePrice && (
          <div className="absolute bottom-3 left-3">
            <span className="text-xs font-bold text-white bg-amber-500/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {project.priceFrom}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Type */}
        <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-1.5">
          {project.type}
        </p>

        {/* Name */}
        <h3 className="font-black text-slate-900 text-lg leading-tight mb-1.5 group-hover:text-amber-600 transition-colors">
          {project.name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-slate-500 text-xs mb-3">
          <MapPin className="w-3 h-3 flex-shrink-0" />
          <span>{project.location}</span>
        </div>

        {/* Description — only in default variant */}
        {variant === "default" && (
          <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4 line-clamp-3">
            {project.description}
          </p>
        )}

        {/* Scale */}
        {project.scale && (
          <p className="text-xs text-slate-400 mb-4">{project.scale}</p>
        )}

        {/* CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <span className="text-sm font-bold text-amber-600 group-hover:text-amber-500 transition-colors flex items-center gap-1">
            Khám phá dự án{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </CardWrapper>
  );
}
