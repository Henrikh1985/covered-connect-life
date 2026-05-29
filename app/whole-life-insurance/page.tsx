import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Whole Life Insurance | Permanent Coverage Guide | Covered Connect",
  description:
    "Understand whole life insurance — permanent coverage, lifetime protection, and long-term planning benefits. Compare options and find the right policy.",
  alternates: { canonical: "/whole-life-insurance" },
};

export default function WholeLifeInsurancePage() {
  return (
    <PageLayout
      title="Whole Life Insurance"
      subtitle="Permanent life insurance designed for lifetime coverage, long-term planning, and protection that does not expire after a set term."
    >
      <div className="grid gap-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            What Is Whole Life Insurance?
          </h2>
          <p className="leading-8 text-slate-200">
            Whole life insurance is a type of permanent life insurance designed
            to provide coverage for your entire life, as long as required premiums
            are paid. It is often used by people who want long-term stability,
            predictable coverage, and permanent protection.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Who It May Be Good For
          </h2>
          <ul className="space-y-3 text-slate-200">
            <li>People who want lifetime coverage</li>
            <li>Families planning long-term financial protection</li>
            <li>Individuals interested in permanent policy options</li>
            <li>People with estate or legacy planning goals</li>
            <li>Those who want predictable coverage beyond a term period</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Whole Life vs Term Life
          </h2>
          <p className="leading-8 text-slate-200">
            Whole life insurance is designed to last for life and usually costs
            more than term life insurance. Term life insurance typically provides
            coverage for a set number of years and is often chosen for affordability.
          </p>

          <Link
            href="/term-life-insurance"
            className="mt-5 inline-block text-cyan-300 hover:text-cyan-200"
          >
            Learn about term life insurance →
          </Link>
        </div>

        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-8 text-center backdrop-blur-xl">
          <h2 className="mb-3 text-3xl font-semibold text-white">
            Compare Whole Life Insurance Options
          </h2>
          <p className="text-slate-200">
            Review permanent coverage options and see what fits your long-term goals.
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