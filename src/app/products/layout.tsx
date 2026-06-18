import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Explore our range of premium Liner Paper and Fluted Paper designed with high bursting strength (BF) and compression strength for corrugated box manufacturing.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
