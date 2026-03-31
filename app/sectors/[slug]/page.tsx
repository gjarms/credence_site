import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { getSectorBySlug, sectorPages } from '@/lib/sectors';
import { siteName } from '@/lib/site';

type SectorPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return sectorPages.map((sector) => ({ slug: sector.slug }));
}

export function generateMetadata({ params }: SectorPageProps): Metadata {
  const sector = getSectorBySlug(params.slug);

  if (!sector) {
    return {};
  }

  return {
    title: sector.label,
    description: sector.summary,
    alternates: {
      canonical: `/sectors/${sector.slug}`,
    },
    openGraph: {
      title: `${sector.label} | ${siteName}`,
      description: sector.summary,
      url: `/sectors/${sector.slug}`,
      images: [
        {
          url: sector.heroImage,
          alt: sector.label,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${sector.label} | ${siteName}`,
      description: sector.summary,
      images: [sector.heroImage],
    },
  };
}

function InfoList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950">{title}</h2>
      <div className="mt-6 grid gap-4">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
            <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SectorDetailPage({ params }: SectorPageProps) {
  const sector = getSectorBySlug(params.slug);

  if (!sector) {
    notFound();
  }

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
            <Link href="/sectors" className="transition hover:text-slate-950">
              Sectors
            </Link>
            <Link href="/roles" className="transition hover:text-slate-950">
              Roles
            </Link>
          </nav>
        </div>
      </header>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              {sector.eyebrow}
            </div>
            <h1 className="font-display mt-4 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              {sector.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{sector.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Discuss Your Search
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/sectors"
                className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                View All Sector Pages
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <img src={sector.heroImage} alt={sector.label} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoList title="Market Focus" items={sector.marketFocus} />
          <InfoList title="Typical Roles" items={sector.typicalRoles} />
          <InfoList title="Hiring Challenges" items={sector.hiringChallenges} />
          <InfoList title="Why Credence" items={sector.whyCredence} />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-slate-200 bg-slate-950 px-8 py-10 text-white shadow-xl">
            <div className="max-w-4xl">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                When This Search Matters
              </div>
              <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight">
                Signals that this kind of mandate benefits from a more focused search partner
              </h2>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {sector.engagementSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 text-sm leading-7 text-slate-200"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <div className="max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Start a Conversation
            </div>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              Planning a {sector.label.toLowerCase()} search?
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Share the role, team context, timeline, and search priorities at{' '}
              <a href="mailto:hradmin@credencetalent.com" className="font-medium text-slate-950 hover:text-emerald-700">
                hradmin@credencetalent.com
              </a>
              . We can help shape the brief, calibrate the market, and define a more credible shortlist.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-slate-500 md:grid-cols-[1.1fr_0.9fr_1fr] lg:px-8">
          <div>
            <div className="font-display text-2xl font-semibold text-slate-950">Credence Talent</div>
            <p className="mt-4 max-w-md leading-7 text-slate-600">
              Boutique, high-trust search support for leadership and specialist hiring across
              technology, infrastructure, security, and global teams.
            </p>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-slate-950">Explore</div>
            <div className="mt-4 grid gap-3 text-slate-600">
              <Link href="/" className="transition hover:text-slate-950">
                Home
              </Link>
              <Link href="/sectors" className="transition hover:text-slate-950">
                All Sector Pages
              </Link>
              <a href="mailto:hradmin@credencetalent.com" className="transition hover:text-slate-950">
                hradmin@credencetalent.com
              </a>
            </div>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-slate-950">How We Help</div>
            <p className="mt-4 leading-7 text-slate-600">
              We help clients define the brief, calibrate the market, and run a more credible
              search process for critical hires.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
