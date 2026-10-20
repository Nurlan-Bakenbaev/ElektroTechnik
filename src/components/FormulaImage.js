import { formulaAssets, formulaImages } from "../data/formula-images";

const aliases = {
  "τ = RC; U_C(t) = U₀(1 − e^(−t/τ))": "τ = RC; Uc(t) = U₀(1 − e^(−t/τ))",
  "η = E_nutz / E_zu; η = P_nutz / P_zu; η% = η 100%": "η = E_nutz / Ein; η = P_nutz / P_zu; η% = η 100%",
};

function imageSet(expression) {
  const entry = formulaImages[expression] || formulaImages[aliases[expression]];
  return entry ? { ...entry, assets: entry.images.map((id) => formulaAssets[id]).filter(Boolean) } : null;
}

/** Render locally stored, attributed Wikimedia Math images. No runtime formula service is used. */
export default function FormulaImage({ expression }) {
  const entry = imageSet(expression);
  if (!entry?.assets.length) return <p className="formula-missing">Formelbild wird vorbereitet.</p>;
  return (
    <figure className="formula-image">
      <div className="formula-image-scroll" tabIndex={0} role="region" aria-label="Formelbild, bei Bedarf horizontal scrollen" data-lenis-prevent>
        {entry.assets.map((asset) => (
          <img key={asset.src} src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${asset.src}`} alt={`Formelbild: ${asset.article}`} loading="lazy" />
        ))}
      </div>
      {entry.note && <p className="formula-note">{entry.note}</p>}
      <figcaption>
        <a href={entry.assets[0].revisionUrl || entry.assets[0].source} target="_blank" rel="noopener noreferrer">Formelbild · Wikimedia Math / Wikipedia</a>
        <span> · CC BY-SA 4.0</span>
      </figcaption>
    </figure>
  );
}
