import "@fontsource-variable/manrope";
import "./globals.css";
import LearningExperience from "../components/LearningExperience";

export const metadata = {
  title: "Volt. — Elektrotechnik, die klar wird",
  description:
    "Elektrotechnik verstehen: Lernlabor zum Ohmschen Gesetz, 13 Themen, virtuelle Experimente, Rechenaufgaben und Tests mit Lösungsanalyse auf Deutsch.",
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
