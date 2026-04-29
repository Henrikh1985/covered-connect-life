import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* NAVBAR */}
        <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
          <Link href="/">Home</Link> |{" "}
          <Link href="/get-a-quote">Get a Quote</Link> |{" "}
          <Link href="/term-life-insurance">Term Life</Link> |{" "}
          <Link href="/whole-life-insurance">Whole Life</Link> |{" "}
          <Link href="/life-insurance-california">California</Link> |{" "}
          <Link href="/learning-center">Learning Center</Link> |{" "}
          <Link href="/faq">FAQ</Link>
        </nav>

        {/* PAGE CONTENT */}
        <main>{children}</main>

      </body>
    </html>
  );
}