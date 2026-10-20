export default function Notation({ children }) {
  if (!children) return null;
  const value = String(children);
  const parts = value.split(/([A-Za-zΩμ𝓔ηΦΨ]+)_[A-Za-z0-9]+/g);
  if (parts.length === 1) return value;
  return parts.map((part, index) => {
    const match = part.match(/^([A-Za-zΩμ𝓔ηΦΨ]+)_([A-Za-z0-9]+)$/);
    return match ? <span key={`${part}-${index}`}>{match[1]}<sub>{match[2]}</sub></span> : part;
  });
}
