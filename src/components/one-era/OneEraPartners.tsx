"use client";

import Image from "next/image";
import { ShieldCheck, Building2, Globe2, Award } from "lucide-react";
import { ONE_ERA_DATA } from "@/data/oneEraData";
import { IMG_ONE_ERA } from "@/lib/cloudinary";

export default function OneEraPartners() {
  const d = ONE_ERA_DATA.developers;

  return (
    <section id="doi-tac" className="py-16 lg:py-20 bg-[#06080e] text-[#f5f2eb] relative overflow-hidden border-b border-white/[0.06]">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#dfb552]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Liên Minh Chiến Lược Quốc Tế</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            BẢO CHỨNG BỞI <span className="bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] bg-clip-text text-transparent">KINERA & 3 TẬP ĐOÀN NHẬT BẢN</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Sự kết hợp hoàn hảo giữa năng lực phát triển quỹ đất 16 năm của Kim Oanh Group và công nghệ xây dựng, quản trị đô thị bền vững hơn 300 năm từ Nhật Bản.
          </p>
        </div>

        {/* Japanese Big 3 Consortium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {d.japanesePartners.map((p) => (
            <div
              key={p.name}
              className="p-8 rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] hover:border-[#dfb552]/50 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden backdrop-blur-xl shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#dfb552]/5 rounded-full blur-2xl group-hover:bg-[#dfb552]/10 transition-all" />

              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-[#dfb552]/10 text-[#dfb552] border border-[#dfb552]/20">
                  {p.established}
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase tracking-wider">Nhật Bản</span>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3 group-hover:text-[#dfb552] transition-colors">
                {p.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {p.role}
              </p>
            </div>
          ))}
        </div>

        {/* Kinera Philosophy Feature Banner */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#0a0e18] via-[#0c121e] to-[#0a0e18] border border-white/[0.08] shadow-2xl p-6 sm:p-12 mb-16 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#dfb552] mb-2 block">
                Triết Lý Phát Triển Của KINERA
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 leading-tight uppercase font-sans">
                "SỐNG TRÂN QUÝ" — TỔ ẤM VỮNG BỀN CHO MỌI THẾ HỆ
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-light">
                Kinera không chọn cách tạo ra những tòa nhà chỉ đẹp về số liệu, mà kiến tạo nên những không gian sống lý tưởng – nơi mỗi gia đình được nuôi dưỡng tâm hồn, người già an dưỡng tĩnh tại, người trẻ bứt phá sự nghiệp và con trẻ tự do lớn khôn trong hạnh phúc.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#58aeb4]" />
                  <span>Kim Oanh Group (51% Vốn)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#35a3ce]" />
                  <span>Liên minh Nhật Bản (49% Vốn)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#dfb552]" />
                  <span>Tổng thầu Coteccons</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 shadow-lg bg-[#06080e]">
                <Image
                  src={IMG_ONE_ERA.developers.kinera}
                  alt="Triết lý sống trân quý nhà phát triển Kinera One Era"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Global Design & Operation Partners Grid */}
        <div className="pt-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#dfb552]/40" />
            <h3 className="text-xs font-mono font-bold text-center text-[#dfb552] uppercase tracking-[0.25em]">
              Liên Danh Tư Vấn & Quy Hoạch Quốc Tế
            </h3>
            <span className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#dfb552]/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {d.partners.map((partner) => (
              <div
                key={partner.name}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#0e1422] to-[#0a0f1a] border border-white/[0.08] hover:border-[#dfb552]/40 hover:shadow-[0_10px_30px_rgba(223,181,82,0.1)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#dfb552]/10 text-[#dfb552] border border-[#dfb552]/20 uppercase tracking-wider">
                      {partner.country}
                    </span>
                    <Globe2 className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#dfb552] transition-colors" />
                  </div>
                  <h4 className="font-extrabold text-white text-sm mb-1.5 group-hover:text-[#dfb552] transition-colors">
                    {partner.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light mt-2 border-t border-white/[0.04] pt-2">
                  {partner.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
