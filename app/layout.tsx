import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GSSS Trilokpur | Government Senior Secondary School, Himachal Pradesh',
  description:
    'Official website of Government Senior Secondary School, Trilokpur — serving the Surla region of Sirmaur, Himachal Pradesh since 1958. Classes VI to XII, Co-educational, HP State Board.',
  keywords: [
    'GSSS Trilokpur',
    'Government Senior Secondary School Trilokpur',
    'Sirmaur school',
    'Himachal Pradesh government school',
    'school Trilokpur',
    'UDISE 02101003204',
  ],
  authors: [{ name: 'GSSS Trilokpur' }],
  openGraph: {
    title: 'GSSS Trilokpur | Government Senior Secondary School',
    description:
      'Official website of GSSS Trilokpur, Himachal Pradesh. Serving students from Class VI to XII since 1958.',
    url: 'https://gsss-trilokpur.vercel.app',
    siteName: 'GSSS Trilokpur',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GSSS Trilokpur — Government Senior Secondary School',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSSS Trilokpur | Government Senior Secondary School',
    description: 'Official website of GSSS Trilokpur, Sirmaur, Himachal Pradesh.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://gsss-trilokpur.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
