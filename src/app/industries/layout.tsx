import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "We supply customized corrugated paper solutions for E-commerce, FMCG & Food, Electronics, Pharma, and Retail packaging across North India.",
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
