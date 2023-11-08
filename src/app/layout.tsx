import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Navbar/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://vercel.com/",
  ),
  title: "Flowmazon",
  description: "We make your wallet cry",
  openGraph: {
    title: "Flowmazon",
    description: "We make your wallet cry",
    images: [{ url: "/images/opengraph-image.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col justify-between`}
      >
        <Header />
        <main className="flex min-w-[300px] grow flex-col gap-12">
          {children}
        </main>
        <Footer />
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
