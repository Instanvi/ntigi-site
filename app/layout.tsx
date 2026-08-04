import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const customFont = localFont({
  src: "../public/fonts/gyByhwUxId8gMEwcGFU.woff2",
  variable: "--font-custom",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NTIGI Logistics",
  description: "Ntigi transforms supply chains worldwide, offering advanced offline-first logistics and cargo software for streamlined, borderless operations.",
  keywords: "supply chain software, Freight forwarding software, customs clearance software, global logistics software, Freight booking software, Ntigi, cargo software, logistics software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${customFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300 selection:bg-[#263070] selection:text-white">
        {children}
      </body>
    </html>
  );
}
