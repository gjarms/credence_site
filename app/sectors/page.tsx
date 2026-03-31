import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { sectorPages } from '@/lib/sectors';
import { defaultOgImage } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sectors & Roles',
  description:
    'Explore Credence Talent sector coverage across technology hiring, leadership search, cloud and infrastructure recruitment, and global hiring.',
  alternates: {
    canonical: '/sectors',
  },
  openGraph: {
    title: 'Sectors & Roles | Credence Talent',
    description:
      'Explore Credence Talent sector coverage across technology hiring, leadership search, cloud and infrastructure recruitment, and global hiring.',
    url: '/sectors',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sectors & Roles | Credence Talent',
    description:
      'Explore Credence Talent sector coverage across technology hiring, leadership search, cloud and infrastructure recruitment, and global hiring.',
    images: [defaultOgImage],
  },
};

export default function SectorsPage() {
  return (
    <main className="min-h-screen bg-[#f8faf9] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-slate-950">
            Credence Talent
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <Link href="/" className="transition hover:text-slate-950">
              Home
            </Link>
            <Link href="/engagement-models" className="transition hover:text-slate-950">
              What We Do
            </Link>
            <Link href="/roles" className="transition hover:text-slate-950">
              Roles
            </Link>
            <a href="mailto:hradmin@credencetalent.com" className="transition hover:text-slate-950">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Sectors & Roles
            </div>
            <h1 className="font-display mt-4 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Search support designed for critical hiring environments.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Credence Talent supports companies hiring into leadership, engineering, cloud,
              infrastructure, and international team-building mandates where precision and credibility
              matter.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {sectorPages.map((sector) => (
            <article
              key={sector.slug}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={sector.heroImage}
                alt={sector.label}
                className="h-56 w-full border-b border-slate-200 object-cover"
              />
              <div className="p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                  {sector.eyebrow}
                </div>
                <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                  {sector.label}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{sector.summary}</p>
                <div className="mt-6 grid gap-3">
                  {sector.marketFocus.slice(0, 2).map((point) => (
                    <div key={point} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                      <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href={`/sectors/${sector.slug}`}
                    className="inline-flex items-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                  >
                    Explore Sector
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-slate-500 md:grid-cols-[1.1fr_0.9fr_1fr] lg:px-8">
          <div>
            <div className="font-display text-2xl font-semibold text-slate-950">Credence Talent</div>
            <p className="mt-4 max-w-md leading-7 text-slate-600">
              Boutique search support across leadership, technical, infrastructure, security, fintech, and global hiring environments.
            </p>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-slate-950">Navigate</div>
            <div className="mt-4 grid gap-3 text-slate-600">
              <Link href="/" className="transition hover:text-slate-950">
                Home
              </Link>
              <Link href="/engagement-models" className="transition hover:text-slate-950">
                Engagement Models
              </Link>
              <Link href="/roles" className="transition hover:text-slate-950">
                Roles
              </Link>
            </div>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-slate-950">Discuss a Search</div>
            <p className="mt-4 leading-7 text-slate-600">
              Share the mandate at{' '}
              <a href="mailto:hradmin@credencetalent.com" className="font-medium text-slate-950 hover:text-emerald-700">
                hradmin@credencetalent.com
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
