"use client";

import DOMPurify from "isomorphic-dompurify";

const ALLOWED_TAGS = ["p", "br", "strong", "em", "u", "a", "ul", "ol", "li", "h2", "h3", "h4"];
const ALLOWED_ATTR = ["href", "target", "rel"];

export function SanitizedHtml({ html }: { html: string }) {
  const sanitized = DOMPurify.sanitize(html, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
  });
  return (
    <div
      className="prose prose-neutral max-w-none"
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
}
