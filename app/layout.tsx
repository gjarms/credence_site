import './globals.css';
import type { Metadata } from 'next';
import { Lora, Manrope } from 'next/font/google';
import { defaultOgImage, siteName, siteUrl } from '@/lib/site';

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

const displayFont = Lora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Credence Talent | Global Technology Recruitment',
    template: `%s | ${siteName}`,
  },
  description:
    'Credence Talent is a global recruitment partner specializing in leadership and technology hiring across the SDLC, cloud, infrastructure, and security.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Credence Talent | Global Technology Recruitment',
    description:
      'Trusted search for companies that want to hire with confidence.',
    type: 'website',
    url: siteUrl,
    siteName,
    locale: 'en_US',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credence Talent | Global Technology Recruitment',
    description:
      'Trusted search for companies that want to hire with confidence.',
    images: [defaultOgImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  );
}
