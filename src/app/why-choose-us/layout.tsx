import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: "Find out why businesses across Noida and Delhi NCR choose Shree Jee Industries for in-house manufacturing, quality control, and bulk corrugated paper supply.",
};

export default function WhyChooseUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
