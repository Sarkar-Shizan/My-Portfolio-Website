import { certifications } from "@/data/certifications";
import CertificateCard from "@/components/ui/CertificateCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function CertificationsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionTitle
        small="Credentials"
        title="Certifications"
        subtitle="Continuous learning, validated"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certificate) => (
          <CertificateCard key={certificate.title} certificate={certificate} />
        ))}
      </div>
    </section>
  );
}
