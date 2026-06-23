import type { Skill } from "@/data/skills";

type SkillCardProps = {
  skill: Skill;
};

export default function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <div className="glass-card rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400/60">
      <div className="mb-8 grid h-16 w-16 place-items-center rounded-2xl bg-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.35)]">
        <Icon size={26} />
      </div>
      <h3 className="mb-3 text-xl font-bold">{skill.title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-slate-400">{skill.description}</p>
      <ul className="space-y-3 text-slate-400">
        {skill.items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-purple-400">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
