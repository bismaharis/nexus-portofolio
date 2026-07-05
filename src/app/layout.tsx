import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "NexUS — Next of Us",
  description: "Mitra digital UMKM dan lembaga pendidikan di Lombok: Company Profile, SEO, dan sistem OBE.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Cursor />
        <ScrollProgress />
        <FloatingCTA />
      </body>
    </html>
  );
}
