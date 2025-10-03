import type { Metadata } from 'next';
import { Cinzel_Decorative } from 'next/font/google';
import './globals.css';

// cargamos la fuente con sus variantes
const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700'], // elegí los pesos que uses
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mi Portfolio Medieval',
  description: 'Ejemplo de fuente Cinzel Decorative en Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={cinzelDecorative.className}>{children}</body>
    </html>
  );
}
