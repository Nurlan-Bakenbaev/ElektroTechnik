import Image from "next/image";
import { illustrations } from "../data/illustrations.js";

export default function CurrentPrimer() {
  const image = illustrations.circuits;
  return (
    <section
      className="current-primer"
      aria-label="So entsteht Strom im einfachen Stromkreis"
    >
      <h3>Vom Draht zum Strom: drei Schritte</h3>
      <ol>
        <li>
          <strong>Im Draht sind Ladungsträger bereits vorhanden.</strong>
          <p>
            In einem Metalldraht können sich Elektronen bewegen. Sie sind
            negativ geladen. Ohne elektrischen Antrieb bewegen sie sich
            ungeordnet; dabei fließt im Mittel noch kein gerichteter Strom.
          </p>
        </li>
        <li>
          <strong>Eine Quelle stellt Spannung bereit.</strong>
          <p>
            Eine Batterie wandelt chemische Energie um und hält zwischen ihren
            Polen eine Spannung aufrecht. Das elektrische Feld im
            angeschlossenen Stromkreis wirkt auf die Ladungen. Die Quelle
            liefert Energie; sie erzeugt nicht erst die Elektronen im Draht.
          </p>
        </li>
        <li>
          <strong>Ein geschlossener Weg ermöglicht dauerhaften Strom.</strong>
          <p>
            Verbinde beide Batteriepole über Leitungen und eine passende Lampe.
            Bei geschlossenem Schalter driften die Elektronen im äußeren Kreis
            von Minus nach Plus; die Lampe wandelt übertragene Energie in Licht
            und Wärme um. Öffnest du den Schalter, ist der Weg unterbrochen und
            der dauerhafte Strom stoppt.
          </p>
        </li>
      </ol>
      <figure className="primer-figure">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt="Batterie, Lampe und Schalter: Bei offenem Schalter ist der Stromkreis unterbrochen, bei geschlossenem Schalter kann Strom fließen."
        />
        <figcaption>
          <strong>Offen oder geschlossen?</strong> Folge dem vollständigen Weg
          von einem Batteriepol durch die Lampe zum anderen Pol. Eine
          Unterbrechung reicht, um den dauerhaften Strom zu stoppen. Die
          Spannung der Batterie kann trotzdem bestehen bleiben.
          <a href={image.textbookUrl} target="_blank" rel="noreferrer">
            Abbildung: OpenStax · CC BY 4.0
          </a>
        </figcaption>
      </figure>
      <aside className="primer-direction">
        <strong>Zwei Richtungen richtig lesen</strong>
        <p>
          Elektronenbewegung im äußeren Metallkreis: <b>Minus → Plus.</b>{" "}
          Technische Stromrichtung in Schaltplänen: <b>Plus → Minus.</b> Der
          technische Pfeil ist eine festgelegte Bezugsrichtung und bedeutet
          nicht, dass positive Atomrümpfe durch den Draht wandern.
        </p>
      </aside>
    </section>
  );
}
