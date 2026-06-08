import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import { TermProvider } from "@/components/glossary/TermProvider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Exercise 5 Dashboard | Visual Analytics",
  description:
    "Visual Analytics Exercise 5 — clustering, bicluster visualization, and scatterplot topics with interactive examples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <TermProvider>{children}</TermProvider>
      </body>
    </html>
  );
}
