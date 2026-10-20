"use client";

export default function ErrorRecovery({ retry }) {
  return (
    <main className="loading" role="alert">
      <h1>Die Lernansicht konnte nicht geladen werden.</h1>
      <p>
        Deine gespeicherten Ergebnisse bleiben erhalten. Versuche, die Ansicht
        erneut zu öffnen.
      </p>
      <button className="button button-dark" onClick={retry}>
        Erneut versuchen
      </button>
      <a href="./">Zur Lernübersicht</a>
    </main>
  );
}
