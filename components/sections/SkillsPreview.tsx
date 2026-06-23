import { skills } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillCard from "@/components/ui/SkillCard";

export default function SkillsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionTitle
        small="What I Do"
        title="My Skills"
        subtitle="Tools and tech I use to ship great products"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard key={skill.title} skill={skill} />
        ))}
      </div>
    </section>
  );
}
