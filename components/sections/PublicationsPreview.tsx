import { publications } from "@/data/publications";
import SectionTitle from "@/components/ui/SectionTitle";
import { BookOpen, ExternalLink } from "lucide-react";

export default function PublicationsPreview() {
  return (
    <section
      id="publications"
      className="mx-auto max-w-5xl px-6 py-28"
    >
      <SectionTitle
        small="Research"
        title="Publications"
        subtitle="Research papers and conference presentations"
      />

      <div className="space-y-6">
        {publications.map((publication) => (
          <article
            key={publication.title}
            className="glass-card group flex  gap-6 rounded-3xl p-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-purple-400/70 hover:bg-purple-500/10 hover:shadow-[0_0_45px_rgba(168,85,247,0.55)] "
          >
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-purple-300/30 bg-purple-500 text-white shadow-[0_0_35px_rgba(168,85,247,0.35)] transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-purple-200/70 group-hover:bg-purple-400 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.9)]">
              <BookOpen
                size={26}
                className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <h3 className="line-clamp-2 text-xl font-black leading-snug text-white transition-all duration-300 group-hover:text-purple-100 group-hover:drop-shadow-[0_0_12px_rgba(216,180,254,0.85)]">
                {publication.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm font-bold uppercase leading-relaxed text-purple-400 transition-all duration-300 group-hover:text-purple-200">
                {publication.publisher}
                <span className="mx-2">·</span>
                {publication.year}
              </p>

              <p className="mt-4 line-clamp-3 leading-relaxed text-slate-400 transition-all duration-300 group-hover:text-slate-300">
                {publication.description}
              </p>

              <div className="mt-auto pt-6">
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-purple-400/40 bg-purple-500 px-4 py-2 text-sm font-bold text-white shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.8)]"
                >
                  View Publication
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

