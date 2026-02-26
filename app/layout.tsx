import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Particles from "./Particles";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"]})

export const metadata = {
  title: "Build Websites with AI in 2026 | Master Modern Web Development",
  description: "One-time intensive training session on building modern websites using Large Language Models. Learn practical skills for the future of web development.",
  openGraph: {
    title: "Build Websites with AI in 2026",
    description: "Master AI in web development in 4 flexible days-Online/Offline",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* White background layer (behind particles) */}
        <div className="fixed inset-0 -z-20 bg-white" aria-hidden />
        {/* Particles (above white, below content) */}
        <Particles
          className="fixed inset-0 -z-10"
          particleColors={["#64748b", "#475569", "#334155", "#1e40af", "#1e3a8a"]}
        />
         {/* Device Recommendation Banner
         <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary-dark to-primary text-text-light text-sm py-2 px-4 text-center border-b border-accent/30">
          💻 For the best experience, we recommend using a laptop. Mobile is also supported!
        </div> */}
        <div className="relative z-10">
        {children}
        <Analytics /> {/* Add this line */}

        </div>
         
      </body>
    </html>
  );
}
