import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Request a free, competitive price quote for premium liner paper, fluted paper, and bulk corrugated packaging materials from Shree Jee Industries.",
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
