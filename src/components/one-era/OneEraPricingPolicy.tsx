"use client";

import { CreditCard, Calendar, Percent, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function OneEraPricingPolicy() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="bang-gia" className="py-20 lg:py-28 bg-[#06080e] text-[#f5f2eb] relative overflow-hidden border-b border-white/[0.06]">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#dfb552]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Chính Sách Bán Hàng Đợt 1</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            TIẾN ĐỘ THANH TOÁN & <span className="bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] bg-clip-text text-transparent">ƯU ĐÃI ĐẶC QUYỀN</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Chính sách thanh toán linh hoạt giãn dài đến khi nhận nhà vào Quý 4/2028, kết hợp gói hỗ trợ tài chính toàn diện từ các ngân hàng đối tác chiến lược.
          </p>
        </div>

        {/* 3 Pillars of Payment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="p-8 rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] text-center hover:border-[#dfb552]/40 transition-all duration-300 shadow-xl backdrop-blur-xl">
            <div className="w-12 h-12 rounded-xl bg-[#dfb552]/10 border border-[#dfb552]/30 flex items-center justify-center mx-auto mb-4 text-[#dfb552]">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Giãn Tiến Độ Đến 2028</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Thanh toán chia nhỏ thành nhiều đợt nhẹ nhàng, tạo điều kiện tối đa cho dòng tiền của các nhà đầu tư và gia đình trẻ an cư.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] text-center hover:border-[#35a3ce]/40 transition-all duration-300 shadow-xl backdrop-blur-xl">
            <div className="w-12 h-12 rounded-xl bg-[#35a3ce]/10 border border-[#35a3ce]/30 flex items-center justify-center mx-auto mb-4 text-[#35a3ce]">
              <Percent className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Hỗ Trợ Lãi Suất 0%</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Hỗ trợ vay vốn lên tới 70% giá trị sản phẩm, ân hạn nợ gốc và miễn lãi suất trong thời gian xây dựng (dự kiến).
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] text-center hover:border-[#dd668c]/40 transition-all duration-300 shadow-xl backdrop-blur-xl">
            <div className="w-12 h-12 rounded-xl bg-[#dd668c]/10 border border-[#dd668c]/30 flex items-center justify-center mx-auto mb-4 text-[#dd668c]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Chiết Khấu Đợt 1 Cực Khủng</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Ưu tiên chọn căn góc, căn mặt tiền đẹp nhất phân khu Central District cùng quà tặng mở bán độc quyền từ Kim Oanh Group.
            </p>
          </div>
        </div>

        {/* CTA Bar - Champagne Gold Gradient */}
        <div className="rounded-3xl bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] p-8 sm:p-10 text-[#06080e] shadow-[0_15px_40px_rgba(223,181,82,0.3)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 uppercase font-sans">
              Đăng Ký Nhận Bảng Giá Gốc Đợt 1
            </h3>
            <p className="text-slate-900/90 text-xs sm:text-sm font-medium">
              Chỉ 357 suất sản phẩm thấp tầng Central District đợt đầu. Nhận ngay thông tin chi tiết các lô đẹp qua Zalo trong 5 phút.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => scrollTo("form-dang-ky")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#06080e] hover:bg-[#121929] text-[#dfb552] font-extrabold text-xs uppercase tracking-wider shadow-xl transition-all hover:scale-105"
            >
              Nhận Bảng Giá Chi Tiết
            </button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-black/10 hover:bg-black/20 text-[#06080e] font-extrabold text-xs uppercase tracking-wider text-center transition-all border border-black/15"
            >
              Hotline: {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
