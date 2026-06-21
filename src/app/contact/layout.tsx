import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Shree Jee Industries in Noida. Contact us for inquiries about corrugated paper, liner paper, and packaging solutions.",
  openGraph: {
    title: "Contact Us | Shree Jee Industries",
    description: "Get in touch with Shree Jee Industries in Noida. Contact us for inquiries about corrugated paper, liner paper, and packaging solutions.",
    url: "https://www.shreejeeindustries.in/contact",
    siteName: "Shree Jee Industries",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.shreejeeindustries.in/og-image.png?v=1",
        width: 1200,
        height: 630,
        alt: "Contact Shree Jee Industries - Corrugated Paper Manufacturer Noida",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
