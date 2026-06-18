import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Request a free, competitive price quote for premium liner paper, fluted paper, and bulk corrugated packaging materials from Shree Jee Industries.",
  openGraph: {
    title: "Request a Quote | Shree Jee Industries",
    description: "Request a free, competitive price quote for premium liner paper, fluted paper, and bulk corrugated packaging materials from Shree Jee Industries.",
    url: "https://www.shreejeeindustries.in/quote",
    siteName: "Shree Jee Industries",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Get a Free Quote - Shree Jee Industries Corrugated Paper Noida",
      },
    ],
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
