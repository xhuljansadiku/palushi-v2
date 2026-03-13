import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for contacting Palushi Brothers Construction Ltd. We'll be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={null}>{children}</Suspense>;
}
