import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight, Building2, HardHat, Users, ShieldCheck } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// KimOanhGroupSection — Giới thiệu Kim Oanh Group
// Định vị: Tìm hiểu thêm về tập đoàn, không phải tự nhận là tập đoàn.
// Visual ecosystem chỉ liệt kê đơn vị thành viên (không phải tên dự án).
// ─────────────────────────────────────────────────────────────

// Các mảng hoạt động dựa trên thông tin công khai về Kim Oanh Group
const ECOSYSTEM = [
  {
    icon: <Building2 className="w-5 h-5" />,
    label: "Đầu tư & Phát triển",
    note: "Phát triển dự án bất động sản",
  },
  {
    icon: <HardHat className="w-5 h-5" />,
    label: "Xây dựng",
    note: "Thi công và hạ tầng",
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: "Kim Oanh Realty",
    note: "Tư vấn & phân phối",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    label: "Dịch vụ sau bán hàng",
    note: "Quản lý vận hành",
  },
];

export default function KimOanhGroupSection() {
  return (
    <section
      id="kim-oanh-group"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #080f1e 0%, #0f172a 60%, #141a2e 100%)" }}
      data-reveal
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,1) 80px, rgba(255,255,255,1) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,1) 80px, rgba(255,255,255,1) 81px)",
        }}
      />

      {/* Amber glow */}
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — content */}
          <div>
            <SectionHeading
              eyebrow="KIM OANH GROUP"
              title={
                <>
                  Tìm hiểu thêm về
                  <br />
                  <span className="text-amber-400">Kim Oanh Group</span>
                </>
              }
              subtitle="Kim Oanh Group là tập đoàn hoạt động trong lĩnh vực bất động sản với hệ sinh thái gồm các đơn vị chuyên môn về đầu tư, phát triển, xây dựng và tư vấn – phân phối bất động sản."
              light
            />

            <a
              href="https://kimoanh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400
                         text-white px-7 py-3.5 rounded-full text-sm font-bold
                         shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 group"
            >
              XEM GIỚI THIỆU KIM OANH GROUP
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right — ecosystem visual */}
          <div>
            <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-6">
              Hệ sinh thái đơn vị
            </p>

            {/* Central hub */}
            <div className="relative">
              {/* Hub card */}
              <div
                className="rounded-2xl p-5 mb-4 border border-white/10"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/KOG_Web_RGB_01.svg"
                    alt="Kim Oanh Group"
                    className="h-8 w-auto brightness-0 invert flex-shrink-0"
                  />
                  <div>
                    <p className="text-white font-black text-sm">Kim Oanh Group</p>
                    <p className="text-white/40 text-xs mt-0.5">Tập đoàn bất động sản</p>
                  </div>
                </div>
              </div>

              {/* Ecosystem units */}
              <div className="grid grid-cols-2 gap-3">
                {ECOSYSTEM.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl p-4 border border-white/[0.07] hover:border-amber-500/30 transition-colors"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3">
                      {item.icon}
                    </div>
                    <p className="text-white text-xs font-bold leading-tight mb-0.5">{item.label}</p>
                    <p className="text-white/35 text-[11px]">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-white/25 text-[11px] mt-5 leading-relaxed">
              Thông tin mang tính tham khảo dựa trên nguồn công khai.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
