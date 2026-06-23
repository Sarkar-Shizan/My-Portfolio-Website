export default function Loading() {
  return (
    <div className="grid min-h-[70vh] place-items-center px-6 text-center">
      <div>
        <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-2 border-purple-300 border-t-transparent" />
        <p className="text-slate-400">Loading portfolio...</p>
      </div>
    </div>
  );
}
