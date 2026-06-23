import type { Project } from "@/data/projects";
import { ExternalLink, FolderGit2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group glass-card rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-400/70">
      <Link href={`/projects/${project.id}`} className="block">
        <div className="relative mb-8 h-56 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/70 to-purple-950/50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-80 transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-[#050314]/50" />
          <FolderGit2 size={52} className="absolute bottom-6 right-6 text-white/70" />
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-black">{project.title}</h3>
          <ExternalLink size={18} className="text-slate-400 transition group-hover:text-purple-300" />
        </div>

        <p className="mt-4 leading-relaxed text-slate-400">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </article>
  );
}
