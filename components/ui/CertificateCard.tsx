
import type { Certification } from "@/data/certifications";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

type CertificateCardProps = {
  certificate: Certification;
};

export default function CertificateCard({
  certificate,
}: CertificateCardProps) {
  const Icon = certificate.icon;
  const certificateLink =
    certificate.certificateUrl ?? certificate.image;

  return (
    <article className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-purple-400/70 hover:bg-purple-500/10 hover:shadow-[0_0_45px_rgba(168,85,247,0.55)]">
      {/* Certificate image */}
      <a
        href={certificateLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${certificate.title}`}
        className="relative block aspect-[16/10] shrink-0 overflow-hidden border-b border-white/10 bg-black/30"
      >
        <Image
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#070419]/70 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />

        <div className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]">
          <ExternalLink size={18} />
        </div>
      </a>

      {/* Certificate information */}
      <div className="flex flex-1 items-start gap-4 p-6">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-purple-300/30 bg-purple-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-purple-200/70 group-hover:bg-purple-400 group-hover:shadow-[0_0_45px_rgba(168,85,247,0.9)]">
          <Icon
            size={24}
            className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
          />
        </div>

        <div className="flex min-w-0 flex-1 self-stretch flex-col">
          <h3 className="font-black leading-snug text-white transition-all duration-300 group-hover:text-purple-100 group-hover:drop-shadow-[0_0_12px_rgba(216,180,254,0.85)]">
            {certificate.title}
          </h3>

          <p className="mt-2 text-sm text-slate-400 transition-all duration-300 group-hover:text-purple-200">
            {certificate.provider}
            <span className="mx-2 text-purple-400">·</span>
            {certificate.year}
          </p>

          {/* Always aligned at the bottom */}
          <div className="mt-auto pt-5">
            <a
              href={certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/70 hover:bg-purple-500/20 hover:text-purple-100 hover:shadow-[0_0_25px_rgba(168,85,247,0.65)]"
            >
              View Certificate
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

