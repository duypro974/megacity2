"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";

import { IMG_ABOUT } from "@/lib/cloudinary";

// ─────────────────────────────────────────────────────────────
// Timeline — Hành trình phát triển (vertical timeline thực sự)
//
// NGUYÊN TẮC DỮ LIỆU:
// - verified: true  → có nguồn xác minh cụ thể, render công khai
// - verified: false → placeholder, không render
// - image: ảnh 3–7 từ Cloudinary folder about/
// ─────────────────────────────────────────────────────────────

interface TimelineMilestone {
  year: string;
  month?: string;
  title: string;
  detail: string;
  verified: boolean;
  source?: string;
  sourceUrl?: string;
  category: "founding" | "project" | "legal" | "award" | "infrastructure";
  cta?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
}

const CATEGORY_CONFIG: Record<
  TimelineMilestone["category"],
  { label: string; color: string; dot: string; badge: string }
> = {
  founding:       { label: "Thành lập",    color: "text-amber-600",   dot: "bg-amber-500",    badge: "bg-amber-50 text-amber-700 border-amber-200" },
  project:        { label: "Dự án",        color: "text-blue-600",    dot: "bg-blue-500",     badge: "bg-blue-50 text-blue-700 border-blue-200" },
  legal:          { label: "Pháp lý",      color: "text-emerald-600", dot: "bg-emerald-500",  badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  award:          { label: "Giải thưởng",  color: "text-purple-600",  dot: "bg-purple-500",   badge: "bg-purple-50 text-purple-700 border-purple-200" },
  infrastructure: { label: "Hạ tầng",      color: "text-sky-600",     dot: "bg-sky-500",      badge: "bg-sky-50 text-sky-700 border-sky-200" },
};

// ── Data ──────────────────────────────────────────────────────
// Chỉ render khi verified === true.
// Giữ nguyên các mốc chưa verify trong data để điền sau khi có nguồn.
const MILESTONES: TimelineMilestone[] = [
  {
    year: "2009",
    title: "Kim Oanh Group thành lập, hoạt động tại Đồng Nai",
    detail:
      "Kim Oanh Group bắt đầu hành trình hoạt động trong lĩnh vực bất động sản, tập trung phát triển tại khu vực Đồng Nai và các tỉnh thành phía Nam.",
    verified: true,
    source: "Thông tin tham khảo từ nguồn công khai",
    category: "founding",
    image: IMG_ABOUT["3"],
    imageAlt: "Kim Oanh Group thành lập 2009",
  },
  {
    year: "2018",
    title: "Đầu tư dự án Mega City 2 Nhơn Trạch",
    detail:
      "Kim Oanh Group triển khai dự án khu dân cư Mega City 2 tại xã Nhơn Trạch, tỉnh Đồng Nai — khu dân cư quy mô ~84 ha với hệ thống hạ tầng đồng bộ theo tiêu chuẩn đô thị.",
    verified: true,
    source: "Dữ liệu dự án nội bộ",
    category: "project",
    cta: { label: "Xem dự án Mega City 2", href: "/mega-city-2" },
    image: IMG_ABOUT["4"],
    imageAlt: "Dự án Mega City 2 Nhơn Trạch Đồng Nai",
  },
  {
    year: "2022",
    title: "Khởi động xây dựng hạ tầng nội khu Mega City 2",
    detail:
      "Triển khai thi công đường nội khu, hệ thống điện ngầm, cấp thoát nước và công viên trung tâm. Đây là giai đoạn hình thành toàn bộ hạ tầng theo quy hoạch chi tiết 1/500 đã được phê duyệt.",
    verified: true,
    source: "Thông tin thực địa dự án",
    category: "infrastructure",
    cta: { label: "Xem tiến độ hạ tầng", href: "/mega-city-2/tien-do" },
    image: IMG_ABOUT["5"],
    imageAlt: "Thi công hạ tầng nội khu Mega City 2",
  },
  {
    year: "2025",
    month: "05",
    title: "UBND tỉnh Đồng Nai ban hành QĐ 1772/QĐ-UBND – 2.421 lô Mega City 2 được chấp thuận phân lô bán nền",
    detail:
      "Ngày 30/05/2025, UBND tỉnh Đồng Nai ban hành Quyết định số 1772/QĐ-UBND, chấp thuận 2.421 lô thuộc khu dân cư Mega City 2 đủ điều kiện chuyển nhượng quyền sử dụng đất theo hình thức phân lô bán nền, bao gồm các dãy T-1 đến T-29, TH-1 đến TH-28 và V-1 đến V-4. Đây là văn bản pháp lý quan trọng nhất của dự án.",
    verified: true,
    source: "Quyết định số 1772/QĐ-UBND ngày 30/05/2025 – UBND tỉnh Đồng Nai",
    category: "legal",
    cta: { label: "Xem chi tiết pháp lý", href: "/mega-city-2/phap-ly" },
    image: IMG_ABOUT["6"],
    imageAlt: "Quyết định 1772 UBND tỉnh Đồng Nai Mega City 2",
  },
  {
    year: "2025",
    month: "06",
    title: "Hạ tầng Mega City 2 đạt ~95% theo thông tin công bố",
    detail:
      "Theo thông tin được công bố tháng 06/2025, tiến độ hoàn thiện hạ tầng khu dân cư Mega City 2 đạt khoảng 95%, bao gồm đường nội khu 13–32m, điện âm, nước thủy cục và hệ thống cây xanh. Dự án đã cấp 110 Giấy chứng nhận quyền sử dụng đất.",
    verified: true,
    source: "Thông tin công bố 06/2025",
    category: "infrastructure",
    cta: { label: "Xem hình ảnh thực tế", href: "/mega-city-2/hinh-anh" },
    image: IMG_ABOUT["7"],
    imageAlt: "Hạ tầng Mega City 2 hoàn thiện 2025",
  },
];

const VERIFIED = MILESTONES.filter((m) => m.verified);

export default function Timeline() {
  const [expanded, setExpanded] = useState<number | null>(null);

  if (VERIFIED.length === 0) {
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
            <p className="text-slate-400 text-sm font-medium">Thông tin đang được cập nhật.</p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="hanh-trinh" className="py-28 bg-white overflow-hidden" data-reveal>
      <Container size="xl">
        {/* ── Header ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-amber-500" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
              HÀNH TRÌNH PHÁT TRIỂN
            </p>
          </div>
          <h2 className="font-black text-slate-900 text-[clamp(1.6rem,3.5vw,2.5rem)] leading-tight mb-3">
            Những dấu mốc quan trọng
          </h2>
          <p className="text-slate-500 text-base max-w-xl leading-relaxed">
            Hành trình phát triển của Kim Oanh Group và các mốc pháp lý, hạ tầng quan trọng
            tại dự án Mega City 2 Nhơn Trạch.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical spine — desktop */}
          <div className="absolute left-[116px] top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

          <ol className="space-y-0" itemScope itemType="https://schema.org/ItemList">
            {VERIFIED.map((item, i) => {
              const cat = CATEGORY_CONFIG[item.category];
              const isExpanded = expanded === i;
              const isLast = i === VERIFIED.length - 1;

              return (
                <li
                  key={`${item.year}-${i}`}
                  className="relative"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <meta itemProp="position" content={String(i + 1)} />

                  {/* ── Desktop layout ── */}
                  <div className="hidden md:flex items-start gap-0">
                    {/* Year column */}
                    <div className="w-[116px] flex-shrink-0 pt-1 pr-6 text-right">
                      <time
                        dateTime={item.month ? `${item.year}-${item.month}` : item.year}
                        className={`block font-black text-2xl ${cat.color} leading-none`}
                      >
                        {item.year}
                      </time>
                      {item.month && (
                        <span className="text-[11px] text-slate-400 font-medium mt-0.5 block">
                          tháng {item.month}
                        </span>
                      )}
                    </div>

                    {/* Dot on spine */}
                    <div className="relative flex-shrink-0 w-8 flex justify-center pt-1.5">
                      <div
                        className={`w-4 h-4 rounded-full border-2 border-white shadow-md z-10 flex-shrink-0
                          ${cat.dot}`}
                      />
                    </div>

                    {/* Content card */}
                    <div className={`flex-1 pl-6 ${isLast ? "pb-0" : "pb-12"}`}>
                      <div
                        className={`rounded-2xl border transition-all duration-300
                          ${isExpanded
                            ? "bg-slate-50 border-slate-200 shadow-md"
                            : "bg-white border-slate-150 hover:border-slate-200 hover:shadow-sm"
                          }`}
                      >
                        {/* Card header — always visible */}
                        <button
                          onClick={() => setExpanded(isExpanded ? null : i)}
                          className="w-full text-left p-5 md:p-6"
                          aria-expanded={isExpanded}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              {/* Category badge */}
                              <span className={`inline-block text-[10px] font-bold uppercase tracking-wider
                                border px-2.5 py-1 rounded-full mb-3 ${cat.badge}`}>
                                {cat.label}
                              </span>
                              <h3
                                className="font-bold text-slate-900 text-base leading-snug"
                                itemProp="name"
                              >
                                {item.title}
                              </h3>
                            </div>
                            {/* Expand toggle */}
                            <div
                              className={`flex-shrink-0 w-7 h-7 rounded-full border border-slate-200
                                flex items-center justify-center transition-all mt-0.5
                                ${isExpanded ? "bg-slate-100 border-slate-300" : "bg-white"}`}
                            >
                              <svg
                                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200
                                  ${isExpanded ? "rotate-180" : ""}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </button>

                        {/* Expanded detail */}
                        {isExpanded && (
                          <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-slate-100 pt-4">
                            <div className={`grid gap-6 ${item.image ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"}`}>
                              {/* Text */}
                              <div className={item.image ? "lg:col-span-2" : ""}>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4" itemProp="description">
                                  {item.detail}
                                </p>

                                {/* Source */}
                                {item.source && (
                                  <p className="text-xs text-slate-400 italic mb-4 flex items-start gap-1.5">
                                    <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-slate-300"
                                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                      <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    Nguồn:{" "}
                                    {item.sourceUrl ? (
                                      <a
                                        href={item.sourceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        className="underline hover:text-slate-600 inline-flex items-center gap-1"
                                      >
                                        {item.source}
                                        <ExternalLink className="w-2.5 h-2.5" />
                                      </a>
                                    ) : (
                                      <span>{item.source}</span>
                                    )}
                                  </p>
                                )}

                                {/* CTA */}
                                {item.cta && (
                                  <Link
                                    href={item.cta.href}
                                    className="inline-flex items-center gap-2 text-sm font-bold
                                               text-amber-700 bg-amber-50 hover:bg-amber-100
                                               border border-amber-200 px-4 py-2 rounded-full
                                               transition-all hover:-translate-y-px"
                                  >
                                    {item.cta.label}
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                )}
                              </div>

                              {/* Image */}
                              {item.image ? (
                                <div className="rounded-xl overflow-hidden bg-slate-100" style={{ aspectRatio: "4/3" }}>
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={item.image}
                                    alt={item.imageAlt ?? item.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                </div>
                              ) : (
                                <div
                                  className="rounded-xl bg-slate-100 flex items-center justify-center"
                                  style={{ aspectRatio: "4/3" }}
                                  aria-hidden="true"
                                >
                                  <p className="text-slate-300 text-xs text-center px-4">Ảnh minh họa<br/>(chưa có)</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* ── Mobile layout ── */}
                  <div className="md:hidden relative pl-10 pb-10 last:pb-0">
                    {/* Vertical spine segment */}
                    {!isLast && (
                      <div className="absolute left-[14px] top-5 bottom-0 w-px bg-slate-200" />
                    )}
                    {/* Dot */}
                    <div
                      className={`absolute left-[7px] top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-md z-10 ${cat.dot}`}
                    />

                    {/* Year label */}
                    <time
                      dateTime={item.month ? `${item.year}-${item.month}` : item.year}
                      className={`block font-black text-xl ${cat.color} leading-none mb-2`}
                    >
                      {item.year}
                      {item.month && (
                        <span className="text-xs font-medium text-slate-400 ml-2">
                          tháng {item.month}
                        </span>
                      )}
                    </time>

                    <button
                      onClick={() => setExpanded(isExpanded ? null : i)}
                      className={`w-full text-left rounded-2xl border p-4 transition-all
                        ${isExpanded
                          ? "bg-slate-50 border-slate-300"
                          : "bg-white border-slate-200"
                        }`}
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className={`inline-block text-[10px] font-bold uppercase tracking-wider
                            border px-2 py-0.5 rounded-full mb-2 ${cat.badge}`}>
                            {cat.label}
                          </span>
                          <h3 className="font-bold text-slate-900 text-sm leading-snug">
                            {item.title}
                          </h3>
                        </div>
                        <svg
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5 transition-transform duration-200
                            ${isExpanded ? "rotate-180" : ""}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>

                      {isExpanded && (
                        <div className="mt-4 border-t border-slate-100 pt-4">
                          <p className="text-slate-600 text-xs leading-relaxed mb-3">
                            {item.detail}
                          </p>
                          {item.source && (
                            <p className="text-[10px] text-slate-400 italic mb-3">
                              Nguồn: {item.source}
                            </p>
                          )}
                          {item.cta && (
                            <Link
                              href={item.cta.href}
                              className="inline-flex items-center gap-1.5 text-xs font-bold
                                         text-amber-700 bg-amber-50 border border-amber-200
                                         px-3 py-1.5 rounded-full"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {item.cta.label}
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          )}
                        </div>
                      )}
                    </button>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ── Disclaimer ── */}
        <div className="mt-16 rounded-2xl bg-slate-50 border border-slate-200 p-5">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-600 text-[10px] font-black">!</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              <span className="font-semibold text-slate-600">Lưu ý về dữ liệu timeline: </span>
              Các mốc được hiển thị dựa trên thông tin có cơ sở xác minh. Mốc pháp lý (QĐ 1772/QĐ-UBND)
              là văn bản nhà nước đã ban hành. Một số thông tin khác mang tính tham khảo từ nguồn công khai.
              Trang này không đại diện chính thức cho Kim Oanh Group.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
