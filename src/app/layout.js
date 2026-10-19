import '@fontsource-variable/manrope';
import './globals.css';

export const metadata = {
  title: 'volt. — Электротехника, которая становится понятной',
  description: 'Интерактивный учебник электротехники: 13 подробных тем, понятные примеры, немецкие термины, практические тренажёры и тесты с разбором решений.',
};

export default function RootLayout({ children }) {
  return <html lang="ru"><body>{children}</body></html>;
}
