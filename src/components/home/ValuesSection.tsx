import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { FileText, RefreshCw, MessageCircle, Layers } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// ValuesSection — Vì sao nên tìm hiểu qua website
// Wording: định vị là kênh thông tin, không phải chủ đầu tư
// ─────────────────────────────────────────────────────────────

const VALUES = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "THÔNG TIN DỰ ÁN",
    desc: "Thông tin được trình bày tập trung, trực quan và dễ tra cứu.",
    accent: "amber",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "CẬP NHẬT",
    desc: "Các thông tin mới được cập nhật khi có nguồn dữ liệu xác thực.",
    accent: "blue",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "KẾT NỐI TƯ VẤN",
    desc: "Khách hàng có thể dễ dàng gửi yêu cầu hoặc liên hệ để được hỗ trợ.",
    accent: "green",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "MỞ RỘNG",
    desc: "Website được xây dựng để có thể bổ sung thêm các dự án trong tương lai.",
    accent: "amber",
  },
];

const ACCENT: Record<string, { icon: string; line: string; bg: string; border: string }> = {
  amber: {
    icon: "text-amber-600 bg-amber-50",
    line: "bg-amber-500",
    bg: "hover:bg-amber-50/40",
    border: "hover:border-amber-200",
  },
  blue: {
    icon: "text-blue-600 bg-blue-50",
    line: "bg-blue-500",
    bg: "hover:bg-blue-50/40",
    border: "hover:border-blue-200",
  },
  green: {
    icon: "text-emerald-600 bg-emerald-50",
    line: "bg-emerald-500",
    bg: "hover:bg-emerald-50/40",
    border: "hover:border-emerald-200",
  },
};

export default function ValuesSection() {
  return (
    <section id="gia-tri" className="py-28 bg-slate-50" data-reveal>
      <Container>
        <SectionHeading
          eyebrow="VÌ SAO NÊN TÌM HIỂU QUA WEBSITE"
          title={
            <>
              Thông tin rõ ràng.
              <br />
              <span className="text-amber-500">Tìm hiểu dễ dàng.</span>
            </>
          }
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
          {VALUES.map((v) => {
            const c = ACCENT[v.accent] ?? ACCENT.amber;
            return (
              <div
                key={v.title}
                className={`group relative rounded-[20px] bg-white border border-slate-200 p-7
                            transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5
                            ${c.bg} ${c.border}`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-8 right-8 h-0.5 rounded-full ${c.line} opacity-0 group-hover:opacity-100 transition-opacity`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${c.icon}`}>
                  {v.icon}
                </div>

                {/* Content */}
                <h3 className="font-black text-slate-900 text-[13px] tracking-wider uppercase mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
