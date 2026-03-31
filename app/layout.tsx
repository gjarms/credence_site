import './globals.css';
import type { Metadata } from 'next';
import { Lora, Manrope } from 'next/font/google';

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
  title: 'Credence Talent | Global Technology Recruitment',
  description:
    'Credence Talent is a global recruitment partner specializing in leadership and technology hiring across the SDLC, cloud, infrastructure, and security.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Credence Talent',
    description:
      'Trusted search for companies that want to hire with confidence.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  );
}
