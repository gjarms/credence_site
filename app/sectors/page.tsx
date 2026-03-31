import Link from 'next/link';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { sectorPages } from '@/lib/sectors';

export const metadata = {
  title: 'Sectors & Roles | Credence Talent',
  description:
    'Explore Credence Talent sector coverage across technology hiring, leadership search, cloud and infrastructure recruitment, and global hiring.',
};

export default function SectorsPage() {
  return (
    <main className="min-h-screen bg-[#f8faf9] text-slate-900">
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
    </main>
  );
}
