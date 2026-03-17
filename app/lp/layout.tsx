import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trusted Builders in London | Free Quote",
  description:
    "Loft conversions, extensions & full renovations in London. Get a free quote today. 14+ years experience. Call 020 3435 7555.",
};

export default function LpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
