import type { SkillGroup } from "@/data/skills";

type SkillCardProps = {
  skill: SkillGroup;
};

export default function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <div className="glass-card group rounded-3xl p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-purple-400/70 hover:bg-purple-500/10 hover:shadow-[0_0_45px_rgba(168,85,247,0.55)]">
      <div className="mb-8 grid h-16 w-16 place-items-center rounded-2xl bg-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.35)] transition-all duration-300 group-hover:bg-purple-400 group-hover:shadow-[0_0_55px_rgba(168,85,247,0.85)]">
        <Icon
          size={26}
          className="transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.85)]"
        />
      </div>

      <h3 className="mb-3 text-xl font-bold text-white transition-all duration-300 group-hover:text-purple-200 group-hover:drop-shadow-[0_0_14px_rgba(216,180,254,0.85)]">
        {skill.title}
      </h3>

      {skill.description && (
        <p className="mb-6 text-sm leading-relaxed text-slate-400 transition-all duration-300 group-hover:text-slate-300">
          {skill.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-400/70 hover:bg-purple-500/15 hover:text-purple-100 hover:shadow-[0_0_25px_rgba(168,85,247,0.65)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}