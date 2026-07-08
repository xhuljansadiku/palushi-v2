import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Palushi Brothers Construction Ltd for a free, no-obligation quote. Call, email, or send us your project details.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
