import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScoreTicker from "@/components/ScoreTicker";

export const metadata: Metadata = {
  title: "SN Cricinfo — Live Cricket Scores",
  description: "Live cricket scores, IPL 2024, stats and more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-pitch text-white min-h-screen">
        <Navbar />
        <ScoreTicker />
        <main>{children}</main>
      </body>
    </html>
  );
}