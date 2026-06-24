import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.slug || project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find(
    (item) => item.slug === id || item.id === id
  );

  return {
    title: project
      ? `${project.title} | Sarkar's Portfolio`
      : "Project Not Found",
  };
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find(
    (item) => item.slug === id || item.id === id
  );

  if (!project) {
    notFound();
  }

  const hasImage = Boolean(project.image && project.image.trim() !== "");
  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl !== "#");
  const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl !== "#");

  const liveHref = hasLiveUrl ? project.liveUrl! : "#";

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Link
        href="/projects"
        className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/70 hover:bg-purple-500/15 hover:text-purple-100 hover:shadow-[0_0_25px_rgba(168,85,247,0.65)]"
      >
        <ArrowLeft size={18} />
        Back to Projects
      </Link>

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_0_60px_rgba(168,85,247,0.12)]">
        <div className="relative h-[320px] w-full overflow-hidden md:h-[480px]">
          {hasImage ? (
            <Image
              src={project.image as string}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1152px"
              className="h-full w-full object-cover object-center opacity-80"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-600/70 to-purple-950/50">
              <FolderGit2
                size={90}
                className="text-white/70 drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
              />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#050314] via-[#050314]/40 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-purple-300">
              {project.category} · {project.year}
            </p>

            <h1 className="text-4xl font-black text-white md:text-7xl">
              {project.title}
            </h1>
          </div>
        </div>

        <div className="grid gap-10 p-8 md:grid-cols-[1.4fr_0.6fr] md:p-12">
          <div>
            <h2 className="text-2xl font-black text-purple-300">
              Project Overview
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              {project.longDescription}
            </p>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-purple-400/70 hover:bg-purple-500/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]">
            <h3 className="font-black text-white">Tech Stack</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="cursor-default rounded-full border border-white/10 bg-purple-500/20 px-3 py-1 text-sm text-purple-200 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/70 hover:bg-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.65)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={liveHref}
                target={hasLiveUrl ? "_blank" : undefined}
                rel={hasLiveUrl ? "noopener noreferrer" : undefined}
                aria-disabled={!hasLiveUrl}
                className={`flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-bold transition-all duration-300 ${
                  hasLiveUrl
                    ? "border border-purple-400/40 bg-purple-500 text-white shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-400 hover:shadow-[0_0_45px_rgba(168,85,247,0.8)]"
                    : "pointer-events-none cursor-not-allowed border border-white/10 bg-white/5 text-slate-500"
                }`}
              >
                <ExternalLink size={18} />
                Live Preview
              </a>

              {hasGithubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/70 hover:bg-purple-500/15 hover:text-purple-100 hover:shadow-[0_0_35px_rgba(168,85,247,0.65)]"
                >
                  <FaGithub size={18} />
                  Source Code
                </a>
              ) : (
                <div className="flex cursor-not-allowed items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-bold text-slate-500">
                  <FaGithub size={18} />
                  Source Code Not Available
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}