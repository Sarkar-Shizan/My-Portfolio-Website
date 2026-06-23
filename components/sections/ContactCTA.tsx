import { portfolio } from "@/data/portfolio";
import SocialIcons from "@/components/ui/SocialIcons";
import { Download, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-32">
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/25 to-white/[0.03] p-10 text-center shadow-[0_0_80px_rgba(168,85,247,0.18)] md:p-16">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-purple-300">
          Let’s Work Together
        </p>

        <h2 className="text-4xl font-black text-purple-300 md:text-6xl">Get In Touch</h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          Have a project in mind, or just want to say hi? My inbox is always open — I’ll get back to you as soon as possible.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${portfolio.email}`} className="inline-flex items-center gap-2 rounded-2xl bg-purple-500 px-7 py-4 font-bold transition hover:bg-purple-400">
            <Mail size={18} /> Say Hello
          </a>

          <a href={portfolio.resumePath} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-bold transition hover:border-purple-400/60">
            <Download size={18} /> Download Resume
          </a>
        </div>

        <div className="mt-10 flex justify-center">
          <SocialIcons withUserIcon />
        </div>
      </div>
    </section>
  );
}
