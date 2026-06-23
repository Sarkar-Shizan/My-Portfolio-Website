import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-6 text-center">
      <div>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-purple-400">404</p>
        <h1 className="text-5xl font-black text-purple-300 md:text-7xl">Page Not Found</h1>
        <p className="mx-auto mt-6 max-w-xl text-slate-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-2xl bg-purple-500 px-7 py-4 font-bold text-white shadow-[0_0_35px_rgba(168,85,247,0.45)] transition hover:bg-purple-400"
        >
          Back Home
        </Link>
      </div>
    </section>
  );
}
