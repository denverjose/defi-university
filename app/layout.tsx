import type { Metadata } from "next";
import { homepageMetadata } from "@/lib/metadata";
import { Providers } from "./providers/providers";
import "./globals.css";
import Navbar from "@/components/home/home-layout/navbar/navbar";
import { Footer } from "@/components/home/home-layout/footer/footer";

export const metadata: Metadata = homepageMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
