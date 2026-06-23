type SectionTitleProps = {
  small?: string;
  title: string;
  subtitle: string;
};

export default function SectionTitle({ small, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {small && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-purple-400">
          {small}
        </p>
      )}
      <h2 className="text-4xl font-black text-purple-300 md:text-6xl">{title}</h2>
      <p className="mt-5 text-base text-slate-400">✣ {subtitle} ✣</p>
    </div>
  );
}
