import "./globals.css";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://www.coveredconnect.com"),
  title: "Covered Connect Life Insurance | Smart Coverage Guidance",
  description:
    "Compare life insurance options, estimate coverage, and find the best policy for your needs.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Covered Connect Life Insurance | Smart Coverage Guidance",
    description:
      "Compare life insurance options, estimate coverage, and find the best policy for your needs.",
    url: "https://www.coveredconnect.com",
    siteName: "Covered Connect",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Covered Connect Life Insurance | Smart Coverage Guidance",
    description:
      "Compare life insurance options, estimate coverage, and find the best policy for your needs.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Covered Connect",
                  url: "https://www.coveredconnect.com",
                  description:
                    "Independent life insurance guidance — honest policy comparisons and coverage estimates without sales pressure.",
                },
                {
                  "@type": "WebSite",
                  name: "Covered Connect",
                  url: "https://www.coveredconnect.com",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <Header />
        {children}
        <footer className="border-t border-white/10 bg-slate-950 px-6 py-12 text-slate-400">
          <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Covered Connect</h3>
              <p className="text-sm leading-6">Independent life insurance guidance — honest comparisons, no sales pressure.</p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">Coverage Types</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/term-life-insurance" className="hover:text-white">Term Life Insurance</a></li>
                <li><a href="/whole-life-insurance" className="hover:text-white">Whole Life Insurance</a></li>
                <li><a href="/term-vs-whole-life-insurance" className="hover:text-white">Term vs Whole Life</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/how-much-life-insurance-do-i-need" className="hover:text-white">How Much Do I Need?</a></li>
                <li><a href="/life-insurance-for-people-over-40" className="hover:text-white">Life Insurance Over 40</a></li>
                <li><a href="/best-life-insurance-for-40-year-olds" className="hover:text-white">Best for 40-Year-Olds</a></li>
                <li><a href="/life-insurance-california" className="hover:text-white">Life Insurance California</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">Tools</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/get-a-quote" className="hover:text-white">Get a Quote</a></li>
                <li><a href="/learning-center" className="hover:text-white">Learning Center</a></li>
                <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6 text-center text-sm">
            © {new Date().getFullYear()} Covered Connect. All rights reserved.
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}