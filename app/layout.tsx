import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Covered Connect Life Insurance | Smart Coverage Guidance",
  description:
    "Compare life insurance options, estimate coverage, and find the best policy for your needs.",
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
      </body>
    </html>
  );
}