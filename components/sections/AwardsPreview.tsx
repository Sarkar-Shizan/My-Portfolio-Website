
import { awards } from "@/data/awards";
import AwardCard from "@/components/ui/AwardCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AwardsPreview() {
  return (
    <section id="awards" className="mx-auto max-w-7xl px-6 py-28">
      <SectionTitle
        small="Recognition"
        title="Awards & Honors"
        subtitle="Academic achievements and recognitions"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {awards.map((award) => (
          <AwardCard key={award.id} award={award} />
        ))}
      </div>
    </section>
  );
}

