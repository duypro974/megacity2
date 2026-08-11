import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/data/companyInfo";

// ─────────────────────────────────────────────────────────────
// AboutIntro — Kim Oanh Group là ai?
// ─────────────────────────────────────────────────────────────

export default function AboutIntro() {
  return (
    <section id="gioi-thieu-kog" className="py-28 bg-white" data-reveal>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Text */}
          <div>
            <SectionHeading
              eyebrow="KIM OANH GROUP LÀ AI?"
              title={
                <>
                  Một hệ sinh thái được
                  <br />
                  <span className="text-amber-500">xây dựng từ nền tảng bất động sản</span>
                </>
              }
            />
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>{COMPANY_INFO.description}</p>
              <p>{COMPANY_INFO.description2}</p>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="font-bold text-slate-500">Lưu ý: </span>
                {COMPANY_INFO.siteDisclaimer}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {/* Main placeholder */}
            <div
              className="w-full rounded-[20px] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 relative"
              style={{ aspectRatio: "4/5" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                <p className="text-slate-400 text-xs font-medium text-center px-6 leading-snug">
                  Ảnh corporate Kim Oanh Group
                  <br />
                  <span className="text-slate-300">(placeholder)</span>
                </p>
              </div>

              {/* Bottom card */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div
                  className="rounded-2xl p-4"
                  style={{
                    background: "rgba(8,15,30,0.80)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/KOG_Web_RGB_01.svg"
                    alt="Kim Oanh Group"
                    className="h-6 w-auto brightness-0 invert mb-2"
                  />
                  <p className="text-white/40 text-[10px] leading-snug">
                    Thông tin tham khảo – không đại diện
                    <br />cho Kim Oanh Group chính thức.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
