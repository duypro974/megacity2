"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { cld } from "@/lib/cloudinary";
import { ArrowRight, ExternalLink } from "lucide-react";

// Image placeholder — thay bằng ảnh corporate chính thức khi có
const INTRO_IMAGE = cld("megacity2/overview", "1.jpg", "lg");

// ─────────────────────────────────────────────────────────────
// IntroSection — Giới thiệu hệ sinh thái Kim Oanh
// KHÔNG tự nhận là chủ đầu tư, KHÔNG phóng đại claim
// ─────────────────────────────────────────────────────────────

const PILLARS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Đầu tư & Phát triển",
    desc: "Đầu tư và phát triển dự án bất động sản tại Đồng Nai.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Xây dựng",
    desc: "Thi công hạ tầng và công trình đồng bộ trong các dự án.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Tư vấn & Phân phối",
    desc: "Đội ngũ chuyên môn hỗ trợ tư vấn, tiếp thị và phân phối sản phẩm.",
  },
];

export default function IntroSection() {
  return (
    <section id="gioi-thieu" className="py-28 bg-white" data-reveal>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* ── Text column ── */}
          <div>
            <SectionHeading
              eyebrow="VỀ KIM OANH"
              title={
                <>
                  Hệ sinh thái
                  <br />
                  <span className="text-amber-500">bất động sản Kim Oanh</span>
                </>
              }
            />

            <p className="text-slate-600 text-base leading-relaxed mb-10">
              Kim Oanh là thương hiệu hoạt động trong lĩnh vực bất động sản với hệ sinh
              thái gồm các đơn vị chuyên môn trong đầu tư, phát triển, xây dựng và tư
              vấn – phân phối bất động sản.
            </p>

            {/* Pillars */}
            <div className="space-y-4 mb-12">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-amber-200 hover:bg-amber-50/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 shadow-sm">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-0.5">{p.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#du-an"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("du-an")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-600
                         hover:text-amber-500 transition-colors group"
            >
              Xem các dự án đang được hỗ trợ
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* ── Image column ── */}
          <div className="relative lg:sticky lg:top-24">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-[20px] aspect-[4/5] shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={INTRO_IMAGE}
                alt="Dự án bất động sản Kim Oanh tại Đồng Nai"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Bottom glass card */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="rounded-2xl p-4"
                  style={{
                    background: "rgba(8,15,30,0.78)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  <p className="text-white/45 text-[10px] font-bold uppercase tracking-widest mb-1.5">
                    Giới thiệu bởi
                  </p>
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/KOG_Web_RGB_01.svg"
                      alt="Kim Oanh Group"
                      className="h-6 w-auto brightness-0 invert flex-shrink-0"
                    />
                    <div>
                      <p className="text-white text-xs font-bold leading-tight">Kim Oanh Đồng Nai</p>
                      <p className="text-white/40 text-[10px] mt-0.5">Cổng thông tin dự án</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge — Đồng Nai */}
            <div
              className="absolute -top-5 -right-5 w-24 h-24 rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-amber-500/20"
              style={{ background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)" }}
            >
              <p className="text-white font-black text-lg leading-none">Đồng</p>
              <p className="text-white font-black text-lg leading-none">Nai</p>
            </div>
          </div>
        </div>

        {/* ── Kim Oanh Realty subsection ── */}
        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-amber-600 mb-4">
                <span className="inline-block w-5 h-px bg-amber-500" />
                KIM OANH REALTY
              </p>
              <h3 className="font-black text-slate-900 text-[clamp(1.3rem,2.5vw,1.8rem)] leading-tight mb-4">
                Đơn vị tư vấn &amp; phân phối
              </h3>
              <p className="text-slate-500 text-base leading-relaxed max-w-2xl">
                Kim Oanh Realty là một đơn vị thành viên trong hệ sinh thái Kim Oanh,
                hoạt động trong lĩnh vực tư vấn, tiếp thị và phân phối bất động sản.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <a
                href="#kim-oanh-group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("kim-oanh-group")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-amber-300
                           text-slate-600 hover:text-amber-600 bg-white hover:bg-amber-50
                           px-6 py-3 rounded-full text-sm font-bold transition-all group"
              >
                XEM THÔNG TIN KIM OANH REALTY
                <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
