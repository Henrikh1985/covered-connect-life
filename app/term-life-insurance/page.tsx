import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Term Life Insurance Guide | Costs & Coverage | Covered Connect",
  description:
    "Learn how term life insurance works, who it is best for, and how it compares to whole life. Get a quote and find affordable coverage for your family.",
  alternates: { canonical: "/term-life-insurance" },
};

export default function TermLifeInsurancePage() {
  return (
    <PageLayout
      title="Term Life Insurance"
      subtitle="Affordable coverage for a set period of time, often used to protect income, family needs, mortgage obligations, and future expenses."
    >
      <div className="grid gap-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            What Is Term Life Insurance?
          </h2>
          <p className="leading-8 text-slate-200">
            Term life insurance provides coverage for a specific period, such as
            10, 20, or 30 years. It is often chosen by families who want strong
            protection at a lower starting cost than permanent life insurance.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Who It May Be Good For
          </h2>
          <ul className="space-y-3 text-slate-200">
            <li>Parents with children or dependents</li>
            <li>Homeowners with a mortgage</li>
            <li>People who want income replacement protection</li>
            <li>Families looking for affordable coverage</li>
            <li>Business owners with financial obligations</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Term Life vs Whole Life
          </h2>
          <p className="leading-8 text-slate-200">
            Term life insurance usually costs less and lasts for a set number of
            years. Whole life insurance is designed for lifetime coverage and is
            usually more expensive.
          </p>

          <Link
            href="/whole-life-insurance"
            className="mt-5 inline-block text-cyan-300 hover:text-cyan-200"
          >
            Learn about whole life insurance →
          </Link>
        </div>

        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-8 text-center backdrop-blur-xl">
          <h2 className="mb-3 text-3xl font-semibold text-white">
            Compare Term Life Insurance Quotes
          </h2>
          <p className="text-slate-200">
            Find coverage that fits your family, budget, and long-term goals.
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