import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";

type ProjectsPreviewProps = {
  limit?: number;
};

export default function ProjectsPreview({ limit }: ProjectsPreviewProps) {
  const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionTitle
        small="Selected Work"
        title="Projects"
        subtitle="Things I've designed and built"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
