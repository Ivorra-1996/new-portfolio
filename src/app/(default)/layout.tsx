import type { Metadata } from 'next';
import { Cinzel_Decorative, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

// Fuente decorativa (para títulos, navbar, branding)
const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

// Fuente secundaria (para párrafos, contenido)
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // elegí los pesos que quieras
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mi Portfolio Medieval',
  description: 'Ejemplo de fuentes Cinzel Decorative y Cormorant Garamond en Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={cormorantGaramond.className}>{children}</body>
    </html>
  );
}
