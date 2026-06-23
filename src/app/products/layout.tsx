import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Explore our range of premium Liner Paper and Fluted Paper designed with high bursting strength (BF) and compression strength for corrugated box manufacturing.",
  openGraph: {
    title: "Our Products ",
    description: "Explore our range of premium Liner Paper and Fluted Paper designed with high bursting strength (BF) and compression strength for corrugated box manufacturing.",
    url: "https://www.shreejeeindustries.in/products",
    siteName: "Shree Jee Industries",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.shreejeeindustries.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Liner Paper & Fluted Paper Products - Shree Jee Industries Noida",
      },
    ],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
