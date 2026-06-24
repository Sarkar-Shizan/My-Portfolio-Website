import type { Project } from "@/data/projects";
import { ExternalLink, FolderGit2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const projectLink = `/projects/${project.slug}`;

  return (
    <article className="glass-card group rounded-3xl p-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-purple-400/70 hover:bg-purple-500/10 hover:shadow-[0_0_45px_rgba(168,85,247,0.55)]">
      <Link href={projectLink}>
        <div className="relative mb-8 flex h-56 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/70 to-purple-950/50 transition-all duration-300 ease-out group-hover:border-purple-400/70 group-hover:shadow-[0_0_45px_rgba(168,85,247,0.55)]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-80 transition-all duration-500 ease-out group-hover:scale-110 group-hover:opacity-100"
            />
          ) : (
            <FolderGit2
              size={56}
              className="text-white/70 transition-all duration-300 group-hover:text-purple-100 group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.85)]"
            />
          )}

          <div className="absolute inset-0 bg-purple-500/0 transition-all duration-300 group-hover:bg-purple-500/10" />
        </div>
      </Link>

      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-black text-white transition-all duration-300 group-hover:text-purple-200 group-hover:drop-shadow-[0_0_14px_rgba(216,180,254,0.85)]">
          {project.title}
        </h3>

        <Link
          href={projectLink}
          className="text-slate-400 transition-all duration-300 hover:text-purple-300 hover:drop-shadow-[0_0_14px_rgba(168,85,247,0.85)]"
        >
          <ExternalLink size={18} />
        </Link>
      </div>

      <p className="mt-4 leading-relaxed text-slate-400 transition-all duration-300 group-hover:text-slate-300">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-400/70 hover:bg-purple-500/15 hover:text-purple-100 hover:shadow-[0_0_25px_rgba(168,85,247,0.65)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href={projectLink}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-400/70 hover:bg-purple-500/15 hover:text-purple-100 hover:shadow-[0_0_25px_rgba(168,85,247,0.65)]"
        >
          Details
        </Link>

        {project.githubUrl && project.githubUrl !== "#" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-purple-400/40 bg-purple-500 px-4 py-2 text-sm font-bold text-white shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.8)]"
          >
            GitHub
            <ExternalLink size={14} />
          </a>
        )}

        {project.liveUrl && project.liveUrl !== "#" && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-400/70 hover:bg-purple-500/15 hover:text-purple-100 hover:shadow-[0_0_25px_rgba(168,85,247,0.65)]"
          >
            Live
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  );
}