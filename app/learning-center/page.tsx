import Link from "next/link";
import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Life Insurance Learning Center | Guides & Education | Covered Connect",
  description:
    "Explore simple, clear guides about term life, whole life, coverage amounts, and how to choose the right life insurance policy for your situation.",
  alternates: { canonical: "/learning-center" },
};

export default function LearningCenterPage() {
  return (
    <PageLayout
      title="Life Insurance Learning Center"
      subtitle="Simple guides to help you understand life insurance before choosing a policy."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {[
          {
            title: "Term vs Whole Life Insurance",
            text: "Understand the difference between temporary and permanent coverage.",
            href: "/term-life-insurance",
          },
          {
            title: "How Much Life Insurance Do I Need?",
            text: "Learn how income, debt, dependents, and future goals affect coverage.",
            href: "/get-a-quote",
          },
          {
            title: "Life Insurance in California",
            text: "Explore coverage considerations for California families and households.",
            href: "/life-insurance-california",
          },
          {
            title: "Whole Life Insurance",
            text: "Learn when permanent coverage may make sense for long-term planning.",
            href: "/whole-life-insurance",
          },
        ].map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:bg-white/10"
          >
            <h2 className="mb-3 text-2xl font-semibold text-white">
              {item.title}
            </h2>
            <p className="leading-7 text-slate-200">{item.text}</p>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}