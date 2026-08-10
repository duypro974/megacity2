"use client";

import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import { useScrollFade } from "@/hooks/useScrollFade";

/* ─────────────────────────────────────────
   Data – phương thức thanh toán nhanh 95%
───────────────────────────────────────── */

const METHOD = {
  title: "Thanh toán nhanh 95%",
  tag: "Tối ưu chi phí",
  tagColor: "from-primary-500 to-emerald-500",
  desc: "Nhận ưu đãi theo chính sách từng thời kỳ",
  steps: [
    { no: "①", label: "Đặt cọc",     value: "50 triệu đồng/nền", note: "" },
    { no: "②", label: "Ký hợp đồng", value: "95%",               note: "Thanh toán 95% giá trị hợp đồng theo thỏa thuận" },
    { no: "③", label: "Nhận sổ",     value: "5%",                note: "Thanh toán phần còn lại khi nhận Giấy chứng nhận" },
  ],
};

/* ─────────────────────────────────────────
   Step row
───────────────────────────────────────── */
function StepRow({
  no, label, value, note, isLast, accent,
}: {
  no: string; label: string; value: string; note: string;
  isLast: boolean; accent: string;
}) {
  return (
    <div className="flex items-start gap-3">
      {/* Timeline */}
      <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
        <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${accent}
                         flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
          {no}
        </div>
        {!isLast && <div className="w-px bg-slate-200 flex-1 my-1 min-h-[18px]" />}
      </div>

      {/* Content */}
      <div className={`flex-1 min-w-0 ${isLast ? "" : "pb-4"}`}>
        <div className="flex items-baseline justify-between gap-3 flex-wrap">
          <span className="text-sm font-semibold text-slate-700">{label}</span>
          <span className={`text-base font-black bg-gradient-to-r ${accent}
                            bg-clip-text text-transparent tabular-nums flex-shrink-0`}>
            {value}
          </span>
        </div>
        {note && <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{note}</p>}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main
───────────────────────────────────────── */
export default function PaymentSection() {
  const sectionRef = useScrollFade();

  return (
    <section
      id="thanh-toan"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase
                           text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-3">
            Thanh toán
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
            Phương thức thanh toán
          </h2>
          <p className="mt-2 text-slate-500 text-sm md:text-base">
            Áp dụng cho sản phẩm đất nền trực tiếp từ chủ đầu tư Kim Oanh Group
          </p>
        </div>

        {/* 1 method card — căn giữa */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-lg rounded-2xl bg-white border border-slate-200 overflow-hidden
                           shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className={`h-1 bg-gradient-to-r ${METHOD.tagColor}`} />
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="font-black text-slate-800 text-lg leading-snug">{METHOD.title}</h3>
                <span className={`flex-shrink-0 text-[10px] font-bold uppercase tracking-widest
                                  bg-gradient-to-r ${METHOD.tagColor} text-white
                                  px-2.5 py-0.5 rounded-full shadow-sm mt-0.5`}>
                  {METHOD.tag}
                </span>
              </div>
              <p className="text-slate-500 text-sm mb-6">{METHOD.desc}</p>
              <div>
                {METHOD.steps.map((s, i) => (
                  <StepRow
                    key={i}
                    no={s.no}
                    label={s.label}
                    value={s.value}
                    note={s.note}
                    isLast={i === METHOD.steps.length - 1}
                    accent={METHOD.tagColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hỗ trợ ngân hàng – không cam kết con số */}
        <div className="rounded-2xl bg-white border border-slate-200 p-5 mb-8 shadow-sm">
          <p className="font-bold text-slate-700 text-sm mb-1">Hỗ trợ tài chính ngân hàng</p>
          <p className="text-slate-500 text-sm leading-relaxed">
            Khách hàng có nhu cầu vay ngân hàng có thể được tư vấn phương án tài chính
            phù hợp theo chính sách của ngân hàng và từng thời điểm. Vui lòng liên hệ
            chuyên viên để được hỗ trợ cụ thể.
          </p>
        </div>

        {/* Lưu ý */}
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 mb-8">
          <p className="text-xs text-amber-700 leading-relaxed">
            <span className="font-bold">Lưu ý:</span> Chính sách thanh toán và ưu đãi có thể thay đổi theo
            từng đợt mở bán và thời điểm giao dịch. Thông tin trên mang tính tham khảo dựa trên
            chính sách đã được công bố. Vui lòng liên hệ trực tiếp để xác nhận chính sách
            áp dụng tại thời điểm giao dịch.
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800
                        p-5 flex flex-col sm:flex-row items-start sm:items-center
                        justify-between gap-4 shadow-xl">
          <div>
            <p className="text-white font-bold text-sm">
              Nhận tư vấn phương thức thanh toán phù hợp
            </p>
            <p className="text-slate-400 text-xs mt-0.5">
              Chuyên viên phản hồi trong 30 phút · Miễn phí tư vấn
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="tel:0937587438"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400
                         text-white font-bold px-4 py-2.5 rounded-xl text-sm
                         transition-all hover:scale-105 shadow-lg shadow-primary-500/30"
            >
              <Phone className="w-4 h-4" />
              0937.587.438
            </a>
            <a
              href="#lien-he"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20
                         text-white font-bold px-4 py-2.5 rounded-xl text-sm
                         transition-all border border-white/20"
            >
              <MessageCircle className="w-4 h-4" />
              Đăng ký tư vấn
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
