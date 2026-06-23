import { portfolio } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";
import { Download, FolderGit2, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionTitle title="About Me" subtitle="Transforming ideas into digital experiences" />

      <div className="grid items-center gap-16 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black">
            Hello, I’m <br />
            <span className="text-purple-300">{portfolio.name}</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">{portfolio.about}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={portfolio.resumePath}
              className="inline-flex items-center gap-2 rounded-2xl bg-purple-500 px-7 py-4 font-bold shadow-[0_0_35px_rgba(168,85,247,0.45)] transition hover:bg-purple-400"
            >
              <Download size={18} /> Download CV
            </a>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-bold transition hover:border-purple-400/60"
            >
              <FolderGit2 size={18} /> View Projects
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative grid h-80 w-80 place-items-center overflow-hidden rounded-full border-4 border-purple-500/20 bg-black shadow-[0_0_80px_rgba(168,85,247,0.35)]">
            <Image src="/images/profile.png" alt={portfolio.name} fill className="object-cover opacity-75" />
            <User size={120} className="relative z-10 text-purple-500/70" />
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {portfolio.stats.map((stat) => (
          <div key={stat.label} className="glass-card rounded-3xl p-8 transition hover:border-purple-400/70">
            <FolderGit2 className="mb-6 text-purple-400" />
            <p className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</p>
            <h3 className="mt-3 text-5xl font-black text-purple-300">{stat.value}</h3>
            <p className="mt-4 text-sm text-slate-400">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
