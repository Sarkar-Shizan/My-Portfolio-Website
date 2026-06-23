import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ekizr | Frontend Developer Portfolio",
  description: "Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-[#050314] text-white antialiased">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-120px] top-[-120px] h-[520px] w-[520px] rounded-full bg-purple-800/35 blur-[150px]" />
          <div className="absolute right-[-160px] top-[320px] h-[520px] w-[520px] rounded-full bg-fuchsia-900/30 blur-[160px]" />
          <div className="absolute bottom-[-220px] left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-purple-700/25 blur-[190px]" />
        </div>

        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
