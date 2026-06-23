import { navItems, portfolio } from "@/data/portfolio";
import { Code2 } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#070419]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.45)]">
            <Code2 size={17} />
          </span>
          <span>{portfolio.brand}</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-slate-400 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-purple-300">
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-bold text-slate-200 transition hover:border-purple-400/70 lg:inline-flex"
        >
          Hire Me
        </Link>
      </nav>
    </header>
  );
}
