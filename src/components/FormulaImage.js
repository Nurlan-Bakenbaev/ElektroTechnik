import { formulaImages } from "../data/formula-images";

/** Local copies of CodeCogs equation images; no runtime third-party requests. */
export default function FormulaImage({ expression }) {
  const image = formulaImages[expression];
  if (!image) return <strong>{expression}</strong>;
  return (
    <figure className="formula-image">
      <div
        className="formula-image-scroll"
        tabIndex={0}
        role="region"
        aria-label="Formel, bei Bedarf horizontal scrollen"
        data-lenis-prevent
      >
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${image.src}`}
          alt={image.latex}
          loading="lazy"
        />
      </div>
      <figcaption>
        <a href={image.source} target="_blank" rel="noopener noreferrer">
          Formelbild · CodeCogs
        </a>
      </figcaption>
    </figure>
  );
}
