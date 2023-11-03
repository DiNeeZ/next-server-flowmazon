import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className={inter.className}>
        <main className="flex min-h-screen min-w-[300px] flex-col gap-12">
          {children}
        </main>
      </body>
    </html>
  );
}
