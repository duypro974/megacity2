"use client";

import Image from "next/image";
import { Shield, Leaf, CheckCircle2, HeartHandshake, Award, ZoomIn } from "lucide-react";
import { ONE_ERA_DATA } from "@/data/oneEraData";
import { IMG_ONE_ERA } from "@/lib/cloudinary";

interface Props {
  onOpenImage?: (src: string, alt: string) => void;
}

export default function OneEraOverview({ onOpenImage }: Props) {
  const p = ONE_ERA_DATA.project;
  const d = ONE_ERA_DATA.developers;

  return (
    <section id="tong-quan" className="py-20 lg:py-28 bg-[#06080e] text-[#f5f2eb] relative overflow-hidden border-b border-white/[0.06]">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#dfb552]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-[#35a3ce]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Biểu Tượng Đô Thị Đẳng Cấp</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            TỔNG QUAN SIÊU DỰ ÁN <span className="bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] bg-clip-text text-transparent">ONE ERA</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Kiến tạo chuẩn mực sống thượng lưu quốc tế đầu tiên tại Bình Dương với quy mô gần 50 Hécta, được bảo chứng bởi liên minh chiến lược giữa Tập đoàn Địa ốc Kim Oanh và 3 tập đoàn danh tiếng hàng đầu Nhật Bản.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          <div className="p-6 rounded-2xl bg-[#0c121e]/80 border border-white/[0.08] hover:border-[#dfb552]/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-[#dfb552]/10 border border-[#dfb552]/30 flex items-center justify-center mb-5 text-[#dfb552] group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wide">Vốn Tỉ Đô Quốc Tế</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Đại đô thị sinh thái kiểu mẫu chuẩn quốc tế với sự hợp tác phát triển cùng Sumitomo Forestry, Kumagai Gumi và NTT Urban Development.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c121e]/80 border border-white/[0.08] hover:border-[#58aeb4]/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-[#58aeb4]/10 border border-[#58aeb4]/30 flex items-center justify-center mb-5 text-[#58aeb4] group-hover:scale-110 transition-transform">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wide">Chuẩn Xanh Fitwel 3 Sao</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dự án hiếm hoi đạt chuẩn thiết kế công trình xanh EDGE và chứng nhận Fitwel 3 sao cao nhất của Hoa Kỳ về sức khỏe cộng đồng.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c121e]/80 border border-white/[0.08] hover:border-[#35a3ce]/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-[#35a3ce]/10 border border-[#35a3ce]/30 flex items-center justify-center mb-5 text-[#35a3ce] group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wide">Tam Giao & 2 Ga Metro</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Giao lộ huyết mạch Vành Đai 3 và Quốc Lộ 13, tích hợp nhà ga Metro Line 1B và Line 2B kết nối thẳng vào trung tâm TP.HCM.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c121e]/80 border border-white/[0.08] hover:border-[#dd668c]/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-[#dd668c]/10 border border-[#dd668c]/30 flex items-center justify-center mb-5 text-[#dd668c] group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wide">Tổ Ấm Đa Thế Hệ NIZI</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cảm hứng thắt dây Mizuhiki Nhật Bản kiến tạo không gian sống gắn kết ông bà, cha mẹ và con trẻ trong một tổ ấm an yên.
            </p>
          </div>
        </div>

        {/* Master Plan Visual & Specs Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Master Visual */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl group bg-[#0c101a]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/one-era/one-era-top-view-night-masterplan.webp"
                  alt="Mặt bằng tổng thể 3D siêu dự án One Era Bình Dương"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-[#06080e]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-xs font-mono font-bold text-[#dfb552]">
                QUY HOẠCH TỔNG THỂ 50 HÉCTA • BẢN NÉT 10K
              </div>

              {/* Zoom Button */}
              {onOpenImage && (
                <button
                  onClick={() => onOpenImage("/images/one-era/one-era-top-view-night-masterplan.webp", "Quy hoạch tổng thể 50ha One Era (Bản Nét 10K)")}
                  className="absolute bottom-4 right-4 bg-[#0c121e]/90 hover:bg-[#dfb552] hover:text-[#06080e] text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-lg"
                  aria-label="Phóng to ảnh quy hoạch tổng thể"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              )}
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center italic">
              * Phối cảnh 3D đại đô thị ONE ERA 50ha nhìn từ độ cao 200m
            </p>
          </div>

          {/* Key Facts Table */}
          <div className="lg:col-span-5">
            <div className="bg-[#0c121e]/85 border border-white/[0.08] rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <h3 className="text-lg font-extrabold text-white mb-6 pb-3 border-b border-white/[0.08] flex items-center justify-between">
                <span className="uppercase tracking-wider">Thông Tin Quy Hoạch</span>
                <span className="text-[10px] font-mono text-[#dfb552] px-2 py-0.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 uppercase tracking-widest">
                  Chính Thức
                </span>
              </h3>

              <dl className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <dt className="text-slate-400">Tên dự án</dt>
                  <dd className="font-bold text-white text-right">{p.name} ({p.formerName})</dd>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <dt className="text-slate-400">Chủ đầu tư</dt>
                  <dd className="font-bold text-white text-right">{d.investor}</dd>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <dt className="text-slate-400">Nhà phát triển</dt>
                  <dd className="font-bold text-[#dfb552] text-right">{d.developerName}</dd>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <dt className="text-slate-400">Đối tác Nhật Bản</dt>
                  <dd className="font-semibold text-slate-200 text-right">Sumitomo Forestry · Kumagai · NTT</dd>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <dt className="text-slate-400">Tổng thầu xây dựng</dt>
                  <dd className="font-bold text-white text-right">Coteccons</dd>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <dt className="text-slate-400">Quy mô diện tích</dt>
                  <dd className="font-mono font-bold text-[#dfb552] text-right">{p.scale}</dd>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <dt className="text-slate-400">Tổng vốn đầu tư</dt>
                  <dd className="font-mono font-bold text-[#dfb552] text-right">{p.investment}</dd>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <dt className="text-slate-400">Mật độ xây dựng</dt>
                  <dd className="font-semibold text-white text-right">{p.density}</dd>
                </div>

                <div className="flex justify-between py-1.5 border-b border-white/[0.06]">
                  <dt className="text-slate-400">Mở bán đợt 1</dt>
                  <dd className="font-bold text-[#dd668c] text-right">Central District (357 Căn thấp tầng)</dd>
                </div>

                <div className="flex justify-between py-1.5">
                  <dt className="text-slate-400">Thời gian bàn giao</dt>
                  <dd className="font-bold text-[#58aeb4] text-right">{p.handoverDate}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
