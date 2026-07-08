import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    default: "Our Projects",
    template: "%s | Palushi Brothers Construction Ltd",
  },
  description:
    "Explore our portfolio of construction and renovation projects across London. Loft conversions, extensions, refurbishments, and more.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
