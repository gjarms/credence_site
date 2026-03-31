import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { roleCategories } from '@/lib/roles';
import { defaultOgImage } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Roles We Cover',
  description:
    'Explore the role categories Credence Talent supports across leadership, engineering, cloud, infrastructure, security, data, AI, product, and delivery hiring.',
  alternates: {
    canonical: '/roles',
  },
  openGraph: {
    title: 'Roles We Cover | Credence Talent',
    description:
      'Explore the role categories Credence Talent supports across leadership, engineering, cloud, infrastructure, security, data, AI, product, and delivery hiring.',
    url: '/roles',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roles We Cover | Credence Talent',
    description:
      'Explore the role categories Credence Talent supports across leadership, engineering, cloud, infrastructure, security, data, AI, product, and delivery hiring.',
    images: [defaultOgImage],
  },
};

export default function RolesPage() {
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
              Roles We Cover
            </div>
            <h1 className="font-display mt-4 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Search coverage across the roles that shape modern technical teams.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Credence Talent supports leadership, Engineering, Cloud, Infrastructure, Security,
              Data, AI, Product, and Delivery hiring with a more focused, better-calibrated
              search process.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6">
          {roleCategories.map((category) => (
            <article
              key={category.slug}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-950">
                    {category.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">{category.summary}</p>
                  <p className="mt-5 text-sm leading-7 text-slate-700">{category.value}</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                    Typical Roles
                  </div>
                  <div className="mt-5 grid gap-4">
                    {category.roles.map((role) => (
                      <div key={role} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                        <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-slate-200 bg-slate-950 px-8 py-10 text-white shadow-xl lg:px-10">
            <div className="max-w-4xl">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Start A Search
              </div>
              <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight">
                Need support on a role that requires stronger technical and market judgment?
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Share the role brief, hiring context, and team structure at{' '}
                <a href="mailto:hradmin@credencetalent.com" className="font-medium text-white underline decoration-white/20 underline-offset-4">
                  hradmin@credencetalent.com
                </a>
                . We can help shape the role and define the right search approach.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:hradmin@credencetalent.com?subject=Role%20Search%20Discussion"
                  className="inline-flex items-center rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
                >
                  Discuss a Role
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link
                  href="/sectors"
                  className="inline-flex items-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/15"
                >
                  Explore Sector Pages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-slate-500 md:grid-cols-[1.1fr_0.9fr_1fr] lg:px-8">
          <div>
            <div className="font-display text-2xl font-semibold text-slate-950">Credence Talent</div>
            <p className="mt-4 max-w-md leading-7 text-slate-600">
              Search support across leadership, engineering, cloud, platform, infrastructure, security, data, AI, product, and delivery hiring.
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
              <Link href="/sectors" className="transition hover:text-slate-950">
                Sector Pages
              </Link>
            </div>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold text-slate-950">Discuss a Search</div>
            <p className="mt-4 leading-7 text-slate-600">
              Share the hiring brief at{' '}
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
