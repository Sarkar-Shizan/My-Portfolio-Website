"use client";

import type { Project } from "@/data/projects";
import { ExternalLink, FolderGit2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const projectLink = `/projects/${project.slug}`;

  const images = useMemo(() => {
    if (project.images && project.images.length > 0) return project.images;
    if (project.image) return [project.image];
    return [];
  }, [project.images, project.image]);

  const [activeImage, setActiveImage] = useState(0);

  const currentImage = images[activeImage];

  useEffect(() => {
    setActiveImage(0);
  }, [project.id]);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [images.length, project.id]);

  return (
    <article className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-purple-400/70 hover:bg-purple-500/10 hover:shadow-[0_0_45px_rgba(168,85,247,0.55)]">
      <Link
        href={projectLink}
        aria-label={`View ${project.title}`}
        className="relative block aspect-[16/10] shrink-0 overflow-hidden border-b border-white/10 bg-black/30"
      >
        {currentImage ? (
          <Image
            key={currentImage}
            src={currentImage}
            alt={`${project.title} preview ${activeImage + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-purple-600/70 to-purple-950/50">
            <FolderGit2
              size={56}
              className="text-white/70 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-100 group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.85)]"
            />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#070419]/75 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-35" />

        {images.length > 1 && (
          <>
            <div className="absolute left-4 top-4 z-10 rounded-full border border-white/15 bg-black/45 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-md">
              {activeImage + 1}/{images.length}
            </div>

            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {images.map((image, index) => (
                <span
                  key={image}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeImage === index
                      ? "w-7 bg-purple-300 shadow-[0_0_12px_rgba(216,180,254,0.9)]"
                      : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]">
          <ExternalLink size={18} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-black text-white transition-all duration-300 group-hover:text-purple-200 group-hover:drop-shadow-[0_0_14px_rgba(216,180,254,0.85)]">
            {project.title}
          </h3>

          <Link
            href={projectLink}
            aria-label={`View ${project.title} details`}
            className="shrink-0 text-slate-400 transition-all duration-300 hover:text-purple-300 hover:drop-shadow-[0_0_14px_rgba(168,85,247,0.85)]"
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

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
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
      </div>
    </article>
  );
}