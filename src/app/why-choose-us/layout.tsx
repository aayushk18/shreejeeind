import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: "Find out why businesses across Noida and Delhi NCR choose Shree Jee Industries for in-house manufacturing, quality control, and bulk corrugated paper supply.",
  openGraph: {
    title: "Why Choose Us | Shree Jee Industries",
    description: "Find out why businesses across Noida and Delhi NCR choose Shree Jee Industries for in-house manufacturing, quality control, and bulk corrugated paper supply.",
    url: "https://www.shreejeeindustries.in/why-choose-us",
    siteName: "Shree Jee Industries",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Why Choose Shree Jee Industries - Corrugated Paper Manufacturer Noida",
      },
    ],
  },
};

export default function WhyChooseUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
