"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2, Phone, User, Mail, Sparkles, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function OneEraLeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "Townhouse 5x16m",
    note: "Đăng ký nhận bảng giá & Brochure One Era Bình Dương",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setErrorMsg("Vui lòng điền họ tên và số điện thoại.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          interest: `ONE ERA: ${form.interest}`,
          note: form.note,
        }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({
        name: "",
        phone: "",
        email: "",
        interest: "Townhouse 5x16m",
        note: "Đăng ký nhận bảng giá & Brochure One Era Bình Dương",
      });
    } catch {
      setStatus("error");
      setErrorMsg(`Có lỗi xảy ra. Quý khách vui lòng gọi trực tiếp hotline: ${SITE_CONFIG.phoneDisplay}`);
    }
  };

  return (
    <section id="form-dang-ky" className="py-20 lg:py-28 bg-[#06080e] text-[#f5f2eb] relative overflow-hidden border-t border-white/[0.06]">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#dfb552]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#0c121e]/90 border border-white/[0.12] shadow-2xl p-6 sm:p-12 relative overflow-hidden backdrop-blur-xl">
          {/* Top champagne highlight line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#dfb552] to-transparent" />

          {status === "success" ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 flex items-center justify-center mx-auto mb-6 text-[#dfb552]">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 uppercase font-sans">
                Đăng Ký Thành Công!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-8 leading-relaxed font-light">
                Cảm ơn Quý khách đã quan tâm siêu dự án <strong>ONE ERA Bình Dương</strong>. Bộ phận kinh doanh VIP sẽ liên hệ và gửi trọn bộ tài liệu kèm bảng giá đợt 1 qua Zalo trong vòng <strong>5 – 15 phút</strong>.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#dfb552] to-[#c99e39] text-[#06080e] font-extrabold text-xs uppercase tracking-wider transition-all"
              >
                Gửi Yêu Cầu Khác
              </button>
            </div>
          ) : (
            <div>
              {/* Form Title */}
              <div className="text-center max-w-2xl mx-auto mb-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb552]/10 border border-[#dfb552]/30 text-[#dfb552] text-[11px] font-mono uppercase tracking-[0.25em] mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ưu Tiên Chọn Căn Đẹp Đợt 1</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 uppercase font-sans">
                  ĐĂNG KÝ NHẬN BẢNG GIÁ & BROCHURE GỐC
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light">
                  Nhận ngay trọn bộ Leaflet mặt trước, mặt sau và Brochure 30 trang chính thức từ Chủ đầu tư
                </p>
              </div>

              {errorMsg && (
                <div className="p-4 mb-6 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm text-center">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5 uppercase">
                      Họ và tên <span className="text-[#dfb552]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Nguyễn Văn A"
                        required
                        className="w-full bg-[#06080e] border border-white/[0.1] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#dfb552] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5 uppercase">
                      Số điện thoại / Zalo <span className="text-[#dfb552]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="09xx xxx xxx"
                        required
                        className="w-full bg-[#06080e] border border-white/[0.1] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#dfb552] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5 uppercase">
                      Địa chỉ Email (để nhận file PDF gốc)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="w-full bg-[#06080e] border border-white/[0.1] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#dfb552] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Product Interest */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5 uppercase">
                      Sản phẩm quan tâm
                    </label>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className="w-full bg-[#06080e] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#dfb552] transition-colors"
                    >
                      <option value="Townhouse 5x16m">Townhouse 5x16m (3 tầng)</option>
                      <option value="Townhouse 6x18m">Townhouse 6x18m (4 tầng ven suối)</option>
                      <option value="Shophouse 5x18m">Shophouse 5x18m (4 tầng gần trường)</option>
                      <option value="Shophouse 6x18m">Shophouse 6x18m (4 tầng view công viên)</option>
                      <option value="Shophouse 6x23m Góc VIP">Shophouse 6x23m (Góc 2 mặt tiền)</option>
                      <option value="Căn Hộ & Biệt Thự Giai Đoạn Sau">Căn hộ cao cấp / Biệt thự giai đoạn sau</option>
                    </select>
                  </div>
                </div>

                {/* Note */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5 uppercase">
                    Ghi chú / Yêu cầu thêm
                  </label>
                  <textarea
                    name="note"
                    rows={3}
                    value={form.note}
                    onChange={handleChange}
                    placeholder="Quý khách có nhu cầu xem thực tế dự án, nhận bảng tính ngân hàng..."
                    className="w-full bg-[#06080e] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#dfb552] transition-colors"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#dfb552] via-[#fbf7ee] to-[#dfb552] text-[#06080e] font-extrabold text-sm uppercase tracking-wider shadow-[0_10px_35px_rgba(223,181,82,0.35)] hover:shadow-[0_15px_45px_rgba(223,181,82,0.55)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Đang gửi thông tin...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>GỬI YÊU CẦU NHẬN BẢNG GIÁ & BROCHURE</span>
                    </>
                  )}
                </button>

                {/* Guarantee */}
                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2 font-light">
                  <ShieldCheck className="w-4 h-4 text-[#58aeb4]" />
                  <span>Cam kết bảo mật thông tin tuyệt đối. Tư vấn trung thực, tận tâm từ chuyên viên CĐT.</span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
