"use client";

import { navItems, portfolio } from "@/data/portfolio";
import { Code2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-[1000] w-full border-b border-white/10 bg-[#070419]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3 font-bold transition-all duration-300"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.45)] transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:bg-purple-400 group-hover:shadow-[0_0_45px_rgba(168,85,247,0.85)]">
            <Code2 size={17} />
          </span>

          <span className="text-sm transition-all duration-300 ease-out group-hover:text-purple-200 group-hover:drop-shadow-[0_0_12px_rgba(216,180,254,0.9)] sm:text-base">
            {portfolio.brand}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 text-sm text-slate-400 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-purple-200 hover:drop-shadow-[0_0_12px_rgba(216,180,254,0.9)] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-purple-400 after:shadow-[0_0_12px_rgba(168,85,247,0.9)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Hire Me */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full border border-purple-400/70 bg-transparent px-4 py-2 font-bold text-purple-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-300 hover:text-purple-100 hover:shadow-[0_0_35px_rgba(168,85,247,0.65)] lg:inline-flex"
        >
          Reach Out
        </Link>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Hire Me */}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full border border-purple-400/70 px-4 text-xs font-bold text-purple-300 transition-all duration-300 ease-out hover:border-purple-300 hover:text-purple-100 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] sm:text-sm"
          >
            Reach Out
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isOpen}
            className="flex h-11 w-11 flex-shrink-0 flex-col items-center justify-center gap-1.5 rounded-full bg-transparent transition-all duration-300 hover:bg-purple-500/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.45)]"
          >
            <span
              className={`h-0.5 w-6 rounded-full bg-purple-300 transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-6 rounded-full bg-purple-300 transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`h-0.5 w-6 rounded-full bg-purple-300 transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Card */}
      <div
        className={`fixed left-4 right-4 top-[76px] z-[1001] rounded-3xl border border-purple-400/30 bg-[#070419]/95 p-4 shadow-[0_0_45px_rgba(168,85,247,0.35)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="grid gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-purple-400/70 hover:bg-purple-500/15 hover:text-purple-100 hover:shadow-[0_0_25px_rgba(168,85,247,0.65)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

