import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "sonner";
import { LenisProvider } from "@/components/providers/LenisProvider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Jayendra Mandradiar — Mechatronics engineer · Chicago Booth MBA · PM",
  description:
    "Mechatronics engineer and Chicago Booth MBA candidate (Class of 2026) targeting Product Management roles in tech, automotive, and energy.",
  openGraph: {
    title: "Jayendra Mandradiar — PM · Mechatronics · Booth '26",
    description:
      "I build. I ship. I lead 0→1. Currently looking for PM roles starting June 2026.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <LenisProvider>{children}</LenisProvider>
        <Toaster
          theme="dark"
          position="bottom-center"
          toastOptions={{
            style: {
              background: "var(--color-surface-1)",
              border: "1px solid var(--color-border)",
              color: "var(--color-foreground)",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              letterSpacing: "0.05em",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
