import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Merle | Desarrollador & Consultor Tecnológico",
  description: "Especialista en Digital Risk Protection y Soluciones Digitales Seguras.",
  openGraph: {
    title: "Alex Merle | Desarrollador & Consultor Tecnológico",
    description: "Especialista en Digital Risk Protection y Soluciones Digitales Seguras.",
    url: "https://alexmerle.es",
    siteName: "Alex Merle Portfolio",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased selection:bg-brand-blue selection:text-white`}
      >
        {/* Grainy Texture Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
