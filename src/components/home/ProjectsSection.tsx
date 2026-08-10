import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="du-an" className="py-24 bg-slate-50" data-reveal>
      <Container size="xl">
        <SectionHeading
          eyebrow="Danh mục dự án"
          title={
            <>
              Các dự án tiêu biểu
              <br />
              <span className="text-amber-500">của Kim Oanh Group</span>
            </>
          }
          subtitle="Từ khu dân cư cao cấp đến nhà ở xã hội, mỗi dự án phản ánh cam kết của Kim Oanh trong việc kiến tạo môi trường sống chất lượng."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* CTA dưới cùng */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 mb-4">
            Tìm hiểu thêm về danh mục nhà ở xã hội K-Home
          </p>
          <a
            href="https://k-homedongnai.com.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-amber-500/40 text-amber-600
                       hover:bg-amber-50 px-6 py-3 rounded-full text-sm font-semibold transition-all"
          >
            K-Home Đồng Nai →
          </a>
        </div>
      </Container>
    </section>
  );
}
