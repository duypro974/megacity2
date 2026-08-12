"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BUSINESS_AREAS, type BusinessArea } from "@/data/businessAreas";

// ─────────────────────────────────────────────────────────────
// BusinessAreasSection — Lĩnh vực hoạt động Kim Oanh Group
// Layout: alternating editorial blocks (text-image / image-text)
// KHÔNG phải dịch vụ của KIM OANH ĐỒNG NAI
// ─────────────────────────────────────────────────────────────

// ── Image Placeholder ──────────────────────────────────────
function ImagePlaceholder({
  alt,
  aspect,
  className = "",
}: {
  alt: string;
  aspect: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[20px] bg-gradient-to-br
                  from-slate-100 to-slate-200 ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {/* Placeholder visual */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">
          <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
        <p className="text-slate-400 text-[11px] font-medium text-center px-4 leading-snug">
          {alt}
        </p>
      </div>
      {/* Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                      opacity-0 hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

// ── Single Block ───────────────────────────────────────────
function AreaBlock({
  area,
  reverse,
}: {
  area: BusinessArea;
  reverse: boolean;
}) {
  return (
    <div
      className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center
                 py-16 lg:py-20 border-b border-slate-100 last:border-0"
      data-reveal
    >
      {/* Text column — order depends on reverse flag */}
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>
        {/* Number */}
        <p
          className="font-black text-[5rem] leading-none tracking-tighter select-none mb-4"
          style={{
            color: "transparent",
            WebkitTextStroke: "1.5px #e2e8f0",
          }}
        >
          {area.number}
        </p>

        {/* Entity badge */}
        {area.entity && (
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="inline-block w-5 h-px bg-amber-500" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-600">
              {area.entity}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="font-black text-slate-900 text-[clamp(1.2rem,2.5vw,1.7rem)]
                       leading-tight tracking-tight mb-5">
          {area.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md">
          {area.description}
        </p>

        {/* CTA */}
        {area.cta && (
          <a
            href={area.ctaHref ?? "#"}
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-600
                       hover:text-amber-500 transition-colors group/cta"
          >
            {area.cta}
            <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
          </a>
        )}
      </div>

      {/* Image column */}
      <div className={`relative ${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <div className="overflow-hidden rounded-[20px] shadow-lg
                        group-hover:shadow-2xl transition-shadow duration-500
                        bg-white border border-slate-100">
          {area.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={area.image}
              alt={area.imageAlt}
              className="w-full object-contain transition-transform duration-700
                         group-hover:scale-[1.02] block p-6"
              style={{ aspectRatio: "16/9" }}
              loading="lazy"
            />
          ) : (
            <ImagePlaceholder alt={area.imageAlt} aspect="16/9" />
          )}
        </div>

        {/* Number accent — decorative, behind image */}
        <div
          className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl
                     bg-amber-500/10 flex items-center justify-center
                     pointer-events-none select-none"
        >
          <span className="font-black text-amber-500/40 text-3xl">{area.number}</span>
        </div>
      </div>
    </div>
  );
}

// ── Main Section ───────────────────────────────────────────
export default function BusinessAreasSection() {
  return (
    <section id="linh-vuc" className="py-16 bg-white" data-reveal>
      <Container size="xl">
        {/* Section header */}
        <div className="max-w-2xl mb-4">
          <SectionHeading
            eyebrow="LĨNH VỰC HOẠT ĐỘNG"
            title={
              <>
                Hệ sinh thái
                <br />
                <span className="text-amber-500">bất động sản Kim Oanh</span>
              </>
            }
            subtitle="Từ đầu tư và phát triển dự án đến xây dựng, kinh doanh – phân phối bất động sản và phát triển cộng đồng, hệ sinh thái Kim Oanh được xây dựng theo hướng chuyên môn hóa, đồng bộ và hướng đến những giá trị bền vững."
          />
        </div>

        {/* Attribution note */}
        <div className="flex items-center gap-2 mb-16 pb-8 border-b border-slate-100">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            Các lĩnh vực hoạt động của
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/KOG_Web_RGB_01.svg"
            alt="Kim Oanh Group"
            className="h-5 w-auto object-contain opacity-60"
          />
        </div>

        {/* Alternating blocks */}
        <div>
          {BUSINESS_AREAS.map((area, i) => (
            <AreaBlock key={area.id} area={area} reverse={i % 2 !== 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
