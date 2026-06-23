import { portfolio } from "@/data/portfolio";
import { ExternalLink, FolderGit2, Mail } from "lucide-react";
import Link from "next/link";
import SocialIcons from "@/components/ui/SocialIcons";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2">
      <div>
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold text-slate-300">
          ✣ Ready For Innovating
        </div>

        <h1 className="text-6xl font-black leading-tight md:text-8xl">
          Frontend <br />
          <span className="bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        <p className="mt-6 text-xl font-semibold text-slate-400">{portfolio.subtitle}</p>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400">{portfolio.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {portfolio.heroTags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-2xl bg-purple-500 px-7 py-4 font-bold text-white shadow-[0_0_35px_rgba(168,85,247,0.45)] transition hover:bg-purple-400"
          >
            <FolderGit2 size={18} /> Projects <ExternalLink size={16} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-bold text-white transition hover:border-purple-400/60"
          >
            <Mail size={18} /> Contact <ExternalLink size={16} />
          </Link>
        </div>

        <div className="mt-10">
          <SocialIcons />
        </div>
      </div>

      <div className="relative hidden justify-center md:flex">
        <div className="absolute h-80 w-80 rounded-full bg-purple-500/30 blur-[120px]" />
        <div className="relative rotate-[-8deg] rounded-[2rem] border border-purple-400/30 bg-purple-500/10 p-8 shadow-[0_0_80px_rgba(168,85,247,0.35)]">
          <div className="h-40 w-72 rounded-t-3xl border border-purple-300/40 bg-gradient-to-br from-purple-500 to-fuchsia-700 p-5">
            <div className="space-y-3">
              <div className="h-3 w-40 rounded bg-white/30" />
              <div className="h-3 w-52 rounded bg-white/20" />
              <div className="h-3 w-32 rounded bg-white/30" />
              <div className="h-3 w-48 rounded bg-white/20" />
            </div>
          </div>
          <div className="mx-auto h-24 w-80 rounded-b-3xl bg-gradient-to-br from-purple-700 to-fuchsia-600" />
        </div>
      </div>
    </section>
  );
}
