import AboutPreview from "@/components/sections/AboutPreview";
import AwardsPreview from "@/components/sections/AwardsPreview";
import CertificationsPreview from "@/components/sections/CertificationsPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import Hero from "@/components/sections/Hero";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import PublicationsPreview from "@/components/sections/PublicationsPreview";
import SkillsPreview from "@/components/sections/SkillsPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <ProjectsPreview />
      <CertificationsPreview />
      <AwardsPreview />
      <PublicationsPreview />
      <ContactCTA />
    </>
  );
}
