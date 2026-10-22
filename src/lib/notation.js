/** Preserve all text, including subscript tokens; React never receives HTML. */
export function notationParts(value) {
  return String(value)
    .split(/([\p{L}]+_[\p{L}0-9]+)/gu)
    .filter(Boolean)
    .map((part) => {
      const match = part.match(/^(.+)_([\p{L}0-9]+)$/u);
      return match ? { text: match[1], subscript: match[2] } : { text: part };
    });
}
