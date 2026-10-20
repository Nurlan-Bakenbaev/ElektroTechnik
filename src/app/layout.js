import "@fontsource-variable/manrope";
import "./globals.css";
import LearningExperience from "../components/LearningExperience";

export const metadata = {
  title: "Volt. — Elektrotechnik, die klar wird",
  description:
    "Interaktives Lehrbuch der Elektrotechnik: 13 ausführliche Themen, anschauliche Beispiele, deutsche Begriffe, praktische Simulatoren und Tests mit Lösungsanalyse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <LearningExperience>{children}</LearningExperience>
      </body>
    </html>
  );
}
