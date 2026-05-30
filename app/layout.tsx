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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}