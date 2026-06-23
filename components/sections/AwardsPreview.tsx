import { awards } from "@/data/awards";
import SectionTitle from "@/components/ui/SectionTitle";
import { Trophy } from "lucide-react";

export default function AwardsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionTitle
        small="Recognition"
        title="Awards & Honors"
        subtitle="Milestones along the way"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {awards.map((award) => (
          <div key={award.title} className="glass-card rounded-3xl p-8 transition hover:border-purple-400/70">
            <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-widest text-slate-500">
              <Trophy size={18} className="text-purple-400" />
              {award.meta}
            </div>
            <h3 className="text-xl font-black">{award.title}</h3>
            <p className="mt-4 text-slate-400">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
