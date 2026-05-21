"use client";

import DOMPurify from "isomorphic-dompurify";

const ALLOWED_TAGS = [
  "p",
  "br",
  "strong",
  "em",
  "u",
  "a",
  "ul",
  "ol",
  "li",
  "h2",
  "h3",
  "h4",
  "img",
  "blockquote",
  "figure",
  "figcaption",
];
const ALLOWED_ATTR = ["href", "target", "rel", "src", "alt"];

export function SanitizedHtml({ html }: { html: string }) {
  const sanitized = DOMPurify.sanitize(html, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
  });
  return (
    <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
}
