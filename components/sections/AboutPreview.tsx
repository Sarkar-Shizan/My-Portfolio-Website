import { portfolio } from "@/data/portfolio";
import SectionTitle from "@/components/ui/SectionTitle";
import { Download, FolderGit2, View } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <SectionTitle
        title="About Me"
        subtitle="Transforming ideas into digital experiences"
      />

      <div className="grid items-center gap-16 md:grid-cols-2">
        <div  className="order-2 md:order-1">
          <h2 className="text-4xl font-black">
            Hello, I’m <br />
            <span className="text-purple-300">{portfolio.name}</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            {portfolio.about}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={portfolio.resumePath}
              className="inline-flex items-center gap-2 rounded-2xl border border-purple-400/40 bg-purple-500 px-7 py-4 font-bold text-white shadow-[0_0_35px_rgba(168,85,247,0.45)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-400 hover:shadow-[0_0_55px_rgba(168,85,247,0.85)] active:translate-y-0">
              <View size={18} />
              View Resume
            </a>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-bold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-400/70 hover:bg-purple-500/15 hover:text-purple-100 hover:shadow-[0_0_40px_rgba(168,85,247,0.65)] active:translate-y-0"
            >
              <FolderGit2 size={18} />
              View Projects
            </Link>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
        <div className="group relative h-64 w-64 overflow-hidden rounded-full border-4 border-purple-400/70 bg-black shadow-[0_0_80px_rgba(168,85,247,0.35)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-purple-300 hover:shadow-[0_0_110px_rgba(168,85,247,0.75)] sm:h-80 sm:w-80">
          <Image
            src="/images/profile.jpg"
            alt={portfolio.name}
            fill
            priority
            sizes="320px"
            className="h-full w-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-110"
          />
        </div>
      </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {portfolio.stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card group rounded-3xl p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-purple-400/70 hover:bg-purple-500/10 hover:shadow-[0_0_45px_rgba(168,85,247,0.55)]"
          >
            <FolderGit2 className="mb-6 text-purple-400 transition-all duration-300 group-hover:text-purple-300 group-hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.85)]" />

            <p className="text-xs uppercase tracking-widest text-slate-500 transition duration-300 group-hover:text-purple-200">
              {stat.label}
            </p>

            <h3 className="mt-3 text-5xl font-black text-purple-300 transition duration-300 group-hover:drop-shadow-[0_0_18px_rgba(216,180,254,0.85)]">
              {stat.value}
            </h3>

            <p className="mt-4 text-sm text-slate-400 transition duration-300 group-hover:text-slate-300">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}