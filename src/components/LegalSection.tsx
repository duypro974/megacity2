"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Shield, Award, CheckCircle2, X, ZoomIn } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";
import { IMG_LEGAL } from "@/lib/cloudinary";

/* ─────────────────────────────────────────
   Lightbox component
───────────────────────────────────────── */
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  // Keyboard + body scroll
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      {/* Nút đóng — fixed góc trên phải viewport */}
      <button
        type="button"
        onClick={onClose}
        className="fixed top-4 right-4 z-[10000] w-11 h-11 rounded-full bg-white/20
                   hover:bg-white/35 flex items-center justify-center text-white
                   transition-colors shadow-lg"
        aria-label="Đóng"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Ảnh căn giữa viewport */}
      <div
        className="flex items-center justify-center w-full h-full p-14"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[88vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
          style={{ touchAction: "pinch-zoom" }}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>,
    document.body
  );
}

/* ─────────────────────────────────────────
   Zoomable image
───────────────────────────────────────── */
function ZoomableImage({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`flex flex-col gap-2 ${className}`}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative overflow-hidden rounded-xl bg-slate-100 group cursor-zoom-in w-full aspect-[3/4]"
          aria-label={`Phóng to: ${alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2 shadow">
              <ZoomIn className="w-5 h-5 text-slate-700" />
            </div>
          </div>
        </button>
        {caption && (
          <p className="text-center text-xs text-slate-500 italic">{caption}</p>
        )}
      </div>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}

/* ─────────────────────────────────────────
   Main Section
───────────────────────────────────────── */
export default function LegalSection() {
  const sectionRef = useScrollFade();

  return (
    <section
      id="phap-ly"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* 1. Tiêu đề chính */}
        <div className="mb-4">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3">
            Pháp lý
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
            Pháp lý dự án Mega City 2 – Minh bạch, đã được UBND tỉnh chấp thuận phân lô bán nền
          </h2>
        </div>

        {/* 2. Đoạn mở đầu + Ảnh trang 1 (layout 2 cột desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
          {/* Đoạn mở */}
          <div>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Dự án Khu dân cư theo quy hoạch tại xã Long Tân và xã Phú Hội, nay thuộc xã Nhơn Trạch,
              tỉnh Đồng Nai
              (diện tích khoảng 83,94 ha) do Công ty TNHH Khu đô thị Phú Hội làm chủ đầu tư
              đã được Ủy ban nhân dân tỉnh Đồng Nai chấp thuận các vị trí thực hiện chuyển
              nhượng quyền sử dụng đất dưới hình thức phân lô, bán nền cho cá nhân tự xây
              dựng nhà ở theo quy hoạch chi tiết xây dựng tỷ lệ 1/500 đã được phê duyệt.
            </p>
          </div>

          {/* 3. Ảnh Quyết định trang 1 */}
          <ZoomableImage
            src={IMG_LEGAL["1"]}
            alt="Quyết định số 1772/QĐ-UBND ngày 30/5/2025 của UBND tỉnh Đồng Nai chấp thuận phân lô bán nền dự án Mega City 2 Nhơn Trạch"
            caption="Quyết định số 1772/QĐ-UBND ngày 30 tháng 5 năm 2025 của Ủy ban nhân dân tỉnh Đồng Nai"
          />
        </div>

        {/* 4. Các điểm chính */}
        <div className="bg-slate-50 rounded-2xl p-6 mb-10 border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-4 text-base">
            Các điểm chính của Quyết định
          </h3>
          <ul className="space-y-3">
            {[
              "Quyết định số 1772/QĐ-UBND ngày 30/5/2025 của UBND tỉnh Đồng Nai.",
              "Tổng số lô được phép chuyển nhượng: 2.421 lô.",
              "Các dãy được chấp thuận: T-1 đến T-29, TH-1 đến TH-28, V-1 đến V-4 (chi tiết theo danh sách đính kèm Quyết định).",
              "Thời hạn cá nhân nhận chuyển nhượng phải hoàn thành việc xây dựng nhà ở: đến hết ngày 31/12/2029.",
              "Chủ đầu tư phải xác định rõ thời gian xây dựng nhà ở trong Hợp đồng chuyển nhượng quyền sử dụng đất.",
              "Chỉ được phép chuyển nhượng sau khi hoàn thành nghĩa vụ tài chính liên quan đến đất đai và đáp ứng đầy đủ điều kiện theo Luật Nhà ở năm 2023, Luật Kinh doanh bất động sản năm 2023.",
              "Các vị trí lô đất ở còn lại thuộc dự án do Chủ đầu tư thực hiện xây nhà.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Subsection Sổ hồng */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-slate-800 mb-4">
            Tình trạng sổ hồng từng nền
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-green-50 border border-green-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                <h4 className="font-bold text-green-800 text-sm">
                  Sổ hồng riêng – Không ràng buộc xây dựng
                </h4>
              </div>
              <p className="text-sm text-green-700">
                Block TH và các lô T mặt đường 13–17 m: sổ hồng riêng từng nền,
                không bắt buộc tiến độ xây dựng. Có thể giao dịch và sang tên ngay.
              </p>
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <h4 className="font-bold text-amber-800 text-sm">
                  Sổ hồng riêng – Có điều kiện xây dựng
                </h4>
              </div>
              <p className="text-sm text-amber-700">
                Các lô T mặt đường 24–32 m: sổ hồng riêng kèm điều kiện phải
                hoàn thành xây dựng nhà ở trước ngày 31/12/2029.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Ảnh bảng danh sách lô (trang 2 + 3) */}
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ZoomableImage
              src={IMG_LEGAL["2"]}
              alt="Danh sách các lô được chấp thuận chuyển nhượng phân lô bán nền – trang 1"
            />
            <ZoomableImage
              src={IMG_LEGAL["3"]}
              alt="Danh sách các lô được chấp thuận chuyển nhượng phân lô bán nền – trang 2 – Tổng cộng 2.421 lô"
            />
          </div>
          <p className="text-center text-xs text-slate-500 italic mt-3">
            Danh sách chi tiết 2.421 lô được UBND tỉnh Đồng Nai chấp thuận thực hiện
            chuyển nhượng quyền sử dụng đất hình thức phân lô, bán nền
          </p>
        </div>

        {/* 7. Nút CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href="/Quyết định.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700
                       text-white font-bold px-6 py-3 rounded-full shadow-md shadow-primary-500/20
                       transition-all duration-200 hover:scale-105 text-sm"
          >
            Tải Quyết định gốc (PDF)
          </a>
          <a
            href="#legal-table"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("legal-table")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-600
                       text-primary-600 hover:bg-primary-50 font-bold px-6 py-3 rounded-full
                       transition-all duration-200 hover:scale-105 text-sm"
          >
            Xem danh sách chi tiết 2.421 lô
          </a>
        </div>

        {/* Link đến trang pháp lý chi tiết */}
        <div className="mt-4 text-center">
          <a
            href="/mega-city-2/phap-ly"
            className="inline-flex items-center gap-1.5 text-sm font-semibold
                       text-primary-600 hover:text-primary-700 hover:underline transition-colors"
          >
            Xem toàn bộ hồ sơ pháp lý Mega City 2 →
          </a>
        </div>

        {/* 8. Ghi chú nhỏ cuối section */}
        <p className="text-xs text-slate-400 border-t border-slate-100 pt-4 text-center">
          Thông tin được cập nhật theo Quyết định số 1772/QĐ-UBND ngày 30/5/2025 của UBND tỉnh
          Đồng Nai. Khách hàng vui lòng liên hệ để được hỗ trợ kiểm tra tình trạng pháp lý
          cụ thể từng lô.
        </p>
      </div>
    </section>
  );
}
