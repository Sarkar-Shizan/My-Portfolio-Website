import type { Certification } from "@/data/certifications";

type CertificateCardProps = {
  certificate: Certification;
};

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const Icon = certificate.icon;

  return (
    <div className="glass-card flex items-center gap-5 rounded-3xl p-7 transition hover:border-purple-400/60">
      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.35)]">
        <Icon size={26} />
      </div>
      <div>
        <h3 className="font-black">{certificate.title}</h3>
        <p className="mt-1 text-slate-400">
          {certificate.provider} · {certificate.year}
        </p>
      </div>
    </div>
  );
}
