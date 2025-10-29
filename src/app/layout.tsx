import "./globals.css"; // 👈 must be here (relative to src/app)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flight Sim Central",
  description: "IVAO Partner VA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* put global Tailwind classes on body if you want a base bg/text */}
      <body className="min-h-screen bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
