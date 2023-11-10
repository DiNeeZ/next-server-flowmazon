import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import SessionProvider from "@/providers/SessionProvider";

import Header from "@/components/Navbar/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
        <SessionProvider>
          <Header />
          <main className="flex min-w-[300px] grow flex-col gap-12">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-center" richColors />
        </SessionProvider>
      </body>
    </html>
  );
}
