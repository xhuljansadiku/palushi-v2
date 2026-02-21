import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore our portfolio of construction and renovation projects across London. Loft conversions, extensions, refurbishments, and more.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
