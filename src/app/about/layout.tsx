import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Shree Jee Industries, a leading manufacturer and supplier of corrugated paper rolls, liner paper, and fluting paper in Noida.",
  openGraph: {
    title: "About Us ",
    description: "Learn more about Shree Jee Industries, a leading manufacturer and supplier of corrugated paper rolls, liner paper, and fluting paper in Noida.",
    url: "https://www.shreejeeindustries.in/about",
    siteName: "Shree Jee Industries",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Shree Jee Industries - Corrugated Paper Manufacturer Noida",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
