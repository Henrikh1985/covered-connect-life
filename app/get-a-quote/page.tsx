import Link from "next/link";
import PageLayout from "../components/PageLayout";

export default function GetAQuotePage() {
  return (
    <PageLayout
      title="Get a Free Life Insurance Quote"
      subtitle="Compare life insurance options and find coverage that fits your family, budget, and long-term financial goals."
    >
      <div className="grid gap-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Compare Life Insurance Options
          </h2>
          <p className="leading-8 text-slate-200">
            Covered Connect helps you understand your life insurance choices before
            making a decision. Whether you need term life insurance, whole life
            insurance, or coverage in California, we simplify the process.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            What You Can Get a Quote For
          </h2>

          <ul className="space-y-3 text-slate-200">
            <li>
              <Link href="/term-life-insurance" className="text-cyan-300 hover:text-cyan-200">
                Term life insurance quotes
              </Link>
            </li>
            <li>
              <Link href="/whole-life-insurance" className="text-cyan-300 hover:text-cyan-200">
                Whole life insurance policies
              </Link>
            </li>
            <li>Family life insurance coverage</li>
            <li>
              <Link href="/life-insurance-california" className="text-cyan-300 hover:text-cyan-200">
                Life insurance in California
              </Link>
            </li>
            <li>No medical exam life insurance options</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            How It Works
          </h2>
          <p className="leading-8 text-slate-200">
            Provide basic details, review available options, and choose the coverage
            that fits your needs.
          </p>
        </div>

        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-8 text-center backdrop-blur-xl">
          <h2 className="mb-3 text-3xl font-semibold text-white">
            Start Your Free Quote Today
          </h2>

          <p className="text-slate-200">
            No pressure. No obligation. Just real options.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-100"
          >
            Get My Quote
          </Link>

          <p className="mt-4 text-sm text-slate-300">
            ✔ Free quote • ✔ No obligation • ✔ Licensed agents
          </p>
        </div>
      </div>
    </PageLayout>
  );
}