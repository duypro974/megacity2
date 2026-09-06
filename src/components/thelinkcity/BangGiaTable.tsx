"use client";

/**
 * BangGiaTable v2 — Bảng giá tương tác The Link City
 * ─────────────────────────────────────────────────────────────────────────────
 * UX improvements:
 * • Filter loại hình (tab pill) + khoảng giá + diện tích + trục đường
 * • Active filter chips hiển thị bên dưới — click X để xoá từng filter
 * • Kết quả đếm real-time
 * • Sort: giá tăng / giá giảm / diện tích
 * • Empty state khi không có kết quả
 * • Sticky table header
 * • Row highlight khi hover với thông tin thêm (tooltip đơn giá)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useState, useMemo, useCallback, useRef } from "react";
import {
  ChevronDown, ChevronUp, Calculator, MessageCircle,
  CheckCircle2, SlidersHorizontal, X, ArrowUpDown,
  Search, RotateCcw,
} from "lucide-react";
import { BANG_GIA_DATA, type LoaiSP, type SanPham } from "@/data/bangGiaData";
import { SITE_CONFIG } from "@/data/siteConfig";

// ── Helpers ───────────────────────────────────────────────────────────────
function fmtTy(n: number): string {
  const ty = n / 1_000_000_000;
  if (ty >= 10) return ty.toFixed(1) + " tỷ";
  const s = ty.toFixed(3).replace(/\.?0+$/, "");
  return s + " tỷ";
}
function fmtFull(n: number) { return n.toLocaleString("vi-VN") + " đ"; }
function donGia(sp: SanPham) { return (sp.gia / sp.dt / 1_000_000).toFixed(1) + " tr/m²"; }

// ── Unique trục đường ─────────────────────────────────────────────────────
const ALL_TRUC = Array.from(new Set(BANG_GIA_DATA.map((s) => s.truc))).sort();

// ── Khoảng giá buckets ────────────────────────────────────────────────────
const GIA_RANGES = [
  { label: "Dưới 2 tỷ",  min: 0,              max: 2_000_000_000 },
  { label: "2 – 3 tỷ",   min: 2_000_000_000,  max: 3_000_000_000 },
  { label: "3 – 5 tỷ",   min: 3_000_000_000,  max: 5_000_000_000 },
  { label: "Trên 5 tỷ",  min: 5_000_000_000,  max: Infinity      },
];

// ── Diện tích buckets ─────────────────────────────────────────────────────
const DT_RANGES = [
  { label: "< 100 m²",    min: 0,   max: 100 },
  { label: "100–150 m²",  min: 100, max: 150 },
  { label: "150–200 m²",  min: 150, max: 200 },
  { label: "> 200 m²",    min: 200, max: Infinity },
];

// ── Sort options ──────────────────────────────────────────────────────────
type SortKey = "gia-asc" | "gia-desc" | "dt-asc" | "dt-desc";

// ── Types ─────────────────────────────────────────────────────────────────
type FilterLoai = "Tất cả" | LoaiSP;

interface Filters {
  loai:    FilterLoai;
  giaIdx:  number | null;  // index vào GIA_RANGES
  dtIdx:   number | null;  // index vào DT_RANGES
  truc:    string | null;
  sort:    SortKey;
}

const DEFAULT_FILTERS: Filters = {
  loai: "Tất cả", giaIdx: null, dtIdx: null, truc: null, sort: "gia-asc",
};

const DEFAULT_IDS = [
  "LK17A-42", "LK13-19", "LK14A-30", "LK40-49",
  "LK40-29",  "BT35-9",  "BT29-1",   "LK14A-16", "LK13-29",
];

const LOAI_FILTERS: { key: FilterLoai; emoji: string }[] = [
  { key: "Tất cả",   emoji: "🏘️" },
  { key: "Đất nền",  emoji: "🏞️" },
  { key: "Biệt thự", emoji: "🏡" },
  { key: "Nhà phố",  emoji: "🏪" },
];

const BATCH = 10;

// ── Badge loại ────────────────────────────────────────────────────────────
function LoaiBadge({ loai, loaiGoc }: { loai: LoaiSP; loaiGoc: string }) {
  const isGoc = /góc/i.test(loaiGoc);
  const isLon = /lớn/i.test(loaiGoc);
  const base =
    loai === "Biệt thự" ? "bg-violet-100 text-violet-700 border-violet-200" :
    loai === "Nhà phố"  ? "bg-emerald-100 text-emerald-700 border-emerald-200" :
                          "bg-amber-100 text-amber-700 border-amber-200";
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${base}`}>
      {loai}
      {isGoc && <span className="bg-orange-400 text-white text-[9px] px-1 rounded-full">Góc</span>}
      {isLon && <span className="bg-sky-400 text-white text-[9px] px-1 rounded-full">Lớn</span>}
    </span>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────
interface Props {
  onCalcLoan?: (gia: number) => void;
}

// ── Component ─────────────────────────────────────────────────────────────
export default function BangGiaTable({ onCalcLoan }: Props) {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [showCount, setShowCount] = useState(8);
  const [expanded, setExpanded] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [trucSearch, setTrucSearch] = useState("");
  const tableRef = useRef<HTMLDivElement>(null);

  // ── Apply filters + sort ──────────────────────────────────────────────
  const pool: SanPham[] = useMemo(() => {
    let data = BANG_GIA_DATA;

    if (filters.loai !== "Tất cả")
      data = data.filter((s) => s.loai === filters.loai);

    if (filters.giaIdx !== null) {
      const r = GIA_RANGES[filters.giaIdx];
      data = data.filter((s) => s.gia >= r.min && s.gia < r.max);
    }

    if (filters.dtIdx !== null) {
      const r = DT_RANGES[filters.dtIdx];
      data = data.filter((s) => s.dt >= r.min && s.dt < r.max);
    }

    if (filters.truc)
      data = data.filter((s) => s.truc === filters.truc);

    // Sort
    data = [...data].sort((a, b) => {
      switch (filters.sort) {
        case "gia-asc":  return a.gia - b.gia;
        case "gia-desc": return b.gia - a.gia;
        case "dt-asc":   return a.dt - b.dt;
        case "dt-desc":  return b.dt - a.dt;
      }
    });

    return data;
  }, [filters]);

  // ── Rows to display ───────────────────────────────────────────────────
  const displayRows: SanPham[] = useMemo(() => {
    if (expanded) return pool;

    const isDefaultView = filters.loai === "Tất cả" && filters.giaIdx === null
      && filters.dtIdx === null && filters.truc === null && filters.sort === "gia-asc";

    if (isDefaultView) {
      const defaults = DEFAULT_IDS
        .map((id) => BANG_GIA_DATA.find((s) => s.ma === id))
        .filter((s): s is SanPham => !!s);
      const extras = pool
        .filter((s) => !DEFAULT_IDS.includes(s.ma))
        .slice(0, Math.max(0, showCount - defaults.length));
      return [...defaults, ...extras].slice(0, showCount);
    }

    return pool.slice(0, showCount);
  }, [pool, filters, showCount, expanded]);

  // ── Active filter chips ───────────────────────────────────────────────
  const activeChips = useMemo(() => {
    const chips: { label: string; clear: () => void }[] = [];
    if (filters.loai !== "Tất cả")
      chips.push({ label: filters.loai, clear: () => update({ loai: "Tất cả" }) });
    if (filters.giaIdx !== null)
      chips.push({ label: GIA_RANGES[filters.giaIdx].label, clear: () => update({ giaIdx: null }) });
    if (filters.dtIdx !== null)
      chips.push({ label: DT_RANGES[filters.dtIdx].label, clear: () => update({ dtIdx: null }) });
    if (filters.truc)
      chips.push({ label: `Đường ${filters.truc}`, clear: () => update({ truc: null }) });
    return chips;
  }, [filters]);

  const hasActiveFilters = activeChips.length > 0;

  // ── Helpers ───────────────────────────────────────────────────────────
  const update = useCallback((patch: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...patch }));
    setShowCount(8);
    setExpanded(false);
  }, []);

  const resetAll = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
    setShowCount(8);
    setExpanded(false);
  }, []);

  const handleShowMore = useCallback(() => {
    if (expanded) { setExpanded(false); setShowCount(8); return; }
    const next = showCount + BATCH;
    if (next >= pool.length) setExpanded(true);
    else setShowCount(next);
  }, [expanded, showCount, pool.length]);

  const handleCalc = useCallback((gia: number) => {
    if (onCalcLoan) { onCalcLoan(gia); return; }
    document.getElementById("thanh-toan")?.scrollIntoView({ behavior: "smooth" });
  }, [onCalcLoan]);

  const loaiCounts = useMemo(() => ({
    "Tất cả":   BANG_GIA_DATA.length,
    "Đất nền":  BANG_GIA_DATA.filter((s) => s.loai === "Đất nền").length,
    "Biệt thự": BANG_GIA_DATA.filter((s) => s.loai === "Biệt thự").length,
    "Nhà phố":  BANG_GIA_DATA.filter((s) => s.loai === "Nhà phố").length,
  }), []);

  const filteredTruc = trucSearch
    ? ALL_TRUC.filter((t) => t.toLowerCase().includes(trucSearch.toLowerCase()))
    : ALL_TRUC;

  const showingAll = expanded || displayRows.length >= pool.length;

  return (
    <div className="w-full" ref={tableRef}>

      {/* ══ ROW 1: Loại hình tabs + Sort + Bộ lọc toggle ══ */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">

        {/* Loại hình tabs */}
        <div role="tablist" className="flex gap-1.5 flex-wrap flex-1">
          {LOAI_FILTERS.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filters.loai === f.key}
              onClick={() => update({ loai: f.key })}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2
                rounded-xl border transition-all duration-150 whitespace-nowrap
                ${filters.loai === f.key
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-700"
                }`}
            >
              <span>{f.emoji}</span>
              {f.key}
              <span className={`text-[10px] font-bold tabular-nums px-1.5 py-0.5 rounded-full
                ${filters.loai === f.key ? "bg-white/20" : "bg-slate-100 text-slate-400"}`}>
                {loaiCounts[f.key]}
              </span>
            </button>
          ))}
        </div>

        {/* Sort + Filter toggle */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Sort dropdown */}
          <div className="relative">
            <select
              value={filters.sort}
              onChange={(e) => update({ sort: e.target.value as SortKey })}
              className="appearance-none text-xs font-semibold text-slate-600
                         bg-white border border-slate-200 rounded-xl px-3 py-2 pr-7
                         hover:border-slate-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Sắp xếp"
            >
              <option value="gia-asc">Giá tăng dần ↑</option>
              <option value="gia-desc">Giá giảm dần ↓</option>
              <option value="dt-asc">Diện tích tăng ↑</option>
              <option value="dt-desc">Diện tích giảm ↓</option>
            </select>
            <ArrowUpDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
          </div>

          {/* Bộ lọc toggle */}
          <button
            onClick={() => setShowFilters((v) => !v)}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl
              border transition-all duration-150
              ${showFilters || hasActiveFilters
                ? "bg-amber-400 text-slate-900 border-amber-400"
                : "bg-white text-slate-600 border-slate-200 hover:border-amber-300"
              }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Bộ lọc
            {hasActiveFilters && (
              <span className="bg-slate-900 text-white text-[9px] font-black w-4 h-4
                               rounded-full flex items-center justify-center">
                {activeChips.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ══ ROW 2: Panel bộ lọc nâng cao ══ */}
      {showFilters && (
        <div className="mb-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

            {/* Khoảng giá */}
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                💰 Khoảng giá
              </p>
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => update({ giaIdx: null })}
                  className={`text-left text-xs px-3 py-2 rounded-xl border transition-all
                    ${filters.giaIdx === null
                      ? "bg-amber-50 border-amber-300 text-amber-800 font-bold"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:border-amber-200"}`}
                >
                  Tất cả mức giá
                </button>
                {GIA_RANGES.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => update({ giaIdx: filters.giaIdx === i ? null : i })}
                    className={`text-left text-xs px-3 py-2 rounded-xl border transition-all
                      ${filters.giaIdx === i
                        ? "bg-amber-50 border-amber-300 text-amber-800 font-bold"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:border-amber-200"}`}
                  >
                    {r.label}
                    <span className="ml-1.5 text-slate-400 font-normal">
                      ({BANG_GIA_DATA.filter((s) => s.gia >= r.min && s.gia < r.max &&
                        (filters.loai === "Tất cả" || s.loai === filters.loai)).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Diện tích */}
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                📐 Diện tích
              </p>
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => update({ dtIdx: null })}
                  className={`text-left text-xs px-3 py-2 rounded-xl border transition-all
                    ${filters.dtIdx === null
                      ? "bg-sky-50 border-sky-300 text-sky-800 font-bold"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:border-sky-200"}`}
                >
                  Tất cả diện tích
                </button>
                {DT_RANGES.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => update({ dtIdx: filters.dtIdx === i ? null : i })}
                    className={`text-left text-xs px-3 py-2 rounded-xl border transition-all
                      ${filters.dtIdx === i
                        ? "bg-sky-50 border-sky-300 text-sky-800 font-bold"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:border-sky-200"}`}
                  >
                    {r.label}
                    <span className="ml-1.5 text-slate-400 font-normal">
                      ({BANG_GIA_DATA.filter((s) => s.dt >= r.min && s.dt < r.max &&
                        (filters.loai === "Tất cả" || s.loai === filters.loai)).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Trục đường */}
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                🛣️ Trục đường
              </p>
              {/* Search trục */}
              <div className="relative mb-2">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Tìm trục đường..."
                  value={trucSearch}
                  onChange={(e) => setTrucSearch(e.target.value)}
                  className="w-full pl-7 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200
                             rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <div className="flex flex-col gap-1 max-h-44 overflow-y-auto pr-1">
                <button
                  onClick={() => update({ truc: null })}
                  className={`text-left text-xs px-3 py-1.5 rounded-xl border transition-all
                    ${!filters.truc
                      ? "bg-emerald-50 border-emerald-300 text-emerald-800 font-bold"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:border-emerald-200"}`}
                >
                  Tất cả trục
                </button>
                {filteredTruc.map((t) => {
                  const cnt = BANG_GIA_DATA.filter((s) => s.truc === t &&
                    (filters.loai === "Tất cả" || s.loai === filters.loai)).length;
                  return (
                    <button
                      key={t}
                      onClick={() => update({ truc: filters.truc === t ? null : t })}
                      className={`text-left text-xs px-3 py-1.5 rounded-xl border transition-all
                        ${filters.truc === t
                          ? "bg-emerald-50 border-emerald-300 text-emerald-800 font-bold"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:border-emerald-200"}`}
                    >
                      Đường {t}
                      <span className="ml-1.5 text-slate-400 font-normal">({cnt})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ ROW 3: Active chips + kết quả ══ */}
      <div className="flex items-center gap-2 mb-4 flex-wrap min-h-[28px]">
        {/* Kết quả */}
        <span className="text-xs text-slate-500 font-medium">
          <span className="font-black text-slate-800">{pool.length}</span> sản phẩm
          {hasActiveFilters && " phù hợp"}
        </span>

        {/* Active filter chips */}
        {activeChips.map((chip) => (
          <span key={chip.label}
            className="inline-flex items-center gap-1 text-xs font-semibold
                       bg-amber-100 text-amber-800 border border-amber-300
                       pl-2.5 pr-1.5 py-1 rounded-full">
            {chip.label}
            <button onClick={chip.clear} aria-label={`Xoá filter ${chip.label}`}
              className="hover:bg-amber-200 rounded-full p-0.5 transition-colors">
              <X className="w-2.5 h-2.5" />
            </button>
          </span>
        ))}

        {/* Reset all */}
        {hasActiveFilters && (
          <button onClick={resetAll}
            className="inline-flex items-center gap-1 text-xs text-slate-500
                       hover:text-slate-700 transition-colors ml-0.5">
            <RotateCcw className="w-3 h-3" />
            Xoá tất cả
          </button>
        )}
      </div>

      {/* ══ BẢNG — Desktop ══ */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        {pool.length === 0 ? (
          <EmptyState onReset={resetAll} />
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="text-left px-4 py-3 font-bold text-xs tracking-wide">Mã lô</th>
                <th className="text-left px-4 py-3 font-bold text-xs tracking-wide">Trục đường</th>
                <th className="text-left px-4 py-3 font-bold text-xs tracking-wide">Loại hình</th>
                <th className="text-right px-4 py-3 font-bold text-xs tracking-wide">
                  <button onClick={() => update({ sort: filters.sort === "dt-asc" ? "dt-desc" : "dt-asc" })}
                    className="inline-flex items-center gap-1 hover:text-amber-300 transition-colors">
                    Diện tích <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-right px-4 py-3 font-bold text-xs tracking-wide">
                  <button onClick={() => update({ sort: filters.sort === "gia-asc" ? "gia-desc" : "gia-asc" })}
                    className="inline-flex items-center gap-1 hover:text-amber-300 transition-colors">
                    Giá (có VAT) <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-right px-4 py-3 font-bold text-xs tracking-wide">Đơn giá</th>
                <th className="text-center px-4 py-3 font-bold text-xs tracking-wide">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {displayRows.map((sp, i) => (
                <tr key={sp.ma}
                  className={`transition-colors group hover:bg-amber-50/60
                    ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                  <td className="px-4 py-3">
                    <span className="font-mono font-bold text-slate-800 text-xs">{sp.ma}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
                      {sp.truc}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <LoaiBadge loai={sp.loai} loaiGoc={sp.loaiGoc} />
                  </td>
                  <td className="px-4 py-3 text-right text-slate-700 font-semibold text-xs tabular-nums">
                    {sp.dt} m²
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="font-black text-slate-900 text-sm">{fmtTy(sp.gia)}</span>
                    <br />
                    <span className="text-[10px] text-slate-400 tabular-nums">{fmtFull(sp.gia)}</span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-xs text-slate-500 font-medium">~{donGia(sp)}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => handleCalc(sp.gia / 1_000_000_000)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold
                                   text-primary-600 bg-primary-50 hover:bg-primary-100
                                   border border-primary-200 px-2.5 py-1.5 rounded-lg transition-colors"
                        title="Tính dòng tiền cho lô này"
                      >
                        <Calculator className="w-3 h-3" />
                        Tính lãi
                      </button>
                      <a
                        href={`${SITE_CONFIG.social.zalo}?text=Tôi quan tâm lô ${sp.ma} — ${fmtTy(sp.gia)}, ${sp.dt}m² đường ${sp.truc}`}
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold
                                   text-white bg-[#0068FF] hover:bg-blue-700
                                   px-2.5 py-1.5 rounded-lg transition-colors"
                      >
                        <MessageCircle className="w-3 h-3" />
                        Báo giá
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ══ CARD LIST — Mobile ══ */}
      <div className="md:hidden space-y-3">
        {pool.length === 0 ? (
          <EmptyState onReset={resetAll} />
        ) : (
          displayRows.map((sp) => (
            <div key={sp.ma}
              className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm
                         hover:border-amber-200 hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <span className="font-mono font-black text-slate-900 text-sm">{sp.ma}</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
                      Đường {sp.truc}
                    </span>
                  </div>
                </div>
                <LoaiBadge loai={sp.loai} loaiGoc={sp.loaiGoc} />
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                <div className="bg-slate-50 rounded-xl py-2.5">
                  <p className="text-[10px] text-slate-400 mb-0.5">Diện tích</p>
                  <p className="text-sm font-bold text-slate-700">{sp.dt} m²</p>
                </div>
                <div className="bg-amber-50 rounded-xl py-2.5">
                  <p className="text-[10px] text-slate-400 mb-0.5">Tổng giá</p>
                  <p className="text-sm font-black text-amber-700">{fmtTy(sp.gia)}</p>
                </div>
                <div className="bg-slate-50 rounded-xl py-2.5">
                  <p className="text-[10px] text-slate-400 mb-0.5">Đơn giá</p>
                  <p className="text-[11px] font-semibold text-slate-600">~{donGia(sp)}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleCalc(sp.gia / 1_000_000_000)}
                  className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold
                             text-primary-600 bg-primary-50 border border-primary-200
                             py-2.5 rounded-xl hover:bg-primary-100 transition-colors"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  Tính lãi vay
                </button>
                <a
                  href={`${SITE_CONFIG.social.zalo}?text=Tôi quan tâm lô ${sp.ma} — ${fmtTy(sp.gia)}, ${sp.dt}m²`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold
                             text-white bg-[#0068FF] py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Nhận báo giá
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ══ XEM THÊM / THU GỌN ══ */}
      {pool.length > 8 && pool.length > 0 && (
        <div className="flex flex-col items-center gap-2 mt-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-16 bg-slate-200" />
            <span className="text-xs text-slate-400 tabular-nums">
              {displayRows.length} / {pool.length} sản phẩm
            </span>
            <div className="h-px w-16 bg-slate-200" />
          </div>
          <button
            onClick={handleShowMore}
            className={`inline-flex items-center gap-2 font-bold text-sm px-7 py-3 rounded-xl
              border-2 transition-all duration-200
              ${showingAll
                ? "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                : "bg-slate-900 text-white border-slate-900 hover:bg-slate-800 shadow-md"
              }`}
          >
            {showingAll ? (
              <><ChevronUp className="w-4 h-4" /> Thu gọn danh sách</>
            ) : (
              <><ChevronDown className="w-4 h-4" /> Xem thêm {Math.min(BATCH, pool.length - displayRows.length)} sản phẩm</>
            )}
          </button>
        </div>
      )}

      {/* ══ FOOTER NOTE ══ */}
      <div className="flex items-center gap-2 mt-5 justify-center">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
        <span className="text-xs text-slate-400">
          Dữ liệu từ CRM Kim Oanh Land · Chỉ hiển thị sản phẩm <strong>Sẵn sàng</strong> · Cập nhật 05/09/2026
        </span>
      </div>
    </div>
  );
}

// ── Empty state ───────────────────────────────────────────────────────────
function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center
                    bg-white rounded-2xl border border-slate-200">
      <div className="text-5xl mb-4">🔍</div>
      <p className="font-bold text-slate-700 mb-1.5">Không tìm thấy sản phẩm phù hợp</p>
      <p className="text-sm text-slate-400 mb-5 max-w-xs">
        Thử thay đổi bộ lọc hoặc xem tất cả sản phẩm đang Sẵn sàng.
      </p>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300
                   text-slate-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors"
      >
        <RotateCcw className="w-4 h-4" />
        Xoá bộ lọc và xem tất cả
      </button>
    </div>
  );
}
