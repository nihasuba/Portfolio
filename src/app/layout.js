import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/ui/footer";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Skills from "./skills/Skills";
import PageTransition from "@/components/ui/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Nihashini Subatharan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-50 min-h-screen">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <PageTransition>
        {children}
        <About />
        <Skills />
        <Projects />
        <Contacts />
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
