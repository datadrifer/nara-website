import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maddi — Architecture Cockpit",
  description: "NaRa design system cockpit for the Maddi v5 architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
