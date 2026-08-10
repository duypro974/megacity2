"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { useState } from "react";

export default function CorpContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", interest: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setLoading(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "corp-homepage" }),
      });
      setSubmitted(true);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lien-he" className="py-24 bg-white" data-reveal>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <SectionHeading
              eyebrow="Liên hệ"
              title={
                <>
                  Kết nối với
                  <br />
                  <span className="text-amber-500">Kim Oanh Group</span>
                </>
              }
              subtitle="Đội ngũ tư vấn của chúng tôi sẵn sàng hỗ trợ bạn tìm hiểu các dự án và cơ hội đầu tư phù hợp."
            />

            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Địa chỉ</p>
                  <p className="text-sm text-slate-700">268A Phan Trung, Phường Tam Hiệp, Tỉnh Đồng Nai</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Hotline</p>
                  <a href="tel:0937587438" className="text-sm font-bold text-slate-800 hover:text-amber-600 transition-colors">
                    0937.587.438
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:k.homekog@gmail.com" className="text-sm text-slate-700 hover:text-amber-600 transition-colors">
                    k.homekog@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Giờ làm việc</p>
                  <p className="text-sm text-slate-700">8:00 – 18:00, Thứ 2 – Chủ nhật</p>
                </div>
              </li>
            </ul>

            {/* Quick links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:0937587438"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white
                           px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-amber-500/20
                           transition-all hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5" /> Gọi ngay
              </a>
              <a
                href="https://zalo.me/0937587438"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white
                           px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-blue-500/20
                           transition-all hover:scale-105"
              >
                Zalo
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="font-black text-slate-900 text-xl mb-2">Đã nhận thông tin!</h3>
                <p className="text-slate-500 text-sm">
                  Chuyên viên tư vấn sẽ liên hệ với bạn trong vòng 30 phút.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-black text-slate-900 text-lg mb-1">Đăng ký tư vấn</h3>
                <p className="text-slate-500 text-sm mb-6">Điền thông tin, chúng tôi sẽ gọi lại trong 30 phút.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                      Họ tên *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm
                                 text-slate-800 placeholder:text-slate-400 focus:outline-none
                                 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="0937 587 438"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm
                                 text-slate-800 placeholder:text-slate-400 focus:outline-none
                                 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                      Dự án quan tâm
                    </label>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm
                                 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400
                                 focus:border-transparent transition"
                    >
                      <option value="">-- Chọn dự án --</option>
                      <option value="mega-city-2">Mega City 2 Nhơn Trạch</option>
                      <option value="k-home-cityview">K-Home CityView – Biên Hòa</option>
                      <option value="k-home-avenue">K-Home Avenue – Nhơn Trạch</option>
                      <option value="k-home-midtown">K-Home Midtown – Trảng Bom</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60
                               text-white font-bold py-3.5 rounded-xl text-sm transition-all
                               shadow-md shadow-amber-500/20 hover:shadow-amber-500/30
                               hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {loading ? "Đang gửi..." : "Gửi thông tin tư vấn"}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                    Thông tin được bảo mật. Chúng tôi không chia sẻ dữ liệu cá nhân.
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
