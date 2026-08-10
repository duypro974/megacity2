import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

const LEADERS = [
  {
    name: "Bà Đặng Thị Kim Oanh",
    title: "Chủ tịch HĐQT kiêm TGĐ",
    desc: "Người sáng lập và dẫn dắt Kim Oanh Group từ năm 2009, với hơn 15 năm kinh nghiệm phát triển bất động sản tại Đồng Nai và Đông Nam Bộ.",
    initials: "KO",
  },
];

const MILESTONES = [
  { year: "2009", event: "Thành lập Kim Oanh Group tại Đồng Nai" },
  { year: "2015", event: "Khởi công dự án Mega City 1 Nhơn Trạch" },
  { year: "2018", event: "Đầu tư Mega City 2 – quy mô ~84 ha" },
  { year: "2021", event: "Ra mắt thương hiệu nhà ở xã hội K-Home" },
  { year: "2023", event: "Triển khai K-Home CityView, Avenue, Midtown" },
  { year: "2025", event: "QĐ 1772 phê duyệt 2.421 lô phân lô bán nền" },
];

export default function LeadershipSection() {
  return (
    <section id="lanh-dao" className="py-24 bg-white" data-reveal>
      <Container>
        <SectionHeading
          eyebrow="Lãnh đạo & Hành trình"
          title={
            <>
              Định hướng bền vững
              <br />
              <span className="text-amber-500">từ đội ngũ lãnh đạo</span>
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Leadership card */}
          <div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">
              Ban lãnh đạo
            </h3>
            {LEADERS.map((leader) => (
              <div
                key={leader.name}
                className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                {/* Avatar placeholder */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #f59e0b, #b45309)" }}
                >
                  {leader.initials}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg">{leader.name}</h4>
                  <p className="text-amber-600 text-sm font-semibold mt-0.5">{leader.title}</p>
                  <p className="text-slate-500 text-sm mt-3 leading-relaxed">{leader.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">
              Hành trình phát triển
            </h3>
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-amber-200" />

              <div className="space-y-6">
                {MILESTONES.map((m, i) => (
                  <div key={m.year} className="relative">
                    {/* Dot */}
                    <div
                      className="absolute -left-8 top-0.5 w-5 h-5 rounded-full border-2 border-amber-500 flex items-center justify-center"
                      style={{ background: i === MILESTONES.length - 1 ? "#f59e0b" : "white" }}
                    >
                      {i === MILESTONES.length - 1 && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <p className="text-xs font-bold text-amber-600 mb-0.5">{m.year}</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{m.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
