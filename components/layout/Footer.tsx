
import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row md:text-left">
        <p>© 2026 {portfolio.name}. Crafted with care.</p>

        <p>Built with Next.js + TypeScript + Tailwind CSS</p>
      </div>
    </footer>
  );
}

