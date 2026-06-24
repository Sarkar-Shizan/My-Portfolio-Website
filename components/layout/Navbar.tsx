import { navItems, portfolio } from "@/data/portfolio";
import { Code2 } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#070419]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-3 font-bold transition-all duration-300"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.45)] transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:bg-purple-400 group-hover:shadow-[0_0_45px_rgba(168,85,247,0.85)]">
            <Code2 size={17} />
          </span>

          <span className="transition-all duration-300 ease-out group-hover:text-purple-200 group-hover:drop-shadow-[0_0_12px_rgba(216,180,254,0.9)]">
            {portfolio.brand}
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-slate-400 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-purple-200 hover:drop-shadow-[0_0_12px_rgba(216,180,254,0.9)] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-purple-400 after:shadow-[0_0_12px_rgba(168,85,247,0.9)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="relative hidden text-sm font-bold text-slate-200 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-purple-200 hover:drop-shadow-[0_0_14px_rgba(216,180,254,0.95)] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-purple-400 after:shadow-[0_0_12px_rgba(168,85,247,0.9)] after:transition-all after:duration-300 hover:after:w-full lg:inline-flex"
        >
          Hire Me
        </Link>
      </nav>
    </header>
  );
}