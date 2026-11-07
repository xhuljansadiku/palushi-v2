/**
 * Puts each sentence of a short lead text on its own line, with balanced
 * wrapping inside each line. Use only for short (2–3 sentence) intros,
 * subtitles and CTAs, not for long running paragraphs.
 */
export function Sentences({ text }: { text: string }) {
  const parts = text.split(/(?<=[.!?])\s+(?=[A-Z0-9“"])/).filter(Boolean);
  return (
    <>
      {parts.map((sentence, i) => (
        <span key={i} className="block text-balance">
          {sentence}
        </span>
      ))}
    </>
  );
}
