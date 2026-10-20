import { notationParts } from "../lib/notation.js";

export default function Notation({ children }) {
  if (!children) return null;
  return notationParts(children).map((part, index) =>
    part.subscript ? (
      <span key={index}>
        {part.text}
        <sub>{part.subscript}</sub>
      </span>
    ) : (
      part.text
    ),
  );
}
