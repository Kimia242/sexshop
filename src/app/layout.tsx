import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: {
    default: 'Boutique Intime - Plaisir & Confiance',
    template: '%s | Boutique Intime',
  },
  description: 'Boutique premium dédiée aux adultes modernes. Lingerie, sextoys, accessoires et conseils pour votre bien-être intime. Livraison discrète et sécurisée.',
  keywords: [
    'lingerie sexy',
    'sextoys',
    'boutique intime',
    'produits adultes',
    'plaisir couple',
    'bien-être intime',
    'accessoires coquins',
  ],
  authors: [{ name: 'Boutique Intime' }],
  creator: 'Boutique Intime',
  publisher: 'Boutique Intime',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://boutique-intime.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://boutique-intime.fr',
    title: 'Boutique Intime - Plaisir & Confiance',
    description: 'Boutique premium dédiée aux adultes modernes. Découvrez notre collection exclusive de lingerie, sextoys et accessoires.',
    siteName: 'Boutique Intime',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Boutique Intime - Plaisir & Confiance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boutique Intime - Plaisir & Confiance',
    description: 'Boutique premium dédiée aux adultes modernes. Découvrez notre collection exclusive.',
    images: ['/og-image.jpg'],
    creator: '@boutiqueintime',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#E50914" />
        <meta name="msapplication-TileColor" content="#E50914" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
