"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { VERIFIED_AWARDS } from "@/data/awards";

// ─────────────────────────────────────────────────────────────
// AwardsSection — Những dấu ấn được ghi nhận
// Carousel mượt: CSS scroll-snap + JS prev/next + auto-play
// Mobile: swipe naturally; Desktop: arrow buttons + dots
// ─────────────────────────────────────────────────────────────

const AUTOPLAY_MS = 4000;

export default function AwardsSection() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const items = VERIFIED_AWARDS;

  // ── Scroll to slide ──────────────────────────────────────
  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(idx, items.length - 1));
      setActive(clamped);
      const track = trackRef.current;
      if (!track) return;
      const child = track.children[clamped] as HTMLElement | undefined;
      if (child) {
        track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
      }
    },
    [items.length]
  );

  const prev = useCallback(() => goTo((active - 1 + items.length) % items.length), [active, goTo, items.length]);
  const next = useCallback(() => goTo((active + 1) % items.length), [active, goTo, items.length]);

  // ── Auto-play ────────────────────────────────────────────
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  // ── Sync active index from scroll ────────────────────────
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    const width = track.clientWidth;
    const idx = Math.round(scrollLeft / width);
    setActive(Math.max(0, Math.min(idx, items.length - 1)));
  }, [items.length]);

  // Empty state
  if (items.length === 0) {
    return (
      <section id="giai-thuong" className="py-28 bg-white" data-reveal>
        <Container>
          <div className="flex items-center gap-3 mb-10">
            <span className="inline-block w-8 h-px bg-amber-500" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
              NHỮNG DẤU ẤN ĐƯỢC GHI NHẬN
            </p>
          </div>
          <div className="rounded-[20px] bg-slate-50 border border-dashed border-slate-200 py-20 text-center">
            <p className="text-slate-400 text-sm font-medium">Thông tin đang được cập nhật.</p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="giai-thuong"
      className="py-28 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)" }}
      data-reveal
    >
      <Container size="xl">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-amber-400" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
                NHỮNG DẤU ẤN ĐƯỢC GHI NHẬN
              </p>
            </div>
            <h2 className="font-black text-white text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight">
              Hành trình & Ghi nhận
            </h2>
            <p className="text-slate-400 text-base mt-2 max-w-lg leading-relaxed">
              Những dấu ấn trên hành trình xây dựng và phát triển của Kim Oanh Group.
            </p>
          </div>

          {/* Arrow buttons — desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => { prev(); resetTimer(); }}
              aria-label="Trước"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center
                         text-white/60 hover:text-white hover:border-white/50 hover:bg-white/10
                         transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-white/40 font-medium tabular-nums w-10 text-center">
              {active + 1} / {items.length}
            </span>
            <button
              onClick={() => { next(); resetTimer(); }}
              aria-label="Tiếp theo"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center
                         text-white/60 hover:text-white hover:border-white/50 hover:bg-white/10
                         transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Carousel track ── */}
        <div className="relative">
          {/* Fade edges — desktop hint */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10
                          bg-gradient-to-r from-[#0f172a] to-transparent hidden sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10
                          bg-gradient-to-l from-[#0f172a] to-transparent hidden sm:block" />

          <div
            ref={trackRef}
            onScroll={handleScroll}
            onMouseDown={() => setDragging(false)}
            className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory
                       scrollbar-none scroll-smooth
                       [-webkit-overflow-scrolling:touch]
                       [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {items.map((award, i) => (
              <div
                key={award.id}
                className="snap-center flex-shrink-0
                           w-[85vw] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)]"
              >
                <button
                  onClick={() => { if (!dragging) goTo(i); resetTimer(); }}
                  className={`w-full h-full text-left group rounded-[20px] overflow-hidden
                               border transition-all duration-400 focus-visible:outline-none
                               focus-visible:ring-2 focus-visible:ring-amber-400
                               ${i === active
                                 ? "border-amber-400/60 shadow-2xl shadow-amber-400/10 scale-[1.01]"
                                 : "border-white/10 hover:border-white/25"
                               }`}
                  style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(8px)" }}
                  aria-current={i === active ? "true" : undefined}
                >
                  {/* Image — full width, no crop */}
                  {award.image && (
                    <div className="w-full overflow-hidden bg-black/20">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={award.image}
                        alt={award.imageAlt ?? award.name}
                        className={`w-full h-auto block transition-all duration-700
                                    ${i === active ? "brightness-100" : "brightness-75 group-hover:brightness-90"}`}
                        loading="lazy"
                      />
                      {/* Active shimmer overlay */}
                      {i === active && (
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(251,191,36,0.08) 0%, transparent 60%)",
                          }}
                        />
                      )}
                      {/* Bottom gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2
                                      bg-gradient-to-t from-black/80 to-transparent" />

                      {/* Active indicator badge */}
                      {i === active && (
                        <div className="absolute top-3 right-3">
                          <span className="inline-flex items-center gap-1.5 bg-amber-500 text-white
                                           text-[10px] font-bold uppercase tracking-wider px-2.5 py-1
                                           rounded-full shadow-lg">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            Đang xem
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Card content */}
                  <div className="p-5">
                    <p className={`text-xs font-bold uppercase tracking-widest mb-1.5 transition-colors
                      ${i === active ? "text-amber-400" : "text-white/40 group-hover:text-white/60"}`}>
                      {award.year} · {award.organization}
                    </p>
                    <h3 className={`font-bold leading-snug transition-colors text-sm
                      ${i === active ? "text-white" : "text-white/70 group-hover:text-white/90"}`}>
                      {award.name}
                    </h3>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetTimer(); }}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300
                ${i === active
                  ? "w-6 h-2 bg-amber-400"
                  : "w-2 h-2 bg-white/25 hover:bg-white/50"
                }`}
            />
          ))}
        </div>

        {/* ── Mobile arrow row ── */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={() => { prev(); resetTimer(); }}
            aria-label="Trước"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                       text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs text-white/40 font-medium tabular-nums">
            {active + 1} / {items.length}
          </span>
          <button
            onClick={() => { next(); resetTimer(); }}
            aria-label="Tiếp theo"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                       text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-center text-[11px] text-white/25 leading-relaxed">
          Hình ảnh mang tính minh họa, tổng hợp từ tài liệu nội bộ.
        </p>
      </Container>
    </section>
  );
}
