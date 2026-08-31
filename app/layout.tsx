import type { Metadata } from 'next';
import { Archivo, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  variable: '--font-sans',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.escolajazzbarreiro.pt'),
  title: 'Escola de Jazz do Barreiro — José Cardoso Ferreira',
  description: 'Formação em jazz, pop & rock no Barreiro para crianças, jovens e adultos.',
  openGraph: {
    title: 'Escola de Jazz do Barreiro — José Cardoso Ferreira',
    description: 'Formação em jazz, pop & rock no Barreiro para crianças, jovens e adultos.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Escola de Jazz do Barreiro' }],
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escola de Jazz do Barreiro — José Cardoso Ferreira',
    description: 'Formação em jazz, pop & rock no Barreiro para crianças, jovens e adultos.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body className={`${archivo.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}
