import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxe Estate — Premium Real Estate",
  description: "Find your sanctuary. Curated properties for the discerning eye.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full light">
      <body className="min-h-full flex flex-col bg-background-light text-nordic-dark font-display antialiased selection:bg-mosque selection:text-white">
        {children}
      </body>
    </html>
  );
}
