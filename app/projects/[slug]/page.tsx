import { notFound } from "next/navigation";
import { Calendar, ExternalLink, FolderGit2 } from "lucide-react";
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

  const hasGithub = Boolean(project.githubUrl && project.githubUrl !== "#");
  const hasLivePreview = Boolean(project.liveUrl && project.liveUrl !== "#");

  return (
    <main className="min-h-screen bg-[#070419] px-6 py-28 text-white">
      <section className="mx-auto max-w-7xl">
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-bold text-slate-300 backdrop-blur transition hover:-translate-y-0.5 hover:border-purple-400/70 hover:bg-purple-500/15 hover:text-purple-100"
        >
          ← Back to projects
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <ProjectImageSlider images={previewImages} title={project.title} />
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_45px_rgba(168,85,247,0.18)] backdrop-blur-xl sm:p-8">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-purple-300">
              Project Details
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-5 leading-7 text-slate-300">
              {project.description}
            </p>

            <div className="mt-8 grid gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                <FolderGit2 size={18} className="text-purple-300" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Category
                  </p>
                  <p className="mt-1 font-bold text-white">{project.category}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                <Calendar size={18} className="text-purple-300" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Year
                  </p>
                  <p className="mt-1 font-bold text-white">{project.year}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-purple-400/40 bg-purple-500 px-5 py-3 text-sm font-black text-white shadow-[0_0_25px_rgba(168,85,247,0.35)] transition hover:-translate-y-1 hover:bg-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.8)]"
                >
                  Source Code
                  <GitHubIcon />
                </a>
              )}

              <a
                href={hasLivePreview ? project.liveUrl : "#"}
                target={hasLivePreview ? "_blank" : undefined}
                rel={hasLivePreview ? "noopener noreferrer" : undefined}
                aria-disabled={!hasLivePreview}
                className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-black transition ${
                  hasLivePreview
                    ? "border-white/10 bg-white/5 text-white hover:-translate-y-1 hover:border-purple-400/70 hover:bg-purple-500/15 hover:text-purple-100 hover:shadow-[0_0_25px_rgba(168,85,247,0.65)]"
                    : "cursor-not-allowed border-white/10 bg-white/5 text-slate-500"
                }`}
              >
                Live Preview
                <ExternalLink size={16} />
              </a>
            </div>
          </aside>
        </div>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-purple-300">
              Overview
            </p>

            <p className="max-w-4xl text-lg leading-9 text-slate-300">
              {project.longDescription}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-purple-300">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-bold text-slate-300 transition hover:border-purple-400/70 hover:bg-purple-500/15 hover:text-purple-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.6 8.1 11.1.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6a11.8 11.8 0 0 0 8.1-11.1A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}