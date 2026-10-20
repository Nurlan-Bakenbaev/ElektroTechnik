import { formulaAssets, formulaImages } from "../data/formula-images";

const aliases = {
  "τ = RC; U_C(t) = U₀(1 − e^(−t/τ))": "τ = RC; Uc(t) = U₀(1 − e^(−t/τ))",
  "η = E_nutz / E_zu; η = P_nutz / P_zu; η% = η 100%":
    "η = E_nutz / Ein; η = P_nutz / P_zu; η% = η 100%",
};

function imageSet(expression) {
  const entry = formulaImages[expression] || formulaImages[aliases[expression]];
  return entry
    ? {
        ...entry,
        assets: entry.images.map((id) => formulaAssets[id]).filter(Boolean),
      }
    : null;
}

/** Render locally stored, attributed Wikimedia Math images. No runtime formula service is used. */
export default function FormulaImage({ expression }) {
  const entry = imageSet(expression);
  if (!entry?.assets.length)
    return <p className="formula-missing">Formelbild wird vorbereitet.</p>;
  return (
    <figure className="formula-image">
      <div
        className="formula-image-scroll"
        tabIndex={0}
        role="region"
        aria-label="Formelbild, bei Bedarf horizontal scrollen"
        data-lenis-prevent
      >
        {entry.assets.map((asset) => (
          <img
            key={asset.src}
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${asset.src}`}
            alt={asset.description || asset.alt}
            loading="lazy"
          />
        ))}
      </div>
      {entry.note && <p className="formula-note">{entry.note}</p>}
      <figcaption>
        Formelbilder · Wikimedia Math / Wikipedia:
        {Array.from(
          new Map(entry.assets.map((asset) => [asset.source, asset])).values(),
        ).map((asset) => (
          <a
            key={asset.source}
            href={asset.revisionUrl || asset.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {asset.article}
          </a>
        ))}
        <span> · </span>
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY-SA 4.0
        </a>
      </figcaption>
    </figure>
  );
}
