import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  return {
    title: project ? `${project.title} | Sarkar's Portfolio` : "Project Not Found",
  };
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Link href="/projects" className="mb-10 inline-flex items-center gap-2 text-slate-400 transition hover:text-purple-300">
        <ArrowLeft size={18} /> Back to Projects
      </Link>

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
        <div className="relative h-[320px] md:h-[480px]">
          <Image src={project.image} alt={project.title} fill className="object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050314] via-[#050314]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-purple-300">
              {project.category} · {project.year}
            </p>
            <h1 className="text-4xl font-black text-white md:text-7xl">{project.title}</h1>
          </div>
        </div>

        <div className="grid gap-10 p-8 md:grid-cols-[1.4fr_0.6fr] md:p-12">
          <div>
            <h2 className="text-2xl font-black text-purple-300">Project Overview</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">{project.longDescription}</p>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-black">Tech Stack</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-200">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <a href={project.liveUrl} className="flex items-center justify-center gap-2 rounded-2xl bg-purple-500 px-5 py-3 font-bold transition hover:bg-purple-400">
                <ExternalLink size={18} /> Live Preview
              </a>
              <a href={project.githubUrl} className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-bold transition hover:border-purple-400/60">
                <FaGithub size={18} /> Source Code
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
