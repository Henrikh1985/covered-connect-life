import Link from "next/link";
import PageLayout from "../components/PageLayout";

export default function CaliforniaLifeInsurancePage() {
  return (
    <PageLayout
      title="Life Insurance in California"
      subtitle="Explore life insurance options available in California and find coverage that fits your family, income, and long-term financial plans."
    >
      <div className="grid gap-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Life Insurance Options in California
          </h2>
          <p className="leading-8 text-slate-200">
            California residents have access to a wide range of life insurance
            options, including term life, whole life, and no medical exam policies.
            Choosing the right coverage depends on your goals, budget, and family needs.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            What to Consider
          </h2>
          <ul className="space-y-3 text-slate-200">
            <li>Cost of living in California</li>
            <li>Mortgage or rent obligations</li>
            <li>Income replacement needs</li>
            <li>Family size and dependents</li>
            <li>Future financial goals</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Popular Coverage Types
          </h2>
          <ul className="space-y-3 text-slate-200">
            <li>
              <Link href="/term-life-insurance" className="text-cyan-300 hover:text-cyan-200">
                Term life insurance
              </Link>
            </li>
            <li>
              <Link href="/whole-life-insurance" className="text-cyan-300 hover:text-cyan-200">
                Whole life insurance
              </Link>
            </li>
            <li>No medical exam life insurance</li>
            <li>Family protection plans</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-8 text-center backdrop-blur-xl">
          <h2 className="mb-3 text-3xl font-semibold text-white">
            Get a Life Insurance Quote in California
          </h2>

          <p className="text-slate-200">
            Compare policies available in California and find the right coverage for your needs.
          </p>

          <Link
            href="/get-a-quote"
            className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-100"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}