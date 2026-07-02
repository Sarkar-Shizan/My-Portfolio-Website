import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectImageSlider from "@/components/ui/ProjectImageSlider";

type ProjectDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const previewImages =
    project.images && project.images.length > 0
      ? project.images
      : project.image
        ? [project.image]
        : [];

  return (
    <main className="min-h-screen bg-[#070419] px-6 py-28 text-white">
      <section className="mx-auto max-w-6xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex text-sm font-bold text-slate-400 transition hover:text-purple-300"
        >
          ← Back to projects
        </Link>

        <ProjectImageSlider images={previewImages} title={project.title} />

        <div className="mt-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-purple-300">
            {project.category} · {project.year}
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {project.longDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-purple-400/40 bg-purple-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-400"
              >
                Source Code
                <ExternalLink size={16} />
              </a>
            )}

            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-purple-400/70 hover:bg-purple-500/15"
              >
                Live Preview
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}