import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins } from 'next/font/google';
import Contact from "@/components/Contact";

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ["latin"]  });

export const metadata: Metadata = {
  title: "Portoflio",
  description: "Portfolio de Camille Metard, développeur web fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-screen py-10">
          <Footer />
          
        </footer>
      </body>
    </html>
  );
}
