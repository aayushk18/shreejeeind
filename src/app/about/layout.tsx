import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Shree Jee Industries, a leading manufacturer and supplier of corrugated paper rolls, liner paper, and fluting paper in Noida.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
