import type { Metadata } from "next";
import {
  Archivo,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Instrument_Serif,
  Outfit,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chrysalis.education"),
  title: {
    default: "Chrysalis Education — Education built around you",
    template: "%s — Chrysalis Education",
  },
  description:
    "A dedicated Education Manager, the teaching around your child, and the technology that keeps everyone looking at the same picture. EDU Concierge, Dexter and Spark.",
  icons: { icon: "/img/favicon.png" },
  openGraph: {
    type: "website",
    siteName: "Chrysalis Education",
    images: ["/img/family-group.jpg"],
  },
};

export const viewport = { themeColor: "#442a72" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} ${instrument.variable} ${outfit.variable} ${jakarta.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
