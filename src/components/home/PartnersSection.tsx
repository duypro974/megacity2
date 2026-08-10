import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";

const PARTNERS = [
  {
    category: "Ngân hàng tài trợ vốn",
    items: [
      { name: "Agribank", note: "Tài trợ vốn dự án" },
      { name: "BIDV", note: "Hỗ trợ vay mua nhà" },
      { name: "VietinBank", note: "Gói vay ưu đãi" },
      { name: "Techcombank", note: "Tài chính cá nhân" },
    ],
  },
  {
    category: "Đối tác thiết kế & xây dựng",
    items: [
      { name: "Kim Oanh Construction", note: "Xây dựng nội bộ" },
      { name: "Đơn vị tư vấn thiết kế", note: "Quy hoạch & kiến trúc" },
    ],
  },
  {
    category: "Phân phối & bán hàng",
    items: [
      { name: "Kim Oanh Realty", note: "Phân phối chính thức" },
      { name: "Mạng lưới CTV toàn quốc", note: "5.000+ cộng tác viên" },
    ],
  },
];

export default function PartnersSection() {
  return (
    <section id="doi-tac" className="py-24 bg-slate-900 text-white" data-reveal>
      <Container>
        <SectionHeading
          eyebrow="Đối tác"
          title={
            <>
              Hệ sinh thái
              <br />
              <span className="text-amber-400">đối tác chiến lược</span>
            </>
          }
          subtitle="Kim Oanh Group phối hợp với các tổ chức tài chính và đối tác hàng đầu để đảm bảo chất lượng và tiến độ cho từng dự án."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARTNERS.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400/70 mb-5">
                {group.category}
              </h3>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-sm font-semibold text-white">{item.name}</span>
                    <span className="text-xs text-slate-400">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stat strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12">
          {[
            { value: "15+", label: "Năm kinh nghiệm" },
            { value: "4", label: "Dự án chủ lực" },
            { value: "5.000+", label: "Sản phẩm nhà ở" },
            { value: "Đồng Nai", label: "Địa bàn trọng tâm" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-black text-white">{s.value}</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
