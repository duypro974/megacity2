"use client";

import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import Container from "@/components/ui/Container";
import { cld } from "@/lib/cloudinary";

const HERO_IMAGE = cld("megacity2/overview", "1.jpg", "lg");

// ─────────────────────────────────────────────────────────────
// IntroSection — Giới thiệu KIM OANH ĐỒNG NAI
// Vị trí: ngay sau Hero, trước section Dự án
//
// Mục đích:
//  - Giải thích rõ website này là gì (cổng thông tin, không phải chủ đầu tư)
//  - Giới thiệu các dự án đang được hỗ trợ tại Đồng Nai
//  - Dẫn dắt người dùng đến section dự án
//
// Khác với KimOanhGroupSection (giới thiệu tập đoàn + hệ sinh thái),
// section này giới thiệu CHÍNH WEBSITE và vai trò của nó.
// ─────────────────────────────────────────────────────────────

const HIGHLIGHTS = [
  {
    id: "thong-tin",
    label: "Thông tin dự án",
    desc: "Tổng hợp thông tin về các dự án Kim Oanh đang được giới thiệu tại Đồng Nai — vị trí, sản phẩm, tiến độ và pháp lý khi có dữ liệu xác thực.",
  },
  {
    id: "ket-noi",
    label: "Kết nối tư vấn",
    desc: "Hỗ trợ khách hàng gửi yêu cầu và kết nối trực tiếp với đội ngũ tư vấn để được hỗ trợ thông tin phù hợp.",
  },
  {
    id: "cap-nhat",
    label: "Cập nhật liên tục",
    desc: "Các thông tin mới về dự án, tiến độ và thị trường sẽ được cập nhật khi có nguồn xác thực.",
  },
];

export default function IntroSection() {
  return (
    <section id="gioi-thieu" className="py-24 lg:py-28 bg-slate-50" data-reveal>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-7 h-0.5 bg-amber-500 rounded-full" />
              <p className="text-amber-600 text-[11px] font-bold tracking-[0.22em] uppercase">
                KIM OANH ĐỒNG NAI
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-black leading-tight tracking-tight text-slate-900 mb-6
                           text-[clamp(1.8rem,3.8vw,2.8rem)]">
              Cổng thông tin
              <br />
              <span className="text-amber-500">dự án bất động sản Kim Oanh</span>
              <br />
              <span className="text-slate-400 font-bold text-[clamp(1.2rem,2.2vw,1.6rem)]">
                tại Đồng Nai
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-base leading-[1.8] mb-10 max-w-lg">
              Kim Oanh Đồng Nai là kênh thông tin tổng hợp, giúp khách hàng
              tìm hiểu về các dự án bất động sản Kim Oanh đang được giới thiệu
              tại tỉnh Đồng Nai — từ thông tin dự án, sản phẩm đến kết nối tư vấn.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-10">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.id}
                  className="flex items-start gap-4 p-4 rounded-2xl
                             bg-white border border-slate-200
                             hover:border-amber-200 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-2" />
                  <div>
                    <p className="font-bold text-slate-800 text-sm mb-0.5">{h.label}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => document.getElementById("du-an")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400
                         text-slate-900 text-sm font-bold px-7 py-3.5 rounded-full
                         shadow-md shadow-amber-500/20 transition-all hover:-translate-y-0.5 group"
            >
              Xem các dự án đang hỗ trợ
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Disclaimer */}
            <div className="mt-6 flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Website này không phải website chính thức của Kim Oanh Group
                và không đại diện cho chủ đầu tư các dự án.{" "}
                <Link href="/ve-chung-toi" className="text-amber-600 hover:underline font-medium">
                  Tìm hiểu thêm
                </Link>
              </p>
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-[20px] aspect-[4/5] shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_IMAGE}
                alt="Dự án bất động sản Kim Oanh tại Đồng Nai"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={800}
                height={1000}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 50%, rgba(8,15,30,0.75) 100%)",
                }}
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div
                  className="rounded-2xl p-4"
                  style={{
                    background: "rgba(8,15,30,0.82)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">
                    Đang được hỗ trợ
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Mega City 2", "K-Home CityView", "K-Home Avenue", "K-Home Midtown"].map((name) => (
                      <span
                        key={name}
                        className="text-[11px] font-semibold text-white/70 bg-white/8 border border-white/10
                                   px-2.5 py-1 rounded-full"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl flex flex-col
                         items-center justify-center shadow-xl shadow-amber-500/20"
              style={{ background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)" }}
            >
              <p className="text-white font-black text-sm leading-none">Đồng</p>
              <p className="text-white font-black text-sm leading-none mt-0.5">Nai</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
