"use client";

import { Leaf, Cpu, Heart } from "lucide-react";
import { ONE_ERA_DATA } from "@/data/oneEraData";

export default function OneEraGreenSmart() {
  const zones = ONE_ERA_DATA.futureZones;

  return (
    <section id="chuan-xanh" className="py-20 lg:py-28 bg-[#06080e] text-[#f5f2eb] relative overflow-hidden border-b border-white/[0.06]">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#58aeb4]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#dfb552]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4">
            <Leaf className="w-3.5 h-3.5" />
            <span>Tiêu Chuẩn Sống Bền Vững Quốc Tế</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            CHỨNG NHẬN XANH <span className="bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] bg-clip-text text-transparent">FITWEL 3 SAO & CHUẨN EDGE</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            One Era là một trong những đô thị tiên phong tại Việt Nam đạt tiêu chuẩn thiết kế vì sức khỏe con người cao nhất của Hoa Kỳ, kết hợp trí tuệ nhân tạo AI quản lý vận hành.
          </p>
        </div>

        {/* 3 Main Standards Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] hover:border-[#58aeb4]/50 transition-all duration-300 shadow-xl relative overflow-hidden group backdrop-blur-xl">
            <div className="w-14 h-14 rounded-2xl bg-[#58aeb4]/10 border border-[#58aeb4]/30 flex items-center justify-center mb-6 text-[#58aeb4] group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7" />
            </div>
            <div className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#58aeb4]/10 text-[#58aeb4] border border-[#58aeb4]/30 inline-block mb-3 uppercase tracking-wider">
              Chuẩn 3 Sao Fitwel (Hoa Kỳ)
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3">
              Fitwel Community Site 3 Sao
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Chứng chỉ sức khỏe cộng đồng uy tín hàng đầu thế giới từ Center for Active Design (Hoa Kỳ). Thiết kế tối ưu ánh sáng tự nhiên, thảm thực vật vi khí hậu, chất lượng không khí trong lành và khuyến khích lối sống vận động ngoài trời.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] hover:border-[#dfb552]/50 transition-all duration-300 shadow-xl relative overflow-hidden group backdrop-blur-xl">
            <div className="w-14 h-14 rounded-2xl bg-[#dfb552]/10 border border-[#dfb552]/30 flex items-center justify-center mb-6 text-[#dfb552] group-hover:scale-110 transition-transform">
              <Leaf className="w-7 h-7" />
            </div>
            <div className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#dfb552]/10 text-[#dfb552] border border-[#dfb552]/30 inline-block mb-3 uppercase tracking-wider">
              Chứng Chỉ Quốc Tế EDGE
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3">
              Công Trình Xanh EDGE
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Tiêu chuẩn công trình xanh của Tổ chức Tài chính Quốc tế (IFC) – thành viên Ngân hàng Thế giới. Giúp tiết kiệm tối thiểu 20% năng lượng tiêu thụ, 20% nước sạch và giảm phát thải carbon vật liệu xây dựng.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] hover:border-[#35a3ce]/50 transition-all duration-300 shadow-xl relative overflow-hidden group backdrop-blur-xl">
            <div className="w-14 h-14 rounded-2xl bg-[#35a3ce]/10 border border-[#35a3ce]/30 flex items-center justify-center mb-6 text-[#35a3ce] group-hover:scale-110 transition-transform">
              <Cpu className="w-7 h-7" />
            </div>
            <div className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#35a3ce]/10 text-[#35a3ce] border border-[#35a3ce]/30 inline-block mb-3 uppercase tracking-wider">
              AI Smart City 24/7
            </div>
            <h3 className="text-xl font-extrabold text-white mb-3">
              Hạ Tầng AI Thông Minh
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Hệ sinh thái an ninh đa tầng với camera nhận diện AI, điều tiết giao thông tự động, ứng dụng cư dân thông minh tích hợp hồ sơ sức khỏe và thanh toán một chạm cho toàn bộ dịch vụ nội khu.
            </p>
          </div>
        </div>

        {/* 4 Future Zones Road Map */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c121e]/80 border border-white/[0.08] backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#dfb552] mb-2 block">
              Tầm Nhìn Quy Hoạch Dài Hạn
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white uppercase font-sans">
              BỘ TỨ PHÂN KHU ĐÔ THỊ ONE ERA
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {zones.map((z) => (
              <div key={z.name} className="p-6 rounded-2xl bg-[#06080e]/80 border border-white/[0.06] hover:border-[#dfb552]/40 transition-all">
                <div className="text-[10px] font-mono font-bold text-[#dfb552] uppercase mb-1">{z.concept}</div>
                <h4 className="text-base font-bold text-white mb-2">{z.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
