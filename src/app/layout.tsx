import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Shree Jee Industries | Best corrugated paper manufacturer in Noida",
    template: "%s | Shree Jee Industries",
  },

  description:
    "Shree Jee Industries is a leading corrugated paper manufacturer in Noida, supplying high-quality Liner Paper and Fluted Paper to packaging companies, corrugated box manufacturers, and industrial buyers across North India. Based in Sector 63, Noida, we specialize in bulk supply, consistent quality, and reliable delivery.",
  verification: {

    google: "28FoJIlTwkZ5MGY6IiEFphAutgFjIFUHmzFaEj_smwA"

  },
  openGraph: {
    title: "Shree Jee Industries",
    description:
      "Manufacturer and supplier of Corrugated Paper, Liner Paper, and Fluted Paper in Noida. Serving packaging and corrugation industries across Noida, Ghaziabad and Delhi NCR",
    url: "https://www.shreejeeindustries.in/",
    siteName: "Shree Jee Industries",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shree Jee Industries noida - Corrugated Paper Manufacturer",
      },
    ],
  },

  keywords: [

    "Corrugated Paper Manufacturer",
    "Corrugated Paper Supplier",
    "Corrugation Industry",
    "Corrugated Sheet Manufacturer",
    "Packaging Paper Manufacturer",
    "Paper Packaging Materials",
    "Corrugated Paper Manufacturer noida",
    "Corrugated Paper Supplier noida",
    "Corrugation Industry noida",
    "Corrugated Sheet Manufacturer noida",
    "Packaging Paper Manufacturer noida",
    "Paper Packaging Materials noida",


    // Products
    "Liner Paper",
    "Fluted Paper",
    "Kraft Liner Paper",
    "Corrugated Liner Paper",
    "Fluting Paper",
    "Corrugation Paper",
    "Packaging Paper Supplier",
    "Industrial Paper Supplier",
    "Liner Paper noida",
    "Fluted Paper noida",
    "Kraft Liner Paper noida",
    "Corrugated Liner Paper noida",
    "Fluting Paper noida",
    "Corrugation Paper noida",
    "Packaging Paper Supplier noida",
    "Industrial Paper Supplier noida",


    // Location Keywords
    "Corrugated Paper Manufacturer Noida",
    "Liner Paper Supplier Noida",
    "Fluted Paper Manufacturer Noida",
    "Packaging Paper Supplier Noida",
    "Corrugated Paper Manufacturer Delhi NCR",
    "Corrugated Paper Supplier Delhi",
    "Liner Paper Supplier Delhi NCR",
    "Fluted Paper Supplier Delhi NCR",
    "Corrugated Paper Manufacturer Ghaziabad",
    "Corrugated Paper Manufacturer Greater Noida",
    "Corrugated Paper Manufacturer Gurgaon",
    "Corrugated Paper Manufacturer Faridabad",

    // B2B Keywords
    "Corrugated Box Raw Material",
    "Packaging Industry Supplier",
    "Paper for Box Manufacturing",
    "Bulk Corrugated Paper Supply",
    "Paper Mill Supplier",
    "Industrial Packaging Solutions",
    "B2B Paper Supplier",
    "Packaging Material Manufacturer",
    "Corrugated Box Raw Material noida",
    "Packaging Industry Supplier noida",
    "Paper for Box Manufacturing noida",
    "Bulk Corrugated Paper Supply noida",
    "Paper Mill Supplier noida",
    "Industrial Packaging Solutions noida",
    "B2B Paper Supplier noida",
    "Packaging Material Manufacturer noida",

    // Brand
    "Shree Jee Industries",
    "Shree Jee Industries Noida",
    "Shree Jee Noida",
    "Shree Jee Industries Sector 63 Noida",
    "Shree Jee Sector 63 Noida"


  ],

  alternates: {
    canonical: "https://www.shreejeeindustries.in/",
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
