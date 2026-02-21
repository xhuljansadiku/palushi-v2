import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free, no-obligation quote for your construction or renovation project. Loft conversions, extensions, roofing, and more across London.",
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
