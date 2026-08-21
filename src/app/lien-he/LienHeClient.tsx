"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Phone, Mail, MapPin, Clock, ArrowRight,
  CheckCircle, Facebook, MessageCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { PROJECTS } from "@/data/projects";

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────
const SCOPE_SLUGS = ["mega-city-2", "k-home-cityview", "k-home-avenue", "k-home-midtown"];
const CONTACT_PROJECTS = PROJECTS.filter((p) => SCOPE_SLUGS.includes(p.slug))
  .sort((a, b) => SCOPE_SLUGS.indexOf(a.slug) - SCOPE_SLUGS.indexOf(b.slug));

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Hotline",
    value: SITE_CONFIG.phoneDisplay,
    sub: "Hỗ trợ 7 ngày/tuần",
    href: `tel:${SITE_CONFIG.phone}`,
    color: "bg-amber-500",
    light: "bg-amber-50 border-amber-100",
    textColor: "text-amber-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    sub: "Phản hồi trong 24 giờ",
    href: `mailto:${SITE_CONFIG.email}`,
    color: "bg-blue-500",
    light: "bg-blue-50 border-blue-100",
    textColor: "text-blue-600",
  },
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: SITE_CONFIG.address.full,
    sub: "Văn phòng chính",
    href: "https://maps.google.com/?q=268A+Phan+Trung,+Tam+Hiep,+Bien+Hoa,+Dong+Nai",
    color: "bg-emerald-500",
    light: "bg-emerald-50 border-emerald-100",
    textColor: "text-emerald-600",
  },
  {
    icon: Clock,
    label: "Giờ làm việc",
    value: SITE_CONFIG.workingHours,
    sub: "Kể cả ngày lễ",
    href: undefined,
    color: "bg-purple-500",
    light: "bg-purple-50 border-purple-100",
    textColor: "text-purple-600",
  },
];

// ─────────────────────────────────────────────────────────────
// Form
// ─────────────────────────────────────────────────────────────
type FormState = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Vui lòng nhập họ và tên";
  if (!form.phone.trim()) {
    errors.phone = "Vui lòng nhập số điện thoại";
  } else if (!/^(0|\+84)[0-9]{8,10}$/.test(form.phone.replace(/\s/g, ""))) {
    errors.phone = "Số điện thoại không hợp lệ";
  }
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Email không hợp lệ";
  }
  return errors;
}

// ─────────────────────────────────────────────────────────────
// Main Client Component
// ─────────────────────────────────────────────────────────────
export default function LienHeClient() {
  const formRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", email: "", interest: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || undefined,
          interest: form.interest || "general",
          note: form.message || undefined,
          source: "lien-he-page",
        }),
      });
      if (!res.ok) throw new Error("API error");
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: "linear-gradient(135deg, #2a1e0a 0%, #3d2c0e 30%, #2a2010 60%, #1a1830 100%)" }}>
        {/* Warm amber glow — góc trên phải, mạnh hơn */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(251,146,60,0.35) 0%, rgba(245,158,11,0.20) 35%, transparent 65%)" }}
        />
        {/* Ambient glow trung tâm */}
        <div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 60%)" }}
        />
        {/* Góc trái trên — sáng nhẹ */}
        <div
          className="absolute top-0 left-0 w-[400px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top left, rgba(251,191,36,0.10) 0%, transparent 60%)" }}
        />
        {/* Grid texture nhẹ */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,1) 60px,rgba(255,255,255,1) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,1) 60px,rgba(255,255,255,1) 61px)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-white/70 font-medium">Liên hệ</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-amber-400/70" />
            <p className="text-amber-400 text-[11px] font-bold tracking-[0.2em] uppercase">
              Kim Oanh Đồng Nai · Hỗ trợ 24/7
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5">
            Liên hệ <span className="text-amber-400">tư vấn</span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed mb-10">
            Kết nối với chúng tôi để được tư vấn thông tin dự án và sản phẩm phù hợp với nhu cầu của bạn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400
                         text-white px-8 py-4 rounded-full text-sm font-bold
                         shadow-lg shadow-amber-500/30 transition-all hover:-translate-y-0.5 group"
            >
              Đăng ký tư vấn
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20
                         text-white/85 hover:bg-white/10 hover:border-white/40
                         px-8 py-4 rounded-full text-sm font-semibold transition-all"
            >
              <Phone className="w-4 h-4" /> {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS ────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACT_CARDS.map((card) => {
            const Icon = card.icon;
            const inner = (
              <div
                className={`rounded-2xl border p-5 bg-white shadow-sm hover:shadow-md
                             transition-all duration-200 group h-full ${card.href ? "cursor-pointer" : ""}`}
              >
                <div className={`w-10 h-10 rounded-xl ${card.light} border flex items-center justify-center mb-4`}>
                  <Icon className={`w-4.5 h-4.5 ${card.textColor}`} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  {card.label}
                </p>
                <p className={`text-sm font-bold text-slate-800 leading-snug mb-1 ${card.href ? `group-hover:${card.textColor} transition-colors` : ""}`}>
                  {card.value}
                </p>
                <p className="text-xs text-slate-400">{card.sub}</p>
              </div>
            );
            return card.href ? (
              <a key={card.label} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <div key={card.label}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/* ── FORM + INFO ──────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" ref={formRef}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left: info panel */}
          <div className="lg:col-span-2">
            <p className="text-amber-500 text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
              Chúng tôi hỗ trợ
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Đội ngũ tư vấn<br />
              <span className="text-amber-500">luôn sẵn sàng</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Để lại thông tin bên dưới, chuyên viên tư vấn sẽ liên hệ trong thời gian sớm nhất để hỗ trợ bạn tìm hiểu dự án phù hợp.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-10">
              {[
                "Tư vấn thông tin dự án miễn phí",
                "Cập nhật bảng giá mới nhất",
                "Hỗ trợ thủ tục & pháp lý",
                "Đặt lịch tham quan thực tế",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="border-t border-slate-100 pt-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Kênh hỗ trợ khác
              </p>
              <div className="flex gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400
                             text-white px-5 py-2.5 rounded-full text-xs font-bold
                             shadow-sm shadow-amber-500/20 transition-all hover:scale-105"
                >
                  <Phone className="w-3.5 h-3.5" /> Gọi ngay
                </a>
                <a
                  href={SITE_CONFIG.social.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0068FF] hover:bg-[#005ce0]
                             text-white px-5 py-2.5 rounded-full text-xs font-bold
                             shadow-sm shadow-blue-500/20 transition-all hover:scale-105"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Zalo
                </a>

              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="rounded-[24px] bg-white border border-slate-200 shadow-sm p-8">
              {submitted ? (
                /* Success state */
                <div className="text-center py-14">
                  <div className="w-20 h-20 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-9 h-9 text-amber-500" />
                  </div>
                  <h3 className="font-black text-slate-900 text-2xl mb-3">Đã gửi thành công!</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                    Cảm ơn bạn đã liên hệ. Chuyên viên tư vấn sẽ gọi lại cho bạn trong vòng 30 phút.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 border border-slate-200 text-slate-600
                               hover:border-amber-400 hover:text-amber-600 px-6 py-2.5 rounded-full
                               text-sm font-semibold transition-all"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <h3 className="font-black text-slate-900 text-xl mb-1">Đăng ký tư vấn</h3>
                    <p className="text-slate-400 text-sm">
                      Điền thông tin bên dưới, chúng tôi sẽ liên hệ sớm nhất.
                    </p>
                  </div>

                  {submitError && (
                    <div className="mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                      Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline{" "}
                      <a href={`tel:${SITE_CONFIG.phone}`} className="font-bold underline">
                        {SITE_CONFIG.phoneDisplay}
                      </a>.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Row 1: Tên + SĐT */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                          Họ và tên <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={handleChange("name")}
                          placeholder="Nguyễn Văn A"
                          className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800
                                      placeholder:text-slate-400 bg-slate-50 transition
                                      focus:outline-none focus:ring-2 focus:bg-white
                                      ${errors.name
                                        ? "border-red-300 focus:ring-red-400/40 focus:border-red-400"
                                        : "border-slate-200 focus:ring-amber-400/50 focus:border-amber-400"
                                      }`}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                          Số điện thoại <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={handleChange("phone")}
                          placeholder="0901 234 567"
                          className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800
                                      placeholder:text-slate-400 bg-slate-50 transition
                                      focus:outline-none focus:ring-2 focus:bg-white
                                      ${errors.phone
                                        ? "border-red-300 focus:ring-red-400/40 focus:border-red-400"
                                        : "border-slate-200 focus:ring-amber-400/50 focus:border-amber-400"
                                      }`}
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                        Email <span className="text-slate-300 font-normal normal-case tracking-normal">(tùy chọn)</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={handleChange("email")}
                        placeholder="example@email.com"
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800
                                    placeholder:text-slate-400 bg-slate-50 transition
                                    focus:outline-none focus:ring-2 focus:bg-white
                                    ${errors.email
                                      ? "border-red-300 focus:ring-red-400/40 focus:border-red-400"
                                      : "border-slate-200 focus:ring-amber-400/50 focus:border-amber-400"
                                    }`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    {/* Dự án */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                        Dự án quan tâm
                      </label>
                      <select
                        value={form.interest}
                        onChange={handleChange("interest")}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3
                                   text-sm text-slate-800 focus:outline-none focus:ring-2
                                   focus:ring-amber-400/50 focus:border-amber-400 focus:bg-white transition"
                      >
                        <option value="">-- Chọn dự án --</option>
                        {CONTACT_PROJECTS.map((p) => (
                          <option key={p.slug} value={p.slug}>
                            {p.name} – {p.location}
                          </option>
                        ))}
                        <option value="general">Tìm hiểu chung</option>
                      </select>
                    </div>

                    {/* Nội dung */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                        Nội dung tư vấn
                      </label>
                      <textarea
                        value={form.message}
                        onChange={handleChange("message")}
                        placeholder="Tôi muốn tìm hiểu thêm về bảng giá, tiến độ, pháp lý..."
                        rows={4}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3
                                   text-sm text-slate-800 placeholder:text-slate-400
                                   focus:outline-none focus:ring-2 focus:ring-amber-400/50
                                   focus:border-amber-400 focus:bg-white transition resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60
                                 text-white font-bold py-4 rounded-xl text-sm transition-all
                                 shadow-md shadow-amber-500/20 hover:shadow-amber-500/30
                                 hover:-translate-y-0.5 active:translate-y-0
                                 flex items-center justify-center gap-2 group"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Đang gửi...
                        </>
                      ) : (
                        <>
                          ĐĂNG KÝ TƯ VẤN
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                      Thông tin của bạn được bảo mật và chỉ dùng để liên hệ tư vấn.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ──────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
          <div>
            <h2 className="font-black text-slate-900 text-lg">Vị trí văn phòng</h2>
            <p className="text-sm text-slate-500">{SITE_CONFIG.address.full}</p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ height: 400 }}>
          <iframe
            title="Bản đồ Kim Oanh Đồng Nai"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0205578999307!2d106.85086587536203!3d10.961819489198428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dde43a851edd%3A0x4595de172283eab6!2zS2ltIE9hbmggR3JvdXAgLSBDaGkgTmjDoW5oIMSQ4buTbmcgTmFp!5e0!3m2!1svi!2sus!4v1787303475059!5m2!1svi!2sus"
          />
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg,#080f1e 0%,#0f172a 50%,#141a2e 100%)" }}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,1) 60px,rgba(255,255,255,1) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,1) 60px,rgba(255,255,255,1) 61px)",
          }}
        />
        {/* Glow */}
        <div
          className="absolute -top-32 right-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(245,158,11,0.08) 0%,transparent 70%)" }}
        />

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-amber-400/60" />
            <p className="text-amber-400 text-[11px] font-bold tracking-[0.2em] uppercase">
              Kim Oanh Đồng Nai
            </p>
            <span className="w-8 h-px bg-amber-400/60" />
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-4">
            Bạn đang quan tâm<br />
            <span className="text-amber-400">một dự án?</span>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-md mx-auto">
            Liên hệ với chúng tôi để được tư vấn chi tiết về dự án, bảng giá và các chính sách ưu đãi hiện hành.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400
                         text-white px-8 py-4 rounded-full text-sm font-bold
                         shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5 group w-full sm:w-auto justify-center"
            >
              Nhận tư vấn
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20
                         text-white/85 hover:bg-white/10 hover:border-white/40
                         px-8 py-4 rounded-full text-sm font-semibold transition-all w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" /> {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
