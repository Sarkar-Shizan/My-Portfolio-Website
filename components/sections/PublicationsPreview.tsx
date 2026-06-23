import { publications } from "@/data/publications";
import SectionTitle from "@/components/ui/SectionTitle";
import { BookOpen, ExternalLink } from "lucide-react";

export default function PublicationsPreview() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <SectionTitle
        small="Writing"
        title="Publications"
        subtitle="Articles & talks I've published"
      />

      <div className="space-y-6">
        {publications.map((publication) => (
          <article key={publication.title} className="glass-card flex gap-6 rounded-3xl p-7 transition hover:border-purple-400/60">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.35)]">
              <BookOpen size={26} />
            </div>

            <div>
              <h3 className="text-xl font-black">
                <a href={publication.url} className="transition hover:text-purple-300">
                  {publication.title} <ExternalLink className="inline text-slate-400" size={16} />
                </a>
              </h3>
              <p className="mt-1 text-sm font-bold uppercase text-purple-400">
                {publication.publisher} · {publication.year}
              </p>
              <p className="mt-3 text-slate-400">{publication.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
