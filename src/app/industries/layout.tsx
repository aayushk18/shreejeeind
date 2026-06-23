import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "We supply customized corrugated paper solutions for E-commerce, FMCG & Food, Electronics, Pharma, and Retail packaging across North India.",
  openGraph: {
    title: "Industries We Serve ",
    description: "We supply customized corrugated paper solutions for E-commerce, FMCG & Food, Electronics, Pharma, and Retail packaging across North India.",
    url: "https://www.shreejeeindustries.in/industries",
    siteName: "Shree Jee Industries",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.shreejeeindustries.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Industries Served by Shree Jee Industries - Packaging Solutions Noida",
      },
    ],
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
