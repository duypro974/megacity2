import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { cld } from "@/lib/cloudinary";

// TODO: Thay bằng ảnh corporate chính thức của Kim Oanh Group khi có
const BRAND_IMAGE = cld("megacity2/overview", "1.jpg", "lg");

// Các mảng hoạt động này dựa trên dự án thực tế hiện có
// — không phải claim tự tạo
const PILLARS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Phát triển khu dân cư",
    desc: "Đầu tư và phát triển khu dân cư theo quy hoạch đồng bộ tại Đồng Nai.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Dự án nhà ở xã hội",
    desc: "Phát triển các dự án nhà ở xã hội tại Đồng Nai, phục vụ người có thu nhập trung bình.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Xây dựng hạ tầng",
    desc: "Thi công hạ tầng nội khu đồng bộ — đường, điện, nước, viễn thông.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Pháp lý minh bạch",
    desc: "Ưu tiên quy hoạch 1/500, pháp lý rõ ràng trước khi mở bán từng sản phẩm.",
  },
];

export default function BrandIntro() {
  return (
    <section id="ve-kim-oanh" className="py-24 bg-white" data-reveal>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div>
            <SectionHeading
              eyebrow="Về Kim Oanh"
              title={
                <>
                  Kim Oanh Group
                  <br />
                  <span className="text-amber-500">Tại Đồng Nai</span>
                </>
              }
              subtitle="Kim Oanh Group là tập đoàn địa ốc hoạt động tại tỉnh Đồng Nai, chuyên phát triển các dự án khu dân cư và nhà ở tại khu vực Đông Nam Bộ."
            />

            <div className="grid grid-cols-2 gap-4 mb-8">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-100
                             hover:border-amber-200 hover:bg-amber-50/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-3">
                    {p.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5">{p.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#du-an"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-600
                         hover:text-amber-500 transition-colors"
            >
              Xem danh mục dự án →
            </a>
          </div>

          {/* Image column */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BRAND_IMAGE}
                alt="Kim Oanh Group – Dự án Mega City 2 Nhơn Trạch"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="rounded-2xl p-4 flex items-center gap-4"
                  style={{
                    background: "rgba(8,15,30,0.75)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/KOG_Web_RGB_01.svg"
                    alt="Kim Oanh Group"
                    className="h-7 w-auto brightness-0 invert flex-shrink-0"
                  />
                  <div>
                    <p className="text-white text-xs font-bold">Kim Oanh Group</p>
                    <p className="text-white/50 text-[10px] mt-0.5">
                      Đồng Nai, Việt Nam
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified fact badge */}
            <div
              className="absolute -top-4 -right-4 rounded-2xl p-4 w-32 text-center shadow-xl"
              style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)" }}
            >
              <p className="text-white font-black text-xl leading-none">4</p>
              <p className="text-white/80 text-[10px] mt-1 font-semibold uppercase tracking-wide">
                Dự án
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
