import type { Metadata } from 'next';
import SvgDefs from '@/components/effects/SvgDefs';
import CursorEffects from '@/components/effects/CursorEffects';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'José Ivorra — Desarrollador Backend',
  description:
    'Portfolio de José Ivorra, desarrollador backend. Forjado en las fraguas del código, con un guiño a la Tierra Media.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=UnifrakturCook:wght@700&family=Work+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <ThemeProvider>
          <SvgDefs />
          {children}
          <CursorEffects />
        </ThemeProvider>
      </body>
    </html>
  );
}
