import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.escolajazzbarreiro.pt'),
  title: 'Escola de Jazz do Barreiro — José Cardoso Ferreira',
  description: 'Formação em jazz, pop & rock no Barreiro para crianças, jovens e adultos.',
  openGraph: {
    title: 'Escola de Jazz do Barreiro — José Cardoso Ferreira',
    description: 'Formação em jazz, pop & rock no Barreiro para crianças, jovens e adultos.',
    images: [{ url: '/media/hero-palco.jpg', width: 1392, height: 928, alt: 'Escola de Jazz do Barreiro em palco' }],
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escola de Jazz do Barreiro — José Cardoso Ferreira',
    description: 'Formação em jazz, pop & rock no Barreiro para crianças, jovens e adultos.',
    images: ['/media/hero-palco.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
