"use client";

import { FileText, Download, Eye, BookOpen } from "lucide-react";
import { IMG_ONE_ERA } from "@/lib/cloudinary";

interface Props {
  onOpenImage?: (src: string, alt: string) => void;
}

export default function OneEraLeafletDownload({ onOpenImage }: Props) {
  return (
    <section id="tai-lieu" className="py-20 lg:py-28 bg-[#06080e] text-[#f5f2eb] relative overflow-hidden border-b border-white/[0.06]">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#dfb552]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Tài Liệu Bán Hàng Chính Thức</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase font-sans">
            TẢI TRỌN BỘ <span className="bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] bg-clip-text text-transparent">LEAFLET & BROCHURE GỐC</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Xem trực tiếp bản vẽ quy hoạch phân lô vector độ phân giải cao hoặc tải về bộ tài liệu PDF chính thức phát hành bởi Chủ đầu tư.
          </p>
        </div>

        {/* 3 Material Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Leaflet Front */}
          <div className="p-8 rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] hover:border-[#dfb552]/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#dfb552]/10 border border-[#dfb552]/30 flex items-center justify-center mb-6 text-[#dfb552]">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#dfb552] block mb-1">
                Tài Liệu Phân Khu
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Leaflet Central District (Mặt Trước)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light mb-6">
                Bản vẽ quy hoạch tổng thể, tọa độ các tuyến đường nội bộ, ga Metro kết nối, hồ bơi resort và các đối tác quốc tế.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/[0.06]">
              {onOpenImage && (
                <button
                  onClick={() => onOpenImage(IMG_ONE_ERA.leaflets.front, "Leaflet Mặt Trước One Era")}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#06080e] hover:bg-[#121929] text-white font-semibold text-xs transition-all border border-white/[0.08]"
                >
                  <Eye className="w-4 h-4 text-[#dfb552]" />
                  <span>Xem Trực Tiếp Bản Nét Cao</span>
                </button>
              )}
              <a
                href={IMG_ONE_ERA.docs.leafletFront}
                target="_blank"
                rel="noopener noreferrer"
                download="leaflet-central-street-mat-truoc.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] font-extrabold text-xs uppercase tracking-wider transition-all shadow"
              >
                <Download className="w-4 h-4" />
                <span>Tải File PDF Gốc (3.3 MB)</span>
              </a>
            </div>
          </div>

          {/* Leaflet Back */}
          <div className="p-8 rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] hover:border-[#dfb552]/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#dfb552]/10 border border-[#dfb552]/30 flex items-center justify-center mb-6 text-[#dfb552]">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#dfb552] block mb-1">
                Sơ Đồ Phân Lô Chi Tiết
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Leaflet Sơ Đồ Phân Lô (Mặt Sau)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light mb-6">
                Bản vẽ vector siêu sắc nét từng mã căn nhà phố (TH9 - TH18) và shophouse (SH7 - SH17), kích thước mặt cắt đường 13m - 25m.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/[0.06]">
              {onOpenImage && (
                <button
                  onClick={() => onOpenImage(IMG_ONE_ERA.leaflets.back, "Sơ Đồ Phân Lô Chi Tiết Leaflet Mặt Sau One Era")}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#06080e] hover:bg-[#121929] text-white font-semibold text-xs transition-all border border-white/[0.08]"
                >
                  <Eye className="w-4 h-4 text-[#dfb552]" />
                  <span>Xem Sơ Đồ Phân Lô Nét Cao</span>
                </button>
              )}
              <a
                href={IMG_ONE_ERA.docs.leafletBack}
                target="_blank"
                rel="noopener noreferrer"
                download="leaflet-central-street-mat-sau.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] font-extrabold text-xs uppercase tracking-wider transition-all shadow"
              >
                <Download className="w-4 h-4" />
                <span>Tải File PDF Gốc (4.5 MB)</span>
              </a>
            </div>
          </div>

          {/* 28-Spread Official Brochure */}
          <div className="p-8 rounded-3xl bg-[#0c121e]/85 border border-white/[0.08] hover:border-[#dfb552]/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#35a3ce]/10 border border-[#35a3ce]/30 flex items-center justify-center mb-6 text-[#35a3ce]">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#35a3ce] block mb-1">
                Brochure Bán Hàng Cao Cấp
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Trọn Bộ Brochure Dự Án (28 Trang)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light mb-6">
                Tập tài liệu kinh doanh cao cấp dày 28 trang chứa đầy đủ ảnh phối cảnh 3D toàn dự án, concept Mizuhiki Nhật Bản, tiện ích và nội thất mẫu.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/[0.06]">
              <a
                href="#thu-vien-anh"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#dfb552] hover:bg-[#c99e39] text-[#06080e] font-extrabold text-xs uppercase tracking-wider transition-all shadow"
              >
                <Eye className="w-4 h-4" />
                <span>Lật Xem Trực Tuyến 28 Trang</span>
              </a>
              <a
                href="#form-dang-ky"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#06080e] hover:bg-[#121929] text-white font-semibold text-xs transition-all border border-white/[0.08]"
              >
                <Download className="w-4 h-4 text-[#35a3ce]" />
                <span>Đăng Ký Nhận Trọn Bộ Qua Zalo / Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
