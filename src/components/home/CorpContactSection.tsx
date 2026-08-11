"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/data/siteConfig";
import { PROJECTS } from "@/data/projects";

// ─────────────────────────────────────────────────────────────
// CorpContactSection — Form liên hệ tư vấn
// Spec: Họ tên / SĐT / Dự án quan tâm / Nội dung / Gửi yêu cầu
// ─────────────────────────────────────────────────────────────

// Scope: dự án được hỗ trợ bởi website
const SCOPE_SLUGS = ["mega-city-2", "k-home-cityview", "k-home-avenue", "k-home-midtown"];
const CONTACT_PROJECTS = PROJECTS.filter((p) => SCOPE_SLUGS.includes(p.slug))
  .sort((a, b) => SCOPE_SLUGS.indexOf(a.slug) - SCOPE_SLUGS.indexOf(b.slug));

const CONTACT_ITEMS = [
  {
    icon: <MapPin className="w-4 h-4 text-amber-500" />,
    label: "Địa chỉ",
    value: SITE_CONFIG.address.full,
    href: undefined,
  },
  {
    icon: <Phone className="w-4 h-4 text-amber-500" />,
    label: "Hotline",
    value: SITE_CONFIG.phoneDisplay,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon: <Mail className="w-4 h-4 text-amber-500" />,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: <Clock className="w-4 h-4 text-amber-500" />,
    label: "Giờ làm việc",
    value: SITE_CONFIG.workingHours,
    href: undefined,
  },
];

export default function CorpContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setLoading(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "homepage-contact" }),
      });
      setSubmitted(true);
    } catch {
      // silent fail — UX vẫn hiển thị success
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lien-he" className="py-28 bg-slate-50" data-reveal>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: info ── */}
          <div>
            <SectionHeading
              eyebrow="LIÊN HỆ"
              title={
                <>
                  Kết nối
                  <br />
                  <span className="text-amber-500">tư vấn ngay</span>
                </>
              }
              subtitle="Để lại thông tin, đội ngũ tư vấn sẽ hỗ trợ bạn tìm hiểu thông tin phù hợp."
            />

            {/* Contact items */}
            <ul className="space-y-4 mb-10">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-amber-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-slate-800 hover:text-amber-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-600">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Quick actions */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400
                           text-white px-6 py-3 rounded-full text-sm font-bold
                           shadow-md shadow-amber-500/20 transition-all hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5" /> Gọi ngay
              </a>
              <a
                href={SITE_CONFIG.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0068FF] hover:bg-[#005ce0]
                           text-white px-6 py-3 rounded-full text-sm font-bold
                           shadow-md shadow-blue-500/20 transition-all hover:scale-105"
              >
                Nhắn Zalo
              </a>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="rounded-[24px] bg-white border border-slate-200 p-8 shadow-sm shadow-slate-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-black text-slate-900 text-xl mb-2">Đã nhận yêu cầu!</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Chuyên viên tư vấn sẽ liên hệ với bạn trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-black text-slate-900 text-xl mb-1.5">Gửi yêu cầu tư vấn</h3>
                <p className="text-slate-400 text-sm mb-7">
                  Điền thông tin bên dưới, chúng tôi sẽ liên hệ sớm nhất.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Họ và tên */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                      Họ và tên <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3
                                 text-sm text-slate-800 placeholder:text-slate-400
                                 focus:outline-none focus:ring-2 focus:ring-amber-400/60
                                 focus:border-amber-400 focus:bg-white transition"
                    />
                  </div>

                  {/* Số điện thoại */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                      Số điện thoại <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="0901 234 567"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3
                                 text-sm text-slate-800 placeholder:text-slate-400
                                 focus:outline-none focus:ring-2 focus:ring-amber-400/60
                                 focus:border-amber-400 focus:bg-white transition"
                    />
                  </div>

                  {/* Dự án quan tâm */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-wider">
                      Dự án quan tâm
                    </label>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3
                                 text-sm text-slate-800 focus:outline-none focus:ring-2
                                 focus:ring-amber-400/60 focus:border-amber-400 focus:bg-white transition"
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
                      Nội dung
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tôi muốn tìm hiểu thêm về..."
                      rows={3}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3
                                 text-sm text-slate-800 placeholder:text-slate-400
                                 focus:outline-none focus:ring-2 focus:ring-amber-400/60
                                 focus:border-amber-400 focus:bg-white transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60
                               text-white font-bold py-4 rounded-xl text-sm transition-all
                               shadow-md shadow-amber-500/20 hover:shadow-amber-500/30
                               hover:-translate-y-0.5 active:translate-y-0
                               flex items-center justify-center gap-2 group"
                  >
                    {loading ? "Đang gửi..." : (
                      <>
                        GỬI YÊU CẦU
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
      </Container>
    </section>
  );
}
