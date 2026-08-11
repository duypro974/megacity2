"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { VERIFIED_MILESTONES, ALL_MILESTONES } from "@/data/milestones";

// ─────────────────────────────────────────────────────────────
// Timeline — Hành trình phát triển
// Desktop: horizontal clickable timeline
// Mobile: vertical timeline
// Chỉ render VERIFIED_MILESTONES
// ─────────────────────────────────────────────────────────────

export default function Timeline() {
  const items = VERIFIED_MILESTONES;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  // Không render nếu không có milestone verified
  if (items.length === 0) {
    return (
      <section id="hanh-trinh" className="py-28 bg-white" data-reveal>
        <Container>
          <div className="flex items-center gap-3 mb-10">
            <span className="inline-block w-8 h-px bg-amber-500" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
              HÀNH TRÌNH PHÁT TRIỂN
            </p>
          </div>
          <div className="rounded-[20px] bg-slate-50 border border-dashed border-slate-200 py-20 text-center">
            <p className="text-slate-400 text-sm font-medium">
              Thông tin đang được cập nhật.
            </p>
            <p className="text-slate-400 text-xs mt-2">
              Hành trình sẽ được hiển thị khi có dữ liệu xác thực.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="hanh-trinh" className="py-28 bg-white overflow-hidden" data-reveal>
      <Container size="xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="inline-block w-8 h-px bg-amber-500" />
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
            HÀNH TRÌNH PHÁT TRIỂN
          </p>
        </div>

        {/* ── Desktop horizontal timeline ── */}
        <div className="hidden md:block">
          {/* Progress line */}
          <div className="relative mb-12">
            {/* Base line */}
            <div className="absolute top-5 left-0 right-0 h-px bg-slate-200" />
            {/* Active progress */}
            <div
              className="absolute top-5 left-0 h-px bg-amber-500 transition-all duration-500"
              style={{
                width:
                  items.length <= 1
                    ? "100%"
                    : `${(activeIndex / (items.length - 1)) * 100}%`,
              }}
            />

            {/* Year nodes */}
            <div className="relative flex justify-between">
              {items.map((item, i) => (
                <button
                  key={item.year}
                  onClick={() => setActiveIndex(i)}
                  className="flex flex-col items-center gap-3 group"
                >
                  {/* Dot */}
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                                transition-all duration-300 z-10
                                ${i === activeIndex
                                  ? "bg-amber-500 border-amber-500 scale-110 shadow-lg shadow-amber-500/30"
                                  : i < activeIndex
                                  ? "bg-amber-100 border-amber-300"
                                  : "bg-white border-slate-300 group-hover:border-amber-300"
                                }`}
                  >
                    {i <= activeIndex ? (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors" />
                    )}
                  </div>
                  {/* Year label */}
                  <span
                    className={`text-sm font-black transition-colors ${
                      i === activeIndex ? "text-amber-600" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    {item.year}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active item detail */}
          {active && (
            <div className="rounded-[20px] bg-slate-50 border border-slate-200 p-10 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <p className="text-amber-600 font-black text-4xl lg:text-5xl mb-4">
                    {active.year}
                  </p>
                  <h3 className="font-black text-slate-900 text-xl lg:text-2xl leading-tight mb-4">
                    {active.event}
                  </h3>
                  {active.detail && (
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {active.detail}
                    </p>
                  )}
                  {active.source && (
                    <p className="text-slate-400 text-xs mt-4 italic">
                      Nguồn: {active.source}
                    </p>
                  )}
                </div>

                {/* Image placeholder for this milestone */}
                <div
                  className="rounded-2xl bg-slate-200 overflow-hidden flex items-center justify-center"
                  style={{ aspectRatio: "4/3" }}
                >
                  <p className="text-slate-400 text-xs text-center px-4">
                    Ảnh minh họa
                    <br />
                    <span className="text-slate-300">(placeholder)</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Mobile vertical timeline ── */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-200" />

            {items.map((item, i) => (
              <button
                key={item.year}
                onClick={() => setActiveIndex(i)}
                className="relative mb-8 last:mb-0 text-left w-full"
              >
                {/* Dot */}
                <div
                  className={`absolute -left-8 top-1 w-6 h-6 rounded-full border-2 flex items-center
                               justify-center z-10 transition-all
                               ${i === activeIndex
                                 ? "bg-amber-500 border-amber-500"
                                 : "bg-white border-slate-300"
                               }`}
                >
                  {i === activeIndex && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>

                <div
                  className={`rounded-2xl p-5 border transition-all
                               ${i === activeIndex
                                 ? "bg-amber-50 border-amber-200"
                                 : "bg-slate-50 border-slate-100"
                               }`}
                >
                  <p className={`font-black text-2xl mb-1 ${i === activeIndex ? "text-amber-600" : "text-slate-400"}`}>
                    {item.year}
                  </p>
                  <p className="font-bold text-slate-900 text-sm leading-snug mb-1">{item.event}</p>
                  {i === activeIndex && item.detail && (
                    <p className="text-slate-500 text-xs leading-relaxed mt-2">{item.detail}</p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation arrows — desktop */}
        {items.length > 1 && (
          <div className="hidden md:flex items-center justify-end gap-3 mt-8">
            <button
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center
                         text-slate-400 hover:border-amber-300 hover:text-amber-600
                         disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <span className="text-xs text-slate-400 font-medium">
              {activeIndex + 1} / {items.length}
            </span>
            <button
              onClick={() => setActiveIndex(Math.min(items.length - 1, activeIndex + 1))}
              disabled={activeIndex === items.length - 1}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center
                         text-slate-400 hover:border-amber-300 hover:text-amber-600
                         disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
