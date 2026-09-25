"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Send, CheckCircle, Loader2, Phone, User, MessageSquare, Sparkles, Mail } from "lucide-react";
import { PROJECTS } from "@/data/projects";

/* ─────────────────────────────────────────
   Mini form dùng trong popup
───────────────────────────────────────── */
const POPUP_SCOPE = ["mega-city-2", "the-link-city", "k-home-cityview", "k-home-avenue", "k-home-midtown"];
const POPUP_PROJECTS = PROJECTS.filter((p) => POPUP_SCOPE.includes(p.slug))
  .sort((a, b) => POPUP_SCOPE.indexOf(a.slug) - POPUP_SCOPE.indexOf(b.slug));

type FormData = { name: string; phone: string; email: string; project: string; interest: string; note: string };

function PopupForm({ onClose }: { onClose: () => void }) {
  const [form, setForm]     = useState<FormData>({ name: "", phone: "", email: "", project: "", interest: "dau-tu", note: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setErrorMsg("Vui lòng nhập họ tên và số điện thoại");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Có lỗi xảy ra. Vui lòng gọi hotline 0937.587.438");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Đăng ký thành công!</h3>
        <p className="text-slate-500 text-sm mb-5 leading-relaxed">
          Tư vấn viên sẽ liên hệ trong <strong className="text-green-600">5–15 phút</strong>.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="text-sm font-semibold text-slate-500 hover:text-slate-700 transition-colors"
        >
          Đóng
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#16B364] to-emerald-500 px-4 py-4 pr-12 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div className="min-w-0">
          <h3 className="text-white font-bold text-base leading-tight truncate">
            Nhận bảng giá &amp; mặt bằng
          </h3>
          <p className="text-white/75 text-xs mt-0.5">Tư vấn miễn phí · Phản hồi 5–15 phút</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3.5">
        {/* Họ tên */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="Nguyễn Văn A"
              className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 rounded-xl
                         bg-slate-50 focus:bg-white focus:ring-2 focus:ring-green-400
                         focus:border-transparent outline-none transition"
              required
            />
          </div>
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="tel" name="phone" value={form.phone} onChange={handleChange}
              placeholder="09xx xxx xxx"
              className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 rounded-xl
                         bg-slate-50 focus:bg-white focus:ring-2 focus:ring-green-400
                         focus:border-transparent outline-none transition"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
            Email <span className="text-slate-400 font-normal normal-case">(tuỳ chọn)</span>
          </label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="email@example.com"
            className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl
                       bg-slate-50 focus:bg-white focus:ring-2 focus:ring-green-400
                       focus:border-transparent outline-none transition"
          />
        </div>

        {/* Nhu cầu */}
        <div>
          <label htmlFor="popup-project" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
            Dự án quan tâm
          </label>
          <div className="relative">
            <select
              id="popup-project"
              name="project" value={form.project} onChange={handleChange}
              className="w-full appearance-none pl-4 pr-10 py-3 text-sm border border-slate-200 rounded-xl
                         bg-slate-50 focus:bg-white focus:ring-2 focus:ring-green-400
                         focus:border-transparent outline-none transition cursor-pointer"
            >
              <option value="">— Chọn dự án —</option>
              {POPUP_PROJECTS.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} – {p.location}
                </option>
              ))}
              <option value="general">Tìm hiểu chung</option>
            </select>
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>

        {/* Nhu cầu */}
        <div>
          <label htmlFor="popup-interest" className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
            Nhu cầu của bạn
          </label>
          <div className="relative">
            <select
              id="popup-interest"
              name="interest" value={form.interest} onChange={handleChange}
              className="w-full appearance-none pl-4 pr-10 py-3 text-sm border border-slate-200 rounded-xl
                         bg-slate-50 focus:bg-white focus:ring-2 focus:ring-green-400
                         focus:border-transparent outline-none transition cursor-pointer"
            >
              <option value="dau-tu">Đầu tư sinh lời</option>
              <option value="mua-o">Mua để ở</option>
              <option value="xem-mat-bang">Xem mặt bằng thực tế</option>
              <option value="nha-xay-san">Quan tâm nhà xây sẵn</option>
              <option value="khac">Khác</option>
            </select>
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>

        {/* Ghi chú */}
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wide">
            Ghi chú <span className="text-slate-400 font-normal normal-case">(tuỳ chọn)</span>
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <textarea
              name="note" value={form.note} onChange={handleChange} rows={2}
              placeholder="Ngân sách, lô quan tâm, thời gian có thể gặp..."
              className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 rounded-xl
                         bg-slate-50 focus:bg-white focus:ring-2 focus:ring-green-400
                         focus:border-transparent outline-none transition resize-none"
            />
          </div>
        </div>

        {status === "error" && (
          <p className="text-red-500 text-sm text-center bg-red-50 rounded-xl py-2.5 px-3">{errorMsg}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[#16B364] hover:bg-emerald-600 text-white py-3.5 rounded-xl
                     font-bold text-sm shadow-lg shadow-green-500/25
                     transition-all duration-200 hover:scale-[1.01]
                     flex items-center justify-center gap-2 disabled:opacity-60 disabled:scale-100"
        >
          {status === "loading"
            ? <><Loader2 className="w-4 h-4 animate-spin flex-shrink-0" /> Đang gửi...</>
            : <><Send className="w-4 h-4 flex-shrink-0" /> Gửi thông tin – Nhận tư vấn</>}
        </button>

        <p className="text-center text-xs text-slate-400">
          🔒 Thông tin bảo mật tuyệt đối · Không spam · Phản hồi trong 5–15 phút
        </p>
      </form>
    </>
  );
}

/* ─────────────────────────────────────────
   Main — Popup + Floating button
───────────────────────────────────────── */
export default function LeadPopup() {
  const [showPopup,  setShowPopup]  = useState(false);
  const [dismissed,  setDismissed]  = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  // Hiện popup sau 5 giây, 1 lần duy nhất
  useEffect(() => {
    const already = sessionStorage.getItem("lead-popup-shown");
    if (already) {
      setShowWidget(true);
      return;
    }
    const t = setTimeout(() => {
      setShowPopup(true);
      setShowWidget(true);
      sessionStorage.setItem("lead-popup-shown", "1");
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  const closePopup = useCallback(() => {
    setShowPopup(false);
    setDismissed(true);
  }, []);

  // Đóng khi bấm Escape
  useEffect(() => {
    if (!showPopup) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closePopup(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showPopup, closePopup]);

  return (
    <>
      {/* ── Popup modal ── */}
      {showPopup && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
          onClick={closePopup}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden
                       animate-fade-in-up"
            style={{ animationDuration: "350ms" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closePopup}
              aria-label="Đóng"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/25 hover:bg-white/40
                         flex items-center justify-center text-white hover:text-white
                         transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="max-h-[90vh] overflow-y-auto">
              <PopupForm onClose={closePopup} />
            </div>
          </div>
        </div>
      )}

      {/* ── Floating widget — góc dưới trái ── */}
      {showWidget && !showPopup && (
        <button
          type="button"
          onClick={() => setShowPopup(true)}
          aria-label="Đăng ký tư vấn"
          className="fixed bottom-20 left-4 z-50 flex items-center gap-0
                     group transition-all duration-300 hover:gap-2.5 lg:bottom-6"
        >
          {/* Icon hộp thư */}
          <div className="w-12 h-12 rounded-full bg-amber-500 shadow-lg shadow-amber-500/30
                          flex items-center justify-center flex-shrink-0 z-10">
            <Mail className="w-5 h-5 text-white" />
          </div>
          {/* Label — ẩn mặc định, hover trượt ra */}
          <div className="bg-slate-900/90 backdrop-blur-sm text-white text-sm font-bold
                          px-3.5 py-2 rounded-xl shadow-lg whitespace-nowrap
                          max-w-0 overflow-hidden opacity-0
                          group-hover:max-w-[160px] group-hover:opacity-100
                          transition-all duration-300 ease-out -ml-3 pl-6">
            Đăng ký tư vấn
          </div>
        </button>
      )}
    </>
  );
}
