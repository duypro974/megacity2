"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { cld } from "@/lib/cloudinary";

const BRAND_IMAGE = cld("megacity2/overview", "1.jpg", "lg");

const PILLARS = [
  {
    icon: "🏗️",
    title: "Phát triển",
    desc: "Đầu tư và phát triển dự án khu dân cư, nhà ở đô thị quy mô lớn tại Đông Nam Bộ.",
  },
  {
    icon: "🏠",
    title: "Nhà ở xã hội",
    desc: "Mang nhà ở chất lượng đến tầng lớp thu nhập trung bình qua chuỗi K-Home.",
  },
  {
    icon: "⚙️",
    title: "Xây dựng",
    desc: "Thi công hạ tầng và công trình dân dụng đạt chuẩn kỹ thuật cao.",
  },
  {
    icon: "🤝",
    title: "Cộng đồng",
    desc: "Đồng hành phát triển kinh tế-xã hội địa phương, tạo môi trường sống đáng tự hào.",
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
                  Hơn 15 năm kiến tạo
                  <br />
                  <span className="text-amber-500">cộng đồng sống</span>
                </>
              }
              subtitle="Kim Oanh Group là tập đoàn địa ốc hoạt động từ năm 2009, chuyên phát triển các dự án khu dân cư và nhà ở tại tỉnh Đồng Nai và khu vực Đông Nam Bộ."
            />

            <div className="grid grid-cols-2 gap-4 mb-8">
              {PILLARS.map((p) => (
                <div
                  key={p.title}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-200 hover:bg-amber-50/40 transition-colors"
                >
                  <span className="text-2xl mb-3 block">{p.icon}</span>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5">{p.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#du-an"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("du-an")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-500 transition-colors"
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
                alt="Kim Oanh Group – Dự án khu dân cư Mega City 2 Nhơn Trạch"
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
                      Thành lập 2009 · Đồng Nai, Việt Nam
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -top-4 -right-4 rounded-2xl p-4 w-32 text-center shadow-xl"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
              }}
            >
              <p className="text-white font-black text-2xl leading-none">15+</p>
              <p className="text-white/80 text-[10px] mt-1 font-semibold uppercase tracking-wide">
                Năm kinh nghiệm
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
