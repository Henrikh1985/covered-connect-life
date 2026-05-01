export default function PageLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-[24rem] -left-24 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute top-[8rem] right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Covered Connect Life
          </div>

          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          {children}
        </div>
      </div>
    </section>
  );
}